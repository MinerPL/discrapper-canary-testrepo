var r, n;
r = this, n = function() {
  "use strict";

  function t(t, e) {
    var r = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e && (n = n.filter(function(e) {
        return Object.getOwnPropertyDescriptor(t, e).enumerable
      })), r.push.apply(r, n)
    }
    return r
  }

  function e(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = null != arguments[r] ? arguments[r] : {};
      r % 2 ? t(Object(n), !0).forEach(function(t) {
        var r, i, a;
        r = e, i = t, a = n[t], i in r ? Object.defineProperty(r, i, {
          value: a,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : r[i] = a
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : t(Object(n)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
      })
    }
    return e
  }

  function r(t, e) {
    if (null == t) return {};
    var r, n, i = function(t, e) {
      if (null == t) return {};
      var r, n, i = {},
        a = Object.keys(t);
      for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (i[r] = t[r]);
      return i
    }(t, e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(t);
      for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (i[r] = t[r])
    }
    return i
  }

  function n(t, e) {
    return function(t) {
      if (Array.isArray(t)) return t
    }(t) || function(t, e) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) {
        var r = [],
          n = !0,
          i = !1,
          a = void 0;
        try {
          for (var s, o = t[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !e || r.length !== e); n = !0);
        } catch (t) {
          i = !0, a = t
        } finally {
          try {
            n || null == o.return || o.return()
          } finally {
            if (i) throw a
          }
        }
        return r
      }
    }(t, e) || function() {
      throw TypeError("Invalid attempt to destructure non-iterable instance")
    }()
  }

  function i(t) {
    return function(t) {
      if (Array.isArray(t)) {
        for (var e = 0, r = Array(t.length); e < t.length; e++) r[e] = t[e];
        return r
      }
    }(t) || function(t) {
      if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }(t) || function() {
      throw TypeError("Invalid attempt to spread non-iterable instance")
    }()
  }

  function a() {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
        serializable: !0
      },
      e = {};
    return {
      get: function(r, n) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
            miss: function() {
              return Promise.resolve()
            }
          },
          a = JSON.stringify(r);
        if (a in e) return Promise.resolve(t.serializable ? JSON.parse(e[a]) : e[a]);
        var s = n(),
          o = i && i.miss || function() {
            return Promise.resolve()
          };
        return s.then(function(t) {
          return o(t)
        }).then(function() {
          return s
        })
      },
      set: function(r, n) {
        return e[JSON.stringify(r)] = t.serializable ? JSON.stringify(n) : n, Promise.resolve(n)
      },
      delete: function(t) {
        return delete e[JSON.stringify(t)], Promise.resolve()
      },
      clear: function() {
        return e = {}, Promise.resolve()
      }
    }
  }

  function s(t, e, r) {
    var n = {
      "x-algolia-api-key": r,
      "x-algolia-application-id": e
    };
    return {
      headers: function() {
        return t === l.WithinHeaders ? n : {}
      },
      queryParameters: function() {
        return t === l.WithinQueryParameters ? n : {}
      }
    }
  }

  function o(t) {
    var e = 0;
    return t(function r() {
      return e++, new Promise(function(n) {
        setTimeout(function() {
          n(t(r))
        }, Math.min(100 * e, 1e3))
      })
    })
  }

  function u(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t, e) {
      return Promise.resolve()
    };
    return Object.assign(t, {
      wait: function(r) {
        return u(t.then(function(t) {
          return Promise.all([e(t, r), t])
        }).then(function(t) {
          return t[1]
        }))
      }
    })
  }

  function c(t, e) {
    return e && Object.keys(e).forEach(function(r) {
      t[r] = e[r](t)
    }), t
  }

  function h(t) {
    for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
    var i = 0;
    return t.replace(/%s/g, function() {
      return encodeURIComponent(r[i++])
    })
  }
  var l = {
    WithinQueryParameters: 0,
    WithinHeaders: 1
  };

  function f(t, e) {
    var r = t || {},
      n = r.data || {};
    return Object.keys(r).forEach(function(t) {
      -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(t) && (n[t] = r[t])
    }), {
      data: Object.entries(n).length > 0 ? n : void 0,
      timeout: r.timeout || e,
      headers: r.headers || {},
      queryParameters: r.queryParameters || {},
      cacheable: r.cacheable
    }
  }
  var d = {
    Read: 1,
    Write: 2,
    Any: 3
  };

  function p(t) {
    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return e(e({}, t), {}, {
      status: r,
      lastUpdate: Date.now()
    })
  }

  function m(t) {
    return "string" == typeof t ? {
      protocol: "https",
      url: t,
      accept: d.Any
    } : {
      protocol: t.protocol || "https",
      url: t.url,
      accept: t.accept || d.Any
    }
  }
  var g = "DELETE",
    v = "POST";

  function y(t, r, n, a) {
    var s, o, u, c, h, l, f = [],
      d = function(t, r) {
        if ("GET" !== t.method && (void 0 !== t.data || void 0 !== r.data)) return JSON.stringify(Array.isArray(t.data) ? t.data : e(e({}, t.data), r.data))
      }(n, a),
      g = (s = t, o = a, u = e(e({}, s.headers), o.headers), c = {}, Object.keys(u).forEach(function(t) {
        var e = u[t];
        c[t.toLowerCase()] = e
      }), c),
      v = n.method,
      y = "GET" !== n.method ? {} : e(e({}, n.data), a.data),
      b = e(e(e({
        "x-algolia-agent": t.userAgent.value
      }, t.queryParameters), y), a.queryParameters),
      w = 0,
      S = function e(r, i) {
        var s = r.pop();
        if (void 0 === s) throw {
          name: "RetryError",
          message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
          transporterStackTrace: _(f)
        };
        var o = {
            data: d,
            headers: g,
            method: v,
            url: function(t, e, r) {
              var n = x(r),
                i = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
              return n.length && (i += "?".concat(n)), i
            }(s, n.path, b),
            connectTimeout: i(w, t.timeouts.connect),
            responseTimeout: i(w, a.timeout)
          },
          u = function(t) {
            var e = {
              request: o,
              response: t,
              host: s,
              triesLeft: r.length
            };
            return f.push(e), e
          },
          c = {
            onSuccess: function(t) {
              return function(t) {
                try {
                  return JSON.parse(t.content)
                } catch (r) {
                  var e;
                  throw e = r.message, {
                    name: "DeserializationError",
                    message: e,
                    response: t
                  }
                }
              }(t)
            },
            onRetry: function(n) {
              var a = u(n);
              return n.isTimedOut && w++, Promise.all([t.logger.info("Retryable failure", P(a)), t.hostsCache.set(s, p(s, n.isTimedOut ? 3 : 2))]).then(function() {
                return e(r, i)
              })
            },
            onFail: function(t) {
              throw u(t),
                function(t, e) {
                  var r = t.content,
                    n = t.status,
                    i = r;
                  try {
                    i = JSON.parse(r).message
                  } catch (t) {}
                  return {
                    name: "ApiError",
                    message: i,
                    status: n,
                    transporterStackTrace: e
                  }
                }(t, _(f))
            }
          };
        return t.requester.send(o).then(function(t) {
          var e, r, n, i, a, s, o;
          return e = t, r = c, (i = (n = e).status, n.isTimedOut || (s = (a = n).isTimedOut, o = a.status, !s && 0 == ~~o) || 2 != ~~(i / 100) && 4 != ~~(i / 100)) ? r.onRetry(e) : 2 == ~~(e.status / 100) ? r.onSuccess(e) : r.onFail(e)
        })
      };
    return (h = t.hostsCache, Promise.all((l = r).map(function(t) {
      return h.get(t, function() {
        return Promise.resolve(p(t))
      })
    })).then(function(t) {
      var e = t.filter(function(t) {
          var e;
          return 1 === (e = t).status || Date.now() - e.lastUpdate > 12e4
        }),
        r = t.filter(function(t) {
          var e;
          return 3 === (e = t).status && Date.now() - e.lastUpdate <= 12e4
        }),
        n = [].concat(i(e), i(r));
      return {
        getTimeout: function(t, e) {
          return (0 === r.length && 0 === t ? 1 : r.length + 3 + t) * e
        },
        statelessHosts: n.length > 0 ? n.map(function(t) {
          return m(t)
        }) : l
      }
    })).then(function(t) {
      return S(i(t.statelessHosts).reverse(), t.getTimeout)
    })
  }

  function b(t) {
    var e = t.hostsCache,
      r = t.logger,
      i = t.requester,
      a = t.requestsCache,
      s = t.responsesCache,
      o = t.timeouts,
      u = t.userAgent,
      c = t.hosts,
      h = t.queryParameters,
      l = {
        hostsCache: e,
        logger: r,
        requester: i,
        requestsCache: a,
        responsesCache: s,
        timeouts: o,
        userAgent: u,
        headers: t.headers,
        queryParameters: h,
        hosts: c.map(function(t) {
          return m(t)
        }),
        read: function(t, e) {
          var r = f(e, l.timeouts.read),
            i = function() {
              return y(l, l.hosts.filter(function(t) {
                return 0 != (t.accept & d.Read)
              }), t, r)
            };
          if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t.cacheable)) return i();
          var a = {
            request: t,
            mappedRequestOptions: r,
            transporter: {
              queryParameters: l.queryParameters,
              headers: l.headers
            }
          };
          return l.responsesCache.get(a, function() {
            return l.requestsCache.get(a, function() {
              return l.requestsCache.set(a, i()).then(function(t) {
                return Promise.all([l.requestsCache.delete(a), t])
              }, function(t) {
                return Promise.all([l.requestsCache.delete(a), Promise.reject(t)])
              }).then(function(t) {
                var e = n(t, 2);
                return e[0], e[1]
              })
            })
          }, {
            miss: function(t) {
              return l.responsesCache.set(a, t)
            }
          })
        },
        write: function(t, e) {
          return y(l, l.hosts.filter(function(t) {
            return 0 != (t.accept & d.Write)
          }), t, f(e, l.timeouts.write))
        }
      };
    return l
  }

  function x(t) {
    return Object.keys(t).map(function(e) {
      var r;
      return h("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]))
    }).join("&")
  }

  function _(t) {
    return t.map(function(t) {
      return P(t)
    })
  }

  function P(t) {
    var r = t.request.headers["x-algolia-api-key"] ? {
      "x-algolia-api-key": "*****"
    } : {};
    return e(e({}, t), {}, {
      request: e(e({}, t.request), {}, {
        headers: e(e({}, t.request.headers), r)
      })
    })
  }
  var w = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: v,
          path: "2/abtests",
          data: e
        }, r)
      }
    },
    S = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: g,
          path: h("2/abtests/%s", e)
        }, r)
      }
    },
    T = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("2/abtests/%s", e)
        }, r)
      }
    },
    O = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "2/abtests"
        }, e)
      }
    },
    D = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: v,
          path: h("2/abtests/%s/stop", e)
        }, r)
      }
    },
    I = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/strategies/personalization"
        }, e)
      }
    },
    j = function(t) {
      return function(e, r) {
        return t.transporter.write({
          method: v,
          path: "1/strategies/personalization",
          data: e
        }, r)
      }
    };

  function E(t) {
    return function e(r) {
      return t.request(r).then(function(n) {
        if (void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n)) return n.cursor ? e({
          cursor: n.cursor
        }) : e({
          page: (r.page || 0) + 1
        })
      })
    }({})
  }
  var k = function(t) {
      return function(n, i) {
        var a = i || {},
          s = a.queryParameters,
          c = r(a, ["queryParameters"]),
          h = e({
            acl: n
          }, void 0 !== s ? {
            queryParameters: s
          } : {});
        return u(t.transporter.write({
          method: v,
          path: "1/keys",
          data: h
        }, c), function(e, r) {
          return o(function(n) {
            return B(t)(e.key, r).catch(function(t) {
              if (404 !== t.status) throw t;
              return n()
            })
          })
        })
      }
    },
    q = function(t) {
      return function(e, r, n) {
        var i = f(n);
        return i.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
          method: v,
          path: "1/clusters/mapping",
          data: {
            cluster: r
          }
        }, i)
      }
    },
    R = function(t) {
      return function(e, r, n) {
        return t.transporter.write({
          method: v,
          path: "1/clusters/mapping/batch",
          data: {
            users: e,
            cluster: r
          }
        }, n)
      }
    },
    N = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: h("/1/dictionaries/%s/batch", e),
          data: {
            clearExistingDictionaryEntries: !0,
            requests: {
              action: "addEntry",
              body: []
            }
          }
        }, r), function(e, r) {
          return td(t)(e.taskID, r)
        })
      }
    },
    A = function(t) {
      return function(e, r, n) {
        return u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/operation", e),
          data: {
            operation: "copy",
            destination: r
          }
        }, n), function(r, n) {
          return K(t)(e, {
            methods: {
              waitTask: tZ
            }
          }).waitTask(r.taskID, n)
        })
      }
    },
    C = function(t) {
      return function(r, n, i) {
        return A(t)(r, n, e(e({}, i), {}, {
          scope: [t1.Rules]
        }))
      }
    },
    z = function(t) {
      return function(r, n, i) {
        return A(t)(r, n, e(e({}, i), {}, {
          scope: [t1.Settings]
        }))
      }
    },
    G = function(t) {
      return function(r, n, i) {
        return A(t)(r, n, e(e({}, i), {}, {
          scope: [t1.Synonyms]
        }))
      }
    },
    M = function(t) {
      return function(e, r) {
        return "GET" === e.method ? t.transporter.read(e, r) : t.transporter.write(e, r)
      }
    },
    U = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: g,
          path: h("1/keys/%s", e)
        }, r), function(r, n) {
          return o(function(r) {
            return B(t)(e, n).then(r).catch(function(t) {
              if (404 !== t.status) throw t
            })
          })
        })
      }
    },
    L = function(t) {
      return function(e, r, n) {
        var i = r.map(function(t) {
          return {
            action: "deleteEntry",
            body: {
              objectID: t
            }
          }
        });
        return u(t.transporter.write({
          method: v,
          path: h("/1/dictionaries/%s/batch", e),
          data: {
            clearExistingDictionaryEntries: !1,
            requests: i
          }
        }, n), function(e, r) {
          return td(t)(e.taskID, r)
        })
      }
    },
    B = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("1/keys/%s", e)
        }, r)
      }
    },
    V = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("1/task/%s", e.toString())
        }, r)
      }
    },
    F = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "/1/dictionaries/*/settings"
        }, e)
      }
    },
    J = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/logs"
        }, e)
      }
    },
    $ = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/clusters/mapping/top"
        }, e)
      }
    },
    W = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("1/clusters/mapping/%s", e)
        }, r)
      }
    },
    H = function(t) {
      return function(e) {
        var n = e || {},
          i = n.retrieveMappings,
          a = r(n, ["retrieveMappings"]);
        return !0 === i && (a.getClusters = !0), t.transporter.read({
          method: "GET",
          path: "1/clusters/mapping/pending"
        }, a)
      }
    },
    K = function(t) {
      return function(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return c({
          transporter: t.transporter,
          appId: t.appId,
          indexName: e
        }, r.methods)
      }
    },
    Q = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/keys"
        }, e)
      }
    },
    X = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/clusters"
        }, e)
      }
    },
    Y = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/indexes"
        }, e)
      }
    },
    Z = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: "1/clusters/mapping"
        }, e)
      }
    },
    tt = function(t) {
      return function(e, r, n) {
        return u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/operation", e),
          data: {
            operation: "move",
            destination: r
          }
        }, n), function(r, n) {
          return K(t)(e, {
            methods: {
              waitTask: tZ
            }
          }).waitTask(r.taskID, n)
        })
      }
    },
    te = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: "1/indexes/*/batch",
          data: {
            requests: e
          }
        }, r), function(e, r) {
          return Promise.all(Object.keys(e.taskID).map(function(n) {
            return K(t)(n, {
              methods: {
                waitTask: tZ
              }
            }).waitTask(e.taskID[n], r)
          }))
        })
      }
    },
    tr = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/objects",
          data: {
            requests: e
          }
        }, r)
      }
    },
    tn = function(t) {
      return function(r, n) {
        var i = r.map(function(t) {
          return e(e({}, t), {}, {
            params: x(t.params || {})
          })
        });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/queries",
          data: {
            requests: i
          },
          cacheable: !0
        }, n)
      }
    },
    ti = function(t) {
      return function(n, i) {
        return Promise.all(n.map(function(n) {
          var a = n.params,
            s = a.facetName,
            o = a.facetQuery,
            u = r(a, ["facetName", "facetQuery"]);
          return K(t)(n.indexName, {
            methods: {
              searchForFacetValues: tK
            }
          }).searchForFacetValues(s, o, e(e({}, i), u))
        }))
      }
    },
    ta = function(t) {
      return function(e, r) {
        var n = f(r);
        return n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
          method: g,
          path: "1/clusters/mapping"
        }, n)
      }
    },
    ts = function(t) {
      return function(e, r, n) {
        var i = r.map(function(t) {
          return {
            action: "addEntry",
            body: t
          }
        });
        return u(t.transporter.write({
          method: v,
          path: h("/1/dictionaries/%s/batch", e),
          data: {
            clearExistingDictionaryEntries: !0,
            requests: i
          }
        }, n), function(e, r) {
          return td(t)(e.taskID, r)
        })
      }
    },
    to = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: h("1/keys/%s/restore", e)
        }, r), function(r, n) {
          return o(function(r) {
            return B(t)(e, n).catch(function(t) {
              if (404 !== t.status) throw t;
              return r()
            })
          })
        })
      }
    },
    tu = function(t) {
      return function(e, r, n) {
        var i = r.map(function(t) {
          return {
            action: "addEntry",
            body: t
          }
        });
        return u(t.transporter.write({
          method: v,
          path: h("/1/dictionaries/%s/batch", e),
          data: {
            clearExistingDictionaryEntries: !1,
            requests: i
          }
        }, n), function(e, r) {
          return td(t)(e.taskID, r)
        })
      }
    },
    tc = function(t) {
      return function(e, r, n) {
        return t.transporter.read({
          method: v,
          path: h("/1/dictionaries/%s/search", e),
          data: {
            query: r
          },
          cacheable: !0
        }, n)
      }
    },
    th = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: "1/clusters/mapping/search",
          data: {
            query: e
          }
        }, r)
      }
    },
    tl = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: "PUT",
          path: "/1/dictionaries/*/settings",
          data: e
        }, r), function(e, r) {
          return td(t)(e.taskID, r)
        })
      }
    },
    tf = function(t) {
      return function(e, n) {
        var i = Object.assign({}, n),
          a = n || {},
          s = a.queryParameters,
          c = r(a, ["queryParameters"]),
          l = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
        return u(t.transporter.write({
          method: "PUT",
          path: h("1/keys/%s", e),
          data: s ? {
            queryParameters: s
          } : {}
        }, c), function(r, n) {
          return o(function(r) {
            return B(t)(e, n).then(function(t) {
              var e;
              return (e = t, Object.keys(i).filter(function(t) {
                return -1 !== l.indexOf(t)
              }).every(function(t) {
                if (Array.isArray(e[t]) && Array.isArray(i[t])) {
                  var r = e[t];
                  return r.length === i[t].length && r.every(function(e, r) {
                    return e === i[t][r]
                  })
                }
                return e[t] === i[t]
              })) ? Promise.resolve() : r()
            })
          })
        })
      }
    },
    td = function(t) {
      return function(e, r) {
        return o(function(n) {
          return V(t)(e, r).then(function(t) {
            return "published" !== t.status ? n() : void 0
          })
        })
      }
    },
    tp = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/batch", t.indexName),
          data: {
            requests: e
          }
        }, r), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tm = function(t) {
      return function(r) {
        return E(e(e({
          shouldStop: function(t) {
            return void 0 === t.cursor
          }
        }, r), {}, {
          request: function(e) {
            return t.transporter.read({
              method: v,
              path: h("1/indexes/%s/browse", t.indexName),
              data: e
            }, r)
          }
        }))
      }
    },
    tg = function(t) {
      return function(r) {
        var n = e({
          hitsPerPage: 1e3
        }, r);
        return E(e(e({
          shouldStop: function(t) {
            return t.hits.length < n.hitsPerPage
          }
        }, n), {}, {
          request: function(r) {
            return tQ(t)("", e(e({}, n), r)).then(function(t) {
              return e(e({}, t), {}, {
                hits: t.hits.map(function(t) {
                  return delete t._highlightResult, t
                })
              })
            })
          }
        }))
      }
    },
    tv = function(t) {
      return function(r) {
        var n = e({
          hitsPerPage: 1e3
        }, r);
        return E(e(e({
          shouldStop: function(t) {
            return t.hits.length < n.hitsPerPage
          }
        }, n), {}, {
          request: function(r) {
            return tX(t)("", e(e({}, n), r)).then(function(t) {
              return e(e({}, t), {}, {
                hits: t.hits.map(function(t) {
                  return delete t._highlightResult, t
                })
              })
            })
          }
        }))
      }
    },
    ty = function(t) {
      return function(e, n, i) {
        var a = i || {},
          s = a.batchSize,
          o = r(a, ["batchSize"]),
          c = {
            taskIDs: [],
            objectIDs: []
          };
        return u(function r() {
          var i, a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            u = [];
          for (i = a; i < e.length && (u.push(e[i]), u.length !== (s || 1e3)); i++);
          return 0 === u.length ? Promise.resolve(c) : tp(t)(u.map(function(t) {
            return {
              action: n,
              body: t
            }
          }), o).then(function(t) {
            return c.objectIDs = c.objectIDs.concat(t.objectIDs), c.taskIDs.push(t.taskID), r(++i)
          })
        }(), function(e, r) {
          return Promise.all(e.taskIDs.map(function(e) {
            return tZ(t)(e, r)
          }))
        })
      }
    },
    tb = function(t) {
      return function(e) {
        return u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/clear", t.indexName)
        }, e), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tx = function(t) {
      return function(e) {
        var n = e || {},
          i = n.forwardToReplicas,
          a = f(r(n, ["forwardToReplicas"]));
        return i && (a.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/rules/clear", t.indexName)
        }, a), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    t_ = function(t) {
      return function(e) {
        var n = e || {},
          i = n.forwardToReplicas,
          a = f(r(n, ["forwardToReplicas"]));
        return i && (a.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/synonyms/clear", t.indexName)
        }, a), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tP = function(t) {
      return function(e, r) {
        return u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/deleteByQuery", t.indexName),
          data: e
        }, r), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tw = function(t) {
      return function(e) {
        return u(t.transporter.write({
          method: g,
          path: h("1/indexes/%s", t.indexName)
        }, e), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tS = function(t) {
      return function(e, r) {
        return u(tT(t)([e], r).then(function(t) {
          return {
            taskID: t.taskIDs[0]
          }
        }), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tT = function(t) {
      return function(e, r) {
        var n = e.map(function(t) {
          return {
            objectID: t
          }
        });
        return ty(t)(n, t0.DeleteObject, r)
      }
    },
    tO = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = f(r(i, ["forwardToReplicas"]));
        return a && (s.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: g,
          path: h("1/indexes/%s/rules/%s", t.indexName, e)
        }, s), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tD = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = f(r(i, ["forwardToReplicas"]));
        return a && (s.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: g,
          path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
        }, s), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tI = function(t) {
      return function(e) {
        return tA(t)(e).then(function() {
          return !0
        }).catch(function(t) {
          if (404 !== t.status) throw t;
          return !1
        })
      }
    },
    tj = function(t) {
      return function(e, r, n) {
        return t.transporter.read({
          method: v,
          path: h("1/answers/%s/prediction", t.indexName),
          data: {
            query: e,
            queryLanguages: r
          },
          cacheable: !0
        }, n)
      }
    },
    tE = function(t) {
      return function(i, a) {
        var s = a || {},
          o = s.query,
          u = s.paginate,
          c = r(s, ["query", "paginate"]),
          h = 0;
        return function r() {
          return tH(t)(o || "", e(e({}, c), {}, {
            page: h
          })).then(function(t) {
            for (var e = 0, a = Object.entries(t.hits); e < a.length; e++) {
              var s = n(a[e], 2),
                o = s[0],
                c = s[1];
              if (i(c)) return {
                object: c,
                position: parseInt(o, 10),
                page: h
              }
            }
            if (h++, !1 === u || h >= t.nbPages) throw {
              name: "ObjectNotFoundError",
              message: "Object not found."
            };
            return r()
          })
        }()
      }
    },
    tk = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("1/indexes/%s/%s", t.indexName, e)
        }, r)
      }
    },
    tq = function() {
      return function(t, e) {
        for (var r = 0, i = Object.entries(t.hits); r < i.length; r++) {
          var a = n(i[r], 2),
            s = a[0];
          if (a[1].objectID === e) return parseInt(s, 10)
        }
        return -1
      }
    },
    tR = function(t) {
      return function(n, i) {
        var a = i || {},
          s = a.attributesToRetrieve,
          o = r(a, ["attributesToRetrieve"]),
          u = n.map(function(r) {
            return e({
              indexName: t.indexName,
              objectID: r
            }, s ? {
              attributesToRetrieve: s
            } : {})
          });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/objects",
          data: {
            requests: u
          }
        }, o)
      }
    },
    tN = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("1/indexes/%s/rules/%s", t.indexName, e)
        }, r)
      }
    },
    tA = function(t) {
      return function(e) {
        return t.transporter.read({
          method: "GET",
          path: h("1/indexes/%s/settings", t.indexName),
          data: {
            getVersion: 2
          }
        }, e)
      }
    },
    tC = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: "GET",
          path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
        }, r)
      }
    },
    tz = function(t) {
      return function(e, r) {
        return u(tG(t)([e], r).then(function(t) {
          return {
            objectID: t.objectIDs[0],
            taskID: t.taskIDs[0]
          }
        }), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tG = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.createIfNotExists,
          s = r(i, ["createIfNotExists"]),
          o = a ? t0.PartialUpdateObject : t0.PartialUpdateObjectNoCreate;
        return ty(t)(e, o, s)
      }
    },
    tM = function(t) {
      return function(a, s) {
        var o = s || {},
          c = o.safe,
          l = o.autoGenerateObjectIDIfNotExist,
          f = o.batchSize,
          d = r(o, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]),
          p = function(e, r, n, i) {
            return u(t.transporter.write({
              method: v,
              path: h("1/indexes/%s/operation", e),
              data: {
                operation: n,
                destination: r
              }
            }, i), function(e, r) {
              return tZ(t)(e.taskID, r)
            })
          },
          m = Math.random().toString(36).substring(7),
          g = "".concat(t.indexName, "_tmp_").concat(m),
          y = tV({
            appId: t.appId,
            transporter: t.transporter,
            indexName: g
          }),
          b = [],
          x = p(t.indexName, g, "copy", e(e({}, d), {}, {
            scope: ["settings", "synonyms", "rules"]
          }));
        return b.push(x), u((c ? x.wait(d) : x).then(function() {
          var t = y(a, e(e({}, d), {}, {
            autoGenerateObjectIDIfNotExist: l,
            batchSize: f
          }));
          return b.push(t), c ? t.wait(d) : t
        }).then(function() {
          var e = p(g, t.indexName, "move", d);
          return b.push(e), c ? e.wait(d) : e
        }).then(function() {
          return Promise.all(b)
        }).then(function(t) {
          var e = n(t, 3),
            r = e[0],
            a = e[1],
            s = e[2];
          return {
            objectIDs: a.objectIDs,
            taskIDs: [r.taskID].concat(i(a.taskIDs), [s.taskID])
          }
        }), function(t, e) {
          return Promise.all(b.map(function(t) {
            return t.wait(e)
          }))
        })
      }
    },
    tU = function(t) {
      return function(r, n) {
        return tJ(t)(r, e(e({}, n), {}, {
          clearExistingRules: !0
        }))
      }
    },
    tL = function(t) {
      return function(r, n) {
        return tW(t)(r, e(e({}, n), {}, {
          clearExistingSynonyms: !0
        }))
      }
    },
    tB = function(t) {
      return function(e, r) {
        return u(tV(t)([e], r).then(function(t) {
          return {
            objectID: t.objectIDs[0],
            taskID: t.taskIDs[0]
          }
        }), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tV = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.autoGenerateObjectIDIfNotExist,
          s = r(i, ["autoGenerateObjectIDIfNotExist"]),
          o = a ? t0.AddObject : t0.UpdateObject;
        if (o === t0.UpdateObject) {
          var c = !0,
            h = !1,
            l = void 0;
          try {
            for (var f, d = e[Symbol.iterator](); !(c = (f = d.next()).done); c = !0)
              if (void 0 === f.value.objectID) return u(Promise.reject({
                name: "MissingObjectIDError",
                message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
              }))
          } catch (t) {
            h = !0, l = t
          } finally {
            try {
              c || null == d.return || d.return()
            } finally {
              if (h) throw l
            }
          }
        }
        return ty(t)(e, o, s)
      }
    },
    tF = function(t) {
      return function(e, r) {
        return tJ(t)([e], r)
      }
    },
    tJ = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = i.clearExistingRules,
          o = f(r(i, ["forwardToReplicas", "clearExistingRules"]));
        return a && (o.queryParameters.forwardToReplicas = 1), s && (o.queryParameters.clearExistingRules = 1), u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/rules/batch", t.indexName),
          data: e
        }, o), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    t$ = function(t) {
      return function(e, r) {
        return tW(t)([e], r)
      }
    },
    tW = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = i.clearExistingSynonyms,
          o = i.replaceExistingSynonyms,
          c = f(r(i, ["forwardToReplicas", "clearExistingSynonyms", "replaceExistingSynonyms"]));
        return a && (c.queryParameters.forwardToReplicas = 1), (o || s) && (c.queryParameters.replaceExistingSynonyms = 1), u(t.transporter.write({
          method: v,
          path: h("1/indexes/%s/synonyms/batch", t.indexName),
          data: e
        }, c), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tH = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: h("1/indexes/%s/query", t.indexName),
          data: {
            query: e
          },
          cacheable: !0
        }, r)
      }
    },
    tK = function(t) {
      return function(e, r, n) {
        return t.transporter.read({
          method: v,
          path: h("1/indexes/%s/facets/%s/query", t.indexName, e),
          data: {
            facetQuery: r
          },
          cacheable: !0
        }, n)
      }
    },
    tQ = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: h("1/indexes/%s/rules/search", t.indexName),
          data: {
            query: e
          }
        }, r)
      }
    },
    tX = function(t) {
      return function(e, r) {
        return t.transporter.read({
          method: v,
          path: h("1/indexes/%s/synonyms/search", t.indexName),
          data: {
            query: e
          }
        }, r)
      }
    },
    tY = function(t) {
      return function(e, n) {
        var i = n || {},
          a = i.forwardToReplicas,
          s = f(r(i, ["forwardToReplicas"]));
        return a && (s.queryParameters.forwardToReplicas = 1), u(t.transporter.write({
          method: "PUT",
          path: h("1/indexes/%s/settings", t.indexName),
          data: e
        }, s), function(e, r) {
          return tZ(t)(e.taskID, r)
        })
      }
    },
    tZ = function(t) {
      return function(e, r) {
        return o(function(n) {
          var i;
          return (i = t, function(t, e) {
            return i.transporter.read({
              method: "GET",
              path: h("1/indexes/%s/task/%s", i.indexName, t.toString())
            }, e)
          })(e, r).then(function(t) {
            return "published" !== t.status ? n() : void 0
          })
        })
      }
    },
    t0 = {
      AddObject: "addObject",
      UpdateObject: "updateObject",
      PartialUpdateObject: "partialUpdateObject",
      PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
      DeleteObject: "deleteObject"
    },
    t1 = {
      Settings: "settings",
      Synonyms: "synonyms",
      Rules: "rules"
    },
    t2 = function(t) {
      return function(r, n) {
        var i = r.map(function(t) {
          return e(e({}, t), {}, {
            threshold: t.threshold || 0
          })
        });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/recommendations",
          data: {
            requests: i
          },
          cacheable: !0
        }, n)
      }
    },
    t3 = function(t) {
      return function(r, n) {
        return t2(t)(r.map(function(t) {
          return e(e({}, t), {}, {
            fallbackParameters: {},
            model: "bought-together"
          })
        }), n)
      }
    },
    t4 = function(t) {
      return function(r, n) {
        return t2(t)(r.map(function(t) {
          return e(e({}, t), {}, {
            model: "related-products"
          })
        }), n)
      }
    },
    t8 = function(t) {
      return function(r, n) {
        var i = r.map(function(t) {
          return e(e({}, t), {}, {
            model: "trending-facets",
            threshold: t.threshold || 0
          })
        });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/recommendations",
          data: {
            requests: i
          },
          cacheable: !0
        }, n)
      }
    },
    t7 = function(t) {
      return function(r, n) {
        var i = r.map(function(t) {
          return e(e({}, t), {}, {
            model: "trending-items",
            threshold: t.threshold || 0
          })
        });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/recommendations",
          data: {
            requests: i
          },
          cacheable: !0
        }, n)
      }
    },
    t6 = function(t) {
      return function(r, n) {
        return t2(t)(r.map(function(t) {
          return e(e({}, t), {}, {
            model: "looking-similar"
          })
        }), n)
      }
    },
    t9 = function(t) {
      return function(r, n) {
        var i = r.map(function(t) {
          return e(e({}, t), {}, {
            model: "recommended-for-you",
            threshold: t.threshold || 0
          })
        });
        return t.transporter.read({
          method: v,
          path: "1/indexes/*/recommendations",
          data: {
            requests: i
          },
          cacheable: !0
        }, n)
      }
    };

  function t5(t, r, o) {
    var u, h, f, p, m, g, v, y, x, _, P, E, ty = {
        appId: t,
        apiKey: r,
        timeouts: {
          connect: 1,
          read: 2,
          write: 30
        },
        requester: {
          send: function(t) {
            return new Promise(function(e) {
              var r = new XMLHttpRequest;
              r.open(t.method, t.url, !0), Object.keys(t.headers).forEach(function(e) {
                return r.setRequestHeader(e, t.headers[e])
              });
              var n, i = function(t, n) {
                  return setTimeout(function() {
                    r.abort(), e({
                      status: 0,
                      content: n,
                      isTimedOut: !0
                    })
                  }, 1e3 * t)
                },
                a = i(t.connectTimeout, "Connection timeout");
              r.onreadystatechange = function() {
                r.readyState > r.OPENED && void 0 === n && (clearTimeout(a), n = i(t.responseTimeout, "Socket timeout"))
              }, r.onerror = function() {
                0 === r.status && (clearTimeout(a), clearTimeout(n), e({
                  content: r.responseText || "Network request failed",
                  status: r.status,
                  isTimedOut: !1
                }))
              }, r.onload = function() {
                clearTimeout(a), clearTimeout(n), e({
                  content: r.responseText,
                  status: r.status,
                  isTimedOut: !1
                })
              }, r.send(t.data)
            })
          }
        },
        logger: {
          debug: function(t, e) {
            return Promise.resolve()
          },
          info: function(t, e) {
            return Promise.resolve()
          },
          error: function(t, e) {
            return console.error(t, e), Promise.resolve()
          }
        },
        responsesCache: a(),
        requestsCache: a({
          serializable: !1
        }),
        hostsCache: function t(e) {
          var r = i(e.caches),
            a = r.shift();
          return void 0 === a ? {
            get: function(t, e) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                  return Promise.resolve()
                }
              };
              return e().then(function(t) {
                return Promise.all([t, r.miss(t)])
              }).then(function(t) {
                return n(t, 1)[0]
              })
            },
            set: function(t, e) {
              return Promise.resolve(e)
            },
            delete: function(t) {
              return Promise.resolve()
            },
            clear: function() {
              return Promise.resolve()
            }
          } : {
            get: function(e, n) {
              var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                  return Promise.resolve()
                }
              };
              return a.get(e, n, i).catch(function() {
                return t({
                  caches: r
                }).get(e, n, i)
              })
            },
            set: function(e, n) {
              return a.set(e, n).catch(function() {
                return t({
                  caches: r
                }).set(e, n)
              })
            },
            delete: function(e) {
              return a.delete(e).catch(function() {
                return t({
                  caches: r
                }).delete(e)
              })
            },
            clear: function() {
              return a.clear().catch(function() {
                return t({
                  caches: r
                }).clear()
              })
            }
          }
        }({
          caches: [(u = {
            key: "".concat("4.23.3", "-").concat(t)
          }, f = "algoliasearch-client-js-".concat(u.key), p = function() {
            return void 0 === h && (h = u.localStorage || window.localStorage), h
          }, m = function() {
            return JSON.parse(p().getItem(f) || "{}")
          }, g = function(t) {
            p().setItem(f, JSON.stringify(t))
          }, v = function() {
            var t = u.timeToLive ? 1e3 * u.timeToLive : null,
              e = Object.fromEntries(Object.entries(m()).filter(function(t) {
                return void 0 !== n(t, 2)[1].timestamp
              }));
            g(e), t && g(Object.fromEntries(Object.entries(e).filter(function(e) {
              var r = n(e, 2)[1],
                i = (new Date).getTime();
              return !(r.timestamp + t < i)
            })))
          }, {
            get: function(t, e) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                miss: function() {
                  return Promise.resolve()
                }
              };
              return Promise.resolve().then(function() {
                v();
                var e = JSON.stringify(t);
                return m()[e]
              }).then(function(t) {
                return Promise.all([t ? t.value : e(), void 0 !== t])
              }).then(function(t) {
                var e = n(t, 2),
                  i = e[0];
                return Promise.all([i, e[1] || r.miss(i)])
              }).then(function(t) {
                return n(t, 1)[0]
              })
            },
            set: function(t, e) {
              return Promise.resolve().then(function() {
                var r = m();
                return r[JSON.stringify(t)] = {
                  timestamp: (new Date).getTime(),
                  value: e
                }, p().setItem(f, JSON.stringify(r)), e
              })
            },
            delete: function(t) {
              return Promise.resolve().then(function() {
                var e = m();
                delete e[JSON.stringify(t)], p().setItem(f, JSON.stringify(e))
              })
            },
            clear: function() {
              return Promise.resolve().then(function() {
                p().removeItem(f)
              })
            }
          }), a()]
        }),
        userAgent: (y = {
          value: "Algolia for JavaScript (".concat("4.23.3", ")"),
          add: function(t) {
            var e = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
            return -1 === y.value.indexOf(e) && (y.value = "".concat(y.value).concat(e)), y
          }
        }).add({
          segment: "Browser"
        })
      },
      t0 = e(e({}, ty), o),
      t1 = function() {
        return function(t) {
          var r, n, i, a;
          return n = (r = e(e(e({}, ty), t), {}, {
            methods: {
              getPersonalizationStrategy: I,
              setPersonalizationStrategy: j
            }
          })).region || "us", i = s(l.WithinHeaders, r.appId, r.apiKey), a = b(e(e({
            hosts: [{
              url: "personalization.".concat(n, ".algolia.com")
            }]
          }, r), {}, {
            headers: e(e(e({}, i.headers()), {
              "content-type": "application/json"
            }), r.headers),
            queryParameters: e(e({}, i.queryParameters()), r.queryParameters)
          })), c({
            appId: r.appId,
            transporter: a
          }, r.methods)
        }
      };
    return _ = (x = e(e({}, t0), {}, {
      methods: {
        search: tn,
        searchForFacetValues: ti,
        multipleBatch: te,
        multipleGetObjects: tr,
        multipleQueries: tn,
        copyIndex: A,
        copySettings: z,
        copySynonyms: G,
        copyRules: C,
        moveIndex: tt,
        listIndices: Y,
        getLogs: J,
        listClusters: X,
        multipleSearchForFacetValues: ti,
        getApiKey: B,
        addApiKey: k,
        listApiKeys: Q,
        updateApiKey: tf,
        deleteApiKey: U,
        restoreApiKey: to,
        assignUserID: q,
        assignUserIDs: R,
        getUserID: W,
        searchUserIDs: th,
        listUserIDs: Z,
        getTopUserIDs: $,
        removeUserID: ta,
        hasPendingMappings: H,
        clearDictionaryEntries: N,
        deleteDictionaryEntries: L,
        getDictionarySettings: F,
        getAppTask: V,
        replaceDictionaryEntries: ts,
        saveDictionaryEntries: tu,
        searchDictionaryEntries: tc,
        setDictionarySettings: tl,
        waitAppTask: td,
        customRequest: M,
        initIndex: function(t) {
          return function(e) {
            return K(t)(e, {
              methods: {
                batch: tp,
                delete: tw,
                findAnswers: tj,
                getObject: tk,
                getObjects: tR,
                saveObject: tB,
                saveObjects: tV,
                search: tH,
                searchForFacetValues: tK,
                waitTask: tZ,
                setSettings: tY,
                getSettings: tA,
                partialUpdateObject: tz,
                partialUpdateObjects: tG,
                deleteObject: tS,
                deleteObjects: tT,
                deleteBy: tP,
                clearObjects: tb,
                browseObjects: tm,
                getObjectPosition: tq,
                findObject: tE,
                exists: tI,
                saveSynonym: t$,
                saveSynonyms: tW,
                getSynonym: tC,
                searchSynonyms: tX,
                browseSynonyms: tv,
                deleteSynonym: tD,
                clearSynonyms: t_,
                replaceAllObjects: tM,
                replaceAllSynonyms: tL,
                searchRules: tQ,
                getRule: tN,
                deleteRule: tO,
                saveRule: tF,
                saveRules: tJ,
                replaceAllRules: tU,
                browseRules: tg,
                clearRules: tx
              }
            })
          }
        },
        initAnalytics: function() {
          return function(t) {
            var r, n, i, a;
            return n = (r = e(e(e({}, ty), t), {}, {
              methods: {
                addABTest: w,
                getABTest: T,
                getABTests: O,
                stopABTest: D,
                deleteABTest: S
              }
            })).region || "us", i = s(l.WithinHeaders, r.appId, r.apiKey), a = b(e(e({
              hosts: [{
                url: "analytics.".concat(n, ".algolia.com")
              }]
            }, r), {}, {
              headers: e(e(e({}, i.headers()), {
                "content-type": "application/json"
              }), r.headers),
              queryParameters: e(e({}, i.queryParameters()), r.queryParameters)
            })), c({
              appId: r.appId,
              transporter: a
            }, r.methods)
          }
        },
        initPersonalization: t1,
        initRecommendation: function() {
          return function(t) {
            return t0.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), t1()(t)
          }
        },
        getRecommendations: t2,
        getFrequentlyBoughtTogether: t3,
        getLookingSimilar: t6,
        getRecommendedForYou: t9,
        getRelatedProducts: t4,
        getTrendingFacets: t8,
        getTrendingItems: t7
      }
    })).appId, P = s(void 0 !== x.authMode ? x.authMode : l.WithinHeaders, _, x.apiKey), c({
      transporter: E = b(e(e({
        hosts: [{
          url: "".concat(_, "-dsn.algolia.net"),
          accept: d.Read
        }, {
          url: "".concat(_, ".algolia.net"),
          accept: d.Write
        }].concat(function(t) {
          for (var e = t.length - 1; e > 0; e--) {
            var r = Math.floor(Math.random() * (e + 1)),
              n = t[e];
            t[e] = t[r], t[r] = n
          }
          return t
        }([{
          url: "".concat(_, "-1.algolianet.com")
        }, {
          url: "".concat(_, "-2.algolianet.com")
        }, {
          url: "".concat(_, "-3.algolianet.com")
        }]))
      }, x), {}, {
        headers: e(e(e({}, P.headers()), {
          "content-type": "application/x-www-form-urlencoded"
        }), x.headers),
        queryParameters: e(e({}, P.queryParameters()), x.queryParameters)
      })),
      appId: _,
      addAlgoliaAgent: function(t, e) {
        E.userAgent.add({
          segment: t,
          version: e
        })
      },
      clearCache: function() {
        return Promise.all([E.requestsCache.clear(), E.responsesCache.clear()]).then(function() {})
      }
    }, x.methods)
  }
  return t5.version = "4.23.3", t5
}, "object" == typeof e ? t.exports = n() : "function" == typeof define && define.amd ? define(n) : (r = r || self).algoliasearch = n()