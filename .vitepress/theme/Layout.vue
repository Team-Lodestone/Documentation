<script setup>
import DefaultTheme from "vitepress/theme";
import { onMounted } from "vue";
import { useRouter } from "vitepress";
import mediumZoom from "medium-zoom";

const { Layout } = DefaultTheme;
const router = useRouter();

const setupZoom = () => {
  mediumZoom("[data-zoomable]", {
    background: "transparent",
  });
};

onMounted(setupZoom);
router.onAfterRouteChanged = setupZoom;


</script>

<template>
  <Layout />
</template>

<style>
.zoom-overlay {
  backdrop-filter: blur(5rem);
}

.zoom-overlay,
.zoom-image--opened {
  z-index: 999;
}
</style>