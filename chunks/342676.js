"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
}), a("794252");
var s, l, r = a("37983");
a("884691");
var n = a("414456"),
  o = a.n(n),
  i = a("506838"),
  u = a("956089"),
  c = a("782340"),
  d = a("53248");
(l = s || (s = {})).BANNER = "banner", l.MODAL = "modal", l.CARD = "card";
var f = e => {
  let {
    category: t,
    display: a,
    className: s
  } = e;
  if (null == t.unpublishedAt) return null;
  let l = function(e) {
    let t = new Date,
      a = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()),
      s = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate());
    return Math.floor((s - a) / 864e5)
  }(t.unpublishedAt);

  function n(e) {
    return (0, r.jsx)(u.TextBadge, {
      disableColor: !0,
      text: e,
      className: o(d.badge, s)
    })
  }
  return (0, i.match)([a, l > 1]).with(["card", !0], () => null).with(["banner", !0], () => {
    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT_IN_SHOP.format({
      days: l
    });
    return n(e)
  }).with(["modal", !0], () => {
    let e = c.default.Messages.COLLECTIBLES_DAYS_LEFT.format({
      days: l
    });
    return n(e)
  }).otherwise(() => {
    let e = c.default.Messages.COLLECTIBLES_LAST_DAY;
    return n(e)
  })
}