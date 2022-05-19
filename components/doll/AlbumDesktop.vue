<template>
    <ul class="album" :style="updateCSS()"> <!-- v-bind:class="{small: $screen.width < 1024}" -->
        <!-- Photos should be in the 5:7 (500x700) resolution in desktop and 4:7 (200x350) in mobile -->
        <li class="album-item" v-for="(photo, index) in gallery.desktop" :key="'album-item--' + index" :id="'photo' + index">
            <picture class="album-item--foto" :desktop="defaultAspectRatio">
                <source :media="defaultMediaQuery" :srcset="gallery.desktop[index].src">
                <img 
                    width="500" 
                    :height="$screen.height" 
                    :src="gallery.desktop[index].src" 
                    :alt="'Foto' + index"
                    loading="lazy"
                >
            </picture>
        </li>
    </ul>
</template>

<style scoped>

    *{
        --number-of-photos: 4;
    }

    .album{
        height: calc(100vh * var(--number-of-photos));
    }

    .album-item{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .album-item--foto{
        --photo-margin-size: 30px; 
        height: calc(100% - var(--photo-margin-size) * 2);
        width: calc(100% - var(--photo-margin-size) * 2);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .album-item--foto :where(img){
        width: 100%;
        /* height: auto; */
        height: 100%;
        aspect-ratio: 5/7;
        /* object-fit: contain; */
        object-fit: cover;
        /* object-position: center center; */
        object-position: top center;
    }
</style>

<script>
import { ShopifyMediaQuery } from '~/plugins/helpers';
export default {
    props: {
        defaultAlbum: {
            type: Array,
            default: () => {
                return [];
            },
            required: true
        },
        defaultNumberOfPhotos: {
            type: Number,
            default: 4
        },
        defaultAspectRatio: {
            type: Number,
            default: 5/7
        },
        defaultMediaQuery: {
            type: String,
            default: '(min-width: 767px)'
        },
        defaultMaxWidth: {
            type: Number,
            default: 500 // size necessary to build a frame around the image
        }
    },
    data() {
        return {
            $screen: this.$screen,
            albumTrimmed: [],
            gallery: {
                desktop: [],
                mobile: []
            },
            mediaQuery: new ShopifyMediaQuery({
                condition: this.defaultMediaQuery,
                width: this.defaultMaxWidth,
                aspectRatio: this.defaultAspectRatio
            })
        }
    },
    methods: {
        setMaxPhotos(numberOfPhotos, photos) {
            let trimmedAlbum = [];
            let maxPhotos = numberOfPhotos;
            if (photos.length > maxPhotos) {
                trimmedAlbum = photos.slice(0, maxPhotos);
            }
            else return photos;
            return trimmedAlbum;
        },
        setAspectRatio(gallery){
            
            this.albumTrimmed.forEach(photo => {
                let converted;
                converted = this.$helpers.getResponsiveImage({imageSource: photo, mediaQuery: this.mediaQuery});
                this.gallery.desktop.push(converted);
                
            });
            
        },
        updateCSS(){
            let numberOfPhotos = this.defaultNumberOfPhotos;
            let style = () => { return {
                    '--number-of-photos': numberOfPhotos
                } 
            };
            if(this.albumTrimmed.length != undefined && this.albumTrimmed.length > 0){
                numberOfPhotos = this.albumTrimmed.length;
                return style();
            }
            else return style(); 
        }
    },
    watch: {
        defaultAlbum: {
            handler(newValue, oldValue) {
                if(newValue !== oldValue && newValue.length > 0) {
                    this.albumTrimmed = this.setMaxPhotos(this.defaultNumberOfPhotos, newValue);
                    this.updateCSS();
                }
            },  
            deep: true
        }, 
        albumTrimmed: {
            handler(newValue, oldValue) {
                if(newValue !== oldValue && newValue.length > 0) {
                    this.setAspectRatio(newValue);
                }
            },
            deep: true
        }
    }
    
}
</script>


