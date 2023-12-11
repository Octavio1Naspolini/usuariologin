'use strict';

// Importações
import { useNavigate } from 'react-router-dom';
import './TelaPagamento.css';
import TabelaResumo from '../../Components/TabelaResumo/TabelaResumo';
import QrCode from '../../Components/QrCode/QrCode';
import BotoesPagamento from '../../Components/BotoesPagamento/BotoesPagamento';
import ItemResumoPagamento from '../../Models/ItemResumoPagamento';

// Componente principal da tela de pagamento
const TelaPagamento = () => {
  // Hook de navegação do React Router
  const navigate = useNavigate();

  // Mensagens para o QRCode
  const QRCODE_DESCRICAO_1 = 'Para pagamento';
  const QRCODE_DESCRICAO_2 = 'aponte seu celular';

  // Dados do resumo do pedido (exemplo)
  const dadosDoPedido: ItemResumoPagamento[] = [
    { itemDescricao: 'Hamburguer', itemValor: 5.90 },
    { itemDescricao: 'Batata Frita', itemValor: 2.99 },
    { itemDescricao: 'Refrigerante', itemValor: 1.99 },
    { itemDescricao: 'Milkshake', itemValor: 4.50 },
  ];

  // Calcula a soma total dos valores dos itens
  const totalSum = dadosDoPedido.reduce((acc, item) => acc + item.itemValor, 0);

  // Função para lidar com o botão de cancelar
  const handleCancelar = () => {
    navigate('/');
  };

  // Função para lidar com o botão de continuar comprando
  const handleContinuarComprando = () => {
    navigate('/carrinho_compra');
  };

  // Estrutura da tela de pagamento
  return (
    <div>
      {/* Título da tela */}
      <h2>Resumo do Pedido</h2>

      {/* Componente TabelaResumo com dados do pedido e totalSum */}
      <TabelaResumo dados={dadosDoPedido} totalSum={totalSum} />

      {/* Descrição do QRCode */}
      <p>QrCode</p>

      {/* Componente QrCode */}
      <QrCode />

      {/* Mensagem adicional para apontar o celular */}
      <div>
        <p style={{ color: 'gold', whiteSpace: 'nowrap', marginBottom: '5px', marginLeft: '-6px', marginTop: '-3px' }}>
          <small>{QRCODE_DESCRICAO_1}</small>
        </p>
        <p style={{ color: 'gold', marginTop: '-12px', marginLeft: '-6px' }}>
          <small>{QRCODE_DESCRICAO_2}</small>
        </p>
      </div>

      {/* Componente BotoesPagamento */}
      <BotoesPagamento onCancel={handleCancelar} onNewOrder={handleContinuarComprando} />
    </div>
  );
};

// Exporta o componente TelaPagamento
export default TelaPagamento;
