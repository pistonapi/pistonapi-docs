const { description } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'PistonAPI Docs',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,
    
    postcss: {
        plugins: [
            require("tailwindcss")("./tailwind.config.js"),
            require("autoprefixer"),
        ],
    },
    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#5a67d8' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: '',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Tutorials',
                link: '/tutorials/'
            },
            {
                text: 'Screencasts',
                link: '/screencasts/'
            },
            {
                text: 'Documentation',
                link: '/documentation/',
            },
            {
                text: 'Improve this on GitHub',
                link: 'https://github.com/pistonapi/pistonapi-docs'
            }
        ],
        sidebar: {
            '/documentation/': [
                {
                    title: 'documentation',
                    collapsable: false,
                    children: [
                        'documentation',
                    ]
                }
            ],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: {
        'plausible': { domain: 'pistonapi.com' },
        '@vuepress/plugin-back-to-top': {},
        '@vuepress/plugin-medium-zoom': {},
    }
}
