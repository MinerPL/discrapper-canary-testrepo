"use strict";
n.d(e, {
  GJ: function() {
    return l
  },
  ME: function() {
    return p
  },
  aB: function() {
    return f
  },
  dr: function() {
    return _
  }
});
var r = n(876122),
  i = n(46834),
  s = n(10674),
  a = n(862315),
  o = n(880803),
  u = n(442853);

function l(t, e) {
  let n = d(t, e),
    r = {
      type: e && e.name,
      value: function(t) {
        let e = t && t.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
      }(e)
    };
  return n.length && (r.stacktrace = {
    frames: n
  }), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
}

function c(t, e) {
  return {
    exception: {
      values: [l(t, e)]
    }
  }
}

function d(t, e) {
  let n = e.stacktrace || e.stack || "",
    r = function(t) {
      if (t) {
        if ("number" == typeof t.framesToPop) return t.framesToPop;
        if (h.test(t.message)) return 1
      }
      return 0
    }(e);
  try {
    return t(n, r)
  } catch (t) {}
  return []
}
let h = /Minified React error #\d+;/i;

function _(t, e, n, r) {
  let i = p(t, e, n && n.syntheticException || void 0, r);
  return (0, a.EG)(i), i.level = "error", n && n.event_id && (i.event_id = n.event_id), (0, o.WD)(i)
}

function f(t, e, n = "info", r, i) {
  let s = m(t, e, r && r.syntheticException || void 0, i);
  return s.level = n, r && r.event_id && (s.event_id = r.event_id), (0, o.WD)(s)
}

function p(t, e, n, o, l) {
  let h;
  if ((0, i.VW)(e) && e.error) return c(t, e.error);
  if ((0, i.TX)(e) || (0, i.fm)(e)) {
    if ("stack" in e) h = c(t, e);
    else {
      let r = e.name || ((0, i.TX)(e) ? "DOMError" : "DOMException"),
        s = e.message ? `${r}: ${e.message}` : r;
      h = m(t, s, n, o), (0, a.Db)(h, s)
    }
    return "code" in e && (h.tags = {
      ...h.tags,
      "DOMException.code": `${e.code}`
    }), h
  }
  return (0, i.VZ)(e) ? c(t, e) : (0, i.PO)(e) || (0, i.cO)(e) ? (h = function(t, e, n, a) {
    let o = (0, r.Gd)().getClient(),
      l = o && o.getOptions().normalizeDepth,
      c = {
        exception: {
          values: [{
            type: (0, i.cO)(e) ? e.constructor.name : a ? "UnhandledRejection" : "Error",
            value: function(t, {
              isUnhandledRejection: e
            }) {
              let n = (0, u.zf)(t),
                r = e ? "promise rejection" : "exception";
              if ((0, i.VW)(t)) return `Event \`ErrorEvent\` captured as ${r} with message \`${t.message}\``;
              if ((0, i.cO)(t)) {
                let e = function(t) {
                  try {
                    let e = Object.getPrototypeOf(t);
                    return e ? e.constructor.name : void 0
                  } catch (t) {}
                }(t);
                return `Event \`${e}\` (type=${t.type}) captured as ${r}`
              }
              return `Object captured as ${r} with keys: ${n}`
            }(e, {
              isUnhandledRejection: a
            })
          }]
        },
        extra: {
          __serialized__: (0, s.Qy)(e, l)
        }
      };
    if (n) {
      let e = d(t, n);
      e.length && (c.exception.values[0].stacktrace = {
        frames: e
      })
    }
    return c
  }(t, e, n, l), (0, a.EG)(h, {
    synthetic: !0
  }), h) : (h = m(t, e, n, o), (0, a.Db)(h, `${e}`, void 0), (0, a.EG)(h, {
    synthetic: !0
  }), h)
}

function m(t, e, n, r) {
  let i = {
    message: e
  };
  if (r && n) {
    let r = d(t, n);
    r.length && (i.exception = {
      values: [{
        value: e,
        stacktrace: {
          frames: r
        }
      }]
    })
  }
  return i
}