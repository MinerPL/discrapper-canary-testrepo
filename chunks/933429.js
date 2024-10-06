n.d(t, {
    m: function () {
        return eD;
    }
}),
    n(47120);
var i,
    a,
    s,
    l,
    r = n(913527),
    o = n.n(r),
    c = n(442837),
    d = n(743426),
    u = n(704215),
    _ = n(433517),
    E = n(570140),
    I = n(579806),
    m = n(726542),
    T = n(812206),
    N = n(223892),
    h = n(674525),
    C = n(605236),
    p = n(353926),
    f = n(594190),
    g = n(38618),
    A = n(569545),
    S = n(615365),
    M = n(528011),
    x = n(487419),
    O = n(715903),
    R = n(223606),
    v = n(160404),
    L = n(41776),
    Z = n(347649),
    P = n(332473),
    D = n(514851),
    b = n(30684),
    j = n(616106),
    U = n(666072),
    y = n(995598),
    B = n(774276),
    k = n(518638),
    G = n(1844),
    F = n(621615),
    w = n(417626),
    V = n(569984),
    H = n(523255),
    Y = n(768419),
    W = n(590415),
    K = n(581883),
    z = n(199902),
    X = n(314897),
    Q = n(881998),
    J = n(463395),
    q = n(592125),
    $ = n(553795),
    ee = n(427123),
    et = n(271383),
    en = n(430824),
    ei = n(131951),
    ea = n(292959),
    es = n(496675),
    el = n(571474),
    er = n(19780),
    eo = n(944486),
    ec = n(914010),
    ed = n(215427),
    eu = n(246946),
    e_ = n(558724),
    eE = n(23434),
    eI = n(594174),
    em = n(979651),
    eT = n(351402),
    eN = n(853872),
    eh = n(78839),
    eC = n(295226),
    ep = n(580130),
    ef = n(695103),
    eg = n(358085),
    eA = n(74538),
    eS = n(922156),
    eM = n(436181),
    ex = n(941128),
    eO = n(981631),
    eR = n(188785),
    ev = n(474936),
    eL = n(46140),
    eZ = n(231338),
    eP = n(65154);
