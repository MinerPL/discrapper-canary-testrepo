"use strict";
n.r(t), n.d(t, {
  isFavoritesGuildVisible: function() {
    return c
  },
  default: function() {
    return f
  }
});
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("42203"),
  o = n("957255"),
  l = n("379881"),
  u = n("498139"),
  d = n("843455");

function c(e, t, n) {
  let {
    canShow: i,
    isFavoritesPerk: r
  } = u.default.getCurrentConfig({
    location: "7993a7_1"
  }, {
    autoTrackExposure: !1
  });
  if (r) return !0;
  if (!i) return !1;
  let a = e.getFavoriteChannels();
  if (s.isEmpty(a)) return !1;
  let o = Object.keys(a).filter(e => {
    let i = t.getChannel(e);
    return null != i && (!!i.isPrivate() || n.can(d.Permissions.VIEW_CHANNEL, i))
  });
  return !s.isEmpty(o) && !0
}

function f() {
  let {
    canShow: e,
    isFavoritesPerk: t
  } = (0, u.useFavoritesServerExperiment)("7993a7_2"), n = (0, r.useStateFromStores)([l.default, a.default, o.default], () => e && c(l.default, a.default, o.default));
  return !!t || n
}