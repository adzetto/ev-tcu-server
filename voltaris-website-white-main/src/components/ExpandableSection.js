import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const ExpandableSection = ({ title, children, color = "blue", id, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const colorClasses = {
    red: {
      border: "border-voltaris-red/30 hover:border-voltaris-red/50",
      bg: "from-voltaris-red/10 via-voltaris-neutral-100 to-voltaris-red/5",
      text: "text-voltaris-red",
      iconBg: "bg-voltaris-red/10",
      icon: "text-voltaris-red"
    },
    blue: {
      border: "border-voltaris-blue/30 hover:border-voltaris-blue/50",
      bg: "from-voltaris-blue/10 via-voltaris-neutral-100 to-voltaris-blue/5",
      text: "text-voltaris-blue",
      iconBg: "bg-voltaris-blue/10",
      icon: "text-voltaris-blue"
    },
    purple: {
      border: "border-purple-400/30 hover:border-purple-400/50", 
      bg: "from-purple-400/10 via-voltaris-neutral-100 to-purple-400/5",
      text: "text-purple-600",
      iconBg: "bg-purple-400/10",
      icon: "text-purple-600"
    },
    green: {
      border: "border-green-500/30 hover:border-green-500/50",
      bg: "from-green-500/10 via-voltaris-neutral-100 to-green-500/5",
      text: "text-green-600",
      iconBg: "bg-green-500/10",
      icon: "text-green-600"
    }
  };

  const currentColor = colorClasses[color] || colorClasses.blue;

  return (
    <div 
      id={id} 
      className={`bg-gradient-to-br ${currentColor.bg} p-6 rounded-lg ${currentColor.border} transition-all duration-300 shadow-lg`}
    >
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`text-xl font-bold ${currentColor.text}`}>{title}</h3>
        <div className={`${currentColor.iconBg} p-2 rounded-full ${currentColor.icon}`}>
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>
      
      <div className={`mt-4 transition-all duration-300 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

export default ExpandableSection;
