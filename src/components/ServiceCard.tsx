
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon }) => {
  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="h-14 w-14 rounded-lg bg-gradient-to-br from-vyzic-500 to-vyzic-700 flex items-center justify-center text-white mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
