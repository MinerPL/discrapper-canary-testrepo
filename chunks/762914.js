"use strict";
n.d(t, {
  Ce: function() {
    return l
  },
  Dd: function() {
    return o
  },
  V1: function() {
    return a
  }
});
var i = n(442837),
  r = n(592125),
  s = n(770471);

function o(e) {
  let {
    canViewBroadcasts: t
  } = s.Z.useExperiment({
    location: "use_is_broadcasting_gdm"
  }, {
    autoTrackExposure: !1
  }), n = (0, i.e7)([r.Z], () => r.Z.getChannel(e));
  return !!t && !!(null == n ? void 0 : n.isBroadcastChannel())
}

function a(e) {
  let {
    canViewBroadcasts: t
  } = s.Z.getCurrentConfig({
    location: "get_is_broadcasting_gdm"
  }, {
    autoTrackExposure: !1
  });
  if (!t) return !1;
  let n = r.Z.getChannel(e);
  return !!(null == n ? void 0 : n.isBroadcastChannel())
}

function l(e) {
  return e.filter(e => !a(e))
}