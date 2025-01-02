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
        githubUrl: 'https://github.com/username/project1'
    },
    {
        title: 'projects.bike-shop.title',
        description: 'projects.bike-shop.description',
        technologies: ['Next.js', 'Node.js', 'MongoDB'],
        images: {
            pl: [
                'src/assets/images/bike-shop-pl-1.jpg',
                'src/assets/images/bike-shop-pl-2.jpg'
            ],
            en: [
                'src/assets/images/bike-shop-en-1.jpg',
                'src/assets/images/bike-shop-en-2.jpg'
            ]
        },
        liveUrl: 'https://project2.com',
        githubUrl: 'https://github.com/username/project2'
    }
];