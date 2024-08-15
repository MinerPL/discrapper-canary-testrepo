l.d(n, {
  Z: function() {
return m;
  }
});
var t = l(735250),
  r = l(470079),
  i = l(442837),
  a = l(481060),
  s = l(58540),
  u = l(40851),
  d = l(300284),
  o = l(484459),
  c = l(314897),
  Z = l(271383),
  E = l(430824),
  M = l(496675),
  _ = l(594174),
  f = l(981631),
  g = l(689938),
  I = l(936124);

function m(e) {
  let {
guildId: n,
userId: m,
analyticsLocation: R,
analyticsLocations: N,
context: A,
icon: C
  } = e, O = E.Z.getGuild(n), T = c.default.getId(), v = (0, i.e7)([_.default], () => _.default.getUser(m)), x = (0, i.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, m), [
n,
m
  ]);
  (0, i.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
  let h = r.useMemo(() => ({
[n]: [m]
  }), [
n,
m
  ]);
  (0, s.$)(h);
  let S = A === f.IlC.POPOUT,
b = (0, d.Z)({
  guild: O,
  analyticsLocation: R
}),
p = (0, u.Aq)();
  if (null == O || S)
return null;
  let U = T === m && (M.Z.can(f.Plq.CHANGE_NICKNAME, O) || M.Z.can(f.Plq.MANAGE_NICKNAMES, O)),
P = T === m,
j = M.Z.canManageUser(f.Plq.MANAGE_NICKNAMES, m, O);
  if (!(U || j || P) || null == v || x)
return null;
  let D = O.hasFeature(f.oNc.HUB) ? g.Z.Messages.HUB_EDIT_PROFILE : g.Z.Messages.CHANGE_IDENTITY,
L = P ? D : g.Z.Messages.CHANGE_NICKNAME;
  return (0, t.jsx)(a.MenuItem, {
id: 'change-nickname',
label: (0, t.jsx)('div', {
  className: I.labelWrapper,
  children: (0, t.jsx)('span', {
    className: I.label,
    children: L
  })
}),
icon: C,
action: () => {
  P ? ((0, o.Z)(v.id, v.getAvatarURL(n, 80), {
    guildId: n
  }), b(), p.dispatch(f.CkL.POPOUT_CLOSE)) : (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e('17712').then(l.bind(l, 620021));
    return l => (0, t.jsx)(e, {
      ...l,
      guildId: n,
      user: v,
      analyticsSource: R,
      analyticsLocations: N
    });
  });
}
  });
}