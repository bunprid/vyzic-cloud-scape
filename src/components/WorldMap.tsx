
import React from 'react';

const WorldMap: React.FC = () => {
  const datacenters = [
    { name: "North America East", lat: 40.7128, lng: -74.0060 },
    { name: "North America West", lat: 37.7749, lng: -122.4194 },
    { name: "Europe West", lat: 51.5074, lng: -0.1278 },
    { name: "Europe Central", lat: 52.5200, lng: 13.4050 },
    { name: "Asia Pacific", lat: 1.3521, lng: 103.8198 },
    { name: "Asia East", lat: 35.6762, lng: 139.6503 },
    { name: "Australia", lat: -33.8688, lng: 151.2093 },
  ];

  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-gradient-to-b from-vyzic-950 to-vyzic-900 rounded-2xl overflow-hidden">
      {/* World map background - simplified representation */}
      <div className="absolute inset-0 opacity-20 bg-grid-pattern"></div>
      
      {/* Datacenter locations */}
      {datacenters.map((center, index) => {
        // Convert lat/lng to rough x/y percentages for positioning
        const x = ((center.lng + 180) / 360) * 100;
        const y = ((90 - center.lat) / 180) * 100;
        
        return (
          <div 
            key={index}
            className="absolute w-3 h-3 rounded-full bg-vyzic-500 animate-pulse-slow"
            style={{ 
              left: `${x}%`, 
              top: `${y}%`,
              boxShadow: '0 0 12px rgba(60, 202, 255, 0.8)'
            }}
          >
            <div className="absolute w-6 h-6 rounded-full border-2 border-vyzic-400 -left-1.5 -top-1.5 animate-ping opacity-50"></div>
            <div className="absolute bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap -translate-y-8 left-1/2 -translate-x-1/2">
              {center.name}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WorldMap;
