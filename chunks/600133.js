"use strict";
n.r(t), n.d(t, {
  typeToDismissibleContent: function() {
    return eP
  },
  default: function() {
    return eK
  }
}), n("222007");
var s = n("866227"),
  a = n.n(s),
  l = n("446674"),
  i = n("741397"),
  r = n("151426"),
  o = n("95410"),
  u = n("913144"),
  d = n("49671"),
  c = n("376556"),
  E = n("299285"),
  f = n("7331"),
  _ = n("889293"),
  T = n("10641"),
  I = n("180273"),
  m = n("579565"),
  N = n("789563"),
  p = n("161454"),
  S = n("619443"),
  C = n("374014"),
  A = n("875037"),
  h = n("398654"),
  g = n("54346"),
  M = n("681937"),
  O = n("619259"),
  R = n("179803"),
  L = n("38654"),
  v = n("267567"),
  P = n("42060"),
  D = n("167209"),
  x = n("104032"),
  y = n("983424"),
  U = n("897107"),
  j = n("44678"),
  b = n("807345"),
  G = n("840895"),
  B = n("143573"),
  k = n("2973"),
  F = n("703537"),
  w = n("662285"),
  H = n("808422"),
  V = n("374363"),
  Y = n("373469"),
  K = n("271938"),
  W = n("250404"),
  z = n("533222"),
  Q = n("42203"),
  Z = n("47319"),
  J = n("320268"),
  q = n("26989"),
  X = n("305961"),
  $ = n("42887"),
  ee = n("385649"),
  et = n("957255"),
  en = n("669280"),
  es = n("945956"),
  ea = n("18494"),
  el = n("162771"),
  ei = n("168851"),
  er = n("102985"),
  eo = n("381684"),
  eu = n("330387"),
  ed = n("697218"),
  ec = n("800762"),
  eE = n("160299"),
  ef = n("357957"),
  e_ = n("521012"),
  eT = n("340412"),
  eI = n("437712"),
  em = n("167726"),
  eN = n("773336"),
  ep = n("719923"),
  eS = n("189459"),
  eC = n("316661"),
  eA = n("352326"),
  eh = n("49111"),
  eg = n("492397"),
  eM = n("411511"),
  eO = n("646718"),
  eR = n("166604"),
  eL = n("843455"),
  ev = n("353927");
