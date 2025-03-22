import { Template } from '../types/template';

export const templates: Template[] = [
  {
    id: 'modern-business',
    name: 'Modern Business',
    previewImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          heading: 'Welcome to Modern Business',
          subheading: 'Transform your business with our innovative solutions',
          ctaText: 'Get Started',
          backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
        },
        style: {
          backgroundColor: '#1a365d',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
      {
        id: 'features',
        type: 'features',
        content: {
          heading: 'Our Features',
          features: [
            { title: 'Innovation', description: 'Stay ahead with cutting-edge solutions', icon: 'Lightbulb' },
            { title: 'Reliability', description: 'Trusted by thousands of businesses', icon: 'Shield' },
            { title: 'Support', description: '24/7 dedicated customer support', icon: 'Headphones' },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#1a365d',
          padding: '3rem',
        },
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        content: {
          heading: 'What Our Clients Say',
          testimonials: [
            {
              quote: 'The best decision we made for our business',
              author: 'John Smith',
              position: 'CEO, TechCorp',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
            },
            {
              quote: 'Transformed our entire workflow',
              author: 'Sarah Johnson',
              position: 'CTO, InnovateCo',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
            },
          ],
        },
        style: {
          backgroundColor: '#f8fafc',
          textColor: '#1a365d',
          padding: '4rem',
        },
      },
      {
        id: 'contact',
        type: 'contact',
        content: {
          heading: 'Get in Touch',
          subheading: 'Ready to transform your business?',
          email: 'contact@example.com',
          phone: '+1 (555) 123-4567',
          address: '123 Business Ave, Suite 100, New York, NY 10001',
        },
        style: {
          backgroundColor: '#1a365d',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
    ],
  },
  {
    id: 'creative-portfolio',
    name: 'Creative Portfolio',
    previewImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          heading: 'John Designer',
          subheading: 'Creative Director & UI/UX Designer',
          ctaText: 'View My Work',
          backgroundImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
        },
        style: {
          backgroundColor: '#2d3748',
          textColor: '#ffffff',
          padding: '6rem',
        },
      },
      {
        id: 'about',
        type: 'about',
        content: {
          heading: 'About Me',
          description: 'With over 10 years of experience in digital design, I help brands create meaningful experiences through thoughtful design solutions.',
          image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=400',
          skills: ['UI/UX Design', 'Brand Strategy', 'Visual Design', 'Prototyping'],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#2d3748',
          padding: '4rem',
        },
      },
      {
        id: 'portfolio',
        type: 'portfolio',
        content: {
          heading: 'Featured Work',
          projects: [
            {
              title: 'Brand Redesign',
              category: 'Branding',
              image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=600',
              description: 'Complete brand overhaul for a tech startup',
            },
            {
              title: 'Mobile App Design',
              category: 'UI/UX',
              image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=600',
              description: 'User-centered design for a fitness application',
            },
            {
              title: 'E-commerce Platform',
              category: 'Web Design',
              image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600',
              description: 'Modern e-commerce experience design',
            },
          ],
        },
        style: {
          backgroundColor: '#f7fafc',
          textColor: '#2d3748',
          padding: '4rem',
        },
      },
      {
        id: 'contact',
        type: 'contact',
        content: {
          heading: "Let's Work Together",
          subheading: 'Available for freelance projects',
          email: 'hello@johndesigner.com',
          social: {
            twitter: '@johndesigner',
            linkedin: 'johndesigner',
            dribbble: 'johndesigner',
          },
        },
        style: {
          backgroundColor: '#2d3748',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
    ],
  },
];