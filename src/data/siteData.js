import {
  Sofa,
  Paintbrush,
  Hammer,
  Lightbulb,
  CheckCircle,
  Clock,
  ThumbsUp,
  Shield,
  Star,
  Users,
  Award,
  Video,
  Play,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  MonitorPlay,
  BedDouble,
  ChefHat,
  Coffee,
  Library,
  Bath,
  TreePine,
  Wind
} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const siteData = {
  contact: {
    phone: '+91 9010952596',
    email: 'info@aarishinteriors.com',
    address: 'House No. 1, Attapur, Upperpally, Pillar No. 190, Hyderabad 500048, India'
  },
  social: [
    { icon: FaFacebookF, link: '#' },
    { icon: FaTwitter, link: '#' },
    { icon: FaInstagram, link: 'https://www.instagram.com/aarish_interiors?igsh=MW5pNzhibGV0Y3lw' },
    { icon: FaLinkedinIn, link: '#' }
  ],
  navLinks: [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Client Projects', href: '/portfolio' },
    { label: 'Contact', href: '/contact' }
  ],
  pageBanners: {
    about: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=70&w=1400&auto=format&fit=crop"
    ],
    services: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=70&w=1400&auto=format&fit=crop"
    ],
    portfolio: [
      "https://images.unsplash.com/photo-1616137466211-f939a420be84?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=1400&auto=format&fit=crop"
    ],
    contact: [
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=70&w=1400&auto=format&fit=crop"
    ],
    estimate: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=70&w=1400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=1400&auto=format&fit=crop"
    ]
  },
  hero: {
    headline: 'Transform Your Space with Aarish Interiors',
    subheading: 'Experience luxury and comfort in every corner.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=70&w=1400&auto=format&fit=crop'
  },
  intro: {
    text: 'At Aarish Interiors, we believe that your home should be a reflection of your personality. Our team of expert designers works closely with you to create spaces that are both beautiful and functional.'
  },
  services: [
    {
      title: 'Residential Design',
      description: 'Transform your home into a personalized sanctuary with our bespoke residential design services.',
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=70&w=600&auto=format&fit=crop'
      ]
    },
    {
      title: 'Commercial Design',
      description: 'Create an inspiring and productive workspace that reflects your brand identity.',
      images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=70&w=600&auto=format&fit=crop'
      ]
    },
    {
      title: 'Renovation',
      description: 'Breathe new life into your existing space with our comprehensive renovation solutions.',
      images: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=70&w=600&auto=format&fit=crop'
      ]
    },
    {
      title: 'Custom Furniture',
      description: 'Unique, handcrafted furniture pieces designed specifically for your space.',
      images: [
        'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=70&w=600&auto=format&fit=crop'
      ]
    }
  ],
  testimonials: [
    {
      name: 'Mr. Sushanth & Mrs. Vishwasri',
      project: 'Lansum Eldorado',
      youtubeId: 'nn4zG1luWHw'
    },
    {
      name: 'Mrs. Bhavya',
      project: 'Candeur 40',
      youtubeId: '9xMQk9cA9x8'
    },
    {
      name: 'Mrs. Arvinda Devi',
      project: 'Akanksha Villas',
      youtubeId: 'geI9yKlBC7c'
    },
    {
      name: 'Mr. & Mrs. Reddy',
      project: 'My Home Bhooja',
      youtubeId: 'x1RV5cLvNYY'
    },
    {
      name: 'Dr. Srinivas Rao',
      project: 'Aparna Sarovar',
      youtubeId: 'mVrOhTBfWkM'
    },
    {
      name: 'Mrs. Swapna',
      project: 'Rajapushpa Provincia',
      youtubeId: 'TsPMiRvbi0w'
    },
    {
      name: 'Mr. Ramesh Kumar',
      project: 'Prestige High Fields',
      youtubeId: '195_ssxfcOo'
    },
    {
      name: 'Mrs. Lakshmi',
      project: 'Sriram Chirping',
      youtubeId: 'eqgoczM5qeU'
    },
    {
      name: 'Mr. & Mrs. Sharma',
      project: 'Hallmarks',
      youtubeId: '20bJ0PMtWpA'
    },
    {
      name: 'Dr. Anitha',
      project: 'KMV Vivan',
      youtubeId: 'ar3m1g7vPdU'
    }
  ],
  stats: [
    { value: '9+', label: 'Years Experience' },
    { value: '300+', label: 'Happy Homes' },
    { value: '200+', label: 'Experts' },
    { value: '5', label: 'Cities: Hyderabad, Vijayawada, Bangalore, Mumbai, Warangal' }
  ],
  features: [
    { icon: Star, title: 'Premium Quality', description: 'We use only the finest materials.' },
    { icon: Clock, title: 'On-Time Delivery', description: 'We respect your time and deadlines.' },
    { icon: Shield, title: 'Warranty', description: 'Peace of mind with our service guarantee.' },
    { icon: ThumbsUp, title: 'Expert Team', description: 'Highly skilled and experienced professionals.' },
    { icon: CheckCircle, title: 'Custom Solutions', description: 'Tailored designs to fit your needs.' },
    { icon: Users, title: 'Client Centric', description: 'Your satisfaction is our priority.' },
    { icon: Lightbulb, title: 'Innovative', description: 'Creative and modern design approaches.' },
    { icon: Award, title: 'Award Winning', description: 'Recognized for excellence in design.' }
  ],
  luxurySection: {
    headline: 'Luxury Interiors, Designed Around Your Lifestyle',
    text: 'Experience the perfect blend of aesthetics and functionality. Our luxury interior solutions are crafted to elevate your everyday living.',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=70&w=600&auto=format&fit=crop'
  },
  aboutImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=70&w=1400&auto=format&fit=crop',
  experienceCenter: {
    headline: 'Visit Our Experience Center',
    text: 'Immerse yourself in a world of design possibilities at our state-of-the-art experience center. See, touch, and feel the quality of our materials and workmanship.',
    images: [
      [
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600607687710-cd390ba33b00?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=70&w=600&auto=format&fit=crop'
      ],
      [
        'https://images.unsplash.com/photo-1600607687126-8a3414349a51?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=70&w=600&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=70&w=600&auto=format&fit=crop'
      ]
    ]
  },
  solutions: [
    { icon: Sofa, label: 'Living Room', image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=70&w=400&auto=format&fit=crop' },
    { icon: BedDouble, label: 'Bedroom', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=70&w=400&auto=format&fit=crop' },
    { icon: ChefHat, label: 'Kitchen', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=70&w=400&auto=format&fit=crop' },
    { icon: Coffee, label: 'Dining Room', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=70&w=400&auto=format&fit=crop' },
    { icon: Lightbulb, label: 'Lighting', image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=70&w=400&auto=format&fit=crop' },
    { icon: MonitorPlay, label: 'TV Unit', image: 'https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=70&w=400&auto=format&fit=crop' },
    { icon: Library, label: 'Study Room', image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?q=70&w=400&auto=format&fit=crop' },
    { icon: Bath, label: 'Bathroom', image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?q=70&w=400&auto=format&fit=crop' },
    { icon: TreePine, label: 'Balcony', image: 'https://images.unsplash.com/photo-1585128792020-803d29415281?q=70&w=400&auto=format&fit=crop' },
    { icon: Wind, label: 'False Ceiling', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=70&w=400&auto=format&fit=crop' }
  ]
};
