<template>
  <p>{{ $t('hello') }}</p>
</template>

<script>
export default {
  name: 'HelloI18n'
}
</script>

<i18n>
{
  "en": {
   "hello": "Hello i18n in SFC!"
  },
  "fr": {
    "hello": "bonjour i18n dans un SFC"
  }
}
</i18n>
