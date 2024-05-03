"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return ey
  }
}), n("47120");
var s, a, l, i, r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("743426"),
  c = n("524437"),
  f = n("433517"),
  E = n("570140"),
  _ = n("579806"),
  m = n("726542"),
  T = n("812206"),
  I = n("223892"),
  p = n("674525"),
  h = n("605236"),
  N = n("524347"),
  S = n("853197"),
  C = n("353926"),
  A = n("594190"),
  g = n("38618"),
  M = n("569545"),
  R = n("615365"),
  v = n("528011"),
  O = n("487419"),
  x = n("715903"),
  L = n("223606"),
  D = n("150340"),
  P = n("160404"),
  y = n("41776"),
  U = n("347649"),
  j = n("332473"),
  b = n("616106"),
  B = n("774276"),
  G = n("443852"),
  F = n("1844"),
  k = n("621615"),
  w = n("417626"),
  H = n("569984"),
  V = n("523255"),
  Y = n("768419"),
  K = n("590415"),
  W = n("581883"),
  z = n("199902"),
  Q = n("314897"),
  q = n("881998"),
  X = n("463395"),
  Z = n("592125"),
  J = n("553795"),
  $ = n("427123"),
  ee = n("271383"),
  et = n("430824"),
  en = n("131951"),
  es = n("292959"),
  ea = n("496675"),
  el = n("571474"),
  ei = n("19780"),
  er = n("944486"),
  eo = n("914010"),
  eu = n("215427"),
  ed = n("246946"),
  ec = n("558724"),
  ef = n("23434"),
  eE = n("594174"),
  e_ = n("979651"),
  em = n("351402"),
  eT = n("853872"),
  eI = n("78839"),
  ep = n("295226"),
  eh = n("580130"),
  eN = n("695103"),
  eS = n("358085"),
  eC = n("74538"),
  eA = n("922156"),
  eg = n("436181"),
  eM = n("941128"),
  eR = n("981631"),
  ev = n("188785"),
  eO = n("702512"),
  ex = n("474936"),
  eL = n("46140"),
  eD = n("231338"),
  eP = n("65154");
let ey = {
    [eR.NoticeTypes.LOCALIZED_PRICING]: c.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eR.NoticeTypes.DOWNLOAD_NAG]: c.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eR.NoticeTypes.CONNECT_SPOTIFY]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eR.NoticeTypes.CONNECT_PLAYSTATION]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eR.NoticeTypes.MFA_SMS_BACKUP]: c.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eR.NoticeTypes.PREMIUM_REACTIVATE]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eR.NoticeTypes.DROPS_GO_LIVE_BANNER]: c.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eR.NoticeTypes.DROPS_ENDED_INCOMPLETE]: c.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eR.NoticeTypes.BOUNCED_EMAIL_DETECTED]: c.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: c.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eR.NoticeTypes.POMELO_ELIGIBLE]: c.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eR.NoticeTypes.UU_MIGRATION]: c.DismissibleContent.UU_MIGRATION_NOTICE
  },
  eU = {
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eR.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eR.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eR.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eR.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice"
  },
  ej = new Set([eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.BLOCKED_BY_PROXY]),
  eb = {},
  eB = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eG = null;

function eF(e) {
  return eU[e] + "-untilAtLeast"
}

