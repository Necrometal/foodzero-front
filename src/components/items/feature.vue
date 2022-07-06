<template>
    <div class="item-feature d-flex flex-column align-items-center">
        <div class="feature-image d-flex justify-content-center align-items-center">
            <slot name="image"></slot>
        </div>

        <div class="feature-title color-black">
            <h3 class="text-center">
                <slot name="title"></slot>
            </h3>
        </div>

        <div class="feature-description">
            <span class="text-center">
                <slot name="description"></slot>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'feature-item',
        
    }
</script>