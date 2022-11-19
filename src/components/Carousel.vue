<template>
    <div class="hello" :class="OOXX">
        <Carousel v-model="value" loop>
            <CarouselItem v-for="item in 5" key="item">
                <img :src="require('@/assets/logo.png')" alt="" />
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
export default {
    name: "Carousel",
    props: {
        msg: String,
        title: String,
        OOXX: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
    width: 100%;
    display: inline-flex;
    margin: 1rem;
}
.img {
    height: 150px;
    width: 150px;
    background-color: cadetblue;
}
</style>
