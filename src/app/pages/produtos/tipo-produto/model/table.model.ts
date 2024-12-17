import { TableColumn } from "src/app/shared/model/table";

// Configuração das colunas para a tabela de tipos de produtos
export const PRODUCT_TYPE_COLUMNS: TableColumn[] = [
  { label: 'Tipo Prod.', property: 'tpPropm', textAlignment: 'center' },
  { label: 'Sup', property: 'tpPropmSupor' },
  { label: 'Descrição Tipo Produto', property: 'dsTipoPropm' },
  { label: 'Apura meta?', property: 'icApurcMeta', textAlignment: 'center' },
  { label: 'Atingiu a meta?', property: 'icObgteAtimtMeta', textAlignment: 'center' },
  { label: 'Meta em %', property: 'icFormaMetaPerct', textAlignment: 'center' },
  { label: '% da Meta', property: 'vlPerctFormaMeta', textAlignment: 'center' },
  { label: 'Usuário', property: 'cdUsuroUltmaAlter' },
  { label: 'Data', property: 'dtUltmaAlter'}
];

    interface Product {
      tpPropm: number
      tpPropmSupor: number
      dsTipoPropm: string
      icApurcMeta: string
      icObgteAtimtMeta: string
      icFormaMetaPerct: string
      vlPerctFormaMeta: number
      cdUsuroUltmaAlter: string
      dtUltmaAlter:string
    }

