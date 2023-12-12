import React from 'react';
import './BotaoConfirmar.css'

interface BotaoConfirmarProps {
    onCancel: () => void;
  }
  
  const BotaoConfirmar: React.FC<BotaoConfirmarProps> = ({ onCancel }) => {
    return (
      <div>
        
        <button onClick={onCancel}>Voltar</button>
      </div>
    );
  };
  
  export default BotaoConfirmar;
