import React from 'react';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
}

export const CustomButton: React.FC<CustomButtonProps> = ({ 
  children, 
  variant = 'secondary', 
  icon, 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-3 py-2 text-sm font-medium flex items-center";
  const variantStyle = variant === 'primary' 
    ? "bg-[#004EEB] text-white hover:bg-blue-700 rounded-md" 
    : "btn-custom shadow-custom-button text-gray-700 bg-white hover:bg-gray-50";

  return (
    <button 
      className={`${baseStyle} ${variantStyle} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
