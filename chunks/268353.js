"use strict";
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(928518),
  o = n(451478),
  a = n(710290),
  l = n(371282),
  u = n(228488),
  _ = n(871499),
  d = n(689938);
t.Z = r.ZP.connectStores([o.Z, s.Z], e => {
  let {
    node: t,
    guestWindow: n
  } = e;
  return {
    enabled: (0, u.rB)(t, null == n ? void 0 : n.document)
  }
})(function(e) {
  let {
    enabled: t,
    ...n
  } = e, r = t ? d.Z.Messages.EXIT_FULL_SCREEN : d.Z.Messages.FULL_SCREEN, s = t ? l.Z : a.Z;
  return (0, i.jsx)(_.Z, {
    label: r,
    iconComponent: s,
    ...n
  })
})