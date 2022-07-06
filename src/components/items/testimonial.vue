<template>
    <div class="testimonial-item position-relative">
        <div class="content-testimonial">
            “ {{ testimonial.content }}
        </div>

        <div class="testimonial-owner">
            <div class="row">
                <div class="col-md-6">
                    <div class="d-flex">
                        <img :src="asset + 'images/avatar/avatar_ek2.png'" alt="">

                        <div class="testimonial-owner-info d-flex flex-column justify-content-center">
                            <div class="testimonial-owner-name">
                                <span>{{ testimonial.name }}</span>
                            </div>
                            <div class="testimonial-owner-title">
                                <span>{{ testimonial.title }}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 d-flex justify-content-end align-items-center">
                    <button @click="prev()" class="btn-paginate" :class="!prevable ? 'disabled' : ''" :disabled="!prevable">
                        <i class="bi bi-arrow-left arrow-icon color-black"></i>
                    </button>

                    <div class="testimonial-pagination-indicator mx-4" v-if="!loading">
                        {{ infinite.current }} / {{ infinite.total }}
                        
                    </div>

                    <div class="mx-4" v-if="loading">
                        <div class="spinner-border text-dark" role="status" >
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>

                    <button @click="next()" class="btn-paginate" :class="!nextable ? 'disabled' : ''"  :disabled="!nextable">
                        <i class="bi bi-arrow-right arrow-icon color-black"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="testimonial-icon-quote">
            <img :src="asset + 'icons/__.png'" alt="">
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue'
    export default {
        name: 'testimonial-item',
        props: {
            testimonial: Object,
            next: Function,
            prev: Function,
            infinite: Object,
            loading: Boolean
        },

        setup(props){
            const asset = window.baseurl + '/';

            const nextable = computed(() => props.infinite.current < props.infinite.total && !props.loading)
            const prevable = computed(() => props.infinite.current > 1  && !props.loading)

            return {
                asset,
                prevable,
                nextable
            }
        }
    }
</script>