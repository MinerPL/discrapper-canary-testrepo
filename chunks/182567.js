"use strict";
s.r(t), s.d(t, {
  AnalyticsLocationsProvider: function() {
    return i
  }
}), s("47120");
var a = s("735250");
s("470079");
var r = s("906732");

function i(e) {
  let {
    analyticsLocations: t
  } = (0, r.default)(...e.newLocations);
  return (0, a.jsx)(r.LocationContext.Provider, {
    value: t,
    children: e.children
  })
}