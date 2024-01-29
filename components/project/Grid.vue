<script setup lang="ts">
import type { Project } from '~/types/projects';
const { data: projects, pending } = useFetch<Project[]>('/api/projects/display')
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ProjectCardSkeleton v-if="pending" v-for="i in 3" class="" />
        <ProjectCard v-else v-for="project in projects" :key="project.title" :project="project" />
    </div>
</template>