import { defineConfig, HeadConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { withPwa } from '@vite-pwa/vitepress'
import lightbox from "vitepress-plugin-lightbox"
import MarkdownItTodoLists from 'markdown-it-todo-lists'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog';

export default withPwa(defineConfig({
  vite: {
    plugins: [
      GitChangelog({
        repoURL: () => 'https://github.com/Team-Lodestone/Documentation'
      }),
      GitChangelogMarkdownSection(),
    ],
    server: {
      host: '0.0.0.0',
      port: 80,
    }
  },
  title: 'Project Lodestone - Documentation',
  description: 'Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft.',
  lastUpdated: true,
  outDir: "dist",
  base: "/Documentation/",
  sitemap: {
    hostname: 'https://team-lodestone.github.io/Documentation/'
  },
  rewrites: {
    '(.*)/readme.md': '(.*)/index.md'
  },
  markdown: {
    config: (md) => {
      md.use(lightbox, {});
      md.use(MarkdownItTodoLists);
    },
  },
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LCE', link: '/LCE/' },
      { text: 'Java', link: '/Java/' },
      { text: 'Bedrock', link: '/Bedrock/' },
      { text: '3DS', link: '/3DS/' },
      { text: 'Pi', link: '/Pi/' },
      { text: 'Info', link: '/readme' },
      { text: 'Team', link: '/Team' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: generateSidebar({
      sortFolderTo: "top",
      documentRootPath: "/",
      collapsed: true,
      capitalizeEachWords: true,
      rootGroupText: 'Main',
      hyphenToSpace: true,
      includeEmptyFolder: false
    }),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Team-Lodestone' },
      { icon: 'discord', link: 'https://discord.gg/eHdmrW7W6u' }
    ],

    footer: {
      // haha inlining html into a text block
      message: `
      <h1>Contributors</h1>
      <br>
      <a href="https://github.com/Team-Lodestone/Documentation/graphs/contributors" style="display: flex; justify-content: center; align-items: center;" >
        <img align="center" src="https://contrib.rocks/image?repo=Team-Lodestone/Documentation"/>
      </a>
      <br>
      <h1>Documentation page was setup by DexrnZacAttack.</h1>
      <br>
      <h1>Documentation is licensed under Creative Commons CC-BY 4.0 unless otherwise noted. For more info, check the NOTICE file.</h1>`,
    },

    logo: '/assets/Project_Lodestone_Logo_Made_By_NikStudios.svg'
  },
  head: [
    // gotta have all the meta tags
    ['link', { rel: 'icon', href: '/Documentation/assets/Lodestone_Favicon.png' }],
    ['link', { rel: 'shortcut icon', href: '/Documentation/assets/Lodestone_Favicon.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '512x512', href: '/Documentation/assets/Dexrn_Lodestone_Logo.png' }],
    ['link', { rel: 'stylesheet', type: 'text/css', href: '/Documentation/assets/lodestone.css' }],
    ['meta', { property: 'og:image', content: '/Documentation/assets/LodestoneBg.jpg' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'theme-color', content: '#AD95ED' }],
    ['meta', { name: 'description', content: 'Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft.' }],
    // do these even do anything
    ['meta', { name: 'keywords', content: 'minecraft, lodestone, world converter, converter, legacy console edition, lce, java edition, java, documentation, bedrock edition, bedrock, pi edition, pi, 3ds edition, 3ds, Project Lodestone, MCS, ARC, savegame.dat, GRF, gamerule, PCK, MSSCMP, MCR, MCA, NBT, COL, LOC' }],
    // lol does this mean it can be shoved into the start menu as a "live" tile
    ['meta', { name: 'msapplication-TileColor', content: '#AD95ED' }],
    ['meta', { name: 'msapplication-TileImage', content: '/Documentation/assets/Dexrn_Lodestone_Logo.png' }],
    ['meta', { name: 'application-name', content: 'Project Lodestone | Documentation' }],
    ['meta', { name: 'msapplication-tooltip', content: 'Documentation for various Minecraft file formats' }],
    ['meta', {name: 'google-site-verification', content: 'z0A_sHsXyYXs1V9Ncly0Ppi6W78vrUKoLQti1FMeXl8' }],
    ['meta', {name: 'google-site-verification', content: 'LLV7ybaGj_-pAwlkHA2Cg55BxTOAdUdjG2WcoEuZKKM' }]
  ],
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    // for other platforms ig
    head.push(['meta', { property: 'og:title', content: "Project Lodestone | Documentation > " + pageData.title.length !== 0 ? pageData.title :  pageData.relativePath }]);
    head.push(['meta', { property: 'og:description', content: pageData.description ?? "Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft." }])
    head.push(['meta', { property: 'og:url', content: 'https://Team-Lodestone.github.io/Documentation/' + pageData.relativePath }]); // this might be messed up idk
    // xitter
    head.push(['meta', { name: 'twitter:title', content: "Project Lodestone | Documentation > " + pageData.title.length !== 0 ? pageData.title :  pageData.relativePath }]);
    head.push(['meta', { name: 'twitter:description', content: pageData.description ?? "Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft." }]);
    head.push(['meta', { name: 'twitter:url', content: 'https://Team-Lodestone.github.io/Documentation/' + pageData.relativePath }]);
    head.push(['meta', { name: 'twitter:image', content: '/Documentation/assets/LodestoneBg.jpg' }]);
    head.push(['meta', { name: 'twitter:card', content: 'summary_large_image' }]);
    // more seo stuffs
    head.push(['meta', { property: 'og:locale', content: 'en_US' }]);
    head.push(['meta', { httpEquiv: 'Content-Language', content: 'en' }]);
    head.push(['meta', { property: 'og:site_name', content: 'Project Lodestone | Documentation' }]);
    head.push(['meta', { name: 'author', content: 'Team Lodestone' }]);
    // what does this even do
    head.push(['link', { rel: 'prefetch', href: 'https://Team-Lodestone.github.io/Documentation/' + pageData.relativePath }]);
    // other
    head.push(['link', { rel: 'canonical', href: 'https://Team-Lodestone.github.io/Documentation/' + pageData.relativePath }]);
    head.push(['meta', { name: 'robots', content: 'index, follow' }]);
    head.push(['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]);

    return head
  },
  ignoreDeadLinks: true,
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Project Lodestone | Documentation',
      short_name: 'Project Lodestone Docs',
      description: '',
      theme_color: '#493189',
      icons: [
        {
          src: '/Documentation/assets/Dexrn_Lodestone_Logo.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

}));

