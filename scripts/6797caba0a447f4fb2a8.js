(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["40574"], {
        769174: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                TrophyIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var E = n("669491"),
                o = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = E.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...c
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M8 20a1 1 0 0 0-1 1v.5c0 .28.22.5.5.5h9a.5.5 0 0 0 .5-.5V21a1 1 0 0 0-1-1h-1a2 2 0 0 1-2-2v-.48c0-.95.7-1.73 1.5-2.23a5.7 5.7 0 0 0 1.23-1.08l2.3-.7A7 7 0 0 0 23 6.81V6a2 2 0 0 0-2-2h-2.24A2.85 2.85 0 0 0 16 2H8c-1.3 0-2.43.84-2.76 2H3a2 2 0 0 0-2 2v.82a7 7 0 0 0 4.96 6.7l2.31.7c.37.42.79.78 1.24 1.07.8.5 1.49 1.28 1.49 2.23V18a2 2 0 0 1-2 2H8Zm9.29-8.35.17-.05A5 5 0 0 0 21 6.82V6h-2.27a21.75 21.75 0 0 1-1.44 5.65Zm-10.58 0-.17-.05A5 5 0 0 1 3 6.82V6h2.27c.25 1.94.7 3.95 1.44 5.65Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        779807: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WarningIcon: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var E = n("669491"),
                o = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = E.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...c
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(c),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M10 3.1a2.37 2.37 0 0 1 4 0l8.71 14.75c.84 1.41-.26 3.15-2 3.15H3.29c-1.74 0-2.84-1.74-2-3.15L9.99 3.1Zm3.25 14.65a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM13.06 14l.37-5.94a1 1 0 0 0-1-1.06h-.87a1 1 0 0 0-1 1.06l.38 5.94a1.06 1.06 0 0 0 2.12 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        170213: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyHubView: function() {
                    return c
                },
                SafetyHubLinks: function() {
                    return A
                },
                SafetyHubPolicyNoticeKeys: function() {
                    return u
                },
                SafetySystemNotificationCtaType: function() {
                    return s
                },
                SafetySystemNotificationEmbedKeys: function() {
                    return _
                },
                SafetyHubAnalyticsActions: function() {
                    return l
                },
                SafetyHubAnalyticsActionSource: function() {
                    return I
                },
                DEFAULT_MEDIA_MAX_WIDTH: function() {
                    return T
                },
                DEFAULT_MEDIA_MAX_HEIGHT: function() {
                    return d
                }
            });
            var i, E, o, r, a, c, s, l, I, S, N = n("49111");
            (i = c || (c = {})).SETTINGS = "SETTINGS", i.ACCOUNT_STANDING = "ACCOUNT_STANDING";
            class A {}
            A.TOS_LINK = "https://discord.com/terms", A.COMMUNITY_GUIDELINES = "https://discord.com/guidelines", A.APPEALS_LINK = "https://support.discord.com/hc/requests/new", A.WARNING_SYSTEM_HELPCENTER_LINK = "https://support.discord.com/hc/articles/18210965981847", A.AGE_VERIFICATION_LINK = "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731";
            class u {}
            u.CLASSIFICATION_ID = "classification_id", u.INCIDENT_TIMESTAMP = "incident_time", (E = s || (s = {})).POLICY_VIOLATION_DETAIL = "policy_violation_detail", E.LEARN_MORE_LINK = "learn_more_link";
            class _ {}
            _.ICON_TYPE = "icon_type", _.HEADER = "header", _.BODY = "body", _.CTAS = "ctas", _.TIMESTAMP = "timestamp", _.THEME = "theme", _.CLIENT_VERSION_MESSAGE = "client_version_message", _.LEARN_MORE_LINK = "learn_more_link", _.CLASSIFICATION_ID = "classification_id", (o = l || (l = {}))[o.ViewViolationDetail = 0] = "ViewViolationDetail", o[o.ViewViolationsDropdown = 1] = "ViewViolationsDropdown", o[o.ClickLetUsKnow = 2] = "ClickLetUsKnow", (r = I || (I = {}))[r.SystemDM = 0] = "SystemDM", r[r.StandingTab = 1] = "StandingTab", Object.freeze({
                SPEED_BUMP: N.AnalyticsSections.APPEAL_INGESTION_SPEED_BUMP,
                COLLECT_SIGNAL: N.AnalyticsSections.APPEAL_INGESTION_COLLECT_SIGNAL,
                CONFIRM_SUBMISSION: N.AnalyticsSections.APPEAL_INGESTION_CONFIRM_SUBMISSION,
                REQUEST_SENT: N.AnalyticsSections.APPEAL_INGESTION_REQUEST_SENT,
                THANKS: N.AnalyticsSections.APPEAL_INGESTION_THANKS,
                SPAM: N.AnalyticsSections.APPEAL_INGESTION_SPAM
            }), (a = S || (S = {})).DIDNT_VIOLATE = "TODO i18n a", a.STRICT_OR_UNFAIR = "TODO i18n b", a.PENALTY = "TODO i18n c", a.SOMETHING_ELSE = "TODO i18n d";
            let T = 372,
                d = 279
        },
        908539: function(e, t, n) {
            "use strict";
            var i, E, o, r, a, c, s, l, I, S, N;
            n.r(t), n.d(t, {
                ContentIdType: function() {
                    return i
                },
                AccountStandingState: function() {
                    return a
                },
                ClassificationRequestState: function() {
                    return c
                }
            }), (i || (i = {})).MESSAGE = "message", (s = E || (E = {}))[s.REVIEW_PENDING = 1] = "REVIEW_PENDING", s[s.CLASSIFICATION_UPHELD = 2] = "CLASSIFICATION_UPHELD", s[s.CLASSIFICATION_INVALIDATED = 3] = "CLASSIFICATION_INVALIDATED", (l = o || (o = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.UNKNOWN = 1] = "UNKNOWN", l[l.UNSOLICITED_PORNOGRAPHY = 100] = "UNSOLICITED_PORNOGRAPHY", l[l.NONCONSENSUAL_PORNOGRAPHY = 200] = "NONCONSENSUAL_PORNOGRAPHY", l[l.GLORIFYING_VIOLENCE = 210] = "GLORIFYING_VIOLENCE", l[l.HATE_SPEECH = 220] = "HATE_SPEECH", l[l.CRACKED_ACCOUNTS = 230] = "CRACKED_ACCOUNTS", l[l.ILLICIT_GOODS = 240] = "ILLICIT_GOODS", l[l.SOCIAL_ENGINEERING = 250] = "SOCIAL_ENGINEERING", l[l.TEST_CLASSIFICATION = 9e3] = "TEST_CLASSIFICATION", l[l.TEST_CLASSIFICATION_LOW = 9001] = "TEST_CLASSIFICATION_LOW", l[l.TEST_CLASSIFICATION_SEVERE = 9002] = "TEST_CLASSIFICATION_SEVERE", (I = r || (r = {}))[I.BAN = 0] = "BAN", I[I.TEMP_BAN = 1] = "TEMP_BAN", I[I.GLOBAL_QUARANTINE = 2] = "GLOBAL_QUARANTINE", I[I.REQUIRE_VERIFICATION = 3] = "REQUIRE_VERIFICATION", I[I.USER_WARNING = 4] = "USER_WARNING", I[I.USER_SPAMMER = 5] = "USER_SPAMMER", I[I.CHANNEL_SPAM = 6] = "CHANNEL_SPAM", I[I.MESSAGE_SPAM = 7] = "MESSAGE_SPAM", I[I.DISABLE_SUSPICIOUS_ACTIVITY = 8] = "DISABLE_SUSPICIOUS_ACTIVITY", I[I.LIMITED_ACCESS = 9] = "LIMITED_ACCESS", I[I.CHANNEL_SCHEDULE_DELETE = 10] = "CHANNEL_SCHEDULE_DELETE", I[I.MESSAGE_CONTENT_REMOVAL = 11] = "MESSAGE_CONTENT_REMOVAL", I[I.GUILD_DISABLE_INVITE = 12] = "GUILD_DISABLE_INVITE", I[I.USER_CONTENT_REMOVAL = 13] = "USER_CONTENT_REMOVAL", I[I.USER_USERNAME_MANGLE = 14] = "USER_USERNAME_MANGLE", I[I.GUILD_LIMITED_ACCESS = 15] = "GUILD_LIMITED_ACCESS", I[I.USER_MESSAGE_REMOVAL = 16] = "USER_MESSAGE_REMOVAL", (S = a || (a = {}))[S.ALL_GOOD = 100] = "ALL_GOOD", S[S.LIMITED = 200] = "LIMITED", S[S.VERY_LIMITED = 300] = "VERY_LIMITED", S[S.AT_RISK = 400] = "AT_RISK", S[S.SUSPENDED = 500] = "SUSPENDED", (N = c || (c = {}))[N.PENDING = 0] = "PENDING", N[N.SUCCESS = 1] = "SUCCESS", N[N.FAILED = 2] = "FAILED"
        },
        736393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClassificationRelativeIncidentTime: function() {
                    return c
                },
                getAttachmentFilename: function() {
                    return s
                },
                parseMessageEmbedForProps: function() {
                    return l
                },
                isFlaggedContentEmpty: function() {
                    return I
                }
            }), n("808653");
            var i = n("866227"),
                E = n.n(i),
                o = n("908539"),
                r = n("170213"),
                a = n("894488");

            function c(e) {
                return E().to(E(e))
            }

            function s(e) {
                var t, n;
                return null != e.width && e.width > 0 && null != e.height && e.height > 0 ? "".concat(a.SPOILER_ATTACHMENT_PREFIX).concat(null !== (t = e.filename) && void 0 !== t ? t : ".png") : null !== (n = e.filename) && void 0 !== n ? n : ""
            }

            function l(e) {
                var t, n, i, E;
                if (null == e.fields) return;
                let o = e.fields.reduce((e, t) => (e[t.rawName] = t.rawValue, e), {});
                return {
                    header: null !== (t = o[r.SafetySystemNotificationEmbedKeys.HEADER]) && void 0 !== t ? t : "",
                    icon: o[r.SafetySystemNotificationEmbedKeys.ICON_TYPE],
                    body: null !== (n = o[r.SafetySystemNotificationEmbedKeys.BODY]) && void 0 !== n ? n : "",
                    ctas: (null !== (i = o[r.SafetySystemNotificationEmbedKeys.CTAS]) && void 0 !== i ? i : "").split(",").filter(e => "" !== e),
                    timestamp: parseFloat(null !== (E = o[r.SafetySystemNotificationEmbedKeys.TIMESTAMP]) && void 0 !== E ? E : 0),
                    theme: o[r.SafetySystemNotificationEmbedKeys.THEME],
                    learn_more_link: o[r.SafetySystemNotificationEmbedKeys.LEARN_MORE_LINK],
                    classification_id: o[r.SafetySystemNotificationEmbedKeys.CLASSIFICATION_ID]
                }
            }

            function I(e) {
                if (e.type === o.ContentIdType.MESSAGE) return "" === e.content && 0 === e.attachments.length;
                return !0
            }
            n("782340")
        },
        858839: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsSuspendedUserPageEnabled: function() {
                    return o
                }
            });
            var i = n("862205");
            let E = (0, i.createExperiment)({
                kind: "user",
                id: "2023-12_suspended_user_access_to_account_standing",
                label: "Suspended User Account Standing Page",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function o(e) {
                return !!E.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        854908: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983"),
                E = n("884691"),
                o = n("65597"),
                r = n("77078"),
                a = n("437822"),
                c = n("789563"),
                s = n("393414"),
                l = n("489622"),
                I = n("858839"),
                S = n("861348"),
                N = n("170213"),
                A = n("49111"),
                u = n("782340"),
                _ = n("876680");

            function T() {
                return (0, i.jsxs)(l.default, {
                    color: l.NoticeColors.DANGER,
                    className: _.nagbar,
                    children: [(0, i.jsx)(r.Text, {
                        tag: "span",
                        color: "always-white",
                        variant: "text-md/normal",
                        children: u.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
                    }), (0, i.jsx)(l.NoticeButtonAnchor, {
                        href: N.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            color: "always-white",
                            children: u.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
                        })
                    })]
                })
            }

            function d() {
                return (0, i.jsx)("div", {
                    className: _.pageContainer,
                    children: (0, i.jsx)(S.default, {})
                })
            }

            function C() {
                let e = (0, o.default)([c.default], () => c.default.hasLoadedExperiments),
                    t = (0, I.useIsSuspendedUserPageEnabled)("standalone page");
                return (E.useEffect(() => {
                    e && !t ? (0, s.transitionTo)(A.Routes.ME) : !e && !t && a.default.getExperiments()
                }, [e, t]), e && t) ? (0, i.jsxs)("div", {
                    className: _.container,
                    children: [(0, i.jsx)(T, {}), (0, i.jsx)(d, {})]
                }) : null
            }
        },
        300113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var E = n("469563"),
                o = n("769174"),
                r = n("75196"),
                a = (0, E.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: E = "currentColor",
                        className: o,
                        foreground: a,
                        ...c
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(c),
                        className: o,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: E,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M17.722 3.00098H21C21.553 3.00098 22 3.44898 22 4.00098V8.00098C22 8.30498 21.861 8.59298 21.625 8.78198L16.696 12.724C15.794 13.86 14.49 14.659 13 14.911V16.001H15C15.553 16.001 16 16.449 16 17.001V19.001H8V17.001C8 16.449 8.447 16.001 9 16.001H11V14.911C9.51 14.659 8.206 13.86 7.304 12.724L2.375 8.78198C2.139 8.59298 2 8.30498 2 8.00098V4.00098C2 3.44898 2.447 3.00098 3 3.00098H6.278C6.625 2.40598 7.263 2.00098 8 2.00098H16C16.738 2.00098 17.375 2.40598 17.722 3.00098ZM4 5.00098V7.52098L6.006 9.12598C6.006 9.10435 6.00448 9.08348 6.00297 9.06274C6.00148 9.04224 6 9.02185 6 9.00098V5.00098H4ZM17.994 9.12698L20 7.52098V5.00098H18V9.00098C18 9.02173 17.9985 9.042 17.9971 9.0625C17.9955 9.08349 17.994 9.10472 17.994 9.12698ZM7 20.001H17V22.001H7V20.001Z"
                        })
                    })
                }, o.TrophyIcon, void 0, {
                    size: 24
                })
        },
        489622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NoticeColors: function() {
                    return N
                },
                NoticeButton: function() {
                    return A
                },
                PrimaryCTANoticeButton: function() {
                    return u
                },
                NoticeButtonAnchor: function() {
                    return _
                },
                NoticeCloseButton: function() {
                    return T
                },
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var E = n("414456"),
                o = n.n(E),
                r = n("394846"),
                a = n("77078"),
                c = n("945330"),
                s = n("599110"),
                l = n("49111"),
                I = n("782340"),
                S = n("105029");
            let N = Object.freeze({
                DEFAULT: S.colorDefault,
                NEUTRAL: S.colorNeutral,
                BRAND: S.colorBrand,
                WARNING: S.colorWarning,
                DANGER: S.colorDanger,
                INFO: S.colorInfo,
                STREAMER_MODE: S.colorStreamerMode,
                CUSTOM: S.colorCustom,
                SPOTIFY: S.colorSpotify,
                PLAYSTATION: S.colorPlayStation,
                PREMIUM_TIER_0: S.colorPremiumTier0,
                PREMIUM_TIER_1: S.colorPremiumTier1,
                PREMIUM_TIER_2: S.colorPremiumTier2
            });

            function A(e) {
                let {
                    children: t,
                    className: n,
                    minor: E = !1,
                    ...r
                } = e;
                return (0, i.jsx)(a.FocusRing, {
                    children: (0, i.jsx)("button", {
                        className: o(S.button, n, {
                            [S.buttonMinor]: E
                        }),
                        ...r,
                        children: t
                    })
                })
            }

            function u(e) {
                let {
                    children: t,
                    noticeType: n,
                    additionalTrackingProps: E,
                    ...o
                } = e;
                return (0, i.jsx)(A, {
                    ...o,
                    onClick: e => {
                        var t, i;
                        null != o.onClick && o.onClick(e), t = n, i = E, null != t && s.default.track(l.AnalyticEvents.APP_NOTICE_PRIMARY_CTA_OPENED, {
                            notice_type: t,
                            ...i
                        })
                    },
                    children: t
                })
            }

            function _(e) {
                let {
                    children: t,
                    href: n,
                    ...E
                } = e;
                return (0, i.jsx)(a.Anchor, {
                    ...E,
                    className: S.button,
                    href: n,
                    children: t
                })
            }

            function T(e) {
                let {
                    onClick: t,
                    noticeType: n
                } = e;
                return (0, i.jsx)(a.Clickable, {
                    focusProps: {
                        offset: 6
                    },
                    className: S.closeButton,
                    onClick: () => {
                        var e;
                        t(), null != (e = n) && s.default.track(l.AnalyticEvents.APP_NOTICE_CLOSED, {
                            notice_type: e
                        })
                    },
                    "aria-label": I.default.Messages.DISMISS,
                    children: (0, i.jsx)(c.default, {
                        className: S.closeIcon,
                        width: 18,
                        height: 18
                    })
                })
            }

            function d(e) {
                let {
                    color: t = N.DEFAULT,
                    className: n,
                    style: E,
                    children: a
                } = e;
                return (0, i.jsx)("div", {
                    className: o(S.notice, {
                        [S.isMobile]: r.isMobile
                    }, n, t),
                    style: null != E ? E : void 0,
                    children: a
                })
            }
        }
    }
]);