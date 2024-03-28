"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eU
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
  T = n("726542"),
  m = n("812206"),
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
  O = n("528011"),
  v = n("487419"),
  L = n("715903"),
  x = n("223606"),
  D = n("150340"),
  P = n("160404"),
  y = n("41776"),
  U = n("347649"),
  b = n("332473"),
  j = n("616106"),
  G = n("774276"),
  B = n("224998"),
  F = n("443852"),
  k = n("1844"),
  w = n("621615"),
  H = n("417626"),
  V = n("569984"),
  Y = n("523255"),
  K = n("768419"),
  W = n("590415"),
  z = n("581883"),
  Q = n("199902"),
  q = n("314897"),
  J = n("881998"),
  X = n("463395"),
  Z = n("592125"),
  $ = n("553795"),
  ee = n("427123"),
  et = n("271383"),
  en = n("430824"),
  es = n("131951"),
  ea = n("292959"),
  el = n("496675"),
  ei = n("571474"),
  er = n("19780"),
  eo = n("944486"),
  eu = n("914010"),
  ed = n("215427"),
  ec = n("246946"),
  ef = n("558724"),
  eE = n("23434"),
  e_ = n("594174"),
  eT = n("979651"),
  em = n("351402"),
  eI = n("853872"),
  ep = n("78839"),
  eh = n("295226"),
  eN = n("580130"),
  eS = n("695103"),
  eC = n("358085"),
  eA = n("74538"),
  eg = n("922156"),
  eM = n("436181"),
  eR = n("941128"),
  eO = n("981631"),
  ev = n("188785"),
  eL = n("702512"),
  ex = n("474936"),
  eD = n("46140"),
  eP = n("231338"),
  ey = n("65154");
