"use strict";
n.d(t, {
  FT: function() {
    return E
  },
  Qd: function() {
    return I
  }
});
var i = n(442837),
  r = n(704215),
  s = n(675478),
  o = n(581883),
  a = n(626135),
  l = n(915486),
  u = n(981631),
  _ = n(921944),
  d = n(526761);

function c(e, t) {
  let n = o.Z.getDismissedGuildContent(t);
  return null != n && (0, l.jl)(n, e)
}

function E(e, t) {
  return (0, i.e7)([o.Z], () => c(e, t))
}

function I(e, t, n, i) {
  (0, s.PS)(t, n => {
    if (c(e, t)) return !1;
    n.dismissedGuildContent = (0, l.GV)(n.dismissedGuildContent, e)
  }, d.fy.INFREQUENT_USER_ACTION), n && a.default.track(u.rMx.DISMISSIBLE_CONTENT_DISMISSED, {
    type: r.C[e],
    guild_id: t,
    action: null != i ? i : _.L.UNKNOWN
  })
}