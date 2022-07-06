<template>
    <div class="position-relative category-item">
        <img :src="asset + 'images/categorie/' + category.image"/>

        <div class="name">
            {{ category.name }}
        </div>

        <div class="icon-arrow"  >
            <i class="bi bi-arrow-right arrow-icon color-black"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'item-categorie',
        props: {
            category: Object
        },

        setup(){
            const asset = window.baseurl + '/';

            return {
                asset,
            }
        }
    }
</script>