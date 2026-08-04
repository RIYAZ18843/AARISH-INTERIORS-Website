import React from 'react';
import Container from './Common/Container';
import SectionTitle from './Common/SectionTitle';
import { motion } from 'framer-motion';
import { Brush, Ruler, Lightbulb, Grid, Hammer, CheckSquare } from 'lucide-react';

const detailedServices = [
  {
    icon: Brush,
    title: "Conceptual Design",
    description: "We start by understanding your vision and translating it into mood boards, sketches, and detailed conceptual layouts that capture the essence of your style.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Grid,
    title: "Space Planning",
    description: "Maximizing the utility and flow of your space is our priority. We create optimal layouts that blend comfort with functional daily living.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Lightbulb,
    title: "3D Visualization",
    description: "See your space before it's built. Our photorealistic 3D renders give you a perfect preview of the materials, lighting, and layout.",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Ruler,
    title: "Custom Furniture",
    description: "We design bespoke furniture pieces that perfectly fit your space and align with the overarching aesthetic of your interior.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: Hammer,
    title: "Project Execution",
    description: "Our dedicated team of craftsmen and contractors ensure that the design is implemented flawlessly, on time, and within budget.",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800&auto=format&fit=crop"
  },
  {
    icon: CheckSquare,
    title: "Final Styling",
    description: "The magic is in the details. We curate and place art, accessories, and soft furnishings to bring the final design to life.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  }
];

const DetailedServicesList = () => {
  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <Container>
        <SectionTitle 
          title="Our Expertise" 
          subtitle="A comprehensive suite of design services tailored to transform your vision into reality."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {detailedServices.map((service, index) => {
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group perspective-1000 h-[320px] w-full cursor-pointer"
              >
                <div className="relative w-full h-full transition-transform duration-700 preserve-3d group-hover:rotate-y-180">
                  
                  {/* Front Face - Image Background */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-8">
                      <h3 className="text-2xl font-serif text-white font-medium">{service.title}</h3>
                      <div className="w-12 h-1 bg-primary mt-4 rounded-full"></div>
                    </div>
                  </div>

                  {/* Back Face - Dark Elegant Color */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#1A1A1A] p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center text-center border border-gray-800">
                    <h3 className="text-xl font-serif text-primary font-medium mb-4">{service.title}</h3>
                    <p className="text-gray-300 font-light leading-relaxed text-sm lg:text-base">{service.description}</p>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default DetailedServicesList;
