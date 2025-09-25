import { ShoppingCart, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-surface-elevated shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in">
      <div className="aspect-[3/4] overflow-hidden bg-muted relative">
        <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-0"
        />
      </div>
      </div>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between">
            <h3 className="font-semibold text-foreground line-clamp-2 leading-tight">
              {product.name}
            </h3>
            <Badge 
              variant="secondary" 
              className="ml-2 text-xs bg-muted text-muted-foreground"
            >
              {product.category}
            </Badge>
          </div>
          
          <p className="text-sm text-text-subtle">
            Color: {product.color}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            <div className="flex gap-1">
              {product.size.slice(0, 3).map((size) => (
                <Badge key={size} variant="outline" className="text-xs">
                  {size}
                </Badge>
              ))}
              {product.size.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{product.size.length - 3}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          onClick={() => onAddToCart(product)}
          className="w-full bg-gradient-accent hover:opacity-90 hover:scale-105 text-accent-foreground shadow-button transition-all duration-300 animate-pulse-glow"
          size="sm"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
        <Button 
          variant="outline"
          className="w-full mt-2 border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-accent-foreground transition-all duration-300"
          size="sm"
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;