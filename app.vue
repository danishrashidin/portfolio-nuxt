<script setup lang="ts">
useSeoMeta({
  titleTemplate(title) {
    return `${title} - danishrashidin`
  },
})
</script>

<template>
  <NuxtLoadingIndicator />
  <Navbar />
  <NuxtPage />
  <Footer />
</template>
