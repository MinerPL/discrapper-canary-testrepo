n.d(t, {
    ZP: () => eX,
    m9: () => eM,
    o: () => eL
}),
    n(47120),
    n(301563);
var r,
    i = n(913527),
    l = n.n(i),
    o = n(442837),
    a = n(743426),
    s = n(704215),
    c = n(433517),
    u = n(570140),
    d = n(579806),
    E = n(726542),
    _ = n(812206),
    I = n(223892),
    N = n(674525),
    O = n(605236),
    T = n(785141),
    S = n(674503),
    p = n(353926),
    f = n(594190),
    A = n(38618),
    R = n(569545),
    P = n(615365),
    C = n(528011),
    g = n(487419),
    m = n(715903),
    D = n(223606),
    y = n(160404),
    h = n(41776),
    b = n(347649),
    U = n(332473),
    M = n(30684),
    L = n(646476),
    Z = n(616106),
    k = n(995598),
    v = n(518638),
    j = n(1844),
    x = n(621615),
    F = n(417626),
    V = n(569984),
    G = n(523255),
    w = n(900735),
    W = n(768419),
    B = n(590415),
    z = n(581883),
    H = n(199902),
    Y = n(314897),
    K = n(881998),
    X = n(463395),
    q = n(592125),
    J = n(553795),
    Q = n(427123),
    $ = n(271383),
    ee = n(430824),
    et = n(131951),
    en = n(292959),
    er = n(496675),
    ei = n(571474),
    el = n(19780),
    eo = n(944486),
    ea = n(914010),
    es = n(215427),
    ec = n(246946),
    eu = n(558724),
    ed = n(23434),
    eE = n(594174),
    e_ = n(979651),
    eI = n(351402),
    eN = n(853872),
    eO = n(78839),
    eT = n(431),
    eS = n(580130),
    ep = n(695103),
    ef = n(358085),
    eA = n(74538),
    eR = n(922156),
    eP = n(436181),
    eC = n(941128),
    eg = n(981631),
    em = n(188785),
    eD = n(474936),
    ey = n(46140),
    eh = n(231338),
    eb = n(65154);
function eU(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let eM = {
        [eg.kVF.LOCALIZED_PRICING]: s.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eg.kVF.DOWNLOAD_NAG]: s.z.NAGBAR_NOTICE_DOWNLOAD,
        [eg.kVF.CONNECT_SPOTIFY]: s.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eg.kVF.CONNECT_PLAYSTATION]: s.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eg.kVF.MFA_SMS_BACKUP]: s.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eg.kVF.PREMIUM_REACTIVATE]: s.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eg.kVF.BOUNCED_EMAIL_DETECTED]: s.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eg.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: s.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eg.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: s.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eg.kVF.POMELO_ELIGIBLE]: s.z.NAGBAR_NOTICE_POMELO,
        [eg.kVF.UU_MIGRATION]: s.z.UU_MIGRATION_NOTICE,
        [eg.kVF.CHECKOUT_RECOVERY_NAGBAR]: s.z.CHECKOUT_RECOVERY_NAGBAR
    },
    eL = { [eg.kVF.GIFTING_PROMOTION_REMINDER]: s.z.GIFTING_PROMOTION_REMINDER },
    eZ = {
        [eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eg.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eg.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eg.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eg.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eg.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eg.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice',
        [eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: 'hideNagbarBlockUserFeedbackNotice',
        [eg.kVF.MACOS_19_DEPRECATED_MESSAGE]: 'hideMacOS19DeprecationMessageNotice'
    },
    ek = new Set([eg.kVF.NO_INPUT_DETECTED, eg.kVF.NO_INPUT_DEVICES_DETECTED, eg.kVF.STREAMER_MODE, eg.kVF.VIDEO_UNSUPPORTED_BROWSER, eg.kVF.SPOTIFY_AUTO_PAUSED, eg.kVF.DISPATCH_ERROR, eg.kVF.DISPATCH_ERROR, eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.kVF.BLOCKED_BY_PROXY]),
    ev = {},
    ej = {},
    ex = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }),
    eF = null;
