'use client';

import { Facebook, Share2, Twitter, Send, MessageCircle } from 'lucide-react';
import { useState } from 'react';

const SocialShare = () => {
  const [open, setOpen] = useState(false);

  const url = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const title = encodeURIComponent('Confira este imóvel incrível que encontrei!');

  const links = [
    {
      nome: 'Facebook',
      icon: <Facebook className="w-4 h-4 mr-2" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
    {
      nome: 'WhatsApp',
      icon: <MessageCircle className="w-4 h-4 mr-2" />,
      url: `https://wa.me/?text=${title}%20${url}`,
    },
    {
      nome: 'Twitter',
      icon: <Twitter className="w-4 h-4 mr-2" />,
      url: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
    },
    {
      nome: 'Telegram',
      icon: <Send className="w-4 h-4 mr-2" />,
      url: `https://t.me/share/url?url=${url}&text=${title}`,
    },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center text-gray-500 hover:text-secondary"
      >
        <Share2 className="h-4 w-4 mr-1" />
        Compartilhar
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-52 bg-white border border-gray-200 rounded shadow-md">
          {links.map((link) => (
            <a
              key={link.nome}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {link.icon}
              {link.nome}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialShare;
