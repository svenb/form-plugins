import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  controlName: 'Dynamic Checkbox',
  fallbackDisableSubmit: false,
  description: 'Load External Data and create Checkboxs',
  groupName: 'UI',
  version: '1.0',
  properties: {
    DynamicCheckBoxVal: {
      type: 'string',
      title: 'Data Variable',
      description: 'Data Variable',
      required: true,
    },
    DataStructure: {
      type: 'string',
      title: 'Select column in your Table/DSV/JSON',
      description: 'Please choose the column, you would like to see as your Checkboxes',
      required: true,
    },
  },
  standardProperties: {
    fieldLabel: true,
    description: false,
    defaultValue: false,
    readOnly: false,
  },
};
