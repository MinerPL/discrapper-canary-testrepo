"use strict";
n.r(t), n("653041");
var a, s = n("442837"),
  l = n("570140"),
  i = n("695346"),
  r = n("885110"),
  o = n("70956"),
  u = n("981631");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let c = [],
  f = !1;

function E() {
  return c.length >= 4 && c.some(e => e < Date.now() - 3 * o.default.Millis.DAY)
}
class h extends(a = s.default.PersistedStore) {
  initialize(e) {
    null != e && Array.isArray(e.sessionStartsWithDND) && (c = e.sessionStartsWithDND)
  }
  showNagBar() {
    return f
  }
  getState() {
    return {
      sessionStartsWithDND: c
    }
  }
  getTemp() {
    return {
      x: i.StatusExpiresAtSetting.getSetting()
    }
  }
}
d(h, "displayName", "HabitualDNDStore"), d(h, "persistKey", "habitualDND"), new h(l.default, {
  POST_CONNECTION_OPEN: function() {
    r.default.getStatus() === u.StatusTypes.DND && "0" === i.StatusExpiresAtSetting.getSetting() ? (c.push(Date.now()), c = c.filter(e => e > Date.now() - 5 * o.default.Millis.DAY), E() && setTimeout(() => {
      l.default.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * o.default.Millis.SECOND)) : c = []
  },
  HABITUAL_DND_CLEAR: function() {
    f = !!E() || !1, c = []
  }
})