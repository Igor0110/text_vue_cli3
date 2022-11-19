<template>
    <div class="news">
        <p>news</p>
        <div></div>

        <Images link="https://fakeimg.pl/100" />

        <div>
            <img alt="vuelogo" :src="require('@/assets/logo.png')" />
        </div>
        <!-- <div class="img imgwrap" v-for="item in 6" key="item">
            <img alt="Vue logo" :src="require('@/assets/logo.png')" />
        </div> -->
        <!-- <Carousel v-model="value" loop>
            <CarouselItem v-for="item in 5" key="item">
                <img :src="require('@/assets/index/carousel-01.png')" alt="" />
            </CarouselItem>
        </Carousel> -->
    </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

import Images from "@/components/Images.vue";

export default {
    name: "newsView",
    components: {
        HelloWorld,
        Images,
    },
};
</script>
