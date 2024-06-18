"use strict";
n.d(t, {
  Z: function() {
    return c
  }
});
var i = n(224706),
  s = n(13245),
  l = n(454902),
  a = n(150097),
  o = n(312839),
  r = n(987650),
  d = n(689938);

function c(e, t, n, c, u) {
  if (null == t.activity) return null;
  let h = t.activity.type,
    p = u.session_id;
  if (null == p) return null;
  let {
    icon: f,
    title: E,
    body: Z
  } = (0, a.Xi)(e, t, n), {
    trackView: g,
    trackClick: m
  } = (0, o.R)(r.n0.ActivityInvite, {
    notif_type: r.n0.ActivityInvite,
    notif_user_id: n.id,
    message_id: t.id,
    message_type: t.type,
    guild_id: e.guild_id,
    channel_id: e.id,
    channel_type: e.type,
    activity_type: h,
    activity_name: u.name
  });
  return {
    colorScheme: l.ZP.ColorSchemes.PRIMARY,
    icon: f,
    title: E,
    body: Z,
    hint: e => (0, l.QR)(e, (0, o.P)(), d.Z.Messages.OVERLAY_UNLOCK_TO_JOIN),
    onNotificationShow: () => {
      g()
    },
    confirmText: d.Z.Messages.JOIN,
    onConfirmClick: (l, a) => {
      i.Z.join({
        userId: n.id,
        sessionId: p,
        applicationId: c.id,
        channelId: e.id,
        messageId: t.id
      }), s.Z.updateNotificationStatus(a), m("join")
    },
    onDismissClick: () => {
      m("dismiss")
    }
  }
}