import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  text: string;
  isAi: boolean;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm Tiara AI assistant. How can I help you today?",
      isAi: true
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const generateResponse = async (userMessage: string) => {
    // This is a simple response generation logic
    const responses = [
      "I understand you're interested in learning more about that. Let me explain...",
      "That's an interesting question! Here's what I know...",
      "I'd be happy to help you with that. Here's what you need to know...",
      "Great question! Let me break this down for you...",
      "I can definitely help you understand this better. Here's the key information..."
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    return `${randomResponse} (Regarding: "${userMessage}")`;
  };

  const handleSendMessage = async (message: string) => {
    setIsProcessing(true);
    setMessages(prev => [...prev, { text: message, isAi: false }]);

    try {
      const response = await generateResponse(message);
      
      setTimeout(() => {
        setMessages(prev => [...prev, {
          text: response,
          isAi: true
        }]);
        setIsProcessing(false);
      }, 1000);
      
    } catch (error) {
      console.error('Error generating response:', error);
      setIsProcessing(false);
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/50 backdrop-blur">
      <ScrollArea className="h-[500px] p-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg.text} isAi={msg.isAi} />
        ))}
      </ScrollArea>
      <div className="p-4 border-t border-primary/20">
        <ChatInput onSendMessage={handleSendMessage} disabled={isProcessing} />
      </div>
    </Card>
  );
};

export default Chatbot;