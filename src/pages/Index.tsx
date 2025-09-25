import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import ShoppingCart, { CartItem } from "@/components/ShoppingCart";
import { products, Product } from "@/data/products";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === product.id);
      
      if (existingItem) {
        toast({
          title: "Updated cart",
          description: `Increased quantity of ${product.name}`,
        });
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        toast({
          title: "Added to cart",
          description: `${product.name} has been added to your cart`,
        });
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prev =>
      prev.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart",
      variant: "destructive",
    });
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-brand-success/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <main className="container mx-auto px-4 py-8 relative z-10">
        <div className="mb-8 text-center animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-bounce-in">
            Premium Shirts & T-Shirts Collection
          </h2>
          <p className="text-text-subtle max-w-2xl mx-auto text-lg">
            Discover our exclusive collection of high-quality shirts and t-shirts. From professional dress shirts to comfortable casual wear, find your perfect style at unbeatable prices.
          </p>
        </div>

        <ProductGrid
          products={products}
          onAddToCart={handleAddToCart}
          searchQuery={searchQuery}
        />
      </main>

      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default Index;