let eU = {
    [eO.NoticeTypes.LOCALIZED_PRICING]: c.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eO.NoticeTypes.DOWNLOAD_NAG]: c.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eO.NoticeTypes.CONNECT_SPOTIFY]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eO.NoticeTypes.CONNECT_PLAYSTATION]: c.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eO.NoticeTypes.MFA_SMS_BACKUP]: c.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eO.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eO.NoticeTypes.PREMIUM_REACTIVATE]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eO.NoticeTypes.DROPS_GO_LIVE_BANNER]: c.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eO.NoticeTypes.DROPS_ENDED_INCOMPLETE]: c.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eO.NoticeTypes.BOUNCED_EMAIL_DETECTED]: c.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eO.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: c.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eO.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: c.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eO.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eO.NoticeTypes.POMELO_ELIGIBLE]: c.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eO.NoticeTypes.UU_MIGRATION]: c.DismissibleContent.UU_MIGRATION_NOTICE
  },
  eb = {
    [eO.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eO.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eO.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eO.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eO.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eO.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eO.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eO.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eO.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eO.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eO.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [eO.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [eO.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice"
  },
  ej = new Set([eO.NoticeTypes.NO_INPUT_DETECTED, eO.NoticeTypes.STREAMER_MODE, eO.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eO.NoticeTypes.SPOTIFY_AUTO_PAUSED, eO.NoticeTypes.DISPATCH_ERROR, eO.NoticeTypes.DISPATCH_ERROR, eO.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.NoticeTypes.BLOCKED_BY_PROXY]),
  eG = {},
  eB = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  eF = null;

function ek(e) {
  return eb[e] + "-untilAtLeast"
}

function ew(e, t, n) {
  var s, a, l;
  if (null == e) return;
  let i = eb[e];
  if (null != i && !t && f.Storage.set(i, !0), ej.has(e) && (eG[e] = !0), null != n && null != i) {
    ;
    s = e, a = n, f.Storage.set(ek(s), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    l = e, f.Storage.remove(ek(l))
  }
}

function eH(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = G.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== eO.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : eU[e]
  }(e);
  if (null != t) return (0, h.isDismissibleContentDismissed)(t);
  let n = eb[e];
  if (null != n) {
    let t = function(e) {
      let t = f.Storage.get(ek(e));
      return null != t ? o()(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(o()())
  }
  let s = eG[e];
  return !!s || (null != n && "" !== n ? f.Storage.get(n) : !!ej.has(e) && s)
}
let eV = [eO.NoticeTypes.QUARANTINED, eO.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eO.NoticeTypes.VIEWING_ROLES, eO.NoticeTypes.INVITED_TO_SPEAK, eO.NoticeTypes.LURKING_GUILD, eO.NoticeTypes.VOICE_DISABLED, eO.NoticeTypes.NO_INPUT_DETECTED, eO.NoticeTypes.HARDWARE_MUTE, eO.NoticeTypes.H264_DISABLED, eO.NoticeTypes.DISPATCH_ERROR, eO.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.NoticeTypes.SPOTIFY_AUTO_PAUSED, eO.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eO.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eO.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eO.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eO.NoticeTypes.BLOCKED_BY_PROXY, eO.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eO.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eO.NoticeTypes.GUILD_RAID_NOTIFICATION, eO.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, eO.NoticeTypes.UNCLAIMED_ACCOUNT, eO.NoticeTypes.POMELO_ELIGIBLE, eO.NoticeTypes.PENDING_MEMBER, eO.NoticeTypes.OUTBOUND_PROMOTION, eO.NoticeTypes.CORRUPT_INSTALLATION, eO.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eO.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eO.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eO.NoticeTypes.STREAMER_MODE, eO.NoticeTypes.SCHEDULED_MAINTENANCE, eO.NoticeTypes.BOUNCED_EMAIL_DETECTED, eO.NoticeTypes.UNVERIFIED_ACCOUNT, eO.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eO.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eO.NoticeTypes.PREMIUM_UNCANCEL, eO.NoticeTypes.PREMIUM_MISSING_PAYMENT, eO.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eO.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eO.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eO.NoticeTypes.PREMIUM_REACTIVATE, eO.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eO.NoticeTypes.MFA_SMS_BACKUP, eO.NoticeTypes.APPLICATION_TEST_MODE, eO.NoticeTypes.LOCALIZED_PRICING, eO.NoticeTypes.DOWNLOAD_NAG, eO.NoticeTypes.CONNECT_SPOTIFY, eO.NoticeTypes.CONNECT_PLAYSTATION, eO.NoticeTypes.SURVEY, eO.NoticeTypes.SERVER_USAGE_SURVEY, eO.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eO.NoticeTypes.DROPS_GO_LIVE_BANNER, eO.NoticeTypes.DROPS_ENDED_INCOMPLETE, eO.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eO.NoticeTypes.UU_MIGRATION],
  eY = [eO.NoticeTypes.QUARANTINED, eO.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eO.NoticeTypes.VIEWING_ROLES, eO.NoticeTypes.INVITED_TO_SPEAK, eO.NoticeTypes.LURKING_GUILD, eO.NoticeTypes.VOICE_DISABLED, eO.NoticeTypes.NO_INPUT_DETECTED, eO.NoticeTypes.HARDWARE_MUTE, eO.NoticeTypes.H264_DISABLED, eO.NoticeTypes.DISPATCH_ERROR, eO.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.NoticeTypes.SPOTIFY_AUTO_PAUSED, eO.NoticeTypes.BLOCKED_BY_PROXY, eO.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eO.NoticeTypes.PENDING_MEMBER, eO.NoticeTypes.STREAMER_MODE, eO.NoticeTypes.SCHEDULED_MAINTENANCE],
  eK = {
    [eO.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, O.shouldShowRaidNotificationNagbar)().show && !eH(eO.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => ({
        dismissUntil: o()().add(3, "hours").toDate()
      })
    },
    [eO.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = et.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, L.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eO.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eO.UserFlags.QUARANTINED)
      }
    },
    [eO.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return P.default.isViewingRoles(t)
      }
    },
    [eO.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, W.getAudienceRequestToSpeakState)(t) === W.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eO.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && y.default.isLurking(t)
      }
    },
    [eO.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != er.default.getRemoteDisconnectVoiceChannelId()
    },
    [eO.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != er.default.getLastSessionVoiceChannelId()
    },
    [eO.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = Z.default.getChannel(t), a = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === es.default.getInputDetected() && !a
      }
    },
    [eO.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = Z.default.getChannel(t);
        return !es.default.getOpenH264() && null != t && eT.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eO.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => er.default.isConnected() && es.default.isHardwareMute(),
      metadata: () => {
        let e = es.default.getInputDeviceId(),
          t = X.default.getVendor(e),
          n = X.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [eO.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eg.default.getLastError(),
      metadata: () => ({
        error: eg.default.getLastError()
      })
    },
    [eO.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eM.default.getLastProgress(),
      metadata: () => eM.default.getLastProgress()
    },
    [eO.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => K.default.wasAutoPaused()
    },
    [eO.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eH(eO.NoticeTypes.BLOCKED_BY_PROXY) && H.default.blockedByProxy && w.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eO.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eO.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: a,
          currentUser: l
        } = e;
        return null !== (s = null != a && null != l && !(null === (t = en.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eO.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = et.default.getMember(a, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eO.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, F.shouldShowOutboundPromotionNotice)()
    },
    [eO.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eC.isPlatformEmbedded && (!d.default.supported() || eR.default.isCorruptInstallation())
    },
    [eO.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && eT.default.hasVideo(t) && !es.default.supports(ey.Features.VIDEO) && !eH(eO.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eO.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eA.default.canRedeemPremiumPerks(t) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => ee.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eO.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eH(eO.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => ee.default.getDetectedOffPlatformPremiumPerks()[0]
    },
    [eO.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ec.default.enabled
    },
    [eO.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eC.isPlatformEmbedded && !eH(eO.NoticeTypes.DOWNLOAD_NAG)
    },
    [eO.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != ed.default.getScheduledMaintenance(),
      metadata: () => {
        let e = ed.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [eO.NoticeTypes.SURVEY]: {
      predicate: () => null != ef.default.getCurrentSurvey(),
      metadata: () => ef.default.getCurrentSurvey()
    },
    [eO.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && R.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eH(eO.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eO.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eO.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eO.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !K.default.hasConnectedAccount() && A.default.isObservedAppRunning(T.default.get(eO.PlatformTypes.SPOTIFY).name) && !eH(eO.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eO.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = B.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === _.default || void 0 === _.default ? void 0 : _.default.os.arch) === "ia32" && (null === _.default || void 0 === _.default ? void 0 : _.default.process.platform) === "win32"
      },
      metadata: () => ({
        dismissUntil: o()().add(5, "days").toDate()
      })
    },
    [eO.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
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
    [eO.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
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
    [eO.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => $.default.isSuggestedAccountType(eO.PlatformTypes.PLAYSTATION) && null == $.default.getAccount(null, eO.PlatformTypes.PLAYSTATION) && !eH(eO.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eO.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => eh.default.getAlmostExpiringTrialOffers([ex.PremiumSubscriptionSKUs.TIER_2]).length > 0 && !eH(eO.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
    },
    [eO.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => eh.default.getAlmostExpiringTrialOffers([ex.PremiumSubscriptionSKUs.TIER_0]).length > 0 && !eH(eO.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
    },
    [eO.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eO.SubscriptionStatusTypes.CANCELED && 1 >= o()().diff(o()(t.canceledAt), "days"), l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = null != t && t.status === eO.SubscriptionStatusTypes.CANCELED && !l && s <= 7 && s >= 0 && (0, eA.isPremiumExactly)(n, ex.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eO.NoticeTypes.PREMIUM_UNCANCEL) && i
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eA.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eA.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [eO.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf("day"), "days") : 0, l = null != t && o()(t.currentPeriodEnd).isBefore(o()()), i = eN.default.applicationIdsFetched.has(ex.PREMIUM_SUBSCRIPTION_APPLICATION), r = eN.default.getForApplication(ex.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eA.getPremiumPlanItem)(t) : null, d = null != u ? eA.default.getSkuIdForPlan(u.planId) : null, c = null != r && null != u && Array.from(r).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eO.SubscriptionStatusTypes.PAST_DUE && !l && i && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eO.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eA.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null;
        return {
          daysLeft: s,
          premiumType: null != a ? eA.default.getPremiumType(a) : null,
          premiumSubscription: n
        }
      }
    },
    [eO.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? eI.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = null != t && t.status === eO.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eO.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l
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
    [eO.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && t.status === eO.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eO.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
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
    [eO.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eO.UserFlags.MFA_SMS) && !t.hasFlag(eO.UserFlags.STAFF) && !t.hasFlag(eO.UserFlags.PARTNER) && !eH(eO.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eO.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eS.default.testModeApplicationId,
      metadata: () => {
        if (null == eS.default.testModeApplicationId) return {};
        let e = eS.default.testModeApplicationId,
          t = m.default.getApplication(e);
        return {
          applicationName: null != t ? t.name : e,
          applicationId: e
        }
      }
    },
    [eO.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eH(eO.NoticeTypes.PREMIUM_REACTIVATE) && j.default.shouldShowReactivateNotice()
    },
    [eO.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eH(eO.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eO.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && null != t.paymentSourceId ? eI.default.getPaymentSource(t.paymentSourceId) : null, l = null != a && eP.PREPAID_PAYMENT_SOURCES.has(a.type), i = null != t && t.status === eO.SubscriptionStatusTypes.PAST_DUE && !s && l && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eH(eO.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && i
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
          let e = t.status === eO.SubscriptionStatusTypes.PAST_DUE ? o()().diff(t.currentPeriodStart, "days") : 0;
          return {
            daysPastDue: e,
            dismissUntil: (0, eA.getBillingGracePeriodDaysAndExpiresDate)(t).expiresDate.toDate()
          }
        }
      }
    },
    [eO.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eH(eO.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsNoticeBanner)(eL.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eL.PartnerGame.FORTNITE
      })
    },
    [eO.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => N.default.isCurrentQuestInterrupted && null != N.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: N.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eO.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, b.isEligibleForPomelo)() && !eH(eO.NoticeTypes.POMELO_ELIGIBLE) && !(0, U.getForceMigration)()
    },
    [eO.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eH(eO.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, h.isDismissibleContentDismissed)(c.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, S.getShowDropsEndedIncompleteBanner)(eL.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eL.PartnerGame.FORTNITE
      })
    },
    [eO.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, b.isEligibleForPomelo)() && !eH(eO.NoticeTypes.UU_MIGRATION) && (0, U.getForceMigration)()
    },
    [eO.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? en.default.getGuild(t) : null;
        return null != t && null != x.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eO.GuildFeatures.COMMUNITY)) && !eH(eO.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: o()().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = x.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eO.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eH(eO.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== p.default.getEligibleGuildsForNagActivate().length && (0, I.isCreatorMonetizationNagActivateEnabled)()
    },
    [eO.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eH(eO.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, D.shouldShowGuildOnboardingUpsell)(t, c.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eO.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return Y.isEligibleForNotice(t)
      }
    },
    [eO.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = Q.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, M.encodeStreamKey)(e),
          n = V.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eD.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = Q.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, M.encodeStreamKey)(e) : null
        }
      }
    }
  };

function eW() {
  if (!g.default.isConnected()) return !1;
  eF = null;
  let e = e_.default.getCurrentUser();
  if (null == e) return !1;
  let t = ep.default.getPremiumSubscription(),
    n = em.default.isLocalizedPromoEnabled,
    s = eu.default.getGuildId(),
    a = eo.default.getVoiceChannelId(),
    l = null != a ? eT.default.getVoiceStateForChannel(a) : null;
  for (let o of ev.CONFERENCE_MODE_ENABLED ? eY : eV)
    if (null != eK[o] && eK[o].predicate({
        selectedGuildId: s,
        voiceChannelId: a,
        voiceState: l,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var i, r;
      let n = null === (i = (r = eK[o]).metadata) || void 0 === i ? void 0 : i.call(r, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      eF = {
        ...eB,
        type: o,
        metadata: n
      };
      break
    } null != eF && eH(eF.type) && (eF = null)
}

function ez() {
  return !ec.default.enabled && delete eG[eO.NoticeTypes.STREAMER_MODE], eW()
}
class eQ extends(s = u.default.Store) {
  initialize() {
    this.syncWith([ef.default, ei.default, ee.default, eu.default, k.default, eh.default, J.default, $.default, z.default, v.default, V.default, Q.default], eW), this.waitFor(e_.default, ed.default, en.default, et.default, er.default, es.default, ec.default, C.default, eu.default, eE.default, K.default, A.default, ei.default, eg.default, eM.default, eS.default, ea.default, ep.default, eR.default, ee.default, eI.default, el.default, k.default, eN.default, eh.default, $.default, y.default, N.default, p.default, H.default, V.default, Q.default)
  }
  hasNotice() {
    return null != eF && null != eF.type
  }
  getNotice() {
    return null == eE.default.getAction() ? eF : null
  }
  isNoticeDismissed(e) {
    return eH(e)
  }
}
i = "NoticeStore", (l = "displayName") in(a = eQ) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new eQ(E.default, {
  CURRENT_USER_UPDATE: eW,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eW,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eW,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eW,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eW,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eW,
  GUILD_CREATE: eW,
  GUILD_DELETE: eW,
  AUDIO_INPUT_DETECTED: eW,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eW,
  CERTIFIED_DEVICES_SET: eW,
  AUDIO_SET_INPUT_DEVICE: eW,
  AUDIO_SET_OUTPUT_DEVICE: eW,
  MEDIA_ENGINE_DEVICES: eW,
  RTC_CONNECTION_STATE: eW,
  RPC_APP_AUTHENTICATED: eW,
  RPC_APP_DISCONNECTED: eW,
  USER_CONNECTIONS_UPDATE: eW,
  WINDOW_FOCUS: eW,
  INSTANT_INVITE_CREATE: eW,
  INSTANT_INVITE_REVOKE_SUCCESS: eW,
  SPOTIFY_PLAYER_PAUSE: eW,
  RUNNING_GAMES_CHANGE: eW,
  EXPERIMENTS_FETCH_SUCCESS: eW,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eW,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eW,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eW,
  DEVELOPER_TEST_MODE_RESET: eW,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eW,
  DISPATCH_APPLICATION_INSTALL: eW,
  IMPERSONATE_STOP: eW,
  IMPERSONATE_UPDATE: eW,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === q.default.getId() && eW()
  },
  GUILD_MEMBER_UPDATE: eW,
  SURVEY_FETCHED: eW,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eW,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eW,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eW,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eW,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== q.default.getId()
    }) && eW()
  },
  STREAMER_MODE_UPDATE: ez,
  RUNNING_STREAMER_TOOLS_CHANGE: ez,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eG[eO.NoticeTypes.DISPATCH_ERROR], eW()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eG[eO.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eW()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eW()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eW()
  },
  NOTICE_SHOW: function(e) {
    eF = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != eF && (null == e.id || e.id === eF.id) && (ew(eF.type, e.isTemporary, e.untilAtLeast), eW())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ew(t), eW()
  },
  LOGOUT: function() {
    eG = {}, eF = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eW,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eW,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eW,
  PROXY_BLOCKED_REQUEST: eW
})