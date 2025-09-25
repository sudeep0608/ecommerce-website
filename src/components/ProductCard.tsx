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
    <Card className="group overflow-hidden border-border bg-surface-elevated shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
      <div className="aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
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
            <span className="text-2xl font-bold text-brand-primary">
              ${product.price}
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
          className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-button transition-smooth"
          size="sm"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;