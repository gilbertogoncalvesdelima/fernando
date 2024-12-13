import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

@Injectable()
export class MatTableConfigService extends MatPaginatorIntl {

  override itemsPerPageLabel = 'Itens por página';
  override nextPageLabel     = 'Próxima página';
  override previousPageLabel = 'Página anterior';
  override firstPageLabel = 'Primeira página';
  override lastPageLabel = 'Ultima página';
  override getRangeLabel = this.getDisplayText;
  

  getDisplayText(page: number, pageSize: number, length: number) {
    if (length == 0 || pageSize == 0) {
      return 'Sem resultados.';
    }
    const startIndex = page * pageSize;
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;
    return `${startIndex + 1} - ${endIndex}  de ${length}`;
  }

}