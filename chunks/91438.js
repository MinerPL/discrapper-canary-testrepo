var t;
e.exports = (function e(t, n, r) {
    function i(a, s) {
        if (!n[a]) {
            if (!t[a]) {
                if (o) return o(a, !0);
                var c = Error("Cannot find module '" + a + "'");
                throw ((c.code = 'MODULE_NOT_FOUND'), c);
            }
            var d = (n[a] = { exports: {} });
            t[a][0].call(
                d.exports,
                function (e) {
                    return i(t[a][1][e] || e);
                },
                d,
                d.exports,
                e,
                t,
                n,
                r
            );
        }
        return n[a].exports;
    }
    for (var o = void 0, a = 0; a < r.length; a++) i(r[a]);
    return i;
})(
    {
        1: [
            function (e, t, n) {
                var r = {};
                function i(e) {
                    var t,
                        n = JSON.stringify(e);
                    if (!e.forceScriptReload && (t = r[n])) return t;
                    var i = document.createElement('script'),
                        o = e.dataAttributes || {},
                        a = e.container || document.head;
                    return (
                        (i.src = e.src),
                        (i.id = e.id || ''),
                        (i.async = !0),
                        e.type && i.setAttribute('type', ''.concat(e.type)),
                        e.crossorigin && i.setAttribute('crossorigin', ''.concat(e.crossorigin)),
                        Object.keys(o).forEach(function (e) {
                            i.setAttribute('data-'.concat(e), ''.concat(o[e]));
                        }),
                        (t = new Promise(function (t, n) {
                            i.addEventListener('load', function () {
                                t(i);
                            }),
                                i.addEventListener('error', function () {
                                    n(Error(''.concat(e.src, ' failed to load.')));
                                }),
                                i.addEventListener('abort', function () {
                                    n(Error(''.concat(e.src, ' has aborted.')));
                                }),
                                a.appendChild(i);
                        })),
                        (r[n] = t),
                        t
                    );
                }
                (i.clearCache = function () {
                    r = {};
                }),
                    (t.exports = i);
            },
            {}
        ],
        2: [
            function (e, t, n) {
                t.exports = e('./dist/load-script');
            },
            { './dist/load-script': 1 }
        ],
        3: [
            function (e, t, n) {
                t.exports = function (e) {
                    return (e = e || window.navigator.userAgent), /Android/i.test(e);
                };
            },
            {}
        ],
        4: [
            function (e, t, n) {
                t.exports = function (e) {
                    return (e = e || window.navigator.userAgent), /CrOS/i.test(e);
                };
            },
            {}
        ],
        5: [
            function (e, t, n) {
                var r = e('./is-edge'),
                    i = e('./is-samsung'),
                    o = e('./is-duckduckgo'),
                    a = e('./is-opera'),
                    s = e('./is-silk');
                t.exports = function (e) {
                    return (-1 !== (e = e || window.navigator.userAgent).indexOf('Chrome') || -1 !== e.indexOf('CriOS')) && !r(e) && !i(e) && !o(e) && !a(e) && !s(e);
                };
            },
            {
                './is-duckduckgo': 6,
                './is-edge': 7,
                './is-opera': 16,
                './is-samsung': 17,
                './is-silk': 18
            }
        ],
        6: [
            function (e, t, n) {
                t.exports = function (e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf('DuckDuckGo/');
                };
            },
            {}
        ],
        7: [
            function (e, t, n) {
                t.exports = function (e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf('Edge/') || -1 !== e.indexOf('Edg/');
                };
            },
            {}
        ],
        8: [
            function (e, t, n) {
                t.exports = function (e) {
                    return (e = e || window.navigator.userAgent), /Firefox/i.test(e);
                };
            },
            {}
        ],
        9: [
            function (e, t, n) {
                t.exports = function (e) {
                    return (e = e || window.navigator.userAgent), /FxiOS/i.test(e);
                };
            },
            {}
        ],
        10: [
            function (e, t, n) {
                var r = e('./is-ios');
                t.exports = function (e) {
                    var t;
                    return r((e = e || window.navigator.userAgent)) && ((t = e), /\bGSA\b/.test(t));
                };
            },
            { './is-ios': 14 }
        ],
        11: [
            function (e, t, n) {
                var r = e('./is-ios'),
                    i = e('./is-ios-firefox'),
                    o = /webkit/i;
                t.exports = function (e) {
                    var t;
                    return r((e = e || window.navigator.userAgent)) && ((t = e), o.test(t)) && !(e.indexOf('CriOS') > -1) && !i(e) && !(e.indexOf('FBAN') > -1);
                };
            },
            {
                './is-ios': 14,
                './is-ios-firefox': 9
            }
        ],
        12: [
            function (e, t, n) {
                var r = e('./is-ios'),
                    i = e('./is-ios-google-search-app');
                t.exports = function (e) {
                    return !!r((e = e || window.navigator.userAgent)) && (!!i(e) || /.+AppleWebKit(?!.*Safari)/i.test(e));
                };
            },
            {
                './is-ios': 14,
                './is-ios-google-search-app': 10
            }
        ],
        13: [
            function (e, t, n) {
                var r = e('./is-ios-webview');
                t.exports = function (e, t) {
                    return (t = void 0 !== t ? t : window.statusbar.visible), r(e) && t;
                };
            },
            { './is-ios-webview': 12 }
        ],
        14: [
            function (e, t, n) {
                var r = e('./is-ipados');
                t.exports = function (e, t, n) {
                    void 0 === t && (t = !0), (e = e || window.navigator.userAgent);
                    var i = /iPhone|iPod|iPad/i.test(e);
                    return t ? i || r(e, n) : i;
                };
            },
            { './is-ipados': 15 }
        ],
        15: [
            function (e, t, n) {
                t.exports = function (e, t) {
                    return (e = e || window.navigator.userAgent), (t = t || window.document), /Mac|iPad/i.test(e) && 'ontouchend' in t;
                };
            },
            {}
        ],
        16: [
            function (e, t, n) {
                t.exports = function (e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf('OPR/') || -1 !== e.indexOf('Opera/') || -1 !== e.indexOf('OPT/');
                };
            },
            {}
        ],
        17: [
            function (e, t, n) {
                t.exports = function (e) {
                    return (e = e || window.navigator.userAgent), /SamsungBrowser/i.test(e);
                };
            },
            {}
        ],
        18: [
            function (e, t, n) {
                t.exports = function (e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf('Silk/');
                };
            },
            {}
        ],
        19: [
            function (e, t, n) {
                var r = e('./is-android'),
                    i = e('./is-ios-firefox'),
                    o = e('./is-ios-webview'),
                    a = e('./is-chrome'),
                    s = e('./is-samsung'),
                    c = e('./is-duckduckgo');
                function d(e) {
                    return (e = e || window.navigator.userAgent).indexOf('Opera Mini') > -1;
                }
                t.exports = function (e) {
                    var t, n, l, u;
                    return !(o((e = e || window.navigator.userAgent)) || i(e) || (r((t = (t = e) || window.navigator.userAgent)) && /Version\/[\d.]+/i.test(t) && !d(t) && !c(t)) || d(e) || ((l = (e || window.navigator.userAgent).match(/CriOS\/(\d+)\./)) && 48 > parseInt(l[1], 10)) || (!a((u = e)) && !s(u) && /samsung/i.test(u)));
                };
            },
            {
                './is-android': 3,
                './is-chrome': 5,
                './is-duckduckgo': 6,
                './is-ios-firefox': 9,
                './is-ios-webview': 12,
                './is-samsung': 17
            }
        ],
        20: [
            function (e, t, n) {
                t.exports = e('./dist/is-android');
            },
            { './dist/is-android': 3 }
        ],
        21: [
            function (e, t, n) {
                t.exports = e('./dist/is-chrome-os');
            },
            { './dist/is-chrome-os': 4 }
        ],
        22: [
            function (e, t, n) {
                t.exports = e('./dist/is-chrome');
            },
            { './dist/is-chrome': 5 }
        ],
        23: [
            function (e, t, n) {
                t.exports = e('./dist/is-firefox');
            },
            { './dist/is-firefox': 8 }
        ],
        24: [
            function (e, t, n) {
                t.exports = e('./dist/is-ios-safari');
            },
            { './dist/is-ios-safari': 11 }
        ],
        25: [
            function (e, t, n) {
                t.exports = e('./dist/is-ios-webview');
            },
            { './dist/is-ios-webview': 12 }
        ],
        26: [
            function (e, t, n) {
                t.exports = e('./dist/is-ios-wkwebview');
            },
            { './dist/is-ios-wkwebview': 13 }
        ],
        27: [
            function (e, t, n) {
                t.exports = e('./dist/is-ios');
            },
            { './dist/is-ios': 14 }
        ],
        28: [
            function (e, t, n) {
                t.exports = e('./dist/is-samsung');
            },
            { './dist/is-samsung': 17 }
        ],
        29: [
            function (e, t, n) {
                t.exports = e('./dist/supports-popups');
            },
            { './dist/supports-popups': 19 }
        ],
        30: [
            function (e, t, n) {
                t.exports = (function () {
                    function e() {
                        this._events = {};
                    }
                    return (
                        (e.prototype.on = function (e, t) {
                            this._events[e] ? this._events[e].push(t) : (this._events[e] = [t]);
                        }),
                        (e.prototype.off = function (e, t) {
                            var n = this._events[e];
                            if (n) {
                                var r = n.indexOf(t);
                                n.splice(r, 1);
                            }
                        }),
                        (e.prototype._emit = function (e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            var r = this._events[e];
                            r &&
                                r.forEach(function (e) {
                                    e.apply(void 0, t);
                                });
                        }),
                        (e.prototype.hasListener = function (e) {
                            var t = this._events[e];
                            return !!t && t.length > 0;
                        }),
                        (e.createChild = function (t) {
                            t.prototype = Object.create(e.prototype, { constructor: t });
                        }),
                        e
                    );
                })();
            },
            {}
        ],
        31: [
            function (e, t, n) {
                var r = 'undefined' != typeof Promise ? Promise : null;
                t.exports = (function () {
                    function e(t) {
                        var n = this;
                        if ('function' == typeof t) {
                            this._promise = new e.Promise(t);
                            return;
                        }
                        (this._promise = new e.Promise(function (e, t) {
                            (n._resolveFunction = e), (n._rejectFunction = t);
                        })),
                            (t = t || {}),
                            (this._onResolve = t.onResolve || e.defaultOnResolve),
                            (this._onReject = t.onReject || e.defaultOnReject),
                            e.shouldCatchExceptions(t) && this._promise.catch(function () {}),
                            this._resetState();
                    }
                    return (
                        (e.defaultOnResolve = function (t) {
                            return e.Promise.resolve(t);
                        }),
                        (e.defaultOnReject = function (t) {
                            return e.Promise.reject(t);
                        }),
                        (e.setPromise = function (t) {
                            e.Promise = t;
                        }),
                        (e.shouldCatchExceptions = function (t) {
                            return t.hasOwnProperty('suppressUnhandledPromiseMessage') ? !!t.suppressUnhandledPromiseMessage : !!e.suppressUnhandledPromiseMessage;
                        }),
                        (e.all = function (t) {
                            return e.Promise.all(t);
                        }),
                        (e.allSettled = function (t) {
                            return e.Promise.allSettled(t);
                        }),
                        (e.race = function (t) {
                            return e.Promise.race(t);
                        }),
                        (e.reject = function (t) {
                            return e.Promise.reject(t);
                        }),
                        (e.resolve = function (t) {
                            return e.Promise.resolve(t);
                        }),
                        (e.prototype.then = function () {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return (e = this._promise).then.apply(e, t);
                        }),
                        (e.prototype.catch = function () {
                            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            return (e = this._promise).catch.apply(e, t);
                        }),
                        (e.prototype.resolve = function (t) {
                            var n = this;
                            return (
                                this.isFulfilled ||
                                    (this._setResolved(),
                                    e.Promise.resolve()
                                        .then(function () {
                                            return n._onResolve(t);
                                        })
                                        .then(function (e) {
                                            n._resolveFunction(e);
                                        })
                                        .catch(function (e) {
                                            n._resetState(), n.reject(e);
                                        })),
                                this
                            );
                        }),
                        (e.prototype.reject = function (t) {
                            var n = this;
                            return (
                                this.isFulfilled ||
                                    (this._setRejected(),
                                    e.Promise.resolve()
                                        .then(function () {
                                            return n._onReject(t);
                                        })
                                        .then(function (e) {
                                            n._setResolved(), n._resolveFunction(e);
                                        })
                                        .catch(function (e) {
                                            return n._rejectFunction(e);
                                        })),
                                this
                            );
                        }),
                        (e.prototype._resetState = function () {
                            (this.isFulfilled = !1), (this.isResolved = !1), (this.isRejected = !1);
                        }),
                        (e.prototype._setResolved = function () {
                            (this.isFulfilled = !0), (this.isResolved = !0), (this.isRejected = !1);
                        }),
                        (e.prototype._setRejected = function () {
                            (this.isFulfilled = !0), (this.isResolved = !1), (this.isRejected = !0);
                        }),
                        (e.Promise = r),
                        e
                    );
                })();
            },
            {}
        ],
        32: [
            function (e, t, n) {
                var r = e('./lib/set-attributes'),
                    i = e('./lib/default-attributes'),
                    o = e('./lib/assign');
                t.exports = function (e) {
                    void 0 === e && (e = {});
                    var t = document.createElement('iframe'),
                        n = (0, o.assign)({}, i.defaultAttributes, e);
                    return n.style && 'string' != typeof n.style && ((0, o.assign)(t.style, n.style), delete n.style), (0, r.setAttributes)(t, n), t.getAttribute('id') || (t.id = t.name), t;
                };
            },
            {
                './lib/assign': 33,
                './lib/default-attributes': 34,
                './lib/set-attributes': 35
            }
        ],
        33: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.assign = void 0),
                    (n.assign = function (e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return (
                            t.forEach(function (t) {
                                'object' == typeof t &&
                                    Object.keys(t).forEach(function (n) {
                                        e[n] = t[n];
                                    });
                            }),
                            e
                        );
                    });
            },
            {}
        ],
        34: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.defaultAttributes = void 0),
                    (n.defaultAttributes = {
                        src: 'about:blank',
                        frameBorder: 0,
                        allowtransparency: !0,
                        scrolling: 'no'
                    });
            },
            {}
        ],
        35: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.setAttributes = void 0),
                    (n.setAttributes = function (e, t) {
                        for (var n in t)
                            if (t.hasOwnProperty(n)) {
                                var r = t[n];
                                null == r ? e.removeAttribute(n) : e.setAttribute(n, r);
                            }
                    });
            },
            {}
        ],
        36: [
            function (e, t, n) {
                t.exports = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                        var t = (16 * Math.random()) | 0;
                        return ('x' === e ? t : (3 & t) | 8).toString(16);
                    });
                };
            },
            {}
        ],
        37: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.deferred = function (e) {
                        return function () {
                            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                            setTimeout(function () {
                                try {
                                    e.apply(void 0, t);
                                } catch (e) {
                                    console.log('Error in callback function'), console.log(e);
                                }
                            }, 1);
                        };
                    });
            },
            {}
        ],
        38: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.once = function (e) {
                        var t = !1;
                        return function () {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            t || ((t = !0), e.apply(void 0, n));
                        };
                    });
            },
            {}
        ],
        39: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.promiseOrCallback = function (e, t) {
                        if (!t) return e;
                        e.then(function (e) {
                            return t(null, e);
                        }).catch(function (e) {
                            return t(e);
                        });
                    });
            },
            {}
        ],
        40: [
            function (e, t, n) {
                var r = e('./lib/deferred'),
                    i = e('./lib/once'),
                    o = e('./lib/promise-or-callback');
                function a(e) {
                    return function () {
                        for (var t, n = [], a = 0; a < arguments.length; a++) n[a] = arguments[a];
                        return 'function' == typeof n[n.length - 1] && ((t = n.pop()), (t = i.once(r.deferred(t)))), o.promiseOrCallback(e.apply(this, n), t);
                    };
                }
                (a.wrapPrototype = function (e, t) {
                    void 0 === t && (t = {});
                    var n = t.ignoreMethods || [],
                        r = !0 === t.transformPrivateMethods;
                    return (
                        Object.getOwnPropertyNames(e.prototype)
                            .filter(function (t) {
                                var i,
                                    o = 'constructor' !== t && 'function' == typeof e.prototype[t],
                                    a = -1 === n.indexOf(t);
                                return (i = !!r || '_' !== t.charAt(0)), o && i && a;
                            })
                            .forEach(function (t) {
                                var n = e.prototype[t];
                                e.prototype[t] = a(n);
                            }),
                        e
                    );
                }),
                    (t.exports = a);
            },
            {
                './lib/deferred': 37,
                './lib/once': 38,
                './lib/promise-or-callback': 39
            }
        ],
        41: [
            function (e, n, r) {
                var i, o;
                (i = this),
                    (o = function (e) {
                        function t(e, t, n, r) {
                            return new (n || (n = Promise))(function (i, o) {
                                function a(e) {
                                    try {
                                        c(r.next(e));
                                    } catch (e) {
                                        o(e);
                                    }
                                }
                                function s(e) {
                                    try {
                                        c(r.throw(e));
                                    } catch (e) {
                                        o(e);
                                    }
                                }
                                function c(e) {
                                    var t;
                                    e.done
                                        ? i(e.value)
                                        : ((t = e.value) instanceof n
                                              ? t
                                              : new n(function (e) {
                                                    e(t);
                                                })
                                          ).then(a, s);
                                }
                                c((r = r.apply(e, t || [])).next());
                            });
                        }
                        function n(e, t) {
                            var n,
                                r,
                                i,
                                o,
                                a = {
                                    label: 0,
                                    sent: function () {
                                        if (1 & i[0]) throw i[1];
                                        return i[1];
                                    },
                                    trys: [],
                                    ops: []
                                };
                            return (
                                (o = {
                                    next: s(0),
                                    throw: s(1),
                                    return: s(2)
                                }),
                                'function' == typeof Symbol &&
                                    (o[Symbol.iterator] = function () {
                                        return this;
                                    }),
                                o
                            );
                            function s(o) {
                                return function (s) {
                                    var c = [o, s];
                                    if (n) throw TypeError('Generator is already executing.');
                                    for (; a; )
                                        try {
                                            if (((n = 1), r && (i = 2 & c[0] ? r.return : c[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, c[1])).done)) return i;
                                            switch (((r = 0), i && (c = [2 & c[0], i.value]), c[0])) {
                                                case 0:
                                                case 1:
                                                    i = c;
                                                    break;
                                                case 4:
                                                    return (
                                                        a.label++,
                                                        {
                                                            value: c[1],
                                                            done: !1
                                                        }
                                                    );
                                                case 5:
                                                    a.label++, (r = c[1]), (c = [0]);
                                                    continue;
                                                case 7:
                                                    (c = a.ops.pop()), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                                        a = 0;
                                                        continue;
                                                    }
                                                    if (3 === c[0] && (!i || (c[1] > i[0] && c[1] < i[3]))) {
                                                        a.label = c[1];
                                                        break;
                                                    }
                                                    if (6 === c[0] && a.label < i[1]) {
                                                        (a.label = i[1]), (i = c);
                                                        break;
                                                    }
                                                    if (i && a.label < i[2]) {
                                                        (a.label = i[2]), a.ops.push(c);
                                                        break;
                                                    }
                                                    i[2] && a.ops.pop(), a.trys.pop();
                                                    continue;
                                            }
                                            c = t.call(e, a);
                                        } catch (e) {
                                            (c = [6, e]), (r = 0);
                                        } finally {
                                            n = i = 0;
                                        }
                                    if (5 & c[0]) throw c[1];
                                    return {
                                        value: c[0] ? c[1] : void 0,
                                        done: !0
                                    };
                                };
                            }
                        }
                        var r,
                            i,
                            o = {},
                            a = {};
                        function s(e) {
                            var t,
                                n = JSON.stringify(e);
                            if (!e.forceScriptReload && (t = a[n])) return t;
                            var r = document.createElement('script'),
                                i = e.dataAttributes || {},
                                o = e.container || document.head;
                            return (
                                (r.src = e.src),
                                (r.id = e.id || ''),
                                (r.async = !0),
                                e.type && r.setAttribute('type', ''.concat(e.type)),
                                e.crossorigin && r.setAttribute('crossorigin', ''.concat(e.crossorigin)),
                                Object.keys(i).forEach(function (e) {
                                    r.setAttribute('data-'.concat(e), ''.concat(i[e]));
                                }),
                                (t = new Promise(function (t, n) {
                                    r.addEventListener('load', function () {
                                        t(r);
                                    }),
                                        r.addEventListener('error', function () {
                                            n(Error(''.concat(e.src, ' failed to load.')));
                                        }),
                                        r.addEventListener('abort', function () {
                                            n(Error(''.concat(e.src, ' has aborted.')));
                                        }),
                                        o.appendChild(r);
                                })),
                                (a[n] = t),
                                t
                            );
                        }
                        (s.clearCache = function () {
                            a = {};
                        }),
                            Object.defineProperty(o, '__esModule', { value: !0 }),
                            (o.loadStylesheet = c = o.loadScript = void 0);
                        var c = (o.loadScript = s);
                        o.loadStylesheet = function (e) {
                            var t = document.querySelector('link[href="'.concat(e.href, '"]'));
                            if (t) return Promise.resolve(t);
                            t = document.createElement('link');
                            var n = e.container || document.head;
                            return t.setAttribute('rel', 'stylesheet'), t.setAttribute('type', 'text/css'), t.setAttribute('href', e.href), t.setAttribute('id', e.id), n.firstChild ? n.insertBefore(t, n.firstChild) : n.appendChild(t), Promise.resolve(t);
                        };
                        var d = 'fastlane',
                            l = 'connect-boba',
                            u = {
                                AXO_ASSET_NAME: {
                                    minified: 'axo.min',
                                    unminified: 'axo'
                                },
                                AXO_ASSET_PATH: l,
                                LOCALE_PATH: ''.concat(l, '/locales/'),
                                CDNX_PROD: 'https://www.paypalobjects.com'
                            },
                            p = {
                                BT: 'BT',
                                PPCP: 'PPCP'
                            };
                        function _() {
                            return 'function' == typeof window.define && !!window.define.amd;
                        }
                        function E(e, r, i) {
                            var o, a;
                            return (
                                void 0 === i && (i = !0),
                                t(this, void 0, void 0, function () {
                                    var t, s;
                                    return n(this, function (n) {
                                        if ((t = null == window ? void 0 : window.braintree) && t[e.module])
                                            if (!r || (null == (o = t[e.module]) ? void 0 : o.VERSION) === r) return [2, !0];
                                            else throw ((s = null == (a = t[e.module]) ? void 0 : a.VERSION), Error(''.concat(e.module, ' already loaded with version ').concat(s, ' cannot load version ').concat(r)));
                                        if (!r) throw Error('Attempted to load '.concat(e.module, ' without specifying version'));
                                        return [
                                            2,
                                            (function (e, t, n) {
                                                if ((void 0 === n && (n = !0), _())) {
                                                    var r = n ? e.amdModule.minified : e.amdModule.unminified;
                                                    return new Promise(function (e, t) {
                                                        window.require([r], e, t);
                                                    });
                                                }
                                                var i = n ? e.script.minified : e.script.unminified;
                                                return c({
                                                    id: ''.concat(e.id, '-').concat(t),
                                                    src: 'https://js.braintreegateway.com/web/'.concat(t, '/js/').concat(i)
                                                });
                                            })(e, r, i)
                                        ];
                                    });
                                })
                            );
                        }
                        var h = 'client',
                            m = 'hostedFields',
                            f = 'braintree',
                            y = (((r = {})[h] = 'client'), (r[m] = 'hosted-fields'), r),
                            A =
                                (((i = {})[h] = {
                                    id: 'client',
                                    module: h,
                                    amdModule: {
                                        unminified: ''.concat(f, '/').concat(y[h]),
                                        minified: ''.concat(f, '/').concat(y[h], '.min')
                                    },
                                    script: {
                                        unminified: ''.concat(y[h], '.js'),
                                        minified: ''.concat(y[h], '.min.js')
                                    }
                                }),
                                (i[m] = {
                                    id: 'hcf',
                                    module: m,
                                    amdModule: {
                                        unminified: ''.concat(f, '/').concat(y[m]),
                                        minified: ''.concat(f, '/').concat(y[m], '.min')
                                    },
                                    script: {
                                        unminified: ''.concat(y[m], '.js'),
                                        minified: ''.concat(y[m], '.min.js')
                                    }
                                }),
                                i);
                        function T(e, t) {
                            var n;
                            if ((void 0 === t && (t = !0), _())) {
                                _() && 'function' == typeof window.requirejs && 'function' == typeof window.requirejs.config && requirejs.config({ paths: (((n = {})[d] = e), n) });
                                var r = ''.concat(d, '/').concat(t ? u.AXO_ASSET_NAME.minified : u.AXO_ASSET_NAME.unminified);
                                return new Promise(function (e, t) {
                                    window.require([r], e, t);
                                });
                            }
                            return c({
                                id: 'axo-id',
                                src: e,
                                forceScriptReload: !0
                            });
                        }
                        function I(e) {
                            var t = e.assetUrl,
                                n = e.bundleId;
                            return n ? 'https://cdn-'.concat(n, '.static.engineering.dev.paypalinc.com/').concat(t) : ''.concat(u.CDNX_PROD, '/').concat(t);
                        }
                        (e.constants = u),
                            (e.loadAxo = function (e) {
                                return t(this, void 0, void 0, function () {
                                    var t, r, i, o;
                                    return n(this, function (n) {
                                        switch (n.label) {
                                            case 0:
                                                var a, s, c, d, l;
                                                if (
                                                    (performance.mark('pp_axo_sdk_init_invoked'),
                                                    (t = e.btSdkVersion),
                                                    (r = e.minified),
                                                    (c = (null == (a = e) ? void 0 : a.minified) !== !1 ? u.AXO_ASSET_NAME.minified : u.AXO_ASSET_NAME.unminified),
                                                    (i = I({
                                                        assetUrl: _() ? u.AXO_ASSET_PATH : ''.concat(u.AXO_ASSET_PATH, '/').concat(c, '.js'),
                                                        bundleId: null == (s = null == a ? void 0 : a.metadata) ? void 0 : s.bundleIdOverride
                                                    })),
                                                    (d = e),
                                                    (o = I({
                                                        assetUrl: u.LOCALE_PATH,
                                                        bundleId: null == (l = null == d ? void 0 : d.metadata) ? void 0 : l.bundleIdOverride
                                                    })),
                                                    e.platform !== p.BT)
                                                )
                                                    return [3, 2];
                                                return [4, Promise.all([E(A.hostedFields, t, r), T(i, r)])];
                                            case 1:
                                            case 3:
                                                return n.sent(), [3, 5];
                                            case 2:
                                                if (e.platform !== p.PPCP) return [3, 4];
                                                return [4, Promise.all([E(A.client, t, r), E(A.hostedFields, t, r), T(i, r)])];
                                            case 4:
                                                throw Error('unsupported axo platform');
                                            case 5:
                                                return [2, { metadata: { localeUrl: o } }];
                                        }
                                    });
                                });
                            });
                    }),
                    'object' == typeof r && void 0 !== n ? o(r) : 'function' == typeof t && t.amd ? t(['exports'], o) : o(((i = 'undefined' != typeof globalThis ? globalThis : i || self).loadAxo = {}));
            },
            {}
        ],
        42: [
            function (e, t, n) {
                var r =
                        (this && this.__assign) ||
                        function () {
                            return (r =
                                Object.assign ||
                                function (e) {
                                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                    return e;
                                }).apply(this, arguments);
                        },
                    i = e('./lib/card-types'),
                    o = e('./lib/add-matching-cards-to-results'),
                    a = e('./lib/is-valid-input-type'),
                    s = e('./lib/find-best-match'),
                    c = e('./lib/clone'),
                    d = {},
                    l = {
                        VISA: 'visa',
                        MASTERCARD: 'mastercard',
                        AMERICAN_EXPRESS: 'american-express',
                        DINERS_CLUB: 'diners-club',
                        DISCOVER: 'discover',
                        JCB: 'jcb',
                        UNIONPAY: 'unionpay',
                        MAESTRO: 'maestro',
                        ELO: 'elo',
                        MIR: 'mir',
                        HIPER: 'hiper',
                        HIPERCARD: 'hipercard'
                    },
                    u = [l.VISA, l.MASTERCARD, l.AMERICAN_EXPRESS, l.DINERS_CLUB, l.DISCOVER, l.JCB, l.UNIONPAY, l.MAESTRO, l.ELO, l.MIR, l.HIPER, l.HIPERCARD],
                    p = (0, c.clone)(u);
                function _(e) {
                    return d[e] || i[e];
                }
                function E(e, t) {
                    void 0 === t && (t = !1);
                    var n = p.indexOf(e);
                    if (!t && -1 === n) throw Error('"' + e + '" is not a supported card type.');
                    return n;
                }
                function h(e) {
                    var t = [];
                    if (!(0, a.isValidInputType)(e)) return t;
                    if (0 === e.length)
                        return p.map(function (e) {
                            return (0, c.clone)(_(e));
                        });
                    p.forEach(function (n) {
                        var r = _(n);
                        (0, o.addMatchingCardsToResults)(e, r, t);
                    });
                    var n = (0, s.findBestMatch)(t);
                    return n ? [n] : t;
                }
                (h.getTypeInfo = function (e) {
                    return (0, c.clone)(_(e));
                }),
                    (h.removeCard = function (e) {
                        var t = E(e);
                        p.splice(t, 1);
                    }),
                    (h.addCard = function (e) {
                        var t = E(e.type, !0);
                        (d[e.type] = e), -1 === t && p.push(e.type);
                    }),
                    (h.updateCard = function (e, t) {
                        var n = d[e] || i[e];
                        if (!n) throw Error('"'.concat(e, '" is not a recognized type. Use `addCard` instead.\''));
                        if (t.type && n.type !== t.type) throw Error('Cannot overwrite type parameter.');
                        var o = (0, c.clone)(n);
                        d[(o = r(r({}, o), t)).type] = o;
                    }),
                    (h.changeOrder = function (e, t) {
                        var n = E(e);
                        p.splice(n, 1), p.splice(t, 0, e);
                    }),
                    (h.resetModifications = function () {
                        (p = (0, c.clone)(u)), (d = {});
                    }),
                    (h.types = l),
                    (t.exports = h);
            },
            {
                './lib/add-matching-cards-to-results': 43,
                './lib/card-types': 44,
                './lib/clone': 45,
                './lib/find-best-match': 46,
                './lib/is-valid-input-type': 47
            }
        ],
        43: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.addMatchingCardsToResults = void 0);
                var r = e('./clone'),
                    i = e('./matches');
                n.addMatchingCardsToResults = function (e, t, n) {
                    var o, a;
                    for (o = 0; o < t.patterns.length; o++) {
                        var s = t.patterns[o];
                        if ((0, i.matches)(e, s)) {
                            var c = (0, r.clone)(t);
                            (a = Array.isArray(s) ? String(s[0]).length : String(s).length), e.length >= a && (c.matchStrength = a), n.push(c);
                            break;
                        }
                    }
                };
            },
            {
                './clone': 45,
                './matches': 48
            }
        ],
        44: [
            function (e, t, n) {
                t.exports = {
                    visa: {
                        niceType: 'Visa',
                        type: 'visa',
                        patterns: [4],
                        gaps: [4, 8, 12],
                        lengths: [16, 18, 19],
                        code: {
                            name: 'CVV',
                            size: 3
                        }
                    },
                    mastercard: {
                        niceType: 'Mastercard',
                        type: 'mastercard',
                        patterns: [[51, 55], [2221, 2229], [223, 229], [23, 26], [270, 271], 2720],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: 'CVC',
                            size: 3
                        }
                    },
                    'american-express': {
                        niceType: 'American Express',
                        type: 'american-express',
                        patterns: [34, 37],
                        gaps: [4, 10],
                        lengths: [15],
                        code: {
                            name: 'CID',
                            size: 4
                        }
                    },
                    'diners-club': {
                        niceType: 'Diners Club',
                        type: 'diners-club',
                        patterns: [[300, 305], 36, 38, 39],
                        gaps: [4, 10],
                        lengths: [14, 16, 19],
                        code: {
                            name: 'CVV',
                            size: 3
                        }
                    },
                    discover: {
                        niceType: 'Discover',
                        type: 'discover',
                        patterns: [6011, [644, 649], 65],
                        gaps: [4, 8, 12],
                        lengths: [16, 19],
                        code: {
                            name: 'CID',
                            size: 3
                        }
                    },
                    jcb: {
                        niceType: 'JCB',
                        type: 'jcb',
                        patterns: [2131, 1800, [3528, 3589]],
                        gaps: [4, 8, 12],
                        lengths: [16, 17, 18, 19],
                        code: {
                            name: 'CVV',
                            size: 3
                        }
                    },
                    unionpay: {
                        niceType: 'UnionPay',
                        type: 'unionpay',
                        patterns: [620, [62100, 62182], [62184, 62187], [62185, 62197], [62200, 62205], [622010, 622999], 622018, [62207, 62209], [623, 626], 6270, 6272, 6276, [627700, 627779], [627781, 627799], [6282, 6289], 6291, 6292, 810, [8110, 8131], [8132, 8151], [8152, 8163], [8164, 8171]],
                        gaps: [4, 8, 12],
                        lengths: [14, 15, 16, 17, 18, 19],
                        code: {
                            name: 'CVN',
                            size: 3
                        }
                    },
                    maestro: {
                        niceType: 'Maestro',
                        type: 'maestro',
                        patterns: [493698, [500000, 504174], [504176, 506698], [506779, 508999], [56, 59], 63, 67, 6],
                        gaps: [4, 8, 12],
                        lengths: [12, 13, 14, 15, 16, 17, 18, 19],
                        code: {
                            name: 'CVC',
                            size: 3
                        }
                    },
                    elo: {
                        niceType: 'Elo',
                        type: 'elo',
                        patterns: [401178, 401179, 438935, 457631, 457632, 431274, 451416, 457393, 504175, [506699, 506778], [509000, 509999], 627780, 636297, 636368, [650031, 650033], [650035, 650051], [650405, 650439], [650485, 650538], [650541, 650598], [650700, 650718], [650720, 650727], [650901, 650978], [651652, 651679], [655000, 655019], [655021, 655058]],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: 'CVE',
                            size: 3
                        }
                    },
                    mir: {
                        niceType: 'Mir',
                        type: 'mir',
                        patterns: [[2200, 2204]],
                        gaps: [4, 8, 12],
                        lengths: [16, 17, 18, 19],
                        code: {
                            name: 'CVP2',
                            size: 3
                        }
                    },
                    hiper: {
                        niceType: 'Hiper',
                        type: 'hiper',
                        patterns: [637095, 63737423, 63743358, 637568, 637599, 637609, 637612],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: 'CVC',
                            size: 3
                        }
                    },
                    hipercard: {
                        niceType: 'Hipercard',
                        type: 'hipercard',
                        patterns: [606282],
                        gaps: [4, 8, 12],
                        lengths: [16],
                        code: {
                            name: 'CVC',
                            size: 3
                        }
                    }
                };
            },
            {}
        ],
        45: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.clone = void 0),
                    (n.clone = function (e) {
                        return e ? JSON.parse(JSON.stringify(e)) : null;
                    });
            },
            {}
        ],
        46: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.findBestMatch = void 0),
                    (n.findBestMatch = function (e) {
                        var t;
                        return (t = e.filter(function (e) {
                            return e.matchStrength;
                        }).length) > 0 && t === e.length
                            ? e.reduce(function (e, t) {
                                  return !e || Number(e.matchStrength) < Number(t.matchStrength) ? t : e;
                              })
                            : null;
                    });
            },
            {}
        ],
        47: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.isValidInputType = void 0),
                    (n.isValidInputType = function (e) {
                        return 'string' == typeof e || e instanceof String;
                    });
            },
            {}
        ],
        48: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.matches = void 0),
                    (n.matches = function (e, t) {
                        var n, r, i, o, a, s;
                        return Array.isArray(t) ? ((n = t[0]), (r = t[1]), (i = String(n).length), (a = parseInt((o = e.substr(0, i)), 10)), (n = parseInt(String(n).substr(0, o.length), 10)), (r = parseInt(String(r).substr(0, o.length), 10)), a >= n && a <= r) : (s = String((s = t))).substring(0, e.length) === e.substring(0, s.length);
                    });
            },
            {}
        ],
        49: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.Framebus = void 0);
                var r = e('./lib'),
                    i = 'undefined' != typeof window && window.Promise;
                n.Framebus = (function () {
                    function e(e) {
                        void 0 === e && (e = {}), (this.origin = e.origin || '*'), (this.channel = e.channel || ''), (this.verifyDomain = e.verifyDomain), (this.targetFrames = e.targetFrames || []), (this.limitBroadcastToFramesArray = !!e.targetFrames), (this.isDestroyed = !1), (this.listeners = []), (this.hasAdditionalChecksForOnListeners = !!(this.verifyDomain || this.limitBroadcastToFramesArray));
                    }
                    return (
                        (e.setPromise = function (t) {
                            e.Promise = t;
                        }),
                        (e.target = function (t) {
                            return new e(t);
                        }),
                        (e.prototype.addTargetFrame = function (e) {
                            this.limitBroadcastToFramesArray && this.targetFrames.push(e);
                        }),
                        (e.prototype.include = function (e) {
                            return null != e && null != e.Window && e.constructor === e.Window && (r.childWindows.push(e), !0);
                        }),
                        (e.prototype.target = function (t) {
                            return e.target(t);
                        }),
                        (e.prototype.emit = function (e, t, n) {
                            if (this.isDestroyed) return !1;
                            var i = this.origin;
                            if (((e = this.namespaceEvent(e)), (0, r.isntString)(e) || (0, r.isntString)(i))) return !1;
                            'function' == typeof t && ((n = t), (t = void 0));
                            var o = (0, r.packagePayload)(e, i, t, n);
                            return (
                                !!o &&
                                (this.limitBroadcastToFramesArray
                                    ? this.targetFramesAsWindows().forEach(function (e) {
                                          (0, r.sendMessage)(e, o, i);
                                      })
                                    : (0, r.broadcast)(o, {
                                          origin: i,
                                          frame: window.top || window.self
                                      }),
                                !0)
                            );
                        }),
                        (e.prototype.emitAsPromise = function (t, n) {
                            var r = this;
                            return new e.Promise(function (e, i) {
                                r.emit(t, n, function (t) {
                                    e(t);
                                }) || i(Error('Listener not added for "'.concat(t, '"')));
                            });
                        }),
                        (e.prototype.on = function (e, t) {
                            if (this.isDestroyed) return !1;
                            var n = this,
                                i = this.origin,
                                o = t;
                            return (
                                (e = this.namespaceEvent(e)),
                                !(0, r.subscriptionArgsInvalid)(e, o, i) &&
                                    (this.hasAdditionalChecksForOnListeners &&
                                        (o = function () {
                                            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
                                            n.passesVerifyDomainCheck(this && this.origin) && n.hasMatchingTargetFrame(this && this.source) && t.apply(void 0, e);
                                        }),
                                    this.listeners.push({
                                        eventName: e,
                                        handler: o,
                                        originalHandler: t
                                    }),
                                    (r.subscribers[i] = r.subscribers[i] || {}),
                                    (r.subscribers[i][e] = r.subscribers[i][e] || []),
                                    r.subscribers[i][e].push(o),
                                    !0)
                            );
                        }),
                        (e.prototype.off = function (e, t) {
                            var n = t;
                            if (this.isDestroyed) return !1;
                            if (this.verifyDomain)
                                for (var i = 0; i < this.listeners.length; i++) {
                                    var o = this.listeners[i];
                                    o.originalHandler === t && (n = o.handler);
                                }
                            e = this.namespaceEvent(e);
                            var a = this.origin;
                            if ((0, r.subscriptionArgsInvalid)(e, n, a)) return !1;
                            var s = r.subscribers[a] && r.subscribers[a][e];
                            if (!s) return !1;
                            for (var i = 0; i < s.length; i++) if (s[i] === n) return s.splice(i, 1), !0;
                            return !1;
                        }),
                        (e.prototype.teardown = function () {
                            if (!this.isDestroyed) {
                                this.isDestroyed = !0;
                                for (var e = 0; e < this.listeners.length; e++) {
                                    var t = this.listeners[e];
                                    this.off(t.eventName, t.handler);
                                }
                                this.listeners.length = 0;
                            }
                        }),
                        (e.prototype.passesVerifyDomainCheck = function (e) {
                            return !this.verifyDomain || this.checkOrigin(e);
                        }),
                        (e.prototype.targetFramesAsWindows = function () {
                            return this.limitBroadcastToFramesArray
                                ? this.targetFrames
                                      .map(function (e) {
                                          return e instanceof HTMLIFrameElement ? e.contentWindow : e;
                                      })
                                      .filter(function (e) {
                                          return e;
                                      })
                                : [];
                        }),
                        (e.prototype.hasMatchingTargetFrame = function (e) {
                            return (
                                !this.limitBroadcastToFramesArray ||
                                !!this.targetFramesAsWindows().find(function (t) {
                                    return t === e;
                                })
                            );
                        }),
                        (e.prototype.checkOrigin = function (e) {
                            var t,
                                n = document.createElement('a');
                            return (n.href = location.href), (t = 'https:' === n.protocol ? n.host.replace(/:443$/, '') : 'http:' === n.protocol ? n.host.replace(/:80$/, '') : n.host), n.protocol + '//' + t === e || !this.verifyDomain || this.verifyDomain(e);
                        }),
                        (e.prototype.namespaceEvent = function (e) {
                            return this.channel ? ''.concat(this.channel, ':').concat(e) : e;
                        }),
                        (e.Promise = i),
                        e
                    );
                })();
            },
            { './lib': 57 }
        ],
        50: [
            function (e, t, n) {
                var r = e('./lib'),
                    i = e('./framebus');
                (0, r.attach)(), (t.exports = i.Framebus);
            },
            {
                './framebus': 49,
                './lib': 57
            }
        ],
        51: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.detach = n.attach = void 0);
                var r = e('./'),
                    i = !1;
                (n.attach = function () {
                    i || 'undefined' == typeof window || ((i = !0), window.addEventListener('message', r.onMessage, !1));
                }),
                    (n.detach = function () {
                        (i = !1), window.removeEventListener('message', r.onMessage, !1);
                    });
            },
            { './': 57 }
        ],
        52: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.broadcastToChildWindows = void 0);
                var r = e('./');
                n.broadcastToChildWindows = function (e, t, n) {
                    for (var i = r.childWindows.length - 1; i >= 0; i--) {
                        var o = r.childWindows[i];
                        o.closed
                            ? r.childWindows.splice(i, 1)
                            : n !== o &&
                              (0, r.broadcast)(e, {
                                  origin: t,
                                  frame: o.top
                              });
                    }
                };
            },
            { './': 57 }
        ],
        53: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.broadcast = void 0);
                var r = e('./');
                n.broadcast = function e(t, n) {
                    var i,
                        o = 0,
                        a = n.origin,
                        s = n.frame;
                    try {
                        for (
                            s.postMessage(t, a),
                                (0, r.hasOpener)(s) &&
                                    s.opener.top !== window.top &&
                                    e(t, {
                                        origin: a,
                                        frame: s.opener.top
                                    });
                            (i = s.frames[o]);

                        )
                            e(t, {
                                origin: a,
                                frame: i
                            }),
                                o++;
                    } catch (e) {}
                };
            },
            { './': 57 }
        ],
        54: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.subscribers = n.childWindows = n.prefix = void 0), (n.prefix = '/*framebus*/'), (n.childWindows = []), (n.subscribers = {});
            },
            {}
        ],
        55: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.dispatch = void 0);
                var r = e('./');
                n.dispatch = function (e, t, n, i, o) {
                    if (r.subscribers[e] && r.subscribers[e][t]) {
                        var a = [];
                        n && a.push(n), i && a.push(i);
                        for (var s = 0; s < r.subscribers[e][t].length; s++) r.subscribers[e][t][s].apply(o, a);
                    }
                };
            },
            { './': 57 }
        ],
        56: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.hasOpener = void 0),
                    (n.hasOpener = function (e) {
                        return e.top === e && null != e.opener && e.opener !== e && !0 !== e.opener.closed;
                    });
            },
            {}
        ],
        57: [
            function (e, t, n) {
                var r =
                        (this && this.__createBinding) ||
                        (Object.create
                            ? function (e, t, n, r) {
                                  void 0 === r && (r = n);
                                  var i = Object.getOwnPropertyDescriptor(t, n);
                                  (!i || ('get' in i ? !t.__esModule : i.writable || i.configurable)) &&
                                      (i = {
                                          enumerable: !0,
                                          get: function () {
                                              return t[n];
                                          }
                                      }),
                                      Object.defineProperty(e, r, i);
                              }
                            : function (e, t, n, r) {
                                  void 0 === r && (r = n), (e[r] = t[n]);
                              }),
                    i =
                        (this && this.__exportStar) ||
                        function (e, t) {
                            for (var n in e) 'default' === n || Object.prototype.hasOwnProperty.call(t, n) || r(t, e, n);
                        };
                Object.defineProperty(n, '__esModule', { value: !0 }), i(e('./attach'), n), i(e('./broadcast-to-child-windows'), n), i(e('./broadcast'), n), i(e('./constants'), n), i(e('./dispatch'), n), i(e('./has-opener'), n), i(e('./is-not-string'), n), i(e('./message'), n), i(e('./package-payload'), n), i(e('./send-message'), n), i(e('./subscribe-replier'), n), i(e('./subscription-args-invalid'), n), i(e('./types'), n), i(e('./unpack-payload'), n);
            },
            {
                './attach': 51,
                './broadcast': 53,
                './broadcast-to-child-windows': 52,
                './constants': 54,
                './dispatch': 55,
                './has-opener': 56,
                './is-not-string': 58,
                './message': 59,
                './package-payload': 60,
                './send-message': 61,
                './subscribe-replier': 62,
                './subscription-args-invalid': 63,
                './types': 64,
                './unpack-payload': 65
            }
        ],
        58: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.isntString = void 0),
                    (n.isntString = function (e) {
                        return 'string' != typeof e;
                    });
            },
            {}
        ],
        59: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.onMessage = void 0);
                var r = e('./');
                n.onMessage = function (e) {
                    if (!(0, r.isntString)(e.data)) {
                        var t = (0, r.unpackPayload)(e);
                        if (t) {
                            var n = t.eventData,
                                i = t.reply;
                            (0, r.dispatch)('*', t.event, n, i, e), (0, r.dispatch)(e.origin, t.event, n, i, e), (0, r.broadcastToChildWindows)(e.data, t.origin, e.source);
                        }
                    }
                };
            },
            { './': 57 }
        ],
        60: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.packagePayload = void 0);
                var r = e('./');
                n.packagePayload = function (e, t, n, i) {
                    var o,
                        a = {
                            event: e,
                            origin: t
                        };
                    'function' == typeof i && (a.reply = (0, r.subscribeReplier)(i, t)), (a.eventData = n);
                    try {
                        o = r.prefix + JSON.stringify(a);
                    } catch (e) {
                        throw Error('Could not stringify event: '.concat(e.message));
                    }
                    return o;
                };
            },
            { './': 57 }
        ],
        61: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }),
                    (n.sendMessage = void 0),
                    (n.sendMessage = function (e, t, n) {
                        try {
                            e.postMessage(t, n);
                        } catch (e) {}
                    });
            },
            {}
        ],
        62: [
            function (e, t, n) {
                var r =
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    };
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.subscribeReplier = void 0);
                var i = e('../framebus'),
                    o = r(e('@braintree/uuid'));
                n.subscribeReplier = function (e, t) {
                    var n = (0, o.default)();
                    return (
                        i.Framebus.target({ origin: t }).on(n, function r(o, a) {
                            e(o, a), i.Framebus.target({ origin: t }).off(n, r);
                        }),
                        n
                    );
                };
            },
            {
                '../framebus': 49,
                '@braintree/uuid': 66
            }
        ],
        63: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.subscriptionArgsInvalid = void 0);
                var r = e('./');
                n.subscriptionArgsInvalid = function (e, t, n) {
                    return !!(0, r.isntString)(e) || 'function' != typeof t || (0, r.isntString)(n);
                };
            },
            { './': 57 }
        ],
        64: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 });
            },
            {}
        ],
        65: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.unpackPayload = void 0);
                var r = e('./');
                n.unpackPayload = function (e) {
                    var t;
                    if (e.data.slice(0, r.prefix.length) !== r.prefix) return !1;
                    try {
                        t = JSON.parse(e.data.slice(r.prefix.length));
                    } catch (e) {
                        return !1;
                    }
                    if (t.reply) {
                        var n = e.origin,
                            i = e.source,
                            o = t.reply;
                        t.reply = function (e) {
                            if (i) {
                                var t = (0, r.packagePayload)(o, n, e);
                                t && i.postMessage(t, n);
                            }
                        };
                    }
                    return t;
                };
            },
            { './': 57 }
        ],
        66: [
            function (e, t, n) {
                t.exports = function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                        var t = (16 * Math.random()) | 0;
                        return ('x' === e ? t : (3 & t) | 8).toString(16);
                    });
                };
            },
            {}
        ],
        67: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.isIos = n.isIE9 = n.isSamsungBrowser = n.isAndroidChrome = n.isKitKatWebview = void 0);
                var r = 'undefined' != typeof window && window.navigator && window.navigator.userAgent,
                    i = e('@braintree/browser-detection/is-android'),
                    o = e('@braintree/browser-detection/is-chrome-os'),
                    a = e('@braintree/browser-detection/is-chrome');
                (n.isIos = e('@braintree/browser-detection/is-ios')), (n.isIE9 = e('@braintree/browser-detection/is-ie9'));
                var s = /Version\/\d\.\d* Chrome\/\d*\.0\.0\.0/;
                (n.isKitKatWebview = function (e) {
                    return void 0 === e && (e = r), i(e) && s.test(e);
                }),
                    (n.isAndroidChrome = function (e) {
                        return void 0 === e && (e = r), (i(e) || o(e)) && a(e);
                    }),
                    (n.isSamsungBrowser = function (e) {
                        var t;
                        return void 0 === e && (e = r), /SamsungBrowser/.test(e) || (!a((t = e)) && t.indexOf('Samsung') > -1);
                    });
            },
            {
                '@braintree/browser-detection/is-android': 80,
                '@braintree/browser-detection/is-chrome': 82,
                '@braintree/browser-detection/is-chrome-os': 81,
                '@braintree/browser-detection/is-ie9': 83,
                '@braintree/browser-detection/is-ios': 84
            }
        ],
        68: [
            function (e, t, n) {
                var r = e('./lib/device');
                t.exports = function () {
                    return !(0, r.isSamsungBrowser)();
                };
            },
            { './lib/device': 67 }
        ],
        69: [
            function (e, t, n) {
                arguments[4][3][0].apply(n, arguments);
            },
            { dup: 3 }
        ],
        70: [
            function (e, t, n) {
                arguments[4][4][0].apply(n, arguments);
            },
            { dup: 4 }
        ],
        71: [
            function (e, t, n) {
                arguments[4][5][0].apply(n, arguments);
            },
            {
                './is-duckduckgo': 72,
                './is-edge': 73,
                './is-opera': 77,
                './is-samsung': 78,
                './is-silk': 79,
                dup: 5
            }
        ],
        72: [
            function (e, t, n) {
                arguments[4][6][0].apply(n, arguments);
            },
            { dup: 6 }
        ],
        73: [
            function (e, t, n) {
                arguments[4][7][0].apply(n, arguments);
            },
            { dup: 7 }
        ],
        74: [
            function (e, t, n) {
                t.exports = function (e) {
                    return -1 !== (e = e || window.navigator.userAgent).indexOf('MSIE 9');
                };
            },
            {}
        ],
        75: [
            function (e, t, n) {
                arguments[4][14][0].apply(n, arguments);
            },
            {
                './is-ipados': 76,
                dup: 14
            }
        ],
        76: [
            function (e, t, n) {
                arguments[4][15][0].apply(n, arguments);
            },
            { dup: 15 }
        ],
        77: [
            function (e, t, n) {
                arguments[4][16][0].apply(n, arguments);
            },
            { dup: 16 }
        ],
        78: [
            function (e, t, n) {
                arguments[4][17][0].apply(n, arguments);
            },
            { dup: 17 }
        ],
        79: [
            function (e, t, n) {
                arguments[4][18][0].apply(n, arguments);
            },
            { dup: 18 }
        ],
        80: [
            function (e, t, n) {
                arguments[4][20][0].apply(n, arguments);
            },
            {
                './dist/is-android': 69,
                dup: 20
            }
        ],
        81: [
            function (e, t, n) {
                arguments[4][21][0].apply(n, arguments);
            },
            {
                './dist/is-chrome-os': 70,
                dup: 21
            }
        ],
        82: [
            function (e, t, n) {
                arguments[4][22][0].apply(n, arguments);
            },
            {
                './dist/is-chrome': 71,
                dup: 22
            }
        ],
        83: [
            function (e, t, n) {
                t.exports = e('./dist/is-ie9');
            },
            { './dist/is-ie9': 74 }
        ],
        84: [
            function (e, t, n) {
                arguments[4][27][0].apply(n, arguments);
            },
            {
                './dist/is-ios': 75,
                dup: 27
            }
        ],
        85: [
            function (e, t, n) {
                t.exports = e('./dist/supports-input-formatting');
            },
            { './dist/supports-input-formatting': 68 }
        ],
        86: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('./errors'),
                    o = e('../lib/assign').assign,
                    a = e('../lib/methods'),
                    s = e('../lib/convert-methods-to-error'),
                    c = e('@braintree/wrap-promise');
                function d(e) {
                    this._client = e.client;
                }
                (d.prototype.getRewardsBalance = function (e) {
                    var t,
                        n = e.nonce;
                    return n
                        ? ((t = o(
                              {
                                  _meta: { source: 'american-express' },
                                  paymentMethodNonce: n
                              },
                              e
                          )),
                          delete t.nonce,
                          this._client
                              .request({
                                  method: 'get',
                                  endpoint: 'payment_methods/amex_rewards_balance',
                                  data: t
                              })
                              .catch(function (e) {
                                  return Promise.reject(
                                      new r({
                                          type: i.AMEX_NETWORK_ERROR.type,
                                          code: i.AMEX_NETWORK_ERROR.code,
                                          message: 'A network error occurred when getting the American Express rewards balance.',
                                          details: { originalError: e }
                                      })
                                  );
                              }))
                        : Promise.reject(
                              new r({
                                  type: i.AMEX_NONCE_REQUIRED.type,
                                  code: i.AMEX_NONCE_REQUIRED.code,
                                  message: 'getRewardsBalance must be called with a nonce.'
                              })
                          );
                }),
                    (d.prototype.getExpressCheckoutProfile = function (e) {
                        return e.nonce
                            ? this._client
                                  .request({
                                      method: 'get',
                                      endpoint: 'payment_methods/amex_express_checkout_cards/' + e.nonce,
                                      data: {
                                          _meta: { source: 'american-express' },
                                          paymentMethodNonce: e.nonce
                                      }
                                  })
                                  .catch(function (e) {
                                      return Promise.reject(
                                          new r({
                                              type: i.AMEX_NETWORK_ERROR.type,
                                              code: i.AMEX_NETWORK_ERROR.code,
                                              message: 'A network error occurred when getting the American Express Checkout nonce profile.',
                                              details: { originalError: e }
                                          })
                                      );
                                  })
                            : Promise.reject(
                                  new r({
                                      type: i.AMEX_NONCE_REQUIRED.type,
                                      code: i.AMEX_NONCE_REQUIRED.code,
                                      message: 'getExpressCheckoutProfile must be called with a nonce.'
                                  })
                              );
                    }),
                    (d.prototype.teardown = function () {
                        return s(this, a(d.prototype)), Promise.resolve();
                    }),
                    (t.exports = c.wrapPrototype(d));
            },
            {
                '../lib/assign': 140,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/methods': 175,
                './errors': 87,
                '@braintree/wrap-promise': 40
            }
        ],
        87: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    AMEX_NONCE_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'AMEX_NONCE_REQUIRED'
                    },
                    AMEX_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'AMEX_NETWORK_ERROR'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        88: [
            function (e, t, n) {
                var r = e('./american-express'),
                    i = e('../lib/basic-component-verification'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'American Express';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return o.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: a.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return (e.client = t), new r(e);
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './american-express': 86,
                '@braintree/wrap-promise': 40
            }
        ],
        89: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('../lib/analytics'),
                    o = e('./errors'),
                    a = e('../lib/methods'),
                    s = e('../lib/convert-methods-to-error'),
                    c = e('@braintree/wrap-promise');
                function d(e) {
                    (this._instantiatedWithClient = !e.useDeferredClient), (this._client = e.client), (this._createPromise = e.createPromise), this._client && this._setMerchantIdentifier();
                }
                (d.prototype._waitForClient = function () {
                    return this._client
                        ? Promise.resolve()
                        : this._createPromise.then(
                              function (e) {
                                  (this._client = e), this._setMerchantIdentifier();
                              }.bind(this)
                          );
                }),
                    (d.prototype._setMerchantIdentifier = function () {
                        var e = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
                        e &&
                            Object.defineProperty(this, 'merchantIdentifier', {
                                value: e.merchantIdentifier,
                                configurable: !1,
                                writable: !1
                            });
                    }),
                    (d.prototype.createPaymentRequest = function (e) {
                        return this._instantiatedWithClient
                            ? this._createPaymentRequestSynchronously(e)
                            : this._waitForClient().then(
                                  function () {
                                      return this._createPaymentRequestSynchronously(e);
                                  }.bind(this)
                              );
                    }),
                    (d.prototype._createPaymentRequestSynchronously = function (e) {
                        var t = this._client.getConfiguration().gatewayConfiguration.applePayWeb;
                        return Object.assign(
                            {},
                            {
                                countryCode: t.countryCode,
                                currencyCode: t.currencyCode,
                                merchantCapabilities: t.merchantCapabilities || ['supports3DS'],
                                supportedNetworks: t.supportedNetworks.map(function (e) {
                                    return 'mastercard' === e ? 'masterCard' : e;
                                })
                            },
                            e
                        );
                    }),
                    (d.prototype.performValidation = function (e) {
                        var t = this;
                        return e && e.validationURL
                            ? this._waitForClient()
                                  .then(function () {
                                      var n = {
                                          validationUrl: e.validationURL,
                                          domainName: e.domainName || window.location.hostname,
                                          merchantIdentifier: e.merchantIdentifier || t.merchantIdentifier
                                      };
                                      return (
                                          null != e.displayName && (n.displayName = e.displayName),
                                          t._client.request({
                                              method: 'post',
                                              endpoint: 'apple_pay_web/sessions',
                                              data: {
                                                  _meta: { source: 'apple-pay' },
                                                  applePayWebSession: n
                                              }
                                          })
                                      );
                                  })
                                  .then(function (e) {
                                      return i.sendEvent(t._client, 'applepay.performValidation.succeeded'), Promise.resolve(e);
                                  })
                                  .catch(function (e) {
                                      return (i.sendEvent(t._client, 'applepay.performValidation.failed'), 'CLIENT_REQUEST_ERROR' === e.code)
                                          ? Promise.reject(
                                                new r({
                                                    type: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.type,
                                                    code: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.code,
                                                    message: o.APPLE_PAY_MERCHANT_VALIDATION_FAILED.message,
                                                    details: { originalError: e.details.originalError }
                                                })
                                            )
                                          : Promise.reject(
                                                new r({
                                                    type: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.type,
                                                    code: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.code,
                                                    message: o.APPLE_PAY_MERCHANT_VALIDATION_NETWORK.message,
                                                    details: { originalError: e }
                                                })
                                            );
                                  })
                            : Promise.reject(new r(o.APPLE_PAY_VALIDATION_URL_REQUIRED));
                    }),
                    (d.prototype.tokenize = function (e) {
                        var t = this;
                        return e.token
                            ? this._waitForClient()
                                  .then(function () {
                                      return t._client.request({
                                          method: 'post',
                                          endpoint: 'payment_methods/apple_payment_tokens',
                                          data: {
                                              _meta: { source: 'apple-pay' },
                                              applePaymentToken: Object.assign({}, e.token, { paymentData: btoa(JSON.stringify(e.token.paymentData)) })
                                          }
                                      });
                                  })
                                  .then(function (e) {
                                      return i.sendEvent(t._client, 'applepay.tokenize.succeeded'), Promise.resolve(e.applePayCards[0]);
                                  })
                                  .catch(function (e) {
                                      return (
                                          i.sendEvent(t._client, 'applepay.tokenize.failed'),
                                          Promise.reject(
                                              new r({
                                                  type: o.APPLE_PAY_TOKENIZATION.type,
                                                  code: o.APPLE_PAY_TOKENIZATION.code,
                                                  message: o.APPLE_PAY_TOKENIZATION.message,
                                                  details: { originalError: e }
                                              })
                                          )
                                      );
                                  })
                            : Promise.reject(new r(o.APPLE_PAY_PAYMENT_TOKEN_REQUIRED));
                    }),
                    (d.prototype.teardown = function () {
                        return s(this, a(d.prototype)), Promise.resolve();
                    }),
                    (t.exports = c.wrapPrototype(d));
            },
            {
                '../lib/analytics': 138,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/methods': 175,
                './errors': 90,
                '@braintree/wrap-promise': 40
            }
        ],
        90: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    APPLE_PAY_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'APPLE_PAY_NOT_ENABLED',
                        message: 'Apple Pay is not enabled for this merchant.'
                    },
                    APPLE_PAY_VALIDATION_URL_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'APPLE_PAY_VALIDATION_URL_REQUIRED',
                        message: 'performValidation must be called with a validationURL.'
                    },
                    APPLE_PAY_MERCHANT_VALIDATION_NETWORK: {
                        type: r.types.NETWORK,
                        code: 'APPLE_PAY_MERCHANT_VALIDATION_NETWORK',
                        message: 'A network error occurred when validating the Apple Pay merchant.'
                    },
                    APPLE_PAY_MERCHANT_VALIDATION_FAILED: {
                        type: r.types.MERCHANT,
                        code: 'APPLE_PAY_MERCHANT_VALIDATION_FAILED',
                        message: 'Make sure you have registered your domain name in the Braintree Control Panel.'
                    },
                    APPLE_PAY_PAYMENT_TOKEN_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'APPLE_PAY_PAYMENT_TOKEN_REQUIRED',
                        message: 'tokenize must be called with a payment token.'
                    },
                    APPLE_PAY_TOKENIZATION: {
                        type: r.types.NETWORK,
                        code: 'APPLE_PAY_TOKENIZATION',
                        message: 'A network error occurred when processing the Apple Pay payment.'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        91: [
            function (e, t, n) {
                var r = e('./apple-pay'),
                    i = e('../lib/analytics'),
                    o = e('../lib/braintree-error'),
                    a = e('../lib/basic-component-verification'),
                    s = e('../lib/create-assets-url'),
                    c = e('../lib/create-deferred-client'),
                    d = e('./errors');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'Apple Pay';
                        return a
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                var n,
                                    a = c
                                        .create({
                                            authorization: e.authorization,
                                            client: e.client,
                                            debug: e.debug,
                                            assetsUrl: s.create(e.authorization),
                                            name: t
                                        })
                                        .then(function (e) {
                                            return e.getConfiguration().gatewayConfiguration.applePayWeb ? (i.sendEvent(e, 'applepay.initialized'), e) : Promise.reject(new o(d.APPLE_PAY_NOT_ENABLED));
                                        });
                                return ((e.createPromise = a), (n = new r(e)), e.useDeferredClient)
                                    ? n
                                    : a.then(function (e) {
                                          return (n._client = e), n;
                                      });
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './apple-pay': 89,
                './errors': 90,
                '@braintree/wrap-promise': 40
            }
        ],
        92: [
            function (e, t, n) {
                var r = e('./constants').BRAINTREE_VERSION,
                    i = e('./request/graphql'),
                    o = e('./request'),
                    a = e('../lib/is-verified-domain'),
                    s = e('../lib/braintree-error'),
                    c = e('../lib/convert-to-braintree-error'),
                    d = e('./get-configuration').getConfiguration,
                    l = e('../lib/create-authorization-data'),
                    u = e('../lib/add-metadata'),
                    p = e('@braintree/wrap-promise'),
                    _ = e('../lib/once'),
                    E = e('../lib/deferred'),
                    h = e('../lib/assign').assign,
                    m = e('../lib/analytics'),
                    f = e('./errors'),
                    y = e('../lib/constants').VERSION,
                    A = e('../lib/constants').GRAPHQL_URLS,
                    T = e('../lib/methods'),
                    I = e('../lib/convert-methods-to-error'),
                    N = e('../lib/assets'),
                    O = e('../lib/constants').FRAUDNET_FNCLS,
                    g = e('../lib/constants').FRAUDNET_SOURCE,
                    P = e('../lib/constants').FRAUDNET_URL,
                    b = {};
                function v(e) {
                    var t, n;
                    if (((t = JSON.stringify((e = e || {}))), !(n = e.gatewayConfiguration))) throw new s(f.CLIENT_MISSING_GATEWAY_CONFIGURATION);
                    if (
                        (['assetsUrl', 'clientApiUrl', 'configUrl'].forEach(function (e) {
                            if (e in n && !a(n[e]))
                                throw new s({
                                    type: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                                    code: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                                    message: e + ' property is on an invalid domain.'
                                });
                        }),
                        (this.getConfiguration = function () {
                            return JSON.parse(t);
                        }),
                        (this._request = o),
                        (this._configuration = this.getConfiguration()),
                        (this._clientApiBaseUrl = n.clientApiUrl + '/v1/'),
                        n.graphQL)
                    ) {
                        if (!a(n.graphQL.url))
                            throw new s({
                                type: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.type,
                                code: f.CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN.code,
                                message: 'graphQL.url property is on an invalid domain.'
                            });
                        this._graphQL = new i({ graphQL: n.graphQL });
                    }
                }
                (v.initialize = function (e) {
                    var t,
                        n,
                        r = b[e.authorization];
                    if (r) return m.sendEvent(r, 'custom.client.load.cached'), r;
                    try {
                        n = l(e.authorization);
                    } catch (e) {
                        return Promise.reject(new s(f.CLIENT_INVALID_AUTHORIZATION));
                    }
                    return (
                        (r = d(n, e.sessionId).then(function (n) {
                            return e.debug && (n.isDebug = !0), (n.authorization = e.authorization), (t = new v(n));
                        })),
                        (b[e.authorization] = r),
                        m.sendEvent(r, 'custom.client.load.initialized'),
                        r
                            .then(function (e) {
                                return m.sendEvent(t, 'custom.client.load.succeeded'), e;
                            })
                            .catch(function (t) {
                                return delete b[e.authorization], Promise.reject(t);
                            })
                    );
                }),
                    (v.clearCache = function () {
                        b = {};
                    }),
                    (v.prototype._findOrCreateFraudnetJSON = function (e) {
                        var t,
                            n,
                            r,
                            i,
                            o = document.querySelector('script[fncls="' + O + '"]');
                        o || (((o = document.body.appendChild(document.createElement('script'))).type = 'application/json'), o.setAttribute('fncls', O)),
                            (n = {
                                rda_tenant: 'bt_card',
                                mid: (t = this.getConfiguration()).gatewayConfiguration.merchantId
                            }),
                            (r = t.authorizationFingerprint) &&
                                r.split('&').forEach(function (e) {
                                    var t = e.split('=');
                                    'customer_id' === t[0] && t.length > 1 && (n.cid = t[1]);
                                }),
                            (i = {
                                f: e.substr(0, 32),
                                fp: n,
                                bu: !1,
                                s: g
                            }),
                            (o.text = JSON.stringify(i));
                    }),
                    (v.prototype.request = function (e, t) {
                        var n = this,
                            i = new Promise(function (t, i) {
                                var o,
                                    a,
                                    d,
                                    l,
                                    p,
                                    _ = !!('payment_methods/credit_cards' === e.endpoint && n.getConfiguration().gatewayConfiguration.creditCards.collectDeviceData);
                                if (('graphQLApi' !== e.api && (e.method ? e.endpoint || (a = 'options.endpoint') : (a = 'options.method')), a))
                                    throw new s({
                                        type: f.CLIENT_OPTION_REQUIRED.type,
                                        code: f.CLIENT_OPTION_REQUIRED.code,
                                        message: a + ' is required when making a request.'
                                    });
                                if (
                                    ((d = 'api' in e ? e.api : 'clientApi'),
                                    (p = {
                                        method: e.method,
                                        graphQL: n._graphQL,
                                        timeout: e.timeout,
                                        metadata: n._configuration.analyticsMetadata
                                    }),
                                    'clientApi' === d)
                                )
                                    (l = n._clientApiBaseUrl), (p.data = u.addMetadata(n._configuration, e.data));
                                else if ('graphQLApi' === d) {
                                    (l = A[n._configuration.gatewayConfiguration.environment]),
                                        (e.endpoint = ''),
                                        (p.method = 'post'),
                                        (p.data = h(
                                            {
                                                clientSdkMetadata: {
                                                    platform: n._configuration.analyticsMetadata.platform,
                                                    source: n._configuration.analyticsMetadata.source,
                                                    integration: n._configuration.analyticsMetadata.integration,
                                                    sessionId: n._configuration.analyticsMetadata.sessionId,
                                                    version: y
                                                }
                                            },
                                            e.data
                                        )),
                                        (p.headers = {
                                            Authorization: 'Bearer ' + ((o = n._configuration).authorizationFingerprint || o.authorization),
                                            'Braintree-Version': r
                                        });
                                } else
                                    throw new s({
                                        type: f.CLIENT_OPTION_INVALID.type,
                                        code: f.CLIENT_OPTION_INVALID.code,
                                        message: 'options.api is invalid.'
                                    });
                                (p.url = l + e.endpoint),
                                    (p.sendAnalyticsEvent = function (e) {
                                        m.sendEvent(n, e);
                                    }),
                                    n._request(p, function (e, r, o) {
                                        var a, l;
                                        return (l = (function (e, t) {
                                            var n;
                                            if (
                                                (-1 === e
                                                    ? (n = new s(f.CLIENT_REQUEST_TIMEOUT))
                                                    : 401 === e
                                                      ? (n = new s(f.CLIENT_AUTHORIZATION_INVALID))
                                                      : 403 === e
                                                        ? (n = new s(f.CLIENT_AUTHORIZATION_INSUFFICIENT))
                                                        : 429 === e
                                                          ? (n = new s(f.CLIENT_RATE_LIMITED))
                                                          : e >= 500
                                                            ? (n = new s(f.CLIENT_GATEWAY_NETWORK))
                                                            : (e < 200 || e >= 400) &&
                                                              (n = c(t, {
                                                                  type: f.CLIENT_REQUEST_ERROR.type,
                                                                  code: f.CLIENT_REQUEST_ERROR.code,
                                                                  message: f.CLIENT_REQUEST_ERROR.message
                                                              })),
                                                n)
                                            )
                                                return (n.details = n.details || {}), (n.details.httpStatus = e), n;
                                        })(o, e))
                                            ? void i(l)
                                            : 'graphQLApi' === d && r.errors
                                              ? void i(
                                                    c(r.errors, {
                                                        type: f.CLIENT_GRAPHQL_REQUEST_ERROR.type,
                                                        code: f.CLIENT_GRAPHQL_REQUEST_ERROR.code,
                                                        message: f.CLIENT_GRAPHQL_REQUEST_ERROR.message
                                                    })
                                                )
                                              : void ((a = h({ _httpStatus: o }, r)),
                                                _ &&
                                                    a.creditCards &&
                                                    a.creditCards.length > 0 &&
                                                    (n._findOrCreateFraudnetJSON(a.creditCards[0].nonce),
                                                    N.loadScript({
                                                        src: P,
                                                        forceScriptReload: !0
                                                    })),
                                                t(a));
                                    });
                            });
                        if ('function' == typeof t) {
                            (t = _(E(t))),
                                i
                                    .then(function (e) {
                                        t(null, e, e._httpStatus);
                                    })
                                    .catch(function (e) {
                                        var n = e && e.details && e.details.httpStatus;
                                        t(e, null, n);
                                    });
                            return;
                        }
                        return i;
                    }),
                    (v.prototype.toJSON = function () {
                        return this.getConfiguration();
                    }),
                    (v.prototype.getVersion = function () {
                        return y;
                    }),
                    (v.prototype.teardown = p(function () {
                        return delete b[this.getConfiguration().authorization], I(this, T(v.prototype)), Promise.resolve();
                    })),
                    (t.exports = v);
            },
            {
                '../lib/add-metadata': 137,
                '../lib/analytics': 138,
                '../lib/assets': 139,
                '../lib/assign': 140,
                '../lib/braintree-error': 143,
                '../lib/constants': 145,
                '../lib/convert-methods-to-error': 146,
                '../lib/convert-to-braintree-error': 147,
                '../lib/create-authorization-data': 149,
                '../lib/deferred': 151,
                '../lib/is-verified-domain': 173,
                '../lib/methods': 175,
                '../lib/once': 176,
                './constants': 93,
                './errors': 94,
                './get-configuration': 95,
                './request': 108,
                './request/graphql': 106,
                '@braintree/wrap-promise': 40
            }
        ],
        93: [
            function (e, t, n) {
                t.exports = { BRAINTREE_VERSION: '2018-05-10' };
            },
            {}
        ],
        94: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_GATEWAY_CONFIGURATION_INVALID_DOMAIN'
                    },
                    CLIENT_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_OPTION_REQUIRED'
                    },
                    CLIENT_OPTION_INVALID: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_OPTION_INVALID'
                    },
                    CLIENT_MISSING_GATEWAY_CONFIGURATION: {
                        type: r.types.INTERNAL,
                        code: 'CLIENT_MISSING_GATEWAY_CONFIGURATION',
                        message: 'Missing gatewayConfiguration.'
                    },
                    CLIENT_INVALID_AUTHORIZATION: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_INVALID_AUTHORIZATION',
                        message: 'Authorization is invalid. Make sure your client token or tokenization key is valid.'
                    },
                    CLIENT_GATEWAY_NETWORK: {
                        type: r.types.NETWORK,
                        code: 'CLIENT_GATEWAY_NETWORK',
                        message: 'Cannot contact the gateway at this time.'
                    },
                    CLIENT_REQUEST_TIMEOUT: {
                        type: r.types.NETWORK,
                        code: 'CLIENT_REQUEST_TIMEOUT',
                        message: 'Request timed out waiting for a reply.'
                    },
                    CLIENT_REQUEST_ERROR: {
                        type: r.types.NETWORK,
                        code: 'CLIENT_REQUEST_ERROR',
                        message: 'There was a problem with your request.'
                    },
                    CLIENT_GRAPHQL_REQUEST_ERROR: {
                        type: r.types.NETWORK,
                        code: 'CLIENT_GRAPHQL_REQUEST_ERROR',
                        message: 'There was a problem with your request.'
                    },
                    CLIENT_RATE_LIMITED: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_RATE_LIMITED',
                        message: 'You are being rate-limited; please try again in a few minutes.'
                    },
                    CLIENT_AUTHORIZATION_INSUFFICIENT: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_AUTHORIZATION_INSUFFICIENT',
                        message: 'The authorization used has insufficient privileges.'
                    },
                    CLIENT_AUTHORIZATION_INVALID: {
                        type: r.types.MERCHANT,
                        code: 'CLIENT_AUTHORIZATION_INVALID',
                        message: 'Either the client token has expired and a new one should be generated or the tokenization key has been deactivated or deleted.'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        95: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('@braintree/wrap-promise'),
                    o = e('./request'),
                    a = e('@braintree/uuid'),
                    s = e('../lib/constants'),
                    c = e('./errors'),
                    d = e('./request/graphql'),
                    l = e('../lib/constants').GRAPHQL_URLS,
                    u = e('../lib/is-date-string-before-or-on'),
                    p = e('./constants').BRAINTREE_VERSION;
                t.exports = {
                    getConfiguration: i(function (e, t) {
                        return new Promise(function (n, i) {
                            var _,
                                E,
                                h,
                                m = t || a(),
                                f = {
                                    merchantAppId: window.location.host,
                                    platform: s.PLATFORM,
                                    sdkVersion: s.VERSION,
                                    source: s.SOURCE,
                                    integration: s.INTEGRATION,
                                    integrationType: s.INTEGRATION,
                                    sessionId: m
                                };
                            (_ = e.attrs),
                                (E = e.configUrl),
                                (_._meta = f),
                                (_.braintreeLibraryVersion = s.BRAINTREE_LIBRARY_VERSION),
                                (_.configVersion = '3'),
                                (h = {
                                    url: E,
                                    method: 'GET',
                                    data: _
                                }),
                                _.authorizationFingerprint && e.graphQL
                                    ? (u(e.graphQL.date, p) &&
                                          (h.graphQL = new d({
                                              graphQL: {
                                                  url: e.graphQL.url,
                                                  features: ['configuration']
                                              }
                                          })),
                                      (h.metadata = f))
                                    : _.tokenizationKey &&
                                      ((h.graphQL = new d({
                                          graphQL: {
                                              url: l[e.environment],
                                              features: ['configuration']
                                          }
                                      })),
                                      (h.metadata = f)),
                                o(h, function (e, t, o) {
                                    var a;
                                    if (e)
                                        return void i(
                                            new r({
                                                type: (a = 403 === o ? c.CLIENT_AUTHORIZATION_INSUFFICIENT : 401 === o ? c.CLIENT_AUTHORIZATION_INVALID : c.CLIENT_GATEWAY_NETWORK).type,
                                                code: a.code,
                                                message: a.message,
                                                details: { originalError: e }
                                            })
                                        );
                                    n({
                                        authorizationType: _.tokenizationKey ? 'TOKENIZATION_KEY' : 'CLIENT_TOKEN',
                                        authorizationFingerprint: _.authorizationFingerprint,
                                        analyticsMetadata: f,
                                        gatewayConfiguration: t
                                    });
                                });
                        });
                    })
                };
            },
            {
                '../lib/braintree-error': 143,
                '../lib/constants': 145,
                '../lib/is-date-string-before-or-on': 170,
                './constants': 93,
                './errors': 94,
                './request': 108,
                './request/graphql': 106,
                '@braintree/uuid': 36,
                '@braintree/wrap-promise': 40
            }
        ],
        96: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('./client'),
                    o = e('@braintree/wrap-promise'),
                    a = e('../lib/errors');
                t.exports = {
                    create: o(function (e) {
                        return e.authorization
                            ? i.initialize(e)
                            : Promise.reject(
                                  new r({
                                      type: a.INSTANTIATION_OPTION_REQUIRED.type,
                                      code: a.INSTANTIATION_OPTION_REQUIRED.code,
                                      message: 'options.authorization is required when instantiating a client.'
                                  })
                              );
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/braintree-error': 143,
                '../lib/errors': 154,
                './client': 92,
                '@braintree/wrap-promise': 40
            }
        ],
        97: [
            function (e, t, n) {
                var r = e('../../lib/querystring'),
                    i = e('../../lib/assign').assign,
                    o = e('./prep-body'),
                    a = e('./parse-body'),
                    s = e('./xhr'),
                    c = s.isAvailable,
                    d = e('./graphql/request'),
                    l = e('./default-request');
                t.exports = {
                    request: function (e, t) {
                        !(function e(t, n, u) {
                            var p,
                                _,
                                E,
                                h,
                                m,
                                f,
                                y,
                                A = t.url,
                                T = t.graphQL,
                                I = t.timeout,
                                N = s.getRequestObject(),
                                O = !!(T && T.isGraphQLRequest(A, t.data));
                            (t.headers = i({ 'Content-Type': 'application/json' }, t.headers)),
                                (A = (E = O ? new d(t) : new l(t)).getUrl()),
                                (h = E.getBody()),
                                (m = E.getMethod()),
                                (f = E.getHeaders()),
                                'GET' === m && ((A = r.queryify(A, h)), (h = null)),
                                c
                                    ? (N.onreadystatechange = function () {
                                          if (4 === N.readyState) {
                                              if (0 === N.status && O) {
                                                  delete t.graphQL, e(t, n, u);
                                                  return;
                                              }
                                              if (((y = a(N.responseText)), (_ = E.adaptResponseBody(y)), (p = E.determineStatus(N.status, y)) >= 400 || p < 200)) {
                                                  var r;
                                                  if (O && ('UNKNOWN' === (r = !y.data && y.errors && y.errors[0] && y.errors[0].extensions && y.errors[0].extensions.errorClass) || 'INTERNAL' === r)) {
                                                      delete t.graphQL, e(t, n, u);
                                                      return;
                                                  }
                                                  if (n < 1 && (!p || 408 === p)) return void e(t, ++n, u);
                                                  u(_ || 'error', null, p || 500);
                                              } else u(null, _, p);
                                          }
                                      })
                                    : (t.headers && (A = r.queryify(A, f)),
                                      (N.onload = function () {
                                          u(null, a(N.responseText), N.status);
                                      }),
                                      (N.onerror = function () {
                                          u('error', null, 500);
                                      }),
                                      (N.onprogress = function () {}),
                                      (N.ontimeout = function () {
                                          u('timeout', null, -1);
                                      }));
                            try {
                                N.open(m, A, !0);
                            } catch (r) {
                                if (!O) throw r;
                                delete t.graphQL, e(t, n, u);
                                return;
                            }
                            (N.timeout = I),
                                c &&
                                    Object.keys(f).forEach(function (e) {
                                        N.setRequestHeader(e, f[e]);
                                    });
                            try {
                                N.send(o(m, h));
                            } catch (e) {}
                        })(e, 0, t);
                    }
                };
            },
            {
                '../../lib/assign': 140,
                '../../lib/querystring': 177,
                './default-request': 98,
                './graphql/request': 107,
                './parse-body': 109,
                './prep-body': 110,
                './xhr': 111
            }
        ],
        98: [
            function (e, t, n) {
                function r(e) {
                    (this._url = e.url), (this._data = e.data), (this._method = e.method), (this._headers = e.headers);
                }
                (r.prototype.getUrl = function () {
                    return this._url;
                }),
                    (r.prototype.getBody = function () {
                        return this._data;
                    }),
                    (r.prototype.getMethod = function () {
                        return this._method;
                    }),
                    (r.prototype.getHeaders = function () {
                        return this._headers;
                    }),
                    (r.prototype.adaptResponseBody = function (e) {
                        return e;
                    }),
                    (r.prototype.determineStatus = function (e) {
                        return e;
                    }),
                    (t.exports = r);
            },
            {}
        ],
        99: [
            function (e, t, n) {
                var r = e('./error'),
                    i = e('../../../../lib/assign').assign,
                    o = {
                        creditCard: {
                            AMERICAN_EXPRESS: 'American Express',
                            DISCOVER: 'Discover',
                            INTERNATIONAL_MAESTRO: 'Maestro',
                            JCB: 'JCB',
                            MASTERCARD: 'MasterCard',
                            SOLO: 'Solo',
                            UK_MAESTRO: 'UK Maestro',
                            UNION_PAY: 'UnionPay',
                            VISA: 'Visa',
                            ELO: 'Elo',
                            HIPER: 'Hiper',
                            HIPERCARD: 'Hipercard'
                        },
                        applePayWeb: {
                            VISA: 'visa',
                            MASTERCARD: 'mastercard',
                            DISCOVER: 'discover',
                            AMERICAN_EXPRESS: 'amex',
                            INTERNATIONAL_MAESTRO: 'maestro',
                            ELO: 'elo'
                        },
                        visaCheckout: {
                            VISA: 'Visa',
                            MASTERCARD: 'MasterCard',
                            DISCOVER: 'Discover',
                            AMERICAN_EXPRESS: 'American Express'
                        },
                        googlePay: {
                            VISA: 'visa',
                            MASTERCARD: 'mastercard',
                            DISCOVER: 'discover',
                            AMERICAN_EXPRESS: 'amex',
                            INTERNATIONAL_MAESTRO: 'maestro',
                            ELO: 'elo'
                        },
                        masterpass: {
                            VISA: 'visa',
                            MASTERCARD: 'master',
                            DISCOVER: 'discover',
                            AMERICAN_EXPRESS: 'amex',
                            DINERS: 'diners',
                            INTERNATIONAL_MAESTRO: 'maestro',
                            JCB: 'jcb'
                        }
                    };
                function a(e, t) {
                    return e.reduce(function (e, n) {
                        return t.hasOwnProperty(n) ? e.concat(t[n]) : e;
                    }, []);
                }
                t.exports = function (e, t) {
                    var n, s, c, d, l;
                    return e.data && !e.errors
                        ? ((s = e),
                          (c = t),
                          (d = {
                              environment: (l = s.data.clientConfiguration).environment.toLowerCase(),
                              clientApiUrl: l.clientApiUrl,
                              assetsUrl: l.assetsUrl,
                              analytics: { url: l.analyticsUrl },
                              merchantId: l.merchantId,
                              venmo: 'off'
                          }),
                          l.supportedFeatures &&
                              (d.graphQL = {
                                  url: c._graphQL._config.url,
                                  features: l.supportedFeatures.map(function (e) {
                                      return e.toLowerCase();
                                  })
                              }),
                          l.braintreeApi && (d.braintreeApi = l.braintreeApi),
                          l.applePayWeb && ((d.applePayWeb = l.applePayWeb), (d.applePayWeb.supportedNetworks = a(l.applePayWeb.supportedCardBrands, o.applePayWeb)), delete d.applePayWeb.supportedCardBrands),
                          l.fastlane && (d.fastlane = l.fastlane),
                          l.ideal && (d.ideal = l.ideal),
                          l.kount && (d.kount = { kountMerchantId: l.kount.merchantId }),
                          l.creditCard
                              ? ((d.challenges = l.creditCard.challenges.map(function (e) {
                                    return e.toLowerCase();
                                })),
                                (d.creditCards = { supportedCardTypes: a(l.creditCard.supportedCardBrands, o.creditCard) }),
                                (d.threeDSecureEnabled = l.creditCard.threeDSecureEnabled),
                                (d.threeDSecure = l.creditCard.threeDSecure))
                              : ((d.challenges = []), (d.creditCards = { supportedCardTypes: [] }), (d.threeDSecureEnabled = !1)),
                          l.googlePay &&
                              (d.androidPay = {
                                  displayName: l.googlePay.displayName,
                                  enabled: !0,
                                  environment: l.googlePay.environment.toLowerCase(),
                                  googleAuthorizationFingerprint: l.googlePay.googleAuthorization,
                                  paypalClientId: l.googlePay.paypalClientId,
                                  supportedNetworks: a(l.googlePay.supportedCardBrands, o.googlePay)
                              }),
                          l.venmo &&
                              (d.payWithVenmo = {
                                  merchantId: l.venmo.merchantId,
                                  accessToken: l.venmo.accessToken,
                                  environment: l.venmo.environment.toLowerCase(),
                                  enrichedCustomerDataEnabled: l.venmo.enrichedCustomerDataEnabled
                              }),
                          l.paypal ? ((d.paypalEnabled = !0), (d.paypal = i({}, l.paypal)), (d.paypal.currencyIsoCode = d.paypal.currencyCode), (d.paypal.environment = d.paypal.environment.toLowerCase()), delete d.paypal.currencyCode) : (d.paypalEnabled = !1),
                          l.unionPay &&
                              (d.unionPay = {
                                  enabled: !0,
                                  merchantAccountId: l.unionPay.merchantAccountId
                              }),
                          l.visaCheckout &&
                              (d.visaCheckout = {
                                  apikey: l.visaCheckout.apiKey,
                                  encryptionKey: l.visaCheckout.encryptionKey,
                                  externalClientId: l.visaCheckout.externalClientId,
                                  supportedCardTypes: a(l.visaCheckout.supportedCardBrands, o.visaCheckout)
                              }),
                          l.masterpass &&
                              (d.masterpass = {
                                  merchantCheckoutId: l.masterpass.merchantCheckoutId,
                                  supportedNetworks: a(l.masterpass.supportedCardBrands, o.masterpass)
                              }),
                          l.usBankAccount &&
                              (d.usBankAccount = {
                                  routeId: l.usBankAccount.routeId,
                                  plaid: { publicKey: l.usBankAccount.plaidPublicKey }
                              }),
                          d)
                        : r(e);
                };
            },
            {
                '../../../../lib/assign': 140,
                './error': 102
            }
        ],
        100: [
            function (e, t, n) {
                var r = e('./error'),
                    i = {
                        AMERICAN_EXPRESS: 'American Express',
                        DINERS: 'Discover',
                        DISCOVER: 'Discover',
                        ELO: 'Elo',
                        HIPER: 'Hiper',
                        HIPERCARD: 'Hipercard',
                        INTERNATIONAL_MAESTRO: 'Maestro',
                        JCB: 'JCB',
                        MASTERCARD: 'MasterCard',
                        UK_MAESTRO: 'Maestro',
                        UNION_PAY: 'UnionPay',
                        VISA: 'Visa'
                    },
                    o = {
                        YES: 'Yes',
                        NO: 'No',
                        UNKNOWN: 'Unknown'
                    },
                    a = { PSDTWO: 'psd2' };
                t.exports = function (e) {
                    var t, n, s, c, d, l, u;
                    return e.data && !e.errors
                        ? ((l = (d = (c = e.data.tokenizeCreditCardForPayPalConnect).paymentMethod.details).last4 ? d.last4.substr(2, 4) : ''),
                          (u = d.binData) &&
                              (['commercial', 'debit', 'durbinRegulated', 'healthcare', 'payroll', 'prepaid'].forEach(function (e) {
                                  u[e] ? (u[e] = o[u[e]]) : (u[e] = 'Unknown');
                              }),
                              ['issuingBank', 'countryOfIssuance', 'productId'].forEach(function (e) {
                                  u[e] || (u[e] = 'Unknown');
                              })),
                          (n = {
                              creditCards: [
                                  {
                                      binData: u,
                                      consumed: !1,
                                      description: l ? 'ending in ' + l : '',
                                      nonce: c.paymentMethod.id,
                                      details: {
                                          cardholderName: d.cardholderName,
                                          expirationMonth: d.expirationMonth,
                                          expirationYear: d.expirationYear,
                                          bin: d.bin || '',
                                          cardType: i[d.brandCode] || 'Unknown',
                                          lastFour: d.last4 || '',
                                          lastTwo: l
                                      },
                                      type: 'CreditCard',
                                      threeDSecureInfo: null
                                  }
                              ]
                          }),
                          c.authenticationInsight && ((s = c.authenticationInsight.customerAuthenticationRegulationEnvironment), (n.creditCards[0].authenticationInsight = { regulationEnvironment: a[s] || s.toLowerCase() })),
                          n)
                        : r(e);
                };
            },
            { './error': 102 }
        ],
        101: [
            function (e, t, n) {
                var r = e('./error'),
                    i = {
                        AMERICAN_EXPRESS: 'American Express',
                        DINERS: 'Discover',
                        DISCOVER: 'Discover',
                        ELO: 'Elo',
                        HIPER: 'Hiper',
                        HIPERCARD: 'Hipercard',
                        INTERNATIONAL_MAESTRO: 'Maestro',
                        JCB: 'JCB',
                        MASTERCARD: 'MasterCard',
                        UK_MAESTRO: 'Maestro',
                        UNION_PAY: 'UnionPay',
                        VISA: 'Visa'
                    },
                    o = {
                        YES: 'Yes',
                        NO: 'No',
                        UNKNOWN: 'Unknown'
                    },
                    a = { PSDTWO: 'psd2' };
                t.exports = function (e) {
                    var t, n, s, c, d, l, u;
                    return e.data && !e.errors
                        ? ((l = (d = (c = e.data.tokenizeCreditCard).creditCard).last4 ? d.last4.substr(2, 4) : ''),
                          (u = d.binData) &&
                              (['commercial', 'debit', 'durbinRegulated', 'healthcare', 'payroll', 'prepaid'].forEach(function (e) {
                                  u[e] ? (u[e] = o[u[e]]) : (u[e] = 'Unknown');
                              }),
                              ['issuingBank', 'countryOfIssuance', 'productId'].forEach(function (e) {
                                  u[e] || (u[e] = 'Unknown');
                              })),
                          (n = {
                              creditCards: [
                                  {
                                      binData: u,
                                      consumed: !1,
                                      description: l ? 'ending in ' + l : '',
                                      nonce: c.token,
                                      details: {
                                          cardholderName: d.cardholderName,
                                          expirationMonth: d.expirationMonth,
                                          expirationYear: d.expirationYear,
                                          bin: d.bin || '',
                                          cardType: i[d.brandCode] || 'Unknown',
                                          lastFour: d.last4 || '',
                                          lastTwo: l
                                      },
                                      type: 'CreditCard',
                                      threeDSecureInfo: null
                                  }
                              ]
                          }),
                          c.authenticationInsight && ((s = c.authenticationInsight.customerAuthenticationRegulationEnvironment), (n.creditCards[0].authenticationInsight = { regulationEnvironment: a[s] || s.toLowerCase() })),
                          n)
                        : r(e);
                };
            },
            { './error': 102 }
        ],
        102: [
            function (e, t, n) {
                t.exports = function (e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a = e.errors && e.errors[0] && e.errors[0].extensions && e.errors[0].extensions.errorClass;
                    return 'VALIDATION' === a
                        ? 0 ===
                          (i =
                              ((n = (t = e).errors),
                              (r = []),
                              n.forEach(function (e) {
                                  e.extensions &&
                                      e.extensions.inputPath &&
                                      (function e(t, n, r) {
                                          var i,
                                              o = n.extensions.legacyCode,
                                              a = t[0];
                                          if (1 === t.length)
                                              return void r.push({
                                                  code: o,
                                                  field: a,
                                                  message: n.message
                                              });
                                          r.forEach(function (e) {
                                              e.field === a && (i = e);
                                          }),
                                              i ||
                                                  ((i = {
                                                      field: a,
                                                      fieldErrors: []
                                                  }),
                                                  r.push(i)),
                                              e(t.slice(1), n, i.fieldErrors);
                                      })(e.extensions.inputPath.slice(1), e, r);
                              }),
                              r)).length
                            ? { error: { message: t.errors[0].message } }
                            : {
                                  error: { message: { creditCard: 'Credit card is invalid' }[i[0].field] },
                                  fieldErrors: i
                              }
                        : a
                          ? {
                                error: { message: e.errors[0].message },
                                fieldErrors: []
                            }
                          : {
                                error: { message: 'There was a problem serving your request' },
                                fieldErrors: []
                            };
                };
            },
            {}
        ],
        103: [
            function (e, t, n) {
                t.exports = function () {
                    return {
                        query: 'query ClientConfiguration {   clientConfiguration {     analyticsUrl     environment     merchantId     assetsUrl     clientApiUrl     creditCard {       supportedCardBrands       challenges       threeDSecureEnabled       threeDSecure {         cardinalAuthenticationJWT       }     }     applePayWeb {       countryCode       currencyCode       merchantIdentifier       supportedCardBrands     }     fastlane {       enabled     }     googlePay {       displayName       supportedCardBrands       environment       googleAuthorization       paypalClientId     }     ideal {       routeId       assetsUrl     }     kount {       merchantId     }     masterpass {       merchantCheckoutId       supportedCardBrands     }     paypal {       displayName       clientId       assetsUrl       environment       environmentNoNetwork       unvettedMerchant       braintreeClientId       billingAgreementsEnabled       merchantAccountId       currencyCode       payeeEmail     }     unionPay {       merchantAccountId     }     usBankAccount {       routeId       plaidPublicKey     }     venmo {       merchantId       accessToken       environment       enrichedCustomerDataEnabled    }     visaCheckout {       apiKey       externalClientId       supportedCardBrands     }     braintreeApi {       accessToken       url     }     supportedFeatures   } }',
                        operationName: 'ClientConfiguration'
                    };
                };
            },
            {}
        ],
        104: [
            function (e, t, n) {
                var r = e('../../../../lib/assign').assign;
                t.exports = function (e) {
                    var t,
                        n,
                        i,
                        o,
                        a,
                        s,
                        c,
                        d,
                        l,
                        u,
                        p,
                        _,
                        E,
                        h,
                        m,
                        f,
                        y,
                        A,
                        T,
                        I,
                        N = { hasAuthenticationInsight: !!(e.authenticationInsight && e.merchantAccountId) };
                    return {
                        query: ((_ = N.hasAuthenticationInsight), (E = 'mutation TokenizeCreditCardForPayPalConnect($input: TokenizeCreditCardForPayPalConnectInput!'), _ && (E += ', $authenticationInsightInput: AuthenticationInsightInput!'), (E += ') {   tokenizeCreditCardForPayPalConnect(input: $input) {     clientMutationId     paymentMethod {       id       details {         ... on CreditCardDetails {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }         }       }     }'), _ && (E += '    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }'), (E += '  } }')),
                        variables:
                            ((m = (h = e.creditCard).fastlane || {}),
                            (f = 'fastlane' in h && 'termsAndConditionsVersion' in h.fastlane && h.fastlane.termsAndConditionsVersion),
                            (y = h.email),
                            (A = 'hasBuyerConsent' in m && m.hasBuyerConsent),
                            (T = h.shippingAddress),
                            (I = r(
                                {},
                                ((t = e),
                                (n = N),
                                (o = (i = t.creditCard) && i.billingAddress),
                                (a = i && i.expirationDate),
                                (s = i && (i.expirationMonth || (a && a.split('/')[0].trim()))),
                                (c = i && (i.expirationYear || (a && a.split('/')[1].trim()))),
                                (d = {
                                    input: {
                                        creditCard: {
                                            number: i && i.number,
                                            expirationMonth: s,
                                            expirationYear: c,
                                            cvv: i && i.cvv,
                                            cardholderName: i && i.cardholderName
                                        },
                                        options: {}
                                    }
                                }),
                                n.hasAuthenticationInsight && (d.authenticationInsightInput = { merchantAccountId: t.merchantAccountId }),
                                o && (d.input.creditCard.billingAddress = o),
                                (l = t),
                                (u = d.input),
                                l.creditCard && l.creditCard.options && 'boolean' == typeof l.creditCard.options.validate ? (p = l.creditCard.options.validate) : (l.authorizationFingerprint && l.tokenizationKey) || l.authorizationFingerprint ? (p = !0) : l.tokenizationKey && (p = !1),
                                'boolean' == typeof p && (u.options = r({ validate: p }, u.options)),
                                (d.input = u),
                                d).input,
                                {
                                    email: y,
                                    optIn: A,
                                    phone: h.phone,
                                    termsAndConditionsVersion: f
                                }
                            )),
                            'authAssertion' in m && (I.authAssertion = m.authAssertion),
                            T && (I.shippingAddress = T),
                            { input: I }),
                        operationName: 'TokenizeCreditCardForPayPalConnect'
                    };
                };
            },
            { '../../../../lib/assign': 140 }
        ],
        105: [
            function (e, t, n) {
                var r = e('../../../../lib/assign').assign;
                t.exports = function (e) {
                    var t,
                        n,
                        i,
                        o,
                        a,
                        s,
                        c,
                        d,
                        l,
                        u,
                        p,
                        _ = { hasAuthenticationInsight: !!(e.authenticationInsight && e.merchantAccountId) };
                    return {
                        query: ((o = _.hasAuthenticationInsight), (a = 'mutation TokenizeCreditCard($input: TokenizeCreditCardInput!'), o && (a += ', $authenticationInsightInput: AuthenticationInsightInput!'), (a += ') {   tokenizeCreditCard(input: $input) {     token     creditCard {       bin       brandCode       last4       cardholderName       expirationMonth      expirationYear      binData {         prepaid         healthcare         debit         durbinRegulated         commercial         payroll         issuingBank         countryOfIssuance         productId       }     } '), o && (a += '    authenticationInsight(input: $authenticationInsightInput) {      customerAuthenticationRegulationEnvironment    }'), (a += '  } }')),
                        variables:
                            ((c = (s = e.creditCard) && s.billingAddress),
                            (d = s && s.expirationDate),
                            (l = s && (s.expirationMonth || (d && d.split('/')[0].trim()))),
                            (u = s && (s.expirationYear || (d && d.split('/')[1].trim()))),
                            (p = {
                                input: {
                                    creditCard: {
                                        number: s && s.number,
                                        expirationMonth: l,
                                        expirationYear: u,
                                        cvv: s && s.cvv,
                                        cardholderName: s && s.cardholderName
                                    },
                                    options: {}
                                }
                            }),
                            _.hasAuthenticationInsight && (p.authenticationInsightInput = { merchantAccountId: e.merchantAccountId }),
                            c && (p.input.creditCard.billingAddress = c),
                            (t = e),
                            (n = p.input),
                            t.creditCard && t.creditCard.options && 'boolean' == typeof t.creditCard.options.validate ? (i = t.creditCard.options.validate) : (t.authorizationFingerprint && t.tokenizationKey) || t.authorizationFingerprint ? (i = !0) : t.tokenizationKey && (i = !1),
                            'boolean' == typeof i && (n.options = r({ validate: i }, n.options)),
                            (p.input = n),
                            p),
                        operationName: 'TokenizeCreditCard'
                    };
                };
            },
            { '../../../../lib/assign': 140 }
        ],
        106: [
            function (e, t, n) {
                var r = {
                        tokenize_credit_cards: 'payment_methods/credit_cards',
                        configuration: 'configuration'
                    },
                    i = ['creditCard.options.unionPayEnrollment'];
                function o(e) {
                    this._config = e.graphQL;
                }
                (o.prototype.getGraphQLEndpoint = function () {
                    return this._config.url;
                }),
                    (o.prototype.isGraphQLRequest = function (e, t) {
                        var n,
                            o,
                            a = this.getClientApiPath(e);
                        return (
                            !!this._isGraphQLEnabled() &&
                            !!a &&
                            ((o = this._config.features.some(function (e) {
                                return r[e] === a;
                            })),
                            (n = t),
                            !i.some(function (e) {
                                return (
                                    void 0 !==
                                    e.split('.').reduce(function (e, t) {
                                        return e && e[t];
                                    }, n)
                                );
                            }) && o)
                        );
                    }),
                    (o.prototype.getClientApiPath = function (e) {
                        var t,
                            n = e.split('/client_api/v1/');
                        return n.length > 1 && (t = n[1].split('?')[0]), t;
                    }),
                    (o.prototype._isGraphQLEnabled = function () {
                        return !!this._config;
                    }),
                    (t.exports = o);
            },
            {}
        ],
        107: [
            function (e, t, n) {
                var r = e('../../constants').BRAINTREE_VERSION,
                    i = e('../../../lib/assign').assign,
                    o = e('../../../lib/snake-case-to-camel-case'),
                    a = e('../../../lib/is-fastlane-checkout'),
                    s = e('./generators/credit-card-tokenization'),
                    c = e('./adapters/credit-card-tokenization'),
                    d = e('./adapters/credit-card-tokenization-fastlane'),
                    l = e('./generators/credit-card-for-fastlane-tokenization'),
                    u = e('./generators/configuration'),
                    p = e('./adapters/configuration'),
                    _ = {
                        'payment_methods/credit_cards': function (e, t) {
                            return t ? l(e) : s(e);
                        },
                        configuration: u
                    },
                    E = {
                        'payment_methods/credit_cards': function (e, t, n) {
                            return n ? d(e, t) : c(e, t);
                        },
                        configuration: p
                    };
                function h(e) {
                    var t = e.graphQL.getClientApiPath(e.url);
                    (this._graphQL = e.graphQL),
                        (this._data = e.data),
                        (this._method = e.method),
                        (this._headers = e.headers),
                        (this._clientSdkMetadata = {
                            source: e.metadata.source,
                            integration: e.metadata.integration,
                            sessionId: e.metadata.sessionId
                        }),
                        (this._sendAnalyticsEvent = e.sendAnalyticsEvent || Function.prototype),
                        (this._generator = _[t]),
                        (this._adapter = E[t]),
                        this._sendAnalyticsEvent('graphql.init');
                }
                (h.prototype.getUrl = function () {
                    return this._graphQL.getGraphQLEndpoint();
                }),
                    (h.prototype.getBody = function () {
                        var e = (function e(t) {
                                var n = {};
                                return (
                                    Object.keys(t).forEach(function (r) {
                                        var i = o(r);
                                        'object' == typeof t[r] ? (n[i] = e(t[r])) : 'number' == typeof t[r] ? (n[i] = String(t[r])) : (n[i] = t[r]);
                                    }),
                                    n
                                );
                            })(this._data),
                            t = this._generator(e, a(this._data.creditCard));
                        return JSON.stringify(i({ clientSdkMetadata: this._clientSdkMetadata }, t));
                    }),
                    (h.prototype.getMethod = function () {
                        return 'POST';
                    }),
                    (h.prototype.getHeaders = function () {
                        var e, t;
                        return (
                            this._data.authorizationFingerprint ? (this._sendAnalyticsEvent('graphql.authorization-fingerprint'), (e = this._data.authorizationFingerprint)) : (this._sendAnalyticsEvent('graphql.tokenization-key'), (e = this._data.tokenizationKey)),
                            (t = {
                                Authorization: 'Bearer ' + e,
                                'Braintree-Version': r
                            }),
                            i({}, this._headers, t)
                        );
                    }),
                    (h.prototype.adaptResponseBody = function (e) {
                        return this._adapter(e, this, 'creditCard' in this._data && a(this._data.creditCard));
                    }),
                    (h.prototype.determineStatus = function (e, t) {
                        var n, r, i, o;
                        return 200 === e ? ((r = t.errors && t.errors[0] && t.errors[0].extensions && t.errors[0].extensions.errorClass), (n = t.data && !t.errors ? 200 : 'VALIDATION' === r ? 422 : 'AUTHORIZATION' === r ? 403 : 'AUTHENTICATION' === r ? 401 : ((i = r), (o = t), !i && o.errors[0].message) ? 403 : 500)) : (n = e || 500), this._sendAnalyticsEvent('graphql.status.' + e), this._sendAnalyticsEvent('graphql.determinedStatus.' + n), n;
                    }),
                    (t.exports = h);
            },
            {
                '../../../lib/assign': 140,
                '../../../lib/is-fastlane-checkout': 171,
                '../../../lib/snake-case-to-camel-case': 179,
                '../../constants': 93,
                './adapters/configuration': 99,
                './adapters/credit-card-tokenization': 101,
                './adapters/credit-card-tokenization-fastlane': 100,
                './generators/configuration': 103,
                './generators/credit-card-for-fastlane-tokenization': 104,
                './generators/credit-card-tokenization': 105
            }
        ],
        108: [
            function (e, t, n) {
                var r = e('../../lib/once'),
                    i = e('./ajax-driver');
                t.exports = function (e, t) {
                    (t = r(t || Function.prototype)), (e.method = (e.method || 'GET').toUpperCase()), (e.timeout = null == e.timeout ? 60000 : e.timeout), (e.data = e.data || {}), i.request(e, t);
                };
            },
            {
                '../../lib/once': 176,
                './ajax-driver': 97
            }
        ],
        109: [
            function (e, t, n) {
                t.exports = function (e) {
                    try {
                        e = JSON.parse(e);
                    } catch (e) {}
                    return e;
                };
            },
            {}
        ],
        110: [
            function (e, t, n) {
                t.exports = function (e, t) {
                    if ('string' != typeof e) throw Error('Method must be a string');
                    return 'get' !== e.toLowerCase() && null != t && (t = 'string' == typeof t ? t : JSON.stringify(t)), t;
                };
            },
            {}
        ],
        111: [
            function (e, t, n) {
                var r = 'undefined' != typeof window && window.XMLHttpRequest && 'withCredentials' in new window.XMLHttpRequest();
                t.exports = {
                    isAvailable: r,
                    getRequestObject: function () {
                        return r ? new window.XMLHttpRequest() : new window.XDomainRequest();
                    }
                };
            },
            {}
        ],
        112: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    DATA_COLLECTOR_KOUNT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'DATA_COLLECTOR_KOUNT_NOT_ENABLED',
                        message: 'Kount is not enabled for this merchant.'
                    },
                    DATA_COLLECTOR_KOUNT_ERROR: {
                        type: r.types.MERCHANT,
                        code: 'DATA_COLLECTOR_KOUNT_ERROR'
                    },
                    DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS: {
                        type: r.types.MERCHANT,
                        code: 'DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS',
                        message: 'Data Collector must be created with Kount and/or PayPal.'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        113: [
            function (e, t, n) {
                var r,
                    i = e('../lib/constants').FRAUDNET_FNCLS,
                    o = e('../lib/constants').FRAUDNET_SOURCE,
                    a = e('../lib/constants').FRAUDNET_URL,
                    s = e('../lib/assets').loadScript;
                function c() {}
                function d(e) {
                    e && e.parentNode && e.parentNode.removeChild(e);
                }
                (c.prototype.initialize = function (e) {
                    var t,
                        n,
                        c,
                        d,
                        l,
                        u = e.environment,
                        p = this;
                    return (
                        (this.sessionId = e.sessionId || e.clientSessionId),
                        this.sessionId && (this.sessionId = this.sessionId.substring(0, 32)),
                        e.sessionId || (r = this.sessionId),
                        (this._beaconId = 'https://b.stats.paypal.com/counter.cgi?i=127.0.0.1&p=' + this.sessionId + '&t=' + new Date().getTime() / 1000 + '&a=14'),
                        (this._parameterBlock =
                            ((t = this.sessionId),
                            (n = this._beaconId),
                            (c = u),
                            (d = document.body.appendChild(document.createElement('script'))),
                            (l = {
                                f: t,
                                s: o,
                                b: n
                            }),
                            'production' !== c && (l.sandbox = !0),
                            (d.type = 'application/json'),
                            d.setAttribute('fncls', i),
                            (d.text = JSON.stringify(l)),
                            d)),
                        s({ src: a })
                            .then(function (e) {
                                return (p._thirdPartyBlock = e), p;
                            })
                            .catch(function () {
                                return null;
                            })
                    );
                }),
                    (c.prototype.teardown = function () {
                        d(document.querySelector('iframe[title="ppfniframe"]')), d(document.querySelector('iframe[title="pbf"]')), d(this._parameterBlock), d(this._thirdPartyBlock);
                    }),
                    (t.exports = {
                        setup: function (e) {
                            var t = new c();
                            return !(e = e || {}).sessionId && r ? ((t.sessionId = r), Promise.resolve(t)) : t.initialize(e);
                        },
                        clearSessionIdCache: function () {
                            r = null;
                        }
                    });
            },
            {
                '../lib/assets': 139,
                '../lib/constants': 145
            }
        ],
        114: [
            function (e, t, n) {
                var r = e('./kount'),
                    i = e('./fraudnet'),
                    o = e('../lib/braintree-error'),
                    a = e('../lib/basic-component-verification'),
                    s = e('../lib/create-deferred-client'),
                    c = e('../lib/create-assets-url'),
                    d = e('../lib/methods'),
                    l = e('../lib/convert-methods-to-error'),
                    u = e('@braintree/wrap-promise'),
                    p = e('./errors');
                t.exports = {
                    create: u(function (e) {
                        var t,
                            n = 'Data Collector',
                            _ = { _instances: [] };
                        return a
                            .verify({
                                name: n,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                var a, E;
                                return ((_._instantiatedWithAClient = !e.useDeferredClient),
                                (_._createPromise = s
                                    .create({
                                        authorization: e.authorization,
                                        client: e.client,
                                        debug: e.debug,
                                        assetsUrl: c.create(e.authorization),
                                        name: n
                                    })
                                    .then(function (n) {
                                        var i,
                                            a = n.getConfiguration();
                                        if (!0 === e.kount && a.gatewayConfiguration.kount) {
                                            try {
                                                i = r.setup({
                                                    environment: a.gatewayConfiguration.environment,
                                                    merchantId: a.gatewayConfiguration.kount.kountMerchantId
                                                });
                                            } catch (e) {
                                                return Promise.reject(
                                                    new o({
                                                        type: p.DATA_COLLECTOR_KOUNT_ERROR.type,
                                                        code: p.DATA_COLLECTOR_KOUNT_ERROR.code,
                                                        message: e.message
                                                    })
                                                );
                                            }
                                            (t = i.deviceData), _._instances.push(i);
                                        } else t = {};
                                        return Promise.resolve(n);
                                    })
                                    .then(function (n) {
                                        var r = n.getConfiguration();
                                        return i
                                            .setup({
                                                sessionId: e.riskCorrelationId || e.clientMetadataId || e.correlationId,
                                                clientSessionId: r.analyticsMetadata.sessionId,
                                                environment: r.gatewayConfiguration.environment
                                            })
                                            .then(function (e) {
                                                e && ((t.correlation_id = e.sessionId), _._instances.push(e));
                                            });
                                    })
                                    .then(function () {
                                        return 0 === _._instances.length ? Promise.reject(new o(p.DATA_COLLECTOR_REQUIRES_CREATE_OPTIONS)) : ((_.deviceData = JSON.stringify(t)), (_.rawDeviceData = t), _);
                                    })),
                                (a = _),
                                (_.teardown = u(function () {
                                    return a._createPromise.then(function () {
                                        a._instances.forEach(function (e) {
                                            e && e.teardown();
                                        }),
                                            l(a, d(a));
                                    });
                                })),
                                (E = _),
                                (_.getDeviceData = u(function (e) {
                                    return (
                                        (e = e || {}),
                                        E._createPromise.then(function () {
                                            return e.raw ? Promise.resolve(E.rawDeviceData) : Promise.resolve(E.deviceData);
                                        })
                                    );
                                })),
                                _._instantiatedWithAClient)
                                    ? _._createPromise
                                    : _;
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                '../lib/methods': 175,
                './errors': 112,
                './fraudnet': 113,
                './kount': 115,
                '@braintree/wrap-promise': 40
            }
        ],
        115: [
            function (e, t, n) {
                var r = e('./vendor/sjcl'),
                    i = e('../lib/camel-case-to-snake-case'),
                    o = 'https://assets.qa.braintreepayments.com/data',
                    a = {
                        development: o,
                        qa: o,
                        sandbox: 'https://assets.braintreegateway.com/sandbox/data',
                        production: 'https://assets.braintreegateway.com/data'
                    },
                    s = {};
                function c(e) {
                    var t = c.getCachedDeviceData(e.merchantId);
                    if (t) {
                        (this.deviceData = t), (this._isCached = !0);
                        return;
                    }
                    (this._currentEnvironment = this._initializeEnvironment(e)), r.random.startCollectors(), (this._deviceSessionId = this._generateDeviceSessionId()), (this.deviceData = this._getDeviceData()), c.setCachedDeviceData(e.merchantId, this.deviceData), (this._iframe = this._setupIFrame());
                }
                (c.getCachedDeviceData = function (e) {
                    return s[e];
                }),
                    (c.setCachedDeviceData = function (e, t) {
                        s[e] = t;
                    }),
                    (c.prototype.teardown = function () {
                        this._isCached || (r.random.stopCollectors(), this._removeIframe());
                    }),
                    (c.prototype._removeIframe = function () {
                        this._iframe.parentNode.removeChild(this._iframe);
                    }),
                    (c.prototype._getDeviceData = function () {
                        return i({
                            deviceSessionId: this._deviceSessionId,
                            fraudMerchantId: this._currentEnvironment.id
                        });
                    }),
                    (c.prototype._generateDeviceSessionId = function () {
                        var e;
                        return (e = r.random.randomWords(4, 0)), r.codec.hex.fromBits(e);
                    }),
                    (c.prototype._setupIFrame = function () {
                        var e,
                            t,
                            n = this;
                        return (
                            (e = '?m=' + this._currentEnvironment.id + '&s=' + this._deviceSessionId),
                            ((t = document.createElement('iframe')).width = 1),
                            (t.id = 'braintreeDataFrame-' + this._deviceSessionId),
                            (t.height = 1),
                            (t.frameBorder = 0),
                            (t.scrolling = 'no'),
                            (t.style.position = 'fixed'),
                            (t.style.left = '-999999px'),
                            (t.style.top = '-999999px'),
                            (t.title = 'Braintree-Kount-iframe'),
                            t.setAttribute('aria-hidden', 'true'),
                            document.body.appendChild(t),
                            setTimeout(function () {
                                (t.src = n._currentEnvironment.url + '/logo.htm' + e), (t.innerHTML = '<img src="' + n._currentEnvironment.url + '/logo.gif' + e + '" alt="" />');
                            }, 10),
                            t
                        );
                    }),
                    (c.prototype._initializeEnvironment = function (e) {
                        var t = a[e.environment];
                        if (null == t) throw Error(e.environment + ' is not a valid environment for kount.environment');
                        return {
                            url: t,
                            name: e.environment,
                            id: e.merchantId
                        };
                    }),
                    (t.exports = {
                        setup: function (e) {
                            return new c(null != e ? e : {});
                        },
                        Kount: c,
                        environmentUrls: a
                    });
            },
            {
                '../lib/camel-case-to-snake-case': 144,
                './vendor/sjcl': 116
            }
        ],
        116: [
            function (e, n, r) {
                var i,
                    o,
                    a,
                    s,
                    c,
                    d = {
                        cipher: {},
                        hash: {},
                        keyexchange: {},
                        mode: {},
                        misc: {},
                        codec: {},
                        exception: {
                            corrupt: function (e) {
                                (this.toString = function () {
                                    return 'CORRUPT: ' + this.message;
                                }),
                                    (this.message = e);
                            },
                            invalid: function (e) {
                                (this.toString = function () {
                                    return 'INVALID: ' + this.message;
                                }),
                                    (this.message = e);
                            },
                            bug: function (e) {
                                (this.toString = function () {
                                    return 'BUG: ' + this.message;
                                }),
                                    (this.message = e);
                            },
                            notReady: function (e) {
                                (this.toString = function () {
                                    return 'NOT READY: ' + this.message;
                                }),
                                    (this.message = e);
                            }
                        }
                    };
                function l(e, t, n) {
                    if (4 !== t.length) throw new d.exception.invalid('invalid aes block size');
                    var r = e.b[n],
                        i = t[0] ^ r[0],
                        o = t[n ? 3 : 1] ^ r[1],
                        a = t[2] ^ r[2];
                    t = t[n ? 1 : 3] ^ r[3];
                    var s,
                        c,
                        l,
                        u,
                        p = r.length / 4 - 2,
                        _ = 4,
                        E = [0, 0, 0, 0];
                    e = (s = e.l[n])[0];
                    var h = s[1],
                        m = s[2],
                        f = s[3],
                        y = s[4];
                    for (u = 0; u < p; u++) (s = e[i >>> 24] ^ h[(o >> 16) & 255] ^ m[(a >> 8) & 255] ^ f[255 & t] ^ r[_]), (c = e[o >>> 24] ^ h[(a >> 16) & 255] ^ m[(t >> 8) & 255] ^ f[255 & i] ^ r[_ + 1]), (l = e[a >>> 24] ^ h[(t >> 16) & 255] ^ m[(i >> 8) & 255] ^ f[255 & o] ^ r[_ + 2]), (t = e[t >>> 24] ^ h[(i >> 16) & 255] ^ m[(o >> 8) & 255] ^ f[255 & a] ^ r[_ + 3]), (_ += 4), (i = s), (o = c), (a = l);
                    for (u = 0; 4 > u; u++) (E[n ? 3 & -u : u] = (y[i >>> 24] << 24) ^ (y[(o >> 16) & 255] << 16) ^ (y[(a >> 8) & 255] << 8) ^ y[255 & t] ^ r[_++]), (s = i), (i = o), (o = a), (a = t), (t = s);
                    return E;
                }
                function u(e, t) {
                    var n,
                        r,
                        i,
                        o = e.u,
                        a = e.b,
                        s = o[0],
                        c = o[1],
                        d = o[2],
                        l = o[3],
                        u = o[4],
                        p = o[5],
                        _ = o[6],
                        E = o[7];
                    for (n = 0; 64 > n; n++) 16 > n ? (r = t[n]) : ((r = t[(n + 1) & 15]), (i = t[(n + 14) & 15]), (r = t[15 & n] = (((r >>> 7) ^ (r >>> 18) ^ (r >>> 3) ^ (r << 25) ^ (r << 14)) + ((i >>> 17) ^ (i >>> 19) ^ (i >>> 10) ^ (i << 15) ^ (i << 13)) + t[15 & n] + t[(n + 9) & 15]) | 0)), (r = r + E + ((u >>> 6) ^ (u >>> 11) ^ (u >>> 25) ^ (u << 26) ^ (u << 21) ^ (u << 7)) + (_ ^ (u & (p ^ _))) + a[n]), (E = _), (_ = p), (p = u), (u = (l + r) | 0), (l = d), (d = c), (s = (r + (((c = s) & d) ^ (l & (c ^ d))) + ((c >>> 2) ^ (c >>> 13) ^ (c >>> 22) ^ (c << 30) ^ (c << 19) ^ (c << 10))) | 0);
                    (o[0] = (o[0] + s) | 0), (o[1] = (o[1] + c) | 0), (o[2] = (o[2] + d) | 0), (o[3] = (o[3] + l) | 0), (o[4] = (o[4] + u) | 0), (o[5] = (o[5] + p) | 0), (o[6] = (o[6] + _) | 0), (o[7] = (o[7] + E) | 0);
                }
                function p(e, t) {
                    var n,
                        r = d.random.B[e],
                        i = [];
                    for (n in r) r.hasOwnProperty(n) && i.push(r[n]);
                    for (n = 0; n < i.length; n++) i[n](t);
                }
                function _(e, t) {
                    'undefined' != typeof window && window.performance && 'function' == typeof window.performance.now ? e.addEntropy(window.performance.now(), t, 'loadtime') : e.addEntropy(new Date().valueOf(), t, 'loadtime');
                }
                function E(e) {
                    (e.b = h(e).concat(h(e))), (e.C = new d.cipher.aes(e.b));
                }
                function h(e) {
                    for (var t = 0; 4 > t && ((e.g[t] = (e.g[t] + 1) | 0), !e.g[t]); t++);
                    return e.C.encrypt(e.g);
                }
                function m(e, t) {
                    return function () {
                        t.apply(e, arguments);
                    };
                }
                (d.cipher.aes = function (e) {
                    this.l[0][0][0] || this.G();
                    var t,
                        n,
                        r,
                        i,
                        o = this.l[0][4],
                        a = this.l[1];
                    t = e.length;
                    var s = 1;
                    if (4 !== t && 6 !== t && 8 !== t) throw new d.exception.invalid('invalid aes key size');
                    for (this.b = [(r = e.slice(0)), (i = [])], e = t; e < 4 * t + 28; e++) (n = r[e - 1]), (0 == e % t || (8 === t && 4 == e % t)) && ((n = (o[n >>> 24] << 24) ^ (o[(n >> 16) & 255] << 16) ^ (o[(n >> 8) & 255] << 8) ^ o[255 & n]), 0 == e % t && ((n = (n << 8) ^ (n >>> 24) ^ (s << 24)), (s = (s << 1) ^ (283 * (s >> 7))))), (r[e] = r[e - t] ^ n);
                    for (t = 0; e; t++, e--) (n = r[3 & t ? e : e - 4]), (i[t] = 4 >= e || 4 > t ? n : a[0][o[n >>> 24]] ^ a[1][o[(n >> 16) & 255]] ^ a[2][o[(n >> 8) & 255]] ^ a[3][o[255 & n]]);
                }),
                    (d.cipher.aes.prototype = {
                        encrypt: function (e) {
                            return l(this, e, 0);
                        },
                        decrypt: function (e) {
                            return l(this, e, 1);
                        },
                        l: [
                            [[], [], [], [], []],
                            [[], [], [], [], []]
                        ],
                        G: function () {
                            var e,
                                t,
                                n,
                                r,
                                i,
                                o,
                                a,
                                s = this.l[0],
                                c = this.l[1],
                                d = s[4],
                                l = c[4],
                                u = [],
                                p = [];
                            for (e = 0; 256 > e; e++) p[(u[e] = (e << 1) ^ (283 * (e >> 7))) ^ e] = e;
                            for (t = n = 0; !d[t]; t ^= r || 1, n = p[n] || 1) for (o = ((o = n ^ (n << 1) ^ (n << 2) ^ (n << 3) ^ (n << 4)) >> 8) ^ (255 & o) ^ 99, d[t] = o, l[o] = t, a = (16843009 * (i = u[(e = u[(r = u[t])])])) ^ (65537 * e) ^ (257 * r) ^ (16843008 * t), i = (257 * u[o]) ^ (16843008 * o), e = 0; 4 > e; e++) (s[e][t] = i = (i << 24) ^ (i >>> 8)), (c[e][o] = a = (a << 24) ^ (a >>> 8));
                            for (e = 0; 5 > e; e++) (s[e] = s[e].slice(0)), (c[e] = c[e].slice(0));
                        }
                    }),
                    (d.bitArray = {
                        bitSlice: function (e, t, n) {
                            return (e = d.bitArray.M(e.slice(t / 32), 32 - (31 & t)).slice(1)), void 0 === n ? e : d.bitArray.clamp(e, n - t);
                        },
                        extract: function (e, t, n) {
                            var r = Math.floor((-t - n) & 31);
                            return (((t + n - 1) ^ t) & -32 ? (e[(t / 32) | 0] << (32 - r)) ^ (e[(t / 32 + 1) | 0] >>> r) : e[(t / 32) | 0] >>> r) & ((1 << n) - 1);
                        },
                        concat: function (e, t) {
                            if (0 === e.length || 0 === t.length) return e.concat(t);
                            var n = e[e.length - 1],
                                r = d.bitArray.getPartial(n);
                            return 32 === r ? e.concat(t) : d.bitArray.M(t, r, 0 | n, e.slice(0, e.length - 1));
                        },
                        bitLength: function (e) {
                            var t = e.length;
                            return 0 === t ? 0 : 32 * (t - 1) + d.bitArray.getPartial(e[t - 1]);
                        },
                        clamp: function (e, t) {
                            if (32 * e.length < t) return e;
                            var n = (e = e.slice(0, Math.ceil(t / 32))).length;
                            return (t &= 31), 0 < n && t && (e[n - 1] = d.bitArray.partial(t, e[n - 1] & (2147483648 >> (t - 1)), 1)), e;
                        },
                        partial: function (e, t, n) {
                            return 32 === e ? t : (n ? 0 | t : t << (32 - e)) + 1099511627776 * e;
                        },
                        getPartial: function (e) {
                            return Math.round(e / 1099511627776) || 32;
                        },
                        equal: function (e, t) {
                            if (d.bitArray.bitLength(e) !== d.bitArray.bitLength(t)) return !1;
                            var n,
                                r = 0;
                            for (n = 0; n < e.length; n++) r |= e[n] ^ t[n];
                            return 0 === r;
                        },
                        M: function (e, t, n, r) {
                            var i;
                            for (i = 0, void 0 === r && (r = []); 32 <= t; t -= 32) r.push(n), (n = 0);
                            if (0 === t) return r.concat(e);
                            for (i = 0; i < e.length; i++) r.push(n | (e[i] >>> t)), (n = e[i] << (32 - t));
                            return (i = e.length ? e[e.length - 1] : 0), (e = d.bitArray.getPartial(i)), r.push(d.bitArray.partial((t + e) & 31, 32 < t + e ? n : r.pop(), 1)), r;
                        },
                        Y: function (e, t) {
                            return [e[0] ^ t[0], e[1] ^ t[1], e[2] ^ t[2], e[3] ^ t[3]];
                        },
                        byteswapM: function (e) {
                            var t, n;
                            for (t = 0; t < e.length; ++t) (n = e[t]), (e[t] = (n >>> 24) | ((n >>> 8) & 65280) | ((65280 & n) << 8) | (n << 24));
                            return e;
                        }
                    }),
                    (d.codec.utf8String = {
                        fromBits: function (e) {
                            var t,
                                n,
                                r = '',
                                i = d.bitArray.bitLength(e);
                            for (t = 0; t < i / 8; t++) 0 == (3 & t) && (n = e[t / 4]), (r += String.fromCharCode(((n >>> 8) >>> 8) >>> 8)), (n <<= 8);
                            return decodeURIComponent(escape(r));
                        },
                        toBits: function (e) {
                            e = unescape(encodeURIComponent(e));
                            var t,
                                n = [],
                                r = 0;
                            for (t = 0; t < e.length; t++) (r = (r << 8) | e.charCodeAt(t)), 3 == (3 & t) && (n.push(r), (r = 0));
                            return 3 & t && n.push(d.bitArray.partial(8 * (3 & t), r)), n;
                        }
                    }),
                    (d.codec.hex = {
                        fromBits: function (e) {
                            var t,
                                n = '';
                            for (t = 0; t < e.length; t++) n += ((0 | e[t]) + 263882790666240).toString(16).substr(4);
                            return n.substr(0, d.bitArray.bitLength(e) / 4);
                        },
                        toBits: function (e) {
                            var t,
                                n,
                                r = [];
                            for (n = (e = e.replace(/\s|0x/g, '')).length, e += '00000000', t = 0; t < e.length; t += 8) r.push(0 ^ parseInt(e.substr(t, 8), 16));
                            return d.bitArray.clamp(r, 4 * n);
                        }
                    }),
                    (d.hash.sha256 = function (e) {
                        this.b[0] || this.G(), e ? ((this.u = e.u.slice(0)), (this.o = e.o.slice(0)), (this.h = e.h)) : this.reset();
                    }),
                    (d.hash.sha256.hash = function (e) {
                        return new d.hash.sha256().update(e).finalize();
                    }),
                    (d.hash.sha256.prototype = {
                        blockSize: 512,
                        reset: function () {
                            return (this.u = this.K.slice(0)), (this.o = []), (this.h = 0), this;
                        },
                        update: function (e) {
                            'string' == typeof e && (e = d.codec.utf8String.toBits(e));
                            var t,
                                n = (this.o = d.bitArray.concat(this.o, e));
                            if (((t = this.h), 9007199254740991 < (e = this.h = t + d.bitArray.bitLength(e)))) throw new d.exception.invalid('Cannot hash more than 2^53 - 1 bits');
                            if ('undefined' != typeof Uint32Array) {
                                var r = new Uint32Array(n),
                                    i = 0;
                                for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512) u(this, r.subarray(16 * i, 16 * (i + 1))), (i += 1);
                                n.splice(0, 16 * i);
                            } else for (t = 512 + t - ((512 + t) & 511); t <= e; t += 512) u(this, n.splice(0, 16));
                            return this;
                        },
                        finalize: function () {
                            var e,
                                t = this.o,
                                n = this.u,
                                t = d.bitArray.concat(t, [d.bitArray.partial(1, 1)]);
                            for (e = t.length + 2; 15 & e; e++) t.push(0);
                            for (t.push(Math.floor(this.h / 4294967296)), t.push(0 | this.h); t.length; ) u(this, t.splice(0, 16));
                            return this.reset(), n;
                        },
                        K: [],
                        b: [],
                        G: function () {
                            function e(e) {
                                return (4294967296 * (e - Math.floor(e))) | 0;
                            }
                            for (var t, n, r = 0, i = 2; 64 > r; i++) {
                                for (t = 2, n = !0; t * t <= i; t++)
                                    if (0 == i % t) {
                                        n = !1;
                                        break;
                                    }
                                n && (8 > r && (this.K[r] = e(Math.pow(i, 0.5))), (this.b[r] = e(Math.pow(i, 1 / 3))), r++);
                            }
                        }
                    }),
                    (d.prng = function (e) {
                        (this.c = [new d.hash.sha256()]),
                            (this.i = [0]),
                            (this.H = 0),
                            (this.v = {}),
                            (this.F = 0),
                            (this.J = {}),
                            (this.L = this.f = this.j = this.T = 0),
                            (this.b = [0, 0, 0, 0, 0, 0, 0, 0]),
                            (this.g = [0, 0, 0, 0]),
                            (this.C = void 0),
                            (this.D = e),
                            (this.s = !1),
                            (this.B = {
                                progress: {},
                                seeded: {}
                            }),
                            (this.m = this.S = 0),
                            (this.w = 1),
                            (this.A = 2),
                            (this.O = 65536),
                            (this.I = [0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024]),
                            (this.P = 30000),
                            (this.N = 80);
                    }),
                    (d.prng.prototype = {
                        randomWords: function (e, t) {
                            var n,
                                r = [];
                            if ((n = this.isReady(t)) === this.m) throw new d.exception.notReady("generator isn't seeded");
                            if (n & this.A) {
                                n = !(n & this.w);
                                var i,
                                    o = [],
                                    a = 0;
                                for (i = 0, this.L = o[0] = new Date().valueOf() + this.P; 16 > i; i++) o.push((4294967296 * Math.random()) | 0);
                                for (i = 0; i < this.c.length && ((o = o.concat(this.c[i].finalize())), (a += this.i[i]), (this.i[i] = 0), n || !(this.H & (1 << i))); i++);
                                for (this.H >= 1 << this.c.length && (this.c.push(new d.hash.sha256()), this.i.push(0)), this.f -= a, a > this.j && (this.j = a), this.H++, this.b = d.hash.sha256.hash(this.b.concat(o)), this.C = new d.cipher.aes(this.b), n = 0; 4 > n && ((this.g[n] = (this.g[n] + 1) | 0), !this.g[n]); n++);
                            }
                            for (n = 0; n < e; n += 4) 0 == (n + 1) % this.O && E(this), r.push((o = h(this))[0], o[1], o[2], o[3]);
                            return E(this), r.slice(0, e);
                        },
                        setDefaultParanoia: function (e, t) {
                            if (0 === e && 'Setting paranoia=0 will ruin your security; use it only for testing' !== t) throw new d.exception.invalid('Setting paranoia=0 will ruin your security; use it only for testing');
                            this.D = e;
                        },
                        addEntropy: function (e, t, n) {
                            n = n || 'user';
                            var r,
                                i,
                                o = new Date().valueOf(),
                                a = this.v[n],
                                s = this.isReady(),
                                c = 0;
                            switch ((void 0 === (r = this.J[n]) && (r = this.J[n] = this.T++), void 0 === a && (a = this.v[n] = 0), (this.v[n] = (this.v[n] + 1) % this.c.length), typeof e)) {
                                case 'number':
                                    void 0 === t && (t = 1), this.c[a].update([r, this.F++, 1, t, o, 1, 0 | e]);
                                    break;
                                case 'object':
                                    if ('[object Uint32Array]' === (n = Object.prototype.toString.call(e))) {
                                        for (n = 0, i = []; n < e.length; n++) i.push(e[n]);
                                        e = i;
                                    } else for ('[object Array]' !== n && (c = 1), n = 0; n < e.length && !c; n++) 'number' != typeof e[n] && (c = 1);
                                    if (!c) {
                                        if (void 0 === t) for (n = t = 0; n < e.length; n++) for (i = e[n]; 0 < i; ) t++, (i >>>= 1);
                                        this.c[a].update([r, this.F++, 2, t, o, e.length].concat(e));
                                    }
                                    break;
                                case 'string':
                                    void 0 === t && (t = e.length), this.c[a].update([r, this.F++, 3, t, o, e.length]), this.c[a].update(e);
                                    break;
                                default:
                                    c = 1;
                            }
                            if (c) throw new d.exception.bug('random: addEntropy only supports number, array of numbers or string');
                            (this.i[a] += t), (this.f += t), s === this.m && (this.isReady() !== this.m && p('seeded', Math.max(this.j, this.f)), p('progress', this.getProgress()));
                        },
                        isReady: function (e) {
                            return (e = this.I[void 0 !== e ? e : this.D]), this.j && this.j >= e ? (this.i[0] > this.N && new Date().valueOf() > this.L ? this.A | this.w : this.w) : this.f >= e ? this.A | this.m : this.m;
                        },
                        getProgress: function (e) {
                            return (e = this.I[e || this.D]), this.j >= e || this.f > e ? 1 : this.f / e;
                        },
                        startCollectors: function () {
                            if (!this.s) {
                                if (
                                    ((this.a = {
                                        loadTimeCollector: m(this, this.V),
                                        mouseCollector: m(this, this.W),
                                        keyboardCollector: m(this, this.U),
                                        accelerometerCollector: m(this, this.R),
                                        touchCollector: m(this, this.X)
                                    }),
                                    window.addEventListener)
                                )
                                    window.addEventListener('load', this.a.loadTimeCollector, !1), window.addEventListener('mousemove', this.a.mouseCollector, !1), window.addEventListener('keypress', this.a.keyboardCollector, !1), window.addEventListener('devicemotion', this.a.accelerometerCollector, !1), window.addEventListener('touchmove', this.a.touchCollector, !1);
                                else if (document.attachEvent) document.attachEvent('onload', this.a.loadTimeCollector), document.attachEvent('onmousemove', this.a.mouseCollector), document.attachEvent('keypress', this.a.keyboardCollector);
                                else throw new d.exception.bug("can't attach event");
                                this.s = !0;
                            }
                        },
                        stopCollectors: function () {
                            this.s && (window.removeEventListener ? (window.removeEventListener('load', this.a.loadTimeCollector, !1), window.removeEventListener('mousemove', this.a.mouseCollector, !1), window.removeEventListener('keypress', this.a.keyboardCollector, !1), window.removeEventListener('devicemotion', this.a.accelerometerCollector, !1), window.removeEventListener('touchmove', this.a.touchCollector, !1)) : document.detachEvent && (document.detachEvent('onload', this.a.loadTimeCollector), document.detachEvent('onmousemove', this.a.mouseCollector), document.detachEvent('keypress', this.a.keyboardCollector)), (this.s = !1));
                        },
                        addEventListener: function (e, t) {
                            this.B[e][this.S++] = t;
                        },
                        removeEventListener: function (e, t) {
                            var n,
                                r,
                                i = this.B[e],
                                o = [];
                            for (r in i) i.hasOwnProperty(r) && i[r] === t && o.push(r);
                            for (n = 0; n < o.length; n++) (r = o[n]), delete i[r];
                        },
                        U: function () {
                            _(this, 1);
                        },
                        W: function (e) {
                            var t, n;
                            try {
                                (t = e.x || e.clientX || e.offsetX || 0), (n = e.y || e.clientY || e.offsetY || 0);
                            } catch (e) {
                                n = t = 0;
                            }
                            0 != t && 0 != n && this.addEntropy([t, n], 2, 'mouse'), _(this, 0);
                        },
                        X: function (e) {
                            (e = e.touches[0] || e.changedTouches[0]), this.addEntropy([e.pageX || e.clientX, e.pageY || e.clientY], 1, 'touch'), _(this, 0);
                        },
                        V: function () {
                            _(this, 2);
                        },
                        R: function (e) {
                            if (((e = e.accelerationIncludingGravity.x || e.accelerationIncludingGravity.y || e.accelerationIncludingGravity.z), window.orientation)) {
                                var t = window.orientation;
                                'number' == typeof t && this.addEntropy(t, 1, 'accelerometer');
                            }
                            e && this.addEntropy(e, 2, 'accelerometer'), _(this, 0);
                        }
                    }),
                    (d.random = new d.prng(6));
                e: try {
                    if ((s = void 0 !== n && n.exports)) {
                        try {
                            c = e('crypto');
                        } catch (e) {
                            c = null;
                        }
                        s = o = c;
                    }
                    if (s && o.randomBytes) (i = o.randomBytes(128)), (i = new Uint32Array(new Uint8Array(i).buffer)), d.random.addEntropy(i, 1024, "crypto['randomBytes']");
                    else if ('undefined' != typeof window && 'undefined' != typeof Uint32Array) {
                        if (((a = new Uint32Array(32)), window.crypto && window.crypto.getRandomValues)) window.crypto.getRandomValues(a);
                        else if (window.msCrypto && window.msCrypto.getRandomValues) window.msCrypto.getRandomValues(a);
                        else break e;
                        d.random.addEntropy(a, 1024, "crypto['getRandomValues']");
                    }
                } catch (e) {
                    'undefined' != typeof window && window.console && (console.log('There was an error collecting entropy from the browser:'), console.log(e));
                }
                void 0 !== n && n.exports && (n.exports = d),
                    'function' == typeof t &&
                        t([], function () {
                            return d;
                        });
            },
            { crypto: void 0 }
        ],
        117: [
            function (e, t, n) {
                t.exports = {
                    FASTLANE_SDK_LOAD_ERROR: {
                        type: e('../lib/braintree-error').types.MERCHANT,
                        code: 'FASTLANE_SDK_LOAD_ERROR'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        118: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('./errors'),
                    o = e('../lib/assets').loadFastlane,
                    a = e('@braintree/wrap-promise'),
                    s = e('../lib/assign').assign;
                t.exports = a(function (e) {
                    var t = e.client.getConfiguration(),
                        n = e.client.getVersion(),
                        a = t.gatewayConfiguration.environment,
                        c = !0;
                    return (
                        'production' !== a && (c = !1),
                        o(
                            s(
                                {
                                    platform: 'BT',
                                    btSdkVersion: n,
                                    minified: c
                                },
                                e
                            )
                        )
                            .then(function (t) {
                                var n = {
                                    platform: 'BT',
                                    authorization: e.authorization,
                                    client: e.client,
                                    deviceData: e.deviceData
                                };
                                return delete e.authorization, delete e.client, delete e.deviceData, delete e.minified, delete e.btSdkVersion, window.braintree.fastlane.create(s({ platformOptions: n }, e, t.metadata));
                            })
                            .catch(function (e) {
                                return Promise.reject(
                                    new r({
                                        type: i.FASTLANE_SDK_LOAD_ERROR.type,
                                        code: i.FASTLANE_SDK_LOAD_ERROR.code,
                                        message: e.message
                                    })
                                );
                            })
                    );
                });
            },
            {
                '../lib/assets': 139,
                '../lib/assign': 140,
                '../lib/braintree-error': 143,
                './errors': 117,
                '@braintree/wrap-promise': 40
            }
        ],
        119: [
            function (e, t, n) {
                var r = e('../lib/basic-component-verification'),
                    i = e('./fastlane'),
                    o = e('../lib/create-assets-url'),
                    a = e('../lib/create-deferred-client'),
                    s = e('@braintree/wrap-promise'),
                    c = e('../lib/assign').assign;
                t.exports = {
                    create: s(function (e) {
                        var t = 'fastlane';
                        return r
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return a.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    assetsUrl: o.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return i(
                                    c(
                                        {
                                            client: t,
                                            deviceData: e.deviceData
                                        },
                                        e
                                    )
                                );
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/assign': 140,
                '../lib/basic-component-verification': 141,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './fastlane': 118,
                '@braintree/wrap-promise': 40
            }
        ],
        120: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    GOOGLE_PAYMENT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'GOOGLE_PAYMENT_NOT_ENABLED',
                        message: 'Google Pay is not enabled for this merchant.'
                    },
                    GOOGLE_PAYMENT_GATEWAY_ERROR: {
                        code: 'GOOGLE_PAYMENT_GATEWAY_ERROR',
                        message: 'There was an error when tokenizing the Google Pay payment method.',
                        type: r.types.UNKNOWN
                    },
                    GOOGLE_PAYMENT_UNSUPPORTED_VERSION: {
                        code: 'GOOGLE_PAYMENT_UNSUPPORTED_VERSION',
                        type: r.types.MERCHANT
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        121: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('../lib/assign').assign,
                    o = e('../lib/convert-methods-to-error'),
                    a = e('../lib/find'),
                    s = e('../lib/generate-google-pay-configuration'),
                    c = e('../lib/braintree-error'),
                    d = e('./errors'),
                    l = e('../lib/methods'),
                    u = e('@braintree/wrap-promise'),
                    p = {
                        1: '_createV1PaymentDataRequest',
                        2: '_createV2PaymentDataRequest'
                    };
                function _(e) {
                    if (((this._createPromise = e.createPromise), (this._client = e.client), (this._useDeferredClient = e.useDeferredClient), (this._googlePayVersion = e.googlePayVersion || 1), (this._googleMerchantId = e.googleMerchantId), this._isUnsupportedGooglePayAPIVersion()))
                        throw new c({
                            code: d.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.code,
                            message: 'The Braintree SDK does not support Google Pay version ' + this._googlePayVersion + '. Please upgrade the version of your Braintree SDK and contact support if this error persists.',
                            type: d.GOOGLE_PAYMENT_UNSUPPORTED_VERSION.type
                        });
                }
                (_.prototype._waitForClient = function () {
                    return this._client
                        ? Promise.resolve()
                        : this._createPromise.then(
                              function (e) {
                                  this._client = e;
                              }.bind(this)
                          );
                }),
                    (_.prototype._isUnsupportedGooglePayAPIVersion = function () {
                        return !(this._googlePayVersion in p);
                    }),
                    (_.prototype._getDefaultConfig = function () {
                        return this._defaultConfig || (this._defaultConfig = s(this._client.getConfiguration(), this._googlePayVersion, this._googleMerchantId)), this._defaultConfig;
                    }),
                    (_.prototype._createV1PaymentDataRequest = function (e) {
                        var t = this._getDefaultConfig(),
                            n = e.cardRequirements && e.cardRequirements.allowedCardNetworks,
                            r = t.cardRequirements.allowedCardNetworks;
                        return ((e = i({}, t, e)).cardRequirements.allowedCardNetworks = n || r), e;
                    }),
                    (_.prototype._createV2PaymentDataRequest = function (e) {
                        var t = this._getDefaultConfig();
                        return (
                            e.allowedPaymentMethods &&
                                e.allowedPaymentMethods.forEach(function (e) {
                                    var n,
                                        r,
                                        o = a(t.allowedPaymentMethods, 'type', e.type);
                                    o &&
                                        ((n = e),
                                        Object.keys((r = o)).forEach(function (e) {
                                            'object' == typeof r[e] ? (n[e] = i({}, r[e], n[e])) : (n[e] = n[e] || r[e]);
                                        }));
                                }),
                            (e = i({}, t, e))
                        );
                    }),
                    (_.prototype.createPaymentDataRequest = function (e) {
                        return this._useDeferredClient
                            ? this._waitForClient().then(
                                  function () {
                                      return this._createPaymentDataRequestSyncronously(e);
                                  }.bind(this)
                              )
                            : this._createPaymentDataRequestSyncronously(e);
                    }),
                    (_.prototype._createPaymentDataRequestSyncronously = function (e) {
                        var t = i({}, e),
                            n = this._googlePayVersion,
                            o = p[n];
                        return t.transactionInfo && t.transactionInfo.totalPrice && (t.transactionInfo.totalPrice = t.transactionInfo.totalPrice.toString()), r.sendEvent(this._createPromise, 'google-payment.v' + n + '.createPaymentDataRequest'), this[o](t);
                    }),
                    (_.prototype.parseResponse = function (e) {
                        var t = this;
                        return Promise.resolve()
                            .then(function () {
                                var n,
                                    i = JSON.parse(2 === e.apiVersion ? e.paymentMethodData.tokenizationData.token : e.paymentMethodToken.token),
                                    o = i.error;
                                return o
                                    ? Promise.reject(o)
                                    : (r.sendEvent(t._createPromise, 'google-payment.parseResponse.succeeded'), i.paypalAccounts)
                                      ? ((n = i.paypalAccounts[0]),
                                        r.sendEvent(t._createPromise, 'google-payment.parseResponse.succeeded.paypal'),
                                        Promise.resolve({
                                            nonce: n.nonce,
                                            type: n.type,
                                            description: n.description
                                        }))
                                      : ((n = i.androidPayCards[0]),
                                        r.sendEvent(t._createPromise, 'google-payment.parseResponse.succeeded.google-payment'),
                                        Promise.resolve({
                                            nonce: n.nonce,
                                            type: n.type,
                                            description: n.description,
                                            details: {
                                                cardType: n.details.cardType,
                                                lastFour: n.details.lastFour,
                                                lastTwo: n.details.lastTwo,
                                                isNetworkTokenized: n.details.isNetworkTokenized,
                                                bin: n.details.bin
                                            },
                                            binData: n.binData
                                        }));
                            })
                            .catch(function (e) {
                                return (
                                    r.sendEvent(t._createPromise, 'google-payment.parseResponse.failed'),
                                    Promise.reject(
                                        new c({
                                            code: d.GOOGLE_PAYMENT_GATEWAY_ERROR.code,
                                            message: d.GOOGLE_PAYMENT_GATEWAY_ERROR.message,
                                            type: d.GOOGLE_PAYMENT_GATEWAY_ERROR.type,
                                            details: { originalError: e }
                                        })
                                    )
                                );
                            });
                    }),
                    (_.prototype.teardown = function () {
                        return o(this, l(_.prototype)), Promise.resolve();
                    }),
                    (t.exports = u.wrapPrototype(_));
            },
            {
                '../lib/analytics': 138,
                '../lib/assign': 140,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/find': 156,
                '../lib/generate-google-pay-configuration': 168,
                '../lib/methods': 175,
                './errors': 120,
                '@braintree/wrap-promise': 40
            }
        ],
        122: [
            function (e, t, n) {
                var r = e('./google-payment'),
                    i = e('../lib/braintree-error'),
                    o = e('../lib/create-assets-url'),
                    a = e('../lib/create-deferred-client'),
                    s = e('../lib/basic-component-verification'),
                    c = e('@braintree/wrap-promise'),
                    d = e('./errors');
                t.exports = {
                    create: c(function (e) {
                        var t = 'Google Pay';
                        return s
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                var n, s;
                                return ((n = a
                                    .create({
                                        authorization: e.authorization,
                                        client: e.client,
                                        debug: e.debug,
                                        assetsUrl: o.create(e.authorization),
                                        name: t
                                    })
                                    .then(function (t) {
                                        var n = t.getConfiguration();
                                        return ((e.client = t), n.gatewayConfiguration.androidPay) ? t : Promise.reject(new i(d.GOOGLE_PAYMENT_NOT_ENABLED));
                                    })),
                                (e.createPromise = n),
                                (s = new r(e)),
                                e.useDeferredClient)
                                    ? s
                                    : n.then(function (e) {
                                          return (s._client = e), s;
                                      });
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './errors': 120,
                './google-payment': 121,
                '@braintree/wrap-promise': 40
            }
        ],
        123: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error'),
                    i = e('../shared/errors'),
                    o = e('../shared/constants').allowedAttributes;
                t.exports = function (e, t) {
                    var n, a, s;
                    return (
                        o.hasOwnProperty(e)
                            ? null != t &&
                              ((a = e), (s = t), 'string' === o[a] ? 'string' != typeof s && 'number' != typeof s : 'boolean' !== o[a] || ('true' !== String(s) && 'false' !== String(s))) &&
                              (n = new r({
                                  type: i.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.type,
                                  code: i.HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED.code,
                                  message: 'Value "' + t + '" is not allowed for "' + e + '" attribute.'
                              }))
                            : (n = new r({
                                  type: i.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.type,
                                  code: i.HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED.code,
                                  message: 'The "' + e + '" attribute is not supported in Hosted Fields.'
                              })),
                        n
                    );
                };
            },
            {
                '../../lib/braintree-error': 143,
                '../shared/constants': 131,
                '../shared/errors': 132
            }
        ],
        124: [
            function (e, t, n) {
                var r = e('../shared/constants'),
                    i = e('../../lib/use-min');
                t.exports = function (e, t, n) {
                    return e + '/web/' + r.VERSION + '/html/hosted-fields-frame' + i(n) + '.html#' + t;
                };
            },
            {
                '../../lib/use-min': 181,
                '../shared/constants': 131
            }
        ],
        125: [
            function (e, t, n) {
                var r = e('../shared/constants').navigationDirections,
                    i = e('../shared/browser-detection'),
                    o = e('../shared/focus-intercept'),
                    a = e('../shared/find-parent-tags'),
                    s = ['INPUT', 'SELECT', 'TEXTAREA'],
                    c = ['hidden', 'button', 'reset', 'submit', 'checkbox', 'radio', 'file'];
                function d(e) {
                    return i.hasSoftwareKeyboard() ? s.indexOf(e.tagName) > -1 && 0 > c.indexOf(e.type) : 'hidden' !== e.type;
                }
                function l(e) {
                    var t, n;
                    for (t = 0; t < e.length; t++) if (d((n = e[t]))) return n;
                    return null;
                }
                t.exports = {
                    removeExtraFocusElements: function (e, t) {
                        var n = Array.prototype.slice.call(e.elements);
                        [l(n), l(n.reverse())].forEach(function (e) {
                            e && o.matchFocusElement(e.getAttribute('id')) && t(e.getAttribute('id'));
                        });
                    },
                    createFocusChangeHandler: function (e, t) {
                        return function (n) {
                            var i,
                                s,
                                c,
                                l,
                                u = document.getElementById('bt-' + n.field + '-' + n.direction + '-' + e);
                            if (u) {
                                if (((c = a(u, 'form')[0]), document.forms.length < 1 || !c)) return void t.onRemoveFocusIntercepts();
                                (i = (c = [].slice.call(c.elements)).indexOf(u)),
                                    (l = (function (e, t) {
                                        switch (e) {
                                            case r.BACK:
                                                return {
                                                    checkIndexBounds: function (e) {
                                                        return e < 0;
                                                    },
                                                    indexChange: -1
                                                };
                                            case r.FORWARD:
                                                return {
                                                    checkIndexBounds: function (e) {
                                                        return e > t - 1;
                                                    },
                                                    indexChange: 1
                                                };
                                        }
                                        return {};
                                    })(n.direction, c.length));
                                do {
                                    if (((i += l.indexChange), l.checkIndexBounds(i))) return;
                                    s = c[i];
                                } while (!d(s));
                                o.matchFocusElement(s.getAttribute('id')) ? t.onTriggerInputFocus(s.getAttribute('data-braintree-type')) : s.focus();
                            }
                        };
                    }
                };
            },
            {
                '../shared/browser-detection': 130,
                '../shared/constants': 131,
                '../shared/find-parent-tags': 133,
                '../shared/focus-intercept': 134
            }
        ],
        126: [
            function (e, t, n) {
                var r = e('../shared/constants').allowedStyles;
                t.exports = function (e) {
                    var t,
                        n = document.createElement('input'),
                        i = {};
                    return (
                        '.' === e[0] && (e = e.substring(1)),
                        (n.className = e),
                        (n.style.display = 'none !important'),
                        (n.style.position = 'fixed !important'),
                        (n.style.left = '-99999px !important'),
                        (n.style.top = '-99999px !important'),
                        document.body.appendChild(n),
                        (t = window.getComputedStyle(n)),
                        r.forEach(function (e) {
                            var n = t[e];
                            n && (i[e] = n);
                        }),
                        document.body.removeChild(n),
                        i
                    );
                };
            },
            { '../shared/constants': 131 }
        ],
        127: [
            function (e, t, n) {
                var r = e('../../lib/assign').assign,
                    i = e('../../lib/create-assets-url'),
                    o = e('../../lib/is-verified-domain'),
                    a = e('../../lib/destructor'),
                    s = e('@braintree/iframer'),
                    c = e('framebus'),
                    d = e('../../lib/create-deferred-client'),
                    l = e('../../lib/braintree-error'),
                    u = e('./compose-url'),
                    p = e('./get-styles-from-class'),
                    _ = e('../shared/constants'),
                    E = e('../shared/errors'),
                    h = e('../../lib/constants').INTEGRATION_TIMEOUT_MS,
                    m = e('@braintree/uuid'),
                    f = e('../shared/find-parent-tags'),
                    y = e('../shared/browser-detection'),
                    A = _.events,
                    T = e('@braintree/event-emitter'),
                    I = e('./inject-frame'),
                    N = e('../../lib/analytics'),
                    O = _.allowedFields,
                    g = e('../../lib/methods'),
                    P = e('../../lib/shadow'),
                    b = e('../../lib/find-root-node'),
                    v = e('../../lib/convert-methods-to-error'),
                    C = e('../../lib/errors'),
                    R = e('../shared/get-card-types'),
                    S = e('./attribute-validation-error'),
                    D = e('@braintree/wrap-promise'),
                    w = e('./focus-change'),
                    L = e('../shared/focus-intercept').destroy;
                function M(e) {
                    var t,
                        n,
                        f,
                        y,
                        O,
                        b = this,
                        S = {},
                        D = {},
                        U = [],
                        k = m(),
                        F = e.sessionId;
                    if (
                        ((this._merchantConfigurationOptions = r({}, e)),
                        e.client ? ((f = (n = e.client.getConfiguration(void 0, F)).gatewayConfiguration.assetsUrl), (y = n.isDebug)) : ((f = i.create(e.authorization)), (y = !!e.isDebug)),
                        (this._clientPromise = d.create({
                            client: e.client,
                            authorization: e.authorization,
                            debug: y,
                            assetsUrl: f,
                            name: 'Hosted Fields',
                            sessionId: F
                        })),
                        (O = u(f, k, y)),
                        !e.fields || 0 === Object.keys(e.fields).length)
                    )
                        throw new l({
                            type: C.INSTANTIATION_OPTION_REQUIRED.type,
                            code: C.INSTANTIATION_OPTION_REQUIRED.code,
                            message: 'options.fields is required when instantiating Hosted Fields.'
                        });
                    T.call(this),
                        (this._injectedNodes = []),
                        (this._destructor = new a()),
                        (this._fields = S),
                        (this._state = {
                            fields: {},
                            cards: R('')
                        }),
                        (this._bus = new c({
                            channel: k,
                            verifyDomain: o,
                            targetFrames: [window]
                        })),
                        this._destructor.registerFunctionForTeardown(function () {
                            b._bus.teardown();
                        }),
                        e.client ? N.sendEvent(this._clientPromise, 'custom.hosted-fields.initialized') : N.sendEvent(this._clientPromise, 'custom.hosted-fields.initialized.deferred-client'),
                        Object.keys(e.fields).forEach(
                            function (t) {
                                var n, r, i, o, a;
                                if (!_.allowedFields.hasOwnProperty(t))
                                    throw new l({
                                        type: E.HOSTED_FIELDS_INVALID_FIELD_KEY.type,
                                        code: E.HOSTED_FIELDS_INVALID_FIELD_KEY.code,
                                        message: '"' + t + '" is not a valid field.'
                                    });
                                if (('string' == typeof (r = (n = e.fields[t]).container || n.selector) && (r = document.querySelector(r)), r && 1 === r.nodeType)) {
                                    if (r.querySelector('iframe[name^="braintree-"]'))
                                        throw new l({
                                            type: E.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.type,
                                            code: E.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.code,
                                            message: E.HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME.message,
                                            details: {
                                                fieldSelector: n.selector,
                                                fieldContainer: n.container,
                                                fieldKey: t
                                            }
                                        });
                                } else
                                    throw new l({
                                        type: E.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.type,
                                        code: E.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.code,
                                        message: E.HOSTED_FIELDS_INVALID_FIELD_SELECTOR.message,
                                        details: {
                                            fieldSelector: n.selector,
                                            fieldContainer: n.container,
                                            fieldKey: t
                                        }
                                    });
                                if (((i = r), P.isShadowElement(i) && (i = P.transformToSlot(i, 'height: 100%')), n.maxlength && 'number' != typeof n.maxlength))
                                    throw new l({
                                        type: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                                        code: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                                        message: 'The value for maxlength must be a number.',
                                        details: { fieldKey: t }
                                    });
                                if (n.minlength && 'number' != typeof n.minlength)
                                    throw new l({
                                        type: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                                        code: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                                        message: 'The value for minlength must be a number.',
                                        details: { fieldKey: t }
                                    });
                                (o = s({
                                    type: t,
                                    name: 'braintree-hosted-field-' + t,
                                    style: _.defaultIFrameStyle,
                                    title: n.iframeTitle || 'Secure Credit Card Frame - ' + _.allowedFields[t].label
                                })),
                                    this._bus.addTargetFrame(o),
                                    this._injectedNodes.push.apply(
                                        this._injectedNodes,
                                        I(k, o, i, function () {
                                            b.focus(t);
                                        })
                                    ),
                                    this._setupLabelFocus(t, r),
                                    (S[t] = {
                                        frameElement: o,
                                        containerElement: r
                                    }),
                                    (a = new Promise(function (e) {
                                        D[t] = e;
                                    })),
                                    U.push(a),
                                    (this._state.fields[t] = {
                                        isEmpty: !0,
                                        isValid: !1,
                                        isPotentiallyValid: !0,
                                        isFocused: !1,
                                        container: r
                                    }),
                                    setTimeout(function () {
                                        o.src = O;
                                    }, 0);
                            }.bind(this)
                        ),
                        this._merchantConfigurationOptions.styles &&
                            Object.keys(this._merchantConfigurationOptions.styles).forEach(function (e) {
                                var t = b._merchantConfigurationOptions.styles[e];
                                'string' == typeof t && (b._merchantConfigurationOptions.styles[e] = p(t));
                            }),
                        this._bus.on(A.REMOVE_FOCUS_INTERCEPTS, function (e) {
                            L(e && e.id);
                        }),
                        this._bus.on(
                            A.TRIGGER_FOCUS_CHANGE,
                            w.createFocusChangeHandler(k, {
                                onRemoveFocusIntercepts: function (e) {
                                    b._bus.emit(A.REMOVE_FOCUS_INTERCEPTS, { id: e });
                                },
                                onTriggerInputFocus: function (e) {
                                    b.focus(e);
                                }
                            })
                        ),
                        this._bus.on(A.READY_FOR_CLIENT, function (e) {
                            b._clientPromise.then(function (t) {
                                e(t);
                            });
                        }),
                        this._bus.on(A.CARD_FORM_ENTRY_HAS_BEGUN, function () {
                            N.sendEvent(b._clientPromise, 'hosted-fields.input.started');
                        }),
                        this._bus.on(A.BIN_AVAILABLE, function (e) {
                            b._emit('binAvailable', { bin: e });
                        }),
                        (t = setTimeout(function () {
                            N.sendEvent(b._clientPromise, 'custom.hosted-fields.load.timed-out'), b._emit('timeout');
                        }, h)),
                        Promise.all(U).then(function (e) {
                            var n,
                                i = e[0];
                            clearTimeout(t),
                                i(
                                    (((n = r({}, b._merchantConfigurationOptions)).fields = r({}, n.fields)),
                                    Object.keys(n.fields).forEach(function (e) {
                                        (n.fields[e] = r({}, n.fields[e])), delete n.fields[e].container;
                                    }),
                                    n)
                                ),
                                b._cleanUpFocusIntercepts(),
                                b._emit('ready');
                        }),
                        this._bus.on(A.FRAME_READY, function (e, t) {
                            D[e.field](t);
                        }),
                        this._bus.on(
                            A.INPUT_EVENT,
                            function (e) {
                                var t,
                                    n = e.merchantPayload,
                                    r = n.emittedBy,
                                    i = S[r].containerElement;
                                Object.keys(n.fields).forEach(function (e) {
                                    n.fields[e].container = S[e].containerElement;
                                }),
                                    (t = n.fields[r]),
                                    i.classList.toggle(_.externalClasses.FOCUSED, t.isFocused),
                                    i.classList.toggle(_.externalClasses.VALID, t.isValid),
                                    i.classList.toggle(_.externalClasses.INVALID, !t.isPotentiallyValid),
                                    (this._state = {
                                        cards: n.cards,
                                        fields: n.fields
                                    }),
                                    this._emit(e.type, n);
                            }.bind(this)
                        ),
                        this._destructor.registerFunctionForTeardown(function () {
                            var e, t, n;
                            for (e = 0; e < b._injectedNodes.length; e++) (n = (t = b._injectedNodes[e]).parentNode).removeChild(t), n.classList.remove(_.externalClasses.FOCUSED, _.externalClasses.INVALID, _.externalClasses.VALID);
                        }),
                        this._destructor.registerFunctionForTeardown(function () {
                            L();
                        }),
                        this._destructor.registerFunctionForTeardown(function () {
                            v(b, g(M.prototype).concat(g(T.prototype)));
                        });
                }
                T.createChild(M),
                    (M.prototype._setupLabelFocus = function (e, t) {
                        var n,
                            r,
                            i = this,
                            o = b(t);
                        if (null != t.id) {
                            for (
                                n = Array.prototype.slice.call(document.querySelectorAll('label[for="' + t.id + '"]')),
                                    o !== document && (n = n.concat(Array.prototype.slice.call(o.querySelectorAll('label[for="' + t.id + '"]')))),
                                    n = (n = n.concat(f(t, 'label'))).filter(function (e, t, n) {
                                        return n.indexOf(e) === t;
                                    }),
                                    r = 0;
                                r < n.length;
                                r++
                            )
                                n[r].addEventListener('click', a, !1);
                            this._destructor.registerFunctionForTeardown(function () {
                                for (r = 0; r < n.length; r++) n[r].removeEventListener('click', a, !1);
                            });
                        }
                        function a() {
                            i.focus(e);
                        }
                    }),
                    (M.prototype._getAnyFieldContainer = function () {
                        var e = this;
                        return Object.keys(this._fields).reduce(function (t, n) {
                            return t || e._fields[n].containerElement;
                        }, null);
                    }),
                    (M.prototype._cleanUpFocusIntercepts = function () {
                        var e;
                        document.forms.length < 1
                            ? this._bus.emit(A.REMOVE_FOCUS_INTERCEPTS)
                            : (e = f(this._getAnyFieldContainer(), 'form')[0])
                              ? w.removeExtraFocusElements(
                                    e,
                                    function (e) {
                                        this._bus.emit(A.REMOVE_FOCUS_INTERCEPTS, { id: e });
                                    }.bind(this)
                                )
                              : this._bus.emit(A.REMOVE_FOCUS_INTERCEPTS);
                    }),
                    (M.prototype._attachInvalidFieldContainersToError = function (e) {
                        e.details &&
                            e.details.invalidFieldKeys &&
                            e.details.invalidFieldKeys.length > 0 &&
                            ((e.details.invalidFields = {}),
                            e.details.invalidFieldKeys.forEach(
                                function (t) {
                                    e.details.invalidFields[t] = this._fields[t].containerElement;
                                }.bind(this)
                            ));
                    }),
                    (M.prototype.getChallenges = function () {
                        return this._clientPromise.then(function (e) {
                            return e.getConfiguration().gatewayConfiguration.challenges;
                        });
                    }),
                    (M.prototype.getSupportedCardTypes = function () {
                        return this._clientPromise.then(function (e) {
                            return e.getConfiguration().gatewayConfiguration.creditCards.supportedCardTypes.map(function (e) {
                                return 'MasterCard' === e ? 'Mastercard' : e;
                            });
                        });
                    }),
                    (M.prototype.teardown = function () {
                        var e = this;
                        return new Promise(function (t, n) {
                            e._destructor.teardown(function (r) {
                                N.sendEvent(e._clientPromise, 'custom.hosted-fields.teardown-completed'), r ? n(r) : t();
                            });
                        });
                    }),
                    (M.prototype.tokenize = function (e) {
                        var t = this;
                        return (
                            e || (e = {}),
                            new Promise(function (n, r) {
                                t._bus.emit(A.TOKENIZATION_REQUEST, e, function (e) {
                                    var i = e[0],
                                        o = e[1];
                                    i ? (t._attachInvalidFieldContainersToError(i), r(new l(i))) : n(o);
                                });
                            })
                        );
                    }),
                    (M.prototype.addClass = function (e, t) {
                        var n;
                        return (O.hasOwnProperty(e)
                            ? this._fields.hasOwnProperty(e)
                                ? this._bus.emit(A.ADD_CLASS, {
                                      field: e,
                                      classname: t
                                  })
                                : (n = new l({
                                      type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                                      code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                                      message: 'Cannot add class to "' + e + '" field because it is not part of the current Hosted Fields options.'
                                  }))
                            : (n = new l({
                                  type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                                  code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                                  message: '"' + e + '" is not a valid field. You must use a valid field option when adding a class.'
                              })),
                        n)
                            ? Promise.reject(n)
                            : Promise.resolve();
                    }),
                    (M.prototype.removeClass = function (e, t) {
                        var n;
                        return (O.hasOwnProperty(e)
                            ? this._fields.hasOwnProperty(e)
                                ? this._bus.emit(A.REMOVE_CLASS, {
                                      field: e,
                                      classname: t
                                  })
                                : (n = new l({
                                      type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                                      code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                                      message: 'Cannot remove class from "' + e + '" field because it is not part of the current Hosted Fields options.'
                                  }))
                            : (n = new l({
                                  type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                                  code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                                  message: '"' + e + '" is not a valid field. You must use a valid field option when removing a class.'
                              })),
                        n)
                            ? Promise.reject(n)
                            : Promise.resolve();
                    }),
                    (M.prototype.setAttribute = function (e) {
                        var t, n;
                        return (O.hasOwnProperty(e.field)
                            ? this._fields.hasOwnProperty(e.field)
                                ? (t = S(e.attribute, e.value))
                                    ? (n = t)
                                    : this._bus.emit(A.SET_ATTRIBUTE, {
                                          field: e.field,
                                          attribute: e.attribute,
                                          value: e.value
                                      })
                                : (n = new l({
                                      type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                                      code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                                      message: 'Cannot set attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
                                  }))
                            : (n = new l({
                                  type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                                  code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                                  message: '"' + e.field + '" is not a valid field. You must use a valid field option when setting an attribute.'
                              })),
                        n)
                            ? Promise.reject(n)
                            : Promise.resolve();
                    }),
                    (M.prototype.setMonthOptions = function (e) {
                        var t,
                            n = this,
                            r = this._merchantConfigurationOptions.fields;
                        return (r.expirationMonth ? r.expirationMonth.select || (t = 'Expiration month field must be a select element.') : (t = 'Expiration month field must exist to use setMonthOptions.'), t)
                            ? Promise.reject(
                                  new l({
                                      type: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.type,
                                      code: E.HOSTED_FIELDS_FIELD_PROPERTY_INVALID.code,
                                      message: t
                                  })
                              )
                            : new Promise(function (t) {
                                  n._bus.emit(A.SET_MONTH_OPTIONS, e, t);
                              });
                    }),
                    (M.prototype.setMessage = function (e) {
                        this._bus.emit(A.SET_MESSAGE, {
                            field: e.field,
                            message: e.message
                        });
                    }),
                    (M.prototype.removeAttribute = function (e) {
                        var t, n;
                        return (O.hasOwnProperty(e.field)
                            ? this._fields.hasOwnProperty(e.field)
                                ? (t = S(e.attribute))
                                    ? (n = t)
                                    : this._bus.emit(A.REMOVE_ATTRIBUTE, {
                                          field: e.field,
                                          attribute: e.attribute
                                      })
                                : (n = new l({
                                      type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                                      code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                                      message: 'Cannot remove attribute for "' + e.field + '" field because it is not part of the current Hosted Fields options.'
                                  }))
                            : (n = new l({
                                  type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                                  code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                                  message: '"' + e.field + '" is not a valid field. You must use a valid field option when removing an attribute.'
                              })),
                        n)
                            ? Promise.reject(n)
                            : Promise.resolve();
                    }),
                    (M.prototype.setPlaceholder = function (e, t) {
                        return this.setAttribute({
                            field: e,
                            attribute: 'placeholder',
                            value: t
                        });
                    }),
                    (M.prototype.clear = function (e) {
                        var t;
                        return (O.hasOwnProperty(e)
                            ? this._fields.hasOwnProperty(e)
                                ? this._bus.emit(A.CLEAR_FIELD, { field: e })
                                : (t = new l({
                                      type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                                      code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                                      message: 'Cannot clear "' + e + '" field because it is not part of the current Hosted Fields options.'
                                  }))
                            : (t = new l({
                                  type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                                  code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                                  message: '"' + e + '" is not a valid field. You must use a valid field option when clearing a field.'
                              })),
                        t)
                            ? Promise.reject(t)
                            : Promise.resolve();
                    }),
                    (M.prototype.focus = function (e) {
                        var t,
                            n = this._fields[e];
                        return (O.hasOwnProperty(e)
                            ? this._fields.hasOwnProperty(e)
                                ? (n.frameElement.focus(),
                                  this._bus.emit(A.TRIGGER_INPUT_FOCUS, { field: e }),
                                  y.isIos() &&
                                      setTimeout(function () {
                                          var e, t, r;
                                          (t = Math.floor((e = n.containerElement.getBoundingClientRect()).height / 2)), (r = Math.floor(e.width / 2)), (e.top < (window.innerHeight - t || document.documentElement.clientHeight - t) && e.right > r && e.bottom > t && e.left < (window.innerWidth - r || document.documentElement.clientWidth - r)) || n.containerElement.scrollIntoView();
                                      }, 5))
                                : (t = new l({
                                      type: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.type,
                                      code: E.HOSTED_FIELDS_FIELD_NOT_PRESENT.code,
                                      message: 'Cannot focus "' + e + '" field because it is not part of the current Hosted Fields options.'
                                  }))
                            : (t = new l({
                                  type: E.HOSTED_FIELDS_FIELD_INVALID.type,
                                  code: E.HOSTED_FIELDS_FIELD_INVALID.code,
                                  message: '"' + e + '" is not a valid field. You must use a valid field option when focusing a field.'
                              })),
                        t)
                            ? Promise.reject(t)
                            : Promise.resolve();
                    }),
                    (M.prototype.getState = function () {
                        return this._state;
                    }),
                    (t.exports = D.wrapPrototype(M));
            },
            {
                '../../lib/analytics': 138,
                '../../lib/assign': 140,
                '../../lib/braintree-error': 143,
                '../../lib/constants': 145,
                '../../lib/convert-methods-to-error': 146,
                '../../lib/create-assets-url': 148,
                '../../lib/create-deferred-client': 150,
                '../../lib/destructor': 152,
                '../../lib/errors': 154,
                '../../lib/find-root-node': 155,
                '../../lib/is-verified-domain': 173,
                '../../lib/methods': 175,
                '../../lib/shadow': 178,
                '../shared/browser-detection': 130,
                '../shared/constants': 131,
                '../shared/errors': 132,
                '../shared/find-parent-tags': 133,
                '../shared/focus-intercept': 134,
                '../shared/get-card-types': 135,
                './attribute-validation-error': 123,
                './compose-url': 124,
                './focus-change': 125,
                './get-styles-from-class': 126,
                './inject-frame': 128,
                '@braintree/event-emitter': 30,
                '@braintree/iframer': 32,
                '@braintree/uuid': 36,
                '@braintree/wrap-promise': 40,
                framebus: 50
            }
        ],
        128: [
            function (e, t, n) {
                var r = e('../shared/focus-intercept'),
                    i = e('../shared/constants').navigationDirections;
                t.exports = function (e, t, n, o) {
                    var a = t.getAttribute('type'),
                        s = document.createElement('div'),
                        c = document.createDocumentFragment(),
                        d = r.generate(e, a, i.BACK, o),
                        l = r.generate(e, a, i.FORWARD, o);
                    return (s.style.clear = 'both'), c.appendChild(d), c.appendChild(t), c.appendChild(l), c.appendChild(s), n.appendChild(c), [t, s];
                };
            },
            {
                '../shared/constants': 131,
                '../shared/focus-intercept': 134
            }
        ],
        129: [
            function (e, t, n) {
                var r = e('./external/hosted-fields'),
                    i = e('../lib/basic-component-verification'),
                    o = e('./shared/errors'),
                    a = e('restricted-input/supports-input-formatting'),
                    s = e('@braintree/wrap-promise'),
                    c = e('../lib/braintree-error');
                t.exports = {
                    supportsInputFormatting: a,
                    create: s(function (e) {
                        return i
                            .verify({
                                name: 'Hosted Fields',
                                authorization: e.authorization,
                                client: e.client
                            })
                            .then(function () {
                                var t = new r(e);
                                return new Promise(function (e, n) {
                                    t.on('ready', function () {
                                        e(t);
                                    }),
                                        t.on('timeout', function () {
                                            n(new c(o.HOSTED_FIELDS_TIMEOUT));
                                        });
                                });
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                './external/hosted-fields': 127,
                './shared/errors': 132,
                '@braintree/wrap-promise': 40,
                'restricted-input/supports-input-formatting': 85
            }
        ],
        130: [
            function (e, t, n) {
                var r = e('@braintree/browser-detection/is-android'),
                    i = e('@braintree/browser-detection/is-chrome-os'),
                    o = e('@braintree/browser-detection/is-ios'),
                    a = e('@braintree/browser-detection/is-chrome');
                t.exports = {
                    isAndroid: r,
                    isChromeOS: i,
                    isChromeIos: function () {
                        return a() && o();
                    },
                    isFirefox: e('@braintree/browser-detection/is-firefox'),
                    isIos: o,
                    isIosWebview: e('@braintree/browser-detection/is-ios-webview'),
                    hasSoftwareKeyboard: function () {
                        return r() || i() || o();
                    }
                };
            },
            {
                '@braintree/browser-detection/is-android': 20,
                '@braintree/browser-detection/is-chrome': 22,
                '@braintree/browser-detection/is-chrome-os': 21,
                '@braintree/browser-detection/is-firefox': 23,
                '@braintree/browser-detection/is-ios': 27,
                '@braintree/browser-detection/is-ios-webview': 25
            }
        ],
        131: [
            function (e, t, n) {
                var r = e('../../lib/enumerate'),
                    i = e('./errors'),
                    o = {
                        VERSION: '3.112.1',
                        maxExpirationYearAge: 19,
                        externalEvents: {
                            FOCUS: 'focus',
                            BLUR: 'blur',
                            EMPTY: 'empty',
                            NOT_EMPTY: 'notEmpty',
                            VALIDITY_CHANGE: 'validityChange',
                            CARD_TYPE_CHANGE: 'cardTypeChange'
                        },
                        defaultMaxLengths: {
                            number: 19,
                            postalCode: 8,
                            expirationDate: 7,
                            expirationMonth: 2,
                            expirationYear: 4,
                            cvv: 3
                        },
                        externalClasses: {
                            FOCUSED: 'braintree-hosted-fields-focused',
                            INVALID: 'braintree-hosted-fields-invalid',
                            VALID: 'braintree-hosted-fields-valid'
                        },
                        navigationDirections: {
                            BACK: 'before',
                            FORWARD: 'after'
                        },
                        defaultIFrameStyle: {
                            border: 'none',
                            width: '100%',
                            height: '100%',
                            float: 'left'
                        },
                        tokenizationErrorCodes: {
                            81724: i.HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE,
                            81736: i.HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED
                        },
                        allowedStyles: ['-moz-appearance', '-moz-box-shadow', '-moz-osx-font-smoothing', '-moz-tap-highlight-color', '-moz-transition', '-webkit-appearance', '-webkit-box-shadow', '-webkit-font-smoothing', '-webkit-tap-highlight-color', '-webkit-transition', 'appearance', 'box-shadow', 'color', 'direction', 'font', 'font-family', 'font-size', 'font-size-adjust', 'font-stretch', 'font-style', 'font-variant', 'font-variant-alternates', 'font-variant-caps', 'font-variant-east-asian', 'font-variant-ligatures', 'font-variant-numeric', 'font-weight', 'letter-spacing', 'line-height', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'opacity', 'outline', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left', 'text-align', 'text-shadow', 'transition'],
                        allowedFields: {
                            cardholderName: {
                                name: 'cardholder-name',
                                label: 'Cardholder Name'
                            },
                            number: {
                                name: 'credit-card-number',
                                label: 'Credit Card Number'
                            },
                            cvv: {
                                name: 'cvv',
                                label: 'CVV'
                            },
                            expirationDate: {
                                name: 'expiration',
                                label: 'Expiration Date'
                            },
                            expirationMonth: {
                                name: 'expiration-month',
                                label: 'Expiration Month'
                            },
                            expirationYear: {
                                name: 'expiration-year',
                                label: 'Expiration Year'
                            },
                            postalCode: {
                                name: 'postal-code',
                                label: 'Postal Code'
                            }
                        },
                        allowedAttributes: {
                            'aria-invalid': 'boolean',
                            'aria-required': 'boolean',
                            disabled: 'boolean',
                            placeholder: 'string'
                        },
                        allowedBillingAddressFields: ['company', 'countryCodeNumeric', 'countryCodeAlpha2', 'countryCodeAlpha3', 'countryName', 'extendedAddress', 'locality', 'region', 'firstName', 'lastName', 'postalCode', 'streetAddress'],
                        allowedShippingAddressFields: ['company', 'countryCodeNumeric', 'countryCodeAlpha2', 'countryCodeAlpha3', 'countryName', 'extendedAddress', 'locality', 'region', 'firstName', 'lastName', 'postalCode', 'streetAddress'],
                        autocompleteMappings: {
                            'cardholder-name': 'cc-name',
                            'credit-card-number': 'cc-number',
                            expiration: 'cc-exp',
                            'expiration-month': 'cc-exp-month',
                            'expiration-year': 'cc-exp-year',
                            cvv: 'cc-csc',
                            'postal-code': 'billing postal-code'
                        }
                    };
                (o.events = r(['ADD_CLASS', 'AUTOFILL_DATA_AVAILABLE', 'BIN_AVAILABLE', 'CARD_FORM_ENTRY_HAS_BEGUN', 'CLEAR_FIELD', 'CONFIGURATION', 'FRAME_READY', 'INPUT_EVENT', 'READY_FOR_CLIENT', 'REMOVE_ATTRIBUTE', 'REMOVE_CLASS', 'REMOVE_FOCUS_INTERCEPTS', 'SET_ATTRIBUTE', 'SET_MESSAGE', 'SET_MONTH_OPTIONS', 'TOKENIZATION_REQUEST', 'TRIGGER_FOCUS_CHANGE', 'TRIGGER_INPUT_FOCUS', 'VALIDATE_STRICT'], 'hosted-fields:')), (t.exports = o);
            },
            {
                '../../lib/enumerate': 153,
                './errors': 132
            }
        ],
        132: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    HOSTED_FIELDS_TIMEOUT: {
                        type: r.types.UNKNOWN,
                        code: 'HOSTED_FIELDS_TIMEOUT',
                        message: 'Hosted Fields timed out when attempting to set up.'
                    },
                    HOSTED_FIELDS_INVALID_FIELD_KEY: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_INVALID_FIELD_KEY'
                    },
                    HOSTED_FIELDS_INVALID_FIELD_SELECTOR: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_INVALID_FIELD_SELECTOR',
                        message: 'Selector does not reference a valid DOM node.'
                    },
                    HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_FIELD_DUPLICATE_IFRAME',
                        message: 'Element already contains a Braintree iframe.'
                    },
                    HOSTED_FIELDS_FIELD_INVALID: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_FIELD_INVALID'
                    },
                    HOSTED_FIELDS_FIELD_NOT_PRESENT: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_FIELD_NOT_PRESENT'
                    },
                    HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'HOSTED_FIELDS_TOKENIZATION_NETWORK_ERROR',
                        message: 'A tokenization network error occurred.'
                    },
                    HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE: {
                        type: r.types.CUSTOMER,
                        code: 'HOSTED_FIELDS_TOKENIZATION_FAIL_ON_DUPLICATE',
                        message: "This credit card already exists in the merchant's vault."
                    },
                    HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED: {
                        type: r.types.CUSTOMER,
                        code: 'HOSTED_FIELDS_TOKENIZATION_CVV_VERIFICATION_FAILED',
                        message: 'CVV verification failed during tokenization.'
                    },
                    HOSTED_FIELDS_FAILED_TOKENIZATION: {
                        type: r.types.CUSTOMER,
                        code: 'HOSTED_FIELDS_FAILED_TOKENIZATION',
                        message: 'The supplied card data failed tokenization.'
                    },
                    HOSTED_FIELDS_FIELDS_EMPTY: {
                        type: r.types.CUSTOMER,
                        code: 'HOSTED_FIELDS_FIELDS_EMPTY',
                        message: 'All fields are empty. Cannot tokenize empty card fields.'
                    },
                    HOSTED_FIELDS_FIELDS_INVALID: {
                        type: r.types.CUSTOMER,
                        code: 'HOSTED_FIELDS_FIELDS_INVALID',
                        message: 'Some payment input fields are invalid. Cannot tokenize invalid card fields.'
                    },
                    HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_ATTRIBUTE_NOT_SUPPORTED'
                    },
                    HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_ATTRIBUTE_VALUE_NOT_ALLOWED'
                    },
                    HOSTED_FIELDS_FIELD_PROPERTY_INVALID: {
                        type: r.types.MERCHANT,
                        code: 'HOSTED_FIELDS_FIELD_PROPERTY_INVALID'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        133: [
            function (e, t, n) {
                t.exports = function (e, t) {
                    for (var n = e.parentNode, r = []; null != n; ) null != n.tagName && n.tagName.toLowerCase() === t && r.push(n), (n = n.parentNode);
                    return r;
                };
            },
            {}
        ],
        134: [
            function (e, t, n) {
                var r = e('./browser-detection'),
                    i = e('./constants'),
                    o = Object.keys(i.allowedFields),
                    a = i.navigationDirections,
                    s = {
                        generate: function (e, t, n, i) {
                            var o = document.createElement('input');
                            return r.hasSoftwareKeyboard() || r.isFirefox()
                                ? (o.setAttribute('aria-hidden', 'true'),
                                  o.setAttribute('autocomplete', 'off'),
                                  o.setAttribute('data-braintree-direction', n),
                                  o.setAttribute('data-braintree-type', t),
                                  o.setAttribute('id', 'bt-' + t + '-' + n + '-' + e),
                                  o.setAttribute(
                                      'style',
                                      JSON.stringify({
                                          border: 'none !important',
                                          display: 'block !important',
                                          height: '1px !important',
                                          left: '-1px !important',
                                          opacity: '0 !important',
                                          position: 'absolute !important',
                                          top: '-1px !important',
                                          width: '1px !important'
                                      })
                                          .replace(/[{}"]/g, '')
                                          .replace(/,/g, ';')
                                  ),
                                  o.classList.add('focus-intercept'),
                                  o.addEventListener('focus', function (e) {
                                      i(e), r.hasSoftwareKeyboard() || o.blur();
                                  }),
                                  o)
                                : document.createDocumentFragment();
                        },
                        destroy: function (e) {
                            var t;
                            e ? (t = [document.getElementById(e)]) : ((t = document.querySelectorAll('[data-braintree-direction]')), (t = [].slice.call(t))),
                                t.forEach(function (e) {
                                    e && 1 === e.nodeType && s.matchFocusElement(e.getAttribute('id')) && e.parentNode.removeChild(e);
                                });
                        },
                        matchFocusElement: function (e) {
                            var t, n, r, i;
                            return !!e && !((t = e.split('-')).length < 4) && ((n = 'bt' === t[0]), (r = o.indexOf(t[1]) > -1), (i = t[2] === a.BACK || t[2] === a.FORWARD), !!(n && r && i));
                        }
                    };
                t.exports = s;
            },
            {
                './browser-detection': 130,
                './constants': 131
            }
        ],
        135: [
            function (e, t, n) {
                var r = e('credit-card-type');
                t.exports = function (e) {
                    var t = r(e);
                    return (
                        t.forEach(function (e) {
                            'mastercard' === e.type && (e.type = 'master-card');
                        }),
                        t
                    );
                };
            },
            { 'credit-card-type': 42 }
        ],
        136: [
            function (e, t, n) {
                var r = e('./american-express'),
                    i = e('./apple-pay'),
                    o = e('./client'),
                    a = e('./fastlane'),
                    s = e('./data-collector'),
                    c = e('./hosted-fields'),
                    d = e('./local-payment'),
                    l = e('./masterpass'),
                    u = e('./payment-request'),
                    p = e('./paypal'),
                    _ = e('./paypal-checkout'),
                    E = e('./google-payment'),
                    h = e('./sepa');
                t.exports = {
                    fastlane: a,
                    americanExpress: r,
                    applePay: i,
                    client: o,
                    dataCollector: s,
                    hostedFields: c,
                    localPayment: d,
                    masterpass: l,
                    googlePayment: E,
                    paymentRequest: u,
                    paypal: p,
                    paypalCheckout: _,
                    threeDSecure: e('./three-d-secure'),
                    unionpay: e('./unionpay'),
                    usBankAccount: e('./us-bank-account'),
                    vaultManager: e('./vault-manager'),
                    venmo: e('./venmo'),
                    visaCheckout: e('./visa-checkout'),
                    sepa: h,
                    preferredPaymentMethods: e('./preferred-payment-methods'),
                    VERSION: '3.112.1'
                };
            },
            {
                './american-express': 88,
                './apple-pay': 91,
                './client': 96,
                './data-collector': 114,
                './fastlane': 119,
                './google-payment': 122,
                './hosted-fields': 129,
                './local-payment': 185,
                './masterpass': 188,
                './payment-request': 193,
                './paypal': 200,
                './paypal-checkout': 197,
                './preferred-payment-methods': 203,
                './sepa': 207,
                './three-d-secure': 219,
                './unionpay': 223,
                './us-bank-account': 229,
                './vault-manager': 232,
                './venmo': 237,
                './visa-checkout': 247
            }
        ],
        137: [
            function (e, t, n) {
                var r = e('./create-authorization-data'),
                    i = e('./json-clone'),
                    o = e('./constants');
                t.exports = {
                    addMetadata: function (e, t) {
                        var n,
                            a = t ? i(t) : {},
                            s = r(e.authorization).attrs,
                            c = i(e.analyticsMetadata);
                        for (n in ((a.braintreeLibraryVersion = o.BRAINTREE_LIBRARY_VERSION), a._meta)) a._meta.hasOwnProperty(n) && (c[n] = a._meta[n]);
                        return (a._meta = c), s.tokenizationKey ? (a.tokenizationKey = s.tokenizationKey) : (a.authorizationFingerprint = s.authorizationFingerprint), a;
                    },
                    addEventMetadata: function (e) {
                        var t = e.getConfiguration(),
                            n = r(t.authorization).attrs,
                            i = 'production' === t.gatewayConfiguration.environment,
                            a = {
                                api_integration_type: t.analyticsMetadata.integrationType,
                                app_id: window.location.host,
                                c_sdk_ver: o.VERSION,
                                component: 'braintreeclientsdk',
                                merchant_sdk_env: i ? 'production' : 'sandbox',
                                merchant_id: t.gatewayConfiguration.merchantId,
                                event_source: 'web',
                                platform: o.PLATFORM,
                                platform_version: window.navigator.userAgent,
                                session_id: t.analyticsMetadata.sessionId,
                                client_session_id: t.analyticsMetadata.sessionId,
                                tenant_name: 'braintree'
                            };
                        return n.tokenizationKey ? (a.tokenization_key = n.tokenizationKey) : (a.auth_fingerprint = n.authorizationFingerprint), a;
                    }
                };
            },
            {
                './constants': 145,
                './create-authorization-data': 149,
                './json-clone': 174
            }
        ],
        138: [
            function (e, t, n) {
                var r = e('./constants'),
                    i = e('./add-metadata');
                t.exports = {
                    sendEvent: function (e, t, n) {
                        var o = Date.now();
                        return Promise.resolve(e)
                            .then(function (e) {
                                var a = e._request,
                                    s = r.ANALYTICS_URL,
                                    c = r.ANALYTICS_PREFIX + t,
                                    d = 'production' === e.getConfiguration().gatewayConfiguration.environment,
                                    l = {
                                        events: [],
                                        tracking: []
                                    },
                                    u = i.addEventMetadata(e, l);
                                return (
                                    (u.event_name = c),
                                    (u.t = o),
                                    (l.events = [
                                        {
                                            level: 'info',
                                            event: c,
                                            payload: {
                                                env: d ? 'production' : 'sandbox',
                                                timestamp: o
                                            }
                                        }
                                    ]),
                                    (l.tracking = [u]),
                                    a(
                                        {
                                            url: s,
                                            method: 'post',
                                            data: l,
                                            timeout: r.ANALYTICS_REQUEST_TIMEOUT_MS
                                        },
                                        n
                                    )
                                );
                            })
                            .catch(function (e) {
                                n && n(e);
                            });
                    }
                };
            },
            {
                './add-metadata': 137,
                './constants': 145
            }
        ],
        139: [
            function (e, t, n) {
                t.exports = {
                    loadScript: e('@braintree/asset-loader/load-script'),
                    loadFastlane: e('@paypal/accelerated-checkout-loader').loadAxo
                };
            },
            {
                '@braintree/asset-loader/load-script': 2,
                '@paypal/accelerated-checkout-loader': 41
            }
        ],
        140: [
            function (e, t, n) {
                function r(e) {
                    var t, n, r;
                    for (t = 1; t < arguments.length; t++) for (r in (n = arguments[t])) n.hasOwnProperty(r) && (e[r] = n[r]);
                    return e;
                }
                t.exports = {
                    assign: 'function' == typeof Object.assign ? Object.assign : r,
                    _assign: r
                };
            },
            {}
        ],
        141: [
            function (e, t, n) {
                var r = e('./braintree-error'),
                    i = e('./errors'),
                    o = '3.112.1';
                t.exports = {
                    verify: function (e) {
                        var t, n, a;
                        return e
                            ? ((a = e.name), (t = e.client), (n = e.authorization), t || n)
                                ? n || t.getVersion() === o
                                    ? Promise.resolve()
                                    : Promise.reject(
                                          new r({
                                              type: i.INCOMPATIBLE_VERSIONS.type,
                                              code: i.INCOMPATIBLE_VERSIONS.code,
                                              message: 'Client (version ' + t.getVersion() + ') and ' + a + ' (version ' + o + ') components must be from the same SDK version.'
                                          })
                                      )
                                : Promise.reject(
                                      new r({
                                          type: i.INSTANTIATION_OPTION_REQUIRED.type,
                                          code: i.INSTANTIATION_OPTION_REQUIRED.code,
                                          message: 'options.client is required when instantiating ' + a + '.'
                                      })
                                  )
                            : Promise.reject(
                                  new r({
                                      type: i.INVALID_USE_OF_INTERNAL_FUNCTION.type,
                                      code: i.INVALID_USE_OF_INTERNAL_FUNCTION.code,
                                      message: 'Options must be passed to basicComponentVerification function.'
                                  })
                              );
                    }
                };
            },
            {
                './braintree-error': 143,
                './errors': 154
            }
        ],
        142: [
            function (e, t, n) {
                var r = e('./once');
                t.exports = function (e, t) {
                    var n,
                        i,
                        o = e.length,
                        a = o,
                        s = r(t);
                    if (0 === o) return void s(null);
                    function c(e) {
                        if (e) return void s(e);
                        0 == (a -= 1) && s(null);
                    }
                    for (i = 0; i < o; i++) (n = e[i]), 0 === n.length ? (n(), c(null)) : n(c);
                };
            },
            { './once': 176 }
        ],
        143: [
            function (e, t, n) {
                var r = e('./enumerate');
                function i(e) {
                    if (!i.types.hasOwnProperty(e.type)) throw Error(e.type + ' is not a valid type.');
                    if (!e.code) throw Error('Error code required.');
                    if (!e.message) throw Error('Error message required.');
                    (this.name = 'BraintreeError'), (this.code = e.code), (this.message = e.message), (this.type = e.type), (this.details = e.details);
                }
                (i.prototype = Object.create(Error.prototype)),
                    (i.prototype.constructor = i),
                    (i.types = r(['CUSTOMER', 'MERCHANT', 'NETWORK', 'INTERNAL', 'UNKNOWN'])),
                    (i.findRootError = function (e) {
                        return e instanceof i && e.details && e.details.originalError ? i.findRootError(e.details.originalError) : e;
                    }),
                    (t.exports = i);
            },
            { './enumerate': 153 }
        ],
        144: [
            function (e, t, n) {
                t.exports = function e(t) {
                    var n;
                    return (
                        null === t
                            ? (n = null)
                            : Array.isArray(t)
                              ? ((n = []),
                                t.forEach(function (t) {
                                    n.push(e(t));
                                }))
                              : (n =
                                    'object' == typeof t
                                        ? Object.keys(t).reduce(function (n, r) {
                                              var i = r
                                                  .replace(/([a-z\d])([A-Z])/g, '$1_$2')
                                                  .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1_$2')
                                                  .toLowerCase();
                                              return 'object' == typeof t[r] ? (n[i] = e(t[r])) : (n[i] = t[r]), n;
                                          }, {})
                                        : t),
                        n
                    );
                };
            },
            {}
        ],
        145: [
            function (e, t, n) {
                var r = '3.112.1';
                t.exports = {
                    ANALYTICS_PREFIX: 'web.',
                    ANALYTICS_REQUEST_TIMEOUT_MS: 2000,
                    ANALYTICS_URL: 'https://www.paypal.com/xoplatform/logger/api/logger',
                    ASSETS_URLS: {
                        production: 'https://assets.braintreegateway.com',
                        sandbox: 'https://assets.braintreegateway.com'
                    },
                    CLIENT_API_URLS: {
                        production: 'https://api.braintreegateway.com:443',
                        sandbox: 'https://api.sandbox.braintreegateway.com:443'
                    },
                    FRAUDNET_SOURCE: 'BRAINTREE_SIGNIN',
                    FRAUDNET_FNCLS: 'fnparams-dede7cc5-15fd-4c75-a9f4-36c430ee3a99',
                    FRAUDNET_URL: 'https://c.paypal.com/da/r/fb.js',
                    BUS_CONFIGURATION_REQUEST_EVENT: 'BUS_CONFIGURATION_REQUEST',
                    GRAPHQL_URLS: {
                        production: 'https://payments.braintree-api.com/graphql',
                        sandbox: 'https://payments.sandbox.braintree-api.com/graphql'
                    },
                    INTEGRATION_TIMEOUT_MS: 60000,
                    VERSION: r,
                    INTEGRATION: 'custom',
                    SOURCE: 'client',
                    PLATFORM: 'web',
                    BRAINTREE_LIBRARY_VERSION: 'braintree/web/' + r
                };
            },
            {}
        ],
        146: [
            function (e, t, n) {
                var r = e('./braintree-error'),
                    i = e('./errors');
                t.exports = function (e, t) {
                    t.forEach(function (t) {
                        e[t] = function () {
                            throw new r({
                                type: i.METHOD_CALLED_AFTER_TEARDOWN.type,
                                code: i.METHOD_CALLED_AFTER_TEARDOWN.code,
                                message: t + ' cannot be called after teardown.'
                            });
                        };
                    });
                };
            },
            {
                './braintree-error': 143,
                './errors': 154
            }
        ],
        147: [
            function (e, t, n) {
                var r = e('./braintree-error');
                t.exports = function (e, t) {
                    return e instanceof r
                        ? e
                        : new r({
                              type: t.type,
                              code: t.code,
                              message: t.message,
                              details: { originalError: e }
                          });
                };
            },
            { './braintree-error': 143 }
        ],
        148: [
            function (e, t, n) {
                var r = e('./constants').ASSETS_URLS;
                t.exports = {
                    create: function (e) {
                        return r.production;
                    }
                };
            },
            { './constants': 145 }
        ],
        149: [
            function (e, t, n) {
                var r = e('../lib/vendor/polyfill').atob,
                    i = e('../lib/constants').CLIENT_API_URLS;
                t.exports = function (e) {
                    var t,
                        n,
                        o,
                        a,
                        s = {
                            attrs: {},
                            configUrl: ''
                        };
                    return (
                        /^[a-zA-Z0-9]+_[a-zA-Z0-9]+_[a-zA-Z0-9_]+$/.test(e)
                            ? ((n = (t = e.split('_'))[0]),
                              (s.environment = (a = {
                                  merchantId: t.slice(2).join('_'),
                                  environment: n
                              }).environment),
                              (s.attrs.tokenizationKey = e),
                              (s.configUrl = i[a.environment] + '/merchants/' + a.merchantId + '/client_api/v1/configuration'))
                            : ((s.environment = (o = JSON.parse(r(e))).environment), (s.attrs.authorizationFingerprint = o.authorizationFingerprint), (s.configUrl = o.configUrl), (s.graphQL = o.graphQL)),
                        s
                    );
                };
            },
            {
                '../lib/constants': 145,
                '../lib/vendor/polyfill': 182
            }
        ],
        150: [
            function (e, t, n) {
                var r = e('./braintree-error'),
                    i = e('./assets'),
                    o = e('./errors'),
                    a = '3.112.1';
                t.exports = {
                    create: function (e) {
                        var t = Promise.resolve();
                        return e.client
                            ? Promise.resolve(e.client)
                            : ((window.braintree && window.braintree.client) ||
                                  (t = i.loadScript({ src: e.assetsUrl + '/web/' + a + '/js/client.min.js' }).catch(function (e) {
                                      return Promise.reject(
                                          new r({
                                              type: o.CLIENT_SCRIPT_FAILED_TO_LOAD.type,
                                              code: o.CLIENT_SCRIPT_FAILED_TO_LOAD.code,
                                              message: o.CLIENT_SCRIPT_FAILED_TO_LOAD.message,
                                              details: { originalError: e }
                                          })
                                      );
                                  })),
                              t.then(function () {
                                  return window.braintree.client.VERSION !== a
                                      ? Promise.reject(
                                            new r({
                                                type: o.INCOMPATIBLE_VERSIONS.type,
                                                code: o.INCOMPATIBLE_VERSIONS.code,
                                                message: 'Client (version ' + window.braintree.client.VERSION + ') and ' + e.name + ' (version ' + a + ') components must be from the same SDK version.'
                                            })
                                        )
                                      : window.braintree.client.create({
                                            authorization: e.authorization,
                                            debug: e.debug
                                        });
                              }));
                    }
                };
            },
            {
                './assets': 139,
                './braintree-error': 143,
                './errors': 154
            }
        ],
        151: [
            function (e, t, n) {
                t.exports = function (e) {
                    return function () {
                        var t = arguments;
                        setTimeout(function () {
                            e.apply(null, t);
                        }, 1);
                    };
                };
            },
            {}
        ],
        152: [
            function (e, t, n) {
                var r = e('./batch-execute-functions');
                function i() {
                    (this._teardownRegistry = []), (this._isTearingDown = !1);
                }
                (i.prototype.registerFunctionForTeardown = function (e) {
                    'function' == typeof e && this._teardownRegistry.push(e);
                }),
                    (i.prototype.teardown = function (e) {
                        if (this._isTearingDown) return void e(Error('Destructor is already tearing down'));
                        (this._isTearingDown = !0),
                            r(
                                this._teardownRegistry,
                                function (t) {
                                    (this._teardownRegistry = []), (this._isTearingDown = !1), 'function' == typeof e && e(t);
                                }.bind(this)
                            );
                    }),
                    (t.exports = i);
            },
            { './batch-execute-functions': 142 }
        ],
        153: [
            function (e, t, n) {
                t.exports = function (e, t) {
                    return (
                        (t = null == t ? '' : t),
                        e.reduce(function (e, n) {
                            return (e[n] = t + n), e;
                        }, {})
                    );
                };
            },
            {}
        ],
        154: [
            function (e, t, n) {
                var r = e('./braintree-error');
                t.exports = {
                    INVALID_USE_OF_INTERNAL_FUNCTION: {
                        type: r.types.INTERNAL,
                        code: 'INVALID_USE_OF_INTERNAL_FUNCTION'
                    },
                    INSTANTIATION_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'INSTANTIATION_OPTION_REQUIRED'
                    },
                    INCOMPATIBLE_VERSIONS: {
                        type: r.types.MERCHANT,
                        code: 'INCOMPATIBLE_VERSIONS'
                    },
                    CLIENT_SCRIPT_FAILED_TO_LOAD: {
                        type: r.types.NETWORK,
                        code: 'CLIENT_SCRIPT_FAILED_TO_LOAD',
                        message: 'Braintree client script could not be loaded.'
                    },
                    METHOD_CALLED_AFTER_TEARDOWN: {
                        type: r.types.MERCHANT,
                        code: 'METHOD_CALLED_AFTER_TEARDOWN'
                    }
                };
            },
            { './braintree-error': 143 }
        ],
        155: [
            function (e, t, n) {
                t.exports = function (e) {
                    for (; e.parentNode; ) e = e.parentNode;
                    return e;
                };
            },
            {}
        ],
        156: [
            function (e, t, n) {
                t.exports = function (e, t, n) {
                    var r;
                    for (r = 0; r < e.length; r++) if (e[r].hasOwnProperty(t) && e[r][t] === n) return e[r];
                    return null;
                };
            },
            {}
        ],
        157: [
            function (e, t, n) {
                var r = e('./strategies/popup'),
                    i = e('./strategies/popup-bridge'),
                    o = e('./strategies/modal'),
                    a = e('framebus'),
                    s = e('../shared/events'),
                    c = e('../shared/errors'),
                    d = e('../shared/constants'),
                    l = e('@braintree/uuid'),
                    u = e('@braintree/iframer'),
                    p = e('../../braintree-error'),
                    _ = e('../shared/browser-detection'),
                    E = e('./../../assign').assign,
                    h = e('../../constants').BUS_CONFIGURATION_REQUEST_EVENT,
                    m = ['name', 'dispatchFrameUrl', 'openFrameUrl'];
                function f() {}
                function y(e) {
                    if (!e) throw Error('Valid configuration is required');
                    if (
                        (m.forEach(function (t) {
                            if (!e.hasOwnProperty(t)) throw Error('A valid frame ' + t + ' must be provided');
                        }),
                        !/^[\w_]+$/.test(e.name))
                    )
                        throw Error('A valid frame name must be provided');
                    (this._serviceId = l().replace(/-/g, '')),
                        (this._options = {
                            name: e.name + '_' + this._serviceId,
                            dispatchFrameUrl: e.dispatchFrameUrl,
                            openFrameUrl: e.openFrameUrl,
                            height: e.height,
                            width: e.width,
                            top: e.top,
                            left: e.left
                        }),
                        (this.state = e.state || {}),
                        (this._bus = new a({ channel: this._serviceId })),
                        this._setBusEvents();
                }
                (y.prototype.initialize = function (e) {
                    var t = function () {
                        e(), this._bus.off(s.DISPATCH_FRAME_READY, t);
                    }.bind(this);
                    this._bus.on(s.DISPATCH_FRAME_READY, t), this._writeDispatchFrame();
                }),
                    (y.prototype._writeDispatchFrame = function () {
                        var e = d.DISPATCH_FRAME_NAME + '_' + this._serviceId,
                            t = this._options.dispatchFrameUrl;
                        (this._dispatchFrame = u({
                            'aria-hidden': !0,
                            name: e,
                            title: e,
                            src: t,
                            class: d.DISPATCH_FRAME_CLASS,
                            height: 0,
                            width: 0,
                            style: {
                                position: 'absolute',
                                left: '-9999px'
                            }
                        })),
                            document.body.appendChild(this._dispatchFrame);
                    }),
                    (y.prototype._setBusEvents = function () {
                        this._bus.on(
                            s.DISPATCH_FRAME_REPORT,
                            function (e, t) {
                                this._onCompleteCallback && this._onCompleteCallback.call(null, e.err, e.payload), this._frame.close(), (this._onCompleteCallback = null), t && t();
                            }.bind(this)
                        ),
                            this._bus.on(
                                h,
                                function (e) {
                                    e(this.state);
                                }.bind(this)
                            );
                    }),
                    (y.prototype.open = function (e, t) {
                        if (((e = e || {}), (this._frame = this._getFrameForEnvironment(e)), this._frame.initialize(t), !(this._frame instanceof i))) {
                            if ((E(this.state, e.state), (this._onCompleteCallback = t), this._frame.open(), this.isFrameClosed())) {
                                this._cleanupFrame(), t && t(new p(c.FRAME_SERVICE_FRAME_OPEN_FAILED));
                                return;
                            }
                            this._pollForPopupClose();
                        }
                    }),
                    (y.prototype.redirect = function (e) {
                        this._frame && !this.isFrameClosed() && this._frame.redirect(e);
                    }),
                    (y.prototype.close = function () {
                        this.isFrameClosed() || this._frame.close();
                    }),
                    (y.prototype.focus = function () {
                        this.isFrameClosed() || this._frame.focus();
                    }),
                    (y.prototype.createHandler = function (e) {
                        return (
                            (e = e || {}),
                            {
                                close: function () {
                                    e.beforeClose && e.beforeClose(), this.close();
                                }.bind(this),
                                focus: function () {
                                    e.beforeFocus && e.beforeFocus(), this.focus();
                                }.bind(this)
                            }
                        );
                    }),
                    (y.prototype.createNoopHandler = function () {
                        return {
                            close: f,
                            focus: f
                        };
                    }),
                    (y.prototype.teardown = function () {
                        this.close(), this._dispatchFrame.parentNode.removeChild(this._dispatchFrame), (this._dispatchFrame = null), this._cleanupFrame();
                    }),
                    (y.prototype.isFrameClosed = function () {
                        return null == this._frame || this._frame.isClosed();
                    }),
                    (y.prototype._cleanupFrame = function () {
                        (this._frame = null), clearInterval(this._popupInterval), (this._popupInterval = null);
                    }),
                    (y.prototype._pollForPopupClose = function () {
                        return (
                            (this._popupInterval = setInterval(
                                function () {
                                    this.isFrameClosed() && (this._cleanupFrame(), this._onCompleteCallback && this._onCompleteCallback(new p(c.FRAME_SERVICE_FRAME_CLOSED)));
                                }.bind(this),
                                d.POPUP_POLL_INTERVAL
                            )),
                            this._popupInterval
                        );
                    }),
                    (y.prototype._getFrameForEnvironment = function (e) {
                        var t = _.supportsPopups(),
                            n = !!window.popupBridge,
                            a = E({}, this._options, e);
                        return n ? new i(a) : t ? new r(a) : new o(a);
                    }),
                    (t.exports = y);
            },
            {
                '../../braintree-error': 143,
                '../../constants': 145,
                '../shared/browser-detection': 164,
                '../shared/constants': 165,
                '../shared/errors': 166,
                '../shared/events': 167,
                './../../assign': 140,
                './strategies/modal': 159,
                './strategies/popup': 162,
                './strategies/popup-bridge': 160,
                '@braintree/iframer': 32,
                '@braintree/uuid': 36,
                framebus: 50
            }
        ],
        158: [
            function (e, t, n) {
                var r = e('./frame-service');
                t.exports = {
                    create: function (e, t) {
                        var n = new r(e);
                        n.initialize(function () {
                            t(n);
                        });
                    }
                };
            },
            { './frame-service': 157 }
        ],
        159: [
            function (e, t, n) {
                var r = e('@braintree/iframer'),
                    i = e('../../../assign').assign,
                    o = e('../../shared/browser-detection'),
                    a = {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        padding: 0,
                        margin: 0,
                        border: 0,
                        outline: 'none',
                        zIndex: 20001,
                        background: '#FFFFFF'
                    };
                function s() {}
                function c(e) {
                    (this._closed = null), (this._frame = null), (this._options = e || {}), (this._container = this._options.container || document.body);
                }
                (c.prototype.initialize = s),
                    (c.prototype.open = function () {
                        var e = {
                            src: this._options.openFrameUrl,
                            name: this._options.name,
                            scrolling: 'yes',
                            height: '100%',
                            width: '100%',
                            style: i({}, a),
                            title: 'Lightbox Frame'
                        };
                        o.isIos()
                            ? (o.isIosWKWebview() && (this._lockScrolling(), (e.style = {})),
                              (this._el = document.createElement('div')),
                              i(this._el.style, a, {
                                  height: '100%',
                                  width: '100%',
                                  overflow: 'auto',
                                  '-webkit-overflow-scrolling': 'touch'
                              }),
                              (this._frame = r(e)),
                              this._el.appendChild(this._frame))
                            : (this._el = this._frame = r(e)),
                            (this._closed = !1),
                            this._container.appendChild(this._el);
                    }),
                    (c.prototype.focus = s),
                    (c.prototype.close = function () {
                        this._container.removeChild(this._el), (this._frame = null), (this._closed = !0), o.isIosWKWebview() && this._unlockScrolling();
                    }),
                    (c.prototype.isClosed = function () {
                        return !!this._closed;
                    }),
                    (c.prototype.redirect = function (e) {
                        this._frame.src = e;
                    }),
                    (c.prototype._unlockScrolling = function () {
                        (document.body.style.overflow = this._savedBodyProperties.overflowStyle), (document.body.style.position = this._savedBodyProperties.positionStyle), window.scrollTo(this._savedBodyProperties.left, this._savedBodyProperties.top), delete this._savedBodyProperties;
                    }),
                    (c.prototype._lockScrolling = function () {
                        var e = document.documentElement;
                        (this._savedBodyProperties = {
                            left: (window.pageXOffset || e.scrollLeft) - (e.clientLeft || 0),
                            top: (window.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                            overflowStyle: document.body.style.overflow,
                            positionStyle: document.body.style.position
                        }),
                            (document.body.style.overflow = 'hidden'),
                            (document.body.style.position = 'fixed'),
                            window.scrollTo(0, 0);
                    }),
                    (t.exports = c);
            },
            {
                '../../../assign': 140,
                '../../shared/browser-detection': 164,
                '@braintree/iframer': 32
            }
        ],
        160: [
            function (e, t, n) {
                var r = e('../../../braintree-error'),
                    i = e('../../shared/errors');
                function o() {}
                function a(e) {
                    (this._closed = null), (this._options = e);
                }
                (a.prototype.initialize = function (e) {
                    var t = this;
                    window.popupBridge.onComplete = function (n, o) {
                        var a = !o && !n;
                        if (((t._closed = !0), n || a)) return void e(new r(i.FRAME_SERVICE_FRAME_CLOSED));
                        e(null, o);
                    };
                }),
                    (a.prototype.open = function (e) {
                        var t;
                        (t = (e = e || {}).openFrameUrl || this._options.openFrameUrl), (this._closed = !1), window.popupBridge.open(t);
                    }),
                    (a.prototype.focus = o),
                    (a.prototype.close = o),
                    (a.prototype.isClosed = function () {
                        return !!this._closed;
                    }),
                    (a.prototype.redirect = function (e) {
                        this.open({ openFrameUrl: e });
                    }),
                    (t.exports = a);
            },
            {
                '../../../braintree-error': 143,
                '../../shared/errors': 166
            }
        ],
        161: [
            function (e, t, n) {
                var r = e('../../../shared/constants'),
                    i = e('./position');
                function o(e, t, n) {
                    return void 0 !== t ? t : i[e](n);
                }
                t.exports = function (e) {
                    var t = e.height || r.DEFAULT_POPUP_HEIGHT,
                        n = e.width || r.DEFAULT_POPUP_WIDTH,
                        i = o('top', e.top, t),
                        a = o('left', e.left, n);
                    return [r.POPUP_BASE_OPTIONS, 'height=' + t, 'width=' + n, 'top=' + i, 'left=' + a].join(',');
                };
            },
            {
                '../../../shared/constants': 165,
                './position': 163
            }
        ],
        162: [
            function (e, t, n) {
                var r = e('./compose-options');
                function i(e) {
                    (this._frame = null), (this._options = e || {});
                }
                (i.prototype.initialize = function () {}),
                    (i.prototype.open = function () {
                        this._frame = window.open(this._options.openFrameUrl, this._options.name, r(this._options));
                    }),
                    (i.prototype.focus = function () {
                        this._frame.focus();
                    }),
                    (i.prototype.close = function () {
                        this._frame.closed || this._frame.close();
                    }),
                    (i.prototype.isClosed = function () {
                        return !this._frame || !!this._frame.closed;
                    }),
                    (i.prototype.redirect = function (e) {
                        this._frame.location.href = e;
                    }),
                    (t.exports = i);
            },
            { './compose-options': 161 }
        ],
        163: [
            function (e, t, n) {
                t.exports = {
                    top: function (e) {
                        var t;
                        return (t = window.outerHeight || document.documentElement.clientHeight), (t - e) / 2 + (null == window.screenY ? window.screenTop : window.screenY);
                    },
                    left: function (e) {
                        var t;
                        return (t = window.outerWidth || document.documentElement.clientWidth), (t - e) / 2 + (null == window.screenX ? window.screenLeft : window.screenX);
                    },
                    center: function (e, t, n) {
                        return (e - t) / 2 + n;
                    }
                };
            },
            {}
        ],
        164: [
            function (e, t, n) {
                t.exports = {
                    isIos: e('@braintree/browser-detection/is-ios'),
                    isIosWKWebview: e('@braintree/browser-detection/is-ios-wkwebview'),
                    supportsPopups: e('@braintree/browser-detection/supports-popups')
                };
            },
            {
                '@braintree/browser-detection/is-ios': 27,
                '@braintree/browser-detection/is-ios-wkwebview': 26,
                '@braintree/browser-detection/supports-popups': 29
            }
        ],
        165: [
            function (e, t, n) {
                t.exports = {
                    DISPATCH_FRAME_NAME: 'dispatch',
                    DISPATCH_FRAME_CLASS: 'braintree-dispatch-frame',
                    POPUP_BASE_OPTIONS: 'resizable,scrollbars',
                    DEFAULT_POPUP_WIDTH: 450,
                    DEFAULT_POPUP_HEIGHT: 535,
                    POPUP_POLL_INTERVAL: 100,
                    POPUP_CLOSE_TIMEOUT: 100
                };
            },
            {}
        ],
        166: [
            function (e, t, n) {
                var r = e('../../braintree-error');
                t.exports = {
                    FRAME_SERVICE_FRAME_CLOSED: {
                        type: r.types.INTERNAL,
                        code: 'FRAME_SERVICE_FRAME_CLOSED',
                        message: 'Frame closed before tokenization could occur.'
                    },
                    FRAME_SERVICE_FRAME_OPEN_FAILED: {
                        type: r.types.INTERNAL,
                        code: 'FRAME_SERVICE_FRAME_OPEN_FAILED',
                        message: 'Frame failed to open.'
                    }
                };
            },
            { '../../braintree-error': 143 }
        ],
        167: [
            function (e, t, n) {
                t.exports = e('../../enumerate')(['DISPATCH_FRAME_READY', 'DISPATCH_FRAME_REPORT'], 'frameService:');
            },
            { '../../enumerate': 153 }
        ],
        168: [
            function (e, t, n) {
                var r = '3.112.1',
                    i = e('./assign').assign;
                function o(e, t) {
                    var n = e.analyticsMetadata;
                    return i(
                        {},
                        {
                            gateway: 'braintree',
                            'braintree:merchantId': e.gatewayConfiguration.merchantId,
                            'braintree:apiVersion': 'v1',
                            'braintree:sdkVersion': r,
                            'braintree:metadata': JSON.stringify({
                                source: n.source,
                                integration: n.integration,
                                sessionId: n.sessionId,
                                version: r,
                                platform: n.platform
                            })
                        },
                        t
                    );
                }
                t.exports = function (e, t, n) {
                    var r,
                        i,
                        a = e.gatewayConfiguration.androidPay,
                        s = 'production' === e.gatewayConfiguration.environment ? 'PRODUCTION' : 'TEST';
                    return (
                        2 === t
                            ? ((r = {
                                  apiVersion: 2,
                                  apiVersionMinor: 0,
                                  environment: s,
                                  allowedPaymentMethods: [
                                      {
                                          type: 'CARD',
                                          parameters: {
                                              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                              allowedCardNetworks: a.supportedNetworks.map(function (e) {
                                                  return e.toUpperCase();
                                              })
                                          },
                                          tokenizationSpecification: {
                                              type: 'PAYMENT_GATEWAY',
                                              parameters: o(e, { 'braintree:authorizationFingerprint': a.googleAuthorizationFingerprint })
                                          }
                                      }
                                  ]
                              }),
                              n && (r.merchantInfo = { merchantId: n }),
                              a.paypalClientId &&
                                  ((i = {
                                      type: 'PAYPAL',
                                      parameters: {
                                          purchase_context: {
                                              purchase_units: [
                                                  {
                                                      payee: { client_id: a.paypalClientId },
                                                      recurring_payment: !0
                                                  }
                                              ]
                                          }
                                      },
                                      tokenizationSpecification: {
                                          type: 'PAYMENT_GATEWAY',
                                          parameters: o(e, { 'braintree:paypalClientId': a.paypalClientId })
                                      }
                                  }),
                                  r.allowedPaymentMethods.push(i)))
                            : ((r = {
                                  environment: s,
                                  allowedPaymentMethods: ['CARD', 'TOKENIZED_CARD'],
                                  paymentMethodTokenizationParameters: {
                                      tokenizationType: 'PAYMENT_GATEWAY',
                                      parameters: o(e, { 'braintree:authorizationFingerprint': a.googleAuthorizationFingerprint })
                                  },
                                  cardRequirements: {
                                      allowedCardNetworks: a.supportedNetworks.map(function (e) {
                                          return e.toUpperCase();
                                      })
                                  }
                              }),
                              'TOKENIZATION_KEY' === e.authorizationType && (r.paymentMethodTokenizationParameters.parameters['braintree:clientKey'] = e.authorization),
                              n && (r.merchantId = n),
                              t && (r.apiVersion = t)),
                        r
                    );
                };
            },
            { './assign': 140 }
        ],
        169: [
            function (e, t, n) {
                t.exports = function (e) {
                    e = e || window;
                    try {
                        return e.self !== e.top;
                    } catch (e) {
                        return !0;
                    }
                };
            },
            {}
        ],
        170: [
            function (e, t, n) {
                function r(e) {
                    var t = e.split('-');
                    return new Date(t[0], t[1], t[2]);
                }
                t.exports = function (e, t) {
                    return r(e) <= r(t);
                };
            },
            {}
        ],
        171: [
            function (e, t, n) {
                t.exports = function (e) {
                    return e && e.hasOwnProperty('fastlane') && e.fastlane;
                };
            },
            {}
        ],
        172: [
            function (e, t, n) {
                t.exports = {
                    isHTTPS: function (e) {
                        return 'https:' === (e = e || window.location.protocol);
                    }
                };
            },
            {}
        ],
        173: [
            function (e, t, n) {
                var r,
                    i = {
                        'paypal.com': 1,
                        'braintreepayments.com': 1,
                        'braintreegateway.com': 1,
                        'braintree-api.com': 1
                    };
                t.exports = function (e) {
                    var t;
                    return (e = e.toLowerCase()), !!/^https:/.test(e) && (((r = r || document.createElement('a')).href = e), (t = r.hostname.split('.').slice(-2).join('.')), i.hasOwnProperty(t));
                };
            },
            {}
        ],
        174: [
            function (e, t, n) {
                t.exports = function (e) {
                    return JSON.parse(JSON.stringify(e));
                };
            },
            {}
        ],
        175: [
            function (e, t, n) {
                t.exports = function (e) {
                    return Object.keys(e).filter(function (t) {
                        return 'function' == typeof e[t];
                    });
                };
            },
            {}
        ],
        176: [
            function (e, t, n) {
                t.exports = function (e) {
                    var t = !1;
                    return function () {
                        t || ((t = !0), e.apply(null, arguments));
                    };
                };
            },
            {}
        ],
        177: [
            function (e, t, n) {
                function r(e) {
                    return (e = e || window.location.href), /\?/.test(e);
                }
                function i(e, t) {
                    var n,
                        r,
                        o,
                        a = [];
                    for (o in e) e.hasOwnProperty(o) && ((r = e[o]), (n = t ? (e && 'object' == typeof e && 'number' == typeof e.length && '[object Array]' === Object.prototype.toString.call(e) ? t + '[]' : t + '[' + o + ']') : o), 'object' == typeof r ? a.push(i(r, n)) : a.push(encodeURIComponent(n) + '=' + encodeURIComponent(r)));
                    return a.join('&');
                }
                t.exports = {
                    parse: function (e) {
                        var t;
                        return r((e = e || window.location.href))
                            ? (e.split('?')[1] || '')
                                  .replace(/#.*$/, '')
                                  .split('&')
                                  .reduce(function (e, t) {
                                      var n = t.split('='),
                                          r = decodeURIComponent(n[0]),
                                          i = decodeURIComponent(n[1]);
                                      return (e[r] = i), e;
                                  }, {})
                            : {};
                    },
                    stringify: i,
                    queryify: function (e, t) {
                        return (
                            (e = e || ''),
                            null != t &&
                                'object' == typeof t &&
                                (function (e) {
                                    var t;
                                    for (t in e) if (e.hasOwnProperty(t)) return !0;
                                    return !1;
                                })(t) &&
                                ((e += -1 === e.indexOf('?') ? '?' : ''), (e += -1 !== e.indexOf('=') ? '&' : ''), (e += i(t))),
                            e
                        );
                    },
                    hasQueryParams: r
                };
            },
            {}
        ],
        178: [
            function (e, t, n) {
                var r = e('@braintree/uuid'),
                    i = e('./find-root-node');
                function o(e) {
                    return '[object ShadowRoot]' === (e = i(e)).toString();
                }
                function a(e) {
                    return o((e = i(e))) ? e.host : null;
                }
                t.exports = {
                    isShadowElement: o,
                    getShadowHost: a,
                    transformToSlot: function e(t, n) {
                        var s = i(t).querySelector('style'),
                            c = a(t),
                            d = 'shadow-slot-' + r(),
                            l = document.createElement('slot'),
                            u = document.createElement('div');
                        return (l.setAttribute('name', d), t.appendChild(l), u.setAttribute('slot', d), c.appendChild(u), n && (s || ((s = document.createElement('style')), t.appendChild(s)), s.sheet.insertRule('::slotted([slot="' + d + '"]) { ' + n + ' }')), o(c)) ? e(u, n) : u;
                    }
                };
            },
            {
                './find-root-node': 155,
                '@braintree/uuid': 36
            }
        ],
        179: [
            function (e, t, n) {
                t.exports = function (e) {
                    return -1 === e.indexOf('_')
                        ? e
                        : e.toLowerCase().replace(/(\_\w)/g, function (e) {
                              return e[1].toUpperCase();
                          });
                };
            },
            {}
        ],
        180: [
            function (e, t, n) {
                var r = e('./querystring');
                t.exports = {
                    getUrlParams: function () {
                        return r.parse(window.location.href);
                    }
                };
            },
            { './querystring': 177 }
        ],
        181: [
            function (e, t, n) {
                t.exports = function (e) {
                    return e ? '' : '.min';
                };
            },
            {}
        ],
        182: [
            function (e, t, n) {
                var r = 'function' == typeof atob ? atob : i;
                function i(e) {
                    var t,
                        n,
                        r,
                        i,
                        o,
                        a,
                        s,
                        c,
                        d = RegExp('^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})([=]{1,2})?$'),
                        l = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                        u = '';
                    if (!d.test(e)) throw Error('Non base64 encoded input passed to window.atob polyfill');
                    c = 0;
                    do (i = l.indexOf(e.charAt(c++))), (o = l.indexOf(e.charAt(c++))), (a = l.indexOf(e.charAt(c++))), (s = l.indexOf(e.charAt(c++))), (t = ((63 & i) << 2) | ((o >> 4) & 3)), (n = ((15 & o) << 4) | ((a >> 2) & 15)), (r = ((3 & a) << 6) | (63 & s)), (u += String.fromCharCode(t) + (n ? String.fromCharCode(n) : '') + (r ? String.fromCharCode(r) : ''));
                    while (c < e.length);
                    return u;
                }
                t.exports = {
                    atob: function (e) {
                        return r.call(window, e);
                    },
                    _atob: i
                };
            },
            {}
        ],
        183: [
            function (e, t, n) {
                t.exports = {
                    REQUIRED_OPTIONS_FOR_START_PAYMENT: ['givenName', 'surname', 'currencyCode', 'paymentType', 'amount', 'fallback'],
                    REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE: ['givenName', 'surname', 'currencyCode', 'onPaymentStart', 'paymentType', 'amount', 'address', 'billingAddress', 'birthDate', 'email', 'locale', 'customerServiceInstructions', 'correlationId', 'phone', 'phoneCountryCode', 'lineItems'],
                    REQUIRED_OPTIONS_FOR_ADDRESS: ['streetAddress', 'locality', 'postalCode', 'countryCode'],
                    REQUIRED_OPTIONS_FOR_LINE_ITEMS: ['category', 'name', 'quantity', 'unitAmount', 'unitTaxAmount'],
                    REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE: ['givenName', 'surname', 'currencyCode', 'paymentType', 'amount'],
                    REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0: ['authCode'],
                    REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST: ['authCode', 'consumerReference', 'aliasLabel'],
                    REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT: ['consumerReference', 'aliasKey']
                };
            },
            {}
        ],
        184: [
            function (e, t, n) {
                var r = e('../../lib/frame-service/external'),
                    i = e('../../lib/braintree-error'),
                    o = e('../../lib/use-min'),
                    a = e('../../lib/constants').INTEGRATION_TIMEOUT_MS,
                    s = e('../../lib/analytics'),
                    c = e('../../lib/methods'),
                    d = e('../../lib/convert-methods-to-error'),
                    l = e('../../lib/convert-to-braintree-error'),
                    u = e('@braintree/extended-promise'),
                    p = e('../../lib/querystring'),
                    _ = e('@braintree/wrap-promise'),
                    E = e('./constants'),
                    h = e('../shared/errors'),
                    m = e('../../lib/assign').assign;
                function f(e) {
                    (this._client = e.client), (this._assetsUrl = e.client.getConfiguration().gatewayConfiguration.assetsUrl + '/web/3.112.1'), (this._isDebug = e.client.getConfiguration().isDebug), (this._loadingFrameUrl = this._assetsUrl + '/html/local-payment-landing-frame' + o(this._isDebug) + '.html'), (this._authorizationInProgress = !1), (this._paymentType = 'unknown'), (this._merchantAccountId = e.merchantAccountId), e.redirectUrl && ((this._redirectUrl = e.redirectUrl), (this._isRedirectFlow = !0));
                }
                function y(e) {
                    var t = e.blikOptions || {},
                        n = 'string' == typeof e.paymentType ? e.paymentType.toLowerCase() : e.paymentType;
                    return 'blik' === n ? t.hasOwnProperty('level_0') || t.hasOwnProperty('oneClick') : ['pay_upon_invoice', 'mbway', 'bancomatpay'].includes(n);
                }
                (u.suppressUnhandledPromiseMessage = !0),
                    (f.prototype._initialize = function () {
                        var e = this,
                            t = this._client,
                            n = setTimeout(function () {
                                s.sendEvent(t, 'local-payment.load.timed-out');
                            }, a);
                        return new Promise(function (i) {
                            r.create(
                                {
                                    name: 'localpaymentlandingpage',
                                    dispatchFrameUrl: e._assetsUrl + '/html/dispatch-frame' + o(e._isDebug) + '.html',
                                    openFrameUrl: e._loadingFrameUrl
                                },
                                function (r) {
                                    (e._frameService = r), clearTimeout(n), s.sendEvent(t, 'local-payment.load.succeeded'), i(e);
                                }
                            );
                        });
                    }),
                    (f.prototype.startPayment = function (e) {
                        var t,
                            n,
                            r,
                            a,
                            c,
                            d,
                            _,
                            f,
                            A,
                            T,
                            I,
                            N,
                            O = this;
                        return (O._isRedirectFlow ? (e.redirectUrl = O._redirectUrl) : (T = O._frameService._serviceId),
                        (t = (function (e) {
                            if (!e) return !0;
                            if (y(e)) {
                                if ('pay_upon_invoice' === (o = e.paymentType || '').toLowerCase())
                                    for (t = 0; t < E.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE.length; t++) {
                                        if (((n = E.REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE[t]), !e.hasOwnProperty(n))) return n;
                                        if ('address' === n || 'billingAddress' === n) {
                                            if (
                                                (r = (function (e) {
                                                    var t, n;
                                                    for (t = 0; t < E.REQUIRED_OPTIONS_FOR_ADDRESS.length; t++) if (((n = E.REQUIRED_OPTIONS_FOR_ADDRESS[t]), !e.hasOwnProperty(n))) return n;
                                                    return !1;
                                                })(e[n]))
                                            )
                                                return n + '.' + r;
                                        } else if (
                                            'lineItems' === n &&
                                            (i = (function (e) {
                                                var t, n, r, i;
                                                for (n = 0; n < e.length; n++) for (t = 0, r = e[n]; t < E.REQUIRED_OPTIONS_FOR_LINE_ITEMS.length; t++) if (((i = E.REQUIRED_OPTIONS_FOR_LINE_ITEMS[t]), !r.hasOwnProperty(i))) return i;
                                                return !1;
                                            })(e[n]))
                                        )
                                            return n + '.' + i;
                                    }
                                else if ('blik' === o.toLowerCase()) {
                                    var t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        c,
                                        d = e.blikOptions || {};
                                    for (e.redirectUrl || E.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE.push('onPaymentStart'), a = 0; a < E.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE.length; a++) if (((s = E.REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE[a]), !e.hasOwnProperty(s))) return s;
                                    if (d.hasOwnProperty('level_0')) {
                                        for (a = 0; a < E.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0.length; a++) if (((s = E.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0[a]), !d.level_0.hasOwnProperty(s))) return 'blikOptions.level_0.' + s;
                                    } else if (d.hasOwnProperty('oneClick')) {
                                        if ((c = d.oneClick || {}).hasOwnProperty('aliasKey')) {
                                            for (a = 0; a < E.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT.length; a++) if (((s = E.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT[a]), !c.hasOwnProperty(s))) return 'blikOptions.oneClick.' + s;
                                        } else for (a = 0; a < E.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST.length; a++) if (((s = E.REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST[a]), !c.hasOwnProperty(s))) return 'blikOptions.oneClick.' + s;
                                    }
                                }
                            } else {
                                for (e.redirectUrl || E.REQUIRED_OPTIONS_FOR_START_PAYMENT.push('onPaymentStart'), t = 0; t < E.REQUIRED_OPTIONS_FOR_START_PAYMENT.length; t++) if (((n = E.REQUIRED_OPTIONS_FOR_START_PAYMENT[t]), !e.hasOwnProperty(n))) return n;
                                if (!e.fallback.url) return 'fallback.url';
                                if (!e.fallback.buttonText) return 'fallback.buttonText';
                                if (!0 === e.recurrent && !e.customerId) return 'customerId';
                            }
                            return !1;
                        })(e)))
                            ? ((n = new i(h.LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION)), 'string' == typeof t && (n.details = "Missing required '" + t + "' option."), Promise.reject(n))
                            : ((f = e.windowOptions || {}),
                                (r = e.address || {}),
                                (a = e.fallback || {}),
                                (_ = e.billingAddress || {}),
                                (c = {
                                    amount: e.amount,
                                    billingAddress: {
                                        line1: _.streetAddress,
                                        line2: _.extendedAddress,
                                        city: _.locality,
                                        state: _.region,
                                        postalCode: _.postalCode,
                                        countryCode: _.countryCode
                                    },
                                    birthDate: e.birthDate,
                                    blikOptions: e.blikOptions,
                                    city: r.locality,
                                    correlationId: e.correlationId,
                                    countryCode: r.countryCode,
                                    currencyIsoCode: e.currencyCode,
                                    discountAmount: e.discountAmount,
                                    experienceProfile: {
                                        brandName: e.displayName,
                                        customerServiceInstructions: e.customerServiceInstructions,
                                        locale: e.locale,
                                        noShipping: !e.shippingAddressRequired
                                    },
                                    firstName: e.givenName,
                                    fundingSource: e.paymentType,
                                    intent: 'sale',
                                    lastName: e.surname,
                                    line1: r.streetAddress,
                                    line2: r.extendedAddress,
                                    lineItems: e.lineItems,
                                    merchantAccountId: O._merchantAccountId,
                                    merchantOrPartnerCustomerId: e.customerId,
                                    payerEmail: e.email,
                                    paymentTypeCountryCode: e.paymentTypeCountryCode,
                                    phone: e.phone,
                                    phoneCountryCode: e.phoneCountryCode,
                                    postalCode: r.postalCode,
                                    recurrent: e.recurrent,
                                    shippingAmount: e.shippingAmount,
                                    state: r.region
                                }),
                                O._isRedirectFlow
                                    ? ((I = p.queryify(O._redirectUrl, { wasCanceled: !0 })), (N = O._redirectUrl))
                                    : ((I = p.queryify(O._assetsUrl + '/html/local-payment-redirect-frame' + o(O._isDebug) + '.html', {
                                          channel: T,
                                          r: a.cancelUrl || a.url,
                                          t: a.cancelButtonText || a.buttonText,
                                          c: 1
                                      })),
                                      (N = p.queryify(O._assetsUrl + '/html/local-payment-redirect-frame' + o(O._isDebug) + '.html', {
                                          channel: T,
                                          r: a.url,
                                          t: a.buttonText
                                      }))),
                                m(c, {
                                    cancelUrl: I,
                                    returnUrl: N
                                }),
                                (O._paymentType = e.paymentType.toLowerCase()),
                                O._authorizationInProgress && !O._isRedirectFlow)
                              ? (s.sendEvent(O._client, O._paymentType + '.local-payment.start-payment.error.already-opened'), Promise.reject(new i(h.LOCAL_PAYMENT_ALREADY_IN_PROGRESS)))
                              : ((O._authorizationInProgress = !0),
                                (d = new u()),
                                y(e) ||
                                    O._isRedirectFlow ||
                                    ((O._startPaymentCallback = O._createStartPaymentCallback(
                                        function (e) {
                                            d.resolve(e);
                                        },
                                        function (e) {
                                            d.reject(e);
                                        }
                                    )),
                                    O._frameService.open(
                                        {
                                            width: f.width || 1282,
                                            height: f.height || 720
                                        },
                                        O._startPaymentCallback
                                    )),
                                O._client
                                    .request({
                                        method: 'post',
                                        endpoint: 'local_payments/create',
                                        data: c
                                    })
                                    .then(function (t) {
                                        var n = t.paymentResource.redirectUrl;
                                        O._isRedirectFlow ? s.sendEvent(O._client, O._paymentType + '.local-payment.start-payment.redirected') : s.sendEvent(O._client, O._paymentType + '.local-payment.start-payment.opened'),
                                            (O._startPaymentOptions = e),
                                            y(e)
                                                ? ((O._authorizationInProgress = !1),
                                                  'string' == typeof n && n.length
                                                      ? d.reject(new i(h.LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED))
                                                      : (A = e.onPaymentStart({ paymentId: t.paymentResource.paymentToken })) instanceof Promise
                                                        ? A.then(function () {
                                                              d.resolve();
                                                          })
                                                        : d.resolve())
                                                : O._isRedirectFlow
                                                  ? (window.location.href = t.paymentResource.redirectUrl)
                                                  : e.onPaymentStart({ paymentId: t.paymentResource.paymentToken }, function () {
                                                        O._frameService.redirect(t.paymentResource.redirectUrl);
                                                    });
                                    })
                                    .catch(function (e) {
                                        var t = e.details && e.details.httpStatus;
                                        if ((O._isRedirectFlow || O._frameService.close(), (O._authorizationInProgress = !1), 422 === t))
                                            return void d.reject(
                                                new i({
                                                    type: h.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.type,
                                                    code: h.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.code,
                                                    message: h.LOCAL_PAYMENT_INVALID_PAYMENT_OPTION.message,
                                                    details: { originalError: e }
                                                })
                                            );
                                        d.reject(
                                            l(e, {
                                                type: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.type,
                                                code: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.code,
                                                message: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.message
                                            })
                                        );
                                    }),
                                d);
                    }),
                    (f.prototype.tokenize = function (e) {
                        var t = this,
                            n = this._client;
                        return ((e = e || p.parse()).queryItems && (e = e.queryItems), e.c || e.wasCanceled)
                            ? Promise.reject(
                                  new i({
                                      type: h.LOCAL_PAYMENT_CANCELED.type,
                                      code: h.LOCAL_PAYMENT_CANCELED.code,
                                      message: h.LOCAL_PAYMENT_CANCELED.message,
                                      details: {
                                          originalError: {
                                              errorcode: e.errorcode,
                                              token: e.btLpToken
                                          }
                                      }
                                  })
                              )
                            : e.errorcode
                              ? Promise.reject(
                                    new i({
                                        type: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.type,
                                        code: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.code,
                                        message: h.LOCAL_PAYMENT_START_PAYMENT_FAILED.message,
                                        details: {
                                            originalError: {
                                                errorcode: e.errorcode,
                                                token: e.btLpToken
                                            }
                                        }
                                    })
                                )
                              : n
                                    .request({
                                        endpoint: 'payment_methods/paypal_accounts',
                                        method: 'post',
                                        data: this._formatTokenizeData(e)
                                    })
                                    .then(function (e) {
                                        var r = t._formatTokenizePayload(e);
                                        return window.popupBridge ? s.sendEvent(n, t._paymentType + '.local-payment.tokenization.success-popupbridge') : s.sendEvent(n, t._paymentType + '.local-payment.tokenization.success'), r;
                                    })
                                    .catch(function (e) {
                                        return (
                                            s.sendEvent(n, t._paymentType + '.local-payment.tokenization.failed'),
                                            Promise.reject(
                                                l(e, {
                                                    type: h.LOCAL_PAYMENT_TOKENIZATION_FAILED.type,
                                                    code: h.LOCAL_PAYMENT_TOKENIZATION_FAILED.code,
                                                    message: h.LOCAL_PAYMENT_TOKENIZATION_FAILED.message
                                                })
                                            )
                                        );
                                    });
                    }),
                    (f.prototype.closeWindow = function () {
                        this._authoriztionInProgress && s.sendEvent(this._client, this._paymentType + '.local-payment.start-payment.closed.by-merchant'), this._frameService.close();
                    }),
                    (f.prototype.focusWindow = function () {
                        this._frameService.focus();
                    }),
                    (f.prototype._createStartPaymentCallback = function (e, t) {
                        var n = this,
                            r = this._client;
                        return function (o, a) {
                            if (((n._authorizationInProgress = !1), o))
                                if ('FRAME_SERVICE_FRAME_CLOSED' === o.code) {
                                    if (a && 'processing_error' === a.errorcode) {
                                        s.sendEvent(r, n._paymentType + '.local-payment.failed-in-window'), t(new i(h.LOCAL_PAYMENT_START_PAYMENT_FAILED));
                                        return;
                                    }
                                    s.sendEvent(r, n._paymentType + '.local-payment.tokenization.closed.by-user'), t(new i(h.LOCAL_PAYMENT_WINDOW_CLOSED));
                                } else
                                    o.code &&
                                        o.code.indexOf('FRAME_SERVICE_FRAME_OPEN_FAILED') > -1 &&
                                        t(
                                            new i({
                                                code: h.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.code,
                                                type: h.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.type,
                                                message: h.LOCAL_PAYMENT_WINDOW_OPEN_FAILED.message,
                                                details: { originalError: o }
                                            })
                                        );
                            else
                                a &&
                                    (window.popupBridge || n._frameService.redirect(n._loadingFrameUrl),
                                    n
                                        .tokenize(a)
                                        .then(e)
                                        .catch(t)
                                        .then(function () {
                                            n._frameService.close();
                                        }));
                        };
                    }),
                    (f.prototype._formatTokenizePayload = function (e) {
                        var t,
                            n = {};
                        return (
                            e.paypalAccounts && (n = e.paypalAccounts[0]),
                            (t = {
                                nonce: n.nonce,
                                details: {},
                                type: n.type
                            }),
                            n.details && (n.details.payerInfo && (t.details = n.details.payerInfo), n.details.correlationId && (t.correlationId = n.details.correlationId)),
                            t
                        );
                    }),
                    (f.prototype.hasTokenizationParams = function () {
                        var e = p.parse();
                        return !!e.errorcode || !!(e.btLpToken && e.btLpPaymentId && e.btLpPayerId);
                    }),
                    (f.prototype._formatTokenizeData = function (e) {
                        var t = this._client.getConfiguration().gatewayConfiguration;
                        return {
                            merchantAccountId: this._merchantAccountId,
                            paypalAccount: {
                                correlationId: e.btLpToken || e.token,
                                paymentToken: e.btLpPaymentId || e.paymentId,
                                payerId: e.btLpPayerId || e.PayerID,
                                unilateral: t.paypal.unvettedMerchant,
                                intent: 'sale'
                            }
                        };
                    }),
                    (f.prototype.teardown = function () {
                        return this._isRedirectFlow || this._frameService.teardown(), d(this, c(f.prototype)), s.sendEvent(this._client, 'local-payment.teardown-completed'), Promise.resolve();
                    }),
                    (t.exports = _.wrapPrototype(f));
            },
            {
                '../../lib/analytics': 138,
                '../../lib/assign': 140,
                '../../lib/braintree-error': 143,
                '../../lib/constants': 145,
                '../../lib/convert-methods-to-error': 146,
                '../../lib/convert-to-braintree-error': 147,
                '../../lib/frame-service/external': 158,
                '../../lib/methods': 175,
                '../../lib/querystring': 177,
                '../../lib/use-min': 181,
                '../shared/errors': 186,
                './constants': 183,
                '@braintree/extended-promise': 31,
                '@braintree/wrap-promise': 40
            }
        ],
        185: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('../lib/basic-component-verification'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url'),
                    s = e('./external/local-payment'),
                    c = e('@braintree/wrap-promise'),
                    d = e('../lib/braintree-error'),
                    l = e('./shared/errors'),
                    u = e('../lib/querystring').parse;
                t.exports = {
                    create: c(function (e) {
                        var t = 'Local Payment';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return o.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: a.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                var n,
                                    i,
                                    o = t.getConfiguration();
                                return ((e.client = t), !0 !== o.gatewayConfiguration.paypalEnabled)
                                    ? Promise.reject(new d(l.LOCAL_PAYMENT_NOT_ENABLED))
                                    : (r.sendEvent(t, 'local-payment.initialized'), (n = new s(e)), e.redirectUrl)
                                      ? (i = u(window.location.href)).token || i.wasCanceled
                                          ? n
                                                .tokenize(i)
                                                .then(function (e) {
                                                    return (n.tokenizePayload = e), n;
                                                })
                                                .catch(function (e) {
                                                    return console.log('Error while tokenizing: ', e), n;
                                                })
                                          : n
                                      : n._initialize();
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                '../lib/querystring': 177,
                './external/local-payment': 184,
                './shared/errors': 186,
                '@braintree/wrap-promise': 40
            }
        ],
        186: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    LOCAL_PAYMENT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'LOCAL_PAYMENT_NOT_ENABLED',
                        message: 'LocalPayment is not enabled for this merchant.'
                    },
                    LOCAL_PAYMENT_ALREADY_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: 'LOCAL_PAYMENT_ALREADY_IN_PROGRESS',
                        message: 'LocalPayment payment is already in progress.'
                    },
                    LOCAL_PAYMENT_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'LOCAL_PAYMENT_CANCELED',
                        message: 'Customer canceled the LocalPayment before authorizing.'
                    },
                    LOCAL_PAYMENT_WINDOW_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: 'LOCAL_PAYMENT_WINDOW_CLOSED',
                        message: 'Customer closed LocalPayment window before authorizing.'
                    },
                    LOCAL_PAYMENT_WINDOW_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: 'LOCAL_PAYMENT_WINDOW_OPEN_FAILED',
                        message: 'LocalPayment window failed to open; make sure startPayment was called in response to a user action.'
                    },
                    LOCAL_PAYMENT_START_PAYMENT_FAILED: {
                        type: r.types.NETWORK,
                        code: 'LOCAL_PAYMENT_START_PAYMENT_FAILED',
                        message: 'LocalPayment startPayment failed.'
                    },
                    LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'LOCAL_PAYMENT_START_PAYMENT_MISSING_REQUIRED_OPTION',
                        message: 'Missing required option for startPayment.'
                    },
                    LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'LOCAL_PAYMENT_START_PAYMENT_DEFERRED_PAYMENT_FAILED',
                        message: 'LocalPayment startPayment deferred payment failed.'
                    },
                    LOCAL_PAYMENT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: 'LOCAL_PAYMENT_TOKENIZATION_FAILED',
                        message: "Could not tokenize user's local payment method."
                    },
                    LOCAL_PAYMENT_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'LOCAL_PAYMENT_INVALID_PAYMENT_OPTION',
                        message: 'Local payment options are invalid.'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        187: [
            function (e, t, n) {
                var r = e('../../lib/frame-service/external'),
                    i = e('../../lib/braintree-error'),
                    o = e('../shared/errors'),
                    a = e('../../lib/methods'),
                    s = e('@braintree/wrap-promise'),
                    c = e('../../lib/analytics'),
                    d = e('../../lib/convert-methods-to-error'),
                    l = e('../../lib/convert-to-braintree-error'),
                    u = e('../shared/constants'),
                    p = e('../../lib/constants').INTEGRATION_TIMEOUT_MS;
                function _(e) {
                    var t = e.client.getConfiguration();
                    (this._client = e.client), (this._assetsUrl = t.gatewayConfiguration.assetsUrl + '/web/3.112.1'), (this._isDebug = t.isDebug), (this._authInProgress = !1), window.popupBridge && 'function' == typeof window.popupBridge.getReturnUrlPrefix ? (this._callbackUrl = window.popupBridge.getReturnUrlPrefix() + 'return') : (this._callbackUrl = this._assetsUrl + '/html/redirect-frame' + (this._isDebug ? '' : '.min') + '.html');
                }
                (_.prototype._initialize = function () {
                    var e = this;
                    return new Promise(function (t) {
                        var n = setTimeout(function () {
                            c.sendEvent(e._client, 'masterpass.load.timed-out');
                        }, p);
                        r.create(
                            {
                                name: u.LANDING_FRAME_NAME,
                                height: u.POPUP_HEIGHT,
                                width: u.POPUP_WIDTH,
                                dispatchFrameUrl: e._assetsUrl + '/html/dispatch-frame' + (e._isDebug ? '' : '.min') + '.html',
                                openFrameUrl: e._assetsUrl + '/html/masterpass-landing-frame' + (e._isDebug ? '' : '.min') + '.html'
                            },
                            function (r) {
                                (e._frameService = r), clearTimeout(n), c.sendEvent(e._client, 'masterpass.load.succeeded'), t(e);
                            }
                        );
                    });
                }),
                    (_.prototype.tokenize = function (e) {
                        var t = this;
                        return !e ||
                            (function (e) {
                                var t, n;
                                for (t = 0; t < u.REQUIRED_OPTIONS_FOR_TOKENIZE.length; t++) if (((n = u.REQUIRED_OPTIONS_FOR_TOKENIZE[t]), !e.hasOwnProperty(n))) return !0;
                                return !1;
                            })(e)
                            ? Promise.reject(new i(o.MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION))
                            : t._authInProgress
                              ? Promise.reject(new i(o.MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS))
                              : new Promise(function (n, r) {
                                    t._navigateFrameToLoadingPage(e).catch(r), t._frameService.open(e.frameOptions, t._createFrameOpenHandler(n, r));
                                });
                    }),
                    (_.prototype._navigateFrameToLoadingPage = function (e) {
                        var t = this;
                        return (
                            (this._authInProgress = !0),
                            this._client
                                .request({
                                    method: 'post',
                                    endpoint: 'masterpass/request_token',
                                    data: {
                                        requestToken: {
                                            originUrl: window.location.protocol + '//' + window.location.hostname,
                                            subtotal: e.subtotal,
                                            currencyCode: e.currencyCode,
                                            callbackUrl: this._callbackUrl
                                        }
                                    }
                                })
                                .then(function (n) {
                                    var r,
                                        i = t._assetsUrl + '/html/masterpass-loading-frame' + (t._isDebug ? '' : '.min') + '.html?',
                                        o = t._client.getConfiguration().gatewayConfiguration,
                                        a = e.config || {};
                                    (r = {
                                        environment: o.environment,
                                        requestToken: n.requestToken,
                                        callbackUrl: t._callbackUrl,
                                        merchantCheckoutId: o.masterpass.merchantCheckoutId,
                                        allowedCardTypes: o.masterpass.supportedNetworks,
                                        version: u.MASTERPASS_VERSION
                                    }),
                                        Object.keys(a).forEach(function (e) {
                                            'function' != typeof a[e] && (r[e] = a[e]);
                                        }),
                                        (i += Object.keys(r)
                                            .map(function (e) {
                                                return e + '=' + r[e];
                                            })
                                            .join('&')),
                                        t._frameService.redirect(i);
                                })
                                .catch(function (e) {
                                    var n = e.details && e.details.httpStatus;
                                    return (t._closeWindow(), 422 === n) ? Promise.reject(l(e, o.MASTERPASS_INVALID_PAYMENT_OPTION)) : Promise.reject(l(e, o.MASTERPASS_FLOW_FAILED));
                                })
                        );
                    }),
                    (_.prototype._createFrameOpenHandler = function (e, t) {
                        var n = this;
                        return window.popupBridge
                            ? function (r, a) {
                                  if (((n._authInProgress = !1), r)) {
                                      c.sendEvent(n._client, 'masterpass.tokenization.closed-popupbridge.by-user'), t(l(r, o.MASTERPASS_POPUP_CLOSED));
                                      return;
                                  }
                                  if (!a.queryItems) {
                                      c.sendEvent(n._client, 'masterpass.tokenization.failed-popupbridge'), t(new i(o.MASTERPASS_FLOW_FAILED));
                                      return;
                                  }
                                  n._tokenizeMasterpass(a.queryItems).then(e).catch(t);
                              }
                            : function (r, a) {
                                  if (r) {
                                      if (((n._authInProgress = !1), 'FRAME_SERVICE_FRAME_CLOSED' === r.code)) {
                                          c.sendEvent(n._client, 'masterpass.tokenization.closed.by-user'), t(new i(o.MASTERPASS_POPUP_CLOSED));
                                          return;
                                      }
                                      if (r.code && r.code.indexOf('FRAME_SERVICE_FRAME_OPEN_FAILED') > -1) {
                                          c.sendEvent(n._client, 'masterpass.tokenization.failed.to-open'),
                                              t(
                                                  new i({
                                                      code: o.MASTERPASS_POPUP_OPEN_FAILED.code,
                                                      type: o.MASTERPASS_POPUP_OPEN_FAILED.type,
                                                      message: o.MASTERPASS_POPUP_OPEN_FAILED.message,
                                                      details: { originalError: r }
                                                  })
                                              );
                                          return;
                                      }
                                      c.sendEvent(n._client, 'masterpass.tokenization.failed'), n._closeWindow(), t(l(r, o.MASTERPASS_FLOW_FAILED));
                                      return;
                                  }
                                  n._tokenizeMasterpass(a).then(e).catch(t);
                              };
                    }),
                    (_.prototype._tokenizeMasterpass = function (e) {
                        var t,
                            n = this;
                        return 'success' !== e.mpstatus
                            ? (c.sendEvent(n._client, 'masterpass.tokenization.closed.by-user'), n._closeWindow(), Promise.reject(new i(o.MASTERPASS_POPUP_CLOSED)))
                            : [(t = e).oauth_verifier, t.oauth_token, t.checkout_resource_url].some(function (e) {
                                    return null == e || 'null' === e;
                                })
                              ? (c.sendEvent(n._client, 'masterpass.tokenization.closed.missing-payload'), n._closeWindow(), Promise.reject(new i(o.MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS)))
                              : n._client
                                    .request({
                                        endpoint: 'payment_methods/masterpass_cards',
                                        method: 'post',
                                        data: {
                                            masterpassCard: {
                                                checkoutResourceUrl: e.checkout_resource_url,
                                                requestToken: e.oauth_token,
                                                verifierToken: e.oauth_verifier
                                            }
                                        }
                                    })
                                    .then(function (e) {
                                        return n._closeWindow(), window.popupBridge ? c.sendEvent(n._client, 'masterpass.tokenization.success-popupbridge') : c.sendEvent(n._client, 'masterpass.tokenization.success'), e.masterpassCards[0];
                                    })
                                    .catch(function (e) {
                                        return n._closeWindow(), window.popupBridge ? c.sendEvent(n._client, 'masterpass.tokenization.failed-popupbridge') : c.sendEvent(n._client, 'masterpass.tokenization.failed'), Promise.reject(l(e, o.MASTERPASS_ACCOUNT_TOKENIZATION_FAILED));
                                    });
                    }),
                    (_.prototype._closeWindow = function () {
                        (this._authInProgress = !1), this._frameService.close();
                    }),
                    (_.prototype.teardown = function () {
                        var e = this;
                        return new Promise(function (t) {
                            e._frameService.teardown(), d(e, a(_.prototype)), c.sendEvent(e._client, 'masterpass.teardown-completed'), t();
                        });
                    }),
                    (t.exports = s.wrapPrototype(_));
            },
            {
                '../../lib/analytics': 138,
                '../../lib/braintree-error': 143,
                '../../lib/constants': 145,
                '../../lib/convert-methods-to-error': 146,
                '../../lib/convert-to-braintree-error': 147,
                '../../lib/frame-service/external': 158,
                '../../lib/methods': 175,
                '../shared/constants': 190,
                '../shared/errors': 191,
                '@braintree/wrap-promise': 40
            }
        ],
        188: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('../lib/basic-component-verification'),
                    o = e('./shared/browser-detection'),
                    a = e('./external/masterpass'),
                    s = e('../lib/create-deferred-client'),
                    c = e('../lib/create-assets-url'),
                    d = e('./shared/errors');
                function l() {
                    return !!(window.popupBridge || o.supportsPopups());
                }
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'Masterpass';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return l() ? Promise.resolve() : Promise.reject(new r(d.MASTERPASS_BROWSER_NOT_SUPPORTED));
                            })
                            .then(function () {
                                return s.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: c.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return ((e.client = t), e.client.getConfiguration().gatewayConfiguration.masterpass) ? new a(e)._initialize() : Promise.reject(new r(d.MASTERPASS_NOT_ENABLED));
                            });
                    }),
                    isSupported: l,
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './external/masterpass': 187,
                './shared/browser-detection': 189,
                './shared/errors': 191,
                '@braintree/wrap-promise': 40
            }
        ],
        189: [
            function (e, t, n) {
                t.exports = { supportsPopups: e('@braintree/browser-detection/supports-popups') };
            },
            { '@braintree/browser-detection/supports-popups': 29 }
        ],
        190: [
            function (e, t, n) {
                t.exports = {
                    LANDING_FRAME_NAME: 'braintreemasterpasslanding',
                    POPUP_WIDTH: 450,
                    POPUP_HEIGHT: 660,
                    MASTERPASS_VERSION: 'v6',
                    REQUIRED_OPTIONS_FOR_TOKENIZE: ['subtotal', 'currencyCode']
                };
            },
            {}
        ],
        191: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    MASTERPASS_BROWSER_NOT_SUPPORTED: {
                        type: r.types.CUSTOMER,
                        code: 'MASTERPASS_BROWSER_NOT_SUPPORTED',
                        message: 'Browser is not supported.'
                    },
                    MASTERPASS_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'MASTERPASS_NOT_ENABLED',
                        message: 'Masterpass is not enabled for this merchant.'
                    },
                    MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'MASTERPASS_TOKENIZE_MISSING_REQUIRED_OPTION',
                        message: 'Missing required option for tokenize.'
                    },
                    MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: 'MASTERPASS_TOKENIZATION_ALREADY_IN_PROGRESS',
                        message: 'Masterpass tokenization is already in progress.'
                    },
                    MASTERPASS_ACCOUNT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: 'MASTERPASS_ACCOUNT_TOKENIZATION_FAILED',
                        message: "Could not tokenize user's Masterpass account."
                    },
                    MASTERPASS_POPUP_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: 'MASTERPASS_POPUP_OPEN_FAILED',
                        message: 'Masterpass popup failed to open. Make sure to tokenize in response to a user action, such as a click.'
                    },
                    MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS: {
                        type: r.types.MERCHANT,
                        code: 'MASTERPASS_POPUP_MISSING_REQUIRED_PARAMETERS',
                        message: 'Masterpass popup failed to return all required parameters needed to continue tokenization.'
                    },
                    MASTERPASS_POPUP_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: 'MASTERPASS_POPUP_CLOSED',
                        message: 'Customer closed Masterpass popup before authorizing.'
                    },
                    MASTERPASS_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'MASTERPASS_INVALID_PAYMENT_OPTION',
                        message: 'Masterpass payment options are invalid.'
                    },
                    MASTERPASS_FLOW_FAILED: {
                        type: r.types.NETWORK,
                        code: 'MASTERPASS_FLOW_FAILED',
                        message: 'Could not initialize Masterpass flow.'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        192: [
            function (e, t, n) {
                var r = e('../../lib/analytics'),
                    i = e('../../lib/assign').assign,
                    o = e('framebus'),
                    a = e('../../lib/convert-methods-to-error'),
                    s = e('../../lib/generate-google-pay-configuration'),
                    c = e('@braintree/iframer'),
                    d = e('@braintree/uuid'),
                    l = e('../../lib/use-min'),
                    u = e('../../lib/methods'),
                    p = e('@braintree/event-emitter'),
                    _ = e('../../lib/braintree-error'),
                    E = e('../shared/constants'),
                    h = E.events,
                    m = E.errors,
                    f = e('@braintree/wrap-promise'),
                    y = {
                        Visa: 'visa',
                        MasterCard: 'mastercard',
                        'American Express': 'amex',
                        'Diners Club': 'diners',
                        Discover: 'discover',
                        JCB: 'jcb',
                        UnionPay: 'unionpay',
                        Maestro: 'maestro'
                    };
                function A(e) {
                    var t = e.enabledPaymentMethods || {};
                    p.call(this),
                        (this._componentId = d()),
                        (this._client = e.client),
                        (this._enabledPaymentMethods = {
                            basicCard: !1 !== t.basicCard,
                            googlePay: !1 !== t.googlePay
                        }),
                        (this._googlePayVersion = 2 === e.googlePayVersion ? 2 : 1),
                        (this._googleMerchantId = '18278000977346790994'),
                        (this._supportedPaymentMethods = this._constructDefaultSupportedPaymentMethods()),
                        (this._defaultSupportedPaymentMethods = Object.keys(this._supportedPaymentMethods).map(
                            function (e) {
                                return this._supportedPaymentMethods[e];
                            }.bind(this)
                        )),
                        (this._bus = new o({ channel: this._componentId }));
                }
                p.createChild(A),
                    (A.prototype._constructDefaultSupportedPaymentMethods = function () {
                        var e = this._client.getConfiguration(),
                            t = e.gatewayConfiguration.androidPay,
                            n = e.gatewayConfiguration.creditCards,
                            r = {};
                        return (
                            this._enabledPaymentMethods.basicCard &&
                                n &&
                                n.supportedCardTypes.length > 0 &&
                                (r.basicCard = {
                                    supportedMethods: 'basic-card',
                                    data: {
                                        supportedNetworks: n.supportedCardTypes.reduce(function (e, t) {
                                            return t in y && e.push(y[t]), e;
                                        }, [])
                                    }
                                }),
                            this._enabledPaymentMethods.googlePay &&
                                t &&
                                t.enabled &&
                                (r.googlePay = {
                                    supportedMethods: 'https://google.com/pay',
                                    data: s(e, this._googlePayVersion, this._googleMerchantId)
                                }),
                            r
                        );
                    }),
                    (A.prototype.initialize = function () {
                        var e = this._client.getConfiguration(),
                            t = this;
                        return ((this._frame = c({
                            allowPaymentRequest: !0,
                            name: 'braintree-payment-request-frame',
                            class: 'braintree-payment-request-frame',
                            height: 0,
                            width: 0,
                            style: {
                                position: 'absolute',
                                left: '-9999px'
                            },
                            title: 'Secure Payment Frame'
                        })),
                        0 === this._defaultSupportedPaymentMethods.length)
                            ? Promise.reject(new _(m.PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS))
                            : new Promise(function (n) {
                                  var i, o;
                                  t._bus.on(h.FRAME_READY, function (e) {
                                      e(t._client);
                                  }),
                                      t._bus.on(h.FRAME_CAN_MAKE_REQUESTS, function () {
                                          r.sendEvent(t._client, 'payment-request.initialized'),
                                              t._bus.on(h.SHIPPING_ADDRESS_CHANGE, function (e) {
                                                  var n = {
                                                      target: { shippingAddress: e },
                                                      updateWith: function (e) {
                                                          t._bus.emit(h.UPDATE_SHIPPING_ADDRESS, e);
                                                      }
                                                  };
                                                  t._emit('shippingAddressChange', n), t._emit('shippingaddresschange', n);
                                              }),
                                              t._bus.on(h.SHIPPING_OPTION_CHANGE, function (e) {
                                                  var n = {
                                                      target: { shippingOption: e },
                                                      updateWith: function (e) {
                                                          t._bus.emit(h.UPDATE_SHIPPING_OPTION, e);
                                                      }
                                                  };
                                                  t._emit('shippingOptionChange', n), t._emit('shippingoptionchange', n);
                                              }),
                                              n(t);
                                      }),
                                      (t._frame.src = ((i = e.gatewayConfiguration.assetsUrl), (o = t._componentId), i + '/web/3.112.1/html/payment-request-frame' + l(e.isDebug) + '.html#' + o)),
                                      document.body.appendChild(t._frame);
                              });
                    }),
                    (A.prototype.createSupportedPaymentMethodsConfiguration = function (e, t) {
                        var n;
                        if (!e) throw new _(m.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE);
                        if (!this._enabledPaymentMethods[e]) throw new _(m.PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED);
                        return ((n = i({}, this._supportedPaymentMethods[e])).data = i({}, n.data, t)), n;
                    }),
                    (A.prototype.tokenize = function (e) {
                        var t = this;
                        return new Promise(function (n, i) {
                            t._bus.emit(
                                h.PAYMENT_REQUEST_INITIALIZED,
                                {
                                    supportedPaymentMethods: e.supportedPaymentMethods || t._defaultSupportedPaymentMethods,
                                    details: e.details,
                                    options: e.options
                                },
                                function (e) {
                                    var o = e[0],
                                        a = e[1];
                                    if (o) return void i(t._formatTokenizationError(o));
                                    r.sendEvent(t._client, 'payment-request.tokenize.succeeded'),
                                        n({
                                            nonce: a.nonce,
                                            type: a.type,
                                            description: a.description,
                                            details: {
                                                rawPaymentResponse: a.details.rawPaymentResponse,
                                                cardType: a.details.cardType,
                                                lastFour: a.details.lastFour,
                                                lastTwo: a.details.lastTwo
                                            },
                                            binData: a.binData
                                        });
                                }
                            );
                        });
                    }),
                    (A.prototype.canMakePayment = function (e) {
                        var t,
                            n = this;
                        return window.PaymentRequest
                            ? e.supportedPaymentMethods &&
                              (e.supportedPaymentMethods.forEach(function (e) {
                                  var n = e.supportedMethods;
                                  n in E.SUPPORTED_METHODS || (t = n);
                              }),
                              t)
                                ? Promise.reject(
                                      new _({
                                          type: m.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.type,
                                          code: m.PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD.code,
                                          message: t + ' is not a supported payment method.'
                                      })
                                  )
                                : new Promise(function (t, i) {
                                      n._bus.emit(
                                          h.CAN_MAKE_PAYMENT,
                                          {
                                              supportedPaymentMethods: e.supportedPaymentMethods || n._defaultSupportedPaymentMethods,
                                              details: e.details,
                                              options: e.options
                                          },
                                          function (e) {
                                              var o = e[0],
                                                  a = e[1];
                                              if (o) return void i(n._formatCanMakePaymentError(o));
                                              r.sendEvent(n._client, 'payment-request.can-make-payment.' + a), t(a);
                                          }
                                      );
                                  })
                            : (r.sendEvent(n._client, 'payment-request.can-make-payment.not-available'), Promise.resolve(!1));
                    }),
                    (A.prototype.teardown = function () {
                        return this._bus.teardown(), this._frame.parentNode.removeChild(this._frame), a(this, u(A.prototype)), r.sendEvent(this._client, 'payment-request.teardown-completed'), Promise.resolve();
                    }),
                    (A.prototype._formatTokenizationError = function (e) {
                        var t;
                        switch (e.name) {
                            case 'AbortError':
                                return (
                                    (t = new _({
                                        type: m.PAYMENT_REQUEST_CANCELED.type,
                                        code: m.PAYMENT_REQUEST_CANCELED.code,
                                        message: m.PAYMENT_REQUEST_CANCELED.message,
                                        details: { originalError: e }
                                    })),
                                    r.sendEvent(this._client, 'payment-request.tokenize.canceled'),
                                    t
                                );
                            case 'PAYMENT_REQUEST_INITIALIZATION_FAILED':
                                t = new _({
                                    type: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,
                                    code: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,
                                    message: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,
                                    details: { originalError: e }
                                });
                                break;
                            case 'BRAINTREE_GATEWAY_GOOGLE_PAYMENT_TOKENIZATION_ERROR':
                                t = new _({
                                    type: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.type,
                                    code: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.code,
                                    message: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE.message,
                                    details: { originalError: e }
                                });
                                break;
                            case 'BRAINTREE_GATEWAY_GOOGLE_PAYMENT_PARSING_ERROR':
                                t = new _({
                                    type: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.type,
                                    code: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.code,
                                    message: m.PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR.message,
                                    details: { originalError: e }
                                });
                                break;
                            default:
                                t = new _({
                                    code: m.PAYMENT_REQUEST_NOT_COMPLETED.code,
                                    type: e.type || _.types.CUSTOMER,
                                    message: m.PAYMENT_REQUEST_NOT_COMPLETED.message,
                                    details: { originalError: e }
                                });
                        }
                        return r.sendEvent(this._client, 'payment-request.tokenize.failed'), t;
                    }),
                    (A.prototype._formatCanMakePaymentError = function (e) {
                        var t;
                        switch (e.name) {
                            case 'PAYMENT_REQUEST_INITIALIZATION_FAILED':
                                t = new _({
                                    type: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.type,
                                    code: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.code,
                                    message: m.PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED.message,
                                    details: { originalError: e }
                                });
                                break;
                            case 'NotAllowedError':
                                t = new _({
                                    type: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.type,
                                    code: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.code,
                                    message: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED.message,
                                    details: { originalError: e }
                                });
                                break;
                            default:
                                t = new _({
                                    code: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.code,
                                    type: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.type,
                                    message: m.PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED.message,
                                    details: { originalError: e }
                                });
                        }
                        return r.sendEvent(this._client, 'payment-request.can-make-payment.failed'), t;
                    }),
                    (t.exports = f.wrapPrototype(A));
            },
            {
                '../../lib/analytics': 138,
                '../../lib/assign': 140,
                '../../lib/braintree-error': 143,
                '../../lib/convert-methods-to-error': 146,
                '../../lib/generate-google-pay-configuration': 168,
                '../../lib/methods': 175,
                '../../lib/use-min': 181,
                '../shared/constants': 194,
                '@braintree/event-emitter': 30,
                '@braintree/iframer': 32,
                '@braintree/uuid': 36,
                '@braintree/wrap-promise': 40,
                framebus: 50
            }
        ],
        193: [
            function (e, t, n) {
                var r = e('./external/payment-request'),
                    i = e('../lib/basic-component-verification'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'Payment Request';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return o.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: a.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return (e.client = t), new r(e).initialize();
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './external/payment-request': 192,
                '@braintree/wrap-promise': 40
            }
        ],
        194: [
            function (e, t, n) {
                var r = e('../../lib/enumerate'),
                    i = e('./errors'),
                    o = {};
                (o.events = r(['CAN_MAKE_PAYMENT', 'FRAME_READY', 'FRAME_CAN_MAKE_REQUESTS', 'PAYMENT_REQUEST_INITIALIZED', 'SHIPPING_ADDRESS_CHANGE', 'UPDATE_SHIPPING_ADDRESS', 'SHIPPING_OPTION_CHANGE', 'UPDATE_SHIPPING_OPTION'], 'payment-request:')),
                    (o.errors = i),
                    (o.SUPPORTED_METHODS = {
                        'basic-card': !0,
                        'https://google.com/pay': !0
                    }),
                    (t.exports = o);
            },
            {
                '../../lib/enumerate': 153,
                './errors': 195
            }
        ],
        195: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_NO_VALID_SUPPORTED_PAYMENT_METHODS',
                        message: 'There are no supported payment methods associated with this account.'
                    },
                    PAYMENT_REQUEST_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'PAYMENT_REQUEST_CANCELED',
                        message: 'Payment request was canceled.'
                    },
                    PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_INITIALIZATION_MISCONFIGURED',
                        message: 'Something went wrong when configuring the payment request.'
                    },
                    PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'PAYMENT_REQUEST_CAN_MAKE_PAYMENT_FAILED',
                        message: 'Something went wrong when calling `canMakePayment`'
                    },
                    PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_CAN_MAKE_PAYMENT_NOT_ALLOWED',
                        message: 'Something went wrong when calling `canMakePayment`. Most likely, `canMakePayment` was called multiple times with different supportedMethods configurations.'
                    },
                    PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_UNSUPPORTED_PAYMENT_METHOD'
                    },
                    PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_GOOGLE_PAYMENT_FAILED_TO_TOKENIZE',
                        message: 'Something went wrong when tokenizing the Google Pay card.'
                    },
                    PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR: {
                        type: r.types.UNKNOWN,
                        code: 'PAYMENT_REQUEST_GOOGLE_PAYMENT_PARSING_ERROR',
                        message: 'Something went wrong when tokenizing the Google Pay card.'
                    },
                    PAYMENT_REQUEST_NOT_COMPLETED: {
                        code: 'PAYMENT_REQUEST_NOT_COMPLETED',
                        message: 'Payment request could not be completed.'
                    },
                    PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_MUST_INCLUDE_TYPE',
                        message: 'createSupportedPaymentMethodsConfiguration must include a type parameter.'
                    },
                    PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'PAYMENT_REQUEST_CREATE_SUPPORTED_PAYMENT_METHODS_CONFIGURATION_TYPE_NOT_ENABLED',
                        message: 'createSupportedPaymentMethodsConfiguration type parameter must be valid or enabled.'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        196: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    PAYPAL_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_NOT_ENABLED',
                        message: 'PayPal is not enabled for this merchant.'
                    },
                    PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED',
                        message: 'A linked PayPal Sandbox account is required to use PayPal Checkout in Sandbox. See https://developer.paypal.com/braintree/docs/guides/paypal/testing-go-live#linked-paypal-testing for details on linking your PayPal sandbox with Braintree.'
                    },
                    PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: 'PAYPAL_ACCOUNT_TOKENIZATION_FAILED',
                        message: "Could not tokenize user's PayPal account."
                    },
                    PAYPAL_FLOW_FAILED: {
                        type: r.types.NETWORK,
                        code: 'PAYPAL_FLOW_FAILED',
                        message: 'Could not initialize PayPal flow.'
                    },
                    PAYPAL_FLOW_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_FLOW_OPTION_REQUIRED',
                        message: 'PayPal flow property is invalid or missing.'
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED'
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED: {
                        type: r.types.NETWORK,
                        code: 'PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED',
                        message: 'Something went wrong when setting up the checkout workflow.'
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED',
                        message: 'PayPal popup failed to open, make sure to initiate the vault checkout in response to a user action.'
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED',
                        message: 'Customer closed PayPal popup before authorizing.'
                    },
                    PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS',
                        message: 'Vault initiated checkout already in progress.'
                    },
                    PAYPAL_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_INVALID_PAYMENT_OPTION',
                        message: 'PayPal payment options are invalid.'
                    },
                    PAYPAL_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_MISSING_REQUIRED_OPTION',
                        message: 'Missing required option.'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        197: [
            function (e, t, n) {
                var r = e('../lib/basic-component-verification'),
                    i = e('@braintree/wrap-promise'),
                    o = e('./paypal-checkout');
                t.exports = {
                    create: i(function (e) {
                        return r
                            .verify({
                                name: 'PayPal Checkout',
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return new o(e)._initialize(e);
                            });
                    }),
                    isSupported: function () {
                        return !0;
                    },
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                './paypal-checkout': 198,
                '@braintree/wrap-promise': 40
            }
        ],
        198: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('../lib/assign').assign,
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url'),
                    s = e('@braintree/extended-promise'),
                    c = e('@braintree/wrap-promise'),
                    d = e('../lib/braintree-error'),
                    l = e('../lib/convert-to-braintree-error'),
                    u = e('./errors'),
                    p = e('../paypal/shared/constants'),
                    _ = e('../lib/frame-service/external'),
                    E = e('../lib/create-authorization-data'),
                    h = e('../lib/methods'),
                    m = e('../lib/use-min'),
                    f = e('../lib/convert-methods-to-error'),
                    y = e('../lib/querystring'),
                    A = e('../lib/camel-case-to-snake-case'),
                    T = e('../lib/constants').INTEGRATION_TIMEOUT_MS,
                    I = ['amount', 'currency', 'vaultInitiatedCheckoutPaymentMethodToken'];
                function N(e) {
                    (this._merchantAccountId = e.merchantAccountId), (this._autoSetDataUserIdToken = !!e.autoSetDataUserIdToken);
                }
                (s.suppressUnhandledPromiseMessage = !0),
                    (N.prototype._initialize = function (e) {
                        var t;
                        return (e.client
                            ? ((t = e.client.getConfiguration()),
                              (this._authorizationInformation = {
                                  fingerprint: t.authorizationFingerprint,
                                  environment: t.gatewayConfiguration.environment
                              }))
                            : ((t = E(e.authorization)),
                              (this._authorizationInformation = {
                                  fingerprint: t.attrs.authorizationFingerprint,
                                  environment: t.environment
                              })),
                        (this._clientPromise = o
                            .create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: a.create(e.authorization),
                                name: 'PayPal Checkout'
                            })
                            .then(
                                function (e) {
                                    return ((this._configuration = e.getConfiguration()), this._merchantAccountId || (this._configuration.gatewayConfiguration.paypalEnabled ? !0 === this._configuration.gatewayConfiguration.paypal.environmentNoNetwork && (this._setupError = new d(u.PAYPAL_SANDBOX_ACCOUNT_NOT_LINKED)) : (this._setupError = new d(u.PAYPAL_NOT_ENABLED))), this._setupError) ? Promise.reject(this._setupError) : (r.sendEvent(e, 'paypal-checkout.initialized'), (this._frameServicePromise = this._setupFrameService(e)), e);
                                }.bind(this)
                            )),
                        e.client)
                            ? this._clientPromise.then(
                                  function () {
                                      return this;
                                  }.bind(this)
                              )
                            : Promise.resolve(this);
                    }),
                    (N.prototype._setupFrameService = function (e) {
                        var t = new s(),
                            n = e.getConfiguration(),
                            i = setTimeout(function () {
                                r.sendEvent(e, 'paypal-checkout.frame-service.timed-out'), t.reject(new d(u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_SETUP_FAILED));
                            }, T);
                        return (
                            (this._assetsUrl = n.gatewayConfiguration.paypal.assetsUrl + '/web/3.112.1'),
                            (this._isDebug = n.isDebug),
                            (this._loadingFrameUrl = this._assetsUrl + '/html/paypal-landing-frame' + m(this._isDebug) + '.html'),
                            _.create(
                                {
                                    name: 'braintreepaypallanding',
                                    dispatchFrameUrl: this._assetsUrl + '/html/dispatch-frame' + m(this._isDebug) + '.html',
                                    openFrameUrl: this._loadingFrameUrl
                                },
                                function (e) {
                                    (this._frameService = e), clearTimeout(i), t.resolve();
                                }.bind(this)
                            ),
                            t
                        );
                    }),
                    (N.prototype.createPayment = function (e) {
                        return e && p.FLOW_ENDPOINTS.hasOwnProperty(e.flow)
                            ? (r.sendEvent(this._clientPromise, 'paypal-checkout.createPayment'),
                              this._createPaymentResource(e).then(function (t) {
                                  var n;
                                  return 'checkout' === e.flow ? y.parse(t.paymentResource.redirectUrl).token : t.agreementSetup.tokenId;
                              }))
                            : Promise.reject(new d(u.PAYPAL_FLOW_OPTION_REQUIRED));
                    }),
                    (N.prototype._createPaymentResource = function (e, t) {
                        var n = this,
                            i = 'paypal_hermes/' + p.FLOW_ENDPOINTS[e.flow];
                        return (
                            (this._flow = e.flow),
                            delete this.intentFromCreatePayment,
                            (t = t || {}),
                            !0 === e.offerCredit && r.sendEvent(this._clientPromise, 'paypal-checkout.credit.offered'),
                            this._clientPromise
                                .then(function (r) {
                                    return r
                                        .request({
                                            endpoint: i,
                                            method: 'post',
                                            data: n._formatPaymentResourceData(e, t)
                                        })
                                        .then(function (t) {
                                            return (n.intentFromCreatePayment = e.intent), t;
                                        });
                                })
                                .catch(function (e) {
                                    return n._setupError
                                        ? Promise.reject(n._setupError)
                                        : 422 === (e.details && e.details.httpStatus)
                                          ? Promise.reject(
                                                new d({
                                                    type: u.PAYPAL_INVALID_PAYMENT_OPTION.type,
                                                    code: u.PAYPAL_INVALID_PAYMENT_OPTION.code,
                                                    message: u.PAYPAL_INVALID_PAYMENT_OPTION.message,
                                                    details: { originalError: e }
                                                })
                                            )
                                          : Promise.reject(
                                                l(e, {
                                                    type: u.PAYPAL_FLOW_FAILED.type,
                                                    code: u.PAYPAL_FLOW_FAILED.code,
                                                    message: u.PAYPAL_FLOW_FAILED.message
                                                })
                                            );
                                })
                        );
                    }),
                    (N.prototype.updatePayment = function (e) {
                        var t = this;
                        return !e || this._hasMissingOption(e, p.REQUIRED_OPTIONS)
                            ? (r.sendEvent(t._clientPromise, 'paypal-checkout.updatePayment.missing-options'), Promise.reject(new d(u.PAYPAL_MISSING_REQUIRED_OPTION)))
                            : this._verifyConsistentCurrency(e)
                              ? (r.sendEvent(this._clientPromise, 'paypal-checkout.updatePayment'),
                                this._clientPromise
                                    .then(function (n) {
                                        return n.request({
                                            endpoint: 'paypal_hermes/patch_payment_resource',
                                            method: 'post',
                                            data: t._formatUpdatePaymentData(e)
                                        });
                                    })
                                    .catch(function (e) {
                                        return 422 === (e.details && e.details.httpStatus)
                                            ? (r.sendEvent(t._clientPromise, 'paypal-checkout.updatePayment.invalid'),
                                              Promise.reject(
                                                  new d({
                                                      type: u.PAYPAL_INVALID_PAYMENT_OPTION.type,
                                                      code: u.PAYPAL_INVALID_PAYMENT_OPTION.code,
                                                      message: u.PAYPAL_INVALID_PAYMENT_OPTION.message,
                                                      details: { originalError: e }
                                                  })
                                              ))
                                            : (r.sendEvent(t._clientPromise, 'paypal-checkout.updatePayment.' + u.PAYPAL_FLOW_FAILED.code),
                                              Promise.reject(
                                                  l(e, {
                                                      type: u.PAYPAL_FLOW_FAILED.type,
                                                      code: u.PAYPAL_FLOW_FAILED.code,
                                                      message: u.PAYPAL_FLOW_FAILED.message
                                                  })
                                              ));
                                    }))
                              : (r.sendEvent(t._clientPromise, 'paypal-checkout.updatePayment.inconsistent-currencies'),
                                Promise.reject(
                                    new d({
                                        type: u.PAYPAL_INVALID_PAYMENT_OPTION.type,
                                        code: u.PAYPAL_INVALID_PAYMENT_OPTION.code,
                                        message: u.PAYPAL_INVALID_PAYMENT_OPTION.message,
                                        details: { originalError: Error('One or more shipping option currencies differ from checkout currency.') }
                                    })
                                ));
                    }),
                    (N.prototype.startVaultInitiatedCheckout = function (e) {
                        var t,
                            n = this;
                        return this._vaultInitiatedCheckoutInProgress
                            ? (r.sendEvent(this._clientPromise, 'paypal-checkout.startVaultInitiatedCheckout.error.already-in-progress'), Promise.reject(new d(u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_IN_PROGRESS)))
                            : (I.forEach(function (n) {
                                    e.hasOwnProperty(n) || (t = n);
                                }),
                                t)
                              ? Promise.reject(
                                    new d({
                                        type: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.type,
                                        code: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_PARAM_REQUIRED.code,
                                        message: 'Required param ' + t + ' is missing.'
                                    })
                                )
                              : ((this._vaultInitiatedCheckoutInProgress = !0),
                                this._addModalBackdrop(e),
                                (e = i({}, e, { flow: 'checkout' })),
                                r.sendEvent(this._clientPromise, 'paypal-checkout.startVaultInitiatedCheckout.started'),
                                this._waitForVaultInitiatedCheckoutDependencies()
                                    .then(function () {
                                        var t = new s(),
                                            r = n
                                                ._createPaymentResource(e, {
                                                    returnUrl: n._constructVaultCheckutUrl('redirect-frame'),
                                                    cancelUrl: n._constructVaultCheckutUrl('cancel-frame')
                                                })
                                                .then(function (e) {
                                                    var r = e.paymentResource.redirectUrl;
                                                    return n._frameService.redirect(r), t;
                                                });
                                        return n._frameService.open({}, n._createFrameServiceCallback(t)), r;
                                    })
                                    .catch(function (e) {
                                        return ((n._vaultInitiatedCheckoutInProgress = !1), n._removeModalBackdrop(), 'FRAME_SERVICE_FRAME_CLOSED' === e.code)
                                            ? (r.sendEvent(n._clientPromise, 'paypal-checkout.startVaultInitiatedCheckout.canceled.by-customer'), Promise.reject(new d(u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_CANCELED)))
                                            : (n._frameService && n._frameService.close(), e.code && e.code.indexOf('FRAME_SERVICE_FRAME_OPEN_FAILED') > -1)
                                              ? (r.sendEvent(n._clientPromise, 'paypal-checkout.startVaultInitiatedCheckout.failed.popup-not-opened'),
                                                Promise.reject(
                                                    new d({
                                                        code: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.code,
                                                        type: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.type,
                                                        message: u.PAYPAL_START_VAULT_INITIATED_CHECKOUT_POPUP_OPEN_FAILED.message,
                                                        details: { originalError: e }
                                                    })
                                                ))
                                              : Promise.reject(e);
                                    })
                                    .then(function (e) {
                                        return n._frameService.close(), (n._vaultInitiatedCheckoutInProgress = !1), n._removeModalBackdrop(), r.sendEvent(n._clientPromise, 'paypal-checkout.startVaultInitiatedCheckout.succeeded'), Promise.resolve(e);
                                    }));
                    }),
                    (N.prototype._addModalBackdrop = function (e) {
                        e.optOutOfModalBackdrop ||
                            (this._modalBackdrop ||
                                ((this._modalBackdrop = document.createElement('div')),
                                this._modalBackdrop.setAttribute('data-braintree-paypal-vault-initiated-checkout-modal', !0),
                                (this._modalBackdrop.style.position = 'fixed'),
                                (this._modalBackdrop.style.top = 0),
                                (this._modalBackdrop.style.bottom = 0),
                                (this._modalBackdrop.style.left = 0),
                                (this._modalBackdrop.style.right = 0),
                                (this._modalBackdrop.style.zIndex = 9999),
                                (this._modalBackdrop.style.background = 'black'),
                                (this._modalBackdrop.style.opacity = '0.7'),
                                this._modalBackdrop.addEventListener(
                                    'click',
                                    function () {
                                        this.focusVaultInitiatedCheckoutWindow();
                                    }.bind(this)
                                )),
                            document.body.appendChild(this._modalBackdrop));
                    }),
                    (N.prototype._removeModalBackdrop = function () {
                        this._modalBackdrop && this._modalBackdrop.parentNode && this._modalBackdrop.parentNode.removeChild(this._modalBackdrop);
                    }),
                    (N.prototype.closeVaultInitiatedCheckoutWindow = function () {
                        return (
                            this._vaultInitiatedCheckoutInProgress && r.sendEvent(this._clientPromise, 'paypal-checkout.startVaultInitiatedCheckout.canceled.by-merchant'),
                            this._waitForVaultInitiatedCheckoutDependencies().then(
                                function () {
                                    this._frameService.close();
                                }.bind(this)
                            )
                        );
                    }),
                    (N.prototype.focusVaultInitiatedCheckoutWindow = function () {
                        return this._waitForVaultInitiatedCheckoutDependencies().then(
                            function () {
                                this._frameService.focus();
                            }.bind(this)
                        );
                    }),
                    (N.prototype._createFrameServiceCallback = function (e) {
                        var t = this;
                        return function (n, r) {
                            n
                                ? e.reject(n)
                                : r &&
                                  (t._frameService.redirect(t._loadingFrameUrl),
                                  t
                                      .tokenizePayment({
                                          paymentToken: r.token,
                                          payerID: r.PayerID,
                                          paymentID: r.paymentId,
                                          orderID: r.orderId
                                      })
                                      .then(function (t) {
                                          e.resolve(t);
                                      })
                                      .catch(function (t) {
                                          e.reject(t);
                                      }));
                        };
                    }),
                    (N.prototype._waitForVaultInitiatedCheckoutDependencies = function () {
                        var e = this;
                        return this._clientPromise.then(function () {
                            return e._frameServicePromise;
                        });
                    }),
                    (N.prototype._constructVaultCheckutUrl = function (e) {
                        var t = this._frameService._serviceId;
                        return this._assetsUrl + '/html/' + e + m(this._isDebug) + '.html?channel=' + t;
                    }),
                    (N.prototype.tokenizePayment = function (e) {
                        var t,
                            n = this,
                            i = !0,
                            o = {
                                flow: this._flow,
                                intent: e.intent || this.intentFromCreatePayment
                            },
                            a = {
                                ecToken: e.paymentToken,
                                billingToken: e.billingToken,
                                payerId: e.payerID,
                                paymentId: e.paymentID,
                                orderId: e.orderID,
                                shippingOptionsId: e.shippingOptionsId
                            };
                        return (
                            e.hasOwnProperty('vault') && (i = e.vault),
                            (o.vault = i),
                            r.sendEvent(this._clientPromise, 'paypal-checkout.tokenization.started'),
                            this._clientPromise
                                .then(function (e) {
                                    return e.request({
                                        endpoint: 'payment_methods/paypal_accounts',
                                        method: 'post',
                                        data: n._formatTokenizeData(o, a)
                                    });
                                })
                                .then(function (e) {
                                    return (t = n._formatTokenizePayload(e)), r.sendEvent(n._clientPromise, 'paypal-checkout.tokenization.success'), t.creditFinancingOffered && r.sendEvent(n._clientPromise, 'paypal-checkout.credit.accepted'), t;
                                })
                                .catch(function (e) {
                                    return n._setupError
                                        ? Promise.reject(n._setupError)
                                        : (r.sendEvent(n._clientPromise, 'paypal-checkout.tokenization.failed'),
                                          Promise.reject(
                                              l(e, {
                                                  type: u.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                                                  code: u.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                                                  message: u.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
                                              })
                                          ));
                                })
                        );
                    }),
                    (N.prototype.getClientId = function () {
                        return this._clientPromise.then(function (e) {
                            return e.getConfiguration().gatewayConfiguration.paypal.clientId;
                        });
                    }),
                    (N.prototype.loadPayPalSDK = function (e) {
                        var t,
                            n = new s(),
                            r = (e && e.dataAttributes) || {},
                            o = r['user-id-token'] || r['data-user-id-token'];
                        return (
                            this._configuration && (r['client-metadata-id'] = r['client-metadata-id'] ? r['client-metadata-id'] : this._configuration.analyticsMetadata.sessionId),
                            o || (o = this._authorizationInformation.fingerprint && this._authorizationInformation.fingerprint.split('?')[0]),
                            (this._paypalScript = document.createElement('script')),
                            (e = i({}, { components: 'buttons' }, e)),
                            delete e.dataAttributes,
                            e.vault ? (e.intent = e.intent || 'tokenize') : ((e.intent = e.intent || 'authorize'), (e.currency = e.currency || 'USD')),
                            (this._paypalScript.onload = function () {
                                n.resolve();
                            }),
                            Object.keys(r).forEach(
                                function (e) {
                                    this._paypalScript.setAttribute('data-' + e.replace(/^data\-/, ''), r[e]);
                                }.bind(this)
                            ),
                            (e['client-id'] ? Promise.resolve(e['client-id']) : this.getClientId()).then(
                                function (t) {
                                    (e['client-id'] = t),
                                        this._autoSetDataUserIdToken &&
                                            o &&
                                            (this._paypalScript.setAttribute('data-user-id-token', o),
                                            this._attachPreloadPixel({
                                                id: t,
                                                userIdToken: o,
                                                amount: r.amount,
                                                currency: e.currency,
                                                merchantId: e['merchant-id']
                                            })),
                                        (this._paypalScript.src = y.queryify('https://www.paypal.com/sdk/js?', e)),
                                        document.head.insertBefore(this._paypalScript, document.head.firstElementChild);
                                }.bind(this)
                            ),
                            n.then(
                                function () {
                                    return this;
                                }.bind(this)
                            )
                        );
                    }),
                    (N.prototype._attachPreloadPixel = function (e) {
                        var t,
                            n = e.id,
                            r = e.userIdToken,
                            i = this._authorizationInformation.environment,
                            o = 'https://www.{ENV}paypal.com/smart/buttons/preload'.replace('{ENV}', 'production' === i ? '' : 'sandbox.'),
                            a = {
                                'client-id': n,
                                'user-id-token': r
                            };
                        e.amount && (a.amount = e.amount), e.currency && (a.currency = e.currency), e.merchantId && (a['merchant-id'] = e.merchantId), (t = new XMLHttpRequest()).open('GET', y.queryify(o, a)), t.send();
                    }),
                    (N.prototype._formatPaymentResourceData = function (e, t) {
                        var n,
                            r = this._configuration.gatewayConfiguration,
                            i = e.intent,
                            o = {
                                returnUrl: t.returnUrl || 'https://www.paypal.com/checkoutnow/error',
                                cancelUrl: t.cancelUrl || 'https://www.paypal.com/checkoutnow/error',
                                offerPaypalCredit: !0 === e.offerCredit,
                                merchantAccountId: this._merchantAccountId,
                                experienceProfile: {
                                    brandName: e.displayName || r.paypal.displayName,
                                    localeCode: e.locale,
                                    noShipping: (!e.enableShippingAddress).toString(),
                                    addressOverride: !1 === e.shippingAddressEditable,
                                    landingPageType: e.landingPageType
                                },
                                shippingOptions: e.shippingOptions,
                                payer_email: e.userAuthenticationEmail
                            };
                        if ('checkout' === e.flow) {
                            for (n in ((o.amount = e.amount), (o.currencyIsoCode = e.currency), (o.requestBillingAgreement = e.requestBillingAgreement), i && ('capture' === i && (i = 'sale'), (o.intent = i)), e.hasOwnProperty('lineItems') && (o.lineItems = e.lineItems), e.hasOwnProperty('vaultInitiatedCheckoutPaymentMethodToken') && (o.vaultInitiatedCheckoutPaymentMethodToken = e.vaultInitiatedCheckoutPaymentMethodToken), e.hasOwnProperty('shippingOptions') && (o.shippingOptions = e.shippingOptions), e.shippingAddressOverride)) e.shippingAddressOverride.hasOwnProperty(n) && (o[n] = e.shippingAddressOverride[n]);
                            e.hasOwnProperty('billingAgreementDetails') && (o.billingAgreementDetails = e.billingAgreementDetails);
                        } else (o.shippingAddress = e.shippingAddressOverride), e.billingAgreementDescription && (o.description = e.billingAgreementDescription), e.planType && ((o.plan_type = e.planType), e.planMetadata && (o.plan_metadata = A(e.planMetadata)));
                        return (this._riskCorrelationId = e.riskCorrelationId), e.riskCorrelationId && (o.correlationId = this._riskCorrelationId), o;
                    }),
                    (N.prototype._verifyConsistentCurrency = function (e) {
                        return (
                            !(e.currency && e.hasOwnProperty('shippingOptions') && Array.isArray(e.shippingOptions)) ||
                            e.shippingOptions.every(function (t) {
                                return t.amount && t.amount.currency && e.currency.toLowerCase() === t.amount.currency.toLowerCase();
                            })
                        );
                    }),
                    (N.prototype._hasMissingOption = function (e, t) {
                        var n, r;
                        if (((t = t || []), !e.hasOwnProperty('amount') && !e.hasOwnProperty('lineItems'))) return !0;
                        for (n = 0; n < t.length; n++) if (((r = t[n]), !e.hasOwnProperty(r))) return !0;
                        return !1;
                    }),
                    (N.prototype._formatUpdatePaymentData = function (e) {
                        var t = {
                            merchantAccountId: this._merchantAccountId,
                            paymentId: e.paymentId || e.orderId,
                            currencyIsoCode: e.currency
                        };
                        return e.hasOwnProperty('amount') && (t.amount = e.amount), e.hasOwnProperty('lineItems') && (t.lineItems = e.lineItems), e.hasOwnProperty('shippingOptions') && (t.shippingOptions = e.shippingOptions), e.hasOwnProperty('amountBreakdown') && (t.amountBreakdown = e.amountBreakdown), e.hasOwnProperty('shippingAddress') && (r.sendEvent(this._clientPromise, 'paypal-checkout.updatePayment.shippingAddress.provided.by-the-merchant'), (t.line1 = e.shippingAddress.line1), e.shippingAddress.hasOwnProperty('line2') && (t.line2 = e.shippingAddress.line2), (t.city = e.shippingAddress.city), (t.state = e.shippingAddress.state), (t.postalCode = e.shippingAddress.postalCode), (t.countryCode = e.shippingAddress.countryCode), e.shippingAddress.hasOwnProperty('phone') && (t.phone = e.shippingAddress.phone), e.shippingAddress.hasOwnProperty('recipientName') && (t.recipientName = e.shippingAddress.recipientName)), t;
                    }),
                    (N.prototype._formatTokenizeData = function (e, t) {
                        var n = this._configuration,
                            r = n.gatewayConfiguration,
                            i = 'TOKENIZATION_KEY' === n.authorizationType,
                            o = 'vault' === e.flow,
                            a = {
                                paypalAccount: {
                                    correlationId: this._riskCorrelationId || t.billingToken || t.ecToken,
                                    options: { validate: o && !i && e.vault }
                                }
                            };
                        return o ? (a.paypalAccount.billingAgreementToken = t.billingToken) : ((a.paypalAccount.paymentToken = t.paymentId || t.orderId), (a.paypalAccount.payerId = t.payerId), (a.paypalAccount.unilateral = r.paypal.unvettedMerchant), e.intent && (a.paypalAccount.intent = e.intent)), this._merchantAccountId && (a.merchantAccountId = this._merchantAccountId), a;
                    }),
                    (N.prototype._formatTokenizePayload = function (e) {
                        var t,
                            n = {};
                        return (
                            e.paypalAccounts && (n = e.paypalAccounts[0]),
                            (t = {
                                nonce: n.nonce,
                                details: {},
                                type: n.type
                            }),
                            n.details && n.details.payerInfo && (t.details = n.details.payerInfo),
                            n.details && n.details.creditFinancingOffered && (t.creditFinancingOffered = n.details.creditFinancingOffered),
                            n.details && n.details.shippingOptionId && (t.shippingOptionId = n.details.shippingOptionId),
                            n.details && n.details.cobrandedCardLabel && (t.cobrandedCardLabel = n.details.cobrandedCardLabel),
                            t
                        );
                    }),
                    (N.prototype.teardown = function () {
                        var e = this;
                        return (
                            f(this, h(N.prototype)),
                            this._paypalScript && this._paypalScript.parentNode && this._paypalScript.parentNode.removeChild(this._paypalScript),
                            this._frameServicePromise
                                .catch(function () {})
                                .then(function () {
                                    return e._frameService ? e._frameService.teardown() : Promise.resolve();
                                })
                        );
                    }),
                    (t.exports = c.wrapPrototype(N));
            },
            {
                '../lib/analytics': 138,
                '../lib/assign': 140,
                '../lib/braintree-error': 143,
                '../lib/camel-case-to-snake-case': 144,
                '../lib/constants': 145,
                '../lib/convert-methods-to-error': 146,
                '../lib/convert-to-braintree-error': 147,
                '../lib/create-assets-url': 148,
                '../lib/create-authorization-data': 149,
                '../lib/create-deferred-client': 150,
                '../lib/frame-service/external': 158,
                '../lib/methods': 175,
                '../lib/querystring': 177,
                '../lib/use-min': 181,
                '../paypal/shared/constants': 201,
                './errors': 196,
                '@braintree/extended-promise': 31,
                '@braintree/wrap-promise': 40
            }
        ],
        199: [
            function (e, t, n) {
                var r = e('../../lib/frame-service/external'),
                    i = e('../../lib/braintree-error'),
                    o = e('../../lib/convert-to-braintree-error'),
                    a = e('../../lib/use-min'),
                    s = e('../../lib/once'),
                    c = '3.112.1',
                    d = e('../shared/constants'),
                    l = e('../../lib/constants').INTEGRATION_TIMEOUT_MS,
                    u = e('../../lib/analytics'),
                    p = e('../../lib/methods'),
                    _ = e('../../lib/deferred'),
                    E = e('../shared/errors'),
                    h = e('../../lib/convert-methods-to-error'),
                    m = e('../../lib/querystring'),
                    f = e('@braintree/wrap-promise');
                function y(e) {
                    (this._client = e.client), (this._assetsUrl = e.client.getConfiguration().gatewayConfiguration.paypal.assetsUrl + '/web/' + c), (this._isDebug = e.client.getConfiguration().isDebug), (this._loadingFrameUrl = this._assetsUrl + '/html/paypal-landing-frame' + a(this._isDebug) + '.html'), (this._authorizationInProgress = !1);
                }
                (y.prototype._initialize = function () {
                    var e = this,
                        t = this._client,
                        n = setTimeout(function () {
                            u.sendEvent(t, 'paypal.load.timed-out');
                        }, l);
                    return new Promise(function (i) {
                        r.create(
                            {
                                name: d.LANDING_FRAME_NAME,
                                dispatchFrameUrl: e._assetsUrl + '/html/dispatch-frame' + a(e._isDebug) + '.html',
                                openFrameUrl: e._loadingFrameUrl
                            },
                            function (r) {
                                (e._frameService = r), clearTimeout(n), u.sendEvent(t, 'paypal.load.succeeded'), i(e);
                            }
                        );
                    });
                }),
                    (y.prototype.tokenize = function (e, t) {
                        var n,
                            r,
                            o = this,
                            a = this._client;
                        return (t && (t = s(_(t))), e && d.FLOW_ENDPOINTS.hasOwnProperty(e.flow))
                            ? ((n = new Promise(function (t, n) {
                                  o._authorizationInProgress ? (u.sendEvent(a, 'paypal.tokenization.error.already-opened'), n(new i(E.PAYPAL_TOKENIZATION_REQUEST_ACTIVE))) : ((o._authorizationInProgress = !0), window.popupBridge || u.sendEvent(a, 'paypal.tokenization.opened'), !0 === e.offerCredit && u.sendEvent(a, 'paypal.credit.offered'), !0 === e.offerPayLater && u.sendEvent(a, 'paypal.paylater.offered'), o._navigateFrameToAuth(e).catch(n), o._frameService.open({}, o._createFrameServiceCallback(e, t, n)));
                              })),
                              t)
                                ? (n
                                      .then(function (e) {
                                          t(null, e);
                                      })
                                      .catch(t),
                                  this._frameService.createHandler({
                                      beforeClose: function () {
                                          u.sendEvent(a, 'paypal.tokenization.closed.by-merchant');
                                      }
                                  }))
                                : n
                            : ((r = new i(E.PAYPAL_FLOW_OPTION_REQUIRED)), t)
                              ? (t(r), this._frameService.createNoopHandler())
                              : Promise.reject(r);
                    }),
                    (y.prototype._createFrameServiceCallback = function (e, t, n) {
                        var r = this,
                            o = this._client;
                        return window.popupBridge
                            ? function (a, s) {
                                  var c = s && s.path && '/cancel' === s.path.substring(0, 7);
                                  (r._authorizationInProgress = !1), a || c ? (u.sendEvent(o, 'paypal.tokenization.closed-popupbridge.by-user'), n(new i(E.PAYPAL_POPUP_CLOSED))) : s && r._tokenizePayPal(e, s.queryItems).then(t).catch(n);
                              }
                            : function (a, s) {
                                  (r._authorizationInProgress = !1),
                                      a
                                          ? 'FRAME_SERVICE_FRAME_CLOSED' === a.code
                                              ? (u.sendEvent(o, 'paypal.tokenization.closed.by-user'), n(new i(E.PAYPAL_POPUP_CLOSED)))
                                              : a.code &&
                                                a.code.indexOf('FRAME_SERVICE_FRAME_OPEN_FAILED') > -1 &&
                                                n(
                                                    new i({
                                                        code: E.PAYPAL_POPUP_OPEN_FAILED.code,
                                                        type: E.PAYPAL_POPUP_OPEN_FAILED.type,
                                                        message: E.PAYPAL_POPUP_OPEN_FAILED.message,
                                                        details: { originalError: a }
                                                    })
                                                )
                                          : s && r._tokenizePayPal(e, s).then(t).catch(n);
                              };
                    }),
                    (y.prototype._tokenizePayPal = function (e, t) {
                        var n = this,
                            r = this._client;
                        return (
                            window.popupBridge || this._frameService.redirect(this._loadingFrameUrl),
                            r
                                .request({
                                    endpoint: 'payment_methods/paypal_accounts',
                                    method: 'post',
                                    data: this._formatTokenizeData(e, t)
                                })
                                .then(function (e) {
                                    var t = n._formatTokenizePayload(e);
                                    return window.popupBridge ? u.sendEvent(r, 'paypal.tokenization.success-popupbridge') : u.sendEvent(r, 'paypal.tokenization.success'), t.creditFinancingOffered && u.sendEvent(r, 'paypal.credit.accepted'), n._frameService.close(), t;
                                })
                                .catch(function (e) {
                                    return (
                                        window.popupBridge ? u.sendEvent(r, 'paypal.tokenization.failed-popupbridge') : u.sendEvent(r, 'paypal.tokenization.failed'),
                                        n._frameService.close(),
                                        Promise.reject(
                                            o(e, {
                                                type: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.type,
                                                code: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.code,
                                                message: E.PAYPAL_ACCOUNT_TOKENIZATION_FAILED.message
                                            })
                                        )
                                    );
                                })
                        );
                    }),
                    (y.prototype._formatTokenizePayload = function (e) {
                        var t,
                            n = {};
                        return (
                            e.paypalAccounts && (n = e.paypalAccounts[0]),
                            (t = {
                                nonce: n.nonce,
                                details: {},
                                type: n.type
                            }),
                            n.details && n.details.payerInfo && (t.details = n.details.payerInfo),
                            n.details && n.details.creditFinancingOffered && (t.creditFinancingOffered = n.details.creditFinancingOffered),
                            t
                        );
                    }),
                    (y.prototype._formatTokenizeData = function (e, t) {
                        var n = this._client.getConfiguration(),
                            r = n.gatewayConfiguration,
                            i = 'TOKENIZATION_KEY' === n.authorizationType,
                            o = {
                                paypalAccount: {
                                    correlationId: t.ba_token || t.token,
                                    options: { validate: 'vault' === e.flow && !i }
                                }
                            };
                        return t.ba_token ? (o.paypalAccount.billingAgreementToken = t.ba_token) : ((o.paypalAccount.paymentToken = t.paymentId), (o.paypalAccount.payerId = t.PayerID), (o.paypalAccount.unilateral = r.paypal.unvettedMerchant), e.hasOwnProperty('intent') && (o.paypalAccount.intent = e.intent)), o;
                    }),
                    (y.prototype._navigateFrameToAuth = function (e) {
                        var t = this,
                            n = this._client,
                            r = 'paypal_hermes/' + d.FLOW_ENDPOINTS[e.flow];
                        return n
                            .request({
                                endpoint: r,
                                method: 'post',
                                data: this._formatPaymentResourceData(e)
                            })
                            .then(function (r) {
                                var i;
                                (i = 'checkout' === e.flow ? r.paymentResource.redirectUrl : r.agreementSetup.approvalUrl), 'commit' === e.useraction && (i = m.queryify(i, { useraction: 'commit' })), window.popupBridge && u.sendEvent(n, 'paypal.tokenization.opened-popupbridge'), t._frameService.redirect(i);
                            })
                            .catch(function (e) {
                                var n = e.details && e.details.httpStatus;
                                return (t._frameService.close(), (t._authorizationInProgress = !1), 422 === n)
                                    ? Promise.reject(
                                          new i({
                                              type: E.PAYPAL_INVALID_PAYMENT_OPTION.type,
                                              code: E.PAYPAL_INVALID_PAYMENT_OPTION.code,
                                              message: E.PAYPAL_INVALID_PAYMENT_OPTION.message,
                                              details: { originalError: e }
                                          })
                                      )
                                    : Promise.reject(
                                          o(e, {
                                              type: E.PAYPAL_FLOW_FAILED.type,
                                              code: E.PAYPAL_FLOW_FAILED.code,
                                              message: E.PAYPAL_FLOW_FAILED.message
                                          })
                                      );
                            });
                    }),
                    (y.prototype._formatPaymentResourceData = function (e) {
                        var t,
                            n = this._client.getConfiguration().gatewayConfiguration,
                            r = this._frameService._serviceId,
                            i = {
                                returnUrl: n.paypal.assetsUrl + '/web/' + c + '/html/redirect-frame' + a(this._isDebug) + '.html?channel=' + r,
                                cancelUrl: n.paypal.assetsUrl + '/web/' + c + '/html/cancel-frame' + a(this._isDebug) + '.html?channel=' + r,
                                offerPaypalCredit: !0 === e.offerCredit,
                                offerPayLater: !0 === e.offerPayLater,
                                experienceProfile: {
                                    brandName: e.displayName || n.paypal.displayName,
                                    localeCode: e.locale,
                                    noShipping: (!e.enableShippingAddress).toString(),
                                    addressOverride: !1 === e.shippingAddressEditable,
                                    landingPageType: e.landingPageType
                                }
                            };
                        if ((window.popupBridge && 'function' == typeof window.popupBridge.getReturnUrlPrefix && ((i.returnUrl = window.popupBridge.getReturnUrlPrefix() + 'return'), (i.cancelUrl = window.popupBridge.getReturnUrlPrefix() + 'cancel')), 'checkout' === e.flow)) for (t in ((i.amount = e.amount), (i.currencyIsoCode = e.currency), e.hasOwnProperty('intent') && (i.intent = e.intent), e.shippingAddressOverride)) e.shippingAddressOverride.hasOwnProperty(t) && (i[t] = e.shippingAddressOverride[t]);
                        else (i.shippingAddress = e.shippingAddressOverride), e.billingAgreementDescription && (i.description = e.billingAgreementDescription);
                        return i;
                    }),
                    (y.prototype.closeWindow = function () {
                        this._authorizationInProgress && u.sendEvent(this._client, 'paypal.tokenize.closed.by-merchant'), this._frameService.close();
                    }),
                    (y.prototype.focusWindow = function () {
                        this._frameService.focus();
                    }),
                    (y.prototype.teardown = f(function () {
                        return this._frameService.teardown(), h(this, p(y.prototype)), u.sendEvent(this._client, 'paypal.teardown-completed'), Promise.resolve();
                    })),
                    (t.exports = y);
            },
            {
                '../../lib/analytics': 138,
                '../../lib/braintree-error': 143,
                '../../lib/constants': 145,
                '../../lib/convert-methods-to-error': 146,
                '../../lib/convert-to-braintree-error': 147,
                '../../lib/deferred': 151,
                '../../lib/frame-service/external': 158,
                '../../lib/methods': 175,
                '../../lib/once': 176,
                '../../lib/querystring': 177,
                '../../lib/use-min': 181,
                '../shared/constants': 201,
                '../shared/errors': 202,
                '@braintree/wrap-promise': 40
            }
        ],
        200: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('../lib/basic-component-verification'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url'),
                    s = e('../lib/braintree-error'),
                    c = e('./shared/errors'),
                    d = e('./external/paypal');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'PayPal';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return o.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: a.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                var n = t.getConfiguration();
                                return ((e.client = t), !0 !== n.gatewayConfiguration.paypalEnabled) ? Promise.reject(new s(c.PAYPAL_NOT_ENABLED)) : (r.sendEvent(e.client, 'paypal.initialized'), new d(e)._initialize());
                            });
                    }),
                    isSupported: function () {
                        return !0;
                    },
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './external/paypal': 199,
                './shared/errors': 202,
                '@braintree/wrap-promise': 40
            }
        ],
        201: [
            function (e, t, n) {
                t.exports = {
                    LANDING_FRAME_NAME: 'braintreepaypallanding',
                    FLOW_ENDPOINTS: {
                        checkout: 'create_payment_resource',
                        vault: 'setup_billing_agreement'
                    },
                    REQUIRED_OPTIONS: ['paymentId', 'currency']
                };
            },
            {}
        ],
        202: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    PAYPAL_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_NOT_ENABLED',
                        message: 'PayPal is not enabled for this merchant.'
                    },
                    PAYPAL_TOKENIZATION_REQUEST_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_TOKENIZATION_REQUEST_ACTIVE',
                        message: 'Another tokenization request is active.'
                    },
                    PAYPAL_ACCOUNT_TOKENIZATION_FAILED: {
                        type: r.types.NETWORK,
                        code: 'PAYPAL_ACCOUNT_TOKENIZATION_FAILED',
                        message: "Could not tokenize user's PayPal account."
                    },
                    PAYPAL_FLOW_FAILED: {
                        type: r.types.NETWORK,
                        code: 'PAYPAL_FLOW_FAILED',
                        message: 'Could not initialize PayPal flow.'
                    },
                    PAYPAL_FLOW_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_FLOW_OPTION_REQUIRED',
                        message: 'PayPal flow property is invalid or missing.'
                    },
                    PAYPAL_POPUP_OPEN_FAILED: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_POPUP_OPEN_FAILED',
                        message: 'PayPal popup failed to open, make sure to tokenize in response to a user action.'
                    },
                    PAYPAL_POPUP_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: 'PAYPAL_POPUP_CLOSED',
                        message: 'Customer closed PayPal popup before authorizing.'
                    },
                    PAYPAL_INVALID_PAYMENT_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'PAYPAL_INVALID_PAYMENT_OPTION',
                        message: 'PayPal payment options are invalid.'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        203: [
            function (e, t, n) {
                var r = e('@braintree/wrap-promise'),
                    i = e('../lib/basic-component-verification'),
                    o = e('./preferred-payment-methods');
                t.exports = {
                    create: r(function (e) {
                        return i
                            .verify({
                                name: 'PreferredPaymentMethods',
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return new o().initialize(e);
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                './preferred-payment-methods': 204,
                '@braintree/wrap-promise': 40
            }
        ],
        204: [
            function (e, t, n) {
                var r = e('@braintree/wrap-promise'),
                    i = e('../lib/analytics'),
                    o = e('../lib/create-assets-url'),
                    a = e('../lib/create-deferred-client');
                function s() {}
                (s.prototype.initialize = function (e) {
                    var t = this;
                    return (
                        (this._clientPromise = a
                            .create({
                                authorization: e.authorization,
                                client: e.client,
                                debug: e.debug,
                                assetsUrl: o.create(e.authorization),
                                name: 'PreferredPaymentMethods'
                            })
                            .catch(function (e) {
                                return (t._setupError = e), Promise.reject(e);
                            })),
                        i.sendEvent(this._clientPromise, 'preferred-payment-methods.initialized'),
                        Promise.resolve(this)
                    );
                }),
                    (s.prototype.fetchPreferredPaymentMethods = function () {
                        var e,
                            t = this;
                        return this._clientPromise
                            .then(function (t) {
                                return (e = t).request({
                                    api: 'graphQLApi',
                                    data: { query: 'query PreferredPaymentMethods { preferredPaymentMethods { paypalPreferred venmoPreferred } }' }
                                });
                            })
                            .then(function (t) {
                                var n = t.data.preferredPaymentMethods.paypalPreferred,
                                    r = t.data.preferredPaymentMethods.venmoPreferred;
                                return (
                                    i.sendEvent(e, 'preferred-payment-methods.paypal.api-detected.' + n),
                                    i.sendEvent(e, 'preferred-payment-methods.venmo.api-detected.' + r),
                                    {
                                        paypalPreferred: n,
                                        venmoPreferred: r
                                    }
                                );
                            })
                            .catch(function () {
                                return t._setupError
                                    ? Promise.reject(t._setupError)
                                    : (i.sendEvent(e, 'preferred-payment-methods.api-error'),
                                      {
                                          paypalPreferred: !1,
                                          venmoPreferred: !1
                                      });
                            });
                    }),
                    (t.exports = r.wrapPrototype(s));
            },
            {
                '../lib/analytics': 138,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                '@braintree/wrap-promise': 40
            }
        ],
        205: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error'),
                    i = e('../shared/errors'),
                    o = e('../../lib/frame-service/external'),
                    a = e('../../lib/analytics'),
                    s = e('../../lib/use-min'),
                    c = e('../shared/constants').BILLING_ADDRESS_OPTIONS,
                    d = e('../../lib/snake-case-to-camel-case'),
                    l = e('../../lib/assign').assign;
                function u(e, t) {
                    var n = {
                        sepa_debit_account: {
                            last_4: t.last4,
                            merchant_or_partner_customer_id: t.customerId,
                            bank_reference_token: t.bankReferenceToken,
                            mandate_type: t.mandateType
                        },
                        merchant_account_id: t.merchantAccountId
                    };
                    return e
                        .request({
                            api: 'clientApi',
                            method: 'post',
                            endpoint: 'payment_methods/sepa_debit_accounts',
                            data: n
                        })
                        .then(function (e) {
                            if (!e.nonce) throw new r(i.SEPA_TRANSACTION_FAILED);
                            return {
                                nonce: e.nonce,
                                ibanLastFour: t.last4,
                                customerId: t.customerId,
                                mandateType: t.mandateType
                            };
                        })
                        .catch(function () {
                            throw new r(i.SEPA_TRANSACTION_FAILED);
                        });
                }
                t.exports = {
                    createMandate: function (e, t) {
                        var n = {
                            sepa_debit: {
                                account_holder_name: t.accountHolderName,
                                billing_address: { country_code: t.countryCode },
                                iban: t.iban,
                                merchant_or_partner_customer_id: t.customerId,
                                mandate_type: t.mandateType
                            },
                            locale: t.locale,
                            cancel_url: t.cancelUrl,
                            return_url: t.returnUrl,
                            merchant_account_id: t.merchantAccountId
                        };
                        return (
                            t.billingAddress &&
                                c.forEach(function (e) {
                                    var r = d(e);
                                    r in t.billingAddress && (n.sepa_debit.billing_address[e] = t.billingAddress[r]);
                                }),
                            e
                                .request({
                                    api: 'clientApi',
                                    method: 'post',
                                    endpoint: 'sepa_debit',
                                    data: n
                                })
                                .then(function (e) {
                                    var t = e.message.body.sepaDebitAccount;
                                    if (!t) throw new r(i.SEPA_CREATE_MANDATE_FAILED);
                                    return {
                                        approvalUrl: t.approvalUrl,
                                        last4: t.last4,
                                        bankReferenceToken: t.bankReferenceToken
                                    };
                                })
                                .catch(function () {
                                    throw new r(i.SEPA_CREATE_MANDATE_FAILED);
                                })
                        );
                    },
                    openPopup: function (e, t) {
                        var n = t.assetsUrl + '/html',
                            c = t.debug || !1;
                        return new Promise(function (d, l) {
                            var u = {
                                top: Math.round((window.outerHeight - 570) / 2) + window.screenTop,
                                left: Math.round((window.outerWidth - 400) / 2) + window.screenLeft
                            };
                            o.create(
                                {
                                    name: 'sepadirectdebit',
                                    dispatchFrameUrl: n + '/dispatch-frame' + s(c) + '.html',
                                    openFrameUrl: n + '/sepa-landing-frame' + s(c) + '.html',
                                    top: u.top,
                                    left: u.left,
                                    height: 570,
                                    width: 400
                                },
                                function (n) {
                                    a.sendEvent(e, 'sepa.popup.initialized'),
                                        n.open({}, function (e, t) {
                                            var o, a, s;
                                            return (o = t) && o.success ? (n.close(), d()) : ((a = t), (s = e), (a && a.cancel) || (s && 'FRAME_SERVICE_FRAME_CLOSED' === s.code)) ? (n.close(), l(new r(i.SEPA_CUSTOMER_CANCELED))) : (n.close(), l(new r(i.SEPA_TOKENIZATION_FAILED)));
                                        }),
                                        n.redirect(t.approvalUrl);
                                }
                            );
                        });
                    },
                    handleApproval: u,
                    POPUP_WIDTH: 400,
                    POPUP_HEIGHT: 570,
                    redirectPage: function (e) {
                        window.location.href = e;
                    },
                    handleApprovalForFullPageRedirect: function (e, t) {
                        return e
                            .request({
                                api: 'clientApi',
                                method: 'get',
                                endpoint: 'sepa_debit/' + t.cart_id
                            })
                            .then(function (n) {
                                var r = n.sepaDebitMandateDetail;
                                return (
                                    a.sendEvent(e, 'sepa.redirect.mandate.approved'),
                                    l(t, {
                                        last4: r.last4,
                                        customerId: r.merchantOrPartnerCustomerId,
                                        mandateType: r.mandateType,
                                        bankReferenceToken: r.bankReferenceToken
                                    }),
                                    u(e, t)
                                );
                            })
                            .then(function (t) {
                                return a.sendEvent(e, 'sepa.redirect.tokenization.success'), t;
                            })
                            .catch(function () {
                                throw (a.sendEvent(e, 'sepa.redirect.handle-approval.failed'), new r(i.SEPA_TRANSACTION_FAILED));
                            });
                    }
                };
            },
            {
                '../../lib/analytics': 138,
                '../../lib/assign': 140,
                '../../lib/braintree-error': 143,
                '../../lib/frame-service/external': 158,
                '../../lib/snake-case-to-camel-case': 179,
                '../../lib/use-min': 181,
                '../shared/constants': 208,
                '../shared/errors': 209
            }
        ],
        206: [
            function (e, t, n) {
                var r = e('@braintree/wrap-promise'),
                    i = e('../../lib/braintree-error'),
                    o = e('../shared/errors'),
                    a = e('../shared/constants'),
                    s = e('./mandate'),
                    c = e('../shared/has-missing-option'),
                    d = e('../../lib/analytics'),
                    l = e('../../lib/assign').assign;
                function u(e) {
                    var t = e.client.getConfiguration();
                    (this._client = e.client), (this._assetsUrl = t.gatewayConfiguration.assetsUrl + '/web/3.112.1'), (this._isDebug = t.isDebug), e.redirectUrl ? ((this._returnUrl = e.redirectUrl), (this._cancelUrl = e.redirectUrl + '?cancel=1'), (this._isRedirectFlow = !0)) : ((this._returnUrl = this._assetsUrl + '/html/redirect-frame.html?success=1'), (this._cancelUrl = this._assetsUrl + '/html/redirect-frame.html?cancel=1')), e.tokenizePayload && (this.tokenizePayload = e.tokenizePayload), d.sendEvent(this._client, 'sepa.component.initialized');
                }
                (u.prototype.tokenize = function (e) {
                    var t,
                        n = this,
                        r = l(
                            {
                                cancelUrl: n._cancelUrl,
                                returnUrl: n._returnUrl
                            },
                            e
                        );
                    return !e || c(e, a.REQUIRED_OPTIONS)
                        ? (d.sendEvent(n._client, 'sepa.input-validation.missing-options'), Promise.reject(new i(o.SEPA_TOKENIZE_MISSING_REQUIRED_OPTION)))
                        : a.MANDATE_TYPE_ENUM.includes(e.mandateType)
                          ? ((t = s.createMandate(n._client, r).then(function (t) {
                                return (d.sendEvent(n._client, 'sepa.create-mandate.success'), n._isRedirectFlow)
                                    ? s.redirectPage(t.approvalUrl)
                                    : ((e.last4 = t.last4),
                                      (e.bankReferenceToken = t.bankReferenceToken),
                                      s.openPopup(n._client, {
                                          approvalUrl: t.approvalUrl,
                                          assetsUrl: n._assetsUrl
                                      }));
                            })),
                            n._isRedirectFlow)
                              ? Promise.resolve()
                              : t
                                    .then(function () {
                                        return (
                                            d.sendEvent(n._client, 'sepa.mandate.approved'),
                                            s.handleApproval(n._client, {
                                                bankReferenceToken: e.bankReferenceToken,
                                                last4: e.last4,
                                                customerId: e.customerId,
                                                mandateType: e.mandateType,
                                                merchantAccountId: e.merchantAccountId
                                            })
                                        );
                                    })
                                    .then(function (e) {
                                        return d.sendEvent(n._client, 'sepa.tokenization.success'), Promise.resolve(e);
                                    })
                                    .catch(function (e) {
                                        return d.sendEvent(n._client, 'sepa.' + e.details + '.failed'), Promise.reject(e);
                                    })
                          : (d.sendEvent(n._client, 'sepa.input-validation.invalid-mandate'), Promise.reject(new i(o.SEPA_INVALID_MANDATE_TYPE)));
                }),
                    (t.exports = r.wrapPrototype(u));
            },
            {
                '../../lib/analytics': 138,
                '../../lib/assign': 140,
                '../../lib/braintree-error': 143,
                '../shared/constants': 208,
                '../shared/errors': 209,
                '../shared/has-missing-option': 210,
                './mandate': 205,
                '@braintree/wrap-promise': 40
            }
        ],
        207: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('./external/sepa'),
                    o = e('../lib/create-assets-url'),
                    a = e('../lib/create-deferred-client'),
                    s = e('../lib/basic-component-verification'),
                    c = e('@braintree/wrap-promise'),
                    d = e('../lib/querystring').parse,
                    l = e('../lib/assign').assign,
                    u = e('./external/mandate');
                t.exports = {
                    create: c(function (e) {
                        var t = 'SEPA',
                            n = d(window.location.href);
                        return s
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return a.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: o.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return (e.client = t), r.sendEvent(t, 'sepa.client.initialized'), new i(e);
                            })
                            .then(function (t) {
                                return n.success && 'true' === n.success && n.cart_id
                                    ? ((e = l(e, n)),
                                      u
                                          .handleApprovalForFullPageRedirect(e.client, e)
                                          .then(function (e) {
                                              return (t.tokenizePayload = e), t;
                                          })
                                          .catch(function (e) {
                                              console.error('Problem while finishing tokenizing: ', e);
                                          }))
                                    : (n.cancel && r.sendEvent(e.client, 'sepa.redirect.customer-canceled.failed'), t);
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/assign': 140,
                '../lib/basic-component-verification': 141,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                '../lib/querystring': 177,
                './external/mandate': 205,
                './external/sepa': 206,
                '@braintree/wrap-promise': 40
            }
        ],
        208: [
            function (e, t, n) {
                t.exports = {
                    REQUIRED_OPTIONS: ['iban', 'merchantAccountId', 'mandateType', 'customerId', 'accountHolderName', 'countryCode'],
                    BILLING_ADDRESS_OPTIONS: ['address_line_1', 'address_line_2', 'admin_area_1', 'admin_area_2', 'postal_code'],
                    MANDATE_TYPE_ENUM: ['ONE_OFF', 'RECURRENT']
                };
            },
            {}
        ],
        209: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    SEPA_CREATE_MANDATE_FAILED: {
                        type: r.types.MERCHANT,
                        code: 'SEPA_CREATE_MANDATE_FAILED',
                        message: 'SEPA create mandate failed.',
                        details: 'create-mandate'
                    },
                    SEPA_CUSTOMER_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'SEPA_CUSTOMER_CANCELED',
                        message: 'User canceled SEPA authorization',
                        details: 'customer-canceled'
                    },
                    SEPA_INVALID_MANDATE_TYPE: {
                        type: r.types.MERCHANT,
                        code: 'SEPA_INVALID_MANDATE_TYPE',
                        message: 'SEPA mandate type is invalid'
                    },
                    SEPA_TOKENIZATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'SEPA_TOKENIZATION_FAILED',
                        message: 'SEPA encountered a problem',
                        details: 'open-popup'
                    },
                    SEPA_TOKENIZE_MISSING_REQUIRED_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'SEPA_TOKENIZE_MISSING_REQUIRED_OPTION',
                        message: 'Missing required option for tokenize.'
                    },
                    SEPA_TRANSACTION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'SEPA_TRANSACTION_FAILED',
                        message: 'SEPA transaction failed',
                        details: 'handle-approval'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        210: [
            function (e, t, n) {
                t.exports = function (e, t) {
                    var n, r;
                    for (n = 0, t = t || []; n < t.length; n++) if (((r = t[n]), !e.hasOwnProperty(r))) return !0;
                    return !1;
                };
            },
            {}
        ],
        211: [
            function (e, t, n) {
                var r = e('../../../lib/assign').assign,
                    i = e('../../../lib/analytics'),
                    o = e('../../../lib/braintree-error'),
                    a = e('../../../lib/is-verified-domain'),
                    s = e('@braintree/extended-promise'),
                    c = e('@braintree/event-emitter'),
                    d = e('../../shared/errors'),
                    l = e('@braintree/iframer'),
                    u = e('framebus'),
                    p = e('../../shared/constants'),
                    _ = e('@braintree/uuid'),
                    E = e('../../shared/events'),
                    h = e('../../../lib/use-min'),
                    m = e('../../../lib/constants').BUS_CONFIGURATION_REQUEST_EVENT,
                    f = '3.112.1';
                function y(e) {
                    c.call(this), (this._client = e.client), (this._createPromise = e.createPromise), (this._createOptions = e), this._client ? ((this._isDebug = this._client.getConfiguration().isDebug), (this._assetsUrl = this._client.getConfiguration().gatewayConfiguration.assetsUrl)) : ((this._isDebug = !!e.isDebug), (this._assetsUrl = e.assetsUrl)), (this._assetsUrl = this._assetsUrl + '/web/' + f);
                }
                (s.suppressUnhandledPromiseMessage = !0),
                    c.createChild(y),
                    (y.prototype._waitForClient = function () {
                        return this._client
                            ? Promise.resolve()
                            : this._createPromise.then(
                                  function (e) {
                                      this._client = e;
                                  }.bind(this)
                              );
                    }),
                    (y.prototype.setUpEventListeners = function () {
                        throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
                    }),
                    (y.prototype.verifyCard = function (e, t) {
                        var n,
                            r,
                            o = this;
                        return ((t = t || {}), (r = this._checkForVerifyCardError(e, t)))
                            ? Promise.reject(r)
                            : ((this._verifyCardInProgress = !0),
                              (n = this._formatVerifyCardOptions(e)),
                              this._formatLookupData(n)
                                  .then(function (e) {
                                      return i.sendEvent(o._createPromise, 'three-d-secure.verification-flow.started'), o._performLookup(n.nonce, e);
                                  })
                                  .then(function (e) {
                                      return i.sendEvent(o._createPromise, 'three-d-secure.verification-flow.3ds-version.' + e.lookup.threeDSecureVersion), o._onLookupComplete(e, n);
                                  })
                                  .then(function (e) {
                                      return o.initializeChallengeWithLookupResponse(e, n);
                                  })
                                  .then(function (e) {
                                      return o._resetVerificationState(), i.sendEvent(o._createPromise, 'three-d-secure.verification-flow.completed'), e;
                                  })
                                  .catch(function (e) {
                                      return o._resetVerificationState(), i.sendEvent(o._createPromise, 'three-d-secure.verification-flow.failed'), Promise.reject(e);
                                  }));
                    }),
                    (y.prototype._checkForFrameworkSpecificVerifyCardErrors = function () {
                        throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
                    }),
                    (y.prototype._presentChallenge = function () {
                        throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
                    }),
                    (y.prototype.prepareLookup = function () {
                        throw new o(d.THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED);
                    }),
                    (y.prototype._resetVerificationState = function () {
                        (this._verifyCardInProgress = !1), (this._verifyCardPromisePlus = null), 'function' == typeof this._reloadThreeDSecure && this._reloadThreeDSecure();
                    }),
                    (y.prototype._performLookup = function (e, t) {
                        var n = this,
                            r = 'payment_methods/' + e + '/three_d_secure/lookup';
                        return this._waitForClient().then(function () {
                            return n._client
                                .request({
                                    endpoint: r,
                                    method: 'post',
                                    data: t
                                })
                                .catch(function (e) {
                                    var t,
                                        r = e && e.details && e.details.httpStatus,
                                        a = 'three-d-secure.verification-flow.lookup-failed';
                                    return (
                                        404 === r ? ((t = d.THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR), (a += '.404')) : 422 === r ? ((t = d.THREEDS_LOOKUP_VALIDATION_ERROR), (a += '.422')) : (t = d.THREEDS_LOOKUP_ERROR),
                                        i.sendEvent(n._createPromise, a),
                                        Promise.reject(
                                            new o({
                                                type: t.type,
                                                code: t.code,
                                                message: t.message,
                                                details: { originalError: e }
                                            })
                                        )
                                    );
                                });
                        });
                    }),
                    (y.prototype._existsAndIsNumeric = function (e) {
                        return !(null == e || Array.isArray(e) || 'boolean' == typeof e || ('string' == typeof e && '' === e.trim()) || isNaN(Number(e)));
                    }),
                    (y.prototype._checkForVerifyCardError = function (e, t) {
                        var n;
                        return !0 === this._verifyCardInProgress
                            ? new o(d.THREEDS_AUTHENTICATION_IN_PROGRESS)
                            : (e.nonce ? this._existsAndIsNumeric(e.amount) || (n = 'an amount') : (n = 'a nonce'), n || (n = this._checkForFrameworkSpecificVerifyCardErrors(e, t)), n)
                              ? new o({
                                    type: d.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
                                    code: d.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
                                    message: 'verifyCard options must include ' + n + '.'
                                })
                              : null;
                    }),
                    (y.prototype.initializeChallengeWithLookupResponse = function (e, t) {
                        var n = this;
                        return (
                            (t = t || {}),
                            (this._lookupPaymentMethod = e.paymentMethod),
                            (n._verifyCardPromisePlus = n._verifyCardPromisePlus || new s()),
                            n._handleLookupResponse(e, t),
                            n._verifyCardPromisePlus.then(function (e) {
                                return i.sendEvent(n._createPromise, 'three-d-secure.verification-flow.liability-shifted.' + String(e.liabilityShifted)), i.sendEvent(n._createPromise, 'three-d-secure.verification-flow.liability-shift-possible.' + String(e.liabilityShiftPossible)), e;
                            })
                        );
                    }),
                    (y.prototype._handleLookupResponse = function (e, t) {
                        var n,
                            r = !!(e.lookup && e.lookup.acsUrl);
                        i.sendEvent(this._createPromise, 'three-d-secure.verification-flow.challenge-presented.' + String(r)), r ? this._presentChallenge(e, t) : (((n = this._formatAuthResponse(e.paymentMethod, e.threeDSecureInfo)).verificationDetails = e.threeDSecureInfo), this._verifyCardPromisePlus.resolve(n));
                    }),
                    (y.prototype._onLookupComplete = function (e) {
                        return (this._lookupPaymentMethod = e.paymentMethod), (this._verifyCardPromisePlus = new s()), Promise.resolve(e);
                    }),
                    (y.prototype._formatAuthResponse = function (e, t) {
                        return {
                            nonce: e.nonce,
                            type: e.type,
                            binData: e.binData,
                            details: e.details,
                            description: e.description && e.description.replace(/\+/g, ' '),
                            liabilityShifted: t && t.liabilityShifted,
                            liabilityShiftPossible: t && t.liabilityShiftPossible,
                            threeDSecureInfo: e.threeDSecureInfo
                        };
                    }),
                    (y.prototype._formatVerifyCardOptions = function (e) {
                        return r({}, e);
                    }),
                    (y.prototype._formatLookupData = function (e) {
                        var t = { amount: e.amount };
                        return !0 === e.collectDeviceData && ((t.browserColorDepth = window.screen.colorDepth), (t.browserJavaEnabled = window.navigator.javaEnabled()), (t.browserJavascriptEnabled = !0), (t.browserLanguage = window.navigator.language), (t.browserScreenHeight = window.screen.height), (t.browserScreenWidth = window.screen.width), (t.browserTimeZone = new Date().getTimezoneOffset()), (t.deviceChannel = 'Browser')), Promise.resolve(t);
                    }),
                    (y.prototype._handleV1AuthResponse = function (e) {
                        var t = JSON.parse(e.auth_response);
                        t.success
                            ? this._verifyCardPromisePlus.resolve(this._formatAuthResponse(t.paymentMethod, t.threeDSecureInfo))
                            : t.threeDSecureInfo && t.threeDSecureInfo.liabilityShiftPossible
                              ? this._verifyCardPromisePlus.resolve(this._formatAuthResponse(this._lookupPaymentMethod, t.threeDSecureInfo))
                              : this._verifyCardPromisePlus.reject(
                                    new o({
                                        type: o.types.UNKNOWN,
                                        code: 'UNKNOWN_AUTH_RESPONSE',
                                        message: t.error.message
                                    })
                                );
                    }),
                    (y.prototype.cancelVerifyCard = function () {
                        var e;
                        return ((this._verifyCardInProgress = !1), this._lookupPaymentMethod)
                            ? ((e = this._lookupPaymentMethod.threeDSecureInfo),
                              Promise.resolve(
                                  r({}, this._lookupPaymentMethod, {
                                      liabilityShiftPossible: e && e.liabilityShiftPossible,
                                      liabilityShifted: e && e.liabilityShifted,
                                      verificationDetails: e && e.verificationDetails
                                  })
                              ))
                            : Promise.reject(new o(d.THREEDS_NO_VERIFICATION_PAYLOAD));
                    }),
                    (y.prototype._setupV1Bus = function (e) {
                        var t = this._client.getConfiguration(),
                            n = window.location.href.split('#')[0],
                            r = e.lookupResponse,
                            i = _(),
                            o = new u({
                                channel: i,
                                verifyDomain: a
                            }),
                            s = this._assetsUrl + '/html/three-d-secure-authentication-complete-frame.html?channel=' + encodeURIComponent(i) + '&';
                        return (
                            o.on(m, function (i) {
                                i({
                                    clientConfiguration: t,
                                    nonce: e.nonce,
                                    acsUrl: r.acsUrl,
                                    pareq: r.pareq,
                                    termUrl: r.termUrl + '&three_d_secure_version=' + f + '&authentication_complete_base_url=' + encodeURIComponent(s),
                                    md: r.md,
                                    parentUrl: n
                                });
                            }),
                            o.on(E.AUTHENTICATION_COMPLETE, e.handleAuthResponse),
                            o
                        );
                    }),
                    (y.prototype._setupV1Iframe = function (e) {
                        return l({
                            src: this._assetsUrl + '/html/three-d-secure-bank-frame' + h(this._isDebug) + '.html?showLoader=' + e.showLoader,
                            height: 400,
                            width: 400,
                            name: p.LANDING_FRAME_NAME + '_' + this._v1Bus.channel,
                            title: '3D Secure Authorization Frame'
                        });
                    }),
                    (y.prototype._setupV1Elements = function (e) {
                        (this._v1Bus = this._setupV1Bus(e)), (this._v1Iframe = this._setupV1Iframe(e));
                    }),
                    (y.prototype._teardownV1Elements = function () {
                        this._v1Bus && (this._v1Bus.teardown(), (this._v1Bus = null)), this._v1Iframe && this._v1Iframe.parentNode && (this._v1Iframe.parentNode.removeChild(this._v1Iframe), (this._v1Iframe = null)), this._onV1Keyup && (document.removeEventListener('keyup', this._onV1Keyup), (this._onV1Keyup = null));
                    }),
                    (y.prototype.teardown = function () {
                        return i.sendEvent(this._createPromise, 'three-d-secure.teardown-completed'), this._teardownV1Elements(), Promise.resolve();
                    }),
                    (t.exports = y);
            },
            {
                '../../../lib/analytics': 138,
                '../../../lib/assign': 140,
                '../../../lib/braintree-error': 143,
                '../../../lib/constants': 145,
                '../../../lib/is-verified-domain': 173,
                '../../../lib/use-min': 181,
                '../../shared/constants': 220,
                '../../shared/errors': 221,
                '../../shared/events': 222,
                '@braintree/event-emitter': 30,
                '@braintree/extended-promise': 31,
                '@braintree/iframer': 32,
                '@braintree/uuid': 36,
                framebus: 50
            }
        ],
        212: [
            function (e, t, n) {
                var r = e('./songbird');
                function i(e) {
                    r.call(this, e);
                }
                (i.prototype = Object.create(r.prototype, { constructor: r })),
                    (i.prototype._createV1IframeModalElement = function (e) {
                        var t = document.createElement('div');
                        return (t.innerHTML = '<div class="modal fade in" tabindex="-1" role="dialog" aria-labelledby="CCAFrameModal-label" aria-hidden="true" style="display: block;"><div class="modal-dialog" style="width:440px;z-index:999999;"><div class="modal-content"><div class="modal-body" data-braintree-v1-fallback-iframe-container><button type="button" data-braintree-v1-fallback-close-button class="close" data-dismiss="modal" aria-hidden="true">\xD7</button></div></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;cursor: pointer;z-index: 999998;top: 0;left: 0;width: 100%;height: 100%;"></div></div>'), t.querySelector('[data-braintree-v1-fallback-iframe-container]').appendChild(e), t;
                    }),
                    (i.prototype._createCardinalConfigurationOptions = function (e) {
                        var t = r.prototype._createCardinalConfigurationOptions.call(this, e);
                        return (t.payment.framework = 'bootstrap3'), t;
                    }),
                    (t.exports = i);
            },
            { './songbird': 217 }
        ],
        213: [
            function (e, t, n) {
                var r = e('./songbird');
                function i(e) {
                    r.call(this, e);
                }
                (i.prototype = Object.create(r.prototype, { constructor: r })),
                    (i.prototype._createV1IframeModalElement = function (e) {
                        var t = document.createElement('div'),
                            n = !!(this._createOptions && this._createOptions.cardinalSDKConfig && this._createOptions.cardinalSDKConfig.payment && this._createOptions.cardinalSDKConfig.payment.displayExitButton);
                        return (t.innerHTML = '<div style="position: fixed;z-index: 999999;top: 50%;left: 50%;padding: 24px 20px;transform: translate(-50%,-50%);border-radius: 2px;background: #fff;max-width: 100%;overflow: auto;"><div><button data-braintree-v1-fallback-close-button style="font-family: Helvetica,Arial,sans-serif;font-size: 25px;line-height: 12px;position: absolute;top: 2px;right: 0px;cursor: pointer;color: #999;border: 0;outline: none;background: none;" onMouseOver="this.style.color=\'#000\'" onMouseOut="this.style.color=\'#999\'">\xD7</button></div><div data-braintree-v1-fallback-iframe-container style="height: 400px;"></div></div><div data-braintree-v1-fallback-backdrop style="position: fixed;z-index: 999998;cursor: pointer;top: 0;left: 0;width: 100%;height: 100%;transition: opacity 1ms ease;background: rgba(0,0,0,.6);"></div>'), n || (t.querySelector('[data-braintree-v1-fallback-close-button]').style.display = 'none'), t.querySelector('[data-braintree-v1-fallback-iframe-container]').appendChild(e), t;
                    }),
                    (t.exports = i);
            },
            { './songbird': 217 }
        ],
        214: [
            function (e, t, n) {
                t.exports = {
                    legacy: e('./legacy'),
                    'cardinal-modal': e('./cardinal-modal'),
                    'bootstrap3-modal': e('./bootstrap3-modal'),
                    'inline-iframe': e('./inline-iframe')
                };
            },
            {
                './bootstrap3-modal': 212,
                './cardinal-modal': 213,
                './inline-iframe': 215,
                './legacy': 216
            }
        ],
        215: [
            function (e, t, n) {
                var r = e('./songbird'),
                    i = e('../../../lib/braintree-error'),
                    o = e('../../shared/errors'),
                    a = e('../../../lib/enumerate');
                function s(e) {
                    r.call(this, e);
                }
                (s.prototype = Object.create(r.prototype, { constructor: r })),
                    (s.events = a(['AUTHENTICATION_IFRAME_AVAILABLE'], 'inline-iframe-framework:')),
                    (s.prototype.setUpEventListeners = function (e) {
                        r.prototype.setUpEventListeners.call(this, e),
                            this.on(s.events.AUTHENTICATION_IFRAME_AVAILABLE, function (t, n) {
                                e('authentication-iframe-available', t, n);
                            });
                    }),
                    (s.prototype._createCardinalConfigurationOptions = function (e) {
                        var t = r.prototype._createCardinalConfigurationOptions.call(this, e);
                        return (t.payment.framework = 'inline'), t;
                    }),
                    (s.prototype._addV1IframeToPage = function () {
                        this._emit(s.events.AUTHENTICATION_IFRAME_AVAILABLE, { element: this._v1Modal }, function () {});
                    }),
                    (s.prototype._setupFrameworkSpecificListeners = function () {
                        this.setCardinalListener('ui.inline.setup', this._onInlineSetup.bind(this));
                    }),
                    (s.prototype._onInlineSetup = function (e, t, n, r) {
                        var a, c;
                        if ((e && t ? ('CCA' !== t.paymentType ? (c = !0) : 'suppress' !== t.data.mode && 'static' !== t.data.mode && (c = !0)) : (c = !0), c)) return void r(new i(o.THREEDS_INLINE_IFRAME_DETAILS_INCORRECT));
                        ((a = document.createElement('div')).innerHTML = e),
                            'suppress' === t.data.mode
                                ? ((a.style.display = 'none'), document.body.appendChild(a), n())
                                : 'static' === t.data.mode &&
                                  this._emit(s.events.AUTHENTICATION_IFRAME_AVAILABLE, { element: a }, function () {
                                      n();
                                  });
                    }),
                    (t.exports = s);
            },
            {
                '../../../lib/braintree-error': 143,
                '../../../lib/enumerate': 153,
                '../../shared/errors': 221,
                './songbird': 217
            }
        ],
        216: [
            function (e, t, n) {
                var r = e('./base'),
                    i = e('../../../lib/deferred');
                function o(e) {
                    r.call(this, e);
                }
                (o.prototype = Object.create(r.prototype, { constructor: o })),
                    (o.prototype.setUpEventListeners = function () {}),
                    (o.prototype.transformV1CustomerBillingAddress = function (e) {
                        return (e.billingAddress.line1 = e.billingAddress.streetAddress), (e.billingAddress.line2 = e.billingAddress.extendedAddress), (e.billingAddress.city = e.billingAddress.locality), (e.billingAddress.state = e.billingAddress.region), (e.billingAddress.countryCode = e.billingAddress.countryCodeAlpha2), delete e.billingAddress.streetAddress, delete e.billingAddress.extendedAddress, delete e.billingAddress.locality, delete e.billingAddress.region, delete e.billingAddress.countryCodeAlpha2, e;
                    }),
                    (o.prototype._createIframe = function (e) {
                        var t = this;
                        return (
                            this._setupV1Elements({
                                nonce: e.nonce,
                                lookupResponse: e.lookupResponse,
                                showLoader: e.showLoader,
                                handleAuthResponse: function (n) {
                                    t._handleAuthResponse(n, e);
                                }
                            }),
                            this._v1Iframe
                        );
                    }),
                    (o.prototype._handleAuthResponse = function (e, t) {
                        this._v1Bus.teardown(),
                            t.removeFrame(),
                            i(
                                function () {
                                    this._handleV1AuthResponse(e);
                                }.bind(this)
                            )();
                    }),
                    (o.prototype._checkForFrameworkSpecificVerifyCardErrors = function (e) {
                        var t;
                        return 'function' != typeof e.addFrame ? (t = 'an addFrame function') : 'function' != typeof e.removeFrame && (t = 'a removeFrame function'), t;
                    }),
                    (o.prototype._formatVerifyCardOptions = function (e) {
                        var t = r.prototype._formatVerifyCardOptions.call(this, e);
                        return (t.addFrame = i(e.addFrame)), (t.removeFrame = i(e.removeFrame)), (t.showLoader = !1 !== e.showLoader), t;
                    }),
                    (o.prototype._formatLookupData = function (e) {
                        var t = this;
                        return r.prototype._formatLookupData.call(this, e).then(function (n) {
                            return e.customer && e.customer.billingAddress && (n.customer = t.transformV1CustomerBillingAddress(e.customer)), n;
                        });
                    }),
                    (o.prototype._presentChallenge = function (e, t) {
                        t.addFrame(
                            null,
                            this._createIframe({
                                showLoader: t.showLoader,
                                lookupResponse: e.lookup,
                                nonce: e.paymentMethod.nonce,
                                removeFrame: t.removeFrame
                            })
                        );
                    }),
                    (t.exports = o);
            },
            {
                '../../../lib/deferred': 151,
                './base': 211
            }
        ],
        217: [
            function (e, t, n) {
                var r = e('./base'),
                    i = e('../../../lib/assign').assign,
                    o = e('../../../lib/deferred'),
                    a = e('../../../lib/braintree-error'),
                    s = e('../../../lib/convert-to-braintree-error'),
                    c = e('../../../lib/analytics'),
                    d = e('../../../lib/assets'),
                    l = e('../../shared/errors'),
                    u = e('../../../lib/enumerate'),
                    p = e('../../shared/constants'),
                    _ = e('@braintree/extended-promise'),
                    E = e('../../../lib/constants').INTEGRATION_TIMEOUT_MS,
                    h = e('../../../lib/constants').PLATFORM,
                    m = '3.112.1',
                    f = ['ui.close', 'ui.render', 'ui.renderHidden', 'ui.loading.close', 'ui.loading.render'],
                    y = ['low_value', 'transaction_risk_analysis'];
                function A(e) {
                    r.call(this, e),
                        (this._songbirdInitFailed = !1),
                        (this._clientMetadata = {
                            requestedThreeDSecureVersion: '2',
                            sdkVersion: h + '/' + m
                        }),
                        (this.originalSetupOptions = e),
                        (this._getDfReferenceIdPromisePlus = new _()),
                        this.setupSongbird(e),
                        (this._cardinalEvents = []);
                }
                function T(e, t, n) {
                    (t[n + 'Line1'] = e.streetAddress), (t[n + 'Line2'] = e.extendedAddress), (t[n + 'Line3'] = e.line3), (t[n + 'City'] = e.locality), (t[n + 'State'] = e.region), (t[n + 'PostalCode'] = e.postalCode), (t[n + 'CountryCode'] = e.countryCodeAlpha2);
                }
                (_.suppressUnhandledPromiseMessage = !0),
                    (A.prototype = Object.create(r.prototype, { constructor: A })),
                    (A.events = u(['LOOKUP_COMPLETE', 'CUSTOMER_CANCELED', 'UI.CLOSE', 'UI.RENDER', 'UI.RENDERHIDDEN', 'UI.LOADING.CLOSE', 'UI.LOADING.RENDER'], 'songbird-framework:')),
                    (A.prototype.setUpEventListeners = function (e) {
                        this.on(A.events.LOOKUP_COMPLETE, function (t, n) {
                            e('lookup-complete', t, n);
                        }),
                            this.on(A.events.CUSTOMER_CANCELED, function () {
                                e('customer-canceled');
                            }),
                            this.on(A.events['UI.CLOSE'], function () {
                                e('authentication-modal-close');
                            }),
                            this.on(A.events['UI.RENDER'], function () {
                                e('authentication-modal-render');
                            }),
                            this.on(A.events['UI.RENDERHIDDEN'], function () {
                                e('authentication-modal-render-hidden');
                            }),
                            this.on(A.events['UI.LOADING.CLOSE'], function () {
                                e('authentication-modal-loader-close');
                            }),
                            this.on(A.events['UI.LOADING.RENDER'], function () {
                                e('authentication-modal-loader-render');
                            });
                    }),
                    (A.prototype.prepareLookup = function (e) {
                        var t = i({}, e),
                            n = this;
                        return this.getDfReferenceId()
                            .then(function (e) {
                                t.dfReferenceId = e;
                            })
                            .then(function () {
                                return n._triggerCardinalBinProcess(e.bin);
                            })
                            .catch(function () {})
                            .then(function () {
                                return n._waitForClient();
                            })
                            .then(function () {
                                return (t.clientMetadata = n._clientMetadata), (t.authorizationFingerprint = n._client.getConfiguration().authorizationFingerprint), (t.braintreeLibraryVersion = 'braintree/web/' + m), t;
                            });
                    }),
                    (A.prototype.initializeChallengeWithLookupResponse = function (e, t) {
                        return this.setupSongbird().then(
                            function () {
                                return r.prototype.initializeChallengeWithLookupResponse.call(this, e, t);
                            }.bind(this)
                        );
                    }),
                    (A.prototype.handleSongbirdError = function (e) {
                        (this._songbirdInitFailed = !0), this._removeSongbirdListeners(), c.sendEvent(this._createPromise, 'three-d-secure.cardinal-sdk.songbird-error.' + e), this._songbirdPromise && this._songbirdPromise.resolve();
                    }),
                    (A.prototype._triggerCardinalBinProcess = function (e) {
                        var t = this,
                            n = Date.now();
                        return window.Cardinal.trigger('bin.process', e).then(function (e) {
                            (t._clientMetadata.issuerDeviceDataCollectionTimeElapsed = Date.now() - n), (t._clientMetadata.issuerDeviceDataCollectionResult = e && e.Status);
                        });
                    }),
                    (A.prototype.transformBillingAddress = function (e, t) {
                        return t && (T(t, e, 'billing'), (e.billingPhoneNumber = t.phoneNumber), (e.billingGivenName = t.givenName), (e.billingSurname = t.surname)), e;
                    }),
                    (A.prototype.transformShippingAddress = function (e) {
                        var t = e.shippingAddress;
                        return t && (T(t, e, 'shipping'), delete e.shippingAddress), e;
                    }),
                    (A.prototype._createV1IframeModalElement = function (e) {
                        var t = document.createElement('div');
                        return (t.innerHTML = '<div data-braintree-v1-fallback-iframe-container="true" style="height: 400px;"></div>'), t.querySelector('[data-braintree-v1-fallback-iframe-container="true"]').appendChild(e), t;
                    }),
                    (A.prototype._createV1IframeModal = function (e) {
                        var t = this._createV1IframeModalElement(e),
                            n = t.querySelector('[data-braintree-v1-fallback-close-button]'),
                            r = t.querySelector('[data-braintree-v1-fallback-backdrop]'),
                            i = this;
                        function o() {
                            t.parentNode.removeChild(t), i.cancelVerifyCard(l.THREEDS_CARDINAL_SDK_CANCELED), document.removeEventListener('keyup', i._onV1Keyup), (i._onV1Keyup = null);
                        }
                        return (
                            (this._onV1Keyup = function (e) {
                                'Escape' === e.key && t.parentNode && o();
                            }),
                            n && n.addEventListener('click', o),
                            r && r.addEventListener('click', o),
                            document.addEventListener('keyup', this._onV1Keyup),
                            t
                        );
                    }),
                    (A.prototype._addV1IframeToPage = function () {
                        document.body.appendChild(this._v1Modal);
                    }),
                    (A.prototype.setupSongbird = function (e) {
                        var t = this,
                            n = Date.now();
                        return (
                            this._songbirdPromise ||
                                ((e = e || {}),
                                (this._songbirdPromise = new _()),
                                (this._v2SetupFailureReason = 'reason-unknown'),
                                t
                                    ._loadCardinalScript(e)
                                    .then(function () {
                                        return window.Cardinal
                                            ? t._configureCardinalSdk({
                                                  setupOptions: e,
                                                  setupStartTime: n
                                              })
                                            : ((t._v2SetupFailureReason = 'cardinal-global-unavailable'), Promise.reject(new a(l.THREEDS_CARDINAL_SDK_SETUP_FAILED)));
                                    })
                                    .catch(function (e) {
                                        var n = s(e, {
                                            type: l.THREEDS_CARDINAL_SDK_SETUP_FAILED.type,
                                            code: l.THREEDS_CARDINAL_SDK_SETUP_FAILED.code,
                                            message: l.THREEDS_CARDINAL_SDK_SETUP_FAILED.message
                                        });
                                        t._getDfReferenceIdPromisePlus.reject(n), window.clearTimeout(t._songbirdSetupTimeoutReference), c.sendEvent(t._client, 'three-d-secure.cardinal-sdk.init.setup-failed'), t.handleSongbirdError('cardinal-sdk-setup-failed.' + t._v2SetupFailureReason);
                                    })),
                            this._songbirdPromise
                        );
                    }),
                    (A.prototype._configureCardinalSdk = function (e) {
                        var t = this;
                        return this._waitForClient()
                            .then(function () {
                                return t._client.getConfiguration().gatewayConfiguration.threeDSecure;
                            })
                            .then(function (n) {
                                var r = n.cardinalAuthenticationJWT,
                                    i = e.setupOptions,
                                    o = e.setupStartTime,
                                    a = t._createCardinalConfigurationOptions(i);
                                f.forEach(function (e) {
                                    t.setCardinalListener(e, function () {
                                        t._emit(A.events[e.toUpperCase()]);
                                    });
                                }),
                                    t.setCardinalListener('payments.setupComplete', t._createPaymentsSetupCompleteCallback()),
                                    t._setupFrameworkSpecificListeners(),
                                    window.Cardinal.configure(a),
                                    window.Cardinal.setup('init', { jwt: r }),
                                    (t._clientMetadata.cardinalDeviceDataCollectionTimeElapsed = Date.now() - o),
                                    t.setCardinalListener('payments.validated', t._createPaymentsValidatedCallback());
                            })
                            .catch(function (e) {
                                return (t._v2SetupFailureReason = 'cardinal-configuration-threw-error'), Promise.reject(e);
                            });
                    }),
                    (A.prototype.setCardinalListener = function (e, t) {
                        this._cardinalEvents.push(e), window.Cardinal.on(e, t);
                    }),
                    (A.prototype._setupFrameworkSpecificListeners = function () {}),
                    (A.prototype._createCardinalConfigurationOptions = function (e) {
                        var t = e.cardinalSDKConfig || {},
                            n = t.payment || {};
                        return !t.logging && e.loggingEnabled && (t.logging = { level: 'verbose' }), (t.payment = {}), n.hasOwnProperty('displayLoading') && (t.payment.displayLoading = n.displayLoading), n.hasOwnProperty('displayExitButton') && (t.payment.displayExitButton = n.displayExitButton), t;
                    }),
                    (A.prototype._loadCardinalScript = function (e) {
                        var t = this;
                        return this._waitForClient()
                            .then(function () {
                                var n = t._getCardinalScriptSource();
                                return (
                                    (t._songbirdSetupTimeoutReference = window.setTimeout(function () {
                                        c.sendEvent(t._client, 'three-d-secure.cardinal-sdk.init.setup-timeout'), t.handleSongbirdError('cardinal-sdk-setup-timeout');
                                    }, e.timeout || E)),
                                    d.loadScript({ src: n })
                                );
                            })
                            .catch(function (e) {
                                return (t._v2SetupFailureReason = 'songbird-js-failed-to-load'), Promise.reject(s(e, l.THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED));
                            });
                    }),
                    (A.prototype._getCardinalScriptSource = function () {
                        var e = this._client.getConfiguration().gatewayConfiguration;
                        return e && 'production' === e.environment ? p.CARDINAL_SCRIPT_SOURCE.production : p.CARDINAL_SCRIPT_SOURCE.sandbox;
                    }),
                    (A.prototype._createPaymentsSetupCompleteCallback = function () {
                        var e = this;
                        return function (t) {
                            e._getDfReferenceIdPromisePlus.resolve(t.sessionId), window.clearTimeout(e._songbirdSetupTimeoutReference), c.sendEvent(e._createPromise, 'three-d-secure.cardinal-sdk.init.setup-completed'), e._songbirdPromise.resolve();
                        };
                    }),
                    (A.prototype.getDfReferenceId = function () {
                        return this._getDfReferenceIdPromisePlus;
                    }),
                    (A.prototype._performJWTValidation = function (e, t) {
                        var n = this,
                            r = this._lookupPaymentMethod.nonce,
                            i = 'payment_methods/' + r + '/three_d_secure/authenticate_from_jwt',
                            o = e && e.Payment && e.Payment.ExtendedData && e.Payment.ExtendedData.ChallengeCancel;
                        return (
                            o && (c.sendEvent(this._createPromise, 'three-d-secure.verification-flow.cardinal-sdk.cancel-code.' + o), '01' === o && this._emit(A.events.CUSTOMER_CANCELED)),
                            c.sendEvent(this._createPromise, 'three-d-secure.verification-flow.upgrade-payment-method.started'),
                            this._waitForClient()
                                .then(function () {
                                    return n._client.request({
                                        method: 'post',
                                        endpoint: i,
                                        data: {
                                            jwt: t,
                                            paymentMethodNonce: r
                                        }
                                    });
                                })
                                .then(function (t) {
                                    var r = t.paymentMethod || n._lookupPaymentMethod,
                                        i = n._formatAuthResponse(r, t.threeDSecureInfo);
                                    return (i.rawCardinalSDKVerificationData = e), c.sendEvent(n._client, 'three-d-secure.verification-flow.upgrade-payment-method.succeeded'), Promise.resolve(i);
                                })
                                .catch(function (e) {
                                    var t = new a({
                                        type: l.THREEDS_JWT_AUTHENTICATION_FAILED.type,
                                        code: l.THREEDS_JWT_AUTHENTICATION_FAILED.code,
                                        message: l.THREEDS_JWT_AUTHENTICATION_FAILED.message,
                                        details: { originalError: e }
                                    });
                                    return c.sendEvent(n._client, 'three-d-secure.verification-flow.upgrade-payment-method.errored'), Promise.reject(t);
                                })
                        );
                    }),
                    (A.prototype._createPaymentsValidatedCallback = function () {
                        var e = this;
                        return function (t, n) {
                            var r;
                            if ((c.sendEvent(e._createPromise, 'three-d-secure.verification-flow.cardinal-sdk.action-code.' + t.ActionCode.toLowerCase()), !e._verifyCardPromisePlus)) return void e.handleSongbirdError('cardinal-sdk-setup-error.number-' + t.ErrorNumber);
                            switch (t.ActionCode) {
                                case 'SUCCESS':
                                case 'NOACTION':
                                case 'FAILURE':
                                    e._performJWTValidation(t, n)
                                        .then(function (t) {
                                            e._verifyCardPromisePlus.resolve(t);
                                        })
                                        .catch(function (t) {
                                            e._verifyCardPromisePlus.reject(t);
                                        });
                                    break;
                                case 'ERROR':
                                    switch ((c.sendEvent(e._createPromise, 'three-d-secure.verification-flow.cardinal-sdk-error.' + t.ErrorNumber), t.ErrorNumber)) {
                                        case 10001:
                                        case 10002:
                                            r = new a(l.THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT);
                                            break;
                                        case 10003:
                                        case 10007:
                                        case 10009:
                                            r = new a(l.THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT);
                                            break;
                                        case 10005:
                                        case 10006:
                                            r = new a(l.THREEDS_CARDINAL_SDK_BAD_CONFIG);
                                            break;
                                        case 10008:
                                        case 10010:
                                            r = new a(l.THREEDS_CARDINAL_SDK_BAD_JWT);
                                            break;
                                        case 10011:
                                            c.sendEvent(e._createPromise, 'three-d-secure.verification-flow.canceled'), (r = new a(l.THREEDS_CARDINAL_SDK_CANCELED));
                                            break;
                                        default:
                                            r = new a(l.THREEDS_CARDINAL_SDK_ERROR);
                                    }
                                    (r.details = {
                                        originalError: {
                                            code: t.ErrorNumber,
                                            description: t.ErrorDescription
                                        }
                                    }),
                                        e._verifyCardPromisePlus.reject(r);
                            }
                        };
                    }),
                    (A.prototype._checkForVerifyCardError = function (e, t) {
                        return e.bin
                            ? r.prototype._checkForVerifyCardError.call(this, e, t)
                            : new a({
                                  type: l.THREEDS_MISSING_VERIFY_CARD_OPTION.type,
                                  code: l.THREEDS_MISSING_VERIFY_CARD_OPTION.code,
                                  message: 'verifyCard options must include a BIN.'
                              });
                    }),
                    (A.prototype._checkForFrameworkSpecificVerifyCardErrors = function (e, t) {
                        var n;
                        return 'function' == typeof e.onLookupComplete || t.ignoreOnLookupCompleteRequirement || (n = 'an onLookupComplete function'), n;
                    }),
                    (A.prototype._formatVerifyCardOptions = function (e) {
                        var t = r.prototype._formatVerifyCardOptions.call(this, e),
                            n = t.additionalInformation || {};
                        return (n = this.transformBillingAddress(n, e.billingAddress)), (n = this.transformShippingAddress(n)), e.onLookupComplete && (t.onLookupComplete = o(e.onLookupComplete)), e.email && (n.email = e.email), e.mobilePhoneNumber && (n.mobilePhoneNumber = e.mobilePhoneNumber), (t.additionalInformation = n), t;
                    }),
                    (A.prototype._onLookupComplete = function (e, t) {
                        var n = this;
                        return r.prototype._onLookupComplete.call(this, e).then(function (e) {
                            return new Promise(function (r, i) {
                                function o() {
                                    r(e);
                                }
                                (e.requiresUserAuthentication = !!(e.lookup && e.lookup.acsUrl)), n._verifyCardPromisePlus.catch(i), t.onLookupComplete ? t.onLookupComplete(e, o) : n._emit(A.events.LOOKUP_COMPLETE, e, o);
                            });
                        });
                    }),
                    (A.prototype._presentChallenge = function (e) {
                        !this._songbirdInitFailed &&
                            e.lookup.transactionId &&
                            window.Cardinal.continue(
                                'cca',
                                {
                                    AcsUrl: e.lookup.acsUrl,
                                    Payload: e.lookup.pareq
                                },
                                { OrderDetails: { TransactionId: e.lookup.transactionId } }
                            );
                    }),
                    (A.prototype._formatLookupData = function (e) {
                        var t = this;
                        return r.prototype._formatLookupData.call(this, e).then(function (n) {
                            if (((n.additionalInfo = e.additionalInformation), e.accountType && (n.accountType = e.accountType), e.challengeRequested && (n.challengeRequested = e.challengeRequested), e.requestedExemptionType)) {
                                if (!y.includes(e.requestedExemptionType))
                                    throw new a({
                                        code: l.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.code,
                                        type: l.THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID.type,
                                        message: 'requestedExemptionType `' + e.requestedExemptionType + '` is not a valid exemption. The accepted values are: `' + y.join('`, `') + '`'
                                    });
                                n.requestedExemptionType = e.requestedExemptionType;
                            }
                            return e.customFields && (n.customFields = e.customFields), e.dataOnlyRequested && (n.dataOnlyRequested = e.dataOnlyRequested), e.exemptionRequested && (n.exemptionRequested = e.exemptionRequested), e.requestVisaDAF && (n.requestVisaDAF = e.requestVisaDAF), e.bin && (n.bin = e.bin), null != e.cardAdd && (n.cardAdd = e.cardAdd), null != e.cardAddChallengeRequested && (n.cardAdd = e.cardAddChallengeRequested), e.merchantName && (n.merchantName = e.merchantName), t.prepareLookup(n);
                        });
                    }),
                    (A.prototype.cancelVerifyCard = function (e) {
                        var t = this;
                        return r.prototype.cancelVerifyCard.call(this).then(function (n) {
                            return t._verifyCardPromisePlus && ((e = e || new a(l.THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT)), t._verifyCardPromisePlus.reject(e)), n;
                        });
                    }),
                    (A.prototype._removeSongbirdListeners = function () {
                        this._cardinalEvents.forEach(function (e) {
                            window.Cardinal.off(e);
                        }),
                            (this._cardinalEvents = []);
                    }),
                    (A.prototype.teardown = function () {
                        return window.Cardinal && this._removeSongbirdListeners(), r.prototype.teardown.call(this);
                    }),
                    (A.prototype._reloadThreeDSecure = function () {
                        var e = this,
                            t = Date.now();
                        return e.teardown().then(function () {
                            e._configureCardinalSdk({
                                setupOptions: e.originalSetupOptions,
                                setupStartTime: t
                            });
                        });
                    }),
                    (t.exports = A);
            },
            {
                '../../../lib/analytics': 138,
                '../../../lib/assets': 139,
                '../../../lib/assign': 140,
                '../../../lib/braintree-error': 143,
                '../../../lib/constants': 145,
                '../../../lib/convert-to-braintree-error': 147,
                '../../../lib/deferred': 151,
                '../../../lib/enumerate': 153,
                '../../shared/constants': 220,
                '../../shared/errors': 221,
                './base': 211,
                '@braintree/extended-promise': 31
            }
        ],
        218: [
            function (e, t, n) {
                var r = e('@braintree/wrap-promise'),
                    i = e('../../lib/methods'),
                    o = e('../../lib/convert-methods-to-error'),
                    a = e('@braintree/event-emitter'),
                    s = e('./frameworks');
                function c(e) {
                    var t = this,
                        n = s[e.framework];
                    a.call(this),
                        (this._framework = new n(e)),
                        this._framework.setUpEventListeners(function () {
                            t._emit.apply(t, arguments);
                        });
                }
                a.createChild(c),
                    (c.prototype.verifyCard = function (e) {
                        var t;
                        return this.hasListener('lookup-complete') && (t = { ignoreOnLookupCompleteRequirement: !0 }), this._framework.verifyCard(e, t);
                    }),
                    (c.prototype.initializeChallengeWithLookupResponse = function (e) {
                        return 'string' == typeof e && (e = JSON.parse(e)), this._framework.initializeChallengeWithLookupResponse(e);
                    }),
                    (c.prototype.prepareLookup = function (e) {
                        return this._framework.prepareLookup(e).then(function (e) {
                            return JSON.stringify(e);
                        });
                    }),
                    (c.prototype.cancelVerifyCard = function () {
                        return this._framework.cancelVerifyCard();
                    }),
                    (c.prototype.teardown = function () {
                        return o(this, i(c.prototype).concat(i(a.prototype))), this._framework.teardown();
                    }),
                    (t.exports = r.wrapPrototype(c));
            },
            {
                '../../lib/convert-methods-to-error': 146,
                '../../lib/methods': 175,
                './frameworks': 214,
                '@braintree/event-emitter': 30,
                '@braintree/wrap-promise': 40
            }
        ],
        219: [
            function (e, t, n) {
                var r = e('./external/three-d-secure'),
                    i = e('../lib/is-https').isHTTPS,
                    o = e('../lib/basic-component-verification'),
                    a = e('../lib/create-deferred-client'),
                    s = e('../lib/create-assets-url'),
                    c = e('../lib/braintree-error'),
                    d = e('../lib/analytics'),
                    l = e('./shared/errors');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = '3D Secure',
                            n = (function (e) {
                                var t = String(e.version || '');
                                if (!t || '1' === t)
                                    throw new c({
                                        code: l.THREEDS_UNSUPPORTED_VERSION.code,
                                        type: l.THREEDS_UNSUPPORTED_VERSION.type,
                                        message: l.THREEDS_UNSUPPORTED_VERSION.message
                                    });
                                switch (t) {
                                    case '2':
                                    case '2-cardinal-modal':
                                        return 'cardinal-modal';
                                    case '2-bootstrap3-modal':
                                        return 'bootstrap3-modal';
                                    case '2-inline-iframe':
                                        return 'inline-iframe';
                                    default:
                                        throw new c({
                                            code: l.THREEDS_UNRECOGNIZED_VERSION.code,
                                            type: l.THREEDS_UNRECOGNIZED_VERSION.type,
                                            message: 'Version `' + e.version + '` is not a recognized version. You may need to update the version of your Braintree SDK to support this version.'
                                        });
                                }
                            })(e);
                        return o
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                var o = s.create(e.authorization),
                                    u = a
                                        .create({
                                            authorization: e.authorization,
                                            client: e.client,
                                            debug: e.debug,
                                            assetsUrl: o,
                                            name: t
                                        })
                                        .then(function (t) {
                                            var r,
                                                o = t.getConfiguration(),
                                                a = o.gatewayConfiguration;
                                            return ((e.client = t), a.threeDSecureEnabled || (r = l.THREEDS_NOT_ENABLED), 'TOKENIZATION_KEY' === o.authorizationType && (r = l.THREEDS_CAN_NOT_USE_TOKENIZATION_KEY), 'production' !== a.environment || i() || (r = l.THREEDS_HTTPS_REQUIRED), 'legacy' === n || (a.threeDSecure && a.threeDSecure.cardinalAuthenticationJWT) || (d.sendEvent(e.client, 'three-d-secure.initialization.failed.missing-cardinalAuthenticationJWT'), (r = l.THREEDS_NOT_ENABLED_FOR_V2)), r) ? Promise.reject(new c(r)) : (d.sendEvent(e.client, 'three-d-secure.initialized'), t);
                                        }),
                                    p = new r({
                                        client: e.client,
                                        assetsUrl: o,
                                        createPromise: u,
                                        loggingEnabled: e.loggingEnabled,
                                        cardinalSDKConfig: e.cardinalSDKConfig,
                                        framework: n
                                    });
                                return e.client
                                    ? u.then(function () {
                                          return p;
                                      })
                                    : p;
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                '../lib/is-https': 172,
                './external/three-d-secure': 218,
                './shared/errors': 221,
                '@braintree/wrap-promise': 40
            }
        ],
        220: [
            function (e, t, n) {
                t.exports = {
                    LANDING_FRAME_NAME: 'braintreethreedsecurelanding',
                    CARDINAL_SCRIPT_SOURCE: {
                        production: 'https://songbird.cardinalcommerce.com/edge/v1/songbird.js',
                        sandbox: 'https://songbirdstag.cardinalcommerce.com/edge/v1/songbird.js'
                    }
                };
            },
            {}
        ],
        221: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    THREEDS_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_NOT_ENABLED',
                        message: '3D Secure is not enabled for this merchant.'
                    },
                    THREEDS_CAN_NOT_USE_TOKENIZATION_KEY: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_CAN_NOT_USE_TOKENIZATION_KEY',
                        message: '3D Secure can not use a tokenization key for authorization.'
                    },
                    THREEDS_HTTPS_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_HTTPS_REQUIRED',
                        message: '3D Secure requires HTTPS.'
                    },
                    THREEDS_NOT_ENABLED_FOR_V2: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_NOT_ENABLED_FOR_V2',
                        message: '3D Secure version 2 is not enabled for this merchant. Contact Braintree Support for assistance at https://help.braintreepayments.com/'
                    },
                    THREEDS_UNRECOGNIZED_VERSION: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_UNRECOGNIZED_VERSION'
                    },
                    THREEDS_CARDINAL_SDK_SETUP_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_CARDINAL_SDK_SETUP_FAILED',
                        message: "Something went wrong setting up Cardinal's Songbird.js library."
                    },
                    THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED: {
                        type: r.types.NETWORK,
                        code: 'THREEDS_CARDINAL_SDK_SCRIPT_LOAD_FAILED',
                        message: "Cardinal's Songbird.js library could not be loaded."
                    },
                    THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_CARDINAL_SDK_SETUP_TIMEDOUT',
                        message: "Cardinal's Songbird.js took too long to setup."
                    },
                    THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_CARDINAL_SDK_RESPONSE_TIMEDOUT',
                        message: "Cardinal's API took too long to respond."
                    },
                    THREEDS_CARDINAL_SDK_BAD_CONFIG: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_CARDINAL_SDK_BAD_CONFIG',
                        message: 'JWT or other required field missing. Please check your setup configuration.'
                    },
                    THREEDS_CARDINAL_SDK_BAD_JWT: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_CARDINAL_SDK_BAD_JWT',
                        message: 'Cardinal JWT missing or malformed. Please check your setup configuration.'
                    },
                    THREEDS_CARDINAL_SDK_ERROR: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_CARDINAL_SDK_ERROR',
                        message: 'A general error has occurred with Cardinal. See description for more information.'
                    },
                    THREEDS_CARDINAL_SDK_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'THREEDS_CARDINAL_SDK_CANCELED',
                        message: 'Canceled by user.'
                    },
                    THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_VERIFY_CARD_CANCELED_BY_MERCHANT',
                        message: '3D Secure verfication canceled by merchant.'
                    },
                    THREEDS_AUTHENTICATION_IN_PROGRESS: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_AUTHENTICATION_IN_PROGRESS',
                        message: 'Cannot call verifyCard while existing authentication is in progress.'
                    },
                    THREEDS_MISSING_VERIFY_CARD_OPTION: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_MISSING_VERIFY_CARD_OPTION'
                    },
                    THREEDS_JWT_AUTHENTICATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_JWT_AUTHENTICATION_FAILED',
                        message: 'Something went wrong authenticating the JWT from Cardinal'
                    },
                    THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_LOOKUP_TOKENIZED_CARD_NOT_FOUND_ERROR',
                        message: 'Either the payment method nonce passed to `verifyCard` does not exist, or it was already consumed'
                    },
                    THREEDS_LOOKUP_VALIDATION_ERROR: {
                        type: r.types.CUSTOMER,
                        code: 'THREEDS_LOOKUP_VALIDATION_ERROR',
                        message: 'The data passed in `verifyCard` did not pass validation checks. See details for more info'
                    },
                    THREEDS_LOOKUP_ERROR: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_LOOKUP_ERROR',
                        message: 'Something went wrong during the 3D Secure lookup'
                    },
                    THREEDS_INLINE_IFRAME_DETAILS_INCORRECT: {
                        type: r.types.UNKNOWN,
                        code: 'THREEDS_INLINE_IFRAME_DETAILS_INCORRECT',
                        message: 'Something went wrong when attempting to add the authentication iframe to the page.'
                    },
                    THREEDS_NO_VERIFICATION_PAYLOAD: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_NO_VERIFICATION_PAYLOAD',
                        message: 'No verification payload available.'
                    },
                    THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN: {
                        type: r.types.INTERNAL,
                        code: 'THREEDS_TERM_URL_REQUIRES_BRAINTREE_DOMAIN',
                        message: 'Term Url must be on a Braintree domain.'
                    },
                    THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED: {
                        type: r.types.INTERNAL,
                        code: 'THREEDS_FRAMEWORK_METHOD_NOT_IMPLEMENTED',
                        message: 'Method not implemented for this framework.'
                    },
                    THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_REQUESTED_EXEMPTION_TYPE_INVALID',
                        message: 'Requested Exemption Type is invalid.'
                    },
                    THREEDS_UNSUPPORTED_VERSION: {
                        type: r.types.MERCHANT,
                        code: 'THREEDS_UNSUPPORTED_VERSION',
                        message: '3D Secure `1` is deprecated and no longer supported. See available versions at https://braintree.github.io/braintree-web/current/module-braintree-web_three-d-secure.html#.create'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        222: [
            function (e, t, n) {
                t.exports = e('../../lib/enumerate')(['AUTHENTICATION_COMPLETE'], 'threedsecure:');
            },
            { '../../lib/enumerate': 153 }
        ],
        223: [
            function (e, t, n) {
                var r = e('./shared/unionpay'),
                    i = e('../lib/basic-component-verification'),
                    o = e('../lib/braintree-error'),
                    a = e('../lib/create-deferred-client'),
                    s = e('../lib/create-assets-url'),
                    c = e('../lib/analytics'),
                    d = e('./shared/errors');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'UnionPay';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return a.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: s.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                var n = t.getConfiguration();
                                return ((e.client = t), n.gatewayConfiguration.unionPay && !0 === n.gatewayConfiguration.unionPay.enabled) ? (c.sendEvent(e.client, 'unionpay.initialized'), new r(e)) : Promise.reject(new o(d.UNIONPAY_NOT_ENABLED));
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './shared/errors': 225,
                './shared/unionpay': 226,
                '@braintree/wrap-promise': 40
            }
        ],
        224: [
            function (e, t, n) {
                t.exports = {
                    events: e('../../lib/enumerate')(['HOSTED_FIELDS_FETCH_CAPABILITIES', 'HOSTED_FIELDS_ENROLL', 'HOSTED_FIELDS_TOKENIZE'], 'union-pay:'),
                    HOSTED_FIELDS_FRAME_NAME: 'braintreeunionpayhostedfields'
                };
            },
            { '../../lib/enumerate': 153 }
        ],
        225: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    UNIONPAY_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_NOT_ENABLED',
                        message: 'UnionPay is not enabled for this merchant.'
                    },
                    UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID',
                        message: 'Found an invalid Hosted Fields instance. Please use a valid Hosted Fields instance.'
                    },
                    UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_HOSTED_FIELDS_INSTANCE_REQUIRED',
                        message: 'Could not find the Hosted Fields instance.'
                    },
                    UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED',
                        message: 'A card or a Hosted Fields instance is required. Please supply a card or a Hosted Fields instance.'
                    },
                    UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES',
                        message: 'Please supply either a card or a Hosted Fields instance, not both.'
                    },
                    UNIONPAY_EXPIRATION_DATE_INCOMPLETE: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_EXPIRATION_DATE_INCOMPLETE',
                        message: 'You must supply expiration month and year or neither.'
                    },
                    UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID: {
                        type: r.types.CUSTOMER,
                        code: 'UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID',
                        message: 'Enrollment failed due to user input error.'
                    },
                    UNIONPAY_ENROLLMENT_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'UNIONPAY_ENROLLMENT_NETWORK_ERROR',
                        message: 'Could not enroll UnionPay card.'
                    },
                    UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR',
                        message: 'Could not fetch card capabilities.'
                    },
                    UNIONPAY_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'UNIONPAY_TOKENIZATION_NETWORK_ERROR',
                        message: 'A tokenization network error occurred.'
                    },
                    UNIONPAY_MISSING_MOBILE_PHONE_DATA: {
                        type: r.types.MERCHANT,
                        code: 'UNIONPAY_MISSING_MOBILE_PHONE_DATA',
                        message: 'A `mobile` with `countryCode` and `number` is required.'
                    },
                    UNIONPAY_FAILED_TOKENIZATION: {
                        type: r.types.CUSTOMER,
                        code: 'UNIONPAY_FAILED_TOKENIZATION',
                        message: 'The supplied card data failed tokenization.'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        226: [
            function (e, t, n) {
                var r = e('../../lib/analytics'),
                    i = e('../../lib/braintree-error'),
                    o = e('framebus'),
                    a = e('./constants'),
                    s = e('../../lib/is-verified-domain'),
                    c = e('../../lib/use-min'),
                    d = e('../../lib/convert-methods-to-error'),
                    l = e('./errors'),
                    u = a.events,
                    p = e('@braintree/iframer'),
                    _ = e('../../lib/methods'),
                    E = e('@braintree/uuid'),
                    h = e('@braintree/wrap-promise'),
                    m = e('../../lib/constants').BUS_CONFIGURATION_REQUEST_EVENT;
                function f(e) {
                    this._options = e;
                }
                (f.prototype.fetchCapabilities = function (e) {
                    var t = this,
                        n = this._options.client,
                        o = e.card ? e.card.number : null,
                        a = e.hostedFields;
                    return o && a
                        ? Promise.reject(new i(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES))
                        : o
                          ? n
                                .request({
                                    method: 'get',
                                    endpoint: 'payment_methods/credit_cards/capabilities',
                                    data: {
                                        _meta: { source: 'unionpay' },
                                        creditCard: { number: o }
                                    }
                                })
                                .then(function (e) {
                                    return r.sendEvent(n, 'unionpay.capabilities-received'), e;
                                })
                                .catch(function (e) {
                                    var t = e.details && e.details.httpStatus;
                                    return (r.sendEvent(n, 'unionpay.capabilities-failed'), 403 === t)
                                        ? Promise.reject(e)
                                        : Promise.reject(
                                              new i({
                                                  type: l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.type,
                                                  code: l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.code,
                                                  message: l.UNIONPAY_FETCH_CAPABILITIES_NETWORK_ERROR.message,
                                                  details: { originalError: e }
                                              })
                                          );
                                })
                          : a
                            ? a._bus
                                ? t._initializeHostedFields().then(function () {
                                      return new Promise(function (e, n) {
                                          t._bus.emit(u.HOSTED_FIELDS_FETCH_CAPABILITIES, { hostedFields: a }, function (t) {
                                              if (t.err) return void n(new i(t.err));
                                              e(t.payload);
                                          });
                                      });
                                  })
                                : Promise.reject(new i(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID))
                            : Promise.reject(new i(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED));
                }),
                    (f.prototype.enroll = function (e) {
                        var t,
                            n = this,
                            o = this._options.client,
                            a = e.card,
                            s = e.mobile,
                            c = e.hostedFields;
                        if (!s) return Promise.reject(new i(l.UNIONPAY_MISSING_MOBILE_PHONE_DATA));
                        if (c)
                            return c._bus
                                ? a
                                    ? Promise.reject(new i(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES))
                                    : new Promise(function (e, t) {
                                          n._initializeHostedFields().then(function () {
                                              n._bus.emit(
                                                  u.HOSTED_FIELDS_ENROLL,
                                                  {
                                                      hostedFields: c,
                                                      mobile: s
                                                  },
                                                  function (n) {
                                                      if (n.err) return void t(new i(n.err));
                                                      e(n.payload);
                                                  }
                                              );
                                          });
                                      })
                                : Promise.reject(new i(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID));
                        if (a && a.number) {
                            if (
                                ((t = {
                                    _meta: { source: 'unionpay' },
                                    unionPayEnrollment: {
                                        number: a.number,
                                        mobileCountryCode: s.countryCode,
                                        mobileNumber: s.number
                                    }
                                }),
                                a.expirationDate)
                            )
                                t.unionPayEnrollment.expirationDate = a.expirationDate;
                            else if (a.expirationMonth || a.expirationYear)
                                if (!a.expirationMonth || !a.expirationYear) return Promise.reject(new i(l.UNIONPAY_EXPIRATION_DATE_INCOMPLETE));
                                else (t.unionPayEnrollment.expirationYear = a.expirationYear), (t.unionPayEnrollment.expirationMonth = a.expirationMonth);
                            return o
                                .request({
                                    method: 'post',
                                    endpoint: 'union_pay_enrollments',
                                    data: t
                                })
                                .then(function (e) {
                                    return (
                                        r.sendEvent(o, 'unionpay.enrollment-succeeded'),
                                        {
                                            enrollmentId: e.unionPayEnrollmentId,
                                            smsCodeRequired: e.smsCodeRequired
                                        }
                                    );
                                })
                                .catch(function (e) {
                                    var t,
                                        n = e.details && e.details.httpStatus;
                                    return 403 === n ? (t = e) : n < 500 ? ((t = new i(l.UNIONPAY_ENROLLMENT_CUSTOMER_INPUT_INVALID)).details = { originalError: e }) : ((t = new i(l.UNIONPAY_ENROLLMENT_NETWORK_ERROR)).details = { originalError: e }), r.sendEvent(o, 'unionpay.enrollment-failed'), Promise.reject(t);
                                });
                        }
                        return Promise.reject(new i(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED));
                    }),
                    (f.prototype.tokenize = function (e) {
                        var t,
                            n = this,
                            o = this._options.client,
                            a = e.card,
                            s = e.hostedFields;
                        return a && s
                            ? Promise.reject(new i(l.UNIONPAY_CARD_AND_HOSTED_FIELDS_INSTANCES))
                            : a
                              ? ((t = {
                                    _meta: { source: 'unionpay' },
                                    creditCard: {
                                        number: e.card.number,
                                        options: { unionPayEnrollment: { id: e.enrollmentId } }
                                    }
                                }),
                                e.smsCode && (t.creditCard.options.unionPayEnrollment.smsCode = e.smsCode),
                                a.expirationDate ? (t.creditCard.expirationDate = a.expirationDate) : a.expirationMonth && a.expirationYear && ((t.creditCard.expirationYear = a.expirationYear), (t.creditCard.expirationMonth = a.expirationMonth)),
                                e.card.cvv && (t.creditCard.cvv = e.card.cvv),
                                o
                                    .request({
                                        method: 'post',
                                        endpoint: 'payment_methods/credit_cards',
                                        data: t
                                    })
                                    .then(function (e) {
                                        var t = e.creditCards[0];
                                        return delete t.consumed, delete t.threeDSecureInfo, r.sendEvent(o, 'unionpay.nonce-received'), t;
                                    })
                                    .catch(function (e) {
                                        var t,
                                            n = e.details && e.details.httpStatus;
                                        return r.sendEvent(o, 'unionpay.nonce-failed'), 403 === n ? (t = e) : n < 500 ? ((t = new i(l.UNIONPAY_FAILED_TOKENIZATION)).details = { originalError: e }) : ((t = new i(l.UNIONPAY_TOKENIZATION_NETWORK_ERROR)).details = { originalError: e }), Promise.reject(t);
                                    }))
                              : s
                                ? s._bus
                                    ? new Promise(function (t, r) {
                                          n._initializeHostedFields().then(function () {
                                              n._bus.emit(u.HOSTED_FIELDS_TOKENIZE, e, function (e) {
                                                  if (e.err) return void r(new i(e.err));
                                                  t(e.payload);
                                              });
                                          });
                                      })
                                    : Promise.reject(new i(l.UNIONPAY_HOSTED_FIELDS_INSTANCE_INVALID))
                                : Promise.reject(new i(l.UNIONPAY_CARD_OR_HOSTED_FIELDS_INSTANCE_REQUIRED));
                    }),
                    (f.prototype.teardown = function () {
                        return this._bus && (this._hostedFieldsFrame.parentNode.removeChild(this._hostedFieldsFrame), this._bus.teardown()), d(this, _(f.prototype)), Promise.resolve();
                    }),
                    (f.prototype._initializeHostedFields = function () {
                        var e,
                            t,
                            n = E(),
                            r = this;
                        return (
                            this._hostedFieldsInitializePromise ||
                                (this._hostedFieldsInitializePromise = new Promise(function (i) {
                                    (e = r._options.client.getConfiguration().gatewayConfiguration.assetsUrl),
                                        (t = r._options.client.getConfiguration().isDebug),
                                        (r._bus = new o({
                                            channel: n,
                                            verifyDomain: s
                                        })),
                                        (r._hostedFieldsFrame = p({
                                            name: a.HOSTED_FIELDS_FRAME_NAME + '_' + n,
                                            src: e + '/web/3.112.1/html/unionpay-hosted-fields-frame' + c(t) + '.html',
                                            height: 0,
                                            width: 0
                                        })),
                                        r._bus.on(m, function (e) {
                                            e(r._options.client), i();
                                        }),
                                        document.body.appendChild(r._hostedFieldsFrame);
                                })),
                            this._hostedFieldsInitializePromise
                        );
                    }),
                    (t.exports = h.wrapPrototype(f));
            },
            {
                '../../lib/analytics': 138,
                '../../lib/braintree-error': 143,
                '../../lib/constants': 145,
                '../../lib/convert-methods-to-error': 146,
                '../../lib/is-verified-domain': 173,
                '../../lib/methods': 175,
                '../../lib/use-min': 181,
                './constants': 224,
                './errors': 225,
                '@braintree/iframer': 32,
                '@braintree/uuid': 36,
                '@braintree/wrap-promise': 40,
                framebus: 50
            }
        ],
        227: [
            function (e, t, n) {
                t.exports = { PLAID_LINK_JS: 'https://cdn.plaid.com/link/v2/stable/link-initialize.js' };
            },
            {}
        ],
        228: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    US_BANK_ACCOUNT_OPTION_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'US_BANK_ACCOUNT_OPTION_REQUIRED'
                    },
                    US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS: {
                        type: r.types.MERCHANT,
                        code: 'US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS'
                    },
                    US_BANK_ACCOUNT_LOGIN_LOAD_FAILED: {
                        type: r.types.NETWORK,
                        code: 'US_BANK_ACCOUNT_LOGIN_LOAD_FAILED',
                        message: 'Bank login flow failed to load.'
                    },
                    US_BANK_ACCOUNT_LOGIN_CLOSED: {
                        type: r.types.CUSTOMER,
                        code: 'US_BANK_ACCOUNT_LOGIN_CLOSED',
                        message: 'Customer closed bank login flow before authorizing.'
                    },
                    US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: 'US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE',
                        message: 'Another bank login tokenization request is active.'
                    },
                    US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR',
                        message: 'A tokenization network error occurred.'
                    },
                    US_BANK_ACCOUNT_FAILED_TOKENIZATION: {
                        type: r.types.CUSTOMER,
                        code: 'US_BANK_ACCOUNT_FAILED_TOKENIZATION',
                        message: 'The supplied data failed tokenization.'
                    },
                    US_BANK_ACCOUNT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'US_BANK_ACCOUNT_NOT_ENABLED',
                        message: 'US bank account is not enabled.'
                    },
                    US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED',
                        message: 'Bank login is not enabled.'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        229: [
            function (e, t, n) {
                var r = e('../lib/basic-component-verification'),
                    i = e('../lib/braintree-error'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url'),
                    s = e('./errors'),
                    c = e('./us-bank-account');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'US Bank Account';
                        return r
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return o.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: a.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return ((e.client = t), e.client.getConfiguration().gatewayConfiguration.usBankAccount) ? new c(e) : Promise.reject(new i(s.US_BANK_ACCOUNT_NOT_ENABLED));
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './errors': 228,
                './us-bank-account': 230,
                '@braintree/wrap-promise': 40
            }
        ],
        230: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('./constants'),
                    o = e('./errors'),
                    a = e('../lib/errors'),
                    s = e('../lib/analytics'),
                    c = e('../lib/once'),
                    d = e('../lib/convert-methods-to-error'),
                    l = e('../lib/methods'),
                    u = e('@braintree/wrap-promise'),
                    p = T('UsBankAccount'),
                    _ = T('UsBankLogin');
                function E(e) {
                    (this._client = e.client), (this._isTokenizingBankLogin = !1), s.sendEvent(this._client, 'usbankaccount.initialized');
                }
                function h(e) {
                    var t,
                        n = e.details && e.details.httpStatus;
                    return ((t = new r(401 === n ? a.BRAINTREE_API_ACCESS_RESTRICTED : n < 500 ? o.US_BANK_ACCOUNT_FAILED_TOKENIZATION : o.US_BANK_ACCOUNT_TOKENIZATION_NETWORK_ERROR)).details = { originalError: e }), t;
                }
                function m(e, t) {
                    var n = e.data[t].paymentMethod,
                        r = n.details.last4;
                    return {
                        nonce: n.id,
                        details: {},
                        description: 'US bank account ending in - ' + r,
                        type: 'us_bank_account'
                    };
                }
                function f(e, t) {
                    function n() {
                        var r = this.readyState;
                        (r && 'loaded' !== r && 'complete' !== r) || (e.removeEventListener('error', i), e.removeEventListener('load', n), e.removeEventListener('readystatechange', n), t(null, window.Plaid));
                    }
                    function i() {
                        e.parentNode.removeChild(e), t(new r(o.US_BANK_ACCOUNT_LOGIN_LOAD_FAILED));
                    }
                    e.addEventListener('error', i), e.addEventListener('load', n), e.addEventListener('readystatechange', n);
                }
                function y(e) {
                    return {
                        streetAddress: e.streetAddress,
                        extendedAddress: e.extendedAddress,
                        city: e.locality,
                        state: e.region,
                        zipCode: e.postalCode
                    };
                }
                function A(e, t) {
                    'personal' === t.ownershipType
                        ? (e.individualOwner = {
                              firstName: t.firstName,
                              lastName: t.lastName
                          })
                        : 'business' === t.ownershipType && (e.businessOwner = { businessName: t.businessName });
                }
                function T(e) {
                    return 'mutation Tokenize' + e + '($input: Tokenize' + e + 'Input!) {  tokenize' + e + '(input: $input) {    paymentMethod {      id      details {        ... on UsBankAccountDetails {          last4        }      }    }  }}';
                }
                (E.prototype.tokenize = function (e) {
                    return (e = e || {}).mandateText
                        ? e.bankDetails && e.bankLogin
                            ? Promise.reject(
                                  new r({
                                      type: o.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.type,
                                      code: o.US_BANK_ACCOUNT_MUTUALLY_EXCLUSIVE_OPTIONS.code,
                                      message: 'tokenize must be called with bankDetails or bankLogin, not both.'
                                  })
                              )
                            : e.bankDetails
                              ? this._tokenizeBankDetails(e)
                              : e.bankLogin
                                ? this._tokenizeBankLogin(e)
                                : Promise.reject(
                                      new r({
                                          type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                                          code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                                          message: 'tokenize must be called with bankDetails or bankLogin.'
                                      })
                                  )
                        : Promise.reject(
                              new r({
                                  type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                                  code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                                  message: 'mandateText property is required.'
                              })
                          );
                }),
                    (E.prototype._tokenizeBankDetails = function (e) {
                        var t = this._client,
                            n = e.bankDetails,
                            r = {
                                achMandate: e.mandateText,
                                routingNumber: n.routingNumber,
                                accountNumber: n.accountNumber,
                                accountType: n.accountType.toUpperCase(),
                                billingAddress: y(n.billingAddress || {})
                            };
                        return (
                            A(r, n),
                            t
                                .request({
                                    api: 'graphQLApi',
                                    data: {
                                        query: p,
                                        variables: { input: { usBankAccount: r } }
                                    }
                                })
                                .then(function (e) {
                                    return s.sendEvent(t, 'usbankaccount.bankdetails.tokenization.succeeded'), Promise.resolve(m(e, 'tokenizeUsBankAccount'));
                                })
                                .catch(function (e) {
                                    var n = h(e);
                                    return s.sendEvent(t, 'usbankaccount.bankdetails.tokenization.failed'), Promise.reject(n);
                                })
                        );
                    }),
                    (E.prototype._tokenizeBankLogin = function (e) {
                        var t = this,
                            n = this._client,
                            i = n.getConfiguration().gatewayConfiguration,
                            a = 'production' === i.environment,
                            c = i.usBankAccount.plaid;
                        return e.bankLogin.displayName
                            ? c
                                ? this._isTokenizingBankLogin
                                    ? Promise.reject(new r(o.US_BANK_ACCOUNT_LOGIN_REQUEST_ACTIVE))
                                    : ((this._isTokenizingBankLogin = !0),
                                      new Promise(function (i, d) {
                                          t._loadPlaid(function (l, u) {
                                              if (l) return void d(l);
                                              u
                                                  .create({
                                                      clientName: e.bankLogin.displayName,
                                                      apiVersion: 'v2',
                                                      env: a ? 'production' : 'sandbox',
                                                      key: c.publicKey,
                                                      product: 'auth',
                                                      selectAccount: !0,
                                                      onExit: function () {
                                                          (t._isTokenizingBankLogin = !1), s.sendEvent(n, 'usbankaccount.banklogin.tokenization.closed.by-user'), d(new r(o.US_BANK_ACCOUNT_LOGIN_CLOSED));
                                                      },
                                                      onSuccess: function (r, o) {
                                                          var c = e.bankLogin,
                                                              l = {
                                                                  publicToken: r,
                                                                  accountId: a ? o.account_id : 'plaid_account_id',
                                                                  accountType: o.account.subtype.toUpperCase(),
                                                                  achMandate: e.mandateText,
                                                                  billingAddress: y(c.billingAddress || {})
                                                              };
                                                          A(l, c),
                                                              n
                                                                  .request({
                                                                      api: 'graphQLApi',
                                                                      data: {
                                                                          query: _,
                                                                          variables: { input: { usBankLogin: l } }
                                                                      }
                                                                  })
                                                                  .then(function (e) {
                                                                      (t._isTokenizingBankLogin = !1), s.sendEvent(n, 'usbankaccount.banklogin.tokenization.succeeded'), i(m(e, 'tokenizeUsBankLogin'));
                                                                  })
                                                                  .catch(function (e) {
                                                                      var r;
                                                                      (t._isTokenizingBankLogin = !1), (r = h(e)), s.sendEvent(n, 'usbankaccount.banklogin.tokenization.failed'), d(r);
                                                                  });
                                                      }
                                                  })
                                                  .open(),
                                                  s.sendEvent(n, 'usbankaccount.banklogin.tokenization.started');
                                          });
                                      }))
                                : Promise.reject(new r(o.US_BANK_ACCOUNT_BANK_LOGIN_NOT_ENABLED))
                            : Promise.reject(
                                  new r({
                                      type: o.US_BANK_ACCOUNT_OPTION_REQUIRED.type,
                                      code: o.US_BANK_ACCOUNT_OPTION_REQUIRED.code,
                                      message: 'displayName property is required when using bankLogin.'
                                  })
                              );
                    }),
                    (E.prototype._loadPlaid = function (e) {
                        var t, n;
                        if (((e = c(e)), window.Plaid)) return void e(null, window.Plaid);
                        (t = document.querySelector('script[src="' + i.PLAID_LINK_JS + '"]')) ? f(t, e) : (((n = document.createElement('script')).src = i.PLAID_LINK_JS), (n.async = !0), f(n, e), document.body.appendChild(n), (this._plaidScript = n));
                    }),
                    (E.prototype.teardown = function () {
                        return this._plaidScript && document.body.removeChild(this._plaidScript), d(this, l(E.prototype)), Promise.resolve();
                    }),
                    (t.exports = u.wrapPrototype(E));
            },
            {
                '../lib/analytics': 138,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/errors': 154,
                '../lib/methods': 175,
                '../lib/once': 176,
                './constants': 227,
                './errors': 228,
                '@braintree/wrap-promise': 40
            }
        ],
        231: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN: {
                        type: r.types.MERCHANT,
                        code: 'VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN',
                        message: 'A client token with a customer id must be used to delete a payment method nonce.'
                    },
                    VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND: {
                        type: r.types.MERCHANT,
                        code: 'VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND'
                    },
                    VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR: {
                        type: r.types.UNKNOWN,
                        code: 'VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        232: [
            function (e, t, n) {
                var r = e('../lib/basic-component-verification'),
                    i = e('../lib/create-deferred-client'),
                    o = e('../lib/create-assets-url'),
                    a = e('./vault-manager');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'Vault Manager';
                        return r
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return new a({
                                    createPromise: i.create({
                                        authorization: e.authorization,
                                        client: e.client,
                                        debug: e.debug,
                                        assetsUrl: o.create(e.authorization),
                                        name: t
                                    })
                                });
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/basic-component-verification': 141,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './vault-manager': 233,
                '@braintree/wrap-promise': 40
            }
        ],
        233: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('../lib/braintree-error'),
                    o = e('./errors'),
                    a = e('../lib/convert-methods-to-error'),
                    s = e('../lib/methods'),
                    c = e('@braintree/wrap-promise');
                function d(e) {
                    this._createPromise = e.createPromise;
                }
                function l(e) {
                    var t = {
                        nonce: e.nonce,
                        default: e.default,
                        details: e.details,
                        hasSubscription: e.hasSubscription,
                        type: e.type
                    };
                    return e.description && (t.description = e.description), e.binData && (t.binData = e.binData), t;
                }
                (d.prototype.fetchPaymentMethods = function (e) {
                    var t;
                    return (
                        (t = +(!0 === (e = e || {}).defaultFirst)),
                        this._createPromise
                            .then(function (e) {
                                return e.request({
                                    endpoint: 'payment_methods',
                                    method: 'get',
                                    data: { defaultFirst: t }
                                });
                            })
                            .then(
                                function (e) {
                                    return r.sendEvent(this._createPromise, 'vault-manager.fetch-payment-methods.succeeded'), e.paymentMethods.map(l);
                                }.bind(this)
                            )
                    );
                }),
                    (d.prototype.deletePaymentMethod = function (e) {
                        return this._createPromise.then(function (t) {
                            return 'CLIENT_TOKEN' !== t.getConfiguration().authorizationType
                                ? Promise.reject(new i(o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_NONCE_REQUIRES_CLIENT_TOKEN))
                                : t
                                      .request({
                                          api: 'graphQLApi',
                                          data: {
                                              query: 'mutation DeletePaymentMethodFromSingleUseToken($input: DeletePaymentMethodFromSingleUseTokenInput!) {  deletePaymentMethodFromSingleUseToken(input: $input) {    clientMutationId  }}',
                                              variables: { input: { singleUseTokenId: e } },
                                              operationName: 'DeletePaymentMethodFromSingleUseToken'
                                          }
                                      })
                                      .then(function () {
                                          r.sendEvent(t, 'vault-manager.delete-payment-method.succeeded');
                                      })
                                      .catch(function (n) {
                                          var a,
                                              s = n.details.originalError;
                                          return (
                                              r.sendEvent(t, 'vault-manager.delete-payment-method.failed'),
                                              s[0] &&
                                                  'NOT_FOUND' === s[0].extensions.errorClass &&
                                                  (a = new i({
                                                      type: o.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.type,
                                                      code: o.VAULT_MANAGER_PAYMENT_METHOD_NONCE_NOT_FOUND.code,
                                                      message: 'A payment method for payment method nonce `' + e + '` could not be found.',
                                                      details: { originalError: s }
                                                  })),
                                              a ||
                                                  (a = new i({
                                                      type: o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.type,
                                                      code: o.VAULT_MANAGER_DELETE_PAYMENT_METHOD_UNKNOWN_ERROR.code,
                                                      message: 'An unknown error occured when attempting to delete the payment method assocaited with the payment method nonce `' + e + '`.',
                                                      details: { originalError: s }
                                                  })),
                                              Promise.reject(a)
                                          );
                                      });
                        });
                    }),
                    (d.prototype.teardown = function () {
                        return a(this, s(d.prototype)), Promise.resolve();
                    }),
                    (t.exports = c.wrapPrototype(d));
            },
            {
                '../lib/analytics': 138,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/methods': 175,
                './errors': 231,
                '@braintree/wrap-promise': 40
            }
        ],
        234: [
            function (e, t, n) {
                var r = (
                    (this && this.__importDefault) ||
                    function (e) {
                        return e && e.__esModule ? e : { default: e };
                    }
                )(e('./venmo-desktop'));
                t.exports = function (e) {
                    return new r.default(e).initialize();
                };
            },
            { './venmo-desktop': 236 }
        ],
        235: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = n.UPDATE_PAYMENT_CONTEXT_QUERY = n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = n.CREATE_PAYMENT_CONTEXT_QUERY = n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = void 0), (n.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY = 'mutation CreateVenmoQRCodePaymentContext($input: CreateVenmoQRCodePaymentContextInput!) {\n  createVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n    venmoQRCodePaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}'), (n.CREATE_PAYMENT_CONTEXT_QUERY = 'mutation CreateVenmoPaymentContext($input: CreateVenmoPaymentContextInput!) {\n  createVenmoPaymentContext(input: $input) {\n    clientMutationId\n    venmoPaymentContext {\n      id\n      merchantId\n      createdAt\n      expiresAt\n    }\n  }\n}'), (n.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY = 'mutation UpdateVenmoQRCodePaymentContext($input: UpdateVenmoQRCodePaymentContextInput!) {\n  updateVenmoQRCodePaymentContext(input: $input) {\n    clientMutationId\n  }\n}'), (n.UPDATE_PAYMENT_CONTEXT_QUERY = 'mutation UpdateVenmoPaymentContextStatus($input: UpdateVenmoPaymentContextStatusInput!) {\n  updateVenmoPaymentContextStatus(input: $input) {\n    clientMutationId\n  }\n}'), (n.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY = 'query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoQRCodePaymentContext {\n      status\n      paymentMethodId\n      userName\n    }\n  }\n}'), (n.VENMO_PAYMENT_CONTEXT_STATUS_QUERY = 'query PaymentContext($id: ID!) {\n  node(id: $id) {\n    ... on VenmoPaymentContext {\n      status\n      paymentMethodId\n      userName\n      payerInfo {\n        firstName\n        lastName\n        phoneNumber\n        email\n        externalId\n        userName\n        billingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n        shippingAddress {\n          fullName\n          addressLine1\n          addressLine2\n          adminArea1\n          adminArea2\n          postalCode\n          countryCode\n        }\n      }\n    }\n  }\n}');
            },
            {}
        ],
        236: [
            function (e, t, n) {
                var r =
                        (this && this.__assign) ||
                        function () {
                            return (r =
                                Object.assign ||
                                function (e) {
                                    for (var t, n = 1, r = arguments.length; n < r; n++) for (var i in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                                    return e;
                                }).apply(this, arguments);
                        },
                    i =
                        (this && this.__importDefault) ||
                        function (e) {
                            return e && e.__esModule ? e : { default: e };
                        };
                Object.defineProperty(n, '__esModule', { value: !0 });
                var o = i(e('framebus')),
                    a = i(e('@braintree/iframer')),
                    s = i(e('@braintree/uuid')),
                    c = e('../shared/events'),
                    d = e('./queries');
                n.default = (function () {
                    function e(e) {
                        (this.isHidden = !0), (this.env = e.environment), (this.id = s.default()), (this.profileId = e.profileId), (this.displayName = e.displayName), (this.paymentMethodUsage = e.paymentMethodUsage), (this.shouldUseLegacyQRCodeMutation = !this.paymentMethodUsage);
                        var t = e.url + '#' + this.env + '_' + this.id;
                        (this.bus = new o.default({
                            channel: this.id,
                            verifyDomain: e.verifyDomain,
                            targetFrames: []
                        })),
                            (this.apiRequest = e.apiRequest),
                            (this.sendEvent = e.sendEvent),
                            (this.Promise = e.Promise),
                            (this.alertBox = document.createElement('div')),
                            this.alertBox.setAttribute('data-venmo-desktop-id', this.id),
                            this.alertBox.setAttribute('role', 'alert'),
                            (this.alertBox.style.position = 'fixed'),
                            (this.alertBox.style.display = 'none'),
                            (this.alertBox.style.height = '1px'),
                            (this.alertBox.style.width = '1px'),
                            (this.alertBox.style.overflow = 'hidden'),
                            (this.alertBox.style.zIndex = '0'),
                            (this.iframe = a.default({
                                src: t,
                                name: 'venmo-desktop-iframe',
                                style: {
                                    display: 'none',
                                    position: 'fixed',
                                    top: '0',
                                    bottom: '0',
                                    right: '0',
                                    left: '0',
                                    height: '100%',
                                    width: '100%',
                                    zIndex: '9999999'
                                },
                                title: 'Venmo Desktop'
                            })),
                            this.bus.addTargetFrame(this.iframe);
                    }
                    return (
                        (e.prototype.initialize = function () {
                            var e = this;
                            return new this.Promise(function (t) {
                                e.bus.on(c.VENMO_DESKTOP_IFRAME_READY, function () {
                                    t(e);
                                }),
                                    e.bus.on(c.VENMO_DESKTOP_REQUEST_NEW_QR_CODE, function () {
                                        e.sendEvent('venmo.tokenize.desktop.restarted-from-error-view'), e.startPolling();
                                    }),
                                    document.body.appendChild(e.iframe),
                                    document.body.appendChild(e.alertBox);
                            });
                        }),
                        (e.prototype.launchDesktopFlow = function () {
                            var e = this;
                            this.isHidden = !1;
                            var t = new this.Promise(function (t, n) {
                                e.launchDesktopPromiseRejectFunction = n;
                                var r = function () {
                                        e.bus.off(c.VENMO_DESKTOP_CUSTOMER_CANCELED, o), e.bus.off(c.VENMO_DESKTOP_UNKNOWN_ERROR, i);
                                    },
                                    i = function (t) {
                                        r(),
                                            e.sendEvent('venmo.tokenize.desktop.unknown-error'),
                                            n({
                                                allowUIToHandleError: !1,
                                                reason: 'UNKNOWN_ERROR',
                                                err: t
                                            });
                                    },
                                    o = function () {
                                        r(),
                                            e.updateVenmoDesktopPaymentContext('CANCELED'),
                                            e.sendEvent('venmo.tokenize.desktop.status-change.canceled-from-modal'),
                                            n({
                                                allowUIToHandleError: !1,
                                                reason: 'CUSTOMER_CANCELED'
                                            });
                                    };
                                (e.completedHandler = function (e) {
                                    r(), t(e);
                                }),
                                    e.bus.on(c.VENMO_DESKTOP_CUSTOMER_CANCELED, o),
                                    e.bus.on(c.VENMO_DESKTOP_UNKNOWN_ERROR, i);
                            });
                            return (
                                (this.iframe.style.display = 'block'),
                                this.setAlert('Generating a QR code, get your Venmo app ready'),
                                this.iframe.focus(),
                                this.startPolling(),
                                t
                                    .then(function (t) {
                                        return delete e.venmoContextId, delete e.launchDesktopPromiseRejectFunction, t;
                                    })
                                    .catch(function (t) {
                                        return delete e.venmoContextId, delete e.launchDesktopPromiseRejectFunction, e.Promise.reject(t);
                                    })
                            );
                        }),
                        (e.prototype.triggerCompleted = function (e) {
                            var t = this;
                            this.isHidden ||
                                setTimeout(function () {
                                    t.completedHandler && t.completedHandler(e), delete t.completedHandler;
                                }, 2000);
                        }),
                        (e.prototype.triggerRejected = function (e) {
                            this.launchDesktopPromiseRejectFunction && this.launchDesktopPromiseRejectFunction(e);
                        }),
                        (e.prototype.hideDesktopFlow = function () {
                            this.setAlert(''), (this.iframe.style.display = 'none'), this.bus.emit(c.VENMO_DESKTOP_CLOSED_FROM_PARENT), (this.isHidden = !0);
                        }),
                        (e.prototype.displayError = function (e) {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_DISPLAY_ERROR, { message: e }), this.setAlert(e));
                        }),
                        (e.prototype.displayQRCode = function (e, t) {
                            this.isHidden ||
                                (this.bus.emit(c.VENMO_DESKTOP_DISPLAY_QR_CODE, {
                                    id: e,
                                    merchantId: t
                                }),
                                this.setAlert('To scan the QR code, open your Venmo app'));
                        }),
                        (e.prototype.authorize = function () {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_AUTHORIZE), this.setAlert('Venmo account authorized'));
                        }),
                        (e.prototype.authorizing = function () {
                            this.isHidden || (this.bus.emit(c.VENMO_DESKTOP_AUTHORIZING), this.setAlert('Authorize on your Venmo app'));
                        }),
                        (e.prototype.startPolling = function () {
                            var e = this;
                            return this.createVenmoDesktopPaymentContext()
                                .then(function (t) {
                                    var n = new Date(t.expiresAt).getTime() - new Date(t.createdAt).getTime(),
                                        r = Date.now() + n;
                                    return e.displayQRCode(t.id, t.merchantId), e.pollForStatusChange(t.status, r);
                                })
                                .then(function (t) {
                                    if (t) {
                                        var n = t.userName || '';
                                        (n = '@' + n.replace('@', '')),
                                            e.triggerCompleted({
                                                paymentMethodNonce: t.paymentMethodId,
                                                username: n,
                                                payerInfo: t.payerInfo,
                                                id: e.venmoContextId || ''
                                            });
                                    }
                                })
                                .catch(function (t) {
                                    t.allowUIToHandleError || (e.sendEvent('venmo.tokenize.desktop.unhandled-error'), e.triggerRejected(t));
                                });
                        }),
                        (e.prototype.pollForStatusChange = function (e, t) {
                            var n = this;
                            return this.venmoContextId
                                ? Date.now() > t
                                    ? this.updateVenmoDesktopPaymentContext('EXPIRED').then(function () {
                                          return (
                                              n.displayError('Something went wrong'),
                                              n.sendEvent('venmo.tokenize.desktop.status-change.sdk-timeout'),
                                              n.Promise.reject({
                                                  allowUIToHandleError: !0,
                                                  reason: 'TIMEOUT'
                                              })
                                          );
                                      })
                                    : this.lookupVenmoDesktopPaymentContext().then(function (r) {
                                          if (!n.venmoContextId || !r) return n.Promise.resolve();
                                          var i = r.status;
                                          if (i !== e)
                                              switch (((e = i), n.sendEvent('venmo.tokenize.desktop.status-change.' + e.toLowerCase()), e)) {
                                                  case 'CREATED':
                                                      break;
                                                  case 'EXPIRED':
                                                  case 'FAILED':
                                                  case 'CANCELED':
                                                      var o = 'CANCELED' === e ? 'The authorization was canceled' : 'Something went wrong';
                                                      return (
                                                          n.displayError(o),
                                                          n.Promise.reject({
                                                              allowUIToHandleError: !0,
                                                              reason: e
                                                          })
                                                      );
                                                  case 'SCANNED':
                                                      n.authorizing();
                                                      break;
                                                  case 'APPROVED':
                                                      return n.authorize(), n.Promise.resolve(r);
                                              }
                                          return new n.Promise(function (r, i) {
                                              setTimeout(function () {
                                                  n.pollForStatusChange(e, t).then(r).catch(i);
                                              }, 1000);
                                          });
                                      })
                                : this.Promise.resolve();
                        }),
                        (e.prototype.teardown = function () {
                            this.bus.teardown(), this.iframe.parentNode && this.iframe.parentNode.removeChild(this.iframe), this.alertBox.parentNode && this.alertBox.parentNode.removeChild(this.alertBox);
                        }),
                        (e.prototype.setAlert = function (e) {
                            (this.alertBox.style.display = e ? 'block' : 'none'), (this.alertBox.textContent = e);
                        }),
                        (e.prototype.createPaymentContextFromGraphqlLegacyQRCodeMutation = function (e) {
                            return this.apiRequest(d.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY, {
                                input: {
                                    environment: this.env,
                                    intent: e
                                }
                            }).then(function (e) {
                                return e.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
                            });
                        }),
                        (e.prototype.createPaymentContextFromGraphQL = function (e) {
                            var t = {
                                intent: e,
                                paymentMethodUsage: this.paymentMethodUsage,
                                customerClient: 'DESKTOP'
                            };
                            return (
                                this.profileId && (t.merchantProfileId = this.profileId),
                                this.displayName && (t.displayName = this.displayName),
                                this.apiRequest(d.CREATE_PAYMENT_CONTEXT_QUERY, { input: t }).then(function (e) {
                                    return e.createVenmoPaymentContext.venmoPaymentContext;
                                })
                            );
                        }),
                        (e.prototype.createVenmoDesktopPaymentContext = function () {
                            var e = this;
                            return (this.shouldUseLegacyQRCodeMutation ? this.createPaymentContextFromGraphqlLegacyQRCodeMutation('PAY_FROM_APP') : this.createPaymentContextFromGraphQL('PAY_FROM_APP')).then(function (t) {
                                e.venmoContextId = t.id;
                                var n = e.profileId || t.merchantId;
                                return {
                                    id: t.id,
                                    status: t.status,
                                    merchantId: n,
                                    createdAt: t.createdAt,
                                    expiresAt: t.expiresAt
                                };
                            });
                        }),
                        (e.prototype.updateVenmoDesktopPaymentContext = function (e, t) {
                            if ((void 0 === t && (t = {}), !this.venmoContextId)) return this.Promise.resolve();
                            var n = {
                                    input: r(
                                        {
                                            id: this.venmoContextId,
                                            status: e
                                        },
                                        t
                                    )
                                },
                                i = this.shouldUseLegacyQRCodeMutation ? d.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : d.UPDATE_PAYMENT_CONTEXT_QUERY;
                            return this.apiRequest(i, n).then(function () {});
                        }),
                        (e.prototype.lookupVenmoDesktopPaymentContext = function () {
                            if (!this.venmoContextId) return this.Promise.resolve();
                            var e = this.shouldUseLegacyQRCodeMutation ? d.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : d.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
                            return this.apiRequest(e, { id: this.venmoContextId }).then(function (e) {
                                return e.node;
                            });
                        }),
                        e
                    );
                })();
            },
            {
                '../shared/events': 241,
                './queries': 235,
                '@braintree/iframer': 32,
                '@braintree/uuid': 36,
                framebus: 50
            }
        ],
        237: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('../lib/basic-component-verification'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url'),
                    s = e('./shared/errors'),
                    c = e('@braintree/wrap-promise'),
                    d = e('../lib/braintree-error'),
                    l = e('./venmo'),
                    u = e('./shared/supports-venmo');
                t.exports = {
                    create: c(function (e) {
                        var t = 'Venmo';
                        return i
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                var n, i;
                                return e.profileId && 'string' != typeof e.profileId
                                    ? Promise.reject(new d(s.VENMO_INVALID_PROFILE_ID))
                                    : e.deepLinkReturnUrl && 'string' != typeof e.deepLinkReturnUrl
                                      ? Promise.reject(new d(s.VENMO_INVALID_DEEP_LINK_RETURN_URL))
                                      : ((n = o
                                            .create({
                                                authorization: e.authorization,
                                                client: e.client,
                                                debug: e.debug,
                                                assetsUrl: a.create(e.authorization),
                                                name: t
                                            })
                                            .then(function (t) {
                                                var n = t.getConfiguration();
                                                return ((e.client = t), n.gatewayConfiguration.payWithVenmo) ? t : Promise.reject(new d(s.VENMO_NOT_ENABLED));
                                            })),
                                        (e.createPromise = n),
                                        (i = new l(e)),
                                        r.sendEvent(n, 'venmo.initialized'),
                                        n.then(function () {
                                            return i;
                                        }));
                            });
                    }),
                    isBrowserSupported: function (e) {
                        return u.isBrowserSupported(e);
                    },
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './shared/errors': 240,
                './shared/supports-venmo': 243,
                './venmo': 245,
                '@braintree/wrap-promise': 40
            }
        ],
        238: [
            function (e, t, n) {
                var r = e('@braintree/browser-detection/is-android'),
                    i = e('@braintree/browser-detection/is-chrome'),
                    o = e('@braintree/browser-detection/is-ios'),
                    a = e('@braintree/browser-detection/is-ios-safari'),
                    s = e('@braintree/browser-detection/is-ios-webview');
                t.exports = {
                    isAndroid: r,
                    isAndroidWebview: function () {
                        return r() && window.navigator.userAgent.toLowerCase().indexOf('wv') > -1;
                    },
                    isChrome: i,
                    isIos: o,
                    isIosChrome: function () {
                        return o() && i();
                    },
                    isSamsung: e('@braintree/browser-detection/is-samsung'),
                    isIosSafari: a,
                    isIosWebview: s,
                    isFacebookOwnedBrowserOnAndroid: function () {
                        var e = window.navigator.userAgent.toLowerCase();
                        return !!(e.indexOf('huawei') > -1 && e.indexOf('fban') > -1) || (!!r() && (e.indexOf('fb_iab') > -1 || e.indexOf('instagram') > -1));
                    },
                    doesNotSupportWindowOpenInIos: function () {
                        return !!o() && (s() || !a());
                    }
                };
            },
            {
                '@braintree/browser-detection/is-android': 20,
                '@braintree/browser-detection/is-chrome': 22,
                '@braintree/browser-detection/is-ios': 27,
                '@braintree/browser-detection/is-ios-safari': 24,
                '@braintree/browser-detection/is-ios-webview': 25,
                '@braintree/browser-detection/is-samsung': 28
            }
        ],
        239: [
            function (e, t, n) {
                t.exports = {
                    DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY: 500,
                    DEFAULT_PROCESS_RESULTS_DELAY: 1000,
                    VENMO_APP_OR_MOBILE_AUTH_URL: 'https://venmo.com/go/checkout',
                    VENMO_MOBILE_APP_AUTH_ONLY_URL: 'https://venmo.com/braintree/checkout',
                    VENMO_WEB_LOGIN_URL: 'https://account.venmo.com/go/web'
                };
            },
            {}
        ],
        240: [
            function (e, t, n) {
                var r = e('../../lib/braintree-error');
                t.exports = {
                    VENMO_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'VENMO_NOT_ENABLED',
                        message: 'Venmo is not enabled for this merchant.'
                    },
                    VENMO_TOKENIZATION_REQUEST_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: 'VENMO_TOKENIZATION_REQUEST_ACTIVE',
                        message: 'Another tokenization request is active.'
                    },
                    VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE: {
                        type: r.types.MERCHANT,
                        code: 'VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE',
                        message: 'No tokenization in progress.'
                    },
                    VENMO_APP_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'VENMO_APP_FAILED',
                        message: 'Venmo app encountered a problem.'
                    },
                    VENMO_APP_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_APP_CANCELED',
                        message: 'Venmo app authorization was canceled.'
                    },
                    VENMO_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_CANCELED',
                        message: 'User canceled Venmo authorization, or Venmo app is not available.'
                    },
                    VENMO_CUSTOMER_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_CUSTOMER_CANCELED',
                        message: 'User canceled Venmo authorization.'
                    },
                    VENMO_NETWORK_ERROR: {
                        type: r.types.NETWORK,
                        code: 'VENMO_NETWORK_ERROR',
                        message: 'Something went wrong making the request'
                    },
                    VENMO_DESKTOP_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_DESKTOP_CANCELED',
                        message: 'User canceled Venmo authorization by closing the Venmo Desktop modal.'
                    },
                    VENMO_TOKENIZATION_CANCELED_BY_MERCHANT: {
                        type: r.types.MERCHANT,
                        code: 'VENMO_TOKENIZATION_CANCELED_BY_MERCHANT',
                        message: 'The Venmo tokenization was canceled by the merchant.'
                    },
                    VENMO_DESKTOP_UNKNOWN_ERROR: {
                        type: r.types.UNKNOWN,
                        code: 'VENMO_DESKTOP_UNKNOWN_ERROR',
                        message: 'Something went wrong with the Venmo Desktop flow.'
                    },
                    VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED: {
                        type: r.types.NETWORK,
                        code: 'VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED',
                        message: 'Something went wrong creating the Venmo Payment Context.'
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR: {
                        type: r.types.UNKNOWN,
                        code: 'VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR',
                        message: 'Something went wrong during mobile polling.'
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_MOBILE_POLLING_TOKENIZATION_EXPIRED',
                        message: 'The Venmo authorization request is expired.'
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED',
                        message: 'The Venmo authorization was canceled'
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT: {
                        type: r.types.CUSTOMER,
                        code: 'VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT',
                        message: 'Customer took too long to authorize Venmo payment.'
                    },
                    VENMO_MOBILE_POLLING_TOKENIZATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'VENMO_MOBILE_POLLING_TOKENIZATION_FAILED',
                        message: 'The Venmo authorization failed.'
                    },
                    VENMO_INVALID_PROFILE_ID: {
                        type: r.types.MERCHANT,
                        code: 'VENMO_INVALID_PROFILE_ID',
                        message: 'Venmo profile ID is invalid.'
                    },
                    VENMO_INVALID_DEEP_LINK_RETURN_URL: {
                        type: r.types.MERCHANT,
                        code: 'VENMO_INVALID_DEEP_LINK_RETURN_URL',
                        message: 'Venmo deep link return URL is invalid.'
                    },
                    VENMO_TOKENIZATION_FAILED: {
                        type: r.types.UNKNOWN,
                        code: 'VENMO_TOKENIZATION_FAILED',
                        message: 'Venmo encountered a problem'
                    },
                    VENMO_ECD_DISABLED: {
                        type: r.types.MERCHANT,
                        code: 'ECD_DISABLED',
                        message: 'Cannot collect customer data when ECD is disabled. Enable this feature in the Control Panel to collect this data.'
                    }
                };
            },
            { '../../lib/braintree-error': 143 }
        ],
        241: [
            function (e, t, n) {
                Object.defineProperty(n, '__esModule', { value: !0 }), (n.VENMO_DESKTOP_UNKNOWN_ERROR = n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = n.VENMO_DESKTOP_CLOSED_FROM_PARENT = n.VENMO_DESKTOP_IFRAME_READY = n.VENMO_DESKTOP_DISPLAY_QR_CODE = n.VENMO_DESKTOP_DISPLAY_ERROR = n.VENMO_DESKTOP_CUSTOMER_CANCELED = n.VENMO_DESKTOP_AUTHORIZING = n.VENMO_DESKTOP_AUTHORIZE = n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = void 0), (n.VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT = 'VENMO_DESKTOP_AUTHORIZATION_TIMED_OUT'), (n.VENMO_DESKTOP_AUTHORIZE = 'VENMO_DESKTOP_AUTHORIZE'), (n.VENMO_DESKTOP_AUTHORIZING = 'VENMO_DESKTOP_AUTHORIZING'), (n.VENMO_DESKTOP_CUSTOMER_CANCELED = 'VENMO_DESKTOP_CUSTOMER_CANCELED'), (n.VENMO_DESKTOP_DISPLAY_ERROR = 'VENMO_DESKTOP_DISPLAY_ERROR'), (n.VENMO_DESKTOP_DISPLAY_QR_CODE = 'VENMO_DESKTOP_DISPLAY_QR_CODE'), (n.VENMO_DESKTOP_IFRAME_READY = 'VENMO_DESKTOP_IFRAME_READY'), (n.VENMO_DESKTOP_CLOSED_FROM_PARENT = 'VENMO_DESKTOP_CLOSED_FROM_PARENT'), (n.VENMO_DESKTOP_REQUEST_NEW_QR_CODE = 'VENMO_DESKTOP_REQUEST_NEW_QR_CODE'), (n.VENMO_DESKTOP_UNKNOWN_ERROR = 'VENMO_DESKTOP_UNKNOWN_ERROR');
            },
            {}
        ],
        242: [
            function (e, t, n) {
                var r = e('./constants');
                t.exports = function (e) {
                    return e.useAllowDesktopWebLogin ? r.VENMO_WEB_LOGIN_URL : e.mobileWebFallBack ? r.VENMO_APP_OR_MOBILE_AUTH_URL : r.VENMO_MOBILE_APP_AUTH_ONLY_URL;
                };
            },
            { './constants': 239 }
        ],
        243: [
            function (e, t, n) {
                var r = e('./browser-detection'),
                    i = e('../../lib/in-iframe');
                t.exports = {
                    isBrowserSupported: function (e) {
                        var t,
                            n,
                            o,
                            a = r.isAndroid(),
                            s = a || r.isIos(),
                            c = a && r.isChrome(),
                            d = r.isIosSafari() || c;
                        return (t = !0 === ((e = e || {}).allowDesktopWebLogin || e.allowDesktop)), (n = !e.hasOwnProperty('allowNewBrowserTab') || e.allowNewBrowserTab), (o = !e.hasOwnProperty('allowWebviews') || e.allowWebviews), !((!(n && !i()) && r.isIosChrome()) || r.isFacebookOwnedBrowserOnAndroid() || r.isSamsung() || (!o && (r.isAndroidWebview() || r.isIosWebview()))) && (s ? (n ? s : d) : t);
                    }
                };
            },
            {
                '../../lib/in-iframe': 169,
                './browser-detection': 238
            }
        ],
        244: [
            function (e, t, n) {
                var r = e('../../lib/frame-service/external'),
                    i = e('../../lib/use-min'),
                    o = e('@braintree/extended-promise'),
                    a = e('../shared/errors'),
                    s = e('../../lib/braintree-error'),
                    c = {
                        backdrop: 'venmo-desktop-web-backdrop',
                        backdropHidden: 'venmo-desktop-web-backdrop.hidden',
                        backdropContainer: 'venmo-backdrop-container',
                        cancelButton: 'venmo-popup-cancel-button',
                        continueButton: 'venmo-popup-continue-button',
                        message: 'venmo-message',
                        instructions: 'venmo-instructions',
                        venmoLogo: 'venmo-full-logo'
                    };
                function d(e) {
                    var t = e.frameServiceInstance,
                        n = e.venmoUrl,
                        r = e.checkForStatusChange,
                        i = e.cancelTokenization,
                        d = e.checkPaymentContextStatus,
                        u = new o();
                    return (
                        document.getElementById(c.continueButton).addEventListener('click', function () {
                            t.focus();
                        }),
                        document.getElementById(c.cancelButton).addEventListener('click', function () {
                            t.close(), i(), l();
                        }),
                        t.open({}, function (e) {
                            e
                                ? u.reject(e)
                                : r(1)
                                      .then(function (e) {
                                          u.resolve(e);
                                      })
                                      .catch(function (e) {
                                          d().then(function (t) {
                                              'CREATED' === t.status ? u.reject(new s(a.VENMO_CUSTOMER_CANCELED)) : u.reject(e);
                                          });
                                      }),
                                t.close(),
                                l();
                        }),
                        t.redirect(n),
                        u
                    );
                }
                function l() {
                    document.getElementById('venmo-desktop-web-backdrop').classList.add('hidden');
                }
                (o.suppressUnhandledPromiseMessage = !0),
                    (t.exports = {
                        runWebLogin: function (e) {
                            return (
                                !(function () {
                                    var e,
                                        t,
                                        n,
                                        r,
                                        i,
                                        o,
                                        a,
                                        s,
                                        d = document.getElementById(c.backdrop);
                                    if (d) return d.classList.remove('hidden');
                                    (e = document.createElement('style')),
                                        (t = document.createElement('div')),
                                        (n = document.createElement('div')),
                                        (r = document.createElement('div')),
                                        (i = document.createElement('div')),
                                        (o = document.createElement('div')),
                                        (a = document.createElement('button')),
                                        (s = document.createElement('button')),
                                        (e.id = 'venmo-desktop-web__injected-styles'),
                                        (e.innerHTML = ['#' + c.backdropHidden + ' {', 'display: none;', '}', '#' + c.backdrop + ' {', 'z-index: 3141592632;', 'cursor: pointer;', 'position: fixed;', 'top: 0;', 'left: 0;', 'bottom: 0;', 'width: 100%;', 'background: rgba(0, 0, 0, 0.8);', '}'].concat(['#' + c.backdropContainer + ' {', 'display: flex;', 'align-content: center;', 'justify-content: center;', 'align-items: center;', 'width: 100%;', 'height: 100%;', 'flex-direction: column;', '}'], ['#' + c.cancelButton + ' {', 'height: 24px;', 'width: 380px;', "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", 'font-style: normal;', 'font-weight: 700;', 'font-size: 18px;', 'line-height: 24px;', 'text-align: center;', 'background-color: transparent;', 'border: none;', 'color: #FFFFFF;', 'margin-top: 28px;', '}'], ['#' + c.continueButton + ' {', 'width: 400px;', 'height: 50px;', 'background: #0074DE;', 'border-radius: 24px;', 'border: none;', "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", 'font-style: normal;', 'font-weight: 700;', 'font-size: 18px;', 'color: #FFFFFF;', 'margin-top: 44px;', '}'], ['#' + c.message + ' {', "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", 'font-style: normal;', 'font-weight: 500;', 'font-size: 24px;', 'line-height: 32px;', 'text-align: center;', 'color: #FFFFFF;', 'margin-top: 32px;', '}'], ['#' + c.instructions + ' {', "font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;", 'font-style: normal;', 'font-weight: 400;', 'font-size: 16px;', 'line-height: 20px;', 'text-align: center;', 'color: #FFFFFF;', 'margin-top: 16px;', 'width: 400px;', '}']).join('\n')),
                                        (t.id = c.backdrop),
                                        (n.id = c.backdropContainer),
                                        (r.id = c.venmoLogo),
                                        (r.innerHTML = '<svg width="198" height="58" viewBox="0 0 198 58" fill="none" xmlns="http://www.w3.org/2000/svg">\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M43.0702 13.6572C44.1935 15.4585 44.6999 17.3139 44.6999 19.6576C44.6999 27.1328 38.1277 36.8436 32.7935 43.6625H20.6099L15.7236 15.2939L26.3917 14.3105L28.9751 34.4966C31.389 30.6783 34.3678 24.6779 34.3678 20.587C34.3678 18.3477 33.9727 16.8225 33.3553 15.5666L43.0702 13.6572Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M56.8965 26.1491C58.8596 26.1491 63.8018 25.2772 63.8018 22.5499C63.8018 21.2402 62.8481 20.587 61.7242 20.587C59.7579 20.587 57.1776 22.8763 56.8965 26.1491ZM56.6715 31.5506C56.6715 34.8807 58.5787 36.1873 61.107 36.1873C63.8603 36.1873 66.4966 35.534 69.923 33.8433L68.6324 42.3523C66.2183 43.4976 62.4559 44.2617 58.8039 44.2617C49.5403 44.2617 46.2249 38.8071 46.2249 31.9879C46.2249 23.1496 51.6179 13.765 62.7365 13.765C68.858 13.765 72.2809 17.0949 72.2809 21.7317C72.2815 29.2066 62.4005 31.4965 56.6715 31.5506Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M103.067 20.3142C103.067 21.4052 102.897 22.9875 102.727 24.0216L99.5262 43.6622H89.1385L92.0585 25.658C92.1139 25.1696 92.284 24.1865 92.284 23.6411C92.284 22.3314 91.4414 22.0047 90.4282 22.0047C89.0826 22.0047 87.7337 22.6042 86.8354 23.0418L83.5234 43.6625H73.0772L77.8495 14.257H86.8908L87.0052 16.6041C89.1382 15.2404 91.9469 13.7656 95.932 13.7656C101.212 13.765 103.067 16.3845 103.067 20.3142Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M133.906 16.9841C136.881 14.9131 139.69 13.765 143.563 13.765C148.897 13.765 150.753 16.3845 150.753 20.3142C150.753 21.4052 150.583 22.9875 150.413 24.0216L147.216 43.6622H136.825L139.801 25.2774C139.855 24.786 139.971 24.1865 139.971 23.8063C139.971 22.3317 139.128 22.0047 138.115 22.0047C136.824 22.0047 135.535 22.5501 134.577 23.0418L131.266 43.6625H120.878L123.854 25.2777C123.908 24.7863 124.02 24.1868 124.02 23.8065C124.02 22.332 123.177 22.0049 122.167 22.0049C120.819 22.0049 119.473 22.6045 118.574 23.0421L115.26 43.6628H104.817L109.589 14.2573H118.52L118.8 16.7122C120.878 15.241 123.684 13.7662 127.446 13.7662C130.704 13.765 132.837 15.129 133.906 16.9841Z" fill="white"/>\n  <path fill-rule="evenodd" clip-rule="evenodd" d="M171.426 25.5502C171.426 23.1496 170.808 21.513 168.956 21.513C164.857 21.513 164.015 28.55 164.015 32.1498C164.015 34.8807 164.802 36.5709 166.653 36.5709C170.528 36.5709 171.426 29.1497 171.426 25.5502ZM153.458 31.7152C153.458 22.442 158.511 13.765 170.136 13.765C178.896 13.765 182.098 18.7854 182.098 25.7148C182.098 34.8805 177.099 44.3723 165.194 44.3723C156.378 44.3723 153.458 38.7525 153.458 31.7152Z" fill="white"/>\n</svg>'),
                                        (i.id = c.message),
                                        (i.innerText = 'What would you like to do?'),
                                        (o.id = c.instructions),
                                        (o.innerText = 'Tap cancel payment to cancel and return to the business. Continue payment will relaunch the payment window.'),
                                        (a.id = c.continueButton),
                                        (a.innerText = 'Continue payment'),
                                        (s.id = c.cancelButton),
                                        (s.innerText = 'Cancel payment'),
                                        document.head.appendChild(e),
                                        n.appendChild(r),
                                        n.appendChild(i),
                                        n.appendChild(o),
                                        n.appendChild(a),
                                        n.appendChild(s),
                                        t.appendChild(n),
                                        document.body.appendChild(t),
                                        t.addEventListener('click', function (e) {
                                            e.stopPropagation();
                                        });
                                })(),
                                d(e)
                            );
                        },
                        openPopup: d,
                        setupDesktopWebLogin: function (e) {
                            var t = new o(),
                                n = e.assetsUrl,
                                a = e.debug || !1,
                                s = {
                                    top: Math.round((window.outerHeight - 570) / 2) + window.screenTop,
                                    left: Math.round((window.outerWidth - 400) / 2) + window.screenLeft
                                },
                                c = n + '/web/3.112.1/html';
                            return (
                                r.create(
                                    {
                                        name: 'venmoDesktopWebLogin',
                                        dispatchFrameUrl: c + '/dispatch-frame' + i(a) + '.html',
                                        openFrameUrl: c + '/venmo-landing-frame' + i(a) + '.html',
                                        top: s.top,
                                        left: s.left,
                                        height: 570,
                                        width: 400
                                    },
                                    function (e) {
                                        t.resolve(e);
                                    }
                                ),
                                t
                            );
                        },
                        POPUP_WIDTH: 400,
                        POPUP_HEIGHT: 570
                    });
            },
            {
                '../../lib/braintree-error': 143,
                '../../lib/frame-service/external': 158,
                '../../lib/use-min': 181,
                '../shared/errors': 240,
                '@braintree/extended-promise': 31
            }
        ],
        245: [
            function (e, t, n) {
                var r = e('../lib/analytics'),
                    i = e('./shared/supports-venmo'),
                    o = e('./shared/browser-detection'),
                    a = e('./shared/constants'),
                    s = e('./shared/errors'),
                    c = e('../lib/querystring'),
                    d = e('../lib/is-verified-domain'),
                    l = e('../lib/methods'),
                    u = e('../lib/convert-methods-to-error'),
                    p = e('@braintree/wrap-promise'),
                    _ = e('../lib/braintree-error'),
                    E = e('../lib/in-iframe'),
                    h = e('@braintree/extended-promise'),
                    m = e('./shared/get-venmo-url'),
                    f = e('./shared/web-login-backdrop'),
                    y = e('../lib/snake-case-to-camel-case'),
                    A = e('../lib/url-params'),
                    T = e('./external/'),
                    I = e('./external/queries'),
                    N = '3.112.1';
                function O(e) {
                    var t = this;
                    (this._allowDesktopWebLogin = e.allowDesktopWebLogin || !1),
                        (this._mobileWebFallBack = e.mobileWebFallBack || !1),
                        (this._createPromise = e.createPromise),
                        (this._allowNewBrowserTab = !1 !== e.allowNewBrowserTab),
                        (this._allowWebviews = !1 !== e.allowWebviews),
                        (this._allowDesktop = !0 === e.allowDesktop),
                        (this._useRedirectForIOS = !0 === e.useRedirectForIOS),
                        (this._profileId = e.profileId),
                        (this._displayName = e.displayName),
                        (this._deepLinkReturnUrl = e.deepLinkReturnUrl),
                        (this._ignoreHistoryChanges = e.ignoreHistoryChanges),
                        (this._paymentMethodUsage = (e.paymentMethodUsage || '').toUpperCase()),
                        (this._shouldUseLegacyFlow = !this._paymentMethodUsage),
                        (this._requireManualReturn = !0 === e.requireManualReturn),
                        (this._useDesktopQRFlow = this._allowDesktop && this._isDesktop() && !this._allowDesktopWebLogin),
                        (this._useAllowDesktopWebLogin = this._allowDesktopWebLogin && this._isDesktop()),
                        (this._cannotHaveReturnUrls = E() || this._requireManualReturn),
                        (this._allowAndroidRecreation = !1 !== e.allowAndroidRecreation),
                        (this._maxRetryCount = 3),
                        (this._collectCustomerBillingAddress = e.collectCustomerBillingAddress || !1),
                        (this._collectCustomerShippingAddress = e.collectCustomerShippingAddress || !1),
                        (this._isFinalAmount = e.isFinalAmount || !1),
                        (this._lineItems = e.lineItems),
                        (this._subTotalAmount = e.subTotalAmount),
                        (this._discountAmount = e.discountAmount),
                        (this._taxAmount = e.taxAmount),
                        (this._shippingAmount = e.shippingAmount),
                        (this._totalAmount = e.totalAmount),
                        (this._shouldCreateVenmoPaymentContext = this._cannotHaveReturnUrls || !this._shouldUseLegacyFlow),
                        r.sendEvent(this._createPromise, 'venmo.desktop-flow.configured.' + String(!!this._allowDesktop)),
                        this.hasTokenizationResult()
                            ? r.sendEvent(this._createPromise, 'venmo.appswitch.return-in-new-tab')
                            : this._useDesktopQRFlow
                              ? (this._createPromise = this._createPromise.then(function (e) {
                                    var n = e.getConfiguration().gatewayConfiguration;
                                    return T({
                                        url: n.assetsUrl + '/web/' + N + '/html/venmo-desktop-frame.html',
                                        environment: 'production' === n.environment ? 'PRODUCTION' : 'SANDBOX',
                                        profileId: t._profileId || n.payWithVenmo.merchantId,
                                        paymentMethodUsage: t._paymentMethodUsage,
                                        displayName: t._displayName,
                                        Promise: Promise,
                                        apiRequest: function (t, n) {
                                            return e
                                                .request({
                                                    api: 'graphQLApi',
                                                    data: {
                                                        query: t,
                                                        variables: n
                                                    }
                                                })
                                                .then(function (e) {
                                                    return e.data;
                                                });
                                        },
                                        sendEvent: function (e) {
                                            r.sendEvent(t._createPromise, e);
                                        },
                                        verifyDomain: d
                                    })
                                        .then(function (n) {
                                            return (t._venmoDesktopInstance = n), r.sendEvent(t._createPromise, 'venmo.desktop-flow.presented'), e;
                                        })
                                        .catch(function () {
                                            return r.sendEvent(t._createPromise, 'venmo.desktop-flow.setup-failed'), (t._useDesktopQRFlow = !1), e;
                                        });
                                }))
                              : this._shouldCreateVenmoPaymentContext &&
                                ((this._mobilePollingInterval = 250),
                                (this._mobilePollingExpiresThreshold = 300000),
                                (this._createPromise = this._createPromise.then(function (e) {
                                    var n,
                                        i,
                                        o = t._cannotHaveReturnUrls ? 'manual-return' : 'mobile-payment-context',
                                        a = e.getConfiguration();
                                    return (
                                        (i = f
                                            .setupDesktopWebLogin({
                                                assetsUrl: a.gatewayConfiguration.assetsUrl,
                                                debug: a.isDebug
                                            })
                                            .then(function (e) {
                                                t._frameServiceInstance = e;
                                            })
                                            .catch(function (e) {
                                                return e;
                                            })),
                                        (t._mobilePollingContextEnvironment = a.gatewayConfiguration.environment.toUpperCase()),
                                        (n = t
                                            ._createVenmoPaymentContext(e)
                                            .then(function () {
                                                return r.sendEvent(t._createPromise, 'venmo.' + o + '.presented'), e;
                                            })
                                            .catch(function (e) {
                                                var n;
                                                return (
                                                    r.sendEvent(t._createPromise, 'venmo.' + o + '.setup-failed'),
                                                    Promise.reject(
                                                        new _({
                                                            type: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.type,
                                                            code: s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.code,
                                                            message: (n = e).details && n.details.originalError && n.details.originalError[0] && n.details.originalError[0].extensions && 'VALIDATION' === n.details.originalError[0].extensions.errorClass && 'user_error' === n.details.originalError[0].extensions.errorType ? e.details.originalError[0].message : s.VENMO_MOBILE_PAYMENT_CONTEXT_SETUP_FAILED.message,
                                                            details: { originalError: e }
                                                        })
                                                    )
                                                );
                                            })),
                                        h
                                            .all([i, n])
                                            .then(function (e) {
                                                return Promise.resolve(e[1]);
                                            })
                                            .catch(function (e) {
                                                return Promise.reject(e);
                                            })
                                    );
                                })));
                }
                function g(e) {
                    var t = (e || window.location.hash.substring(1)).split('&').reduce(function (e, t) {
                        var n = t.split('='),
                            r = y(decodeURIComponent(n[0]).replace(/\W/g, '')),
                            i = decodeURIComponent(n[1]);
                        return (e[r] = i), e;
                    }, {});
                    return t.resourceId && (t.id = t.resourceId), t;
                }
                function P(e) {
                    return '@' + (e = e || '').replace('@', '');
                }
                function b() {
                    var e;
                    return void 0 !== window.document.hidden ? (e = 'visibilitychange') : void 0 !== window.document.msHidden ? (e = 'msvisibilitychange') : void 0 !== window.document.webkitHidden && (e = 'webkitvisibilitychange'), e;
                }
                (h.suppressUnhandledPromiseMessage = !0),
                    (O.prototype._createVenmoPaymentContext = function (e, t) {
                        var n,
                            r,
                            i = this,
                            o = e.getConfiguration().gatewayConfiguration.payWithVenmo,
                            a = !1,
                            c = i._useAllowDesktopWebLogin ? 'NATIVE_WEB' : 'MOBILE_WEB';
                        if (!this._shouldCreateVenmoPaymentContext) return Promise.resolve();
                        if (this._shouldUseLegacyFlow)
                            n = e
                                .request({
                                    api: 'graphQLApi',
                                    data: {
                                        query: I.LEGACY_CREATE_PAYMENT_CONTEXT_QUERY,
                                        variables: {
                                            input: {
                                                environment: this._mobilePollingContextEnvironment,
                                                intent: 'PAY_FROM_APP'
                                            }
                                        }
                                    }
                                })
                                .then(function (e) {
                                    return e.data.createVenmoQRCodePaymentContext.venmoQRCodePaymentContext;
                                });
                        else {
                            if ((this._collectCustomerBillingAddress || this._collectCustomerShippingAddress) && !o.enrichedCustomerDataEnabled) return Promise.reject(new _(s.VENMO_ECD_DISABLED));
                            this._lineItems &&
                                this._lineItems.forEach(function (e) {
                                    e.unitTaxAmount = e.unitTaxAmount || '0';
                                }),
                                (a = Object.keys(
                                    (r = {
                                        subTotalAmount: this._subTotalAmount,
                                        discountAmount: this._discountAmount,
                                        taxAmount: this._taxAmount,
                                        shippingAmount: this._shippingAmount,
                                        totalAmount: this._totalAmount,
                                        lineItems: this._lineItems
                                    })
                                ).some(function (e) {
                                    return void 0 !== r[e];
                                })),
                                (n = e
                                    .request({
                                        api: 'graphQLApi',
                                        data: {
                                            query: I.CREATE_PAYMENT_CONTEXT_QUERY,
                                            variables: {
                                                input: {
                                                    paymentMethodUsage: this._paymentMethodUsage,
                                                    intent: 'CONTINUE',
                                                    customerClient: c,
                                                    isFinalAmount: this._isFinalAmount,
                                                    displayName: this._displayName,
                                                    paysheetDetails: {
                                                        collectCustomerBillingAddress: this._collectCustomerBillingAddress,
                                                        collectCustomerShippingAddress: this._collectCustomerShippingAddress,
                                                        transactionDetails: a ? r : void 0
                                                    }
                                                }
                                            }
                                        }
                                    })
                                    .then(function (e) {
                                        return e.data.createVenmoPaymentContext.venmoPaymentContext;
                                    }));
                        }
                        return n.then(function (n) {
                            var r = new Date(n.expiresAt) - new Date(n.createdAt);
                            clearTimeout(i._refreshPaymentContextTimeout),
                                (i._refreshPaymentContextTimeout = setTimeout(function () {
                                    i._tokenizationInProgress || i._createVenmoPaymentContext(e, !0);
                                }, 0.6666 * r)),
                                (t && i._tokenizationInProgress) || ((i._venmoPaymentContextStatus = n.status), (i._venmoPaymentContextId = n.id));
                        });
                    }),
                    (O.prototype.appSwitch = function (e) {
                        this._deepLinkReturnUrl ? (window.navigator.platform && /iPhone|iPad|iPod/.test(window.navigator.platform) ? (r.sendEvent(this._createPromise, 'venmo.appswitch.start.ios-webview'), (window.location.href = e)) : window.popupBridge && 'function' == typeof window.popupBridge.open ? (r.sendEvent(this._createPromise, 'venmo.appswitch.start.popup-bridge'), window.popupBridge.open(e)) : (r.sendEvent(this._createPromise, 'venmo.appswitch.start.webview'), window.open(e))) : (r.sendEvent(this._createPromise, 'venmo.appswitch.start.browser'), o.doesNotSupportWindowOpenInIos() || this._shouldUseRedirectStrategy() ? (window.location.href = e) : window.open(e));
                    }),
                    (O.prototype.getUrl = function () {
                        return this._createPromise.then(
                            function (e) {
                                var t = e.getConfiguration(),
                                    n = {},
                                    r = this._deepLinkReturnUrl || window.location.href.replace(window.location.hash, ''),
                                    i = t.gatewayConfiguration.payWithVenmo,
                                    o = t.analyticsMetadata,
                                    a = i.accessToken,
                                    s = {
                                        _meta: {
                                            version: o.sdkVersion,
                                            integration: o.integration,
                                            platform: o.platform,
                                            sessionId: o.sessionId
                                        }
                                    };
                                return (
                                    (this._isDebug = t.isDebug),
                                    (this._assetsUrl = t.gatewayConfiguration.assetsUrl),
                                    (r = r.replace(/#*$/, '')),
                                    this._venmoPaymentContextId && (this._shouldUseLegacyFlow ? (a += '|pcid:' + this._venmoPaymentContextId) : (n.resource_id = this._venmoPaymentContextId)),
                                    this._shouldIncludeReturnUrls() || this._useAllowDesktopWebLogin ? (this._useAllowDesktopWebLogin && (r = this._assetsUrl + '/web/' + N + '/html/redirect-frame.html'), (n['x-success'] = r + '#venmoSuccess=1'), (n['x-cancel'] = r + '#venmoCancel=1'), (n['x-error'] = r + '#venmoError=1')) : ((n['x-success'] = 'NOOP'), (n['x-cancel'] = 'NOOP'), (n['x-error'] = 'NOOP')),
                                    this._allowAndroidRecreation ? (n.allowAndroidRecreation = 1) : (n.allowAndroidRecreation = 0),
                                    (n.ua = window.navigator.userAgent),
                                    (n.braintree_merchant_id = this._profileId || i.merchantId),
                                    (n.braintree_access_token = a),
                                    (n.braintree_environment = i.environment),
                                    (n.braintree_sdk_data = btoa(JSON.stringify(s))),
                                    m({
                                        useAllowDesktopWebLogin: this._useAllowDesktopWebLogin,
                                        mobileWebFallBack: this._mobileWebFallBack
                                    }) +
                                        '?' +
                                        c.stringify(n)
                                );
                            }.bind(this)
                        );
                    }),
                    (O.prototype.isBrowserSupported = function () {
                        return i.isBrowserSupported({
                            allowNewBrowserTab: this._allowNewBrowserTab,
                            allowWebviews: this._allowWebviews,
                            allowDesktop: this._allowDesktop,
                            allowDesktopWebLogin: this._allowDesktopWebLogin
                        });
                    }),
                    (O.prototype.hasTokenizationResult = function () {
                        return this._hasTokenizationResult();
                    }),
                    (O.prototype._hasTokenizationResult = function (e) {
                        var t = g(e),
                            n = A.getUrlParams();
                        return n.resource_id && (this._venmoPaymentContextId = n.resource_id), void 0 !== (t.venmoSuccess || t.venmoError || t.venmoCancel);
                    }),
                    (O.prototype._shouldIncludeReturnUrls = function () {
                        return !!this._deepLinkReturnUrl || !this._cannotHaveReturnUrls;
                    }),
                    (O.prototype._isDesktop = function () {
                        return !(o.isIos() || o.isAndroid());
                    }),
                    (O.prototype.tokenize = function (e) {
                        var t,
                            n = this;
                        return ((e = e || {}), !0 === this._tokenizationInProgress)
                            ? Promise.reject(new _(s.VENMO_TOKENIZATION_REQUEST_ACTIVE))
                            : ((this._tokenizationInProgress = !0),
                              (this._useDesktopQRFlow ? this._tokenizeForDesktopQRFlow(e) : this._useAllowDesktopWebLogin ? this._tokenizeWebLoginWithRedirect() : this._cannotHaveReturnUrls ? this._tokenizeForMobileWithManualReturn() : this._tokenizeForMobileWithHashChangeListeners(e))
                                  .then(function (e) {
                                      return n._createPromise
                                          .then(function (e) {
                                              return n._createVenmoPaymentContext(e);
                                          })
                                          .then(function () {
                                              var t, r;
                                              return (
                                                  (n._tokenizationInProgress = !1),
                                                  (r = {
                                                      nonce: (t = e).paymentMethodNonce,
                                                      type: 'VenmoAccount',
                                                      details: {
                                                          username: P(t.username),
                                                          paymentContextId: t.id
                                                      }
                                                  }),
                                                  t.payerInfo && ((r.details.payerInfo = t.payerInfo), (r.details.payerInfo.userName = P(t.payerInfo.userName))),
                                                  r
                                              );
                                          });
                                  })
                                  .catch(function (e) {
                                      return n._createPromise
                                          .then(function (e) {
                                              return n._createVenmoPaymentContext(e);
                                          })
                                          .then(function () {
                                              return (n._tokenizationInProgress = !1), Promise.reject(e);
                                          });
                                  }));
                    }),
                    (O.prototype.cancelTokenization = function () {
                        return this._tokenizationInProgress ? (this._removeVisibilityEventListener(), this._tokenizePromise && this._tokenizePromise.reject(new _(s.VENMO_TOKENIZATION_CANCELED_BY_MERCHANT)), Promise.all([this._cancelMobilePaymentContext(), this._cancelVenmoDesktopContext()])) : Promise.reject(new _(s.VENMO_TOKENIZATION_REQUEST_NOT_ACTIVE));
                    }),
                    (O.prototype._tokenizeWebLoginWithRedirect = function () {
                        var e = this;
                        return (
                            r.sendEvent(e._createPromise, 'venmo.tokenize.web-login.start'),
                            (this._tokenizePromise = new h()),
                            this.getUrl().then(function (t) {
                                return (
                                    f
                                        .runWebLogin({
                                            checkForStatusChange: e._checkPaymentContextStatusAndProcessResult.bind(e),
                                            cancelTokenization: e.cancelTokenization.bind(e),
                                            frameServiceInstance: e._frameServiceInstance,
                                            venmoUrl: t,
                                            debug: e._isDebug,
                                            checkPaymentContextStatus: e._checkPaymentContextStatus.bind(e)
                                        })
                                        .then(function (t) {
                                            r.sendEvent(e._createPromise, 'venmo.tokenize.web-login.success'),
                                                e._tokenizePromise.resolve({
                                                    paymentMethodNonce: t.paymentMethodId,
                                                    username: t.userName,
                                                    payerInfo: t.payerInfo,
                                                    id: e._venmoPaymentContextId
                                                });
                                        })
                                        .catch(function (t) {
                                            r.sendEvent(e._createPromise, 'venmo.tokenize.web-login.failure'), e._tokenizePromise.reject(t);
                                        }),
                                    e._tokenizePromise
                                );
                            })
                        );
                    }),
                    (O.prototype._queryPaymentContextStatus = function (e) {
                        var t = this;
                        return this._createPromise
                            .then(function (n) {
                                var r = t._shouldUseLegacyFlow ? I.LEGACY_VENMO_PAYMENT_CONTEXT_STATUS_QUERY : I.VENMO_PAYMENT_CONTEXT_STATUS_QUERY;
                                return n.request({
                                    api: 'graphQLApi',
                                    data: {
                                        query: r,
                                        variables: { id: e }
                                    }
                                });
                            })
                            .then(function (e) {
                                return e.data.node;
                            });
                    }),
                    (O.prototype._checkPaymentContextStatusAndProcessResult = function (e) {
                        var t = this;
                        return t._checkPaymentContextStatus().then(function (n) {
                            var i = n.status;
                            if (i !== t._venmoPaymentContextStatus)
                                switch (((t._venmoPaymentContextStatus = i), r.sendEvent(t._createPromise, 'venmo.tokenize.web-login.status-change'), i)) {
                                    case 'APPROVED':
                                        return Promise.resolve(n);
                                    case 'CANCELED':
                                        return Promise.reject(new _(s.VENMO_CUSTOMER_CANCELED));
                                    case 'FAILED':
                                        return Promise.reject(new _(s.VENMO_TOKENIZATION_FAILED));
                                }
                            return new Promise(function (n, r) {
                                return e < t._maxRetryCount ? (e++, t._checkPaymentContextStatusAndProcessResult(e).then(n).catch(r)) : r(new _(s.VENMO_TOKENIZATION_FAILED));
                            });
                        });
                    }),
                    (O.prototype._checkPaymentContextStatus = function () {
                        return this._queryPaymentContextStatus(this._venmoPaymentContextId)
                            .catch(function (e) {
                                return Promise.reject(
                                    new _({
                                        type: s.VENMO_NETWORK_ERROR.type,
                                        code: s.VENMO_NETWORK_ERROR.code,
                                        message: s.VENMO_NETWORK_ERROR.message,
                                        details: e
                                    })
                                );
                            })
                            .then(function (e) {
                                return Promise.resolve(e);
                            });
                    }),
                    (O.prototype._pollForStatusChange = function () {
                        var e = this;
                        return Date.now() > e._mobilePollingContextExpiresIn
                            ? Promise.reject(new _(s.VENMO_MOBILE_POLLING_TOKENIZATION_TIMEOUT))
                            : this._queryPaymentContextStatus(this._venmoPaymentContextId)
                                  .catch(function (e) {
                                      return Promise.reject(
                                          new _({
                                              type: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.type,
                                              code: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.code,
                                              message: s.VENMO_MOBILE_POLLING_TOKENIZATION_NETWORK_ERROR.message,
                                              details: { originalError: e }
                                          })
                                      );
                                  })
                                  .then(function (t) {
                                      var n = t.status;
                                      if (n !== e._venmoPaymentContextStatus)
                                          switch (((e._venmoPaymentContextStatus = n), r.sendEvent(e._createPromise, 'venmo.tokenize.manual-return.status-change.' + n.toLowerCase()), n)) {
                                              case 'EXPIRED':
                                              case 'FAILED':
                                              case 'CANCELED':
                                                  return Promise.reject(new _(s['VENMO_MOBILE_POLLING_TOKENIZATION_' + n]));
                                              case 'APPROVED':
                                                  return Promise.resolve(t);
                                          }
                                      return new Promise(function (t, n) {
                                          setTimeout(function () {
                                              e._pollForStatusChange().then(t).catch(n);
                                          }, e._mobilePollingInterval);
                                      });
                                  });
                    }),
                    (O.prototype._tokenizeForMobileWithManualReturn = function () {
                        var e = this;
                        return (
                            r.sendEvent(this._createPromise, 'venmo.tokenize.manual-return.start'),
                            (this._mobilePollingContextExpiresIn = Date.now() + this._mobilePollingExpiresThreshold),
                            (this._tokenizePromise = new h()),
                            this._pollForStatusChange()
                                .then(function (t) {
                                    r.sendEvent(e._createPromise, 'venmo.tokenize.manual-return.success'),
                                        e._tokenizePromise.resolve({
                                            paymentMethodNonce: t.paymentMethodId,
                                            username: t.userName,
                                            payerInfo: t.payerInfo,
                                            id: e._venmoPaymentContextId
                                        });
                                })
                                .catch(function (t) {
                                    r.sendEvent(e._createPromise, 'venmo.tokenize.manual-return.failure'), e._tokenizePromise.reject(t);
                                }),
                            this.getUrl().then(function (t) {
                                return e.appSwitch(t), e._tokenizePromise;
                            })
                        );
                    }),
                    (O.prototype._shouldUseRedirectStrategy = function () {
                        return !!o.isIos() && (!0 === this._mobileWebFallBack || this._useRedirectForIOS);
                    }),
                    (O.prototype._tokenizeForMobileWithHashChangeListeners = function (e) {
                        var t,
                            n,
                            i = this;
                        if (this.hasTokenizationResult()) return this.processHashChangeFlowResults();
                        function o(e) {
                            var t;
                            i.processHashChangeFlowResults(e)
                                .catch(function (e) {
                                    t = e;
                                })
                                .then(function (e) {
                                    i._ignoreHistoryChanges || window.location.hash === i._previousHash || (window.location.hash = i._previousHash), i._removeVisibilityEventListener(), t ? i._tokenizePromise.reject(t) : i._tokenizePromise.resolve(e), delete i._tokenizePromise;
                                });
                        }
                        return (
                            r.sendEvent(this._createPromise, 'venmo.tokenize.mobile.start'),
                            (this._tokenizePromise = new h()),
                            (this._previousHash = window.location.hash),
                            (this._onHashChangeListener = function (e) {
                                var r = e.newURL.split('#')[1];
                                i._hasTokenizationResult(r) && ((t = !0), clearTimeout(n), o(r));
                            }),
                            window.addEventListener('hashchange', this._onHashChangeListener, !1),
                            (this._visibilityChangeListener = function () {
                                var r = e.processResultsDelay || a.DEFAULT_PROCESS_RESULTS_DELAY;
                                window.document.hidden || t || (n = setTimeout(o, r));
                            }),
                            this.getUrl().then(function (e) {
                                return (
                                    i.appSwitch(e),
                                    setTimeout(function () {
                                        window.document.addEventListener(b(), i._visibilityChangeListener);
                                    }, a.DOCUMENT_VISIBILITY_CHANGE_EVENT_DELAY),
                                    i._tokenizePromise
                                );
                            })
                        );
                    }),
                    (O.prototype._tokenizeForDesktopQRFlow = function () {
                        var e = this;
                        return (
                            r.sendEvent(this._createPromise, 'venmo.tokenize.desktop.start'),
                            (this._tokenizePromise = new h()),
                            this._createPromise
                                .then(function () {
                                    return e._venmoDesktopInstance.launchDesktopFlow();
                                })
                                .then(function (t) {
                                    e._venmoDesktopInstance.hideDesktopFlow(), r.sendEvent(e._createPromise, 'venmo.tokenize.desktop.success'), e._tokenizePromise.resolve(t);
                                })
                                .catch(function (t) {
                                    if ((r.sendEvent(e._createPromise, 'venmo.tokenize.desktop.failure'), e._venmoDesktopInstance && e._venmoDesktopInstance.hideDesktopFlow(), t && 'CUSTOMER_CANCELED' === t.reason)) return void e._tokenizePromise.reject(new _(s.VENMO_DESKTOP_CANCELED));
                                    e._tokenizePromise.reject(
                                        new _({
                                            type: s.VENMO_DESKTOP_UNKNOWN_ERROR.type,
                                            code: s.VENMO_DESKTOP_UNKNOWN_ERROR.code,
                                            message: s.VENMO_DESKTOP_UNKNOWN_ERROR.message,
                                            details: { originalError: t }
                                        })
                                    );
                                }),
                            this._tokenizePromise
                        );
                    }),
                    (O.prototype._cancelMobilePaymentContext = function () {
                        var e = this;
                        return this._createPromise.then(function (t) {
                            var n;
                            return e._venmoPaymentContextId
                                ? ((n = e._shouldUseLegacyFlow ? I.LEGACY_UPDATE_PAYMENT_CONTEXT_QUERY : I.UPDATE_PAYMENT_CONTEXT_QUERY),
                                  t.request({
                                      api: 'graphQLApi',
                                      data: {
                                          query: n,
                                          variables: {
                                              input: {
                                                  id: e._venmoPaymentContextId,
                                                  status: 'CANCELED'
                                              }
                                          }
                                      }
                                  }))
                                : Promise.resolve();
                        });
                    }),
                    (O.prototype._cancelVenmoDesktopContext = function () {
                        var e = this;
                        return this._createPromise.then(function () {
                            return e._venmoDesktopInstance && e._venmoDesktopInstance.updateVenmoDesktopPaymentContext('CANCELED'), Promise.resolve();
                        });
                    }),
                    (O.prototype.teardown = function () {
                        var e = this;
                        return (
                            this._removeVisibilityEventListener(),
                            this._createPromise.then(
                                function () {
                                    e._venmoDesktopInstance && e._venmoDesktopInstance.teardown(), clearTimeout(e._refreshPaymentContextTimeout), e._cancelMobilePaymentContext(), u(this, l(O.prototype));
                                }.bind(this)
                            )
                        );
                    }),
                    (O.prototype._removeVisibilityEventListener = function () {
                        window.removeEventListener('hashchange', this._onHashChangeListener), window.document.removeEventListener(b(), this._visibilityChangeListener), delete this._visibilityChangeListener, delete this._onHashChangeListener;
                    }),
                    (O.prototype.processHashChangeFlowResults = function (e) {
                        var t = this,
                            n = g(e);
                        return new Promise(function (e, i) {
                            t._shouldUseLegacyFlow
                                ? n.venmoSuccess
                                    ? (r.sendEvent(t._createPromise, 'venmo.appswitch.handle.success'), e(n))
                                    : n.venmoError
                                      ? (r.sendEvent(t._createPromise, 'venmo.appswitch.handle.error'),
                                        i(
                                            new _({
                                                type: s.VENMO_APP_FAILED.type,
                                                code: s.VENMO_APP_FAILED.code,
                                                message: s.VENMO_APP_FAILED.message,
                                                details: {
                                                    originalError: {
                                                        message: decodeURIComponent(n.errorMessage),
                                                        code: n.errorCode
                                                    }
                                                }
                                            })
                                        ))
                                      : n.venmoCancel
                                        ? (r.sendEvent(t._createPromise, 'venmo.appswitch.handle.cancel'), i(new _(s.VENMO_APP_CANCELED)))
                                        : (r.sendEvent(t._createPromise, 'venmo.appswitch.cancel-or-unavailable'), i(new _(s.VENMO_CANCELED)))
                                : t
                                      ._pollForStatusChange()
                                      .then(function (n) {
                                          return (
                                              r.sendEvent(t._createPromise, 'venmo.appswitch.handle.payment-context-status-query.success'),
                                              e({
                                                  paymentMethodNonce: n.paymentMethodId,
                                                  username: n.userName,
                                                  payerInfo: n.payerInfo,
                                                  id: t._venmoPaymentContextId
                                              })
                                          );
                                      })
                                      .catch(function (o) {
                                          o.type === s.VENMO_MOBILE_POLLING_TOKENIZATION_CANCELED.type && i(o), r.sendEvent(t._createPromise, 'venmo.process-results.payment-context-status-query-failed'), e(n);
                                      }),
                                t._clearFragmentParameters();
                        });
                    }),
                    (O.prototype._clearFragmentParameters = function () {
                        !this._ignoreHistoryChanges && 'function' == typeof window.history.replaceState && window.location.hash && history.pushState({}, '', window.location.href.slice(0, window.location.href.indexOf('#')));
                    }),
                    (t.exports = p.wrapPrototype(O));
            },
            {
                '../lib/analytics': 138,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/in-iframe': 169,
                '../lib/is-verified-domain': 173,
                '../lib/methods': 175,
                '../lib/querystring': 177,
                '../lib/snake-case-to-camel-case': 179,
                '../lib/url-params': 180,
                './external/': 234,
                './external/queries': 235,
                './shared/browser-detection': 238,
                './shared/constants': 239,
                './shared/errors': 240,
                './shared/get-venmo-url': 242,
                './shared/supports-venmo': 243,
                './shared/web-login-backdrop': 244,
                '@braintree/extended-promise': 31,
                '@braintree/wrap-promise': 40
            }
        ],
        246: [
            function (e, t, n) {
                var r = e('../lib/braintree-error');
                t.exports = {
                    VISA_CHECKOUT_NOT_ENABLED: {
                        type: r.types.MERCHANT,
                        code: 'VISA_CHECKOUT_NOT_ENABLED',
                        message: 'Visa Checkout is not enabled for this merchant.'
                    },
                    VISA_CHECKOUT_INIT_OPTIONS_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'VISA_CHECKOUT_INIT_OPTIONS_REQUIRED',
                        message: 'initOptions requires an object.'
                    },
                    VISA_CHECKOUT_PAYMENT_REQUIRED: {
                        type: r.types.MERCHANT,
                        code: 'VISA_CHECKOUT_PAYMENT_REQUIRED',
                        message: 'tokenize requires callid, encKey, and encPaymentData.'
                    },
                    VISA_CHECKOUT_TOKENIZATION: {
                        type: r.types.NETWORK,
                        code: 'VISA_CHECKOUT_TOKENIZATION',
                        message: 'A network error occurred when processing the Visa Checkout payment.'
                    }
                };
            },
            { '../lib/braintree-error': 143 }
        ],
        247: [
            function (e, t, n) {
                var r = e('../lib/basic-component-verification'),
                    i = e('../lib/braintree-error'),
                    o = e('../lib/create-deferred-client'),
                    a = e('../lib/create-assets-url'),
                    s = e('./visa-checkout'),
                    c = e('../lib/analytics'),
                    d = e('./errors');
                t.exports = {
                    create: e('@braintree/wrap-promise')(function (e) {
                        var t = 'Visa Checkout';
                        return r
                            .verify({
                                name: t,
                                client: e.client,
                                authorization: e.authorization
                            })
                            .then(function () {
                                return o.create({
                                    authorization: e.authorization,
                                    client: e.client,
                                    debug: e.debug,
                                    assetsUrl: a.create(e.authorization),
                                    name: t
                                });
                            })
                            .then(function (t) {
                                return ((e.client = t), e.client.getConfiguration().gatewayConfiguration.visaCheckout) ? (c.sendEvent(e.client, 'visacheckout.initialized'), new s(e)) : Promise.reject(new i(d.VISA_CHECKOUT_NOT_ENABLED));
                            });
                    }),
                    VERSION: '3.112.1'
                };
            },
            {
                '../lib/analytics': 138,
                '../lib/basic-component-verification': 141,
                '../lib/braintree-error': 143,
                '../lib/create-assets-url': 148,
                '../lib/create-deferred-client': 150,
                './errors': 246,
                './visa-checkout': 248,
                '@braintree/wrap-promise': 40
            }
        ],
        248: [
            function (e, t, n) {
                var r = e('../lib/braintree-error'),
                    i = e('../lib/analytics'),
                    o = e('./errors'),
                    a = e('../lib/json-clone'),
                    s = e('../lib/methods'),
                    c = e('../lib/convert-methods-to-error'),
                    d = e('@braintree/wrap-promise'),
                    l = {
                        Visa: 'VISA',
                        MasterCard: 'MASTERCARD',
                        Discover: 'DISCOVER',
                        'American Express': 'AMEX'
                    };
                function u(e) {
                    this._client = e.client;
                }
                (u.prototype.createInitOptions = function (e) {
                    var t,
                        n = this._client.getConfiguration().gatewayConfiguration,
                        i = n.visaCheckout;
                    if (!e) throw new r(o.VISA_CHECKOUT_INIT_OPTIONS_REQUIRED);
                    return (
                        ((t = a(e)).apikey = t.apikey || i.apikey),
                        (t.encryptionKey = i.encryptionKey),
                        (t.externalClientId = t.externalClientId || i.externalClientId),
                        (t.settings = t.settings || {}),
                        (t.settings.dataLevel = 'FULL'),
                        (t.settings.payment = t.settings.payment || {}),
                        t.settings.payment.cardBrands ||
                            (t.settings.payment.cardBrands = n.visaCheckout.supportedCardTypes.reduce(function (e, t) {
                                return l.hasOwnProperty(t) ? e.concat(l[t]) : e;
                            }, [])),
                        t
                    );
                }),
                    (u.prototype.tokenize = function (e) {
                        var t = this;
                        return e.callid && e.encKey && e.encPaymentData
                            ? this._client
                                  .request({
                                      method: 'post',
                                      endpoint: 'payment_methods/visa_checkout_cards',
                                      data: {
                                          _meta: { source: 'visa-checkout' },
                                          visaCheckoutCard: {
                                              callId: e.callid,
                                              encryptedPaymentData: e.encPaymentData,
                                              encryptedKey: e.encKey
                                          }
                                      }
                                  })
                                  .then(function (e) {
                                      return i.sendEvent(t._client, 'visacheckout.tokenize.succeeded'), e.visaCheckoutCards[0];
                                  })
                                  .catch(function (e) {
                                      return (
                                          i.sendEvent(t._client, 'visacheckout.tokenize.failed'),
                                          Promise.reject(
                                              new r({
                                                  type: o.VISA_CHECKOUT_TOKENIZATION.type,
                                                  code: o.VISA_CHECKOUT_TOKENIZATION.code,
                                                  message: o.VISA_CHECKOUT_TOKENIZATION.message,
                                                  details: { originalError: e }
                                              })
                                          )
                                      );
                                  })
                            : Promise.reject(new r(o.VISA_CHECKOUT_PAYMENT_REQUIRED));
                    }),
                    (u.prototype.teardown = function () {
                        return c(this, s(u.prototype)), Promise.resolve();
                    }),
                    (t.exports = d.wrapPrototype(u));
            },
            {
                '../lib/analytics': 138,
                '../lib/braintree-error': 143,
                '../lib/convert-methods-to-error': 146,
                '../lib/json-clone': 174,
                '../lib/methods': 175,
                './errors': 246,
                '@braintree/wrap-promise': 40
            }
        ]
    },
    {},
    [136]
)(136);
