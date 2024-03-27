"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return I
  }
});
var s = n("37983"),
  r = n("884691"),
  a = n("77078"),
  i = n("646718"),
  l = n("860980"),
  u = n("392459"),
  o = n("26245"),
  c = n("21340"),
  d = n("159548"),
  m = n("897184"),
  f = n("990439"),
  p = n("999641"),
  _ = n("74771");
let S = {
    [i.PremiumGiftStyles.STANDARD_BOX]: m,
    [i.PremiumGiftStyles.CAKE]: f,
    [i.PremiumGiftStyles.CHEST]: p,
    [i.PremiumGiftStyles.COFFEE]: _,
    [i.PremiumGiftStyles.SNOWGLOBE]: "",
    [i.PremiumGiftStyles.BOX]: "",
    [i.PremiumGiftStyles.CUP]: "",
    [i.PremiumGiftStyles.SEASONAL_CAKE]: o,
    [i.PremiumGiftStyles.SEASONAL_CHEST]: c,
    [i.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [i.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  I = r.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: r,
      setSelectedGiftStyle: i,
      onFocus: u,
      onBlur: o
    } = e;
    return (0, s.jsx)(a.Clickable, {
      innerRef: t,
      onClick: () => i(r),
      onFocus: u,
      onBlur: o,
      children: (0, s.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: S[r],
        className: n ? l.customGiftBoxHighlighted : l.customGiftBox
      })
    })
  })