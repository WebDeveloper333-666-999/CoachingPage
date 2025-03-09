import React, { useState } from 'react';

interface FAQItem {
  title: string;
  content: React.ReactNode;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (title: string) => {
    setOpenSections(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-light text-purple-500 mb-8">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item.title}
            className="border-b border-purple-100 last:border-b-0"
          >
            <button
              className="w-full py-4 px-6 flex justify-between items-center bg-purple-500 text-white rounded-t-lg hover:bg-purple-600 transition-colors"
              onClick={() => toggleSection(item.title)}
            >
              <span className="text-xl font-light">{item.title}</span>
              <svg
                className={`w-6 h-6 transform transition-transform ${
                  openSections[item.title] ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openSections[item.title] ? 'max-h-96' : 'max-h-0'
              }`}
            >
              <div className="p-6 bg-white text-gray-600 italic">
                {item.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;