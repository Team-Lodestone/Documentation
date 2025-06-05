<template>
  <span class="nbt-icon-wrapper">
    <img
      :src="`/Documentation/assets/nbt/${type}.png`"
      width="16"
      height="16"
      alt=""
      class="nbt-icon"
    />
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps<{
  type: string
}>()
</script>

<style scoped>
.nbt-icon {
  padding: 0;
  margin: 0 3px 0 0;
  vertical-align: middle;
}
.nbt-icon-wrapper {
  display: inline-flex;
  align-items: center;
}
</style>
