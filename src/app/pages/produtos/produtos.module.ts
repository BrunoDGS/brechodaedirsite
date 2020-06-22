import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosComponent } from './produtos.component';

@NgModule({
  declarations: [ProdutosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProdutosModule { }
