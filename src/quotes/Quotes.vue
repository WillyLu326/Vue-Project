<template>
  <div>
    <app-header @addQuote="addQuoteHandler"></app-header>
    <app-quote-grid :quotes="quotes" :maxQuotes="maxQuotes"></app-quote-grid>
  </div>
</template>

<script>
  import QuoteGrid from './QuoteGrid.vue'
  import Header from './Header.vue'

  export default {
    components: {
      appQuoteGrid: QuoteGrid,
      appHeader: Header
    },
    data () {
      return {
        quotes: [
          'Sample Quote'
        ],
        maxQuotes: 10
      }
    },
    methods: {
      addQuoteHandler (quote) {
        this.quotes.push(quote)
      }
    }
  }

</script>

<style scoped>

</style>

