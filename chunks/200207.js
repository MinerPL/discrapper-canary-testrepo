i.d(n, {
  I: function() {
return c;
  }
});
var l = i(735250);
i(470079);
var t = i(557533),
  r = i.n(t),
  s = i(789978),
  a = i(790472),
  o = i(777207),
  d = i(25378),
  u = i(778342);

function c(e) {
  let {
title: n,
description: i,
headerImage: t,
onDetails: c,
onPurchase: p,
PurchaseButton: m,
availabilityLabel: v
  } = e;
  return (0, l.jsx)(s.tE, {
children: (0, l.jsxs)('div', {
  className: r()(d.wrapper, u.hoverCard),
  tabIndex: 0,
  onClick: () => {
    null != c ? c() : null != p && p();
  },
  children: [
    (0, l.jsx)('div', {
      className: d.cardHeaderImg,
      style: null != t ? {
        backgroundImage: null != t ? 'url('.concat(t.toString(), ')') : void 0
      } : void 0,
      children: null == t && (0, l.jsx)(a.P, {
        color: 'white',
        size: 'custom',
        height: 80,
        width: 80
      })
    }),
    (0, l.jsxs)('div', {
      className: d.details,
      children: [
        (0, l.jsx)(o.x, {
          color: 'header-primary',
          variant: 'text-md/semibold',
          children: n
        }),
        null != i && (0, l.jsx)(o.x, {
          className: d.description,
          color: 'text-muted',
          variant: 'text-sm/normal',
          children: i
        })
      ]
    }),
    null != m && (0, l.jsxs)('div', {
      className: d.footer,
      children: [
        (0, l.jsx)(o.x, {
          color: 'interactive-normal',
          variant: 'text-sm/normal',
          children: v
        }),
        (0, l.jsx)(m, {
          onClick: e => {
            e.stopPropagation(), null == p || p();
          }
        })
      ]
    })
  ]
})
  });
}