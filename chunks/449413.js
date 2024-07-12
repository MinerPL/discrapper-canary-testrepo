var r = n(735250),
  i = n(470079),
  a = n(454585),
  o = n(474333),
  s = n(273744),
  l = n(396452);
t.Z = e => {
  let {
node: {
  info: t
}
  } = e, n = i.useRef(a.Z.reactParserFor({
...a.Z.defaultRules,
link: s.s
  }));
  return null == t ? null : (0, r.jsx)(o.Z, {
className: l.infoBox,
messageType: o.Q.INFO,
children: n.current(t)
  });
};