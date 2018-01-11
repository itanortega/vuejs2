<template lang="pug">
  #app
    h1 {{ msg }}
    p {{ 1+1 }}
    p {{ 'hola' + 'mundo' }}
    p {{ person.name }}
    p {{ person.name.toUpperCase() }}
    p {{ JSON.stringify(person) }}
    p {{ true ? 'true' : 'false' }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Hola vue!',
      person: {
        name: 'Juan'
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
