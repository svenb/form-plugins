import { _ as _decorate, s, i, a as _taggedTemplateLiteral, x, e, b as _inherits, c as _createSuper, d as _createClass, f as _classCallCheck, g as _assertThisInitialized, h as _asyncToGenerator, j as _regeneratorRuntime, k as _get, l as _getPrototypeOf } from './query-assigned-elements-6eb0eb3e.js';

var config = {
  controlName: 'user-peoplepicker',
  fallbackDisableSubmit: false,
  description: 'Universal People Picker',
  groupName: 'User',
  version: '1.0',
  properties: {},
  standardProperties: {
    fieldLabel: false,
    description: false,
    defaultValue: false,
    readOnly: false
  }
};

var _templateObject, _templateObject2, _templateObject3;
var UserPicker = _decorate([e('user-peoplepicker')], function (_initialize, _LitElement) {
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
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    /* Add your component styles here */\n  "])));
      }
    }, {
      kind: "field",
      key: "users",
      value: function value() {
        return [];
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function () {
        var _connectedCallback = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                _get(_getPrototypeOf(UserPicker.prototype), "connectedCallback", this).call(this);
                _context.next = 3;
                return this.fetchUsers();
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
      key: "fetchUsers",
      value: function () {
        var _fetchUsers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var response;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return fetch('./user.json');
              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.json();
              case 6:
                this.users = _context2.sent;
                console.log(this.users);
                _context2.next = 13;
                break;
              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](0);
                console.error('Error fetching users:', _context2.t0);
              case 13:
              case "end":
                return _context2.stop();
            }
          }, _callee2, this, [[0, 10]]);
        }));
        function fetchUsers() {
          return _fetchUsers.apply(this, arguments);
        }
        return fetchUsers;
      }()
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      <div>\n        <select>\n          ", "\n        </select>\n      </div>\n    "])), this.users.map(function (user) {
          return x(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n              <option value=\"", "\">", "</option>\n            "])), user.id, user.name);
        }));
      }
    }]
  };
}, s);

export { UserPicker };
//# sourceMappingURL=user-people-picker.js.map
