var t = n(735250);
n(470079);
var i = n(481060),
  r = n(823188),
  l = n(474936),
  a = n(349707);

function o(e) {
  let {
onClick: s,
isGift: n,
priceOptions: l
  } = e;
  return (0, t.jsx)(i.Clickable, {
onClick: s,
style: {
  cursor: 'pointer'
},
children: (0, t.jsx)(r.wp, {
  className: a.tier2MarketingCard,
  ctaButton: null,
  showWumpus: !0,
  showYearlyPrice: !0,
  isGift: n,
  isModal: !0,
  priceOptions: l
})
  });
}

function C(e) {
  let {
onClick: s,
isGift: n,
priceOptions: l
  } = e;
  return (0, t.jsx)(i.Clickable, {
onClick: s,
style: {
  cursor: 'pointer'
},
children: (0, t.jsx)(r.Gq, {
  className: a.tier0MarketingCard,
  ctaButton: null,
  showWumpus: !0,
  showYearlyPrice: !0,
  isGift: n,
  priceOptions: l
})
  });
}
s.Z = function(e) {
  let {
onSelectSku: s,
isGift: n,
priceOptions: i
  } = e;
  return (0, t.jsxs)(t.Fragment, {
children: [
  (0, t.jsx)(o, {
    onClick: () => s(l.Si.TIER_2),
    isGift: n,
    priceOptions: i
  }),
  (0, t.jsx)(C, {
    onClick: () => s(l.Si.TIER_0),
    isGift: n,
    priceOptions: i
  })
]
  });
};