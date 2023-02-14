import { LitElement, html, css } from 'lit';

const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

class PokemonCardInOpenWc extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
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

  constructor() {
    super();
    this.header = 'My Pokemon Card';
  }

  render() {
    return html`
      <head>
  <title>Pokemon Card</title>
</head>

<div class="buttons">
  <button class="duplicateButton">Duplicate</button>
  <button class="deleteButton">Delete</button>
  <button class="changeNameButton">Change Name</button>
</div>

<div class="wrapper">
  
    <img class="image" src="https://cdn.dribbble.com/users/902228/screenshots/5813718/media/539d18b06ff32a69bb74f95b78cf6602.jpg?compress=1&resize=400x300"/>
  
  <div class="header">
    <h1>Charizard</h1>
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