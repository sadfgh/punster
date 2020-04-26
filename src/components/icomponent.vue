<template>
    <div>
        <div class="img" v-for="item in imgdata" :key="item.sid">
            <h2>{{item.name}}</h2>
            <p>{{item.text}}</p>
            <img v-if="item.type === 'image'" :src="item.image" alt="">
            <img v-else :src="item.gif" alt="">
        </div>
        
    </div>
</template>
<script>
export default {
     props:{
        imgdata:{
            type:Array,
            required:true
        }
    },
}
</script>
<style lang="scss">
    .img{
        box-sizing: border-box;
        padding: 10px;
        width:10rem;
        h2{
            margin: 5px;
            margin-top: 20px;
            width: 100%;
           
           
            text-align: center;

        }
        p{
            margin: 5px;
            width: 100%;
           
            text-align: center;
        }
        img{
            width: 100%;
          
        }
    }
</style>