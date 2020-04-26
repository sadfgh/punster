<template>
    <div>  
        <icomponent :imgdata=imgdata></icomponent>
    </div>
</template>
<script>
import icomponent from '../components/icomponent.vue'
export default {
    data() {
        return {
            imgdata:[]
        }
    },
    methods: {
        getdata(){
         this.$http.get('https://api.apiopen.top/getJoke?count=30&type=image').then(responseData =>{
             console.log(responseData.body.result)
              var list =responseData.body.result 
             for(var i=0;i<list.length;i++){
            
                
                this.imgdata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text,image:list[i].images})
               
             }
              console.log(this.imgdata)
              
             },()=>{
                 console.log('error')
             })
             this.$http.get('https://api.apiopen.top/getJoke?count=30&type=gif').then(responseData =>{
             console.log(responseData.body.result)
              var list =responseData.body.result 
             for(var i=0;i<list.length;i++){
            
              
                this.imgdata.push({sid:list[i].sid,type:list[i].type,name:list[i].name,text:list[i].text,gif:list[i].images})
               
             }
              console.log(this.imgdata)
              
             },()=>{
                 console.log('error')
             })
    }
    },
    components:{
        icomponent
    },
    mounted() {
        this.getdata()
    },
}
</script>
<style lang="scss">
    
</style>