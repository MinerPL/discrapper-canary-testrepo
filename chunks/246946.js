"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(626135),
  a = n(314897),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _(e, t) {
  o.default.track(l.rMx.STREAMER_MODE_TOGGLE, {
    enabled: e,
    automatic: t
  })
}
let d = {
    enabled: !1,
    autoToggle: !0,
    hideInstantInvites: !0,
    hidePersonalInformation: !0,
    disableSounds: !0,
    disableNotifications: !0,
    enableContentProtection: !1
  },
  c = {},
  E = {
    ...d
  };
class I extends(i = r.ZP.PersistedStore) {
  initialize(e) {
    Object.assign(c, e), this.syncWith([a.default], () => {
      var e;
      let t, n = a.default.getId();
      E = null != n ? (null == (t = c[e = n]) && (t = c[e] = {
        ...d
      }), t) : {
        ...d
      }
    })
  }
  getState() {
    return c
  }
  getSettings() {
    return E
  }
  get enabled() {
    return E.enabled
  }
  get autoToggle() {
    return E.autoToggle
  }
  get hideInstantInvites() {
    return this.enabled && E.hideInstantInvites
  }
  get hidePersonalInformation() {
    return this.enabled && E.hidePersonalInformation
  }
  get disableSounds() {
    return this.enabled && E.disableSounds
  }
  get disableNotifications() {
    return this.enabled && E.disableNotifications
  }
  get enableContentProtection() {
    return this.enabled && E.enableContentProtection
  }
}
u(I, "displayName", "StreamerModeStore"), u(I, "persistKey", "StreamerModeStore"), u(I, "migrations", [e => {
  let t = a.default.getId();
  return null == e || null == t ? {} : {
    [t]: {
      ...e
    }
  }
}]), t.Z = new I(s.Z, {
  LOGOUT: function(e) {
    !e.isSwitchingAccount && (c = {})
  },
  MULTI_ACCOUNT_REMOVE_ACCOUNT: function(e) {
    e.userId in c && delete c[e.userId]
  },
  STREAMER_MODE_UPDATE: function(e) {
    let t = {
      ...E
    };
    return E[e.key] = e.value, "enabled" === e.key ? _(e.value, !1) : o.default.track(l.rMx.UPDATE_STREAMER_MODE_SETTINGS, {
      enabled: E.enabled,
      automatic: E.autoToggle,
      disable_notifications: E.disableNotifications,
      disable_sounds: E.disableSounds,
      hide_instant_invites: E.hideInstantInvites,
      hide_personal_info: E.hidePersonalInformation,
      enable_content_protection: E.enableContentProtection,
      old_enabled: t.enabled,
      old_automatic: t.autoToggle,
      old_disable_notifications: t.disableNotifications,
      old_disable_sounds: t.disableSounds,
      old_hide_instant_invites: t.hideInstantInvites,
      old_hide_personal_info: t.hidePersonalInformation,
      old_enable_content_protection: t.enableContentProtection
    }), !0
  },
  RUNNING_STREAMER_TOOLS_CHANGE: function(e) {
    if (!E.autoToggle) return !1;
    {
      let t = e.count > 0;
      return E.enabled = t, _(t, !0), !0
    }
  }
})