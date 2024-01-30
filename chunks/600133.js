"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eL
  },
  default: function() {
    return eV
  }
}), n("222007");
var s = n("866227"),
  l = n.n(s),
  a = n("446674"),
  i = n("741397"),
  r = n("151426"),
  o = n("95410"),
  u = n("913144"),
  d = n("363996"),
  c = n("49671"),
  f = n("376556"),
  E = n("299285"),
  _ = n("7331"),
  T = n("889293"),
  I = n("10641"),
  m = n("180273"),
  N = n("579565"),
  p = n("789563"),
  A = n("619443"),
  S = n("875037"),
  C = n("398654"),
  h = n("54346"),
  g = n("681937"),
  M = n("619259"),
  O = n("179803"),
  R = n("38654"),
  L = n("267567"),
  v = n("404931"),
  P = n("128887"),
  D = n("167209"),
  x = n("104032"),
  y = n("897107"),
  U = n("44678"),
  j = n("807345"),
  b = n("840895"),
  G = n("143573"),
  B = n("703537"),
  F = n("662285"),
  k = n("808422"),
  w = n("845579"),
  H = n("374363"),
  V = n("271938"),
  Y = n("250404"),
  K = n("881719"),
  W = n("42203"),
  z = n("47319"),
  Z = n("320268"),
  J = n("26989"),
  Q = n("305961"),
  X = n("42887"),
  q = n("385649"),
  $ = n("957255"),
  ee = n("669280"),
  et = n("945956"),
  en = n("568307"),
  es = n("18494"),
  el = n("162771"),
  ea = n("168851"),
  ei = n("102985"),
  er = n("381684"),
  eo = n("330387"),
  eu = n("697218"),
  ed = n("800762"),
  ec = n("160299"),
  ef = n("357957"),
  eE = n("521012"),
  e_ = n("340412"),
  eT = n("437712"),
  eI = n("167726"),
  em = n("773336"),
  eN = n("719923"),
  ep = n("189459"),
  eA = n("316661"),
  eS = n("352326"),
  eC = n("49111"),
  eh = n("492397"),
  eg = n("411511"),
  eM = n("646718"),
  eO = n("843455"),
  eR = n("353927");
