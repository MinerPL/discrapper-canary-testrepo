t.d(n, {
  Oc: function() {
return C;
  },
  t: function() {
return h;
  },
  xe: function() {
return N;
  }
});
var r = t(735250);
t(470079);
var l = t(481060),
  i = t(131388),
  s = t(409813),
  a = t(586585),
  o = t(614277),
  u = t(225715),
  c = t(750143),
  d = t(689938),
  m = t(338740),
  f = t(365627),
  x = t(753260);
let h = e => {
let {
  step: n,
  onClose: t
} = e, a = (0, i.Z)(c.X);
return n === s.h8.CONFIRM || n === s.h8.BENEFITS ? (0, r.jsx)('div', {}) : (0, r.jsxs)('div', {
  className: m.headerContainer,
  children: [
    !a && (0, r.jsx)('div', {
      className: m.headerImageContainer,
      'aria-hidden': 'true',
      children: (0, r.jsx)('img', {
        src: x,
        alt: '',
        className: m.headerImage
      })
    }),
    (0, r.jsx)(l.Clickable, {
      className: m.closeContainer,
      onClick: () => t(),
      'aria-label': d.Z.Messages.CLOSE,
      children: (0, r.jsx)(l.XSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.closeIcon
      })
    })
  ]
});
  },
  C = e => {
let {
  icon: n,
  storeListingBenefits: t,
  skuBenefits: l,
  application: i,
  title: s,
  subtitle: a,
  description: o
} = e;
return null == i ? null : (0, r.jsx)('div', {
  className: m.confirmationContainer,
  children: (0, r.jsxs)(u.q$, {
    children: [
      (0, r.jsx)(u.CW, {
        application: i,
        asset: n
      }),
      (0, r.jsx)(u.r0, {
        children: s
      }),
      (0, r.jsx)(u.s$, {}),
      (0, r.jsx)(u.K9, {
        title: a,
        description: o
      }),
      (0, r.jsx)(u.G9, {
        applicationId: i.id,
        storeListingBenefits: t,
        skuBenefits: l
      })
    ]
  })
});
  };

function N(e) {
  let {
tierName: n,
onConfirm: t,
subscription: i
  } = e;
  return (0, r.jsxs)('div', {
className: m.purchaseConfirmation,
children: [
  (0, r.jsx)('img', {
    src: f,
    alt: '',
    width: 300,
    height: 126
  }),
  (0, r.jsx)(l.Heading, {
    className: m.confirmationTitle,
    variant: 'heading-xl/extrabold',
    color: 'header-primary',
    children: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
      tier: n
    })
  }),
  (0, r.jsx)(l.Text, {
    className: m.confirmationSubtitle,
    variant: 'text-md/medium',
    color: 'header-secondary',
    children: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
      timestamp: null == i ? void 0 : i.currentPeriodEnd
    })
  }),
  (0, r.jsx)(o.O3, {
    children: (0, r.jsx)(a.Z, {
      onPrimary: t,
      primaryCTA: a.g.CONTINUE,
      primaryText: d.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
    })
  })
]
  });
}