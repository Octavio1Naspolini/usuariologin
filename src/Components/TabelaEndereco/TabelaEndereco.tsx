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
    <table className="resumo-tabela">
      <thead>
        <tr>
          <th>Rua</th>
          <th>Numero</th>
          <th>Bairro</th>
          <th>CEP</th>
          <th>Cidade</th>
        </tr>
      </thead>
      <tbody>
        {dados.map((item, index) => (
          <ItemTabelaEndereco key={index} item={item} />
        ))}
      </tbody>
    </table>
  </div>  
  );
};

export default TabelaEndereco;