let eD = {
        [eO.kVF.LOCALIZED_PRICING]: u.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eO.kVF.DOWNLOAD_NAG]: u.z.NAGBAR_NOTICE_DOWNLOAD,
        [eO.kVF.CONNECT_SPOTIFY]: u.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eO.kVF.CONNECT_PLAYSTATION]: u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eO.kVF.MFA_SMS_BACKUP]: u.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eO.kVF.PREMIUM_REACTIVATE]: u.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eO.kVF.BOUNCED_EMAIL_DETECTED]: u.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: u.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eO.kVF.POMELO_ELIGIBLE]: u.z.NAGBAR_NOTICE_POMELO,
        [eO.kVF.UU_MIGRATION]: u.z.UU_MIGRATION_NOTICE,
        [eO.kVF.CHECKOUT_RECOVERY_NAGBAR]: u.z.CHECKOUT_RECOVERY_NAGBAR,
        [eO.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: u.z.CASH_APP_PAY_AWARENESS_NAGBAR
    },
    eb = {
        [eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eO.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eO.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eO.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eO.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eO.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eO.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eO.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice'
    },
    ej = new Set([eO.kVF.NO_INPUT_DETECTED, eO.kVF.STREAMER_MODE, eO.kVF.VIDEO_UNSUPPORTED_BROWSER, eO.kVF.SPOTIFY_AUTO_PAUSED, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.kVF.BLOCKED_BY_PROXY]),
    eU = {},
    ey = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eB = null;
function ek(e) {
    return eb[e] + '-untilAtLeast';
}
function eG(e, t, n) {
    var i, a, s;
    if (null == e) return;
    let l = eb[e];
    if ((null != l && !t && _.K.set(l, !0), ej.has(e) && (eU[e] = !0), null != n && null != l)) {
        (i = e), (a = n), _.K.set(ek(i), a.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        (s = e), _.K.remove(ek(s));
    }
}
function eF(e) {
    if (null == e) return !1;
    let t = (function (e) {
        let { enabled: t } = B.cI.getCurrentConfig(
            { location: 'NoticeStore_isNoticeDismissed' },
            {
                autoTrackExposure: !0,
                disable: e !== eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING
            }
        );
        return t ? null : eD[e];
    })(e);
    if (null != t) return (0, C.un)(t);
    let n = eb[e];
    if (null != n) {
        let t = (function (e) {
            let t = _.K.get(ek(e));
            return null != t ? o()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(o()());
    }
    let i = eU[e];
    return !!i || (null != n && '' !== n ? _.K.get(n) : !!ej.has(e) && i);
}
let ew = [eO.kVF.QUARANTINED, eO.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eO.kVF.VIEWING_ROLES, eO.kVF.INVITED_TO_SPEAK, eO.kVF.LURKING_GUILD, eO.kVF.VOICE_DISABLED, eO.kVF.NO_INPUT_DETECTED, eO.kVF.HARDWARE_MUTE, eO.kVF.H264_DISABLED, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.kVF.SPOTIFY_AUTO_PAUSED, eO.kVF.WIN32_DEPRECATED_MESSAGE, eO.kVF.WIN7_8_DEPRECATED_MESSAGE, eO.kVF.MACOS_17_18_DEPRECATED_MESSAGE, eO.kVF.BLOCKED_BY_PROXY, eO.kVF.VOICE_CONNECTED_LAST_SESSION, eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eO.kVF.GUILD_RAID_NOTIFICATION, eO.kVF.QUESTS_PROGRESS_INTERRUPTION, eO.kVF.UNCLAIMED_ACCOUNT, eO.kVF.POMELO_ELIGIBLE, eO.kVF.PENDING_MEMBER, eO.kVF.CASH_APP_PAY_AWARENESS_NAGBAR, eO.kVF.CHECKOUT_RECOVERY_NAGBAR, eO.kVF.OUTBOUND_PROMOTION, eO.kVF.CORRUPT_INSTALLATION, eO.kVF.VIDEO_UNSUPPORTED_BROWSER, eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eO.kVF.STREAMER_MODE, eO.kVF.SCHEDULED_MAINTENANCE, eO.kVF.BOUNCED_EMAIL_DETECTED, eO.kVF.UNVERIFIED_ACCOUNT, eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eO.kVF.PREMIUM_UNCANCEL, eO.kVF.PREMIUM_MISSING_PAYMENT, eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eO.kVF.PREMIUM_REACTIVATE, eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eO.kVF.MFA_SMS_BACKUP, eO.kVF.APPLICATION_TEST_MODE, eO.kVF.LOCALIZED_PRICING, eO.kVF.DOWNLOAD_NAG, eO.kVF.CONNECT_SPOTIFY, eO.kVF.CONNECT_PLAYSTATION, eO.kVF.SURVEY, eO.kVF.SERVER_USAGE_SURVEY, eO.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eO.kVF.UU_MIGRATION],
    eV = [eO.kVF.QUARANTINED, eO.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eO.kVF.VIEWING_ROLES, eO.kVF.INVITED_TO_SPEAK, eO.kVF.LURKING_GUILD, eO.kVF.VOICE_DISABLED, eO.kVF.NO_INPUT_DETECTED, eO.kVF.HARDWARE_MUTE, eO.kVF.H264_DISABLED, eO.kVF.DISPATCH_ERROR, eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eO.kVF.SPOTIFY_AUTO_PAUSED, eO.kVF.BLOCKED_BY_PROXY, eO.kVF.VOICE_CONNECTED_LAST_SESSION, eO.kVF.PENDING_MEMBER, eO.kVF.STREAMER_MODE, eO.kVF.SCHEDULED_MAINTENANCE],
    eH = {
        [eO.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, M.g)().show && !eF(eO.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [eO.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let i = et.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, O.EY)(i);
            }
        },
        [eO.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eO.xW$.QUARANTINED);
            }
        },
        [eO.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return v.Z.isViewingRoles(t);
            }
        },
        [eO.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, W.gf)(t) === W.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eO.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && L.Z.isLurking(t);
            }
        },
        [eO.kVF.VOICE_DISABLED]: { predicate: () => null != er.Z.getRemoteDisconnectVoiceChannelId() },
        [eO.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != er.Z.getLastSessionVoiceChannelId() },
        [eO.kVF.NO_INPUT_DETECTED]: {
            predicate: (e) => {
                let { voiceChannelId: t, voiceState: n } = e,
                    i = q.Z.getChannel(t),
                    a = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === ei.Z.getInputDetected() && !a;
            }
        },
        [eO.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !ei.Z.getOpenH264() && null != t && em.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eO.kVF.HARDWARE_MUTE]: {
            predicate: () => er.Z.isConnected() && ei.Z.isHardwareMute() && ei.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = ei.Z.getInputDeviceId(),
                    t = J.Z.getVendor(e),
                    n = J.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eO.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eS.Z.getLastError(),
            metadata: () => ({ error: eS.Z.getLastError() })
        },
        [eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eM.Z.getLastProgress(),
            metadata: () => eM.Z.getLastProgress()
        },
        [eO.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => Y.Z.wasAutoPaused() },
        [eO.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eF(eO.kVF.BLOCKED_BY_PROXY) && w.Z.blockedByProxy && F.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eO.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eO.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, i;
                let { selectedGuildId: a, currentUser: s } = e;
                return null !== (i = null != a && null != s && !(null === (t = en.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eO.oNc.GUILD_ONBOARDING)) && (null === (n = et.ZP.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [eO.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, k.tq)() },
        [eO.kVF.CORRUPT_INSTALLATION]: { predicate: () => eg.isPlatformEmbedded && (!d.Z.supported() || ex.Z.isCorruptInstallation()) },
        [eO.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && em.Z.hasVideo(t) && !ei.Z.supports(eP.AN.VIDEO) && !eF(eO.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eA.ZP.canRedeemPremiumPerks(t) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eF(eO.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && ee.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => ee.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eO.kVF.STREAMER_MODE]: { predicate: () => eu.Z.enabled },
        [eO.kVF.DOWNLOAD_NAG]: { predicate: () => !eg.isPlatformEmbedded && !eF(eO.kVF.DOWNLOAD_NAG) },
        [eO.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != ed.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = ed.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eO.kVF.SURVEY]: {
            predicate: () => null != e_.Z.getCurrentSurvey(),
            metadata: () => e_.Z.getCurrentSurvey()
        },
        [eO.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && S.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eF(eO.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eO.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eO.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eO.kVF.CONNECT_SPOTIFY]: { predicate: () => !Y.Z.hasConnectedAccount() && f.ZP.isObservedAppRunning(m.Z.get(eO.ABu.SPOTIFY).name) && !eF(eO.kVF.CONNECT_SPOTIFY) },
        [eO.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.arch) === 'ia32' && (null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eO.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eO.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === I.Z || void 0 === I.Z ? void 0 : I.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === I.Z || void 0 === I.Z ? void 0 : I.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eO.kVF.CONNECT_PLAYSTATION]: { predicate: () => $.Z.isSuggestedAccountType(eO.ABu.PLAYSTATION) && null == $.Z.getAccount(null, eO.ABu.PLAYSTATION) && !eF(eO.kVF.CONNECT_PLAYSTATION) },
        [eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eC.Z.getAlmostExpiringTrialOffers([ev.Si.TIER_2]).length > 0 && !eF(eO.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eC.Z.getAlmostExpiringTrialOffers([ev.Si.TIER_0]).length > 0 && !eF(eO.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eO.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eO.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'),
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    l = null != t && t.status === eO.O0b.CANCELED && !s && i <= 7 && i >= 0 && (0, eA.M5)(n, ev.p9.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(eO.kVF.PREMIUM_UNCANCEL) && l;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eA.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eA.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [eO.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    s = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    l = ep.Z.applicationIdsFetched.has(ev.CL),
                    r = ep.Z.getForApplication(ev.CL),
                    c = null != t ? (0, eA.Af)(t) : null,
                    d = null != c ? eA.ZP.getSkuIdForPlan(c.planId) : null,
                    u =
                        null != r &&
                        null != c &&
                        Array.from(r).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === d;
                        }).length > 0,
                    _ = null != t && i <= (a > 14 ? 7 : 2) && i >= 0 && t.status !== eO.O0b.PAST_DUE && !s && l && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(eO.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0,
                    a = null != n ? (null === (t = (0, eA.Af)(n)) || void 0 === t ? void 0 : t.planId) : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eA.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && null != t.paymentSourceId ? eN.Z.getPaymentSource(t.paymentSourceId) : null,
                    a = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    s = null != t && t.status === eO.O0b.PAST_DUE && !a && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(eO.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && t.status === eO.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(eO.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eO.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eO.xW$.MFA_SMS) && !t.hasFlag(eO.xW$.STAFF) && !t.hasFlag(eO.xW$.PARTNER) && !eF(eO.kVF.MFA_SMS_BACKUP);
            }
        },
        [eO.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ef.Z.testModeApplicationId,
            metadata: () => {
                if (null == ef.Z.testModeApplicationId) return {};
                let e = ef.Z.testModeApplicationId,
                    t = T.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eO.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eF(eO.kVF.PREMIUM_REACTIVATE) && j.Z.shouldShowReactivateNotice() },
        [eO.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !eF(eO.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    i = null != t && o()(t.currentPeriodEnd).isBefore(o()()),
                    a = null != t && null != t.paymentSourceId ? eN.Z.getPaymentSource(t.paymentSourceId) : null,
                    s = null != a && eZ.Uk.has(a.type),
                    l = null != t && t.status === eO.O0b.PAST_DUE && !i && s && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eF(eO.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && l;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: o()().toDate()
                    };
                {
                    let e = t.status === eO.O0b.PAST_DUE ? o()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eA.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eO.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, P.e)() && !eF(eO.kVF.POMELO_ELIGIBLE) && !(0, Z.ov)() },
        [eO.kVF.UU_MIGRATION]: { predicate: () => (0, P.e)() && !eF(eO.kVF.UU_MIGRATION) && (0, Z.ov)() },
        [eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? en.Z.getGuild(t) : null;
                return (null != t && null != R.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eO.oNc.COMMUNITY)) && !eF(eO.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: o()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = R.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eF(eO.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== h.Z.getEligibleGuildsForNagActivate().length && (0, N.Lm)() },
        [eO.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return H.SI(t);
            }
        },
        [eO.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = z.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, A.V9)(e),
                    n = V.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eL.Ot;
            },
            metadata: () => {
                let e = z.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, A.V9)(e) : null };
            }
        },
        [eO.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    i = null !== (t = eN.Z.paymentSources) && void 0 !== t ? t : {};
                return b.Z.getIsTargeted() && !(0, eA.I5)(n) && 0 !== Object.keys(i).length && (0, y.Y)();
            }
        },
        [eO.kVF.CASH_APP_PAY_AWARENESS_NAGBAR]: {
            predicate: () => {
                let e = D.Z.getForCampaign(eO.$Dd.CASH_APP_PAY_AWARENESS);
                return null != e && !0 === e.is_eligible && (0, U.j)();
            }
        }
    };
function eY() {
    if (!g.Z.isConnected()) return !1;
    eB = null;
    let e = eI.default.getCurrentUser();
    if (null == e) return !1;
    let t = eh.ZP.getPremiumSubscription(),
        n = eT.Z.isLocalizedPromoEnabled,
        i = ec.Z.getGuildId(),
        a = eo.Z.getVoiceChannelId(),
        s = null != a ? em.Z.getVoiceStateForChannel(a) : null;
    for (let o of eR.a ? eV : ew) {
        if (null != eH[o]) {
            if (
                eH[o].predicate({
                    selectedGuildId: i,
                    voiceChannelId: a,
                    voiceState: s,
                    currentUser: e,
                    premiumSubscription: t,
                    isLocalizedPromoEnabled: n
                })
            ) {
                var l, r;
                let n =
                    null === (l = (r = eH[o]).metadata) || void 0 === l
                        ? void 0
                        : l.call(r, {
                              currentUser: e,
                              premiumSubscription: t,
                              selectedGuildId: i
                          });
                eB = {
                    ...ey,
                    type: o,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eB && eF(eB.type) && (eB = null);
}
function eW() {
    return !eu.Z.enabled && delete eU[eO.kVF.STREAMER_MODE], eY();
}
class eK extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([e_.Z, el.Z, ee.Z, ec.Z, G.Z, eC.Z, Q.Z, $.Z, K.Z, x.Z, V.Z, z.Z], eY), this.waitFor(eI.default, ed.Z, en.Z, et.ZP, er.Z, ei.Z, eu.Z, p.Z, ec.Z, eE.Z, Y.Z, f.ZP, el.Z, eS.Z, eM.Z, ef.Z, ea.Z, eh.ZP, ex.Z, ee.Z, eN.Z, es.Z, G.Z, ep.Z, eC.Z, $.Z, L.Z, h.Z, w.Z, V.Z, z.Z);
    }
    hasNotice() {
        return null != eB && null != eB.type;
    }
    getNotice() {
        return null == eE.Z.getAction() ? eB : null;
    }
    isNoticeDismissed(e) {
        return eF(e);
    }
}
(l = 'NoticeStore'),
    (s = 'displayName') in (a = eK)
        ? Object.defineProperty(a, s, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[s] = l),
    (t.Z = new eK(E.Z, {
        CURRENT_USER_UPDATE: eY,
        MEDIA_ENGINE_SET_AUDIO_ENABLED: eY,
        CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: eY,
        CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: eY,
        STATUS_PAGE_SCHEDULED_MAINTENANCE: eY,
        STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: eY,
        GUILD_CREATE: eY,
        GUILD_DELETE: eY,
        AUDIO_INPUT_DETECTED: eY,
        AUDIO_SET_DISPLAY_SILENCE_WARNING: eY,
        CERTIFIED_DEVICES_SET: eY,
        AUDIO_SET_INPUT_DEVICE: eY,
        AUDIO_SET_OUTPUT_DEVICE: eY,
        MEDIA_ENGINE_DEVICES: eY,
        RTC_CONNECTION_STATE: eY,
        RPC_APP_AUTHENTICATED: eY,
        RPC_APP_DISCONNECTED: eY,
        USER_CONNECTIONS_UPDATE: eY,
        WINDOW_FOCUS: eY,
        INSTANT_INVITE_CREATE: eY,
        INSTANT_INVITE_REVOKE_SUCCESS: eY,
        SPOTIFY_PLAYER_PAUSE: eY,
        RUNNING_GAMES_CHANGE: eY,
        EXPERIMENTS_FETCH_SUCCESS: eY,
        PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: eY,
        DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: eY,
        DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: eY,
        DEVELOPER_TEST_MODE_RESET: eY,
        BILLING_SUBSCRIPTION_FETCH_SUCCESS: eY,
        DISPATCH_APPLICATION_INSTALL: eY,
        IMPERSONATE_STOP: eY,
        IMPERSONATE_UPDATE: eY,
        GUILD_MEMBER_ADD: function (e) {
            return e.user.id === X.default.getId() && eY();
        },
        GUILD_MEMBER_UPDATE: eY,
        SURVEY_FETCHED: eY,
        ENTITLEMENT_FETCH_APPLICATION_SUCCESS: eY,
        BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: eY,
        BILLING_SUBSCRIPTION_UPDATE_SUCCESS: eY,
        BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: eY,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e;
            return (
                t.some((e) => {
                    let { userId: t } = e;
                    return t !== X.default.getId();
                }) && eY()
            );
        },
        STREAMER_MODE_UPDATE: eW,
        RUNNING_STREAMER_TOOLS_CHANGE: eW,
        DISPATCH_APPLICATION_ERROR: function () {
            return delete eU[eO.kVF.DISPATCH_ERROR], eY();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
            return delete eU[eO.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eY();
        },
        DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
            return eY();
        },
        DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
            return eY();
        },
        NOTICE_SHOW: function (e) {
            eB = e.notice;
        },
        NOTICE_DISMISS: function (e) {
            return null != eB && (null == e.id || e.id === eB.id) && (eG(eB.type, e.isTemporary, e.untilAtLeast), eY());
        },
        NOTICE_DISABLE: function (e) {
            let { noticeType: t } = e;
            return eG(t), eY();
        },
        LOGOUT: function () {
            (eU = {}), (eB = null);
        },
        SUBSCRIPTION_PLANS_FETCH_SUCCESS: eY,
        AUTO_MODERATION_MENTION_RAID_DETECTION: eY,
        CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eY,
        PROXY_BLOCKED_REQUEST: eY
    }));
