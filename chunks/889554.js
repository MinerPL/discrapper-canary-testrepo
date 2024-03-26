"use strict";
n.r(t), n.d(t, {
  GiftAnimationOptions: function() {
    return I
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  i = n("635357"),
  l = n("742926"),
  u = n("659632"),
  o = n("210721"),
  c = n("53253"),
  d = n("65324"),
  m = n("563613"),
  f = n("64798"),
  p = n("646718"),
  _ = n("782340"),
  S = n("421404");
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
    setSoundEffect: A
  } = (0, i.useGiftContext)(), [C, h] = r.useState(!1), v = r.useRef(null), g = (0, a.useRadioGroup)({
    orientation: "horizontal"
  }), x = (0, u.getGiftExperience)(n, t), y = x === u.GiftExperience.CUSTOM_MESSAGE_EMOJI_SOUNDBOARD, O = x !== u.GiftExperience.DEFAULT, M = (0, c.useIsSeasonalGiftingActive)(), {
    enabled: R
  } = c.default.useExperiment({
    location: "premiumGiftSelect_GiftAnimationOptions"
  }, {
    autoTrackExposure: M
  }), L = null;
  return O && (L = M && R ? p.SeasonalGiftStyles2023 : p.STANDARD_GIFT_OPTIONS), (0, s.jsxs)("div", {
    children: [O && (0, s.jsxs)("div", {
      className: S.giftMainAnimation,
      children: [null != I ? (0, s.jsx)(d.default, {
        giftStyle: I,
        defaultAnimationState: o.AnimationState.ACTION,
        idleAnimationState: o.AnimationState.LOOP,
        shouldAnimate: !0,
        className: S.animation
      }) : (0, s.jsx)(a.Spinner, {
        className: S.spinner
      }), y && (0, s.jsxs)("div", {
        className: S.soundEmojiContainer,
        children: [(0, s.jsx)("div", {
          className: S.sound,
          children: (0, s.jsx)(l.default, {
            sound: T,
            onSelect: e => {
              null != A && A(null == e ? void 0 : e)
            }
          })
        }), (0, s.jsx)("div", {
          className: S.emoji,
          children: (0, s.jsx)(m.default, {
            setEmojiConfetti: N,
            emojiConfetti: null == P ? void 0 : P
          })
        })]
      })]
    }), (0, s.jsx)("div", {
      tabIndex: null != I || C ? void 0 : 0,
      onFocus: e => {
        var t;
        e.target === e.currentTarget && (null === (t = v.current) || void 0 === t || t.focus())
      },
      className: S.giftBoxOptionContainer,
      "aria-label": _.default.Messages.SEASONAL_GIFTING_CUSTOMIZE_YOUR_GIFT_BOX,
      ...g,
      children: null != L && L.map((e, t) => (0, s.jsx)(f.GiftStaticOption, {
        isSelected: I === e,
        giftStyle: e,
        setSelectedGiftStyle: E,
        ref: 0 === t ? v : null,
        onFocus: () => h(!0),
        onBlur: () => h(!1)
      }, e))
    }), (0, s.jsx)("div", {
      className: S.selectPlanDivider
    })]
  })
}