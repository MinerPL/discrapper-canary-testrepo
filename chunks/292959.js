"use strict";
var i, r = n(442837),
  s = n(570140),
  o = n(626135),
  a = n(358085),
  l = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
    desktopType: a.isPlatformEmbedded ? l.qrD.ALL : l.qrD.NEVER,
    disableAllSounds: !1,
    disabledSounds: [],
    ttsType: l.PrB.NEVER,
    disableUnreadBadge: !1,
    taskbarFlash: !0,
    notifyMessagesInSelectedChannel: !1
  },
  d = _;

function c(e, t) {
  !__OVERLAY__ && o.default.track(e, t)
}

function E(e) {
  let {
    desktopType: t
  } = e;
  d.desktopType = t, c(l.rMx.LOCAL_SETTINGS_UPDATED, {
    notifications_enabled: t === l.qrD.ALL
  })
}
class I extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    d = {
      ..._,
      ...e
    }
  }
  getUserAgnosticState() {
    return d
  }
  getDesktopType() {
    return d.desktopType
  }
  getTTSType() {
    return d.ttsType
  }
  getDisabledSounds() {
    return d.disabledSounds
  }
  getDisableAllSounds() {
    return d.disableAllSounds
  }
  getDisableUnreadBadge() {
    return d.disableUnreadBadge
  }
  getNotifyMessagesInSelectedChannel() {
    return d.notifyMessagesInSelectedChannel
  }
  get taskbarFlash() {
    return d.taskbarFlash
  }
  isSoundDisabled(e) {
    return d.disableAllSounds || -1 !== d.disabledSounds.indexOf(e)
  }
}
u(I, "displayName", "NotificationSettingsStore"), u(I, "persistKey", "notifications"), u(I, "migrations", [e => {
  let t = {
    ...e
  };
  return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || l.PrB.NEVER, null == t.desktopType && (t.desktopType = a.isPlatformEmbedded ? l.qrD.ALL : l.qrD.NEVER), t
}]), t.Z = new I(s.Z, {
  NOTIFICATIONS_SET_DESKTOP_TYPE: E,
  NOTIFICATIONS_SET_TTS_TYPE: function(e) {
    let {
      ttsType: t
    } = e;
    d.ttsType = t
  },
  NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
    let {
      sounds: t
    } = e;
    d.disabledSounds = t
  },
  NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
    d.disableAllSounds = !d.disableAllSounds
  },
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t,
      source: n
    } = e;
    c(l.rMx.ENABLE_NOTIFICATIONS, {
      enabled: t === l.$Ab.ENABLED,
      source: n
    }), t === l.$Ab.BLOCKED ? E({
      desktopType: l.qrD.NEVER
    }) : t === l.$Ab.ENABLED && E({
      desktopType: l.qrD.ALL
    })
  },
  NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
    let {
      disableUnreadBadge: t
    } = e;
    d.disableUnreadBadge = t
  },
  NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
    let {
      taskbarFlash: t
    } = e;
    d.taskbarFlash = t
  },
  NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
    let {
      notify: t
    } = e;
    d.notifyMessagesInSelectedChannel = t
  }
})