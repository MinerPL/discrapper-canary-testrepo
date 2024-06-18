"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(278323),
  s = n(13245),
  l = n(45114),
  a = n(237997),
  o = n(454902),
  r = n(312839),
  d = n(981631),
  c = n(987650),
  u = n(689938);

function h(e, t, n, h) {
  let p = t.username,
    f = u.Z.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
      username: "",
      game: n.name
    }),
    E = t.getAvatarURL(e.guild_id, 80),
    {
      trackView: Z,
      trackClick: g
    } = (0, r.R)(c.n0.ActivityInvite, {
      notif_type: c.n0.ActivityInvite,
      notif_user_id: t.id,
      activity_type: d.mFx.JOIN_REQUEST,
      activity_name: n.name
    });
  return {
    colorScheme: o.ZP.ColorSchemes.PRIMARY,
    icon: E,
    title: p,
    body: f,
    hint: e => (0, o.QR)(e, (0, r.P)(), u.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER),
    confirmText: u.Z.Messages.USER_ACTIVITY_RESPOND_YEAH,
    cancelText: u.Z.Messages.USER_ACTIVITY_RESPOND_NOPE,
    onNotificationShow: () => {
      Z()
    },
    onConfirmClick: (t, n) => {
      i.Z.sendActivityInvite({
        channelId: e.id,
        type: d.mFx.JOIN,
        activity: h,
        location: a.Z.isInstanceUILocked() ? d.Sbl.LOCKED_OVERLAY : d.Sbl.UNLOCKED_OVERLAY
      }), g("join"), s.Z.updateNotificationStatus(n)
    },
    onCancelClick: (t, n) => {
      (0, l.In)(e.id, !0, !0), s.Z.updateNotificationStatus(n), g("decline")
    },
    onDismissClick: () => {
      g("dismiss")
    }
  }
}