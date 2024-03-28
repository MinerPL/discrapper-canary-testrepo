"use strict";
s.r(t), s("47120");
var a, n, l, i, r = s("442837"),
  o = s("570140");
let d = [];

function u() {
  d = []
}
class c extends(a = r.default.Store) {
  getSessions() {
    return d
  }
}
i = "AuthSessionsStore", (l = "displayName") in(n = c) ? Object.defineProperty(n, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[l] = i, t.default = new c(o.default, {
  LOGOUT: u,
  LOGIN_SUCCESS: u,
  FETCH_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessions: t
    } = e;
    d = t.map(e => ({
      ...e,
      approx_last_used_time: new Date(e.approx_last_used_time)
    }))
  },
  LOGOUT_AUTH_SESSIONS_SUCCESS: function(e) {
    let {
      sessionIdHashes: t
    } = e, s = [...d], a = !1;
    for (let e of t) {
      let t = s.findIndex(t => t.id_hash === e);
      t >= 0 && (s.splice(t, 1), a = !0)
    }
    if (!a) return !1;
    d = s
  }
})