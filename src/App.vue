<template>
  <div class="container">
    <app-user></app-user>
    <hr>
    <app-main-user></app-main-user>
  </div>
</template>

<script>
  import User from './components/User.vue'
  import MainUser from './props/MainUser.vue'

  export default {
    components: {
      'app-user': User,
      'app-main-user': MainUser
    }
  }
</script>