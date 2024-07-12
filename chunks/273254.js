n.d(t, {
  L: function() {
return d;
  }
}), n(47120);
var i = n(470079),
  s = n(468194),
  a = n(645896),
  r = n(316553),
  l = n(559469),
  o = n(308083),
  c = n(689938);

function d(e) {
  let {
guild: t,
selectedGame: n
  } = e, d = (0, r.J)({
selectedGame: n
  }), u = i.useMemo(() => null == d ? [] : [d], [d]), _ = (0, l.n)(d), h = (0, a.Cc)(null == t ? void 0 : t.id), [E, I] = (0, a.L_)(null == t ? void 0 : t.id);
  return i.useEffect(() => {
!E && null != t && I();
  }, [
t,
E,
I
  ]), i.useMemo(() => {
var e;
return null != h ? h : null == t ? null : {
  ..._[_.length - 1],
  id: t.id,
  name: t.name,
  icon: t.icon,
  description: null !== (e = t.description) && void 0 !== e ? e : c.Z.Messages.CLAN_SETUP_DESCRIPTION_PLACEHOLDER,
  memberCount: 0,
  games: u,
  playstyle: o.zv.CASUAL,
  traits: [],
  tag: (0, s.Zg)(t.name),
  wildcardDescriptors: o.LK
};
  }, [
u,
t,
_,
h
  ]);
}