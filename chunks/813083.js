"use strict";
a.r(t), a("627341");
var l, s, r = a("735250");
a("470079");
var n = a("120356"),
  i = a.n(n),
  o = a("278074"),
  u = a("780384"),
  c = a("410030"),
  d = a("26290"),
  f = a("884697"),
  m = a("689938"),
  C = a("684793");
(s = l || (l = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: a,
    className: l
  } = e, s = (0, c.default)();
  if (null == t.unpublishedAt) return null;
  let n = (0, f.getDaysRemaining)(t.unpublishedAt);

  function p(e) {
    return (0, r.jsx)(d.TextBadge, {
      disableColor: !0,
      text: e,
      className: i()((0, u.isThemeDark)(s) ? C.badgeDark : C.badgeLight, l)
    })
  }
  return (0, o.match)([a, n > 1]).with(["card", !0], () => null).with(["banner", !0], () => p(m.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: n
  }))).with(["modal", !0], () => p(m.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: n
  }))).otherwise(() => p(m.default.Messages.COLLECTIBLES_LAST_DAY))
}