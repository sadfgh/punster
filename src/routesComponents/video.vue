<template>
    <div>  
            <vcomponent :videodata=videodata></vcomponent>      
    </div>
</template>
<script>
import vcomponent from '../components/vcomponent.vue'
export default {
    data() {
        return {
            videodata:[]
        }
    },
    methods: {
         getdata(){
         this.$http.get('https://api.apiopen.top/getJoke?count=10&type=video').then(responseData =>{
             console.log(responseData.body.result)
              var list =responseData.body.result 
             for(var i=0;i<list.length;i++){
            
                 if(list[i].passtime.substr(0,4) > 2018){
                this.videodata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text,video:list[i].video})
                 }
             }
              console.log(this.videodata)
              
             },()=>{
                 console.log('error')
             })
    }
    },
    mounted() {
        this.getdata()
    },
    components:{
        vcomponent
    }
}
</script>
<style lang="scss">
    
</style>