import { PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('user-checkbox-dynamic')

interface Checkbox {
  id: string;
  label: string;
  checked: boolean;
}

export class CustomCheckbox extends LitElement {

    
  @property({ type: String })
  UserJson = '[{"id": 1,"name": "John Doe","email": "john.doe@example.com"},{"id": 2,"name": "Jane Smith","email": "jane.smith@example.com"}]';
  
  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    return import('./user-checkbox-dynamic.config.ts').then((pkg) => {
      return pkg.config;
    });
  }

  static styles = css`
    .checkbox-container {
      display: flex;
      flex-direction: column;
    }

    .checkbox-item {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
    }

    .checkbox-input {
      margin-right: 5px;
    }

    .checkbox-label {
      font-size: 14px;
    }
  `;

  private checkboxes: Checkbox[] = [];

  constructor() {
    super();
    this.loadCheckboxes();
  }

  private async loadCheckboxes() {
    try {
      const response = await fetch('/checkboxes.json'); // Adjust the path if needed
      this.checkboxes = await response.json();
      this.requestUpdate();
    } catch (error) {
      console.error('Error loading checkboxes:', error);
    }
  }

  render() {
    return html`
      <div class="checkbox-container">
        ${this.checkboxes.map(
          (checkbox) => html`
            <div class="checkbox-item">
              <input type="checkbox" class="checkbox-input" id="${checkbox.id}" .checked="${checkbox.checked}" />
              <label class="checkbox-label" for="${checkbox.id}">${checkbox.label}</label>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define('custom-checkbox', CustomCheckbox);
