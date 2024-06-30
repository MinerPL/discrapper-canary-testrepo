var r = 'function' == typeof Map && Map.prototype, i = Object.getOwnPropertyDescriptor && r ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null, a = r && i && 'function' == typeof i.get ? i.get : null, o = r && Map.prototype.forEach, s = 'function' == typeof Set && Set.prototype, l = Object.getOwnPropertyDescriptor && s ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null, u = s && l && 'function' == typeof l.get ? l.get : null, c = s && Set.prototype.forEach, d = 'function' == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, _ = 'function' == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, E = 'function' == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null, f = Boolean.prototype.valueOf, h = Object.prototype.toString, p = Function.prototype.toString, m = String.prototype.match, I = String.prototype.slice, T = String.prototype.replace, g = String.prototype.toUpperCase, S = String.prototype.toLowerCase, A = RegExp.prototype.test, N = Array.prototype.concat, v = Array.prototype.join, O = Array.prototype.slice, R = Math.floor, C = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null, y = Object.getOwnPropertySymbols, D = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? Symbol.prototype.toString : null, L = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator, b = 'function' == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === L ? 'object' : 'symbol') ? Symbol.toStringTag : null, M = Object.prototype.propertyIsEnumerable, P = ('function' == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function (e) {
        return e.__proto__;
    } : null);
