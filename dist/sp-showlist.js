import { _ as _decorate, s, i, a as _taggedTemplateLiteral, x, e as e$1, d as _inherits, f as _createSuper, g as _createClass, j as _classCallCheck, k as _assertThisInitialized, l as _asyncToGenerator, m as _regeneratorRuntime, b as _get, c as _getPrototypeOf } from './query-assigned-elements-f61280a9.js';
import { e } from './property-3bc85059.js';

var _templateObject, _templateObject2, _templateObject3;
var SharePointListComponent = _decorate([e$1('sp-showlist')], function (_initialize, _LitElement) {
  var SharePointListComponent = /*#__PURE__*/function (_LitElement2) {
    _inherits(SharePointListComponent, _LitElement2);
    var _super = _createSuper(SharePointListComponent);
    function SharePointListComponent() {
      var _this;
      _classCallCheck(this, SharePointListComponent);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(SharePointListComponent);
  }(_LitElement);
  return {
    F: SharePointListComponent,
    d: [{
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "URL",
      value: function value() {
        return 'https://www.google.de';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "Views",
      value: function value() {
        return 'https://www.google.de';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: String
      })],
      key: "listTitle",
      value: function value() {
        return 'https://www.google.de';
      }
    }, {
      kind: "field",
      decorators: [e({
        type: Array
      })],
      key: "items",
      value: function value() {
        return {};
      }
    }, {
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./sp-showlist.config-025de0af.js').then(function (pkg) {
          return pkg.config;
        });
      }
    }, {
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n    }\n  "])));
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function () {
        var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _get(_getPrototypeOf(SharePointListComponent.prototype), "connectedCallback", this).call(this);
                _context.next = 3;
                return this.loadListItems();
              case 3:
              case "end":
                return _context.stop();
            }
          }, _callee, this);
        }));
        function connectedCallback() {
          return _connectedCallback.apply(this, arguments);
        }
        return connectedCallback;
      }()
    }, {
      kind: "method",
      key: "loadListItems",
      value: function () {
        var _loadListItems = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var response, data;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch("https://grillmeister.sharepoint.com/sites/MigrationWebinar/_api/web/lists/getbytitle('Schulungsanfrage')/items", {
                  headers: {
                    Accept: 'application/json;odata=verbose'
                  }
                });
              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();
              case 6:
                data = _context2.sent;
                this.items = data.d.results;
                _context2.next = 13;
                break;
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.error('Error loading list items:', _context2.t0);
              case 13:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this, [[0, 10]]);
        }));
        function loadListItems() {
          return _loadListItems.apply(this, arguments);
        }
        return loadListItems;
      }()
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <ul>\n        ", "\n      </ul>\n    "])), this.items.map(function (item) {
          return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([" <li>", "</li> "])), item.Title);
        }));
      }
    }]
  };
}, s);

export { SharePointListComponent };
//# sourceMappingURL=sp-showlist.js.map
