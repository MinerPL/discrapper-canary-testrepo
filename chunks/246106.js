"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(442837),
  r = n(314897),
  s = n(317381),
  o = n(613611);

function a(e) {
  let t = r.default.getId(),
    {
      userActivity: n,
      inActivity: a
    } = (0, i.cj)([s.ZP], () => {
      let n = s.ZP.getSelfEmbeddedActivityForChannel(e),
        i = s.ZP.getEmbeddedActivitiesForChannel(e).find(e => e.applicationId === (null == n ? void 0 : n.applicationId)),
        r = !1;
      if ((null == i ? void 0 : i.participants) != null) {
        var a;
        r = (null == i ? void 0 : null === (a = i.participants) || void 0 === a ? void 0 : a.find(e => (0, o.J)(e))) != null
      } else(null == i ? void 0 : i.userIds) != null && (r = i.userIds.has(t));
      return {
        userActivity: n,
        inActivity: null != r && r
      }
    });
  return {
    userActivity: n,
    inActivity: a
  }
}