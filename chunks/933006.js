"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
}), a("47120");
var s = a("735250"),
  n = a("470079"),
  l = a("481060"),
  o = a("230711"),
  i = a("2052"),
  c = a("906732"),
  r = a("174609"),
  u = a("626135"),
  d = a("790527"),
  C = a("940165"),
  O = a("474936"),
  I = a("981631"),
  _ = a("871465"),
  T = a("689938"),
  N = a("632246");

function S(e) {
  let {
    onClose: t,
    ...S
  } = e, U = (0, i.useAnalyticsContext)(), {
    analyticsLocations: M
  } = (0, c.default)(), [f, p] = n.useState(!1);
  n.useEffect(() => {
    !f && (u.default.track(I.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: O.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
      location: U.location,
      location_stack: M
    }), p(!0))
  }, [U.location, M, f]);
  let A = (0, _.getCustomNotificationSoundpackOptions)(!1);
  return (0, s.jsx)(d.default, {
    type: O.PremiumUpsellTypes.CUSTOM_NOTIFICATION_SOUNDS_UPSELL,
    artContainerClassName: N.image,
    artURL: a("98165"),
    title: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    glowUp: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_TITLE,
    body: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_DESCRIPTION,
    showEnhancedUpsell: !0,
    analyticsLocation: {
      section: I.AnalyticsSections.PREMIUM_CUSTOM_NOTIFICATION_SOUND_UPSELL_MODAL
    },
    enableArtBoxShadow: !1,
    onSubscribeClick: r.default,
    secondaryCTA: T.default.Messages.PREMIUM_ROADBLOCK_UPSELL_SECONDARY_CTA,
    onSecondaryClick: () => {
      t(), o.default.open(I.UserSettingsSections.PREMIUM)
    },
    onClose: t,
    ...S,
    children: (0, s.jsx)(l.FormItem, {
      title: T.default.Messages.PREMIUM_CUSTOM_NOTIFICATION_SOUND_ROADBLOCK_LABEL,
      className: N.optionsContainerWrapper,
      children: (0, s.jsx)("div", {
        className: N.optionsContainer,
        children: A.map((e, t) => {
          let a = e.value;
          return a === _.Soundpacks.CLASSIC ? null : (0, s.jsx)(C.default, {
            label: e.label,
            soundpack: a,
            description: e.description,
            location: "upsellModal"
          }, t)
        })
      })
    })
  })
}