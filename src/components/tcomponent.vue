<template>
    <div>
        <div class="text"  v-for="item in textdata" :key="item.sid">
             <h2>{{item.name}}</h2>
            <p>
               {{item.text}}
            </p>
        </div>  
           
    </div>
</template>
<script>
export default {
      props:{
        textdata:{
            type:Array,
            required:true
        }
    },
}
</script>
<style lang="scss">
    .text{
        width: 10rem;
        box-sizing: border-box;
        border-radius: .066667rem;
        background-color: rgba(20, 228, 124, 0.5);
        padding: 10px;
        padding-bottom: 25px;
        h2{
           
            margin: 5px;
        
        }
        p{
            width: 100%;
            text-indent: 2em;
            margin: 5px;
            border-radius: 5px;
        }
    }
</style>