<template>
    <div class="menu-category row gx-5">
        <div class="col-md-6">
            <slot name="left"></slot>
        </div>

        <div class="col-md-6">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'menu-row'
    }
</script>