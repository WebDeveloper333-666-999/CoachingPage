import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import BookingForm from './BookingForm';

export default function BookingModal2({ isOpen, onClose }) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
          <Dialog.Title className="text-2xl font-semibold text-purple-600 mb-4">
            Book Your Course
          </Dialog.Title>
          
          <BookingForm />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}