"use strict";
a.r(t);
var s = a("735250"),
  l = a("470079"),
  r = a("481060"),
  n = a("727637"),
  o = a("906732"),
  i = a("241553"),
  u = a("333867"),
  c = a("559629"),
  d = a("624377"),
  f = a("231338"),
  m = a("689938"),
  C = a("125006");
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
t.default = e => {
  let {
    product: t,
    returnRef: a,
    onSuccess: g,
    tooltipDelay: h,
    isGiftEasterEggEnabled: E,
    disableCustomColor: b = !1
  } = e, {
    analyticsLocations: S
  } = (0, o.default)(), x = l.useRef(null), T = (0, n.default)(x), {
    buttonColors: v
  } = (0, d.default)(t.styles), L = null == v || b ? void 0 : {
    background: v.secondary.toHslString(),
    color: v.text.toHslString()
  }, I = b || (null == v ? void 0 : v.text.isDark()) ? f.ThemeTypes.DARK : f.ThemeTypes.LIGHT;
  return (0, s.jsx)(r.Tooltip, {
    text: m.default.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: h,
    children: e => (0, s.jsx)(r.Button, {
      ...e,
      buttonRef: x,
      style: L,
      className: C.giftButton,
      color: b ? r.ButtonColors.BRAND : r.ButtonColors.CUSTOM,
      look: r.Button.Looks.FILLED,
      size: r.ButtonSizes.ICON,
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
      children: E ? (0, s.jsx)(i.SeasonalGiftIcon, {
        hovered: T,
        isContentDismissed: !0,
        themeOverride: I,
        boxColors: p
      }) : (0, s.jsx)(c.default, {
        width: 24,
        height: 24
      })
    })
  })
}