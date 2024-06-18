"use strict";
let r, i, s;
n.d(e, {
  oq: function() {
    return g
  },
  xU: function() {
    return f
  }
});
var a = n(46834),
  o = n(529866),
  u = n(442853),
  l = n(432038),
  c = n(698892),
  d = n(24716),
  h = n(30865);
let _ = (0, d.Rf)(),
  f = "__sentry_xhr_v2__",
  p = {},
  m = {};

function g(t, e) {
  p[t] = p[t] || [], p[t].push(e), ! function(t) {
    if (!m[t]) switch (m[t] = !0, t) {
      case "console":
        (function() {
          if ("console" in _) o.RU.forEach(function(t) {
            if (t in _.console)(0, u.hl)(_.console, t, function(e) {
              return function(...n) {
                y("console", {
                  args: n,
                  level: t
                }), e && e.apply(_.console, n)
              }
            })
          })
        })();
        break;
      case "dom":
        (function() {
          if (!("document" in _)) return;
          let t = y.bind(null, "dom"),
            e = E(t, !0);
          _.document.addEventListener("click", e, !1), _.document.addEventListener("keypress", e, !1), ["EventTarget", "Node"].forEach(e => {
            let n = _[e] && _[e].prototype;
            if (!!n && !!n.hasOwnProperty && !!n.hasOwnProperty("addEventListener"))(0, u.hl)(n, "addEventListener", function(e) {
              return function(n, r, i) {
                if ("click" === n || "keypress" == n) try {
                  let r = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                    s = r[n] = r[n] || {
                      refCount: 0
                    };
                  if (!s.handler) {
                    let r = E(t);
                    s.handler = r, e.call(this, n, r, i)
                  }
                  s.refCount++
                } catch (t) {}
                return e.call(this, n, r, i)
              }
            }), (0, u.hl)(n, "removeEventListener", function(t) {
              return function(e, n, r) {
                if ("click" === e || "keypress" == e) try {
                  let n = this.__sentry_instrumentation_handlers__ || {},
                    i = n[e];
                  i && (i.refCount--, i.refCount <= 0 && (t.call(this, e, i.handler, r), i.handler = void 0, delete n[e]), 0 === Object.keys(n).length && delete this.__sentry_instrumentation_handlers__)
                } catch (t) {}
                return t.call(this, e, n, r)
              }
            })
          })
        })();
        break;
      case "xhr":
        (function() {
          if (!("XMLHttpRequest" in _)) return;
          let t = XMLHttpRequest.prototype;
          (0, u.hl)(t, "open", function(t) {
            return function(...e) {
              let n = e[1],
                r = this[f] = {
                  method: (0, a.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                  url: e[1],
                  request_headers: {}
                };
              (0, a.HD)(n) && "POST" === r.method && n.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
              let i = () => {
                let t = this[f];
                if (!!t) {
                  if (4 === this.readyState) {
                    try {
                      t.status_code = this.status
                    } catch (t) {}
                    y("xhr", {
                      args: e,
                      endTimestamp: Date.now(),
                      startTimestamp: Date.now(),
                      xhr: this
                    })
                  }
                }
              };
              return "onreadystatechange" in this && "function" == typeof this.onreadystatechange ? (0, u.hl)(this, "onreadystatechange", function(t) {
                return function(...e) {
                  return i(), t.apply(this, e)
                }
              }) : this.addEventListener("readystatechange", i), (0, u.hl)(this, "setRequestHeader", function(t) {
                return function(...e) {
                  let [n, r] = e, i = this[f];
                  return i && (i.request_headers[n.toLowerCase()] = r), t.apply(this, e)
                }
              }), t.apply(this, e)
            }
          }), (0, u.hl)(t, "send", function(t) {
            return function(...e) {
              let n = this[f];
              return n && void 0 !== e[0] && (n.body = e[0]), y("xhr", {
                args: e,
                startTimestamp: Date.now(),
                xhr: this
              }), t.apply(this, e)
            }
          })
        })();
        break;
      case "fetch":
        (function() {
          if (!!(0, c.t$)())(0, u.hl)(_, "fetch", function(t) {
            return function(...e) {
              let {
                method: n,
                url: r
              } = function(t) {
                if (0 === t.length) return {
                  method: "GET",
                  url: ""
                };
                if (2 === t.length) {
                  let [e, n] = t;
                  return {
                    url: b(e),
                    method: v(n, "method") ? String(n.method).toUpperCase() : "GET"
                  }
                }
                let e = t[0];
                return {
                  url: b(e),
                  method: v(e, "method") ? String(e.method).toUpperCase() : "GET"
                }
              }(e), i = {
                args: e,
                fetchData: {
                  method: n,
                  url: r
                },
                startTimestamp: Date.now()
              };
              return y("fetch", {
                ...i
              }), t.apply(_, e).then(t => (y("fetch", {
                ...i,
                endTimestamp: Date.now(),
                response: t
              }), t), t => {
                throw y("fetch", {
                  ...i,
                  endTimestamp: Date.now(),
                  error: t
                }), t
              })
            }
          })
        })();
        break;
      case "history":
        (function() {
          if (!(0, h.B)()) return;
          let t = _.onpopstate;

          function e(t) {
            return function(...e) {
              let n = e.length > 2 ? e[2] : void 0;
              if (n) {
                let t = r,
                  e = String(n);
                r = e, y("history", {
                  from: t,
                  to: e
                })
              }
              return t.apply(this, e)
            }
          }
          _.onpopstate = function(...e) {
            let n = _.location.href,
              i = r;
            if (r = n, y("history", {
                from: i,
                to: n
              }), t) try {
              return t.apply(this, e)
            } catch (t) {}
          }, (0, u.hl)(_.history, "pushState", e), (0, u.hl)(_.history, "replaceState", e)
        })();
        break;
      case "error":
        (function() {
          S = _.onerror, _.onerror = function(t, e, n, r, i) {
            return y("error", {
              column: r,
              error: i,
              line: n,
              msg: t,
              url: e
            }), !!S && !S.__SENTRY_LOADER__ && S.apply(this, arguments)
          }, _.onerror.__SENTRY_INSTRUMENTED__ = !0
        })();
        break;
      case "unhandledrejection":
        (function() {
          w = _.onunhandledrejection, _.onunhandledrejection = function(t) {
            return y("unhandledrejection", t), !w || !!w.__SENTRY_LOADER__ || w.apply(this, arguments)
          }, _.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0
        })();
        break;
      default:
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn("unknown instrumentation type:", t);
        return
    }
  }(t)
}

function y(t, e) {
  if (!!t && !!p[t])
    for (let n of p[t] || []) try {
      n(e)
    } catch (e) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`Error while triggering instrumentation handler.
Type: ${t}
Name: ${(0,l.$P)(n)}
Error:`, e)
    }
}

function v(t, e) {
  return !!t && "object" == typeof t && !!t[e]
}

function b(t) {
  return "string" == typeof t ? t : t ? v(t, "url") ? t.url : t.toString ? t.toString() : "" : ""
}

function E(t, e = !1) {
  return n => {
    if (!n || s === n || function(t) {
        if ("keypress" !== t.type) return !1;
        try {
          let e = t.target;
          if (!e || !e.tagName) return !0;
          if ("INPUT" === e.tagName || "TEXTAREA" === e.tagName || e.isContentEditable) return !1
        } catch (t) {}
        return !0
      }(n)) return;
    let r = "keypress" === n.type ? "input" : n.type;
    void 0 === i ? (t({
      event: n,
      name: r,
      global: e
    }), s = n) : function(t, e) {
      if (!t || t.type !== e.type) return !0;
      try {
        if (t.target !== e.target) return !0
      } catch (t) {}
      return !1
    }(s, n) && (t({
      event: n,
      name: r,
      global: e
    }), s = n), clearTimeout(i), i = _.setTimeout(() => {
      i = void 0
    }, 1e3)
  }
}
let S = null,
  w = null