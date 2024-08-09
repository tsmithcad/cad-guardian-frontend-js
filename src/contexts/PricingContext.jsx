// src/contexts/PricingContext.jsx
import React, { createContext, useState, useEffect, useContext } from 'react';
import pricingData from '../data/pricing.json';




const PricingContext = createContext();

const fetchPricingData = (billingPeriod) => {
  return pricingData[billingPeriod];
};

export const PricingProvider = ({ children }) => {
  const [billingPeriod, setBillingPeriod] = useState('annual');
  const [pricingPlans, setPricingPlans] = useState([]);

  useEffect(() => {
    const data = fetchPricingData(billingPeriod);
    setPricingPlans(data);
  }, [billingPeriod]);

  return (
    <PricingContext.Provider value={{ billingPeriod, setBillingPeriod, pricingPlans }}>
      {children}
    </PricingContext.Provider>
  );
};

export const usePricing = () => {
  return useContext(PricingContext);
};
