<template>
  <v-app>
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  mounted () {
    window.addEventListener('CookiebotOnAccept', () => {
      if (window.Cookiebot.consent.preferences) {
        this.$gtm.trackEvent({
          event: 'cookieconsent_preferences'
        })
      }

      if (window.Cookiebot.consent.statistics) {
        this.$gtm.trackEvent({
          event: 'cookieconsent_statistics'
        })
      }

      if (window.Cookiebot.consent.marketing) {
        this.$gtm.trackEvent({
          event: 'cookieconsent_marketing'
        })
      }
    })
  }
}
</script>
