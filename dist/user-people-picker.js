import { _ as _decorate, s, i, a as _taggedTemplateLiteral, x, b as _get, c as _getPrototypeOf, e as e$1, d as _inherits, f as _createSuper, g as _createClass, j as _classCallCheck, k as _assertThisInitialized } from './query-assigned-elements-f61280a9.js';
import { e } from './property-3bc85059.js';

var _templateObject, _templateObject2, _templateObject3, _templateObject4;
var UserPicker = _decorate([e$1('user-peoplepicker')], function (_initialize, _LitElement) {
  var UserPicker = /*#__PURE__*/function (_LitElement2) {
    _inherits(UserPicker, _LitElement2);
    var _super = _createSuper(UserPicker);
    function UserPicker() {
      var _this;
      _classCallCheck(this, UserPicker);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(UserPicker);
  }(_LitElement);
  return {
    F: UserPicker,
    d: [{
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "UserJson",
      value: function value() {
        return '[{"id": 1,"name": "John Doe","email": "john.doe@example.com"},{"id": 2,"name": "Jane Smith","email": "jane.smith@example.com"}]';
      }
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./user-people-picker.config-5ce06c80.js').then(function (pkg) {
          return pkg.config;
        });
      }
    }, {
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    .people-picker {\n      position: relative;\n      display: inline-block;\n      width: 200px;\n    }\n\n    .people-picker-input {\n      width: 100%;\n      padding: 5px;\n    }\n\n    .people-picker-results {\n      position: absolute;\n      top: 100%;\n      left: 0;\n      width: 100%;\n      background-color: #fff;\n      border: 1px solid #ccc;\n      max-height: 150px;\n      overflow-y: auto;\n      padding: 5px;\n    }\n\n    .people-picker-results ul {\n      list-style: none;\n      padding: 0;\n      margin: 0;\n    }\n\n    .people-picker-results li {\n      cursor: pointer;\n      padding: 5px;\n    }\n\n    .people-picker-results li:hover {\n      background-color: #f0f0f0;\n    }\n  "])));
      }
    }, {
      kind: "field",
      key: "searchTerm",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      key: "results",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      key: "showResults",
      value: function value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div class=\"people-picker\">\n        <input type=\"text\" class=\"people-picker-input\" placeholder=\"Enter a name or email\" .value=\"", "\" @input=\"", "\" />\n        ", "\n      </div>\n    "])), this.searchTerm, this.handleInputChange, this.showResults ? x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n              <div class=\"people-picker-results\">\n                <ul>\n                  ", "\n                </ul>\n              </div>\n            "])), this.results.map(function (result) {
          return x(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([" <li @click=\"", "\">", "</li> "])), function () {
            return _this2.handleResultClick(result);
          }, result);
        })) : '');
      }
    }, {
      kind: "method",
      key: "handleInputChange",
      value: function handleInputChange(event) {
        var input = event.target;
        this.searchTerm = input.value.trim().toLowerCase();
        this.results = this.getResults(this.searchTerm);
        this.showResults = this.results.length > 0;
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "getResults",
      value: function getResults(searchTerm) {
        // Führen Sie Ihre Such- oder Filterlogik hier aus
        var allResults = ['John Doe', 'Jane Smith', 'Robert Johnson', 'Sarah Williams', 'Michael Brown'];
        return allResults.filter(function (result) {
          return result.toLowerCase().includes(searchTerm);
        });
      }
    }, {
      kind: "method",
      key: "handleResultClick",
      value: function handleResultClick(result) {
        var input = this.shadowRoot.querySelector('.people-picker-input');
        input.value = result;
        this.showResults = false;
        this.requestUpdate();
      }
    }, {
      kind: "method",
      key: "clickOutsideHandler",
      value: function clickOutsideHandler(event) {
        var target = event.target;
        if (!this.contains(target)) {
          this.showResults = false;
          this.requestUpdate();
        }
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(UserPicker.prototype), "connectedCallback", this).call(this);
        document.addEventListener('click', this.clickOutsideHandler.bind(this));
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(UserPicker.prototype), "disconnectedCallback", this).call(this);
        document.removeEventListener('click', this.clickOutsideHandler.bind(this));
      }
    }]
  };
}, s);

export { UserPicker };
//# sourceMappingURL=user-people-picker.js.map
