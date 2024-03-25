"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var r = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("641078"),
  l = n("78938"),
  o = n("642522");

function u(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, a.useIsEligibleForBogoPromotion)(), i = (0, a.getBOGOPillCopy)();
  return n ? (0, r.jsx)(l.default, {
    className: s({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: i
  }) : null
}