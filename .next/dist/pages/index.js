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

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/plutonium/Documents/lovelockchain/pages/index.js?entry';


var LoveLockIndex = function (_Component) {
	(0, _inherits3.default)(LoveLockIndex, _Component);

	function LoveLockIndex() {
		(0, _classCallCheck3.default)(this, LoveLockIndex);

		return (0, _possibleConstructorReturn3.default)(this, (LoveLockIndex.__proto__ || (0, _getPrototypeOf2.default)(LoveLockIndex)).apply(this, arguments));
	}

	(0, _createClass3.default)(LoveLockIndex, [{
		key: 'renderLocks',
		value: function renderLocks() {
			var items = this.props.locks.map(function (address) {
				return {
					header: address,
					description: _react2.default.createElement('a', {
						__source: {
							fileName: _jsxFileName,
							lineNumber: 17
						}
					}, 'View Card'),
					fluid: true
				};
			});

			return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
					fileName: _jsxFileName,
					lineNumber: 22
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('h3', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, 'All The Cards'), _react2.default.createElement(_semanticUiReact.Button, {
				floated: 'right',
				content: 'Write Your Valentine',
				icon: 'add circle',
				primary: true,
				__source: {
					fileName: _jsxFileName,
					lineNumber: 29
				}
			}), this.renderLocks());
		}
	}], [{
		key: 'getInitialProps',
		value: function () {
			var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
				var locks;
				return _regenerator2.default.wrap(function _callee$(_context) {
					while (1) {
						switch (_context.prev = _context.next) {
							case 0:
								locks = ['1', '2', '3'];
								//await lovelocks.methods.getCreators().call();

								return _context.abrupt('return', { locks: locks });

							case 2:
							case 'end':
								return _context.stop();
						}
					}
				}, _callee, this);
			}));

			function getInitialProps() {
				return _ref.apply(this, arguments);
			}

			return getInitialProps;
		}()
	}]);

	return LoveLockIndex;
}(_react.Component);

exports.default = LoveLockIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsIkxheW91dCIsIkxvdmVMb2NrSW5kZXgiLCJpdGVtcyIsInByb3BzIiwibG9ja3MiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckxvY2tzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTTs7QUFDZixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7O2dDQVFTLEFBQ2I7T0FBTSxhQUFRLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxtQkFBVyxBQUM3Qzs7YUFBTyxBQUNFLEFBQ1I7a0NBQWEsY0FBQTs7aUJBQUE7bUJBQUE7QUFBQTtBQUFBLE1BQUEsRUFGUCxBQUVPLEFBQ2I7WUFIRCxBQUFPLEFBR0MsQUFFUjtBQUxPLEFBQ047QUFGRixBQUFjLEFBUWQsSUFSYzs7d0NBUVAsQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjtlQUFuQjtpQkFBUCxBQUFPLEFBQ1A7QUFETztJQUFBOzs7OzJCQUdDLEFBQ1I7MEJBQ0MsY0FBQTs7ZUFBQTtpQkFBQSxBQUNDO0FBREQ7QUFBQSxJQUFBLGtCQUNDLGNBQUE7O2VBQUE7aUJBQUE7QUFBQTtBQUFBLE1BREQsQUFDQyxBQUNBLGtDQUFBLEFBQUM7YUFBRCxBQUNTLEFBQ1I7YUFGRCxBQUVTLEFBQ1I7VUFIRCxBQUdNLEFBQ0w7YUFKRCxBQUlVOztlQUpWO2lCQUZELEFBRUMsQUFNQztBQU5EO0FBQ0MsWUFKSCxBQUNDLEFBUUUsQUFBSyxBQUdSOzs7Ozs7Ozs7O1lBL0JNO0EsZ0JBQVEsQ0FBQSxBQUFDLEtBQUQsQUFBTSxLQUFOLEFBQVcsQSxBQUN6Qjs7O3lDQUVPLEVBQUUsT0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTG1CLEEsQUFvQzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wbHV0b25pdW0vRG9jdW1lbnRzL2xvdmVsb2NrY2hhaW4ifQ==