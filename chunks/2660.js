var i = n(735250);
n(470079);
var s = n(442837),
  a = n(481060),
  r = n(204418),
  l = n(594174),
  o = n(113434),
  c = n(182294),
  u = n(267423);
t.Z = e => {
  let {
questConfig: t,
fallback: n,
isFocused: d
  } = e, _ = (0, s.e7)([l.default], () => l.default.getCurrentUser()), {
avatarDecoration: E,
isFetching: I
  } = (0, o.DU)(t);
  return I ? (0, i.jsx)('div', {
className: u.questsCollectibleReward,
children: (0, i.jsx)(a.Spinner, {})
  }) : null == _ || null == E ? n : (0, i.jsx)('div', {
className: u.questsCollectibleReward,
children: (0, i.jsx)(r.Z, {
  avatarSize: c.EF.SIZE_56,
  user: _,
  guildId: null,
  avatarDecorationOverride: E,
  animateOnHover: !d
})
  });
};