Object.defineProperty(t, '__esModule', { value: !0 }), (t.hover = void 0);
var r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
        },
    i = (function (e) {
        return e && e.__esModule ? e : { default: e };
    })(n(192379));
function a(e, t) {
    if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t && ('object' == typeof t || 'function' == typeof t) ? t : e;
}
var s = (t.hover = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'span';
    return (function (n) {
        function s() {
            !(function (e, t) {
                if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
            })(this, s);
            for (var n, o, l, u = arguments.length, c = Array(u), d = 0; d < u; d++) c[d] = arguments[d];
            return (
                (o = l = a(this, (n = s.__proto__ || Object.getPrototypeOf(s)).call.apply(n, [this].concat(c)))),
                (l.state = { hover: !1 }),
                (l.handleMouseOver = function () {
                    return l.setState({ hover: !0 });
                }),
                (l.handleMouseOut = function () {
                    return l.setState({ hover: !1 });
                }),
                (l.render = function () {
                    return i.default.createElement(
                        t,
                        {
                            onMouseOver: l.handleMouseOver,
                            onMouseOut: l.handleMouseOut
                        },
                        i.default.createElement(e, r({}, l.props, l.state))
                    );
                }),
                a(l, o)
            );
        }
        return (
            !(function (e, t) {
                if ('function' != typeof t && null !== t) throw TypeError('Super expression must either be null or a function, not ' + typeof t);
                (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                })),
                    t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
            })(s, n),
            s
        );
    })(i.default.Component);
});
t.default = s;
