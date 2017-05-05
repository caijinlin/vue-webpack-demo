<template>
  <div class="col-md-6">
    <div class="form-group">
      <label class="col-md-3 control-lable" for="name">
        提醒名称
      </label>
      <div class="col-md-9">
        <input type="text" name="name" id="name" class="form-control" placeholder="请输入提醒名称">
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        title: ''
      }
    }
  }
</script>
