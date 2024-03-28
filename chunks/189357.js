"use strict";
n.r(t), n.d(t, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return c
  },
  useCanAccessGuildMemberModView: function() {
    return E
  }
}), n("47120");
var i = n("149765"),
  a = n("442837"),
  u = n("430824"),
  l = n("594174"),
  d = n("700785"),
  r = n("686692"),
  s = n("478743");
let o = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, l.default];
    if (null == e) return !1;
    let [n, a] = t, r = n.getGuild(e);
    if (null == r) return !1;
    let o = a.getCurrentUser();
    return i.hasAny(d.computePermissions({
      user: o,
      context: r,
      checkElevated: !1
    }), s.MemberSafetyPagePermissions)
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let i = o(e),
      a = (0, r.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: t,
        disable: !i,
        location: n
      });
    return i && a
  };

function E(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    i = (0, a.useStateFromStores)([u.default, l.default], () => o(e, [u.default, l.default]), [e]),
    d = (0, r.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: t,
      disable: !i,
      location: n
    });
  return i && d
}