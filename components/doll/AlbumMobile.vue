<template>
    <div class="album">
        <ul class="album" v-bind:class="{small: $screen.width < 1024}">
            <!-- Photos should be in the 5:7 (500x700) resolution in desktop and 4:7 (200x350) in mobile -->
            <li class="album-item" v-for="(photo, index) in album.photos" :key="'album-item--' + index">
                <picture class="album-item--foto" :desktop="5/7" :mobile="4/7">
                    <source media="(min-width: 767px)" :srcset="photo.src">
                    <img :src="photo.src" :alt="'Foto' + index">
                </picture>
            </li>
        </ul>
        <ul class="thumbnails">
            <li class="thumbnail">
                <a href="" class="thumbnail--link">
                    <picture class="thumbnail--foto">
                        <img src="https://source.unsplash.com/random/200x259" alt="">
                    </picture>
                </a>
            </li>
            <li class="thumbnail">
                <a href="" class="thumbnail--link">
                    <picture class="thumbnail--foto">
                        <img src="https://source.unsplash.com/random/200x259" alt="">
                    </picture>
                </a>
            </li>
            <li class="thumbnail">
                <a href="" class="thumbnail--link">
                    <picture class="thumbnail--foto">
                        <img src="https://source.unsplash.com/random/200x259" alt="">
                    </picture>
                </a>
            </li>
            <li class="thumbnail">
                <a href="" class="thumbnail--link">
                    <picture class="thumbnail--foto">
                        <img src="https://source.unsplash.com/random/200x259" alt="">
                    </picture>
                </a>
            </li>
        </ul>
    </div>
</template>


<script>
export default {
    
}
</script>