function eV(e) {
    return eZ[e] + '-untilAtLeast';
}
function eG(e, t, n) {
    if (null == e) return;
    let r = eZ[e];
    (null == r || t || c.K.set(r, !0), ek.has(e) && (ev[e] = !0), null != n && null != r) ? c.K.set(eV(e), n.format('YYYY-MM-DDTHH:mm:ss.SSSZ')) : c.K.remove(eV(e));
}
function ew(e) {
    if (null == e) return !1;
    let t = eL[e];
    if (null != t) return (0, O.H4)(t).isDismissed;
    let n = eM[e];
    if (null != n) return (0, O.un)(n);
    let r = eZ[e];
    if (null != r) {
        let t = (function (e) {
            let t = c.K.get(eV(e));
            return null != t ? l()(t) : null;
        })(e);
        if (null != t) return null == t ? void 0 : t.isAfter(l()());
    }
    let i = ev[e];
    return !!i || (null != r && '' !== r ? c.K.get(r) : !!ek.has(e) && i);
}
let eW = [eg.kVF.QUARANTINED, eg.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eg.kVF.VIEWING_ROLES, eg.kVF.INVITED_TO_SPEAK, eg.kVF.LURKING_GUILD, eg.kVF.VOICE_DISABLED, eg.kVF.NO_INPUT_DEVICES_DETECTED, eg.kVF.NO_INPUT_DETECTED, eg.kVF.HARDWARE_MUTE, eg.kVF.H264_DISABLED, eg.kVF.DISPATCH_ERROR, eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.kVF.SPOTIFY_AUTO_PAUSED, eg.kVF.WIN32_DEPRECATED_MESSAGE, eg.kVF.WIN7_8_DEPRECATED_MESSAGE, eg.kVF.MACOS_19_DEPRECATED_MESSAGE, eg.kVF.BLOCKED_BY_PROXY, eg.kVF.VOICE_CONNECTED_LAST_SESSION, eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION, eg.kVF.GUILD_RAID_NOTIFICATION, eg.kVF.GIFTING_PROMOTION_REMINDER, eg.kVF.QUESTS_PROGRESS_INTERRUPTION, eg.kVF.UNCLAIMED_ACCOUNT, eg.kVF.POMELO_ELIGIBLE, eg.kVF.PENDING_MEMBER, eg.kVF.CHECKOUT_RECOVERY_NAGBAR, eg.kVF.OUTBOUND_PROMOTION, eg.kVF.CORRUPT_INSTALLATION, eg.kVF.VIDEO_UNSUPPORTED_BROWSER, eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK, eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL, eg.kVF.STREAMER_MODE, eg.kVF.SCHEDULED_MAINTENANCE, eg.kVF.BOUNCED_EMAIL_DETECTED, eg.kVF.UNVERIFIED_ACCOUNT, eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING, eg.kVF.PREMIUM_TIER_0_TRIAL_ENDING, eg.kVF.PREMIUM_UNCANCEL, eg.kVF.PREMIUM_MISSING_PAYMENT, eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT, eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT, eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT, eg.kVF.PREMIUM_REACTIVATE, eg.kVF.ACTIVATE_SERVER_SUBSCRIPTION, eg.kVF.MFA_SMS_BACKUP, eg.kVF.APPLICATION_TEST_MODE, eg.kVF.LOCALIZED_PRICING, eg.kVF.DOWNLOAD_NAG, eg.kVF.CONNECT_SPOTIFY, eg.kVF.CONNECT_PLAYSTATION, eg.kVF.SURVEY, eg.kVF.SERVER_USAGE_SURVEY, eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR, eg.kVF.UU_MIGRATION, eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR],
    eB = [eg.kVF.QUARANTINED, eg.kVF.AUTOMOD_QUARANTINED_USER_PROFILE, eg.kVF.VIEWING_ROLES, eg.kVF.INVITED_TO_SPEAK, eg.kVF.LURKING_GUILD, eg.kVF.VOICE_DISABLED, eg.kVF.NO_INPUT_DETECTED, eg.kVF.HARDWARE_MUTE, eg.kVF.H264_DISABLED, eg.kVF.DISPATCH_ERROR, eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS, eg.kVF.SPOTIFY_AUTO_PAUSED, eg.kVF.BLOCKED_BY_PROXY, eg.kVF.VOICE_CONNECTED_LAST_SESSION, eg.kVF.PENDING_MEMBER, eg.kVF.STREAMER_MODE, eg.kVF.SCHEDULED_MAINTENANCE],
    ez = {
        [eg.kVF.GIFTING_PROMOTION_REMINDER]: {
            predicate: () => {
                let { enabled: e } = L.Ys.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 }),
                    { enabled: t } = L.ZP.getCurrentConfig({ location: 'NoticeStore' }, { autoTrackExposure: !1 });
                return e && t && (0, O.H4)(s.z.GIFTING_PROMOTION_DESKTOP_FIRST_TIME_COACHMARK).isDismissed && !ew(eg.kVF.GIFTING_PROMOTION_REMINDER);
            }
        },
        [eg.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, C.g)().show && !ew(eg.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: l()().add(3, 'hours').toDate() })
        },
        [eg.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: (e) => {
                let { currentUser: t, selectedGuildId: n } = e;
                if (null == n) return !1;
                let r = $.ZP.getMember(n, t.id);
                return null != r && !r.isPending && (0, m.EY)(r);
            }
        },
        [eg.kVF.QUARANTINED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return t.hasFlag(eg.xW$.QUARANTINED);
            }
        },
        [eg.kVF.VIEWING_ROLES]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return y.Z.isViewingRoles(t);
            }
        },
        [eg.kVF.INVITED_TO_SPEAK]: {
            predicate: (e) => {
                let { voiceState: t } = e;
                return (0, B.gf)(t) === B.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eg.kVF.LURKING_GUILD]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && h.Z.isLurking(t);
            }
        },
        [eg.kVF.VOICE_DISABLED]: { predicate: () => null != el.Z.getRemoteDisconnectVoiceChannelId() },
        [eg.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != el.Z.getLastSessionVoiceChannelId() },
        [eg.kVF.NO_INPUT_DETECTED]: { predicate: () => S.Z.hasActiveErrorOfType(T.u.NO_AUDIO_INPUT_DETECTED) },
        [eg.kVF.NO_INPUT_DEVICES_DETECTED]: { predicate: () => S.Z.hasActiveErrorOfType(T.u.NO_INPUT_DEVICES) },
        [eg.kVF.H264_DISABLED]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e,
                    n = q.Z.getChannel(t);
                return !et.Z.getOpenH264() && null != t && e_.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eg.kVF.HARDWARE_MUTE]: {
            predicate: () => el.Z.isConnected() && et.Z.isHardwareMute() && et.Z.isEnableHardwareMuteNotice(),
            metadata: () => {
                let e = et.Z.getInputDeviceId(),
                    t = X.Z.getVendor(e),
                    n = X.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eg.kVF.DISPATCH_ERROR]: {
            predicate: () => null != eR.Z.getLastError(),
            metadata: () => ({ error: eR.Z.getLastError() })
        },
        [eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eP.Z.getLastProgress(),
            metadata: () => eP.Z.getLastProgress()
        },
        [eg.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => W.Z.wasAutoPaused() },
        [eg.kVF.BLOCKED_BY_PROXY]: { predicate: () => !ew(eg.kVF.BLOCKED_BY_PROXY) && F.Z.blockedByProxy && x.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eg.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && !t.isClaimed();
            }
        },
        [eg.kVF.PENDING_MEMBER]: {
            predicate: (e) => {
                var t, n, r;
                let { selectedGuildId: i, currentUser: l } = e;
                return null != (r = null != i && null != l && !(null == (t = ee.Z.getGuild(i)) ? void 0 : t.hasFeature(eg.oNc.GUILD_ONBOARDING)) && (null == (n = $.ZP.getMember(i, l.id)) ? void 0 : n.isPending)) && r;
            }
        },
        [eg.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, v.tq)() },
        [eg.kVF.CORRUPT_INSTALLATION]: { predicate: () => ef.isPlatformEmbedded && (!a.Z.supported() || eC.Z.isCorruptInstallation()) },
        [eg.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: (e) => {
                let { voiceChannelId: t } = e;
                return null != t && e_.Z.hasVideo(t) && !et.Z.supports(eb.AN.VIDEO) && !ew(eg.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return eA.ZP.canRedeemPremiumPerks(t) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !ew(eg.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && Q.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => Q.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eg.kVF.STREAMER_MODE]: { predicate: () => ec.Z.enabled },
        [eg.kVF.DOWNLOAD_NAG]: { predicate: () => !ef.isPlatformEmbedded && !ew(eg.kVF.DOWNLOAD_NAG) },
        [eg.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != es.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = es.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eg.kVF.SURVEY]: {
            predicate: () => null != eu.Z.getCurrentSurvey(),
            metadata: () => eu.Z.getCurrentSurvey()
        },
        [eg.kVF.SERVER_USAGE_SURVEY]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e;
                return null != t && P.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !ew(eg.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: (e) => {
                let { selectedGuildId: t, currentUser: n } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eg.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eg.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eg.kVF.CONNECT_SPOTIFY]: { predicate: () => !W.Z.hasConnectedAccount() && f.ZP.isObservedAppRunning(E.Z.get(eg.ABu.SPOTIFY).name) && !ew(eg.kVF.CONNECT_SPOTIFY) },
        [eg.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.arch) === 'ia32' && (null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eg.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eg.kVF.MACOS_19_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === d.Z || void 0 === d.Z ? void 0 : d.Z.process.platform) === 'darwin')
                    try {
                        return 20 > parseInt(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release.split('.')[0]);
                    } catch (e) {}
                return !1;
            },
            metadata: () => ({ dismissUntil: l()().add(5, 'days').toDate() })
        },
        [eg.kVF.CONNECT_PLAYSTATION]: { predicate: () => J.Z.isSuggestedAccountType(eg.ABu.PLAYSTATION) && null == J.Z.getAccount(null, eg.ABu.PLAYSTATION) && !ew(eg.kVF.CONNECT_PLAYSTATION) },
        [eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => eT.Z.getAlmostExpiringTrialOffers([eD.Si.TIER_2]).length > 0 && !ew(eg.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eg.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => eT.Z.getAlmostExpiringTrialOffers([eD.Si.TIER_0]).length > 0 && !ew(eg.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eg.kVF.PREMIUM_UNCANCEL]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eg.O0b.CANCELED && 1 >= l()().diff(l()(t.canceledAt), 'days'),
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = null != t && t.status === eg.O0b.CANCELED && !o && r <= 7 && r >= 0 && (0, eA.M5)(n, eD.p9.TIER_2) && !i && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eg.kVF.PREMIUM_UNCANCEL) && a;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, eA.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eA.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eg.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t ? l()(t.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != t ? l()(t.currentPeriodEnd).diff(l()(t.currentPeriodStart).startOf('day'), 'days') : 0,
                    o = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    a = eS.Z.applicationIdsFetched.has(eD.CL),
                    s = eS.Z.getForApplication(eD.CL),
                    c = null != t ? (0, eA.Af)(t) : null,
                    u = null != c ? eA.ZP.getSkuIdForPlan(c.planId) : null,
                    d =
                        null != s &&
                        null != c &&
                        Array.from(s).filter((e) => {
                            let { skuId: t, consumed: n } = e;
                            return !n && t === u;
                        }).length > 0,
                    E = null != t && r <= (i > 14 ? 7 : 2) && r >= 0 && t.status !== eg.O0b.PAST_DUE && !o && a && !d && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eg.kVF.PREMIUM_MISSING_PAYMENT) && E;
            },
            metadata: (e) => {
                var t;
                let { premiumSubscription: n } = e,
                    r = null != n ? l()(n.currentPeriodEnd).diff(l()().startOf('day'), 'days') : 0,
                    i = null != n ? (null == (t = (0, eA.Af)(n)) ? void 0 : t.planId) : null;
                return {
                    daysLeft: r,
                    premiumType: null != i ? eA.ZP.getPremiumType(i) : null,
                    premiumSubscription: n
                };
            }
        },
        [eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && null != t.paymentSourceId ? eN.Z.getPaymentSource(t.paymentSourceId) : null,
                    i = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    o = null != t && t.status === eg.O0b.PAST_DUE && !i && null != r && r.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eg.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && o;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && t.status === eg.O0b.PAST_DUE && !r && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eg.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && i;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eg.kVF.MFA_SMS_BACKUP]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eg.xW$.MFA_SMS) && !t.hasFlag(eg.xW$.STAFF) && !t.hasFlag(eg.xW$.PARTNER) && !ew(eg.kVF.MFA_SMS_BACKUP);
            }
        },
        [eg.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != ep.Z.testModeApplicationId,
            metadata: () => {
                if (null == ep.Z.testModeApplicationId) return {};
                let e = ep.Z.testModeApplicationId,
                    t = _.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eg.kVF.PREMIUM_REACTIVATE]: { predicate: () => !ew(eg.kVF.PREMIUM_REACTIVATE) && Z.Z.shouldShowReactivateNotice() },
        [eg.kVF.LOCALIZED_PRICING]: {
            predicate: (e) => {
                let { isLocalizedPromoEnabled: t } = e;
                return !ew(eg.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return { premiumSubscription: t };
            }
        },
        [eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: (e) => {
                let { premiumSubscription: t, currentUser: n } = e,
                    r = null != t && l()(t.currentPeriodEnd).isBefore(l()()),
                    i = null != t && null != t.paymentSourceId ? eN.Z.getPaymentSource(t.paymentSourceId) : null,
                    o = null != i && eh.Uk.has(i.type),
                    a = null != t && t.status === eg.O0b.PAST_DUE && !r && o && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !ew(eg.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && a;
            },
            metadata: (e) => {
                let { premiumSubscription: t } = e;
                return null == t
                    ? {
                          daysPastDue: 0,
                          dismissUntil: l()().toDate()
                      }
                    : {
                          daysPastDue: t.status === eg.O0b.PAST_DUE ? l()().diff(t.currentPeriodStart, 'days') : 0,
                          dismissUntil: (0, eA.lY)(t).expiresDate.toDate()
                      };
            }
        },
        [eg.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, U.e)() && !ew(eg.kVF.POMELO_ELIGIBLE) && !(0, b.ov)() },
        [eg.kVF.UU_MIGRATION]: { predicate: () => (0, U.e)() && !ew(eg.kVF.UU_MIGRATION) && (0, b.ov)() },
        [eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: (e) => {
                let { selectedGuildId: t } = e,
                    n = null != t ? ee.Z.getGuild(t) : null;
                return (null != t && null != D.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eg.oNc.COMMUNITY)) && !ew(eg.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION)) || !1;
            },
            metadata: (e) => {
                let { selectedGuildId: t } = e,
                    n = { dismissUntil: l()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = D.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eg.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !ew(eg.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== N.Z.getEligibleGuildsForNagActivate().length && (0, I.Lm)() },
        [eg.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: (e) => {
                let { currentUser: t } = e;
                return G.SI(t);
            }
        },
        [eg.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = H.Z.getCurrentUserActiveStream();
                if (null == e) return !1;
                let t = (0, R.V9)(e),
                    n = V.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= ey.Ot;
            },
            metadata: () => {
                let e = H.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, R.V9)(e) : null };
            }
        },
        [eg.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: (e) => {
                var t;
                let { currentUser: n } = e,
                    r = null != (t = eN.Z.paymentSources) ? t : {};
                return M.Z.getIsTargeted() && !(0, eA.I5)(n) && 0 !== Object.keys(r).length && (0, k.Y)();
            }
        },
        [eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR]: {
            predicate: () => !ew(eg.kVF.BLOCK_USER_FEEDBACK_NAGBAR) && w.S(),
            metadata: () => ({
                dismissUntil: l()().add(180, 'days').toDate(),
                sampleRate: 0.1
            })
        }
    };
