<template>
    <div>
        <Navbar />
        <HeaderSection :classe="classe">
            <template v-slot:image>
                <img :src="asset + 'images/header/bg-header-contact.png'" class="social-icon" />
            </template>

            <template v-slot:title>
                Get in Touch
            </template>

            <template v-slot:subtitle>
                The freshest ingredients for you every day
            </template>

            <template v-slot:other>
                <div class="d-flex justify-content-end">
                    <div class="opentime">
                        <div class="opentime-header d-flex justify-content-between">
                            <span class="opentime-title">
                                Open Time
                            </span>

                            <span class="opentime-value">
                                Sunday-Friday
                            </span>
                        </div>

                        <div class="opentime-line"></div>

                        <div class="opentime-content  row gx-5">
                            <span class="col-md-4 opentime-content-value">
                                Bunch <br> 11:00–12:00
                            </span>

                            <span class="col-md-4 opentime-content-value d-flex justify-content-center">
                                Lunch <br> 13:17:00
                            </span>

                            <span class="col-md-4 opentime-content-value d-flex justify-content-end">
                                Dinner <br> 18:20:00
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </HeaderSection>

        <div class="section-contact section-white container-section">
            <div class="row gx-5">
                <div class="col-md-6 contact-img space-between-contact-bloc">
                    <img :src="asset + 'images/image_contact2.png'" alt="">
                </div>

                <div class="col-md-6 d-flex justify-content-center align-items-end py-5 space-between-contact-bloc">
                    <div class="contact-value" >
                        <span style="font-style:normal; text-decoration:NONE; ">We can be contacted via <br/>email </span><span style="color:#9CAA00; font-style:normal; text-decoration:NONE; ">info@foodzero.com</span><span style="font-style:normal; text-decoration:NONE; "> <br/>or telephone on </span><span style="color:#9CAA00; font-style:normal; text-decoration:NONE; ">+86 852 346 00</span>
                    </div>
                </div>
            </div>

            <div class="row gx-5">
                <div class="col-md-6 contact-img space-between-contact-bloc d-flex flex-column justify-content-center">
                    <div class="located">
                        We are located in 1959 Sepulveda Blvd. Culver City, CA, 90230
                    </div>

                    <a class="view-map">
                        View in maps
                    </a>
                </div>

                <div class="col-md-6 contact-img space-between-contact-bloc">
                    <img :src="asset + 'images/image_contact1.png'" alt="">
                </div>
            </div>
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
        name: 'contact-section',
        components: {
            Navbar,
            HeaderSection,
            FooterSection,
            Reservation,
        },

        setup(){
            const asset = window.baseurl + '/';

            return {
                asset,
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/contact.scss'
</style>