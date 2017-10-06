<template>
  <div class="col-xm-12 col-sm-6">
      <h4 v-if="!status">Server Details</h4>
      <div v-else>
        <h4>Status: {{ status }}</h4>
        <hr>
        <button class="btn btn-success">Update</button>
      </div>
  </div>
</template>

<script>
  import { EventBus } from './../main.js'

  export default {
    data () {
      return {
        status: null,
        index: -1
      }
    },
    create () {
      EventBus.$on('server-status', obj => {
        this.status = obj.status
        this.index = obj.index
      })
    }
  }
</script>
