export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'shirt' | 't-shirt';
  color: string;
  size: string[];
  description?: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: '/api/placeholder/300/400',
    category: 't-shirt',
    color: 'White',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Premium cotton blend for everyday comfort'
  },
  {
    id: '2', 
    name: 'Navy Blue Dress Shirt',
    price: 79.99,
    image: '/api/placeholder/300/400',
    category: 'shirt',
    color: 'Navy Blue',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Professional cotton dress shirt perfect for the office'
  },
  {
    id: '3',
    name: 'Black V-Neck T-Shirt',
    price: 24.99,
    image: '/api/placeholder/300/400',
    category: 't-shirt',
    color: 'Black',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Stylish v-neck design in soft cotton fabric'
  },
  {
    id: '4',
    name: 'Light Blue Casual Shirt',
    price: 54.99,
    image: '/api/placeholder/300/400',
    category: 'shirt',
    color: 'Light Blue',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Relaxed fit shirt perfect for casual occasions'
  },
  {
    id: '5',
    name: 'Gray Crew Neck T-Shirt',
    price: 22.99,
    image: '/api/placeholder/300/400',
    category: 't-shirt',
    color: 'Gray',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Comfortable crew neck in heather gray'
  },
  {
    id: '6',
    name: 'White Button-Down Shirt',
    price: 69.99,
    image: '/api/placeholder/300/400',
    category: 'shirt',
    color: 'White',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    description: 'Classic white dress shirt with button-down collar'
  },
  {
    id: '7',
    name: 'Red Polo T-Shirt',
    price: 39.99,
    image: '/api/placeholder/300/400',
    category: 't-shirt',
    color: 'Red',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Classic polo style with collar and three-button placket'
  },
  {
    id: '8',
    name: 'Striped Cotton Shirt',
    price: 49.99,
    image: '/api/placeholder/300/400',
    category: 'shirt',
    color: 'Blue/White',
    size: ['S', 'M', 'L', 'XL'],
    description: 'Timeless striped pattern in premium cotton'
  }
];