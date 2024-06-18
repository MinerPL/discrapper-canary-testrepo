"use strict";
n.d(t, {
  Z: function() {
    return E
  },
  z: function() {
    return c
  }
}), n(47120);
var i = n(392711),
  r = n.n(i),
  s = n(442837),
  o = n(592125),
  a = n(496675),
  l = n(709054),
  u = n(853856),
  _ = n(362658),
  d = n(231338);

function c(e, t, n) {
  let {
    canShow: i,
    isFavoritesPerk: s
  } = _.Z.getCurrentConfig({
    location: "7993a7_1"
  }, {
    autoTrackExposure: !1
  });
  if (s) return !0;
  if (!i) return !1;
  let o = e.getFavoriteChannels();
  if (r().isEmpty(o)) return !1;
  let a = l.default.keys(o).filter(e => {
    let i = t.getChannel(e);
    return null != i && (!!i.isPrivate() || n.can(d.Pl.VIEW_CHANNEL, i))
  });
  return !r().isEmpty(a) && !0
}

function E() {
  let {
    canShow: e,
    isFavoritesPerk: t
  } = (0, _.z)("7993a7_2"), n = (0, s.e7)([u.Z, o.Z, a.Z], () => e && c(u.Z, o.Z, a.Z));
  return !!t || n
}