<script setup lang="ts">
import Logo from '~/components/brand/Logo.vue'
import Socials from '~/components/brand/Socials.vue'
</script>

<template>
    <footer class="py-8 bg-neutral-100">
        <UContainer class="mx-auto">
            <div class="flex flex-row justify-between">
                <div class="flex flex-col gap-0.5">
                    <Logo />
                    <p class="text-left text-sm font-normal text-neutral-500">Powered by Nuxt, Strapi ⚡️</p>
                </div>
                <Socials />
            </div>
        </UContainer>
    </footer>
</template>