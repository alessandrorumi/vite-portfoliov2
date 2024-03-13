<script>
import ArrowUp from './components/ArrowUp.vue'

export default {
  components: {
    ArrowUp
  }
}
</script>

<template>
    <router-view></router-view>
    <ArrowUp/>
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
