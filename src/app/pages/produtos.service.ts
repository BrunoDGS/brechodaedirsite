import { Produtosmodel } from './produtos/produtosmodel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private urlBuscar = 'http://localhost:8080/produtos/categorias';

  constructor(private http: HttpClient ) { }

  buscarProdutos(): Observable<Produtosmodel[]> {
    return this.http.get<Produtosmodel[]>(this.urlBuscar);
  }
}
