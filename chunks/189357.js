"use strict";
n.d(t, {
  By: function() {
    return d
  },
  ms: function() {
    return c
  }
}), n(47120);
var i = n(149765),
  r = n(442837),
  s = n(430824),
  o = n(594174),
  a = n(700785),
  l = n(686692),
  u = n(478743);
let _ = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Z, o.default];
    if (null == e) return !1;
    let [n, r] = t, l = n.getGuild(e);
    if (null == l) return !1;
    let _ = r.getCurrentUser();
    return i.Db(a.uB({
      user: _,
      context: l,
      checkElevated: !1
    }), u.N)
  },
  d = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let i = _(e),
      r = (0, l.Qf)(e, {
        autoTrackExposure: t,
        disable: !i,
        location: n
      });
    return i && r
  };

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    i = (0, r.e7)([s.Z, o.default], () => _(e, [s.Z, o.default]), [e]),
    a = (0, l.Om)(e, {
      autoTrackExposure: t,
      disable: !i,
      location: n
    });
  return i && a
}