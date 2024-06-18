"use strict";
var i = n(735250),
  r = n(470079),
  s = n(454585),
  o = n(474333),
  a = n(273744),
  l = n(336967);
t.Z = e => {
  let {
    node: {
      info: t
    }
  } = e, n = r.useRef(s.Z.reactParserFor({
    ...s.Z.defaultRules,
    link: a.s
  }));
  return null == t ? null : (0, i.jsx)(o.Z, {
    className: l.infoBox,
    messageType: o.Q.INFO,
    children: n.current(t)
  })
}