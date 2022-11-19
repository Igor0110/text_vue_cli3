<template>
    <div class="about">
        <Carousel v-model="value" loop>
            <CarouselItem v-for="item in 5" key="item">
                <img :src="require('@/assets/logo.png')" alt="" />
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: 0,
        };
    },
};
</script>
<style lang="sass"></style>
