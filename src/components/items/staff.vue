<template>
    <div class="staff-item">
        <div class="staff-title text-center">
            {{ data.title }}
        </div>

        <div class="staff-name text-center">
            {{ data.name }}
        </div>

        <div class="staff-image">
            <img :src="asset + 'images/about/' + data.image" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: 'staff-item',
        props: {
            data: Object
        },

        setup(){
            const asset = window.baseurl + '/';

            return {
                asset
            }
        }
    }
</script>