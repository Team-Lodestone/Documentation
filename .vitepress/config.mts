import { defineConfig, HeadConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { withPwa } from '@vite-pwa/vitepress'


export default withPwa(defineConfig({
  title: 'Project Lodestone - Documentation',
  description: 'Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft.',
  lastUpdated: true,
  outDir: "dist",
  base: "/Documentation/",
  sitemap: {
    hostname: 'https://team-lodestone.github.io/Documentation/'
  },
  themeConfig: {
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LCE', link: '/LCE/readme.md' },
      { text: 'Java', link: '/Java/readme.md' },
      { text: 'Bedrock', link: '/Bedrock/readme.md' },
      { text: '3DS', link: '/3DS/readme.md' },
      { text: 'Pi', link: '/Pi/Pi-Edition-Docs.md' },
      { text: 'Info', link: '/readme.md' },
      { text: 'Team', link: '/Team.md' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: generateSidebar({
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
      message: '<h1>Contributors</h1><br><a href="https://github.com/Team-Lodestone/Documentation/graphs/contributors" style="display: flex; justify-content: center; align-items: center;" > <img align="center" src="https://contrib.rocks/image?repo=Team-Lodestone/Documentation"/> </a><br><h1>Documentation page was setup by DexrnZacAttack.</h1>',
    },

    logo: './assets/Project_Dexrn_Lodestone_Logo_Made_By_NikStudios.svg'
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
    ['meta', { name: 'keywords', content: 'minecraft, lodestone, world converter, converter, legacy console edition, lce, java edition, java, documentation, bedrock edition, bedrock, pi edition, pi, 3ds edition, 3ds' }],
    // lol does this mean it can be shoved into the start menu as a "live" tile
    ['meta', { name: 'msapplication-TileColor', content: '#AD95ED' }],
    ['meta', { name: 'msapplication-TileImage', content: '/Documentation/assets/Dexrn_Lodestone_Logo.png' }],
  ],
  vite: {
    server: {
      host: '0.0.0.0', 
      port: 80,     
    }
  },
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = []

    // for other platforms ig
    head.push(['meta', { property: 'og:title', content: "Project Lodestone - Documentation > " + pageData.relativePath }]);
    head.push(['meta', { property: 'og:description', content: "Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft." }])
    head.push(['meta', { property: 'og:url', content: 'https://Team-Lodestone.github.io/Documentation/' + pageData.relativePath }]); // this might be messed up idk
    // xitter
    head.push(['meta', { name: 'twitter:title', content: "Project Lodestone - Documentation > " + pageData.relativePath }]);
    head.push(['meta', { name: 'twitter:description', content: "Documentation for Project Lodestone and various file formats and mechanics for many versions and editions of Minecraft." }]);
    head.push(['meta', { name: 'twitter:url', content: 'https://Team-Lodestone.github.io/Documentation/' + pageData.relativePath }]);
    head.push(['meta', { name: 'twitter:image', content: '/Documentation/assets/LodestoneBg.jpg' }]);

    return head
  },
  ignoreDeadLinks: true,
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Project Lodestone - Documentation',
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

