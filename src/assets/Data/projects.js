import welcomehome from '../Images/Projects/welcomehome.png';
import flowvue from '../Images/Projects/flowvue.png';

//testowe
import gta6 from '../Images/Projects/gta6.png';
import toolapp from '../Images/Projects/toolapp.jpg';

const Projects = [
  {
    id: 1,
    projectName: 'GTA 6',
    category: 'game',
    image: gta6,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    demoLink: 'https://www.rockstargames.com/pl/VI',
  },
  {
    id: 2,
    projectName: 'Flowvue app',
    category: 'ui/ux',
    image: toolapp,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    demoLink:
      'https://dribbble.com/shots/24018370-Blueheart-Healthcare-Mobile-App-UI-Design',
  },
  {
    id: 3,
    projectName: 'Welcome Home',
    category: 'web',
    image: welcomehome,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    githubLink: 'https://github.com/bezoski/react-real-estate-app',
  },
  {
    id: 4,
    category: 'web',
    projectName: 'Flowvue app',
    image: flowvue,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    githubLink: 'https://github.com/bezoski/Automatizasion',
    demoLink: 'https://flowvue.vercel.app/',
  },
];

export default Projects;
