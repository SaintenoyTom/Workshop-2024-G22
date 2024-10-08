// components/ui/Card.tsx

import React, { ReactNode } from 'react';

// Define the props for the Card component
interface CardProps {
  children: ReactNode;
  className?: string;
}

// Composant Card
export const Card: React.FC<CardProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
};

// Define the props for the CardContent component
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

// Composant CardContent
export const CardContent: React.FC<CardContentProps> = ({ children, className = '', ...props }) => {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
};
