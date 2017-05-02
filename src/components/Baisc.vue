<template>
<div>
  <p>{{ address }}</p>
  <input v-model="address">
</div>
</template>
<script>
  export default {
    data () {
      return {
        address: ''
      }
    }
  }
</script>
