"use strict";
n.d(t, {
  Z: function() {
    return C
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(310752),
  l = n(174609),
  u = n(703656),
  _ = n(210887),
  d = n(594174),
  c = n(626135),
  E = n(424218),
  I = n(74538),
  T = n(104494),
  h = n(639119),
  S = n(631771),
  f = n(790527),
  N = n(474936),
  A = n(981631),
  m = n(731994),
  O = n(689938),
  R = n(241614);

function C(e) {
  let {
    onClose: t,
    ...n
  } = e, C = (0, s.e7)([d.default], () => d.default.getCurrentUser()), p = (0, s.e7)([_.Z], () => _.Z.theme), g = (0, h.N)(), L = (0, T.Ng)(), v = null != g || null != L, {
    enabled: D
  } = S.MP.useExperiment({
    location: "File Upload Roadblock"
  }, {
    autoTrackExposure: !v,
    disable: v
  }), M = p === A.BRd.LIGHT ? "light" : "dark", P = D ? (0, i.jsx)("img", {
    className: R.updatedArt,
    alt: "File Upload Nitro Perk",
    src: "https://cdn.discordapp.com/assets/premium/roadblocks/file_upload_".concat(M, ".png")
  }) : (0, i.jsx)(a.Z, {
    icons: m.J6
  }), y = r.useMemo(() => {
    let e = I.ZP.getUserMaxFileSize(C),
      t = (0, E.BU)(e / 1024, {
        useKibibytes: !0
      }),
      n = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
        maxSize: t
      });
    switch (null == C ? void 0 : C.premiumType) {
      case N.p9.TIER_0:
        n = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_0.format({
          maxSize: t
        });
        break;
      case N.p9.TIER_1:
        n = O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1_PREMIUM_TIER_1.format({
          maxSize: t
        })
    }
    return n
  }, [C]), U = D ? O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_TIER_2 : O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_2_INCREASE, b = D ? (0, i.jsx)("div", {
    className: R.body,
    children: (0, i.jsx)(o.Text, {
      variant: "text-sm/medium",
      children: U
    })
  }) : (0, i.jsxs)("div", {
    className: R.body,
    children: [(0, i.jsx)("span", {
      children: y
    }), (0, i.jsx)(o.Text, {
      variant: "text-md/medium",
      children: U
    })]
  });
  return (0, i.jsx)(f.Z, {
    artElement: P,
    artContainerClassName: D ? R.updatedArtContainer : R.artContainer,
    enableArtBoxShadow: !1,
    type: N.cd.UPLOAD_ERROR_UPSELL,
    title: O.Z.Messages.UPLOAD_AREA_TOO_LARGE_TITLE,
    body: b,
    context: O.Z.Messages.UPLOAD_AREA_PREMIUM_UPSELL_BODY_LINE_1.format({
      maxSize: O.Z.Messages.FILE_UPLOAD_LIMIT_NEW_STANDARD
    }),
    glowUp: U,
    analyticsLocation: {
      section: A.jXE.FILE_UPLOAD_POPOUT
    },
    onClose: t,
    subscriptionTier: N.Si.TIER_2,
    secondaryCTA: D ? O.Z.Messages.STREAM_PREMIUM_UPSELL_SECONDARY_CTA : void 0,
    onSecondaryClick: D ? function() {
      (0, l.Z)(), t(), c.default.track(A.rMx.PREMIUM_PROMOTION_OPENED, {
        location_section: A.jXE.FILE_UPLOAD_UPSELL_MODAL,
        location_object: A.qAy.NAVIGATION_LINK
      }), (0, u.uL)(A.Z5c.APPLICATION_STORE)
    } : void 0,
    showEnhancedUpsell: D,
    ...n
  })
}