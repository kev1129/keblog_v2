<template>
    <h1 class="post-title">{{ props.title }}</h1>
</template>

<script setup>

const props = defineProps(['title'])

</script>

<style lang="scss" scoped>

.post-title {
    display: block;
    margin-bottom: 30px;
    font-size: 1.34rem;
    letter-spacing: 0.036rem;

}

</style>