const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://romainduc421.github.io/',
  title: 'RD.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Romain DUC',
  role: 'junior fullstack web developper',
  description:
    'Always eager to learn new technologies & improve my skills, I am committed to successfully completing the projects entrusted to me. ',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com/in/romainduc',
    github: 'https://github.com/romainduc421',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'platventure',
    description:
      'platformer game',
    stack: ['Java', 'libGDX', 'Gradle', 'Android'],
    sourceCode: 'https://github.com/platventure'
  },
  {
    name: 'mcts-connectfour',
    description:
      'Connect Four game with MCTS algorithm',
    stack: ['c','ia','mcts-algorithm'],
    sourceCode: 'https://github.com/mcts-connectfour',
  },
  {
    name: 'Cocktails',
    description:
      'Site web (SPA) recensant des recettes de cocktails - les filtrer, sauvegarder ses recettes favorites ',
    stack: ['mysql','jquery','php','js','ajax'],
    sourceCode: 'https://github.com/romainduc421/projetDevWeb'
  },
  {
    name: 'ride-sharing',
    description:
      'Plateforme de covoiturage - inscription, recherche de trajets, réservation, paiement',
    stack: ['Vue','TypeScript', 'Javascript', 'CSS', 'HTML', 'DockerFile'],
    sourceCode: 'https://github.com/romainduc421/ride-sharing'
  },

]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React, Node.js',
  'Next',
  'Laravel',
  'Symfony',
  'TailwindCSS',
  'Git',
  'CI/CD',
  'C/C++',
  'Java',
  'Python',
  'Bash',
  'PhpMyAdmin',
  'SQL, MySQL, PostgreSQL',
  'MongoDB',
  'Wordpress',
  'Vue3',
  'Kotlin',
  'Android Studio',
  'VSCode',
  'JetBrains',
  'Docker',
  'Qlik View',
  'MS Power BI'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'duc.romain@yahoo.com',
}

export { header, about, projects, skills, contact }
