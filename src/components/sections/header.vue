<template>
    <div class="header-container" :class="classe?.container ?? ''">
        <div class="bg-header">
            <slot name="image"></slot>
        </div>

        <div class="header-title-container container-section position-relative" :class="classe?.titleContainer ?? ''">
            <div class="header-title" :class="classe?.title ?? ''">
                <div class="header-title-content">
                    <h1>
                        <slot name="title"></slot>
                    </h1>
                </div>

                <div class="header-subtitle">
                    <slot name="subtitle"></slot>
                </div>
            </div>

            <slot name="other"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'header-container',
        props: {
            classe: Object,
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
    @import '@/assets/header.scss'
</style>