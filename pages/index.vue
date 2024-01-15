<script setup lang="ts">
/**
 * Skills
 */
const skills: {
    icons?: string[]
    title: string
    description: string
    /**
     * Tags for filtering projects
     */
    tags: string[]
}[] = [{
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg"],
    title: "VueJS/Nuxt",
    description: "I have been working fully with Vue 3 since the beginning of my career. This is built with Nuxt ⚡️",
    tags: ['vue']
}, {
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"],
    title: "Typescript",
    description: "Preferred TypeScript more than Javascript because we goota be safe.",
    tags: ['javascript', 'typescript']
}, {
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"],
    title: "GraphQL",
    description: "Another protocol that I love working with.",
    tags: ['graphql']
}, {
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"],
    title: "HTML",
    description: "What's a web developer without HTML?",
    tags: ['html']
}, {
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"],
    title: "TailwindCSS",
    description: "A knowledge I will use for every personal projects I make, at least.",
    tags: ['tailwind']
}, {
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"],
    title: "React/React Native",
    description: "My first ever web framework to be learnt. It was a roller-coaster-experience.",
    tags: ['react', 'react-native']
}, {
    icons: ["https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"],
    title: "Java",
    description: "My first programming language learnt when I was 15 years old, working on an Android project",
    tags: ['java']
}]
</script>
<template>
    <!-- HERO -->
    <section class="bg-neutral-900 py-20 md:py-40">
        <UContainer>
            <div class="lg:w-1/2 flex flex-col items-center lg:items-start">
                <div class="max-w-80 md:max-w-xl flex flex-col items-center lg:items-start gap-y-4 mb-20">
                    <h1 class="text-center lg:text-left text-3xl md:text-5xl lg:text-6xl text-white font-bold">Hi! 👋🏼<br>
                        I'm
                        Danish
                        Rashidin
                    </h1>
                    <p class="text-center lg:text-left text-base md:text-lg font-normal text-neutral-300">A 2-year
                        experienced
                        passionate software
                        engineer from
                        Kuala
                        Lumpur 🇲🇾
                    </p>
                    <MyButton variant="secondary" to="#">View My Work</MyButton>
                </div>
                <ClientOnly>
                    <HeatmapGithubContributions class="w-full md:w-fit max-w-96 md:max-w-none" />
                </ClientOnly>
            </div>
        </UContainer>
    </section>
    <UDivider />

    <!-- Skills Section -->
    <section id="skills" class="pt-20 lg:pt-24 bg-white">
        <UContainer>
            <div class="flex flex-col">
                <h1 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 md:mb-16">My Skills
                </h1>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                    <div v-for="skill in skills" :key="skill.title"
                        class="flex flex-col border border-neutral-200 shadow-sm rounded-lg p-4">
                        <div class="flex flex-row justify-between items-center gap-x-3 mb-6">
                            <h6 class="text-left text-lg lg:text-xl font-semibold text-gray-900">{{ skill.title }}</h6>
                            <div class="flex flex-row gap-3 items-center">
                                <NuxtImg v-if="skill.icons" v-for="icon in skill.icons" :src="icon"
                                    class="h-10 w-10 object-contain object-center" />
                            </div>
                        </div>
                        <p class="text-left text-base font-normal text-neutral-500 mb-8 grow">{{ skill.description }}</p>
                        <MyButton :to="`/projects?tags=${skill.tags.join(',')}`" class="self-start">View related projects
                        </MyButton>
                    </div>
                </div>
                <UTooltip text="I am eager to learn them. Win win!"
                    class="self-center flex flex-row gap-3 items-center cursor-default !transition-none">
                    <UIcon name="i-heroicons-cursor-arrow-ripple" class="text-2xl text-gray-500" />
                    <p class="text-center text-base font-normal text-gray-500">Can't find what you're
                        looking
                        for?</p>
                </UTooltip>
            </div>
        </UContainer>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 lg:py-24 bg-white">
        <UContainer>
            <div class="flex flex-col">
                <h1 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 md:mb-16">My Past
                    Projects</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="i in 4" :key="i" class="flex flex-col border border-neutral-200 shadow-sm rounded-lg p-4">
                        <div class="flex flex-row justify-between items-center mb-4">
                            <h6 class="text-left text-lg lg:text-xl font-semibold text-gray-900">Typescript</h6>
                            <p>stacks</p>
                        </div>
                        <p class="text-left text-base font-normal text-neutral-500 mb-8">Lorem ipsum, lorem ipsum</p>
                        <MyButton to="#" class="self-start">View related projects</MyButton>
                    </div>
                </div>
            </div>
        </UContainer>
    </section>
</template>