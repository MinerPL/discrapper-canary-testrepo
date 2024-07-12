var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(204418),
  l = n(594174),
  o = n(113434),
  c = n(182294),
  d = n(267423);
t.Z = e => {
  let {
questConfig: t,
fallback: n,
isFocused: u
  } = e, _ = (0, a.e7)([l.default], () => l.default.getCurrentUser()), {
avatarDecoration: E,
isFetching: I
  } = (0, o.DU)(t);
  return I ? (0, i.jsx)('div', {
className: d.questsCollectibleReward,
children: (0, i.jsx)(s.Spinner, {})
  }) : null == _ || null == E ? n : (0, i.jsx)('div', {
className: d.questsCollectibleReward,
children: (0, i.jsx)(r.Z, {
  avatarSize: c.EF.SIZE_56,
  user: _,
  guildId: null,
  avatarDecorationOverride: E,
  animateOnHover: !u
})
  });
};