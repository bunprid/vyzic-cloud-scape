
import React from 'react';
import { LucideIcon, CircleDot, CircleDashed, CircleOff } from 'lucide-react';

type NodeStatus = 'online' | 'warning' | 'offline';

interface NodesStatusCardProps {
  name: string;
  location: string;
  status: NodeStatus;
  type: string;
  lastPing: string;
  icon: LucideIcon;
}

const NodesStatusCard: React.FC<NodesStatusCardProps> = ({ 
  name, 
  location, 
  status, 
  type, 
  lastPing,
  icon: Icon
}) => {
  const statusIcon = () => {
    switch (status) {
      case 'online':
        return <CircleDot className="status-online animate-pulse-status" />;
      case 'warning':
        return <CircleDashed className="status-warning" />;
      case 'offline':
        return <CircleOff className="status-offline" />;
    }
  };

  return (
    <div className="node-status-card p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-vyzic-600 to-vyzic-800 flex items-center justify-center text-white">
            <Icon size={20} />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-sm text-slate-400">{location}</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          {statusIcon()}
          <span className={`text-sm font-medium ${status === 'online' ? 'status-online' : status === 'warning' ? 'status-warning' : 'status-offline'}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-xs text-slate-400">Type</p>
          <p className="text-sm">{type}</p>
        </div>
        <div>
          <p className="text-xs text-slate-400">Last Ping</p>
          <p className="text-sm">{lastPing}</p>
        </div>
      </div>
    </div>
  );
};

export default NodesStatusCard;
