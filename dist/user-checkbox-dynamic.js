import { _ as _decorate, s, i, a as _taggedTemplateLiteral, x, e as e$1, d as _inherits, f as _createSuper, g as _createClass, j as _classCallCheck, k as _assertThisInitialized } from './query-assigned-elements-f61280a9.js';
import { e } from './property-3bc85059.js';

var config = {
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
      required: true
    },
    columnName: {
      type: 'string',
      title: 'Column Name',
      description: 'The Name of the column to render as options',
      required: true
    },
    value: {
      title: 'Value',
      type: 'string',
      isValueField: true
    }
  },
  standardProperties: {
    fieldLabel: true,
    description: false,
    defaultValue: false,
    readOnly: false
  },
  events: ['ntx-value-change']
};

var _templateObject, _templateObject2, _templateObject3;
var CustomCheckbox = _decorate([e$1('user-checkbox-dynamic')], function (_initialize, _LitElement) {
  var CustomCheckbox = /*#__PURE__*/function (_LitElement2) {
    _inherits(CustomCheckbox, _LitElement2);
    var _super = _createSuper(CustomCheckbox);
    function CustomCheckbox() {
      var _this;
      _classCallCheck(this, CustomCheckbox);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
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
      key: "data",
      value: void 0
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "columnName",
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
      kind: "method",
      key: "toggleCheckbox",
      value: function toggleCheckbox(checkbox) {
        // checkbox.checked = !checkbox.checked;
        var args = {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: 'laskdjals'
        };
        console.log(checkbox.Name);
        this.requestUpdate();
        var event = new CustomEvent('ntx-value-change', args);
        this.dispatchEvent(event);
        // this.dispatchEvent(new CustomEvent('change', { detail: this.checkboxes }));
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;
        var dataAsJson = JSON.parse(this.data);
        console.log(dataAsJson);
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=\"checkbox-container\">\n        ", "\n      </div>\n    "])), dataAsJson.map(function (option) {
          return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            <div class=\"checkbox-item\">\n              <input type=\"checkbox\" id=\"chb\" class=\"checkbox-input\" @change=", " />\n              <label class=\"checkbox-label\" for=\"", "\">", "</label>\n            </div>\n          "])), function () {
            return _this2.toggleCheckbox(option);
          }, option[_this2.columnName], option[_this2.columnName]);
        }));
      }
    }]
  };
}, s);

export { CustomCheckbox };
//# sourceMappingURL=user-checkbox-dynamic.js.map