function U(e, t) {
    if (e === 1 / 0 || e === -1 / 0 || e != e || e && e > -1000 && e < 1000 || A.call(/e/, t))
        return t;
    var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if ('number' == typeof e) {
        var r = e < 0 ? -R(-e) : R(e);
        if (r !== e) {
            var i = String(r), a = I.call(t, i.length + 1);
            return T.call(i, n, '$&_') + '.' + T.call(T.call(a, /([0-9]{3})/g, '$&_'), /_$/, '');
        }
    }
    return T.call(t, n, '$&_');
}
var w = n(771673), x = w.custom, G = V(x) ? x : null;
function k(e, t, n) {
    var r = 'double' === (n.quoteStyle || t) ? '"' : '\'';
    return r + e + r;
}
e.exports = function e(t, r, i, s) {
    var l = r || {};
    if (Z(l, 'quoteStyle') && 'single' !== l.quoteStyle && 'double' !== l.quoteStyle)
        throw TypeError('option "quoteStyle" must be "single" or "double"');
    if (Z(l, 'maxStringLength') && ('number' == typeof l.maxStringLength ? l.maxStringLength < 0 && l.maxStringLength !== 1 / 0 : null !== l.maxStringLength))
        throw TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    var h = !Z(l, 'customInspect') || l.customInspect;
    if ('boolean' != typeof h && 'symbol' !== h)
        throw TypeError('option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`');
    if (Z(l, 'indent') && null !== l.indent && '\t' !== l.indent && !(parseInt(l.indent, 10) === l.indent && l.indent > 0))
        throw TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    if (Z(l, 'numericSeparator') && 'boolean' != typeof l.numericSeparator)
        throw TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    var g = l.numericSeparator;
    if (void 0 === t)
        return 'undefined';
    if (null === t)
        return 'null';
    if ('boolean' == typeof t)
        return t ? 'true' : 'false';
    if ('string' == typeof t)
        return function e(t, n) {
            if (t.length > n.maxStringLength) {
                var r = t.length - n.maxStringLength;
                return e(I.call(t, 0, n.maxStringLength), n) + ('... ' + r + ' more character') + (r > 1 ? 's' : '');
            }
            return k(T.call(T.call(t, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, W), 'single', n);
        }(t, l);
    if ('number' == typeof t) {
        if (0 === t)
            return 1 / 0 / t > 0 ? '0' : '-0';
        var A = String(t);
        return g ? U(t, A) : A;
    }
    if ('bigint' == typeof t) {
        var R = String(t) + 'n';
        return g ? U(t, R) : R;
    }
    var y = void 0 === l.depth ? 5 : l.depth;
    if (void 0 === i && (i = 0), i >= y && y > 0 && 'object' == typeof t)
        return B(t) ? '[Array]' : '[Object]';
    var x = function (e, t) {
        var n;
        if ('\t' === e.indent)
            n = '\t';
        else {
            if ('number' != typeof e.indent || !(e.indent > 0))
                return null;
            n = v.call(Array(e.indent + 1), ' ');
        }
        return {
            base: n,
            prev: v.call(Array(t + 1), n)
        };
    }(l, i);
    if (void 0 === s)
        s = [];
    else if (j(s, t) >= 0)
        return '[Circular]';
    function H(t, n, r) {
        if (n && (s = O.call(s)).push(n), r) {
            var a = { depth: l.depth };
            return Z(l, 'quoteStyle') && (a.quoteStyle = l.quoteStyle), e(t, a, i + 1, s);
        }
        return e(t, l, i + 1, s);
    }
    if ('function' == typeof t && !F(t)) {
        var $ = function (e) {
                if (e.name)
                    return e.name;
                var t = m.call(p.call(e), /^function\s*([\w$]+)/);
                return t ? t[1] : null;
            }(t), J = X(t, H);
        return '[Function' + ($ ? ': ' + $ : ' (anonymous)') + ']' + (J.length > 0 ? ' { ' + v.call(J, ', ') + ' }' : '');
    }
    if (V(t)) {
        var ee = L ? T.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : D.call(t);
        return 'object' != typeof t || L ? ee : K(ee);
    }
    if (function (e) {
            return !!e && 'object' == typeof e && (!!('undefined' != typeof HTMLElement && e instanceof HTMLElement) || 'string' == typeof e.nodeName && 'function' == typeof e.getAttribute);
        }(t)) {
        for (var et = '<' + S.call(String(t.nodeName)), en = t.attributes || [], er = 0; er < en.length; er++)
            et += ' ' + en[er].name + '=' + k(function (e) {
                return T.call(String(e), /"/g, '&quot;');
            }(en[er].value), 'double', l);
        return et += '>', t.childNodes && t.childNodes.length && (et += '...'), et += '</' + S.call(String(t.nodeName)) + '>';
    }
    if (B(t)) {
        if (0 === t.length)
            return '[]';
        var ei = X(t, H);
        return x && !function (e) {
            for (var t = 0; t < e.length; t++)
                if (j(e[t], '\n') >= 0)
                    return !1;
            return !0;
        }(ei) ? '[' + Q(ei, x) + ']' : '[ ' + v.call(ei, ', ') + ' ]';
    }
    if (function (e) {
            return '[object Error]' === Y(e) && (!b || !('object' == typeof e && b in e));
        }(t)) {
        var ea = X(t, H);
        return 'cause' in Error.prototype || !('cause' in t) || M.call(t, 'cause') ? 0 === ea.length ? '[' + String(t) + ']' : '{ [' + String(t) + '] ' + v.call(ea, ', ') + ' }' : '{ [' + String(t) + '] ' + v.call(N.call('[cause]: ' + H(t.cause), ea), ', ') + ' }';
    }
    if ('object' == typeof t && h) {
        if (G && 'function' == typeof t[G] && w)
            return w(t, { depth: y - i });
        if ('symbol' !== h && 'function' == typeof t.inspect)
            return t.inspect();
    }
    if (function (e) {
            if (!a || !e || 'object' != typeof e)
                return !1;
            try {
                a.call(e);
                try {
                    u.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Map;
            } catch (e) {
            }
            return !1;
        }(t)) {
        var eo = [];
        return o && o.call(t, function (e, n) {
            eo.push(H(n, t, !0) + ' => ' + H(e, t));
        }), q('Map', a.call(t), eo, x);
    }
    if (function (e) {
            if (!u || !e || 'object' != typeof e)
                return !1;
            try {
                u.call(e);
                try {
                    a.call(e);
                } catch (e) {
                    return !0;
                }
                return e instanceof Set;
            } catch (e) {
            }
            return !1;
        }(t)) {
        var es = [];
        return c && c.call(t, function (e) {
            es.push(H(e, t));
        }), q('Set', u.call(t), es, x);
    }
    if (function (e) {
            if (!d || !e || 'object' != typeof e)
                return !1;
            try {
                d.call(e, d);
                try {
                    _.call(e, _);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakMap;
            } catch (e) {
            }
            return !1;
        }(t))
        return z('WeakMap');
    if (function (e) {
            if (!_ || !e || 'object' != typeof e)
                return !1;
            try {
                _.call(e, _);
                try {
                    d.call(e, d);
                } catch (e) {
                    return !0;
                }
                return e instanceof WeakSet;
            } catch (e) {
            }
            return !1;
        }(t))
        return z('WeakSet');
    if (function (e) {
            if (!E || !e || 'object' != typeof e)
                return !1;
            try {
                return E.call(e), !0;
            } catch (e) {
            }
            return !1;
        }(t))
        return z('WeakRef');
    if (function (e) {
            return '[object Number]' === Y(e) && (!b || !('object' == typeof e && b in e));
        }(t))
        return K(H(Number(t)));
    if (function (e) {
            if (!e || 'object' != typeof e || !C)
                return !1;
            try {
                return C.call(e), !0;
            } catch (e) {
            }
            return !1;
        }(t))
        return K(H(C.call(t)));
    if (function (e) {
            return '[object Boolean]' === Y(e) && (!b || !('object' == typeof e && b in e));
        }(t))
        return K(f.call(t));
    if (function (e) {
            return '[object String]' === Y(e) && (!b || !('object' == typeof e && b in e));
        }(t))
        return K(H(String(t)));
    if ('undefined' != typeof window && t === window)
        return '{ [object Window] }';
    if (t === n.g)
        return '{ [object globalThis] }';
    if (!function (e) {
            return '[object Date]' === Y(e) && (!b || !('object' == typeof e && b in e));
        }(t) && !F(t)) {
        var el = X(t, H), eu = P ? P(t) === Object.prototype : t instanceof Object || t.constructor === Object, ec = t instanceof Object ? '' : 'null prototype', ed = !eu && b && Object(t) === t && b in t ? I.call(Y(t), 8, -1) : ec ? 'Object' : '', e_ = (eu || 'function' != typeof t.constructor ? '' : t.constructor.name ? t.constructor.name + ' ' : '') + (ed || ec ? '[' + v.call(N.call([], ed || [], ec || []), ': ') + '] ' : '');
        return 0 === el.length ? e_ + '{}' : x ? e_ + '{' + Q(el, x) + '}' : e_ + '{ ' + v.call(el, ', ') + ' }';
    }
    return String(t);
};
function B(e) {
    return '[object Array]' === Y(e) && (!b || !('object' == typeof e && b in e));
}
function F(e) {
    return '[object RegExp]' === Y(e) && (!b || !('object' == typeof e && b in e));
}
function V(e) {
    if (L)
        return e && 'object' == typeof e && e instanceof Symbol;
    if ('symbol' == typeof e)
        return !0;
    if (!e || 'object' != typeof e || !D)
        return !1;
    try {
        return D.call(e), !0;
    } catch (e) {
    }
    return !1;
}
var H = Object.prototype.hasOwnProperty || function (e) {
    return e in this;
};
function Z(e, t) {
    return H.call(e, t);
}
function Y(e) {
    return h.call(e);
}
function j(e, t) {
    if (e.indexOf)
        return e.indexOf(t);
    for (var n = 0, r = e.length; n < r; n++)
        if (e[n] === t)
            return n;
    return -1;
}
function W(e) {
    var t = e.charCodeAt(0), n = {
            8: 'b',
            9: 't',
            10: 'n',
            12: 'f',
            13: 'r'
        }[t];
    return n ? '\\' + n : '\\x' + (t < 16 ? '0' : '') + g.call(t.toString(16));
}
function K(e) {
    return 'Object(' + e + ')';
}
function z(e) {
    return e + ' { ? }';
}
function q(e, t, n, r) {
    return e + ' (' + t + ') {' + (r ? Q(n, r) : v.call(n, ', ')) + '}';
}
function Q(e, t) {
    if (0 === e.length)
        return '';
    var n = '\n' + t.prev + t.base;
    return n + v.call(e, ',' + n) + '\n' + t.prev;
}
function X(e, t) {
    var n, r = B(e), i = [];
    if (r) {
        i.length = e.length;
        for (var a = 0; a < e.length; a++)
            i[a] = Z(e, a) ? t(e[a], e) : '';
    }
    var o = 'function' == typeof y ? y(e) : [];
    if (L) {
        n = {};
        for (var s = 0; s < o.length; s++)
            n['$' + o[s]] = o[s];
    }
    for (var l in e) {
        if (!Z(e, l) || r && String(Number(l)) === l && l < e.length)
            continue;
        if (!(L && n['$' + l] instanceof Symbol))
            A.call(/[^\w$]/, l) ? i.push(t(l, e) + ': ' + t(e[l], e)) : i.push(l + ': ' + t(e[l], e));
    }
    if ('function' == typeof y)
        for (var u = 0; u < o.length; u++)
            M.call(e, o[u]) && i.push('[' + t(o[u]) + ']: ' + t(e[o[u]], e));
    return i;
}
