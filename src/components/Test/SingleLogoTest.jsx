import React, { useContext, useEffect, useState } from 'react';
import { LogoColorContext } from '../../contexts/LogoColorContext';
import accentureLogo from '../assets/logos/accenture.svg';

const SingleLogoTest = () => {
  const { color } = useContext(LogoColorContext);
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    fetch(accentureLogo)
      .then(response => response.text())
      .then(text => {
        setSvgContent(text.replace(/fill=".*?"/g, `fill="${color}"`));
      });
  }, [color]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{ width: '100px', height: '100px' }}
    />
  );
};

export default SingleLogoTest;
