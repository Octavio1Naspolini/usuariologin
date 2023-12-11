'use strict';

import React from 'react';
import ItemTabelaEndereco from '../../Models/Address';

// Propriedades esperadas para o componente ItemTabelaResumo
interface ItemTabelaEnderecoProps {
  item: ItemTabelaEndereco;  // Objeto representando um item do resumo de pagamento
    // Índice do item na lista
}

// Componente funcional ItemTabelaResumo
const ItemTabelaEndereco: React.FC<ItemTabelaEnderecoProps> = ({ item }) => {
  return (
    // Linha da tabela representando um item
    <tr>
      
      {/* Coluna com a descrição do item */}
      <td>{item.rua}</td>

      <td>{item.numero}</td>

      <td>{item.bairro}</td>

      <td>{item.cep}</td>

      <td>{item.cidade}</td>
  
    </tr>
  );
};

// Exporta o componente ItemTabelaResumo
export default ItemTabelaEndereco;
