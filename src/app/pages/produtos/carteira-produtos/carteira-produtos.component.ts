import { Component, ViewChild } from '@angular/core';
import { TableColumn } from 'src/app/shared/model/table';
import { PRODUCT_WALLET_COLUMNS } from './model/table.model';
import { ProductWalletService } from './service/product-wallet.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-carteira-produto',
  templateUrl: './carteira-produtos.component.html',
  styleUrls: ['./carteira-produtos.component.scss']
})
export class CarteiraProdutoComponent {
  configTable: TableColumn[] = PRODUCT_WALLET_COLUMNS;
  dataSource = new MatTableDataSource<any>([]);
  displayedColumns: string[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  currentPage: number = 0;
  pageSize: number = 10;

  constructor(private productWalletService: ProductWalletService) {
    this.displayedColumns = this.configTable.map(col => col.property);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Método do ciclo de vida Angular, executado quando o componente é inicializado.
  ngOnInit(): void {
  // Busca os dados iniciais da "Product Wallet" chamando o método fetchProductWallet.
    this.fetchProductWallet(this.currentPage, this.pageSize);
  }

  fetchProductWallet(page: number, size: number): void {
    // Utiliza o serviço ProductWalletService para buscar os dados da "Product Wallet".
    this.productWalletService.getProductWallet(page, size).subscribe(
      (response) => {
    // Caso a requisição seja bem-sucedida, clona os dados recebidos para a variável tableData.
    const datastate = structuredClone(response.content);
    this.dataSource.data = [...datastate];
      },
      (error) => {
    // Caso ocorra um erro, exibe a mensagem de erro no console.
        console.error('Erro ao buscar agrupamento de empresas:', error);
      }
    );
  }
}
