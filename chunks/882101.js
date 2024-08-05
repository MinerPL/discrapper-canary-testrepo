n.d(t, {
  BM: function() {
return E;
  },
  Ey: function() {
return _;
  },
  xv: function() {
return I;
  }
}), n(47120);
var i = n(735250);
n(470079);
var s = n(481060),
  a = n(765400),
  r = n(937615),
  l = n(817460),
  o = n(290348),
  c = n(367719),
  u = n(689938),
  d = n(477873);
let _ = e => {
  let {
listingName: t
  } = e;
  return (0, i.jsx)(s.Heading, {
variant: 'text-md/normal',
color: 'interactive-active',
className: d.tierName,
children: t
  });
};

function E(e) {
  let {
image: t
  } = e;
  return null == t ? null : (0, i.jsx)('img', {
src: t,
alt: '',
className: d.tierImage
  });
}
let I = e => {
  let {
listingId: t,
isListingPublished: n
  } = e, I = (0, c.Z)(), [m] = o._T(t), [T] = o.d9(t, I), [h] = o.H9(t);
  return (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(_, {
    listingName: m
  }),
  (0, i.jsx)(E, {
    image: T
  }),
  !n && (0, i.jsx)('div', {
    className: d.draftBadgeContainer,
    children: (0, i.jsx)(a.v, {})
  }),
  (0, i.jsx)(s.Text, {
    variant: 'heading-xl/semibold',
    className: d.tierPrice,
    tag: 'div',
    children: (0, r.T4)(h.price, h.currency)
  }),
  (0, i.jsx)(s.Text, {
    variant: 'text-xs/normal',
    color: 'interactive-normal',
    className: d.tierPeriod,
    children: u.Z.Messages.GUILD_ROLE_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
      period: (0, l.JE)({
        interval: h.interval,
        interval_count: h.interval_count
      })
    })
  })
]
  });
};