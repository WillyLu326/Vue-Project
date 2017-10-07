<template>
  <div class="container">
    <app-user></app-user>
    <hr>
    <app-main-user></app-main-user>
    <hr>

  </div>
</template>

<script>
  import User from './components/User.vue'
  import MainUser from './props/MainUser.vue'
  import Parent from './slot/Parent.vue'

  export default {
    components: {
      'app-user': User,
      'app-main-user': MainUser,
      'app-parent': Parent
    }
  }
</script>