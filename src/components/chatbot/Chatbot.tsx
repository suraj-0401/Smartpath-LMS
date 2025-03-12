import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ChatBubbleLeftIcon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { GeminiService } from '../../services/geminiService';
import logo from '../../assets/logo.png';

export interface Message {
  id: number;
  text: string;
  isBot: boolean;
  loading?: boolean;
}

export interface AIChatWidgetProps {
  apiKey?: string;
  initialMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  accentColor?: string;
}

const AIChatWidget: React.FC<AIChatWidgetProps> = ({
    apiKey = import.meta.env.VITE_GEMINI_API_KEY,
    initialMessage = "Hello! 👋 Welcome to Smart Path Support Assistant. I'm here to help you with any questions or issues you have. Whether you need guidance, troubleshooting, or general support, feel free to ask! 😊 How can I assist you today?",
    position = 'bottom-right'
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, text: initialMessage, isBot: true }
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const geminiService = useMemo(() => {
        try {
            if (!apiKey) {
                throw new Error('API key is not provided or loaded from environment variables.');
            }
            return new GeminiService(apiKey);
        } catch (err) {
            console.error('Failed to initialize GeminiService:', err);
            setError(err instanceof Error ? err.message : 'Failed to initialize chat service');
            return null;
        }
    }, [apiKey]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [messages, isOpen]);

    const toggleChat = () => setIsOpen(prev => !prev);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedMessage = message.trim();
        
        if (!trimmedMessage || isLoading) return;

        setMessages(prev => [...prev, {
            id: Date.now(),
            text: trimmedMessage,
            isBot: false
        }]);

        setMessage('');
        setIsLoading(true);

        try {
            if (!geminiService) throw new Error('Chat service is not initialized');
            const response = await geminiService.generateResponse(trimmedMessage);
            
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: response,
                isBot: true
            }]);
        } catch (error) {
            console.error('Chat error:', error);
            setMessages(prev => [...prev, {
                id: Date.now() + 1,
                text: error instanceof Error 
                    ? error.message 
                    : 'I apologize, but I encountered an error. Please try again.',
                isBot: true
            }]);
        } finally {
            setIsLoading(false);
            inputRef.current?.focus();
        }
    };

    const positionClasses = {
        'bottom-right': 'bottom-6 right-6',
        'bottom-left': 'bottom-6 left-6'
    };

    return (
        <div className={`fixed ${positionClasses[position]} z-50`}>
            {!isOpen && (
                <button
                    onClick={toggleChat}
                    className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full p-3.5 shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-105"
                    aria-label="Open chat"
                >
                    <ChatBubbleLeftIcon className="h-6 w-6" />
                </button>
            )}

            {isOpen && (
                <div className={`absolute bottom-0 ${position.includes('right') ? 'right-0' : 'left-0'} w-[450px] bg-white rounded-2xl shadow-2xl overflow-hidden`}>
                    <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 flex items-center justify-between">
                        <div>
                            <h3 className="font-semibold text-lg">Smart Path Support Assistant</h3>
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full animate-pulse ${error ? 'bg-red-400' : 'bg-green-400'}`}></div>
                                <p className="text-sm opacity-90">{error ? 'Offline' : 'Online'}</p>
                            </div>
                        </div>
                        <button
                            onClick={toggleChat}
                            className="text-white hover:bg-white/20 rounded-full p-1.5 transition-colors"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    </div>

                    {error && (
                        <div className="p-4 bg-red-50 text-red-600 border-b border-red-100">
                            <p className="text-sm font-medium">{error}</p>
                        </div>
                    )}

                    <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50 to-white">
                        {messages.map(msg => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'} items-end gap-2`}
                            >
                                {msg.isBot && (
                                    <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center">
                                        <img src={logo} alt="SP" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div
                                    className={`max-w-[95%] rounded-lg ${
                                        msg.isBot
                                            ? 'text-gray-800 bg-gray-50/80 border border-gray-100'
                                            : 'text-white bg-gradient-to-r from-purple-600 to-blue-500'
                                    } px-4 py-2.5`}
                                >
                                    <p className="whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form onSubmit={handleSubmit} className="border-t border-purple-100 p-4 bg-white">
                        <div className="flex items-center gap-2">
                            <input
                                ref={inputRef}
                                type="text"
                                value={message}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                placeholder={isLoading ? 'Please wait...' : 'Type your message...'}
                                disabled={isLoading}
                                className="flex-1 border border-purple-200 rounded-full py-2.5 px-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:bg-gray-100"
                                aria-label="Message input"
                                autoComplete="off"
                            />
                            <button
                                type="submit"
                                disabled={!message.trim() || isLoading}
                                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full p-2.5 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
                                aria-label="Send message"
                            >
                                <PaperAirplaneIcon className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
};

export default AIChatWidget;