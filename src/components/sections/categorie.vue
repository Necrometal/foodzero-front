<template>
    <div class="container-section section-white section-category">
        <Headline :data="{ title: 'Category Energy Balance', description: 'lorem impsum in dolore espius' }"/>

        <div class="row gx-5 list-category-item">
            <div class="col-md-4" v-for="(category, i) in categories" :key="'category-item-'+i">
                <ItemCategorie :category="category"/>
            </div>
        </div>

    </div>
</template>

<script>
    import ItemCategorie from '@/components/items/categorie.vue'
    import Headline from '@/components/headline.vue'
    export default {
        name: 'section-categorie',
        components: {
            ItemCategorie,
            Headline
        },
        props: {
            categories: {
                type: Array,
                default: []
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/category.scss'
</style>