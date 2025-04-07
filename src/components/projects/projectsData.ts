import { Project } from './Projects';

export const projects: Project[] = [
    {
        title: 'projects.photographer-website.title',
        description: 'projects.photographer-website.description',
        technologies: ['React', 'Tailwind'],
        images: {
            pl: ['src/assets/images/photographer-website-1.jpg', 'src/assets/images/photographer-website-2.jpg'],
            en: ['src/assets/images/photographer-website-1.jpg', 'src/assets/images/photographer-website-2.jpg']
        },
        liveUrl: 'http://rozbickipawel.pl/',
        githubUrl: {
            pl: 'https://github.com/rafalwizen/photographer-website/blob/master/README.pl.md',
            en: 'https://github.com/rafalwizen/photographer-website'
        },
    },
    {
        title: 'projects.sweet-creations.title',
        description: 'projects.sweet-creations.description',
        technologies: ['React', 'Tailwind'],
        images: {
            pl: [
                'src/assets/images/sweet-creations-1.jpg',
                'src/assets/images/sweet-creations-2.jpg',
                'src/assets/images/sweet-creations-3.jpg'
            ],
            en: [
                'src/assets/images/sweet-creations-1.jpg',
                'src/assets/images/sweet-creations-2.jpg',
                'src/assets/images/sweet-creations-3.jpg'
            ]
        },
        liveUrl: 'https://hanuskowytorcik.vercel.app/',
        githubUrl: {
            pl: 'https://github.com/rafalwizen/sweet-creations/blob/master/README.pl.md',
            en: 'https://github.com/rafalwizen/sweet-creations'
        },
    }
];