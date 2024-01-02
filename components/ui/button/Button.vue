<script setup lang="ts">
import { buttonVariants } from '.'
import { cn } from '~/lib/utils'

interface Props {
  variant?: NonNullable<Parameters<typeof buttonVariants>[0]>['variant']
  size?: NonNullable<Parameters<typeof buttonVariants>[0]>['size']
  to?: string
}

const props = withDefaults(defineProps<Props>(), {})

interface Events {
  (e: 'click'): void
}

const emit = defineEmits<Events>()

const router = useRouter()

function click() {
  if (props.to) {
    router.push(props.to)
  } else {
    emit('click')
  }
}

</script>

<template>
  <button :class="cn(buttonVariants({ variant, size }), $attrs.class ?? '')" @click="click">
    <slot />
  </button>
</template>
