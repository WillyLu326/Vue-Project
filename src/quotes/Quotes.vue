<template>
  <div>
    <app-quote-grid :quotes="quotes" :maxQuotes="maxQuotes"></app-quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from './QuoteGrid.vue'

  export default {
    components: {
      appQuoteGrid: QuoteGrid
    },
    data () {
      return {
        quotes: [
          'Sample Quote'
        ],
        maxQuotes: 10
      }
    }
  }

</script>

<style scoped>

</style>

