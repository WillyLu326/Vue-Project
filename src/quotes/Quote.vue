<template>
  <div class="col-sm-6 col-md-4 col-lg-3 col-xl-3">
    <div class="quote">
      <slot></slot>
    </div>
  </div>
</template>

<style>
  .quote {
    margin: 5px 0px;
    border: 1px solid black;
    border-radius: 10px;
    background: grey;
    color: white;
    cursor: pointer;
    padding: 26px;
    text-align: center;
  }
  .quote:hover {
    background: pink;
    color: black;
  }
</style>
