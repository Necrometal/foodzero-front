<template>
    <div>
        <Navbar />
        <HeaserSection />
        <OurMenu :menus="menus"/>
        <FeatureSection />
        <RecentPost />
        <Reservation />
        <SectionCategorie :categories="categories" />
        <FooterSection />
    </div>
</template>

<script>
    import SectionCategorie from '@/components/sections/categorie.vue'
    import FooterSection from '@/components/sections/footer.vue'
    import Reservation from '@/components/sections/reservation.vue'
    import RecentPost from '@/components/sections/recent-post.vue'
    import FeatureSection from '@/components/sections/feature.vue'
    import OurMenu from '@/components/sections/menu.vue'
    import HeaserSection from '@/components/sections/big-header.vue'
    import Navbar from '@/components/navbar.vue'

    import { useHomeService } from '@/services/homeservices'

    export default {
        name: 'home',
        components: {
            SectionCategorie,
            FooterSection,
            Reservation,
            RecentPost,
            FeatureSection,
            OurMenu,
            HeaserSection,
            Navbar
        },

        async setup(){
            const { menus, categories } = await useHomeService()

            return {
                menus,
                categories
            }

           
        }
    }
</script>