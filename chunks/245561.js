n.d(t, {
  GU: function() {
return c;
  },
  ZP: function() {
return d;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  s = n(481060),
  o = n(596454),
  l = n(889989),
  u = n(705260);

function c(e) {
  let t, {
applicationId: n,
storeListingBenefits: i,
skuBenefits: s,
className: o
  } = e;
  return null != i ? t = i.map(e => (0, r.jsx)(_, {
applicationId: n,
benefit: e,
className: a()(u.__invalid_benefit, o)
  }, e.id)) : null != s && (t = s.map((e, t) => (0, r.jsx)(d, {
benefit: e,
className: a()(u.__invalid_benefit, o)
  }, t))), (0, r.jsx)(r.Fragment, {
children: t
  });
}

function d(e) {
  let {
benefit: t,
className: n,
emojiContainerClassName: i,
showsDescription: l = !0,
nameTextVariant: c = 'text-md/medium',
nameTextColor: d = 'header-primary'
  } = e;
  return (0, r.jsxs)('div', {
className: a()(u.container, n),
children: [
  null != t.emoji && (0, r.jsx)('div', {
    className: a()(u.emojiContainer, i),
    children: (0, r.jsx)(o.Z, {
      emojiId: t.emoji.id,
      emojiName: t.emoji.name,
      animated: t.emoji.animated
    })
  }),
  (0, r.jsxs)('div', {
    className: u.infoContainer,
    children: [
      (0, r.jsx)(s.Text, {
        variant: c,
        color: d,
        className: u.name,
        children: t.name
      }),
      l && (0, r.jsx)(s.Text, {
        color: 'interactive-normal',
        variant: 'text-sm/normal',
        children: t.description
      })
    ]
  })
]
  });
}

function _(e) {
  let {
applicationId: t,
benefit: n,
className: i,
emojiContainerClassName: o,
showsDescription: c = !0,
nameTextVariant: d = 'text-md/medium',
nameTextColor: _ = 'header-primary'
  } = e;
  return (0, r.jsxs)('div', {
className: a()(u.container, i),
children: [
  (0, r.jsx)('div', {
    className: a()(u.emojiContainer, o),
    children: (0, l.n)(t, n.icon)
  }),
  (0, r.jsxs)('div', {
    className: u.infoContainer,
    children: [
      (0, r.jsx)(s.Text, {
        variant: d,
        color: _,
        className: u.name,
        children: n.name
      }),
      c && (0, r.jsx)(s.Text, {
        color: 'interactive-normal',
        variant: 'text-sm/normal',
        children: n.description
      })
    ]
  })
]
  });
}