import { LitElement, html, css } from 'lit';
import "@lrnwebcomponents/meme-maker/meme-maker.js";

//variable for local charizard image in assets folder
const charizardImage = new URL('../assets/charizard.jpg', import.meta.url).href;

class PokemonCardInOpenWc extends LitElement {
  static properties = 
  {
    header: 
    {
      type: String 
    },
    name: 
    {
      type: String, 
      reflect: true
    }
  }

  static get styles()
  {
    return css`
      .wrapper 
      {
        width: 400px;
        border: 2px dashed black;
        text-align: center;
      }
      .image
      {
        width: 400px;
      }
      button
      {
        padding: 12px;
        font-size: 20px;
      }
      button:hover 
      {
        background-color: orange;
      }
      button:active
      {
        background-color: black;
      }
      @media (max-width: 600px)
      {
        .wrapper{background-color: #f3d4a1;}
      }
      @media (max-width: 400px)
      {
        .details{display: none;}
      }
    `;
  }

  constructor() 
  {
    super();
    this.header = 'My Pokemon Card';
    this.name = "Charizard";
  }

  render() 
  {
    return html`
      <head>
        <title>Pokemon Card</title>
      </head>
      
      <div class="wrapper">
      <!--
      <img class="image" src="${charizardImage}"/>
      -->
        <meme-maker image-url=${charizardImage}
        top-text="CHARIII" bottom-text="ZAAAARD">
  </meme-maker>

        <div class="header">
          <h1>${this.name}</h1>
        </div>

        <div class="details">
          <details>
            <summary>About this Pokemon</summary>
            <p>
              Charizard is a Fire/Flying type Pokémon introduced in Generation 1. It is known as the Flame Pokémon. Charizard has two Mega Evolutions available in its X & Y forms. In in Mega evolved form, Charizard is arguably the most powerful pokemon
            </p>
          </details>
        </div>
      </div>
    `;
  }
}

customElements.define('pokemon-card-in-open-wc', PokemonCardInOpenWc);