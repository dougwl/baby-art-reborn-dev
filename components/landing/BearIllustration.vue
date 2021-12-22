<template>
    <div class="bears">
        <div class="bear fade-in animated" :id="extras.desktop.bears.withoutRattle.id">
            <!-- <SvgLoader :rawHTML="extras.desktop.bears.withoutRattle.svg" /> -->
            <component :is="extras.desktop.bears.withoutRattle.svg" />
        </div>
        <div class="bear fade-in animated" :id="extras.desktop.bears.withRattle.id">
            <!-- <SvgLoader :rawHTML="extras.desktop.bears.withRattle.svg" /> -->
            <component :is="extras.desktop.bears.withRattle.svg" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            bears: {
                withRattle: {
                    id: 'bear-with-rattle-',
                    svg: require('~/assets/svg/home/desktop/decoration/bear-with-rattle.svg?inline')
                },
                withoutRattle: {
                    id: 'bear-without-rattle-',
                    svg: require('~/assets/svg/home/desktop/decoration/bear-without-rattle.svg?inline')
                }
            },
        }
    },
    computed: {
        isMobile() {}
    }
}
</script>