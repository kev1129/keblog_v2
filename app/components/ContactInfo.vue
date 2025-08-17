<template>
    <v-container>
        <div class="contact">
            <div class="contact-email">xxxxxxxxxxxxx.gmail.com</div>
            <div class="contact-insta">
                <NuxtLink to="https://www.instagram.com/shinadooo">instagram | @shinadoo</NuxtLink>
            </div>
        </div>
    </v-container>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.contact {
    font-size: 0.9rem;
    opacity: 0.66;
    text-align: center;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .contact-email {
        padding: 14px;
    }

    .contact-insta {
        padding: 14px;
    }

}
</style>