<template>
    <div>
        <Navbar />
        <HeaderSection :classe="classe">
            <template v-slot:image>
                <img :src="asset + 'images/header/header-about.png'" class="social-icon" />
            </template>

            <template v-slot:title>
                Who We Are
            </template>

            <template v-slot:subtitle>
                The most important thing for us is to give you the comfortable dining experience
            </template>
        </HeaderSection>

        <div class="section-story section-white container-section position-relative">
            <div class="row gx-5">
                <div class="col-md-6 d-flex flex-column justify-content-end story-info-container">
                    <div class="story-title">
                        <h2>Our Story</h2>
                    </div>

                    <div class="story-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. 
                    </div>
                </div>
                <div class="col-md-6 history-image-container" >
                    <img :src="asset + 'images/about/image_ek1.png'" alt="">
                </div>
            </div>

            <img :src="asset + 'images/vector/tomato.png'" alt="" class="tomato-vector">
        </div>

        <Reservation />
        <FooterSection />
    </div>
</template>

<script>
    import Navbar from '@/components/navbar.vue';
    import HeaderSection from '@/components/sections/header.vue';
    import FooterSection from '@/components/sections/footer.vue';
    import Reservation from '@/components/sections/reservation.vue';

    export default {
        name: 'about',
        components: {
            Navbar,
            HeaderSection,
            FooterSection,
            Reservation,
        },

        setup(){
            const asset = window.baseurl + '/';
            const classe = {
                title: "header-title-about",
                container: "header-container-about",
                titleContainer: "d-flex justify-content-end"
            }

            return {
                asset,
                classe
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/about.scss'
</style>