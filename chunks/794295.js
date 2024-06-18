"use strict";
var i = n(735250),
  r = n(470079),
  s = n(302454),
  o = n.n(s),
  a = n(481060),
  l = n(100527),
  u = n(906732),
  _ = n(49012);
t.Z = r.memo(function(e) {
  let {
    onClick: t,
    trusted: n,
    title: s,
    href: d,
    children: c,
    messageId: E,
    channelId: I,
    ...T
  } = e, {
    analyticsLocations: h
  } = (0, u.ZP)(l.Z.MASKED_LINK), S = r.useCallback(t => (0, _.q)(e, t, h), [h, e]), f = r.useCallback(e => {
    1 === e.button && S(e)
  }, [S]), N = o().sanitizeUrl(d);
  return (0, i.jsx)(a.Anchor, {
    ...T,
    title: s,
    target: "_blank",
    rel: "noreferrer noopener",
    href: N,
    onClick: S,
    onAuxClick: f,
    children: null != c ? c : s
  })
})