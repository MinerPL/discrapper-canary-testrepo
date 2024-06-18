"use strict";
let i, r, s;
var o, a, l, u, _ = n(772848),
  d = n(442837),
  c = n(433517),
  E = n(846519),
  I = n(570140),
  T = n(899742),
  h = n(598077),
  S = n(12647),
  f = n(358085),
  N = n(374023);
let A = "BrowserHandoffStore",
  m = !1,
  O = new E.V7;

function R() {
  null != i && null != r && (window.open("".concat(i, "&key=").concat(r)), S.Z.focus(null, !0))
}

function C() {
  r = null, O.stop(), m = !1, c.K.set(A, m)
}

function p() {
  C()
}
class g extends(u = d.ZP.Store) {
  initialize() {
    !1 !== c.K.get(A) && (m = f.isPlatformEmbedded && "stable" === window.GLOBAL_ENV.RELEASE_CHANNEL)
  }
  isHandoffAvailable() {
    return !N.s.isDisallowPopupsSet() && m
  }
  get user() {
    return s
  }
  get key() {
    return r
  }
}
l = "BrowserHandoffStore", (a = "displayName") in(o = g) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new g(I.Z, {
  RPC_SERVER_READY: function(e) {
    i = "".concat(location.protocol, "//").concat(location.host, "/handoff?rpc=").concat(e.port), R()
  },
  BROWSER_HANDOFF_BEGIN: function(e) {
    if (null != r) return !1;
    r = (0, _.Z)(), O.start(e.timeout, () => (0, T.lx)()), R()
  },
  BROWSER_HANDOFF_FROM_APP: function(e) {
    let {
      handoffKey: t,
      handoffToken: n,
      timeout: i
    } = e;
    if (null == t || null == n) return !1;
    m = !0, O.start(i, () => (0, T.lx)())
  },
  BROWSER_HANDOFF_UNAVAILABLE: C,
  BROWSER_HANDOFF_SET_USER: function(e) {
    s = new h.Z(e.user)
  },
  LOGIN: p,
  LOGIN_SUCCESS: p,
  LOGOUT: p,
  REGISTER: p
})