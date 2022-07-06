<template>
    <div class="container-section seciton-white section-our-menu">

        <div class="our-menu-title-section color-black">
            <div class="our-menu-title">
                <h2 class="auto-layout">Our Menu</h2>
            </div>

            <div class="our-menu-description auto-layout">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
            </div>
        </div>

        <div class="row gx-5 our-menu-content">
            <div class="col-md-6" v-for="(menu, i) in menus" :key="'menu-item-'+i">
                <ItemMenu :data="menu"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ItemMenu from '@/components/items/menu.vue'
    export default {
        name: 'section-menu',

        props: {
            menus: {
                type: Array,
                default: []
            }
        },

        components: {
            ItemMenu,
        },
    }
</script>

<style lang="sass">
    @import '@/assets/our-menu.scss'
</style>