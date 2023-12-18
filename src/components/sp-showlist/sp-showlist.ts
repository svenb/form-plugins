import { PluginContract } from '@nintex/form-plugin-contract';
import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('sp-showlist')
export class SharePointListComponent extends LitElement {
  @property({ type: String })
  URL = 'https://www.google.de';

  @property({ type: String })
  Views = 'https://www.google.de';

  @property({ type: String })
  listTitle = 'https://www.google.de';

  @property({ type: Array })
  items = {};

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return import('./sp-showlist.config').then((pkg) => {
      return pkg.config;
    });
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  async connectedCallback() {
    super.connectedCallback();
    await this.loadListItems();
  }

  async loadListItems() {
    try {
      const response = await fetch(`https://grillmeister.sharepoint.com/sites/MigrationWebinar/_api/web/lists/getbytitle('Schulungsanfrage')/items`, {
        headers: {
          Accept: 'application/json;odata=verbose',
        },
      });
      const data = await response.json();
      this.items = data.d.results;
    } catch (error) {
      console.error('Error loading list items:', error);
    }
  }

  render() {
    return html`
      <ul>
        ${this.items.map((item) => html` <li>${item.Title}</li> `)}
      </ul>
    `;
  }
}
