n.d(t, {
  F: function() {
return u;
  }
}), n(757143);
var r = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  o = n(481060),
  i = n(937615),
  l = n(884697),
  c = n(793024);
let d = e => e.length > 5 ? e.replace(/\.00$/, '') : e,
  u = e => {
var t;
let {
  price: {
    amount: n,
    currency: s
  },
  renderPrice: u,
  icon: p,
  className: g,
  discount: f = l.f_,
  variant: C = 'heading-md/semibold'
} = e, m = d((0, i.T4)(n, s)), h = f !== l.f_ && f.discountPercentage >= 5 ? (0, r.jsxs)(r.Fragment, {
  children: [
    m,
    (0, r.jsx)(o.Heading, {
      variant: C,
      color: 'text-positive',
      className: c.discount,
      children: ' (-'.concat(f.discountPercentage, '%)')
    })
  ]
}) : m;
return (0, r.jsx)(r.Fragment, {
  children: (0, r.jsxs)(o.Heading, {
    variant: C,
    className: a()(c.container, g),
    children: [
      p,
      null !== (t = null == u ? void 0 : u(h)) && void 0 !== t ? t : h
    ]
  })
});
  };