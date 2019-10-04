import _ from 'lodash'
import countries from '@/data/countries'
import { required, requiredIf } from 'vuelidate/lib/validators'
import { mapState } from 'vuex'

export const addressMixin = {
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
    ...mapState(['order'])
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
