<template>
    <div class="home"> 
      <tcomponent :textdata=textdata></tcomponent>
      <icomponent :imgdata=imgdata></icomponent>
      <vcomponent :videodata=videodata></vcomponent>
      

    </div>
</template>
<script>
import tcomponent from '../components/tcomponent.vue'
import vcomponent from '../components/vcomponent.vue'
import icomponent from '../components/icomponent.vue'
export default {
    data() {
        return {
           videodata:[],
           imgdata:[],
           textdata:[]
        }
    },
    methods: {
     getdata(){
         this.$http.get('https://api.apiopen.top/getJoke?count=100').then(responseData =>{
             console.log(responseData.body.result)
             var list =responseData.body.result 
             for(var i=0;i<list.length;i++){
                 if(list[i].type == 'video'){
                      if(list[i].passtime.substr(0,4) > 2018){
                     this.videodata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text,video:list[i].video})
                      }
                 }else if(list[i].type == 'image'){
                     this.imgdata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text,image:list[i].images})
                 }else if(list[i].type == 'gif'){
                     this.imgdata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text,gif:list[i].images})
                 }else{
                     this.textdata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text})
                 }
                 
             }
             console.log(this.videodata)
             console.log(this.imgdata)
             console.log(this.gifdata)
             console.log(this.textdata)
         },() =>{
             console.log('加载失败')
         })
     }
    },
    components:{
        tcomponent,
        vcomponent,
        icomponent
    },
    mounted() {
        this.getdata()
    },
    
}
</script>
<style lang="scss">
    .home{
        width: 10rem;
        li{
            list-style: none;
            margin: 20px;
            padding: 10px;
        }
    }
</style>