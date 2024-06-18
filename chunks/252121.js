"use strict";
t.d(s, {
  Z: function() {
    return r
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(236413),
  a = t(564488);

function r(e) {
  let {
    guildId: s,
    triggerType: t
  } = e, r = i.useMemo(() => () => (0, l.ep)(s, t), [s, t]), [o] = i.useState(r);
  return (0, n.jsx)(a.Z, {
    rule: o
  })
}