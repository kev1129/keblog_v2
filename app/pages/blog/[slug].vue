<template>
    <v-container class="article">
        <!-- Render the blog post as Prose & Vue components -->
        <template v-if="post">
            <h1 class="post-title">{{ post.title }}</h1>
            <Toc />
            <ContentRenderer v-if="post" :value="post" />
        </template>
        <template v-else>
            <div>
                <h1>Page Not Found</h1>
                <p>Oops! The content you're looking for doesn't exist.</p>
                <NuxtLink to="/">Go back home</NuxtLink>
            </div>
        </template>
    </v-container>
</template>

<script setup>
import '~/assets/scss/typora-base.scss'

const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>

<style>
.post-title {
    display: inline-block;
    padding: 0;
    font-size: 1.6rem;
}
</style>


