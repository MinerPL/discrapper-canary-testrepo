(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["23040"], {
        78349: function(e, t, n) {
            "use strict";
            n("424973"), e.exports.parse = function(e) {
                var t = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!t) return null;
                t.shift();
                var n = null,
                    r = [];
                t[2] && (n = (l = t[2].split("-")).shift(), r = l);
                var i = [];
                t[5] && (i = t[5].split("-")).shift();
                var a = [];
                if (t[6]) {
                    (l = t[6].split("-")).shift();
                    for (var l, s, o = []; l.length;) {
                        var u = l.shift();
                        1 === u.length ? s ? (a.push({
                            singleton: s,
                            extension: o
                        }), s = u, o = []) : s = u : o.push(u)
                    }
                    a.push({
                        singleton: s,
                        extension: o
                    })
                }
                var c = [];
                t[7] && ((c = t[7].split("-")).shift(), c.shift());
                var d = [];
                return t[8] && (d = t[8].split("-")).shift(), {
                    langtag: {
                        language: {
                            language: n,
                            extlang: r
                        },
                        script: t[3] || null,
                        region: t[4] || null,
                        variant: i,
                        extension: a,
                        privateuse: c
                    },
                    privateuse: d,
                    grandfathered: {
                        irregular: t[0] || null,
                        regular: t[1] || null
                    }
                }
            }
        },
        243704: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6418419524dd1e583beb.svg"
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var r, i, a, l, s = n("37983"),
                o = n("884691"),
                u = n("414456"),
                c = n.n(u),
                d = n("145131"),
                _ = n("298754");
            (r = a || (a = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (i = l || (l = {})).SMALL = "small", i.LARGE = "large", i.NONE = "none";
            let E = {
                    primary: _.colorPrimary,
                    secondary: _.colorSecondary,
                    warning: _.colorWarning,
                    error: _.colorError
                },
                f = {
                    small: _.small,
                    large: _.large,
                    none: null
                };
            class p extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: r,
                        className: i,
                        iconClassName: a
                    } = this.props;
                    return (0, s.jsxs)(d.default, {
                        className: c(_.note, E[t], i),
                        align: d.default.Align.CENTER,
                        children: [(0, s.jsx)(e, {
                            className: c(_.icon, f[r], a)
                        }), (0, s.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            p.Colors = a, p.Sizes = l;
            var I = p
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("773336");
            async function i(e, t) {
                let {
                    default: i
                } = await n.el("572544").then(n.bind(n, "572544")), a = i(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != a) a(null);
                else if (r.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var r, i, a, l;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return r
                },
                BotTagTypes: function() {
                    return i
                }
            }), (a = r || (r = {}))[a.GAME = 1] = "GAME", a[a.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", a[a.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (l = i || (i = {}))[l.BOT = 0] = "BOT", l[l.SERVER = 1] = "SERVER", l[l.SYSTEM_DM = 2] = "SYSTEM_DM", l[l.OFFICIAL = 3] = "OFFICIAL", l[l.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", l[l.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", l[l.AI = 6] = "AI", l[l.REMIX = 7] = "REMIX"
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var r = {
                openCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            openCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                },
                updateCreateGuildModal: e => {
                    n.el("297267").then(n.bind(n, "297267")).then(t => {
                        let {
                            updateCreateGuildModal: n
                        } = t;
                        return n(e)
                    })
                }
            }
        },
        874642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("77078"),
                l = n("812204"),
                s = n("685665"),
                o = n("642906"),
                u = n("85336"),
                c = n("273619"),
                d = n("674158"),
                _ = n("427459"),
                E = n("617917"),
                f = n("49111"),
                p = n("782340"),
                I = n("315706"),
                m = n("926622");
            let h = "premium-guild-subscription-upsell-modal-header";

            function v(e) {
                let {
                    title: t,
                    subtitle: n,
                    image: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: I.header,
                    children: [(0, r.jsx)(a.Heading, {
                        variant: "heading-xl/semibold",
                        id: h,
                        color: "header-primary",
                        className: m.marginBottom8,
                        children: t
                    }), (0, r.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: I.subtitleText,
                        children: n
                    }), i]
                })
            }
            let A = e => {
                    let {
                        onClose: t,
                        perks: n,
                        perkIntro: i = p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER,
                        headerProps: l
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: I.wrapper,
                        children: [(0, r.jsx)(a.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: () => {
                                t()
                            }
                        }), (0, r.jsx)(T, {
                            headerProps: l,
                            perkIntro: i
                        }), (0, r.jsx)("div", {
                            className: I.perks,
                            children: n.map((e, t) => {
                                let {
                                    icon: n,
                                    iconClassName: i,
                                    description: a,
                                    color: l
                                } = e;
                                return (0, r.jsx)(d.default, {
                                    icon: n,
                                    iconClassName: i,
                                    description: a,
                                    color: l
                                }, t)
                            })
                        })]
                    })
                },
                T = e => {
                    let {
                        headerProps: t,
                        perkIntro: l
                    } = e;
                    return (0, r.jsxs)(i.Fragment, {
                        children: [null != t ? (0, r.jsx)(v, {
                            ...t
                        }) : (0, r.jsx)("img", {
                            className: I.heroImage,
                            src: n("243704"),
                            alt: p.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_HEADER_IMG_ALT_TEXT
                        }), (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: I.heading,
                            children: l
                        })]
                    })
                },
                S = e => {
                    let {
                        guild: t,
                        targetBoostedGuildTier: n,
                        onClose: i,
                        analyticsSourceLocation: l
                    } = e, s = {
                        section: f.AnalyticsSections.PREMIUM_GUILD_UPSELL_MODAL,
                        object: f.AnalyticsObjects.BUTTON_CTA,
                        objectType: null != n ? (0, _.boostedGuildTierToAnalyticsObjectType)(n) : null
                    };
                    return (0, r.jsxs)(a.ModalFooter, {
                        className: I.footer,
                        children: [(0, r.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.PRIMARY,
                            look: a.Button.Looks.LINK,
                            onClick: () => {
                                i()
                            },
                            children: p.default.Messages.CLOSE
                        }), (0, r.jsx)(E.default, {
                            analyticsLocation: s,
                            analyticsSourceLocation: l,
                            guild: t,
                            targetBoostedGuildTier: n,
                            onClose: () => {
                                i()
                            }
                        })]
                    })
                };

            function g(e) {
                let {
                    analyticsSourceLocation: t,
                    guild: n,
                    targetBoostedGuildTier: i,
                    perks: d,
                    perkIntro: _,
                    headerProps: E,
                    onClose: f,
                    ...p
                } = e, {
                    AnalyticsLocationProvider: I
                } = (0, s.default)(l.default.ACTIVITY_DIRECTORY);
                return (0, r.jsx)(I, {
                    children: (0, r.jsx)(o.PaymentContextProvider, {
                        activeSubscription: null,
                        stepConfigs: [],
                        skuIDs: [],
                        children: (0, r.jsx)(a.ModalRoot, {
                            ...p,
                            "aria-labelledby": h,
                            children: (0, r.jsx)(c.default, {
                                hideBreadcrumbs: !0,
                                body: (0, r.jsx)(A, {
                                    onClose: f,
                                    perks: d,
                                    perkIntro: _,
                                    headerProps: E
                                }),
                                footer: (0, r.jsx)(S, {
                                    guild: n,
                                    targetBoostedGuildTier: i,
                                    onClose: f,
                                    analyticsSourceLocation: t
                                }),
                                steps: [u.Step.PREMIUM_GUILD_UPSELL],
                                currentStep: u.Step.PREMIUM_GUILD_UPSELL
                            })
                        })
                    })
                })
            }
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var r = n("872717"),
                i = n("913144"),
                a = n("479756"),
                l = n("38654"),
                s = n("9294"),
                o = n("26989"),
                u = n("337543"),
                c = n("697218"),
                d = n("49111");
            let _ = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    a = c.default.getCurrentUser(),
                    l = !o.default.isMember(e, null == a ? void 0 : a.id);
                try {
                    let t = await r.default.get({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: a
                    } = t;
                    return i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: a.version,
                            description: a.description,
                            formFields: a.form_fields,
                            guild: a.guild
                        }
                    }), a
                } catch (t) {
                    i.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await r.default.patch({
                        url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: a
                    } = n;
                i.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: a.version,
                        description: a.description,
                        formFields: a.form_fields
                    }
                })
            }, p = async (e, t) => {
                await r.default.patch({
                    url: d.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, I = async (e, t) => {
                if (l.default.isFullServerPreview(e)) {
                    (0, a.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await r.default.put({
                            url: d.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: a
                        } = n;
                    return i.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: a
                    }), a
                } catch (e) {
                    throw e
                }
            };
            var m = {
                fetchVerificationForm: _,
                updateVerificationForm: E,
                updateVerificationFormDescription: f,
                enableVerificationForm: p,
                submitVerificationForm: I
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return a
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return o
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return c
                },
                MAX_NUM_CHOICES: function() {
                    return d
                },
                MAX_CHOICE_LENGTH: function() {
                    return _
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return p
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return I
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return m
                }
            }), n("222007");
            var r, i = n("567054");
            i.VerificationFormFieldTypes.VERIFICATION;
            let a = new Set([i.VerificationFormFieldTypes.TERMS]),
                l = new Set([i.VerificationFormFieldTypes.MULTIPLE_CHOICE, i.VerificationFormFieldTypes.TEXT_INPUT, i.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                o = 16,
                u = 300,
                c = 300,
                d = 8,
                _ = 150,
                E = 150,
                f = 1e3,
                p = 300,
                I = "Membership Gating",
                m = "in-app-member-verification";
            (r || (r = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let r;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return i
                }
            }), r = n("453265").default;
            let i = r.openMemberVerificationModal;
            r.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return o
                },
                setShowWarning: function() {
                    return u
                }
            });
            var r = n("308503"),
                i = n("659500"),
                a = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, r.default)(e => l),
                o = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(a.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("599110"),
                l = n("50926"),
                s = n("347977"),
                o = n("394294"),
                u = n("49111");
            let c = () => {
                    a.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: o.MEMBER_VERIFICATION_TYPE
                    })
                },
                d = e => {
                    a.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: o.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var _ = {
                openMemberVerificationModal(e, t) {
                    d(e);
                    let a = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, i.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, r.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: a,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    c()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            c(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && c(), (0, i.closeModal)(o.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return h
                },
                updateImpersonating: function() {
                    return v
                },
                stopImpersonating: function() {
                    return A
                },
                updateImpersonatedChannels: function() {
                    return S
                },
                updateImpersonatedRoles: function() {
                    return g
                },
                updateImpersonatedData: function() {
                    return N
                }
            }), n("222007");
            var r = n("913144"),
                i = n("716241"),
                a = n("393414"),
                l = n("42203"),
                s = n("923959"),
                o = n("26989"),
                u = n("305961"),
                c = n("957255"),
                d = n("18494"),
                _ = n("282109"),
                E = n("599110"),
                f = n("38654"),
                p = n("507950"),
                I = n("49111"),
                m = n("724210");

            function h(e, t) {
                E.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === p.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), T(e)
            }

            function v(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (E.default.track(I.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, i.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === p.ImpersonateType.NEW_MEMBER
                }), r.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), T(e))
            }

            function A(e) {
                r.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function T(e) {
                let t = d.default.getChannelId(e),
                    n = l.default.getChannel(t),
                    r = null != t && (0, m.isStaticChannelRoute)(t);
                if (!r && !c.default.can(I.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, a.transitionTo)(I.Routes.CHANNEL(e, t.id))
                }
            }

            function S(e, t, n) {
                let r = new Set(_.default.getOptedInChannels(e));
                t.forEach(e => r.add(e)), n.forEach(e => r.delete(e)), v(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    optInChannels: r
                })
            }

            function g(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        r = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = o.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (r.some(e => !t.roles.includes(e))) return !0;
                        let i = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            a = i.filter(e => !n.includes(e));
                        return a.length > 0 && S(e, a, []), !1
                    })
                }(e, t);
                let r = {};
                t.forEach(e => r[e] = n.roles[e]), v(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    roles: r
                })
            }

            function N(e, t) {
                v(e, {
                    type: p.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return l
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return o
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var r = n("522632"),
                i = n("833858");
            let a = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = r.parse(t);
                        return (0, i.getFirstQueryStringValue)(e[a])
                    } catch (e) {
                        return
                    }
                }(t);
                return s({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function s(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(a, "=").concat(n)
            }

            function o(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = r.parse(n),
                    s = (0, i.getFirstQueryStringValue)(l[a]);
                return {
                    baseCode: t,
                    guildScheduledEventId: s
                }
            }

            function u(e) {
                let [t] = e.split("?");
                return t
            }
        },
        153498: function(e, t, n) {
            "use strict";

            function r(e) {
                let {} = e;
                return !1
            }

            function i(e, t) {
                return !1
            }

            function a(e) {
                return !1
            }

            function l() {
                return !1
            }

            function s() {
                return !1
            }

            function o(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function c() {
                return !1
            }

            function d(e) {}

            function _(e) {}

            function E(e) {}

            function f(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return r
                },
                navigateToMemberVerification: function() {
                    return i
                },
                navigateToRootTab: function() {
                    return a
                },
                resetToAuthRoute: function() {
                    return l
                },
                resetToPanelsUI: function() {
                    return s
                },
                pushModal: function() {
                    return o
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return c
                },
                coerceChannelRoute: function() {
                    return d
                },
                coerceGuildsRoute: function() {
                    return _
                },
                coerceModalRoute: function() {
                    return E
                },
                useIsModalOpen: function() {
                    return f
                }
            })
        },
        651693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return l
                },
                isAnimatedImageUrl: function() {
                    return o
                },
                isVideoUrl: function() {
                    return c
                },
                isVideoFile: function() {
                    return d
                }
            }), n("222007");
            var r = n("773336");
            let i = (e, t) => {
                    if (null == e) return !1;
                    let [n, r] = e.split(/\?/, 1);
                    return t.test(n)
                },
                a = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                l = e => null != e && a.test(e),
                s = /\.(webp|gif)$/i,
                o = e => i(e, s),
                u = (0, r.isIOS)() ? /\.(mp4|mov)$/i : ((0, r.isAndroid)(), /\.(mp4|webm|mov)$/i),
                c = e => i(e, u),
                d = e => null != e && u.test(e)
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var r = n("615361"),
                i = n("872717"),
                a = n("773336"),
                l = n("827032"),
                s = n("49111");
            let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var u = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: i
                        } = e,
                        s = {
                            name: n,
                            tags: (0, l.getGlobalTagsArray)()
                        };
                    null != i && i.forEach(e => {
                        s.tags.push(e)
                    });
                    let u = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return o.has(e) ? e : null
                        }
                    }();
                    null != u && s.tags.push("platform:".concat(u));
                    let c = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return r.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != c && s.tags.push("release_channel:".concat(c)), this._metrics.push(s), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        i.default.post({
                            url: s.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        153727: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("881410");
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("454589"),
                s = n("642906"),
                o = n("85336"),
                u = n("109872");

            function c(e) {
                let {
                    className: t,
                    isEligibleForTrial: n = !1
                } = e, {
                    step: i,
                    breadcrumbs: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, s.usePaymentContext)();
                if (null == c || 0 === c.length) return null;
                let _ = c.flatMap(e => {
                    let t = e.useBreadcrumbLabel();
                    return null != t ? {
                        id: e.id,
                        label: t
                    } : []
                });
                return 0 === _.length ? null : (_ = _.filter(e => {
                    let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
                        r = e.id === o.Step.ADD_PAYMENT_STEPS && !d.current;
                    return !n || n && (t || r)
                }), (0, r.jsx)("div", {
                    className: a("breadcrumb", u.wrapper, t),
                    children: (0, r.jsx)(l.default, {
                        activeId: i,
                        breadcrumbs: _
                    })
                }))
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                PaymentPortalBody: function() {
                    return p
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("627445"),
                o = n.n(s),
                u = n("817736"),
                c = n.n(u),
                d = n("77078"),
                _ = n("642906"),
                E = n("990893");

            function f(e) {
                var t, n, a, s, u, c;
                let {
                    header: f,
                    isLargeModal: p,
                    stepProps: I
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...r
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: r
                    }
                }(e), {
                    step: m,
                    stepConfigs: h,
                    setBodyNode: v,
                    setFooterNode: A,
                    setModalOverlayNode: T,
                    setReadySlideId: S
                } = (0, _.usePaymentContext)(), g = h.find(e => e.key === m);
                i.useEffect(() => {
                    T(null)
                }, [m, T]), o(null != g, "Unknown step for current payment flow.");
                let N = null !== (u = null == g ? void 0 : null === (t = g.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    R = null == g ? void 0 : null === (n = g.options) || void 0 === n ? void 0 : n.bodyClassName,
                    C = void 0 !== p && p ? E.sliderBodyLarge : null == g ? void 0 : null === (a = g.options) || void 0 === a ? void 0 : a.sliderBodyClassName;
                return (0, r.jsxs)(r.Fragment, {
                    children: [null === (c = null == g ? void 0 : null === (s = g.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === c || c ? f : null, g.renderStep(I), null == m || N ? null : (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d.ModalContent, {
                            className: l(E.body, R),
                            children: (0, r.jsx)(d.Slides, {
                                activeSlide: m,
                                centered: !1,
                                onSlideReady: e => S(e),
                                children: h.filter(e => null != e.key).map(e => (0, r.jsx)(d.Slide, {
                                    id: e.key,
                                    children: (0, r.jsx)("form", {
                                        className: l(E.sliderBody, C),
                                        ref: e => v(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, r.jsx)("div", {
                            ref: e => A(e)
                        }), (0, r.jsx)("div", {
                            ref: e => T(e)
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : c.createPortal(t, n)
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                i = n("884691"),
                a = n("41092"),
                l = n("414456"),
                s = n.n(l),
                o = n("862337"),
                u = n("77078"),
                c = n("812952"),
                d = n("448993"),
                _ = n("736978"),
                E = n("642906"),
                f = n("85336");
            n("153727"), n("650484");
            var p = n("454589"),
                I = n("978679"),
                m = n("745279"),
                h = n("49111"),
                v = n("782340"),
                A = n("129429");
            let T = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

            function S(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: l,
                    paymentError: S,
                    header: g,
                    footer: N,
                    isGift: R = !1,
                    giftMessage: C = v.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    hideBreadcrumbs: M = !1,
                    isLoading: O = !1,
                    purchaseError: y,
                    purchaseErrorBlockRef: P,
                    planError: L,
                    onScroll: D,
                    scrollerClassName: b,
                    hasCurrencies: x = !1
                } = e, F = null;
                null != S && null == (0, f.errorToStep)(S) ? F = S : null != y ? F = y : null != L && (F = L);
                let U = null != F ? F.message : "";
                null != F && F instanceof d.BillingError && (F.code === _.ErrorCodes.CARD_DECLINED && x && (U += " ".concat(v.default.Messages.BILLING_ERROR_TRY_ANOTHER)), F.code === _.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (U = v.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), F.code === h.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (U = v.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: V
                } = (0, E.usePaymentContext)();
                O = O || null == V;
                let B = i.useRef(new o.Timeout);
                i.useEffect(() => {
                    let e = B.current;
                    return null != V || e.isStarted() ? null != V && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, m.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [V]);
                let G = t.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(a.Elements, {
                    options: h.StripeElementsOptions,
                    stripe: V,
                    children: [g, (0, r.jsxs)("div", {
                        className: s("paymentModalContent", A.content),
                        children: [R && n !== f.Step.CONFIRM ? (0, r.jsx)(c.default, {
                            className: A.paymentNote,
                            iconSize: c.default.Sizes.SMALL,
                            icon: I.default,
                            color: null == C ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
                            children: C
                        }) : null, M ? null : (0, r.jsx)("div", {
                            className: A.breadcrumbsWrapper,
                            children: (0, r.jsx)(p.default, {
                                activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? G : n,
                                breadcrumbs: t.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !T.has(e)).map(e => ({
                                    id: e,
                                    label: (0, f.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: A.bodyWrapper,
                            children: [null == F ? null : (0, r.jsx)("div", {
                                className: A.errorBlockWrapper,
                                children: (0, r.jsx)(u.FormErrorBlock, {
                                    ref: P,
                                    children: U
                                })
                            }), O ? (0, r.jsx)(u.Spinner, {
                                className: A.loadingBlock
                            }) : (0, r.jsx)(u.Sequencer, {
                                className: A.sequencer,
                                staticClassName: A.sequencerStatic,
                                animatedNodeClassName: A.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(u.AdvancedScrollerThin, {
                                    onScroll: D,
                                    className: s(A.scroller, b),
                                    children: l
                                })
                            })]
                        })]
                    }), N]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("288264");

            function s(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: i,
                    color: s
                } = e;
                return (0, r.jsxs)("div", {
                    className: l.perkRow,
                    children: [(0, r.jsx)("div", {
                        className: l.perkIconContainer,
                        children: (0, r.jsx)(t, {
                            color: s,
                            className: a(l.perkIcon, n)
                        })
                    }), (0, r.jsx)("div", {
                        className: l.perkDescription,
                        children: i
                    })]
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976");
            var r, i = n("866227"),
                a = n.n(i),
                l = n("666038");
            r = class e extends l.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: a(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = a(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = a(this.createdAt);
                        return e.add(this.maxAge, "seconds").toDate()
                    }
                    return 1 / 0
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.code = e.code || "", this.temporary = e.temporary || !1, this.revoked = e.revoked || !1, this.uses = e.uses || 0, this.maxUses = e.maxUses || 0, this.maxAge = e.maxAge || 0, this.createdAt = e.createdAt || new Date, this.channel = e.channel, this.guild = e.guild, this.inviter = e.inviter || null, this.targetType = e.targetType || null, this.targetUser = e.targetUser || null, this.targetApplication = e.targetApplication || null, this.type = e.type || null, this.flags = e.flags || 0
                }
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var r = n("446674"),
                i = n("913144"),
                a = n("9294"),
                l = n("49111");
            let s = {},
                o = {},
                u = {};

            function c(e, t) {
                var n;
                e = null != e ? e : "";
                let r = (0, a.parseExtraDataFromInviteKey)(e),
                    i = s[e],
                    o = null != i ? {
                        state: l.InviteStates.RESOLVING,
                        ...i
                    } : {
                        state: l.InviteStates.RESOLVING,
                        code: r.baseCode
                    };
                t(o), s = {
                    ...s,
                    [e]: o
                }, (null === (n = o.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [o.guild.id]: e
                })
            }

            function d(e) {
                return c(e.code, t => {
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class _ extends r.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return o[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            _.displayName = "InviteStore";
            var E = new _(i.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, a.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return c(e.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: d,
                INSTANT_INVITE_REVOKE_SUCCESS: d,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => c(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return c(e.invite.code, t => {
                        var n, r;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (r = e.invite.approximate_presence_count) && void 0 !== r ? r : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return c(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return o[e.code] = e.error, c(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return c(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                s = n("77078"),
                o = n("145131"),
                u = n("461380"),
                c = n("298619");
            class d extends i.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, r.jsx)(o.default, {
                        justify: o.default.Justify.START,
                        className: l(c.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: i,
                            breadcrumbs: a,
                            renderCustomBreadcrumb: o,
                            separatorClassName: d
                        } = this.props, _ = e.id === n, E = t === a.length - 1, f = null != o ? o(e, _) : (0, r.jsx)("span", {
                            className: l(c.breadcrumb, {
                                [c.activeBreadcrumb]: _,
                                [c.interactiveBreadcrumb]: null != i
                            }),
                            children: e.label
                        });
                        return (0, r.jsxs)("div", {
                            className: l(c.breadcrumbWrapper, {
                                [c.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != i ? (0, r.jsx)(s.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: c.breadcrumbClickWrapper,
                                children: f
                            }) : f, E ? null : (0, r.jsx)(u.default, {
                                className: l(c.breadcrumbArrow, d),
                                direction: u.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var _ = d
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                l = n("384737"),
                s = n("448052"),
                o = n("748802"),
                u = n("260792"),
                c = n("77078"),
                d = n("75196"),
                _ = n("4177");
            let E = {
                    UP: _.directionUp,
                    RIGHT: _.directionRight,
                    DOWN: _.directionDown,
                    LEFT: _.directionLeft
                },
                f = e => {
                    let {
                        direction: t = E.DOWN,
                        width: n = 24,
                        height: i = 24,
                        color: f = "currentColor",
                        transition: p = _.transition,
                        className: I,
                        foreground: m,
                        expanded: h,
                        ...v
                    } = e, {
                        enabled: A
                    } = (0, c.useRedesignIconContext)(), T = t;
                    if (!0 === h ? T = E.DOWN : !1 === h && (T = E.RIGHT), A) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: l.ChevronSmallDownIcon,
                            [E.LEFT]: s.ChevronSmallLeftIcon,
                            [E.RIGHT]: o.ChevronSmallRightIcon
                        } [T];
                        return (0, r.jsx)(e, {
                            ...v,
                            className: I,
                            width: n,
                            height: i,
                            color: f,
                            colorClass: m
                        })
                    }
                    return (0, r.jsx)("svg", {
                        className: a(I, p, T),
                        width: n,
                        height: i,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(v),
                        children: (0, r.jsx)("path", {
                            className: m,
                            fill: "none",
                            stroke: f,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            f.Directions = E;
            var p = f
        },
        833858: function(e, t, n) {
            "use strict";

            function r(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return r
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("872717"),
                i = n("599110");

            function a(e, t, n) {
                let {
                    trackedActionData: r,
                    ...a
                } = t, l = {
                    url: a.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(a).then(e => {
                        let n = r.properties;
                        "function" == typeof r.properties && (n = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            ...l,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, a;
                        let s = r.properties;
                        "function" == typeof r.properties && (s = r.properties(e)), (0, i.trackNetworkAction)(r.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (a = e.body) || void 0 === a ? void 0 : a.message,
                            ...l,
                            ...s
                        }), n(e)
                    })
                })
            }
            var l = {
                get: function(e) {
                    return a(r.default.get, e, "get")
                },
                post: function(e) {
                    return a(r.default.post, e, "post")
                },
                put: function(e) {
                    return a(r.default.put, e, "put")
                },
                patch: function(e) {
                    return a(r.default.patch, e, "patch")
                },
                delete: function(e) {
                    return a(r.default.delete, e, "del")
                }
            }
        },
        432710: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return r
                }
            }), n("222007"), (i = r || (r = {})).APP_CRASHED = "app_crashed", i.SOCKET_CRASHED = "socket_crashed", i.MESSAGE_REQUEST_VIEW = "message_request_view", i.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", i.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", i.FAMILY_CENTER_VIEW = "family_center_view", i.SAFETY_HUB_VIEW = "safety_hub_view", i.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", i.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", i.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", i.AFK_NOT_IDLE = "afk_not_idle", i.CAPTCHA_EVENT = "captcha_event", i.SAFETY_WARNING_VIEW = "safety_warning_view", i.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", i.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", i.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", i.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", i.OTA_UPDATE_CHECK = "ota_update_check", i.OTA_ASSET_DOWNLOAD = "ota_asset_download", i.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, n) {
            "use strict";
            var r, i;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return a
                }
            }), n("222007"), (i = r || (r = {})).STABLE = "stable", i.BETA = "beta", i.ALPHA = "alpha", i.PTB = "ptb", i.CANARY = "canary", i.STAGING = "staging", i.DEVELOPMENT = "development";
            let a = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);