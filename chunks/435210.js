var r = n(444675),
    i =
        Object.getOwnPropertyDescriptors ||
        function (e) {
            for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
            return n;
        },
    a = /%[sdj%]/g;
(t.format = function (e) {
    if (!T(e)) {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(u(arguments[n]));
        return t.join(' ');
    }
    for (
        var n = 1,
            r = arguments,
            i = r.length,
            s = String(e).replace(a, function (e) {
                if ('%%' === e) return '%';
                if (n >= i) return e;
                switch (e) {
                    case '%s':
                        return String(r[n++]);
                    case '%d':
                        return Number(r[n++]);
                    case '%j':
                        try {
                            return JSON.stringify(r[n++]);
                        } catch (e) {
                            return '[Circular]';
                        }
                    default:
                        return e;
                }
            }),
            o = r[n];
        n < i;
        o = r[++n]
    )
        m(o) || !A(o) ? (s += ' ' + o) : (s += ' ' + u(o));
    return s;
}),
    (t.deprecate = function (e, n) {
        if (void 0 !== r && !0 === r.noDeprecation) return e;
        if (void 0 === r)
            return function () {
                return t.deprecate(e, n).apply(this, arguments);
            };
        var i = !1;
        return function () {
            if (!i) {
                if (r.throwDeprecation) throw Error(n);
                r.traceDeprecation ? console.trace(n) : console.error(n);
                i = !0;
            }
            return e.apply(this, arguments);
        };
    });
var s = {},
    o = /^$/;
if (r.env.NODE_DEBUG) {
    var l = r.env.NODE_DEBUG;
    o = RegExp(
        '^' +
            (l = l
                .replace(/[|\\{}()[\]^$+?.]/g, '\\$&')
                .replace(/\*/g, '.*')
                .replace(/,/g, '$|^')
                .toUpperCase()) +
            '$',
        'i'
    );
}
function u(e, n) {
    var r = {
        seen: [],
        stylize: d
    };
    return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), p(n) ? (r.showHidden = n) : n && t._extend(r, n), g(r.showHidden) && (r.showHidden = !1), g(r.depth) && (r.depth = 2), g(r.colors) && (r.colors = !1), g(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = c), _(r, e, r.depth);
}
function c(e, t) {
    var n = u.styles[t];
    return n ? '\x1B[' + u.colors[n][0] + 'm' + e + '\x1B[' + u.colors[n][1] + 'm' : e;
}
function d(e, t) {
    return e;
}
(t.debuglog = function (e) {
    if (!s[(e = e.toUpperCase())]) {
        if (o.test(e)) {
            var n = r.pid;
            s[e] = function () {
                var r = t.format.apply(t, arguments);
                console.error('%s %d: %s', e, n, r);
            };
        } else s[e] = function () {};
    }
    return s[e];
}),
    (t.inspect = u),
    (u.colors = {
        bold: [1, 22],
        italic: [3, 23],
        underline: [4, 24],
        inverse: [7, 27],
        white: [37, 39],
        grey: [90, 39],
        black: [30, 39],
        blue: [34, 39],
        cyan: [36, 39],
        green: [32, 39],
        magenta: [35, 39],
        red: [31, 39],
        yellow: [33, 39]
    }),
    (u.styles = {
        special: 'cyan',
        number: 'yellow',
        boolean: 'yellow',
        undefined: 'grey',
        null: 'bold',
        string: 'green',
        date: 'magenta',
        regexp: 'red'
    });
