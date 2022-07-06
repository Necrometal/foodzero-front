<template>
    <div class="section-dark-green section-footer">
        <div class="footer-top container-section row">
            <div class="col-md-3 d-flex flex-column justify-content-center footer-top-info">
                <span class="sitename">Food</span>
                <span class="sitename">Zero.</span>
            </div>

            <div class="col-md-3 contact-container footer-top-info d-flex flex-column justify-content-between">
                <div class="little-title" >
                    Contact
                </div>

                <div class="contact-info d-flex flex-column justify-content-between" >
                    <span>
                        +1+86 852 346 000<br/><a href="mailto:info@foodzero.com" target="_blank">info@foodzero.com</a>
                    </span>

                    <span class="address">
                        1959 Sepulveda Blvd.<br/>Culver City, CA, 90230
                    </span>
                </div>
            </div>

            <div class="col-md-6 footer-top-info d-flex flex-column justify-content-between">
                <div class="little-title" >
                    Never miss a recipe
                </div>

                <div class="subscription">
                    <form class="form-recipe d-flex justify-content-between align-items-center">
                        <input v-model="formSubscription.email"  type="email" class="input-recipe" placeholder="Email address" required>
                        <button class="btn-recipe" v-if="!loading" @click="sendSubscription">Subscribe</button>
                        <div class="btn-recipe" v-if="loading">
                            <div class="spinner-border text-primary" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </form>

                    <span class="text-recipe">
                        Join our subscribers and get best recipe delivered each week
                    </span>
                </div>
            </div>
        </div>

        <div class="line-footer">
        </div>

        <div class="footer-bottom container-section  d-flex justify-content-between align-items-center">
            <span class="copyright">
                © 2020 Zero Inc. All rights Reserved
            </span>

            <div class="social-network">
                <img :src="asset + 'icons/icon-insta.png'" class="social-icon" />
                <img :src="asset + 'icons/icon-twitter.png'" class="social-icon" />
                <img :src="asset + 'icons/icon-fb.png'" class="social-icon" />
                <img :src="asset + 'icons/icon-ytb.png'" class="social-icon" />
            </div>
        </div>

        
    </div>
</template>

<script>
    import { useSubscriptionService } from '@/services/subscriptionservices'
    export default {
        name: 'footer-section',
        setup(){
            const asset = window.baseurl + '/'; 
            const { loading, sendSubscription, formSubscription } = useSubscriptionService()

            return {
                asset,
                loading,
                sendSubscription, 
                formSubscription
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/footer.scss'
</style>