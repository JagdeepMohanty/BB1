import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Stores() {
  const stores = [
    {
  name: 'CENTRAL KITCHEN AND MAIN BRANCH',
  address: '23, 1st Floor, Balaji Complex, MANTRI TRANQUIL, Apartment Road, A Block, Subramanyapura, Bengaluru - 560061.',
  phone: '+91 88923 24272',
  coordinates: {
    lat: 12.9050,
    lng: 77.5460,
  },
  hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
},
{
  name: 'SUBRAMANYAPURA ROAD',
  address: '#25, 4th main, JHBC Layout, Thurahalli main Road, Subramanyapura, Bengaluru - 560061.',
  phone: '+91 89719 68303',
  coordinates: {
    lat: 12.9050,
    lng: 77.5460,
  },
  hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
},
{
  name: 'BANNERGHATTA ROAD BRANCH',
  address: '4th Main Road, Bannerghatta Rd, Arekere MICO Layout 2nd stage, Arekree, Bengaluru - 560076.',
  phone: '+91 99803 48303',
  coordinates: {
    lat: 12.8872,
    lng: 77.5960,
  },
  hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
},
{
  name: 'GIRINAGAR BRANCH',
  address: 'Opp. Vivekananda Park, Giri Nagar, Nagendra Block, Banashankari 1st Stage, Banashankari, Bengaluru - 560085.',
  phone: '+91 99014 47303',
  coordinates: {
    lat: 12.9420,
    lng: 77.5530,
  },
  hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
},
{
  name: 'PADMANABHNAGAR BRANCH',
  address: '# 29, 18th main Padmanabhanagar, Bengaluru - 560070',
  phone: '+91 72048 51093',
  coordinates: {
    lat: 12.9180,
    lng: 77.5600,
  },
  hours: 'Mon-Sun: 8:00 AM - 1:00 PM, 4:00 PM - 9:00 PM',
}
,
  ];
  

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Our Stores</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store) => (
            <div key={store.name} className="card p-6">
              <h2 className="text-xl font-semibold mb-4">{store.name}</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mt-1 mr-3" />
                  <p className="text-gray-600 dark:text-gray-300">{store.address}</p>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <p className="text-gray-600 dark:text-gray-300">{store.phone}</p>
                </div>
                
                {store.hours && (
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-primary mr-3" />
                    <p className="text-gray-600 dark:text-gray-300">{store.hours}</p>
                  </div>
                )}
              </div>

              {store.coordinates ? (
                <a
                  href={`https://www.google.com/maps?q=${store.coordinates.lat},${store.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-6 inline-block"
                >
                  Get Directions
                </a>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
