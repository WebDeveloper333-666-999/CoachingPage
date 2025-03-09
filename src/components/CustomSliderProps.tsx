import React from 'react';
import { CustomArrowProps } from 'react-slick';

// Custom Previous Arrow Component
export const CustomPrevArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom-prev-arrow`}
        style={{ ...style, display: 'block', background: '#8b5cf6', borderRadius: '50%', width: '21px', height: '21px', textAlign: 'center', lineHeight: '40px', cursor: 'pointer' }}
        onClick={onClick}
      >
        &larr; {/* Left arrow symbol */}
      </div>
    );
  };
  
  // Custom Next Arrow Component
export const CustomNextArrow: React.FC<CustomArrowProps> = ({ className, style, onClick }) => {
    return (
      <div
        className={`${className} custom-next-arrow`}
        style={{ ...style, display: 'block', background: '#8b5cf6', borderRadius: '50%', width: '21px', height: '21px', textAlign: 'center', lineHeight: '40px', cursor: 'pointer' }}
        onClick={onClick}
      >
        &rarr; {/* Right arrow symbol */}
      </div>
    );
  };