import { TableColumn } from "src/app/shared/components/content/table/table.types";

export const PRODUCT_TYPE_COLUMNS: TableColumn[] = [
  { label: 'Tipo Prod.', property: 'tpPropm', textAlignment: 'center' },
  { label: 'Sup', property: 'sup' },
  { label: 'Descrição Tipo Produto', property: 'descricaoTipoProduto' },
  { label: 'Apura meta?', property: 'apuraMeta', textAlignment: 'center' },
  { label: 'Atingiu a meta?', property: 'atingiuMeta', textAlignment: 'center' },
  { label: 'Meta em %', property: 'metaEmPorcentagem', textAlignment: 'center' },
  { label: '% da Meta', property: 'percentualMeta', textAlignment: 'center' },
  { label: 'Usuário', property: 'usuario' },
  { label: 'Data', property: 'data'}
];



export const PRODUCT_TYPE_DATA = [
  {
    tipoProd: 101,
    sup: 20,
    descricaoTipoProduto: 'ELETRÔNICOS',
    apuraMeta: 'S',
    atingiuMeta: 'S',
    metaEmPorcentagem: '95%',
    percentualMeta: 95,
    usuario: 'JOÃO SILVA',
    data: '12/11/2024'
  },
  {
    tipoProd: 102,
    sup: 15,
    descricaoTipoProduto: 'MÓVEIS',
    apuraMeta: 'N',
    atingiuMeta: 'N',
    metaEmPorcentagem: 'N',
    percentualMeta: 0,
    usuario: 'MARIA OLIVEIRA',
    data: '10/11/2024'
  },
  {
    tipoProd: 103,
    sup: 25,
    descricaoTipoProduto: 'ALIMENTOS',
    apuraMeta: 'S',
    atingiuMeta: 'N',
    metaEmPorcentagem: '80%',
    percentualMeta: 65,
    usuario: 'CARLOS PEREIRA',
    data: '09/11/2024'
  },
  {
    tipoProd: 104,
    sup: 30,
    descricaoTipoProduto: 'HIGIENE',
    apuraMeta: 'S',
    atingiuMeta: 'S',
    metaEmPorcentagem: '100%',
    percentualMeta: 100,
    usuario: 'ANA COSTA',
    data: '08/11/2024'
  },
  {
    tipoProd: 105,
    sup: 12,
    descricaoTipoProduto: 'VESTUÁRIO',
    apuraMeta: 'N',
    atingiuMeta: 'N',
    metaEmPorcentagem: 'N',
    percentualMeta: 0,
    usuario: 'FERNANDO ALVES',
    data: '07/11/2024'
  },
  {
    tipoProd: 106,
    sup: 18,
    descricaoTipoProduto: 'BRINQUEDOS',
    apuraMeta: 'S',
    atingiuMeta: 'N',
    metaEmPorcentagem: '85%',
    percentualMeta: 70,
    usuario: 'LUIZA MARTINS',
    data: '06/11/2024'
  },
  {
    tipoProd: 107,
    sup: 22,
    descricaoTipoProduto: 'COSMÉTICOS',
    apuraMeta: 'S',
    atingiuMeta: 'S',
    metaEmPorcentagem: '90%',
    percentualMeta: 90,
    usuario: 'RICARDO MENDES',
    data: '05/11/2024'
  },
  {
    tipoProd: 108,
    sup: 16,
    descricaoTipoProduto: 'LIVROS',
    apuraMeta: 'N',
    atingiuMeta: 'N',
    metaEmPorcentagem: 'N',
    percentualMeta: 0,
    usuario: 'CAROLINE SOUZA',
    data: '04/11/2024'
  },
  {
    tipoProd: 109,
    sup: 28,
    descricaoTipoProduto: 'FERRAMENTAS',
    apuraMeta: 'S',
    atingiuMeta: 'S',
    metaEmPorcentagem: '75%',
    percentualMeta: 75,
    usuario: 'JULIANA FERREIRA',
    data: '03/11/2024'
  },
  {
    tipoProd: 110,
    sup: 10,
    descricaoTipoProduto: 'PAPELARIA',
    apuraMeta: 'S',
    atingiuMeta: 'N',
    metaEmPorcentagem: '65%',
    percentualMeta: 50,
    usuario: 'MATEUS NASCIMENTO',
    data: '02/11/2024'
  }
];
