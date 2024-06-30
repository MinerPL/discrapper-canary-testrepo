n.d(t, {
    m: function () {
        return ej;
    }
}), n(47120);
var i, a, s, l, r = n(913527), o = n.n(r), c = n(442837), d = n(743426), u = n(704215), _ = n(433517), E = n(570140), m = n(579806), I = n(726542), T = n(812206), h = n(223892), N = n(674525), f = n(605236), p = n(524347), C = n(853197), g = n(353926), S = n(594190), A = n(38618), x = n(569545), O = n(615365), R = n(528011), M = n(487419), v = n(715903), L = n(223606), Z = n(150340), P = n(160404), b = n(41776), D = n(347649), j = n(332473), U = n(30684), y = n(616106), B = n(995598), k = n(774276), G = n(518638), F = n(1844), w = n(621615), V = n(417626), H = n(569984), Y = n(523255), W = n(768419), z = n(590415), K = n(581883), Q = n(199902), q = n(314897), X = n(881998), J = n(463395), $ = n(592125), ee = n(553795), et = n(427123), en = n(271383), ei = n(430824), ea = n(131951), es = n(292959), el = n(496675), er = n(571474), eo = n(19780), ec = n(944486), ed = n(914010), eu = n(215427), e_ = n(246946), eE = n(558724), em = n(23434), eI = n(594174), eT = n(979651), eh = n(351402), eN = n(853872), ef = n(78839), ep = n(295226), eC = n(580130), eg = n(695103), eS = n(358085), eA = n(74538), ex = n(922156), eO = n(436181), eR = n(941128), eM = n(981631), ev = n(188785), eL = n(702512), eZ = n(474936), eP = n(46140), eb = n(231338), eD = n(65154);
let ej = {
        [eM.kVF.LOCALIZED_PRICING]: u.z.NAGBAR_NOTICE_LOCALIZED_PRICING,
        [eM.kVF.DOWNLOAD_NAG]: u.z.NAGBAR_NOTICE_DOWNLOAD,
        [eM.kVF.CONNECT_SPOTIFY]: u.z.NAGBAR_NOTICE_CONNECT_SPOTIFY,
        [eM.kVF.CONNECT_PLAYSTATION]: u.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION,
        [eM.kVF.MFA_SMS_BACKUP]: u.z.NAGBAR_NOTICE_MFA_SMS_BACKUP,
        [eM.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING,
        [eM.kVF.PREMIUM_REACTIVATE]: u.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE,
        [eM.kVF.DROPS_GO_LIVE_BANNER]: u.z.QUEST_2_GO_LIVE_BANNER,
        [eM.kVF.DROPS_ENDED_INCOMPLETE]: u.z.QUEST_2_ENDED_INCOMPLETE,
        [eM.kVF.BOUNCED_EMAIL_DETECTED]: u.z.NAGBAR_BOUNCED_EMAIL_NOTICE,
        [eM.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: u.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION,
        [eM.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: u.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING,
        [eM.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR]: u.z.GUILD_ONBOARDING_UPSELL_NAGBAR,
        [eM.kVF.POMELO_ELIGIBLE]: u.z.NAGBAR_NOTICE_POMELO,
        [eM.kVF.UU_MIGRATION]: u.z.UU_MIGRATION_NOTICE,
        [eM.kVF.CHECKOUT_RECOVERY_NAGBAR]: u.z.CHECKOUT_RECOVERY_NAGBAR
    }, eU = {
        [eM.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: 'hideDetectedOffPlatformPremiumPerkUpsell',
        [eM.kVF.PREMIUM_UNCANCEL]: 'hideUncancelReminder',
        [eM.kVF.PREMIUM_MISSING_PAYMENT]: 'hideMissingPaymentReminder',
        [eM.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: 'hidePastDueMissingPaymentReminder',
        [eM.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: 'hidePastDueInvalidPaymentReminder',
        [eM.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: 'hidePastDueOneTimePaymentReminder',
        [eM.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: 'hideAutoModerationMentionRaidDetectionNotice',
        [eM.kVF.GUILD_RAID_NOTIFICATION]: 'hideGuildRaidDetectionNotice',
        [eM.kVF.SERVER_USAGE_SURVEY]: 'hideServerUsageSurvey',
        [eM.kVF.WIN32_DEPRECATED_MESSAGE]: 'hideWin32DeprecationMessageNotice',
        [eM.kVF.WIN7_8_DEPRECATED_MESSAGE]: 'hideWin78DeprecationMessageNotice',
        [eM.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: 'hideMacOS17_18DeprecationMessageNotice',
        [eM.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: 'hidePremiumTier2TrialOfferEndingNotice'
    }, ey = new Set([
        eM.kVF.NO_INPUT_DETECTED,
        eM.kVF.STREAMER_MODE,
        eM.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eM.kVF.SPOTIFY_AUTO_PAUSED,
        eM.kVF.DISPATCH_ERROR,
        eM.kVF.DISPATCH_ERROR,
        eM.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eM.kVF.BLOCKED_BY_PROXY
    ]), eB = {}, ek = Object.freeze({
        id: null,
        message: null,
        buttonText: null,
        callback: void 0,
        metadata: null
    }), eG = null;
function eF(e) {
    return eU[e] + '-untilAtLeast';
}
function ew(e, t, n) {
    var i, a, s;
    if (null == e)
        return;
    let l = eU[e];
    if (null != l && !t && _.K.set(l, !0), ey.has(e) && (eB[e] = !0), null != n && null != l) {
        ;
        i = e, a = n, _.K.set(eF(i), a.format('YYYY-MM-DDTHH:mm:ss.SSSZ'));
    } else {
        ;
        s = e, _.K.remove(eF(s));
    }
}
function eV(e) {
    if (null == e)
        return !1;
    let t = function (e) {
        let {enabled: t} = k.cI.getCurrentConfig({ location: 'NoticeStore_isNoticeDismissed' }, {
            autoTrackExposure: !0,
            disable: e !== eM.kVF.PREMIUM_TIER_2_TRIAL_ENDING
        });
        return t ? null : ej[e];
    }(e);
    if (null != t)
        return (0, f.un)(t);
    let n = eU[e];
    if (null != n) {
        let t = function (e) {
            let t = _.K.get(eF(e));
            return null != t ? o()(t) : null;
        }(e);
        if (null != t)
            return null == t ? void 0 : t.isAfter(o()());
    }
    let i = eB[e];
    return !!i || (null != n && '' !== n ? _.K.get(n) : !!ey.has(e) && i);
}
let eH = [
        eM.kVF.QUARANTINED,
        eM.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eM.kVF.VIEWING_ROLES,
        eM.kVF.INVITED_TO_SPEAK,
        eM.kVF.LURKING_GUILD,
        eM.kVF.VOICE_DISABLED,
        eM.kVF.NO_INPUT_DETECTED,
        eM.kVF.HARDWARE_MUTE,
        eM.kVF.H264_DISABLED,
        eM.kVF.DISPATCH_ERROR,
        eM.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eM.kVF.SPOTIFY_AUTO_PAUSED,
        eM.kVF.DROPS_PROGRESS_INTERRUPTION,
        eM.kVF.WIN32_DEPRECATED_MESSAGE,
        eM.kVF.WIN7_8_DEPRECATED_MESSAGE,
        eM.kVF.MACOS_17_18_DEPRECATED_MESSAGE,
        eM.kVF.BLOCKED_BY_PROXY,
        eM.kVF.VOICE_CONNECTED_LAST_SESSION,
        eM.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
        eM.kVF.GUILD_RAID_NOTIFICATION,
        eM.kVF.QUESTS_PROGRESS_INTERRUPTION,
        eM.kVF.UNCLAIMED_ACCOUNT,
        eM.kVF.POMELO_ELIGIBLE,
        eM.kVF.PENDING_MEMBER,
        eM.kVF.OUTBOUND_PROMOTION,
        eM.kVF.CORRUPT_INSTALLATION,
        eM.kVF.VIDEO_UNSUPPORTED_BROWSER,
        eM.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
        eM.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL,
        eM.kVF.STREAMER_MODE,
        eM.kVF.SCHEDULED_MAINTENANCE,
        eM.kVF.BOUNCED_EMAIL_DETECTED,
        eM.kVF.UNVERIFIED_ACCOUNT,
        eM.kVF.PREMIUM_TIER_2_TRIAL_ENDING,
        eM.kVF.PREMIUM_TIER_0_TRIAL_ENDING,
        eM.kVF.PREMIUM_UNCANCEL,
        eM.kVF.PREMIUM_MISSING_PAYMENT,
        eM.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
        eM.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
        eM.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
        eM.kVF.PREMIUM_REACTIVATE,
        eM.kVF.ACTIVATE_SERVER_SUBSCRIPTION,
        eM.kVF.MFA_SMS_BACKUP,
        eM.kVF.APPLICATION_TEST_MODE,
        eM.kVF.LOCALIZED_PRICING,
        eM.kVF.DOWNLOAD_NAG,
        eM.kVF.CONNECT_SPOTIFY,
        eM.kVF.CONNECT_PLAYSTATION,
        eM.kVF.SURVEY,
        eM.kVF.SERVER_USAGE_SURVEY,
        eM.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
        eM.kVF.DROPS_GO_LIVE_BANNER,
        eM.kVF.DROPS_ENDED_INCOMPLETE,
        eM.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR,
        eM.kVF.UU_MIGRATION,
        eM.kVF.CHECKOUT_RECOVERY_NAGBAR
    ], eY = [
        eM.kVF.QUARANTINED,
        eM.kVF.AUTOMOD_QUARANTINED_USER_PROFILE,
        eM.kVF.VIEWING_ROLES,
        eM.kVF.INVITED_TO_SPEAK,
        eM.kVF.LURKING_GUILD,
        eM.kVF.VOICE_DISABLED,
        eM.kVF.NO_INPUT_DETECTED,
        eM.kVF.HARDWARE_MUTE,
        eM.kVF.H264_DISABLED,
        eM.kVF.DISPATCH_ERROR,
        eM.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS,
        eM.kVF.SPOTIFY_AUTO_PAUSED,
        eM.kVF.BLOCKED_BY_PROXY,
        eM.kVF.VOICE_CONNECTED_LAST_SESSION,
        eM.kVF.PENDING_MEMBER,
        eM.kVF.STREAMER_MODE,
        eM.kVF.SCHEDULED_MAINTENANCE
    ], eW = {
        [eM.kVF.GUILD_RAID_NOTIFICATION]: {
            predicate: () => (0, R.g)().show && !eV(eM.kVF.GUILD_RAID_NOTIFICATION),
            metadata: () => ({ dismissUntil: o()().add(3, 'hours').toDate() })
        },
        [eM.kVF.AUTOMOD_QUARANTINED_USER_PROFILE]: {
            predicate: e => {
                let {
                    currentUser: t,
                    selectedGuildId: n
                } = e;
                if (null == n)
                    return !1;
                let i = en.ZP.getMember(n, t.id);
                return null != i && !i.isPending && (0, v.EY)(i);
            }
        },
        [eM.kVF.QUARANTINED]: {
            predicate: e => {
                let {currentUser: t} = e;
                return t.hasFlag(eM.xW$.QUARANTINED);
            }
        },
        [eM.kVF.VIEWING_ROLES]: {
            predicate: e => {
                let {selectedGuildId: t} = e;
                return P.Z.isViewingRoles(t);
            }
        },
        [eM.kVF.INVITED_TO_SPEAK]: {
            predicate: e => {
                let {voiceState: t} = e;
                return (0, z.gf)(t) === z.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
            }
        },
        [eM.kVF.LURKING_GUILD]: {
            predicate: e => {
                let {selectedGuildId: t} = e;
                return null != t && b.Z.isLurking(t);
            }
        },
        [eM.kVF.VOICE_DISABLED]: { predicate: () => null != eo.Z.getRemoteDisconnectVoiceChannelId() },
        [eM.kVF.VOICE_CONNECTED_LAST_SESSION]: { predicate: () => null != eo.Z.getLastSessionVoiceChannelId() },
        [eM.kVF.NO_INPUT_DETECTED]: {
            predicate: e => {
                let {
                        voiceChannelId: t,
                        voiceState: n
                    } = e, i = $.Z.getChannel(t), a = (null == i ? void 0 : i.isGuildStageVoice()) && (null == n ? void 0 : n.suppress);
                return !1 === ea.Z.getInputDetected() && !a;
            }
        },
        [eM.kVF.H264_DISABLED]: {
            predicate: e => {
                let {voiceChannelId: t} = e, n = $.Z.getChannel(t);
                return !ea.Z.getOpenH264() && null != t && eT.Z.hasVideo(t) && null != n && n.isGuildStageVoice();
            }
        },
        [eM.kVF.HARDWARE_MUTE]: {
            predicate: () => eo.Z.isConnected() && ea.Z.isHardwareMute(),
            metadata: () => {
                let e = ea.Z.getInputDeviceId(), t = J.Z.getVendor(e), n = J.Z.getModel(e);
                if (null != t && null != n)
                    return {
                        vendor: t,
                        model: n
                    };
            }
        },
        [eM.kVF.DISPATCH_ERROR]: {
            predicate: () => null != ex.Z.getLastError(),
            metadata: () => ({ error: ex.Z.getLastError() })
        },
        [eM.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS]: {
            predicate: () => null != eO.Z.getLastProgress(),
            metadata: () => eO.Z.getLastProgress()
        },
        [eM.kVF.SPOTIFY_AUTO_PAUSED]: { predicate: () => W.Z.wasAutoPaused() },
        [eM.kVF.BLOCKED_BY_PROXY]: { predicate: () => !eV(eM.kVF.BLOCKED_BY_PROXY) && V.Z.blockedByProxy && w.Z.getCurrentConfig({ location: 'notice_store' }).eligibleForNotice },
        [eM.kVF.UNCLAIMED_ACCOUNT]: {
            predicate: e => {
                let {currentUser: t} = e;
                return null != t && !t.isClaimed();
            }
        },
        [eM.kVF.PENDING_MEMBER]: {
            predicate: e => {
                var t, n, i;
                let {
                    selectedGuildId: a,
                    currentUser: s
                } = e;
                return null !== (i = null != a && null != s && !(null === (t = ei.Z.getGuild(a)) || void 0 === t ? void 0 : t.hasFeature(eM.oNc.GUILD_ONBOARDING)) && (null === (n = en.ZP.getMember(a, s.id)) || void 0 === n ? void 0 : n.isPending)) && void 0 !== i && i;
            }
        },
        [eM.kVF.OUTBOUND_PROMOTION]: { predicate: () => (0, G.tq)() },
        [eM.kVF.CORRUPT_INSTALLATION]: { predicate: () => eS.isPlatformEmbedded && (!d.Z.supported() || eR.Z.isCorruptInstallation()) },
        [eM.kVF.VIDEO_UNSUPPORTED_BROWSER]: {
            predicate: e => {
                let {voiceChannelId: t} = e;
                return null != t && eT.Z.hasVideo(t) && !ea.Z.supports(eD.AN.VIDEO) && !eV(eM.kVF.VIDEO_UNSUPPORTED_BROWSER);
            }
        },
        [eM.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK]: {
            predicate: e => {
                let {currentUser: t} = e;
                return eA.ZP.canRedeemPremiumPerks(t) && et.Z.getDetectedOffPlatformPremiumPerks().length > 0;
            },
            metadata: () => et.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eM.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL]: {
            predicate: () => !eV(eM.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL) && et.Z.getDetectedOffPlatformPremiumPerks().length > 0,
            metadata: () => et.Z.getDetectedOffPlatformPremiumPerks()[0]
        },
        [eM.kVF.STREAMER_MODE]: { predicate: () => e_.Z.enabled },
        [eM.kVF.DOWNLOAD_NAG]: { predicate: () => !eS.isPlatformEmbedded && !eV(eM.kVF.DOWNLOAD_NAG) },
        [eM.kVF.SCHEDULED_MAINTENANCE]: {
            predicate: () => null != eu.Z.getScheduledMaintenance(),
            metadata: () => {
                let e = eu.Z.getScheduledMaintenance();
                if (null != e)
                    return {
                        id: e.id,
                        start: new Date(e.scheduled_for),
                        end: new Date(e.scheduled_until)
                    };
            }
        },
        [eM.kVF.SURVEY]: {
            predicate: () => null != eE.Z.getCurrentSurvey(),
            metadata: () => eE.Z.getCurrentSurvey()
        },
        [eM.kVF.SERVER_USAGE_SURVEY]: {
            predicate: e => {
                let {selectedGuildId: t} = e;
                return null != t && O.Z.getCurrentConfig({ location: 'notice_store' }).showSurvey && !eV(eM.kVF.SERVER_USAGE_SURVEY);
            },
            metadata: e => {
                let {
                    selectedGuildId: t,
                    currentUser: n
                } = e;
                return {
                    selectedGuildId: t,
                    currentUser: n
                };
            }
        },
        [eM.kVF.UNVERIFIED_ACCOUNT]: {
            predicate: e => {
                let {currentUser: t} = e;
                return (null == t ? void 0 : t.email) != null && !t.verified;
            }
        },
        [eM.kVF.BOUNCED_EMAIL_DETECTED]: {
            predicate: e => {
                let {currentUser: t} = e;
                return null == t ? void 0 : t.hasBouncedEmail;
            }
        },
        [eM.kVF.CONNECT_SPOTIFY]: { predicate: () => !W.Z.hasConnectedAccount() && S.ZP.isObservedAppRunning(I.Z.get(eM.ABu.SPOTIFY).name) && !eV(eM.kVF.CONNECT_SPOTIFY) },
        [eM.kVF.WIN32_DEPRECATED_MESSAGE]: {
            predicate: () => (null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.arch) === 'ia32' && (null === m.Z || void 0 === m.Z ? void 0 : m.Z.process.platform) === 'win32',
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eM.kVF.WIN7_8_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === m.Z || void 0 === m.Z ? void 0 : m.Z.process.platform) === 'win32')
                    try {
                        return 10 > parseInt(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release.split('.')[0]);
                    } catch (e) {
                    }
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eM.kVF.MACOS_17_18_DEPRECATED_MESSAGE]: {
            predicate: () => {
                if ((null === m.Z || void 0 === m.Z ? void 0 : m.Z.process.platform) === 'darwin')
                    try {
                        return 19 > parseInt(null === m.Z || void 0 === m.Z ? void 0 : m.Z.os.release.split('.')[0]);
                    } catch (e) {
                    }
                return !1;
            },
            metadata: () => ({ dismissUntil: o()().add(5, 'days').toDate() })
        },
        [eM.kVF.CONNECT_PLAYSTATION]: { predicate: () => ee.Z.isSuggestedAccountType(eM.ABu.PLAYSTATION) && null == ee.Z.getAccount(null, eM.ABu.PLAYSTATION) && !eV(eM.kVF.CONNECT_PLAYSTATION) },
        [eM.kVF.PREMIUM_TIER_2_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([eZ.Si.TIER_2]).length > 0 && !eV(eM.kVF.PREMIUM_TIER_2_TRIAL_ENDING) },
        [eM.kVF.PREMIUM_TIER_0_TRIAL_ENDING]: { predicate: () => ep.Z.getAlmostExpiringTrialOffers([eZ.Si.TIER_0]).length > 0 && !eV(eM.kVF.PREMIUM_TIER_0_TRIAL_ENDING) },
        [eM.kVF.PREMIUM_UNCANCEL]: {
            predicate: e => {
                let {
                        premiumSubscription: t,
                        currentUser: n
                    } = e, i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0, a = (null == t ? void 0 : t.canceledAt) != null && (null == t ? void 0 : t.status) === eM.O0b.CANCELED && 1 >= o()().diff(o()(t.canceledAt), 'days'), s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = null != t && t.status === eM.O0b.CANCELED && !s && i <= 7 && i >= 0 && (0, eA.M5)(n, eZ.p9.TIER_2) && !a && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eM.kVF.PREMIUM_UNCANCEL) && l;
            },
            metadata: e => {
                var t;
                let {premiumSubscription: n} = e, i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0, a = null != n ? null === (t = (0, eA.Af)(n)) || void 0 === t ? void 0 : t.planId : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eA.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [eM.kVF.PREMIUM_MISSING_PAYMENT]: {
            predicate: e => {
                let {
                        premiumSubscription: t,
                        currentUser: n
                    } = e, i = null != t ? o()(t.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0, a = null != t ? o()(t.currentPeriodEnd).diff(o()(t.currentPeriodStart).startOf('day'), 'days') : 0, s = null != t && o()(t.currentPeriodEnd).isBefore(o()()), l = eC.Z.applicationIdsFetched.has(eZ.RQ), r = eC.Z.getForApplication(eZ.RQ), c = null != t ? (0, eA.Af)(t) : null, d = null != c ? eA.ZP.getSkuIdForPlan(c.planId) : null, u = null != r && null != c && Array.from(r).filter(e => {
                        let {
                            skuId: t,
                            consumed: n
                        } = e;
                        return !n && t === d;
                    }).length > 0, _ = null != t && i <= (a > 14 ? 7 : 2) && i >= 0 && t.status !== eM.O0b.PAST_DUE && !s && l && !u && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eM.kVF.PREMIUM_MISSING_PAYMENT) && _;
            },
            metadata: e => {
                var t;
                let {premiumSubscription: n} = e, i = null != n ? o()(n.currentPeriodEnd).diff(o()().startOf('day'), 'days') : 0, a = null != n ? null === (t = (0, eA.Af)(n)) || void 0 === t ? void 0 : t.planId : null;
                return {
                    daysLeft: i,
                    premiumType: null != a ? eA.ZP.getPremiumType(a) : null,
                    premiumSubscription: n
                };
            }
        },
        [eM.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT]: {
            predicate: e => {
                let {
                        premiumSubscription: t,
                        currentUser: n
                    } = e, i = null != t && null != t.paymentSourceId ? eN.Z.getPaymentSource(t.paymentSourceId) : null, a = null != t && o()(t.currentPeriodEnd).isBefore(o()()), s = null != t && t.status === eM.O0b.PAST_DUE && !a && null != i && i.invalid && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eM.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT) && s;
            },
            metadata: e => {
                let {premiumSubscription: t} = e;
                return { premiumSubscription: t };
            }
        },
        [eM.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT]: {
            predicate: e => {
                let {
                        premiumSubscription: t,
                        currentUser: n
                    } = e, i = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && t.status === eM.O0b.PAST_DUE && !i && null === t.paymentSourceId && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eM.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT) && a;
            },
            metadata: e => {
                let {premiumSubscription: t} = e;
                return { premiumSubscription: t };
            }
        },
        [eM.kVF.MFA_SMS_BACKUP]: {
            predicate: e => {
                let {currentUser: t} = e;
                return null != t && t.mfaEnabled && !t.hasFlag(eM.xW$.MFA_SMS) && !t.hasFlag(eM.xW$.STAFF) && !t.hasFlag(eM.xW$.PARTNER) && !eV(eM.kVF.MFA_SMS_BACKUP);
            }
        },
        [eM.kVF.APPLICATION_TEST_MODE]: {
            predicate: () => null != eg.Z.testModeApplicationId,
            metadata: () => {
                if (null == eg.Z.testModeApplicationId)
                    return {};
                let e = eg.Z.testModeApplicationId, t = T.Z.getApplication(e);
                return {
                    applicationName: null != t ? t.name : e,
                    applicationId: e
                };
            }
        },
        [eM.kVF.PREMIUM_REACTIVATE]: { predicate: () => !eV(eM.kVF.PREMIUM_REACTIVATE) && y.Z.shouldShowReactivateNotice() },
        [eM.kVF.LOCALIZED_PRICING]: {
            predicate: e => {
                let {isLocalizedPromoEnabled: t} = e;
                return !eV(eM.kVF.LOCALIZED_PRICING) && t;
            },
            metadata: e => {
                let {premiumSubscription: t} = e;
                return { premiumSubscription: t };
            }
        },
        [eM.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT]: {
            predicate: e => {
                let {
                        premiumSubscription: t,
                        currentUser: n
                    } = e, i = null != t && o()(t.currentPeriodEnd).isBefore(o()()), a = null != t && null != t.paymentSourceId ? eN.Z.getPaymentSource(t.paymentSourceId) : null, s = null != a && eb.Uk.has(a.type), l = null != t && t.status === eM.O0b.PAST_DUE && !i && s && !n.hasFreePremium() && !t.isPurchasedExternally;
                return !eV(eM.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT) && l;
            },
            metadata: e => {
                let {premiumSubscription: t} = e;
                if (null == t)
                    return {
                        daysPastDue: 0,
                        dismissUntil: o()().toDate()
                    };
                {
                    let e = t.status === eM.O0b.PAST_DUE ? o()().diff(t.currentPeriodStart, 'days') : 0;
                    return {
                        daysPastDue: e,
                        dismissUntil: (0, eA.lY)(t).expiresDate.toDate()
                    };
                }
            }
        },
        [eM.kVF.DROPS_GO_LIVE_BANNER]: {
            predicate: () => !eV(eM.kVF.DROPS_GO_LIVE_BANNER) && (0, f.un)(u.z.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, f.un)(u.z.QUEST_2_COMPLETION_TOOLTIP) && (0, C.Tn)(eL.X2.FORTNITE),
            metadata: () => ({ partnerGame: eL.X2.FORTNITE })
        },
        [eM.kVF.DROPS_PROGRESS_INTERRUPTION]: {
            predicate: () => p.Z.isCurrentQuestInterrupted && null != p.Z.currentDropQuestGameTitle,
            metadata: () => ({
                gameTitle: p.Z.currentDropQuestGameTitle,
                reloadCallback: () => window.location.reload(!0)
            })
        },
        [eM.kVF.POMELO_ELIGIBLE]: { predicate: () => (0, j.e)() && !eV(eM.kVF.POMELO_ELIGIBLE) && !(0, D.ov)() },
        [eM.kVF.DROPS_ENDED_INCOMPLETE]: {
            predicate: () => !eV(eM.kVF.DROPS_ENDED_INCOMPLETE) && (0, f.un)(u.z.QUEST_2_ENROLLMENT_TOOLTIP) && !(0, f.un)(u.z.QUEST_2_COMPLETION_TOOLTIP) && (0, C.FL)(eL.X2.FORTNITE),
            metadata: () => ({ partnerGame: eL.X2.FORTNITE })
        },
        [eM.kVF.UU_MIGRATION]: { predicate: () => (0, j.e)() && !eV(eM.kVF.UU_MIGRATION) && (0, D.ov)() },
        [eM.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION]: {
            predicate: e => {
                let {selectedGuildId: t} = e, n = null != t ? ei.Z.getGuild(t) : null;
                return null != t && null != L.Z.getMentionRaidDetected(t) && (null == n ? void 0 : n.hasFeature(eM.oNc.COMMUNITY)) && !eV(eM.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION) || !1;
            },
            metadata: e => {
                let {selectedGuildId: t} = e, n = { dismissUntil: o()().add(2, 'hours').toDate() };
                if (null != t) {
                    let e = L.Z.getMentionRaidDetected(t);
                    null != e && (n.decisionId = e.decisionId);
                }
                return n;
            }
        },
        [eM.kVF.ACTIVATE_SERVER_SUBSCRIPTION]: { predicate: () => !eV(eM.kVF.ACTIVATE_SERVER_SUBSCRIPTION) && 0 !== N.Z.getEligibleGuildsForNagActivate().length && (0, h.Lm)() },
        [eM.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR]: {
            predicate: e => {
                let {selectedGuildId: t} = e;
                return !eV(eM.kVF.GUILD_ONBOARDING_UPSELL_NAGBAR) && null != t && (0, Z.S)(t, u.z.GUILD_ONBOARDING_UPSELL_NAGBAR);
            }
        },
        [eM.kVF.SAFETY_USER_SENTIMENT_NAGBAR]: {
            predicate: e => {
                let {currentUser: t} = e;
                return Y.SI(t);
            }
        },
        [eM.kVF.QUESTS_PROGRESS_INTERRUPTION]: {
            predicate: () => {
                let e = Q.Z.getCurrentUserActiveStream();
                if (null == e)
                    return !1;
                let t = (0, x.V9)(e), n = H.Z.getStreamHeartbeatFailure(t);
                return null != n && Date.now() - n.firstFailedAt >= eP.Ot;
            },
            metadata: () => {
                let e = Q.Z.getCurrentUserActiveStream();
                return { streamKey: null != e ? (0, x.V9)(e) : null };
            }
        },
        [eM.kVF.CHECKOUT_RECOVERY_NAGBAR]: {
            predicate: e => {
                var t;
                let {currentUser: n} = e, i = null !== (t = eN.Z.paymentSources) && void 0 !== t ? t : {};
                return U.Z.getIsTargeted() && !(0, eA.I5)(n) && 0 !== Object.keys(i).length && (0, B.Y)();
            }
        }
    };
function ez() {
    if (!A.Z.isConnected())
        return !1;
    eG = null;
    let e = eI.default.getCurrentUser();
    if (null == e)
        return !1;
    let t = ef.ZP.getPremiumSubscription(), n = eh.Z.isLocalizedPromoEnabled, i = ed.Z.getGuildId(), a = ec.Z.getVoiceChannelId(), s = null != a ? eT.Z.getVoiceStateForChannel(a) : null;
    for (let o of ev.a ? eY : eH) {
        if (null != eW[o]) {
            if (eW[o].predicate({
                    selectedGuildId: i,
                    voiceChannelId: a,
                    voiceState: s,
                    currentUser: e,
                    premiumSubscription: t,
                    isLocalizedPromoEnabled: n
                })) {
                var l, r;
                let n = null === (l = (r = eW[o]).metadata) || void 0 === l ? void 0 : l.call(r, {
                    currentUser: e,
                    premiumSubscription: t,
                    selectedGuildId: i
                });
                eG = {
                    ...ek,
                    type: o,
                    metadata: n
                };
                break;
            }
        }
    }
    null != eG && eV(eG.type) && (eG = null);
}
function eK() {
    return !e_.Z.enabled && delete eB[eM.kVF.STREAMER_MODE], ez();
}
class eQ extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([
            eE.Z,
            er.Z,
            et.Z,
            ed.Z,
            F.Z,
            ep.Z,
            X.Z,
            ee.Z,
            K.Z,
            M.Z,
            H.Z,
            Q.Z
        ], ez), this.waitFor(eI.default, eu.Z, ei.Z, en.ZP, eo.Z, ea.Z, e_.Z, g.Z, ed.Z, em.Z, W.Z, S.ZP, er.Z, ex.Z, eO.Z, eg.Z, es.Z, ef.ZP, eR.Z, et.Z, eN.Z, el.Z, F.Z, eC.Z, ep.Z, ee.Z, b.Z, p.Z, N.Z, V.Z, H.Z, Q.Z);
    }
    hasNotice() {
        return null != eG && null != eG.type;
    }
    getNotice() {
        return null == em.Z.getAction() ? eG : null;
    }
    isNoticeDismissed(e) {
        return eV(e);
    }
}
l = 'NoticeStore', (s = 'displayName') in (a = eQ) ? Object.defineProperty(a, s, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = l, t.Z = new eQ(E.Z, {
    CURRENT_USER_UPDATE: ez,
    MEDIA_ENGINE_SET_AUDIO_ENABLED: ez,
    CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID: ez,
    CLEAR_LAST_SESSION_VOICE_CHANNEL_ID: ez,
    STATUS_PAGE_SCHEDULED_MAINTENANCE: ez,
    STATUS_PAGE_SCHEDULED_MAINTENANCE_ACK: ez,
    GUILD_CREATE: ez,
    GUILD_DELETE: ez,
    AUDIO_INPUT_DETECTED: ez,
    AUDIO_SET_DISPLAY_SILENCE_WARNING: ez,
    CERTIFIED_DEVICES_SET: ez,
    AUDIO_SET_INPUT_DEVICE: ez,
    AUDIO_SET_OUTPUT_DEVICE: ez,
    MEDIA_ENGINE_DEVICES: ez,
    RTC_CONNECTION_STATE: ez,
    RPC_APP_AUTHENTICATED: ez,
    RPC_APP_DISCONNECTED: ez,
    USER_CONNECTIONS_UPDATE: ez,
    WINDOW_FOCUS: ez,
    INSTANT_INVITE_CREATE: ez,
    INSTANT_INVITE_REVOKE_SUCCESS: ez,
    SPOTIFY_PLAYER_PAUSE: ez,
    RUNNING_GAMES_CHANGE: ez,
    EXPERIMENTS_FETCH_SUCCESS: ez,
    PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS: ez,
    DEVELOPER_TEST_MODE_AUTHORIZATION_SUCCESS: ez,
    DEVELOPER_TEST_MODE_AUTHORIZATION_FAIL: ez,
    DEVELOPER_TEST_MODE_RESET: ez,
    BILLING_SUBSCRIPTION_FETCH_SUCCESS: ez,
    DISPATCH_APPLICATION_INSTALL: ez,
    IMPERSONATE_STOP: ez,
    IMPERSONATE_UPDATE: ez,
    GUILD_MEMBER_ADD: function (e) {
        return e.user.id === q.default.getId() && ez();
    },
    GUILD_MEMBER_UPDATE: ez,
    SURVEY_FETCHED: ez,
    ENTITLEMENT_FETCH_APPLICATION_SUCCESS: ez,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: ez,
    BILLING_SUBSCRIPTION_UPDATE_SUCCESS: ez,
    BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS: ez,
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e;
        return t.some(e => {
            let {userId: t} = e;
            return t !== q.default.getId();
        }) && ez();
    },
    STREAMER_MODE_UPDATE: eK,
    RUNNING_STREAMER_TOOLS_CHANGE: eK,
    DISPATCH_APPLICATION_ERROR: function () {
        return delete eB[eM.kVF.DISPATCH_ERROR], ez();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_START: function () {
        return delete eB[eM.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS], ez();
    },
    DISPATCH_APPLICATION_INSTALL_SCRIPTS_PROGRESS_UPDATE: function () {
        return ez();
    },
    DISPATCH_APPLICATION_LAUNCH_SETUP_COMPLETE: function () {
        return ez();
    },
    NOTICE_SHOW: function (e) {
        eG = e.notice;
    },
    NOTICE_DISMISS: function (e) {
        return null != eG && (null == e.id || e.id === eG.id) && (ew(eG.type, e.isTemporary, e.untilAtLeast), ez());
    },
    NOTICE_DISABLE: function (e) {
        let {noticeType: t} = e;
        return ew(t), ez();
    },
    LOGOUT: function () {
        eB = {}, eG = null;
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: ez,
    AUTO_MODERATION_MENTION_RAID_DETECTION: ez,
    CREATOR_MONETIZATION_NAG_ACTIVATE_ELIGIBLITY_FETCH_SUCCESS: ez,
    PROXY_BLOCKED_REQUEST: ez
});
