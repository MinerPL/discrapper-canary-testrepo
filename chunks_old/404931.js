"use strict";
n.r(t), n("424973");
var a = n("446674"),
  s = n("913144"),
  l = n("845579"),
  i = n("101125"),
  r = n("718517"),
  o = n("49111");
let u = [],
  d = !1;

function c() {
  return u.length >= 4 && u.some(e => e < Date.now() - 3 * r.default.Millis.DAY)
}
class f extends a.default.PersistedStore {
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
      x: l.StatusExpiresAtSetting.getSetting()
    }
  }
}
f.displayName = "HabitualDNDStore", f.persistKey = "habitualDND", new f(s.default, {
  POST_CONNECTION_OPEN: function() {
    i.default.getStatus() === o.StatusTypes.DND && "0" === l.StatusExpiresAtSetting.getSetting() ? (u.push(Date.now()), u = u.filter(e => e > Date.now() - 5 * r.default.Millis.DAY), c() && setTimeout(() => {
      s.default.dispatch({
        type: "HABITUAL_DND_CLEAR"
      })
    }, 15 * r.default.Millis.SECOND)) : u = []
  },
  HABITUAL_DND_CLEAR: function() {
    d = !!c() || !1, u = []
  }
})