<template>
  <li class="list-group-item" :class="{ active: index === selectedIndex }">
    Server #{{ server.status }}
  </li>
</template>

<script>
  export default {
    props: {
      server: Object,
      index: Number,
      selectedIndex: Number
    }
  }
</script>

<style scoped>
  li {
    cursor: pointer;
  }
</style>

