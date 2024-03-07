<script>
import select_button from './select_button.vue'
import time_line from './time_line.vue'
import fourth from './fourth.vue'
import gram from './gram.vue'
import drawer from './drawer.vue'
export default {
  name: "line",
  components: {
    select_button,
    time_line,
    fourth,
    gram,
    drawer,
  },
}
</script>

<template>
  <div>
<!--    <time_line/>-->
<!--    <drawer/>-->
<!--    <gram/>-->
    <fourth/>
  </div>

</template>

<style scoped>

</style>