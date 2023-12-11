import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';
import XSaladaImage from '../../assets/X-Salad.png'
import './ConfirmarPedido.css'

function ConfirmacaoPedido() {
  const [pedidoConfirmado] = useState(false);

  const navigate = useNavigate();

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

          <ul>
            <li>Avenida Marcolino Martins Cabral</li>
            <li>2525</li>
            <li>Vila Moema</li>
            <li>88621415</li>
            <li>Tubarão</li>
          </ul>

          <h3>Seu lanche está a caminho!</h3>

          <button onClick={handleVoltar}>Voltar</button>
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

export default ConfirmacaoPedido;