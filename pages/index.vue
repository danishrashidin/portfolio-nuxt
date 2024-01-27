<script setup lang="ts">
useSeoMeta({
    titleTemplate(title) {
        return `${title} - danishrashidin`
    },
    title: "Home",
    description: "Danish Rashidin's Portfolio",
    ogDescription: "Danish Rashidin's Portfolio",
})

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
    <section class="bg-neutral-900 py-20 md:py-40 min-h-screen">
        <UContainer>
            <div class="lg:w-1/2 flex flex-col md:items-center lg:items-start">
                <div class="flex flex-col items-start mb-20">
                    <h1 class="text-left text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">Hello! 👋🏼<br>
                        I'm
                        Danish
                        Rashidin
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
                    <HeatmapGithubContributions class="w-full lg:w-fit" />
                    <template #fallback>
                        <div class="w-full h-32 max-w-xl animate-pulse bg-neutral-700 rounded-lg" />
                    </template>
                </Suspense>
            </div>
        </UContainer>
    </section>

    <!-- About Him Section -->
    <section id="about" class="pt-24 pb-12 bg-white">
        <UContainer>
            <div class="flex flex-col md:flex-row w-full gap-8">
                <!-- Texts -->
                <div class="flex flex-col gap-6 md:w-1/2">
                    <h2 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900">
                        About Me</h2>
                    <p class="text-left text-base md:text-lg font-normal text-gray-500">Hey, just call me Danish. I was a
                        Software Engineering graduate from University of Malaya, Kuala Lumpur. Currently pursuing my career
                        in Tech.<br><br>
                        I used to do Front-end Development since the beginning of my career but I am someone who
                        can do more, aka Jack of All Trades 😉. I am keen to learn new technologies along my journey while
                        keeping a strong knowledge on the pillars of programming, i.e Data Structures, Algorithms
                        etc.<br><br>
                        Apart from all the geekiness, I also play sports to maintain a healthy body and mind. Them being
                        tennis 🎾, badminton 🏸, and even golf 🏌🏻 casually. Code and game for fun in the void of work 🤓.
                    </p>
                </div>

            </div>
        </UContainer>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="pt-24 pb-12 bg-white">
        <UContainer>
            <div class="flex flex-col">
                <h1 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 md:mb-16">What I Do
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
    <section id="projects" class="pt-24 pb-12 bg-white">
        <UContainer>
            <div class="flex flex-col">
                <h1 class="text-left text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-8 md:mb-16">My Past
                    Projects</h1>
                <ProjectGrid />
                <MyButton to="/projects" class="self-center">View All Projects</MyButton>
            </div>
        </UContainer>
    </section>
</template>