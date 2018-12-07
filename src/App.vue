<template>
  <div id="app">
    <keep-alive :include="$s_cachedView" >
      <router-view :key="key" />
    </keep-alive>
  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapState('APP', [
      '$s_cachedView'
    ]),
    key () {
      return this.$route.path
    }
  },
  watch: {
    'route' () {
      this.$m_addView(this.$route)
    }
  },
  created () {
  },
  mounted () {
    this.$m_addView(this.$route)
  },
  methods: {
    ...mapMutations('APP', [
      '$m_addView'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
