"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return I
  }
});
var i = n("735250"),
  s = n("470079"),
  a = n("481060"),
  l = n("474936"),
  r = n("164389"),
  u = n("426831"),
  o = n("257510"),
  c = n("74838"),
  d = n("720834"),
  m = n("385925"),
  f = n("588921"),
  p = n("718720"),
  S = n("721513");
let _ = {
    [l.PremiumGiftStyles.STANDARD_BOX]: m,
    [l.PremiumGiftStyles.CAKE]: f,
    [l.PremiumGiftStyles.CHEST]: p,
    [l.PremiumGiftStyles.COFFEE]: S,
    [l.PremiumGiftStyles.SNOWGLOBE]: "",
    [l.PremiumGiftStyles.BOX]: "",
    [l.PremiumGiftStyles.CUP]: "",
    [l.PremiumGiftStyles.SEASONAL_CAKE]: o,
    [l.PremiumGiftStyles.SEASONAL_CHEST]: c,
    [l.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [l.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  I = s.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: s,
      setSelectedGiftStyle: l,
      onFocus: u,
      onBlur: o
    } = e;
    return (0, i.jsx)(a.Clickable, {
      innerRef: t,
      onClick: () => l(s),
      onFocus: u,
      onBlur: o,
      children: (0, i.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: _[s],
        className: n ? r.customGiftBoxHighlighted : r.customGiftBox
      })
    })
  })