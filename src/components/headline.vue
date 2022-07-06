<template>
    <div class="headline d-flex justify-content-center flex-column align-items-center">
        <h2 class="title">
            {{ data.title }}
        </h2>

        <span class="subtitle">
            {{ data.description }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'headline',
        props: {
            data: Object
        }
    }
</script>
