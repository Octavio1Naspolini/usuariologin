'use strict';

import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import XSaladaImage from '../../assets/X-Salad.png'
import './TelaConfirmarPedido.css'
import TabelaEndereco from '../../Components/TabelaEndereco/TabelaEndereco';
import BotaoConfirmar from '../../Components/BotaoConfirmar/BotaoConfirmar';
import Address from '../../Models/Address';

function TelaConfirmarPedido() {
  const [pedidoConfirmado] = useState(false);

  const navigate = useNavigate();

  const dadosDoEndereco: Address[] = [
    { id: 1, rua: 'Avenida Marcolino Martins Cabral', numero: '2525', bairro: 'Vila Moema', cep: '88621415', cidade: 'Tubarão'}
  ];

  const handleVoltar = () => {
    navigate('/');
  };

  return (
    <div>
      {!pedidoConfirmado ? (
        <div>
          <div className='product-display'>
            <img src={XSaladaImage} alt="X-Salada" className="x-salada" height="300" width="300" />
          </div>
          <h2>X-Salada</h2>
          <h1>Endereço</h1>

          {/* <ul>
            <li>Avenida Marcolino Martins Cabral</li>
            <li>2525</li>
            <li>Vila Moema</li>
            <li>88621415</li>
            <li>Tubarão</li>
          </ul> */}

          <TabelaEndereco dados={dadosDoEndereco} />

          <h3>Seu lanche está a caminho!</h3>

          {/* <button onClick={handleVoltar}>Voltar</button> */}
          <BotaoConfirmar onCancel={handleVoltar} />
        </div>
      ) : (
        <div>
          <h1>Pedido Confirmado</h1>
          <p>Obrigado por confirmar o seu pedido!</p>
        </div>
      )}
    </div>
  );
}

export default TelaConfirmarPedido;