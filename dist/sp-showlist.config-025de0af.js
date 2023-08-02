var config = {
  controlName: 'sp-showlist',
  fallbackDisableSubmit: false,
  description: 'Show a SharePoint List',
  groupName: 'SharePoint',
  version: '1.0',
  properties: {
    URL: {
      type: 'string',
      title: 'URL to List'
    },
    Views: {
      type: 'string',
      title: 'Views'
    },
    ViewName: {
      type: 'string',
      title: 'View Name'
    }
  },
  standardProperties: {
    fieldLabel: false,
    description: false,
    defaultValue: false,
    readOnly: false
  }
};

export { config };
//# sourceMappingURL=sp-showlist.config-025de0af.js.map
