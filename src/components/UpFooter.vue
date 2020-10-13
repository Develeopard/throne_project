<template>
    <div class="up-footer">

        <div class="up-footer-content">
            <div class="up-left">
                <img class="footer-logo" src="../assets/logo_white.png" alt="">
                <h2 class="up-left-hl">Want to talk about your project?</h2>
                <button class="up-left-call">Let's Schedule a Call</button>
            </div>

            <div class="up-right">
                <!-- LISABON -->
                <div class="city lisabon">
                    <img class="city-img" src="../assets/lisabon.png" alt="">
                    <div class="city-notes">
                        <h2 class="city-hl">LISBON</h2>
                        
                            <p><span>Addres:</span> Rua Adriano Correia de Cordoba 4A, 1600-312</p>
                            <p><span>Phone:</span> +351 35111111</p>
                            <p><span>Email:</span> email@something.com</p>

                    </div>
                </div>

                <!-- LONDON -->
                <div class="city london">
                    <img class="city-img" src="../assets/london.png" alt="">
                    <div class="city-notes">                  
                        <h2 class="city-hl">LONDON</h2>
                        <div class="city-data">
                            <p><span>Addres:</span> John Doe Correia de Opveira 00</p>
                            <p><span>Phone:</span> +351 35111111</p>
                            <p><span>Email:</span> email@something.com</p>
                        </div>
                    </div>
                </div>

                <!-- MILAN -->
                <div class="city milan">
                    <img class="city-img" src="../assets/milan.png" alt="">
                    <div class="city-notes">                  
                        <h2 class="city-hl">MILAN</h2>
                        <div class="city-data">
                            <p><span>Addres:</span> Adriano Del Piero 10</p>
                            <p><span>Phone:</span> +351 35111111</p>
                            <p><span>Email:</span> email@something.com</p>
                        </div>
                    </div>
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
    .up-footer{
        width: 100%;
        background-color: #110b33;


    }

    .up-footer-content{
        margin: 0 auto;
        max-width: 80%;
        background-color: #110b33;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-column-gap: 100px;
        align-items: center;
        justify-content: center;
        color: white;
        padding: 120px 30px;

    }

    /* footer left//////////////////////////////////// */
    .up-left{
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        align-items: start;
    }

    .footer-logo{
        width: 200px;
        margin-bottom: 70px;
    }

    .up-left-hl{
        font-weight: normal;
        font-size: 2rem;
        margin-bottom: 70px;
    }

    .up-left-call{
        display: inline-block;
        border: none;
        outline: none;
        padding: 12px 20px;
        border-radius: 40px;
        font-size: .9rem;
        font-weight: bold;
        color: white;
        background-color: blue;
        transition: all .3s;
        cursor: pointer;
    }

    .up-left-call:hover{
        background-color: whitesmoke;
        color: blue;
    }

    /* footer right ////////////////////////////////////////// */
    .up-right{
        display: grid;
        align-items: start;
        justify-content: right;
        grid-row-gap: 70px;
        /* border: 1px solid yellow; */
    }
    .city{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        /* border: 1px solid rgb(151, 40, 40); */
        align-items: center;
        justify-content: center;

        /* border: 2px solid green; */
        
    }

    .city-img{
        max-width: 50%;
        padding: 0 20px 0 0;
        filter: invert(100%);
        /* align-self: flex-end; */
        justify-self: flex-end;
    }

    .city-notes{
        padding: 0 0 0 40px;
        border-left: 1px solid white;
        display: flex;
        flex-direction: column;
    }

    .city-hl{
        font-size: 1.5rem;
        letter-spacing: 6px;
        margin-bottom: 20px;
    }

    .city-data{
        list-style: none;
        /* border: 2px dotted green; */
    }

    .city-notes p{
        margin-bottom: 10px;
    }

    .city-notes span{
        font-weight: bold;
    }

    @media(max-width: 1200px){
        .city-img{
            max-width: 90%;
        }
    }

    @media(max-width: 1100px){
        .city-img{
            /* padding-right: 30px; */
            max-width: 80%;
        }
    }

    @media(max-width: 970px){
        .up-right{
            grid-row-gap: 50px;
        }
    }

    @media(max-width: 950px){
        .city{
            grid-template-columns: 1fr;
        }

        .city-img{
            max-width: 100%;
            padding: 10px;
            justify-self: center;
        }
    }

    @media(max-width: 820px){
        .up-footer-content{
            grid-template-columns: 1fr;
        }

        .up-left-call{
            margin-bottom: 60px;
        }
    }

    @media(max-width: 674px){
        .up-footer-content{
            max-width: 100%;
        }
    }
</style>