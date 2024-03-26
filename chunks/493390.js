"use strict";
a.r(t), a.d(t, {
  openProfileEffectModal: function() {
    return r
  }
});
var s = a("37983");
a("884691");
var l = a("77078");
let r = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: r,
    guild: n
  } = e;
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("889793").then(a.bind(a, "889793"));
    return a => (0, s.jsx)(e, {
      ...a,
      guild: n,
      initialSelectedEffectId: r,
      analyticsLocations: t
    })
  }, {})
}