<template>
    <ImgComparisonSlider>
        <img
        slot="first"
        style="width: 100%"
        :src="before"
        />
        <img
        slot="second"
        style="width: 100%"
        :src="after"
        />
    </ImgComparisonSlider>
</template>

<script>
import { ImgComparisonSlider } from '@img-comparison-slider/vue';

export default {
    name: 'ImageSlider',
    components: {
    ImgComparisonSlider,
  },
    props: {
        before: {
            type: String,
            required: true
        },
        after: {
            type: String,
            required: true
        },
    }
}

</script>