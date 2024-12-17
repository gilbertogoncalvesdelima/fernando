import { TableColumn } from "src/app/shared/model/table";

// Configuração das colunas para a tabela de tipos de produtos
export const LANCAMENTO_MANUAL_COLUMNS: TableColumn[] = [
  { label: 'Emp.', property: 'emp', textAlignment: 'center' },
  { label: 'Data ' , property: 'data' },
  { label: 'Valor ' , property: 'valor' },
  { label: 'Tp ' , property: 'tp', textAlignment: 'center' },
  { label: 'Agência ' , property: 'agencia', textAlignment: 'center' },
  { label: 'Produto ' , property: 'produto', textAlignment: 'center' },
  { label: 'Grupo ' , property: 'grupo', textAlignment: 'center' },
  { label: 'Cenape ' , property: 'cenape' },
  { label: 'Quantidade ' , property: 'qtd'}
];

interface LancamentoManual {
  id: number,
  data: string,
  produto: number,
  emp: string,
  grupo: number,
  tp: string,
  agencia: number,
  cenape: number,
  qtd: number,
  valor: number,
  ultimaAlteracao: string,
  situacaoProcesso: string,
  usuarioUltimaAlteracao: string,
  tipoSituacaoProcesso: string
}

