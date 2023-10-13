import logoUTA from '~/assets/images/logo-uta.png';
import logoCSUN from '~/assets/images/logo-csun.png';
import sealCSAA from '~/assets/images/seal-csaa.png';
import sealCSM from '~/assets/images/seal-csm.png';
import sealMGR360 from '~/assets/images/seal-mgr360.png';
import sealKF from '~/assets/images/seal-kf.jpeg';

export const education = [
  {
    degree: 'Post Graduate Business Studies',
    subject: 'Artificial Intellegence & Machine Learning',
    institution: 'University of Texas at Austin',
    department: 'McCombs School of Business',
    date: '(Expected May 2024)',
    image: logoUTA,
    link: 'https://www.mccombs.utexas.edu/graduate/',
  },
  {
    degree: 'Bachelor of Arts',
    subject: 'Communication Studies',
    institution: 'California State University, Northridge',
    department: '',
    date: 'May 2000',
    image: logoCSUN,
    link: 'https://www.csun.edu/mike-curb-arts-media-communication/communication-studies',
  },
];

export const certification = [
  {
    title: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services Training and Certification',

    date: 'Issued: June 2023 - Valid Through: June 2026',
    image: sealCSAA,
    link: 'https://www.credly.com/badges/67eef293-e7d3-4a05-9211-ea3067abb15b/public_url',
    blog: 'aws',
  },
  {
    title: 'Certified ScrumMaster&reg;',
    issuer: 'ScrumAlliance',
    date: 'Issued: May 2023 - Valid Through: May 2025',
    image: sealCSM,
    link: '/dl/Nik_Chanda-ScrumAlliance_CSM_Certificate.pdf',
    blog: 'scrum',
  },
  {
    title: 'MGR360 Management Certification',
    issuer: 'MGR360',
    date: 'Issued: December 2020 - No Expiration',
    image: sealMGR360,
    link: 'http://bit.ly/MGRcertified',
    blog: 'management',
  },
  {
    title: 'Capital Access Series PerfectPitch&trade;',
    issuer: 'e2i.Academy / Keiretsu Forum Academy',
    date: 'Issued: June 2012 - No Expiration',
    image: sealKF,
    link: '',
    blog: 'entrepreneur',
  },
];
