<script setup lang="ts">
import { useToggle, useBreakpoints, breakpointsTailwind } from '@vueuse/core'

const links = [{
    label: "About",
    to: "#about"
}, {
    label: "Skills",
    to: "/skills"
}, {
    label: "Projects",
    to: "/projects",
}, {
    label: "Blog",
    to: "/blog"
}]

const breakpoints = useBreakpoints(breakpointsTailwind)
const [isNavDrawerShown, toggleNavDrawerShown] = useToggle(false)

</script>

<template>
    <UContainer class="sticky py-2.5 w-full top-0">
        <nav
            class="w-full lg:mx-auto lg:w-fit flex flex-row items-center justify-between rounded-xl p-1.5 border border-gray-200  backdrop-blur gap-x-8">
            <NuxtLink class="text-lg font-semibold text-gray-800 ml-4" to="/">danishrashidin</NuxtLink>
            <template v-if="breakpoints.lg.value">
                <div class="flex flex-row items-center gap-x-6">
                    <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
                        class="text-sm font-normal hover:text-gray-900 leading-relaxed text-gray-600">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <UButton size="lg" to="#contact">Contact Me</UButton>
            </template>
            <template v-else>
                <UButton color="gray" size="lg" variant="ghost" icon="i-heroicons-bars-2-20-solid"
                    @click="toggleNavDrawerShown(true)" />
            </template>
        </nav>
    </UContainer>
    <USlideover v-if="!breakpoints.lg.value" v-model="isNavDrawerShown" :ui="{
        width: 'max-w-xs'
    }">
        <div class="p-4 flex flex-col gap-y-4">
            <UButton color="gray" size="lg" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="self-end"
                @click="toggleNavDrawerShown(false)" />
            <UVerticalNavigation :links="links" :ui="{
                wrapper: 'relative flex flex-col gap-2'
            }" />
            <UButton size="lg" to="#contact" class="self-end">Contact Me</UButton>
        </div>
    </USlideover>
</template>