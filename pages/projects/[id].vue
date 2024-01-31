<script setup lang="ts">
import type { Project } from '~/types/projects';

useNavbarOptions({
    dark: false
})
const route = useRoute()
const { data: project } = await useFetch<Project>(`/api/projects/${route.params.id}`)

useSeoMeta({
    title: project.value?.title,
    description: project.value?.description
})

</script>

<template>
    <section id="hero" class="pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center bg-neutral-50">
        <UContainer>
            <div class="flex flex-col items-center max-w-80 lg:max-w-3xl">
                <h1 class="text-center text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">{{ project?.title }}</h1>
                <p class="text-center text-sm md:text-lg font-normal text-neutral-500">{{ project?.description }}</p>
            </div>
        </UContainer>
    </section>
    <!-- Data -->
    <section class="pb-12 bg-neutral-50">
        <UContainer>
            <div class="flex flex-col items-center">{{ project }}</div>
        </UContainer>
    </section>
</template>