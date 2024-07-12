t.d(n, {
  CW: function() {
return c;
  },
  G9: function() {
return x;
  },
  K9: function() {
return f;
  },
  q$: function() {
return h;
  },
  r0: function() {
return d;
  },
  s$: function() {
return m;
  }
});
var r = t(735250);
t(470079);
var l = t(120356),
  i = t.n(l),
  s = t(481060),
  a = t(41959),
  o = t(245561),
  u = t(37099);
let c = e => {
let {
  application: n,
  asset: t,
  className: l,
  ...i
} = e;
return (0, r.jsx)(a.Z, {
  application: n,
  size: a.H.MEDIUM,
  asset: t,
  className: l,
  ...i
});
  },
  d = e => {
let {
  children: n,
  className: t,
  id: l,
  ...a
} = e;
return (0, r.jsx)(s.Heading, {
  className: i()(u.header, t),
  variant: 'heading-xl/extrabold',
  id: l,
  ...a,
  children: n
});
  };

function m() {
  return (0, r.jsx)('hr', {
className: u.divider
  });
}
let f = e => {
let {
  className: n,
  title: t,
  description: l,
  ...i
} = e;
return (0, r.jsxs)('div', {
  className: n,
  ...i,
  children: [
    (0, r.jsx)(s.Heading, {
      variant: 'heading-md/bold',
      color: 'header-primary',
      children: t
    }),
    (0, r.jsx)(s.Heading, {
      variant: 'heading-sm/normal',
      color: 'header-secondary',
      children: l
    })
  ]
});
  },
  x = e => {
let {
  applicationId: n,
  storeListingBenefits: t,
  skuBenefits: l,
  className: s,
  ...a
} = e;
return (0, r.jsx)('div', {
  className: i()(u.benefitsContainer, s),
  ...a,
  children: (0, r.jsx)(o.GU, {
    applicationId: n,
    storeListingBenefits: t,
    skuBenefits: l,
    className: u.benefit
  })
});
  },
  h = e => {
let {
  children: n,
  className: t,
  ...l
} = e;
return (0, r.jsx)('div', {
  className: i()(u.container, t),
  ...l,
  children: n
});
  };