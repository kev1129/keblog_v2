<template>
    <!-- Render the blog post as Prose & Vue components -->
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>page not found</div>
</template>

<script setup>
const slug = useRoute().params.slug
const { data: post } = await useAsyncData(`blog-${slug}`, () => {
  return queryCollection('blog').path(`/blog/${slug}`).first()
})
</script>


