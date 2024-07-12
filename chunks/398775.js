s.d(t, {
  Sz: function() {
return h;
  },
  of: function() {
return A;
  }
}), s(653041), s(47120);
var n = s(735250),
  a = s(470079),
  i = s(913527),
  r = s.n(i),
  o = s(99945),
  l = s(780384),
  c = s(481060),
  d = s(355467),
  _ = s(410030),
  E = s(906732),
  u = s(285952),
  T = s(296848),
  I = s(798769),
  S = s(981631),
  N = s(689938),
  C = s(514846);
async function m(e) {
  let {
premiumSubscription: t,
pauseDuration: s,
onClose: n,
setHasError: a,
setIsCancelling: i,
analyticsLocations: r,
analyticsLocation: o
  } = e;
  try {
i(!0), a(!1), await (0, d.Mg)(t, {
  pauseDuration: s
}, r, o), n();
  } catch {
a(!0), i(!1);
  }
}

function A(e) {
  let {
premiumType: t,
onClose: s,
pauseDuration: i,
setPauseDuration: r,
footer: l,
premiumSubscription: d
  } = e, _ = a.useCallback(e => {
let {
  value: t
} = e;
r(t);
  }, [r]), E = d.status === S.O0b.PAUSED ? N.Z.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE : N.Z.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE, m = function(e) {
let t = e.status === S.O0b.PAUSED ? N.Z.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE : N.Z.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
  {
    durations: s,
    currentDaysPaused: n
  } = (0, T.AT)(e),
  a = [];
for (let e of s) {
  let s = o.T[e];
  a.push({
    name: t.format({
      days: s - n
    }),
    value: s,
    radioItemIconClassName: C.radioOption
  });
}
return a.sort((e, t) => e.value - t.value), a.push({
  name: N.Z.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
  value: 0,
  radioBarClassName: C.cancelText,
  radioItemIconClassName: C.cancelText
}), a;
  }(d);
  return a.useEffect(() => {
if (!(m.length < 1))
  r(m[0].value);
  }, []), (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(I.Z, {
    premiumType: t,
    onClose: s
  }),
  (0, n.jsx)(c.ModalHeader, {
    separator: !1,
    children: (0, n.jsxs)('div', {
      className: C.__invalid_header,
      children: [
        (0, n.jsx)(c.Heading, {
          variant: 'heading-xl/bold',
          className: C.__invalid_modalHeader,
          children: N.Z.Messages.PREMIUM_PAUSE_SELECT_TITLE
        }),
        (0, n.jsx)(c.Heading, {
          variant: 'heading-sm/medium',
          className: C.subtitle,
          children: E
        })
      ]
    })
  }),
  (0, n.jsx)(c.ModalContent, {
    className: C.body,
    children: (0, n.jsx)(c.RadioGroup, {
      options: m,
      onChange: _,
      value: i
    })
  }),
  (0, n.jsx)(c.ModalFooter, {
    justify: u.Z.Justify.START,
    children: l
  })
]
  });
}

function h(e) {
  let {
premiumSubscription: t,
premiumType: s,
onClose: i,
pauseDuration: o,
analyticsLocation: d
  } = e, [T, A] = a.useState(!1), {
analyticsLocations: h
  } = (0, E.ZP)(), [g, O] = a.useState(!1), p = (0, _.ZP)(), R = null, x = null, M = [
S.O0b.PAST_DUE,
S.O0b.PAUSED
  ].includes(t.status) ? t.currentPeriodStart : t.currentPeriodEnd, D = r()(M).add(o, 'days').toDate();
  switch (t.status) {
case S.O0b.PAST_DUE:
  x = N.Z.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
    pauseDuration: o,
    resumeDate: D
  });
  break;
case S.O0b.PAUSED:
  x = N.Z.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({
    resumeDate: D
  });
  break;
default:
  x = N.Z.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
    pauseDate: M,
    resumeDate: D,
    pauseDuration: o
  });
  }
  return R = (0, n.jsx)('div', {
className: C.body,
children: x
  }), (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(I.Z, {
    premiumType: s,
    onClose: i
  }),
  (0, n.jsx)(c.ModalHeader, {
    separator: !1,
    children: (0, n.jsx)('div', {
      className: C.__invalid_header,
      children: (0, n.jsx)(c.Heading, {
        variant: 'heading-xl/bold',
        className: C.__invalid_modalHeader,
        children: N.Z.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
      })
    })
  }),
  (0, n.jsxs)(c.ModalContent, {
    className: C.body,
    children: [
      T ? (0, n.jsx)(c.FormErrorBlock, {
        className: C.errorBlock,
        children: N.Z.Messages.BILLING_ERROR_GENERIC
      }) : null,
      R
    ]
  }),
  (0, n.jsx)(c.ModalFooter, {
    justify: u.Z.Justify.START,
    children: (0, n.jsxs)('div', {
      className: C.whatYouLoseButtonContainer,
      children: [
        (0, n.jsx)(c.Button, {
          color: c.Button.Colors.RED,
          disabled: g || null == o,
          onClick: async () => {
            await m({
              premiumSubscription: t,
              pauseDuration: o,
              setIsCancelling: O,
              setHasError: A,
              onClose: i,
              analyticsLocations: h,
              analyticsLocation: d
            });
          },
          children: N.Z.Messages.CONFIRM
        }),
        (0, n.jsx)(c.Button, {
          look: c.Button.Looks.LINK,
          color: (0, l.wj)(p) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
          onClick: i,
          children: N.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
        })
      ]
    })
  })
]
  });
}