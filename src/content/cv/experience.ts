import logoSYNQY from '~/assets/images/logo-synqy-q.svg';
import logoSequoia from '~/assets/images/logo-sequoia.png';
import logoTachometry from '~/assets/images/logo-tachometry.ico';
import logoRPV from '~/assets/images/logo-rpv.png';

const exp_synqy = {
  company: 'SYNQY Corporation',
  title: 'Chief Technology Officer (CTO)',
  location: 'Austin, TX / Pleasant Hill, CA',
  date: '2012 - Present',
  image: logoSYNQY,
  description:
    'SYNQY is an innovator in Retail Media, delivering dynamically-matched promotional video and media content to products across the retail network. Delivering 10x+ Return on Spend.',
  applies: ['director', 'cto'],
  cases: [
    { name: 'Walmart', link: '' },
    { name: 'Tractor Supply Company', link: '' },
    { name: 'Nielsen Data / Brandbank', link: '' },
    { name: 'Albertsons', link: '' },
  ],
  accomplishments: [
    {
      cv: ['director', 'cto'],
      desc: "Developed and successfully launched innovative consumer-facing web products that helped brand owners control their message across retail channels that they don't own.",
      link: '',
      topics: ['summary', 'tech', 'team'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Recruited, hired, and led multiple high-performing engineering teams, and developed engineering managers, helping them improve their skills and grow their careers.',
      link: '',
      topics: ['summary', 'team', 'lead'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Implemented Agile, DevOps, and best practices in software engineering, improving productivity, reducing time-to-market, and improving code quality and testing.',
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Used a data-driven approach to make product development and strategic decisions, leading to improved user experiences and business outcomes.',
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Evolved the technology stack, tools, and procedures to solve consumer pain points and improve the overall technology infrastructure of the company.',
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Opened an Austin office to optimize leadership and better manage engineering teams.',
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Lead through the challenges of scaling, both in terms of user growth and team growth.',
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Successfully secured funding for the startup, demonstrating the ability to sell the vision and strategy of the company to investors.',
      link: '',
      topics: ['summary'],
    },
  ],
};

const exp_rpv = {
  company: 'Red Poppy Ventures',
  title: 'Managing Member',
  location: 'Georgetown, TX',
  date: '2019 - Present',
  image: logoRPV,
  description:
    'Red Poppy Ventures is a virtual incubator, empowering start-up businesses to meet their full potential through technology and business support.',
  applies: ['director', 'cto', 'board'],
  cases: [
    { name: 'Advanced Fuel Dyanmics', link: 'https://www.advancedfueldynamics.com' },
    { name: 'Generative AI for Web', link: '' },
  ],
  accomplishments: [
    {
      cv: ['director', 'cto'],
      desc: 'Developed business, gathered requirements, architected and staffed the development and delivery of over 200 enterprise and government software projects.',
      link: '',
      topics: ['summary'],
    },
  ],
};

const exp_sequoia = {
  company: 'Sequoia Technologies',
  title: 'Chief Technology Officer (CTO)',
  location: 'Pleasant Hill, CA / Indianapolis, IN',
  date: '2010 - 2014',
  image: logoSequoia,
  description:
    'Sequoia Technologies built a scalable internet marketing process and platform to promote and support local Carrier Corporation affiliated HVAC Dealers throughout the country.',
  applies: ['director', 'cto'],
  cases: [
    { name: 'Carrier Corporation', link: '' },
    { name: 'Temperature Equipment Corporation', link: '' },
  ],
  accomplishments: [
    {
      cv: ['director', 'cto'],
      desc: 'Lead the development of strategic partnerships with Carrier corporation and customers, driving business growth and customer satisfaction.',
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: "Set the technology strategy of the company, selecting the right tools, technologies, and architectures to support the company's goals.",
      link: '',
      topics: ['summary'],
    },
    {
      cv: ['director', 'cto'],
      desc: 'Invented syndication technology that grew customer base by 3,000+ B2B customers, and supported the successful recapitalization and acquisition of the company.',
      link: '',
      topics: ['summary'],
    },
  ],
};

const exp_tachometry = {
  company: 'Tachometry Corporation',
  title: 'Director, Professional Services',
  location: 'Walnut Creek, CA',
  date: '2003 - 2010',
  image: logoTachometry,
  description:
    'Tachometry was a boutique professional services company, providing custom enterprise integration and development for many of the most recognizable Bay Area companies.',
  applies: ['director', 'cto'],
  cases: [
    { name: 'Mindjet', link: '' },
    { name: 'US Department of Defense', link: '' },
    { name: 'Safeway / Albertsons', link: '' },
    { name: 'Port of Oakland', link: '' },
  ],
  accomplishments: [
    {
      cv: ['director', 'cto'],
      desc: 'Developed business, gathered requirements, architected and staffed the development and delivery of over 200 enterprise and government software projects.',
      link: '',
      topics: ['summary'],
    },
  ],
};

export const experience = [exp_synqy, exp_rpv, exp_sequoia, exp_tachometry];

export const experienceTopics = [
  {
    label: 'Technology Proficiency',
    key: 'tech',
  },
  {
    label: 'Strategic Leadership',
    key: 'lead',
  },
  {
    label: 'Team Development',
    key: 'team',
  },
  {
    label: 'Business Accumen',
    key: 'business',
  },
  {
    label: 'Stakeholder Relations',
    key: 'stakeholder',
  },
  {
    label: 'Change Management',
    key: 'change',
  },
];
