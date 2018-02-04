'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _web = require('../../ethereum/web3.js');

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