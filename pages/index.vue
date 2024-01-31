<script setup lang="ts">
import type { Project } from "~/types/projects"
useSeoMeta({
    title: "Home",
    description: "Danish Rashidin's Portfolio",
    ogDescription: "Danish Rashidin's Portfolio",
})
useNavbarOptions({
    dark: true
})

const { data: skills } = await useFetch('/api/skill/list', {
    query: {
        limit: 12
    }
})

const { data: projects, pending: isProjectsLoading } = useFetch<Project[]>('/api/projects/list')
</script>
<template>
    <!-- HERO -->
    <section class="bg-neutral-900 min-h-screen flex flex-col justify-center items-start py-20 lg:pt-24">
        <UContainer class="w-full">
            <div class="lg:w-2/3 flex flex-col md:items-start">
                <div class="flex flex-col items-start mb-20">
                    <h1 class="text-left text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">Hello! 👋🏼<br>
                        I'm
                        <span class="text-[#4dd05a]">Danish
                            Rashidin</span>

                    </h1>
                    <p class="text-left text-base md:text-lg font-normal text-gray-200 mb-6">A 2-year
                        experienced
                        passionate software
                        engineer from
                        Kuala
                        Lumpur 🇲🇾
                    </p>
                    <MyButton variant="secondary" to="#">View My Work</MyButton>
                </div>
                <Suspense>
                    <HeatmapGithubContributions class="w-full md:w-fit" />
                    <template #fallback>
                        <div class="w-full h-32 max-w-xl animate-pulse bg-neutral-700 rounded-lg" />
                    </template>
                </Suspense>
            </div>
        </UContainer>
    </section>

    <!-- About Him Section -->
    <section id="about" class="pt-12 lg:pt-20 pb-16 bg-white">
        <UContainer class="flex flex-col items-center max-w-4xl">
            <h2 class="text-center text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 lg:mb-10">
                About Me</h2>
            <p class="text-center text-base md:text-lg font-normal text-gray-500 mb-12">I'm Danish, a Software Engineering
                graduate from the University of Malaya, Kuala Lumpur, currently exploring various roles in the tech
                industry. With a background in front-end development and a passion for learning new technologies, I also
                enjoy staying active through sports like tennis, badminton, and golf while coding and gaming for fun during
                my downtime.</p>
            <div class="flex flex-col md:flex-row items-center gap-4 md:gap-12 max-w-3xl">
                <div class="flex flex-row gap-4 items-center">
                    <h1 class="text-6xl font-extrabold text-neutral-700">2</h1>
                    <p class="text-left font-medium text-neutral-400 w-24">Years of Experience</p>
                </div>
                <div class="flex flex-row gap-4 items-center">
                    <h1 class="text-6xl font-extrabold text-neutral-700">4+</h1>
                    <p class="text-left font-medium text-neutral-400 w-24">Tech Stack Proficient</p>
                </div>
            </div>
        </UContainer>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="pt-12 lg:pt-20 pb-16 bg-neutral-100">
        <UContainer>
            <div class="flex flex-col items-center gap-4">
                <h1 class="text-center text-4xl lg:text-5xl font-bold text-neutral-900 mb-8">Skills
                </h1>
                <div
                    class="max-w-64 md:max-w-lg lg:max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 mb-12">
                    <div v-for="skill in skills" class="flex flex-row gap-3 items-center">
                        <NuxtImg v-if="!!skill.iconUrl" class="h-5 w-5" :src="skill.iconUrl" />
                        <p class="text-left text-sm font-medium text-neutral-700 grow">{{ skill.name }}</p>
                        <UBadge class="" color="gray" variant="solid">{{ skill.proficiency }}</UBadge>
                    </div>
                </div>
                <UTooltip text="I am eager to learn them. Win win!"
                    class="self-center hidden lg:flex flex-row gap-3 items-center cursor-default !transition-none">
                    <UIcon name="i-heroicons-cursor-arrow-ripple" class="text-2xl text-gray-500" />
                    <p class="text-center text-sm font-normal text-gray-500">Can't find what you're
                        looking
                        for?</p>
                </UTooltip>
            </div>
        </UContainer>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="pt-12 lg:pt-20 pb-16 bg-white">
        <UContainer>
            <div class="flex flex-col items-center">
                <h1 class="text-center text-4xl lg:text-5xl font-bold text-neutral-900 mb-12 md:mb-16">My Past
                    Projects</h1>
                <ProjectGrid class="mb-12 max-w-96 md:max-w-none" :projects="projects" :loading="isProjectsLoading" />
                <MyButton to="/projects" class="self-center">View All Projects</MyButton>
            </div>
        </UContainer>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 lg:py-24 bg-neutral-900">
        <UContainer>
        </UContainer>
    </section>
</template>