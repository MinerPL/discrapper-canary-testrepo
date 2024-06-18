"use strict";
n.d(t, {
  h: function() {
    return l
  }
});
var i, r = n(442837),
  s = n(570140),
  o = n(906467);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = 360,
  u = {
    sidebarWidth: 360,
    lastOpenTabId: null,
    displayTools: !1,
    showDevWidget: !1,
    devWidgetPosition: {
      x: 0,
      y: 0
    }
  };
class _ extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    u = null != e ? e : u;
    s.Z.actionLogger.persist = o.Z.isDeveloper
  }
  getUserAgnosticState() {
    return u
  }
  get sidebarWidth() {
    return this.displayTools ? u.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null !== (e = u.lastOpenTabId) && void 0 !== e ? e : null
  }
  get displayTools() {
    return o.Z.isDeveloper && u.displayTools
  }
  get showDevWidget() {
    return o.Z.isDeveloper && u.showDevWidget
  }
  get devWidgetPosition() {
    return u.devWidgetPosition
  }
}
a(_, "displayName", "DevToolsSettingsStore"), a(_, "persistKey", "DevToolsSettingsStore"), t.Z = new _(s.Z, {
  DEV_TOOLS_SETTINGS_UPDATE: function(e) {
    if (!!o.Z.isDeveloper) u = {
      ...u,
      ...e.settings
    }
  }
})