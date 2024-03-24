"use strict";
t.r(n), t.d(n, {
  canAccessGuildMemberModViewWithExperiment: function() {
    return c
  },
  useCanAccessGuildMemberModView: function() {
    return f
  }
}), t("222007");
var i = t("316693"),
  l = t("446674"),
  u = t("305961"),
  r = t("697218"),
  a = t("991170"),
  o = t("209700"),
  d = t("562980");
let s = function(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [u.default, r.default];
    if (null == e) return !1;
    let [t, l] = n, o = t.getGuild(e);
    if (null == o) return !1;
    let s = l.getCurrentUser(),
      c = i.hasAny(a.computePermissions({
        user: s,
        context: o,
        checkElevated: !1
      }), d.MemberSafetyPagePermissions);
    return c
  },
  c = function(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      t = arguments.length > 2 ? arguments[2] : void 0;
    if (null == e) return !1;
    let i = s(e),
      l = (0, o.isInGuildMemberModViewExperiment)(e, {
        autoTrackExposure: n,
        disable: !i,
        location: t
      });
    return i && l
  };

function f(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    t = arguments.length > 2 ? arguments[2] : void 0,
    i = (0, l.useStateFromStores)([u.default, r.default], () => s(e, [u.default, r.default]), [e]),
    a = (0, o.useGuildMemberModViewExperiment)(e, {
      autoTrackExposure: n,
      disable: !i,
      location: t
    });
  return i && a
}