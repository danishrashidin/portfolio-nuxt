<script setup lang="ts">
useSeoMeta({
    title: "Projects",
    description: "View danishrashidin's projects"
})
useNavbarOptions({
    dark: false
})

const { data: projects, pending: isProjectsLoading } = useFetch('/api/projects/display')
</script>

<template>
    <section id="hero" class="pt-32 pb-24 md:pt-40 md:pb-32 flex flex-col items-center justify-center bg-neutral-50">
        <UContainer>
            <div class="flex flex-col items-center max-w-80 lg:max-w-3xl">
                <h1 class="text-center text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">My Projects</h1>
                <p class="text-center text-sm md:text-lg font-normal text-neutral-500">Here is a list of my projects done
                    across different
                    tech stacks!</p>
            </div>
        </UContainer>
    </section>
    <!-- Data -->
    <section class="pb-12 bg-neutral-50">
        <UContainer>
            <div class="flex flex-col items-center">
                <ProjectGrid :projects="projects" :loading="isProjectsLoading" class="max-w-96 md:max-w-none" />
            </div>
        </UContainer>
    </section>
</template>