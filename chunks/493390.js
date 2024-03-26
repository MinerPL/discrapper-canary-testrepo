"use strict";
a.r(t), a.d(t, {
  openProfileEffectModal: function() {
    return s
  }
});
var l = a("37983");
a("884691");
var r = a("77078");
let s = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: s,
    guild: n
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("889793").then(a.bind(a, "889793"));
    return a => (0, l.jsx)(e, {
      ...a,
      guild: n,
      initialSelectedEffectId: s,
      analyticsLocations: t
    })
  }, {})
}