import welcomehome from '/assets/Images/Projects/welcomehome.png';
import flowvue from '/assets/Images/Projects/flowvue.png';
import investify from '/assets/Images/Projects/investify.png';

const Projects = [
  {
    id: 1,
    projectName: 'Welcome Home',
    category: 'web',
    image: welcomehome,
    description:
      'Website with real estate offers such as houses, apartments and offices. ',
    githubLink: 'https://github.com/bezoski/react-real-estate-app',
  },
  {
    id: 2,
    projectName: 'Flowvue app',
    category: 'web',
    image: flowvue,
    description:
      'A program for time management and helping to organize every day. The project was created during HackHeroes 2023.',
    githubLink: 'https://github.com/bezoski/Automatizasion',
    demoLink: 'https://flowvue.vercel.app/',
  },
  {
    id: 3,
    projectName: 'Investify',
    category: 'web',
    image: investify,
    description:
      'The "Investify" project was created during the HackYeah 2024 hackathon. It aims to enhance financial literacy by providing educational materials, quizzes, and a demo trading feature for managing fictional money in cryptocurrency markets.',
    githubLink: 'https://github.com/bezoski/Investify-HackYeah2024',
  },
];

export default Projects;
