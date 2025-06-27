'use client';

import React from 'react';

interface WhatsappButtonProps {
  mensagem: string;
  textoBotao: string;
  className?: string;
  numero?: string;
}

const WhatsappButton: React.FC<WhatsappButtonProps> = ({
  mensagem,
  textoBotao,
  className = '',
  numero = '554598100566',
}) => {
  const handleClick = () => {
    const link = typeof window !== 'undefined' ? window.location.href : '';
    const mensagemCompleta = `${mensagem} ${link}`;
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemCompleta)}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <button onClick={handleClick} className={className}>
      {textoBotao}
    </button>
  );
};

const WhatsappButtonSemLink: React.FC<WhatsappButtonProps> = ({
  mensagem,
  textoBotao,
  className = '',
  numero = '554598100566',
}) => {
  const handleClick = () => {
    const mensagemCompleta = `${mensagem}`;
    const urlWhatsApp = `https://wa.me/${numero}?text=${encodeURIComponent(mensagemCompleta)}`;
    window.open(urlWhatsApp, '_blank');
  };

  return (
    <button onClick={handleClick} className={className}>
      {textoBotao}
    </button>
  );
}
export { WhatsappButton, WhatsappButtonSemLink };