let eP = {
    [eh.NoticeTypes.LOCALIZED_PRICING]: r.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING,
    [eh.NoticeTypes.DOWNLOAD_NAG]: r.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD,
    [eh.NoticeTypes.CONNECT_SPOTIFY]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY,
    [eh.NoticeTypes.CONNECT_PLAYSTATION]: r.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
    [eh.NoticeTypes.MFA_SMS_BACKUP]: r.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP,
    [eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
    [eh.NoticeTypes.PREMIUM_REACTIVATE]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
    [eh.NoticeTypes.DROPS_GO_LIVE_BANNER]: r.DismissibleContent.QUEST_2_GO_LIVE_BANNER,
    [eh.NoticeTypes.DROPS_ENDED_INCOMPLETE]: r.DismissibleContent.QUEST_2_ENDED_INCOMPLETE,
    [eh.NoticeTypes.BOUNCED_EMAIL_DETECTED]: r.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE,
    [eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: r.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
    [eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: r.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
    [eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR,
    [eh.NoticeTypes.POMELO_ELIGIBLE]: r.DismissibleContent.NAGBAR_NOTICE_POMELO,
    [eh.NoticeTypes.UU_MIGRATION]: r.DismissibleContent.UU_MIGRATION_NOTICE
  },
  eD = {
    [eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: "hideDetectedOffPlatformPremiumPerkUpsell",
    [eh.NoticeTypes.PREMIUM_UNCANCEL]: "hideUncancelReminder",
    [eh.NoticeTypes.PREMIUM_MISSING_PAYMENT]: "hideMissingPaymentReminder",
    [eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: "hidePastDueMissingPaymentReminder",
    [eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: "hidePastDueInvalidPaymentReminder",
    [eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: "hidePastDueOneTimePaymentReminder",
    [eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: "hideAutoModerationMentionRaidDetectionNotice",
    [eh.NoticeTypes.GUILD_RAID_NOTIFICATION]: "hideGuildRaidDetectionNotice",
    [eh.NoticeTypes.SERVER_USAGE_SURVEY]: "hideServerUsageSurvey",
    [eh.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: "hideWin32DeprecationMessageNotice",
    [eh.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: "hideWin78DeprecationMessageNotice",
    [eh.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: "hideMacOS17_18DeprecationMessageNotice",
    [eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: "hidePremiumTier2TrialOfferEndingNotice"
  },
  ex = new Set([eh.NoticeTypes.NO_INPUT_DETECTED, eh.NoticeTypes.STREAMER_MODE, eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eh.NoticeTypes.SPOTIFY_AUTO_PAUSED, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eh.NoticeTypes.BLOCKED_BY_PROXY]),
  ey = {},
  eU = Object.freeze({
    id: null,
    message: null,
    buttonText: null,
    callback: void 0,
    metadata: null
  }),
  ej = null;

function eb(e) {
  return eD[e] + "-untilAtLeast"
}

function eG(e, t, n) {
  var s, a, l;
  if (null == e) return;
  let i = eD[e];
  if (null != i && !t && o.Storage.set(i, !0), ex.has(e) && (ey[e] = !0), null != n && null != i) {
    ;
    s = e, a = n, o.Storage.set(eb(s), a.format("YYYY-MM-DDTHH:mm:ss.SSSZ"))
  } else {
    ;
    l = e, o.Storage.remove(eb(l))
  }
}

function eB(e) {
  if (null == e) return !1;
  let t = function(e) {
    let {
      enabled: t
    } = y.PremiumTier2TrialOfferNoticeExperiment.getCurrentConfig({
      location: "NoticeStore_isNoticeDismissed"
    }, {
      autoTrackExposure: !0,
      disable: e !== eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING
    });
    return t ? null : eP[e]
  }(e);
  if (null != t) return (0, T.isDismissibleContentDismissed)(t);
  let n = eD[e];
  if (null != n) {
    let t = function(e) {
      let t = o.Storage.get(eb(e));
      return null != t ? a(t) : null
    }(e);
    if (null != t) return null == t ? void 0 : t.isAfter(a())
  }
  let s = ey[e];
  return !!s || (null != n && "" !== n ? o.Storage.get(n) : !!ex.has(e) && s)
}
let ek = [eh.NoticeTypes.QUARANTINED, eh.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eh.NoticeTypes.VIEWING_ROLES, eh.NoticeTypes.INVITED_TO_SPEAK, eh.NoticeTypes.LURKING_GUILD, eh.NoticeTypes.VOICE_DISABLED, eh.NoticeTypes.NO_INPUT_DETECTED, eh.NoticeTypes.HARDWARE_MUTE, eh.NoticeTypes.H264_DISABLED, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eh.NoticeTypes.SPOTIFY_AUTO_PAUSED, eh.NoticeTypes.DROPS_PROGRESS_INTERRUPTION, eh.NoticeTypes.WIN32_DEPRECATED_MESSAGE, eh.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE, eh.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE, eh.NoticeTypes.BLOCKED_BY_PROXY, eh.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION, eh.NoticeTypes.GUILD_RAID_NOTIFICATION, eh.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION, eh.NoticeTypes.UNCLAIMED_ACCOUNT, eh.NoticeTypes.POMELO_ELIGIBLE, eh.NoticeTypes.PENDING_MEMBER, eh.NoticeTypes.OUTBOUND_PROMOTION, eh.NoticeTypes.CORRUPT_INSTALLATION, eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER, eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eh.NoticeTypes.STREAMER_MODE, eh.NoticeTypes.SCHEDULED_MAINTENANCE, eh.NoticeTypes.BOUNCED_EMAIL_DETECTED, eh.NoticeTypes.UNVERIFIED_ACCOUNT, eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING, eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING, eh.NoticeTypes.PREMIUM_UNCANCEL, eh.NoticeTypes.PREMIUM_MISSING_PAYMENT, eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT, eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT, eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eh.NoticeTypes.PREMIUM_REACTIVATE, eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION, eh.NoticeTypes.MFA_SMS_BACKUP, eh.NoticeTypes.APPLICATION_TEST_MODE, eh.NoticeTypes.LOCALIZED_PRICING, eh.NoticeTypes.DOWNLOAD_NAG, eh.NoticeTypes.CONNECT_SPOTIFY, eh.NoticeTypes.CONNECT_PLAYSTATION, eh.NoticeTypes.SURVEY, eh.NoticeTypes.SERVER_USAGE_SURVEY, eh.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR, eh.NoticeTypes.DROPS_GO_LIVE_BANNER, eh.NoticeTypes.DROPS_ENDED_INCOMPLETE, eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR, eh.NoticeTypes.UU_MIGRATION],
  eF = [eh.NoticeTypes.QUARANTINED, eh.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE, eh.NoticeTypes.VIEWING_ROLES, eh.NoticeTypes.INVITED_TO_SPEAK, eh.NoticeTypes.LURKING_GUILD, eh.NoticeTypes.VOICE_DISABLED, eh.NoticeTypes.NO_INPUT_DETECTED, eh.NoticeTypes.HARDWARE_MUTE, eh.NoticeTypes.H264_DISABLED, eh.NoticeTypes.DISPATCH_ERROR, eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS, eh.NoticeTypes.SPOTIFY_AUTO_PAUSED, eh.NoticeTypes.BLOCKED_BY_PROXY, eh.NoticeTypes.VOICE_CONNECTED_LAST_SESSION, eh.NoticeTypes.PENDING_MEMBER, eh.NoticeTypes.STREAMER_MODE, eh.NoticeTypes.SCHEDULED_MAINTENANCE],
  ew = {
    [eh.NoticeTypes.GUILD_RAID_NOTIFICATION]: {
      predicate: () => (0, h.shouldShowRaidNotificationNagbar)().show && !eB(eh.NoticeTypes.GUILD_RAID_NOTIFICATION),
      metadata: () => {
        let e = {
          dismissUntil: a().add(3, "hours").toDate()
        };
        return e
      }
    },
    [eh.NoticeTypes.AUTOMOD_QUARANTINED_USER_PROFILE]: {
      predicate: e => {
        let {
          currentUser: t,
          selectedGuildId: n
        } = e;
        if (null == n) return !1;
        let s = q.default.getMember(n, t.id);
        return null != s && !s.isPending && (0, M.hasAutomodQuarantinedProfile)(s)
      }
    },
    [eh.NoticeTypes.QUARANTINED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return t.hasFlag(eh.UserFlags.QUARANTINED)
      }
    },
    [eh.NoticeTypes.VIEWING_ROLES]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return L.default.isViewingRoles(t)
      }
    },
    [eh.NoticeTypes.INVITED_TO_SPEAK]: {
      predicate: e => {
        let {
          voiceState: t
        } = e;
        return (0, H.getAudienceRequestToSpeakState)(t) === H.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
      }
    },
    [eh.NoticeTypes.LURKING_GUILD]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && v.default.isLurking(t)
      }
    },
    [eh.NoticeTypes.VOICE_DISABLED]: {
      predicate: () => null != es.default.getRemoteDisconnectVoiceChannelId()
    },
    [eh.NoticeTypes.VOICE_CONNECTED_LAST_SESSION]: {
      predicate: () => null != es.default.getLastSessionVoiceChannelId()
    },
    [eh.NoticeTypes.NO_INPUT_DETECTED]: {
      predicate: e => {
        let {
          voiceChannelId: t,
          voiceState: n
        } = e, s = Q.default.getChannel(t), a = (null == s ? void 0 : s.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
        return !1 === $.default.getInputDetected() && !a
      }
    },
    [eh.NoticeTypes.H264_DISABLED]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e, n = Q.default.getChannel(t);
        return !$.default.getOpenH264() && null != t && ec.default.hasVideo(t) && null != n && n.isGuildStageVoice()
      }
    },
    [eh.NoticeTypes.HARDWARE_MUTE]: {
      predicate: () => es.default.isConnected() && $.default.isHardwareMute(),
      metadata: () => {
        let e = $.default.getInputDeviceId(),
          t = z.default.getVendor(e),
          n = z.default.getModel(e);
        if (null != t && null != n) return {
          vendor: t,
          model: n
        }
      }
    },
    [eh.NoticeTypes.DISPATCH_ERROR]: {
      predicate: () => null != eS.default.getLastError(),
      metadata: () => ({
        error: eS.default.getLastError()
      })
    },
    [eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
      predicate: () => null != eC.default.getLastProgress(),
      metadata: () => eC.default.getLastProgress()
    },
    [eh.NoticeTypes.SPOTIFY_AUTO_PAUSED]: {
      predicate: () => w.default.wasAutoPaused()
    },
    [eh.NoticeTypes.BLOCKED_BY_PROXY]: {
      predicate: () => !eB(eh.NoticeTypes.BLOCKED_BY_PROXY) && B.default.blockedByProxy && G.default.getCurrentConfig({
        location: "notice_store"
      }).eligibleForNotice
    },
    [eh.NoticeTypes.UNCLAIMED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && !t.isClaimed()
      }
    },
    [eh.NoticeTypes.PENDING_MEMBER]: {
      predicate: e => {
        var t, n, s;
        let {
          selectedGuildId: a,
          currentUser: l
        } = e;
        return null !== (s = null != a && null != l && !(null === (t = X.default.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eh.GuildFeatures.GUILD_ONBOARDING)) && (null === (n = q.default.getMember(a, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== s && s
      }
    },
    [eh.NoticeTypes.OUTBOUND_PROMOTION]: {
      predicate: () => (0, j.shouldShowOutboundPromotionNotice)()
    },
    [eh.NoticeTypes.CORRUPT_INSTALLATION]: {
      predicate: () => eN.isPlatformEmbedded && (!i.default.supported() || eA.default.isCorruptInstallation())
    },
    [eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER]: {
      predicate: e => {
        let {
          voiceChannelId: t
        } = e;
        return null != t && ec.default.hasVideo(t) && !$.default.supports(ev.Features.VIDEO) && !eB(eh.NoticeTypes.VIDEO_UNSUPPORTED_BROWSER)
      }
    },
    [eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return ep.default.canRedeemPremiumPerks(t) && J.default.getDetectedOffPlatformPremiumPerks().length > 0
      },
      metadata: () => {
        let e = J.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
      predicate: () => !eB(eh.NoticeTypes.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && J.default.getDetectedOffPlatformPremiumPerks().length > 0,
      metadata: () => {
        let e = J.default.getDetectedOffPlatformPremiumPerks();
        return e[0]
      }
    },
    [eh.NoticeTypes.STREAMER_MODE]: {
      predicate: () => er.default.enabled
    },
    [eh.NoticeTypes.DOWNLOAD_NAG]: {
      predicate: () => !eN.isPlatformEmbedded && !eB(eh.NoticeTypes.DOWNLOAD_NAG)
    },
    [eh.NoticeTypes.SCHEDULED_MAINTENANCE]: {
      predicate: () => null != ei.default.getScheduledMaintenance(),
      metadata: () => {
        let e = ei.default.getScheduledMaintenance();
        if (null != e) return {
          id: e.id,
          start: new Date(e.scheduled_for),
          end: new Date(e.scheduled_until)
        }
      }
    },
    [eh.NoticeTypes.SURVEY]: {
      predicate: () => null != eo.default.getCurrentSurvey(),
      metadata: () => eo.default.getCurrentSurvey()
    },
    [eh.NoticeTypes.SERVER_USAGE_SURVEY]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return null != t && A.default.getCurrentConfig({
          location: "notice_store"
        }).showSurvey && !eB(eh.NoticeTypes.SERVER_USAGE_SURVEY)
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
    [eh.NoticeTypes.UNVERIFIED_ACCOUNT]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return (null == t ? void 0 : t.email) != null && !t.verified
      }
    },
    [eh.NoticeTypes.BOUNCED_EMAIL_DETECTED]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null == t ? void 0 : t.hasBouncedEmail
      }
    },
    [eh.NoticeTypes.CONNECT_SPOTIFY]: {
      predicate: () => !w.default.hasConnectedAccount() && p.default.isObservedAppRunning(c.default.get(eh.PlatformTypes.SPOTIFY).name) && !eB(eh.NoticeTypes.CONNECT_SPOTIFY)
    },
    [eh.NoticeTypes.WIN32_DEPRECATED_MESSAGE]: {
      predicate: () => {
        let {
          enabled: e
        } = U.default.getCurrentConfig({
          location: "window32_deprecation_message"
        });
        return e && (null === d.default || void 0 === d.default ? void 0 : d.default.os.arch) === "ia32" && (null === d.default || void 0 === d.default ? void 0 : d.default.process.platform) === "win32"
      },
      metadata: () => {
        let e = {
          dismissUntil: a().add(5, "days").toDate()
        };
        return e
      }
    },
    [eh.NoticeTypes.WIN7_8_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === d.default || void 0 === d.default ? void 0 : d.default.process.platform) === "win32") try {
          let e = parseInt(null === d.default || void 0 === d.default ? void 0 : d.default.os.release.split(".")[0]);
          return e < 10
        } catch (e) {}
        return !1
      },
      metadata: () => {
        let e = {
          dismissUntil: a().add(5, "days").toDate()
        };
        return e
      }
    },
    [eh.NoticeTypes.MACOS_17_18_DEPRECATED_MESSAGE]: {
      predicate: () => {
        if ((null === d.default || void 0 === d.default ? void 0 : d.default.process.platform) === "darwin") try {
          let e = parseInt(null === d.default || void 0 === d.default ? void 0 : d.default.os.release.split(".")[0]);
          return e < 19
        } catch (e) {}
        return !1
      },
      metadata: () => {
        let e = {
          dismissUntil: a().add(5, "days").toDate()
        };
        return e
      }
    },
    [eh.NoticeTypes.CONNECT_PLAYSTATION]: {
      predicate: () => Z.default.isSuggestedAccountType(eh.PlatformTypes.PLAYSTATION) && null == Z.default.getAccount(null, eh.PlatformTypes.PLAYSTATION) && !eB(eh.NoticeTypes.CONNECT_PLAYSTATION)
    },
    [eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING]: {
      predicate: () => {
        let e = eT.default.getAlmostExpiringTrialOffers([eO.PremiumSubscriptionSKUs.TIER_2]);
        return e.length > 0 && !eB(eh.NoticeTypes.PREMIUM_TIER_2_TRIAL_ENDING)
      }
    },
    [eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING]: {
      predicate: () => {
        let e = eT.default.getAlmostExpiringTrialOffers([eO.PremiumSubscriptionSKUs.TIER_0]);
        return e.length > 0 && !eB(eh.NoticeTypes.PREMIUM_TIER_0_TRIAL_ENDING)
      }
    },
    [eh.NoticeTypes.PREMIUM_UNCANCEL]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, l = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eh.SubscriptionStatusTypes.CANCELED && 1 >= a().diff(a(t.canceledAt), "days"), i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = null != t && t.status === eh.SubscriptionStatusTypes.CANCELED && !i && s <= 7 && s >= 0 && (0, ep.isPremiumExactly)(n, eO.PremiumTypes.TIER_2) && !l && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eB(eh.NoticeTypes.PREMIUM_UNCANCEL) && r
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? a(n.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, l = null != n ? null === (t = (0, ep.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != l ? ep.default.getPremiumType(l) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eh.NoticeTypes.PREMIUM_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t ? a(t.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, l = null != t ? a(t.currentPeriodEnd).diff(a(t.currentPeriodStart).startOf("day"), "days") : 0, i = null != t && a(t.currentPeriodEnd).isBefore(a()), r = eI.default.applicationIdsFetched.has(eO.PREMIUM_SUBSCRIPTION_APPLICATION), o = eI.default.getForApplication(eO.PREMIUM_SUBSCRIPTION_APPLICATION), u = null != t ? (0, ep.getPremiumPlanItem)(t) : null, d = null != u ? ep.default.getSkuIdForPlan(u.planId) : null, c = null != o && null != u && Array.from(o).filter(e => {
          let {
            skuId: t,
            consumed: n
          } = e;
          return !n && t === d
        }).length > 0, E = null != t && s <= (l > 14 ? 7 : 2) && s >= 0 && t.status !== eh.SubscriptionStatusTypes.PAST_DUE && !i && r && !c && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eB(eh.NoticeTypes.PREMIUM_MISSING_PAYMENT) && E
      },
      metadata: e => {
        var t;
        let {
          premiumSubscription: n
        } = e, s = null != n ? a(n.currentPeriodEnd).diff(a().startOf("day"), "days") : 0, l = null != n ? null === (t = (0, ep.getPremiumPlanItem)(n)) || void 0 === t ? void 0 : t.planId : null, i = null != l ? ep.default.getPremiumType(l) : null;
        return {
          daysLeft: s,
          premiumType: i,
          premiumSubscription: n
        }
      }
    },
    [eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && null != t.paymentSourceId ? ef.default.getPaymentSource(t.paymentSourceId) : null, l = null != t && a(t.currentPeriodEnd).isBefore(a()), i = null != t && t.status === eh.SubscriptionStatusTypes.PAST_DUE && !l && null != s && s.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eB(eh.NoticeTypes.PREMIUM_PAST_DUE_INVALID_PAYMENT) && i
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
    [eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && a(t.currentPeriodEnd).isBefore(a()), l = null != t && t.status === eh.SubscriptionStatusTypes.PAST_DUE && !s && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eB(eh.NoticeTypes.PREMIUM_PAST_DUE_MISSING_PAYMENT) && l
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
    [eh.NoticeTypes.MFA_SMS_BACKUP]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return null != t && t.mfaEnabled && !t.hasFlag(eh.UserFlags.MFA_SMS) && !t.hasFlag(eh.UserFlags.STAFF) && !t.hasFlag(eh.UserFlags.PARTNER) && !eB(eh.NoticeTypes.MFA_SMS_BACKUP)
      }
    },
    [eh.NoticeTypes.APPLICATION_TEST_MODE]: {
      predicate: () => null != em.default.testModeApplicationId,
      metadata: () => {
        if (null == em.default.testModeApplicationId) return {};
        let e = em.default.testModeApplicationId,
          t = E.default.getApplication(e),
          n = null != t ? t.name : e;
        return {
          applicationName: n,
          applicationId: e
        }
      }
    },
    [eh.NoticeTypes.PREMIUM_REACTIVATE]: {
      predicate: () => !eB(eh.NoticeTypes.PREMIUM_REACTIVATE) && x.default.shouldShowReactivateNotice()
    },
    [eh.NoticeTypes.LOCALIZED_PRICING]: {
      predicate: e => {
        let {
          isLocalizedPromoEnabled: t
        } = e;
        return !eB(eh.NoticeTypes.LOCALIZED_PRICING) && t
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
    [eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
      predicate: e => {
        let {
          premiumSubscription: t,
          currentUser: n
        } = e, s = null != t && a(t.currentPeriodEnd).isBefore(a()), l = null != t && null != t.paymentSourceId ? ef.default.getPaymentSource(t.paymentSourceId) : null, i = null != l && eL.PREPAID_PAYMENT_SOURCES.has(l.type), r = null != t && t.status === eh.SubscriptionStatusTypes.PAST_DUE && !s && i && !n.hasFreePremium() && !t.isPurchasedExternally;
        return !eB(eh.NoticeTypes.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && r
      },
      metadata: e => {
        let {
          premiumSubscription: t
        } = e;
        if (null == t) return {
          daysPastDue: 0,
          dismissUntil: a().toDate()
        };
        {
          let e = t.status === eh.SubscriptionStatusTypes.PAST_DUE ? a().diff(t.currentPeriodStart, "days") : 0,
            n = (0, ep.getBillingGracePeriodDaysAndExpiresDate)(t).expiresDate.toDate();
          return {
            daysPastDue: e,
            dismissUntil: n
          }
        }
      }
    },
    [eh.NoticeTypes.DROPS_GO_LIVE_BANNER]: {
      predicate: () => !eB(eh.NoticeTypes.DROPS_GO_LIVE_BANNER) && (0, T.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, T.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, m.getShowDropsNoticeBanner)(eM.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eM.PartnerGame.FORTNITE
      })
    },
    [eh.NoticeTypes.DROPS_PROGRESS_INTERRUPTION]: {
      predicate: () => I.default.isCurrentQuestInterrupted && null != I.default.currentDropQuestGameTitle,
      metadata: () => ({
        gameTitle: I.default.currentDropQuestGameTitle,
        reloadCallback: () => window.location.reload(!0)
      })
    },
    [eh.NoticeTypes.POMELO_ELIGIBLE]: {
      predicate: () => (0, D.isEligibleForPomelo)() && !eB(eh.NoticeTypes.POMELO_ELIGIBLE) && !(0, P.getForceMigration)()
    },
    [eh.NoticeTypes.DROPS_ENDED_INCOMPLETE]: {
      predicate: () => !eB(eh.NoticeTypes.DROPS_ENDED_INCOMPLETE) && (0, T.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, T.isDismissibleContentDismissed)(r.DismissibleContent.QUEST_2_COMPLETION_TOOLTIP) && (0, m.getShowDropsEndedIncompleteBanner)(eM.PartnerGame.FORTNITE),
      metadata: () => ({
        partnerGame: eM.PartnerGame.FORTNITE
      })
    },
    [eh.NoticeTypes.UU_MIGRATION]: {
      predicate: () => (0, D.isEligibleForPomelo)() && !eB(eh.NoticeTypes.UU_MIGRATION) && (0, P.getForceMigration)()
    },
    [eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e, n = null != t ? X.default.getGuild(t) : null;
        return null != t && null != O.default.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eh.GuildFeatures.COMMUNITY)) && !eB(eh.NoticeTypes.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1
      },
      metadata: e => {
        let {
          selectedGuildId: t
        } = e, n = {
          dismissUntil: a().add(2, "hours").toDate()
        };
        if (null != t) {
          let e = O.default.getMentionRaidDetected(t);
          null != e && (n.decisionId = e.decisionId)
        }
        return n
      }
    },
    [eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION]: {
      predicate: () => !eB(eh.NoticeTypes.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== _.default.getEligibleGuildsForNagActivate().length && (0, f.isCreatorMonetizationNagActivateEnabled)()
    },
    [eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
      predicate: e => {
        let {
          selectedGuildId: t
        } = e;
        return !eB(eh.NoticeTypes.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, R.shouldShowGuildOnboardingUpsell)(t, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    },
    [eh.NoticeTypes.SAFETY_USER_SENTIMENT_NAGBAR]: {
      predicate: e => {
        let {
          currentUser: t
        } = e;
        return F.isEligibleForNotice(t)
      }
    },
    [eh.NoticeTypes.QUESTS_PROGRESS_INTERRUPTION]: {
      predicate: () => {
        let e = Y.default.getCurrentUserActiveStream();
        if (null == e) return !1;
        let t = (0, C.encodeStreamKey)(e),
          n = k.default.getStreamHeartbeatFailure(t);
        return null != n && Date.now() - n.firstFailedAt >= eR.CONSECUTIVE_HEARTBEAT_PERIOD_MS
      },
      metadata: () => {
        let e = Y.default.getCurrentUserActiveStream();
        return {
          streamKey: null != e ? (0, C.encodeStreamKey)(e) : null
        }
      }
    }
  };

function eH() {
  if (!S.default.isConnected()) return !1;
  ej = null;
  let e = ed.default.getCurrentUser();
  if (null == e) return !1;
  let t = e_.default.getPremiumSubscription(),
    n = eE.default.isLocalizedPromoEnabled,
    s = el.default.getGuildId(),
    a = ea.default.getVoiceChannelId(),
    l = null != a ? ec.default.getVoiceStateForChannel(a) : null,
    i = eg.CONFERENCE_MODE_ENABLED ? eF : ek;
  for (let u of i)
    if (null != ew[u] && ew[u].predicate({
        selectedGuildId: s,
        voiceChannelId: a,
        voiceState: l,
        currentUser: e,
        premiumSubscription: t,
        isLocalizedPromoEnabled: n
      })) {
      var r, o;
      let n = null === (r = (o = ew[u]).metadata) || void 0 === r ? void 0 : r.call(o, {
        currentUser: e,
        premiumSubscription: t,
        selectedGuildId: s
      });
      ej = {
        ...eU,
        type: u,
        metadata: n
      };
      break
    } null != ej && eB(ej.type) && (ej = null)
}

function eV() {
  return !er.default.enabled && delete ey[eh.NoticeTypes.STREAMER_MODE], eH()
}
class eY extends l.default.Store {
  initialize() {
    this.syncWith([eo.default, en.default, J.default, el.default, b.default, eT.default, W.default, Z.default, V.default, g.default, k.default, Y.default], eH), this.waitFor(ed.default, ei.default, X.default, q.default, es.default, $.default, er.default, N.default, el.default, eu.default, w.default, p.default, en.default, eS.default, eC.default, em.default, ee.default, e_.default, eA.default, J.default, ef.default, et.default, b.default, eI.default, eT.default, Z.default, v.default, I.default, _.default, B.default, k.default, Y.default)
  }
  hasNotice() {
    return null != ej && null != ej.type
  }
  getNotice() {
    return null == eu.default.getAction() ? ej : null
  }
  isNoticeDismissed(e) {
    return eB(e)
  }
}
eY.displayName = "NoticeStore";
var eK = new eY(u.default, {
  CURRENT_USER_UPDATE: eH,
  MEDIA_ENGINE_SET_AUDIO_ENABLED: eH,
  CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eH,
  CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eH,
  STATUS_PAGE_SCHEDULED_MAINTENANCE: eH,
  STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eH,
  GUILD_CREATE: eH,
  GUILD_DELETE: eH,
  AUDIO_INPUT_DETECTED: eH,
  AUDIO_SET_DISPLAY_SILENCE_WARNING: eH,
  CERTIFIED_DEVICES_SET: eH,
  AUDIO_SET_INPUT_DEVICE: eH,
  AUDIO_SET_OUTPUT_DEVICE: eH,
  MEDIA_ENGINE_DEVICES: eH,
  RTC_CONNECTION_STATE: eH,
  RPC_APP_AUTHENTICATED: eH,
  RPC_APP_DISCONNECTED: eH,
  USER_CONNECTIONS_UPDATE: eH,
  WINDOW_FOCUS: eH,
  INSTANT_INVITE_CREATE: eH,
  INSTANT_INVITE_REVOKE_SUCCESS: eH,
  SPOTIFY_PLAYER_PAUSE: eH,
  RUNNING_GAMES_CHANGE: eH,
  EXPERIMENTS_FETCH_SUCCESS: eH,
  PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eH,
  DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eH,
  DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eH,
  DEVELOPER_TEST_MODE_RESET: eH,
  BILLING_SUBSCRIPTION_FETCH_SUCCESS: eH,
  DISPATCH_APPLICATION_INSTALL: eH,
  IMPERSONATE_STOP: eH,
  IMPERSONATE_UPDATE: eH,
  GUILD_MEMBER_ADD: function(e) {
    return e.user.id === K.default.getId() && eH()
  },
  GUILD_MEMBER_UPDATE: eH,
  SURVEY_FETCHED: eH,
  ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eH,
  BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eH,
  BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eH,
  BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eH,
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.some(e => {
      let {
        userId: t
      } = e;
      return t !== K.default.getId()
    }) && eH()
  },
  STREAMER_MODE_UPDATE: eV,
  RUNNING_STREAMER_TOOLS_CHANGE: eV,
  DISPATCH_APPLICATION_ERROR: function() {
    return delete ey[eh.NoticeTypes.DISPATCH_ERROR], eH()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_START: function() {
    return delete ey[eh.NoticeTypes.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH()
  },
  DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function() {
    return eH()
  },
  DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function() {
    return eH()
  },
  NOTICE_SHOW: function(e) {
    ej = e.notice
  },
  NOTICE_DISMISS: function(e) {
    return null != ej && (null == e.id || e.id === ej.id) && (eG(ej.type, e.isTemporary, e.untilAtLeast), eH())
  },
  NOTICE_DISABLE: function(e) {
    let {
      noticeType: t
    } = e;
    return eG(t), eH()
  },
  LOGOUT: function() {
    ey = {}, ej = null
  },
  SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
  AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
  CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
  PROXY_BLOCKED_REQUEST: eH
})