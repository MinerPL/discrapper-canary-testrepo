"use strict";
var n = t(735250),
  a = t(470079),
  i = t(481060),
  l = t(727637),
  r = t(906732),
  o = t(241553),
  c = t(333867),
  u = t(559629),
  d = t(884697),
  C = t(231338),
  E = t(689938),
  f = t(46309);
let m = {
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
s.Z = e => {
  let {
    product: s,
    returnRef: t,
    onSuccess: p,
    tooltipDelay: g,
    isGiftEasterEggEnabled: h,
    disableCustomColor: x = !1
  } = e, {
    analyticsLocations: _
  } = (0, r.ZP)(), I = a.useRef(null), T = (0, l.Z)(I), N = x ? C.BR.DARK : C.BR.LIGHT;
  return (0, d.x6)(s) ? null : (0, n.jsx)(i.Tooltip, {
    text: E.Z.Messages.COLLECTIBLES_SHOP_GIFT_MODAL_SELECT_HEADER,
    delay: g,
    children: e => (0, n.jsx)(i.Button, {
      ...e,
      buttonRef: I,
      className: f.giftButton,
      color: x ? i.ButtonColors.BRAND : i.ButtonColors.CUSTOM,
      look: i.Button.Looks.FILLED,
      size: i.ButtonSizes.ICON,
      innerClassName: f.giftButtonInner,
      "aria-label": E.Z.Messages.PREMIUM_GIFTING_BUTTON,
      onClick: e => {
        e.stopPropagation(), (0, c.Z)({
          skuId: s.skuId,
          isGift: !0,
          analyticsLocations: _,
          returnRef: t,
          onClose: null != p ? e => {
            e && p()
          } : void 0
        })
      },
      children: h ? (0, n.jsx)(o.e, {
        hovered: T,
        isContentDismissed: !0,
        themeOverride: N,
        boxColors: m
      }) : (0, n.jsx)(u.Z, {
        width: 24,
        height: 24
      })
    })
  })
}