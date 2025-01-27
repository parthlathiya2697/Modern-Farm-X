import React from 'react';
import { Users, Target, Lightbulb } from 'lucide-react';

const teamMembers = [
  {
    name: 'Parth Lathiya',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'B.Tech in Computer Science and Engineering with 15+ years of experience in hydroponic systems.',
  },
  {
    name: 'Devam Gujarati',
    role: 'Operations Manager (OM)',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Experienced in managing operations and logistics for hydroponic systems.'
  },
  {
    name: 'Nilkanth',
    role: 'Chief Agricultural Officer (CAO)',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    bio: 'Expert in aeroponic systems and automated growing environments.',
  },
];

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Story</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Founded in 2020, Modern FarmX emerged from a vision to revolutionize urban farming
            through innovative hydroponic and aeroponic technologies.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To make sustainable indoor farming accessible to everyone through
                innovative hydroponic solutions.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To lead the transformation of urban agriculture and create a more
                sustainable future for food production.
              </p>
            </div>
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Our Values</h3>
              <p className="text-gray-600">
                Innovation, sustainability, and excellence in everything we do to
                serve our community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experts dedicated to revolutionizing indoor farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-green-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Office Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Innovation Hub
              </h2>
              <p className="text-gray-600 mb-6">
                Our 500 sq. ft. office space serves as both our headquarters and
                an experimental facility where we test and perfect our hydroponic
                and aeroponic systems. This controlled environment allows us to:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-3"></span>
                  Test new growing techniques and technologies
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-3"></span>
                  Monitor plant growth in different conditions
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-3"></span>
                  Develop optimal nutrient solutions
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-green-600 rounded-full mr-3"></span>
                  Train clients on system operation
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?auto=format&fit=crop&q=80"
                alt="Our office space"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}