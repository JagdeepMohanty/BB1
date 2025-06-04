import React from 'react';
import { Heart, Utensils, Users } from 'lucide-react';

export function Community() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Community & CSR</h1>

        {/* Mission Statement */}
        <section className="mb-16">
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Our Commitment to Community</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At Butter Batter, we believe in giving back to the community that has supported us. 
              Through various initiatives and partnerships, we work to make a positive impact 
              on society and help those in need.
            </p>
          </div>
        </section>

        {/* Initiatives */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Our Initiatives</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Hunger Relief</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We partner with local food banks and NGOs to provide fresh, nutritious food 
                to those in need.
              </p>
            </div>
            <div className="card p-6 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Community Support</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Regular donations and support to local community events and charitable causes.
              </p>
            </div>
          </div>
        </section>

        {/* How to Get Involved */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">How You Can Help</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Donate</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Support our initiatives by making a donation. Every contribution helps us 
                reach more people in need.
              </p>
              <button className="btn-primary">Make a Donation</button>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Volunteer</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join our volunteer program and help us make a difference in the community.
              </p>
              <button className="btn-primary">Join as Volunteer</button>
            </div>
          </div>
        </section>

        {/* Contact for Support */}
        <section>
          <div className="card p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Request Support</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Are you an organization working for a social cause? We'd love to help! 
              Get in touch with us to discuss how we can support your initiative.
            </p>
            <a href="mailto:community@butterbatter.com" className="btn-primary">
              Contact for Support
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}