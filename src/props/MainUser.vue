<template>
  <div class="container cmp">
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <h1>Main User Section</h1>
        <div>UserName: {{ name }}</div>
        <div>Age: {{ age }}</div>
      </div>

      <app-edit-user :name="name" :age="age" 
            @updateName="updateNameHandler($event)"
            @updateAge="updateAgeHandler($event)">
      </app-edit-user>

      <app-add-user 
            @addName="addNameHandler($event)"
            @addAge="addAgeHandler($event)">
      </app-add-user>
    </div>
  </div>
</template>

<script>
  import EditUser from './EditUser.vue'
  import AddUser from './AddUser.vue'

  export default {
    components: {
      'app-edit-user': EditUser,
      'app-add-user': AddUser
    },
    data () {
      return {
        name: 'Willy Lu',
        age: 28
      }
    },
    methods: {
      updateNameHandler (updatedName) {
        this.name = updatedName
      },
      updateAgeHandler (updatedAge) {
        this.age = Number(updatedAge)
      },
      addNameHandler (addedName) {
        this.name = addedName
      },
      addAgeHandler (addedAge) {
        this.age = addedAge
      }
    }
  }
</script>

<style scoped>
  .cmp {
    border: 1px solid rebeccapurple;
    background-color: greenyellow;
  }
</style>

