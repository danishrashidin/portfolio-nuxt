<script setup lang="ts">
import { Github, Globe } from "lucide-vue-next"
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
    <section id="hero" class="min-h-[70vh] flex flex-col items-center justify-center bg-neutral-50">
        <UContainer class="w-full pt-32 pb-24 md:pt-40 border-b border-gray-200">
            <div class="flex flex-col md:flex-row md:items-center gap-8 lg:gap-16">
                <!-- Project Title & Stacks Info -->
                <div class="flex flex-col md:w-1/2">
                    <h6 class="text-left text-sm font-medium text-neutral-700 tracking-wider uppercase mb-2">Danish's
                        Projects</h6>
                    <h1 class="text-left text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">{{ project?.title }}</h1>
                    <p class="text-left text-base md:text-lg font-normal text-neutral-500 mb-8">{{ project?.description }}
                    </p>
                    <p class="text-left text-sm font-medium text-neutral-700 tracking-wider uppercase mb-4">Tech Stack
                        Involved</p>
                    <div class="flex flex-row gap-3 flex-wrap rounded-lg p-4 bg-neutral-500/10 max-w-80 mb-8">
                        <UBadge variant="solid" color="gray" v-for="stack in project?.skills">{{ stack }}</UBadge>
                    </div>
                    <div class="flex flex-row gap-4 items-center">
                        <NuxtLink v-if="!!project?.link" :to="project?.link" target="_blank" alt="Open Page">
                            <Globe :size="20" class="hover:scale-110 transition-transform" />
                        </NuxtLink>
                        <NuxtLink v-if="!!project?.githubPage" :to="project?.githubPage" target="_blank" alt="Github Repo">
                            <Github :size="20" class="hover:scale-110 transition-transform" />
                        </NuxtLink>
                    </div>
                </div>
                <!-- Project Cover -->
                <div class="md:w-1/2 rounded-lg overflow-hidden border border-gray-200 drop-shadow-sm">
                    <NuxtImg :src="project?.coverUri" class="w-full h-auto object-contain object-center" />
                </div>
            </div>
        </UContainer>
    </section>

    <!-- Data -->
    <section class="py-12 lg:py-24 bg-neutral-50">
        <UContainer class="flex flex-col">
            <article
                class="mx-auto prose prose-neutral lg:prose-lg prose-img:rounded-lg prose-img:border prose-img:border-gray-200 prose-img:drop-shadow-sm">
                <StrapiBlocksText :nodes="project?.content" />
            </article>
        </UContainer>
    </section>
</template>