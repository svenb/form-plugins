import { PluginContract } from '@nintex/form-plugin-contract';
import { LitElement, html, css} from 'lit';
import {config} from './user-people-picker.config';
import { customElement } from 'lit/decorators.js';

interface User {
  id: number;
  name: string;
  email: string;
}

@customElement('user-peoplepicker')
export class UserPicker extends LitElement {
  static getMetaConfig = ():Promise<PluginContract> | PluginContract => config;   
  
  static styles = css`
    /* Add your component styles here */
  `;

  users: User[] = [];

  async connectedCallback() {
    super.connectedCallback();
    await this.fetchUsers();
  }

  async fetchUsers() {
    try {
      const response = await fetch('./user.json');
      this.users = await response.json();
      console.log(this.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  render() {
    return html`
      <div>
        <select>
          ${this.users.map(
            user => html`
              <option value="${user.id}">${user.name}</option>
            `
          )}
        </select>
      </div>
    `;
  }
}