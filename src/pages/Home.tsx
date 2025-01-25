import React from 'react';
import { Link } from 'react-router-dom';
import { Droplets, Leaf, Sun, Wind } from 'lucide-react';

const features = [
  {
    icon: <Droplets className="h-8 w-8 text-green-600" />,
    title: 'Water Efficiency',
    description: 'Uses up to 90% less water than traditional farming methods.',
  },
  {
    icon: <Sun className="h-8 w-8 text-green-600" />,
    title: 'Year-Round Growing',
    description: 'Control your growing environment for consistent harvests.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: 'Space Optimization',
    description: 'Maximize yield in minimal space with vertical farming.',
  },
  {
    icon: <Wind className="h-8 w-8 text-green-600" />,
    title: 'Clean Technology',
    description: 'Sustainable farming with reduced environmental impact.',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div 
        className="relative h-[80vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Revolutionizing Indoor Farming
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Experience the future of agriculture with our innovative hydroponic and aeroponic solutions.
            </p>
            <Link
              to="/about"
              className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Hydroponics?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Discover the advantages of modern farming technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "The team's expertise in hydroponics transformed our urban farming project.",
                author: "Sarah Johnson",
                role: "Urban Farm Manager",
              },
              {
                quote: "Incredible results with their aeroponic systems. Our yield increased by 40%.",
                author: "Michael Chen",
                role: "Restaurant Owner",
              },
              {
                quote: "Professional service and outstanding support throughout our journey.",
                author: "Emily Rodriguez",
                role: "Community Garden Director",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-green-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Hydroponic Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Contact us today to learn more about our solutions
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}