<script setup lang="ts">
import { cn } from '~/lib/utils'

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="cn(
    'rounded-lg border border-neutral-200 bg-white text-neutral-950 shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50 overflow-hidden',
    props.class,
  )
    ">
    <slot />
  </div>
</template>
