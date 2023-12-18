import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  controlName: 'Dynamic Checkbox',
  fallbackDisableSubmit: false,
  description: 'Load External Data and create Checkboxs',
  groupName: 'UI',
  version: '1.0',
  properties: {
    data: {
      type: 'string',
      title: 'Data',
      description: 'Select the variable that holds the data for the checkbox',
      required: true,
    },
    columnName: {
      type: 'string',
      title: 'Column Name',
      description: 'The Name of the column to render as options',
      required: true,
    },
    value: {
      title: 'Value',
      type: 'string',
      isValueField: true,
    },
  },
  standardProperties: {
    fieldLabel: true,
    description: false,
    defaultValue: false,
    readOnly: false,
  },
  events: ['ntx-value-change'],
};
