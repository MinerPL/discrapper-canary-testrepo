"use strict";
t(627341);
var n, a, i = t(735250);
t(470079);
var l = t(120356),
  r = t.n(l),
  o = t(278074),
  c = t(780384),
  u = t(481060),
  d = t(410030),
  C = t(884697),
  E = t(689938),
  f = t(360960);
(a = n || (n = {})).BANNER = "banner", a.MODAL = "modal", a.CARD = "card";
s.Z = e => {
  let {
    category: s,
    display: t,
    className: n
  } = e, a = (0, d.ZP)();
  if (null == s.unpublishedAt) return null;
  let l = (0, C.OT)(s.unpublishedAt);

  function m(e) {
    return (0, i.jsx)(u.TextBadge, {
      disableColor: !0,
      text: e,
      className: r()((0, c.wj)(a) ? f.badgeDark : f.badgeLight, n)
    })
  }
  return (0, o.EQ)([t, l > 1]).with(["card", !0], () => null).with(["banner", !0], () => m(E.Z.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: l
  }))).with(["modal", !0], () => m(E.Z.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: l
  }))).otherwise(() => m(E.Z.Messages.COLLECTIBLES_LAST_DAY))
}