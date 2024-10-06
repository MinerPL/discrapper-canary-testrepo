e = n.nmd(e);
var r =
        (this && this.__awaiter) ||
        function (e, t, n, r) {
            return new (n || (n = Promise))(function (i, a) {
                function s(e) {
                    try {
                        l(r.next(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function o(e) {
                    try {
                        l(r.throw(e));
                    } catch (e) {
                        a(e);
                    }
                }
                function l(e) {
                    var t;
                    e.done
                        ? i(e.value)
                        : ((t = e.value) instanceof n
                              ? t
                              : new n(function (e) {
                                    e(t);
                                })
                          ).then(s, o);
                }
                l((r = r.apply(e, t || [])).next());
            });
        },
    i =
        (this && this.__generator) ||
        function (e, t) {
            var n,
                r,
                i,
                a,
                s = {
                    label: 0,
                    sent: function () {
                        if (1 & i[0]) throw i[1];
                        return i[1];
                    },
                    trys: [],
                    ops: []
                };
            return (
                (a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }),
                'function' == typeof Symbol &&
                    (a[Symbol.iterator] = function () {
                        return this;
                    }),
                a
            );
            function o(o) {
                return function (l) {
                    return (function (o) {
                        if (n) throw TypeError('Generator is already executing.');
                        for (; a && ((a = 0), o[0] && (s = 0)), s; )
                            try {
                                if (((n = 1), r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done)) return i;
                                switch (((r = 0), i && (o = [2 & o[0], i.value]), o[0])) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return (
                                            s.label++,
                                            {
                                                value: o[1],
                                                done: !1
                                            }
                                        );
                                    case 5:
                                        s.label++, (r = o[1]), (o = [0]);
                                        continue;
                                    case 7:
                                        (o = s.ops.pop()), s.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            s = 0;
                                            continue;
                                        }
                                        if (3 === o[0] && (!i || (o[1] > i[0] && o[1] < i[3]))) {
                                            s.label = o[1];
                                            break;
                                        }
                                        if (6 === o[0] && s.label < i[1]) {
                                            (s.label = i[1]), (i = o);
                                            break;
                                        }
                                        if (i && s.label < i[2]) {
                                            (s.label = i[2]), s.ops.push(o);
                                            break;
                                        }
                                        i[2] && s.ops.pop(), s.trys.pop();
                                        continue;
                                }
                                o = t.call(e, s);
                            } catch (e) {
                                (o = [6, e]), (r = 0);
                            } finally {
                                n = i = 0;
                            }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        };
                    })([o, l]);
                };
            }
        },
    a =
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
    s =
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
Object.defineProperty(t, '__esModule', { value: !0 }),
    (t.MessageLoader = void 0),
    (t.loadAllMessagesInLocale = function (e) {
        return r(this, void 0, void 0, function () {
            return i(this, function (t) {
                switch (t.label) {
                    case 0:
                        return [
                            4,
                            Promise.all(
                                u.map(function (t) {
                                    return t._loadLocale(e);
                                })
                            )
                        ];
                    case 1:
                        return t.sent(), [2];
                }
            });
        });
    }),
    (t.waitForAllDefaultIntlMessagesLoaded = function () {
        return r(this, void 0, void 0, function () {
            return i(this, function (e) {
                switch (e.label) {
                    case 0:
                        return [
                            4,
                            Promise.all(
                                u.map(function (e) {
                                    return e.waitForDefaultLocale();
                                })
                            )
                        ];
                    case 1:
                        return e.sent(), [2];
                }
            });
        });
    }),
    (t.createLoader = function (e, t, n) {
        var r = new l(e, t, n);
        return u.push(r), r;
    });
