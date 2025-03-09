import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-500 mb-1">Contact Me</h1>

        {/* Contact Section */}
        <section className="bg-white">
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default Contact;