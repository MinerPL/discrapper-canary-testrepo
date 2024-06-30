Object.defineProperty(t, '__esModule', { value: !0 }), t.handleFocus = void 0;
var r = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
        }
        return e;
    }, i = function () {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
            }
        }
        return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
        };
    }(), a = function (e) {
        return e && e.__esModule ? e : { default: e };
    }(n(470079));
function o(e, t) {
    if (!e)
        throw ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
t.handleFocus = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return function (n) {
        function s() {
            !function (e, t) {
                if (!(e instanceof t))
                    throw TypeError('Cannot call a class as a function');
            }(this, s);
            for (var e, t, n, r = arguments.length, i = Array(r), a = 0; a < r; a++)
                i[a] = arguments[a];
            return t = n = o(this, (e = s.__proto__ || Object.getPrototypeOf(s)).call.apply(e, [this].concat(i))), n.state = { focus: !1 }, n.handleFocus = function () {
                return n.setState({ focus: !0 });
            }, n.handleBlur = function () {
                return n.setState({ focus: !1 });
            }, o(n, t);
        }
        return !function (e, t) {
            if ('function' != typeof t && null !== t)
                throw TypeError('Super expression must either be null or a function, not ' + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }(s, n), i(s, [{
                key: 'render',
                value: function () {
                    return a.default.createElement(t, {
                        onFocus: this.handleFocus,
                        onBlur: this.handleBlur
                    }, a.default.createElement(e, r({}, this.props, this.state)));
                }
            }]), s;
    }(a.default.Component);
};
