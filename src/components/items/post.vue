<template>
    <div>
        <img :src="asset + 'images/post/feature_image.png'" alt="" class="img-post">

        <div class="post-info">
            <div class="owner-info">
                <img :src="asset + 'images/avatar/avatar.png'" alt="" class="owner-avatar">
                <span class="post-subinfo">
                    {{ data.lastname + data.firstname }}
                </span>
                <span class="post-subinfo">
                    <i class="bi bi-dot"></i>
                </span>
                <span class="post-subinfo">
                    {{ data.date }}
                </span>
                <span class="post-subinfo">
                    <i class="bi bi-dot"></i>
                </span>
                <span class="post-subinfo">
                    {{ data.hour }}
                </span>
                <span class="post-subinfo">
                    <i class="bi bi-dot"></i>
                </span>
                <span class="post-subinfo">
                    {{ data.comments }} comments
                </span>
            </div>

            <div class="post-title color-black">
                <h3>
                    {{ data.title }}
                </h3>
            </div>

            <div class="post-description">
                <span>
                    {{ data.description }} 
                </span>
            </div>

            <a class="d-flex align-items-center post-read-more">
                <span class="mr-4">
                    Read More
                </span>
                <i class="bi bi-arrow-right arrow-icon color-black"></i>
            </a>
        </div>

        <div class="post-categorie">
            {{ data.category }}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'recent-post-item',
        props: {
            data: Object
        },

        setup(){
            const asset = window.baseurl + '/';

            return {
                asset,
            }
        }
    }
</script>