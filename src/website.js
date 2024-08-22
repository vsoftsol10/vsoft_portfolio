import React from 'react';
import './ServicePage.scss';

const ServicePage = () => {
  const packages = [
    {
      title: 'HOME PACKAGE',
      price: '₹ 15,000',
      details: [
        'Up to 10 Pages',
        'Image Optimization',
        'Responsive/Mobile Friendly',
        'Website Security/SSL',
        'Free Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: 'path/to/home-package-image.jpg',
    },
    {
      title: 'PRO PACKAGE',
      price: '₹ 20,000',
      details: [
        'Up to 20 Pages',
        'Image Optimization',
        'Structure Optimization',
        '3 Website Security',
        'Responsive / Mobile Friendly',
        'Website Security/SSL',
        'FREE Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: 'path/to/pro-package-image.jpg',
    },
    {
      title: 'E-COMMERCE PACKAGE',
      price: '₹ 30,000',
      details: [
        'Up to 100 Products/Variations & 20 Pages',
        'Image Optimization',
        'Structure Optimizations',
        'SEO Optimizations',
        'E-Commerce Integration',
        'Banners for Core Pages (5 max)',
        'FREE Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: 'path/to/ecommerce-package-image.jpg',
    },
    {
      title: 'TAILORED PACKAGE',
      price: 'Depends On Requirements',
      details: [
        'Unlimited Pages',
        'Image Optimization',
        'Structure Optimization',
        'SEO Optimization',
        'E-Commerce Integration',
        'Third Party Integration',
        'Banners for Core Pages (10 max)',
        'Responsive / Mobile Friendly',
        'Website Security/SSL',
        'FREE Basic Hosting',
        'Performance Tracking',
        '1 Month FREE Website Maintenance Package',
      ],
      image: 'path/to/tailored-package-image.jpg',
    },
  ];

  return (
    <div className="service-section">
      <h2 className="service-heading">Website Creation Packages</h2>
      {packages.map((pkg, index) => (
        <div className={`service-package ${index % 2 === 0 ? '' : 'reverse'}`} key={pkg.title}>
          <img src={pkg.image} alt={pkg.title} className="service-image" />
          <div className="package-details">
            <h3>{pkg.title}</h3>
            <p>{pkg.price}</p>
            <ul>
              {pkg.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicePage;
