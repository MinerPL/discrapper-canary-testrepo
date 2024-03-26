"use strict";
a.r(t), a.d(t, {
  default: function() {
    return g
  }
});
var l = a("37983"),
  r = a("884691"),
  s = a("77078"),
  n = a("252744"),
  o = a("685665"),
  i = a("108486"),
  u = a("946964"),
  c = a("978679"),
  d = a("677257"),
  f = a("843455"),
  m = a("782340"),
  C = a("691164");
let p = {
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
var g = e => {
  let {
    product: t,
    returnRef: a,
    onSuccess: g,
    tooltipDelay: h,
    isGiftEasterEggEnabled: E,
    disableCustomColor: b = !1
  } = e, {
    analyticsLocations: S
  } = (0, o.default)(), T = r.useRef(null), v = (0, n.default)(T), {
    buttonColors: L
  } = (0, d.default)(t.styles), x = null == L || b ? void 0 : {
    background: L.secondary.toHslString(),
    color: L.text.toHslString()
  }, I = b || (null == L ? void 0 : L.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, l.jsx)(s.Tooltip, {
    text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: h,
    children: e => (0, l.jsx)(s.Button, {
      ...e,
      buttonRef: T,
      style: x,
      className: C.giftButton,
      color: b ? s.ButtonColors.BRAND : s.ButtonColors.CUSTOM,
      look: s.Button.Looks.FILLED,
      size: s.ButtonSizes.ICON,
      innerClassName: C.giftButtonInner,
      "aria-label": m.default.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, u.default)({
          skuId: t.skuId,
          isGift: !0,
          analyticsLocations: S,
          returnRef: a,
          onClose: null != g ? e => {
            e && g()
          } : void 0
        })
      },
      children: E ? (0, l.jsx)(i.SeasonalGiftIcon, {
        hovered: v,
        isContentDismissed: !0,
        themeOverride: I,
        boxColors: p
      }) : (0, l.jsx)(c.default, {
        width: 24,
        height: 24
      })
    })
  })
}