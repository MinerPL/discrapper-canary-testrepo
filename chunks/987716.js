"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return I
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  a = n("481060"),
  l = n("987209"),
  r = n("321051"),
  u = n("669079"),
  o = n("479446"),
  c = n("646476"),
  d = n("981632"),
  m = n("96848"),
  f = n("703926"),
  p = n("474936"),
  S = n("689938"),
  _ = n("782874");
let I = e => {
  let {
    isShopGift: t
  } = e, {
    giftRecipient: n,
    selectedGiftStyle: I,
    setSelectedGiftStyle: E,
    emojiConfetti: P,
    soundEffect: T,
    setEmojiConfetti: N,
    setSoundEffect: h
  } = (0, l.useGiftContext)(), [x, v] = s.useState(!1), A = s.useRef(null), C = (0, a.useRadioGroup)({
    orientation: "horizontal"
  }), g = (0, u.getGiftExperience)(n, t), y = g === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, M = g !== u.GiftExperience.DEFAULT, b = (0, c.useIsSeasonalGiftingActive)(), {
    enabled: O
  } = c.default.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: b
  }), R = null;
  return M && (R = b && O ? p.SeasonalGiftStyles2023 : p.STANDARD_GIFT_OPTIONS), (0, i.jsxs)("div", {
    children: [M && (0, i.jsxs)("div", {
      className: _.giftMainAnimation,
      children: [null != I ? (0, i.jsx)(d.default, {
        giftStyle: I,
        defaultAnimationState: o.AnimationState.ACTION,
        idleAnimationState: o.AnimationState.LOOP,
        shouldAnimate: !0,
        className: _.animation
      }) : (0, i.jsx)(a.Spinner, {
        className: _.spinner
      }), y && (0, i.jsxs)("div", {
        className: _.soundEmojiContainer,
        children: [(0, i.jsx)("div", {
          className: _.sound,
          children: (0, i.jsx)(r.default, {
            sound: T,
            onSelect: e => {
              null != h && h(null == e ? void 0 : e)
            }
          })
        }), (0, i.jsx)("div", {
          className: _.emoji,
          children: (0, i.jsx)(m.default, {
            setEmojiConfetti: N,
            emojiConfetti: null == P ? void 0 : P
          })
        })]
      })]
    }), (0, i.jsx)("div", {
      tabIndex: null != I || x ? void 0 : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null === (t = A.current) || void 0 === t || t.focus())
      },
      className: _.giftBoxOptionContainer,
      "aria-label": S.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...C,
      children: null != R && R.map((e, t) => (0, i.jsx)(f.GiftStaticOption, {
        isSelected: I === e,
        giftStyle: e,
        setSelectedGiftStyle: E,
        ref: 0 === t ? A : null,
        onFocus: () => v(!0),
        onBlur: () => v(!1)
      }, e))
    }), (0, i.jsx)("div", {
      className: _.__invalid_selectPlanDivider
    })]
  })
}