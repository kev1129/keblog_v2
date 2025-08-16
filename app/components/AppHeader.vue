<template>
    <div class="header">
        <span class="header-title">keblog</span>
        <NuxtLink to="/" class="header-home">home</NuxtLink>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.header {
    font-size: 0.8rem;
    opacity: 0.55;

    .header-title {
        position: fixed; 
        top: 10px;    
        left: 15px;
    }
    .header-home {
        position: fixed; 
        top: 10px;    
        right: 15px;
    }
}
</style>