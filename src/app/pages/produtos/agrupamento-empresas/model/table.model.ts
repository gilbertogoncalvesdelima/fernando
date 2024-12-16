import { TableColumn } from 'src/app/shared/model/table';


// Declaração das colunas de configuração para a tabela de agrupamento de empresas
export const COMPANY_GROUPING_COLUMNS: TableColumn[] = [
  { label: 'Sigla Empr', property: 'sgEmprePremt', textAlignment: 'center' },
  { label: 'Descrição Empr', property: 'aa' },
  { label: 'Cód. Agrup.', property: 'cdAgrmtPropm', textAlignment: 'center' },
  { label: 'Descrição Agrup.', property: 'dsAgrmtPropm' },
  { label: 'Tipo Prod', property: 'tpPropm', textAlignment: 'center' },
  { label: 'Descrição Prod', property: 'dsTipoPropm' },
  { label: 'Obj?', property: 'campoDuvida', textAlignment: 'center' },
  { label: 'Usuário', property: 'cdUsuroUltmaAlter' },
  { label: 'Data', property: 'dtUltmaAlter' }
];

// icCadtrObjtv sem uso
interface CompanyGrouping {
      dtUltmaAlter: string,
      tpPropm: number,
      dsTipoPropm: string,
      dsAgrmtPropm: string,
      cdAgrmtPropm: number,
      icCadtrObjtv: string,
      sgEmprePremt: string,
      campoDuvida: string,
      cdUsuroUltmaAlter: string
    }

