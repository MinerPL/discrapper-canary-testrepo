"use strict";
n.r(t), n.d(t, {
  getMuteTimeOptions: function() {
    return E
  },
  filterOverrides: function() {
    return _
  },
  useShouldUseNewNotificationSystem: function() {
    return g
  }
}), n("222007"), n("702976");
var i = n("446674"),
  s = n("668597"),
  a = n("282109"),
  l = n("568734"),
  u = n("299039"),
  o = n("640497"),
  d = n("49111"),
  r = n("468200"),
  c = n("397336"),
  f = n("782340");

function E() {
  return [{
    label: f.default.Messages.MUTE_DURATION_15_MINUTES,
    value: r.MuteUntilSeconds.MINUTES_15
  }, {
    label: f.default.Messages.MUTE_DURATION_1_HOUR,
    value: r.MuteUntilSeconds.HOURS_1
  }, {
    label: f.default.Messages.MUTE_DURATION_3_HOURS,
    value: r.MuteUntilSeconds.HOURS_3
  }, {
    label: f.default.Messages.MUTE_DURATION_8_HOURS,
    value: r.MuteUntilSeconds.HOURS_8
  }, {
    label: f.default.Messages.MUTE_DURATION_24_HOURS,
    value: r.MuteUntilSeconds.HOURS_24
  }, {
    label: f.default.Messages.MUTE_DURATION_ALWAYS,
    value: r.MuteUntilSeconds.ALWAYS
  }]
}
let S = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S;
  return u.default.keys(e).filter(n => {
    var i, a;
    let u = e[n].message_notifications !== d.UserNotificationSettings.NULL,
      o = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (a = e[n].flags) && void 0 !== a ? a : 0, c.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, s.computeIsMuted)(e[n])
  })
}

function g(e) {
  let t = (0, i.useStateFromStores)([a.default], () => a.default.useNewNotifications);
  return o.NotificationsExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled && t
}