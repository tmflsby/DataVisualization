import { ref, computed, watch, onMounted, getCurrentInstance } from 'vue'

export default function useTest () {
  const count = ref(1)

  const increment = () => {
    count.value++
  }

  const doubleCount = computed(() => count.value * 2)

  console.log(getCurrentInstance())
  const { ctx } = getCurrentInstance()
  console.log(ctx.$router.currentRoute.value)
  const gotoAbout = () => {
    ctx.$router.push('/about')
  }

  const number = computed(() => ctx.$store.state.number)

  const updateNumber = () => {
    // ctx.$store.commit('SET_NUMBER', count.value * 100)
    ctx.$store.dispatch('setNumber', count.value * 100)
  }

  // const aa = computed(() => ctx.$store.state.a.aa)
  const aa = computed(() => ctx.$store.getters.aaValue)

  const updateAA = () => {
    ctx.$store.commit('SET_AA', aa.value + 1)
  }

  // const bb = computed(() => ctx.$store.state.b.bb)
  const bb = computed(() => ctx.$store.getters.bbValue)

  watch(() => count.value, () => {
    console.log('state count changed:' + count.value)
  })

  onMounted(() => {
    console.log('onMounted...')
  })

  return {
    count,
    doubleCount,
    number,
    aa,
    bb,
    increment,
    gotoAbout,
    updateNumber,
    updateAA
  }
}
