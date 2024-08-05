n.d(t, {
  Z: function() {
return p;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(287734),
  s = n(906732),
  o = n(592125),
  l = n(19780),
  u = n(979651),
  c = n(626135),
  d = n(652853),
  _ = n(475413),
  E = n(228168),
  f = n(981631),
  h = n(689938);

function p(e) {
  let {
user: t,
activity: n,
onClick: p,
onClose: m
  } = e, {
profileType: I
  } = (0, d.z)(), {
newestAnalyticsLocation: T
  } = (0, s.ZP)(), g = (0, i.e7)([
u.Z,
o.Z
  ], () => {
var e;
return o.Z.getChannel(null === (e = u.Z.getVoiceStateForUser(t.id)) || void 0 === e ? void 0 : e.channelId);
  }), S = (0, i.e7)([l.Z], () => l.Z.getChannelId() === (null == g ? void 0 : g.id));
  return (null == n ? void 0 : n.type) !== f.IIU.HANG_STATUS || null == g ? null : (0, r.jsx)(_.tG, {
text: h.Z.Messages.PROFILE_JOIN_VOICE_CHANNEL,
disabled: S,
fullWidth: !0,
themeColor: I === E.y0.FULL_SIZE ? 'secondary' : 'primary',
onClick: e => {
  null == p || p(e), a.default.selectVoiceChannel(g.id), c.default.track(f.rMx.HANG_STATUS_CTA_CLICKED, {
    channel_id: g.id,
    guild_id: g.guild_id,
    source: T
  }), null == m || m();
}
  });
}