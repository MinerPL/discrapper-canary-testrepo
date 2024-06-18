"use strict";
n.d(t, {
  Ae: function() {
    return a
  },
  Wo: function() {
    return l
  },
  e7: function() {
    return _
  },
  zW: function() {
    return o
  }
}), n(627341);
var i = n(278074),
  r = n(228168),
  s = n(214572);
let o = e => t => {
    if (t.hasBanner || t.hasProfileEffect) return e.premiumUserWithBanner;
    if (t.isPremium) {
      var n;
      return null !== (n = e.premiumUserWithoutBanner) && void 0 !== n ? n : e.default
    }
    return e.default
  },
  a = e => {
    let {
      profileType: t,
      user: n
    } = e;
    return (0, i.EQ)(t).with(r.y0.POPOUT, r.y0.POMELO_POPOUT, () => o({
      premiumUserWithBanner: s.popoutBannerPremium,
      premiumUserWithoutBanner: s.popoutNoBannerPremium,
      default: s.popoutBanner
    })(n)).with(r.y0.MODAL, () => o({
      premiumUserWithBanner: s.modalBannerPremium,
      premiumUserWithoutBanner: s.modalBanner,
      default: s.modalBanner
    })(n)).with(r.y0.BITE_SIZE, () => o({
      premiumUserWithBanner: s.biteSizeBannerPremium,
      premiumUserWithoutBanner: s.biteSizeBanner,
      default: s.biteSizeBanner
    })(n)).with(r.y0.FULL_SIZE, () => o({
      premiumUserWithBanner: s.fullSizeBannerPremium,
      premiumUserWithoutBanner: s.fullSizeBanner,
      default: s.fullSizeBanner
    })(n)).with(r.y0.SETTINGS, () => s.settingsBanner).with(r.y0.PANEL, () => s.panelBanner).with(r.y0.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
  },
  l = e => {
    let {
      profileType: t,
      user: n
    } = e;
    return (0, i.EQ)(t).with(r.y0.POPOUT, () => o({
      premiumUserWithBanner: 120,
      premiumUserWithoutBanner: 90,
      default: 60
    })(n)).with(r.y0.MODAL, () => o({
      premiumUserWithBanner: 212,
      premiumUserWithoutBanner: 106,
      default: 106
    })(n)).with(r.y0.BITE_SIZE, () => 105).with(r.y0.FULL_SIZE, () => 210).with(r.y0.POMELO_POPOUT, () => 64).with(r.y0.SETTINGS, () => 100).with(r.y0.PANEL, () => 120).with(r.y0.CANCEL_MODAL, () => 42).exhaustive()
  },
  u = Object.freeze({
    [r.y0.POPOUT]: 340,
    [r.y0.PANEL]: 340,
    [r.y0.MODAL]: 600,
    [r.y0.SETTINGS]: 660,
    [r.y0.POMELO_POPOUT]: 432,
    [r.y0.CANCEL_MODAL]: 172,
    [r.y0.BITE_SIZE]: 300,
    [r.y0.FULL_SIZE]: 600
  }),
  _ = e => u[e]