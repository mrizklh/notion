import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: "92731583beb44f03b000d0d98fe44ab9",

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: "f8b943dc-6623-493c-af87-54ddbb55a5d6",

  // basic site info (required)
  name: 'Muhammad Rizkillah',
  domain: 'www.rizki.me',
  author: 'Muhammad Rizkillah',

  // open graph metadata (optional)
  description: 'Muhammad Rizkillah meruapakan seorang mahasiswa Universitas Indonesia (UI), www.rizki.me merupakan personal website sekaligus berita terbaru tentang teknologi, blog.rizki.me merupakan dokumentasi dari hasil belajar Muhammad Rizkillah.',
  // social usernames (optional)
  twitter: 'mrizklh',
  github: 'mrizklh',
  linkedin: 'mrizklh',
  newsletter: 'medium.com/narasi', // optional newsletter URL
  youtube: 'channel/UCsN2cgzKBFkCOG_XsnTtiBQ', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,
  

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
     '/News': '289b8a386d2b4578bdb6b2a33e074181',

     '/learn': 'b9fbf5bbb87645fb91866bc5aa766a40'
  },


//  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  //navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: "News",
      pageId: '289b8a386d2b4578bdb6b2a33e074181',

    },
    {
      title: 'learn',
      pageId: 'b9fbf5bbb87645fb91866bc5aa766a40',

    }
 ]
})