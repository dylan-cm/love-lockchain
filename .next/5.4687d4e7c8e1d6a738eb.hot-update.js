webpackHotUpdate(5,{

/***/ 708:
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

var _semanticUiReact = __webpack_require__(464);

var _Layout = __webpack_require__(940);

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
			var _this3 = this;

			// console.log(this.state.loveLetter);

			return _react2.default.createElement(_Layout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 34
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 35
				}
			}, 'Create a Valentine Card'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 37
				}
			}, _react2.default.createElement(_semanticUiReact.TextArea, {
				autoHeight: true,
				placeholder: 'Write Your Love Letter',
				value: this.state.loveLetter,
				onChange: function onChange(event) {
					return _this3.setState({ loveLetter: event.target.value });
				},
				__source: {
					fileName: _jsxFileName,
					lineNumber: 38
				}
			}), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Oops', content: this.state.errorMessage, __source: {
					fileName: _jsxFileName,
					lineNumber: 46
				}
			}), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, __source: {
					fileName: _jsxFileName,
					lineNumber: 47
				}
			}, 'Create!')));
		}
	}]);

	return CardNew;
}(_react.Component);

exports.default = CardNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhcmRzL25ldy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkZvcm0iLCJCdXR0b24iLCJJbnB1dCIsIk1lc3NhZ2UiLCJUZXh0QXJlYSIsIkxheW91dCIsIndlYjMiLCJDYXJkTmV3Iiwic3RhdGUiLCJsb3ZlTGV0dGVyIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsImxvdmVsb2NrcyIsIm1ldGhvZHMiLCJjcmVhdGVDYXJkIiwic2VuZCIsImZyb20iLCJtZXNzYWdlIiwidGFyZ2V0IiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTOztBQUN2QyxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFVOzs7Ozs7Ozs7SSxBQUVYOzs7Ozs7Ozs7Ozs7Ozs7NE1BQ0wsQTtlQUFRLEFBQ0ssQUFDWjtpQkFGTyxBQUVPLEFBQ2Q7WUFITyxBLEFBR0U7QUFIRixBQUNQLFdBS0QsQTt3RkFBVyxpQkFBQSxBQUFNLE9BQU47UUFBQTtrRUFBQTtlQUFBO3VDQUFBO1lBQ1Y7Y0FBQSxBQUFNLEFBRU47O2NBQUEsQUFBSyxTQUFTLEVBQUUsU0FBRixBQUFXLE1BQU0sY0FIckIsQUFHVixBQUFjLEFBQStCOzt3QkFIbkM7d0JBQUE7ZUFNYyxjQUFBLEFBQUssSUFObkIsQUFNYyxBQUFTOztZQUExQjtBQU5HLDRCQUFBO3dCQUFBO3lCQU9ILEFBQVUsUUFBVixBQUFrQixXQUFXLE1BQUEsQUFBSyxNQUFsQyxBQUF3QyxZQUF4QyxBQUFvRDtlQUNuRCxTQVJFLEFBT0gsQUFBeUQsQUFDeEQsQUFBUztBQUQrQyxBQUM5RCxTQURLOztZQVBHO3dCQUFBO0FBQUE7O1lBQUE7d0JBQUE7d0NBV1Q7O2NBQUEsQUFBSyxTQUFTLEVBQUUsY0FBYyxZQVhyQixBQVdULEFBQWMsQUFBb0I7O1lBR25DOztjQUFBLEFBQUssU0FBUyxFQUFFLFNBZE4sQUFjVixBQUFjLEFBQVc7O1lBZGY7WUFBQTt3QkFBQTs7QUFBQTs2QkFBQTtBOzs7Ozs7Ozs7OzJCQWlCRjtnQkFDUjs7QUFFQTs7MEJBQ0MsQUFBQzs7ZUFBRDtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUVBLDRDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtlQUFuRDtpQkFBQSxBQUNDO0FBREQ7c0JBQ0MsQUFBQztnQkFBRCxBQUVDO2lCQUZELEFBRWEsQUFDWjtXQUFPLEtBQUEsQUFBSyxNQUhiLEFBR21CLEFBQ2xCO2NBQVUseUJBQUE7WUFDVCxPQUFBLEFBQUssU0FBUyxFQUFFLFlBQVksTUFBQSxBQUFNLE9BRHpCLEFBQ1QsQUFBYyxBQUEyQjtBQUwzQzs7ZUFBQTtpQkFERCxBQUNDLEFBUUE7QUFSQTtBQUNDLHVCQU9ELEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsUUFBTyxTQUFTLEtBQUEsQUFBSyxNQUEzQyxBQUFpRDtlQUFqRDtpQkFURCxBQVNDLEFBQ0E7QUFEQTt1QkFDQSxBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsU0FBckM7ZUFBQTtpQkFBQTtBQUFBO01BZEgsQUFDQyxBQUdDLEFBVUMsQUFNSDs7Ozs7QUEvQ29CLEEsQUFrRHRCOztrQkFBQSxBQUFlIiwiZmlsZSI6Im5ldy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGx1dG9uaXVtL0RvY3VtZW50cy9sb3ZlbG9ja2NoYWluIn0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40Njg3ZDRlN2M4ZTFkNmE3MzhlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FyZHMvbmV3LmpzPzE4MTFlMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvcm0sIEJ1dHRvbiwgSW5wdXQsIE1lc3NhZ2UsIFRleHRBcmVhIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgd2ViMyBmcm9tICcuLi8uLi9ldGhlcmV1bS93ZWIzLmpzJztcblxuY2xhc3MgQ2FyZE5ldyBleHRlbmRzIENvbXBvbmVudCB7XG5cdHN0YXRlID0ge1xuXHRcdGxvdmVMZXR0ZXI6ICcnLFxuXHRcdGVycm9yTWVzc2FnZTogJycsXG5cdFx0bG9hZGluZzogZmFsc2Vcblx0fTtcblxuXHRvblN1Ym1pdCA9IGFzeW5jIGV2ZW50ID0+IHtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0dGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XG5cblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXHRcdFx0YXdhaXQgbG92ZWxvY2tzLm1ldGhvZHMuY3JlYXRlQ2FyZCh0aGlzLnN0YXRlLmxvdmVMZXR0ZXIpLnNlbmQoe1xuXHRcdFx0XHRmcm9tOiBhY2NvdW50c1swXVxuXHRcdFx0fSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KTtcblx0XHR9XG5cblx0XHR0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG5cdH07XG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUubG92ZUxldHRlcik7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PExheW91dD5cblx0XHRcdFx0PGgzPkNyZWF0ZSBhIFZhbGVudGluZSBDYXJkPC9oMz5cblxuXHRcdFx0XHQ8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuXHRcdFx0XHRcdDxUZXh0QXJlYVxuXHRcdFx0XHRcdFx0YXV0b0hlaWdodFxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXcml0ZSBZb3VyIExvdmUgTGV0dGVyXCJcblx0XHRcdFx0XHRcdHZhbHVlPXt0aGlzLnN0YXRlLmxvdmVMZXR0ZXJ9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ZXZlbnQgPT5cblx0XHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7IGxvdmVMZXR0ZXI6IGV2ZW50LnRhcmdldC52YWx1ZSB9KVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PE1lc3NhZ2UgZXJyb3IgaGVhZGVyPVwiT29wc1wiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxuXHRcdFx0XHRcdDxCdXR0b24gbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfSBwcmltYXJ5PlxuXHRcdFx0XHRcdFx0Q3JlYXRlIVxuXHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHQ8L0Zvcm0+XG5cdFx0XHQ8L0xheW91dD5cblx0XHQpO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmROZXc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9jYXJkcy9uZXcuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFGQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBSkE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQU5BO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFDQTtBQVRBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFmQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTEE7O0FBQUE7QUFRQTtBQVJBO0FBQ0E7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQU1BOzs7Ozs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==