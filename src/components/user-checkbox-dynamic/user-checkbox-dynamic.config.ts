import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  controlName: 'Dynamic Checkbox',
  fallbackDisableSubmit: false,
  description: 'Load External Data and create Checkboxs',
  groupName: 'UI',
  version: '1.0',
  properties: {
    UserJson: {
      type: 'string',
      title: 'Data Variable',
      description: 'Data Variable',
    },
  },
  standardProperties: {
    fieldLabel: false,
    description: false,
    defaultValue: false,
    readOnly: false,
  },
};
