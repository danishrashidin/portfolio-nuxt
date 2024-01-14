<script setup lang="ts">

const socials: {
    iconUrl: string
    name: string
    alt: string
    link: string
}[] = [
        {
            name: "Github",
            alt: "Github",
            link: "https://github.com/danishrashidin",
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        }, {
            name: "LinkedIn",
            alt: "LinkedIn",
            link: "https://www.linkedin.com/in/danishrashidin/",
            iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
        }
    ]
</script>

<template>
    <div class="flex flex-row items-center gap-6">
        <ULink v-for="social in socials" :to="social.link">
            <NuxtImg :src="social.iconUrl" :alt="social.alt" class="h-8 w-8" />
        </ULink>
    </div>
</template>