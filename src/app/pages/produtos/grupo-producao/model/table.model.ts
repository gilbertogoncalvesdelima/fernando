import { TableColumn } from 'src/app/shared/model/table';


// Definição das colunas para a tabela de exibição do Grupo de Produção.
export const PRODUCTION_GROUP_COLUMNS: TableColumn[] = [
  { label: 'Cód. do Grupo', property: 'cdGrpCanalVenda' , textAlignment: 'center'},
  { label: 'Descrição do Grupo de Produção', property: 'dsGrpCanalVenda', textAlignment: 'center' },
  { label: 'Usuário', property: 'cdUsuroUltmaAlter' },
  { label: 'Data', property: 'dtUltmaAlter' }
];

interface ProductionGroup{
  cdGrpCanalVenda: number,
  dsGrpCanalVenda: string,
  cdUsuroUltmaAlter: string,
  dtUltmaAlter: string
}
