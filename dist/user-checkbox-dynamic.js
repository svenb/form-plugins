import { _ as _decorate, s, i, a as _taggedTemplateLiteral, x, e as e$1, d as _inherits, f as _createSuper, g as _createClass, j as _classCallCheck, k as _assertThisInitialized } from './query-assigned-elements-f61280a9.js';
import { e } from './property-3bc85059.js';

var config = {
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
      required: true
    },
    DataStructure: {
      type: 'string',
      title: 'Select column in your Table/DSV/JSON',
      description: 'Please choose the column, you would like to see as your Checkboxes',
      required: true
    }
  },
  standardProperties: {
    fieldLabel: true,
    description: false,
    defaultValue: false,
    readOnly: false
  }
};

var _templateObject, _templateObject2;
var CustomCheckbox = _decorate([e$1('user-checkbox-dynamic')], function (_initialize, _LitElement) {
  var CustomCheckbox = /*#__PURE__*/function (_LitElement2) {
    _inherits(CustomCheckbox, _LitElement2);
    var _super = _createSuper(CustomCheckbox);
    function CustomCheckbox() {
      var _this;
      _classCallCheck(this, CustomCheckbox);
      _this = _super.call(this);
      _initialize(_assertThisInitialized(_this));
      _this.loadCheckboxes();
      return _this;
    }
    return _createClass(CustomCheckbox);
  }(_LitElement);
  return {
    F: CustomCheckbox,
    d: [{
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "DynamicCheckBoxVal",
      value: void 0
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "DataStructure",
      value: void 0
    }, {
      kind: "field",
      "static": true,
      key: "getMetaConfig",
      value: function value() {
        return function () {
          return config;
        };
      }
    }, {
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .checkbox-container {\n      display: flex;\n      flex-direction: column;\n    }\n\n    .checkbox-item {\n      display: flex;\n      align-items: center;\n      margin-bottom: 5px;\n    }\n\n    .checkbox-input {\n      margin-right: 5px;\n    }\n\n    .checkbox-label {\n      font-size: 14px;\n    }\n  "])));
      }
    }, {
      kind: "field",
      key: "DynamicCheckJson",
      value: function value() {
        return [];
      }
    }, {
      kind: "method",
      key: "loadCheckboxes",
      value: function loadCheckboxes() {
        // if (!this.DynamicCheckBoxVal) {
        //  return;
        // }
        try {
          this.DynamicCheckJson = JSON.parse(this.DynamicCheckBoxVal);
          this.DynamicCheckJson.forEach(function (element) {
            console.log(element.Name);
          });
          this.requestUpdate();
        } catch (error) {
          console.error('Error loading checkboxes:', error);
          console.log(this.DynamicCheckBoxVal);
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([" <b>", "</b> "])), this.DataStructure);
      }
    }]
  };
}, s);

export { CustomCheckbox };
//# sourceMappingURL=user-checkbox-dynamic.js.map
