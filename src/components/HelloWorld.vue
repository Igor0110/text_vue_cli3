<template>
    <div class="hello" :class="OOXX">
        <div class="img"></div>
        <div>
            <p>{{ title }}</p>
            <p>{{ msg }}</p>
            <button>立即購買</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "HelloWorld",
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
