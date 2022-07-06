<template>
    <div class="container-section row gx-5 section-white section-feature">
        <div class="col-md-4">
            <ItemFeature>
                <template v-slot:image>
                    <img :src="asset + 'images/feature/fish.png'" alt="">
                </template>

                <template v-slot:title>
                    Premium quality
                </template>

                <template v-slot:description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                </template>
            </ItemFeature>
        </div>

        <div class="col-md-4">
            <ItemFeature>
                <template v-slot:image>
                    <img :src="asset + 'images/feature/carrot.png'" alt="">
                </template>

                <template v-slot:title>
                   Seasonal Vegetables
                </template>

                <template v-slot:description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                </template>
            </ItemFeature>
        </div>

        <div class="col-md-4">
            <ItemFeature>
                <template v-slot:image>
                    <img :src="asset + 'images/feature/lemon.png'" alt="">
                </template>

                <template v-slot:title>
                    Fresh Fruit
                </template>

                <template v-slot:description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu
                </template>
            </ItemFeature>
        </div>
    </div>
</template>

<script>
    import ItemFeature from '@/components/items/feature.vue'
    export default {
        name: 'section-feature',
        components: {
            ItemFeature
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
    @import '@/assets/feature.scss'
</style>