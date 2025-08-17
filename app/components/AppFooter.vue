<template>
    <div class="footer">
        <NuxtLink to="/contact" class="footer-contact">contact</NuxtLink>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
    font-size: 0.8rem;
    opacity: 0.55;

    .footer-contact {
        position: fixed; 
        bottom: 10px;    
        left: 15px;
    }
}
</style>