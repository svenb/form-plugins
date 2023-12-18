import { PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { config } from './user-checkbox-dynamic.config';

interface DynamicJson {
  [key: string]: string;
}

@customElement('user-checkbox-dynamic')
export class CustomCheckbox extends LitElement {
  @property({ type: String })
  data!: string;

  @property({ type: String })
  columnName!: string;

  static getMetaConfig = (): Promise<PluginContract> | PluginContract => config;

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

  toggleCheckbox(checkbox: DynamicJson) {
    // checkbox.checked = !checkbox.checked;
    const args = {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: 'laskdjals',
    };
    console.log(checkbox.Name);
    this.requestUpdate();
    const event = new CustomEvent('ntx-value-change', args);
    this.dispatchEvent(event);
    // this.dispatchEvent(new CustomEvent('change', { detail: this.checkboxes }));
  }

  render() {
    const dataAsJson: DynamicJson[] = JSON.parse(this.data) as DynamicJson[];
    console.log(dataAsJson);
    return html`
      <div class="checkbox-container">
        ${dataAsJson.map(
          (option) => html`
            <div class="checkbox-item">
              <input type="checkbox" id="chb" class="checkbox-input" @change=${() => this.toggleCheckbox(option)} />
              <label class="checkbox-label" for="${option[this.columnName]}">${option[this.columnName]}</label>
            </div>
          `
        )}
      </div>
    `;
  }
}
