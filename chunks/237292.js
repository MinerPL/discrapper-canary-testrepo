"use strict";
n.d(t, {
  mG: function() {
    return o
  },
  y0: function() {
    return a
  }
});
var i = n(818083);
let r = (0, i.B)({
    kind: "user",
    id: "2024-01_inappropriate_conversation_warning",
    label: "Inappropriate Conversation Warning",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Inappropriate Conversation Warning",
      config: {
        enabled: !0
      }
    }]
  }),
  s = (0, i.B)({
    kind: "user",
    id: "2024-01_inappropriate_conversation_warning_staff_bypass",
    label: "Inappropriate Conversation Warning Staff Bypass",
    defaultConfig: {
      enabled: !1
    },
    treatments: [{
      id: 1,
      label: "Enable Inappropriate Conversation Warning Staff Bypass",
      config: {
        enabled: !0
      }
    }]
  });

function o(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: i
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  }), {
    enabled: o
  } = s.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i || o
}

function a(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: i
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }), {
    enabled: o
  } = s.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i || o
}