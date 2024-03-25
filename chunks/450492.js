"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var l = a("37983"),
  s = a("884691"),
  r = a("77078"),
  n = a("252744"),
  i = a("685665"),
  o = a("108486"),
  c = a("946964"),
  u = a("978679"),
  d = a("677257"),
  f = a("843455"),
  m = a("782340"),
  p = a("691164");
let g = {
  dark: [{
    box: "#FFF19E",
    ribbon: "#FF484B"
  }, {
    box: "#17B5E2",
    ribbon: "#FFFFFF"
  }, {
    box: "#FFE1A6",
    ribbon: "#C29CFF"
  }, {
    box: "#60DA81",
    ribbon: "#FFF597"
  }, {
    box: "#E4578A",
    ribbon: "#BEC4FF"
  }, {
    box: "#AFE0FC",
    ribbon: "#FF9356"
  }, {
    box: "#DB6D6D",
    ribbon: "#67DA9C"
  }],
  light: [{
    box: "#FFF19E",
    ribbon: "#FF484B"
  }, {
    box: "#025D90",
    ribbon: "#70FFF8"
  }, {
    box: "#C29CFF",
    ribbon: "#255FA3"
  }, {
    box: "#6AC082",
    ribbon: "#DED052"
  }, {
    box: "#AC448B",
    ribbon: "#4845B8"
  }, {
    box: "#175B82",
    ribbon: "#F9D249"
  }, {
    box: "#B54141",
    ribbon: "#026530"
  }]
};
var C = e => {
  let {
    product: t,
    returnRef: a,
    onSuccess: C,
    tooltipDelay: h,
    isGiftEasterEggEnabled: E,
    disableCustomColor: b = !1
  } = e, {
    analyticsLocations: S
  } = (0, i.default)(), x = s.useRef(null), T = (0, n.default)(x), {
    buttonColors: v
  } = (0, d.default)(t.styles), L = null == v || b ? void 0 : {
    background: v.secondary.toHslString(),
    color: v.text.toHslString()
  }, I = b || (null == v ? void 0 : v.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, l.jsx)(r.Tooltip, {
    text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: h,
    children: e => (0, l.jsx)(r.Button, {
      ...e,
      buttonRef: x,
      style: L,
      className: p.giftButton,
      color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
      innerClassName: p.giftButtonInner,
      "aria-label": m.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: S,
          returnRef: a,
          onClose: null != C ? e => {
            e && C()
          } : void 0
        })
      },
      children: E ? (0, l.jsx)(o.SeasonalGiftIcon, {
        hovered: T,
        isContentDismissed: !0,
        themeOverride: I,
        boxColors: g
      }) : (0, l.jsx)(u.default, {
        width: 24,
        height: 24
      })
    })
  })
}