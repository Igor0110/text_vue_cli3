<template>
    <div class="home">
        <img alt="Vue logo" src="../assets/logo.png" />
        <HelloWorld title="koala" OOXX="testOOXX" msg="1" />
        <HelloWorld title="koalaB" msg="2" />
        <HelloWorld title="koalaC" msg="3" />
    </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "HomeView",
    components: {
        HelloWorld,
    },
};
</script>

<style scoped lang="scss">
.testOOXX {
    background-color: rgb(96, 14, 211);
}
</style>
