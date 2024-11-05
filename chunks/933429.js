n.d(t, {
    m: function () {
        return ey;
    }
}),
    n(47120);
var i,
    r,
    l,
    a,
    o = n(913527),
    s = n.n(o),
    c = n(442837),
    d = n(743426),
    u = n(704215),
    m = n(433517),
    h = n(570140),
    f = n(579806),
    p = n(726542),
    g = n(812206),
    _ = n(223892),
    C = n(674525),
    E = n(605236),
    I = n(353926),
    x = n(594190),
    v = n(38618),
    N = n(569545),
    T = n(615365),
    S = n(528011),
    b = n(487419),
    A = n(715903),
    j = n(223606),
    Z = n(160404),
    R = n(41776),
    P = n(347649),
    y = n(332473),
    L = n(30684),
    O = n(616106),
    M = n(995598),
    k = n(774276),
    D = n(518638),
    B = n(1844),
    w = n(621615),
    U = n(417626),
    F = n(569984),
    G = n(523255),
    V = n(900735),
    H = n(768419),
    z = n(590415),
    W = n(581883),
    K = n(199902),
    Y = n(314897),
    X = n(881998),
    Q = n(463395),
    q = n(592125),
    J = n(553795),
    $ = n(427123),
    ee = n(271383),
    et = n(430824),
    en = n(131951),
    ei = n(292959),
    er = n(496675),
    el = n(571474),
    ea = n(19780),
    eo = n(944486),
    es = n(914010),
    ec = n(215427),
    ed = n(246946),
    eu = n(558724),
    em = n(23434),
    eh = n(594174),
    ef = n(979651),
    ep = n(351402),
    eg = n(853872),
    e_ = n(78839),
    eC = n(431),
    eE = n(580130),
    eI = n(695103),
    ex = n(358085),
    ev = n(74538),
    eN = n(922156),
    eT = n(436181),
    eS = n(941128),
    eb = n(981631),
    eA = n(188785),
    ej = n(474936),
    eZ = n(46140),
    eR = n(231338),
    eP = n(65154);
