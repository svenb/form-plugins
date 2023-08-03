import { _ as _decorate, s, i, a as _taggedTemplateLiteral, x, e as e$1, d as _inherits, f as _createSuper, g as _createClass, j as _classCallCheck, k as _assertThisInitialized, l as _asyncToGenerator, m as _regeneratorRuntime } from './query-assigned-elements-f61280a9.js';
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
      description: 'Data Variable'
    },
    DataStructure: {
      type: 'string',
      title: 'Data Structure',
      description: 'Data Structure'
    }
  },
  standardProperties: {
    fieldLabel: false,
    description: false,
    defaultValue: false,
    readOnly: false
  }
};

var _templateObject, _templateObject2, _templateObject3;

/*interface Checkbox {
  [key: string]: unknown;
}*/
var CustomCheckbox = _decorate([e$1('user-checkbox-dynamic')], function (_initialize, _LitElement) {
  var CustomCheckbox = /*#__PURE__*/function (_LitElement2) {
    _inherits(CustomCheckbox, _LitElement2);
    var _super = _createSuper(CustomCheckbox);
    /* private checkboxes: Checkbox[] = [
      { id: 'checkbox1', label: 'Checkbox 1', checked: true },
      { id: 'checkbox2', label: 'Checkbox 2', checked: false },
      { id: 'checkbox3', label: 'Checkbox 3', checked: true },
    ];
    */

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
      "static": true,
      key: "getMetaConfig",
      value: function value() {
        return function () {
          return config;
        };
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "DynamicCheckBoxVal",
      value: function value() {
        return '[{"Name":"Rückmeldung","anzeige":true,"ID":1}]';
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
      key: "loadCheckboxes",
      value: function () {
        var _loadCheckboxes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          var DynamicCheboxJson;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return JSON.parse(this.DynamicCheckBoxVal);
              case 3:
                DynamicCheboxJson = _context.sent;
                console.log(DynamicCheboxJson);
                // const response = await fetch('/checkboxes.json'); // Adjust the path if needed
                // this.checkboxes = await response.json();
                this.requestUpdate();
                _context.next = 12;
                break;
              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                console.error('Error loading checkboxes:', _context.t0);
                console.error(this.DynamicCheckBoxVal);
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee, this, [[0, 8]]);
        }));
        function loadCheckboxes() {
          return _loadCheckboxes.apply(this, arguments);
        }
        return loadCheckboxes;
      }()
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n      <div class=\"checkbox-container\">\n        ", "\n      </div>\n    "])), this.DynamicCheckBoxVal, this.checkboxes.map(function (checkbox) {
          return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n            <div class=\"checkbox-item\">\n              <input type=\"checkbox\" class=\"checkbox-input\" id=\"", "\" .checked=\"", "\" />\n              <label class=\"checkbox-label\" for=\"", "\">", "</label>\n            </div>\n          "])), checkbox.id, checkbox.checked, checkbox.id, checkbox.label);
        }));
      }
    }]
  };
}, s);

export { CustomCheckbox };
//# sourceMappingURL=user-checkbox-dynamic.js.map
