<template>
  <div class="col-xs-12 col-sm-6 cmp">
    <h4>Edit User</h4>
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

    <button class="btn btn-success" @click="updateNameAndAge">Update</button>
  </div>
</template>

<script>
  export default {
    props: {
      name: String,
      age: Number
    },
    methods: {
      updateNameAndAge () {
        this.$emit('updateName', this.name)
        this.$emit('updateAge', this.age)
      }
    }
  }
</script>

<style scoped>
.cmp {
  border: 1px solid pink;
  padding: 10px;
  background: orangered;
}
</style>

