"use strict";
a.r(e), a.d(e, {
  BirthdayActivitiesRouteGuard: function() {
    return r
  }
});
var t = a("735250"),
  C = a("613828"),
  s = a("442837"),
  l = a("594174"),
  i = a("348600"),
  n = a("981631");

function r(L) {
  let {
    children: e
  } = L, a = (0, s.useStateFromStores)([l.default], () => l.default.getCurrentUser()), {
    enabled: r
  } = i.BirthdayActivitiesExperiment.useExperiment({
    location: "1f3236_1"
  }, {
    autoTrackExposure: !0
  });
  return null == a ? null : r ? (0, t.jsx)(t.Fragment, {
    children: e
  }) : (0, t.jsx)(C.Redirect, {
    to: n.Routes.ME
  })
}