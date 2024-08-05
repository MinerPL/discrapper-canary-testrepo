var i, a, l, o, r = t(442837),
  s = t(570140),
  c = t(827498);
let u = {
  show: !1,
  entrypoint: c._b.NONE,
  lastShownEntrypoint: c._b.NONE,
  activeViewType: null,
  closeReason: c.ti.DISMISSED
};

function d(e) {
  let {
closeReason: n = c.ti.DISMISSED
  } = e;
  return u.show = !1, u.entrypoint = c._b.NONE, u.closeReason = n, !0;
}
class m extends(o = r.ZP.Store) {
  initialize() {}
  shouldShowPopup() {
return u.show && u.entrypoint === c._b.TEXT;
  }
  shouldShowModal() {
return u.show && u.entrypoint === c._b.VOICE;
  }
  entrypoint() {
return u.entrypoint;
  }
  lastShownEntrypoint() {
return u.lastShownEntrypoint;
  }
  activeViewType() {
return u.activeViewType;
  }
  closeReason() {
return u.closeReason;
  }
}

function p() {
  d({
closeReason: c.ti.DISMISSED
  });
}

function _() {
  d({
closeReason: c.ti.COMMAND
  });
}
l = 'AppLauncherStore', (a = 'displayName') in(i = m) ? Object.defineProperty(i, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = l, n.Z = new m(s.Z, {
  APP_LAUNCHER_SHOW: function(e) {
let {
  entrypoint: n,
  activeViewType: t
} = e;
return u.show = !0, u.entrypoint = n, u.lastShownEntrypoint = n, u.closeReason = c.ti.DISMISSED, u.activeViewType = t, !0;
  },
  APP_LAUNCHER_DISMISS: d,
  CONNECTION_OPEN: p,
  LOGOUT: p,
  CHANNEL_SELECT: p,
  APPLICATION_COMMAND_SET_ACTIVE_COMMAND: _,
  APP_LAUNCHER_SET_ACTIVE_COMMAND: _
});