<template>
  <div class="benefit">
      <div class="benefit-content">
          <div class="benefit-text">
              <h1 class="benefit-hl">Clients who benefited</h1>
              <p class="benefit-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div class="benefit-logos">
            <div class="benefit-logo">
                <img src="https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/08144031/client__logo-mckinsey-and-company.svg" alt="">
            </div>
            <div class="benefit-logo">
                <img src="https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/08144018/client__logo-ibm.svg" alt="">
            </div>
            <div class="benefit-logo">
                <img src="https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/08143929/client__logo-apiax.svg" alt="">
            </div>
            <div class="benefit-logo">
                <img src="https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/08143922/client__logo-alix-partners.svg" alt="">
            </div>
            <div class="benefit-logo">
                <img src="https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/08144039/client__logo-quartal-financial-solutions.svg" alt="">
            </div>
            <div class="benefit-logo">
                <img src="https://s3-eu-west-1.amazonaws.com/altario-wordpressmedia/wp-content/uploads/2020/04/08144004/client__logo-fullcube.svg" alt="">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .benefit{
        width: 100%;
        background-color: #f7f9fd;
    }

    .benefit-content{
        max-width: 80%;
        margin: 0 auto;
        padding: 120px 20px;
    }

    .benefit-text{
        text-align: center;
    }

    .benefit-hl{
        font-size: 4rem;
        line-height: 1.4;
    }

    .benefit-txt{
        font-size: 1.6rem;
        font-weight: lighter;
        line-height: 1.4;
    }

    /* LOGOS//////////////////////////////////////// */
    .benefit-logos{
        /* border: 2px solid red; */
        max-width: 70%;
        margin: 100px auto 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-column-gap: 40px;
        grid-row-gap: 30px;
        
    }

    .benefit-logo{
        max-width: 150px;
        height: 100px;
        place-self: center;
    }

    .benefit-logo img{
        width: 100%;
        height: 100%;
    }

    @media(max-width: 1200px){
        .benefit-logos{
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        }
    }

    @media (max-width: 580px){
        .benefit-content{
            max-width: 100%;
        }
        .benefit-hl{
            font-size: 3.2rem;
        }
    }
</style>