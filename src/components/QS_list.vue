<template>
  <div class="qs-list">
    <ul>
        <li></li>
        <li>标题</li>
        <li>截止时间</li>
        <li>状态</li>
        <li>操作<span>+新建问卷</span></li>
    </ul>
    <template>
        <ul>
            <li><input type="checkbox" v-model="item.checked"></li>
            <li>{{item.title}}</li>
            <li>{{item.time}}</li>
            <li :class="item.state === 'inissue'? 'inissue' : ''">{{item.stateTitle}}</li>
            <li>
                <button>编辑</button>
                <button>删除</button>
                <a>查看问卷</a>
                <button>查看数据</button>
            </li>
        </ul>
    </template>
  </div>
</template>
<script>
import storage from '../store.js'
export default {
    name : 'qsList',
    data() {
        return {
            qsList: [],
            showDialog: false,
            iterator: {},
            info: ''
        }
    },
    mounted() {
        if (storage.get() != null){

        }else{
            storage.save([
                {
                    'num':1,
                    'title':'第一份问卷',
                    'time':'inissue',
                    'stateTitle' : '发布中',
                    'checked' : false,
                    'question' : [
                        {'num':'Q1', 'title': '单选题', 'type':'radio',''}
                    ]
                }
            ])
        }
    }
  
}
</script>
<style lang="scss" scoped>
@import '../style/QS_list.scss'
</style>

