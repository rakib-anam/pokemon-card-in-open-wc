import { html } from 'lit';
import '../src/pokemon-card-in-open-wc.js';

export default {
  title: 'PokemonCardInOpenWc',
  component: 'pokemon-card-in-open-wc',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <pokemon-card-in-open-wc
      style="--pokemon-card-in-open-wc-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </pokemon-card-in-open-wc>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
