<template>
    <div class="container-section row section-white section-recent-post gx-5">
        <div class="col-md-6 position-relative">
            <PostItem :data="data"/>
        </div>

        <div class="col-md-6 position-relative">
            <PostItem :data="data"/>
        </div>
    </div>
</template>

<script>
    import PostItem from '@/components/items/post.vue'
    export default {
        name: 'recent-post',
        components: {
            PostItem
        },

        setup(){
            const data = {
                firstname: 'Christie',
                lastname: 'Julie',
                date: 'October 17,2021',
                hour: '3:33 pm',
                comments: 2,
                title: 'Fruit and vegetables and protection against diseases',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                category: 'Fashion'
            }

            return {
                data
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/recent-post.scss'
</style>
