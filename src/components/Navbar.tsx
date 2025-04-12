
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Cloud } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full py-4 bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Cloud className="h-8 w-8 text-vyzic-600" />
          <span className="font-bold text-2xl text-gradient">Vyzic</span>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a href="#services" className="text-foreground/80 hover:text-vyzic-600 font-medium">Services</a>
          <a href="#features" className="text-foreground/80 hover:text-vyzic-600 font-medium">Features</a>
          <a href="#datacenter" className="text-foreground/80 hover:text-vyzic-600 font-medium">Data Centers</a>
          <a href="#pricing" className="text-foreground/80 hover:text-vyzic-600 font-medium">Pricing</a>
          <a href="#contact" className="text-foreground/80 hover:text-vyzic-600 font-medium">Contact</a>
          <Button className="ml-4 bg-vyzic-600 hover:bg-vyzic-700">Get Started</Button>
        </nav>
        
        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border">
            <div className="container flex flex-col py-4 gap-4">
              <a href="#services" className="py-2 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Services</a>
              <a href="#features" className="py-2 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Features</a>
              <a href="#datacenter" className="py-2 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Data Centers</a>
              <a href="#pricing" className="py-2 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Pricing</a>
              <a href="#contact" className="py-2 px-4 hover:bg-muted rounded-md" onClick={() => setIsOpen(false)}>Contact</a>
              <Button className="bg-vyzic-600 hover:bg-vyzic-700 w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
