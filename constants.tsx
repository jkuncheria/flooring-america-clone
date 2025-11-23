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