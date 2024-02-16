import type { GatsbyConfig, PluginRef } from "gatsby"
import "dotenv/config"

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

const config: GatsbyConfig = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-jodie/gatsby-config.mjs
    siteTitle: `The Math Geek`,
    siteTitleAlt: `The Math Geek - A Professional Math Tutor in the Greater Greenville, SC Area`,
    siteHeadline: `The Math Geek - A Professional Math Tutor in the Greater Greenville, SC Area`,
    siteUrl: `https://themathgeek.pro`,
    siteDescription: `The Math Geek is a professional math tutor in the Greater Greenville, SC area. I offer tutoring services for all levels of math, from elementary school to college. I specialize in helping students who are struggling with math, and I can help you or your child improve your math skills and grades. I offer in-person and online tutoring services. Contact me today to schedule a tutoring session!`,
    siteImage: `/master_calculus_and_precalculus.jpg`,
    siteLanguage: `en`,
    author: `Joseph Cunningham <joechamm@outlook.com>`, 
  },
  trailingSlash: `always`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-jodie`,
      // See the theme's README for all available options
      options: {
        navigation: [
          { name: `Projects`, slug: `/projects` },
          { name: `Art`, slug: `/art` },
          { name: `About`, slug: `/about` },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Math Geek`,
        short_name: `MathGeek`,
        description: `The Math Geek is a professional math tutor in the Greater Greenville, SC area. I offer tutoring services for all levels of math, from elementary school to college. I specialize in helping students who are struggling with math, and I can help you or your child improve your math skills and grades. I offer in-person and online tutoring services. Contact me today to schedule a tutoring session!`,
        start_url: `/`,
        background_color: `#ffffff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#b75e09`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    // You can remove this plugin if you don't need it
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-statoscope`,
      options: {
        saveReportTo: `${__dirname}/public/.statoscope/_bundle.html`,
        saveStatsTo: `${__dirname}/public/.statoscope/_stats.json`,
        open: false,
      },
    },
  ].filter(Boolean) as Array<PluginRef>,
}

export default config
