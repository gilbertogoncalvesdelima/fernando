import { TableColumn } from 'src/app/shared/model/table';

// Configuração das colunas para a tabela de carteiras de produtos
export const PRODUCT_WALLET_COLUMNS: TableColumn[] = [
  { label: 'Cód. Carteira', property: 'cdCartrPropm', textAlignment: 'center' },
  { label: 'Descrição da Carteira', property: 'dsCartrPropm' },
  { label: 'Usuário', property: 'cdUsuroUltmaAlter' },
  { label: 'Data', property: 'dtUltmaAlter' }
];

interface ProductWallet {
  cdCartrPropm: number
  dsCartrPropm: string,
  cdUsuroUltmaAlter: string,
  dtUltmaAlter: string
}

