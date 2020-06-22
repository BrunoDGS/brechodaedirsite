import { Produtosmodel } from './produtosmodel';
import { ProdutosService } from './../produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {


  produtos: Produtosmodel[];

  constructor(private produtosService: ProdutosService) { }

  ngOnInit(): void {
    this.recuperarProdutos();
  }

  recuperarProdutos() {
    this.produtosService.buscarProdutos()
    .subscribe(response => {
        this.produtos = response;
      });
    console.log(this.produtos);
  }
}
