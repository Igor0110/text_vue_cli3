<template>
    <div class="img">
        <img :src="link" alt="連結" />
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
    props: {
        link: String,
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Image {
    width: 100vh;
    height: 10rem;
    background-color: #aaa;
}
.wrap {
    display: inline-flex;
}
</style>
