<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <!-- <li class="list-group-item" v-bind:key="server" v-for="server in 5">
        Server # {{ server }}
      </li> -->
      <app-server></app-server>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue'

  export default {
    components: {
      'app-server': Server
    },
    data () {
      return {
        servers: [
          { data: 0, status: 'Normal' },
          { data: 1, status: 'Critical' },
          { data: 2, status: 'Unknown' },
          { data: 3, status: 'Normal' }
        ]
      }
    }
  }
</script>
