"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("26151"),
  a = n("13245"),
  l = n("43267"),
  s = n("933557"),
  o = n("699516"),
  r = n("594174"),
  d = n("454902"),
  u = n("312839"),
  c = n("981631"),
  f = n("987650"),
  h = n("689938");

function p(e) {
  let t = (0, s.computeChannelName)(e, r.default, o.default),
    n = h.default.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
    p = (0, l.getChannelIconURL)(e),
    {
      trackView: g,
      trackClick: m
    } = (0, u.makeAnalyticsTrackers)(f.OverlayNotificationType.IncomingCall, {
      notif_type: f.OverlayNotificationType.IncomingCall,
      notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    colorScheme: d.default.ColorSchemes.PRIMARY,
    icon: p,
    title: t,
    body: n,
    hint: e => (0, d.renderKeybindHint)(e, (0, u.getOverlayKeybind)(), h.default.Messages.OVERLAY_UNLOCK_TO_ANSWER),
    confirmText: h.default.Messages.JOIN_CALL,
    cancelText: h.default.Messages.DECLINE,
    onNotificationShow: () => {
      g()
    },
    onConfirmClick: () => {
      a.default.callPrivateChannel(e.id), m("join"), a.default.track(c.AnalyticEvents.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: null,
        channel_id: e.id,
        video_enabled: !1
      })
    },
    onCancelClick: () => {
      i.default.stopRinging(e.id), m("decline")
    },
    onDismissClick: () => {
      m("dismiss")
    }
  }
}