function _(e, n, r) {
    if (e.customInspect && n && O(n.inspect) && n.inspect !== t.inspect && !(n.constructor && n.constructor.prototype === n)) {
        var i,
            a,
            s = n.inspect(r, e);
        return !T(s) && (s = _(e, s, r)), s;
    }
    var o = (function (e, t) {
        if (g(t)) return e.stylize('undefined', 'undefined');
        if (T(t)) {
            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
            return e.stylize(n, 'string');
        }
        return I(t) ? e.stylize('' + t, 'number') : p(t) ? e.stylize('' + t, 'boolean') : m(t) ? e.stylize('null', 'null') : void 0;
    })(e, n);
    if (o) return o;
    var l = Object.keys(n);
    var u =
        ((i = {}),
        l.forEach(function (e, t) {
            i[e] = !0;
        }),
        i);
    if ((e.showHidden && (l = Object.getOwnPropertyNames(n)), v(n) && (l.indexOf('message') >= 0 || l.indexOf('description') >= 0))) return E(n);
    if (0 === l.length) {
        if (O(n)) {
            var c = n.name ? ': ' + n.name : '';
            return e.stylize('[Function' + c + ']', 'special');
        }
        if (S(n)) return e.stylize(RegExp.prototype.toString.call(n), 'regexp');
        if (N(n)) return e.stylize(Date.prototype.toString.call(n), 'date');
        if (v(n)) return E(n);
    }
    var d = '',
        A = !1,
        R = ['{', '}'];
    if ((h(n) && ((A = !0), (R = ['[', ']'])), O(n) && (d = ' [Function' + (n.name ? ': ' + n.name : '') + ']'), S(n) && (d = ' ' + RegExp.prototype.toString.call(n)), N(n) && (d = ' ' + Date.prototype.toUTCString.call(n)), v(n) && (d = ' ' + E(n)), 0 === l.length && (!A || 0 == n.length))) return R[0] + d + R[1];
    if (r < 0) return S(n) ? e.stylize(RegExp.prototype.toString.call(n), 'regexp') : e.stylize('[Object]', 'special');
    return (
        e.seen.push(n),
        (a = A
            ? (function (e, t, n, r, i) {
                  for (var a = [], s = 0, o = t.length; s < o; ++s) D(t, String(s)) ? a.push(f(e, t, n, r, String(s), !0)) : a.push('');
                  return (
                      i.forEach(function (i) {
                          !i.match(/^\d+$/) && a.push(f(e, t, n, r, i, !0));
                      }),
                      a
                  );
              })(e, n, r, u, l)
            : l.map(function (t) {
                  return f(e, n, r, u, t, A);
              })),
        e.seen.pop(),
        (function (e, t, n) {
            var r = 0;
            return e.reduce(function (e, t) {
                return r++, t.indexOf('\n') >= 0 && r++, e + t.replace(/\u001b\[\d\d?m/g, '').length + 1;
            }, 0) > 60
                ? n[0] + ('' === t ? '' : t + '\n ') + ' ' + e.join(',\n  ') + ' ' + n[1]
                : n[0] + t + ' ' + e.join(', ') + ' ' + n[1];
        })(a, d, R)
    );
}
function E(e) {
    return '[' + Error.prototype.toString.call(e) + ']';
}
function f(e, t, n, r, i, a) {
    var s, o, l;
    if (
        ((l = Object.getOwnPropertyDescriptor(t, i) || { value: t[i] }).get ? (o = l.set ? e.stylize('[Getter/Setter]', 'special') : e.stylize('[Getter]', 'special')) : l.set && (o = e.stylize('[Setter]', 'special')),
        !D(r, i) && (s = '[' + i + ']'),
        !o &&
            (0 > e.seen.indexOf(l.value)
                ? (o = m(n) ? _(e, l.value, null) : _(e, l.value, n - 1)).indexOf('\n') > -1 &&
                  (o = a
                      ? o
                            .split('\n')
                            .map(function (e) {
                                return '  ' + e;
                            })
                            .join('\n')
                            .slice(2)
                      : '\n' +
                        o
                            .split('\n')
                            .map(function (e) {
                                return '   ' + e;
                            })
                            .join('\n'))
                : (o = e.stylize('[Circular]', 'special'))),
        g(s))
    ) {
        if (a && i.match(/^\d+$/)) return o;
        (s = JSON.stringify('' + i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
            ? ((s = s.slice(1, -1)), (s = e.stylize(s, 'name')))
            : ((s = s
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
              (s = e.stylize(s, 'string')));
    }
    return s + ': ' + o;
}
function h(e) {
    return Array.isArray(e);
}
function p(e) {
    return 'boolean' == typeof e;
}
function m(e) {
    return null === e;
}
(t.types = n(842406)), (t.isArray = h), (t.isBoolean = p), (t.isNull = m);
function I(e) {
    return 'number' == typeof e;
}
function T(e) {
    return 'string' == typeof e;
}
(t.isNullOrUndefined = function (e) {
    return null == e;
}),
    (t.isNumber = I),
    (t.isString = T);
function g(e) {
    return void 0 === e;
}
function S(e) {
    return A(e) && '[object RegExp]' === R(e);
}
function A(e) {
    return 'object' == typeof e && null !== e;
}
function N(e) {
    return A(e) && '[object Date]' === R(e);
}
function v(e) {
    return A(e) && ('[object Error]' === R(e) || e instanceof Error);
}
function O(e) {
    return 'function' == typeof e;
}
(t.isSymbol = function (e) {
    return 'symbol' == typeof e;
}),
    (t.isUndefined = g),
    (t.isRegExp = S),
    (t.types.isRegExp = S),
    (t.isObject = A),
    (t.isDate = N),
    (t.types.isDate = N),
    (t.isError = v),
    (t.types.isNativeError = v),
    (t.isFunction = O);
function R(e) {
    return Object.prototype.toString.call(e);
}
function C(e) {
    return e < 10 ? '0' + e.toString(10) : e.toString(10);
}
(t.isPrimitive = function (e) {
    return null === e || 'boolean' == typeof e || 'number' == typeof e || 'string' == typeof e || 'symbol' == typeof e || void 0 === e;
}),
    (t.isBuffer = n(102439));
var y = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function D(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
}
(t.log = function () {
    var e, n;
    console.log('%s - %s', ((n = [C((e = new Date()).getHours()), C(e.getMinutes()), C(e.getSeconds())].join(':')), [e.getDate(), y[e.getMonth()], n].join(' ')), t.format.apply(t, arguments));
}),
    (t.inherits = n(689118)),
    (t._extend = function (e, t) {
        if (!t || !A(t)) return e;
        for (var n = Object.keys(t), r = n.length; r--; ) e[n[r]] = t[n[r]];
        return e;
    });
var L = 'undefined' != typeof Symbol ? Symbol('util.promisify.custom') : void 0;
function b(e, t) {
    if (!e) {
        var n = Error('Promise was rejected with a falsy value');
        (n.reason = e), (e = n);
    }
    return t(e);
}
(t.promisify = function (e) {
    if ('function' != typeof e) throw TypeError('The "original" argument must be of type Function');
    if (L && e[L]) {
        var t = e[L];
        if ('function' != typeof t) throw TypeError('The "util.promisify.custom" argument must be of type Function');
        return (
            Object.defineProperty(t, L, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
            t
        );
    }
    function t() {
        for (
            var t,
                n,
                r = new Promise(function (e, r) {
                    (t = e), (n = r);
                }),
                i = [],
                a = 0;
            a < arguments.length;
            a++
        )
            i.push(arguments[a]);
        i.push(function (e, r) {
            e ? n(e) : t(r);
        });
        try {
            e.apply(this, i);
        } catch (e) {
            n(e);
        }
        return r;
    }
    return (
        Object.setPrototypeOf(t, Object.getPrototypeOf(e)),
        L &&
            Object.defineProperty(t, L, {
                value: t,
                enumerable: !1,
                writable: !1,
                configurable: !0
            }),
        Object.defineProperties(t, i(e))
    );
}),
    (t.promisify.custom = L);
t.callbackify = function (e) {
    if ('function' != typeof e) throw TypeError('The "original" argument must be of type Function');
    function t() {
        for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
        var i = t.pop();
        if ('function' != typeof i) throw TypeError('The last argument must be of type Function');
        var a = this,
            s = function () {
                return i.apply(a, arguments);
            };
        e.apply(this, t).then(
            function (e) {
                r.nextTick(s.bind(null, null, e));
            },
            function (e) {
                r.nextTick(b.bind(null, e, s));
            }
        );
    }
    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t;
};
