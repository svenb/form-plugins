/* eslint-disable @typescript-eslint/no-unsafe-call */
import { PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('user-peoplepicker')
export class UserPicker extends LitElement {
  @property({ type: String })
  UserJson = '[{"id": 1,"name": "John Doe","email": "john.doe@example.com"},{"id": 2,"name": "Jane Smith","email": "jane.smith@example.com"}]';

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return import('./user-people-picker.config.ts').then((pkg) => {
      return pkg.config;
    });
  }

  static styles = css`
    .people-picker {
      position: relative;
      display: inline-block;
      width: 200px;
    }

    .people-picker-input {
      width: 100%;
      padding: 5px;
    }

    .people-picker-results {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
      border: 1px solid #ccc;
      max-height: 150px;
      overflow-y: auto;
      padding: 5px;
    }

    .people-picker-results ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .people-picker-results li {
      cursor: pointer;
      padding: 5px;
    }

    .people-picker-results li:hover {
      background-color: #f0f0f0;
    }
  `;

  searchTerm: string = '';
  results: string[] = [];
  showResults: boolean = false;

  render() {
    return html`
      <div class="people-picker">
        <input type="text" class="people-picker-input" placeholder="Enter a name or email" .value="${this.searchTerm}" @input="${this.handleInputChange}" />
        ${this.showResults
          ? html`
              <div class="people-picker-results">
                <ul>
                  ${this.results.map((result) => html` <li @click="${() => this.handleResultClick(result)}">${result}</li> `)}
                </ul>
              </div>
            `
          : ''}
      </div>
    `;
  }

  handleInputChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value.trim().toLowerCase();
    this.results = this.getResults(this.searchTerm);
    this.showResults = this.results.length > 0;
    this.requestUpdate();
  }

  getResults(searchTerm: string): string[] {
    // Führen Sie Ihre Such- oder Filterlogik hier aus
    const allResults = ['John Doe', 'Jane Smith', 'Robert Johnson', 'Sarah Williams', 'Michael Brown'];

    return allResults.filter((result) => result.toLowerCase().includes(searchTerm));
  }

  handleResultClick(result: string) {
    const input = this.shadowRoot!.querySelector('.people-picker-input') as HTMLInputElement;
    input.value = result;
    this.showResults = false;
    this.requestUpdate();
  }

  clickOutsideHandler(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!this.contains(target)) {
      this.showResults = false;
      this.requestUpdate();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.clickOutsideHandler.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.clickOutsideHandler.bind(this));
  }
}
