<template>
    <div>
    <router-view></router-view>


<mt-tabbar fixed>
  <mt-tab-item id="首页">
    
    <router-link to="/home">首页</router-link>
  </mt-tab-item>
  <mt-tab-item id="搞笑视频">
    
    <router-link to="/video">搞笑视频</router-link>
  </mt-tab-item>
  <mt-tab-item id="搞笑图片">
   
    <router-link to="/img">搞笑图片</router-link>
  </mt-tab-item>
  <mt-tab-item id="搞笑段子">
    
   <router-link to="/text">
   搞笑段子
   </router-link>
  </mt-tab-item>
</mt-tabbar>
    </div>
</template>

<script>

import { Tabbar, TabItem } from 'mint-ui';

 export default{
     data() {
         return {
            
         }
     },
     components:{
      Tabbar,
      TabItem
     },
     methods: {

     }
 }
</script>
<style lang="scss">
html,body,div,h1,h2,h3,h4,h5,h6,p{
  margin:0;
  padding: 0;
}
    body{
        font-size: 16px;
        .mint-tab-item{
          padding: 15px 0;
          background-color: black;
          a{
            text-decoration: none;
            font-size: 14px;
            color: rgba($color: #ffffff, $alpha: .5);
          }
        }
    }
</style>