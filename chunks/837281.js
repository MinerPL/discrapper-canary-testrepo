var t, n;
(t = 0),
    (n = function () {
        function e(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t &&
                    (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
            }
            return n;
        }
        function t(t) {
            for (var n = 1; n < arguments.length; n++) {
                var r = null != arguments[n] ? arguments[n] : {};
                n % 2
                    ? e(Object(r), !0).forEach(function (e) {
                          var n, i, a;
                          (n = t),
                              (i = e),
                              (a = r[e]),
                              i in n
                                  ? Object.defineProperty(n, i, {
                                        value: a,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    })
                                  : (n[i] = a);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                      : e(Object(r)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                        });
            }
            return t;
        }
        function n(e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        }
        function r(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) {
                        var n = [],
                            r = !0,
                            i = !1,
                            a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (n.push(s.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            (i = !0), (a = e);
                        } finally {
                            try {
                                r || null == o.return || o.return();
                            } finally {
                                if (i) throw a;
                            }
                        }
                        return n;
                    }
                })(e, t) ||
                (function () {
                    throw TypeError('Invalid attempt to destructure non-iterable instance');
                })()
            );
        }
        function i(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) {
                        for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                        return n;
                    }
                })(e) ||
                (function (e) {
                    if (Symbol.iterator in Object(e) || '[object Arguments]' === Object.prototype.toString.call(e)) return Array.from(e);
                })(e) ||
                (function () {
                    throw TypeError('Invalid attempt to spread non-iterable instance');
                })()
            );
        }
        function a() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: !0 },
                t = {};
            return {
                get: function (n, r) {
                    var i =
                            arguments.length > 2 && void 0 !== arguments[2]
                                ? arguments[2]
                                : {
                                      miss: function () {
                                          return Promise.resolve();
                                      }
                                  },
                        a = JSON.stringify(n);
                    if (a in t) return Promise.resolve(e.serializable ? JSON.parse(t[a]) : t[a]);
                    var s = r(),
                        o =
                            (i && i.miss) ||
                            function () {
                                return Promise.resolve();
                            };
                    return s
                        .then(function (e) {
                            return o(e);
                        })
                        .then(function () {
                            return s;
                        });
                },
                set: function (n, r) {
                    return (t[JSON.stringify(n)] = e.serializable ? JSON.stringify(r) : r), Promise.resolve(r);
                },
                delete: function (e) {
                    return delete t[JSON.stringify(e)], Promise.resolve();
                },
                clear: function () {
                    return (t = {}), Promise.resolve();
                }
            };
        }
        function s(e, t, n) {
            var r = {
                'x-algolia-api-key': n,
                'x-algolia-application-id': t
            };
            return {
                headers: function () {
                    return e === d.WithinHeaders ? r : {};
                },
                queryParameters: function () {
                    return e === d.WithinQueryParameters ? r : {};
                }
            };
        }
        function o(e) {
            var t = 0;
            return e(function n() {
                return (
                    t++,
                    new Promise(function (r) {
                        setTimeout(
                            function () {
                                r(e(n));
                            },
                            Math.min(100 * t, 1000)
                        );
                    })
                );
            });
        }
        function l(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : function (e, t) {
                          return Promise.resolve();
                      };
            return Object.assign(e, {
                wait: function (n) {
                    return l(
                        e
                            .then(function (e) {
                                return Promise.all([t(e, n), e]);
                            })
                            .then(function (e) {
                                return e[1];
                            })
                    );
                }
            });
        }
        function u(e, t) {
            return (
                t &&
                    Object.keys(t).forEach(function (n) {
                        e[n] = t[n](e);
                    }),
                e
            );
        }
        function c(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var i = 0;
            return e.replace(/%s/g, function () {
                return encodeURIComponent(n[i++]);
            });
        }
        var d = {
            WithinQueryParameters: 0,
            WithinHeaders: 1
        };
        function _(e, t) {
            var n = e || {},
                r = n.data || {};
            return (
                Object.keys(n).forEach(function (e) {
                    -1 === ['timeout', 'headers', 'queryParameters', 'data', 'cacheable'].indexOf(e) && (r[e] = n[e]);
                }),
                {
                    data: Object.entries(r).length > 0 ? r : void 0,
                    timeout: n.timeout || t,
                    headers: n.headers || {},
                    queryParameters: n.queryParameters || {},
                    cacheable: n.cacheable
                }
            );
        }
        var E = {
            Read: 1,
            Write: 2,
            Any: 3
        };
        function f(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
            return t(
                t({}, e),
                {},
                {
                    status: n,
                    lastUpdate: Date.now()
                }
            );
        }
        function h(e) {
            return 'string' == typeof e
                ? {
                      protocol: 'https',
                      url: e,
                      accept: E.Any
                  }
                : {
                      protocol: e.protocol || 'https',
                      url: e.url,
                      accept: e.accept || E.Any
                  };
        }
        var p = 'DELETE',
            m = 'POST';
        function I(e, n, r, a) {
            var s,
                o,
                l,
                u,
                c,
                d,
                _ = [],
                E = (function (e, n) {
                    if ('GET' !== e.method && (void 0 !== e.data || void 0 !== n.data)) return JSON.stringify(Array.isArray(e.data) ? e.data : t(t({}, e.data), n.data));
                })(r, a),
                p =
                    ((s = e),
                    (o = a),
                    (l = t(t({}, s.headers), o.headers)),
                    (u = {}),
                    Object.keys(l).forEach(function (e) {
                        var t = l[e];
                        u[e.toLowerCase()] = t;
                    }),
                    u),
                m = r.method,
                I = 'GET' !== r.method ? {} : t(t({}, r.data), a.data),
                T = t(t(t({ 'x-algolia-agent': e.userAgent.value }, e.queryParameters), I), a.queryParameters),
                N = 0,
                v = function t(n, i) {
                    var s = n.pop();
                    if (void 0 === s)
                        throw {
                            name: 'RetryError',
                            message: 'Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.',
                            transporterStackTrace: S(_)
                        };
                    var o = {
                            data: E,
                            headers: p,
                            method: m,
                            url: (function (e, t, n) {
                                var r = g(n),
                                    i = ''
                                        .concat(e.protocol, '://')
                                        .concat(e.url, '/')
                                        .concat('/' === t.charAt(0) ? t.substr(1) : t);
                                return r.length && (i += '?'.concat(r)), i;
                            })(s, r.path, T),
                            connectTimeout: i(N, e.timeouts.connect),
                            responseTimeout: i(N, a.timeout)
                        },
                        l = function (e) {
                            var t = {
                                request: o,
                                response: e,
                                host: s,
                                triesLeft: n.length
                            };
                            return _.push(t), t;
                        },
                        u = {
                            onSuccess: function (e) {
                                return (function (e) {
                                    try {
                                        return JSON.parse(e.content);
                                    } catch (n) {
                                        var t;
                                        throw (
                                            ((t = n.message),
                                            {
                                                name: 'DeserializationError',
                                                message: t,
                                                response: e
                                            })
                                        );
                                    }
                                })(e);
                            },
                            onRetry: function (r) {
                                var a = l(r);
                                return (
                                    r.isTimedOut && N++,
                                    Promise.all([e.logger.info('Retryable failure', A(a)), e.hostsCache.set(s, f(s, r.isTimedOut ? 3 : 2))]).then(function () {
                                        return t(n, i);
                                    })
                                );
                            },
                            onFail: function (e) {
                                throw (
                                    (l(e),
                                    (function (e, t) {
                                        var n = e.content,
                                            r = e.status,
                                            i = n;
                                        try {
                                            i = JSON.parse(n).message;
                                        } catch (e) {}
                                        return {
                                            name: 'ApiError',
                                            message: i,
                                            status: r,
                                            transporterStackTrace: t
                                        };
                                    })(e, S(_)))
                                );
                            }
                        };
                    return e.requester.send(o).then(function (e) {
                        var t, n, r, i, a, s, o;
                        return (t = e), (n = u), ((i = (r = t).status), r.isTimedOut || ((s = (a = r).isTimedOut), (o = a.status), !s && 0 == ~~o) || (2 != ~~(i / 100) && 4 != ~~(i / 100))) ? n.onRetry(t) : 2 == ~~(t.status / 100) ? n.onSuccess(t) : n.onFail(t);
                    });
                };
            return ((c = e.hostsCache),
            Promise.all(
                (d = n).map(function (e) {
                    return c.get(e, function () {
                        return Promise.resolve(f(e));
                    });
                })
            ).then(function (e) {
                var t = e.filter(function (e) {
                        var t;
                        return 1 === (t = e).status || Date.now() - t.lastUpdate > 120000;
                    }),
                    n = e.filter(function (e) {
                        var t;
                        return 3 === (t = e).status && Date.now() - t.lastUpdate <= 120000;
                    }),
                    r = [].concat(i(t), i(n));
                return {
                    getTimeout: function (e, t) {
                        return (0 === n.length && 0 === e ? 1 : n.length + 3 + e) * t;
                    },
                    statelessHosts:
                        r.length > 0
                            ? r.map(function (e) {
                                  return h(e);
                              })
                            : d
                };
            })).then(function (e) {
                return v(i(e.statelessHosts).reverse(), e.getTimeout);
            });
        }
        function T(e) {
            var t = e.hostsCache,
                n = e.logger,
                i = e.requester,
                a = e.requestsCache,
                s = e.responsesCache,
                o = e.timeouts,
                l = e.userAgent,
                u = e.hosts,
                c = e.queryParameters,
                d = {
                    hostsCache: t,
                    logger: n,
                    requester: i,
                    requestsCache: a,
                    responsesCache: s,
                    timeouts: o,
                    userAgent: l,
                    headers: e.headers,
                    queryParameters: c,
                    hosts: u.map(function (e) {
                        return h(e);
                    }),
                    read: function (e, t) {
                        var n = _(t, d.timeouts.read),
                            i = function () {
                                return I(
                                    d,
                                    d.hosts.filter(function (e) {
                                        return 0 != (e.accept & E.Read);
                                    }),
                                    e,
                                    n
                                );
                            };
                        if (!0 !== (void 0 !== n.cacheable ? n.cacheable : e.cacheable)) return i();
                        var a = {
                            request: e,
                            mappedRequestOptions: n,
                            transporter: {
                                queryParameters: d.queryParameters,
                                headers: d.headers
                            }
                        };
                        return d.responsesCache.get(
                            a,
                            function () {
                                return d.requestsCache.get(a, function () {
                                    return d.requestsCache
                                        .set(a, i())
                                        .then(
                                            function (e) {
                                                return Promise.all([d.requestsCache.delete(a), e]);
                                            },
                                            function (e) {
                                                return Promise.all([d.requestsCache.delete(a), Promise.reject(e)]);
                                            }
                                        )
                                        .then(function (e) {
                                            var t = r(e, 2);
                                            return t[0], t[1];
                                        });
                                });
                            },
                            {
                                miss: function (e) {
                                    return d.responsesCache.set(a, e);
                                }
                            }
                        );
                    },
                    write: function (e, t) {
                        return I(
                            d,
                            d.hosts.filter(function (e) {
                                return 0 != (e.accept & E.Write);
                            }),
                            e,
                            _(t, d.timeouts.write)
                        );
                    }
                };
            return d;
        }
        function g(e) {
            return Object.keys(e)
                .map(function (t) {
                    var n;
                    return c('%s=%s', t, ((n = e[t]), '[object Object]' === Object.prototype.toString.call(n) || '[object Array]' === Object.prototype.toString.call(n) ? JSON.stringify(e[t]) : e[t]));
                })
                .join('&');
        }
        function S(e) {
            return e.map(function (e) {
                return A(e);
            });
        }
        function A(e) {
            var n = e.request.headers['x-algolia-api-key'] ? { 'x-algolia-api-key': '*****' } : {};
            return t(t({}, e), {}, { request: t(t({}, e.request), {}, { headers: t(t({}, e.request.headers), n) }) });
        }
        var N = function (e) {
                return function (t, n) {
                    return e.transporter.write(
                        {
                            method: m,
                            path: '2/abtests',
                            data: t
                        },
                        n
                    );
                };
            },
            v = function (e) {
                return function (t, n) {
                    return e.transporter.write(
                        {
                            method: p,
                            path: c('2/abtests/%s', t)
                        },
                        n
                    );
                };
            },
            O = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('2/abtests/%s', t)
                        },
                        n
                    );
                };
            },
            R = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '2/abtests'
                        },
                        t
                    );
                };
            },
            C = function (e) {
                return function (t, n) {
                    return e.transporter.write(
                        {
                            method: m,
                            path: c('2/abtests/%s/stop', t)
                        },
                        n
                    );
                };
            },
            y = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/strategies/personalization'
                        },
                        t
                    );
                };
            },
            D = function (e) {
                return function (t, n) {
                    return e.transporter.write(
                        {
                            method: m,
                            path: '1/strategies/personalization',
                            data: t
                        },
                        n
                    );
                };
            };
        function L(e) {
            return (function t(n) {
                return e.request(n).then(function (r) {
                    if ((void 0 !== e.batch && e.batch(r.hits), !e.shouldStop(r))) return r.cursor ? t({ cursor: r.cursor }) : t({ page: (n.page || 0) + 1 });
                });
            })({});
        }
        var b = function (e) {
                return function (r, i) {
                    var a = i || {},
                        s = a.queryParameters,
                        u = n(a, ['queryParameters']),
                        c = t({ acl: r }, void 0 !== s ? { queryParameters: s } : {});
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: '1/keys',
                                data: c
                            },
                            u
                        ),
                        function (t, n) {
                            return o(function (r) {
                                return H(e)(t.key, n).catch(function (e) {
                                    if (404 !== e.status) throw e;
                                    return r();
                                });
                            });
                        }
                    );
                };
            },
            M = function (e) {
                return function (t, n, r) {
                    var i = _(r);
                    return (
                        (i.queryParameters['X-Algolia-User-ID'] = t),
                        e.transporter.write(
                            {
                                method: m,
                                path: '1/clusters/mapping',
                                data: { cluster: n }
                            },
                            i
                        )
                    );
                };
            },
            P = function (e) {
                return function (t, n, r) {
                    return e.transporter.write(
                        {
                            method: m,
                            path: '1/clusters/mapping/batch',
                            data: {
                                users: t,
                                cluster: n
                            }
                        },
                        r
                    );
                };
            },
            U = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('/1/dictionaries/%s/batch', t),
                                data: {
                                    clearExistingDictionaryEntries: !0,
                                    requests: {
                                        action: 'addEntry',
                                        body: []
                                    }
                                }
                            },
                            n
                        ),
                        function (t, n) {
                            return eE(e)(t.taskID, n);
                        }
                    );
                };
            },
            w = function (e) {
                return function (t, n, r) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('1/indexes/%s/operation', t),
                                data: {
                                    operation: 'copy',
                                    destination: n
                                }
                            },
                            r
                        ),
                        function (n, r) {
                            return q(e)(t, { methods: { waitTask: eJ } }).waitTask(n.taskID, r);
                        }
                    );
                };
            },
            x = function (e) {
                return function (n, r, i) {
                    return w(e)(n, r, t(t({}, i), {}, { scope: [e1.Rules] }));
                };
            },
            G = function (e) {
                return function (n, r, i) {
                    return w(e)(n, r, t(t({}, i), {}, { scope: [e1.Settings] }));
                };
            },
            k = function (e) {
                return function (n, r, i) {
                    return w(e)(n, r, t(t({}, i), {}, { scope: [e1.Synonyms] }));
                };
            },
            B = function (e) {
                return function (t, n) {
                    return 'GET' === t.method ? e.transporter.read(t, n) : e.transporter.write(t, n);
                };
            },
            F = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: p,
                                path: c('1/keys/%s', t)
                            },
                            n
                        ),
                        function (n, r) {
                            return o(function (n) {
                                return H(e)(t, r)
                                    .then(n)
                                    .catch(function (e) {
                                        if (404 !== e.status) throw e;
                                    });
                            });
                        }
                    );
                };
            },
            V = function (e) {
                return function (t, n, r) {
                    var i = n.map(function (e) {
                        return {
                            action: 'deleteEntry',
                            body: { objectID: e }
                        };
                    });
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('/1/dictionaries/%s/batch', t),
                                data: {
                                    clearExistingDictionaryEntries: !1,
                                    requests: i
                                }
                            },
                            r
                        ),
                        function (t, n) {
                            return eE(e)(t.taskID, n);
                        }
                    );
                };
            },
            H = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/keys/%s', t)
                        },
                        n
                    );
                };
            },
            Z = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/task/%s', t.toString())
                        },
                        n
                    );
                };
            },
            Y = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '/1/dictionaries/*/settings'
                        },
                        t
                    );
                };
            },
            j = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/logs'
                        },
                        t
                    );
                };
            },
            W = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/clusters/mapping/top'
                        },
                        t
                    );
                };
            },
            K = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/clusters/mapping/%s', t)
                        },
                        n
                    );
                };
            },
            z = function (e) {
                return function (t) {
                    var r = t || {},
                        i = r.retrieveMappings,
                        a = n(r, ['retrieveMappings']);
                    return (
                        !0 === i && (a.getClusters = !0),
                        e.transporter.read(
                            {
                                method: 'GET',
                                path: '1/clusters/mapping/pending'
                            },
                            a
                        )
                    );
                };
            },
            q = function (e) {
                return function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return u(
                        {
                            transporter: e.transporter,
                            appId: e.appId,
                            indexName: t
                        },
                        n.methods
                    );
                };
            },
            Q = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/keys'
                        },
                        t
                    );
                };
            },
            X = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/clusters'
                        },
                        t
                    );
                };
            },
            $ = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/indexes'
                        },
                        t
                    );
                };
            },
            J = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: '1/clusters/mapping'
                        },
                        t
                    );
                };
            },
            ee = function (e) {
                return function (t, n, r) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('1/indexes/%s/operation', t),
                                data: {
                                    operation: 'move',
                                    destination: n
                                }
                            },
                            r
                        ),
                        function (n, r) {
                            return q(e)(t, { methods: { waitTask: eJ } }).waitTask(n.taskID, r);
                        }
                    );
                };
            },
            et = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: '1/indexes/*/batch',
                                data: { requests: t }
                            },
                            n
                        ),
                        function (t, n) {
                            return Promise.all(
                                Object.keys(t.taskID).map(function (r) {
                                    return q(e)(r, { methods: { waitTask: eJ } }).waitTask(t.taskID[r], n);
                                })
                            );
                        }
                    );
                };
            },
            en = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/objects',
                            data: { requests: t }
                        },
                        n
                    );
                };
            },
            er = function (e) {
                return function (n, r) {
                    var i = n.map(function (e) {
                        return t(t({}, e), {}, { params: g(e.params || {}) });
                    });
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/queries',
                            data: { requests: i },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            ei = function (e) {
                return function (r, i) {
                    return Promise.all(
                        r.map(function (r) {
                            var a = r.params,
                                s = a.facetName,
                                o = a.facetQuery,
                                l = n(a, ['facetName', 'facetQuery']);
                            return q(e)(r.indexName, { methods: { searchForFacetValues: eq } }).searchForFacetValues(s, o, t(t({}, i), l));
                        })
                    );
                };
            },
            ea = function (e) {
                return function (t, n) {
                    var r = _(n);
                    return (
                        (r.queryParameters['X-Algolia-User-ID'] = t),
                        e.transporter.write(
                            {
                                method: p,
                                path: '1/clusters/mapping'
                            },
                            r
                        )
                    );
                };
            },
            es = function (e) {
                return function (t, n, r) {
                    var i = n.map(function (e) {
                        return {
                            action: 'addEntry',
                            body: e
                        };
                    });
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('/1/dictionaries/%s/batch', t),
                                data: {
                                    clearExistingDictionaryEntries: !0,
                                    requests: i
                                }
                            },
                            r
                        ),
                        function (t, n) {
                            return eE(e)(t.taskID, n);
                        }
                    );
                };
            },
            eo = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('1/keys/%s/restore', t)
                            },
                            n
                        ),
                        function (n, r) {
                            return o(function (n) {
                                return H(e)(t, r).catch(function (e) {
                                    if (404 !== e.status) throw e;
                                    return n();
                                });
                            });
                        }
                    );
                };
            },
            el = function (e) {
                return function (t, n, r) {
                    var i = n.map(function (e) {
                        return {
                            action: 'addEntry',
                            body: e
                        };
                    });
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('/1/dictionaries/%s/batch', t),
                                data: {
                                    clearExistingDictionaryEntries: !1,
                                    requests: i
                                }
                            },
                            r
                        ),
                        function (t, n) {
                            return eE(e)(t.taskID, n);
                        }
                    );
                };
            },
            eu = function (e) {
                return function (t, n, r) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: c('/1/dictionaries/%s/search', t),
                            data: { query: n },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            ec = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/clusters/mapping/search',
                            data: { query: t }
                        },
                        n
                    );
                };
            },
            ed = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: 'PUT',
                                path: '/1/dictionaries/*/settings',
                                data: t
                            },
                            n
                        ),
                        function (t, n) {
                            return eE(e)(t.taskID, n);
                        }
                    );
                };
            },
            e_ = function (e) {
                return function (t, r) {
                    var i = Object.assign({}, r),
                        a = r || {},
                        s = a.queryParameters,
                        u = n(a, ['queryParameters']),
                        d = ['acl', 'indexes', 'referers', 'restrictSources', 'queryParameters', 'description', 'maxQueriesPerIPPerHour', 'maxHitsPerQuery'];
                    return l(
                        e.transporter.write(
                            {
                                method: 'PUT',
                                path: c('1/keys/%s', t),
                                data: s ? { queryParameters: s } : {}
                            },
                            u
                        ),
                        function (n, r) {
                            return o(function (n) {
                                return H(e)(t, r).then(function (e) {
                                    var t;
                                    return ((t = e),
                                    Object.keys(i)
                                        .filter(function (e) {
                                            return -1 !== d.indexOf(e);
                                        })
                                        .every(function (e) {
                                            if (Array.isArray(t[e]) && Array.isArray(i[e])) {
                                                var n = t[e];
                                                return (
                                                    n.length === i[e].length &&
                                                    n.every(function (t, n) {
                                                        return t === i[e][n];
                                                    })
                                                );
                                            }
                                            return t[e] === i[e];
                                        }))
                                        ? Promise.resolve()
                                        : n();
                                });
                            });
                        }
                    );
                };
            },
            eE = function (e) {
                return function (t, n) {
                    return o(function (r) {
                        return Z(e)(t, n).then(function (e) {
                            return 'published' !== e.status ? r() : void 0;
                        });
                    });
                };
            },
            ef = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('1/indexes/%s/batch', e.indexName),
                                data: { requests: t }
                            },
                            n
                        ),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            eh = function (e) {
                return function (n) {
                    return L(
                        t(
                            t(
                                {
                                    shouldStop: function (e) {
                                        return void 0 === e.cursor;
                                    }
                                },
                                n
                            ),
                            {},
                            {
                                request: function (t) {
                                    return e.transporter.read(
                                        {
                                            method: m,
                                            path: c('1/indexes/%s/browse', e.indexName),
                                            data: t
                                        },
                                        n
                                    );
                                }
                            }
                        )
                    );
                };
            },
            ep = function (e) {
                return function (n) {
                    var r = t({ hitsPerPage: 1000 }, n);
                    return L(
                        t(
                            t(
                                {
                                    shouldStop: function (e) {
                                        return e.hits.length < r.hitsPerPage;
                                    }
                                },
                                r
                            ),
                            {},
                            {
                                request: function (n) {
                                    return eQ(e)('', t(t({}, r), n)).then(function (e) {
                                        return t(
                                            t({}, e),
                                            {},
                                            {
                                                hits: e.hits.map(function (e) {
                                                    return delete e._highlightResult, e;
                                                })
                                            }
                                        );
                                    });
                                }
                            }
                        )
                    );
                };
            },
            em = function (e) {
                return function (n) {
                    var r = t({ hitsPerPage: 1000 }, n);
                    return L(
                        t(
                            t(
                                {
                                    shouldStop: function (e) {
                                        return e.hits.length < r.hitsPerPage;
                                    }
                                },
                                r
                            ),
                            {},
                            {
                                request: function (n) {
                                    return eX(e)('', t(t({}, r), n)).then(function (e) {
                                        return t(
                                            t({}, e),
                                            {},
                                            {
                                                hits: e.hits.map(function (e) {
                                                    return delete e._highlightResult, e;
                                                })
                                            }
                                        );
                                    });
                                }
                            }
                        )
                    );
                };
            },
            eI = function (e) {
                return function (t, r, i) {
                    var a = i || {},
                        s = a.batchSize,
                        o = n(a, ['batchSize']),
                        u = {
                            taskIDs: [],
                            objectIDs: []
                        };
                    return l(
                        (function n() {
                            var i,
                                a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                l = [];
                            for (i = a; i < t.length && (l.push(t[i]), l.length !== (s || 1000)); i++);
                            return 0 === l.length
                                ? Promise.resolve(u)
                                : ef(e)(
                                      l.map(function (e) {
                                          return {
                                              action: r,
                                              body: e
                                          };
                                      }),
                                      o
                                  ).then(function (e) {
                                      return (u.objectIDs = u.objectIDs.concat(e.objectIDs)), u.taskIDs.push(e.taskID), n(++i);
                                  });
                        })(),
                        function (t, n) {
                            return Promise.all(
                                t.taskIDs.map(function (t) {
                                    return eJ(e)(t, n);
                                })
                            );
                        }
                    );
                };
            },
            eT = function (e) {
                return function (t) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('1/indexes/%s/clear', e.indexName)
                            },
                            t
                        ),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            eg = function (e) {
                return function (t) {
                    var r = t || {},
                        i = r.forwardToReplicas,
                        a = _(n(r, ['forwardToReplicas']));
                    return (
                        i && (a.queryParameters.forwardToReplicas = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: m,
                                    path: c('1/indexes/%s/rules/clear', e.indexName)
                                },
                                a
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            eS = function (e) {
                return function (t) {
                    var r = t || {},
                        i = r.forwardToReplicas,
                        a = _(n(r, ['forwardToReplicas']));
                    return (
                        i && (a.queryParameters.forwardToReplicas = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: m,
                                    path: c('1/indexes/%s/synonyms/clear', e.indexName)
                                },
                                a
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            eA = function (e) {
                return function (t, n) {
                    return l(
                        e.transporter.write(
                            {
                                method: m,
                                path: c('1/indexes/%s/deleteByQuery', e.indexName),
                                data: t
                            },
                            n
                        ),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            eN = function (e) {
                return function (t) {
                    return l(
                        e.transporter.write(
                            {
                                method: p,
                                path: c('1/indexes/%s', e.indexName)
                            },
                            t
                        ),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            ev = function (e) {
                return function (t, n) {
                    return l(
                        eO(e)([t], n).then(function (e) {
                            return { taskID: e.taskIDs[0] };
                        }),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            eO = function (e) {
                return function (t, n) {
                    var r = t.map(function (e) {
                        return { objectID: e };
                    });
                    return eI(e)(r, e0.DeleteObject, n);
                };
            },
            eR = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.forwardToReplicas,
                        s = _(n(i, ['forwardToReplicas']));
                    return (
                        a && (s.queryParameters.forwardToReplicas = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: p,
                                    path: c('1/indexes/%s/rules/%s', e.indexName, t)
                                },
                                s
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            eC = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.forwardToReplicas,
                        s = _(n(i, ['forwardToReplicas']));
                    return (
                        a && (s.queryParameters.forwardToReplicas = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: p,
                                    path: c('1/indexes/%s/synonyms/%s', e.indexName, t)
                                },
                                s
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            ey = function (e) {
                return function (t) {
                    return ew(e)(t)
                        .then(function () {
                            return !0;
                        })
                        .catch(function (e) {
                            if (404 !== e.status) throw e;
                            return !1;
                        });
                };
            },
            eD = function (e) {
                return function (t, n, r) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: c('1/answers/%s/prediction', e.indexName),
                            data: {
                                query: t,
                                queryLanguages: n
                            },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            eL = function (e) {
                return function (i, a) {
                    var s = a || {},
                        o = s.query,
                        l = s.paginate,
                        u = n(s, ['query', 'paginate']),
                        c = 0;
                    return (function n() {
                        return ez(e)(o || '', t(t({}, u), {}, { page: c })).then(function (e) {
                            for (var t = 0, a = Object.entries(e.hits); t < a.length; t++) {
                                var s = r(a[t], 2),
                                    o = s[0],
                                    u = s[1];
                                if (i(u))
                                    return {
                                        object: u,
                                        position: parseInt(o, 10),
                                        page: c
                                    };
                            }
                            if ((c++, !1 === l || c >= e.nbPages))
                                throw {
                                    name: 'ObjectNotFoundError',
                                    message: 'Object not found.'
                                };
                            return n();
                        });
                    })();
                };
            },
            eb = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/indexes/%s/%s', e.indexName, t)
                        },
                        n
                    );
                };
            },
            eM = function () {
                return function (e, t) {
                    for (var n = 0, i = Object.entries(e.hits); n < i.length; n++) {
                        var a = r(i[n], 2),
                            s = a[0];
                        if (a[1].objectID === t) return parseInt(s, 10);
                    }
                    return -1;
                };
            },
            eP = function (e) {
                return function (r, i) {
                    var a = i || {},
                        s = a.attributesToRetrieve,
                        o = n(a, ['attributesToRetrieve']),
                        l = r.map(function (n) {
                            return t(
                                {
                                    indexName: e.indexName,
                                    objectID: n
                                },
                                s ? { attributesToRetrieve: s } : {}
                            );
                        });
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/objects',
                            data: { requests: l }
                        },
                        o
                    );
                };
            },
            eU = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/indexes/%s/rules/%s', e.indexName, t)
                        },
                        n
                    );
                };
            },
            ew = function (e) {
                return function (t) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/indexes/%s/settings', e.indexName),
                            data: { getVersion: 2 }
                        },
                        t
                    );
                };
            },
            ex = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: 'GET',
                            path: c('1/indexes/%s/synonyms/%s', e.indexName, t)
                        },
                        n
                    );
                };
            },
            eG = function (e) {
                return function (t, n) {
                    return l(
                        ek(e)([t], n).then(function (e) {
                            return {
                                objectID: e.objectIDs[0],
                                taskID: e.taskIDs[0]
                            };
                        }),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            ek = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.createIfNotExists,
                        s = n(i, ['createIfNotExists']),
                        o = a ? e0.PartialUpdateObject : e0.PartialUpdateObjectNoCreate;
                    return eI(e)(t, o, s);
                };
            },
            eB = function (e) {
                return function (a, s) {
                    var o = s || {},
                        u = o.safe,
                        d = o.autoGenerateObjectIDIfNotExist,
                        _ = o.batchSize,
                        E = n(o, ['safe', 'autoGenerateObjectIDIfNotExist', 'batchSize']),
                        f = function (t, n, r, i) {
                            return l(
                                e.transporter.write(
                                    {
                                        method: m,
                                        path: c('1/indexes/%s/operation', t),
                                        data: {
                                            operation: r,
                                            destination: n
                                        }
                                    },
                                    i
                                ),
                                function (t, n) {
                                    return eJ(e)(t.taskID, n);
                                }
                            );
                        },
                        h = Math.random().toString(36).substring(7),
                        p = ''.concat(e.indexName, '_tmp_').concat(h),
                        I = eZ({
                            appId: e.appId,
                            transporter: e.transporter,
                            indexName: p
                        }),
                        T = [],
                        g = f(
                            e.indexName,
                            p,
                            'copy',
                            t(
                                t({}, E),
                                {},
                                {
                                    scope: ['settings', 'synonyms', 'rules']
                                }
                            )
                        );
                    return (
                        T.push(g),
                        l(
                            (u ? g.wait(E) : g)
                                .then(function () {
                                    var e = I(
                                        a,
                                        t(
                                            t({}, E),
                                            {},
                                            {
                                                autoGenerateObjectIDIfNotExist: d,
                                                batchSize: _
                                            }
                                        )
                                    );
                                    return T.push(e), u ? e.wait(E) : e;
                                })
                                .then(function () {
                                    var t = f(p, e.indexName, 'move', E);
                                    return T.push(t), u ? t.wait(E) : t;
                                })
                                .then(function () {
                                    return Promise.all(T);
                                })
                                .then(function (e) {
                                    var t = r(e, 3),
                                        n = t[0],
                                        a = t[1],
                                        s = t[2];
                                    return {
                                        objectIDs: a.objectIDs,
                                        taskIDs: [n.taskID].concat(i(a.taskIDs), [s.taskID])
                                    };
                                }),
                            function (e, t) {
                                return Promise.all(
                                    T.map(function (e) {
                                        return e.wait(t);
                                    })
                                );
                            }
                        )
                    );
                };
            },
            eF = function (e) {
                return function (n, r) {
                    return ej(e)(n, t(t({}, r), {}, { clearExistingRules: !0 }));
                };
            },
            eV = function (e) {
                return function (n, r) {
                    return eK(e)(n, t(t({}, r), {}, { clearExistingSynonyms: !0 }));
                };
            },
            eH = function (e) {
                return function (t, n) {
                    return l(
                        eZ(e)([t], n).then(function (e) {
                            return {
                                objectID: e.objectIDs[0],
                                taskID: e.taskIDs[0]
                            };
                        }),
                        function (t, n) {
                            return eJ(e)(t.taskID, n);
                        }
                    );
                };
            },
            eZ = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.autoGenerateObjectIDIfNotExist,
                        s = n(i, ['autoGenerateObjectIDIfNotExist']),
                        o = a ? e0.AddObject : e0.UpdateObject;
                    if (o === e0.UpdateObject) {
                        var u = !0,
                            c = !1,
                            d = void 0;
                        try {
                            for (var _, E = t[Symbol.iterator](); !(u = (_ = E.next()).done); u = !0)
                                if (void 0 === _.value.objectID)
                                    return l(
                                        Promise.reject({
                                            name: 'MissingObjectIDError',
                                            message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                                        })
                                    );
                        } catch (e) {
                            (c = !0), (d = e);
                        } finally {
                            try {
                                u || null == E.return || E.return();
                            } finally {
                                if (c) throw d;
                            }
                        }
                    }
                    return eI(e)(t, o, s);
                };
            },
            eY = function (e) {
                return function (t, n) {
                    return ej(e)([t], n);
                };
            },
            ej = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.forwardToReplicas,
                        s = i.clearExistingRules,
                        o = _(n(i, ['forwardToReplicas', 'clearExistingRules']));
                    return (
                        a && (o.queryParameters.forwardToReplicas = 1),
                        s && (o.queryParameters.clearExistingRules = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: m,
                                    path: c('1/indexes/%s/rules/batch', e.indexName),
                                    data: t
                                },
                                o
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            eW = function (e) {
                return function (t, n) {
                    return eK(e)([t], n);
                };
            },
            eK = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.forwardToReplicas,
                        s = i.clearExistingSynonyms,
                        o = i.replaceExistingSynonyms,
                        u = _(n(i, ['forwardToReplicas', 'clearExistingSynonyms', 'replaceExistingSynonyms']));
                    return (
                        a && (u.queryParameters.forwardToReplicas = 1),
                        (o || s) && (u.queryParameters.replaceExistingSynonyms = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: m,
                                    path: c('1/indexes/%s/synonyms/batch', e.indexName),
                                    data: t
                                },
                                u
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            ez = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: c('1/indexes/%s/query', e.indexName),
                            data: { query: t },
                            cacheable: !0
                        },
                        n
                    );
                };
            },
            eq = function (e) {
                return function (t, n, r) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: c('1/indexes/%s/facets/%s/query', e.indexName, t),
                            data: { facetQuery: n },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            eQ = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: c('1/indexes/%s/rules/search', e.indexName),
                            data: { query: t }
                        },
                        n
                    );
                };
            },
            eX = function (e) {
                return function (t, n) {
                    return e.transporter.read(
                        {
                            method: m,
                            path: c('1/indexes/%s/synonyms/search', e.indexName),
                            data: { query: t }
                        },
                        n
                    );
                };
            },
            e$ = function (e) {
                return function (t, r) {
                    var i = r || {},
                        a = i.forwardToReplicas,
                        s = _(n(i, ['forwardToReplicas']));
                    return (
                        a && (s.queryParameters.forwardToReplicas = 1),
                        l(
                            e.transporter.write(
                                {
                                    method: 'PUT',
                                    path: c('1/indexes/%s/settings', e.indexName),
                                    data: t
                                },
                                s
                            ),
                            function (t, n) {
                                return eJ(e)(t.taskID, n);
                            }
                        )
                    );
                };
            },
            eJ = function (e) {
                return function (t, n) {
                    return o(function (r) {
                        var i;
                        return ((i = e),
                        function (e, t) {
                            return i.transporter.read(
                                {
                                    method: 'GET',
                                    path: c('1/indexes/%s/task/%s', i.indexName, e.toString())
                                },
                                t
                            );
                        })(t, n).then(function (e) {
                            return 'published' !== e.status ? r() : void 0;
                        });
                    });
                };
            },
            e0 = {
                AddObject: 'addObject',
                UpdateObject: 'updateObject',
                PartialUpdateObject: 'partialUpdateObject',
                PartialUpdateObjectNoCreate: 'partialUpdateObjectNoCreate',
                DeleteObject: 'deleteObject'
            },
            e1 = {
                Settings: 'settings',
                Synonyms: 'synonyms',
                Rules: 'rules'
            },
            e2 = function (e) {
                return function (n, r) {
                    var i = n.map(function (e) {
                        return t(t({}, e), {}, { threshold: e.threshold || 0 });
                    });
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/recommendations',
                            data: { requests: i },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            e3 = function (e) {
                return function (n, r) {
                    return e2(e)(
                        n.map(function (e) {
                            return t(
                                t({}, e),
                                {},
                                {
                                    fallbackParameters: {},
                                    model: 'bought-together'
                                }
                            );
                        }),
                        r
                    );
                };
            },
            e4 = function (e) {
                return function (n, r) {
                    return e2(e)(
                        n.map(function (e) {
                            return t(t({}, e), {}, { model: 'related-products' });
                        }),
                        r
                    );
                };
            },
            e5 = function (e) {
                return function (n, r) {
                    var i = n.map(function (e) {
                        return t(
                            t({}, e),
                            {},
                            {
                                model: 'trending-facets',
                                threshold: e.threshold || 0
                            }
                        );
                    });
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/recommendations',
                            data: { requests: i },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            e6 = function (e) {
                return function (n, r) {
                    var i = n.map(function (e) {
                        return t(
                            t({}, e),
                            {},
                            {
                                model: 'trending-items',
                                threshold: e.threshold || 0
                            }
                        );
                    });
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/recommendations',
                            data: { requests: i },
                            cacheable: !0
                        },
                        r
                    );
                };
            },
            e7 = function (e) {
                return function (n, r) {
                    return e2(e)(
                        n.map(function (e) {
                            return t(t({}, e), {}, { model: 'looking-similar' });
                        }),
                        r
                    );
                };
            },
            e8 = function (e) {
                return function (n, r) {
                    var i = n.map(function (e) {
                        return t(
                            t({}, e),
                            {},
                            {
                                model: 'recommended-for-you',
                                threshold: e.threshold || 0
                            }
                        );
                    });
                    return e.transporter.read(
                        {
                            method: m,
                            path: '1/indexes/*/recommendations',
                            data: { requests: i },
                            cacheable: !0
                        },
                        r
                    );
                };
            };
        function e9(e, n, o) {
            var l,
                c,
                _,
                f,
                h,
                p,
                m,
                I,
                g,
                S,
                A,
                L,
                eI = {
                    appId: e,
                    apiKey: n,
                    timeouts: {
                        connect: 1,
                        read: 2,
                        write: 30
                    },
                    requester: {
                        send: function (e) {
                            return new Promise(function (t) {
                                var n = new XMLHttpRequest();
                                n.open(e.method, e.url, !0),
                                    Object.keys(e.headers).forEach(function (t) {
                                        return n.setRequestHeader(t, e.headers[t]);
                                    });
                                var r,
                                    i = function (e, r) {
                                        return setTimeout(function () {
                                            n.abort(),
                                                t({
                                                    status: 0,
                                                    content: r,
                                                    isTimedOut: !0
                                                });
                                        }, 1000 * e);
                                    },
                                    a = i(e.connectTimeout, 'Connection timeout');
                                (n.onreadystatechange = function () {
                                    n.readyState > n.OPENED && void 0 === r && (clearTimeout(a), (r = i(e.responseTimeout, 'Socket timeout')));
                                }),
                                    (n.onerror = function () {
                                        0 === n.status &&
                                            (clearTimeout(a),
                                            clearTimeout(r),
                                            t({
                                                content: n.responseText || 'Network request failed',
                                                status: n.status,
                                                isTimedOut: !1
                                            }));
                                    }),
                                    (n.onload = function () {
                                        clearTimeout(a),
                                            clearTimeout(r),
                                            t({
                                                content: n.responseText,
                                                status: n.status,
                                                isTimedOut: !1
                                            });
                                    }),
                                    n.send(e.data);
                            });
                        }
                    },
                    logger: {
                        debug: function (e, t) {
                            return Promise.resolve();
                        },
                        info: function (e, t) {
                            return Promise.resolve();
                        },
                        error: function (e, t) {
                            return console.error(e, t), Promise.resolve();
                        }
                    },
                    responsesCache: a(),
                    requestsCache: a({ serializable: !1 }),
                    hostsCache: (function e(t) {
                        var n = i(t.caches),
                            a = n.shift();
                        return void 0 === a
                            ? {
                                  get: function (e, t) {
                                      var n =
                                          arguments.length > 2 && void 0 !== arguments[2]
                                              ? arguments[2]
                                              : {
                                                    miss: function () {
                                                        return Promise.resolve();
                                                    }
                                                };
                                      return t()
                                          .then(function (e) {
                                              return Promise.all([e, n.miss(e)]);
                                          })
                                          .then(function (e) {
                                              return r(e, 1)[0];
                                          });
                                  },
                                  set: function (e, t) {
                                      return Promise.resolve(t);
                                  },
                                  delete: function (e) {
                                      return Promise.resolve();
                                  },
                                  clear: function () {
                                      return Promise.resolve();
                                  }
                              }
                            : {
                                  get: function (t, r) {
                                      var i =
                                          arguments.length > 2 && void 0 !== arguments[2]
                                              ? arguments[2]
                                              : {
                                                    miss: function () {
                                                        return Promise.resolve();
                                                    }
                                                };
                                      return a.get(t, r, i).catch(function () {
                                          return e({ caches: n }).get(t, r, i);
                                      });
                                  },
                                  set: function (t, r) {
                                      return a.set(t, r).catch(function () {
                                          return e({ caches: n }).set(t, r);
                                      });
                                  },
                                  delete: function (t) {
                                      return a.delete(t).catch(function () {
                                          return e({ caches: n }).delete(t);
                                      });
                                  },
                                  clear: function () {
                                      return a.clear().catch(function () {
                                          return e({ caches: n }).clear();
                                      });
                                  }
                              };
                    })({
                        caches: [
                            ((l = { key: ''.concat('4.23.3', '-').concat(e) }),
                            (_ = 'algoliasearch-client-js-'.concat(l.key)),
                            (f = function () {
                                return void 0 === c && (c = l.localStorage || window.localStorage), c;
                            }),
                            (h = function () {
                                return JSON.parse(f().getItem(_) || '{}');
                            }),
                            (p = function (e) {
                                f().setItem(_, JSON.stringify(e));
                            }),
                            (m = function () {
                                var e = l.timeToLive ? 1000 * l.timeToLive : null,
                                    t = Object.fromEntries(
                                        Object.entries(h()).filter(function (e) {
                                            return void 0 !== r(e, 2)[1].timestamp;
                                        })
                                    );
                                p(t),
                                    e &&
                                        p(
                                            Object.fromEntries(
                                                Object.entries(t).filter(function (t) {
                                                    var n = r(t, 2)[1],
                                                        i = new Date().getTime();
                                                    return !(n.timestamp + e < i);
                                                })
                                            )
                                        );
                            }),
                            {
                                get: function (e, t) {
                                    var n =
                                        arguments.length > 2 && void 0 !== arguments[2]
                                            ? arguments[2]
                                            : {
                                                  miss: function () {
                                                      return Promise.resolve();
                                                  }
                                              };
                                    return Promise.resolve()
                                        .then(function () {
                                            m();
                                            var t = JSON.stringify(e);
                                            return h()[t];
                                        })
                                        .then(function (e) {
                                            return Promise.all([e ? e.value : t(), void 0 !== e]);
                                        })
                                        .then(function (e) {
                                            var t = r(e, 2),
                                                i = t[0];
                                            return Promise.all([i, t[1] || n.miss(i)]);
                                        })
                                        .then(function (e) {
                                            return r(e, 1)[0];
                                        });
                                },
                                set: function (e, t) {
                                    return Promise.resolve().then(function () {
                                        var n = h();
                                        return (
                                            (n[JSON.stringify(e)] = {
                                                timestamp: new Date().getTime(),
                                                value: t
                                            }),
                                            f().setItem(_, JSON.stringify(n)),
                                            t
                                        );
                                    });
                                },
                                delete: function (e) {
                                    return Promise.resolve().then(function () {
                                        var t = h();
                                        delete t[JSON.stringify(e)], f().setItem(_, JSON.stringify(t));
                                    });
                                },
                                clear: function () {
                                    return Promise.resolve().then(function () {
                                        f().removeItem(_);
                                    });
                                }
                            }),
                            a()
                        ]
                    }),
                    userAgent: (I = {
                        value: 'Algolia for JavaScript ('.concat('4.23.3', ')'),
                        add: function (e) {
                            var t = '; '.concat(e.segment).concat(void 0 !== e.version ? ' ('.concat(e.version, ')') : '');
                            return -1 === I.value.indexOf(t) && (I.value = ''.concat(I.value).concat(t)), I;
                        }
                    }).add({ segment: 'Browser' })
                },
                e0 = t(t({}, eI), o),
                e1 = function () {
                    return function (e) {
                        var n, r, i, a;
                        return (
                            (r =
                                (n = t(
                                    t(t({}, eI), e),
                                    {},
                                    {
                                        methods: {
                                            getPersonalizationStrategy: y,
                                            setPersonalizationStrategy: D
                                        }
                                    }
                                )).region || 'us'),
                            (i = s(d.WithinHeaders, n.appId, n.apiKey)),
                            (a = T(
                                t(
                                    t({ hosts: [{ url: 'personalization.'.concat(r, '.algolia.com') }] }, n),
                                    {},
                                    {
                                        headers: t(t(t({}, i.headers()), { 'content-type': 'application/json' }), n.headers),
                                        queryParameters: t(t({}, i.queryParameters()), n.queryParameters)
                                    }
                                )
                            )),
                            u(
                                {
                                    appId: n.appId,
                                    transporter: a
                                },
                                n.methods
                            )
                        );
                    };
                };
            return (
                (S = (g = t(
                    t({}, e0),
                    {},
                    {
                        methods: {
                            search: er,
                            searchForFacetValues: ei,
                            multipleBatch: et,
                            multipleGetObjects: en,
                            multipleQueries: er,
                            copyIndex: w,
                            copySettings: G,
                            copySynonyms: k,
                            copyRules: x,
                            moveIndex: ee,
                            listIndices: $,
                            getLogs: j,
                            listClusters: X,
                            multipleSearchForFacetValues: ei,
                            getApiKey: H,
                            addApiKey: b,
                            listApiKeys: Q,
                            updateApiKey: e_,
                            deleteApiKey: F,
                            restoreApiKey: eo,
                            assignUserID: M,
                            assignUserIDs: P,
                            getUserID: K,
                            searchUserIDs: ec,
                            listUserIDs: J,
                            getTopUserIDs: W,
                            removeUserID: ea,
                            hasPendingMappings: z,
                            clearDictionaryEntries: U,
                            deleteDictionaryEntries: V,
                            getDictionarySettings: Y,
                            getAppTask: Z,
                            replaceDictionaryEntries: es,
                            saveDictionaryEntries: el,
                            searchDictionaryEntries: eu,
                            setDictionarySettings: ed,
                            waitAppTask: eE,
                            customRequest: B,
                            initIndex: function (e) {
                                return function (t) {
                                    return q(e)(t, {
                                        methods: {
                                            batch: ef,
                                            delete: eN,
                                            findAnswers: eD,
                                            getObject: eb,
                                            getObjects: eP,
                                            saveObject: eH,
                                            saveObjects: eZ,
                                            search: ez,
                                            searchForFacetValues: eq,
                                            waitTask: eJ,
                                            setSettings: e$,
                                            getSettings: ew,
                                            partialUpdateObject: eG,
                                            partialUpdateObjects: ek,
                                            deleteObject: ev,
                                            deleteObjects: eO,
                                            deleteBy: eA,
                                            clearObjects: eT,
                                            browseObjects: eh,
                                            getObjectPosition: eM,
                                            findObject: eL,
                                            exists: ey,
                                            saveSynonym: eW,
                                            saveSynonyms: eK,
                                            getSynonym: ex,
                                            searchSynonyms: eX,
                                            browseSynonyms: em,
                                            deleteSynonym: eC,
                                            clearSynonyms: eS,
                                            replaceAllObjects: eB,
                                            replaceAllSynonyms: eV,
                                            searchRules: eQ,
                                            getRule: eU,
                                            deleteRule: eR,
                                            saveRule: eY,
                                            saveRules: ej,
                                            replaceAllRules: eF,
                                            browseRules: ep,
                                            clearRules: eg
                                        }
                                    });
                                };
                            },
                            initAnalytics: function () {
                                return function (e) {
                                    var n, r, i, a;
                                    return (
                                        (r =
                                            (n = t(
                                                t(t({}, eI), e),
                                                {},
                                                {
                                                    methods: {
                                                        addABTest: N,
                                                        getABTest: O,
                                                        getABTests: R,
                                                        stopABTest: C,
                                                        deleteABTest: v
                                                    }
                                                }
                                            )).region || 'us'),
                                        (i = s(d.WithinHeaders, n.appId, n.apiKey)),
                                        (a = T(
                                            t(
                                                t({ hosts: [{ url: 'analytics.'.concat(r, '.algolia.com') }] }, n),
                                                {},
                                                {
                                                    headers: t(t(t({}, i.headers()), { 'content-type': 'application/json' }), n.headers),
                                                    queryParameters: t(t({}, i.queryParameters()), n.queryParameters)
                                                }
                                            )
                                        )),
                                        u(
                                            {
                                                appId: n.appId,
                                                transporter: a
                                            },
                                            n.methods
                                        )
                                    );
                                };
                            },
                            initPersonalization: e1,
                            initRecommendation: function () {
                                return function (e) {
                                    return e0.logger.info('The `initRecommendation` method is deprecated. Use `initPersonalization` instead.'), e1()(e);
                                };
                            },
                            getRecommendations: e2,
                            getFrequentlyBoughtTogether: e3,
                            getLookingSimilar: e7,
                            getRecommendedForYou: e8,
                            getRelatedProducts: e4,
                            getTrendingFacets: e5,
                            getTrendingItems: e6
                        }
                    }
                )).appId),
                (A = s(void 0 !== g.authMode ? g.authMode : d.WithinHeaders, S, g.apiKey)),
                u(
                    {
                        transporter: (L = T(
                            t(
                                t(
                                    {
                                        hosts: [
                                            {
                                                url: ''.concat(S, '-dsn.algolia.net'),
                                                accept: E.Read
                                            },
                                            {
                                                url: ''.concat(S, '.algolia.net'),
                                                accept: E.Write
                                            }
                                        ].concat(
                                            (function (e) {
                                                for (var t = e.length - 1; t > 0; t--) {
                                                    var n = Math.floor(Math.random() * (t + 1)),
                                                        r = e[t];
                                                    (e[t] = e[n]), (e[n] = r);
                                                }
                                                return e;
                                            })([{ url: ''.concat(S, '-1.algolianet.com') }, { url: ''.concat(S, '-2.algolianet.com') }, { url: ''.concat(S, '-3.algolianet.com') }])
                                        )
                                    },
                                    g
                                ),
                                {},
                                {
                                    headers: t(t(t({}, A.headers()), { 'content-type': 'application/x-www-form-urlencoded' }), g.headers),
                                    queryParameters: t(t({}, A.queryParameters()), g.queryParameters)
                                }
                            )
                        )),
                        appId: S,
                        addAlgoliaAgent: function (e, t) {
                            L.userAgent.add({
                                segment: e,
                                version: t
                            });
                        },
                        clearCache: function () {
                            return Promise.all([L.requestsCache.clear(), L.responsesCache.clear()]).then(function () {});
                        }
                    },
                    g.methods
                )
            );
        }
        return (e9.version = '4.23.3'), e9;
    }),
    (e.exports = n());
