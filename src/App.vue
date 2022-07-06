<template>
    <Suspense>
        <router-view></router-view>
    </Suspense>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="sass">
    @import '@/assets/main.scss'
</style>
