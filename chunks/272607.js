n.d(t, {
    x: function () {
        return E;
    }
});
var r = n(717029), i = n(846042), a = n(193603), o = n(780603);
function s(e) {
    return (s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
    } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    })(e);
}
function l(e, t) {
    for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
    }
}
function u(e, t) {
    return (u = Object.setPrototypeOf || function (e, t) {
        return e.__proto__ = t, e;
    })(e, t);
}
function c(e) {
    if (void 0 === e)
        throw ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
    return e;
}
function d(e) {
    return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
        return e.__proto__ || Object.getPrototypeOf(e);
    })(e);
}
function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
var E = function (e) {
    !function (e, t) {
        if ('function' != typeof t && null !== t)
            throw TypeError('Super expression must either be null or a function');
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && u(e, t);
    }(p, e);
    var t, n, r, E, f, h = (t = p, n = function () {
            if ('undefined' == typeof Reflect || !Reflect.construct || Reflect.construct.sham)
                return !1;
            if ('function' == typeof Proxy)
                return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {
                })), !0;
            } catch (e) {
                return !1;
            }
        }(), function () {
            var e, r = d(t);
            return e = n ? Reflect.construct(r, arguments, d(this).constructor) : r.apply(this, arguments), function (e, t) {
                return t && ('object' === s(t) || 'function' == typeof t) ? t : c(e);
            }(this, e);
        });
    function p() {
        var e;
        !function (e, t) {
            if (!(e instanceof t))
                throw TypeError('Cannot call a class as a function');
        }(this, p);
        for (var t = arguments.length, n = Array(t), r = 0; r < t; r++)
            n[r] = arguments[r];
        return _(c(e = h.call.apply(h, [this].concat(n))), 'priority', 130), _(c(e), 'incompatibleTokens', [
            'y',
            'R',
            'u',
            'Q',
            'q',
            'M',
            'L',
            'I',
            'd',
            'D',
            'i',
            't',
            'T'
        ]), e;
    }
    return r = p, E = [
        {
            key: 'parse',
            value: function (e, t, n) {
                var r = function (e) {
                    return {
                        year: e,
                        isTwoDigitYear: 'YY' === t
                    };
                };
                switch (t) {
                case 'Y':
                    return (0, i.jg)((0, i.ZL)(4, e), r);
                case 'Yo':
                    return (0, i.jg)(n.ordinalNumber(e, { unit: 'year' }), r);
                default:
                    return (0, i.jg)((0, i.ZL)(t.length, e), r);
                }
            }
        },
        {
            key: 'validate',
            value: function (e, t) {
                return t.isTwoDigitYear || t.year > 0;
            }
        },
        {
            key: 'set',
            value: function (e, t, n, r) {
                var s = (0, a.Z)(e, r);
                if (n.isTwoDigitYear) {
                    var l = (0, i.WG)(n.year, s);
                    return e.setUTCFullYear(l, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, o.Z)(e, r);
                }
                var u = 'era' in t && 1 !== t.era ? 1 - n.year : n.year;
                return e.setUTCFullYear(u, 0, r.firstWeekContainsDate), e.setUTCHours(0, 0, 0, 0), (0, o.Z)(e, r);
            }
        }
    ], l(r.prototype, E), p;
}(r._);
