<template lang="pug">
  #app
    p(v-show="showValue") {{ value }}
    p(v-if="showValue") {{ value }}
    p(v-else-if="false") {{ value + 'else if'}}
    p(v-else) {{ 'lado else' }}
    ul
      li(v-for="i in items") {{ i }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola Vue!!!',
      value: 'valor',
      showValue: false,
      items: [1, 2, 3, 4, 5]
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
