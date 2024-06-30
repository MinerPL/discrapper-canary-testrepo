n.d(t, {
    Z: function () {
        return ep;
    },
    c: function () {
        return eN;
    }
});
var i = n(735250), a = n(470079), s = n(913527), l = n.n(s), r = n(613828), o = n(442837), c = n(481060), d = n(668781), u = n(893776), _ = n(117266), E = n(37234), m = n(254854), I = n(195500), T = n(287734), h = n(205355), N = n(558381), f = n(223245), p = n(491428), C = n(401430), g = n(230711), S = n(726542), A = n(100527), x = n(906732), O = n(812206), R = n(391650), M = n(605236), v = n(749277), L = n(492435), Z = n(353926), P = n(506357), b = n(36459), D = n(236069), j = n(305325), U = n(281956), y = n(574650), B = n(665302), k = n(434404), G = n(918658), F = n(859428), w = n(963249), V = n(774276), H = n(14335), Y = n(246965), W = n(272008), z = n(523255), K = n(852923), Q = n(592125), q = n(430824), X = n(131951), J = n(19780), $ = n(914010), ee = n(594174), et = n(55563), en = n(695103), ei = n(933429), ea = n(285952), es = n(626135), el = n(63063), er = n(72924), eo = n(69499), ec = n(912193), ed = n(981631), eu = n(474936), e_ = n(610674), eE = n(65154), em = n(689938), eI = n(596791);
let eT = () => (0, i.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [
            (0, i.jsx)(c.NoticeCloseButton, {
                onClick: () => {
                    eN(), (0, ec.b)();
                }
            }),
            em.Z.Messages.NOTICE_NO_INPUT_DETECTED,
            (0, i.jsx)(c.NoticeButtonAnchor, {
                href: el.Z.getArticleURL(ed.BhN.NO_INPUT_DETECTED),
                children: em.Z.Messages.NOTICE_NO_INPUT_DETECTED_HELP_LINK_TEXT
            })
        ]
    }), eh = () => (0, i.jsxs)(c.Notice, {
        color: c.NoticeColors.DANGER,
        children: [
            (0, i.jsx)(c.NoticeCloseButton, {
                onClick: () => {
                    eN(), (0, ec.b)();
                }
            }),
            em.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS,
            (0, i.jsx)(c.NoticeButton, {
                onClick: () => {
                    (0, E.jN)(ed.S9g.USER_SETTINGS), g.Z.setSection(ed.oAB.VOICE);
                },
                children: em.Z.Messages.NOTICE_NO_INPUT_DETECTED_SETTINGS_LINK_TEXT
            })
        ]
    });
