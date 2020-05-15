<template>
  <div class="link-container">
    {{ $t('loginLink.label') }}
    <a class="link" :href="loginLink">{{ $t('loginLink.actionLabel') }}</a>
     {{ $t('loginLink.labelAfter') }}
  </div>
</template>

<script>
export default {
  computed: {
    loginLink () {
      return `https://${this.$route.query.market}.audepart.com/${this.$route.query.locale}/login-create/?select=FormLogin%2F`
    }
  }
}
</script>

<style scoped>
.link-container {
  padding: 0 0.5rem;
}

.link {
  text-decoration: underline;
}

@media (min-width: 1024px) {
  .link-container {
    padding: 0 2rem;
  }
}
</style>
