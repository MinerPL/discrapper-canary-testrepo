"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("794252");
var l, s, r = a("37983");
a("884691");
var n = a("414456"),
  i = a.n(n),
  o = a("506838"),
  c = a("956089"),
  u = a("782340"),
  d = a("53248");
(s = l || (l = {})).BANNER = "banner", s.MODAL = "modal", s.CARD = "card";
var f = e => {
  let {
    category: t,
    display: a,
    className: l
  } = e;
  if (null == t.unpublishedAt) return null;
  let s = function(e) {
    let t = new Date,
      a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
      l = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    return Math.floor((l - a) / 864e5)
  }(t.unpublishedAt);

  function n(e) {
    return (0, r.jsx)(c.TextBadge, {
      disableColor: !0,
      text: e,
      className: i(d.badge, l)
    })
  }
  return (0, o.match)([a, s > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
    let e = u.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
      days: s
    });
    return n(e)
  }).with(["modal", !0], () => {
    let e = u.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
      days: s
    });
    return n(e)
  }).otherwise(() => {
    let e = u.default.Messages.COLLECTIBLES_LAST_DAY;
    return n(e)
  })
}