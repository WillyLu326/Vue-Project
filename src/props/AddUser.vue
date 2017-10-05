<template>
  <div class="col-xs-12 col-sm-6 cmp">
      <h4>Add User Into Edit</h4>
      <div class="row form-group">
          <div class="col-sm-3">
              <label for="name">Name: </label>
          </div>
          <div class="col-sm-9">
              <input type="text" class="form-control" name="name" v-model="name">
          </div>
      </div>

      <div class="row form-group">
          <div class="col-sm-3">
              <label for="age">Age: </label>
          </div>
          <div class="col-sm-9">
              <input type="text" class="form-control" name="age" v-model="age">
          </div>
      </div>

      <button class="btn btn-warning">Create Into Edit(Route to Parent)</button>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                name: '',
                age: ''
            }
        }
    }
</script>

<style scoped>
    .cmp {
        border: 1px solid blanchedalmond;
        background-color: skyblue;
        padding: 10px;
    }
</style>
