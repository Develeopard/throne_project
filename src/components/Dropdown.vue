<template>
  <div class="dropdown">
        <span @mouseover="isOpen = true" 
             @mouseleave="isOpen = false"
            class="services" >Services <i class="fas fa-chevron-up"></i>

        <transition name="fade" appear>
            <ul class="popup" 
            v-if="isOpen" 
            >

                <router-link class="popup-box" tag="li" to="/productScope"><a class="popup-link">Product Scope <i class="icon far fa-gem"></i></a>
                <p class="popup-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reiciendis!</p></router-link>

                <router-link class="popup-box" tag="li" to="/productScope"><a class="popup-link">Product Scope <i class="icon far fa-lemon"></i></a>
                <p class="popup-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reiciendis!</p></router-link>

                <router-link class="popup-box" tag="li" to="/productScope"><a class="popup-link">Product Scope <i class="icon far fa-handshake"></i></a>
                <p class="popup-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, reiciendis!</p></router-link>
                
            </ul>
        </transition>
        </span>
  </div>
</template>

<script>
export default {
    data (){
        return{
            isOpen: false
        }
    }
}
</script>

<style>
    .fade-enter-active,
    .fade-leave-active{
        transition: all .2s ease-in-out;
    }

    .fade-enter,
    .fade-leave-to{
        opacity: 0;
        transform: translateY(80px) !important;
    }
    
    .services{
        /* border: 1px solid black; */
        position: relative;
        padding: 20px 0px;
    }

    .services::after{
        content: '';
        position: absolute;
        display: block;
        top: 67%;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        transform: scaleX(0);
        background-color: black;
        transform-origin: bottom right;
        transition: transform 0.2s linear;
    }

    .services:hover::after{
        transform: scaleX(1);
        transform-origin: bottom left;
    }

    .popup{
        background-color: rgb(255, 255, 255);
        position: absolute;
        transform: translateY(50px);
        width: 800px;
        display: flex;
        top: 0;
        left: -670px;
        right: 0;
        list-style: none;
        border-radius: 5px;
        box-shadow:  0px 0px 4px rgb(158, 156, 156);
        /* bottom: 0; */    
    }

    .popup-box{
        padding: 20px 20px;
    }

    .popup-link{
        color: black;
        text-decoration: none;
        font-size: 1rem;
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: flex-end;
        justify-self: end;
        /* border: 1px solid black; */
    }

    .icon{
        /* border: 1px solid yellow; */
        color: blue;
        padding: 10px;
        background-color: rgb(201, 197, 197);
        border-radius: 12px;
        font-size: 1.4rem;
        margin-right: 30px;
    }

    .popup-text{
        color: gray;
        margin-top: 10px;
    }

    .popup-box:hover{
        background-color: blue;
    }

    .popup-box:hover .popup-link{
        color: white;
    }

    .popup-box:hover .popup-text{
        color: white;
    }

    .popup-box:hover .icon{
        color: white;
        background-color: rgb(90, 90, 245);
    }


</style>