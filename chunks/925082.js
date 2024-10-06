var r,
    i =
        (this && this.__extends) ||
        ((r = function (e, t) {
            return (r =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (e, t) {
                        e.__proto__ = t;
                    }) ||
                function (e, t) {
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                })(e, t);
        }),
        function (e, t) {
            if ('function' != typeof t && null !== t) throw TypeError('Class extends value ' + String(t) + ' is not a constructor or null');
            function n() {
                this.constructor = e;
            }
            r(e, t), (e.prototype = null === t ? Object.create(t) : ((n.prototype = t.prototype), new n()));
        }),
    a =
        (this && this.__read) ||
        function (e, t) {
            var n = 'function' == typeof Symbol && e[Symbol.iterator];
            if (!n) return e;
            var r,
                i,
                a = n.call(e),
                s = [];
            try {
                for (; (void 0 === t || t-- > 0) && !(r = a.next()).done; ) s.push(r.value);
            } catch (e) {
                i = { error: e };
            } finally {
                try {
                    r && !r.done && (n = a.return) && n.call(a);
                } finally {
                    if (i) throw i.error;
                }
            }
            return s;
        },
    s =
        (this && this.__spreadArray) ||
        function (e, t, n) {
            if (n || 2 == arguments.length) for (var r, i = 0, a = t.length; i < a; i++) (r || !(i in t)) && (!r && (r = Array.prototype.slice.call(t, 0, i)), (r[i] = t[i]));
            return e.concat(r || Array.prototype.slice.call(t));
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.reactFormatter = t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = void 0), (t.formatReact = c), (t.makeReactFormatter = d);
var o = n(470079),
    l = n(817500),
    u = o.createElement;
t.DEFAULT_REACT_RICH_TEXT_ELEMENTS = {
    $_: function () {
        return '';
    },
    $b: function (e, t) {
        return u('strong', { key: t }, e);
    },
    $i: function (e, t) {
        return u('em', { key: t }, e);
    },
    $del: function (e, t) {
        return u('del', { key: t }, e);
    },
    $code: function (e, t) {
        return u('code', { key: t }, e);
    },
    $link: function (e, t) {
        var n = a(e);
        return u(
            'a',
            {
                href: n[0],
                key: t
            },
            n.slice(1)
        );
    },
    $p: function (e, t) {
        return u('p', { key: t }, e);
    }
};
function c(e, t, n) {
    if ('string' == typeof e) return o.createElement(o.Fragment, void 0, e);
    var r = this.bindFormatValues(n, e, t);
    return o.createElement(o.Fragment, void 0, r);
}
function d(e) {
    var t;
    return {
        format: c,
        builder:
            ((t = e),
            (function (e) {
                function n() {
                    var t = e.apply(this, s([], a(arguments), !1)) || this;
                    return (t._nodeKey = 0), (t.result = []), t;
                }
                return (
                    i(n, e),
                    (n.prototype.pushRichTextTag = function (e, n) {
                        this.result.push(t[e](n, ''.concat(this._nodeKey++)));
                    }),
                    (n.prototype.pushLiteralText = function (e) {
                        this.result.push(e);
                    }),
                    (n.prototype.pushObject = function (e) {
                        this.result.push(e);
                    }),
                    (n.prototype.finish = function () {
                        return this.result;
                    }),
                    n
                );
            })(l.FormatBuilder))
    };
}
t.reactFormatter = d(t.DEFAULT_REACT_RICH_TEXT_ELEMENTS);
