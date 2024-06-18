"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(827498);
let _ = {
  show: !1,
  entrypoint: u._.NONE
};

function d() {
  return _.show = !1, _.entrypoint = u._.NONE, !0
}
class c extends(o = a.ZP.Store) {
  initialize() {}
  shouldShowPopup() {
    return _.show && _.entrypoint === u._.TEXT
  }
  shouldShowModal() {
    return _.show && _.entrypoint === u._.VOICE
  }
}
s = "AppLauncherStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(l.Z, {
  APP_LAUNCHER_SHOW: function(e) {
    let {
      entrypoint: t
    } = e;
    return _.show = !0, _.entrypoint = t, !0
  },
  APP_LAUNCHER_DISMISS: d,
  CONNECTION_OPEN: d,
  LOGOUT: d,
  CHANNEL_SELECT: d,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: d,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: d
})