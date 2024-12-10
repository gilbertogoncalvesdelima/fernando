import { TableColumn } from "src/app/shared/components/content/table/table.types";

export const PRODUCTION_GROUP_COLUMNS: TableColumn[] = [
  { label: 'Cód. do Grupo', property: 'codGrupo' , textAlignment: 'center'},
  { label: 'Descrição do Grupo de Produção', property: 'descricaoGrupoProducao', textAlignment: 'center' },
  { label: 'Usuário', property: 'usuario' },
  { label: 'Data', property: 'data' }
];

export const PRODUCTION_GROUP_DATA = [
  { codGrupo: 401, descricaoGrupoProducao: 'GRUPO 1', usuario: 'JOÃO LIMA', data: '01/12/2024' },
  { codGrupo: 402, descricaoGrupoProducao: 'GRUPO 2', usuario: 'MARIA EDUARDA', data: '02/12/2024' },
  { codGrupo: 403, descricaoGrupoProducao: 'GRUPO 3', usuario: 'CARLOS HENRIQUE', data: '03/12/2024' },
  { codGrupo: 404, descricaoGrupoProducao: 'GRUPO 4', usuario: 'ANA PAULA', data: '04/12/2024' },
  { codGrupo: 405, descricaoGrupoProducao: 'GRUPO 5', usuario: 'FERNANDO COSTA', data: '05/12/2024' },
  { codGrupo: 406, descricaoGrupoProducao: 'GRUPO 6', usuario: 'LUCAS MARTINS', data: '06/12/2024' },
  { codGrupo: 407, descricaoGrupoProducao: 'GRUPO 7', usuario: 'PAULA OLIVEIRA', data: '07/12/2024' },
  { codGrupo: 408, descricaoGrupoProducao: 'GRUPO 8', usuario: 'GABRIEL MOREIRA', data: '08/12/2024' },
  { codGrupo: 409, descricaoGrupoProducao: 'GRUPO 9', usuario: 'LUIZA SANTOS', data: '09/12/2024' },
  { codGrupo: 410, descricaoGrupoProducao: 'GRUPO 10', usuario: 'RICARDO BARROS', data: '10/12/2024' },
];
