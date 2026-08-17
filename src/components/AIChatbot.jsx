import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaMagic } from 'react-icons/fa';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'ai', text: "Hello! I am Aarish, your 24/7 AI Design Assistant. ✨ How can I help you transform your space today?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const newMessages = [...messages, { sender: 'user', text: inputValue }];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI thinking and responding
    setTimeout(() => {
      setIsTyping(false);

      const userText = inputValue.toLowerCase();
      let aiResponseText = "";
      let action = null;

      if (userText.includes("price") || userText.includes("cost") || userText.includes("budget") || userText.includes("fee")) {
        aiResponseText = "Our luxury design packages are fully customized to your specific space and vision. To give you an accurate quote, we'd love to understand your requirements better.";
      } else if (userText.includes("time") || userText.includes("duration") || userText.includes("long")) {
        aiResponseText = "A premium interior transformation usually takes between 45 to 90 days, depending on the scale and custom materials required.";
      } else if (userText.includes("design") || userText.includes("style") || userText.includes("portfolio")) {
        aiResponseText = "We specialize in ultra-luxury, modern, and contemporary aesthetics. Every space we design is a unique masterpiece tailored to the client's personality.";
      } else if (userText.includes("hi") || userText.includes("hello") || userText.includes("hey")) {
        aiResponseText = "Hello there! How can I help you elevate your living space today?";
      } else {
        const genericResponses = [
          "That sounds like an incredible vision! Our design team specializes in bringing exactly that kind of luxury to life. Would you like me to schedule a consultation?",
          "Excellent choice. We use a blend of modern aesthetics and timeless materials for projects like this. Could you share a bit more about your space?",
          "I understand completely. Our senior designers have extensive experience with this. Feel free to contact us directly for a tailored estimate.",
          "Beautiful! We actually have a portfolio piece very similar to what you're describing. Are you looking to start this project soon?"
        ];
        aiResponseText = genericResponses[Math.floor(Math.random() * genericResponses.length)];
      }

      setMessages(prev => [...prev, { sender: 'ai', text: aiResponseText }]);
    }, 1500); // 1.5 second simulated typing delay
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: 'spring' }}
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-[5.5rem] right-6 z-50 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <FaRobot className="w-7 h-7 text-white" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full animate-pulse border-2 border-white">
          1
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
            className="fixed bottom-[5.5rem] right-6 z-50 w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Header */}
            <div className="bg-darkGreen p-4 flex items-center justify-between text-white shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <FaRobot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium tracking-wide">Aarish AI</h3>
                  <p className="text-xs text-primary flex items-center gap-1 font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Online 24/7
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <FaTimes className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-grow p-4 overflow-y-auto bg-lightBeige flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user' ? 'bg-primary text-white rounded-tr-sm' : 'bg-white text-heading shadow-sm border border-gray-100 rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-4 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100 flex gap-1 items-center">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={handleSendMessage} className="flex gap-2 items-center bg-gray-50 p-1 rounded-full border border-gray-200 focus-within:border-primary/50 transition-colors">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask about your project..."
                  className="flex-grow bg-transparent border-none outline-none px-4 text-sm text-heading placeholder-gray-400"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim() || isTyping}
                  className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <FaPaperPlane className="w-4 h-4 mr-1 mt-1" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