var o = n(953925),
    l = (function () {
        function t(t, n, l) {
            var u,
                c,
                d = this;
            if (((this.messageKeys = t), (this.messages = {}), (this.localeImportMap = n), (this.supportedLocales = Object.keys(n)), (this.defaultLocale = l), (this._localeLoadingPromises = {}), (this._parseCache = new Map()), (this._subscribers = new Set()), this._loadLocale(this.defaultLocale), (this.fallbackMessage = new o.InternalIntlMessage([], this.defaultLocale)), e.hot)) {
                var _ = function (t, n) {
                    e.hot.accept(n, function () {
                        return r(d, void 0, void 0, function () {
                            return i(this, function (e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this._loadLocale(t)];
                                    case 1:
                                        return e.sent(), this._parseCache.clear(), [2];
                                }
                            });
                        });
                    });
                };
                try {
                    for (var E = a(Object.entries(n)), f = E.next(); !f.done; f = E.next()) {
                        var h = s(f.value, 2),
                            p = h[0],
                            I = h[1];
                        _(p, I);
                    }
                } catch (e) {
                    u = { error: e };
                } finally {
                    try {
                        f && !f.done && (c = E.return) && c.call(E);
                    } finally {
                        if (u) throw u.error;
                    }
                }
            }
        }
        return (
            (t.prototype.withDebugValues = function (e, t) {
                (this._debugKeyMap = e), (this._localeFileMap = t);
            }),
            (t.prototype.get = function (e, t) {
                var n,
                    r = null !== (n = this.getMessageValue(e, t)) && void 0 !== n ? n : this.getMessageValue(e, this.defaultLocale);
                if (null != r) return r;
                var i = null != this._debugKeyMap ? '"'.concat(this._debugKeyMap[e], '" (').concat(e, ')') : void 0,
                    a = null != this._localeFileMap ? ''.concat(t, ' (').concat(this._localeFileMap[t], ')') : t,
                    s = null != this._localeFileMap ? ''.concat(this.defaultLocale, ' (').concat(this._localeFileMap[this.defaultLocale], ')') : this.defaultLocale;
                return console.warn('Requested message '.concat(i, ' does not have a value in the requested locale ').concat(a, ' nor the default locale ').concat(s)), this.fallbackMessage;
            }),
            (t.prototype.getMessageValue = function (e, t) {
                var n = e + '@' + t,
                    r = this._parseCache.get(n);
                if (null != r) return r;
                if (null == this.messages[t]) {
                    this.supportedLocales.includes(t) && this._loadLocale(t);
                    return;
                }
                if (e in this.messages[t]) {
                    var i = this.messages[t][e],
                        a = new o.InternalIntlMessage(i, t);
                    return this._parseCache.set(n, a), a;
                }
            }),
            (t.prototype.getBinds = function () {
                var e = this,
                    t = this.onChange.bind(this);
                return Object.keys(this.messageKeys).reduce(function (n, r) {
                    var i = e.get.bind(e, r);
                    return (i.onChange = t), (n[r] = i), n;
                }, {});
            }),
            (t.prototype._loadLocale = function (e) {
                return r(this, void 0, void 0, function () {
                    var t, n, r, a;
                    return i(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if ((null === (a = this._localeLoadingPromises[e]) || void 0 === a ? void 0 : a.current) != null) return [2];
                                if (null == this.localeImportMap[e]) throw Error('Requested to load locale '.concat(e, ', which should be supported, but no source for translation data was provided.'));
                                if (null != this.messages[e]) return [2];
                                return (
                                    (t = this.localeImportMap[e]()),
                                    (this._localeLoadingPromises[e] = {
                                        initialized: !1,
                                        current: t
                                    }),
                                    (n = this.messages),
                                    (r = e),
                                    [4, t]
                                );
                            case 1:
                                return (
                                    (n[r] = i.sent().default),
                                    (this._localeLoadingPromises[e] = {
                                        initialized: !0,
                                        current: void 0
                                    }),
                                    this.emitChange(),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (t.prototype.emitChange = function () {
                var e, t;
                try {
                    for (var n = a(this._subscribers.values()), r = n.next(); !r.done; r = n.next()) (0, r.value)();
                } catch (t) {
                    e = { error: t };
                } finally {
                    try {
                        r && !r.done && (t = n.return) && t.call(n);
                    } finally {
                        if (e) throw e.error;
                    }
                }
            }),
            (t.prototype.onChange = function (e) {
                var t = this;
                return (
                    this._subscribers.add(e),
                    function () {
                        return t._subscribers.delete(e);
                    }
                );
            }),
            (t.prototype.isLocaleLoaded = function (e, t) {
                void 0 === t && (t = !1);
                var n = this._localeLoadingPromises[e];
                return null != n && !1 != n.initialized && (!t || null == n.current);
            }),
            (t.prototype.waitForLocaleLoaded = function (e) {
                return r(this, arguments, void 0, function (e, t) {
                    var n;
                    return (
                        void 0 === t && (t = !1),
                        i(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    if (null == (n = this._localeLoadingPromises[e])) return [2, this._loadLocale(e)];
                                    if (n.initialized && !t) return [2];
                                    return [4, n.current];
                                case 1:
                                    return r.sent(), [2];
                            }
                        })
                    );
                });
            }),
            (t.prototype.waitForDefaultLocale = function () {
                return r(this, arguments, void 0, function (e) {
                    return (
                        void 0 === e && (e = !1),
                        i(this, function (t) {
                            return [2, this.waitForLocaleLoaded(this.defaultLocale, e)];
                        })
                    );
                });
            }),
            t
        );
    })();
t.MessageLoader = l;
var u = [];
