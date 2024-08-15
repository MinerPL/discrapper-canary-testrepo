a.d(t, {
  Z: function() {
return x;
  }
}), a(47120);
var n = a(735250),
  s = a(470079),
  l = a(120356),
  i = a.n(l),
  r = a(481060),
  c = a(44315),
  o = a(937615),
  d = a(981631),
  _ = a(689938),
  m = a(567905);

function T(e) {
  let {
price: t,
selected: a,
onClick: s
  } = e;
  return (0, n.jsxs)(r.Clickable, {
className: i()(m.priceRow, {
  [m.selected]: a
}),
onClick: s,
children: [
  a ? (0, n.jsx)(r.CircleCheckIcon, {
    size: 'custom',
    width: 20,
    height: 20,
    secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
    color: (0, c.Lq)(d.Ilk.BRAND_500)
  }) : (0, n.jsx)('svg', {
    width: '20',
    height: '20',
    children: (0, n.jsx)('circle', {
      cx: 10,
      cy: 10,
      r: 10,
      className: m.circle
    })
  }),
  (0, n.jsxs)('div', {
    className: m.priceRowText,
    children: [
      (0, n.jsx)(r.Text, {
        variant: 'text-sm/normal',
        tag: 'span',
        children: (0, o.T4)(t, d.pKx.USD)
      }),
      (0, n.jsx)(r.Text, {
        variant: 'text-xxs/medium',
        tag: 'span',
        children: '/mo.'
      })
    ]
  })
]
  });
}

function x(e) {
  let {
selectedTemplate: t,
handleSelectTemplate: a,
newPricesToPick: l
  } = e, [i, c] = s.useState(0);
  return (0, n.jsxs)('div', {
className: m.container,
children: [
  (0, n.jsxs)('div', {
    className: m.content,
    children: [
      (0, n.jsx)(r.Heading, {
        variant: 'heading-md/semibold',
        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_HEADER.format({
          tierName: t.listings[0].name
        })
      }),
      (0, n.jsx)(r.Text, {
        variant: 'text-sm/normal',
        className: m.bodyText,
        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_BODY.format({
          price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD)
        })
      }),
      l.map((e, t) => (0, n.jsx)(T, {
        price: e,
        selected: t === i,
        onClick: () => c(t)
      }, e))
    ]
  }),
  (0, n.jsx)(r.Button, {
    size: r.Button.Sizes.MEDIUM,
    onClick: () => {
      a({
        ...t,
        listings: [{
          ...t.listings[0],
          price_tier: l[i]
        }]
      });
    },
    children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
  })
]
  });
}