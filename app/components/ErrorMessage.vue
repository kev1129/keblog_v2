<template>
    <v-alert icon="$info" :text="props.errorMessage"></v-alert>
</template>

<script setup>
const props = defineProps(['errorMessage'])
</script>
