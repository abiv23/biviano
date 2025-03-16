'use client';

import React from 'react';
import Image from 'next/image';

const FullWidthImage = ({ 
  src, 
  alt, 
  priority = false,
  height = 800,
  objectFit = 'cover',
  objectPosition = 'center'
}) => {
  // Calculate aspect ratio dynamically based on viewport width if needed
  // This example uses a fixed height but maintains full width
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt={alt || "Full width image"}
        width={0}
        height={height}
        sizes="100vw"
        className={`w-full h-auto object-${objectFit} object-${objectPosition}`}
        priority={priority}
      />
    </div>
  );
};

export default FullWidthImage;