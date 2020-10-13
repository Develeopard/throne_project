<template>
  <div class="services-container">
      <div class="services-content">
          <div class="services-text">
              <h1 class="services-hl">
                  Meet our Services
              </h1>
              <p class="services-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae possimus eaque ipsum ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, odio.
              </p>
          </div>
          <div class="services-boxes">
              
                  <homeBox v-for="homeBox in boxes" :key="homeBox" :homeBox="homeBox"
                  ></homeBox>
              
          </div>
      </div>
  </div>
</template>

<script>
    import HomeBox from '@/components/HomeBox.vue'

export default {
    name: 'Home Services',
    data(){
        return{
            boxes:[
                {
                    icon: '<i class="far fa-gem"></i>',
                    title: 'Product Scope',
                    text: 'Donec pretium purus eu dictum cursus. Praesent eget quam a lorem tempus feugiat. Aenean purus quam, interdum id vehicula sed, venenatis non metus. Fusce nec ornare leo.',
                    link: '/productScope'
                },
                {
                    icon: '<i class="far fa-lemon"></i>',
                    title: 'UX/UI',
                    text: 'Donec pretium purus eu dictum cursus. Praesent eget quam a lorem tempus feugiat. Aenean purus quam, interdum id vehicula sed, venenatis non metus. Fusce nec ornare leo.',
                    link: '/productScope'
                },
                {
                    icon: '<i class="far fa-handshake"></i>',
                    title: 'MVP Builder',
                    text: 'Donec pretium purus eu dictum cursus. Praesent eget quam a lorem tempus feugiat. Aenean purus quam, interdum id vehicula sed, venenatis non metus. Fusce nec ornare leo.',
                    link: '/productScope'
                }
            ]
            
        }
    },
    components:{
        homeBox: HomeBox
    }
}
</script>

<style>
   .services-container{
        width: 100%;
        background: rgb(2,0,36);
        background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(255,255,255,1) 0%, rgba(216,239,244,1) 100%);
   }

   .services-content{
       padding: 120px 30px;
       background-image: linear-gradient(to);
       max-width: 80%;
       margin: 0 auto;
   }

   .services-text{
       text-align: center;
   }

   .services-hl{
       font-size: 4rem;
       margin-bottom: 20px;
   }

   .services-txt{
       font-size: 1.6rem;
       font-weight: lighter;
       margin-bottom: 40px;
   }

   .services-boxes{
       display: grid;
       grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
       grid-gap: 40px;
       max-width: 90%;
       margin: 0 auto;
       /* border: 4px solid red; */
   }

   @media(max-width: 1080px){
       .services-content{
           min-width: 100%;
       }

       .services-boxes{
           /* grid-template-columns: 1fr; */
           max-width: 100%;
       }
   }
   
   @media(max-width: 740px){

       .services-boxes{
           grid-template-columns: 1fr;
       }

       .services-hl{
           font-size: 3.2rem;
       }
   }

</style>