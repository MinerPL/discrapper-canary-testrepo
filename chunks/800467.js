var r =
        (this && this.__values) ||
        function (e) {
            var t = 'function' == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && 'number' == typeof e.length)
                return {
                    next: function () {
                        return (
                            e && r >= e.length && (e = void 0),
                            {
                                value: e && e[r++],
                                done: !e
                            }
                        );
                    }
                };
            throw TypeError(t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.');
        },
    i =
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
        };
Object.defineProperty(t, '__esModule', { value: !0 }), (t.IntlManager = t.DEFAULT_LOCALE = void 0);
var a = n(88528),
    s = n(766989),
    o = n(817500);
t.DEFAULT_LOCALE = 'en-US';
var l = (function () {
    function e(e) {
        void 0 === e && (e = t.DEFAULT_LOCALE);
        var n = this;
        (this.onLocaleChange = function (e) {
            return (
                n._localeSubscriptions.add(e),
                function () {
                    return n._localeSubscriptions.delete(e);
                }
            );
        }),
            (this.defaultLocale = e),
            (this.currentLocale = e),
            console.log(s.IntlMessageFormat.formats),
            (this.intl = (0, a.createIntl)({
                formats: s.IntlMessageFormat.formats,
                defaultLocale: e,
                locale: e
            })),
            (this._localeSubscriptions = new Set());
    }
    return (
        (e.prototype.withFormatters = function (e) {
            var t, n;
            try {
                for (var a = r(Object.entries(e)), s = a.next(); !s.done; s = a.next()) {
                    var o = i(s.value, 2),
                        l = o[0],
                        u = o[1];
                    this[l] = this.makeFormatFunction(u);
                }
            } catch (e) {
                t = { error: e };
            } finally {
                try {
                    s && !s.done && (n = a.return) && n.call(a);
                } finally {
                    if (t) throw t.error;
                }
            }
            return this;
        }),
        (e.prototype.makeFormatFunction = function (e) {
            var t = this,
                n = e.format,
                r = e.builder,
                i = n.bind(this);
            return function (e, n) {
                return i(e(t.currentLocale), n, r);
            };
        }),
        (e.prototype.setLocale = function (e) {
            (this.currentLocale = e),
                (this.intl = (0, a.createIntl)({
                    defaultLocale: this.defaultLocale,
                    locale: e
                })),
                this.emitLocaleChange(e);
        }),
        (e.prototype.emitLocaleChange = function (e) {
            var t, n;
            try {
                for (var i = r(this._localeSubscriptions), a = i.next(); !a.done; a = i.next()) (0, a.value)(e);
            } catch (e) {
                t = { error: e };
            } finally {
                try {
                    a && !a.done && (n = i.return) && n.call(i);
                } finally {
                    if (t) throw t.error;
                }
            }
        }),
        (e.prototype.string = function (e) {
            var t = e(this.currentLocale);
            return null == t || 0 === t.ast.length ? '' : t.ast[0].value;
        }),
        (e.prototype.reserialize = function (e) {
            var t = e(this.currentLocale);
            return 'string' == typeof t ? t : t.reserialize();
        }),
        (e.prototype.bindFormatValues = function (e, t, n) {
            return (0, o.bindFormatValues)(e, t.ast, [this.currentLocale, this.defaultLocale], this.intl.formatters, this.intl.formats, n);
        }),
        e
    );
})();
t.IntlManager = l;
