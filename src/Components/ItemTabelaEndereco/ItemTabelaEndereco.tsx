'use strict';

import React from 'react';
import Address from '../../Models/Address';

interface ItemTabelaEnderecoProps {
  item: Address;
}

const ItemTabelaEndereco: React.FC<ItemTabelaEnderecoProps> = ({ item }) => {
  return (
    <tr>
      
      <th>{item.rua}</th>

      <th>{item.numero}</th>

      <th>{item.bairro}</th>

      <th>{item.cep}</th>

      <th>{item.cidade}</th>
  
    </tr>
  );
};

export default ItemTabelaEndereco;
