<template>
    <div>
        <div class="vcomponent" :style="contentStyleObj" v-for="item in videodata" :key="item.sid">
            <video :src="item.video" controls></video>
        <div>
             <h2>{{item.name}}</h2>
             <p>{{item.text}}</p>
        </div>
        </div>
        

       
    </div>
</template>
<script>
export default {
    props:{
        videodata:{
            type:Array,
            required:true
        }
    },
    data() {
        return {
         contentStyleObj:{
　　　　　　height:''
　　　　}
        }
    },
    methods: {
        getHeight(){
      this.contentStyleObj.height=document.documentElement.clientHeight+'px';
    }
    },
    created() {
        window.addEventListener('resize', this.getHeight);
    this.getHeight()
    },
    mounted() {
    
    },
    destroyed() {
          window.removeEventListener('resize', this.getHeight)
    },
    

}
</script>
<style lang="scss">
    .vcomponent{
        position: relative;
        width:10rem ;
        height: 500px;
        background-color:rgba($color: #000000, $alpha: .5);
        video{
            width: 100%;
            height:100%;

        }
        div{
            position: absolute;
            left: .133333rem;
            bottom: 1.6rem;
            width: 6rem;
            height: 3rem;
            color: white;
             text-indent: 2em;
            h2{
               
                width: 100%;
                height: .666667rem;
                line-height: .666667rem;
               
            }
            p{
               
                width: 100%;
               
            }
        }
    }
</style>