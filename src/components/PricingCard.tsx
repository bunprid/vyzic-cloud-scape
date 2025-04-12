
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPrimary?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  description, 
  features,
  isPrimary = false
}) => {
  return (
    <div className={`glass-card rounded-xl p-6 flex flex-col ${
      isPrimary 
        ? 'border-vyzic-500 shadow-lg shadow-vyzic-500/10 relative' 
        : 'border-white/20'
    }`}>
      {isPrimary && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-vyzic-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex items-end gap-1">
          <span className="text-3xl font-bold">{price}</span>
          {price !== 'Custom' && <span className="text-muted-foreground">/month</span>}
        </div>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check size={18} className="text-vyzic-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={isPrimary ? "bg-vyzic-600 hover:bg-vyzic-700 w-full" : "bg-secondary hover:bg-secondary/80 text-foreground w-full"}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PricingCard;
