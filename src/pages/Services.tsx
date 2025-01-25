import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Droplets, 
  Wind, 
  Settings, 
  BookOpen,
  ChevronDown,
  Check
} from 'lucide-react';

const services = [
  {
    icon: <Droplets className="h-12 w-12 text-green-600" />,
    title: 'Hydroponic Systems',
    description: 'Complete hydroponic growing solutions for various scales.',
    features: [
      'NFT (Nutrient Film Technique) Systems',
      'Deep Water Culture (DWC)',
      'Ebb and Flow Systems',
      'Custom Solutions',
    ],
  },
  {
    icon: <Wind className="h-12 w-12 text-green-600" />,
    title: 'Aeroponic Systems',
    description: 'Advanced misting systems for optimal root development.',
    features: [
      'High-Pressure Aeroponics',
      'Low-Pressure Aeroponics',
      'Vertical Growing Solutions',
      'Automated Nutrient Delivery',
    ],
  },
  {
    icon: <Settings className="h-12 w-12 text-green-600" />,
    title: 'Maintenance',
    description: 'Regular system maintenance and optimization services.',
    features: [
      'Weekly System Checks',
      'Nutrient Management',
      'pH Balancing',
      'Equipment Repairs',
    ],
  },
  {
    icon: <BookOpen className="h-12 w-12 text-green-600" />,
    title: 'Consulting',
    description: 'Expert guidance for your hydroponic journey.',
    features: [
      'System Design',
      'Growing Strategies',
      'Environmental Control',
      'Business Planning',
    ],
  },
];

const packages = [
  {
    name: 'Starter',
    price: '$999',
    description: 'Perfect for beginners',
    features: [
      'Basic hydroponic system',
      'Installation guide',
      'Basic nutrient kit',
      'Email support',
    ],
  },
  {
    name: 'Professional',
    price: '$2,499',
    description: 'For serious growers',
    features: [
      'Advanced hydroponic/aeroponic system',
      'Professional installation',
      'Complete nutrient package',
      'Priority support',
      'Monthly maintenance visit',
      'Environmental controls',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Large-scale solutions',
    features: [
      'Custom system design',
      'Full installation & setup',
      'Advanced monitoring system',
      '24/7 support',
      'Weekly maintenance',
      'Staff training',
      'Yield optimization',
    ],
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: 'What is the difference between hydroponics and aeroponics?',
      answer: 'Hydroponics uses water as the primary growing medium, while aeroponics involves misting plant roots with nutrient solution in air. Aeroponics typically provides better oxygenation to roots but requires more precise control.',
    },
    {
      question: 'How much maintenance do these systems require?',
      answer: 'Most systems need weekly checking of nutrient levels and pH, plus monthly cleaning. Our automated systems reduce maintenance needs, and we offer regular maintenance services to handle everything for you.',
    },
    {
      question: 'What kinds of plants can I grow?',
      answer: 'Most vegetables, herbs, and leafy greens thrive in hydroponic systems. Popular choices include lettuce, tomatoes, cucumbers, peppers, and herbs like basil and mint.',
    },
    {
      question: 'How much space do I need?',
      answer: 'Systems can be scaled to your available space. Our smallest systems start at 4 square feet, while commercial solutions can be designed for any space size.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Comprehensive hydroponic and aeroponic solutions for every scale
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-green-600 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Packages */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Pricing Packages</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the perfect solution for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-4">
                    {pkg.price}
                  </div>
                  <p className="text-gray-600 mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="h-5 w-5 text-green-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="block text-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transform transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}