function ek(e, t, n) {
  var s, a, l;
  if (null == e) return;
  let i = eU[e];
  if (null != i && !t && f.Storage.set(i, !0), ej.has(e) && (eb[e] = !0), null != n && null != i) {
    ;
    s = e, a = n, f.Storage.set(eF(s), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    l = e, f.Storage.remove(eF(l))
  }
}

function ew(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = B.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : ey[e]
  }(e);
  if (null != t) return (0, h.isDismissibleContentDismissed)(t);
  let n = eU[e];
  if (null != n) {
    let t = function(e) {
      let t = f.Storage.get(eF(e));
      return null != t ? o()(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(o()())
  }
  let s = eb[e];
  return !!s || (null != n && "" !== n ? f.Storage.get(n) : !!ej.has(e) && s)
}
let eH = [eR.NoticeTypes.QUARANTINED, eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eR.NoticeTypes.VIEWING_ROLES, eR.NoticeTypes.INVITED_TO_SPEAK, eR.NoticeTypes.LURKING_GUILD, eR.NoticeTypes.VOICE_DISABLED, eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.HARDWARE_MUTE, eR.NoticeTypes.H264_DISABLED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eR.NoticeTypes.BLOCKED_BY_PROXY, eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eR.NoticeTypes.GUILD_RAID_NOTIFICATION, eR.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, eR.NoticeTypes.UNCLAIMED_ACCOUNT, eR.NoticeTypes.POMELO_ELIGIBLE, eR.NoticeTypes.PENDING_MEMBER, eR.NoticeTypes.OUTBOUND_PROMOTION, eR.NoticeTypes.CORRUPT_INSTALLATION, eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.SCHEDULED_MAINTENANCE, eR.NoticeTypes.BOUNCED_EMAIL_DETECTED, eR.NoticeTypes.UNVERIFIED_ACCOUNT, eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eR.NoticeTypes.PREMIUM_UNCANCEL, eR.NoticeTypes.PREMIUM_MISSING_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eR.NoticeTypes.PREMIUM_REACTIVATE, eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eR.NoticeTypes.MFA_SMS_BACKUP, eR.NoticeTypes.APPLICATION_TEST_MODE, eR.NoticeTypes.LOCALIZED_PRICING, eR.NoticeTypes.DOWNLOAD_NAG, eR.NoticeTypes.CONNECT_SPOTIFY, eR.NoticeTypes.CONNECT_PLAYSTATION, eR.NoticeTypes.SURVEY, eR.NoticeTypes.SERVER_USAGE_SURVEY, eR.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eR.NoticeTypes.DROPS_GO_LIVE_BANNER, eR.NoticeTypes.DROPS_ENDED_INCOMPLETE, eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eR.NoticeTypes.UU_MIGRATION],
  eV = [eR.NoticeTypes.QUARANTINED, eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eR.NoticeTypes.VIEWING_ROLES, eR.NoticeTypes.INVITED_TO_SPEAK, eR.NoticeTypes.LURKING_GUILD, eR.NoticeTypes.VOICE_DISABLED, eR.NoticeTypes.NO_INPUT_DETECTED, eR.NoticeTypes.HARDWARE_MUTE, eR.NoticeTypes.H264_DISABLED, eR.NoticeTypes.DISPATCH_ERROR, eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eR.NoticeTypes.SPOTIFY_AUTO_PAUSED, eR.NoticeTypes.BLOCKED_BY_PROXY, eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eR.NoticeTypes.PENDING_MEMBER, eR.NoticeTypes.STREAMER_MODE, eR.NoticeTypes.SCHEDULED_MAINTENANCE],
  eY = {
    [eR.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, v.shouldShowRaidNotificationNagbar)().show && !ew(eR.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => ({
        dismissUntil: o()().add(3, "hours").toDate()
      })
    },
    [eR.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = ee.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, x.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eR.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eR.UserFlags.QUARANTINED)
      }
    },
    [eR.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return P.default.isViewingRoles(t)
      }
    },
    [eR.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, K.getAudienceRequestToSpeakState)(t) === K.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eR.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && y.default.isLurking(t)
      }
    },
    [eR.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != ei.default.getRemoteDisconnectVoiceChannelId()
    },
    [eR.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != ei.default.getLastSessionVoiceChannelId()
    },
    [eR.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = Z.default.getChannel(t), a = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === en.default.getInputDetected() && !a
      }
    },
    [eR.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = Z.default.getChannel(t);
        return !en.default.getOpenH264() && null != t && e_.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eR.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => ei.default.isConnected() && en.default.isHardwareMute(),
      metadata: () => {
        let e = en.default.getInputDeviceId(),
          t = X.default.getVendor(e),
          n = X.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [eR.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eA.default.getLastError(),
      metadata: () => ({
        error: eA.default.getLastError()
      })
    },
    [eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eg.default.getLastProgress(),
      metadata: () => eg.default.getLastProgress()
    },
    [eR.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => Y.default.wasAutoPaused()
    },
    [eR.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !ew(eR.NoticeTypes.BLOCKED_BY_PROXY) && w.default.blockedByProxy && k.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eR.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eR.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: a,
          currentUser: l
        } = e;
        return null !== (s = null != a && null != l && !(null === (t = et.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eR.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = ee.default.getMember(a, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eR.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, G.shouldShowOutboundPromotionNotice)()
    },
    [eR.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eS.isPlatformEmbedded && (!d.default.supported() || eM.default.isCorruptInstallation())
    },
    [eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && e_.default.hasVideo(t) && !en.default.supports(eP.Features.VIDEO) && !ew(eR.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eC.default.canRedeemPremiumPerks(t) && $.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => $.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !ew(eR.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => $.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eR.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ed.default.enabled
    },
    [eR.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eS.isPlatformEmbedded && !ew(eR.NoticeTypes.DOWNLOAD_NAG)
    },
    [eR.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != eu.default.getScheduledMaintenance(),
      metadata: () => {
        let e = eu.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [eR.NoticeTypes.SURVEY]: {
      predicate: () => null != ec.default.getCurrentSurvey(),
      metadata: () => ec.default.getCurrentSurvey()
    },
    [eR.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && R.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !ew(eR.NoticeTypes.SERVER_USAGE_SURVEY)
      },
      metadata: e => {
        let {
          selectedGuildId: t,
          currentUser: n
        } = e;
        return {
          selectedGuildId: t,
          currentUser: n
        }
      }
    },
    [eR.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eR.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eR.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !Y.default.hasConnectedAccount() && A.default.isObservedAppRunning(m.default.get(eR.PlatformTypes.SPOTIFY).name) && !ew(eR.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eR.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => (null === _.default || void 0 === _.default ? void 0 : _.default.os.arch) === "ia32" && (null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "win32",
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [eR.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "win32") try {
          return 10 > parseInt(null === _.default || void 0 === _.default ? void 0 : _.default.os.release.split(".")[0])
        } catch (e) {}
        return !1
      },
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [eR.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "darwin") try {
          return 19 > parseInt(null === _.default || void 0 === _.default ? void 0 : _.default.os.release.split(".")[0])
        } catch (e) {}
        return !1
      },
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [eR.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => J.default.isSuggestedAccountType(eR.PlatformTypes.PLAYSTATION) && null == J.default.getAccount(null, eR.PlatformTypes.PLAYSTATION) && !ew(eR.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => ep.default.getAlmostExpiringTrialOffers([ex.PremiumSubscriptionSKUs.TIER_2]).length > 0 && !ew(eR.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => ep.default.getAlmostExpiringTrialOffers([ex.PremiumSubscriptionSKUs.TIER_0]).length > 0 && !ew(eR.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [eR.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eR.SubscriptionStatusTypes.CANCELED && 1 >= o()().diff(o()(t.canceledAt), "days"), l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = null != t && t.status === eR.SubscriptionStatusTypes.CANCELED && !l && s <= 7 && s >= 0 && (0, eC.isPremiumExactly)(n, ex.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(eR.NoticeTypes.PREMIUM_UNCANCEL) && i
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eC.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eC.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0, l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = eh.default.applicationIdsFetched.has(ex.PREMIUM_SUBSCRIPTION_APPLICATION), r = eh.default.getForApplication(ex.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eC.getPremiumPlanItem)(t) : null, d = null != u ? eC.default.getSkuIdForPlan(u.planId) : null, c = null != r && null != u && Array.from(r).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eR.SubscriptionStatusTypes.PAST_DUE && !l && i && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(eR.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eC.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eC.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? eT.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(eR.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(eR.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [eR.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eR.UserFlags.MFA_SMS) && !t.hasFlag(eR.UserFlags.STAFF) && !t.hasFlag(eR.UserFlags.PARTNER) && !ew(eR.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eR.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eN.default.testModeApplicationId,
      metadata: () => {
        if (null == eN.default.testModeApplicationId) return {};
        let e = eN.default.testModeApplicationId,
          t = T.default.getApplication(e);
        return {
          applicationName: null != t ? t.name : e,
          applicationId: e
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !ew(eR.NoticeTypes.PREMIUM_REACTIVATE) && b.default.shouldShowReactivateNotice()
    },
    [eR.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !ew(eR.NoticeTypes.LOCALIZED_PRICING) && t
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        return {
          premiumSubscription: t
        }
      }
    },
    [eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && null != t.paymentSourceId ? eT.default.getPaymentSource(t.paymentSourceId) : null, l = null != a && eD.PREPAID_PAYMENT_SOURCES.has(a.type), i = null != t && t.status === eR.SubscriptionStatusTypes.PAST_DUE && !s && l && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !ew(eR.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && i
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        if (null == t) return {
          daysPastDue: 0,
          dismissUntil: o()().toDate()
        };
        {
          let e = t.status === eR.SubscriptionStatusTypes.PAST_DUE ? o()().diff(t.currentPeriodStart, "days") : 0;
          return {
            daysPastDue: e,
            dismissUntil: (0, eC.getBillingGracePeriodDaysAndExpiresDate)(t).expiresDate.toDate()
          }
        }
      }
    },
    [eR.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !ew(eR.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsNoticeBanner)(eO.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eO.PartnerGame.FORTNITE
      })
    },
    [eR.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => N.default.isCurrentQuestInterrupted && null != N.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: N.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eR.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !ew(eR.NoticeTypes.POMELO_ELIGIBLE) && !(0, U.getForceMigration)()
    },
    [eR.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !ew(eR.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsEndedIncompleteBanner)(eO.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eO.PartnerGame.FORTNITE
      })
    },
    [eR.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, j.isEligibleForPomelo)() && !ew(eR.NoticeTypes.UU_MIGRATION) && (0, U.getForceMigration)()
    },
    [eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? et.default.getGuild(t) : null;
        return null != t && null != L.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eR.GuildFeatures.COMMUNITY)) && !ew(eR.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: o()().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = L.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !ew(eR.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.default.getEligibleGuildsForNagActivate().length && (0, I.isCreatorMonetizationNagActivateEnabled)()
    },
    [eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !ew(eR.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, D.shouldShowGuildOnboardingUpsell)(t, c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eR.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return V.isEligibleForNotice(t)
      }
    },
    [eR.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = z.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, M.encodeStreamKey)(e),
          n = H.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eL.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = z.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, M.encodeStreamKey)(e) : null
        }
      }
    }
  };

function eK() {
  if (!g.default.isConnected()) return !1;
  eG = null;
  let e = eE.default.getCurrentUser();
  if (null == e) return !1;
  let t = eI.default.getPremiumSubscription(),
    n = em.default.isLocalizedPromoEnabled,
    s = eo.default.getGuildId(),
    a = er.default.getVoiceChannelId(),
    l = null != a ? e_.default.getVoiceStateForChannel(a) : null;
  for (let o of ev.CONFERENCE_MODE_ENABLED ? eV : eH)
    if (null != eY[o] && eY[o].predicate({
        selectedGuildId: s,
        voiceChannelId: a,
        voiceState: l,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var i, r;
      let n = null === (i = (r = eY[o]).metadata) || void 0 === i ? void 0 : i.call(r, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eG = {
        ...eB,
        type: o,
        metadata: n
      };
      break
    } null != eG && ew(eG.type) && (eG = null)
}

function eW() {
  return !ed.default.enabled && delete eb[eR.NoticeTypes.STREAMER_MODE], eK()
}
class ez extends(s = u.default.Store) {
  initialize() {
    this.syncWith([ec.default, el.default, $.default, eo.default, F.default, ep.default, q.default, J.default, W.default, O.default, H.default, z.default], eK), this.waitFor(eE.default, eu.default, et.default, ee.default, ei.default, en.default, ed.default, C.default, eo.default, ef.default, Y.default, A.default, el.default, eA.default, eg.default, eN.default, es.default, eI.default, eM.default, $.default, eT.default, ea.default, F.default, eh.default, ep.default, J.default, y.default, N.default, p.default, w.default, H.default, z.default)
  }
  hasNotice() {
    return null != eG && null != eG.type
  }
  getNotice() {
    return null == ef.default.getAction() ? eG : null
  }
  isNoticeDismissed(e) {
    return ew(e)
  }
}
i = "NoticeStore", (l = "displayName") in(a = ez) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new ez(E.default, {
  CURRENT_USER_UPDATE: eK,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eK,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eK,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eK,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eK,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eK,
  GUILD_CREATE: eK,
  GUILD_DELETE: eK,
  AUDIO_INPUT_DETECTED: eK,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eK,
  CERTIFIED_DEVICES_SET: eK,
  AUDIO_SET_INPUT_DEVICE: eK,
  AUDIO_SET_OUTPUT_DEVICE: eK,
  MEDIA_ENGINE_DEVICES: eK,
  RTC_CONNECTION_STATE: eK,
  RPC_APP_AUTHENTICATED: eK,
  RPC_APP_DISCONNECTED: eK,
  USER_CONNECTIONS_UPDATE: eK,
  WINDOW_FOCUS: eK,
  INSTANT_INVITE_CREATE: eK,
  INSTANT_INVITE_REVOKE_SUCCESS: eK,
  SPOTIFY_PLAYER_PAUSE: eK,
  RUNNING_GAMES_CHANGE: eK,
  EXPERIMENTS_FETCH_SUCCESS: eK,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eK,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eK,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eK,
  DEVELOPER_TEST_MODE_RESET: eK,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eK,
  DISPATCH_APPLICATION_INSTALL: eK,
  IMPERSONATE_STOP: eK,
  IMPERSONATE_UPDATE: eK,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === Q.default.getId() && eK()
  },
  GUILD_MEMBER_UPDATE: eK,
  SURVEY_FETCHED: eK,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eK,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eK,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eK,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eK,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== Q.default.getId()
    }) && eK()
  },
  STREAMER_MODE_UPDATE: eW,
  RUNNING_STREAMER_TOOLS_CHANGE: eW,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eb[eR.NoticeTypes.DISPATCH_ERROR], eK()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eb[eR.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eK()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eK()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eK()
  },
  NOTICE_SHOW: function(e) {
    eG = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eG && (null == e.id || e.id === eG.id) && (ek(eG.type, e.isTemporary, e.untilAtLeast), eK())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ek(t), eK()
  },
  LOGOUT: function() {
    eb = {}, eG = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eK,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eK,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eK,
  PROXY_BLOCKED_REQUEST: eK
})