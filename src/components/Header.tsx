import { ShoppingCart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { User } from "lucide-react";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
  onCartClick: () => void;
}

const Header = ({ searchQuery, onSearchChange, cartCount, onCartClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-gradient-surface backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
                StyleHub
              </h1>
            </div>
            
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2 hover:bg-accent/10 transition-all duration-300 hover:scale-105">
                  <User className="h-4 w-4" />
                  Login
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-center bg-gradient-primary bg-clip-text text-transparent">
                    Welcome to StyleHub
                  </DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="login" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                  </TabsList>
                  <TabsContent value="login" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password">Password</Label>
                      <Input id="password" type="password" placeholder="Enter your password" />
                    </div>
                    <Button className="w-full bg-gradient-accent hover:opacity-90 hover:scale-105 transition-all duration-300">
                      Login
                    </Button>
                  </TabsContent>
                  <TabsContent value="signup" className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" type="text" placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input id="signup-email" type="email" placeholder="Enter your email" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input id="signup-password" type="password" placeholder="Create a password" />
                    </div>
                    <Button className="w-full bg-gradient-accent hover:opacity-90 hover:scale-105 transition-all duration-300">
                      Create Account
                    </Button>
                  </TabsContent>
                </Tabs>
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="flex-1 max-w-md relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-subtle" />
            <Input
              type="text"
              placeholder="Search shirts and t-shirts..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 bg-surface-elevated border-border focus:ring-brand-accent"
            />
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={onCartClick}
            className="relative hover:bg-accent/10 border-border transition-all duration-300 hover:scale-110 hover:shadow-glow"
          >
            <ShoppingCart className="h-5 w-5" />
            {cartCount > 0 && (
              <Badge 
                variant="destructive" 
                className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs bg-brand-accent hover:bg-brand-accent"
              >
                {cartCount}
              </Badge>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;