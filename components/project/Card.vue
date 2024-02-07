<script setup lang="ts">
import Card from "~/components/ui/card/Card.vue"
import { ArrowUpRightSquare, Github, Globe } from "lucide-vue-next"

// Types
import type { Project } from "~/types/projects"

interface Props {
    project: Project
}

defineProps<Props>()
</script>

<template>
    <Card class="group md:hover:drop-shadow-lg transition-all">
        <div class="h-60 w-full p-6 md:p-8 bg-neutral-100 flex items-center justify-center">
            <NuxtImg :src="project.coverUri"
                class="h-auto w-full object-contain object-center rounded-md overflow-hidden drop-shadow group-hover:scale-[0.98] transition-all" />
        </div>
        <UDivider />
        <div class="flex flex-col p-4">
            <div class="flex flex-row justify-between items-center gap-x-3 mb-4">
                <h6 class="text-left text-lg font-medium text-gray-900">{{ project.title }}
                </h6>
                <div class="flex flex-row gap-4">
                    <NuxtLink v-if="!!project.link" :to="project.link" target="_blank" alt="Open Page">
                        <Globe :size="20" class="hover:scale-110 transition-transform" />
                    </NuxtLink>
                    <NuxtLink v-if="!!project.githubPage" :to="project.githubPage" target="_blank" alt="Github Repo">
                        <Github :size="20" class="hover:scale-110 transition-transform" />
                    </NuxtLink>
                    <NuxtLink :to="`/projects/${project.id}`" alt="View">
                        <ArrowUpRightSquare :size="20" class="hover:scale-110 transition-transform" />
                    </NuxtLink>
                </div>
            </div>
            <p class="text-left text-sm md:text-base font-normal text-gray-500 mb-10">{{
                project.description }}</p>
            <div class="flex flex-row items-center gap-2 flex-wrap">
                <UBadge v-for="skill in project.skills.slice(0, 3)" color="gray" variant="solid" class="truncate">{{ skill
                }}
                </UBadge>
                <span v-if="project.skills.length > 3" class="text-left text-sm font-normal text-gray-500">...</span>
            </div>
        </div>
    </Card>
</template>