<template>
  <button @click="increment">{{ count }}</button>
  double count: {{ doubleCount }}
  <button @click="gotoAbout">go to about</button>
  vuex number: {{ number }}
  <button @click="updateNumber">update number</button>
  <div>
    vuex.a.aa: {{ aa }}
    vuex.b.bb: {{ bb }}
    <button @click="updateAA">update aa</button>
  </div>
</template>

<script>
import useTest from '@/views/useTest'
export default {
  setup () {
    return useTest()
  }
}
</script>

<style scoped>

</style>
