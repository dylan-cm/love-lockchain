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