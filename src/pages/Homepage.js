import React from 'react';
import { Link } from 'react-router-dom';
import mainIllustration from '../assets/Illustration.png'
import seoImage from '../assets/seo.png';
import ppcImage from '../assets/ppc.png';
import socialMediaImage from '../assets/social-media.png';
import emailMarketingImage from '../assets/email-marketing.png';
import contentCreationImage from '../assets/content.png';
import analyticsImage from '../assets/analytics.png';

const HomePage = () => {
  const services = [
    { title: "Search engine optimization Courses", bg: "bg-gray-100", image: seoImage, link: "/wallet" },
    { title: "Pay-per-click advertising", bg: "bg-green-200", image: ppcImage, link: "/advertising" },
    { title: "Social Media Marketing Services", bg: "bg-black text-white", image: socialMediaImage },
    { title: "Email Marketing", bg: "bg-gray-100", image: emailMarketingImage },
    { title: "Content Creation", bg: "bg-green-200", image: contentCreationImage },
    { title: "Analytics and Tracking", bg: "bg-black text-white", image: analyticsImage },
  ];

  return (
    <div className="bg-white min-h-screen">
      <header className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center">
          <div className="font-bold text-xl">▲ Positivus</div>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">About us</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Use Cases</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Blog</a>
          </div>
          <button className="bg-white text-black border border-black px-4 py-2 rounded-full">
            Connect Wallet
          </button>
        </nav>
      </header>

      <main className="container mx-auto px-4">
        <section className="py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 pr-8">
              <h1 className="text-5xl font-bold mb-6">Navigating the digital landscape for success</h1>
              <p className="text-gray-600 mb-8 text-lg">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p>
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-300">Book a consultation</button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img src={mainIllustration} alt="Main illustration" className="w-full h-auto max-w-md mx-auto" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <h2 className="text-3xl font-bold mb-8">
            <span className="bg-green-300 px-4 py-1 rounded">Services</span>
          </h2>
          <p className="mb-12 text-xl text-gray-600">At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`${service.bg} p-8 rounded-lg flex flex-col justify-between`}>
                <div>
                  <h3 className="font-bold text-2xl mb-6">{service.title}</h3>
                  <img src={service.image} alt={`${service.title} illustration`} className="w-full h-48 object-contain mb-6" />
                </div>
                {service.link ? (
                  <Link to={service.link} className="text-black underline text-lg font-semibold self-start">
                    Learn more
                  </Link>
                ) : (
                  <button className="text-black underline text-lg font-semibold self-start">Learn more</button>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;