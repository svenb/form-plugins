import { _ as _decorate, s, i, a as _taggedTemplateLiteral, b as _get, c as _getPrototypeOf, x, e, d as _inherits, f as _createSuper, g as _createClass, h as _createForOfIteratorHelper, j as _classCallCheck, k as _assertThisInitialized } from './query-assigned-elements-f61280a9.js';

var _templateObject, _templateObject2;
var ConfettiComponent = _decorate([e('fun-confetti')], function (_initialize, _LitElement) {
  var ConfettiComponent = /*#__PURE__*/function (_LitElement2) {
    _inherits(ConfettiComponent, _LitElement2);
    var _super = _createSuper(ConfettiComponent);
    function ConfettiComponent() {
      var _this;
      _classCallCheck(this, ConfettiComponent);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      _this = _super.call.apply(_super, [this].concat(args));
      _initialize(_assertThisInitialized(_this));
      return _this;
    }
    return _createClass(ConfettiComponent);
  }(_LitElement);
  return {
    F: ConfettiComponent,
    d: [{
      kind: "method",
      "static": true,
      key: "getMetaConfig",
      value: function getMetaConfig() {
        return import('./fun-confetti.config-d9d683d8.js').then(function (pkg) {
          return pkg.config;
        });
      }
    }, {
      kind: "field",
      "static": true,
      key: "styles",
      value: function value() {
        return i(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    :host {\n      display: block;\n    }\n\n    canvas {\n      position: absolute;\n      top: 0;\n      left: 0;\n    }\n  "])));
      }
    }, {
      kind: "field",
      key: "canvas",
      value: function value() {
        return null;
      }
    }, {
      kind: "field",
      key: "context",
      value: function value() {
        return null;
      }
    }, {
      kind: "field",
      key: "confetti",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      key: "animationFrame",
      value: function value() {
        return null;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(ConfettiComponent.prototype), "connectedCallback", this).call(this);
        this.initConfetti();
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        this.stopConfetti();
        _get(_getPrototypeOf(ConfettiComponent.prototype), "disconnectedCallback", this).call(this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return x(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["<canvas><confetti-component></confetti-component></canvas>"])));
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        var _this$shadowRoot;
        this.canvas = (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 ? void 0 : _this$shadowRoot.querySelector('canvas');
        if (this.canvas) {
          this.context = this.canvas.getContext('2d');
        }
        this.resizeCanvas();
        this.startConfetti();
      }
    }, {
      kind: "method",
      key: "resizeCanvas",
      value: function resizeCanvas() {
        if (this.canvas && this.context) {
          this.canvas.width = this.clientWidth;
          this.canvas.height = this.clientHeight;
        }
      }
    }, {
      kind: "method",
      key: "initConfetti",
      value: function initConfetti() {
        var numConfetti = 100;
        for (var i = 0; i < numConfetti; i++) {
          this.confetti.push(this.createConfetti());
        }
      }
    }, {
      kind: "method",
      key: "createConfetti",
      value: function createConfetti() {
        var _this$canvas, _this$canvas2;
        var width = Math.random() * 8 + 8;
        var height = width * 0.6;
        var x = Math.random() * (((_this$canvas = this.canvas) === null || _this$canvas === void 0 ? void 0 : _this$canvas.width) || 0);
        var y = Math.random() * (((_this$canvas2 = this.canvas) === null || _this$canvas2 === void 0 ? void 0 : _this$canvas2.height) || 0) - height;
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        var color = "rgb(".concat(r, ", ").concat(g, ", ").concat(b, ")");
        var tilt = Math.floor(Math.random() * 10 - 10);
        var tiltAngleIncrement = Math.random() * 0.1 + 0.01;
        return {
          x: x,
          y: y,
          width: width,
          height: height,
          color: color,
          tilt: tilt,
          tiltAngleIncrement: tiltAngleIncrement
        };
      }
    }, {
      kind: "method",
      key: "startConfetti",
      value: function startConfetti() {
        var _this2 = this;
        if (this.animationFrame) {
          return;
        }
        var animate = function animate() {
          var _this2$canvas, _this2$canvas2;
          if (!_this2.context) {
            return;
          }
          _this2.context.clearRect(0, 0, ((_this2$canvas = _this2.canvas) === null || _this2$canvas === void 0 ? void 0 : _this2$canvas.width) || 0, ((_this2$canvas2 = _this2.canvas) === null || _this2$canvas2 === void 0 ? void 0 : _this2$canvas2.height) || 0);
          var _iterator = _createForOfIteratorHelper(_this2.confetti),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var conf = _step.value;
              _this2.drawConfetti(conf);
              _this2.updateConfetti(conf);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          _this2.animationFrame = requestAnimationFrame(animate);
        };
        animate();
      }
    }, {
      kind: "method",
      key: "drawConfetti",
      value: function drawConfetti(conf) {
        if (!this.context || !this.canvas) {
          return;
        }
        this.context.beginPath();
        this.context.lineWidth = conf.width / 2;
        this.context.strokeStyle = conf.color;
        this.context.moveTo(conf.x + conf.tilt + conf.width / 2, conf.y);
        this.context.lineTo(conf.x + conf.tilt, conf.y + conf.height);
        this.context.stroke();
      }
    }, {
      kind: "method",
      key: "updateConfetti",
      value: function updateConfetti(conf) {
        var _this$canvas3, _this$canvas4;
        conf.tilt += conf.tiltAngleIncrement;
        conf.y += 2;
        if (conf.y > ((_this$canvas3 = this.canvas) === null || _this$canvas3 === void 0 ? void 0 : _this$canvas3.height) || conf.x > ((_this$canvas4 = this.canvas) === null || _this$canvas4 === void 0 ? void 0 : _this$canvas4.width) + 100) {
          var _this$canvas5, _this$canvas6;
          conf.x = Math.random() * (((_this$canvas5 = this.canvas) === null || _this$canvas5 === void 0 ? void 0 : _this$canvas5.width) || 0) + 100;
          conf.y = -((_this$canvas6 = this.canvas) === null || _this$canvas6 === void 0 ? void 0 : _this$canvas6.height) || 0;
        }
      }
    }, {
      kind: "method",
      key: "stopConfetti",
      value: function stopConfetti() {
        cancelAnimationFrame(this.animationFrame || 0);
        this.animationFrame = null;
      }
    }]
  };
}, s);

export { ConfettiComponent };
//# sourceMappingURL=fun-confetti.js.map
