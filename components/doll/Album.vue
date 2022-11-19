<template>
    <div id="album" class="scope">
        <ul class="gallery">
            <li v-for="(photo, index) in gallery.photos" 
                :key="'boneca-' + index" 
                :class="{item: true, visible: isActive(index)}" 
                :data-photo-index="index">
                <picture class="photo">
                    <source media="(max-width: 1023px)" width="200" height="400" data-img-size="1x" v-srcset:[getResponsiveURL]="photo">
                    <source media="(min-width: 1024px) and (max-width: 1199px)" width="300" height="511" data-img-size="1.5x" v-srcset:[getResponsiveURL]="photo">
                    <source media="(min-width: 1200px)" width="400" height="681" data-img-size="2x" v-srcset:[getResponsiveURL]="photo">
                    <img v-srcset:[getResponsiveURL]="photo" width="300" height="511" alt="Imagem 1 de 10" loading="lazy" v-place-holder class="loading" @load="loaded">
                </picture>
            </li>
        </ul>
        <ul class="thumbnails" v-if="isMobile">
            <li class="thumb-item" v-for="(thumbnail, index) in gallery.photos" 
                :key="'thumb-' + index">
                <a href=""  v-on:click.prevent="setActive" >
                    <img v-srcset:[getResponsiveURL]="thumbnail" height="200" class="thumbnail" :data-thumbnail-index="index" :alt="'Thumbnail 1 de ' + index">
                </a>
            </li>
        </ul>
        
    </div>
</template>

