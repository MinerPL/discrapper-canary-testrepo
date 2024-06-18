"use strict";
n.d(t, {
  Z: function() {
    return r
  }
});
var i = n(812206);

function r(e) {
  var t;
  let {
    applicationId: n,
    activityConfigs: r,
    applications: s
  } = e, o = null !== (t = null == s ? void 0 : s.find(e => e.id === n)) && void 0 !== t ? t : i.Z.getApplication(n), a = r.find(e => e.application_id === n);
  return null == a || null == o ? null : {
    activity: a,
    application: o
  }
}