n.d(t, {
  Z: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var a = n(442837),
  l = n(481060),
  s = n(665149),
  r = n(853856),
  o = n(117984),
  c = n(593214),
  d = n(362658),
  u = n(916069),
  h = n(689938);

function p(e) {
  let {
channel: t
  } = e, {
isFavoritesPerk: n
  } = (0, d.z)('ChannelFavoritesHeaderButton'), p = (0, u.Z)(), {
notifyFavoriteAdded: m
  } = (0, c.up)(), _ = (0, a.e7)([r.Z], () => r.Z.isFavorite(t.id));
  if (!n || p)
return null;
  let f = _ ? l.StarIcon : l.StarOutlineIcon,
E = _ ? h.Z.Messages.UNFAVORITE_CHANNEL : h.Z.Messages.FAVORITE_CHANNEL;
  return (0, i.jsx)(s.ZP.Icon, {
icon: f,
tooltip: E,
'aria-label': E,
onClick: () => {
  _ ? (0, o.oC)(t.id) : (m(), (0, o.kj)(t.id));
}
  });
}