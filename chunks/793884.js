let n, _, a;
r.d(e, {
  oq: function() {
return N;
  },
  xU: function() {
return u;
  }
});
var i = r(46834),
  o = r(529866),
  E = r(442853),
  s = r(432038),
  c = r(698892),
  I = r(24716),
  R = r(30865);
let T = (0, I.Rf)(),
  u = '__sentry_xhr_v2__',
  l = {},
  A = {};

function N(t, e) {
  l[t] = l[t] || [], l[t].push(e), ! function(t) {
if (!A[t])
  switch (A[t] = !0, t) {
    case 'console':
      (function() {
        if ('console' in T)
          o.RU.forEach(function(t) {
            if (t in T.console)
              (0, E.hl)(T.console, t, function(e) {
                return function(...r) {
                  d('console', {
                    args: r,
                    level: t
                  }), e && e.apply(T.console, r);
                };
              });
          });
      }());
      break;
    case 'dom':
      (function() {
        if (!('document' in T))
          return;
        let t = d.bind(null, 'dom'),
          e = p(t, !0);
        T.document.addEventListener('click', e, !1), T.document.addEventListener('keypress', e, !1), [
          'EventTarget',
          'Node'
        ].forEach(e => {
          let r = T[e] && T[e].prototype;
          if (!!r && !!r.hasOwnProperty && !!r.hasOwnProperty('addEventListener'))
            (0, E.hl)(r, 'addEventListener', function(e) {
              return function(r, n, _) {
                if ('click' === r || 'keypress' == r)
                  try {
                    let n = this.__sentry_instrumentation_handlers__ = this.__sentry_instrumentation_handlers__ || {},
                      a = n[r] = n[r] || {
                        refCount: 0
                      };
                    if (!a.handler) {
                      let n = p(t);
                      a.handler = n, e.call(this, r, n, _);
                    }
                    a.refCount++;
                  } catch (t) {}
                return e.call(this, r, n, _);
              };
            }), (0, E.hl)(r, 'removeEventListener', function(t) {
              return function(e, r, n) {
                if ('click' === e || 'keypress' == e)
                  try {
                    let r = this.__sentry_instrumentation_handlers__ || {},
                      _ = r[e];
                    _ && (_.refCount--, _.refCount <= 0 && (t.call(this, e, _.handler, n), _.handler = void 0, delete r[e]), 0 === Object.keys(r).length && delete this.__sentry_instrumentation_handlers__);
                  } catch (t) {}
                return t.call(this, e, r, n);
              };
            });
        });
      }());
      break;
    case 'xhr':
      (function() {
        if (!('XMLHttpRequest' in T))
          return;
        let t = XMLHttpRequest.prototype;
        (0, E.hl)(t, 'open', function(t) {
          return function(...e) {
            let r = e[1],
              n = this[u] = {
                method: (0, i.HD)(e[0]) ? e[0].toUpperCase() : e[0],
                url: e[1],
                request_headers: {}
              };
            (0, i.HD)(r) && 'POST' === n.method && r.match(/sentry_key/) && (this.__sentry_own_request__ = !0);
            let _ = () => {
              let t = this[u];
              if (!!t) {
                if (4 === this.readyState) {
                  try {
                    t.status_code = this.status;
                  } catch (t) {}
                  d('xhr', {
                    args: e,
                    endTimestamp: Date.now(),
                    startTimestamp: Date.now(),
                    xhr: this
                  });
                }
              }
            };
            return 'onreadystatechange' in this && 'function' == typeof this.onreadystatechange ? (0, E.hl)(this, 'onreadystatechange', function(t) {
              return function(...e) {
                return _(), t.apply(this, e);
              };
            }) : this.addEventListener('readystatechange', _), (0, E.hl)(this, 'setRequestHeader', function(t) {
              return function(...e) {
                let [r, n] = e, _ = this[u];
                return _ && (_.request_headers[r.toLowerCase()] = n), t.apply(this, e);
              };
            }), t.apply(this, e);
          };
        }), (0, E.hl)(t, 'send', function(t) {
          return function(...e) {
            let r = this[u];
            return r && void 0 !== e[0] && (r.body = e[0]), d('xhr', {
              args: e,
              startTimestamp: Date.now(),
              xhr: this
            }), t.apply(this, e);
          };
        });
      }());
      break;
    case 'fetch':
      (function() {
        if (!!(0, c.t$)())
          (0, E.hl)(T, 'fetch', function(t) {
            return function(...e) {
              let {
                method: r,
                url: n
              } = function(t) {
                if (0 === t.length)
                  return {
                    method: 'GET',
                    url: ''
                  };
                if (2 === t.length) {
                  let [e, r] = t;
                  return {
                    url: S(e),
                    method: O(r, 'method') ? String(r.method).toUpperCase() : 'GET'
                  };
                }
                let e = t[0];
                return {
                  url: S(e),
                  method: O(e, 'method') ? String(e.method).toUpperCase() : 'GET'
                };
              }(e), _ = {
                args: e,
                fetchData: {
                  method: r,
                  url: n
                },
                startTimestamp: Date.now()
              };
              return d('fetch', {
                ..._
              }), t.apply(T, e).then(t => (d('fetch', {
                ..._,
                endTimestamp: Date.now(),
                response: t
              }), t), t => {
                throw d('fetch', {
                  ..._,
                  endTimestamp: Date.now(),
                  error: t
                }), t;
              });
            };
          });
      }());
      break;
    case 'history':
      (function() {
        if (!(0, R.B)())
          return;
        let t = T.onpopstate;

        function e(t) {
          return function(...e) {
            let r = e.length > 2 ? e[2] : void 0;
            if (r) {
              let t = n,
                e = String(r);
              n = e, d('history', {
                from: t,
                to: e
              });
            }
            return t.apply(this, e);
          };
        }
        T.onpopstate = function(...e) {
          let r = T.location.href,
            _ = n;
          if (n = r, d('history', {
              from: _,
              to: r
            }), t)
            try {
              return t.apply(this, e);
            } catch (t) {}
        }, (0, E.hl)(T.history, 'pushState', e), (0, E.hl)(T.history, 'replaceState', e);
      }());
      break;
    case 'error':
      (function() {
        D = T.onerror, T.onerror = function(t, e, r, n, _) {
          return d('error', {
            column: n,
            error: _,
            line: r,
            msg: t,
            url: e
          }), !!D && !D.__SENTRY_LOADER__ && D.apply(this, arguments);
        }, T.onerror.__SENTRY_INSTRUMENTED__ = !0;
      }());
      break;
    case 'unhandledrejection':
      (function() {
        f = T.onunhandledrejection, T.onunhandledrejection = function(t) {
          return d('unhandledrejection', t), !f || !!f.__SENTRY_LOADER__ || f.apply(this, arguments);
        }, T.onunhandledrejection.__SENTRY_INSTRUMENTED__ = !0;
      }());
      break;
    default:
      ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.warn('unknown instrumentation type:', t);
      return;
  }
  }(t);
}

