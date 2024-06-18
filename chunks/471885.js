"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(411104);
var i = n(735250);
n(470079);
var r = n(758426),
  s = n(973675),
  o = n(949605),
  a = n(981631);

function l(e) {
  let {
    tier: t,
    ...n
  } = e;
  switch (t) {
    case a.Eu4.NONE:
    case a.Eu4.TIER_1:
      return (0, i.jsx)(r.Z, {
        ...n
      });
    case a.Eu4.TIER_2:
      return (0, i.jsx)(s.Z, {
        ...n
      });
    case a.Eu4.TIER_3:
      return (0, i.jsx)(o.Z, {
        ...n
      });
    default:
      throw Error("Not a valid tier type")
  }
}