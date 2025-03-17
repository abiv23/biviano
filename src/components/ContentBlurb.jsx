import React from 'react';

export default function ContentBlurb({ 
  header, 
  text1, 
  text2,
  text3,
  highlightColor = "violet",
  icon = null,
  actionText = null,
  onActionClick = () => {},
  imgSrc = null,
  imgAlt = "Featured image"
}) {
  // Map of color options for the highlight accent (Material Design palette)
  const colorMap = {
    violet: {
      bg: "bg-violet-500",
      text: "text-violet-500",
      hover: "hover:bg-violet-600",
      ripple: "focus:ring-indigo-300"
    },
    indigo: {
      bg: "bg-indigo-500",
      text: "text-indigo-500",
      hover: "hover:bg-indigo-600",
      ripple: "focus:ring-indigo-300"
    },
    blue: {
      bg: "bg-blue-500",
      text: "text-blue-500",
      hover: "hover:bg-blue-600",
      ripple: "focus:ring-blue-300"
    },
    purple: {
      bg: "bg-purple-500",
      text: "text-purple-500",
      hover: "hover:bg-purple-600",
      ripple: "focus:ring-purple-300"
    },
    teal: {
      bg: "bg-teal-500",
      text: "text-teal-500",
      hover: "hover:bg-teal-600",
      ripple: "focus:ring-teal-300"
    },
    emerald: {
      bg: "bg-emerald-500",
      text: "text-emerald-500",
      hover: "hover:bg-emerald-600",
      ripple: "focus:ring-emerald-300"
    },
    rose: {
      bg: "bg-rose-500",
      text: "text-rose-500",
      hover: "hover:bg-rose-600",
      ripple: "focus:ring-rose-300"
    }
  };

  const colors = colorMap[highlightColor] || colorMap.indigo;

  // If no image is provided, only render the content card
  if (!imgSrc) {
    return (
      <div className="flex justify-center w-full p-4">
        <div className="max-w-md w-full rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
          {/* Colored header bar - always visible even without icon */}
          <div className={`${colors.bg} h-3 w-full`}></div>
          
          {/* Optional icon that sits on the header bar */}
          {icon && (
            <div className="flex justify-center -mt-8 mb-2">
              <div className={`w-16 h-16 rounded-full ${colors.bg} p-1 shadow-lg`}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl text-gray-800">
                  {icon}
                </div>
              </div>
            </div>
          )}
          
          {/* Card content with increased padding */}
          <div className="p-6">
            <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
              {header}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
              {text}
            </p>
            
            {/* Optional action button - Material style with more emphasis */}
            {actionText && (
              <div className="flex justify-end">
                <button 
                  onClick={onActionClick}
                  className={`uppercase font-medium ${colors.text} py-2 px-6 rounded focus:outline-none focus:ring-2 ${colors.ripple} transition-colors`}
                >
                  {actionText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // If image is provided, render two cards in a flex container
  return (
    <div className="flex flex-col md:flex-row w-full p-12 gap-4">
      {/* Content card - 1/4 width on desktop */}
      <div className="w-full md:w-2/5">
        <div className="w-full rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-full">
          {/* Colored header bar - always visible even without icon */}
          <div className={`${colors.bg} h-3 w-full`}></div>
          
          {/* Optional icon that sits on the header bar */}
          {icon && (
            <div className="flex justify-center -mt-8 mb-2">
              <div className={`w-16 h-16 rounded-full ${colors.bg} p-1 shadow-lg`}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl text-gray-800">
                  {icon}
                </div>
              </div>
            </div>
          )}
          
          {/* Card content with increased padding */}
          <div className="p-6 pt-10 text-center">
            <h2 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
              {header}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
              {text1}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
              {text2}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-base">
              {text3}
            </p>
            
            {/* Optional action button - Material style with more emphasis */}
            {actionText && (
              <div className="flex justify-end">
                <button 
                  onClick={onActionClick}
                  className={`uppercase font-medium ${colors.text} py-2 px-6 rounded focus:outline-none focus:ring-2 ${colors.ripple} transition-colors`}
                >
                  {actionText}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image card - 3/4 width on desktop */}
      <div className="w-full md:w-3/5">
        <div className="w-full rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 h-full">
          <img 
            src={imgSrc} 
            alt={imgAlt} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}