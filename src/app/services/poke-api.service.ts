import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private url: string = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=100'

  constructor(
    private http: HttpClient
  ) { }

  //Busca todos pokemons
  get apiListAllPokemons(): Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(response => response),
      tap(response => {
        response.results.map((responsePokemons: any) => {
         this.apiGetPokemons(responsePokemons.url).subscribe(
          response => responsePokemons.status = response
         )
        })
      })
    )
  }


  //Busca detalhes de um pokemon
  public apiGetPokemons(url: string): Observable<any>{
    return this.http.get<any>((url)).pipe(
      map(response => response)
    )
  }
}
