import React from 'react';
import { YouTubeSection } from '../container/YouTubeSection';

function YouTube() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* <h1 className="text-4xl font-bold text-center mb-8">YouTube</h1> */}

        {/* YouTube Section */}
        <section className="bg-white">
            <YouTubeSection />
        </section>
      </div>
    </div>
  );
}

export default YouTube;