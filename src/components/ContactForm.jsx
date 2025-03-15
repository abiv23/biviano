'use client'

import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Script from 'next/script';

export default function ContactForm({ 
  onSubmit, 
  onCancel, 
  title = "Contact Us", 
  submitText = "Send Message", 
  cancelText = "Cancel",
  darkMode = false
}) {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState('');
  const recaptchaRef = useRef(null);

  // Replace with your actual reCAPTCHA site key
  const RECAPTCHA_SITE_KEY = 'YOUR_RECAPTCHA_SITE_KEY';

  // Initialize reCAPTCHA when component mounts
  useEffect(() => {
    // This function will be called once the reCAPTCHA script is loaded
    window.onRecaptchaLoad = () => {
      setRecaptchaLoaded(true);
    };

    return () => {
      // Clean up
      window.onRecaptchaLoad = undefined;
    };
  }, []);

  const executeRecaptcha = async () => {
    if (!window.grecaptcha || !recaptchaLoaded) {
      setRecaptchaError('reCAPTCHA not loaded yet');
      return null;
    }

    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });
      return token;
    } catch (error) {
      console.error('reCAPTCHA execution error:', error);
      setRecaptchaError('Failed to verify reCAPTCHA');
      return null;
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setRecaptchaError('');
    
    // Execute reCAPTCHA and get token
    const recaptchaToken = await executeRecaptcha();
    
    if (!recaptchaToken) {
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Include the recaptcha token with the form data
      await onSubmit({...formData, recaptchaToken});
    } catch (error) {
      console.error('Error submitting form:', error);
      setRecaptchaError('An error occurred while submitting the form.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine text color based on darkMode prop
  const textColor = darkMode ? 'text-white' : 'text-gray-800';
  const labelColor = darkMode ? 'text-gray-300' : 'text-gray-700';
  const inputBgColor = darkMode ? 'bg-gray-800' : 'bg-white';
  const inputBorderColor = darkMode ? 'border-gray-700' : 'border-gray-300';
  const inputTextColor = darkMode ? 'text-white' : 'text-gray-900';
  const formBgColor = darkMode ? 'bg-transparent' : 'bg-white';

  return (
    <>
      {/* Load reCAPTCHA v3 script */}
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}&onload=onRecaptchaLoad`}
        strategy="afterInteractive"
      />
      
      <div className={`${formBgColor} p-6 rounded-lg shadow-lg max-w-md w-full relative`}>
        {/* Close button (X) in the top-right corner */}
        {onCancel && (
          <button 
            type="button"
            onClick={onCancel}
            className={`absolute top-3 right-3 ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'} focus:outline-none`}
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}

        <h2 className={`text-2xl font-bold mb-4 ${textColor}`}>{title}</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className={`block ${labelColor} mb-2 text-sm font-medium`}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-md ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className={`block ${labelColor} mb-2 text-sm font-medium`}>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-md ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className={`block ${labelColor} mb-2 text-sm font-medium`}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 ${inputBgColor} border ${inputBorderColor} rounded-md ${inputTextColor} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              required
            ></textarea>
          </div>
          
          {recaptchaError && (
            <div className="mb-4 text-red-500 text-sm">
              {recaptchaError}
            </div>
          )}
          
          <div ref={recaptchaRef} className="hidden"></div>
          
          <div className="flex justify-between">
            {onCancel && (
              <Button
                type="button"
                variant="outline"
                onClick={onCancel}
                className={`px-4 py-2 ${darkMode ? 'border-gray-600 text-gray-300' : ''}`}
              >
                {cancelText}
              </Button>
            )}
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-green-500 hover:bg-green-600'} text-white ${!onCancel ? 'w-full' : ''}`}
            >
              {isSubmitting ? 'Sending...' : submitText}
            </Button>
          </div>
          
          <p className={`mt-4 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} text-center`}>
            This site is protected by reCAPTCHA and the Google
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"> Privacy Policy</a> and
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300"> Terms of Service</a> apply.
          </p>
        </form>
      </div>
    </>
  );
}