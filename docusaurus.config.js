module.exports = {
  title: 'Lawrence Blake Jones',
  tagline: 'INLS 161 Spring 2021 Recitation Notes',
  url: 'https://_username_.github.io.',
  baseUrl: '/INLS161-2021-spring/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ljonesdesign', // Usually your GitHub org/user name.
  projectName: 'INLS161-2021-spring', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Lawrence Blake Jones',
      logo: {
        alt: 'Lawrence Jones Photo',
        src: 'img/larry-jones-photo.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'INLS 161 Spring 2021 Recitations',
          position: 'left',
        },



        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ljonesdesign',
          label: 'GitHub',
          position: 'right',
        },


      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
            label: 'UNC Panopto Login',
            href: 'https://uncch.hosted.panopto.com/',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Academic Calendar',
              href: 'https://registrar.unc.edu/academic-calendar/',
            },
            {
              label: 'UNC Zoom',
              href: 'https://unc.zoom.us/',
            },
            {
              label: 'UNC Sakai',
              href: 'https://sakai.unc.edu/welcome/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'github.com/ljonesdeign',
              href: 'https://github.com/ljonesdesign',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lawrence Blake Jones.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ljonesdesign/INLS161-2021-spring/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ljonesdesign/INLS161-2012-spring/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
