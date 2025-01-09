import React, { useState, useEffect } from 'react';
import MatrixBackground from '@/components/MatrixBackground';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const [text, setText] = useState('');
  const fullText = `The Inevitable Crown of the Memecoin Universe 👑🚀

First came Fartcoin 💨, and it soared straight to the moon, leaving the crypto world in awe. Then came Butthole 🍊, because, let's face it – what's a fart without a butthole? Naturally, it followed suit and blasted off 💨. The moment we've all been waiting for: with a fart and a butthole in place, the universe demands one final piece of the puzzle - the Turd. The memecoin that completes the cycle and literally "solidifies" its throne.

What's a Butthole without a Turd?`;

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-primary p-4">
      <MatrixBackground />
      
      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-8 glitch">TURD</h1>
          <div className="typewriter terminal-cursor">
            {text}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4 text-center glitch">Chat with Turd AI</h2>
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default Index;