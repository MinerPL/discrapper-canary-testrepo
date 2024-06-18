"use strict";
n.d(e, {
  W: function() {
    return s
  }
});
var r = n(607190);
let i = () => {
    let t = r.m.performance.timing,
      e = r.m.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
      };
    for (let e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
    return n
  },
  s = () => r.m.__WEB_VITALS_POLYFILL__ ? r.m.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || i()) : r.m.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]