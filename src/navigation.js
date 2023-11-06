import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

const getCopyrightRange = (startYear) => {
  let result = startYear;
  const thisYear = new Date().getFullYear();
  if (thisYear != startYear) {
    result += ` - ${thisYear}`;
  }
  return result;
};

export const cvHeaderData = {
  links: [
    {
      text: 'About',
      href: '/',
    },
    {
      text: 'Resume',
      links: [
        {
          text: 'Overview',
          href: getPermalink('/cv/welcome'),
        },
        {
          text: 'Chief Technology Officer (CTO)',
          href: getPermalink('/cv/cto'),
        },
        {
          text: 'VP Software Engineering',
          href: getPermalink('/cv/vp'),
        },
        {
          text: 'Director Software Engineering',
          href: getPermalink('/cv/director'),
        },
        {
          text: 'Senior Software Engineer',
          href: getPermalink('/cv/senior-fullstack'),
        },
      ],
    },
    {
      text: 'Discussions',
      links: [
        {
          text: 'Recent Discussions',
          href: getBlogPermalink(),
        },
        {
          text: 'Astro',
          href: getPermalink('astro', 'tag'),
        },
      ],
    },
    {
      text: 'Projects & Case Studies',
      href: '#',
    },
  ],
  actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const headerData = cvHeaderData;

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    {
      text: 'Credits',
      href: 'javascript:return(0);',
      onclick: `javascript:getElementById('credits-modal').showModal()`,
    },
    { text: 'Recommend', href: getPermalink('/recommend') },
  ],
  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/nikchanda/',
      target: '_blank',
    },
  ],
  footNote: `&copy; ${getCopyrightRange(2023)} Red Poppy Ventures, LLC.  All rights reserved.`,
};

export const fullFooterData = {
  links: [
    {
      title: 'Site Map',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Highlights', href: '#highlights' },
        { text: 'Experience', href: '#experience' },
        { text: 'Education', href: '#education' },
        { text: 'Skills', href: '#skills' },
        { text: 'Tools & Technology', href: '#tools' },
        { text: 'References', href: '#references' },
        { text: 'Patents', href: '#patents' },
      ],
    },
    {
      title: 'Discussion Categories',
      links: [
        { text: 'Software Development', href: '#' },
        { text: 'Product Development', href: '#' },
        { text: 'Leadership', href: '#' },
        { text: 'Data Science', href: '#' },
        { text: 'AI  / Machine Learning', href: '#' },
      ],
    },
    {
      title: 'Discussion Topics',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    {
      text: 'Credits',
      href: 'javascript:return(0);',
      onclick: `javascript:getElementById('credits-modal').showModal()`,
    },
  ],
  socialLinks: [
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://www.linkedin.com/in/nikchanda/',
      target: '_blank',
    },
  ],
  footNote: `&copy; ${getCopyrightRange(2023)} Red Poppy Ventures, LLC.  All rights reserved.`,
};

export const cvSectionData = {
  links: [
    { text: 'Summary', href: '#summary', icon: 'mdi:account' },
    { text: 'Experience', href: '#experience' },
    { text: 'Education', href: '#education' },
    { text: 'Certificates', href: '#certificates' },
    { text: 'Skills', href: '#skills' },
  ],
};
