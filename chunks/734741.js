"use strict";
n.r(t), n.d(t, {
  shouldScrollToMarketingMomentContent: function() {
    return L
  },
  shouldShowReferralProgramPlanComparisonRow: function() {
    return v
  },
  useDismissWhatsNewCardDCs: function() {
    return A
  },
  useShouldShowAppStylesBadge: function() {
    return E
  },
  useShouldShowCustomNotificationSoundBadge: function() {
    return p
  },
  useShouldShowWhatsNewBadge: function() {
    return T
  },
  useWhatsNewBadgeCount: function() {
    return N
  }
});
var l = n("442837"),
  a = n("524437"),
  s = n("605236"),
  i = n("594174"),
  r = n("74538"),
  o = n("331119"),
  u = n("575595"),
  d = n("466010"),
  c = n("650032"),
  f = n("921944");
let h = "getWhatsNewBadgeCount",
  m = () => {
    let e = (0, l.useStateFromStores)([i.default], () => i.default.getCurrentUser()),
      t = r.default.isPremium(e),
      {
        enabled: n
      } = c.ReferralProgramRecipient.useExperiment({
        location: h
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = u.DiscountModelDataCollection.useExperiment({
        location: h
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: s
      } = o.CannibalizationModelDataCollection.useExperiment({
        location: h
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !a && !s
  },
  C = () => {
    let e = i.default.getCurrentUser(),
      t = r.default.isPremium(e),
      {
        enabled: n
      } = c.ReferralProgramRecipient.getCurrentConfig({
        location: h
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: l
      } = u.DiscountModelDataCollection.getCurrentConfig({
        location: h
      }, {
        autoTrackExposure: !1
      }),
      {
        enabled: a
      } = o.CannibalizationModelDataCollection.getCurrentConfig({
        location: h
      }, {
        autoTrackExposure: !1
      });
    return !t && n && !l && !a
  },
  p = () => {
    let {
      canFlipCustomNotificationSoundsCard: e
    } = d.June2024MarketingMoment.useExperiment({
      location: h
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_CUSTOM_NOTIFICATION_SOUNDS_NITRO_BADGE);
    return e && !t
  },
  g = () => {
    let {
      canFlipCustomNotificationSoundsCard: e
    } = d.June2024MarketingMoment.getCurrentConfig({
      location: h
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_CUSTOM_NOTIFICATION_SOUNDS_NITRO_BADGE);
    return e && !t
  },
  E = () => {
    let {
      canFlipAppStylesCard: e
    } = d.June2024MarketingMoment.useExperiment({
      location: h
    }, {
      autoTrackExposure: !1
    }), t = (0, s.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  _ = () => {
    let {
      canFlipAppStylesCard: e
    } = d.June2024MarketingMoment.getCurrentConfig({
      location: h
    }, {
      autoTrackExposure: !1
    }), t = (0, s.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE);
    return e && !t
  },
  S = () => {
    let {
      canFlipReferralProgramCard: e
    } = d.June2024MarketingMoment.useExperiment({
      location: h
    }, {
      autoTrackExposure: !1
    }), t = m(), n = (0, s.useIsDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  I = () => {
    let {
      canFlipReferralProgramCard: e
    } = d.June2024MarketingMoment.getCurrentConfig({
      location: h
    }, {
      autoTrackExposure: !1
    }), t = C(), n = (0, s.isDismissibleContentDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE);
    return t && e && !n
  },
  N = () => {
    let e = p(),
      t = E(),
      n = S();
    return e || t || n ? 1 : 0
  },
  T = () => {
    let e = p(),
      t = E(),
      n = S();
    return e || t || n
  },
  A = () => {
    let e = p(),
      t = E(),
      n = S();
    e && (0, s.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_CUSTOM_NOTIFICATION_SOUNDS_NITRO_BADGE, {
      dismissAction: f.ContentDismissActionType.TAKE_ACTION
    }), t && (0, s.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_APP_STYLES_JUNE_2024_NITRO_BADGE, {
      dismissAction: f.ContentDismissActionType.TAKE_ACTION
    }), n && (0, s.markDismissibleContentAsDismissed)(a.DismissibleContent.WHATS_NEW_REFERRAL_PROGRAM_NITRO_BADGE, {
      dismissAction: f.ContentDismissActionType.TAKE_ACTION
    })
  },
  L = () => {
    let e = g(),
      t = _(),
      n = I();
    return e || t || n
  },
  v = () => {
    let {
      canFlipReferralProgramCard: e
    } = d.June2024MarketingMoment.getCurrentConfig({
      location: "shouldShowReferralProgramPlanComparisonRow"
    }, {
      autoTrackExposure: !1
    });
    return C() && e
  }