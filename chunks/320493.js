"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("454686"),
  i = s("842357");

function r(e) {
  let {
    guildId: t,
    triggerType: s
  } = e, r = l.useMemo(() => () => (0, n.createDefaultRule)(t, s), [t, s]), [o] = l.useState(r);
  return (0, a.jsx)(i.default, {
    rule: o
  })
}