"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120");
var a = s("735250"),
  l = s("470079"),
  n = s("236413"),
  i = s("564488");

function r(e) {
  let {
    guildId: t,
    triggerType: s
  } = e, r = l.useMemo(() => () => (0, n.createDefaultRule)(t, s), [t, s]), [o] = l.useState(r);
  return (0, a.jsx)(i.default, {
    rule: o
  })
}