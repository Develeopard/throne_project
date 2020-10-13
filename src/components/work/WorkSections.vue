<template>
<div class="work-sections">
    <workSection
        v-for="section in sections"
        :key="section"
        :section="section"
    ></workSection>

</div>

</template>

<script>
    import WorkSection from '@/components/work/WorkSection.vue';

export default {
    components: {
        WorkSection: WorkSection
    },

    data(){
        return{
            sections:[
                {
                    headline: 'ATK',
                    subhl: 'Audio Test Kitchen',
                    text: 'Phasellus congue pellentesque tortor quis scelerisque. Maecenas ipsum velit, rhoncus vel molestie eget, molestie at velit. Quisque eleifend eget mauris non tristique. Cras eleifend lacus vel felis vulputate ultrices. Sed vitae erat ac risus euismod bibendum iaculis vel erat. Cras feugiat gravida erat, a sodales ipsum aliquam in. Suspendisse vel aliquam dolor.',
                    color: 'blue',
                    txtColor: 'white',
                    order: 'one',
                    src: require('@/assets/ATK-6.png')
                },
                {
                    headline: 'EBOT RAPID',
                    subhl: 'EnterpriseBot Rapid',
                    text: 'Phasellus congue pellentesque tortor quis scelerisque. Maecenas ipsum velit, rhoncus vel molestie eget, molestie at velit.',
                    color: 'darkblue',
                    txtColor: 'white',
                    order: 'two',
                    src: require('@/assets/ebot.png')
                },
                {
                    headline: 'GLOBAL CREDIT PLATFORM',
                    subhl: 'Credit management platform for financial institutions',
                    text: 'Phasellus congue pellentesque tortor quis scelerisque. Maecenas ipsum velit, rhoncus vel molestie eget, molestie at velit. Quisque eleifend eget mauris non tristique.',
                    color: 'purple',
                    txtColor: 'white',
                    order: 'one',
                    src: require('@/assets/CREDIT-5.png')
                },
                {
                    headline: 'REID',
                    subhl: 'Real Estate Intelligence Cloud',
                    text: 'Phasellus congue pellentesque tortor quis scelerisque. Maecenas ipsum velit, rhoncus vel molestie eget, molestie at velit. Quisque eleifend eget mauris non tristique. Cras eleifend lacus vel felis vulputate ultrices. Sed vitae erat ac risus euismod bibendum iaculis vel erat. Cras feugiat gravida erat, a sodales ipsum aliquam in.',
                    color: 'green',
                    txtColor: 'white',
                    order: 'two',
                    src: require('@/assets/REIC-4.png')
                },
                {
                    headline: 'TEEZLER',
                    subhl: 'Pinterest plus Quora for beauty products',
                    text: 'Quisque eleifend eget mauris non tristique. Cras eleifend lacus vel felis vulputate ultrices. Sed vitae erat ac risus euismod bibendum iaculis vel erat. Cras feugiat gravida erat, a sodales ipsum aliquam in.',
                    color: 'white',
                    txtColor: 'black',
                    order: 'one',
                    src: require('@/assets/teezler.jpg')
                }
            ]
        }
    }
}
</script>

<style>

</style>