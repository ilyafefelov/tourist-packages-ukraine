import { join } from "path";
import { readdirSync } from "fs";
// import CMS from 'netlify-cms-app';

const localeFiles = readdirSync(join(__dirname, "locales"));

const locales = localeFiles.map((file) => file.split(".")[0]);
const messages = {};

locales.forEach((locale) => {
    messages[locale] = require(`./locales/${locale}.json`);
});

export default {
    modules: [
        '@nuxt/content'
    ],
    buildModules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
    i18n: {
        locales: [
            {
                code: "en",
                file: "en.json",
            },
            {
                code: "uk",
                file: "uk.json",
            },
        ],
        defaultLocale: "en",
        langDir: "locales/",
        lazy: true,
        seo: false,
    },
    // plugins: [
    //     { src: '~/plugins/netlify-cms.js', mode: 'client' },
    //     // ... other plugins ...
    // ],
};
