<template>
  <div class="container">
    <h1>Router</h1>
    <hr>
    <router-view></router-view>
    <app-user></app-user>
    <hr>
    <app-main-user></app-main-user>
    <hr>
    <app-parent>
      <div>
        <h3>This is content 1</h3>
        <h4>This is content 2</h4>
        <h4>This is content 3</h4>
        <h4>This is content 4</h4>
      </div>
    </app-parent>
    <hr>
    <app-quotes></app-quotes>
    <hr>
    <app-forms></app-forms>
  </div>
</template>

<script>
  import User from './components/User.vue'
  import MainUser from './props/MainUser.vue'
  import Parent from './slot/Parent.vue'
  import Quotes from './quotes/Quotes.vue'
  import Forms from './forms/Forms.vue'

  export default {
    components: {
      'app-user': User,
      'app-main-user': MainUser,
      'app-parent': Parent,
      appQuotes: Quotes,
      appForms: Forms
    }
  }
</script>