<template>
  <form>
    <div class="row form-group">
      <div class="col-sm-12">
        <label for="name"><h1>New Quote</h1></label>
      </div>
      <div class="col-sm-12">
        <input class="form-control" type="text" id="name" v-model="newQuote">
      </div>
      <div class="col-sm-6">
        <br>
        <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
      </div>
    </div>
  </form>
</template>

<script>
  export default {
    data () {
      return {
        newQuote: ''
      }
    },
    methods: {
      addQuote () {
        this.$emit('addQuote', this.newQuote)
      }
    }
  }
</script>

<style>

</style>
