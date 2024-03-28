"use strict";
n.r(t), n.d(t, {
  filterOverrides: function() {
    return f
  },
  getMuteTimeOptions: function() {
    return g
  },
  useShouldUseNewNotificationSystem: function() {
    return N
  }
}), n("47120"), n("789020");
var i = n("442837"),
  a = n("798140"),
  s = n("9156"),
  l = n("630388"),
  u = n("709054"),
  o = n("312400"),
  d = n("981631"),
  r = n("969943"),
  S = n("526761"),
  _ = n("689938");

function g() {
  return [{
    label: _.default.Messages.MUTE_DURATION_15_MINUTES,
    value: r.MuteUntilSeconds.MINUTES_15
  }, {
    label: _.default.Messages.MUTE_DURATION_1_HOUR,
    value: r.MuteUntilSeconds.HOURS_1
  }, {
    label: _.default.Messages.MUTE_DURATION_3_HOURS,
    value: r.MuteUntilSeconds.HOURS_3
  }, {
    label: _.default.Messages.MUTE_DURATION_8_HOURS,
    value: r.MuteUntilSeconds.HOURS_8
  }, {
    label: _.default.Messages.MUTE_DURATION_24_HOURS,
    value: r.MuteUntilSeconds.HOURS_24
  }, {
    label: _.default.Messages.MUTE_DURATION_ALWAYS,
    value: r.MuteUntilSeconds.ALWAYS
  }]
}
let c = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c;
  return u.default.keys(e).filter(n => {
    var i, s;
    let u = e[n].message_notifications !== d.UserNotificationSettings.NULL,
      o = l.hasFlag(null !== (i = e[n].flags) && void 0 !== i ? i : 0, S.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES) || l.hasFlag(null !== (s = e[n].flags) && void 0 !== s ? s : 0, S.ChannelNotificationSettingsFlags.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, a.computeIsMuted)(e[n])
  })
}

function N(e) {
  let t = (0, i.useStateFromStores)([s.default], () => s.default.useNewNotifications);
  return o.NotificationsExperiment.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled && t
}