function d(t, e) {
  if (!!t && !!l[t])
for (let r of l[t] || [])
  try {
    r(e);
  } catch (e) {
    ('undefined' == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.error(`Error while triggering instrumentation handler.
Type: ${ t }
Name: ${ (0, s.$P)(r) }
Error:`, e);
  }
}

function O(t, e) {
  return !!t && 'object' == typeof t && !!t[e];
}

function S(t) {
  return 'string' == typeof t ? t : t ? O(t, 'url') ? t.url : t.toString ? t.toString() : '' : '';
}

function p(t, e = !1) {
  return r => {
if (!r || a === r || function(t) {
    if ('keypress' !== t.type)
      return !1;
    try {
      let e = t.target;
      if (!e || !e.tagName)
        return !0;
      if ('INPUT' === e.tagName || 'TEXTAREA' === e.tagName || e.isContentEditable)
        return !1;
    } catch (t) {}
    return !0;
  }(r))
  return;
let n = 'keypress' === r.type ? 'input' : r.type;
void 0 === _ ? (t({
  event: r,
  name: n,
  global: e
}), a = r) : function(t, e) {
  if (!t || t.type !== e.type)
    return !0;
  try {
    if (t.target !== e.target)
      return !0;
  } catch (t) {}
  return !1;
}(a, r) && (t({
  event: r,
  name: n,
  global: e
}), a = r), clearTimeout(_), _ = T.setTimeout(() => {
  _ = void 0;
}, 1000);
  };
}
let D = null,
  f = null;