function eH() {
    var e, t, n;
    if (!A.Z.isConnected()) return !1;
    eF = null;
    let r = eE.default.getCurrentUser();
    if (null == r) return !1;
    let i = eO.ZP.getPremiumSubscription(),
        l = eI.Z.isLocalizedPromoEnabled,
        o = ea.Z.getGuildId(),
        a = eo.Z.getVoiceChannelId(),
        s = null != a ? e_.Z.getVoiceStateForChannel(a) : null;
    for (let n of em.a ? eB : eW)
        if (
            null != ez[n] &&
            ez[n].predicate({
                selectedGuildId: o,
                voiceChannelId: a,
                voiceState: s,
                currentUser: r,
                premiumSubscription: i,
                isLocalizedPromoEnabled: l
            })
        ) {
            let l =
                null == (e = (t = ez[n]).metadata)
                    ? void 0
                    : e.call(t, {
                          currentUser: r,
                          premiumSubscription: i,
                          selectedGuildId: o
                      });
            eF = (function (e, t) {
                return (
                    (t = null != t ? t : {}),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(t)).forEach(function (n) {
                              Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
                          }),
                    e
                );
            })(
                (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                eU(e, t, n[t]);
                            });
                    }
                    return e;
                })({}, ex),
                {
                    type: n,
                    metadata: l
                }
            );
            break;
        }
    if (null != eF) {
        (null == (n = eF.metadata) ? void 0 : n.sampleRate) != null && null == ej[eF.type] && (ej[eF.type] = Math.random() <= eF.metadata.sampleRate);
        let e = !1 === ej[eF.type];
        (ew(eF.type) || e) && (eF = null);
    }
}
function eY() {
    return ec.Z.enabled || delete ev[eg.kVF.STREAMER_MODE], eH();
}
class eK extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([eu.Z, ei.Z, Q.Z, ea.Z, j.Z, eT.Z, K.Z, J.Z, z.Z, g.Z, V.Z, H.Z], eH), this.waitFor(eE.default, es.Z, ee.Z, $.ZP, el.Z, et.Z, ec.Z, p.Z, ea.Z, ed.Z, W.Z, f.ZP, ei.Z, eR.Z, eP.Z, ep.Z, en.Z, eO.ZP, eC.Z, Q.Z, eN.Z, er.Z, j.Z, eS.Z, eT.Z, J.Z, h.Z, N.Z, F.Z, V.Z, H.Z);
    }
    hasNotice() {
        return null != eF && null != eF.type;
    }
    getNotice() {
        return null == ed.Z.getAction() ? eF : null;
    }
    isNoticeDismissed(e) {
        return ew(e);
    }
}
eU(eK, 'displayName', 'NoticeStore');
let eX = new eK(u.Z, {
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
    STREAMER_MODE_UPDATE: eY,
    RUNNING_STREAMER_TOOLS_CHANGE: eY,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete ev[eg.kVF.DISPATCH_ERROR], eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete ev[eg.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], eH();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return eH();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return eH();
    },
    NOTICE_SHOW: function (e) {
        eF = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eF && (null == e.id || e.id === eF.id) && (eG(eF.type, e.isTemporary, e.untilAtLeast), eH());
    },
    NOTICE_DISABLE: function (e) {
        let { noticeType: t } = e;
        return eG(t), eH();
    },
    LOGOUT: function () {
        (ev = {}), (ej = {}), (eF = null);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: eH,
    AUTO_MODERATION_MENTION_RAID_DETECTION: eH,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: eH,
    PROXY_BLOCKED_REQUEST: eH,
    REPORT_AV_ERROR: eH
});
