<template>
  <div class="bottom-footer">
      <div class="bottom-footer-content">
         <p><span>© 2020 Altar.io</span> all rights reserved.</p>
         <ul class="bottom-social-list">
             <li><a href="#0"><i class="fab fa-linkedin-in"></i></a></li>
             <li><a href="#0"><i class="fab fa-facebook-square"></i></a></li>
             <li><a href="#0"><i class="fab fa-twitter-square"></i></a></li>
         </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .bottom-footer{
        width: 100%;
        background-color: rgb(10, 10, 36);
    }

    .bottom-footer-content{
        max-width: 80%;
        margin: 0 auto;
        padding: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: white;
    }

    .bottom-footer-content span{
        font-weight: bold;
    }

    .bottom-social-list{
        display: flex;
        align-items: center;
        list-style: none;
        
    }

    .bottom-social-list a{
        margin-left: 40px;
        color: white;
    }

    @media(max-width: 730px){
        .bottom-footer-content{
            max-width: 100%;
            flex-direction: column;
            align-items: start;
        }

        .bottom-social-list{
            margin-top: 30px;
        }

        .bottom-social-list a{
            padding: 0 10px;
        }
    }
</style>