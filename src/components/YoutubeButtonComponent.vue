<template>
  <a
    :href="href"
    target="_blank"
    class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors cursor-pointer"
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
