import React, { useState } from 'react';
import { X } from 'lucide-react';

const categories = ['all', 'plants', 'equipment', 'office'] as const;

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1558449028-b53a39d100fc?auto=format&fit=crop&q=80',
    title: 'Hydroponic Lettuce',
    category: 'plants',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?auto=format&fit=crop&q=80',
    title: 'Growing Room',
    category: 'office',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?auto=format&fit=crop&q=80',
    title: 'NFT System',
    category: 'equipment',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1516458464372-eea4ab222b31?auto=format&fit=crop&q=80',
    title: 'Vertical Farm',
    category: 'office',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1621628898826-8956e10449eb?auto=format&fit=crop&q=80',
    title: 'Tomato Plants',
    category: 'plants',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1589469526983-0887ebe10072?auto=format&fit=crop&q=80',
    title: 'Aeroponic System',
    category: 'equipment',
  },
] as const;

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<typeof images[number] | null>(
    null
  );
  const [activeCategory, setActiveCategory] = useState<typeof categories[number]>(
    'all'
  );

  const filteredImages = images.filter(
    (image) => activeCategory === 'all' || image.category === activeCategory
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-green-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Gallery</h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Explore our hydroponic and aeroponic systems in action
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium ${
                  activeCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                  <p className="text-white font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="text-white text-center mt-4 text-xl">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}