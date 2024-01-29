<script setup lang="ts">
import Logo from '~/components/brand/Logo.vue';
import Socials from '~/components/brand/Socials.vue';
const links = [{
    label: "About",
    to: "/#about"
}, {
    label: "Skills",
    to: "/#skills"
}, {
    label: "Projects",
    to: "/projects",
}, {
    label: "Resume",
    to: "/resume"
}]

const [isNavDrawerShown, toggleNavDrawerShown] = useToggle(false)

const navbarRef = useState<HTMLElement | null>('navbar-ref', () => null)
const isNavbarVisible = useElementVisibility(navbarRef)
</script>

<template>
    <UContainer ref="navbarRef" as="nav" class="z-10">
        <div
            class="w-full lg:mx-auto flex flex-row items-center justify-between px-2 py-3 border-b-2 border-dashed border-neutral-500 gap-x-12">
            <Logo class="text-white" />
            <div class="hidden lg:flex flex-row gap-12">
                <div class="flex flex-row items-center gap-x-8">
                    <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
                        class="transition-all text-sm font-medium hover:underline underline-offset-4 tracking-wide text-white">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <MyButton variant="secondary" to="#contact">Contact Me</MyButton>
            </div>
            <UButton class="lg:hidden" color="white" size="lg" variant="link" :ui="{
                icon: {
                    base: 'text-white'
                }
            }" icon="i-heroicons-bars-3-bottom-right-20-solid" @click="toggleNavDrawerShown(true)" />
        </div>
    </UContainer>

    <!-- Sticky -->
    <UContainer as="nav" class="fixed top-0 inset-x-0 z-10 pt-2.5 transition-all" :class="{
        '-translate-y-full delay-300': isNavbarVisible
    }">
        <div
            class="w-full lg:mx-auto lg:w-fit flex flex-row items-center justify-between rounded-xl p-1.5 border border-slate-200/50 backdrop-blur bg-slate-50/75 gap-x-12">
            <Logo class="ml-4" />
            <div class="hidden lg:flex flex-row gap-12">
                <div class="flex flex-row items-center gap-x-8">
                    <NuxtLink v-for="link in links" :key="link.label" :to="link.to"
                        class="text-sm font-normal hover:text-gray-900 leading-relaxed text-gray-600">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <MyButton to="#contact">Contact Me</MyButton>
            </div>
            <UButton class="lg:hidden" color="gray" size="lg" variant="ghost"
                icon="i-heroicons-bars-3-bottom-right-20-solid" @click="toggleNavDrawerShown(true)" />
        </div>
    </UContainer>
    <USlideover class="lg:hidden" v-model="isNavDrawerShown" :ui="{
        width: 'max-w-xs'
    }">
        <div class="h-full p-4 flex flex-col justify-between">
            <div class="flex flex-col gap-y-4 ">
                <UButton color="gray" size="lg" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="self-end"
                    @click="toggleNavDrawerShown(false)" />
                <UVerticalNavigation :links="links" :ui="{
                    wrapper: 'relative flex flex-col gap-2'
                }" />
                <MyButton to="#contact" class="self-end">Contact Me</MyButton>
            </div>
            <Socials class="self-end" />
        </div>
    </USlideover>
</template>