let ey = {
        [eb.kVF.LOCALIZED_PRICING]: u.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eb.kVF.DOWNLOAD_NAG]: u.z.NAGBAR_NOTICE_DOWNLOAD,
        [eb.kVF.CONNECT_SPOTIFY]: u.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eb.kVF.CONNECT_PLAYSTATION]: u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eb.kVF.MFA_SMS_BACKUP]: u.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eb.kVF.PREMIUM_REACTIVATE]: u.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eb.kVF.BOUNCED_EMAIL_DETECTED]: u.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: u.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eb.kVF.POMELO_ELIGIBLE]: u.z.NAGBAR_NOTICE_POMELO,
        [eb.kVF.UU_MIGRATION]: u.z.UU_MIGRATION_NOTICE,
        [eb.kVF.CHECKOUT_RECOVERY_NAGBAR]: u.z.CHECKOUT_RECOVERY_NAGBAR
    },
    eL = {
        [eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eb.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eb.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eb.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eb.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eb.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eb.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eb.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice'
    },
    eO = new Set([eb.kVF.NO_INPUT_DETECTED, eb.kVF.STREAMER_MODE, eb.kVF.VIDEO_UNSUPPORTED_BROWSER, eb.kVF.SPOTIFY_AUTO_PAUSED, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eb.kVF.BLOCKED_BY_PROXY]),
    eM = {},
    ek = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eD = null;
function eB(e) {
    return eL[e] + '-untilAtLeast';
}
function ew(e, t, n) {
    var i, r, l;
    if (null == e) return;
    let a = eL[e];
    if ((null != a && !t && m.K.set(a, !0), eO.has(e) && (eM[e] = !0), null != n && null != a)) {
        (i = e), (r = n), m.K.set(eB(i), r.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (l = e), m.K.remove(eB(l));
    }
}
function eU(e) {
    if (null == e) return !1;
    let t = (function (e) {
        let { enabled: t } = k.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : ey[e];
    })(e);
    if (null != t) return (0, E.un)(t);
    let n = eL[e];
    if (null != n) {
        let t = (function (e) {
            let t = m.K.get(eB(e));
            return null != t ? s()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(s()());
    }
    let i = eM[e];
    return !!i || (null != n && '' !== n ? m.K.get(n) : !!eO.has(e) && i);
}
let eF = [eb.kVF.QUARANTINED, eb.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eb.kVF.VIEWING_ROLES, eb.kVF.INVITED_TO_SPEAK, eb.kVF.LURKING_GUILD, eb.kVF.VOICE_DISABLED, eb.kVF.NO_INPUT_DETECTED, eb.kVF.HARDWARE_MUTE, eb.kVF.H264_DISABLED, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eb.kVF.SPOTIFY_AUTO_PAUSED, eb.kVF.WIN32_DEPRECATED_MESSAGE, eb.kVF.WIN7_8_DEPRECATED_MESSAGE, eb.kVF.MACOS_17_18_DEPRECATED_MESSAGE, eb.kVF.BLOCKED_BY_PROXY, eb.kVF.VOICE_CONNECTED_LAST_SESSION, eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eb.kVF.GUILD_RAID_NOTIFICATION, eb.kVF.QUESTS_PROGRESS_INTERRUPTION, eb.kVF.UNCLAIMED_ACCOUNT, eb.kVF.POMELO_ELIGIBLE, eb.kVF.PENDING_MEMBER, eb.kVF.CHECKOUT_RECOVERY_NAGBAR, eb.kVF.OUTBOUND_PROMOTION, eb.kVF.CORRUPT_INSTALLATION, eb.kVF.VIDEO_UNSUPPORTED_BROWSER, eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eb.kVF.STREAMER_MODE, eb.kVF.SCHEDULED_MAINTENANCE, eb.kVF.BOUNCED_EMAIL_DETECTED, eb.kVF.UNVERIFIED_ACCOUNT, eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eb.kVF.PREMIUM_UNCANCEL, eb.kVF.PREMIUM_MISSING_PAYMENT, eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eb.kVF.PREMIUM_REACTIVATE, eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eb.kVF.MFA_SMS_BACKUP, eb.kVF.APPLICATION_TEST_MODE, eb.kVF.LOCALIZED_PRICING, eb.kVF.DOWNLOAD_NAG, eb.kVF.CONNECT_SPOTIFY, eb.kVF.CONNECT_PLAYSTATION, eb.kVF.SURVEY, eb.kVF.SERVER_USAGE_SURVEY, eb.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eb.kVF.UU_MIGRATION, eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR],
    eG = [eb.kVF.QUARANTINED, eb.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eb.kVF.VIEWING_ROLES, eb.kVF.INVITED_TO_SPEAK, eb.kVF.LURKING_GUILD, eb.kVF.VOICE_DISABLED, eb.kVF.NO_INPUT_DETECTED, eb.kVF.HARDWARE_MUTE, eb.kVF.H264_DISABLED, eb.kVF.DISPATCH_ERROR, eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eb.kVF.SPOTIFY_AUTO_PAUSED, eb.kVF.BLOCKED_BY_PROXY, eb.kVF.VOICE_CONNECTED_LAST_SESSION, eb.kVF.PENDING_MEMBER, eb.kVF.STREAMER_MODE, eb.kVF.SCHEDULED_MAINTENANCE],
    eV = {
        [eb.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, S.g)().show && !eU(eb.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: s()().add(3, 'hours').toDate() })
        },
        [eb.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = ee.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, A.EY)(i);
            }
        },
        [eb.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eb.xW$.QUARANTINED);
            }
        },
        [eb.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return Z.Z.isViewingRoles(t);
            }
        },
        [eb.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, z.gf)(t) === z.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eb.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && R.Z.isLurking(t);
            }
        },
        [eb.kVF.VOICE_DISABLED]: { predicate: () => null != ea.Z.getRemoteDisconnectVoiceChannelId() },
        [eb.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != ea.Z.getLastSessionVoiceChannelId() },
        [eb.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = q.Z.getChannel(t),
                    r = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === en.Z.getInputDetected() && !r;
            }
        },
        [eb.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !en.Z.getOpenH264() && null != t && ef.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eb.kVF.HARDWARE_MUTE]: {
            predicate: () => ea.Z.isConnected() && en.Z.isHardwareMute() && en.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = en.Z.getInputDeviceId(),
                    t = Q.Z.getVendor(e),
                    n = Q.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eb.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eN.Z.getLastError(),
            metadata: () => ({ error: eN.Z.getLastError() })
        },
        [eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eT.Z.getLastProgress(),
            metadata: () => eT.Z.getLastProgress()
        },
        [eb.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => H.Z.wasAutoPaused() },
        [eb.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eU(eb.kVF.BLOCKED_BY_PROXY) && U.Z.blockedByProxy && w.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eb.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eb.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: r, currentUser: l } = e;
                return null !== (i = null != r && null != l && !(null === (t = et.Z.getGuild(r)) || void 0 === t ? void 0 : t.hasFeature(eb.oNc.GUILD_ONBOARDING)) && (null === (n = ee.ZP.getMember(r, l.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [eb.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, D.tq)() },
        [eb.kVF.CORRUPT_INSTALLATION]: { predicate: () => ex.isPlatformEmbedded && (!d.Z.supported() || eS.Z.isCorruptInstallation()) },
        [eb.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && ef.Z.hasVideo(t) && !en.Z.supports(eP.AN.VIDEO) && !eU(eb.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return ev.ZP.canRedeemPremiumPerks(t) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eU(eb.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && $.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => $.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eb.kVF.STREAMER_MODE]: { predicate: () => ed.Z.enabled },
        [eb.kVF.DOWNLOAD_NAG]: { predicate: () => !ex.isPlatformEmbedded && !eU(eb.kVF.DOWNLOAD_NAG) },
        [eb.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != ec.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = ec.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eb.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey()
        },
        [eb.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && T.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eU(eb.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eb.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eb.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eb.kVF.CONNECT_SPOTIFY]: { predicate: () => !H.Z.hasConnectedAccount() && x.ZP.isObservedAppRunning(p.Z.get(eb.ABu.SPOTIFY).name) && !eU(eb.kVF.CONNECT_SPOTIFY) },
        [eb.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.arch) === 'ia32' && (null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eb.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eb.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === f.Z || void 0 === f.Z ? void 0 : f.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === f.Z || void 0 === f.Z ? void 0 : f.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: s()().add(5, 'days').toDate() })
        },
        [eb.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(eb.ABu.PLAYSTATION) && null == J.Z.getAccount(null, eb.ABu.PLAYSTATION) && !eU(eb.kVF.CONNECT_PLAYSTATION) },
        [eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eC.Z.getAlmostExpiringTrialOffers([ej.Si.TIER_2]).length > 0 && !eU(eb.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eC.Z.getAlmostExpiringTrialOffers([ej.Si.TIER_0]).length > 0 && !eU(eb.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eb.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? s()(t.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eb.O0b.CANCELED && 1 >= s()().diff(s()(t.canceledAt), 'days'),
                    l = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    a = null != t && t.status === eb.O0b.CANCELED && !l && i <= 7 && i >= 0 && (0, ev.M5)(n, ej.p9.TIER_2) && !r && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eU(eb.kVF.PREMIUM_UNCANCEL) && a;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? s()(n.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != n ? (null === (t = (0, ev.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? ev.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eb.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? s()(t.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != t ? s()(t.currentPeriodEnd).diff(s()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    l = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    a = eE.Z.applicationIdsFetched.has(ej.CL),
                    o = eE.Z.getForApplication(ej.CL),
                    c = null != t ? (0, ev.Af)(t) : null,
                    d = null != c ? ev.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != o &&
                        null != c &&
                        Array.from(o).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    m = null != t && i <= (r > 14 ? 7 : 2) && i >= 0 && t.status !== eb.O0b.PAST_DUE && !l && a && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eU(eb.kVF.PREMIUM_MISSING_PAYMENT) && m;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? s()(n.currentPeriodEnd).diff(s()().startOf('day'), 'days') : 0,
                    r = null != n ? (null === (t = (0, ev.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != r ? ev.ZP.getPremiumType(r) : null,
                    premiumSubscription: n
                };
            }
        },
        [eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eg.Z.getPaymentSource(t.paymentSourceId) : null,
                    r = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    l = null != t && t.status === eb.O0b.PAST_DUE && !r && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eU(eb.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && l;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    r = null != t && t.status === eb.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eU(eb.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && r;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eb.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eb.xW$.MFA_SMS) && !t.hasFlag(eb.xW$.STAFF) && !t.hasFlag(eb.xW$.PARTNER) && !eU(eb.kVF.MFA_SMS_BACKUP);
            }
        },
        [eb.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eI.Z.testModeApplicationId,
            metadata: () => {
                if (null == eI.Z.testModeApplicationId) return {};
                let e = eI.Z.testModeApplicationId,
                    t = g.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eb.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eU(eb.kVF.PREMIUM_REACTIVATE) && O.Z.shouldShowReactivateNotice() },
        [eb.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eU(eb.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && s()(t.currentPeriodEnd).isBefore(s()()),
                    r = null != t && null != t.paymentSourceId ? eg.Z.getPaymentSource(t.paymentSourceId) : null,
                    l = null != r && eR.Uk.has(r.type),
                    a = null != t && t.status === eb.O0b.PAST_DUE && !i && l && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eU(eb.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: s()().toDate()
                    };
                {
                    let e = t.status === eb.O0b.PAST_DUE ? s()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, ev.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eb.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, y.e)() && !eU(eb.kVF.POMELO_ELIGIBLE) && !(0, P.ov)() },
        [eb.kVF.UU_MIGRATION]: { predicate: () => (0, y.e)() && !eU(eb.kVF.UU_MIGRATION) && (0, P.ov)() },
        [eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? et.Z.getGuild(t) : null;
                return (null != t && null != j.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eb.oNc.COMMUNITY)) && !eU(eb.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: s()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = j.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eU(eb.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== C.Z.getEligibleGuildsForNagActivate().length && (0, _.Lm)() },
        [eb.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            }
        },
        [eb.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = K.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, N.V9)(e),
                    n = F.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eZ.Ot;
            },
            metadata: () => {
                let e = K.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, N.V9)(e) : null };
            }
        },
        [eb.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = eg.Z.paymentSources) && void 0 !== t ? t : {};
                return L.Z.getIsTargeted() && !(0, ev.I5)(n) && 0 !== Object.keys(i).length && (0, M.Y)();
            }
        },
        [eb.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => V.S(),
            metadata: () => ({ dismissUntil: s()().add(180, 'days').toDate() })
        }
    };
function eH() {
    if (!v.Z.isConnected()) return !1;
    eD = null;
    let e = eh.default.getCurrentUser();
    if (null == e) return !1;
    let t = e_.ZP.getPremiumSubscription(),
        n = ep.Z.isLocalizedPromoEnabled,
        i = es.Z.getGuildId(),
        r = eo.Z.getVoiceChannelId(),
        l = null != r ? ef.Z.getVoiceStateForChannel(r) : null;
    for (let s of eA.a ? eG : eF) {
        if (null != eV[s]) {
            if (
                eV[s].predicate({
                    selectedGuildId: i,
                    voiceChannelId: r,
                    voiceState: l,
                    currentUser: e,
                    premiumSubscription: t,
                    isLocalizedPromoEnabled: n
                })
            ) {
                var a, o;
                let n =
                    null === (a = (o = eV[s]).metadata) || void 0 === a
                        ? void 0
                        : a.call(o, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: i
                          });
                eD = {
                    ...ek,
                    type: s,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eD && eU(eD.type) && (eD = null);
}
function ez() {
    return !ed.Z.enabled && delete eM[eb.kVF.STREAMER_MODE], eH();
}
class eW extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([eu.Z, el.Z, $.Z, es.Z, B.Z, eC.Z, X.Z, J.Z, W.Z, b.Z, F.Z, K.Z], eH), this.waitFor(eh.default, ec.Z, et.Z, ee.ZP, ea.Z, en.Z, ed.Z, I.Z, es.Z, em.Z, H.Z, x.ZP, el.Z, eN.Z, eT.Z, eI.Z, ei.Z, e_.ZP, eS.Z, $.Z, eg.Z, er.Z, B.Z, eE.Z, eC.Z, J.Z, R.Z, C.Z, U.Z, F.Z, K.Z);
    }
    hasNotice() {
        return null != eD && null != eD.type;
    }
    getNotice() {
        return null == em.Z.getAction() ? eD : null;
    }
    isNoticeDismissed(e) {
        return eU(e);
    }
}
(a = 'NoticeStore'),
    (l = 'displayName') in (r = eW)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new eW(h.Z, {
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
        GUILD_MEMBER_ADD: function (e) {
            return e.user.id === Y.default.getId() && eH();
        },
        GUILD_MEMBER_UPDATE: eH,
        SURVEY_FETCHED: eH,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eH,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eH,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eH,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eH,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== Y.default.getId();
                }) && eH()
            );
        },
        STREAMER_MODE_UPDATE: ez,
        RUNNING_STREAMER_TOOLS_CHANGE: ez,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete eM[eb.kVF.DISPATCH_ERROR], eH();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete eM[eb.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eH();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eH();
        },
        NOTICE_SHOW: function (e) {
            eD = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != eD && (null == e.id || e.id === eD.id) && (ew(eD.type, e.isTemporary, e.untilAtLeast), eH());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return ew(t), eH();
        },
        LOGOUT: function () {
            (eM = {}), (eD = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
        PROXY_BLOCKED_REQUEST: eH
    }));
