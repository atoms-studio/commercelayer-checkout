import _ from 'lodash'
import countries from '@/data/countries'
import { required, requiredIf } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'
import { mapFields } from 'vuex-map-fields'
import CustomerAddressFields from '@/components/fields/CustomerAddressFields'

export const addressMixin = {
  components: {
    CustomerAddressFields
  },
  data () {
    return {
      billing: true
    }
  },
  computed: {
    countries () {
      return countries.filter(country => /AT|BE|CH|CY|CZ|DE|EE|ES|FI|FR|GR|HU|IE|IT|LV|LT|LU|MT|NL|PL|PT|SK|SI|GB/.test(country.code))
    },
    requiresBillingInfo () {
      return this.billing && this.order.requires_billing_info
    },
    showAddressBook () {
      return !_.isEmpty(this.addresses)
    },
    showBillingAddress () {
      return !this._billing_address_clone_id
    },
    showShippingAddress () {
      return !this._shipping_address_clone_id
    },
    ...mapState(['order', 'validations']),
    ...mapFields([
      'customer.addresses',
      'order._billing_address_clone_id',
      'order._shipping_address_clone_id'
    ])
  },
  validations: {
    first_name: { required },
    last_name: { required },
    line_1: { required },
    city: { required },
    country_code: { required },
    state_code: { required },
    zip_code: { required },
    phone: { required },
    billing_info: {
      required: requiredIf(function (model) {
        return this.requiresBillingInfo
      })
    }
  },
  methods: {
    handleBlur (fieldName) {
      this.$v[fieldName].$touch()
    },
    inputLabel (fieldName) {
      return _.capitalize(this.$t(`addresses.${fieldName}`))
    },
    errorMessages (fieldName) {
      const errors = []
      if (!this.$v[fieldName].$dirty) return errors
      !this.$v[fieldName].required && errors.push("Can't be blank")
      return errors
    },
    handleInput () {
      this.updateAddressInvalid()
    }
  },
  mounted () {
    this.updateAddressInvalid()
  }
}
