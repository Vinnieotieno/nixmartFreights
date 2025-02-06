// TawkToComponent.jsx
import React, { useEffect } from 'react';

const TawkToComponent = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = 'https://embed.tawk.to/6926cef9a3f64cac6ebedf2660079b15107b29e7/default';
    script.async = true;
    script.charset = 'UTF-8';
    script.setAttribute('crossorigin', '*');
    document.body.appendChild(script);
  }, []);

  return null; // No UI component needed, only the script
};

export default TawkToComponent;
