import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
  controlName: 'fun-confetti',
  fallbackDisableSubmit: false,
  description: 'Bring Confetti to your Live',
  groupName: 'Func',
  version: '1.0',
  properties: {},
  standardProperties: {
    fieldLabel: false,
    description: false,
    defaultValue: false,
    readOnly: false,
  },
};
