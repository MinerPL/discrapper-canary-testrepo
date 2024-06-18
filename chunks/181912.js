"use strict";
n.d(t, {
  Z: function() {
    return f
  }
});
var i = n(26151),
  s = n(13245),
  l = n(43267),
  a = n(933557),
  o = n(699516),
  r = n(594174),
  d = n(454902),
  c = n(312839),
  u = n(981631),
  h = n(987650),
  p = n(689938);

function f(e) {
  let t = (0, a.F6)(e, r.default, o.Z),
    n = p.Z.Messages.OVERLAY_NOTIFICATION_INCOMING_CALL,
    f = (0, l.x)(e),
    {
      trackView: E,
      trackClick: Z
    } = (0, c.R)(h.n0.IncomingCall, {
      notif_type: h.n0.IncomingCall,
      notif_user_id: 1 === e.recipients.length ? e.recipients[0] : null,
      guild_id: e.guild_id,
      channel_id: e.id,
      channel_type: e.type
    });
  return {
    colorScheme: d.ZP.ColorSchemes.PRIMARY,
    icon: f,
    title: t,
    body: n,
    hint: e => (0, d.QR)(e, (0, c.P)(), p.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER),
    confirmText: p.Z.Messages.JOIN_CALL,
    cancelText: p.Z.Messages.DECLINE,
    onNotificationShow: () => {
      E()
    },
    onConfirmClick: () => {
      s.Z.callPrivateChannel(e.id), Z("join"), s.Z.track(u.rMx.VOICE_CHANNEL_SELECTED, {
        location: "Overlay Notificaiton",
        guild_id: null,
        channel_id: e.id,
        video_enabled: !1
      })
    },
    onCancelClick: () => {
      i.Z.stopRinging(e.id), Z("decline")
    },
    onDismissClick: () => {
      Z("dismiss")
    }
  }
}