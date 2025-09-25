import { Product } from "@/data/products";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  searchQuery: string;
}

const ProductGrid = ({ products, onAddToCart, searchQuery }: ProductGridProps) => {
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.color.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredProducts.length === 0 && searchQuery) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="h-24 w-24 bg-muted rounded-full flex items-center justify-center mb-6">
          <span className="text-4xl">👔</span>
        </div>
        <h3 className="text-xl font-semibold mb-2">No products found</h3>
        <p className="text-text-subtle max-w-md">
          We couldn't find any products matching "{searchQuery}". Try searching for different keywords.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

export default ProductGrid;