import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import "../../public/assets/treeview.css"

import type { Theme } from "vitepress"
import { onMounted, watch } from "vue";
import { useRoute } from "vitepress";

import NBTIcon from "./components/NBTIcon.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({app}) {
    app.use(NolebaseGitChangelogPlugin);
    app.component("NBTIcon", NBTIcon);
  },
  setup() {
    const route = useRoute();

    function insertNBTIcons() {
      for (const e of document.getElementsByClassName("nbt")) {
          const tagType = e.className.split("nbt ")[1]

          const img = document.createElement("img");
          img.src = `${window.location.origin}/Documentation/assets/nbt/${tagType}.png`;
          img.width = 16;
          img.height = 16;
          img.style.display = "inline";
          img.style.padding = "0";
          img.style.margin = "0 3px 0 0";
          e.insertBefore(img, e.firstChild);
      }
    }

    onMounted(() => {
      insertNBTIcons();
    });

    watch(route, () => {
      requestAnimationFrame(() => {
        insertNBTIcons();
      });
    });
  }
} satisfies Theme;