<template>
  <div>
    <h2>User Information</h2>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-detail></app-server-detail>
    </div>
  </div>
</template>

<script>
  import Servers from './Servers.vue'
  import ServerDetail from './ServerDetail.vue'
  export default {
    components: {
      'app-servers': Servers,
      'app-server-detail': ServerDetail
    }
  }
</script>
