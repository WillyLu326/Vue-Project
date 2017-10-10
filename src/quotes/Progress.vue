<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar" 
         aria-valuemin="0" aria-valuemax="100"
         :style="{ width: curtQuotes / maxQuotes *100 + '%' }">
      {{ curtQuotes }} / {{ maxQuotes }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['curtQuotes', 'maxQuotes']
  }
</script>

<style>

</style>

