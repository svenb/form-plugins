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
  DynamicCheckBoxVal!: string;

  @property({ type: String })
  DataStructure!: string;

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

  constructor() {
    super();
    this.loadCheckboxes();
  }

  DynamicCheckJson: DynamicJson[] = [];

  loadCheckboxes() {
    // if (!this.DynamicCheckBoxVal) {
    //  return;
    // }
    try {
      this.DynamicCheckJson = JSON.parse(this.DynamicCheckBoxVal) as DynamicJson[];
      this.DynamicCheckJson.forEach((element) => {
        console.log(element.Name);
      });

      this.requestUpdate();
    } catch (error) {
      console.error('Error loading checkboxes:', error);
      console.log(this.DynamicCheckBoxVal);
    }
  }

  render() {
    return html` <b>${this.DataStructure}</b> `;
  }
}
