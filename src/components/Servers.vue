<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <app-server v-for="(server, index) in servers" v-bind:key="server"
                :server="server" :index="index" :selectedIndex="selectedIndex"
                @click.native="goToServerDetail(server, index)">
      </app-server>
    </ul>
  </div>
</template>

<script>
  import Server from './Server.vue'
  import { EventBus } from './../main.js'

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
        ],
        selectedIndex: -1
      }
    },
    methods: {
      goToServerDetail (server, index) {
        this.selectedIndex = index
        this.EventBus.$emit('sever-status', {
          status: server.status,
          index: index
        })
      }
    }
  }
</script>
