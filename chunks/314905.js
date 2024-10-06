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
Object.defineProperty(t, '__esModule', { value: !0 }), (t.markdownFormatter = void 0), (t.formatToMarkdownString = c);
var o = n(356110),
    l = {
        $_: function () {
            return '';
        },
        $b: function (e) {
            return '**' + e.join('') + '**';
        },
        $i: function (e) {
            return '*' + e.join('') + '*';
        },
        $del: function (e) {
            return '~~' + e.join('') + '~~';
        },
        $code: function (e) {
            return '`' + e.join('') + '`';
        },
        $link: function (e) {
            var t = a(e),
                n = t[0];
            return '[' + t.slice(1).join('') + '](' + n + ')';
        },
        $p: function (e) {
            return e.join('') + '\n\n';
        }
    },
    u = (function (e) {
        function t() {
            var t = e.apply(this, s([], a(arguments), !1)) || this;
            return (t.result = ''), t;
        }
        return (
            i(t, e),
            (t.prototype.pushRichTextTag = function (e, t) {
                this.result += l[e](t, '');
            }),
            t
        );
    })(o.StringBuilder);
function c(e, t, n) {
    return (void 0 === n && (n = u), 'string' == typeof e) ? e : this.bindFormatValues(n, e, t)[0];
}
t.markdownFormatter = {
    format: c,
    builder: u
};
