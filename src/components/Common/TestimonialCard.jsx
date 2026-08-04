import React from 'react';

const TestimonialCard = ({ name, review, youtubeId }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
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
      <div className="p-8 text-center flex-grow flex flex-col justify-between bg-white">
        <p className="text-text italic mb-6 font-serif leading-relaxed text-lg">&quot;{review}&quot;</p>
        <h4 className="font-bold text-heading text-sm tracking-wide uppercase">{name}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
