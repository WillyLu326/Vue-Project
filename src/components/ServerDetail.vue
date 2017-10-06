<template>
  <div class="col-xm-12 col-sm-6">
      <h4>Server Details</h4>
  </div>
</template>

<script>
  import { EventBus } from './../main.js'

  export default {
    data() {
      return {
        status: null,
        index: -1
      }
    },
    created () {
      this.EventBus.$on('server-status', obj => {
        this.status = obj.status
        this.index = obj.index
      })
    }
  }
</script>
