import { HttpClientModule } from '@angular/common/http';
import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgForOf, NgTemplateOutlet } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PokeSearchComponent } from '../poke-search/poke-search.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgForOf, NgTemplateOutlet, RouterLink, PokeSearchComponent, NgxSkeletonLoaderModule],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {
 public setAllPokemons: any
 public getAllPokemons: any

 constructor(
  private pokeApiService: PokeApiService
 ) {}

 ngOnInit(): void {
  //faz a requisição pra api e salva na variável de busca e na de todos pokemons
   this.pokeApiService.apiListAllPokemons.subscribe(
    response => {
      this.setAllPokemons = response.results
      this.getAllPokemons = this.setAllPokemons
    }
   )
 }


 //pega valor da busca e filtra
 public getSearch(value: string) {
  const filter = this.setAllPokemons.filter((response: any) => {
    return !response.name.indexOf(value.toLocaleLowerCase())
  })

  this.getAllPokemons = filter
 }
}
