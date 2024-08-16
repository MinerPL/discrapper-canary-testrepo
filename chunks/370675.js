var n,
    i =
        (this && this.__extends) ||
        ((n = function (t, e) {
            return (n =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                })(t, e);
        }),
        function (t, e) {
            if ('function' != typeof e && null !== e) throw TypeError('Class extends value ' + String(e) + ' is not a constructor or null');
            function r() {
                this.constructor = t;
            }
            n(t, e), (t.prototype = null === e ? Object.create(e) : ((r.prototype = e.prototype), new r()));
        }),
    o =
        (this && this.__read) ||
        function (t, e) {
            var r = 'function' == typeof Symbol && t[Symbol.iterator];
            if (!r) return t;
            var n,
                i,
                o = r.call(t),
                a = [];
            try {
                for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; ) a.push(n.value);
            } catch (t) {
                i = { error: t };
            } finally {
                try {
                    n && !n.done && (r = o.return) && r.call(o);
                } finally {
                    if (i) throw i.error;
                }
            }
            return a;
        },
    a =
        (this && this.__spreadArray) ||
        function (t, e, r) {
            if (r || 2 == arguments.length) for (var n, i = 0, o = e.length; i < o; i++) (n || !(i in e)) && (!n && (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
            return t.concat(n || Array.prototype.slice.call(e));
        };
Object.defineProperty(e, '__esModule', { value: !0 }), (e.IntlManagerReact = void 0);
var s = r(470079),
    u = (function (t) {
        function e() {
            var e = t.apply(this, a([], o(arguments), !1)) || this;
            return (
                (e.IntlMessage = function (t) {
                    var r = t.message,
                        n = t.values,
                        i = s.useSyncExternalStore(e.onLocaleChange, function () {
                            return e.currentLocale;
                        });
                    return (
                        s.useSyncExternalStore(r.onChange, function () {
                            return r(i);
                        }),
                        'string' == typeof r ? r : s.createElement(s.Fragment, void 0, e.formatToParts(r, n))
                    );
                }),
                e
            );
        }
        return (
            i(e, t),
            (e.prototype.format = function (t, e) {
                return s.createElement(this.IntlMessage, {
                    message: t,
                    values: e
                });
            }),
            e
        );
    })(r(522414).IntlManager);
e.IntlManagerReact = u;
