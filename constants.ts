import { Feature, Testimonial, TrustBadge } from './types';

export const FEATURES: Feature[] = [
  {
    icon: "💧",
    title: "Rapid Rehydration",
    description: "Quickly restores essential fluids and electrolytes lost from Bali Belly, much faster than drinking water."
  },
  {
    icon: "🤢",
    title: "Soothe Your Stomach",
    description: "Includes powerful anti-nausea medication to provide immediate relief from vomiting and discomfort."
  },
  {
    icon: "⚡",
    title: "Replenish Your Energy",
    description: "A blend of vitamins and minerals to fight fatigue and help you feel like yourself again, fast."
  },
  {
    icon: "🏠",
    title: "We Come To You",
    description: "Our certified medical team brings professional IV therapy right to your villa or hotel, anywhere in Bali."
  },
  {
    icon: "👨‍⚕️",
    title: "Trusted Medical Experts",
    description: "Our team is made of certified doctors and nurses who are not just medical experts, but also trained in providing a comfortable, luxury experience."
  },
  {
    icon: "⏱️",
    title: "Fast-Acting Relief",
    description: "We're available 24/7. Get professional medical help at your doorstep, typically within 2 hours."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    text: "I thought my vacation was ruined by Bali Belly. The Mounty team was at my hotel in Canggu in under 90 minutes. The IV worked wonders, my nausea was gone and I felt human again by the evening. A total lifesaver!",
    author: "Jessica L.",
    location: "Tourist, Canggu",
    rating: 5
  },
  {
    text: "Don't let Bali Belly sideline you. This service is 100% worth it. Professional, fast, and incredibly effective. I was back to enjoying my trip the very next day. So grateful!",
    author: "Tom H.",
    location: "Traveler, Ubud",
    rating: 5
  },
  {
    text: "My husband and I both got sick. Calling Mounty was the best decision we made. The nurse was so kind and professional. We felt better almost instantly. Highly recommend!",
    author: "Chloe & Ben R.",
    location: "Honeymooners, Uluwatu",
    rating: 5
  },
  {
    text: "Woke up feeling awful. The nausea and dehydration were intense. A friend recommended Mounty and they were amazing. The IV treatment was exactly what I needed to recover quickly.",
    author: "David P.",
    location: "Digital Nomad, Seminyak",
    rating: 5
  },
  {
    text: "Professional medical care delivered to your room. It's an incredible service. They took great care of me and helped me beat a nasty case of Bali Belly in record time.",
    author: "Maria S.",
    location: "Visitor, Nusa Dua",
    rating: 5
  },
  {
    text: "The fastest way to get over food poisoning. Period. The team is professional, the equipment is sterile, and the relief is immediate. Don't hesitate to call them.",
    author: "Sam K.",
    location: "Surfer, Kuta",
    rating: 5
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    icon: "✓",
    text: "Licensed Doctors & Nurses",
    subtext: "Fully certified & professional"
  },
  {
    icon: "✓",
    text: "Top-Quality Nutrients",
    subtext: "Safe and effective ingredients"
  },
  {
    icon: "✓",
    text: "Available 24/7",
    subtext: "We're always on call for you"
  },
  {
    icon: "✓",
    text: "We Come To You",
    subtext: "Serving all of Bali"
  }
];

export const WHATSAPP_LINK = "https://api.whatsapp.com/send?phone=6285142740977&text=Hello%20I%20want%20to%20consult%20about%20the%20treatment%20in%20Mounty%20Clinics%20%23WEB";