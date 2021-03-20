import { RiComputerLine, RiMacbookFill } from 'react-icons/ri';
import { FaServer } from 'react-icons/fa';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { MdDeveloperMode } from 'react-icons/md';
import { BsCircleFill } from 'react-icons/bs';
import { IProject, IService, ISkill } from './type';

export const services: IService[] = [
  {
    Icon: RiComputerLine,
    title: 'Front End Developer',
    about: 'lorem ipsome.....',
  },
  {
    Icon: FaServer,
    title: 'BackEnd  Developer',
    about: 'lorem ipsome.....',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Digital Nomad',
    about: 'lorem ipsome.....',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'lorem ipsome.....',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'Pretty Bullshit',
    about: 'lorem ipsome.....',
  },
  {
    Icon: RiMacbookFill,
    title: 'Great Time',
    about:
      'Lorem ispome I have done a lot of  of <b>silly</b> shit as far as fixing computer',
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
    name: 'Golang',
    level: '60%',
    Icon: BsCircleFill,
  },
];
export const tools: ISkill[] = [
  {
    name: 'Styled Components',
    level: '90%',
    Icon: BsCircleFill,
  },
  {
    name: 'Material UI',
    level: '80%',
    Icon: BsCircleFill,
  },
  {
    name: 'JEST',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'CircleCI',
    level: '70%',
    Icon: BsCircleFill,
  },
  {
    name: 'FireBase/FireStore',
    level: '60%',
    Icon: BsCircleFill,
  },
  {
    name: 'AWS/Cloud',
    level: '60%',
    Icon: BsCircleFill,
  },
];

export const projects: IProject[] = [
  {
    name: 'Neflix Clone',
    image_path: '/images/Netflix-Clone.png',
    description:
      'This is netflix clone using, react, hooks for state and firebase for the backend',

    deployed_url: 'https://netflix-clone-ef730.web.app/',
    github_url: 'https://github.com/nowled/netflix-clone',
    category: ['react'],
    key_techs: ['React', 'Firebase'],
  },
  {
    name: 'Crypto Dashboard',
    image_path: '/images/CryptoDash.png',
    description: 'This is Crypto currency',
    deployed_url: '#',
    github_url: 'https://github.com/nowled/bitcoin-dashboard',
    category: ['react'],
    key_techs: ['React', 'React-highcharts', 'styled-components'],
  },
];
