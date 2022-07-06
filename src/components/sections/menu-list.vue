<template>
    <div class="container-section section-menu-list section-white">
        <Headline :data="{ title: category.name, description: category.description }"/>

        <MenuRow v-if="index % 2 == 0">
            <template v-slot:left>
                <img :src="asset + 'images/categorie/image_ek1.png'" alt="">
            </template>

            <template v-slot:right>
                <div v-for="(menu, i) in category.menus" :key="'menu-list-item-'+menu.id">
                    <ItemMenu :data="menu"/>
                </div>
            </template>
        </MenuRow>

        <MenuRow v-else>
            <template v-slot:left>
                <div v-for="(menu, i) in category.menus" :key="'menu-list-item-'+menu.id">
                    <ItemMenu :data="menu"/>
                </div>
            </template>

            <template v-slot:right>
                <img :src="asset + 'images/categorie/image_ek1.png'" alt="">
            </template>
        </MenuRow>
    </div>
</template>

<script>
    import Headline from '@/components/headline.vue';
    import MenuRow from '@/components/items/menu-row.vue';
    import ItemMenu from '@/components/items/menu.vue'

    export default {
        name: 'menu-list',
        props: {
            category: {
                type: Object,
                default: null
            },
            index: {
                type: Number,
                default: 1
            }
        },
        components: {
            Headline,
            MenuRow,
            ItemMenu
        },

        setup(){
            const asset = window.baseurl + '/';
            const assetapi = window.apiurl + '/';
            const data = {
                name: 'Deep Sea Snow',
                description: 'Lorem impsum dolore in impus',
                price: '20'
            }

            return {
                asset,
                data
            }
        }
    }
</script>