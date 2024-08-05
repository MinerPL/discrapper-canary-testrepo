n.d(t, {
  Z: function() {
return f;
  },
  i: function() {
return _;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(873546),
  s = n(481060),
  o = n(626135),
  l = n(981631),
  u = n(921944),
  c = n(689938),
  d = n(898101);

function _(e) {
  return e || !(a.tq || a.Em) ? c.Z.Messages.SEASONAL_GIFTING_DM_POPUP_BODY : c.Z.Messages.SEASONAL_GIFTING_MAKE_SOMEONES_DAY_TOOLTIP;
}

function E(e) {
  let {
onComplete: t,
onDMCheckItOutClick: u,
isDM: E
  } = e;
  i.useEffect(() => {
o.default.track(l.rMx.PREMIUM_GIFT_UPSELL_VIEWED, {
  type: 'holiday_gifting_tip'
});
  }, []);
  let f = i.useMemo(() => [
  () => n.e('36278').then(n.t.bind(n, 268147, 19)),
  () => n.e('66902').then(n.t.bind(n, 7171, 19)),
  () => n.e('99694').then(n.t.bind(n, 55562, 19))
], []),
h = E || !(a.tq || a.Em),
p = h ? c.Z.Messages.SEASONAL_GIFTING_DM_POPUP_HEADER : c.Z.Messages.SEASONAL_GIFTING_POPUP_HEADER,
m = h ? c.Z.Messages.SEASONAL_GIFTING_DM_POPUP_CTA : c.Z.Messages.SEASONAL_GIFTING_SEND_GIFT_CTA;
  return (0, r.jsxs)('div', {
className: d.container,
children: [
  (0, r.jsx)(s.ChainedLottieAnimation, {
    className: d.image,
    animationData: f
  }),
  (0, r.jsxs)('div', {
    className: d.body,
    children: [
      (0, r.jsx)(s.Heading, {
        className: d.text,
        variant: 'heading-sm/semibold',
        children: p
      }),
      (0, r.jsx)(s.Text, {
        className: d.text,
        variant: 'text-sm/normal',
        children: _(E)
      })
    ]
  }),
  (0, r.jsxs)('div', {
    className: d.dmButtonContainer,
    children: [
      (0, r.jsx)(s.Button, {
        className: d.dmButton,
        look: s.Button.Looks.FILLED,
        color: s.Button.Colors.BRAND,
        onClick: () => t(),
        children: c.Z.Messages.GOT_IT
      }),
      (0, r.jsx)(s.Button, {
        className: d.dmButton,
        color: s.Button.Colors.BRAND_INVERTED,
        onClick: () => u(),
        children: m
      })
    ]
  }),
  (0, r.jsx)('div', {
    className: d.pointer
  })
]
  });
}

function f(e) {
  let {
onComplete: t,
onDMCheckItOutClick: n,
markAsDismissed: i,
isDM: a
  } = e;
  return (0, r.jsx)(s.Popout, {
spacing: 0,
shouldShow: !0,
position: 'top',
align: 'center',
renderPopout: e => (0, r.jsx)(E, {
  ...e,
  onComplete: () => {
    t(), i(u.L.USER_DISMISS);
  },
  onDMCheckItOutClick: () => {
    n(), t(), i(u.L.TAKE_ACTION);
  },
  isDM: a
}),
onRequestClose: () => void 0,
closeOnScroll: !1,
ignoreModalClicks: !0,
children: () => (0, r.jsx)('div', {
  className: d.popoutTarget
})
  });
}