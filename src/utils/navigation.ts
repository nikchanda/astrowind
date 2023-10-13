export const cvHeaderNav = () => {
  return {
    links: [
      { text: 'About', href: '/' },
      {
        text: 'Resume',
        links: [
          { text: 'Chief Technology Officer (CTO)', href: '/cv/cto' },
          { text: 'VP Software Engineering)', href: '/cv/vp' },
          { text: 'Director Software Engineering', href: '/cv/director' },
          { text: 'Senior Full-Stack Engineer', href: '/cv/full-stack' },
        ],
      },
      { text: 'Discussions', href: '/blog' },
      { text: 'Projects', href: '/projects' },
    ],
    actions: [
      {
        text: 'Contact Me',
        href: '#',
      },
    ],
  };
};

export const cvSectionNav = () => {
  return {
    links: [
      { text: 'Summary', href: '#summary', icon: 'mdi:account' },
      { text: 'Experience', href: '#experience' },
      { text: 'Education', href: '#education' },
      { text: 'Certificates', href: '#certificates' },
      { text: 'Skills', href: '#skills' },
    ],
  };
};

export const spaHeaderNav = () => {
  return {
    links: [
      { text: 'About', href: '#about' },
      { text: 'Experience', href: '#experience' },
      { text: 'Education', href: '#education' },
      { text: 'Skills', href: '#skills' },
      { text: 'Recognition', href: '#recognition' },
      { text: 'Discussion', href: '#discussion' },
    ],
  };
};
