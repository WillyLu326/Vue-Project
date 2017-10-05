<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h1>Main User Section</h1>
      </div>
      <app-edit-user></app-edit-user>
    </div>
  </div>
</template>

<script>
  import EditUser from './EditUser.vue'

  export default {
    components: {
      'app-edit-user': EditUser
    }
  }
</script>
