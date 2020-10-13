<template>
  <div class="mid-footer">
      <div class="mid-footer-content">

          <ul class="footer-list global">
            <li>
                <h2 class="footer-list-hl">Global</h2>
            </li>
            <li><a class="footer-list-link" href="#0">Work</a></li>
            <li><a class="footer-list-link" href="#0">About us</a></li>
            <li><a class="footer-list-link" href="#0">Blog</a></li>
            <li><a class="footer-list-link" href="#0">News</a></li>
          </ul>

          <ul class="footer-list technology">
              <li>
                  <h2 class="footer-list-hl">Technology</h2>
              </li>
              <li><a class="footer-list-link" href="#0">Tech</a></li>
              <li><a class="footer-list-link" href="#0">Open Source</a></li>
          </ul>

          <ul class="footer-list services2">
              <!-- services2 je klasa zato sto imas vec services klasu ... -->
              <li>
                  <h2 class="footer-list-hl">Services</h2>
              </li>
              <li><a class="footer-list-link" href="#0">Product Scope</a></li>
              <li><a class="footer-list-link" href="#0">UX/UI</a></li>
              <li><a class="footer-list-link" href="#0">MVP Builder</a></li>
          </ul>

          <ul class="footer-list build">
              <li>
                  <h2 class="footer-list-hl">Build</h2>
              </li>
              <li><a class="footer-list-link" href="#0">Play With Pricing</a></li>
              <li><a class="footer-list-link" href="#0">Book a Call</a></li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .mid-footer{
        width: 100%;
        padding: 120px 20px;
        background-color: rgb(29, 24, 43);
    }

    .mid-footer-content{
        max-width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }

    .footer-list{
        list-style: none;
    }

    .footer-list-hl{
        color: white;
    }

    .footer-list li{
        margin-bottom: 20px;
    }

    .footer-list-link{
        color: rgb(134, 111, 111);
        text-decoration: none;
        transition: all .3s;
    }

    .footer-list-link:hover{
        color: white;
    }

    @media(max-width: 340px){
        .mid-footer-content{
            max-width: 100%;
        }
    }
</style>