<template>
<div class="panel-collapse collapse"  role="tabpanel">
  <div class="panel-body">
    <div class="form-horizontal">
        <div class="form-group">
            <label for="title" class="col-sm-2 control-label">提醒名称</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="title" placeholder="" v-model="title" v-validate="title" required>
            </div>
        </div>
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
