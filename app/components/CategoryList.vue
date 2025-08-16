<template>    
    <v-container class="section category-container">
            <!-- <SectionTitle sectiontitle="categories" /> -->
            <div>
                <h1 class="category-title">categories</h1>
            </div>
            <span v-for="category in props.categories" :key="category.name">
                <NuxtLink :to="'index-' + category.slug" class="category-link">{{ category.name }}</NuxtLink>
            </span>
    </v-container>
</template>


<script setup>
const props = defineProps(['categories'])
</script>


<style lang="scss" scoped>
.category-container {

    display: block;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    opacity: 0.57;


    .category-title {
        display: inline-block;
        font-size: 1rem;
        padding-bottom: 9.3px;
        margin-bottom: 9.1px;
        border-bottom: 0.8px solid rgb(200,200,200);
        letter-spacing: 0.1rem;
    }

    .category-link {
        display: inline-block;
        margin-right: 25.7px;
        font-size: 0.7rem;
        letter-spacing: 0.057rem;

    }


}



</style>