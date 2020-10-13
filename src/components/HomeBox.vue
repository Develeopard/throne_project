<template>
    <ul class="homebox-list">
        
            <router-link class="homeBox" tag="li" to="/productScope">
                    <i class="box-icon" v-html="homeBox.icon"></i>
                    <h3 class="box-title">{{ homeBox.title }}</h3>
                    <p class="box-text">{{ homeBox.text }}</p>
            </router-link>
      
    </ul>
</template>

<script>
export default {
    name: 'homeBox',
    props: ['homeBox']
}
</script>

<style>
    .homebox-list{
        list-style: none;
    }

    .homeBox{
        /* border: 1px solid black; */
        padding: 30px;
        box-shadow: 0px 0px 40px rgba(109, 107, 107, 0.938);
        text-align: center;
        background-color: white;
        border-radius: 10px;
        cursor: pointer;
        transition: all .125s linear;
    }

    .box-icon{
        font-size: 3.2rem;
        color: blue;
        padding: 20px;
        background-color: rgb(223, 219, 219);
        display: inline-block;
        border-radius: 12px;
        margin-bottom: 20px;
    }

    .box-title{
        font-size: 1.7rem;
        margin-bottom: 12px;
    }

    .box-text{
        color: rgb(158, 155, 155);
        font-size: .9rem;
    }

    .homeBox:hover{
        transform: translateY(-3%);
        box-shadow: 0px 0px 10px rgba(109, 107, 107, 0.938);
    }
</style>