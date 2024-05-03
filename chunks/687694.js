"use strict";
n.r(t), n.d(t, {
  useMemberListHoverInteractions: function() {
    return l
  }
});
let a = (0, n("818083").createExperiment)({
    id: "2024-04_memberlist_hover_interactions",
    kind: "user",
    label: "Memberlist Hover Interactions",
    defaultConfig: {
      showReplyIcon: !1,
      openOnHover: !1
    },
    treatments: [{
      id: 0,
      label: "Control",
      config: {
        showReplyIcon: !1,
        openOnHover: !1
      }
    }, {
      id: 1,
      label: "Show Reply Icon",
      config: {
        showReplyIcon: !0,
        openOnHover: !1
      }
    }, {
      id: 2,
      label: "Open on Hover",
      config: {
        showReplyIcon: !1,
        openOnHover: !0
      }
    }]
  }),
  l = e => {
    let {
      location: t,
      autoTrackExposure: n = !0
    } = e, {
      showReplyIcon: l,
      openOnHover: s
    } = a.useExperiment({
      location: t
    }, {
      autoTrackExposure: n
    });
    return {
      showReplyIcon: l,
      openOnHover: s
    }
  }