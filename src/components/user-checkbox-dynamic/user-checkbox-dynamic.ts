import { PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './user-checkbox-dynamic.config';

/*interface Checkbox {
  [key: string]: unknown;
}*/
@customElement('user-checkbox-dynamic')
export class CustomCheckbox extends LitElement {
  static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

  @property({ type: String })
  DynamicCheckBoxVal = '[{"Name":"Rückmeldung","anzeige":true,"ID":1}]';

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

  /* private checkboxes: Checkbox[] = [
    { id: 'checkbox1', label: 'Checkbox 1', checked: true },
    { id: 'checkbox2', label: 'Checkbox 2', checked: false },
    { id: 'checkbox3', label: 'Checkbox 3', checked: true },
  ];
  */

  constructor() {
    super();
    this.loadCheckboxes();
  }

  private async loadCheckboxes() {
    try {
      let DynamicCheboxJson = await JSON.parse(this.DynamicCheckBoxVal);
      console.log(DynamicCheboxJson);
      // const response = await fetch('/checkboxes.json'); // Adjust the path if needed
      // this.checkboxes = await response.json();
      this.requestUpdate();
    } catch (error) {
      console.error('Error loading checkboxes:', error);
      console.error(this.DynamicCheckBoxVal);
    }
  }

  render() {
    return html`
      ${this.DynamicCheckBoxVal}
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
