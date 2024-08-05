n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(40966),
  u = n(580552),
  c = n(240991),
  d = n(278297),
  _ = n(153521);

function E(e) {
  let {
userBio: t,
className: n,
animateOnHover: a = !1,
isHovering: E = !1,
lineClamp: f = 6,
setLineClamp: h = !0,
textColor: p,
userId: m
  } = e, I = i.useMemo(() => (0, u.Z)(m) ? (0, r.jsx)(l.Z, {}) : null == t || '' === t ? null : (0, c.YP)(t), [
m,
t
  ]);
  return null == I ? null : (0, r.jsx)('div', {
className: s()(n, _.markup),
children: (0, r.jsx)(o.Text, {
  variant: 'text-sm/normal',
  lineClamp: h ? f : void 0,
  color: void 0 !== p ? p : void 0,
  children: (0, r.jsx)(d.G.Provider, {
    value: {
      disableAnimations: a && !E,
      disableInteractions: !1
    },
    children: I
  })
})
  });
}