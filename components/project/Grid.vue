<script setup lang="ts">
import type { Project } from '~/types/projects';

interface Props {
    projects: Project[] | null
    loading?: boolean
}
defineProps<Props>()
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProjectCardSkeleton v-if="loading" v-for="i in 3" class="" />
        <ProjectCard v-else-if="projects" v-for="project in projects" :key="project.title" :project="project" />
    </div>
</template>