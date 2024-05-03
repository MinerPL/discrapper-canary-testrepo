"use strict";
n.r(t), n.d(t, {
  GiftStaticOption: function() {
    return I
  }
});
var i = n("735250"),
  s = n("470079"),
  l = n("481060"),
  a = n("474936"),
  r = n("86141"),
  u = n("426831"),
  o = n("257510"),
  c = n("74838"),
  d = n("720834"),
  m = n("385925"),
  f = n("588921"),
  p = n("718720"),
  _ = n("721513");
let S = {
    [a.PremiumGiftStyles.STANDARD_BOX]: m,
    [a.PremiumGiftStyles.CAKE]: f,
    [a.PremiumGiftStyles.CHEST]: p,
    [a.PremiumGiftStyles.COFFEE]: _,
    [a.PremiumGiftStyles.SNOWGLOBE]: "",
    [a.PremiumGiftStyles.BOX]: "",
    [a.PremiumGiftStyles.CUP]: "",
    [a.PremiumGiftStyles.SEASONAL_CAKE]: o,
    [a.PremiumGiftStyles.SEASONAL_CHEST]: c,
    [a.PremiumGiftStyles.SEASONAL_COFFEE]: d,
    [a.PremiumGiftStyles.SEASONAL_STANDARD_BOX]: u
  },
  I = s.forwardRef(function(e, t) {
    let {
      isSelected: n,
      giftStyle: s,
      setSelectedGiftStyle: a,
      onFocus: u,
      onBlur: o
    } = e;
    return (0, i.jsx)(l.Clickable, {
      innerRef: t,
      onClick: () => a(s),
      onFocus: u,
      onBlur: o,
      children: (0, i.jsx)("img", {
        style: {
          width: "100%",
          height: "100%"
        },
        alt: "",
        src: S[s],
        className: n ? r.customGiftBoxHighlighted : r.customGiftBox
      })
    })
  })