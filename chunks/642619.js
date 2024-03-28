"use strict";
s.r(t), s.d(t, {
  openProfileEffectModal: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("481060");
let l = e => {
  let {
    analyticsLocations: t,
    initialSelectedEffectId: l,
    guild: i
  } = e;
  (0, n.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([s.e("99387"), s.e("65866"), s.e("55228")]).then(s.bind(s, "191564"));
    return s => (0, a.jsx)(e, {
      ...s,
      guild: i,
      initialSelectedEffectId: l,
      analyticsLocations: t
    })
  }, {})
}