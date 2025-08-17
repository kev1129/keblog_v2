<template>
    <v-container class="section">
        <SectionTitle sectiontitle="post list" />
        <span v-for="post in posts" :key="post._path" class="index-container">
            <NuxtLink :to="post.path" class="index-link">
                <IndexMetainfo :indexvalue="post"/>
                <span class="index-title">{{ post.title }}</span>
            </NuxtLink>
        </span>
    </v-container>
</template>


<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () => queryCollection('blog').all())

const props = defineProps(['postlist'])

</script>


<style lang="scss" scoped>
.index-container {
    display: block;
    margin-bottom: 19.7px;

    .index-link {
        display: block;
        font-size: 1rem;
        letter-spacing: 0.039rem;


        .index-title {
            display: inline-block;
            padding: 0;
            font-size: 1rem;
        }
    }
}
</style>