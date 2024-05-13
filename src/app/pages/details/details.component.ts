import { PokeApiService } from './../../services/poke-api.service';
import { Component, OnInit } from '@angular/core';
import { PokeHeaderComponent } from '../../shared/poke-header/poke-header.component';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [PokeHeaderComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  private urlPokemon: string = 'https://pokeapi.co/api/v2/pokemon'
  private urlName: string = 'https://pokeapi.co/api/v2/pokemon-species'
  public pokemon: any
  public isLoading: boolean = false
  public apiError: boolean = false

  constructor(
    private activatedRoute: ActivatedRoute,
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit(): void {
    this.getPokemon
  }

  get getPokemon() {
    const id = this.activatedRoute.snapshot.params['id']
    const pokemon = this.pokeApiService.apiGetPokemons(`${this.urlPokemon}/${id}`)
    const name = this.pokeApiService.apiGetPokemons(`${this.urlName}/${id}`)

    return forkJoin([pokemon, name]).subscribe({
      next: response => {
        this.pokemon = response
        this.isLoading = true
      },
      error: error => {
        this.apiError = false
        console.log(error)
      }
    })
  }
}
