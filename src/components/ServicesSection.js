import React from 'react';
import '../styles/ServicesSection.css';

import { FaWifi, FaAppleAlt, FaHome, FaShuttleVan, FaConciergeBell, FaPlane, FaBriefcase, FaKey, FaShoppingCart } from 'react-icons/fa';

const services = [
  {
    icon: <FaWifi />,
    title: "High Speed Internet",
    description: "Optical fiber connections provided not only in your cabins but rather to all of the BriSphere scenic working spaces and dining areas."
  },
  {
    icon: <FaAppleAlt />,
    title: "Healthy Meals",
    description: "A healthy breakfast and pleasant dinner will be served at your space every single day for your entire stay with an option for paid orders within BriSphere."
  },
  {
    icon: <FaHome />,
    title: "Homely Stay",
    description: "Designed for working professionals with spacious interiors, comfortable beds, and sleekly attached kitchen among other comforts in your space."
  },
  {
    icon: <FaShuttleVan />,
    title: "Transportation",
    description: "Transportation services are available to ensure seamless mobility in and around BriSphere locations."
  },
  {
    icon: <FaConciergeBell />,
    title: "Food Delivery",
    description: "Enjoy convenient food delivery services right to your cabin, ensuring a productive and pleasant stay at BriSphere."
  },
  {
    icon: <FaPlane />,
    title: "Tourism",
    description: "Explore nearby attractions and scenic spots with guided tourism options provided by BriSphere."
  },
  {
    icon: <FaBriefcase />,
    title: "Job Opportunities",
    description: "Access to job opportunities and networking events tailored for remote professionals working at BriSphere."
  },
  {
    icon: <FaKey />,
    title: "Rental Service",
    description: "Rental services for equipment and essentials, ensuring you have everything you need during your stay."
  },
  {
    icon: <FaShoppingCart />,
    title: "Online Shop",
    description: "Access to an online shop where you can purchase essentials, souvenirs, and more, directly from BriSphere."
  },
];

const ServiceSection = () => {
  return (
    <section className="service-section">
      <h2>Our Services</h2>
      <div className="service-cards-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
