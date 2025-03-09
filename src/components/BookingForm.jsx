import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    postalCode: '',
    mobile: '',
    email: '',
    selectedDate: new Date(),
    selectedTime: '',
    courseType: 'energetic',
    message: '',
    sendCopy: false
  });

  const timeSlots = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Street *
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={formData.street}
            onChange={(e) => setFormData({...formData, street: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Postal Code & City *
          </label>
          <input
            type="text"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={formData.postalCode}
            onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mobile Number *
          </label>
          <input
            type="tel"
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={formData.mobile}
            onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <DatePicker
            selected={formData.selectedDate}
            onChange={(date) => setFormData({...formData, selectedDate: date})}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            dateFormat="MMMM d, yyyy"
            minDate={new Date()}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Time
          </label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
            value={formData.selectedTime}
            onChange={(e) => setFormData({...formData, selectedTime: e.target.value})}
          >
            <option value="">Select a time</option>
            {timeSlots.map(time => (
              <option key={time} value={time}>{time}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Course Selection
        </label>
        <div className="mt-2 space-y-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-purple-600"
              name="courseType"
              value="energetic"
              checked={formData.courseType === 'energetic'}
              onChange={(e) => setFormData({...formData, courseType: e.target.value})}
            />
            <span className="ml-2">Energetic Healing</span>
          </label>
          <br />
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio text-purple-600"
              name="courseType"
              value="chakra"
              checked={formData.courseType === 'chakra'}
              onChange={(e) => setFormData({...formData, courseType: e.target.value})}
            />
            <span className="ml-2">Chakra Course</span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
          checked={formData.sendCopy}
          onChange={(e) => setFormData({...formData, sendCopy: e.target.checked})}
        />
        <label className="ml-2 block text-sm text-gray-700">
          Send a copy to me
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
      >
        Submit Form
      </button>
    </form>
  );
}