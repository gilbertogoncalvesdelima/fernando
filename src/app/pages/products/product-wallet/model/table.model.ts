import { TableColumn } from "src/app/shared/components/content/table/table.types";

export const PRODUCT_WALLET_COLUMNS: TableColumn[] = [
  { label: 'Cód. Carteira', property: 'codCarteira', textAlignment: 'center' },
  { label: 'Descrição da Carteira', property: 'descricaoCarteira' },
  { label: 'Usuário', property: 'usuario' },
  { label: 'Data', property: 'data' }
];

export const PRODUCT_WALLET_DATA = [
  { codCarteira: 201, descricaoCarteira: 'ELETRODOMÉSTICOS', usuario: 'JOÃO LIMA', data: '01/11/2024' },
  { codCarteira: 202, descricaoCarteira: 'INFORMÁTICA', usuario: 'MARIA EDUARDA', data: '02/11/2024' },
  { codCarteira: 203, descricaoCarteira: 'MÓVEIS PLANEJADOS', usuario: 'CARLOS HENRIQUE', data: '03/11/2024' },
  { codCarteira: 204, descricaoCarteira: 'DECORAÇÃO', usuario: 'ANA PAULA', data: '04/11/2024' },
  { codCarteira: 205, descricaoCarteira: 'CALÇADOS', usuario: 'FERNANDO COSTA', data: '05/11/2024' },
  { codCarteira: 206, descricaoCarteira: 'PET SHOP', usuario: 'LUCAS MARTINS', data: '06/11/2024' },
  { codCarteira: 207, descricaoCarteira: 'HOBBIES', usuario: 'PAULA OLIVEIRA', data: '07/11/2024' },
  { codCarteira: 208, descricaoCarteira: 'FERRAGENS', usuario: 'GABRIEL MOREIRA', data: '08/11/2024' },
  { codCarteira: 209, descricaoCarteira: 'BRINQUEDOS EDUCATIVOS', usuario: 'LUIZA SANTOS', data: '09/11/2024' },
  { codCarteira: 210, descricaoCarteira: 'ARTIGOS ESPORTIVOS', usuario: 'RICARDO BARROS', data: '10/11/2024' },
];
