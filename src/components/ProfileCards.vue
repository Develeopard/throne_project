<template>
    <div class="profile-content">
        <div class="profile-cards">
            <profileCard
            v-for="profileCard in cards"
            :key="profileCard.title"
            :profileCard="profileCard"></profileCard>
        </div>
    </div>
</template>

<script>

    import ProfileCard from './ProfileCard';

export default {
    components: {
        profileCard: ProfileCard
    },
    data(){
        return{
            cards:[
               { 
                   title: 'Need a Team?',
                    text: 'Donec scelerisque, mi id convallis gravida, enim nisi sagittis nulla, at condimentum mauris nisl iaculis odio. Aliquam id accumsan mauris. Donec ut tempor diam. Suspendisse rhoncus hendrerit est, eget sagittis est. Aliquam molestie dolor nulla, id ornare libero varius in.',
                    src: require('../assets/lopes-smile-square.jpg'),
                    btn: 'email john'
                },
                {
                    title: 'Building an MVP?',
                    text: 'Donec scelerisque, mi id convallis gravida, enim nisi sagittis nulla, at condimentum mauris nisl iaculis odio. Aliquam id accumsan mauris. Donec ut tempor diam. Suspendisse rhoncus hendrerit est, eget sagittis est. Aliquam molestie dolor nulla, id ornare libero varius in.',
                    src: require('../assets/daniel-smile-square.jpg'),
                    btn: 'email doe'
                },
                {
                    title: 'Talk Tech?',
                    text: 'Donec scelerisque, mi id convallis gravida, enim nisi sagittis nulla, at condimentum mauris nisl iaculis odio. Aliquam id accumsan mauris. Donec ut tempor diam. Suspendisse rhoncus hendrerit est, eget sagittis est. Aliquam molestie dolor nulla, id ornare libero varius in.',
                    src: require('../assets/claudio-smile-square.jpg'),
                    btn: 'email smith'
                }
            ]
        }
    }
}
</script>

<style>

    .profile-content{
        overflow: hidden;
        width: 100%;
        border-top: 1px solid rgb(219, 211, 211);
        /* background-color: pink; */
        padding: 100px 0 100px 0;
    }

    .profile-cards{
        /* border: 1px solid black; */
        max-width: 70%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 80px;
        justify-content: space-between;
        align-items: end;
    }

    @media(max-width: 1303px){
        .profile-cards{
            max-width: 90%;
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        }
    }

    @media(max-width: 1004px){
        .profile-cards{
            grid-template-columns: 1fr;
            padding: 0 40px;
        }
    }

    @media(max-width: 400px){
        .profile-cards{
            padding: 0;
        }
    }

</style>