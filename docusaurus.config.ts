import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'knowledge hub',
    tagline: 'Notes, tips and tricks on the tech I love, use or build.',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ppab', // Usually your GitHub org/userName.
    projectName: 'knowledge-hub', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/ppab/knowledge-hub'
                },

                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],

    ],
    plugins: [
        [
            '@docusaurus/plugin-content-docs',

            {
                id: 'caseStudies', // Unique ID for the second docs instance
                path: 'caseStudies', // Path to the folder containing the tutorials
                routeBasePath: 'case-studies', // URL route for the tutorials
                sidebarPath: require.resolve('./sidebars.js'),
                // sidebarCollapsible: true,

            },
        ],
        [
            '@docusaurus/plugin-content-docs',

            {
                id: 'learningPortal', // Unique ID for the second docs instance
                path: 'learningPortal', // Path to the folder containing the tutorials
                routeBasePath: 'learning-portal', // URL route for the tutorials
                sidebarPath: require.resolve('./sidebars.js'),
                tagsBasePath: 'tags', // Optional: Creates a /tags route to list all tag
                // sidebarCollapsible: true,

            },
        ],
        [
            '@docusaurus/plugin-content-docs',

            {
                id: 'certifications', // Unique ID for the second docs instance
                path: 'certifications', // Path to the folder containing the tutorials
                routeBasePath: 'certifications', // URL route for the tutorials
                sidebarPath: require.resolve('./sidebars.js'),
                // sidebarCollapsible: true,

            },
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            title: 'ppab',
            // logo: {
            //     alt: 'My Site Logo',
            //     // src: 'img/logo.svg',
            // },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Knowledge Hub',
                },
                {to: '/learning-portal', label: 'Learning Portal', position: 'left'},
                {to: '/case-studies', label: 'Case Studies', position: 'left'},
                {to: '/certifications', label: 'Certifications', position: 'left'},
                {to: '/blog', label: 'Blog', position: 'right'},
                // {
                //     href: 'https://github.com/ppab/knowledge-hub',
                //     label: 'GitHub',
                //     position: 'right',
                // },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Knowledge hub',
                    items: [
                        {
                            label: 'IAC',
                            to: '/docs/category/iac',
                        },
                    ],
                },
                {
                    title: 'Projects',
                    items: [
                        {
                            label: 'Nestjs/TypeormGenericServiceAndController',
                            href: 'https://github.com/ppab/knowledge-hub',
                        },
                        {
                            label: 'React/UseGenericEntity',
                            href: 'https://github.com/ppab/knowledge-hub',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/ppab/knowledge-hub'
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} ppab`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            magicComments: [
                {
                    className: 'theme-code-block-highlighted-line',
                    line: 'highlight-next-line',
                    block: {start: 'highlight-start', end: 'highlight-end'},
                },
                {
                    className: 'code-block-error-line',
                    line: 'error-next-line',
                },
            ]
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
