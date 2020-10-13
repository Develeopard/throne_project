<template>
    <div class="footer-section">
        <div class="footer-section-content">
            <upFooter></upFooter>
            <midFooter></midFooter>
            <bottomFooter></bottomFooter>
        </div>
    </div>
</template>

<script>
    import UpFooter from './UpFooter.vue';
    import MidFooter from './MidFooter.vue';
    import BottomFooter from './BottomFooter.vue';

export default {
    components: {
        upFooter: UpFooter,
        midFooter: MidFooter,
        bottomFooter: BottomFooter
    }
}
</script>

<style>
    .footer-section{
        background-color: pink;
        /* padding: 120px 30px; */
    }
</style>