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
  {
    id: 'restaurant-template',
    name: 'Gourmet Restaurant',
    previewImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          heading: 'Fine Dining Experience',
          subheading: 'Culinary excellence in the heart of the city',
          ctaText: 'Make a Reservation',
          backgroundImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1200',
        },
        style: {
          backgroundColor: '#1a202c',
          textColor: '#ffffff',
          padding: '6rem',
        },
      },
      {
        id: 'features',
        type: 'features',
        content: {
          heading: 'Our Specialties',
          features: [
            { title: 'Fine Dining', description: 'Exquisite culinary creations', icon: 'Utensils' },
            { title: 'Wine Selection', description: 'Curated wine collection', icon: 'Wine' },
            { title: 'Private Events', description: 'Elegant event spaces', icon: 'Users' },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#1a202c',
          padding: '4rem',
        },
      },
      {
        id: 'menu',
        type: 'portfolio',
        content: {
          heading: 'Our Menu',
          projects: [
            {
              title: 'Appetizers',
              category: 'Starters',
              image: 'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&q=80&w=600',
              description: 'Begin your culinary journey',
            },
            {
              title: 'Main Course',
              category: 'Entrees',
              image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
              description: 'Signature dishes crafted with care',
            },
            {
              title: 'Desserts',
              category: 'Sweet Endings',
              image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&q=80&w=600',
              description: 'Indulge in sweet perfection',
            },
          ],
        },
        style: {
          backgroundColor: '#f7fafc',
          textColor: '#1a202c',
          padding: '4rem',
        },
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        content: {
          heading: 'Guest Reviews',
          testimonials: [
            {
              quote: 'An unforgettable dining experience',
              author: 'Michael Brown',
              position: 'Food Critic',
              image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?auto=format&fit=crop&q=80&w=150',
            },
            {
              quote: 'The best fine dining in the city',
              author: 'Emma Wilson',
              position: 'Food Blogger',
              image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=150',
            },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#1a202c',
          padding: '4rem',
        },
      },
      {
        id: 'contact',
        type: 'contact',
        content: {
          heading: 'Make a Reservation',
          subheading: 'Join us for an unforgettable dining experience',
          email: 'reservations@gourmet.com',
          phone: '+1 (555) 234-5678',
          address: '789 Culinary Ave, New York, NY 10002',
        },
        style: {
          backgroundColor: '#1a202c',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
    ],
  },
  {
    id: 'fitness-gym',
    name: 'Power Fitness Gym',
    previewImage: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          heading: 'Transform Your Body, Transform Your Life',
          subheading: 'Join the ultimate fitness experience with state-of-the-art equipment and expert trainers',
          ctaText: 'Start Your Journey',
          backgroundImage: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1200',
        },
        style: {
          backgroundColor: '#18181b',
          textColor: '#ffffff',
          padding: '6rem',
        },
      },
      {
        id: 'features',
        type: 'features',
        content: {
          heading: 'Why Choose Us',
          features: [
            { title: 'Expert Trainers', description: 'Certified professionals to guide your fitness journey', icon: 'Users' },
            { title: 'Modern Equipment', description: 'State-of-the-art machines and free weights', icon: 'Dumbbell' },
            { title: '24/7 Access', description: 'Train anytime that suits your schedule', icon: 'Clock' },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#18181b',
          padding: '4rem',
        },
      },
      {
        id: 'classes',
        type: 'portfolio',
        content: {
          heading: 'Our Classes',
          projects: [
            {
              title: 'HIIT Training',
              category: 'Cardio',
              image: 'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?auto=format&fit=crop&q=80&w=600',
              description: 'High-intensity interval training for maximum results',
            },
            {
              title: 'Strength Training',
              category: 'Muscle Building',
              image: 'https://images.unsplash.com/photo-1533681904393-9ab6eee7e408?auto=format&fit=crop&q=80&w=600',
              description: 'Build muscle and increase strength',
            },
            {
              title: 'Yoga & Flexibility',
              category: 'Mind & Body',
              image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600',
              description: 'Improve flexibility and reduce stress',
            },
          ],
        },
        style: {
          backgroundColor: '#f4f4f5',
          textColor: '#18181b',
          padding: '4rem',
        },
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        content: {
          heading: 'Success Stories',
          testimonials: [
            {
              quote: 'Lost 30 pounds and gained confidence. The trainers here are amazing!',
              author: 'David Chen',
              position: 'Member since 2022',
              image: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&q=80&w=150',
            },
            {
              quote: 'The variety of classes keeps me motivated. Best gym experience ever!',
              author: 'Maria Rodriguez',
              position: 'Member since 2023',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
            },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#18181b',
          padding: '4rem',
        },
      },
      {
        id: 'membership',
        type: 'features',
        content: {
          heading: 'Membership Plans',
          features: [
            { title: 'Basic Plan', description: 'Access to gym floor and basic equipment - $29/month', icon: 'Star' },
            { title: 'Premium Plan', description: 'Includes classes and personal training - $59/month', icon: 'Award' },
            { title: 'Elite Plan', description: 'All access pass with premium perks - $99/month', icon: 'Crown' },
          ],
        },
        style: {
          backgroundColor: '#18181b',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
      {
        id: 'contact',
        type: 'contact',
        content: {
          heading: 'Start Your Fitness Journey',
          subheading: 'Get your free consultation today',
          email: 'join@powerfitness.com',
          phone: '+1 (555) 987-6543',
          address: '456 Fitness Boulevard, New York, NY 10003',
        },
        style: {
          backgroundColor: '#dc2626',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
    ],
  },
];