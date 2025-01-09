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
        isAi ? "bg-accent" : "bg-muted",
        isAi && "glitch"
      )}
    >
      <span className="font-mono">
        {isAi ? '🤖 AI: ' : '👤 You: '}
        {message}
      </span>
    </div>
  );
};

export default ChatMessage;