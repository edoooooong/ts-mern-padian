import { Product } from './types/Products';

export const sampleProducts: Product[] = [
  {
    name: 'Manobo Necklace',
    image: '../images/necklace1.jpg',
    category: 'Accessories',
    price: '2,500.00',
    countInStock: 10,
    brand: 'N/A',
    description:
      'Each bead is meticulously set one after the other to form a symmetrical representation of their environment. Triangles are scaled to form the prestigious mountain ranges of which the tribes of Bukidnon are the custodians.',
    slug: 'manobo-necklace',
  },
  {
    name: 'Maranao Landap',
    image: '../images/landap.jpg',
    category: 'Household Items',
    price: '5,000.00',
    countInStock: 10,
    brand: 'N/A',
    description:
      'LANDAP is a tranditiinal hand woven malong or tube type fabric from maranao ethnicity. It is worn as a symbol of royalty and worn on special occassions such as weddings, social gatherings and many more. This Landap Satin malong is machine printed in Japan quality cotton. Premium quality and colors non fading. Can be made into dresses, costumes, bedsheets, pillow cases and many more.',
    slug: 'maranao-landap',
  },
];
