"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("424973");
var s = n("446674"),
  l = n("913144"),
  a = n("845579"),
  i = n("101125"),
  r = n("718517"),
  o = n("49111");
let u = [],
  d = !1;
class c extends s.default.PersistedStore {
  initialize(e) {
    null != e && Array.isArray(e.sessionStartsWithDND) && (u = e.sessionStartsWithDND)
  }
  showNagBar() {
    return d
  }
  getState() {
    return {
      sessionStartsWithDND: u
    }
  }
  getTemp() {
    return {
      x: a.StatusExpiresAtSetting.getSetting()
    }
  }
}
c.displayName = "HabitualDNDStore", c.persistKey = "habitualDND";
var f = new c(l.default, {
  POST_CONNECTION_OPEN: function() {
    i.default.getStatus() === o.StatusTypes.DND ? (u.push(Date.now()), (u = u.filter(e => e > Date.now() - 7 * r.default.Millis.DAY)).length >= 5 && u.some(e => e < Date.now() - 2 * r.default.Millis.DAY) && setTimeout(() => {
      d = !0, u = [], l.default.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * r.default.Millis.SECOND)) : u = []
  },
  HABITUAL_DND_CLEAR: () => !0
})