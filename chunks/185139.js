n.d(r, {
  Z: function() {
return S;
  }
}), n(47120), n(411104);
var l = n(735250),
  o = n(470079),
  s = n(160612),
  t = n(120356),
  a = n.n(t),
  c = n(846519),
  i = n(481060),
  d = n(609194),
  u = n(881052),
  p = n(128069),
  _ = n(598),
  m = n(409813);
n(51499), n(614277);
var f = n(122289),
  N = n(70956),
  h = n(981631),
  E = n(689938),
  x = n(83644);
let I = new Set([
  m.h8.SKU_SELECT,
  m.h8.AWAITING_AUTHENTICATION,
  m.h8.AWAITING_PURCHASE_TOKEN_AUTH,
  m.h8.CONFIRM
]);

function S(e) {
  let {
steps: r,
currentStep: n,
body: t,
paymentError: S,
header: C,
footer: T,
isGift: b = !1,
giftMessage: j = E.Z.Messages.PREMIUM_PAYMENT_IS_GIFT,
hideBreadcrumbs: v = !1,
isLoading: g = !1,
purchaseError: P,
purchaseErrorBlockRef: M,
planError: y,
onScroll: A,
scrollerClassName: R,
hasCurrencies: L = !1
  } = e, k = null;
  null != S && null == (0, m.ly)(S) ? k = S : null != P ? k = P : null != y && (k = y);
  let D = null != k ? k.message : '';
  null != k && k instanceof u.HF && (k.code === p.SM.CARD_DECLINED && L && (D += ' '.concat(E.Z.Messages.BILLING_ERROR_TRY_ANOTHER)), k.code === p.SM.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (D = E.Z.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), k.code === h.evJ.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (D = E.Z.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
  let {
stripe: B
  } = (0, _.usePaymentContext)();
  g = g || null == B;
  let O = o.useRef(new c.V7());
  o.useEffect(() => {
let e = O.current;
return null != B || e.isStarted() ? null != B && e.stop() : e.start(10 * N.Z.Millis.SECOND, () => {
  let e = Error('Stripe took too long to load');
  (0, f.q2)(e);
}), () => {
  e.stop();
};
  }, [B]);
  let U = r.includes(m.h8.PAYMENT_TYPE) ? m.h8.PAYMENT_TYPE : m.h8.ADD_PAYMENT_STEPS;
  return (0, l.jsxs)(s.Elements, {
options: h.OBo,
stripe: B,
children: [
  C,
  (0, l.jsxs)('div', {
    className: a()('paymentModalContent', x.content),
    children: [
      b && n !== m.h8.CONFIRM ? (0, l.jsx)(d.Z, {
        className: x.paymentNote,
        iconSize: d.Z.Sizes.SMALL,
        icon: i.GiftIcon,
        color: null == j ? d.Z.Colors.PRIMARY : d.Z.Colors.SECONDARY,
        children: j
      }) : null,
      v ? null : (0, l.jsx)('div', {
        className: x.breadcrumbsWrapper,
        children: (0, l.jsx)(i.Breadcrumbs, {
          activeId: m.Ck.has(n) ? U : n,
          breadcrumbs: r.filter(e => !m.Ck.has(e) && !I.has(e)).map(e => ({
            id: e,
            label: (0, m.DJ)(e)
          }))
        })
      }),
      (0, l.jsxs)('div', {
        className: x.bodyWrapper,
        children: [
          null == k ? null : (0, l.jsx)('div', {
            className: x.errorBlockWrapper,
            children: (0, l.jsx)(i.FormErrorBlock, {
              ref: M,
              children: D
            })
          }),
          g ? (0, l.jsx)(i.Spinner, {
            className: x.loadingBlock
          }) : (0, l.jsx)(i.Sequencer, {
            className: x.sequencer,
            staticClassName: x.sequencerStatic,
            animatedNodeClassName: x.sequencerAnimatedNode,
            fillParent: !0,
            step: n,
            steps: r,
            sideMargin: 20,
            children: (0, l.jsx)(i.AdvancedScrollerThin, {
              onScroll: A,
              className: a()(x.scroller, R),
              children: t
            })
          })
        ]
      })
    ]
  }),
  T
]
  });
}