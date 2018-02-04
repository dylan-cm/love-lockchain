webpackHotUpdate(6,{

/***/ 941:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(610);

var _Layout = __webpack_require__(1098);

var _Layout2 = _interopRequireDefault(_Layout);

var _web = __webpack_require__(942);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/plutonium/Documents/lovelockchain/pages/cards/new.js?entry';


var CardNew = function (_Component) {
	(0, _inherits3.default)(CardNew, _Component);

	function CardNew() {
		var _ref,
		    _this2 = this;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, CardNew);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CardNew.__proto__ || (0, _getPrototypeOf2.default)(CardNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			loveLetter: '',
			errorMessage: '',
			loading: false
		}, _this.onSubmit = function () {
			var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
				var accounts;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								event.preventDefault();

								_this.setState({ loading: true, errorMessage: '' });

								_context.prev = 2;
								_context.next = 5;
								return _web2.default.eth.getAccounts();

							case 5:
								accounts = _context.sent;
								_context.next = 8;
								return lovelocks.methods.createCard(_this.state.loveLetter).send({
									from: accounts[0]
								});

							case 8:
								_context.next = 13;
								break;

							case 10:
								_context.prev = 10;
								_context.t0 = _context['catch'](2);

								_this.setState({ errorMessage: _context.t0.message });

							case 13:

								_this.setState({ loading: false });

							case 14:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, _this2, [[2, 10]]);
			}));

			return function (_x) {
				return _ref2.apply(this, arguments);
			};
		}(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(CardNew, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 32
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 33
				}
			}, 'Create a Valentine Card'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, _react2.default.createElement(_semanticUiReact.TextArea, { autoHeight: true, placeholder: 'Try adding multiple lines', __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 48
				}
			}, 'Create!')));
		}
	}]);

	return CardNew;
}(_react.Component);

