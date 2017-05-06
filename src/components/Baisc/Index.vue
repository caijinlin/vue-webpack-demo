<template>
  <div class="col-md-6 block-basic">
    <div class="form-group row">
      <label class="col-md-3 control-lable" for="name">
         输入
      </label>
      <div class="col-md-9">
        <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="请输入提醒名称">
      </div>
    </div>
    <div class="form-group row">
        <label class="col-md-3 control-lable">radio选中</label>
        <div class="col-md-9">
          <input type="radio" value="1" name="is_checked" v-model="is_checked">是</input>
          <input type="radio" value="0" name="is_checked" v-model="is_checked">否</input>
          <label v-if="is_checked == 1">
              上一步选择是才会出来
          </label>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-md-3 control-lable">click事件</label>
        <div class="col-md-9">
          <button v-on:click="reverseMessage">点击修改值</button>
        </div>
    </div>
    <div class="form-group row">
        <label class="col-md-3 control-label">列表</label>
        <div class="col-md-9">
          <ul>
            <todo-item v-for="item in todos" :todo="item"></todo-item>
          </ul>
        </div>
    </div>
  </div>
</template>
<style type="text/css">
  .block-basic {
    padding: 40px;
  }
</style>
<script>
  export default {
    data () {
      return {
        name: '提醒名称',
        is_checked: '',
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ]
      }
    },
    methods: {
      reverseMessage () {
        this.name = '哈哈哈'
      }
    },
    components: {
      'todo-item': {
        props: ['todo'],
        template: '<li>{{ todo.text }}</li>'
      }
    }
  }
</script>
