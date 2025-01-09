import React from 'react';
import { cn } from '@/lib/utils';

interface ChatMessageProps {
  message: string;
  isAi?: boolean;
}

const ChatMessage = ({ message, isAi = false }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "p-4 rounded mb-4 text-primary border border-primary/20",
        isAi ? "bg-accent/80 hover:bg-accent/90 transition-colors" : "bg-muted"
      )}
    >
      <span className="font-mono">
        {isAi ? '🤖 Tiara: ' : '👤 You: '}
        {message}
      </span>
    </div>
  );
};

export default ChatMessage;