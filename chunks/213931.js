"use strict";
n.r(t), n.d(t, {
  updateChannelCustomNotificationSound: function() {
    return d
  },
  updateGuildCustomNotificationSound: function() {
    return r
  }
});
var a = n("381499"),
  u = n("675478"),
  l = n("592125"),
  i = n("626135"),
  s = n("981631");

function r(e, t, n, l) {
  t !== n && ((0, u.updateUserGuildSettings)(e, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: n
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), i.default.track(s.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    location: l,
    soundpack: n
  }))
}

function d(e, t, n, r, d) {
  var o;
  n !== r && ((0, u.updateUserChannelSettings)(e, t, e => {
    e.customNotificationSoundConfig = {
      notificationSoundPackId: a.StringValue.create({
        value: r
      })
    }
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), i.default.track(s.AnalyticEvents.CUSTOM_NOTIFICATION_SOUND_SETTINGS_UPDATED, {
    guild_id: e,
    channel_id: t,
    channel_type: null === (o = l.default.getChannel(t)) || void 0 === o ? void 0 : o.type,
    location: d,
    soundpack: r
  }))
}