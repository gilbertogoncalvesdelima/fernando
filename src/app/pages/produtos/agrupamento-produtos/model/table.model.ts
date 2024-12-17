import { TableColumn } from 'src/app/shared/model/table';


// Configuração das colunas de uma tabela para exibição de agrupamento de produtos
export const PRODUCT_GROUPING_COLUMNS: TableColumn[] = [
  { label: 'Cód. Agrup', property: 'cdAgrmtPropm', textAlignment: 'center' },
  { label: 'Descrição Agrupamento', property: 'dsAgrmtPropm' },
  { label: 'Abreviação', property: 'dsAbvdaAgrmtPropm' },
  { label: 'Cód. carteira', property: 'ab', textAlignment: 'center' },
  { label: 'Descrição carteira', property: 'aa' },
  { label: 'Usuário', property: 'cdUsuroUltmaAlter' },
  { label: 'Data', property: 'dtUltmaAlter' }
];

interface ProductGrouping  {
  cdAgrmtPropm: number,
  dsAgrmtPropm: string,
  dsAbvdaAgrmtPropm: string,
  cdUsuroUltmaAlter: string,
  dtUltmaAlter: string
}

