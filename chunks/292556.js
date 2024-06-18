"use strict";
n.r(t);
var i = n(570140);
t.default = {
  setDesktopType(e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_DESKTOP_TYPE",
      desktopType: e
    })
  },
  setTTSType(e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_TTS_TYPE",
      ttsType: e
    })
  },
  setDisabledSounds(e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_DISABLED_SOUNDS",
      sounds: e
    })
  },
  toggleDisableAllSounds() {
    i.Z.dispatch({
      type: "NOTIFICATIONS_TOGGLE_ALL_DISABLED"
    })
  },
  setDisableUnreadBadge(e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE",
      disableUnreadBadge: e
    })
  },
  setTaskbarFlash(e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_TASKBAR_FLASH",
      taskbarFlash: e
    })
  },
  setNotifyMessagesInSelectedChannel(e) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL",
      notify: e
    })
  },
  setPermissionsState(e, t) {
    i.Z.dispatch({
      type: "NOTIFICATIONS_SET_PERMISSION_STATE",
      enabled: e,
      source: t
    })
  },
  showNotification(e, t, n, r) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    i.Z.dispatch({
      type: "NOTIFICATION_CREATE",
      icon: e,
      title: t,
      body: n,
      trackingProps: r,
      options: {
        ...s,
        onClick() {
          var e;
          null === (e = s.onClick) || void 0 === e || e.call(s), i.Z.dispatch({
            type: "NOTIFICATION_CLICK"
          })
        }
      }
    })
  },
  clickedNotification() {
    i.Z.dispatch({
      type: "NOTIFICATION_CLICK"
    })
  }
}