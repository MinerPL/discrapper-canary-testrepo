"use strict";
t.d(s, {
  Z: function() {
    return o
  }
}), t(411104);
var n = t(735250);
t(470079);
var i = t(67523),
  l = t(865267),
  a = t(125664),
  r = t(981631);

function o(e) {
  let {
    tier: s,
    ...t
  } = e;
  switch (s) {
    case r.Eu4.TIER_1:
      return (0, n.jsx)(i.Z, {
        ...t
      });
    case r.Eu4.TIER_2:
      return (0, n.jsx)(l.Z, {
        ...t
      });
    case r.Eu4.TIER_3:
      return (0, n.jsx)(a.Z, {
        ...t
      });
    case r.Eu4.NONE:
      return null;
    default:
      throw Error("Not a valid tier type")
  }
}