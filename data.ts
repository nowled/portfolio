import { RiComputerLine, RiMacbookFill } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: '',
    about:
      'Extensive knowledge in developing single - page applications. Media Queries, Flexbox, Css Grid for mobile first responsive design.',
  },
  {
    Icon: FaServer,
    title: '',
    about:
      'API calls with Middlewares, Redux-thunk, Axios, and Async functions to perform RESTFUL services.',
  },
  {
    Icon: MdDeveloperMode,
    title: '',
    about:
      'Styled-Components, Framer Motion, GSAP, Material-UI to bring visual designs to life.',
  },
  {
    Icon: AiOutlineApi,
    title: '',
    about:
      'Can empathize with clients needs and recommend the best possible technical solutions for their unique situations.',
  },
  {
    Icon: AiOutlineAntDesign,
    title: '',
    about:
      'Write application-level code, and POSTMAN to test APIs, and JEST for writing unit tests.',
  },
  {
    Icon: RiMacbookFill,
    title: '',
    about:
      'Fluent in Javascript, NodeJs and React but experienced enough to be able to adapt to other programming languages.',
  },
];

export const languages: ISkill[] = [
  {
    name: 'Javascript',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'React',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'TypeScript',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Express',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Node.js',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'Next.js',
    level: '60%',
    Icon: BsCircleFill,
  },
];
export const tools: ISkill[] = [
  {
    name: 'Styled-Components',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'Framer Motion',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Jest',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'Postman',
    level: '80%',
    Icon: BsCircleFill,
  },

  {
    name: 'FireBase',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'MongoDB',
    level: '60%',
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Neflix Clone',
    image_path: '/images/net.png',
    description: 'A fun Netflix Clone using, React, hooks, and Firebase.',

    deployed_url: 'https://netflix-clone-ef730.web.app/',
    github_url: 'https://github.com/nowled/netflix-clone',
    category: ['react'],
    key_techs: ['React', 'Firebase'],
  },
  {
    id: 2,
    name: 'Crypto Dashboard',
    image_path: '/images/crypto.png',
    description:
      'Crypto currency dashboard, which gives an up-to-date chart analysis of the latest crypto trends.',
    deployed_url: 'https://trusting-snyder-4e7c48.netlify.app',
    github_url: 'https://github.com/nowled/bitcoin-dashboard',
    category: ['react'],
    key_techs: ['React', 'React-highcharts', 'Styled-components'],
  },
  {
    id: 3,
    name: 'An Electron Bug Tracker',
    image_path: '/images/bugs.png',
    description:
      'A Bug Tracker application for Developers created in Electron, can be downloaded and run from any computer.',
    deployed_url: 'https://github.com/nowled/electron-ticket-system',
    github_url: 'https://github.com/nowled/electron-ticket-system',
    category: ['electron', 'react'],
    key_techs: ['Electron', 'React', 'MongoDB'],
  },
  {
    id: 4,
    name: 'An Ecommerce Site',
    image_path: '/images/Flush&Plush.png',
    description:
      'An online store that allows customers to redesign their homes with furniture from retro to modern designs.',
    deployed_url: 'https://flushandplush.netlify.app',
    github_url: 'https://github.com/nowled/flushandplush',
    category: ['react'],
    key_techs: [
      'React',
      'Styled-Components',
      'React Router',
      'Axios',
      'Auth0 for authorization',
      'Stripe for payments',
    ],
  },
  {
    id: 5,
    name: 'Online ESL language School',
    image_path: '/images/els.jpg',
    description:
      'An Online Platform to allow English learners to discuss and talk about movies with native English speakers.',
    deployed_url: 'https://zen-heyrovsky-133443.netlify.app/',
    github_url: 'https://github.com/nowled/language-first',
    category: ['react'],
    key_techs: ['React', 'Styled-components'],
  },

  {
    id: 6,
    name: 'My Portfolio',
    image_path: '/images/mysite.png',
    description: 'This Portfolio.',
    deployed_url: '/',
    github_url: 'https://github.com/nowled/portfolio',
    category: ['react', 'typescript', 'tailwind', 'framer motion'],
    key_techs: ['React', 'Tailwind', 'TypeScript', 'Next.js', 'Framer Motion'],
  },
];
