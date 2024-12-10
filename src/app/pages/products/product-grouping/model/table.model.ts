import { TableColumn } from "src/app/shared/components/content/table/table.types";

export const PRODUCT_GROUPING_COLUMNS: TableColumn[] = [
  { label: 'Cód. Agrup', property: 'codAgrup', textAlignment: 'center' },
  { label: 'Descrição Agrupamento', property: 'descricaoAgrupamento' },
  { label: 'Abreviação', property: 'abreviacao' },
  { label: 'Cód. carteira', property: 'codCarteira', textAlignment: 'center' },
  { label: 'Descrição carteira', property: 'descricaoCarteira' },
  { label: 'Usuário', property: 'usuario' },
  { label: 'Data', property: 'data' }
];

export const PRODUCT_GROUPING_DATA = [
  {
    codAgrup: 301,
    descricaoAgrupamento: 'ELETRODOMÉSTICOS GRANDES',
    abreviacao: 'ELETRO G',
    codCarteira: 201,
    descricaoCarteira: 'ELETRODOMÉSTICOS',
    usuario: 'JOÃO LIMA',
    data: '11/11/2024'
  },
  {
    codAgrup: 302,
    descricaoAgrupamento: 'ACESSÓRIOS DE INFORMÁTICA',
    abreviacao: 'INFO A',
    codCarteira: 202,
    descricaoCarteira: 'INFORMÁTICA',
    usuario: 'MARIA EDUARDA',
    data: '12/11/2024'
  },
  {
    codAgrup: 303,
    descricaoAgrupamento: 'MÓVEIS RÚSTICOS',
    abreviacao: 'MOVEIS R',
    codCarteira: 203,
    descricaoCarteira: 'MÓVEIS PLANEJADOS',
    usuario: 'CARLOS HENRIQUE',
    data: '13/11/2024'
  },
  {
    codAgrup: 304,
    descricaoAgrupamento: 'ITENS DE COZINHA',
    abreviacao: 'COZINHA',
    codCarteira: 204,
    descricaoCarteira: 'DECORAÇÃO',
    usuario: 'ANA PAULA',
    data: '14/11/2024'
  },
  {
    codAgrup: 305,
    descricaoAgrupamento: 'SAPATOS MASCULINOS',
    abreviacao: 'SAP M',
    codCarteira: 205,
    descricaoCarteira: 'CALÇADOS',
    usuario: 'FERNANDO COSTA',
    data: '15/11/2024'
  },
  {
    codAgrup: 306,
    descricaoAgrupamento: 'ROUPAS PARA CÃES',
    abreviacao: 'PET R',
    codCarteira: 206,
    descricaoCarteira: 'PET SHOP',
    usuario: 'LUCAS MARTINS',
    data: '16/11/2024'
  },
  {
    codAgrup: 307,
    descricaoAgrupamento: 'JOGOS DE TABULEIRO',
    abreviacao: 'JOGOS',
    codCarteira: 207,
    descricaoCarteira: 'HOBBIES',
    usuario: 'PAULA OLIVEIRA',
    data: '17/11/2024'
  },
  {
    codAgrup: 308,
    descricaoAgrupamento: 'FERRAMENTAS ELÉTRICAS',
    abreviacao: 'FER EL',
    codCarteira: 208,
    descricaoCarteira: 'FERRAGENS',
    usuario: 'GABRIEL MOREIRA',
    data: '18/11/2024'
  },
  {
    codAgrup: 309,
    descricaoAgrupamento: 'PUZZLES',
    abreviacao: 'PUZZLES',
    codCarteira: 209,
    descricaoCarteira: 'BRINQUEDOS EDUCATIVOS',
    usuario: 'LUIZA SANTOS',
    data: '19/11/2024'
  },
  {
    codAgrup: 310,
    descricaoAgrupamento: 'BOLAS ESPORTIVAS',
    abreviacao: 'BOLAS',
    codCarteira: 210,
    descricaoCarteira: 'ARTIGOS ESPORTIVOS',
    usuario: 'RICARDO BARROS',
    data: '20/11/2024'
  },
];

