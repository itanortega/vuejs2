<template lang="pug">
  #app
    input(v-model="name")
    input(v-model="lastName")

    p {{ fullName }}
    br
    input(type="date" v-model="fechanac")
    p {{edad}}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      name: '',
      lastName: '',
      fechanac: ''
    }
  },
  computed: {
    fullName () {
      return `${this.name} ${this.lastName}`
    },
    edad () {
      var age = ''
      if (this.fechanac !== '') {
        var fn = new Date(this.fechanac)
        var a = parseInt(new Date().getFullYear()) - parseInt(fn.getFullYear())
        age = a
        // falta evaluar los meses, los dias y las horas
        return age
      } else {
        return age
      }
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss'
</style>
