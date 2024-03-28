"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("803997"),
  s = n.n(r),
  a = n("248042"),
  l = n("673591"),
  o = n("712634");

function u(e) {
  let {
    isNitroTab: t = !1
  } = e, n = (0, a.useIsEligibleForBogoPromotion)(), r = (0, a.getBOGOPillCopy)();
  return n ? (0, i.jsx)(l.default, {
    className: s()({
      [o.nitroTabBadgeContainer]: t
    }),
    copy: r
  }) : null
}