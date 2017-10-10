<template>
  <div class="row">
    <div class="col-sm-12">
      <h2 v-if="!quotes || quotes.length === 0">There is no quotes</h2>
    </div>
    <app-quote v-for="(quote, index) in quotes" 
               v-bind:key="index"
               @click.native="deleteQuote(index)">
        {{ quote }}
    </app-quote>
  </div>
</template>

<script>
  import Quote from './Quote.vue'

  export default {
    components: {
      appQuote: Quote
    },
    props: ['quotes', 'maxQuote'],
    methods: {
      deleteQuote (index) {
        this.$emit('deleteQuote', index)
      }
    }
  }

</script>
