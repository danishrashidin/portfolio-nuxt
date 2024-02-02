<script setup lang="ts">
import Logo from '~/components/brand/Logo.vue';
import Socials from '~/components/brand/Socials.vue';
import { AlignRight } from 'lucide-vue-next';
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

const route = useRoute()
const [isNavDrawerShown, toggleNavDrawerShown] = useToggle(false)
const navbarRef = useState<HTMLElement | null>('navbar-ref', () => null)
const isNavbarVisible = useElementVisibility(navbarRef)
const isNavbarDark = useState("navbar-dark-mode", () => false)

watch(() => route.fullPath, () => {
    toggleNavDrawerShown(false)
})
</script>

<template>
    <UContainer ref="navbarRef" as="nav" class="absolute z-10 top-0 inset-x-0" :class="[isNavbarDark && 'dark']">
        <div class="w-full lg:mx-auto flex flex-row items-center justify-between px-2 py-3 gap-x-12">
            <Logo class="dark:text-white text-neutral-900" />
            <div class="hidden lg:flex flex-row gap-12">
                <div class="flex flex-row items-center gap-x-8">
                    <NuxtLink v-for="link in links" :key="link.label" :to="link.to" active-class="underline"
                        class="transition-all text-sm font-medium hover:underline underline-offset-4 tracking-wide dark:text-white text-neutral-700">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <MyButton variant="default" to="/#contact">Contact Me</MyButton>
            </div>
            <MyButton class="lg:hidden" variant="link" @click="toggleNavDrawerShown(true)">
                <AlignRight :stroke-width="1.5" />
            </MyButton>
        </div>
    </UContainer>

    <!-- Sticky -->
    <UContainer as="nav" class="fixed top-0 inset-x-0 z-10 pt-2.5 transition-all scale-100" :class="{
        '-translate-y-full delay-300 scale-0': isNavbarVisible
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
                <MyButton to="/#contact">Contact Me</MyButton>
            </div>
            <MyButton class="lg:hidden" variant="link" @click="toggleNavDrawerShown(true)">
                <AlignRight :stroke-width="1.5" />
            </MyButton>
        </div>
    </UContainer>
    <USlideover class="lg:hidden" v-model="isNavDrawerShown" :ui="{
        width: 'max-w-xs'
    }">
        <div class="h-full p-4 flex flex-col justify-between">
            <div class="flex flex-col gap-y-4 ">
                <UButton color="gray" size="lg" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="self-end"
                    @click="toggleNavDrawerShown(false)" />
                <UVerticalNavigation :links="[{ label: 'Home', to: '/' }, ...links]" :ui="{
                    wrapper: 'relative flex flex-col gap-2',
                    padding: 'px-4 py-3'
                }" />
                <MyButton to="/#contact" class="self-end">Contact Me</MyButton>
            </div>
            <Socials class="self-end" />
        </div>
    </USlideover>
</template>