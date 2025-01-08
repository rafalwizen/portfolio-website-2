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
        githubUrl: 'https://github.com/rafalwizen/photographer-website'
    },
    {
        title: 'projects.bike-shop.title',
        description: 'projects.bike-shop.description',
        technologies: ['React', 'Express.js', 'MySQL'],
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
        liveUrl: '',
        githubUrl: 'https://github.com/rafalwizen/bike-shop'
    }
];