<style scoped>

    /* Settings  */

    *{
        --number-of-photos: 4;
        --bg-color: #f9f7f2;
        /* Thumbnail vars */
        --thumbnail-padding: calc((15% + 1px) - 1px);
    }

    /* Tools */

    /* Generic */

    /* Elements */

    picture{
        --picture-margin-size: 30px;
        --picture-width: 100%;
        --picture-height: 100%; 
        height: var(--picture-height);
        width: var(--picture-width);
    }

    ul{
        width: 100%;
        padding: 0;
        margin: 0;
    }

    li{
        list-style: none;
    }

    /* Objects */

    .scope{
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: var(--bg-color);
        height: 100%;
        --max-padding: 250px;
        --small-padding: 150px;
        --medium-padding:  clamp(0px, (100vh - 699px) * 999, 200px);
        --large-padding: clamp(0px, (100vh - 989px) * 999, var(--max-padding));
        --padding: clamp(var(--small-padding), var(--medium-padding) + var(--large-padding), var(--max-padding));
        /* padding-top: var(--padding); */
        padding-top: 190px;
    }


    .gallery{
        --number-of-columns: auto; 
        --number-of-rows: auto;
        display: grid;
        grid-template-columns: var(--number-of-columns);
        grid-template-rows: var(--number-of-rows);
    }

    .gallery img{
        --img-aspect-ratio: 5/7;
        --img-height: 100%;
        --img-width: auto;
        aspect-ratio: var(--img-aspect-ratio);
        width: 100%;
        height: auto;
        max-width: clamp(30vw, calc((100vw - 700px) * -9000), 55vw);
        object-fit: cover;
        object-position: right;
    }

    .item{
        --grid-position: 1 / 1 / 1 / 1;
        grid-area: var(--grid-position);
    }

    .item:not(.visible){
        visibility: hidden;
    }

    .photo img{
        --photo-opacity: 100%;
        outline: solid 3px #ffff;
        opacity: var(--photo-opacity);
        transition: opacity 0.25s ease-in;
    }

    .photo img.loading{
        opacity: 0%;
    }

    /* .photo img.loading::after{
        content: '';
        width: 100%;
        height: 100%;
        background: gray;
        opacity: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 3;
        transition: opacity 0.25s ease-in;
    } */

 
    .thumbnails{
        display: grid;
        /* grid-auto-columns: minmax(20%, 150px); */
        /* grid-auto-flow: column; */
        grid-template-columns: repeat(auto-fit, 20%);
        /* grid-template-columns: repeat(auto-fit, 20%); */
        grid-gap: 5px;
        max-width: clamp(30vw, calc((100vw - 700px) * -9000), 55vw);
        justify-content: center;
        align-items: center;
        justify-items: center;
        margin-top: 25px;
        margin-bottom: 25px;
        /* padding: 0 25vw; */
    }

    .thumb-item {
        display: block;
        justify-content: center;
        width: 100%;
        height: max-content;
        outline: solid 2px white;
    }

    .thumb-item > a,
    .thumbnail{
        display: block;
    }

    .thumb-item > a {
        height: max-content;
        width: 100%;
    }

    .thumbnail{
        aspect-ratio: 1;
        object-fit: cover;
        object-position: center;
        height:  auto;
        width: 100%;
        /* max-height: 100%; */
    }



    /* .thumbnail{
        
    } */

    @media screen and (min-width: 1024px){

        .gallery{
            --number-of-columns: 1fr;
            --number-of-rows: 1fr;
            /* padding-top: min(75px, 5vw - 2px); */
        }

        .gallery img{
            width: auto;
            height: 100%;
            max-width: unset;
        }

        .item{
            --grid-position: unset;
            width: 100%;
            height: 100vh;
            margin-bottom: calc((1vw - 1vh) * 7.4);
        }

        .item:not(.visible){
            visibility: visible;
        }

        .item:nth-of-type(1){
            margin-top: calc((1vw - 1vh) * 6);
        }

        .scope{
            padding-top: 0;
        }

        .photo img{
            outline: solid 10px white;
        }
    }

    /* Components */

    .photo{
        /* --photo-height: 100vh;
        --photo-width: 100%;
        height: var(--photo-height);
        width: var(--photo-width); */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (min-width: 1024px){

        .desktop{
            height: calc(100vh * var(--number-of-photos));
        }   
    }
    
    /* Trumps */

    .visible{
        visibility: visible;
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
            default: 6
        },
        defaultAspectRatio: {
            type: Number,
            default: 0.587 //5/7
        },
        defaultMediaQuery: {
            type: String,
            default: '(min-width: 767px)'
        },
        defaultMaxWidth: {
            type: Number,
            default: 500 // size necessary to build a frame around the image
        },
        isMobile: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            $screen: this.$screen,
            albumTrimmed: [],
            gallery: {
                photos: {},
                thumbnails: {},
                activePhoto: 0
            },
        }
    },
    methods: {
        loaded(e){
            /** @type {HTMLElement} */
            let target = e.target;
            target.classList.toggle('loading', false);
        },
        setMaxPhotos(numberOfPhotos, photos) {
            let trimmedAlbum = [];
            let maxPhotos = numberOfPhotos;
            if (photos.length > maxPhotos) {
                trimmedAlbum = photos.slice(0, maxPhotos);
            }
            else return photos;
            return trimmedAlbum;
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
        },
        getResponsiveURL: function ({el,photo}) {
            const source = el;
            const img = photo;

            if(!img) return console.error('Photo object is undefined.');

            const intrinsicSize = { width: img.width, 
                                    height: img.height };
            const availableSize = { width: source.getAttribute('width') != undefined ? 
                                                Number(source.getAttribute('width')) : '', 
                                    height: source.getAttribute('height') != undefined ? 
                                                Number(source.getAttribute('height')) : '' };
            let responsiveImage;
            if(availableSize.width != '' && availableSize.height != ''){
                responsiveImage = this.$helpers.getResponsiveImage({
                    photo: img, 
                    intrinsicSize, 
                    availableSize,
                    modifiers: {crop: 'center', format: 'pjpg'}});
            }
            else{
                responsiveImage = this.$helpers.getResizedImage({
                    photo: img,
                    newSize: availableSize,
                    modifiers: {
                        crop: 'center', 
                        format: 'pjpg'}
                });
            }
            if (responsiveImage.src){
                return responsiveImage.src;
            }
        },
        isActive: function(index){
            if(this.isMobile){
                if(this.gallery.activePhoto == parseInt(index)){
                    return true;
                } 
                else return false;
            }
            else return true;
        },
        setActive: function(ev){
            /**  @type {HTMLImageElement} */
            let img = ev.target;
            let selectedImg = img.getAttribute('data-thumbnail-index');
            this.gallery.activePhoto = parseInt(selectedImg);
        }
    },
    watch: {
        defaultAlbum: {
            handler(newValue, oldValue) {
                if(newValue !== oldValue && newValue.length > 0) {
                    /* this.albumTrimmed = this.setMaxPhotos(this.defaultNumberOfPhotos, newValue); */
                    this.gallery.photos = this.defaultAlbum;
                    /* this.updateCSS(); */
                }
            },  
            deep: true
        }, 
    }
    
}
</script>


