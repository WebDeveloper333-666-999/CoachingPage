import React, { useState } from 'react';

interface FormData {
  name: string;
  street: string;
  postalCity: string;
  birthDate: string;
  mobile: string;
  email: string;
  service: string;
  message: string;
  sendCopy: boolean;
  paymentMethod: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    street: '',
    postalCity: '',
    birthDate: '',
    mobile: '',
    email: '',
    service: '',
    message: '',
    sendCopy: false,
    paymentMethod: 'twint'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* <h1 className="text-4xl text-center text-purple-500 mb-2">contact</h1> */}
      {/* <h2 className="text-3xl text-purple-500 mb-4">Contact me</h2> */}
      <p className="text-lg text-gray-600 mb-8">
        Contact me for a free initial consultation and get to know me personally.
      </p>
      <p className="text-lg text-gray-600 mb-8">
        Fill out the contact form or write me a<br />
        Email: <a href="mailto:info@seelen-fluesterin.ch" className="text-purple-500 hover:text-purple-600">info@seelen-fluesterin.ch</a>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 mb-2">
            First and last name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Street <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="street"
            required
            value={formData.street}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Postal code and city <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="postalCity"
            required
            value={formData.postalCity}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Birth date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="birthDate"
            required
            value={formData.birthDate}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Mobile number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            required
            value={formData.mobile}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            E-mail address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Which service are you booking? <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {[
              'Spiritual Coaching',
              'Energetic Healing Humans and Animals',
              'animal communication',
              'online course',
              'Module: Discover yourself and become your magnet for great things - 1 month Game Changer'
            ].map((service) => (
              <label key={service} className="flex items-baseline space-x-2">
                <input
                  type="radio"
                  name="service"
                  value={service}
                  checked={formData.service === service}
                  onChange={handleInputChange}
                  className="text-purple-500 focus:ring-purple-500"
                />
                <span className="text-gray-700">{service}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-gray-700 mb-2">
            Do you want to tell me something else? <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            required
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <p className="text-gray-700 mb-2">Payment methods:</p>
          <div className="space-y-2">
            {[
              { id: 'twint', label: 'Via Twint prepayment' },
              { id: 'invoice', label: 'Prepayment by invoice' },
              { id: 'paypal', label: 'Via Paypal' }
            ].map(({ id, label }) => (
              <label key={id} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="paymentMethod"
                  value={id}
                  checked={formData.paymentMethod === id}
                  onChange={handleInputChange}
                  className="text-purple-500 focus:ring-purple-500"
                />
                <span className="text-gray-700">{label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="sendCopy"
              checked={formData.sendCopy}
              onChange={handleInputChange}
              className="text-purple-500 focus:ring-purple-500"
            />
            <span className="text-gray-700">Send a copy to me</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-purple-500 text-white px-8 py-2 rounded-md hover:bg-purple-600 transition-colors"
        >
          Submit form
        </button>
      </form>
    </div>
  );
};

export default ContactForm;