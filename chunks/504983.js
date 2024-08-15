t.d(n, {
  Y: function() {
return i;
  }
});
var r, i, o = t(735250),
  l = t(470079),
  a = t(120356),
  d = t.n(a),
  c = t(823668);
(r = i || (i = {})).PREMIUM = 'premium', r.LIMITED = 'limited';
let s = {
  premium: {
border: c.premiumFeatureBorder,
background: c.premiumBackground
  },
  limited: {
border: c.limitedFeatureBorder,
background: c.limitedBackground
  }
};
n.Z = l.forwardRef(function(e, n) {
  let {
children: t,
type: r = 'premium',
isShown: i,
hasBackground: l = !1,
className: a,
backgroundClassName: u
  } = e;
  if (!i)
return (0, o.jsx)(o.Fragment, {
  children: t
});
  let {
border: m,
background: h
  } = s[r];
  return (0, o.jsx)('div', {
ref: n,
className: d()(m, a),
children: (0, o.jsx)('div', {
  className: d()(l ? h : c.background, u),
  children: t
})
  });
});