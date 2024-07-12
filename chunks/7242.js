n.d(t, {
  Z: function() {
return T;
  }
});
var r = n(735250),
  i = n(120356),
  a = n.n(i),
  o = n(442837),
  s = n(481060),
  l = n(493683),
  u = n(447543),
  c = n(904245),
  d = n(314897),
  _ = n(592125),
  E = n(496675),
  f = n(979651),
  h = n(475413),
  p = n(981631),
  m = n(689938),
  I = n(663054);

function T(e) {
  let {
user: t,
className: n,
onClose: i
  } = e, T = (0, o.e7)([d.default], () => d.default.getId()), g = (0, o.e7)([
_.Z,
f.Z
  ], () => {
var e;
return _.Z.getChannel(null === (e = f.Z.getVoiceStateForUser(T)) || void 0 === e ? void 0 : e.channelId);
  }), S = null == g ? void 0 : g.isPrivate(), A = (0, o.e7)([E.Z], () => E.Z.can(p.Plq.CREATE_INSTANT_INVITE, g));
  if (null == g || S || !A || t.bot)
return null;
  let N = async () => {
await u.Z.createInvite(null == g ? void 0 : g.id, {
  max_uses: 1,
  unique: !0
}, 'UserProfileInviteToCallButton').then(e => function(e, t) {
  l.Z.ensurePrivateChannel(e).then(e => {
    null != _.Z.getChannel(e) && c.Z.sendInvite(e, t, 'useActiveInviteToCallButton', null);
  });
}(t.id, e.code)), null == i || i();
  };
  return (0, r.jsx)(h.tG, {
action: 'PRESS_INVITE_TO_CALL',
text: m.Z.Messages.USER_PROFILE_INVITE_TO_CALL,
icon: s.GroupPlusIcon,
fullWidth: !0,
color: a()(s.Button.Colors.BRAND, I.color),
className: n,
onClick: N
  });
}