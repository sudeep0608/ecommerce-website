import { Minus, Plus, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Product } from "@/data/products";

export interface CartItem extends Product {
  quantity: number;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (productId: string, newQuantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

const ShoppingCart = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}: ShoppingCartProps) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background shadow-xl">
        <Card className="h-full border-0 rounded-none">
          <CardHeader className="flex flex-row items-center justify-between border-b bg-gradient-surface">
            <CardTitle className="text-xl font-bold">
              Shopping Cart
              {totalItems > 0 && (
                <Badge className="ml-2 bg-brand-accent text-accent-foreground">
                  {totalItems}
                </Badge>
              )}
            </CardTitle>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-auto p-0">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                <div className="h-16 w-16 bg-muted rounded-full flex items-center justify-center mb-4">
                  <Trash2 className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Your cart is empty</h3>
                <p className="text-text-subtle">Add some items to get started!</p>
              </div>
            ) : (
              <div className="space-y-0">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="p-4 border-b border-border">
                    <div className="flex gap-3">
                      <div className="h-16 w-16 bg-muted rounded-md overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <h4 className="font-medium text-sm leading-tight">{item.name}</h4>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => onRemoveItem(item.id)}
                            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <p className="text-xs text-text-subtle">
                          {item.color} • {item.category}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="h-6 w-6 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="text-sm font-medium w-8 text-center">
                              {item.quantity}
                            </span>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-6 w-6 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          
                          <span className="font-semibold text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          {cartItems.length > 0 && (
            <CardFooter className="border-t bg-gradient-surface p-4 space-y-4">
              <div className="w-full space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal ({totalItems} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-gradient-accent hover:opacity-90 text-accent-foreground shadow-button transition-smooth"
                size="lg"
              >
                Checkout
              </Button>
            </CardFooter>
          )}
        </Card>
      </div>
    </div>
  );
};

export default ShoppingCart;