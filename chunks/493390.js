"use strict";
a.r(t), a.d(t, {
  openProfileEffectModal: function() {
    return l
  }
});
var s = a("37983");
a("884691");
var r = a("77078");
let l = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: l,
    guild: n
  } = e;
  (0, r.openModalLazy)(async () => {
    let {
      default: e
    } = await a.el("889793").then(a.bind(a, "889793"));
    return a => (0, s.jsx)(e, {
      ...a,
      guild: n,
      initialSelectedEffectId: l,
      analyticsLocations: t
    })
  }, {})
}