function eN(e) {
    m.Z.dismiss(null != e ? { untilAtLeast: l()(e) } : void 0);
}
let ef = 12633 == n.j ? a.memo(function () {
    var e, t, s;
    let m = (0, o.e7)([ee.default], () => ee.default.getCurrentUser()), A = (0, o.e7)([$.Z], () => $.Z.getGuildId()), ec = (0, o.e7)([ei.Z], () => ei.Z.getNotice()), ef = (0, o.e7)([q.Z], () => q.Z.getGuild(A)), {analyticsLocations: ep} = (0, x.ZP)(), eC = null == ec ? void 0 : ec.type, eg = (0, U.J)(A);
    a.useEffect(() => {
        null != eC && !function (e, t) {
            let n = { notice_type: e };
            null != t && (n.guild_id = t), es.default.track(ed.rMx.APP_NOTICE_VIEWED, n);
        }(eC, A);
    }, [
        eC,
        A
    ]), a.useEffect(() => {
        if (null != ec && ec.type === ed.kVF.SURVEY && null != ec.metadata) {
            let {metadata: e} = ec, t = Z.Z.getUserExperimentDescriptor(e.id);
            null != t && (0, L.W9)(e.id, t), (async () => {
                var e, t;
                (null === (e = ec.metadata) || void 0 === e ? void 0 : e.id) != null && await (0, p.g8)(null === (t = ec.metadata) || void 0 === t ? void 0 : t.id);
            })();
        }
    }, [ec]);
    let eS = function (e) {
        let {enabled: t} = (0, V.ZP)(!0, e !== ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING);
        return t || null == e ? null : ei.m[e];
    }(eC);
    if (null == ec)
        return null;
    if (null != eS)
        return (0, i.jsx)(v.A, {
            dismissibleContent: eS,
            noticeType: ec.type
        });
    let eA = null === (e = ec.metadata) || void 0 === e ? void 0 : e.premiumType;
    switch (ec.type) {
    case ed.kVF.LURKING_GUILD:
        return (0, i.jsx)(F.Z, {});
    case ed.kVF.PENDING_MEMBER:
        return (0, i.jsx)(y.Z, {});
    case ed.kVF.INVITED_TO_SPEAK:
        return (0, i.jsx)(K.Z, {});
    case ed.kVF.GUILD_RAID_NOTIFICATION:
        let {dismissUntil: ex} = ec.metadata;
        return (0, i.jsx)(P.Z, { onDismiss: () => eN(ex) });
    case ed.kVF.WIN32_DEPRECATED_MESSAGE:
        let {dismissUntil: eO} = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(eO),
                    noticeType: ed.kVF.WIN32_DEPRECATED_MESSAGE
                }),
                em.Z.Messages.WINDOWS_32_BIT_DEPRECATED_WARNING.format({ helpCenterLink: el.Z.getArticleURL(ed.BhN.WIN32_DEPRECATE) })
            ]
        });
    case ed.kVF.WIN7_8_DEPRECATED_MESSAGE:
        let {dismissUntil: eR} = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(eR),
                    noticeType: ed.kVF.WIN7_8_DEPRECATED_MESSAGE
                }),
                em.Z.Messages.WINDOWS_7_8_DEPRECATED_WARNING.format({ helpCenterLink: el.Z.getArticleURL(ed.BhN.WIN7_8_DEPRECATE) })
            ]
        });
    case ed.kVF.MACOS_17_18_DEPRECATED_MESSAGE:
        let {dismissUntil: eM} = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(eM),
                    noticeType: ed.kVF.MACOS_17_18_DEPRECATED_MESSAGE
                }),
                em.Z.Messages.MACOS_DEPRECATED_WARNING.format({ helpCenterLink: el.Z.getArticleURL(ed.BhN.MACOS_17_18_DEPRECATE) })
            ]
        });
    case ed.kVF.GENERIC:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DEFAULT,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.GENERIC
                }),
                ec.message,
                null != ec.buttonText ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    onClick: ec.callback,
                    noticeType: ed.kVF.GENERIC,
                    children: ec.buttonText
                }) : null
            ]
        });
    case ed.kVF.LAUNCH_GAME_FAILURE:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.LAUNCH_GAME_FAILURE
                }),
                ec.message,
                null != ec.buttonText ? (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    onClick: ec.callback,
                    noticeType: ed.kVF.LAUNCH_GAME_FAILURE,
                    children: ec.buttonText
                }) : null
            ]
        });
    case ed.kVF.VOICE_DISABLED:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        I.Z.clearRemoteDisconnectVoiceChannelId(), eN();
                    },
                    noticeType: ed.kVF.VOICE_DISABLED
                }),
                em.Z.Messages.NOTICE_CONNECTION_CONFLICT,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    onClick: () => {
                        let e = J.Z.getRemoteDisconnectVoiceChannelId();
                        null != e && null != Q.Z.getChannel(e) && T.default.selectVoiceChannel(e);
                    },
                    noticeType: ed.kVF.VOICE_DISABLED,
                    children: em.Z.Messages.RECONNECT
                })
            ]
        });
    case ed.kVF.VOICE_CONNECTED_LAST_SESSION:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DEFAULT,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        I.Z.clearLastSessionVoiceChannelId(), eN();
                    },
                    noticeType: ed.kVF.VOICE_CONNECTED_LAST_SESSION
                }),
                em.Z.Messages.NOTICE_VOICE_CONNECTED_LAST_SESSION,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    onClick: () => {
                        let e = J.Z.getLastSessionVoiceChannelId();
                        null != e && null != Q.Z.getChannel(e) && T.default.selectVoiceChannel(e);
                    },
                    noticeType: ed.kVF.VOICE_CONNECTED_LAST_SESSION,
                    children: em.Z.Messages.RECONNECT
                })
            ]
        });
    case ed.kVF.SPOTIFY_AUTO_PAUSED:
        let ev = S.Z.get(ed.ABu.SPOTIFY);
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.SPOTIFY_AUTO_PAUSED
                }),
                (0, i.jsx)('img', {
                    alt: '',
                    className: eI.platformIcon,
                    src: ev.icon.whiteSVG
                }),
                em.Z.Messages.NOTICE_SPOTIFY_AUTO_PAUSED,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    onClick: () => g.Z.open(ed.oAB.VOICE),
                    noticeType: ed.kVF.SPOTIFY_AUTO_PAUSED,
                    children: em.Z.Messages.VOICE_SETTINGS
                }),
                (0, i.jsx)(c.Anchor, {
                    className: eI.textLinkSmall,
                    href: el.Z.getArticleURL(ed.BhN.SPOTIFY_AUTO_PAUSED),
                    target: '_blank',
                    children: em.Z.Messages.NOTICE_WHATS_THIS
                })
            ]
        });
    case ed.kVF.UNCLAIMED_ACCOUNT:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DEFAULT,
            children: [
                em.Z.Messages.NOTICE_UNCLAIMED_ACCOUNT,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.UNCLAIMED_ACCOUNT,
                    onClick: () => eg && null != A ? (0, j.hk)(A) : R.j(),
                    children: em.Z.Messages.CLAIM_ACCOUNT
                })
            ]
        });
    case ed.kVF.UNVERIFIED_ACCOUNT:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DEFAULT,
            children: [
                em.Z.Messages.NOTICE_UNVERIFIED_ACCOUNT_UU,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.UNVERIFIED_ACCOUNT,
                    onClick: () => {
                        u.Z.verifyResend(), d.Z.show({
                            title: em.Z.Messages.VERIFICATION_EMAIL_TITLE,
                            body: em.Z.Messages.VERIFICATION_EMAIL_BODY.format({ email: null == m ? void 0 : m.email }),
                            secondaryConfirmText: em.Z.Messages.CHANGE_EMAIL,
                            onConfirmSecondary: R.j
                        });
                    },
                    children: em.Z.Messages.RESEND_EMAIL_SHORT
                })
            ]
        });
    case ed.kVF.SCHEDULED_MAINTENANCE:
        if (null == ec.metadata)
            return null;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DEFAULT,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => h.Z.ackScheduledMaintenance(),
                    noticeType: ed.kVF.SCHEDULED_MAINTENANCE
                }),
                em.Z.Messages.NOTICE_SCHEDULED_MAINTENANCE.format(ec.metadata),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: ''.concat(ed.yXt.STATUS, '/incidents/').concat(ec.metadata.id),
                    children: em.Z.Messages.LEARN_MORE
                })
            ]
        });
    case ed.kVF.NO_INPUT_DETECTED:
        if (!X.Z.supports(eE.AN.LOOPBACK))
            return (0, i.jsx)(eT, {});
        return (0, i.jsx)(eh, {});
    case ed.kVF.HARDWARE_MUTE:
        if (null == ec.metadata)
            return null;
        let {
            vendor: eL,
            model: eZ
        } = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                em.Z.Messages.NOTICE_HARDWARE_MUTE.format({
                    vendorName: eL.name,
                    modelName: eZ.name
                }),
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: eZ.url,
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    children: em.Z.Messages.SUPPORT
                })
            ]
        });
    case ed.kVF.STREAMER_MODE:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.STREAMER_MODE,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.STREAMER_MODE
                }),
                em.Z.Messages.NOTICE_STREAMER_MODE_TEXT,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    onClick: () => f.Z.setEnabled(!1),
                    noticeType: ed.kVF.STREAMER_MODE,
                    children: em.Z.Messages.DISABLE
                })
            ]
        });
    case ed.kVF.H264_DISABLED:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => {
                        eN();
                    }
                }),
                em.Z.Messages.NOTICE_H264_DISABLED_SETTINGS,
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        (0, E.jN)(ed.S9g.USER_SETTINGS), g.Z.setSection(ed.oAB.VOICE);
                    },
                    children: em.Z.Messages.NOTICE_H264_DISABLED_SETTINGS_LINK_TEXT
                })
            ]
        });
    case ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK:
        if (null == ec.metadata)
            return null;
        let {
                skuId: eP,
                applicationId: eb
            } = ec.metadata, eD = et.Z.get(eP), ej = O.Z.getApplication(eb);
        if (null == eD || null == ej)
            return null;
        let eU = { page: ed.ZY5.IN_APP };
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.PREMIUM_TIER_1,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => _.Z(eD.id),
                    noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK
                }),
                (0, i.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: eI.premiumIcon
                }),
                em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_MESSAGE.format({
                    applicationName: ej.name,
                    skuName: eD.name
                }),
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK,
                    onClick: () => (0, er.S)({
                        applicationId: ej.id,
                        skuId: eD.id,
                        openPremiumPaymentModal: () => {
                            (0, w.Z)({
                                initialPlanId: null,
                                subscriptionTier: eu.Si.TIER_2,
                                analyticsLocations: ep,
                                analyticsObject: eU
                            });
                        },
                        analyticsLocations: ep,
                        analyticsLocationObject: eU,
                        context: __OVERLAY__ ? ed.IlC.OVERLAY : ed.IlC.APP
                    }).then(() => _.Z(eD.id)),
                    children: em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_PREMIUM_PERK_BUTTON
                })
            ]
        });
    case ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL: {
            if (null == ec.metadata)
                return null;
            let {
                    skuId: e,
                    applicationId: t
                } = ec.metadata, n = et.Z.get(e), a = O.Z.getApplication(t);
            if (null == n || null == a)
                return null;
            return (0, i.jsxs)(c.Notice, {
                color: c.NoticeColors.PREMIUM_TIER_1,
                children: [
                    (0, i.jsx)(c.NoticeCloseButton, {
                        onClick: () => eN(),
                        noticeType: ed.kVF.DETECTED_OFF_PLATFORM_PREMIUM_PERK_UPSELL
                    }),
                    (0, i.jsx)(c.NitroWheelIcon, {
                        size: 'md',
                        color: 'currentColor',
                        className: eI.premiumIcon
                    }),
                    em.Z.Messages.NOTICE_DETECTED_OFF_PLATFORM_NO_PREMIUM_PERK_MESSAGE.format({
                        applicationName: a.name,
                        skuName: n.name
                    }),
                    (0, i.jsx)(c.NoticeButton, {
                        children: (0, i.jsx)(r.rU, {
                            onClick: () => eN(),
                            to: {
                                pathname: ed.Z5c.APPLICATION_STORE_LISTING_SKU(n.id),
                                state: { scrollRestoration: !1 }
                            },
                            children: em.Z.Messages.LEARN_MORE
                        })
                    })
                ]
            });
        }
    case ed.kVF.SURVEY: {
            let e = ec.metadata;
            if (null == e)
                return null;
            let {
                key: t,
                prompt: n,
                cta: a,
                url: s
            } = e;
            return (0, i.jsxs)(c.Notice, {
                color: c.NoticeColors.CUSTOM,
                children: [
                    (0, i.jsx)(c.NoticeCloseButton, {
                        noticeType: ed.kVF.SURVEY,
                        onClick: () => {
                            (0, p.hZ)(t, !0);
                        }
                    }),
                    n,
                    (0, i.jsx)(c.PrimaryCTANoticeButton, {
                        noticeType: ed.kVF.SURVEY,
                        onClick: () => {
                            window.open(s, '_blank'), (0, p.hZ)(t, !1);
                        },
                        children: a
                    })
                ]
            });
        }
    case ed.kVF.SERVER_USAGE_SURVEY:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.CUSTOM,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.SERVER_USAGE_SURVEY,
                    onClick: () => {
                        eN();
                    }
                }),
                em.Z.Messages.SERVER_USAGE_SURVEY_BODY.format({ guildName: null !== (t = null == ef ? void 0 : ef.name) && void 0 !== t ? t : 'this server' }),
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.SERVER_USAGE_SURVEY,
                    onClick: () => {
                        window.open('https://discord.sjc1.qualtrics.com/jfe/form/SV_9AHPmGasQ0EvpdQ?user_id='.concat(null == m ? void 0 : m.id, '&guild_id=').concat(null == ef ? void 0 : ef.id), '_blank'), eN();
                    },
                    additionalTrackingProps: { guild_id: null == ef ? void 0 : ef.id },
                    children: em.Z.Messages.SERVER_USAGE_SURVEY_CTA
                })
            ]
        });
    case ed.kVF.CORRUPT_INSTALLATION:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                em.Z.Messages.NOTICE_CORRUPT_INSTALLATION,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: el.Z.getArticleURL(ed.BhN.CORRUPT_INSTALLATION),
                    target: '_blank',
                    children: em.Z.Messages.NOTICE_CORRUPT_INSTALLATION_HELP_LINK_TEXT
                })
            ]
        });
    case ed.kVF.VIDEO_UNSUPPORTED_BROWSER:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.VIDEO_UNSUPPORTED_BROWSER
                }),
                em.Z.Messages.VIDEO_UNSUPPORTED_BROWSER_BODY,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.VIDEO_UNSUPPORTED_BROWSER,
                    onClick: () => {
                        (0, c.openModalLazy)(async () => {
                            let {default: e} = await Promise.resolve().then(n.bind(n, 431583));
                            return t => (0, i.jsx)(e, {
                                source: 'Video unsupported browser',
                                ...t
                            });
                        });
                    },
                    children: em.Z.Messages.DOWNLOAD
                })
            ]
        });
    case ed.kVF.DISPATCH_ERROR:
        if (null == ec.metadata)
            return null;
        let {error: ey} = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.DISPATCH_ERROR
                }),
                null == ey ? void 0 : ey.displayMessage,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.DISPATCH_ERROR,
                    onClick: () => (0, c.openModalLazy)(async () => {
                        let {default: e} = await n.e('20212').then(n.bind(n, 915194));
                        return t => (0, i.jsx)(e, { ...t });
                    }),
                    children: em.Z.Messages.LEARN_MORE
                })
            ]
        });
    case ed.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS:
        if (null == ec.metadata)
            return null;
        let {
            progress: eB,
            total: ek,
            name: eG
        } = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DEFAULT,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.DISPATCH_INSTALL_SCRIPT_PROGRESS
                }),
                (0, i.jsxs)(ea.Z, {
                    justify: ea.Z.Justify.CENTER,
                    children: [
                        null != eG ? em.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS_WITH_NAME.format({
                            name: ''.concat(eG),
                            progress: ''.concat(eB),
                            total: ''.concat(ek)
                        }) : em.Z.Messages.NOTICE_DISPATCH_INSTALL_SCRIPT_PROGRESS.format({
                            progress: ''.concat(eB),
                            total: ''.concat(ek)
                        }),
                        (0, i.jsx)(c.Spinner, {
                            type: c.Spinner.Type.PULSING_ELLIPSIS,
                            className: eI.ellipsis
                        })
                    ]
                })
            ]
        });
    case ed.kVF.APPLICATION_TEST_MODE:
        if (null == ec.metadata)
            return null;
        if (null != en.Z.testModeEmbeddedApplicationId)
            return (0, i.jsx)(c.Notice, {
                color: c.NoticeColors.WARNING,
                children: (0, i.jsxs)(ea.Z, {
                    justify: ea.Z.Justify.CENTER,
                    align: ea.Z.Align.CENTER,
                    children: [
                        (0, i.jsx)('div', { children: em.Z.Messages.NOTICE_EMBEDDED_APPLICATION_TEST_MODE.format({ applicationName: ec.metadata.applicationName }) }),
                        (0, i.jsx)(c.NoticeCloseButton, {
                            onClick: C.mc,
                            noticeType: ed.kVF.APPLICATION_TEST_MODE
                        })
                    ]
                })
            });
        return (0, i.jsx)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: (0, i.jsxs)(ea.Z, {
                justify: ea.Z.Justify.CENTER,
                align: ea.Z.Align.CENTER,
                children: [
                    (0, i.jsx)('div', { children: em.Z.Messages.NOTICE_APPLICATION_TEST_MODE.format({ applicationName: ec.metadata.applicationName }) }),
                    (0, i.jsx)(eo.Z, {
                        dropdownSize: eo.E.DropdownSizes.SMALL,
                        className: eI.testModeSKUSelector,
                        color: eo.E.Colors.WHITE,
                        look: eo.E.Looks.OUTLINED,
                        size: eo.E.Sizes.MIN,
                        onSKUSelect: e => N.yt(e.id, {
                            analyticsSource: {
                                page: null,
                                section: ed.jXE.NOTIFICATION_BAR,
                                object: ed.qAy.NAVIGATION_LINK
                            }
                        }),
                        applicationId: ec.metadata.applicationId,
                        children: em.Z.Messages.NOTICE_APPLICATION_TEST_MODE_GO_TO_LISTING
                    }),
                    (0, i.jsx)(c.NoticeCloseButton, {
                        onClick: C.mc,
                        noticeType: ed.kVF.APPLICATION_TEST_MODE
                    })
                ]
            })
        });
    case ed.kVF.OUTBOUND_PROMOTION:
        return (0, i.jsx)(H.Z, {});
    case ed.kVF.VIEWING_ROLES:
        return (0, i.jsx)(G.Z, {});
    case ed.kVF.PREMIUM_UNCANCEL:
        return (0, i.jsxs)(c.Notice, {
            color: eA === eu.p9.TIER_1 ? c.NoticeColors.PREMIUM_TIER_1 : eA === eu.p9.TIER_0 ? c.NoticeColors.PREMIUM_TIER_0 : c.NoticeColors.PREMIUM_TIER_2,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.PREMIUM_UNCANCEL,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                    }
                }),
                (0, i.jsx)(c.NitroWheelIcon, {
                    size: 'md',
                    color: 'currentColor',
                    className: eI.premiumIcon
                }),
                eA === eu.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : eA === eu.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }),
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.PREMIUM_UNCANCEL,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), (0, c.openModalLazy)(async () => {
                            let {default: e} = await Promise.all([
                                n.e('15972'),
                                n.e('6416'),
                                n.e('8016'),
                                n.e('68136'),
                                n.e('2628')
                            ]).then(n.bind(n, 561623));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                daysLeft: ec.metadata.daysLeft,
                                premiumType: eA,
                                analyticsSource: 'Nag Bar',
                                premiumSubscription: ec.metadata.premiumSubscription
                            });
                        });
                    },
                    children: eA === eu.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_1_NOTICE_BUTTON_TEXT : eA === eu.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_TIER_0_NOTICE_BUTTON_TEXT : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_NOTICE_BUTTON_TEXT
                })
            ]
        });
    case ed.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT:
        let {
            daysPastDue: eF,
            dismissUntil: ew
        } = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: eC,
                    onClick: () => {
                        eN(ew);
                    }
                }),
                em.Z.Messages.PREMIUM_SUBSCRIPTION_ONE_TIME_PAYMENT_PAST_DUE_SUBSCRIPTION_TEXT_NO_ACTION.format({ daysPastDue: eF }),
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.PREMIUM_PAST_DUE_ONE_TIME_PAYMENT,
                    onClick: () => {
                        eN(ew), g.Z.open(ed.oAB.SUBSCRIPTIONS);
                    },
                    children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_RENEW_NOW_BUTTON_TEXT
                })
            ]
        });
    case ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                    }
                }),
                em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_TEXT,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.PREMIUM_PAST_DUE_INVALID_PAYMENT,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(ed.oAB.SUBSCRIPTIONS);
                    },
                    children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT
                })
            ]
        });
    case ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                    }
                }),
                em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_TEXT,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.PREMIUM_PAST_DUE_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(ed.oAB.SUBSCRIPTIONS);
                    },
                    children: em.Z.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                })
            ]
        });
    case ed.kVF.PREMIUM_MISSING_PAYMENT:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd);
                    }
                }),
                eA === eu.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : eA === eu.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }) : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_TEXT.format({ daysLeft: ec.metadata.daysLeft }),
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.PREMIUM_MISSING_PAYMENT,
                    onClick: () => {
                        var e, t;
                        eN(null === (t = ec.metadata) || void 0 === t ? void 0 : null === (e = t.premiumSubscription) || void 0 === e ? void 0 : e.currentPeriodEnd), g.Z.open(ed.oAB.SUBSCRIPTIONS);
                    },
                    children: eA === eu.p9.TIER_1 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_1_NOTICE_BUTTON_TEXT : eA === eu.p9.TIER_0 ? em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_TIER_0_NOTICE_BUTTON_TEXT : em.Z.Messages.PREMIUM_SUBSCRIPTION_ENDING_MISSING_PAYMENT_NOTICE_BUTTON_TEXT
                })
            ]
        });
    case ed.kVF.BACK_TO_PREVIOUS_SCREEN:
        return (0, i.jsx)(B.h, {
            buttonText: null !== (s = ec.buttonText) && void 0 !== s ? s : em.Z.Messages.GO_BACK,
            onGoBack: ec.callback,
            onDismiss: () => eN(),
            showCloseButton: !0
        });
    case ed.kVF.AUTOMOD_QUARANTINED_USER_PROFILE: {
            let e = { page: ed.ZY5.IN_APP };
            return (0, i.jsx)(D.Z, {
                guildId: A,
                analyticsLocations: ep,
                analyticsLocation: e
            });
        }
    case ed.kVF.QUARANTINED:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.CUSTOM,
            className: eI.quarantineNotice,
            children: [
                em.Z.Messages.LIMITED_ACCESS_NAG_BAR_NOTICE,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: e_.Z,
                    target: '_blank',
                    children: em.Z.Messages.LIMITED_ACCESS_NAG_BAR_APPEAL
                }),
                (0, i.jsx)(c.Anchor, {
                    href: el.Z.getArticleURL(ed.BhN.QUARANTINE),
                    target: '_blank',
                    className: eI.quarantineLearnMoreLink,
                    children: em.Z.Messages.LEARN_MORE
                })
            ]
        });
    case ed.kVF.BLOCKED_BY_PROXY:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                em.Z.Messages.BLOCKED_BY_PROXY_NOTICE,
                (0, i.jsx)(c.NoticeButtonAnchor, {
                    href: ''.concat(ed.yXt.STATUS),
                    children: em.Z.Messages.LEARN_MORE
                }),
                (0, i.jsx)(c.NoticeCloseButton, {
                    onClick: () => eN(),
                    noticeType: ed.kVF.BLOCKED_BY_PROXY
                })
            ]
        });
    case ed.kVF.DROPS_PROGRESS_INTERRUPTION:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                em.Z.Messages.DROPS_PROGRESS_INTERRUPTION_WARNING.format({ gameTitle: ec.metadata.gameTitle }),
                (0, i.jsx)(c.NoticeButton, {
                    onClick: ec.metadata.reloadCallback,
                    children: em.Z.Messages.ERRORS_RESTART_APP
                })
            ]
        });
    case ed.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION:
        let {
            dismissUntil: eV,
            decisionId: eH
        } = ec.metadata;
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.WARNING,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.AUTO_MODERATION_MENTION_RAID_DETECTION,
                    onClick: () => {
                        null != A && (0, b.T9)(A), eN(eV);
                    }
                }),
                em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_MESSAGE,
                (0, i.jsx)(c.NoticeButton, {
                    onClick: () => {
                        null != A && (0, b.UE)(A, eH, () => {
                            eN(eV), (0, b.T9)(A);
                        });
                    },
                    children: em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_REMOVE_RESTRICTION
                }),
                null != A ? (0, i.jsx)(c.NoticeButton, {
                    onClick: () => k.Z.open(A, ed.pNK.GUILD_AUTOMOD, void 0, ed.KsC.AUTOMOD_MENTION_SPAM),
                    children: em.Z.Messages.GUILD_AUTOMOD_MENTION_SPAM_NOTICE_CONFIGURE_SETTINGS
                }) : null
            ]
        });
    case ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.BRAND,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        z.hZ(), eN();
                    }
                }),
                em.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE,
                (0, i.jsx)(c.PrimaryCTANoticeButton, {
                    noticeType: ed.kVF.SAFETY_USER_SENTIMENT_NAGBAR,
                    onClick: () => {
                        (0, c.openModalLazy)(async () => {
                            let {default: e} = await n.e('52432').then(n.bind(n, 349994));
                            return t => (0, i.jsx)(e, { ...t });
                        }), z.hZ(), eN();
                    },
                    children: em.Z.Messages.SAFETY_USER_SENTIMENT_NOTICE_CTA
                })
            ]
        });
    case ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING:
        let eY = l()().add(5, 'days').toDate();
        return (0, i.jsx)(Y.Z, {
            dismissCurrentNotice: () => {
                (0, M.EW)(ei.m[ed.kVF.PREMIUM_TIER_2_TRIAL_ENDING]), eN(eY);
            },
            subscriptionTier: eu.Si.TIER_2
        });
    case ed.kVF.QUESTS_PROGRESS_INTERRUPTION:
        return (0, i.jsxs)(c.Notice, {
            color: c.NoticeColors.DANGER,
            children: [
                (0, i.jsx)(c.NoticeCloseButton, {
                    noticeType: ed.kVF.QUESTS_PROGRESS_INTERRUPTION,
                    onClick: () => {
                        var e;
                        (null === (e = ec.metadata) || void 0 === e ? void 0 : e.streamKey) != null && (0, W.nE)(ec.metadata.streamKey);
                    }
                }),
                em.Z.Messages.QUESTS_PROGRESS_TRACKING_FAILURE_NOTICE
            ]
        });
    default:
        return null;
    }
}) : null;
function ep() {
    let {analyticsLocations: e} = (0, x.ZP)(A.Z.NOTICE);
    return (0, i.jsx)(x.Gt, {
        value: e,
        children: (0, i.jsx)(ef, {})
    });
}
