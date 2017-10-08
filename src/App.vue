<template>
  <div class="container">
    <app-user></app-user>
    <hr>
    <app-main-user></app-main-user>
    <hr>
    <app-parent>
      <div>
        <h3>This is content 1</h3>
        <h4>This is content 2</h4>
        <h4>This is content 3</h4>
        <h4>This is content 4</h4>
      </div>
    </app-parent>
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