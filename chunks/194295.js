n.d(t, {
  Z: function() {
return h;
  }
});
var i = n(278323),
  s = n(13245),
  a = n(45114),
  o = n(593481),
  r = n(237997),
  l = n(312839),
  c = n(981631),
  d = n(987650),
  u = n(689938);

function h(e, t, n, h) {
  let p = t.username,
f = u.Z.Messages.USER_ACTIVITY_INVITE_REQUEST_REQUESTED.format({
  username: '',
  game: n.name
}),
_ = t.getAvatarURL(e.guild_id, 80),
{
  trackView: g,
  trackClick: m
} = (0, l.R)(d.n0.ActivityInvite, {
  notif_type: d.n0.ActivityInvite,
  notif_user_id: t.id,
  activity_type: c.mFx.JOIN_REQUEST,
  activity_name: n.name
});
  return {
colorScheme: o.ZP.ColorSchemes.PRIMARY,
icon: _,
title: p,
body: f,
hint: e => (0, o.QR)(e, (0, l.P)(), u.Z.Messages.OVERLAY_UNLOCK_TO_ANSWER),
confirmText: u.Z.Messages.USER_ACTIVITY_RESPOND_YEAH,
cancelText: u.Z.Messages.USER_ACTIVITY_RESPOND_NOPE,
onNotificationShow: () => {
  g();
},
onConfirmClick: (t, n) => {
  i.Z.sendActivityInvite({
    channelId: e.id,
    type: c.mFx.JOIN,
    activity: h,
    location: r.Z.isInstanceUILocked() ? c.Sbl.LOCKED_OVERLAY : c.Sbl.UNLOCKED_OVERLAY
  }), m('join'), s.Z.updateNotificationStatus(n);
},
onCancelClick: (t, n) => {
  (0, a.In)(e.id, !0, !0), s.Z.updateNotificationStatus(n), m('decline');
},
onDismissClick: () => {
  m('dismiss');
}
  };
}