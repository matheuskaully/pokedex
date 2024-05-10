import { HttpClientModule } from '@angular/common/http';
import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { NgFor, NgForOf, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [HttpClientModule, NgFor, NgForOf, NgTemplateOutlet],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss'
})
export class PokeListComponent implements OnInit {
 public getAllPokemons: any

 constructor(
  private pokeApiService: PokeApiService
 ) {}

 ngOnInit(): void {
   this.pokeApiService.apiListAllPokemons.subscribe(
    response => {
      this.getAllPokemons = response.results
      console.log(this.getAllPokemons)
    }
   )
 }
}
