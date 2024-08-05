n.d(t, {
  tS: function() {
return h;
  },
  x3: function() {
return p;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(846519),
  u = n(481060),
  c = n(607070),
  d = n(706454),
  _ = n(506071),
  E = n(561308),
  f = n(377329);

function h(e, t) {
  let [n, r] = i.useState(Date.now()), a = (0, _.n)(), s = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), u = i.useMemo(() => {
let {
  hours: t
} = (0, E.JY)(e, n);
return t > 0 ? 300000 : 1000;
  }, [
e,
n
  ]);
  return i.useEffect(() => {
let e = new l.Xp();
return e.start(u, () => {
  r(Date.now());
}), (!a || s && !t) && e.stop(), () => e.stop();
  }, [
u,
a,
s,
t
  ]), n;
}
let p = e => {
  let {
entry: t,
inline: n = !1,
textColor: a,
hovered: o = !1,
bold: l = !1
  } = e, c = h(t, o), d = i.useMemo(() => (0, E.T_)(t, c), [
t,
c
  ]);
  return (0, r.jsx)(u.Text, {
className: s()(f.timestamp, {
  [f.inlineTimestamp]: n,
  [f.bold]: l
}),
variant: 'text-xs/medium',
tabularNumbers: !0,
color: a,
children: d
  });
};
t.ZP = e => {
  let {
entry: t,
textColor: n,
hovered: i = !1,
bold: a = !1
  } = e, s = (0, E.kr)(t), l = (0, o.e7)([d.default], () => d.default.locale);
  return s ? (0, r.jsx)(p, {
entry: t,
textColor: n,
hovered: i,
bold: a
  }) : (0, r.jsx)(u.Text, {
variant: 'text-xs/normal',
color: n,
lineClamp: 1,
children: (0, E.GL)(t, l)
  });
};