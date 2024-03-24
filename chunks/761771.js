"use strict";
n.r(t), n.d(t, {
  isEligibleForInappropriateConversationWarning: function() {
    return s
  },
  useIsEligibleForInappropriateConversationWarning: function() {
    return l
  }
});
var i = n("862205");
let a = (0, i.createExperiment)({
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
  r = (0, i.createExperiment)({
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

function s(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: i
  } = a.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  }), {
    enabled: s
  } = r.getCurrentConfig({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i || s
}

function l(e) {
  let {
    location: t,
    autoTrackExposure: n = !1
  } = e, {
    enabled: i
  } = a.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  }), {
    enabled: s
  } = r.useExperiment({
    location: t
  }, {
    autoTrackExposure: n
  });
  return i || s
}