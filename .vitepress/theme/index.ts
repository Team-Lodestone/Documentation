import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({app})
  {
    app.use(NolebaseGitChangelogPlugin);
  },
};