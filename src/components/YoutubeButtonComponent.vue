<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-1.5 rounded border-2 text-white border-red-600 bg-red-500 hover:bg-red-600 transition-colors"
  >
    <slot />
  </a>
</template>

<script>
export default {
  name: 'YoutubeButtonComponent',
  props: ['href']
}
</script>
