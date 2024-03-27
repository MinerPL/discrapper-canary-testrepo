"use strict";
n.r(t), n.d(t, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return c
  },
  useCanAccessGuildMemberModView: function() {
    return f
  }
}), n("222007");
var l = n("316693"),
  u = n("446674"),
  i = n("305961"),
  r = n("697218"),
  o = n("991170"),
  a = n("209700"),
  s = n("562980");
let d = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [i.default, r.default];
    if (null == e) return !1;
    let [n, u] = t, a = n.getGuild(e);
    if (null == a) return !1;
    let d = u.getCurrentUser(),
      c = l.hasAny(o.computePermissions({
        user: d,
        context: a,
        checkElevated: !1
      }), s.MemberSafetyPagePermissions);
    return c
  },
  c = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let l = d(e),
      u = (0, a.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: t,
        disable: !l,
        location: n
      });
    return l && u
  };

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0,
    l = (0, u.useStateFromStores)([i.default, r.default], () => d(e, [i.default, r.default]), [e]),
    o = (0, a.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: t,
      disable: !l,
      location: n
    });
  return l && o
}