import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { PokemonData } from '../../models/pokemonData';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData = {
    id: 0,
    name: '',
    sprites: {
      front_default: ''
    },
    types: []
  };

  constructor(private service: PokemonService) {
    this.pokemon = {
      id: 0,
      name: '',
      sprites: {
        front_default: ''
      },
      types: []
    };
  }

  ngOnInit(): void {
    this.getPokemon('pikachu');
  }

  getPokemon(searchName: string) {
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {
        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        };
      },
      error: (err) => console.log('not found')
    });
  }

  getTypeClass(type: string): string {
    switch (type) {
      case 'bug':
        return 'bug';
      case 'dark':
        return 'dark';
      case 'dragon':
        return 'dragon';
      case 'electric':
        return 'electric';
      case 'fairy':
        return 'fairy';
      case 'fighting':
        return 'fighting';
      case 'fire':
        return 'fire';
      case 'flying':
        return 'flying';
      case 'ghost':
        return 'ghost';
      case 'grass':
        return 'grass';
      case 'ground':
        return 'ground';
      case 'ice':
        return 'ice';
      case 'normal':
        return 'normal';
      case 'poison':
        return 'poison';
      case 'psychic':
        return 'psychic';
      case 'rock':
        return 'rock';
      case 'steel':
        return 'steel';
      case 'water':
        return 'water';
      default:
        return '';
    }
  }

}
