<template>
    <MyCard>
        <div class="min-h-48 w-full p-6 md:p-8 bg-neutral-100 flex items-center justify-center">
            <USkeleton class="h-full w-full" />
        </div>
        <UDivider />
        <div class="flex flex-col p-4 gap-3">
            <USkeleton class="h-8 w-2/3 mb-4" />
            <USkeleton class="h-5 w-4/5" />
            <USkeleton class="h-5 w-4/5 mb-8" />
            <div class="flex flex-row items-center gap-2 flex-wrap">
                <USkeleton v-for="i in 3" class="h-5 w-20" />
            </div>
        </div>
    </MyCard>
</template>