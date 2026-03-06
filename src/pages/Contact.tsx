import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Create properly formatted email subject and body
    const subject = `Butter Batter Website Inquiry - ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    // Encode for URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);

    // Generate mailto link
    const mailtoLink = `mailto:butterbattergo@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

    // Open email client
    window.location.href = mailtoLink;

    // Show success message
    setShowSuccess(true);

    // Reset form
    setFormData({
      name: '',
      email: '',
      message: '',
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEmailClick = () => {
    const subject = 'Butter Batter Customer Inquiry';
    const encodedSubject = encodeURIComponent(subject);
    window.location.href = `mailto:butterbattergo@gmail.com?subject=${encodedSubject}`;
  };

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="section-title text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +91 88923 24272
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleEmailClick}
                className="card p-6 w-full text-left hover:shadow-lg transition-shadow duration-300 cursor-pointer"
              >
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      butterbattergo@gmail.com
                    </p>
                  </div>
                </div>
              </button>

              <div className="card p-6">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-primary mr-4" />
                  <div>
                    <h3 className="font-semibold mb-1">Head Office</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Batter Ventures LLP<br/>
                      CENTRAL KITCHEN AND MAIN BRANCH, 23, 1st Floor, Balaji Complex, Mantri Tranquil, Apartment Road, A Block, Subramanyapura,<br />
                      Bangalore - 560061
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/Butterbattergo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/butterbatter_go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            
            {/* Success Message */}
            {showSuccess && (
              <div className="mb-4 p-4 bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 rounded-lg flex items-center gap-2 animate-fade-in">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-200 text-sm">
                  Email client opened! Your message is ready to send.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="card p-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none"
                    required
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:ring-2 focus:ring-primary focus:outline-none resize-none"
                    required
                    aria-required="true"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
       
      </div>
    </div>
  );
}
