"use strict";
a.r(t), a("627341");
var s, l, r = a("735250");
a("470079");
var n = a("803997"),
  o = a.n(n),
  i = a("278074"),
  u = a("26290"),
  c = a("689938"),
  d = a("628587");
(l = s || (s = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
t.default = e => {
  let {
    category: t,
    display: a,
    className: s
  } = e;
  if (null == t.unpublishedAt) return null;
  let l = function(e) {
    let t = new Date,
      a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
    return Math.floor((Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()) - a) / 864e5)
  }(t.unpublishedAt);

  function n(e) {
    return (0, r.jsx)(u.TextBadge, {
      disableColor: !0,
      text: e,
      className: o()(d.badge, s)
    })
  }
  return (0, i.match)([a, l > 1]).with(["card", !0], () => null).with(["banner", !0], () => n(c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
    days: l
  }))).with(["modal", !0], () => n(c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
    days: l
  }))).otherwise(() => n(c.default.Messages.COLLECTIBLES_LAST_DAY))
}