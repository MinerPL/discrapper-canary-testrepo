"use strict";
s.r(e);
var l = s("735250");
s("470079");
var a = s("481060");
e.default = t => {
  let {
    product: e,
    analyticsLocations: i
  } = t;
  (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([s.e("99387"), s.e("87624"), s.e("57085")]).then(s.bind(s, "331042"));
    return s => (0, l.jsx)(t, {
      product: e,
      analyticsLocations: i,
      ...s
    })
  })
}