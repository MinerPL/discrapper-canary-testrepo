"use strict";
n.d(t, {
  $: function() {
    return r
  }
});
var i = n(818083);

function r(e) {
  let {
    isRecentlyOnlineEnabled: t,
    maxRecentMs: n
  } = s.getCurrentConfig({
    location: "n/a"
  }, {
    autoTrackExposure: !1
  }), i = Date.now() - (null != e ? e : 0);
  return {
    isRecentlyOnlineShowable: t && i <= n,
    isRecentlyOnlineTrackable: i <= 1728e5
  }
}
let s = (0, i.B)({
  kind: "user",
  id: "2024-05_clientside_recently_online_desktop",
  label: "Recently Online Clientside Desktop",
  defaultConfig: {
    allowPrioritySubscriptions: !1,
    isRecentlyOnlineEnabled: !1,
    maxRecentMs: -1
  },
  treatments: [{
    id: 0,
    label: "Control",
    config: {
      allowPrioritySubscriptions: !0,
      isRecentlyOnlineEnabled: !1,
      maxRecentMs: -1
    }
  }, {
    id: 1,
    label: "Enabled: 1h",
    config: {
      allowPrioritySubscriptions: !0,
      isRecentlyOnlineEnabled: !0,
      maxRecentMs: 36e5
    }
  }, {
    id: 2,
    label: "Enabled: 4h",
    config: {
      allowPrioritySubscriptions: !0,
      isRecentlyOnlineEnabled: !0,
      maxRecentMs: 144e5
    }
  }, {
    id: 3,
    label: "Enabled: 48h",
    config: {
      allowPrioritySubscriptions: !0,
      isRecentlyOnlineEnabled: !0,
      maxRecentMs: 1728e5
    }
  }]
});
t.Z = s