"use strict";
n.d(e, {
  d: function() {
    return d
  }
});
var r = n(876122),
  i = n(793884),
  s = n(46834),
  a = n(829919),
  o = n(529866),
  u = n(862315),
  l = n(590171),
  c = n(643487);
class d {
  static __initStatic() {
    this.id = "GlobalHandlers"
  }
  __init() {
    this.name = d.id
  }
  __init2() {
    this._installFunc = {
      onerror: h,
      onunhandledrejection: _
    }
  }
  constructor(t) {
    d.prototype.__init.call(this), d.prototype.__init2.call(this), this._options = {
      onerror: !0,
      onunhandledrejection: !0,
      ...t
    }
  }
  setupOnce() {
    Error.stackTraceLimit = 50;
    let t = this._options;
    for (let e in t) {
      let n = this._installFunc[e];
      n && t[e] && (function(t) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && o.kg.log(`Global Handler attached: ${t}`)
      }(e), n(), this._installFunc[e] = void 0)
    }
  }
}

function h() {
  (0, i.oq)("error", t => {
    let [e, n, r] = m();
    if (!e.getIntegration(d)) return;
    let {
      msg: i,
      url: a,
      line: o,
      column: u,
      error: h
    } = t;
    if ((0, c.Wz)() || h && h.__sentry_own_request__) return;
    let _ = void 0 === h && (0, s.HD)(i) ? function(t, e, n, r) {
      let i = (0, s.VW)(t) ? t.message : t,
        a = "Error",
        o = i.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i);
      return o && (a = o[1], i = o[2]), f({
        exception: {
          values: [{
            type: a,
            value: i
          }]
        }
      }, e, n, r)
    }(i, a, o, u) : f((0, l.ME)(n, h || i, void 0, r, !1), a, o, u);
    _.level = "error", p(e, h, _, "onerror")
  })
}

function _() {
  (0, i.oq)("unhandledrejection", t => {
    let [e, n, r] = m();
    if (!e.getIntegration(d)) return;
    let i = t;
    try {
      "reason" in t ? i = t.reason : "detail" in t && "reason" in t.detail && (i = t.detail.reason)
    } catch (t) {}
    if ((0, c.Wz)() || i && i.__sentry_own_request__) return !0;
    let a = (0, s.pt)(i) ? function(t) {
      return {
        exception: {
          values: [{
            type: "UnhandledRejection",
            value: `Non-Error promise rejection captured with value: ${String(t)}`
          }]
        }
      }
    }(i) : (0, l.ME)(n, i, void 0, r, !0);
    a.level = "error", p(e, i, a, "onunhandledrejection")
  })
}
d.__initStatic();

function f(t, e, n, r) {
  let i = t.exception = t.exception || {},
    o = i.values = i.values || [],
    u = o[0] = o[0] || {},
    l = u.stacktrace = u.stacktrace || {},
    c = l.frames = l.frames || [],
    d = isNaN(parseInt(r, 10)) ? void 0 : r,
    h = isNaN(parseInt(n, 10)) ? void 0 : n,
    _ = (0, s.HD)(e) && e.length > 0 ? e : (0, a.l4)();
  return 0 === c.length && c.push({
    colno: d,
    filename: _,
    function: "?",
    in_app: !0,
    lineno: h
  }), t
}

function p(t, e, n, r) {
  (0, u.EG)(n, {
    handled: !1,
    type: r
  }), t.captureEvent(n, {
    originalException: e
  })
}

function m() {
  let t = (0, r.Gd)(),
    e = t.getClient(),
    n = e && e.getOptions() || {
      stackParser: () => [],
      attachStacktrace: !1
    };
  return [t, n.stackParser, n.attachStacktrace]
}