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
  {
    id: 'medical-care',
    name: 'MediCare Plus',
    previewImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=600',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          heading: 'Advanced Healthcare Solutions',
          subheading: 'Providing exceptional medical care with cutting-edge technology and compassionate service',
          ctaText: 'Book Appointment',
          backgroundImage: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200',
        },
        style: {
          backgroundColor: '#0f766e',
          textColor: '#ffffff',
          padding: '6rem',
        },
      },
      {
        id: 'features',
        type: 'features',
        content: {
          heading: 'Our Services',
          features: [
            { title: 'Primary Care', description: 'Comprehensive health assessments and preventive care', icon: 'Heart' },
            { title: 'Specialized Treatment', description: 'Expert care in multiple medical specialties', icon: 'Stethoscope' },
            { title: 'Emergency Care', description: '24/7 emergency medical services', icon: 'AlertCircle' },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#0f766e',
          padding: '4rem',
        },
      },
      {
        id: 'departments',
        type: 'portfolio',
        content: {
          heading: 'Medical Departments',
          projects: [
            {
              title: 'Cardiology',
              category: 'Heart Care',
              image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&q=80&w=600',
              description: 'Advanced cardiac care and treatments',
            },
            {
              title: 'Neurology',
              category: 'Brain & Nerve Care',
              image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=600',
              description: 'Expert neurological treatments',
            },
            {
              title: 'Pediatrics',
              category: 'Child Care',
              image: 'https://images.unsplash.com/photo-1581056771107-24758e405c35?auto=format&fit=crop&q=80&w=600',
              description: 'Specialized care for children',
            },
          ],
        },
        style: {
          backgroundColor: '#f0fdfa',
          textColor: '#0f766e',
          padding: '4rem',
        },
      },
      {
        id: 'about',
        type: 'about',
        content: {
          heading: 'Why Choose Us',
          description: 'With state-of-the-art facilities and a team of experienced healthcare professionals, we provide comprehensive medical care focused on your well-being. Our patient-centered approach ensures you receive the highest quality treatment with compassion and respect.',
          image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400',
          skills: ['Advanced Technology', 'Expert Physicians', 'Patient-Centered Care', 'Modern Facilities'],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#0f766e',
          padding: '4rem',
        },
      },
      {
        id: 'testimonials',
        type: 'testimonials',
        content: {
          heading: 'Patient Testimonials',
          testimonials: [
            {
              quote: 'The care and attention I received was exceptional. The staff went above and beyond.',
              author: 'Robert Wilson',
              position: 'Patient',
              image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150',
            },
            {
              quote: 'State-of-the-art facilities and incredibly knowledgeable doctors. Highly recommended!',
              author: 'Emily Chang',
              position: 'Patient',
              image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
            },
          ],
        },
        style: {
          backgroundColor: '#f0fdfa',
          textColor: '#0f766e',
          padding: '4rem',
        },
      },
      {
        id: 'contact',
        type: 'contact',
        content: {
          heading: 'Schedule an Appointment',
          subheading: 'Your health is our priority',
          email: 'appointments@medicare-plus.com',
          phone: '+1 (555) 789-0123',
          address: '789 Healthcare Avenue, New York, NY 10001',
        },
        style: {
          backgroundColor: '#0f766e',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
    ],
  },
  {
    id: 'tech-academy',
    name: 'TechPro Academy',
    previewImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600',
    sections: [
      {
        id: 'hero',
        type: 'hero',
        content: {
          heading: 'Master Modern Technology',
          subheading: 'Professional tech courses with industry experts at unbeatable prices',
          ctaText: 'Browse Courses',
          backgroundImage: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
        },
        style: {
          backgroundColor: '#4c1d95',
          textColor: '#ffffff',
          padding: '6rem',
        },
      },
      {
        id: 'features',
        type: 'features',
        content: {
          heading: 'Why Choose TechPro Academy',
          features: [
            { title: 'Expert Instructors', description: 'Learn from industry professionals', icon: 'GraduationCap' },
            { title: 'Flexible Learning', description: 'Study at your own pace', icon: 'Clock' },
            { title: 'Corporate Discounts', description: 'Special rates for organizations', icon: 'Briefcase' },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#4c1d95',
          padding: '4rem',
        },
      },
      {
        id: 'courses',
        type: 'portfolio',
        content: {
          heading: 'Featured Courses',
          projects: [
            {
              title: 'Full-Stack Development',
              category: 'Web Development',
              image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600',
              description: 'Master modern web development - 30% off for companies',
            },
            {
              title: 'Cloud Architecture',
              category: 'Cloud Computing',
              image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
              description: 'AWS, Azure, and GCP expertise - Group discounts available',
            },
            {
              title: 'AI & Machine Learning',
              category: 'Artificial Intelligence',
              image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=600',
              description: 'Practical AI implementation - Enterprise packages',
            },
          ],
        },
        style: {
          backgroundColor: '#f5f3ff',
          textColor: '#4c1d95',
          padding: '4rem',
        },
      },
      {
        id: 'pricing',
        type: 'features',
        content: {
          heading: 'Pricing & Discounts',
          features: [
            { title: 'Individual Plan', description: 'Access all courses - $49/month', icon: 'User' },
            { title: 'Team Plan', description: '5+ members - 25% off per user', icon: 'Users' },
            { title: 'Enterprise', description: 'Custom solutions for large organizations', icon: 'Building' },
          ],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#4c1d95',
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
              quote: 'Our teams productivity increased significantly after taking the cloud architecture course.',
              author: 'James Wilson',
              position: 'CTO, TechStart Inc.',
              image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
            },
            {
              quote: 'The corporate discount made it possible to train our entire development team.',
              author: 'Lisa Chen',
              position: 'HR Director, InnovateCorp',
              image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
            },
          ],
        },
        style: {
          backgroundColor: '#f5f3ff',
          textColor: '#4c1d95',
          padding: '4rem',
        },
      },
      {
        id: 'about',
        type: 'about',
        content: {
          heading: 'About TechPro Academy',
          description: 'We specialize in providing high-quality technology education with a focus on practical, industry-relevant skills. Our corporate training programs offer customized learning paths and significant discounts for organizations looking to upskill their teams.',
          image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=400',
          skills: ['Corporate Training', 'Custom Learning Paths', 'Certification Programs', 'Enterprise Solutions'],
        },
        style: {
          backgroundColor: '#ffffff',
          textColor: '#4c1d95',
          padding: '4rem',
        },
      },
      {
        id: 'contact',
        type: 'contact',
        content: {
          heading: 'Get Started Today',
          subheading: 'Contact us for corporate packages and custom training solutions',
          email: 'enterprise@techpro.academy',
          phone: '+1 (555) 234-5678',
          address: '123 Tech Avenue, Silicon Valley, CA 94025',
        },
        style: {
          backgroundColor: '#4c1d95',
          textColor: '#ffffff',
          padding: '4rem',
        },
      },
    ],
  },
];