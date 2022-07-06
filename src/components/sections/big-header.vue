<template>
    <div class="container-section section-dark-green section-big-header">
        <div class="big-header-part-1 position-relative">
            <div class="big-header-title-bloc">
                <div class="big-header-title">
                    <h1>
                        Healthy Eating is important part of lifestyle
                    </h1>
                </div>

                <div class="big-header-subtitle">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</span>
                </div>

                <div class="big-header-scroll">
                    <!-- <div class="big-header-scroll-content">
                        <span>Scroll</span>
                        <div class="scroll"></div>
                    </div> -->
                </div>
            </div>

            <div class="plat-bloc">
                <img :src="asset + 'images/header/image.png'" alt="">
            </div>

            <div class="spice-bloc">
                <img :src="asset + 'images/header/spices1.png'" alt="">
                <img :src="asset + 'images/header/spices2.png'" alt="">
                <img :src="asset + 'images/header/spices3.png'" alt="">
            </div>
        </div>

        <div class="big-header-part-2 row gx-5">
            <div class="col-md-6">
                <div class="img-head">
                    <img :src="asset + 'images/header/image_ek1.png'" alt="">
                </div>

                <div class="title-head">
                    <h3>Start to plan your diet today</h3>
                </div>

                <div class="subtitle-head margin-54">
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</span>
                </div>
            </div>

            <div class="col-md-6 d-flex justify-content-end">
                <div class="second-col">
                    <div class="subtitle-head">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</span>
                    </div>

                    <img :src="asset + 'images/header/image_ek2.png'" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'big-header',
        setup(){
            const asset = window.baseurl + '/';

            return {
                asset,
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/big-header.scss'
</style>