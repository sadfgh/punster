<template>
    <div>  
         <tcomponent :textdata=textdata></tcomponent>  
    </div>
</template>
<script>
import tcomponent from '../components/tcomponent.vue'
export default {
    data() {
        return {
            textdata:[]
        }
    },
    components:{
        tcomponent
    },
    methods: {
         getdata(){
         this.$http.get('https://api.apiopen.top/getJoke?count=100&type=text').then(responseData =>{
             console.log(responseData.body.result)
              var list =responseData.body.result 
             for(var i=0;i<list.length;i++){
                
                this.textdata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text})
              
             }
            
              
             },()=>{
                 console.log('error')
             })
    }
    },
    mounted() {
      this.getdata()  
    },
}
</script>
<style lang="scss">
    
</style>