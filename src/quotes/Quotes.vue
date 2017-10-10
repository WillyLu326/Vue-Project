<template>
  <div>
    <app-header @addQuote="addQuoteHandler"></app-header>
    <app-progress :curtQuotes="quotes.length" :maxQuotes="maxQuotes"></app-progress>
    <br>
    <app-quote-grid :quotes="quotes" :maxQuotes="maxQuotes" @deleteQuote="deleteQuoteHandler"></app-quote-grid>
    <br>
    <div class="row">
      <div class="col-sm-12">
        <div class="alert alert-info text-center">Info: Click to delete it</div>
      </div>
    </div>
  </div>
</template>

<script>
  import QuoteGrid from './QuoteGrid.vue'
  import Header from './Header.vue'
  import Progress from './Progress.vue'

  export default {
    components: {
      appQuoteGrid: QuoteGrid,
      appHeader: Header,
      appProgress: Progress
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
        if (this.quotes.length >= this.maxQuotes) {
          return alert('Plz delete some quotes')
        }
        this.quotes.push(quote)
      },
      deleteQuoteHandler (index) {
        this.quotes.splice(index, 1)
      }
    }
  }

</script>

<style scoped>

</style>

