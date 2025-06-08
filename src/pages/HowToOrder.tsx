import React from 'react';
import { ShoppingBag, Truck, Clock, CreditCard } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HowToOrder() {
  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">How to Order</h1>

        {/* Ordering Steps */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Simple Steps to Order</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="card p-6 text-center">
              <ShoppingBag className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Choose Products</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our range of fresh batters and select your favorites
              </p>
            </div>
            <div className="card p-6 text-center">
              <CreditCard className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Place Order</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Add to cart and proceed to secure checkout
              </p>
            </div>
            <div className="card p-6 text-center">
              <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Schedule Delivery</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose your preferred delivery time slot
              </p>
            </div>
            <div className="card p-6 text-center">
              <Truck className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-4">Receive Fresh</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Get fresh products delivered to your doorstep
              </p>
            </div>
          </div>
        </section>

        {/* Special Offers */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Special Offers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">BYOC (Bring Your Own Container)</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get 5% off when you bring your own containers to our stores. Help us reduce 
                plastic waste while saving money!
              </p>
              <Link to="/stores" className="btn-primary inline block">
                Find Nearest Store
              </Link>
            </div>
            {/* <div className="card p-6">
              <h3 className="text-xl font-semibold mb-4">Subscribe & Save</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Subscribe to regular deliveries and get 10% off on all orders. Choose weekly 
                or monthly deliveries.
              </p>
              <button className="btn-primary">Subscribe Now</button>
            </div> */}
          </div>
        </section>

        {/* FAQs */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-2">How long does delivery take?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We deliver within 2-3 hours of ordering during business hours. For early morning 
                deliveries, place your order the previous evening.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-2">What's the shelf life?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our batters stay fresh for 3-4 days when refrigerated. For best results, use within 3 days of delivery.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-semibold mb-2">Do you have minimum order value?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we have a minimum order value of ₹200 for free delivery. Orders below 
                this amount will incur a delivery charge of ₹30.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}