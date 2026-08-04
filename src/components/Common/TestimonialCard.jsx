import React from 'react';
import { Play } from 'lucide-react';

const TestimonialCard = ({ image, name, review, videoUrl }) => {
  // Extract video ID from youtube URL for embed if it exists
  let embedUrl = null;
  if (videoUrl && videoUrl.includes('youtube.com/watch?v=')) {
    const videoId = videoUrl.split('v=')[1].split('&')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  } else if (videoUrl && videoUrl.includes('youtu.be/')) {
    const videoId = videoUrl.split('youtu.be/')[1].split('?')[0];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-300">
      {embedUrl ? (
        <div className="relative h-64 w-full overflow-hidden block">
          <iframe 
            src={embedUrl} 
            title={`Testimonial by ${name}`}
            className="w-full h-full absolute inset-0 border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <a href={videoUrl || '#'} target="_blank" rel="noopener noreferrer" className="relative h-64 w-full group cursor-pointer overflow-hidden block">
          <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-primary/90 transition-all duration-300 shadow-lg">
              <Play fill="currentColor" size={24} className="ml-1" />
            </div>
          </div>
        </a>
      )}
      <div className="p-8 text-center flex-grow flex flex-col justify-between bg-white">
        <p className="text-text italic mb-6 font-serif leading-relaxed text-lg">&quot;{review}&quot;</p>
        <h4 className="font-bold text-heading text-sm tracking-wide uppercase">{name}</h4>
      </div>
    </div>
  );
};

export default TestimonialCard;
