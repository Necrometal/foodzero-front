<template>
    <div>
        <Navbar />
        <HeaderSection :classe="classe">
            <template v-slot:image>
                <img :src="asset + 'images/header/bg-header-menu.png'" class="social-icon" />
            </template>

            <template v-slot:title>
                View Our New Menu
            </template>

            <template v-slot:subtitle>
                The freshest ingredients for you every day
            </template>
        </HeaderSection>

        <MenuList v-for="(menu, i) in menus" :key="'menu-item-'+i" :index="i" :category="menu"/>

        <Reservation />

        <FooterSection />
    </div>
</template>

<script>
    import Navbar from '@/components/navbar.vue';
    import HeaderSection from '@/components/sections/header.vue';
    import MenuList from '@/components/sections/menu-list.vue';
    import FooterSection from '@/components/sections/footer.vue';
    import Reservation from '@/components/sections/reservation.vue';

    import { useMenuService } from '@/services/menuservices'

    export default {
        name: 'menus',
        components: {
            Navbar,
            HeaderSection,
            MenuList,
            FooterSection,
            Reservation,
        },

        async setup(){
            const asset = window.baseurl + '/';
            const classe = {
                title: "header-title-menu"
            }

            const { menus } = await useMenuService()

            return {
                asset,
                classe,
                menus
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/menu.scss'
</style>