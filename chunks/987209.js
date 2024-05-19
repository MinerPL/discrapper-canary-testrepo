"use strict";
n.r(t), n.d(t, {
  GiftContextProvider: function() {
    return C
  },
  useGiftContext: function() {
    return x
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  r = n("479446"),
  a = n("646476"),
  s = n("975104"),
  o = n("669079"),
  u = n("598"),
  d = n("474936"),
  c = n("689938");
let f = d.PremiumGiftStyles.STANDARD_BOX,
  m = void 0,
  [p, x, h] = (0, s.default)();

function C(e) {
  let {
    isGift: t = !1,
    giftRecipient: n,
    giftMessage: s,
    children: x
  } = e, {
    selectedSkuId: h
  } = (0, u.usePaymentContext)(), [C, N] = l.useState(n), [S, v] = l.useState(), [I, E] = l.useState(!1), A = (0, o.shouldShowCustomGiftExperience)(C), j = (0, a.useIsSeasonalGiftingActive)(), {
    enabled: M
  } = a.default.useExperiment({
    location: "PaymentContextProvider"
  }, {
    autoTrackExposure: A && j
  }), [B, g] = l.useState(A ? M && j ? d.PremiumGiftStyles.SEASONAL_STANDARD_BOX : f : m), [P, T] = l.useState(t && (0, o.getGiftExperience)(C) === o.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD ? c.default.Messages.DEFAULT_CUSTOM_GIFT_MESSAGE : s), [y, O] = l.useState(void 0), [_, L] = l.useState(void 0), R = (0, o.useGetGiftCode)(h, t), [U, b] = l.useState(!1), [k, G] = l.useState(!1), [D, H] = l.useState(), w = l.useCallback(e => {
    let {
      onSubscriptionConfirmation: t
    } = e;
    return G(!0), (0, r.sendGiftMessage)(C, R).then(() => {
      G(!1), null == t || t(), b(!0)
    }).catch(e => {
      G(!1), H(e), b(!0)
    })
  }, [C, R, G, b, H]);
  return (0, i.jsx)(p.Provider, {
    value: {
      isGift: t,
      giftCode: R,
      giftMessage: s,
      giftRecipient: C,
      setGiftRecipient: N,
      giftRecipientError: S,
      setGiftRecipientError: v,
      validatingGiftRecipient: I,
      setValidatingGiftRecipient: E,
      soundEffect: y,
      setSoundEffect: O,
      emojiConfetti: _,
      setEmojiConfetti: L,
      customGiftMessage: P,
      setCustomGiftMessage: T,
      selectedGiftStyle: B,
      setSelectedGiftStyle: g,
      sendGiftMessage: w,
      hasSentMessage: U,
      isSendingMessage: k,
      giftMessageError: D
    },
    children: x
  })
}