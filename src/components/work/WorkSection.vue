<template>
  <div :class="'section ' + section.color">
      <div class="section-content">
          <div :class="'section-text ' + section.txtColor" data-aos="fade-right">
              <h1 class="section-hl">{{ section.headline }}</h1>
              <p class="section-subhl">{{ section.subhl }}</p>
              <p class="section-txt">{{section.text}}</p>
          </div>
          <div class="section-image" data-aos="fade-left">
            <img class="section-img" :src="section.src" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'section',
    props: ['section']
}
</script>

<style>

    .section{
        width: 100%;
    }

    .section.blue{
        background-image: linear-gradient(45deg, rgba(23, 23, 23, 0.04) 0%, rgba(23, 23, 23, 0.04) 32%,rgba(171, 171, 171, 0.04) 32%, rgba(171, 171, 171, 0.04) 100%),linear-gradient(0deg, rgba(173, 173, 173, 0.04) 0%, rgba(173, 173, 173, 0.04) 40%,rgba(55, 55, 55, 0.04) 40%, rgba(55, 55, 55, 0.04) 100%),linear-gradient(157.5deg, rgba(44, 44, 44, 0.04) 0%, rgba(44, 44, 44, 0.04) 52%,rgba(195, 195, 195, 0.04) 52%, rgba(195, 195, 195, 0.04) 100%),linear-gradient(157.5deg, rgba(203, 203, 203, 0.04) 0%, rgba(203, 203, 203, 0.04) 11%,rgba(89, 89, 89, 0.04) 11%, rgba(89, 89, 89, 0.04) 100%),linear-gradient(90deg, rgb(20, 84, 233),rgb(143, 170, 207));
    }

    .section.darkblue{
        background-image: linear-gradient(140deg, rgba(94, 94, 94, 0.04) 0%, rgba(94, 94, 94, 0.04) 40%,rgba(189, 189, 189, 0.04) 40%, rgba(189, 189, 189, 0.04) 100%),linear-gradient(300deg, rgba(186, 186, 186, 0.04) 0%, rgba(186, 186, 186, 0.04) 35%,rgba(254, 254, 254, 0.04) 35%, rgba(254, 254, 254, 0.04) 100%),linear-gradient(226deg, rgba(69, 69, 69, 0.04) 0%, rgba(69, 69, 69, 0.04) 89%,rgba(83, 83, 83, 0.04) 89%, rgba(83, 83, 83, 0.04) 100%),linear-gradient(266deg, rgba(200, 200, 200, 0.04) 0%, rgba(200, 200, 200, 0.04) 76%,rgba(91, 91, 91, 0.04) 76%, rgba(91, 91, 91, 0.04) 100%),linear-gradient(90deg, rgb(53, 25, 237),rgb(15, 161, 235));
    }

    .section.purple{
        background-image: linear-gradient(238deg, rgba(4, 4, 4, 0.05) 0%, rgba(4, 4, 4, 0.05) 56%,rgba(211, 211, 211, 0.05) 56%, rgba(211, 211, 211, 0.05) 100%),linear-gradient(223deg, rgba(96, 96, 96, 0.05) 0%, rgba(96, 96, 96, 0.05) 58%,rgba(161, 161, 161, 0.05) 58%, rgba(161, 161, 161, 0.05) 100%),linear-gradient(263deg, rgba(232, 232, 232, 0.05) 0%, rgba(232, 232, 232, 0.05) 65%,rgba(243, 243, 243, 0.05) 65%, rgba(243, 243, 243, 0.05) 100%),linear-gradient(90deg, rgb(204, 82, 252),rgb(17, 31, 118));
    }

    .section.green{
        background-image: linear-gradient(56deg, rgba(254, 254, 254, 0.05) 0%, rgba(254, 254, 254, 0.05) 69%,rgba(160, 160, 160, 0.05) 69%, rgba(160, 160, 160, 0.05) 100%),linear-gradient(194deg, rgba(102, 102, 102, 0.02) 0%, rgba(102, 102, 102, 0.02) 60%,rgba(67, 67, 67, 0.02) 60%, rgba(67, 67, 67, 0.02) 100%),linear-gradient(76deg, rgba(169, 169, 169, 0.06) 0%, rgba(169, 169, 169, 0.06) 89%,rgba(189, 189, 189, 0.06) 89%, rgba(189, 189, 189, 0.06) 100%),linear-gradient(326deg, rgba(213, 213, 213, 0.04) 0%, rgba(213, 213, 213, 0.04) 45%,rgba(66, 66, 66, 0.04) 45%, rgba(66, 66, 66, 0.04) 100%),linear-gradient(183deg, rgba(223, 223, 223, 0.01) 0%, rgba(223, 223, 223, 0.01) 82%,rgba(28, 28, 28, 0.01) 82%, rgba(28, 28, 28, 0.01) 100%),linear-gradient(3deg, rgba(20, 20, 20, 0.06) 0%, rgba(20, 20, 20, 0.06) 62%,rgba(136, 136, 136, 0.06) 62%, rgba(136, 136, 136, 0.06) 100%),linear-gradient(200deg, rgba(206, 206, 206, 0.09) 0%, rgba(206, 206, 206, 0.09) 58%,rgba(6, 6, 6, 0.09) 58%, rgba(6, 6, 6, 0.09) 100%),linear-gradient(304deg, rgba(162, 162, 162, 0.07) 0%, rgba(162, 162, 162, 0.07) 27%,rgba(24, 24, 24, 0.07) 27%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(186deg, rgba(166, 166, 166, 0.04) 0%, rgba(166, 166, 166, 0.04) 5%,rgba(210, 210, 210, 0.04) 5%, rgba(210, 210, 210, 0.04) 100%),linear-gradient(90deg, rgb(26, 118, 64),rgb(32, 207, 121),rgb(78, 196, 128));
    }

    .section.white{
        background-image: linear-gradient(15deg, rgba(34, 34, 34,0.03) 0%, rgba(34, 34, 34,0.03) 39%,rgba(197, 197, 197,0.03) 39%, rgba(197, 197, 197,0.03) 49%,rgba(244, 244, 244,0.03) 49%, rgba(244, 244, 244,0.03) 100%),linear-gradient(264deg, rgba(86,69,69, 0.54) 0%, rgba(86,69,69, 0.54) 37%,rgba(230, 230, 230,0.03) 37%, rgba(230, 230, 230,0.03) 98%,rgba(224, 224, 224,0.03) 98%, rgba(224, 224, 224,0.03) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255));
    }

    .section-content{
        padding: 120px 30px;
        max-width: 80%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 50px;
    }

    .section-text{
        border: 1px solid black;
        position: relative;
        place-self: center;
        padding: 20px;
    }

    .section-text.white{
        color: white;
    }

    .section-hl{
        margin-bottom: 10px;
    }

    .section-subhl{
        margin-bottom: 30px;
    }

    .section-text::before{
        content: '';
        position: absolute;
        display: block;
        top: 50%;
        right: 100%;

        transform: translateY(-50%);
        width: 9px;
        height: 110%;
        background-color: blue;
    }

    .section-image{
        display: grid;
    }

    .section-img{
        width: 100%;
        place-self: center;
    }

    @media(max-width: 890px){
        .section-content{
            max-width: 100%;
        }
    }

    @media(max-width: 760px){
        .section-content{
            grid-template-columns: 1fr;
            grid-row-gap: 30px;
        }
    }
</style>