export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tech: string[];
  lat: number;
  lng: number;
  url?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'A minimalist portfolio with an interactive 3D globe, built with Astro and React Three Fiber.',
    category: 'Web App',
    tech: ['Astro', 'React', 'Three.js', 'Tailwind'],
    lat: 48.8566,
    lng: 2.3522,
    url: 'https://github.com/nawfal-hassani',
  },
  {
    id: 2,
    title: 'Project Alpha',
    description: 'A full-stack application showcasing modern web development practices.',
    category: 'Full-Stack',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    lat: 40.7128,
    lng: -74.006,
  },
  {
    id: 3,
    title: 'Project Beta',
    description: 'REST API with authentication, rate limiting, and comprehensive documentation.',
    category: 'API',
    tech: ['Python', 'FastAPI', 'Docker'],
    lat: 35.6762,
    lng: 139.6503,
  },
  {
    id: 4,
    title: 'Project Gamma',
    description: 'Mobile-first web application with real-time data synchronization.',
    category: 'Mobile',
    tech: ['React Native', 'Firebase'],
    lat: -33.8688,
    lng: 151.2093,
  },
  {
    id: 5,
    title: 'Project Delta',
    description: 'Data visualization dashboard for complex analytics.',
    category: 'Data',
    tech: ['D3.js', 'TypeScript', 'GraphQL'],
    lat: 51.5074,
    lng: -0.1278,
  },
];