let eL = {
    [eC.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eC.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eC.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eC.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eC.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eC.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eC.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eC.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eC.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eC.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eC.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eC.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eC.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eC.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO
  },
  ev = {
    [eC.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eC.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eC.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eC.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eC.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eC.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eC.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eC.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eC.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eC.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eC.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: "hideEslatamLanguageLaunchNotice"
  },
  eP = new Set([eC.NoticeTypes.NO_INPUT_DETECTED, eC.NoticeTypes.STREAMER_MODE, eC.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eC.NoticeTypes.SPOTIFY_AUTO_PAUSED, eC.NoticeTypes.DISPATCH_ERROR, eC.NoticeTypes.DISPATCH_ERROR, eC.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eC.NoticeTypes.BLOCKED_BY_PROXY]),
  eD = {},
  ex = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  ey = null;

function eU(e) {
  return ev[e] + "-untilAtLeast"
}

function ej(e, t, n) {
  var s, l, a;
  if (null == e) return;
  let i = ev[e];
  if (null != i && !t && o.default.set(i, !0), eP.has(e) && (eD[e] = !0), null != n && null != i) {
    ;
    s = e, l = n, o.default.set(eU(s), l.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    a = e, o.default.remove(eU(a))
  }
}

function eb(e) {
  if (null == e) return !1;
  let t = eL[e];
  if (null != t) return (0, I.isDismissibleContentDismissed)(t);
  let n = ev[e];
  if (null != n) {
    let t = function(e) {
      let t = o.default.get(eU(e));
      return null != t ? l(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(l())
  }
  let s = eD[e];
  return !!s || (null != n && "" !== n ? o.default.get(n) : !!eP.has(e) && s)
}
let eG = [eC.NoticeTypes.QUARANTINED, eC.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eC.NoticeTypes.VIEWING_ROLES, eC.NoticeTypes.INVITED_TO_SPEAK, eC.NoticeTypes.LURKING_GUILD, eC.NoticeTypes.VOICE_DISABLED, eC.NoticeTypes.NO_INPUT_DETECTED, eC.NoticeTypes.HARDWARE_MUTE, eC.NoticeTypes.H264_DISABLED, eC.NoticeTypes.DISPATCH_ERROR, eC.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eC.NoticeTypes.SPOTIFY_AUTO_PAUSED, eC.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eC.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eC.NoticeTypes.BLOCKED_BY_PROXY, eC.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eC.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eC.NoticeTypes.GUILD_RAID_NOTIFICATION, eC.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH, eC.NoticeTypes.UNCLAIMED_ACCOUNT, eC.NoticeTypes.POMELO_ELIGIBLE, eC.NoticeTypes.PENDING_MEMBER, eC.NoticeTypes.OUTBOUND_PROMOTION, eC.NoticeTypes.CORRUPT_INSTALLATION, eC.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eC.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eC.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eC.NoticeTypes.STREAMER_MODE, eC.NoticeTypes.SCHEDULED_MAINTENANCE, eC.NoticeTypes.BOUNCED_EMAIL_DETECTED, eC.NoticeTypes.UNVERIFIED_ACCOUNT, eC.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eC.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eC.NoticeTypes.PREMIUM_UNCANCEL, eC.NoticeTypes.PREMIUM_MISSING_PAYMENT, eC.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eC.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eC.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eC.NoticeTypes.PREMIUM_REACTIVATE, eC.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eC.NoticeTypes.MFA_SMS_BACKUP, eC.NoticeTypes.APPLICATION_TEST_MODE, eC.NoticeTypes.LOCALIZED_PRICING, eC.NoticeTypes.DOWNLOAD_NAG, eC.NoticeTypes.CONNECT_SPOTIFY, eC.NoticeTypes.CONNECT_PLAYSTATION, eC.NoticeTypes.SURVEY, eC.NoticeTypes.SERVER_USAGE_SURVEY, eC.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eC.NoticeTypes.DROPS_GO_LIVE_BANNER, eC.NoticeTypes.DROPS_ENDED_INCOMPLETE, eC.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eC.NoticeTypes.HABITUAL_DND],
  eB = [eC.NoticeTypes.QUARANTINED, eC.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eC.NoticeTypes.VIEWING_ROLES, eC.NoticeTypes.INVITED_TO_SPEAK, eC.NoticeTypes.LURKING_GUILD, eC.NoticeTypes.VOICE_DISABLED, eC.NoticeTypes.NO_INPUT_DETECTED, eC.NoticeTypes.HARDWARE_MUTE, eC.NoticeTypes.H264_DISABLED, eC.NoticeTypes.DISPATCH_ERROR, eC.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eC.NoticeTypes.SPOTIFY_AUTO_PAUSED, eC.NoticeTypes.BLOCKED_BY_PROXY, eC.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eC.NoticeTypes.PENDING_MEMBER, eC.NoticeTypes.STREAMER_MODE, eC.NoticeTypes.SCHEDULED_MAINTENANCE],
  eF = {
    [eC.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, C.shouldShowRaidNotificationNagbar)().show && !eb(eC.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: l().add(3, "hours").toDate()
        };
        return e
      }
    },
    [eC.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = J.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, g.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eC.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eC.UserFlags.QUARANTINED)
      }
    },
    [eC.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return R.default.isViewingRoles(t)
      }
    },
    [eC.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, k.getAudienceRequestToSpeakState)(t) === k.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eC.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && L.default.isLurking(t)
      }
    },
    [eC.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != et.default.getRemoteDisconnectVoiceChannelId()
    },
    [eC.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != et.default.getLastSessionVoiceChannelId()
    },
    [eC.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = W.default.getChannel(t), l = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === X.default.getInputDetected() && !l
      }
    },
    [eC.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = W.default.getChannel(t);
        return !X.default.getOpenH264() && null != t && ed.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eC.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => et.default.isConnected() && X.default.isHardwareMute(),
      metadata: () => {
        let e = X.default.getInputDeviceId(),
          t = K.default.getVendor(e),
          n = K.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [eC.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != ep.default.getLastError(),
      metadata: () => ({
        error: ep.default.getLastError()
      })
    },
    [eC.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eA.default.getLastProgress(),
      metadata: () => eA.default.getLastProgress()
    },
    [eC.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => F.default.wasAutoPaused()
    },
    [eC.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eb(eC.NoticeTypes.BLOCKED_BY_PROXY) && G.default.blockedByProxy && b.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eC.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eC.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: l,
          currentUser: a
        } = e;
        return null !== (s = null != l && null != a && !(null === (t = Q.default.getGuild(l)) || void 0 === t ? void 0 : t.hasFeature(eC.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = J.default.getMember(l, a.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eC.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, U.shouldShowOutboundPromotionNotice)()
    },
    [eC.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => em.isPlatformEmbedded && (!i.default.supported() || eS.default.isCorruptInstallation())
    },
    [eC.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && ed.default.hasVideo(t) && !X.default.supports(eR.Features.VIDEO) && !eb(eC.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eC.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return eN.default.canRedeemPremiumPerks(t) && Z.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => {
        let e = Z.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eC.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eb(eC.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Z.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = Z.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eC.NoticeTypes.STREAMER_MODE]: {
      predicate: () => ei.default.enabled
    },
    [eC.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !em.isPlatformEmbedded && !eb(eC.NoticeTypes.DOWNLOAD_NAG)
    },
    [eC.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != ea.default.getScheduledMaintenance(),
      metadata: () => {
        let e = ea.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [eC.NoticeTypes.SURVEY]: {
      predicate: () => null != er.default.getCurrentSurvey(),
      metadata: () => er.default.getCurrentSurvey()
    },
    [eC.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && S.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eb(eC.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eC.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eC.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eC.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !F.default.hasConnectedAccount() && en.default.isObservedAppRunning(f.default.get(eC.PlatformTypes.SPOTIFY).name) && !eb(eC.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eC.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = y.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === c.default || void 0 === c.default ? void 0 : c.default.os.arch) === "ia32" && (null === c.default || void 0 === c.default ? void 0 : c.default.process.platform) === "win32"
      },
      metadata: () => {
        let e = {
          dismissUntil: l().add(5, "days").toDate()
        };
        return e
      }
    },
    [eC.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => z.default.isSuggestedAccountType(eC.PlatformTypes.PLAYSTATION) && null == z.default.getAccount(null, eC.PlatformTypes.PLAYSTATION) && !eb(eC.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eC.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = e_.default.getAlmostExpiringTrialOffers([eM.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !eb(eC.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [eC.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = e_.default.getAlmostExpiringTrialOffers([eM.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !eb(eC.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [eC.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eC.SubscriptionStatusTypes.CANCELED && 1 >= l().diff(l(t.canceledAt), "days"), i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = null != t && t.status === eC.SubscriptionStatusTypes.CANCELED && !i && s <= 7 && s >= 0 && (0, eN.isPremiumExactly)(n, eM.PremiumTypes.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eb(eC.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eN.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eN.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eC.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? l(t.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != t ? l(t.currentPeriodEnd).diff(l(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && l(t.currentPeriodEnd).isBefore(l()), r = eT.default.applicationIdsFetched.has(eM.PREMIUM_SUBSCRIPTION_APPLICATION), o = eT.default.getForApplication(eM.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, eN.getPremiumPlanItem)(t) : null, d = null != u ? eN.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, f = null != t && s <= (a > 14 ? 7 : 2) && s >= 0 && t.status !== eC.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eb(eC.NoticeTypes.PREMIUM_MISSING_PAYMENT) && f
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? l(n.currentPeriodEnd).diff(l().startOf("day"), "days") : 0, a = null != n ? null === (t = (0, eN.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != a ? eN.default.getPremiumType(a) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eC.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? ef.default.getPaymentSource(t.paymentSourceId) : null, a = null != t && l(t.currentPeriodEnd).isBefore(l()), i = null != t && t.status === eC.SubscriptionStatusTypes.PAST_DUE && !a && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eb(eC.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
    [eC.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && t.status === eC.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eb(eC.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a
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
    [eC.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eC.UserFlags.MFA_SMS) && !t.hasFlag(eC.UserFlags.STAFF) && !t.hasFlag(eC.UserFlags.PARTNER) && !eb(eC.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eC.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != eI.default.testModeApplicationId,
      metadata: () => {
        if (null == eI.default.testModeApplicationId) return {};
        let e = eI.default.testModeApplicationId,
          t = E.default.getApplication(e),
          n = null != t ? t.name : e;
        return {
          applicationName: n,
          applicationId: e
        }
      }
    },
    [eC.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eb(eC.NoticeTypes.PREMIUM_REACTIVATE) && x.default.shouldShowReactivateNotice()
    },
    [eC.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eb(eC.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eC.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && l(t.currentPeriodEnd).isBefore(l()), a = null != t && null != t.paymentSourceId ? ef.default.getPaymentSource(t.paymentSourceId) : null, i = null != a && eO.PREPAID_PAYMENT_SOURCES.has(a.type), r = null != t && t.status === eC.SubscriptionStatusTypes.PAST_DUE && !s && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eb(eC.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e, n = (null == t ? void 0 : t.status) === eC.SubscriptionStatusTypes.PAST_DUE ? l().diff(l(t.currentPeriodStart), "days") : 0, s = l(null == t ? void 0 : t.currentPeriodStart).add((0, eN.getBillingGracePeriodDays)(t), "days").toDate();
        return {
          daysPastDue: n,
          dismissUntil: s
        }
      }
    },
    [eC.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eb(eC.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsNoticeBanner)(eg.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eg.PartnerGame.FORTNITE
      })
    },
    [eC.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => m.default.isCurrentQuestInterrupted && null != m.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: m.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eC.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, D.isEligibleForPomelo)() && !eb(eC.NoticeTypes.POMELO_ELIGIBLE)
    },
    [eC.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eb(eC.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, I.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, N.getShowDropsEndedIncompleteBanner)(eg.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eg.PartnerGame.FORTNITE
      })
    },
    [eC.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? Q.default.getGuild(t) : null;
        return null != t && null != M.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eC.GuildFeatures.COMMUNITY)) && !eb(eC.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: l().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = M.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eC.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eb(eC.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== T.default.getEligibleGuildsForNagActivate().length && (0, _.isCreatorMonetizationNagActivateEnabled)()
    },
    [eC.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eb(eC.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, O.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eC.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return B.isEligibleForNotice(t)
      }
    },
    [eC.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH]: {
      predicate: () => d.ESLatamLaunchExperiment.getCurrentConfig({
        location: "notice_store"
      }).enabled && !eb(eC.NoticeTypes.ESLATAM_LANGUAGE_LAUNCH)
    },
    [eC.NoticeTypes.HABITUAL_DND]: {
      predicate: () => v.default.showNagBar() && !w.QuietMode.getSetting() && P.QuietModeExperiment.getCurrentConfig({
        location: "notice_store"
      }).allowQuietMode
    }
  };

function ek() {
  if (!A.default.isConnected()) return !1;
  ey = null;
  let e = eu.default.getCurrentUser();
  if (null == e) return !1;
  let t = eE.default.getPremiumSubscription(),
    n = ec.default.isLocalizedPromoEnabled,
    s = el.default.getGuildId(),
    l = es.default.getVoiceChannelId(),
    a = null != l ? ed.default.getVoiceStateForChannel(l) : null,
    i = eh.CONFERENCE_MODE_ENABLED ? eB : eG;
  for (let u of i)
    if (null != eF[u] && eF[u].predicate({
        selectedGuildId: s,
        voiceChannelId: l,
        voiceState: a,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = eF[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      ey = {
        ...ex,
        type: u,
        metadata: n
      };
      break
    } null != ey && eb(ey.type) && (ey = null)
}

function ew() {
  return !ei.default.enabled && delete eD[eC.NoticeTypes.STREAMER_MODE], ek()
}
class eH extends a.default.Store {
  initialize() {
    this.syncWith([er.default, ee.default, Z.default, el.default, j.default, e_.default, Y.default, z.default, H.default, h.default, v.default], ek), this.waitFor(eu.default, ea.default, Q.default, J.default, et.default, X.default, ei.default, p.default, el.default, eo.default, F.default, en.default, ee.default, ep.default, eA.default, eI.default, q.default, eE.default, eS.default, Z.default, ef.default, $.default, j.default, eT.default, e_.default, z.default, L.default, m.default, T.default, G.default)
  }
  hasNotice() {
    return null != ey && null != ey.type
  }
  getNotice() {
    return null == eo.default.getAction() ? ey : null
  }
  isNoticeDismissed(e) {
    return eb(e)
  }
}
eH.displayName = "NoticeStore";
var eV = new eH(u.default, {
  CURRENT_USER_UPDATE: ek,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: ek,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ek,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ek,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: ek,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ek,
  GUILD_CREATE: ek,
  GUILD_DELETE: ek,
  AUDIO_INPUT_DETECTED: ek,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: ek,
  CERTIFIED_DEVICES_SET: ek,
  AUDIO_SET_INPUT_DEVICE: ek,
  AUDIO_SET_OUTPUT_DEVICE: ek,
  MEDIA_ENGINE_DEVICES: ek,
  RTC_CONNECTION_STATE: ek,
  RPC_APP_AUTHENTICATED: ek,
  RPC_APP_DISCONNECTED: ek,
  USER_CONNECTIONS_UPDATE: ek,
  WINDOW_FOCUS: ek,
  INSTANT_INVITE_CREATE: ek,
  INSTANT_INVITE_REVOKE_SUCCESS: ek,
  SPOTIFY_PLAYER_PAUSE: ek,
  RUNNING_GAMES_CHANGE: ek,
  EXPERIMENTS_FETCH_SUCCESS: ek,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ek,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ek,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ek,
  DEVELOPER_TEST_MODE_RESET: ek,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: ek,
  DISPATCH_APPLICATION_INSTALL: ek,
  IMPERSONATE_STOP: ek,
  IMPERSONATE_UPDATE: ek,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === V.default.getId() && ek()
  },
  GUILD_MEMBER_UPDATE: ek,
  SURVEY_FETCHED: ek,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ek,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ek,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ek,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ek,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== V.default.getId()
    }) && ek()
  },
  STREAMER_MODE_UPDATE: ew,
  RUNNING_STREAMER_TOOLS_CHANGE: ew,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete eD[eC.NoticeTypes.DISPATCH_ERROR], ek()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete eD[eC.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], ek()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return ek()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return ek()
  },
  NOTICE_SHOW: function(e) {
    ey = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != ey && (null == e.id || e.id === ey.id) && (ej(ey.type, e.isTemporary, e.untilAtLeast), ek())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return ej(t), ek()
  },
  LOGOUT: function() {
    eD = {}, ey = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: ek,
  AUTO_MODERATION_MENTION_RAID_DETECTION: ek,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ek,
  PROXY_BLOCKED_REQUEST: ek
})