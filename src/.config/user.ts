import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  // Set the site language to English
  locale: 'en-us',

  site: {
    title: 'Abdul\'s Blog',
    subtitle: 'thoughts and writings, in a digital format.',
    author: 'Abdul Nawab',
  },

  theme: {
    themeStyle: 'light', // Options: 'light' | 'dark' | 'system'
  },

  // seo: { twitter: "@yourhandle" },
  // socials: [
  //   { name: 'github', href: 'https://github.com/yourusername' }
  // ],
}
