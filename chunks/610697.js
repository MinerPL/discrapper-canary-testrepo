"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("594174"),
  i = n("823162"),
  r = n("355298");
let o = new Set(["GB"]);

function u() {
  let e = (0, l.useStateFromStores)([r.default], () => r.default.getUserCountryCode()),
    t = !1 === (0, l.useStateFromStores)([s.default], () => {
      var e;
      return null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
    });
  return a.useEffect(() => {
    null == e && (0, i.fetchUserCountryCode)()
  }, [e]), !!(null != e && o.has(e.alpha2)) && !!t || !1
}