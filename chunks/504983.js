n.d(t, {
  Y: function() {
return a;
  }
});
var r, a, s = n(735250),
  u = n(470079),
  l = n(120356),
  i = n.n(l),
  E = n(325175);
(r = a || (a = {})).PREMIUM = 'premium', r.LIMITED = 'limited';
let _ = {
  premium: {
border: E.premiumFeatureBorder,
background: E.premiumBackground
  },
  limited: {
border: E.limitedFeatureBorder,
background: E.limitedBackground
  }
};
t.Z = u.forwardRef(function(e, t) {
  let {
children: n,
type: r = 'premium',
isShown: a,
hasBackground: u = !1,
className: l,
backgroundClassName: c
  } = e;
  if (!a)
return (0, s.jsx)(s.Fragment, {
  children: n
});
  let {
border: O,
background: C
  } = _[r];
  return (0, s.jsx)('div', {
ref: t,
className: i()(O, l),
children: (0, s.jsx)('div', {
  className: i()(u ? C : E.background, c),
  children: n
})
  });
});