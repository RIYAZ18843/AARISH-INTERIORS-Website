import React from 'react';

const TestimonialCard = ({ name, project, youtubeId }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
      <a 
        href={`https://www.youtube.com/watch?v=${youtubeId}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="relative w-full aspect-video bg-gray-200 group overflow-hidden block"
      >
        <img
          src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
          alt={`${name} Testimonial`}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            // Fallback to hqdefault if maxresdefault doesn't exist
            if (e.target.src.includes('maxresdefault')) {
              e.target.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
            }
          }}
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-colors">
          <div className="w-14 h-14 bg-white/95 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
            <svg className="w-6 h-6 text-[#cc8d58] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </a>
      <div className="p-6 text-center bg-white border-t border-gray-100">
        <h4 className="font-bold text-heading text-[15px] mb-1">{name}</h4>
        <p className="text-gray-500 text-[14px] font-light">{project}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
