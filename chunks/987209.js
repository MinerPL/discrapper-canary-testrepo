t.d(n, {
  KB: function() {
return N;
  },
  wD: function() {
return h;
  }
}), t(47120);
var r = t(735250),
  l = t(470079),
  i = t(479446),
  s = t(646476),
  a = t(975104),
  o = t(669079),
  u = t(598),
  c = t(474936),
  d = t(689938);
let m = c.Cj.STANDARD_BOX,
  f = void 0,
  [x, h, C] = (0, a.Z)();

function N(e) {
  let {
isGift: n = !1,
giftRecipient: t,
giftMessage: a,
giftStyle: h,
children: C
  } = e, {
selectedSkuId: N
  } = (0, u.usePaymentContext)(), [v, p] = l.useState(t), [j, I] = l.useState(), [S, E] = l.useState(!1), g = (0, o.pO)(v), A = (0, s.rK)(), {
enabled: O
  } = s.ZP.useExperiment({
location: 'PaymentContextProvider'
  }, {
autoTrackExposure: g && A
  }), P = f;
  g && (P = O && A ? c.Cj.SEASONAL_STANDARD_BOX : null != h ? h : m);
  let [T, y] = l.useState(P), [M, B] = l.useState(n && (0, o.MY)(v) === o.xr.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? d.Z.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : a), [R, L] = l.useState(void 0), [k, U] = l.useState(void 0), _ = (0, o.E5)(N, n), [b, Z] = l.useState(!1), [D, G] = l.useState(!1), [H, w] = l.useState(), F = l.useCallback(e => {
let {
  onSubscriptionConfirmation: n
} = e;
return G(!0), (0, i.Y)(v, _).then(() => {
  G(!1), null == n || n(), Z(!0);
}).catch(e => {
  G(!1), w(e), Z(!0);
});
  }, [
v,
_,
G,
Z,
w
  ]);
  return (0, r.jsx)(x.Provider, {
value: {
  isGift: n,
  giftCode: _,
  giftMessage: a,
  giftRecipient: v,
  setGiftRecipient: p,
  giftRecipientError: j,
  setGiftRecipientError: I,
  validatingGiftRecipient: S,
  setValidatingGiftRecipient: E,
  soundEffect: R,
  setSoundEffect: L,
  emojiConfetti: k,
  setEmojiConfetti: U,
  customGiftMessage: M,
  setCustomGiftMessage: B,
  selectedGiftStyle: T,
  setSelectedGiftStyle: y,
  sendGiftMessage: F,
  hasSentMessage: b,
  isSendingMessage: D,
  giftMessageError: H
},
children: C
  });
}