exports.default = CardNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhcmRzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJUZXh0QXJlYSIsIkxheW91dCIsIndlYjMiLCJDYXJkTmV3Iiwic3RhdGUiLCJsb3ZlTGV0dGVyIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImxvdmVsb2NrcyIsIm1ldGhvZHMiLCJjcmVhdGVDYXJkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQU8sQUFBUzs7QUFDdkMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7Ozs7OzRNLEFBQ0w7ZUFBUSxBQUNLLEFBQ1o7aUJBRk8sQUFFTyxBQUNkO1lBSE8sQUFHRSxBO0FBSEYsQUFDUCxXLEFBS0Q7d0ZBQVcsaUJBQUEsQUFBTSxPQUFOO1FBQUE7a0VBQUE7ZUFBQTt1Q0FBQTtZQUNWO2NBQUEsQUFBTSxBQUVOOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBQUYsQUFBVyxNQUFNLGNBSHJCLEFBR1YsQUFBYyxBQUErQjs7d0JBSG5DO3dCQUFBO2VBTWMsY0FBQSxBQUFLLElBTm5CLEFBTWMsQUFBUzs7WUFBMUI7QUFORyw0QkFBQTt3QkFBQTt5QkFPSCxBQUFVLFFBQVYsQUFBa0IsV0FBVyxNQUFBLEFBQUssTUFBbEMsQUFBd0MsWUFBeEMsQUFBb0Q7ZUFDbkQsU0FSRSxBQU9ILEFBQXlELEFBQ3hELEFBQVM7QUFEK0MsQUFDOUQsU0FESzs7WUFQRzt3QkFBQTtBQUFBOztZQUFBO3dCQUFBO3dDQVdUOztjQUFBLEFBQUssU0FBUyxFQUFFLGNBQWMsWUFYckIsQUFXVCxBQUFjLEFBQW9COztZQUduQzs7Y0FBQSxBQUFLLFNBQVMsRUFBRSxTQWROLEFBY1YsQUFBYyxBQUFXOztZQWRmO1lBQUE7d0JBQUE7O0FBQUE7NkJBQUE7QTs7Ozs7Ozs7OzsyQkFpQkYsQUFDUjswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFERCxBQUNDLEFBRUEsNENBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCLFVBQVUsT0FBTyxDQUFDLENBQUMsS0FBQSxBQUFLLE1BQTdDLEFBQW1EO2VBQW5EO2lCQUFBLEFBV0M7QUFYRDtzQkFXQyxBQUFDLDJDQUFTLFlBQVYsTUFBcUIsYUFBckIsQUFBaUM7ZUFBakM7aUJBWEQsQUFXQyxBQUNBO0FBREE7dUJBQ0EsQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixRQUFPLFNBQVMsS0FBQSxBQUFLLE1BQTNDLEFBQWlEO2VBQWpEO2lCQVpELEFBWUMsQUFDQTtBQURBO3VCQUNBLEFBQUMseUNBQU8sU0FBUyxLQUFBLEFBQUssTUFBdEIsQUFBNEIsU0FBUyxTQUFyQztlQUFBO2lCQUFBO0FBQUE7TUFqQkgsQUFDQyxBQUdDLEFBYUMsQUFNSDs7Ozs7QUFoRG9CLEEsQUFtRHRCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGx1dG9uaXVtL0RvY3VtZW50cy9sb3ZlbG9ja2NoYWluIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/plutonium/Documents/lovelockchain/pages/cards/new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/plutonium/Documents/lovelockchain/pages/cards/new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/cards/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi40NjM2YzNmODVlOThiMDhlOTA3NS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FyZHMvbmV3LmpzPzFkZDI4Y2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UsIFRleHRBcmVhIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLmpzJztcblxuY2xhc3MgQ2FyZE5ldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGxvdmVMZXR0ZXI6ICcnLFxuXHRcdGVycm9yTWVzc2FnZTogJycsXG5cdFx0bG9hZGluZzogZmFsc2Vcblx0fTtcblxuXHRvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdFx0YXdhaXQgbG92ZWxvY2tzLm1ldGhvZHMuY3JlYXRlQ2FyZCh0aGlzLnN0YXRlLmxvdmVMZXR0ZXIpLnNlbmQoe1xuXHRcdFx0XHRmcm9tOiBhY2NvdW50c1swXVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8TGF5b3V0PlxuXHRcdFx0XHQ8aDM+Q3JlYXRlIGEgVmFsZW50aW5lIENhcmQ8L2gzPlxuXG5cdFx0XHRcdDxGb3JtIG9uU3VibWl0PXt0aGlzLm9uU3VibWl0fSBlcnJvcj17ISF0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+XG5cdFx0XHRcdFx0ey8qIDxGb3JtLkZpZWxkPlxuXHRcdFx0XHRcdFx0PGxhYmVsPldyaXRlIFlvdXIgTG92ZSBMZXR0ZXI8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PElucHV0XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmxvdmVMZXR0ZXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXtldmVudCA9PlxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoeyBsb3ZlTGV0dGVyOiBldmVudC50YXJnZXQudmFsdWUgfSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L0Zvcm0uRmllbGQ+ICovfVxuXG5cdFx0XHRcdFx0PFRleHRBcmVhIGF1dG9IZWlnaHQgcGxhY2Vob2xkZXI9XCJUcnkgYWRkaW5nIG11bHRpcGxlIGxpbmVzXCIgLz5cblx0XHRcdFx0XHQ8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzXCIgY29udGVudD17dGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9IC8+XG5cdFx0XHRcdFx0PEJ1dHRvbiBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+XG5cdFx0XHRcdFx0XHRDcmVhdGUhXG5cdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdDwvRm9ybT5cblx0XHRcdDwvTGF5b3V0PlxuXHRcdCk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FyZE5ldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL2NhcmRzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUNBOztBQUZBO0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFKQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBVEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBV0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFDQTtBQWZBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQWtCQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFXQTtBQVhBO0FBV0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBTUE7Ozs7Ozs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9