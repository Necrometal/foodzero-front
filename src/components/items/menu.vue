<template>
    <div class="item-menu">
        <div class="menu-price color-black">
            ${{ data.price }}
        </div>

        <div class="menu-title color-black auto-layout">
            {{ data.name }}
        </div>

        <div class="menu-description auto-layout">
            {{ data.description }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'item-menu',
        props: {
            data: Object
        }
    }
</script>

<style lang="sass">
    @import '@/assets/menu-item.scss'
</style>