"use strict";
n(47120), n(411104);
var i, r = n(512722),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(202226),
  u = n(442837),
  _ = n(570140),
  d = n(710845),
  c = n(358085),
  E = n(998502),
  I = n(228488),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let S = {},
  f = {},
  N = {},
  A = {},
  m = {},
  O = new Set,
  R = () => M.emitChange(),
  C = a().debounce(R, 150);

function p(e) {
  let t = N[e];
  null != t && !t.closed && (S[e] = {
    x: t.screenX,
    y: t.screenY,
    width: t.innerWidth,
    height: t.innerHeight,
    alwaysOnTop: !!c.isPlatformEmbedded && f[e]
  })
}

function g(e) {
  let t = N[e];
  null != t && (!t.closed && p(e), t.close(), ! function(e) {
    let t = N[e];
    s()(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", R), t.removeEventListener("blur", R), t.removeEventListener("resize", C);
    let n = A[e];
    s()(null != n, "Window root was null while unmounting"), n.unmount(), delete N[e], delete f[e], delete m[e], delete A[e]
  }(e), M.emitChange())
}

function L(e) {
  let {
    data: t
  } = e;
  if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
  let n = t.discordPopoutEvent;
  if (null != n.key) switch (n.type) {
    case T.l9w.LOADED:
      var i;
      return i = n.key, void(O.has(i) && (! function(e) {
        let t = N[e],
          n = m[e];
        if (null == t) {
          new d.Z("PopoutWindowStore").warn("Failed to open window", e);
          return
        }
        let i = t.document;
        (0, I.uF)(i, R), t.addEventListener("focus", R), t.addEventListener("blur", R), t.addEventListener("resize", C), ! function(e, t) {
          let n = t.document,
            i = document.querySelectorAll('link[rel="stylesheet"]'),
            r = "".concat(window.location.protocol, "//").concat(window.location.host);
          for (let e of i) {
            if (!e.href.startsWith(r)) continue;
            let t = n.createElement("link");
            t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, s()(null != n.head, "Document head was null"), n.head.appendChild(t)
          }
        }(0, t);
        let r = (0, l.createRoot)(i.getElementById("app-mount"));
        s()(null != r, "No render target for popout!"), A[e] = r, r.render(n(e))
      }(i), O.delete(i), M.emitChange()));
    case T.l9w.UNLOADED:
      return g(n.key)
  }
}

function v() {
  for (let e of Object.keys(N)) {
    let t = N[e];
    null != t && t.close()
  }
}
class D extends(i = u.ZP.PersistedStore) {
  initialize(e) {
    window.addEventListener("message", L), window.addEventListener("beforeunload", v), S = null != e ? e : {}
  }
  getWindow(e) {
    return N[e]
  }
  getWindowState(e) {
    return S[e]
  }
  getWindowKeys() {
    return Object.keys(N)
  }
  getWindowOpen(e) {
    let t = N[e];
    return null != t && !t.closed
  }
  getIsAlwaysOnTop(e) {
    return !!f[e]
  }
  getWindowFocused(e) {
    var t, n;
    let i = N[e];
    return null !== (n = null == i ? void 0 : null === (t = i.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
  }
  getWindowVisible(e) {
    var t;
    let n = N[e];
    return (null == n ? void 0 : null === (t = n.document) || void 0 === t ? void 0 : t.visibilityState) === "visible"
  }
  getState() {
    return S
  }
  unmountWindow(e) {
    return g(e)
  }
}
h(D, "displayName", "PopoutWindowStore"), h(D, "persistKey", "PopoutWindowStore");
let M = new D(_.Z, {
  POPOUT_WINDOW_OPEN: function(e) {
    let {
      key: t,
      features: n,
      render: i
    } = e;
    if (c.isPlatformEmbedded && !E.ZP.supportsFeature(T.eRX.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
    let r = N[t];
    if (null != r && !r.closed) return c.isPlatformEmbedded ? E.ZP.focus(t) : r.focus(), !1;
    let {
      defaultWidth: s,
      defaultHeight: o,
      defaultAlwaysOnTop: a = !1,
      ...l
    } = n, u = l, _ = a, d = S[t];
    if (null != d) {
      let {
        width: e,
        height: t,
        x: n,
        y: i,
        alwaysOnTop: r
      } = d;
      _ = null != r ? r : a, u = {
        width: null != e && 0 !== e ? e : s,
        height: null != t && 0 !== t ? t : o,
        left: n,
        top: i,
        ...u
      }
    }
    let I = window.open(T.Z5c.POPOUT_WINDOW, t, function(e) {
      let t = "";
      for (let n of Object.keys(e)) {
        let i = e[n];
        void 0 !== i && ("boolean" == typeof i && (i = i ? "yes" : "no"), t += "".concat(n, "=").concat(i, ","))
      }
      return t
    }(u));
    I.windowKey = t, null == I || I.focus(), N[t] = I, m[t] = i, c.isPlatformEmbedded && (E.ZP.setAlwaysOnTop(t, _), f[t] = _, E.ZP.isAlwaysOnTop(t).then(e => f[t] = e)), O.add(t)
  },
  POPOUT_WINDOW_CLOSE: function(e) {
    let {
      key: t
    } = e, n = N[t];
    null != n && !n.closed && (p(t), n.close())
  },
  POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
    let {
      key: t,
      alwaysOnTop: n
    } = e;
    c.isPlatformEmbedded && (E.ZP.setAlwaysOnTop(t, n), f[t] = n, E.ZP.isAlwaysOnTop(t).then(e => f[t] = e))
  },
  LOGOUT: v
});
t.Z = M