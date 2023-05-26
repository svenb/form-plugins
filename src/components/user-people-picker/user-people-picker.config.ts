import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
    controlName: 'user-peoplepicker',
    fallbackDisableSubmit: false,
    description: 'Universal People Picker',
    groupName: 'User',
    version: '1.0',
    properties: {
           },
    standardProperties: {
        fieldLabel: false,
        description: false,
        defaultValue: false,
        readOnly: false,
    },
};