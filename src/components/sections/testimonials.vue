<template>
    <div class="container-section section-white section-testimonials">
        <TestimonialItem 
            :testimonial="testimonial"
            :infinite="infinite"
            :next="next"
            :prev="prev"
            :loading="loading"
        />
    </div>
</template>

<script>
    import { useTestimonials } from '@/services/homeservices'
    import TestimonialItem from '@/components/items/testimonial.vue'
    export default {
        name: 'testimonials',
        components: {
            TestimonialItem
        },

        async setup(){
            let { testimonial, infinite, next, prev, loading, refreshData } = useTestimonials()
            await refreshData()

            return {
                testimonial,
                infinite,
                next,
                prev,
                loading,
            }
        }
    }
</script>

<style lang="sass">
    @import '@/assets/testimonial.scss'
</style>