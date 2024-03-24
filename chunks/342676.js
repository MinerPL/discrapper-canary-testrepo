"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("794252");
var s, r, l = a("37983");
a("884691");
var n = a("414456"),
  i = a.n(n),
  o = a("506838"),
  c = a("956089"),
  u = a("782340"),
  d = a("53248");
(r = s || (s = {})).BANNER = "banner", r.MODAL = "modal", r.CARD = "card";
var f = e => {
  let {
    category: t,
    display: a,
    className: s
  } = e;
  if (null == t.unpublishedAt) return null;
  let r = function(e) {
    let t = new Date,
      a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
      s = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    return Math.floor((s - a) / 864e5)
  }(t.unpublishedAt);

  function n(e) {
    return (0, l.jsx)(c.TextBadge, {
      disableColor: !0,
      text: e,
      className: i(d.badge, s)
    })
  }
  return (0, o.match)([a, r > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
    let e = u.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
      days: r
    });
    return n(e)
  }).with(["modal", !0], () => {
    let e = u.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
      days: r
    });
    return n(e)
  }).otherwise(() => {
    let e = u.default.Messages.COLLECTIBLES_LAST_DAY;
    return n(e)
  })
}