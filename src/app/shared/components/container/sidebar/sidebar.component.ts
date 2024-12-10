import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private router: Router) { }
/* Sugestão para falar na daily: trocar todas essas funções por apenas uma função com parametro. Exemplo:
  navigate(route) {
  this.router.navigate([`/${route}`}]);
  }
  e no html:
  
      <button mat-raised-button color="primary" (click)="navigate("produtos")">PRODUTOS</button>
*/
    goToFechamentoMensal() {
    this.router.navigate(['/monthly-closing']);
  }

  goToLancamentos() {
    this.router.navigate(['/releases']);
  }

  goToProdutos() {
    this.router.navigate(['/produtos']);
  }

  goToManualPostings() {
    this.router.navigate(['/release-tables']);
  }

  goToEnterpriseGroups(){
    this.router.navigate(['/enterprise-group'])
  }

}
