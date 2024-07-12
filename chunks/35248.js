t.d(a, {
  M: function() {
return I;
  },
  a: function() {
return S;
  }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var n = t(735250),
  r = t(470079),
  s = t(772848),
  l = t(544891),
  o = t(481060),
  i = t(355467),
  c = t(311821),
  u = t(285952),
  d = t(591759),
  E = t(987209),
  _ = t(598),
  p = t(189877),
  m = t(362755),
  A = t(981631),
  N = t(474936),
  h = t(689938),
  T = t(59109);
let I = e => {
let {
  onPurchaseComplete: a,
  onHandoffFailure: t
} = e, {
  selectedPlan: c,
  browserCheckoutState: u,
  browserCheckoutStateLoadId: I,
  contextMetadata: S
} = (0, _.usePaymentContext)(), {
  isGift: C
} = (0, E.wD)(), [b, P] = r.useState(!1);
return r.useEffect(() => {
  let e = setTimeout(() => {
    var e;
    if (!b)
      P(!0), (0, i.r5)(S.loadId), ! function(e, a, t, n) {
        let r = A.ANM.BILLING_STANDALONE_CHECKOUT_PAGE(e, a, t),
          o = new URL(d.Z.makeUrl(A.Z5c.BILLING_LOGIN_HANDOFF)),
          i = (0, s.Z)();
        o.searchParams.append('handoff_key', i), o.searchParams.append('redirect_to', r), l.tn.post({
          url: A.ANM.HANDOFF,
          body: {
            key: i
          },
          oldFormErrors: !0
        }).then(e => {
          o.searchParams.append('handoff_token', e.body.handoff_token), window.open(o.href);
        }, () => {
          n();
        });
      }(null !== (e = null == c ? void 0 : c.id) && void 0 !== e ? e : N.Xh.PREMIUM_MONTH_TIER_2, C, S.loadId, t);
  }, (0, p.q1)().delay ? 1000 : 0);
  return () => clearTimeout(e);
}, [
  c,
  C,
  S,
  t,
  P,
  b
]), r.useEffect(() => {
  I === S.loadId && u === m.Y.DONE && a();
}, [
  u,
  I,
  S,
  a
]), (0, n.jsxs)('div', {
  className: T.body,
  children: [
    (0, n.jsx)(o.Heading, {
      variant: 'heading-xl/bold',
      children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_HEADER
    }),
    (0, n.jsx)(o.Text, {
      variant: 'text-md/normal',
      className: T.description,
      children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_BODY
    })
  ]
});
  },
  S = e => {
let {
  onPrimaryClick: a,
  onBackClick: t
} = e;
return (0, n.jsx)('div', {
  children: (0, n.jsxs)(o.ModalFooter, {
    justify: u.Z.Justify.BETWEEN,
    align: u.Z.Align.CENTER,
    children: [
      (0, n.jsx)(c.y, {
        onClick: a,
        children: h.Z.Messages.PAYMENT_WAITING_FOR_BROWSER_CHECKOUT_MODAL_NEXT_BUTTON
      }),
      (0, n.jsx)(c.Z, {
        onClick: t
      })
    ]
  })
});
  };