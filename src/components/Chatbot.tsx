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
      text: "Hello! I'm the Turd Network AI assistant. How can I help you today?",
      isAi: true
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSendMessage = async (message: string) => {
    setIsProcessing(true);
    setMessages(prev => [...prev, { text: message, isAi: false }]);

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: `I processed your message: "${message}". This is a demo response. In a real implementation, this would connect to an AI service.`,
        isAi: true
      }]);
      setIsProcessing(false);
    }, 1000);
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