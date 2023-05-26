import { PluginContract } from '@nintex/form-plugin-contract';

export const config: PluginContract = {
    controlName: 'media-webcam',
    fallbackDisableSubmit: false,
    description: 'Webcam Plug',
    groupName: 'Media',
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