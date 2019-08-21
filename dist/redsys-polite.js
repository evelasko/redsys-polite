/*!
 *  redsys-polite - 1.4.3
 *  Marc Pomar Torres - marc@faable.com 
 *  created by Faable.com 
 *  file:redsys-polite.js 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Match all characters that need to be escaped in a string. Modified from
 * source to match single quotes instead of double.
 *
 * Source: https://github.com/douglascrockford/JSON-js/blob/master/json2.js
 */
var ESCAPABLE = /[\\\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
/**
 * Map of characters to escape characters.
 */
var META_CHARS = new Map([["\b", "\\b"], ["\t", "\\t"], ["\n", "\\n"], ["\f", "\\f"], ["\r", "\\r"], ["'", "\\'"], ['"', '\\"'], ["\\", "\\\\"]]);
/**
 * Escape any character into its literal JavaScript string.
 *
 * @param  {string} char
 * @return {string}
 */
function escapeChar(char) {
    return META_CHARS.get(char) || "\\u" + ("0000" + char.charCodeAt(0).toString(16)).slice(-4);
}
/**
 * Quote a string.
 */
function quoteString(str) {
    return "'" + str.replace(ESCAPABLE, escapeChar) + "'";
}
exports.quoteString = quoteString;
/**
 * JavaScript reserved keywords.
 */
var RESERVED_WORDS = new Set(("break else new var case finally return void catch for switch while " + "continue function this with default if throw delete in try " + "do instanceof typeof abstract enum int short boolean export " + "interface static byte extends long super char final native synchronized " + "class float package throws const goto private transient debugger " + "implements protected volatile double import public let yield").split(" "));
/**
 * Test for valid JavaScript identifier.
 */
exports.IS_VALID_IDENTIFIER = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
/**
 * Check if a variable name is valid.
 */
function isValidVariableName(name) {
    return typeof name === "string" && !RESERVED_WORDS.has(name) && exports.IS_VALID_IDENTIFIER.test(name);
}
exports.isValidVariableName = isValidVariableName;
/**
 * Quote JavaScript key access.
 */
function quoteKey(key, next) {
    return isValidVariableName(key) ? key : next(key);
}
exports.quoteKey = quoteKey;
/**
 * Serialize the path to a string.
 */
function stringifyPath(path, next) {
    var result = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = path[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var key = _step.value;

            if (isValidVariableName(key)) {
                result += "." + key;
            } else {
                result += "[" + next(key) + "]";
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return result;
}
exports.stringifyPath = stringifyPath;
//# sourceMappingURL=quote.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var quote_1 = __webpack_require__(0);
/**
 * Used in function stringification.
 */
/* istanbul ignore next */
var METHOD_NAMES_ARE_QUOTED = {
    " ": function _() {
        /* Empty. */
    }
}[" "].toString().charAt(0) === '"';
var FUNCTION_PREFIXES = {
    Function: "function ",
    GeneratorFunction: "function* ",
    AsyncFunction: "async function ",
    AsyncGeneratorFunction: "async function* "
};
var METHOD_PREFIXES = {
    Function: "",
    GeneratorFunction: "*",
    AsyncFunction: "async ",
    AsyncGeneratorFunction: "async *"
};
var TOKENS_PRECEDING_REGEXPS = new Set(("case delete else in instanceof new return throw typeof void " + ", ; : + - ! ~ & | ^ * / % < > ? =").split(" "));
/**
 * Stringify a function.
 */
function functionToString(fn, space, next) {
    return new FunctionParser(fn, space, next).stringify();
}
exports.functionToString = functionToString;
/**
 * Rewrite a stringified function to remove initial indentation.
 */
function dedentFunction(fnString) {
    var found = void 0;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = fnString.split("\n").slice(1)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var line = _step.value;

            var m = /^[\s\t]+/.exec(line);
            if (!m) return fnString; // Early exit without indent.

            var _m = _slicedToArray(m, 1),
                str = _m[0];

            if (found === undefined) found = str;else if (str.length < found.length) found = str;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    return found ? fnString.split("\n" + found).join("\n") : fnString;
}
exports.dedentFunction = dedentFunction;
/**
 * Function parser and stringify.
 */

var FunctionParser = function () {
    function FunctionParser(fn, indent, next, key) {
        _classCallCheck(this, FunctionParser);

        this.fn = fn;
        this.indent = indent;
        this.next = next;
        this.key = key;
        this.pos = 0;
        this.hadKeyword = false;
        this.fnString = Function.prototype.toString.call(fn);
        this.fnType = fn.constructor.name;
        this.keyQuote = key === undefined ? "" : quote_1.quoteKey(key, next);
        this.keyPrefix = key === undefined ? "" : this.keyQuote + ":" + (indent ? " " : "");
        this.isMethodCandidate = key === undefined ? false : this.fn.name === "" || this.fn.name === key;
    }

    _createClass(FunctionParser, [{
        key: "stringify",
        value: function stringify() {
            var value = this.tryParse();
            // If we can't stringify this function, return a void expression; for
            // bonus help with debugging, include the function as a string literal.
            if (!value) {
                return this.keyPrefix + "void " + this.next(this.fnString);
            }
            return dedentFunction(value);
        }
    }, {
        key: "getPrefix",
        value: function getPrefix() {
            if (this.isMethodCandidate && !this.hadKeyword) {
                return METHOD_PREFIXES[this.fnType] + this.keyQuote;
            }
            return this.keyPrefix + FUNCTION_PREFIXES[this.fnType];
        }
    }, {
        key: "tryParse",
        value: function tryParse() {
            if (this.fnString[this.fnString.length - 1] !== "}") {
                // Must be an arrow function.
                return this.keyPrefix + this.fnString;
            }
            // Attempt to remove function prefix.
            if (this.fn.name) {
                var result = this.tryStrippingName();
                if (result) return result;
            }
            // Support class expressions.
            var prevPos = this.pos;
            if (this.consumeSyntax() === "class") return this.fnString;
            this.pos = prevPos;
            if (this.tryParsePrefixTokens()) {
                var _result = this.tryStrippingName();
                if (_result) return _result;
                var offset = this.pos;
                switch (this.consumeSyntax("WORD_LIKE")) {
                    case "WORD_LIKE":
                        if (this.isMethodCandidate && !this.hadKeyword) {
                            offset = this.pos;
                        }
                    // tslint:disable-next-line no-switch-case-fall-through
                    case "()":
                        if (this.fnString.substr(this.pos, 2) === "=>") {
                            return this.keyPrefix + this.fnString;
                        }
                        this.pos = offset;
                    // tslint:disable-next-line no-switch-case-fall-through
                    case '"':
                    case "'":
                    case "[]":
                        return this.getPrefix() + this.fnString.substr(this.pos);
                }
            }
        }
        /**
         * Attempt to parse the function from the current position by first stripping
         * the function's name from the front. This is not a fool-proof method on all
         * JavaScript engines, but yields good results on Node.js 4 (and slightly
         * less good results on Node.js 6 and 8).
         */

    }, {
        key: "tryStrippingName",
        value: function tryStrippingName() {
            if (METHOD_NAMES_ARE_QUOTED) {
                // ... then this approach is unnecessary and yields false positives.
                return;
            }
            var start = this.pos;
            var prefix = this.fnString.substr(this.pos, this.fn.name.length);
            if (prefix === this.fn.name) {
                this.pos += prefix.length;
                if (this.consumeSyntax() === "()" && this.consumeSyntax() === "{}" && this.pos === this.fnString.length) {
                    // Don't include the function's name if it will be included in the
                    // prefix, or if it's invalid as a name in a function expression.
                    if (this.isMethodCandidate || !quote_1.isValidVariableName(prefix)) {
                        start += prefix.length;
                    }
                    return this.getPrefix() + this.fnString.substr(start);
                }
            }
            this.pos = start;
        }
        /**
         * Attempt to advance the parser past the keywords expected to be at the
         * start of this function's definition. This method sets `this.hadKeyword`
         * based on whether or not a `function` keyword is consumed.
         *
         * @return {boolean}
         */

    }, {
        key: "tryParsePrefixTokens",
        value: function tryParsePrefixTokens() {
            var posPrev = this.pos;
            this.hadKeyword = false;
            switch (this.fnType) {
                case "AsyncFunction":
                    if (this.consumeSyntax() !== "async") return false;
                    posPrev = this.pos;
                // tslint:disable-next-line no-switch-case-fall-through
                case "Function":
                    if (this.consumeSyntax() === "function") {
                        this.hadKeyword = true;
                    } else {
                        this.pos = posPrev;
                    }
                    return true;
                case "AsyncGeneratorFunction":
                    if (this.consumeSyntax() !== "async") return false;
                // tslint:disable-next-line no-switch-case-fall-through
                case "GeneratorFunction":
                    var token = this.consumeSyntax();
                    if (token === "function") {
                        token = this.consumeSyntax();
                        this.hadKeyword = true;
                    }
                    return token === "*";
            }
        }
        /**
         * Advance the parser past one element of JavaScript syntax. This could be a
         * matched pair of delimiters, like braces or parentheses, or an atomic unit
         * like a keyword, variable, or operator. Return a normalized string
         * representation of the element parsed--for example, returns '{}' for a
         * matched pair of braces. Comments and whitespace are skipped.
         *
         * (This isn't a full parser, so the token scanning logic used here is as
         * simple as it can be. As a consequence, some things that are one token in
         * JavaScript, like decimal number literals or most multicharacter operators
         * like '&&', are split into more than one token here. However, awareness of
         * some multicharacter sequences like '=>' is necessary, so we match the few
         * of them that we care about.)
         */

    }, {
        key: "consumeSyntax",
        value: function consumeSyntax(wordLikeToken) {
            var m = this.consumeMatch(/^(?:([A-Za-z_0-9$\xA0-\uFFFF]+)|=>|\+\+|\-\-|.)/);
            if (!m) return;

            var _m2 = _slicedToArray(m, 2),
                token = _m2[0],
                match = _m2[1];

            this.consumeWhitespace();
            if (match) return wordLikeToken || match;
            switch (token) {
                case "(":
                    return this.consumeSyntaxUntil("(", ")");
                case "[":
                    return this.consumeSyntaxUntil("[", "]");
                case "{":
                    return this.consumeSyntaxUntil("{", "}");
                case "`":
                    return this.consumeTemplate();
                case '"':
                    return this.consumeRegExp(/^(?:[^\\"]|\\.)*"/, '"');
                case "'":
                    return this.consumeRegExp(/^(?:[^\\']|\\.)*'/, "'");
            }
            return token;
        }
    }, {
        key: "consumeSyntaxUntil",
        value: function consumeSyntaxUntil(startToken, endToken) {
            var isRegExpAllowed = true;
            for (;;) {
                var token = this.consumeSyntax();
                if (token === endToken) return startToken + endToken;
                if (!token || token === ")" || token === "]" || token === "}") return;
                if (token === "/" && isRegExpAllowed && this.consumeMatch(/^(?:\\.|[^\\\/\n[]|\[(?:\\.|[^\]])*\])+\/[a-z]*/)) {
                    isRegExpAllowed = false;
                    this.consumeWhitespace();
                } else {
                    isRegExpAllowed = TOKENS_PRECEDING_REGEXPS.has(token);
                }
            }
        }
    }, {
        key: "consumeMatch",
        value: function consumeMatch(re) {
            var m = re.exec(this.fnString.substr(this.pos));
            if (m) this.pos += m[0].length;
            return m;
        }
        /**
         * Advance the parser past an arbitrary regular expression. Return `token`,
         * or the match object of the regexp.
         */

    }, {
        key: "consumeRegExp",
        value: function consumeRegExp(re, token) {
            var m = re.exec(this.fnString.substr(this.pos));
            if (!m) return;
            this.pos += m[0].length;
            this.consumeWhitespace();
            return token;
        }
        /**
         * Advance the parser past a template string.
         */

    }, {
        key: "consumeTemplate",
        value: function consumeTemplate() {
            for (;;) {
                this.consumeMatch(/^(?:[^`$\\]|\\.|\$(?!{))*/);
                if (this.fnString[this.pos] === "`") {
                    this.pos++;
                    this.consumeWhitespace();
                    return "`";
                }
                if (this.fnString.substr(this.pos, 2) === "${") {
                    this.pos += 2;
                    this.consumeWhitespace();
                    if (this.consumeSyntaxUntil("{", "}")) continue;
                }
                return;
            }
        }
        /**
         * Advance the parser past any whitespace or comments.
         */

    }, {
        key: "consumeWhitespace",
        value: function consumeWhitespace() {
            this.consumeMatch(/^(?:\s|\/\/.*|\/\*[^]*?\*\/)*/);
        }
    }]);

    return FunctionParser;
}();

exports.FunctionParser = FunctionParser;
//# sourceMappingURL=function.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.codeToMessage = exports.RedsysBuilder = exports.PaymentBuilder = undefined;

var _payment = __webpack_require__(3);

var _payment2 = _interopRequireDefault(_payment);

var _redsys = __webpack_require__(8);

var _redsys2 = _interopRequireDefault(_redsys);

var _error_codes = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.PaymentBuilder = _payment2.default;
exports.RedsysBuilder = _redsys2.default;
exports.codeToMessage = _error_codes.codeToMessage; /* jshint esversion:6 */

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* jshint esversion:6 */


var _javascriptStringify = __webpack_require__(4);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Payment = function Payment(options) {
    Object.assign(this, options);
};

var PaymentBuilder = function () {
    function PaymentBuilder() {
        _classCallCheck(this, PaymentBuilder);

        this.currency = 978; // for euros
        this.description = "";
        this.data = "";
        this.transaction_type = 0;
        this.redirect_urls = {
            merchant_url: "",
            ok_url: "",
            cancel_url: ""
        };
    }

    _createClass(PaymentBuilder, [{
        key: "setData",
        value: function setData(data) {
            try {
                this.data = JSON.stringify(data);
            } catch (e) {
                this.data = (0, _javascriptStringify.stringify)(data);
            }
            return this;
        }
    }, {
        key: "setTotal",
        value: function setTotal(total) {
            this.total = parseInt(total * 100);
            return this;
        }
    }, {
        key: "setOrderId",
        value: function setOrderId(id) {
            function zfill(num, len) {
                return (Array(len).join("0") + num).slice(-len);
            }
            this.order_id = zfill(id, 8);
            return this;
        }
    }, {
        key: "setDescription",
        value: function setDescription(description) {
            this.description = description;
            return this;
        }
    }, {
        key: "setCurrency",
        value: function setCurrency(currency) {
            this.currency = currency;
            return this;
        }
    }, {
        key: "setUrlOK",
        value: function setUrlOK(url) {
            this.redirect_urls.ok_url = url;
            return this;
        }
    }, {
        key: "setUrlCancel",
        value: function setUrlCancel(url) {
            this.redirect_urls.cancel_url = url;
            return this;
        }
    }, {
        key: "setUrlMerchant",
        value: function setUrlMerchant(url) {
            this.redirect_urls.merchant_url = url;
            return this;
        }
    }, {
        key: "build",
        value: function build() {
            if (this.total === undefined) throw new Error("Total to charge not set");
            if (this.order_id === undefined) throw new Error("You should set an order id");

            if (this.redirect_urls.callback_url === "" || this.redirect_urls.cancel_url === "" || this.redirect_urls.return_url === "") {
                throw new Error("Urls to return from Redsys shoud be setted properly");
            }
            return new Payment(this);
        }
    }]);

    return PaymentBuilder;
}();

exports.default = PaymentBuilder;
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var stringify_1 = __webpack_require__(5);
var quote_1 = __webpack_require__(0);
/**
 * Root path node.
 */
var ROOT_SENTINEL = Symbol("root");
/**
 * Stringify any JavaScript value.
 */
function stringify(value, replacer, indent) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    var space = typeof indent === "string" ? indent : " ".repeat(indent || 0);
    var path = [];
    var stack = new Set();
    var tracking = new Map();
    var unpack = new Map();
    var valueCount = 0;
    var _options$maxDepth = options.maxDepth,
        maxDepth = _options$maxDepth === undefined ? 100 : _options$maxDepth,
        _options$references = options.references,
        references = _options$references === undefined ? false : _options$references,
        _options$skipUndefine = options.skipUndefinedProperties,
        skipUndefinedProperties = _options$skipUndefine === undefined ? false : _options$skipUndefine,
        _options$maxValues = options.maxValues,
        maxValues = _options$maxValues === undefined ? 100000 : _options$maxValues;
    // Wrap replacer function to support falling back on supported stringify.

    var valueToString = replacerToString(replacer);
    // Every time you call `next(value)` execute this function.
    var onNext = function onNext(value, key) {
        if (++valueCount > maxValues) return;
        if (skipUndefinedProperties && value === undefined) return;
        if (path.length > maxDepth) return;
        // An undefined key is treated as an out-of-band "value".
        if (key === undefined) return valueToString(value, space, onNext);
        path.push(key);
        var result = builder(value);
        path.pop();
        return result;
    };
    var builder = references ? function (value) {
        if (value !== null && ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" || typeof value === "function" || (typeof value === "undefined" ? "undefined" : _typeof(value)) === "symbol")) {
            // Track nodes to restore later.
            if (tracking.has(value)) {
                unpack.set(path.slice(1), tracking.get(value));
                return; // Avoid serializing referenced nodes on an expression.
            }
            // Track encountered nodes.
            tracking.set(value, path.slice(1));
        }
        return valueToString(value, space, onNext);
    } : function (value) {
        // Stop on recursion.
        if (stack.has(value)) return;
        stack.add(value);
        var result = valueToString(value, space, onNext);
        stack.delete(value);
        return result;
    };
    var result = onNext(value, ROOT_SENTINEL);
    // Attempt to restore circular references.
    if (unpack.size) {
        var sp = space ? " " : "";
        var eol = space ? "\n" : "";
        var wrapper = "var x" + sp + "=" + sp + result + ";" + eol;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = unpack.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _step$value = _slicedToArray(_step.value, 2),
                    key = _step$value[0],
                    _value = _step$value[1];

                var keyPath = quote_1.stringifyPath(key, onNext);
                var valuePath = quote_1.stringifyPath(_value, onNext);
                wrapper += "x" + keyPath + sp + "=" + sp + "x" + valuePath + ";" + eol;
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        return "(function" + sp + "()" + sp + "{" + eol + wrapper + "return x;" + eol + "}())";
    }
    return result;
}
exports.stringify = stringify;
/**
 * Create `toString()` function from replacer.
 */
function replacerToString(replacer) {
    if (!replacer) return stringify_1.toString;
    return function (value, space, next) {
        return replacer(value, space, function (value) {
            return stringify_1.toString(value, space, next);
        });
    };
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
var quote_1 = __webpack_require__(0);
var array_1 = __webpack_require__(6);
var object_1 = __webpack_require__(7);
var function_1 = __webpack_require__(1);
/**
 * Stringify primitive values.
 */
var PRIMITIVE_TYPES = {
    string: quote_1.quoteString,
    number: function number(value) {
        return Object.is(value, -0) ? "-0" : String(value);
    },
    boolean: String,
    symbol: function symbol(value, space, next) {
        var key = Symbol.keyFor(value);
        if (key !== undefined) return "Symbol.for(" + next(key) + ")";
        // ES2018 `Symbol.description`.
        return "Symbol(" + next(value.description) + ")";
    },
    undefined: String
};
/**
 * Stringify global variable access.
 */
function globalToString(value, space, next) {
    return "Function(" + next("return this") + ")()";
}
/**
 * Convert JavaScript objects into strings.
 */
var OBJECT_TYPES = {
    "[object Array]": array_1.arrayToString,
    "[object Object]": object_1.objectToString,
    "[object Error]": function objectError(error, space, next) {
        return "new Error(" + next(error.message) + ")";
    },
    "[object Date]": function objectDate(date) {
        return "new Date(" + date.getTime() + ")";
    },
    "[object String]": function objectString(str, space, next) {
        return "new String(" + next(str.toString()) + ")";
    },
    "[object Number]": function objectNumber(num) {
        return "new Number(" + num + ")";
    },
    "[object Boolean]": function objectBoolean(bool) {
        return "new Boolean(" + bool + ")";
    },
    "[object Set]": function objectSet(set, space, next) {
        return "new Set(" + next(Array.from(set)) + ")";
    },
    "[object Map]": function objectMap(map, space, next) {
        return "new Map(" + next(Array.from(map)) + ")";
    },
    "[object RegExp]": String,
    "[object Function]": function_1.functionToString,
    "[object GeneratorFunction]": function_1.functionToString,
    "[object AsyncFunction]": function_1.functionToString,
    "[object AsyncGeneratorFunction]": function_1.functionToString,
    "[object global]": globalToString,
    "[object Window]": globalToString
};
/**
 * Stringify a value recursively.
 */
function toString(value, space, next) {
    if (value === null) return "null";
    var typeOf = typeof value === "undefined" ? "undefined" : _typeof(value);
    if (PRIMITIVE_TYPES.hasOwnProperty(typeOf)) {
        return PRIMITIVE_TYPES[typeOf](value, space, next);
    }
    // Handle buffer objects before object types (node < 6 was an object, node >= 6 is a `Uint8Array`).
    if (typeof Buffer === "function" && Buffer.isBuffer(value)) {
        return "new Buffer(" + next(value.toString()) + ")";
    }
    // Use the internal object string to select stringify method.
    var toString = Object.prototype.toString.call(value);
    // Convert objects into strings.
    if (OBJECT_TYPES.hasOwnProperty(toString)) {
        return OBJECT_TYPES[toString](value, space, next);
    }
}
exports.toString = toString;
//# sourceMappingURL=stringify.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Stringify an array of values.
 */
function arrayToString(array, space, next) {
    // Map array values to their stringified values with correct indentation.
    var values = array.map(function (value, index) {
        var result = next(value, index);
        if (result === undefined) return String(result);
        return space + result.split("\n").join("\n" + space);
    }).join(space ? ",\n" : ",");
    // Wrap the array in newlines if we have indentation set.
    if (space && values) {
        return "[\n" + values + "\n]";
    }
    return "[" + values + "]";
}
exports.arrayToString = arrayToString;
//# sourceMappingURL=array.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var quote_1 = __webpack_require__(0);
var function_1 = __webpack_require__(1);
/**
 * Stringify an object of keys and values.
 */
function objectToString(obj, indent, next) {
    var eol = indent ? "\n" : "";
    // Iterate over object keys and concat string together.
    var values = Object.keys(obj).reduce(function (values, key) {
        if (typeof obj[key] === "function") {
            var parser = new function_1.FunctionParser(obj[key], indent, next, key);
            var _result = parser.stringify();
            values.push(indent + _result.split("\n").join("\n" + indent));
            return values;
        }
        var result = next(obj[key], key);
        // Omit `undefined` object entries.
        if (result === undefined) return values;
        // String format the value data.
        var value = result.split("\n").join("\n" + indent);
        values.push("" + indent + quote_1.quoteKey(key, next) + ":" + (indent ? " " : "") + value);
        return values;
    }, []).join("," + eol);
    // Avoid new lines in an empty object.
    if (values === "") return "{}";
    return "{" + eol + values + eol + "}";
}
exports.objectToString = objectToString;
//# sourceMappingURL=object.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /*jshint esversion:6*/


var _crypto = __webpack_require__(9);

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Redsys = function () {
  function Redsys(p) {
    _classCallCheck(this, Redsys);

    Object.assign(this, p);
  }

  _createClass(Redsys, [{
    key: "generateMerchantParams",
    value: function generateMerchantParams(payment) {
      return {
        "DS_MERCHANT_AMOUNT": payment.total,
        "DS_MERCHANT_ORDER": payment.order_id,
        "DS_MERCHANT_MERCHANTCODE": this.merchantCode,
        "DS_MERCHANT_CURRENCY": payment.currency,
        "DS_MERCHANT_TRANSACTIONTYPE": this.transaction_type,
        "DS_MERCHANT_TERMINAL": this.terminal,
        "DS_MERCHANT_MERCHANTDATA": payment.data,
        "DS_MERCHANT_MERCHANTURL": payment.redirect_urls.merchant_url,
        "DS_MERCHANT_URLOK": payment.redirect_urls.ok_url,
        "DS_MERCHANT_URLKO": payment.redirect_urls.cancel_url,
        'DS_MERCHANT_CONSUMERLANGUAGE': '001',
        'DS_MERCHANT_TITULAR': this.titular,
        'DS_MERCHANT_MERCHANTNAME': this.name,
        'DS_MERCHANT_IDENTIFIER': this.setPayByReference,
        'DS_MERCHANT_DIRECTPAYMENT': this.directPayment
        // Test code
        //"DS_MERCHANT_PAN":"4548812049400004",
        //"DS_MERCHANT_EXPIRYDATE":"1220",
        //"DS_MERCHANT_CVV2":"123"
      };
    }
  }, {
    key: "encodeOrder",
    value: function encodeOrder(order_id, secret) {
      var secretKey = new Buffer(secret, 'base64');
      var iv = new Buffer(8);
      iv.fill(0);
      var cipher = _crypto2.default.createCipheriv('des-ede3-cbc', secretKey, iv);
      cipher.setAutoPadding(false);
      var res = cipher.update(order_id, 'utf8', 'base64') + cipher.final('base64');
      return res;
    }
  }, {
    key: "doSignature",
    value: function doSignature(order_encoded, merchantData) {
      var hexMac256 = _crypto2.default.createHmac("sha256", new Buffer(order_encoded, 'base64')).update(merchantData).digest("hex");
      return new Buffer(hexMac256, 'hex').toString('base64');
    }
  }, {
    key: "_decodeNotifiedMerchantParams",
    value: function _decodeNotifiedMerchantParams(signature, merchantData) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        var decodedData = JSON.parse(new Buffer(merchantData, 'base64'));
        var key = _this.encodeOrder(decodedData.Ds_Order, _this.secret);
        var hexMac256 = _crypto2.default.createHmac("sha256", new Buffer(key, 'base64')).update(merchantData).digest();
        var signatureBuffer = new Buffer(signature, 'base64');
        if (hexMac256.equals(signatureBuffer)) {
          resolve(decodedData);
        } else {
          reject(new Error('Signature is not valid'));
        }
      });
    }
  }, {
    key: "getFormData",
    value: function getFormData(payment) {
      // Merchant parameters as a Base64-JSON
      var merchant = new Buffer(JSON.stringify(this.generateMerchantParams(payment))).toString('base64');

      // Calculate signature
      var order_encoded = this.encodeOrder(payment.order_id, this.secret);
      var signature = this.doSignature(order_encoded, merchant);

      return {
        'redsys_url': this.url,
        'Ds_SignatureVersion': 'HMAC_SHA256_V1',
        'Ds_MerchantParameters': merchant,
        'Ds_Signature': signature
      };
    }
  }]);

  return Redsys;
}();

var RedsysBuilder = function () {
  function RedsysBuilder() {
    _classCallCheck(this, RedsysBuilder);

    this.name = "Default-Redsys";
    this.terminal = "1";
    this.language = "auto";
    this.transaction_type = "0";
    this.setPayByReference = '';
    this.directPayment = false;
    // Production URL
    this.url = "https://sis.redsys.es/sis/realizarPago";
  }

  _createClass(RedsysBuilder, [{
    key: "setMerchantCode",
    value: function setMerchantCode(merchant_code) {
      this.merchantCode = merchant_code;
      return this;
    }
  }, {
    key: "setTerminal",
    value: function setTerminal(terminal_number) {
      this.terminal = terminal_number;
      return this;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
      return this;
    }
  }, {
    key: "setTitular",
    value: function setTitular(titular) {
      this.titular = titular;
      return this;
    }
  }, {
    key: "enablePayByReference",
    value: function enablePayByReference(reference) {
      this.setPayByReference = reference || "REQUIRED";
      return this;
    }
  }, {
    key: "enableDirectPayment",
    value: function enableDirectPayment() {
      this.directPayment = true;
      return this;
    }
  }, {
    key: "setSecret",
    value: function setSecret(secret) {
      this.secret = secret;
      return this;
    }
  }, {
    key: "enableDebug",
    value: function enableDebug() {
      // Change to debug url
      this.url = "https://sis-t.redsys.es:25443/sis/realizarPago";
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      if (this.merchantCode === undefined) throw new Error("Merchant Code not set");
      if (this.titular === undefined) throw new Error("Titular not set");
      if (this.secret === undefined) throw new Error("Secret not set");
      return new Redsys(this);
    }
  }]);

  return RedsysBuilder;
}();

exports.default = RedsysBuilder;
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("crypto");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* jshint esversion:6 */

var OK = function OK(m) {
  return {
    message: m,
    valid: true
  };
};

var NOT_OK = function NOT_OK(m) {
  return {
    message: m,
    valid: false
  };
};

var codeToMessage = function codeToMessage(code) {
  code = parseInt(code);
  if (code >= 0 && code <= 99) {
    return OK("Transacción autorizada para pagos y preautorizaciones");
  }

  switch (code) {
    case 900:
      return OK("Transacción autorizada para devoluciones y confirmaciones");
    case 101:
      return NOT_OK("Tarjeta caducada");
    case 102:
      return NOT_OK("Tarjeta en excepción transitoria o bajo sospecha de fraude");
    case 106:
      return NOT_OK("Intentos de PIN excedidos");
    case 125:
      return NOT_OK("Tarjeta no efectiva");
    case 129:
      return NOT_OK("Código de seguridad (CVV2/CVC2) incorrecto");
    case 180:
      return NOT_OK("Tarjeta ajena al servicio");
    case 184:
      return NOT_OK("Error en la autenticación del titular");
    case 190:
      return NOT_OK("Denegación del emisor sin especificar motivo");
    case 191:
      return NOT_OK("Fecha de caducidad errónea");
    case 202:
      return NOT_OK("Tarjeta en excepción transitoria o bajo sospecha de fraude con retirada de tarjeta");
    case 904:
      return NOT_OK("Comercio no registrado en FUC");
    case 909:
      return NOT_OK("Error de sistema");
    case 913:
      return NOT_OK("Pedido repetido");
    case 944:
      return NOT_OK("Sesión Incorrecta");
    case 950:
      return NOT_OK("Operación de devolución no permitida");
    case 9912:
      return NOT_OK("Emisor no disponible");
    case 912:
      return NOT_OK("Emisor no disponible");
    case 9064:
      return NOT_OK("Número de posiciones de la tarjeta incorrecto");
    case 9078:
      return NOT_OK("Tipo de operación no permitida para esa tarjeta");
    case 9093:
      return NOT_OK("Tarjeta no existente");
    case 9094:
      return NOT_OK("Rechazo servidores internacionales");
    case 9104:
      return NOT_OK("Comercio con “titular seguro” y titular sin clave de compra segura");
    case 9218:
      return NOT_OK("El comercio no permite op. seguras por entrada /operaciones");
    case 9253:
      return NOT_OK("Tarjeta no cumple el check-digit");
    case 9256:
      return NOT_OK("El comercio no puede realizar preautorizaciones");
    case 9257:
      return NOT_OK("Esta tarjeta no permite operativa de preautorizaciones");
    case 9261:
      return NOT_OK("Operación detenida por superar el control de restricciones en la entrada al SIS");
    case 9913:
      return NOT_OK("Error en la confirmación que el comercio envía al TPV Virtual (solo aplicable en la opción de sincronización SOAP)");
    case 9914:
      return NOT_OK("Confirmación “KO” del comercio (solo aplicable en la opción de sincronización SOAP)");
    case 9915:
      return NOT_OK("A petición del usuario se ha cancelado el pago");
    case 9928:
      return NOT_OK("Anulación de autorización en diferido realizada por el SIS (proceso batch)");
    case 9929:
      return NOT_OK("Anulación de autorización en diferido realizada por el comercio");
    case 9997:
      return NOT_OK("Se está procesando otra transacción en SIS con la misma tarjeta");
    case 9998:
      return NOT_OK("Operación en proceso de solicitud de datos de tarjeta");
    case 9999:
      return NOT_OK("Operación que ha sido redirigida al emisor a autenticar");
    case 298:
      return NOT_OK("El comercio no permite realizar operaciones de Tarjeta en Archivo");
    case 319:
      return NOT_OK("El comercio no pertenece al grupo especificado en Ds_Merchant_Group");
    case 321:
      return NOT_OK("La referencia indicada en Ds_Merchant_Identifier no está asociada al comercio");
    case 322:
      return NOT_OK("Error de formato en Ds_Merchant_Group");
    case 325:
      return NOT_OK("Se ha pedido no mostrar pantallas pero no se ha enviado ninguna referencia de tarjeta");
    default:
      return NOT_OK("UNDEFINED ANSWER");
  }
};

exports.codeToMessage = codeToMessage;

/***/ })
/******/ ]);
});