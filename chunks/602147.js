n.d(t, {
  o: function() {
return C;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(704215),
  a = n(481060),
  s = n(212093),
  o = n(963202),
  c = n(605236),
  u = n(831565),
  d = n(703656),
  h = n(683301),
  p = n(603592),
  _ = n(981631),
  f = n(731455),
  g = n(689938),
  m = n(363844);

function C() {
  let e = (0, u.a)({
  location: 'discovery_button'
}),
t = window.location.pathname.startsWith(_.Z5c.GUILD_DISCOVERY),
n = h.ZP.getCurrentCategoryId() === f.Gj.Clans;
  if (e) {
(0, d.uL)(_.Z5c.GLOBAL_DISCOVERY);
return;
  }
  t && !n && ((0, s.AQ)(), (0, s.uY)(f.Hk, !0));
  let i = (0, d.s1)().location.search;
  (0, d.uL)(_.Z5c.GUILD_DISCOVERY, {
search: i
  });
}
let I = l.forwardRef(function(e, t) {
  let {
selected: n,
className: s,
onClick: d
  } = e, {
clanDiscoveryEnabled: h
  } = (0, o.nk)('guild_discovery'), _ = (0, u.v)({
location: 'guild_discovery_button'
  }), f = (0, c.wE)(r.z.NEW_GAMING_DISCOVERY_NOTIF), I = l.useMemo(() => ({
lowerBadgeSize: {
  width: 12,
  height: 12
}
  }), []), E = _ ? g.Z.Messages.DISCOVER : g.Z.Messages.GUILD_DISCOVERY_TOOLTIP;
  return h && !f && (I.lowerBadge = (0, i.jsx)('div', {
className: m.guildNotif
  })), (0, i.jsx)(p.Z, {
id: 'guild-discover-button',
ref: t,
className: s,
onClick: null != d ? d : C,
selected: n,
tooltip: E,
icon: a.CompassIcon,
...I
  });
});
t.Z = I;