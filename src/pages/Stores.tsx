import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Stores() {
  const stores = [
    {
      name: 'CENTRAL KITCHEN AND MAIN BRANCH',
      address: '23, 1st Floor, Balaji Complex, MANTRI TRANQUIL, Apartment Road, A Block, Subramanyapura, Bengaluru - 560061.',
      phone: '+91 88923 24272',
      coordinates: { lat: 12.9050, lng: 77.5460 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
    {
      name: 'SUBRAMANYAPURA ROAD',
      address: '#25, 4th main, JHBC Layout, Thurahalli main Road, Subramanyapura, Bengaluru - 560061.',
      phone: '+91 89719 68303',
      coordinates: { lat: 12.9050, lng: 77.5460 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
    {
      name: 'BANNERGHATTA ROAD BRANCH',
      address: '4th Main Road, Bannerghatta Rd, Arekere MICO Layout 2nd stage, Arekree, Bengaluru - 560076.',
      phone: '+91 99803 48303',
      coordinates: { lat: 12.8872, lng: 77.5960 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
    {
      name: 'GIRINAGAR BRANCH',
      address: 'Opp. Vivekananda Park, Giri Nagar, Nagendra Block, Banashankari 1st Stage, Banashankari, Bengaluru - 560085.',
      phone: '+91 99014 47303',
      coordinates: { lat: 12.9420, lng: 77.5530 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
    {
      name: 'PADMANABHNAGAR BRANCH',
      address: '# 29, 18th main Padmanabhanagar, Bengaluru - 560070',
      phone: '+91 72048 51093',
      coordinates: { lat: 12.9180, lng: 77.5600 },
      hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
    },
  ];

  return (
    <div className="min-h-screen py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="section-title">Our Stores</h1>
          <p className="section-subtitle">Visit us at any of our locations across Bangalore</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {stores.map((store) => (
            <div
              key={store.name}
              className="glass-card p-8 flex flex-col h-full group hover:-translate-y-2 transition-all duration-500"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl font-bold leading-tight">{store.name}</h2>
              </div>

              <div className="flex-1 space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{store.address}</p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{store.phone}</p>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{store.hours}</p>
                </div>
              </div>

              {store.coordinates && (
                <a
                  href={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 text-center"
                >
                  Get Directions
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
