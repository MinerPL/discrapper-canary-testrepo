e.d(t, {
  tS: function() {
return s;
  },
  x3: function() {
return d;
  }
}), e(47120);
var r = e(735250),
  u = e(470079),
  i = e(442837),
  o = e(846519),
  E = e(481060),
  l = e(607070),
  a = e(706454),
  T = e(506071),
  _ = e(561308),
  c = e(377329);

function s(n, t) {
  let [e, r] = u.useState(Date.now()), E = (0, T.n)(), a = (0, i.e7)([l.Z], () => l.Z.useReducedMotion), c = u.useMemo(() => {
let {
  hours: t
} = (0, _.JY)(n, e);
return t > 0 ? 300000 : 1000;
  }, [
n,
e
  ]);
  return u.useEffect(() => {
let n = new o.Xp();
return n.start(c, () => {
  r(Date.now());
}), (!E || a && !t) && n.stop(), () => n.stop();
  }, [
c,
E,
a,
t
  ]), e;
}
let d = n => {
  let {
entry: t,
inline: e = !1,
textColor: i,
hovered: o = !1
  } = n, l = s(t, o), a = u.useMemo(() => (0, _.T_)(t, l), [
t,
l
  ]);
  return (0, r.jsx)(E.Text, {
className: e ? c.inlineTimestamp : void 0,
variant: 'text-xs/normal',
tabularNumbers: !0,
color: i,
children: a
  });
};
t.ZP = n => {
  let {
entry: t,
textColor: e,
hovered: u = !1
  } = n, o = (0, _.kr)(t), l = (0, i.e7)([a.default], () => a.default.locale);
  return o ? (0, r.jsx)(d, {
entry: t,
textColor: e,
hovered: u
  }) : (0, r.jsx)(E.Text, {
variant: 'text-xs/normal',
color: e,
lineClamp: 1,
children: (0, _.GL)(t, l)
  });
};