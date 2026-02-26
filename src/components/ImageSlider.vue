<template>
    <ImgComparisonSlider class="slider">

        <img
        slot="first"
        style="width: 100%"
        :src="after"
        />
        <img
        slot="second"
        style="width: 100%"
        :src="before"
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

<style scoped>

.slider{
    --divider-color: #020005;
    --default-handle-color: #020005;
    --divider-width: 2px;
    --divider-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    --default-handle-width: 50px;
    --handle-position-start: 50%;
}
 


</style>