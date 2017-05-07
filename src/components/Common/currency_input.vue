<template>
  <span>$<input v-bind:value="value" v-on:input="updateValue($event.target.value)"></span>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    // 不是直接更新值，而是使用此方法来对输入值进行格式化和位数限制
    updateValue: function (value) {
      var formattedValue = value.trim().slice(0, value.indexOf('.') + 3)
      // 通过 input 事件向父节点发出数值
      this.$emit('input', Number(formattedValue))
    }
  }
}
</script>
