"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("225196"),
  i = n("898140"),
  r = n("502568"),
  o = n("853856"),
  u = n("117984"),
  d = n("593214"),
  c = n("362658"),
  f = n("457490"),
  h = n("689938");

function m(e) {
  let {
    channel: t
  } = e, {
    isFavoritesPerk: n
  } = (0, c.useFavoritesServerExperiment)("ChannelFavoritesHeaderButton"), m = (0, f.default)(), {
    notifyFavoriteAdded: p
  } = (0, d.useFavoriteAdded)(), E = (0, l.useStateFromStores)([o.default], () => o.default.isFavorite(t.id));
  if (!n || m) return null;
  let C = E ? i.default : s.default,
    g = E ? h.default.Messages.UNFAVORITE_CHANNEL : h.default.Messages.FAVORITE_CHANNEL;
  return (0, a.jsx)(r.default.Icon, {
    icon: C,
    tooltip: g,
    "aria-label": g,
    onClick: () => {
      E ? (0, u.removeFavoriteChannel)(t.id) : (p(), (0, u.addFavoriteChannel)(t.id))
    }
  })
}