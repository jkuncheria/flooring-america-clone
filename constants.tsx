import React from 'react';
import { NavItem, Category, Feature } from './types';
import { BadgeCheck, Users, Wrench, Truck } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Hardwood', href: '/hardwood' },
  { label: 'Carpet', href: '/carpet' },
  { label: 'Tile', href: '/tile' },
  { label: 'Luxury Vinyl', href: '/luxury-vinyl' },
  { label: 'Laminate', href: '/laminate' },
  { label: 'About Us', href: '/about' },
  { label: 'Financing', href: '/financing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
  { label: '360 Tour', href: 'https://www.google.com/maps/place/The+Carpet+Corner/@42.2508143,-88.0019447,3a,75y,266.83h,73.46t/data=!3m7!1e1!3m5!1sCIHM0ogKEICAgID48_X-_QE!2e10!6shttps:%2F%2Flh3.googleusercontent.com%2Fgpms-cs-s%2FAPRy3c-jAVWOA_h6WE-_y1hJouSkwFYQyZV_CN6maA2cHfCtzdsMIvob0p45tx2u_Omr2NHExR5e8Gi48RmKX9bKe_PnsXQP04NyWrpGGIxo4sP_66HG-DU7SA7y8g-fhOjMWQaVYrC9%3Dw900-h600-k-no-pi16.541162677223724-ya46.743868940529154-ro0-fo100!7i9684!8i4842!4m19!1m9!3m8!1s0x880f979ad494ea6d:0x91c6da184b67096e!2sThe+Carpet+Corner!8m2!3d42.2507605!4d-88.0018893!9m1!1b1!16s%2Fg%2F1tk1nl4q!3m8!1s0x880f979ad494ea6d:0x91c6da184b67096e!8m2!3d42.2507605!4d-88.0018893!10e5!14m1!1BCgIgARICCAI!16s%2Fg%2F1tk1nl4q?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D' },
];

export const CATEGORIES: Category[] = [
  { id: 'hardwood', name: 'Hardwood', image: '/products/hardwood.jpg' },
  { id: 'carpet', name: 'Carpet', image: '/products/carpet.png' },
  { id: 'luxury-vinyl', name: 'Luxury Vinyl', image: '/products/vinyl.png' },
  { id: 'tile', name: 'Tile', image: '/products/tile.jpg' },
  { id: 'laminate', name: 'Laminate', image: '/products/laminate.jpg' },
];

export const DIFFERENCE_FEATURES: Feature[] = [
  {
    title: 'Expert Adviors',
    description: 'Our local experts utilize their expansive knowledge to guide you to the perfect floor.',
    icon: <Users className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Incredible Selection',
    description: 'From hardwood to carpet, we offer a massive selection of top-quality flooring.',
    icon: <BadgeCheck className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'Professional Installation',
    description: 'Rely on our certified installers to get the job done right, the first time.',
    icon: <Wrench className="w-8 h-8 text-blue-900" />,
  },
  {
    title: 'The Adore Your Floor Guarantee',
    description: 'If you don’t love your new 5-Star floor, we’ll replace it for free.',
    icon: <Truck className="w-8 h-8 text-blue-900" />,
  },
];