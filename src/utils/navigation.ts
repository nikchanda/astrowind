export const cvHeaderNav = () => {
  return {
    links: [
      { text: 'Home', href: '#' },
      { text: 'About', href: '#about' },
      { text: 'Resume', href: '#resume' },
      { text: 'Porfolio', href: '#porfolio' },
      { text: 'Blog', href: '#blog' },
      { text: 'Github', href: 'https://github.com/onwidget' },
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
