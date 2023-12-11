'use strict';

import React from 'react';
import './TabelaEndereco.css';
import ItemTabelaEndereco from '../../Components/ItemTabelaEndereco/ItemTabelaEndereco';

interface TabelaEnderecoProps {
  dados: ItemTabelaEndereco[];
}

const TabelaEndereco: React.FC<TabelaEnderecoProps> = ({ dados }) => {
  return (
    <div>
    {/* Tabela para exibir o resumo do pedido */}
    <table className="resumo-tabela">
      {/* Cabeçalho da tabela */}
      <thead>
        <tr>
          <th>Rua</th>
          <th>Numero</th>
          <th>Bairro</th>
          <th>CEP</th>
          <th>Cidade</th>
        </tr>
      </thead>
      {/* Corpo da tabela com os dados */}
      <tbody>
        {/* Mapeia os dados para criar linhas da tabela usando o componente ItemTabelaResumo */}
        {dados.map((item, index) => (
          <ItemTabelaEndereco key={index} item={item} />
        ))}
      </tbody>
    </table>
  </div>  
  );
};

export default TabelaEndereco;