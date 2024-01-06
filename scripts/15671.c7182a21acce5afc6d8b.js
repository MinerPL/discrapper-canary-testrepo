(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15671"], {
        527826: function(e, t, n) {
            "use strict";
            e.exports = n.p + "adf75861421c2a6a6269.png"
        },
        97595: function(e, t, n) {
            "use strict";
            e.exports = n.p + "79b6525428d203d4dc7a.svg"
        },
        251834: function(e, t, n) {
            "use strict";
            e.exports = n.p + "559d26c8222b2691e986.svg"
        },
        800573: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4db33740afa8c892ed27.svg"
        },
        41668: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1ed67ff58fdb5a109fc8.svg"
        },
        660389: function(e, t, n) {
            "use strict";
            e.exports = n.p + "6e27695fd61b8fa1ebde.svg"
        },
        212509: function(e, t, n) {
            "use strict";
            e.exports = n.p + "deabad3453b517c8cb7f.png"
        },
        494323: function(e, t, n) {
            "use strict";
            e.exports = n.p + "bd6a8da80056942f263e.svg"
        },
        556659: function(e, t, n) {
            "use strict";
            e.exports = n.p + "dad1a596835f9bb1024d.svg"
        },
        787762: function(e, t, n) {
            "use strict";
            e.exports = n.p + "4396f31050743192914e.svg"
        },
        508971: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a7d2c7ff9cdc7b4b1d04.svg"
        },
        250790: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("483366"),
                r = n.n(l),
                i = n("458960"),
                o = n("394846"),
                u = n("769846"),
                d = n("77078"),
                c = n("159885"),
                f = n("99130");
            let E = (0, c.cssValueToNumber)(u.default.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE),
                h = {
                    START: 0,
                    END: 1
                },
                _ = {
                    friction: 10,
                    tension: 130
                };
            var m = function(e) {
                return class extends a.Component {
                    componentDidMount() {
                        !o.isMobile && (window.addEventListener("resize", this.handleResizeDebounced), this.handleResize())
                    }
                    componentWillUnmount() {
                        clearTimeout(this.timeout), window.removeEventListener("resize", this.handleResizeDebounced)
                    }
                    componentWillAppear(e) {
                        this.state.shouldAnimate ? this.animateTo(h.END, e) : e()
                    }
                    componentWillEnter(e) {
                        this.state.shouldAnimate ? (clearTimeout(this.timeout), this.timeout = setTimeout(() => this.animateTo(h.END, e), 40)) : e()
                    }
                    componentWillLeave(e) {
                        this.state.shouldAnimate ? this.animateTo(h.START, e) : e()
                    }
                    animateTo(e, t) {
                        i.default.spring(this.anim, {
                            toValue: e,
                            ..._
                        }).start(t)
                    }
                    getAnimatedStyle(e) {
                        return this.state.shouldAnimate ? {
                            opacity: this.anim,
                            transform: e ? void 0 : [{
                                scale: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [1.05, 1]
                                })
                            }, {
                                translateY: this.anim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: ["-70px", "0px"]
                                })
                            }, {
                                translateZ: 0
                            }]
                        } : null
                    }
                    render() {
                        return (0, s.jsx)("div", {
                            className: f.wrapper,
                            children: (0, s.jsx)(d.AccessibilityPreferencesContext.Consumer, {
                                children: t => {
                                    let {
                                        reducedMotion: n
                                    } = t;
                                    return (0, s.jsx)(i.default.div, {
                                        style: this.getAnimatedStyle(n.enabled),
                                        children: (0, s.jsx)(e, {
                                            ...this.props
                                        })
                                    })
                                }
                            })
                        })
                    }
                    constructor(...e) {
                        super(...e), this.anim = new i.default.Value(h.START), this.state = {
                            shouldAnimate: !o.isMobile
                        }, this.handleResize = () => {
                            let e = window.innerWidth > E;
                            !this.state.shouldAnimate && e && this.anim.setValue(h.END), this.setState({
                                shouldAnimate: e
                            })
                        }, this.handleResizeDebounced = r(this.handleResize, 60)
                    }
                }
            }
        },
        746040: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("394846"),
                o = n("77078"),
                u = n("2021"),
                d = n("393414"),
                c = n("725484"),
                f = n("554054"),
                E = n("159885"),
                h = n("528502"),
                _ = n("49111"),
                m = n("71041");
            let g = (0, E.cssValueToNumber)(m.responsiveWidthMobile),
                p = [_.Routes.LOGIN, _.Routes.LOGIN_HANDOFF, _.Routes.REGISTER, _.Routes.INVITE(""), _.Routes.GIFT_CODE(""), _.Routes.GUILD_TEMPLATE_LOGIN(""), _.Routes.GUILD_TEMPLATE(""), _.Routes.DISABLE_EMAIL_NOTIFICATIONS, _.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS, _.Routes.BILLING_PREMIUM_SUBSCRIBE, _.Routes.BILLING_PAYMENT_SOURCES_CREATE, _.Routes.BILLING_PAYMENTS, _.Routes.BILLING_PREMIUM_SWITCH_PLAN, _.Routes.BILLING_GUILD_SUBSCRIPTIONS_PURCHASE, _.Routes.VERIFY, _.Routes.VERIFY_HUB_EMAIL, _.Routes.REJECT_IP, _.Routes.REJECT_MFA, _.Routes.AUTHORIZE_IP, _.Routes.AUTHORIZE_PAYMENT, _.Routes.RESET, _.Routes.HANDOFF, _.Routes.REPORT, _.Routes.REPORT_SECOND_LOOK];

            function A(e) {
                return p.some(t => e.startsWith(t))
            }
            class T extends a.Component {
                componentDidMount() {
                    window.addEventListener("resize", this.handleResize)
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.handleResize)
                }
                mobileTransitionTo(e, t) {
                    if (A(e))(0, d.transitionTo)(e, t);
                    else {
                        let n = null != t && null != t.search ? t.search : null;
                        window.location = null == n ? e : "".concat(e, "?").concat(n)
                    }
                }
                mobileReplaceWith(e) {
                    A(e) ? (0, d.replaceWith)(e) : window.location = e
                }
                renderDefault() {
                    let {
                        splash: e
                    } = this.props, t = (0, s.jsx)(u.default, {
                        component: a.Fragment,
                        children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                            transitionTo: d.transitionTo,
                            replaceWith: d.replaceWith
                        }))
                    });
                    return (0, s.jsx)("div", {
                        className: m.characterBackground,
                        children: (0, s.jsx)(o.HeadingLevel, {
                            forceLevel: 1,
                            children: null != e ? (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(c.default, {
                                    show: !0,
                                    className: r(m.logo)
                                }), (0, s.jsx)(f.Splash, {
                                    splash: e,
                                    children: t
                                })]
                            }) : (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsx)(h.default, {
                                    className: m.artwork,
                                    preserveAspectRatio: "xMinYMin slice"
                                }), t]
                            })
                        })
                    })
                }
                renderMobile() {
                    return (0, s.jsx)(u.default, {
                        component: a.Fragment,
                        children: a.Children.map(this.props.children, e => a.cloneElement(e, {
                            transitionTo: this.mobileTransitionTo,
                            replaceWith: this.mobileReplaceWith
                        }))
                    })
                }
                render() {
                    let {
                        isMobileWidth: e
                    } = this.state, t = navigator.userAgent.includes("GameLauncher");
                    return e || i.isMobile || i.isTablet || t ? this.renderMobile() : this.renderDefault()
                }
                constructor(e) {
                    super(e), this.handleResize = () => {
                        this.setState({
                            isMobileWidth: window.innerWidth <= g
                        })
                    }, this.state = {
                        isMobileWidth: window.innerWidth <= g
                    }
                }
            }
            var R = T
        },
        404432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("446674"),
                o = n("77078"),
                u = n("299285"),
                d = n("210721"),
                c = n("65324"),
                f = n("697218"),
                E = n("10514"),
                h = n("552712"),
                _ = n("953109"),
                m = n("124969"),
                g = n("380186"),
                p = n("49111"),
                A = n("646718"),
                T = n("782340"),
                R = n("451862"),
                I = n("173791"),
                N = n("926622"),
                S = i.default.connectStores([h.default, u.default, E.default, f.default], e => {
                    let {
                        giftCode: t
                    } = e, n = h.default.get(t.skuId), {
                        subscriptionPlanId: s
                    } = t, a = null != s ? (0, g.getOrFetchSubscriptionPlan)(s) : null;
                    return {
                        sku: n,
                        subscriptionPlan: a,
                        application: u.default.getApplication(n.applicationId),
                        gifter: f.default.getUser(t.userId)
                    }
                })(e => {
                    let {
                        error: t,
                        giftCode: n,
                        gifter: l,
                        sku: i,
                        application: u,
                        subscriptionPlan: f
                    } = e, E = null == l ? T.default.Messages.GIFT_CODE_AUTH_GIFTED : T.default.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
                        username: l.username
                    }), h = i.name;
                    return null != f && (h = (f.interval === A.SubscriptionIntervalTypes.MONTH ? T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : T.default.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
                        skuName: i.name,
                        intervalCount: f.intervalCount
                    })), (0, s.jsxs)(a.Fragment, {
                        children: [null != n.giftStyle ? (0, s.jsx)(c.default, {
                            defaultAnimationState: d.AnimationState.LOOP,
                            giftStyle: n.giftStyle,
                            className: R.seasonalIcon
                        }) : (0, s.jsx)(m.Avatar, {
                            src: null != l ? l.getAvatarURL(void 0, 100) : null,
                            size: o.AvatarSizes.DEPRECATED_SIZE_100,
                            className: N.marginBottom20
                        }), null != t ? (0, s.jsxs)(a.Fragment, {
                            children: [(0, s.jsx)(m.SubTitle, {
                                children: T.default.Messages.INVITE_MODAL_ERROR_TITLE
                            }), (0, s.jsx)(m.Title, {
                                children: t
                            })]
                        }) : (0, s.jsxs)(a.Fragment, {
                            children: [(0, s.jsx)(m.SubTitle, {
                                children: E
                            }), (0, s.jsxs)(m.Title, {
                                className: r(N.marginTop8, I.flexCenter),
                                children: [i.productLine !== p.SKUProductLines.COLLECTIBLES && (0, s.jsx)(_.default, {
                                    size: _.default.Sizes.MEDIUM,
                                    className: R.applicationIcon,
                                    game: u,
                                    skuId: i.id
                                }), h]
                            })]
                        })]
                    })
                })
        },
        291850: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LoginSpinner: function() {
                    return W
                },
                default: function() {
                    return K
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("730290"),
                o = n("394846"),
                u = n("446674"),
                d = n("77078"),
                c = n("913144"),
                f = n("437822"),
                E = n("697796"),
                h = n("524824"),
                _ = n("21572"),
                m = n("791160"),
                g = n("434824"),
                p = n("24287"),
                A = n("382236"),
                T = n("770032"),
                R = n("724554"),
                I = n("878720"),
                N = n("25033"),
                S = n("589252"),
                C = n("970366"),
                L = n("271938"),
                M = n("72177"),
                O = n("476108"),
                x = n("145131"),
                v = n("124969"),
                D = n("980428"),
                U = n("599110"),
                y = n("659500"),
                G = n("773336"),
                b = n("404432"),
                j = n("719451"),
                P = n("331085"),
                B = n("598489"),
                F = n("49111"),
                w = n("579033"),
                k = n("782340"),
                H = n("741532"),
                V = n("926622");

            function W() {
                return (0, s.jsx)(v.default, {
                    children: (0, s.jsx)(d.Spinner, {})
                })
            }
            class Y extends a.PureComponent {
                static getDerivedStateFromProps(e) {
                    let {
                        handoffAvailable: t,
                        authenticated: n
                    } = e;
                    return t || n ? null : {
                        checkingHandoff: !1
                    }
                }
                componentDidMount() {
                    let {
                        handoffAvailable: e,
                        authenticated: t,
                        giftCodeSKU: n,
                        invite: s,
                        location: a
                    } = this.props;
                    e && !t ? (0, E.handoffBegin)() : t && this.loginOrSSO(t, a, !0), U.default.track(F.AnalyticEvents.LOGIN_VIEWED, {
                        location: null != s ? "Invite Login Page" : "Non-Invite Login Page",
                        login_source: this.loginSource,
                        authenticated: t,
                        ...null != n ? (0, m.default)(n, !1, !1) : {}
                    }, {
                        flush: !0
                    }), f.default.getLocationMetadata(), (0, C.trackAppUIViewed)("login")
                }
                componentDidUpdate(e) {
                    let {
                        authenticated: t,
                        location: n
                    } = this.props, {
                        checkingHandoff: s
                    } = this.state;
                    if (t && !e.authenticated && !s && this.loginOrSSO(t, n), e.errors !== this.props.errors) {
                        var a, l, r;
                        this.hasError("password") ? null === (a = this.passwordRef) || void 0 === a || a.focus() : this.hasError("email") || this.hasError("login") ? null === (l = this.loginRef) || void 0 === l || l.focus() : this.hasError("code") && (null === (r = this.codeRef) || void 0 === r || r.focus())
                    }
                }
                get loginSource() {
                    let {
                        giftCode: e,
                        guildTemplate: t,
                        invite: n,
                        loginSource: s,
                        redirectTo: a
                    } = this.props;
                    if (null != s) return s;
                    if (null != e) return "gift";
                    if (null != t) return "guild_template";
                    else if (null != n) {
                        if (null != n.guild) return "guild_invite";
                        if (null != n.channel) return "dm_invite";
                        else if (null != n.inviter) return "friend_invite"
                    }
                    return null != a ? (0, h.getLoginHandoffSourceFromRedirectTo)(a) : null
                }
                get giftCodeSKUId() {
                    let {
                        giftCode: e
                    } = this.props;
                    return null != e ? e.skuId : null
                }
                get canShowChooseAccount() {
                    return this.props.hasLoggedInAccounts
                }
                loginOrSSO(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    e && null != t && (this.setState({
                        redirecting: !0
                    }), n ? f.default.verifySSOToken().then(() => this.transitionSSO(t)) : this.transitionSSO(t))
                }
                transitionSSO(e) {
                    let {
                        transitionTo: t,
                        redirectTo: n,
                        replaceWith: s
                    } = this.props, a = null != e ? (0, i.parse)(e.search) : {};
                    if (delete a.redirect_to, null != n) null != s ? s(n) : t(n);
                    else if (null == a.service) t(F.Routes.APP);
                    else {
                        let e = window.location.protocol + window.GLOBAL_ENV.API_ENDPOINT + F.Endpoints.SSO,
                            t = {
                                ...a,
                                token: L.default.getToken()
                            };
                        window.location = "".concat(e, "?").concat((0, i.stringify)(t))
                    }
                }
                hasError(e) {
                    return null != this.props.errors[e]
                }
                renderHandOffAvailable() {
                    let {
                        authBoxClassName: e
                    } = this.props;
                    return (0, s.jsxs)(v.default, {
                        className: e,
                        children: [(0, s.jsx)(v.AuthSpinner, {}), (0, s.jsx)(v.Title, {
                            className: V.marginBottom8,
                            children: k.default.Messages.BROWSER_HANDOFF_DETECTING_TITLE
                        }), (0, s.jsx)(v.SubTitle, {
                            children: k.default.Messages.AUTH_BROWSER_HANDOFF_DETECTING_DESCRIPTION
                        })]
                    })
                }
                renderHandOffContinue() {
                    let {
                        user: e,
                        transitionTo: t,
                        authBoxClassName: n
                    } = this.props;
                    return null == e ? null : (0, s.jsxs)(v.default, {
                        className: n,
                        children: [(0, s.jsx)(v.Avatar, {
                            src: e.getAvatarURL(void 0, 100),
                            size: d.AvatarSizes.DEPRECATED_SIZE_100,
                            className: V.marginBottom20
                        }), (0, s.jsx)(v.Title, {
                            className: V.marginBottom8,
                            children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_TITLE.format({
                                name: e.toString()
                            })
                        }), (0, s.jsx)(v.SubTitle, {
                            className: V.marginBottom40,
                            children: k.default.Messages._BROWSER_HANDOFF_SUCCESS_BODY
                        }), (0, s.jsxs)(v.Block, {
                            children: [(0, s.jsx)(v.Button, {
                                onClick: () => t(F.Routes.APP),
                                className: V.marginBottom8,
                                children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_ACTION.format({
                                    name: e.toString()
                                })
                            }), (0, s.jsx)(v.Button, {
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                onClick: this.handleReset,
                                children: k.default.Messages.BROWSER_HANDOFF_SUCCESS_CANCEL
                            })]
                        })]
                    })
                }
                renderDisabledAccount() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = this.props.loginStatus === F.LoginStates.ACCOUNT_DISABLED, n = t ? k.default.Messages.ACCOUNT_DISABLED_TITLE : k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_TITLE, a = t ? k.default.Messages.ACCOUNT_DISABLED_DESCRIPTION : k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_DESCRIPTION;
                    return (0, s.jsx)(v.default, {
                        tag: "form",
                        onSubmit: this.handleReset,
                        className: e,
                        children: (0, s.jsxs)(d.HeadingLevel, {
                            component: (0, s.jsx)(v.Title, {
                                className: V.marginBottom8,
                                children: n
                            }),
                            children: [(0, s.jsx)(v.SubTitle, {
                                className: V.marginBottom20,
                                children: a
                            }), (0, s.jsxs)(v.Block, {
                                children: [(0, s.jsx)(v.Button, {
                                    color: v.Button.Colors.BRAND,
                                    type: "submit",
                                    children: k.default.Messages._RETURN_TO_LOGIN
                                }), (0, s.jsx)("div", {
                                    className: r(V.marginTop8, H.needAccount),
                                    children: k.default.Messages.ACCOUNT_SCHEDULED_FOR_DELETION_CANCEL.format({
                                        onClick: this.handleCancelAccountDeletion
                                    })
                                })]
                            })]
                        })
                    })
                }
                renderResolving() {
                    let {
                        authBoxClassName: e,
                        country: t
                    } = this.props;
                    return (0, s.jsxs)(v.default, {
                        className: e,
                        children: [(0, s.jsx)(j.InviteResolvingHeader, {}), (0, s.jsxs)(v.Block, {
                            className: V.marginTop20,
                            children: [(0, s.jsx)(S.default, {
                                className: V.marginBottom20,
                                alpha2: t.alpha2,
                                countryCode: t.code.split(" ")[0],
                                label: k.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                onChange: (e, t) => this.setState({
                                    login: e,
                                    loginPrefix: t
                                }),
                                setRef: this.setLoginRef,
                                autoCapitalize: "none",
                                autoComplete: "off",
                                autoCorrect: "off",
                                spellCheck: "false",
                                value: this.state.login,
                                autoFocus: !0,
                                required: !0
                            }), (0, s.jsx)(v.Input, {
                                className: V.marginBottom20,
                                label: k.default.Messages.FORM_LABEL_PASSWORD,
                                onChange: e => this.setState({
                                    password: e
                                }),
                                type: "password",
                                setRef: this.setPasswordRef,
                                autoComplete: "off",
                                spellCheck: "false",
                                value: this.state.password,
                                required: !0
                            }), (0, s.jsx)(v.Button, {
                                className: V.marginBottom8,
                                type: "submit",
                                disabled: !0,
                                children: k.default.Messages._LOGIN
                            }), (0, s.jsx)(v.Button, {
                                disabled: !0,
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                children: k.default.Messages.FORGOT_PASSWORD
                            }), (0, s.jsx)(v.Button, {
                                disabled: !0,
                                className: V.marginTop4,
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.LINK,
                                children: k.default.Messages.NEED_ACCOUNT
                            })]
                        })]
                    })
                }
                renderDefaultForm(e) {
                    var t;
                    let n;
                    let {
                        invite: a,
                        giftCode: l,
                        loginStatus: i,
                        country: o,
                        showMobileWebHandoff: u,
                        disableAutofocusOnDefaultForm: c
                    } = this.props, f = !this.hasError("email") && this.hasError("password"), E = (null == a ? void 0 : a.stage_instance) != null;
                    return n = null == a || E ? null != l ? (0, s.jsx)(b.default, {
                        giftCode: l
                    }) : (0, s.jsxs)("div", {
                        className: H.header,
                        children: [(0, s.jsx)(v.Title, {
                            className: V.marginBottom8,
                            children: k.default.Messages.LOGIN_TITLE
                        }, "title"), !1 === (0, G.isAndroidWeb)() ? (0, s.jsx)(v.SubTitle, {
                            children: k.default.Messages.AUTH_LOGIN_BODY
                        }, "subtitle") : null]
                    }) : (0, s.jsx)(j.default, {
                        invite: a
                    }), (0, s.jsxs)(x.default, {
                        direction: x.default.Direction.HORIZONTAL,
                        align: x.default.Align.CENTER,
                        children: [(0, s.jsxs)("div", {
                            className: H.mainLoginContainer,
                            children: [this.canShowChooseAccount && this.state.dismissedChooseAccount && (0, s.jsx)(v.Button, {
                                onClick: () => {
                                    this.setState(e => ({
                                        ...e,
                                        dismissedChooseAccount: !1
                                    }))
                                },
                                look: v.Button.Looks.LINK,
                                color: v.Button.Colors.PRIMARY,
                                className: H.goBackButton,
                                children: (0, s.jsxs)("div", {
                                    className: H.content,
                                    children: [(0, s.jsx)(D.default, {
                                        width: 16,
                                        height: 16,
                                        className: H.caret
                                    }), (0, s.jsx)(d.Text, {
                                        variant: "text-md/normal",
                                        children: k.default.Messages.AGE_GATE_GO_BACK
                                    })]
                                })
                            }), n, (0, s.jsx)(d.HeadingLevel, {
                                children: (0, s.jsxs)(v.Block, {
                                    className: V.marginTop20,
                                    children: [(0, s.jsx)(S.default, {
                                        alpha2: o.alpha2,
                                        countryCode: o.code.split(" ")[0],
                                        className: V.marginBottom20,
                                        label: k.default.Messages.FORM_LABEL_EMAIL_OR_PHONE_NUMBER,
                                        error: null !== (t = this.renderError("login")) && void 0 !== t ? t : this.renderError("email"),
                                        onChange: (e, t) => this.setState({
                                            login: e,
                                            loginPrefix: t
                                        }),
                                        setRef: this.setLoginRef,
                                        autoCapitalize: "none",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        spellCheck: "false",
                                        value: this.state.login,
                                        autoFocus: !f && !u && !c,
                                        required: !0
                                    }), (0, s.jsx)(v.Input, {
                                        label: k.default.Messages.FORM_LABEL_PASSWORD,
                                        error: this.renderError("password"),
                                        onChange: e => this.setState({
                                            password: e
                                        }),
                                        name: "password",
                                        type: "password",
                                        setRef: this.setPasswordRef,
                                        autoComplete: "off",
                                        spellCheck: "false",
                                        autoFocus: f && !u && !c,
                                        value: this.state.password,
                                        required: !0
                                    }), (0, s.jsx)(v.Button, {
                                        onClick: this.handleForgotPassword,
                                        look: v.Button.Looks.LINK,
                                        color: v.Button.Colors.LINK,
                                        className: r(V.marginBottom20, V.marginTop4),
                                        children: k.default.Messages.FORGOT_PASSWORD
                                    }), (0, s.jsx)(v.Button, {
                                        type: "submit",
                                        submitting: i === F.LoginStates.LOGGING_IN,
                                        color: E ? v.Button.Colors.GREEN : v.Button.Colors.BRAND,
                                        className: V.marginBottom8,
                                        children: E ? k.default.Messages._LOGIN_STAGE : k.default.Messages._LOGIN
                                    }), (0, s.jsxs)("div", {
                                        className: V.marginTop4,
                                        children: [(0, s.jsx)("span", {
                                            className: H.needAccount,
                                            children: k.default.Messages.NEED_ACCOUNT
                                        }), (0, s.jsx)(v.Button, {
                                            onClick: this.handleGotoRegister,
                                            look: v.Button.Looks.LINK,
                                            color: v.Button.Colors.LINK,
                                            className: H.smallRegisterLink,
                                            children: k.default.Messages.REGISTER
                                        })]
                                    })]
                                })
                            })]
                        }), (0, s.jsx)(d.HeadingLevel, {
                            children: e ? (0, s.jsx)(P.default, {
                                authTokenCallback: this.handleAuthToken
                            }) : null
                        })]
                    }, "form-wrapper")
                }
                renderDefault() {
                    let {
                        authBoxClassName: e,
                        showMobileWebHandoff: t
                    } = this.props;
                    return (0, s.jsxs)("div", {
                        className: H.pageContainer,
                        children: [(0, s.jsx)(v.default, {
                            onSubmit: this.handleLogin,
                            tag: "form",
                            className: e,
                            expanded: !0,
                            children: this.renderDefaultForm(!0)
                        }), t && (0, s.jsx)(A.default, {})]
                    })
                }
                renderGuildTemplate(e) {
                    return (0, s.jsx)(B.default, {
                        onSubmit: this.handleLogin,
                        tag: "form",
                        className: r(this.props.authBoxClassName, H.horizontalAuthBox),
                        children: () => [(0, s.jsx)(g.default, {
                            guildTemplate: e
                        }, "template"), this.renderDefaultForm(!1)]
                    })
                }
                renderMFA() {
                    let e = {
                        ticket: this.props.mfaTicket,
                        methods: this.props.mfaMethods
                    };
                    return (0, s.jsx)(v.default, {
                        style: {
                            padding: 0
                        },
                        children: (0, s.jsx)(p.MFASlides, {
                            mfaFinish: this.handleTokenSubmitMFA,
                            request: e,
                            onEarlyClose: () => {
                                c.default.dispatch({
                                    type: "LOGIN_RESET"
                                })
                            },
                            width: 480
                        })
                    })
                }
                renderIPAuthorization() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, s.jsx)(v.default, {
                        tag: "form",
                        className: e,
                        children: (0, s.jsx)(_.default, {
                            title: k.default.Messages.PHONE_IP_AUTHORIZATION_TITLE,
                            subtitle: k.default.Messages.PHONE_IP_AUTHORIZATION_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handleIPAuthorize,
                            onCancel: f.default.loginReset
                        })
                    })
                }
                renderPasswordRecovery() {
                    let {
                        authBoxClassName: e
                    } = this.props, {
                        phoneVerifyError: t
                    } = this.state;
                    return (0, s.jsx)(v.default, {
                        tag: "form",
                        className: e,
                        children: (0, s.jsx)(_.default, {
                            title: k.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_TITLE,
                            subtitle: k.default.Messages.PASSWORD_RECOVERY_VERIFY_PHONE_SUBTITLE_RESEND.format({
                                onResendClick: this.handleResendCode
                            }),
                            error: t,
                            onSubmit: this.handlePasswordReset,
                            onCancel: f.default.loginReset
                        })
                    })
                }
                renderChooseAccount() {
                    return (0, s.jsx)(R.default, {
                        onDismiss: () => {
                            this.setState(e => ({
                                ...e,
                                dismissedChooseAccount: !0
                            }))
                        }
                    })
                }
                render() {
                    let {
                        authenticated: e,
                        invite: t,
                        guildTemplate: n,
                        loginStatus: a,
                        handoffAvailable: l
                    } = this.props, {
                        checkingHandoff: r,
                        redirecting: i
                    } = this.state;
                    if (i || r) return (0, s.jsx)(W, {});
                    if (l) return this.renderHandOffAvailable();
                    if (e && r) return this.renderHandOffContinue();
                    switch (a) {
                        case F.LoginStates.LOGGING_IN_MFA_SMS:
                        case F.LoginStates.MFA_SMS_STEP:
                        case F.LoginStates.LOGGING_IN_MFA:
                        case F.LoginStates.MFA_STEP:
                            return this.renderMFA();
                        case F.LoginStates.ACCOUNT_SCHEDULED_FOR_DELETION:
                        case F.LoginStates.ACCOUNT_DISABLED:
                            return this.renderDisabledAccount();
                        case F.LoginStates.PHONE_IP_AUTHORIZATION:
                            return this.renderIPAuthorization();
                        case F.LoginStates.PASSWORD_RECOVERY_PHONE_VERIFICATION:
                            return this.renderPasswordRecovery();
                        case F.LoginStates.LOGGING_IN:
                        case F.LoginStates.NONE:
                        default:
                            if (null != t && t.state === F.InviteStates.RESOLVING) return this.renderResolving();
                            if (null != n) {
                                if (n.state === w.GuildTemplateStates.RESOLVING) return this.renderResolving();
                                return this.renderGuildTemplate(n)
                            }
                            if (this.canShowChooseAccount && !this.state.dismissedChooseAccount) return this.renderChooseAccount();
                            return this.renderDefault()
                    }
                }
                constructor(e) {
                    var t, n;
                    super(e), this.handleAuthToken = async e => {
                        await f.default.loginToken(e, !1), U.default.track(F.AnalyticEvents.LOGIN_SUCCESSFUL, {
                            source: F.LoginSuccessfulSources.QR_CODE,
                            login_source: this.loginSource,
                            gift_code_sku_id: this.giftCodeSKUId,
                            is_new_user: !1
                        })
                    }, this.setLoginRef = e => {
                        this.loginRef = e
                    }, this.setPasswordRef = e => {
                        this.passwordRef = e
                    }, this.setCodeRef = e => {
                        this.codeRef = e
                    }, this.getFullLogin = () => {
                        let {
                            loginPrefix: e,
                            login: t
                        } = this.state;
                        return e + t
                    }, this.renderError = e => {
                        let {
                            errors: t
                        } = this.props;
                        if (this.hasError(e)) {
                            let n = t[e];
                            return Array.isArray(n) ? n[0] : n
                        }
                        return null
                    }, this.handleLogin = e => {
                        let {
                            password: t,
                            undelete: n
                        } = this.state;
                        null != e && e.preventDefault(), f.default.login({
                            login: this.getFullLogin(),
                            password: t,
                            undelete: n,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId,
                            invite: this.props.invite
                        }), y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleIPAuthorize = async e => {
                        let {
                            password: t,
                            undelete: n
                        } = this.state, s = this.getFullLogin();
                        try {
                            let {
                                token: a
                            } = await I.default.verifyPhone(s, e, !1);
                            await f.default.authorizeIPAddress(a), f.default.login({
                                login: s,
                                password: t,
                                undelete: n,
                                source: this.loginSource,
                                giftCodeSKUId: this.giftCodeSKUId
                            }), y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE)
                        } catch (e) {
                            null != e.body && null != e.body.message && this.setState({
                                phoneVerifyError: e.body.message
                            })
                        }
                    }, this.handlePasswordReset = async e => {
                        let {
                            transitionTo: t
                        } = this.props;
                        this.setState({
                            phoneVerifyError: null
                        });
                        try {
                            let {
                                token: n
                            } = await I.default.verifyPhone(this.getFullLogin(), e, !1);
                            t(F.Routes.RESET, {
                                search: (0, i.stringify)({
                                    token: n,
                                    from_login: "true"
                                })
                            })
                        } catch (e) {
                            null != e.body && null != e.body.message && this.setState({
                                phoneVerifyError: e.body.message
                            })
                        }
                    }, this.handleTokenSubmitMFA = e => {
                        let {
                            mfaType: t,
                            data: n,
                            ticket: s
                        } = e;
                        return y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE), f.default.loginMFAv2({
                            code: n,
                            ticket: s,
                            mfaType: t,
                            source: this.loginSource,
                            giftCodeSKUId: this.giftCodeSKUId
                        })
                    }, this.handleForgotPassword = async e => {
                        null != e && e.preventDefault(), null != this.loginRef && this.loginRef.focus();
                        let t = this.getFullLogin();
                        try {
                            y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE), await f.default.forgotPassword(t), (0, d.openModal)(e => (0, s.jsx)(d.ConfirmModal, {
                                header: k.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_HEADER,
                                confirmText: k.default.Messages.OKAY,
                                confirmButtonColor: v.Button.Colors.BRAND,
                                className: o.isMobile ? H.mobile : "",
                                ...e,
                                children: (0, s.jsx)(d.Text, {
                                    variant: "text-md/normal",
                                    children: k.default.Messages.EMAIL_VERIFICATION_INSTRUCTIONS_BODY.format({
                                        email: t
                                    })
                                })
                            }))
                        } catch {}
                    }, this.handleResendCode = () => {
                        I.default.resendCode(this.getFullLogin())
                    }, this.handleReset = e => {
                        null != e && e.preventDefault(), f.default.loginReset(), this.setState({
                            password: "",
                            loginPrefix: "",
                            login: "",
                            code: "",
                            smsCode: "",
                            undelete: !1,
                            checkingHandoff: !1,
                            redirecting: !1
                        })
                    }, this.handleCancelAccountDeletion = () => {
                        this.setState({
                            undelete: !0
                        }, this.handleLogin)
                    }, this.handleGotoRegister = () => {
                        let e;
                        let {
                            login: t
                        } = this.state, {
                            invite: n,
                            giftCode: s,
                            guildTemplate: a,
                            location: l,
                            transitionTo: r,
                            redirectTo: o
                        } = this.props, u = null != l ? (0, i.parse)(l.search) : {};
                        "" !== t && (u.email = t), null != n ? (u.mode = "register", e = F.Routes.INVITE(n.code)) : null != s ? (u.mode = "register", e = F.Routes.GIFT_CODE(s.code)) : null != a ? e = F.Routes.GUILD_TEMPLATE(a.code) : null != o ? (e = F.Routes.REGISTER, u.redirect_to = o) : e = F.Routes.REGISTER, f.default.loginReset(), r(e, {
                            search: (0, i.stringify)(u)
                        }), y.ComponentDispatch.dispatch(F.ComponentActions.WAVE_EMPHASIZE)
                    };
                    let a = null != e.location ? (0, i.parse)(e.location.search) : {};
                    this.state = {
                        redirecting: e.authenticated,
                        checkingHandoff: e.handoffAvailable,
                        loginPrefix: "",
                        login: null !== (n = null !== (t = a.email) && void 0 !== t ? t : a.login) && void 0 !== n ? n : "",
                        password: "",
                        code: "",
                        smsCode: "",
                        undelete: !1,
                        phoneVerifyError: null,
                        dismissedChooseAccount: !1
                    }
                }
            }
            Y.defaultProps = {
                transitionTo: e => n.g.location.assign(e)
            };
            var K = function(e) {
                let t = (0, u.useStateFromStoresObject)([M.default, O.default, L.default, T.default, N.default], () => ({
                    authenticated: L.default.isAuthenticated(),
                    handoffAvailable: M.default.isHandoffAvailable(),
                    user: M.default.user,
                    loginStatus: L.default.getLoginStatus(),
                    mfaTicket: L.default.getMFATicket(),
                    mfaSMS: L.default.getMFASMS(),
                    mfaMethods: L.default.getMFAMethods(),
                    maskedPhone: L.default.getMaskedPhone(),
                    errors: L.default.getErrors(),
                    defaultRoute: O.default.defaultRoute,
                    country: N.default.getCountryCode(),
                    hasLoggedInAccounts: T.default.getHasLoggedInAccounts()
                }));
                return (0, s.jsx)(Y, {
                    ...e,
                    ...t
                })
            }
        },
        275744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("506083");
            var s = n("37983"),
                a = n("884691"),
                l = n("730290"),
                r = n("803182"),
                i = n("446674"),
                o = n("437822"),
                u = n("697796"),
                d = n("524824"),
                c = n("393414"),
                f = n("271938"),
                E = n("291850"),
                h = n("49111"),
                _ = n("724210");

            function m(e) {
                let t = a.useCallback(t => {
                        if (function(e) {
                                var t;
                                let n = (0, r.matchPath)(e, {
                                    path: h.Routes.CHANNEL(":guildId", ":channelId")
                                });
                                return (null == n ? void 0 : null === (t = n.params) || void 0 === t ? void 0 : t.channelId) === _.StaticChannelRoute.ROLE_SUBSCRIPTIONS || !1
                            }(t)) c.replaceWith(t);
                        else {
                            var n;
                            (null !== (n = e.transitionTo) && void 0 !== n ? n : c.transitionTo)(t)
                        }
                    }, [e.transitionTo]),
                    {
                        isAuthenticated: n,
                        loginStatus: m
                    } = (0, i.useStateFromStoresObject)([f.default], () => ({
                        isAuthenticated: f.default.isAuthenticated(),
                        loginStatus: f.default.getLoginStatus()
                    })),
                    {
                        location: g,
                        redirectTo: p
                    } = e,
                    [A, T] = a.useState(n);

                function R(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    } = e;
                    (0, u.handoffFromApp)({
                        handoffKey: t,
                        handoffToken: n,
                        handoffSource: s
                    }), T(!1)
                }
                return (a.useEffect(() => {
                    if (null != g) {
                        let {
                            handoff_key: e,
                            handoff_token: t
                        } = (0, l.parse)(g.search);
                        if (null != e && null != t) {
                            let n = null != p ? (0, d.getLoginHandoffSourceFromRedirectTo)(p) : void 0;
                            A ? o.default.logout(null).finally(() => {
                                R({
                                    handoffKey: e,
                                    handoffToken: t,
                                    handoffSource: n
                                })
                            }) : R({
                                handoffKey: e,
                                handoffToken: t,
                                handoffSource: n
                            })
                        }
                    }
                }, []), A || m === h.LoginStates.LOGGING_IN) ? (0, s.jsx)(E.LoginSpinner, {}) : (0, s.jsx)(E.default, {
                    ...e,
                    transitionTo: t
                })
            }
        },
        331085: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("70102"), n("222007");
            var s, a, l, r, i = n("37983"),
                o = n("884691"),
                u = n("981980"),
                d = n("872717"),
                c = n("77078"),
                f = n("308289"),
                E = n("905949"),
                h = n("605250"),
                _ = n("671278"),
                m = n("124969"),
                g = n("659500"),
                p = n("274515"),
                A = n("158998"),
                T = n("49111"),
                R = n("843455"),
                I = n("782340"),
                N = n("103957"),
                S = n("926622");
            (l = s || (s = {}))[l.INITIALIZING = 0] = "INITIALIZING", l[l.PENDING_REMOTE_INIT = 1] = "PENDING_REMOTE_INIT", l[l.PENDING_FINISH = 2] = "PENDING_FINISH", l[l.PENDING_TICKET = 3] = "PENDING_TICKET", l[l.PENDING_LOGIN = 4] = "PENDING_LOGIN", l[l.FINISH = 5] = "FINISH", (r = a || (a = {}))[r.QR_CODE = 0] = "QR_CODE", r[r.CONFIRM = 1] = "CONFIRM";
            let C = n("527826"),
                L = new h.default("LoginQRSocket");

            function M(e) {
                let {
                    text: t = ""
                } = e, [n, s] = o.useState(!1);
                return o.useEffect(() => {
                    let e = new Image;
                    e.src = C, e.onload = () => s(!0), e.onerror = () => s(!0)
                }, [C]), o.useEffect(() => {
                    n && c.AccessibilityAnnouncer.announce(I.default.Messages.LOGIN_WITH_QR_LOADING_FINISHED_LABEL)
                }, [n]), (0, i.jsx)("div", {
                    className: N.qrCodeContainer,
                    children: "" !== t && n ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(_.default, {
                            className: N.qrCode,
                            size: 160,
                            text: t
                        }), (0, i.jsx)("div", {
                            className: N.qrCodeOverlay,
                            children: (0, i.jsx)("img", {
                                src: C,
                                alt: ""
                            })
                        })]
                    }) : (0, i.jsx)("div", {
                        className: N.qrCodeOverlay,
                        "aria-label": I.default.Messages.LOGIN_WITH_QR_LOADING_LABEL,
                        "aria-busy": !0,
                        children: (0, i.jsx)(c.Spinner, {
                            className: N.qrCode,
                            type: c.Spinner.Type.WANDERING_CUBES,
                            "aria-hidden": !0
                        })
                    })
                })
            }
            let O = e => {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, i.jsx)(c.Text, {
                    variant: "text-md/normal",
                    color: "text-danger",
                    className: t,
                    children: n
                })
            };

            function x(e) {
                let {
                    state: t,
                    cancel: n,
                    errorMessage: s
                } = e;
                switch (t.step) {
                    case 0:
                    case 1:
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(M, {
                                text: 1 === t.step ? "https://discord.com/ra/".concat(t.fingerprint) : ""
                            }), (0, i.jsx)(m.Title, {
                                className: S.marginBottom8,
                                children: I.default.Messages.LOGIN_WITH_QR
                            }), null != s ? (0, i.jsx)(O, {
                                children: s
                            }) : (0, i.jsx)(m.SubTitle, {
                                children: I.default.Messages.LOGIN_WITH_QR_DESCRIPTION.format()
                            })]
                        });
                    case 3:
                    case 2: {
                        let {
                            user: e
                        } = t;
                        return (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(f.default, {
                                className: N.qrAvatar,
                                user: e,
                                size: c.AvatarSizes.SIZE_120,
                                isMobile: !0,
                                status: R.StatusTypes.ONLINE
                            }), (0, i.jsx)(m.Title, {
                                className: S.marginBottom8,
                                children: I.default.Messages.CONFIRM_QR_CHECK_YOUR_PHONE
                            }), (0, i.jsx)(m.SubTitle, {
                                children: I.default.Messages.LOGIN_AS.format({
                                    username: "".concat(A.default.getUserTag(e))
                                })
                            }), (0, i.jsx)(c.Button, {
                                look: c.Button.Looks.BLANK,
                                color: c.Button.Colors.LINK,
                                size: c.Button.Sizes.MIN,
                                onClick: n,
                                className: N.startOverButton,
                                children: I.default.Messages.QR_CODE_LOGIN_START_OVER
                            })]
                        })
                    }
                    case 4:
                    case 5:
                        return (0, i.jsx)(c.Spinner, {
                            type: c.Spinner.Type.WANDERING_CUBES
                        })
                }
            }

            function v(e) {
                let {
                    authTokenCallback: t
                } = e, {
                    state: n,
                    rsaKeyPair: s,
                    cancel: a,
                    handleFailure: l
                } = function(e) {
                    let [t, n] = o.useState(0), [s, a] = o.useState(!1), [l, r] = o.useState({
                        step: 0
                    }), [i, d] = o.useState(null), c = (0, E.default)(), f = o.useMemo(() => new u.default(1500, 3e4), []), h = o.useRef();
                    h.current = o.useCallback(() => {
                        r({
                            step: 0
                        }), c ? n(e => e + 1) : (L.info("document is not visible, will defer reconnection when document becomes visible."), a(!0))
                    }, [c]);
                    let _ = o.useCallback(() => {
                            (function(e) {
                                let {
                                    current: t
                                } = e;
                                if (void 0 === t) throw Error("tried to unwrap an undefined value.");
                                return t
                            })(h)()
                        }, [h]),
                        m = o.useCallback(() => {
                            L.error("Could not complete QR code login, trying to restart with a new QR code."), r({
                                step: 0
                            }), !f.pending && f.fail(_)
                        }, [_, f]);
                    return o.useEffect(() => {
                        c && s && 0 === l.step && (L.info("reconnecting, now that document is visible"), a(!1), n(e => e + 1))
                    }, [l, c, s, a]), o.useEffect(() => {
                        let t = Date.now(),
                            n = () => "".concat(Date.now() - t, "ms"),
                            s = "wss:".concat(window.GLOBAL_ENV.REMOTE_AUTH_ENDPOINT, "/?v=2"),
                            a = new WebSocket(s);
                        L.info("[0ms] connecting to ".concat(s));
                        let l = e => L.info("[".concat(n(), "] ").concat(e)),
                            i = null,
                            o = null,
                            u = null,
                            c = null,
                            E = !0;

                        function h() {
                            if (null != i) return i;
                            throw Error("No key pair set")
                        }
                        let A = () => {
                            E ? (E = !1, a.send(JSON.stringify({
                                op: "heartbeat"
                            }))) : (l("heartbeat timeout, reconnecting."), a.close(), m())
                        };
                        return a.onmessage = async t => {
                            let {
                                data: n
                            } = t, s = JSON.parse(n);
                            switch (s.op) {
                                case "nonce_proof": {
                                    let e = s.encrypted_nonce,
                                        t = await (0, p.decryptNonce)(h(), e);
                                    l("computed nonce proof"), a.send(JSON.stringify({
                                        op: "nonce_proof",
                                        nonce: t
                                    }));
                                    return
                                }
                                case "pending_remote_init": {
                                    f.succeed(), g.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE);
                                    let e = await (0, p.publicKeyFingerprint)(h());
                                    if (e !== s.fingerprint) throw Error("bad fingerprint ".concat(e, " !== ").concat(s.fingerprint));
                                    l("handshake complete awaiting remote auth."), r({
                                        step: 1,
                                        fingerprint: e
                                    });
                                    return
                                }
                                case "pending_login": {
                                    let e = s.ticket;
                                    null == e && m(), r({
                                        step: 4,
                                        ticket: e
                                    });
                                    return
                                }
                                case "pending_ticket": {
                                    g.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting ticket/cancel.");
                                    let e = s.encrypted_user_payload,
                                        t = await (0, p.decodeEncodedUserRecord)(h(), e);
                                    r({
                                        step: 3,
                                        user: t
                                    });
                                    return
                                }
                                case "pending_finish": {
                                    g.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake started, awaiting finish/cancel.");
                                    let e = s.encrypted_user_payload,
                                        t = await (0, p.decodeEncodedUserRecord)(h(), e);
                                    r({
                                        step: 2,
                                        user: t
                                    });
                                    return
                                }
                                case "finish": {
                                    g.ComponentDispatch.dispatch(T.ComponentActions.WAVE_EMPHASIZE), l("remote auth handshake finished.");
                                    let t = s.encrypted_token;
                                    r({
                                        step: 5
                                    });
                                    let n = await (0, p.decryptEncodedCiphertext)(h(), t);
                                    e(n);
                                    return
                                }
                                case "cancel":
                                    l("remote auth handshake cancelled."), _();
                                    return;
                                case "hello": {
                                    l("got hello, auth timeout=".concat(s.timeout_ms, "ms"));
                                    let e = s.heartbeat_interval;
                                    c = setTimeout(() => {
                                        c = null, A(), u = setInterval(A, e)
                                    }, Math.floor(e * Math.random()));
                                    return
                                }
                                case "heartbeat_ack":
                                    E = !0
                            }
                        }, a.onopen = async () => {
                            i = await (0, p.generateRsaKeyPair)(), o = await (0, p.serializePublicKey)(i);
                            let e = await (0, p.publicKeyFingerprint)(i);
                            l("connected, handshaking with fingerprint: ".concat(e)), a.send(JSON.stringify({
                                op: "init",
                                encoded_public_key: o
                            })), d(i)
                        }, a.onclose = e => {
                            l("disconnected, code: ".concat(e.code, " ").concat(e.reason)), m()
                        }, a.onerror = e => {
                            l("disconnected, error: ".concat(JSON.stringify(e))), m()
                        }, () => {
                            l("cleaning up"), a.onopen = () => null, a.onmessage = () => null, a.onclose = () => null, a.onerror = () => null, a.close(1e3), f.cancel(), null != c && clearTimeout(c), null != u && clearInterval(u)
                        }
                    }, [_, e, t, f, m]), {
                        state: l,
                        rsaKeyPair: i,
                        cancel: _,
                        handleFailure: m
                    }
                }(t), r = function(e) {
                    switch (e) {
                        case 0:
                        case 1:
                            return 0;
                        case 3:
                        case 2:
                        case 4:
                        case 5:
                            return 1
                    }
                }(n.step);
                return o.useEffect(() => {
                    4 === n.step && null != n.ticket && d.default.post({
                        url: T.Endpoints.REMOTE_AUTH_LOGIN,
                        body: {
                            ticket: n.ticket
                        },
                        oldFormErrors: !0
                    }).then(async e => {
                        if (null != s) try {
                            let n = await (0, p.decryptEncodedCiphertext)(s, e.body.encrypted_token);
                            t(n)
                        } catch (e) {
                            l()
                        } else l()
                    }).catch(() => {
                        l()
                    })
                }, [n, t, s, l]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        className: N.verticalSeparator
                    }), (0, i.jsx)(c.Sequencer, {
                        fillParent: !0,
                        className: N.qrLogin,
                        step: r,
                        steps: [0, 1],
                        children: (0, i.jsx)("div", {
                            className: N.qrLoginInner,
                            children: (0, i.jsx)(x, {
                                state: n,
                                cancel: a
                            })
                        })
                    })]
                })
            }
        },
        598489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("124969"),
                i = n("328763");

            function o(e) {
                let {
                    children: t,
                    className: n,
                    ...a
                } = e, o = t();
                return (0, s.jsx)(r.default, {
                    ...a,
                    className: l(n, i.container),
                    contentClassName: i.content,
                    children: o.map((e, t) => (0, s.jsx)("div", {
                        className: i.column,
                        style: {
                            flexBasis: "".concat(100 / o.length, "%")
                        },
                        children: e
                    }, t))
                })
            }
        },
        860959: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return er
                }
            }), n("781738"), n("222007"), n("794252");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("730290"),
                o = n("506838"),
                u = n("759843"),
                d = n("446674"),
                c = n("862337"),
                f = n("77078"),
                E = n("437822"),
                h = n("678916"),
                _ = n("816540"),
                m = n("208266"),
                g = n("428958"),
                p = n("307439"),
                A = n("765825"),
                T = n("715570"),
                R = n("486252"),
                I = n("378020"),
                N = n("980976"),
                S = n("534438"),
                C = n("946859"),
                L = n("791160"),
                M = n("434824"),
                O = n("770032"),
                x = n("165926"),
                v = n("25033"),
                D = n("255403"),
                U = n("2581"),
                y = n("644417"),
                G = n("697543"),
                b = n("79345"),
                j = n("447997"),
                P = n("970366"),
                B = n("271938"),
                F = n("350522"),
                w = n("476108"),
                k = n("124969"),
                H = n("980428"),
                V = n("599110"),
                W = n("659500"),
                Y = n("159885"),
                K = n("404432"),
                z = n("719451"),
                q = n("598489"),
                Z = n("49111"),
                Q = n("771848"),
                X = n("492397"),
                J = n("56235"),
                $ = n("935583"),
                ee = n("782340"),
                et = n("266100"),
                en = n("926622");
            d.default.initialize();
            let es = /\.$/,
                ea = e => Array.isArray(e) ? e.map(e => e.replace(es, "")).join(". ").trim() : e;
            class el extends a.PureComponent {
                get registrationSource() {
                    let {
                        giftCode: e,
                        guildTemplate: t,
                        invite: n
                    } = this.props;
                    if (null != e) return "gift";
                    if (null != t) return "guild_template";
                    if (null != n) {
                        if (null != n.guild) return "guild_invite";
                        if (null != n.channel) return "dm_invite";
                        else if (null != n.inviter) return "friend_invite"
                    }
                    return null
                }
                hasConsent() {
                    let {
                        consentRequired: e
                    } = this.props, {
                        consent: t
                    } = this.state;
                    return null != e && t
                }
                componentDidMount() {
                    this.redirectIfAuthenticated(), A.default.trackExposure({
                        location: "0ba758_1"
                    });
                    let {
                        giftCodeSKU: e,
                        invite: t
                    } = this.props;
                    V.default.track(Z.AnalyticEvents.REGISTER_VIEWED, {
                        location: null != t ? "Invite Register Page" : "Non-Invite Register Page",
                        registration_source: this.registrationSource,
                        ...null != e ? (0, L.default)(e, !1, !1) : {}
                    }, {
                        flush: !0
                    }), null == this.props.consentRequired && E.default.getLocationMetadata(), (0, P.trackAppUIViewed)("register")
                }
                componentWillUnmount() {
                    this._retryTimer.stop()
                }
                static getDerivedStateFromProps(e, t) {
                    let {
                        consentRequired: n
                    } = e, {
                        consentRequiredProp: s
                    } = t;
                    return null == s && null != n ? {
                        consent: !n,
                        consentRequiredProp: n
                    } : {
                        consentRequiredProp: n
                    }
                }
                componentDidUpdate(e, t) {
                    let {
                        apiErrors: n,
                        authenticated: s,
                        isUnderage: a,
                        invite: l,
                        onChangeStep: r
                    } = this.props, {
                        parsedDateOfBirth: i
                    } = this.state;
                    (e.apiErrors !== n || t.parsedDateOfBirth !== i) && (this.hasError("email") || this.hasError("phone") ? null != this.emailRef && this.emailRef.focus() : this.hasError("username") ? null != this.usernameRef && this.usernameRef.focus() : this.hasError("global_name") ? null != this.globalNameRef && this.globalNameRef.focus() : this.hasError("password") ? null != this.passwordRef && this.passwordRef.focus() : null == this.state.parsedDateOfBirth ? null != this.dateOfBirthRef.current && this.dateOfBirthRef.current.focus() : this.hasError("retry_after") && "number" == typeof this.props.apiErrors.retry_after && (this.setState({
                        isRateLimited: !0
                    }), this._retryTimer.start(1e3 * this.props.apiErrors.retry_after, () => {
                        this.setState({
                            isRateLimited: !1
                        })
                    }))), s && !e.authenticated && ((0, x.setNewUser)(J.NewUserTypes.ORGANIC_REGISTERED), this.redirectIfAuthenticated());
                    let o = Q.RegistrationSteps.FULL;
                    a || this.hasError("date_of_birth") ? o = Q.RegistrationSteps.AGE_GATE : null != l && (null != l.guild || null != l.channel) && (o = Q.RegistrationSteps.INVITE), r(o)
                }
                redirectIfAuthenticated() {
                    let {
                        authenticated: e,
                        transitionTo: t,
                        redirectTo: n
                    } = this.props;
                    e && t(null != n ? n : w.default.defaultRoute)
                }
                async handleRegister() {
                    let {
                        email: e,
                        username: t,
                        globalName: n,
                        password: s,
                        consent: a,
                        parsedDateOfBirth: l
                    } = this.state, {
                        invite: r,
                        guildTemplate: i,
                        giftCode: o,
                        onRegister: u,
                        usernameSuggestion: d,
                        isMobileWebInviteRegistration: c
                    } = this.props, f = null != r ? r.code : null, E = null != o ? o.skuId : null, h = p.usePromoEmailConsentStore.getState(), _ = (0, Y.isNullOrEmpty)(d) ? null : t === d, m = X.CONFERENCE_MODE_ENABLED ? await (0, C.formatUsername)(t) : t;
                    W.ComponentDispatch.dispatch(Z.ComponentActions.WAVE_EMPHASIZE);
                    try {
                        c || null == r ? await (0, T.registerFull)({
                            email: e,
                            username: m,
                            globalName: n,
                            consent: a,
                            password: s,
                            invite: f,
                            usedUsernameSuggestion: _,
                            guildTemplateCode: null == i ? void 0 : i.code,
                            giftCodeSKUId: E,
                            birthday: l,
                            promoEmailConsent: h.required ? h : null
                        }) : await (0, T.default)({
                            consent: a,
                            invite: f,
                            giftCodeSKUId: E,
                            usedUsernameSuggestion: _,
                            globalName: n
                        }), null == u || u()
                    } catch (e) {}
                }
                hasError(e) {
                    return null != this.props.apiErrors[e]
                }
                renderConsentComponents() {
                    let {
                        consent: e
                    } = this.state, {
                        consentRequired: t,
                        registrationCopyExperimentConfig: {
                            enableNewCopy: n,
                            hasProminentCopy: a
                        }
                    } = this.props, l = null, r = null;
                    return t ? r = (0, s.jsx)(R.default, {
                        value: e,
                        onChange: e => this.setState({
                            consent: e
                        }),
                        subText: ee.default.Messages.TERMS_PRIVACY_OPT_IN.format({
                            termsURL: Z.MarketingURLs.TERMS,
                            privacyURL: Z.MarketingURLs.PRIVACY
                        })
                    }) : l = (0, s.jsx)(k.SubText, {
                        isProminent: !!a,
                        className: en.marginTop8,
                        children: n ? ee.default.Messages.TERMS_PRIVACY_ON_REGISTER.format({
                            buttonText: ee.default.Messages.CONTINUE,
                            termsURL: Z.MarketingURLs.TERMS,
                            privacyURL: Z.MarketingURLs.PRIVACY
                        }) : ee.default.Messages.TERMS_PRIVACY.format({
                            termsURL: Z.MarketingURLs.TERMS,
                            privacyURL: Z.MarketingURLs.PRIVACY
                        })
                    }), {
                        subText: l,
                        consentText: r
                    }
                }
                renderInviteResolving() {
                    let {
                        authBoxClassName: e
                    } = this.props, t = e => {
                        this.setState({
                            globalName: e
                        })
                    }, n = this.state.globalName;
                    return (0, s.jsxs)(k.default, {
                        className: e,
                        children: [(0, s.jsx)(z.InviteResolvingHeader, {}), (0, s.jsxs)(k.Block, {
                            className: en.marginTop40,
                            children: [(0, s.jsx)(f.FormTitle, {
                                children: ee.default.Messages.FORM_LABEL_USERNAME
                            }), (0, s.jsx)(f.Tooltip, {
                                text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                position: "right",
                                color: f.Tooltip.Colors.BRAND,
                                children: e => {
                                    let {
                                        onMouseEnter: a,
                                        onMouseLeave: l
                                    } = e;
                                    return (0, s.jsx)(k.Input, {
                                        autoFocus: !0,
                                        className: en.marginBottom8,
                                        name: "username",
                                        value: n,
                                        placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                        onChange: t,
                                        onMouseEnter: a,
                                        onMouseLeave: l
                                    })
                                }
                            }), (0, s.jsx)(k.Button, {
                                className: en.marginTop20,
                                disabled: !0,
                                children: ee.default.Messages.CONTINUE
                            }), (0, s.jsx)(k.SubText, {
                                disabled: !0,
                                className: en.marginTop8,
                                children: ee.default.Messages.TERMS_PRIVACY.format({
                                    termsURL: Z.MarketingURLs.TERMS,
                                    privacyURL: Z.MarketingURLs.PRIVACY
                                })
                            }), X.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(k.Button, {
                                look: k.Button.Looks.LINK,
                                color: k.Button.Colors.LINK,
                                disabled: !0,
                                className: en.marginTop20,
                                children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                            })]
                        })]
                    })
                }
                renderInviteHeader() {
                    let {
                        invite: e
                    } = this.props;
                    return (null == e ? void 0 : e.stage_instance) != null && null != e.guild ? (0, s.jsx)(S.default, {
                        stageInstance: e.stage_instance,
                        guild: e.guild
                    }) : (null == e ? void 0 : e.guild_scheduled_event) != null ? (0, s.jsx)(I.GuildScheduledEventInviteHeader, {
                        channel: e.channel,
                        guildScheduledEvent: e.guild_scheduled_event
                    }) : (0, s.jsx)(z.default, {
                        invite: e
                    })
                }
                renderInviteButton() {
                    let {
                        invite: e,
                        registering: t,
                        consentRequired: n
                    } = this.props, {
                        consent: a
                    } = this.state, l = k.Button.Colors.BRAND, r = ee.default.Messages.CONTINUE;
                    return (null == e ? void 0 : e.stage_instance) != null && (l = k.Button.Colors.GREEN, r = ee.default.Messages.INSTANT_INVITE_ACCEPT_STAGE), (0, s.jsx)(f.Tooltip, {
                        text: !a && n ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(k.Button, {
                                type: "submit",
                                submitting: t,
                                disabled: !this.hasConsent(),
                                color: l,
                                children: r
                            })
                        })
                    })
                }
                renderInvite() {
                    let {
                        invite: e,
                        authBoxClassName: t,
                        apiErrors: {
                            username: n,
                            global_name: a
                        }
                    } = this.props, {
                        subText: l,
                        consentText: r
                    } = this.renderConsentComponents(), i = (null == e ? void 0 : e.stage_instance) != null || (null == e ? void 0 : e.guild_scheduled_event) != null, o = e => {
                        this.setState({
                            globalName: e
                        })
                    }, u = this.state.globalName;
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsxs)(k.default, {
                            onSubmit: this.handleSubmit,
                            tag: "form",
                            className: t,
                            children: [this.renderInviteHeader(), i ? (0, s.jsx)("div", {
                                className: et.divider
                            }) : null, (0, s.jsxs)(k.Block, {
                                className: i ? void 0 : en.marginTop40,
                                children: [(0, s.jsx)(f.FormTitle, {
                                    error: ea(null != a ? a : n),
                                    children: ee.default.Messages.DISPLAY_NAME
                                }), (0, s.jsx)(f.Tooltip, {
                                    text: ee.default.Messages.AUTH_USERNAME_TOOLTIP,
                                    position: "right",
                                    color: f.Tooltip.Colors.BRAND,
                                    children: e => {
                                        let {
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        } = e;
                                        return (0, s.jsx)(k.Input, {
                                            autoFocus: !0,
                                            className: en.marginBottom8,
                                            name: "global_name",
                                            value: u,
                                            placeholder: ee.default.Messages.FORM_PLACEHOLDER_USERNAME,
                                            onChange: o,
                                            error: null != n || null != a ? "" : null,
                                            onMouseEnter: t,
                                            onMouseLeave: l
                                        })
                                    }
                                }), (0, s.jsx)(f.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                                }), this.renderInviteButton(), l, r, X.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(k.Button, {
                                    look: k.Button.Looks.LINK,
                                    color: k.Button.Colors.LINK,
                                    onClick: this.handleGotoLogin,
                                    className: en.marginTop20,
                                    children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                                })]
                            })]
                        }), null != e && i ? (0, s.jsx)(k.default, {
                            className: en.marginTop20,
                            children: (0, s.jsx)(S.StageInviteFooter, {
                                guild: e.guild,
                                onlineCount: e.approximate_presence_count
                            })
                        }) : null]
                    })
                }
                renderErrorMessage() {
                    let {
                        apiErrors: {
                            message: e
                        }
                    } = this.props;
                    return "string" != typeof e ? null : (0, s.jsx)(k.SubText, {
                        className: r(en.marginTop20, et.errorMessage),
                        children: e
                    })
                }
                renderFull(e, t) {
                    let {
                        email: n,
                        username: l,
                        globalName: i,
                        password: o,
                        consent: u,
                        parsedDateOfBirth: d,
                        globalNameFocused: c,
                        emailClientError: E,
                        usernameClientError: h,
                        passwordClientError: _,
                        dateOfBirthClientError: g
                    } = this.state, {
                        registering: p,
                        consentRequired: A,
                        isMobileWebInviteRegistration: T,
                        uniqueUsernameRegistrationConfig: {
                            suggestions: R
                        },
                        authBoxClassName: I,
                        apiErrors: {
                            email: S,
                            username: C,
                            global_name: L,
                            password: M,
                            date_of_birth: O
                        } = {},
                        hasLoggedInAccounts: x,
                        registrationCopyExperimentConfig: {
                            hasCopyAboveButton: v
                        }
                    } = this.props, {
                        subText: y,
                        consentText: G
                    } = this.renderConsentComponents(), b = this.renderErrorMessage(), P = (0, s.jsx)(f.Tooltip, {
                        text: !u && A ? ee.default.Messages.TERMS_PRIVACY_OPT_IN_TOOLTIP : null,
                        children: e => (0, s.jsx)("div", {
                            className: en.marginTop20,
                            ...e,
                            children: (0, s.jsx)(k.Button, {
                                type: "submit",
                                submitting: p,
                                disabled: !this.hasConsent() || this.state.isRateLimited,
                                children: ee.default.Messages.CONTINUE
                            })
                        })
                    }), B = async () => {
                        this.setState({
                            usernameFocused: !0
                        }), R && i.length > 0 && !U.default.wasRegistrationSuggestionFetched(i) && await D.default.fetchSuggestionsRegistration(i)
                    }, F = null != e ? (0, s.jsx)(a.Fragment, {
                        children: e()
                    }, "custom-header") : (0, s.jsx)(k.Title, {
                        children: ee.default.Messages.REGISTER_TITLE
                    }, "title"), w = (0, s.jsxs)(k.Block, {
                        className: en.marginTop20,
                        children: [(0, s.jsx)(k.Input, {
                            autoFocus: !0,
                            className: en.marginBottom20,
                            label: ee.default.Messages.FORM_LABEL_EMAIL,
                            name: "email",
                            value: n,
                            onChange: e => this.setState({
                                email: e,
                                emailClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                            }),
                            error: null != E ? E : ea(S),
                            type: "email",
                            setRef: e => {
                                this.emailRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(k.Input, {
                            label: ee.default.Messages.DISPLAY_NAME,
                            className: en.marginBottom20,
                            name: "global_name",
                            value: i,
                            onChange: e => this.setState({
                                globalName: e
                            }),
                            error: ea(L),
                            maxLength: $.MAX_DISPLAY_NAME_LENGTH,
                            setRef: e => {
                                this.globalNameRef = e
                            },
                            onFocus: () => this.setState({
                                globalNameFocused: !0
                            }),
                            onBlur: () => this.setState({
                                globalNameFocused: !1
                            })
                        }), (0, s.jsx)(j.default, {
                            show: c,
                            top: -12,
                            bottom: 20,
                            children: (0, s.jsx)(f.Text, {
                                variant: "text-sm/normal",
                                color: "text-normal",
                                children: ee.default.Messages.UU_REGISTER_DISPLAY_NAME_HINT_2
                            })
                        }), (0, s.jsxs)("div", {
                            onBlur: () => this.setState({
                                usernameFocused: !1
                            }),
                            onFocus: B,
                            tabIndex: -1,
                            children: [(0, s.jsx)(k.Input, {
                                label: ee.default.Messages.FORM_LABEL_USERNAME,
                                className: en.marginBottom20,
                                name: "username",
                                value: l,
                                onChange: e => {
                                    this.setState({
                                        username: e.toLocaleLowerCase(),
                                        usernameClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                                    })
                                },
                                error: null != h ? h : ea(C),
                                setRef: e => {
                                    this.usernameRef = e
                                },
                                required: !0
                            }), this.renderUsernameValidation()]
                        }), (0, s.jsx)(k.Input, {
                            label: ee.default.Messages.FORM_LABEL_PASSWORD,
                            name: "password",
                            value: o,
                            onChange: e => this.setState({
                                password: e,
                                passwordClientError: 0 === e.length ? ee.default.Messages.REQUIRED : null
                            }),
                            error: null != _ ? _ : ea(M),
                            type: "password",
                            setRef: e => {
                                this.passwordRef = e
                            },
                            required: !0
                        }), (0, s.jsx)(m.default, {
                            label: ee.default.Messages.AGE_GATE_YOUR_BIRTHDAY,
                            wrapperClassName: en.marginTop20,
                            name: "date_of_birth",
                            onChange: this.handleBirthdayChange,
                            ref: this.dateOfBirthRef,
                            error: null != g ? g : ea(O),
                            value: d,
                            required: !0
                        }), v && y, (0, s.jsx)(N.default, {}), P, b, G, !v && y, X.CONFERENCE_MODE_ENABLED ? null : (0, s.jsx)(k.Button, {
                            look: T ? k.Button.Looks.FILLED : k.Button.Looks.LINK,
                            color: T ? k.Button.Colors.PRIMARY : k.Button.Colors.LINK,
                            onClick: this.handleGotoLogin,
                            className: en.marginTop20,
                            children: ee.default.Messages.ALREADY_HAVE_ACCOUNT
                        })]
                    });
                    return t ? (0, s.jsx)(q.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: r(I, et.horizontalAuthBox),
                        children: () => [F, (0, s.jsxs)("div", {
                            className: et.flex,
                            children: [(0, s.jsx)(k.Title, {
                                className: et.createAccountTemplateHeader,
                                children: ee.default.Messages.REGISTER_TITLE
                            }), w]
                        }, "register-title")]
                    }) : (0, s.jsxs)(k.default, {
                        onSubmit: this.handleSubmit,
                        tag: "form",
                        className: I,
                        children: [x && !T ? (0, s.jsx)(k.Button, {
                            onClick: this.handleGotoLogin,
                            look: k.Button.Looks.LINK,
                            color: k.Button.Colors.PRIMARY,
                            className: et.goBackButton,
                            children: (0, s.jsxs)("div", {
                                className: et.content,
                                children: [(0, s.jsx)(H.default, {
                                    width: 16,
                                    height: 16,
                                    className: et.caret
                                }), (0, s.jsx)(f.Text, {
                                    variant: "text-md/normal",
                                    children: ee.default.Messages.AGE_GATE_GO_BACK
                                })]
                            })
                        }) : null, F, w]
                    })
                }
                render() {
                    let {
                        isUnderage: e,
                        isMobileWebInviteRegistration: t
                    } = this.props;
                    if (e || this.hasError("date_of_birth")) return (0, s.jsx)(_.default, {});
                    let {
                        invite: n,
                        giftCode: a,
                        guildTemplate: l
                    } = this.props, r = null != n && null == n.guild && null == n.channel && null != n.inviter;
                    return null == n || r || t ? null != l ? this.renderFull(() => (0, s.jsx)(M.default, {
                        guildTemplate: l
                    }), !0) : null != a ? this.renderFull(() => (0, s.jsx)(K.default, {
                        giftCode: a
                    })) : null != n && r && n.state === Z.InviteStates.RESOLVED && !t ? this.renderFull(() => (0, s.jsx)(z.default, {
                        invite: n,
                        isRegister: !0
                    })) : this.renderFull() : n.state === Z.InviteStates.RESOLVING ? this.renderInviteResolving() : this.renderInvite()
                }
                constructor(e) {
                    var t;
                    super(e), this.dateOfBirthRef = a.createRef(), this._retryTimer = new c.Timeout, this.handleGotoLogin = e => {
                        let t;
                        let {
                            email: n
                        } = this.state, {
                            giftCode: s,
                            guildTemplate: a,
                            invite: l,
                            location: r,
                            onLoginStart: o,
                            redirectTo: u,
                            transitionTo: d,
                            isMobileWebInviteRegistration: c
                        } = this.props;
                        if (c) {
                            null == o || o(e);
                            return
                        }
                        let f = null != r ? (0, i.parse)(r.search) : {};
                        null != l ? t = Z.Routes.INVITE_LOGIN(l.code) : null != s ? t = Z.Routes.GIFT_CODE_LOGIN(s.code) : null != a ? t = Z.Routes.GUILD_TEMPLATE_LOGIN(a.code) : null != u ? (t = Z.Routes.LOGIN, f.redirect_to = u) : (t = Z.Routes.LOGIN, "" !== n && (f = {
                            email: n
                        })), E.default.loginReset(), d(t, {
                            search: (0, i.stringify)(f)
                        }), null == o || o(e), W.ComponentDispatch.dispatch(Z.ComponentActions.WAVE_EMPHASIZE)
                    }, this.handleSubmit = e => {
                        null == e || e.preventDefault();
                        let {
                            email: t,
                            username: n,
                            password: s,
                            parsedDateOfBirth: a
                        } = this.state, {
                            invite: l,
                            consentRequired: r
                        } = this.props;
                        if (null !== r) {
                            if (null == l) {
                                let e = !1;
                                if (0 === t.length && (this.setState({
                                        emailClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), 0 === n.length && (this.setState({
                                        usernameClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), 0 === s.length && (this.setState({
                                        passwordClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), null == a && (this.setState({
                                        dateOfBirthClientError: ee.default.Messages.REQUIRED
                                    }), e = !0), e) return
                            }
                            this.handleRegister()
                        }
                    }, this.handleBirthdayChange = e => {
                        this.setState({
                            parsedDateOfBirth: e
                        }), null != e && this.setState({
                            dateOfBirthClientError: null
                        })
                    }, this.renderUsernameValidation = () => {
                        let {
                            username: e,
                            globalName: t,
                            usernameFocused: n
                        } = this.state, {
                            usernameSuggestion: a,
                            uniqueUsernameRegistrationConfig: {
                                livecheckEnabled: l
                            }
                        } = this.props;
                        return (0, s.jsx)(ei, {
                            username: e,
                            suggestion: a,
                            livecheckEnabled: l,
                            globalName: t,
                            isUsernameFocused: n,
                            onClickSuggestion: () => {
                                null != this.usernameRef && this.usernameRef.focus(), null != a && a.length > 0 && this.setState({
                                    username: a
                                })
                            }
                        })
                    };
                    let n = null != e.location ? (0, i.parse)(e.location.search) : {};
                    this.state = {
                        email: null !== (t = n.email) && void 0 !== t ? t : "",
                        username: "",
                        globalName: "",
                        password: "",
                        parsedDateOfBirth: null,
                        emailClientError: null,
                        usernameClientError: null,
                        passwordClientError: null,
                        dateOfBirthClientError: null,
                        consent: !e.consentRequired,
                        consentRequiredProp: e.consentRequired,
                        isRateLimited: !1,
                        globalNameFocused: !1,
                        usernameFocused: !1
                    }
                }
            }

            function er(e) {
                let t = (0, d.useStateFromStoresObject)([F.default, B.default, h.default, v.default, O.default], () => ({
                        consentRequired: F.default.getAuthenticationConsentRequired(),
                        registering: B.default.getRegisterStatus() === Z.RegistrationStates.REGISTERING,
                        apiErrors: B.default.getErrors(),
                        authenticated: B.default.isAuthenticated(),
                        isUnderage: h.default.isUnderageAnonymous(),
                        country: v.default.getCountryCode(),
                        hasLoggedInAccounts: O.default.getHasLoggedInAccounts()
                    })),
                    n = (0, G.useUURegistrationExperiment)(),
                    l = (0, d.useStateFromStores)([U.default], () => U.default.registrationUsernameSuggestion()),
                    [r, i] = a.useState(Q.RegistrationSteps.FULL);
                return (0, g.default)({
                    type: u.ImpressionTypes.VIEW,
                    name: u.ImpressionNames.USER_REGISTRATION,
                    properties: {
                        impression_group: u.ImpressionGroups.USER_REGISTRATION_FLOW,
                        step: r
                    }
                }, {}, [r]), (0, s.jsx)(el, {
                    onChangeStep: e => i(e),
                    registrationCopyExperimentConfig: A.default.getCurrentConfig({
                        location: "0ba758_2"
                    }, {
                        autoTrackExposure: !1
                    }),
                    uniqueUsernameRegistrationConfig: n,
                    usernameSuggestion: l,
                    ...e,
                    ...t
                })
            }

            function ei(e) {
                let t, {
                        username: n,
                        suggestion: a,
                        globalName: l,
                        livecheckEnabled: r,
                        isUsernameFocused: i,
                        onClickSuggestion: u
                    } = e,
                    d = (0, b.useUsernameStatus)(n, r, !0),
                    c = r && n.length > 0;
                return t = c ? (0, o.match)(d).with({
                    type: y.NameValidationState.ERROR,
                    message: o.P.select()
                }, e => (0, s.jsx)(f.Text, {
                    className: et.messageNegative,
                    variant: "text-sm/normal",
                    children: e
                })).with({
                    type: y.NameValidationState.AVAILABLE,
                    message: o.P.select()
                }, e => (0, s.jsx)(f.Text, {
                    className: et.messagePositive,
                    variant: "text-sm/normal",
                    children: e
                })).otherwise(() => (0, s.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                })) : null != a && a.length > 0 && l.length > 0 ? (0, s.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.UU_REGISTER_SUGGESTION.format({
                        suggestion: a,
                        nameOnClick: u
                    })
                }) : (0, s.jsx)(f.Text, {
                    variant: "text-sm/normal",
                    color: "text-normal",
                    children: ee.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID
                }), (0, s.jsx)(j.default, {
                    show: c && (null == d ? void 0 : d.type) === y.NameValidationState.ERROR || i,
                    top: -12,
                    bottom: 20,
                    children: t
                })
            }
            el.defaultProps = {
                giftCodeResolved: !1,
                transitionTo: e => n.g.location.assign(e)
            }
        },
        905949: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var s = n("884691");

            function a() {
                return "undefined" == typeof document || "visible" === document.visibilityState
            }

            function l() {
                let [e, t] = (0, s.useState)(a());
                return (0, s.useEffect)(() => {
                    function e() {
                        t(a())
                    }
                    return window.addEventListener("visibilitychange", e), () => {
                        window.removeEventListener("visibilitychange", e)
                    }
                }, [t]), e
            }
        },
        26772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("872717"),
                a = n("913144"),
                l = n("437822"),
                r = n("697796"),
                i = n("524824"),
                o = n("72177"),
                u = n("599110"),
                d = n("316272"),
                c = n("49111");

            function f(e, t) {
                u.default.track(c.AnalyticEvents.BROWSER_HANDOFF_SUCCEEDED, {
                    authenticated: e,
                    handoff_source: t
                })
            }
            class E extends d.default {
                _initialize() {
                    a.default.subscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.subscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                _terminate() {
                    a.default.unsubscribe("BROWSER_HANDOFF_END", this.handleEnd), a.default.unsubscribe("BROWSER_HANDOFF_FROM_APP", this.handleHandoff)
                }
                handleHandoff(e) {
                    let {
                        handoffKey: t,
                        handoffToken: n,
                        fingerprint: a,
                        handoffSource: o
                    } = e;
                    null != n ? s.default.post({
                        url: c.Endpoints.HANDOFF_EXCHANGE,
                        body: {
                            key: t,
                            handoff_token: n
                        }
                    }).then(e => {
                        let {
                            body: t
                        } = e;
                        (0, r.handoffSetUser)(t.user), l.default.loginToken(t.token, !1), f(!0, o)
                    }, e => {
                        if (null != a && f(!1, o), l.default.setFingerprint(a), (0, r.handoffEnd)(), o === i.LoginHandoffSource.ROLE_SUBSCRIPTION) {
                            var t;
                            u.default.track(c.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                                reason: null !== (t = e.message) && void 0 !== t ? t : e.text,
                                handoff_source: o
                            })
                        }
                    }) : null != a ? (l.default.setFingerprint(a), f(!1, o), (0, r.handoffEnd)()) : (l.default.setFingerprint(a), (0, r.handoffUnavailable)())
                }
                constructor(...e) {
                    super(...e), this.handleEnd = e => {
                        let {
                            handoffToken: t,
                            fingerprint: n
                        } = e, s = o.default.key;
                        null != s && o.default.isHandoffAvailable() ? this.handleHandoff({
                            handoffKey: s,
                            handoffToken: t,
                            fingerprint: n,
                            handoffSource: void 0
                        }) : (l.default.setFingerprint(null), (0, r.handoffUnavailable)())
                    }
                }
            }
            var h = new E
        },
        2021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983"),
                a = n("884691"),
                l = n("90915"),
                r = n("266491");
            class i extends a.Component {
                render() {
                    let {
                        children: e,
                        location: t,
                        history: n,
                        staticContext: i,
                        match: o,
                        ...u
                    } = this.props, d = null, c = null;
                    return a.Children.forEach(e, e => {
                        if (null == d && a.isValidElement(e)) {
                            let {
                                component: s,
                                render: r,
                                ...o
                            } = e.props, u = o.path || o.from;
                            null != (d = null != u ? (0, l.matchPath)(t.pathname, {
                                ...o,
                                path: u
                            }) : null) && (o = {
                                ...o,
                                key: u,
                                location: t,
                                match: d,
                                history: n,
                                staticContext: i
                            }, null != s ? c = a.createElement(s, o) : null != r && (c = r(o)))
                        }
                    }), (0, s.jsx)(r.default, {
                        ...u,
                        children: c
                    })
                }
            }
            var o = (0, l.withRouter)(i)
        },
        731109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                submitDateOfBirth: function() {
                    return u
                },
                preventUnderageRegistration: function() {
                    return d
                },
                logoutUnderageNewUser: function() {
                    return c
                }
            });
            var s = n("872717"),
                a = n("913144"),
                l = n("395724"),
                r = n("599110"),
                i = n("586391"),
                o = n("49111");

            function u(e, t) {
                return (0, l.default)(e, t), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: t,
                    action: i.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), s.default.patch({
                    url: o.Endpoints.ME,
                    oldFormErrors: !0,
                    body: {
                        date_of_birth: e.format("YYYY-MM-DD")
                    }
                }).then(e => {
                    let n = e.body;
                    a.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n
                    }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                        source: t,
                        action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                })
            }

            function d(e) {
                a.default.dispatch({
                    type: "AGE_GATE_PREVENT_UNDERAGE_REGISTRATION"
                }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_PREVENT_UNDERAGE_REGISTRATION
                })
            }

            function c(e) {
                a.default.dispatch({
                    type: "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER"
                }), r.default.track(o.AnalyticEvents.AGE_GATE_ACTION, {
                    source: e,
                    action: i.AgeGateAnalyticAction.AGE_GATE_LOGOUT_UNDERAGE_NEW_USER
                })
            }
        },
        678916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("160679"),
                a = n("446674"),
                l = n("913144"),
                r = n("773336"),
                i = n("586391");
            let o = null,
                u = "underage";
            class d extends a.default.Store {
                isUnderageAnonymous() {
                    if (r.isPlatformEmbedded) {
                        if (null != o && o + i.AGE_GATE_REGISTER_TIMEOUT_MS > Date.now()) return !0
                    } else {
                        let e = s.parse(document.cookie)[u];
                        return null != e
                    }
                    return !1
                }
            }
            d.displayName = "AgeGateStore";
            var c = new d(l.default, {
                AGE_GATE_PREVENT_UNDERAGE_REGISTRATION: function() {
                    o = Date.now(), document.cookie = "".concat(u, "=1;path=/")
                },
                LOGIN_SUCCESS: function() {
                    o = null, document.cookie = "".concat(u, "=1;path=/;max-age=0")
                }
            })
        },
        816540: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("393414"),
                r = n("124969"),
                i = n("701909"),
                o = n("49111"),
                u = n("782340"),
                d = n("177977");
            let c = () => (0, l.transitionTo)(o.Routes.LOGIN);
            var f = e => {
                let {
                    authBoxClassName: t,
                    underageMessage: l
                } = e;
                return (0, s.jsxs)(r.default, {
                    className: t,
                    children: [(0, s.jsx)("img", {
                        alt: "",
                        src: n("803452"),
                        className: d.img
                    }), (0, s.jsx)(r.Title, {
                        className: d.title,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_HEADER
                    }), (0, s.jsx)(r.SubTitle, {
                        className: d.subtitle,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BODY.format({
                            underageMessage: null != l ? l : u.default.Messages.AGE_GATE_UNDERAGE_BODY_DEFAULT_REG_MESSAGE,
                            helpURL: i.default.getArticleURL(o.HelpdeskArticles.AGE_GATE)
                        })
                    }), (0, s.jsx)(a.Button, {
                        fullWidth: !0,
                        onClick: c,
                        children: u.default.Messages.AGE_GATE_UNDERAGE_BACK_TO_LOGIN
                    })]
                })
            }
        },
        208266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("424973");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("866227"),
                o = n.n(i),
                u = n("77078"),
                d = n("414943"),
                c = n("782340"),
                f = n("512427");
            let E = o().localeData().months(),
                h = Array.from(Array(31).keys()).map(e => ({
                    value: e + 1,
                    label: "".concat(e + 1)
                })),
                _ = Array.from(Array(12).keys()).map(e => ({
                    value: e + 1,
                    label: E[e]
                })),
                m = /[a-zA-Z0-9]/;

            function g(e) {
                let {
                    options: t,
                    selectOption: n,
                    children: l
                } = e, [r, i] = a.useState("");
                a.useEffect(() => {
                    if ("" !== r) {
                        let e = setTimeout(() => i(""), 1e3);
                        return () => clearTimeout(e)
                    }
                }, [r, i]);
                let o = a.useCallback(e => {
                    if (m.test(e.key)) {
                        let s = "".concat(r).concat(e.key.toLowerCase()),
                            a = t.find(e => e.label.toLowerCase().startsWith(s));
                        null != a && n(a.value), i(s)
                    }
                }, [n, i, r, t]);
                return (0, s.jsx)("div", {
                    onKeyDown: o,
                    children: l
                })
            }

            function p() {
                let e = o().localeData().longDateFormat("L"),
                    t = e.indexOf("D"),
                    n = e.indexOf("M"),
                    s = e.indexOf("Y");
                return (-1 === t || -1 === n || -1 === s) && (t = 0, n = 1, s = 2), [{
                    index: t,
                    type: "day"
                }, {
                    index: n,
                    type: "month"
                }, {
                    index: s,
                    type: "year"
                }].sort((e, t) => e.index < t.index ? -1 : 1)
            }
            let A = a.forwardRef(function(e, t) {
                let {
                    value: n,
                    wrapperClassName: l,
                    onChange: i,
                    onPopulated: E,
                    error: m,
                    autoFocus: A,
                    required: T
                } = e, {
                    day: R,
                    setDay: I,
                    month: N,
                    setMonth: S,
                    year: C,
                    setYear: L
                } = function(e) {
                    let t = null,
                        n = null,
                        s = null;
                    null != e && (t = e.date(), n = e.month() + 1, s = e.year());
                    let [l, r] = a.useState(t), [i, o] = a.useState(n), [u, d] = a.useState(s);
                    return {
                        day: l,
                        setDay: r,
                        month: i,
                        setMonth: o,
                        year: u,
                        setYear: d
                    }
                }(n), M = a.useMemo(() => null != R && null != N && null != C ? o("".concat(R, "/").concat(N, "/").concat(C), "DD/MM/YYYY") : null, [R, N, C]);
                a.useEffect(() => {
                    i((null == M ? void 0 : M.isValid()) ? M : null)
                }, [M, i]);
                let O = m;
                null != M && !M.isValid() && (O = c.default.Messages.AGE_GATE_INVALID_BIRTHDAY);
                let x = function() {
                        let e = new Date().getFullYear(),
                            t = a.useRef(Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            })));
                        return a.useEffect(() => {
                            t.current = Array.from(Array(150).keys()).map(t => ({
                                value: e - t - 3,
                                label: "".concat(e - t - 3)
                            }))
                        }, [e]), t.current
                    }(),
                    [v, D] = a.useState(A ? 0 : -1),
                    U = a.useRef(null),
                    y = a.useRef(null),
                    G = a.useRef(null),
                    b = a.useMemo(p, []),
                    j = a.useCallback(() => {
                        var e, t, n, s;
                        switch (null === (e = b[v]) || void 0 === e ? void 0 : e.type) {
                            case "day":
                                null === (t = U.current) || void 0 === t || t.focus();
                                break;
                            case "month":
                                null === (n = y.current) || void 0 === n || n.focus();
                                break;
                            case "year":
                                null === (s = G.current) || void 0 === s || s.focus()
                        }
                    }, [v, U, y, G, b]);
                a.useEffect(() => {
                    setTimeout(j, 500)
                }, []), a.useEffect(() => {
                    if (v >= b.length) {
                        null == E || E();
                        return
                    }
                    j()
                }, [v, j]);
                let P = [];
                for (let e = 0; e < 3; e++) {
                    let {
                        type: t
                    } = b[e];
                    switch (t) {
                        case "day":
                            P.push({
                                key: "day",
                                input: (0, s.jsx)(g, {
                                    options: h,
                                    selectOption: I,
                                    children: (0, s.jsx)(d.default, {
                                        ref: U,
                                        className: f.inputDay,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_DAY,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_DAY
                                        }),
                                        options: h,
                                        value: R,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            I(n), D(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "month":
                            P.push({
                                key: "month",
                                input: (0, s.jsx)(g, {
                                    options: _,
                                    selectOption: S,
                                    children: (0, s.jsx)(d.default, {
                                        ref: y,
                                        className: f.inputMonth,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_MONTH,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_MONTH
                                        }),
                                        options: _,
                                        value: N,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            S(n), D(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            });
                            break;
                        case "year":
                            P.push({
                                key: "year",
                                input: (0, s.jsx)(g, {
                                    options: x,
                                    selectOption: L,
                                    children: (0, s.jsx)(d.default, {
                                        ref: G,
                                        className: f.inputYear,
                                        "aria-label": c.default.Messages.AGE_GATE_DOB_YEAR,
                                        menuPlacement: d.default.MenuPlacements.TOP,
                                        placeholder: (0, s.jsx)("span", {
                                            "aria-hidden": !0,
                                            children: c.default.Messages.AGE_GATE_DOB_YEAR
                                        }),
                                        options: x,
                                        value: C,
                                        onChange: t => {
                                            let {
                                                value: n
                                            } = t;
                                            L(n), D(e + 1)
                                        },
                                        maxMenuHeight: 215
                                    })
                                })
                            })
                    }
                }
                return (0, s.jsxs)("fieldset", {
                    className: r(f.container, l),
                    children: [(0, s.jsx)(u.FormTitle, {
                        tag: "legend",
                        required: T,
                        error: O,
                        children: c.default.Messages.AGE_GATE_DATE_OF_BIRTH
                    }), (0, s.jsx)("div", {
                        className: f.inputs,
                        children: P.map((e, t) => {
                            let {
                                key: n,
                                input: a
                            } = e;
                            return (0, s.jsx)("div", {
                                tabIndex: t + 1,
                                className: f[n],
                                children: a
                            }, n)
                        })
                    })]
                })
            });
            var T = A
        },
        524824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LoginHandoffSource: function() {
                    return a
                },
                getLoginHandoffSourceFromRedirectTo: function() {
                    return o
                }
            });
            var s, a, l = n("361572"),
                r = n("49111"),
                i = n("724210");

            function o(e) {
                let t = decodeURIComponent(e),
                    n = (0, l.tryParseChannelPath)(t);
                return null != n && n.channelId === i.StaticChannelRoute.ROLE_SUBSCRIPTIONS ? "role_subscription" : t === r.Routes.SETTINGS(r.UserSettingsSections.SUBSCRIPTIONS, "role-subscriptions") ? "role_subscription_setting" : void 0
            }(s = a || (a = {})).ROLE_SUBSCRIPTION = "role_subscription", s.ROLE_SUBSCRIPTION_SETTING = "role_subscription_setting"
        },
        771848: function(e, t, n) {
            "use strict";
            var s, a, l, r;
            n.r(t), n.d(t, {
                RegistrationSteps: function() {
                    return a
                }
            }), (l = s || (s = {})).VIEWED = "viewed", l.SUBMITTED = "submitted", l.RESEND_CODE = "resend_code", l.INPUT_ERROR = "input_error", l.RESPONSE_ERROR = "response_error", l.SUCCESS = "success", (r = a || (a = {})).IDENTITY = "identity", r.DISPLAY_NAME = "display_name", r.ACCOUNT_INFORMATION = "account_information", r.FULL = "full", r.AGE_GATE = "age_gate", r.INVITE = "invite", r.SMS_VERIFY = "sms_verify"
        },
        765825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var s = (0, n("862205").createExperiment)({
                kind: "user",
                id: "2022-04_registration_copy_updates",
                label: "Registration Copy Updates",
                defaultConfig: {
                    enableNewCopy: !1,
                    hasCopyAboveButton: !1,
                    hasProminentCopy: !1
                },
                treatments: [{
                    id: 1,
                    label: "Continue / Copy Above Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 2,
                    label: "Continue / Copy Below Button / High Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !1,
                        hasProminentCopy: !0
                    }
                }, {
                    id: 3,
                    label: "Continue / Copy Above Button / Normal Prominence Copy",
                    config: {
                        enableNewCopy: !0,
                        hasCopyAboveButton: !0,
                        hasProminentCopy: !1
                    }
                }]
            })
        },
        395724: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("866227"),
                a = n.n(s),
                l = n("599110"),
                r = n("49111");

            function i(e, t) {
                l.default.track(r.AnalyticEvents.AGE_GATE_SUBMITTED, {
                    dob: 18 > a().diff(e, "years") ? e.format("YYYY-MM-DD") : null,
                    dob_day: e.date(),
                    dob_month: e.month() + 1,
                    dob_year: e.year(),
                    source: {
                        section: t
                    }
                })
            }
        },
        715570: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                },
                registerFull: function() {
                    return m
                }
            });
            var s = n("866227"),
                a = n.n(s),
                l = n("759843"),
                r = n("913144"),
                i = n("599417"),
                o = n("731109"),
                u = n("271938"),
                d = n("599110"),
                c = n("840707"),
                f = n("395724"),
                E = n("49111"),
                h = n("586391");

            function _(e) {
                let {
                    invite: t = null,
                    giftCodeSKUId: n = null,
                    ...s
                } = e;
                return m({
                    ...s,
                    invite: t,
                    giftCodeSKUId: n
                })
            }

            function m(e) {
                let {
                    email: t,
                    phoneToken: n,
                    username: s,
                    globalName: _,
                    consent: m,
                    password: g,
                    guildTemplateCode: p,
                    birthday: A,
                    invite: T = null,
                    giftCodeSKUId: R = null,
                    multiStep: I = !1,
                    promoEmailConsent: N = null,
                    usedUsernameSuggestion: S = null
                } = e;
                return r.default.dispatch({
                    type: "REGISTER",
                    birthday: I ? A : null
                }), null != A && ((0, f.default)(A, E.AnalyticsSections.REGISTER), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                    source: h.AgeGateSource.REGISTER,
                    action: h.AgeGateAnalyticAction.AGE_GATE_SUBMITTED
                }), ! function(e) {
                    let t;
                    let n = a().diff(e, "years");
                    !(n < 13) && (t = n >= 13 && n <= 17 ? "13-17" : n >= 18 && n <= 22 ? "18-22" : "23+", d.default.track(E.AnalyticEvents.USER_AGE_SUBMITTED, {
                        age_bucket: t
                    }))
                }(A)), c.default.post({
                    url: E.Endpoints.REGISTER,
                    body: {
                        fingerprint: u.default.getFingerprint(),
                        email: t,
                        username: s,
                        global_name: _,
                        password: g,
                        invite: T,
                        consent: m,
                        phone_token: n,
                        date_of_birth: null == A ? void 0 : A.format("YYYY-MM-DD"),
                        gift_code_sku_id: R,
                        guild_template_code: p,
                        promotional_email_opt_in: null == N ? void 0 : N.checked
                    },
                    trackedActionData: {
                        event: l.NetworkActionNames.USER_REGISTER,
                        properties: {
                            invite_code: T,
                            used_username_suggestion: S,
                            promotional_email_opt_in: null == N ? void 0 : N.checked,
                            promotional_email_pre_checked: null == N ? void 0 : N.preChecked,
                            was_unique_username: !0
                        }
                    }
                }).then(e => {
                    r.default.dispatch({
                        type: "REGISTER_SUCCESS",
                        token: e.body.token
                    }), d.default.track(E.AnalyticEvents.AGE_GATE_ACTION, {
                        source: h.AgeGateSource.REGISTER,
                        action: h.AgeGateAnalyticAction.AGE_GATE_SUCCESS
                    })
                }, e => {
                    let t = new i.default(e);
                    throw r.default.dispatch({
                        type: "REGISTER_FAILURE",
                        error: t
                    }), null != t.getFieldErrors("date_of_birth") && o.preventUnderageRegistration(h.AgeGateSource.REGISTER), d.default.track(E.AnalyticEvents.REGISTER_SUBMIT_ERRORED, {
                        is_unique_username_registration: !0,
                        email_error_reason: t.getFirstFieldErrorMessage("email"),
                        phone_error_reason: t.getFirstFieldErrorMessage("phone"),
                        password_error_reason: t.getFirstFieldErrorMessage("password"),
                        username_error_reason: t.getFirstFieldErrorMessage("username"),
                        global_name_error_reason: t.getFirstFieldErrorMessage("global_name"),
                        date_of_birth_error_reason: t.getFirstFieldErrorMessage("date_of_birth")
                    }), e
                })
            }
        },
        486252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                i = n("145131"),
                o = n("124969"),
                u = n("662617"),
                d = n("926622");

            function c(e) {
                let {
                    value: t,
                    onChange: n,
                    subText: a,
                    muted: c,
                    marginTopStyle: f
                } = e;
                return (0, s.jsx)(i.default, {
                    className: null != f ? f : d.marginTop20,
                    align: i.default.Align.CENTER,
                    children: (0, s.jsx)(r.Checkbox, {
                        value: t,
                        type: r.Checkbox.Types.INVERTED,
                        onChange: (e, t) => n(t),
                        className: u.checkbox,
                        children: (0, s.jsx)(o.SubText, {
                            className: l({
                                [u.subText]: !c
                            }),
                            children: a
                        })
                    })
                })
            }
        },
        378020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildScheduledEventInviteHeader: function() {
                    return u
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("419830"),
                r = n("400271"),
                i = n("839427");

            function o(e) {
                let {
                    channel: t
                } = e, n = (0, l.getSimpleChannelIconComponent)(t.type);
                return (0, s.jsxs)("div", {
                    className: i.channelInfoContainer,
                    children: [null != n ? (0, s.jsx)(n, {
                        width: 20,
                        height: 20
                    }) : null, (0, s.jsx)(a.Text, {
                        className: i.channelInfoText,
                        color: "none",
                        variant: "text-sm/semibold",
                        children: t.name
                    })]
                })
            }

            function u(e) {
                let {
                    channel: t,
                    guildScheduledEvent: n
                } = e;
                return (0, s.jsxs)("div", {
                    className: i.container,
                    children: [(0, s.jsx)(r.GuildEventStatus, {
                        className: i.statusContainer,
                        guildId: n.guild_id,
                        guildEventId: n.id,
                        eventPreview: n
                    }), (0, s.jsx)(r.GuildEventDetails, {
                        name: n.name,
                        description: n.description,
                        guildId: n.guild_id
                    }), null != t && n.channel_id === t.id ? (0, s.jsx)(o, {
                        channel: t
                    }) : null]
                })
            }
        },
        21572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("77078"),
                l = n("794538"),
                r = n("145131"),
                i = n("124969"),
                o = n("782340"),
                u = n("265445"),
                d = n("926622");

            function c(e) {
                let {
                    title: t,
                    subtitle: n,
                    error: c,
                    onSubmit: f,
                    onCancel: E
                } = e;
                return (0, s.jsxs)(r.default, {
                    direction: r.default.Direction.VERTICAL,
                    children: [(0, s.jsx)(i.Title, {
                        className: d.marginBottom8,
                        children: t
                    }), (0, s.jsx)(i.SubTitle, {
                        className: u.subTitle,
                        children: n
                    }), (0, s.jsxs)("div", {
                        children: [(0, s.jsx)(l.default, {
                            inputClassName: u.codeInput,
                            onSubmit: f
                        }), null != c ? (0, s.jsx)(a.Text, {
                            className: u.error,
                            variant: "text-sm/normal",
                            children: c
                        }) : null]
                    }), null != E && (0, s.jsx)(a.Button, {
                        className: u.button,
                        onClick: E,
                        color: a.Button.Colors.PRIMARY,
                        children: o.default.Messages.CANCEL
                    })]
                })
            }
        },
        980976: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("307439"),
                l = n("486252"),
                r = n("782340"),
                i = n("926622");

            function o() {
                let {
                    required: e,
                    checked: t
                } = (0, a.usePromoEmailConsentStore)();
                return e ? (0, s.jsx)(l.default, {
                    value: t,
                    subText: r.default.Messages.PROMOTIONAL_EMAIL_OPT_IN_CONSENT,
                    onChange: a.setPromoEmailConsentChecked,
                    marginTopStyle: i.marginTop8,
                    muted: !0
                }) : null
            }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return i
                }
            }), n("222007");
            var s = n("697218"),
                a = n("315102"),
                l = n("449008"),
                r = n("49111");

            function i(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case r.ChannelTypes.DM:
                        let [i] = e.recipients.map(s.default.getUser).filter(l.isNotNullish);
                        if (null == i) return null;
                        return i.getAvatarURL(void 0, t, n);
                    case r.ChannelTypes.GROUP_DM:
                        return a.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        946859: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                formatUsername: function() {
                    return a
                }
            });
            var s = n("50885");
            async function a(e) {
                try {
                    return await s.default.getSetting("USERNAME_PREFIX", "") + e
                } catch (e) {}
                return e
            }
        },
        819220: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getVerifiedName: function() {
                    return a
                }
            });
            var s = n("5487");

            function a(e) {
                return (0, s.default)(e).author
            }
        },
        5487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var s = n("579033"),
                a = n("782340");

            function l(e) {
                switch (e) {
                    case s.InternalTemplateCodes.CLASSROOM:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CLASSROOM, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CLASSROOM, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CLASSROOM, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CLASSROOM, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.LOCAL_COMMUNITIES:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LOCAL_COMMUNITIES, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LOCAL_COMMUNITIES, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_LOCAL_COMMUNITIES, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_LOCAL_COMMUNITIES, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.CREATORS_HOBBIES:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATORS_HOBBIES, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATORS_HOBBIES, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATORS_HOBBIES, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATORS_HOBBIES, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.GLOBAL_COMMUNITIES:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GLOBAL_COMMUNITIES, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GLOBAL_COMMUNITIES, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_GLOBAL_COMMUNITIES, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_GLOBAL_COMMUNITIES, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.FRIENDS_FAMILY:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_FRIENDS_FAMILY, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_FRIENDS_FAMILY, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_FRIENDS_FAMILY, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_FRIENDS_FAMILY, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.STUDY_GROUPS:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_STUDY_GROUPS, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_STUDY_GROUPS, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_STUDY_GROUPS, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_STUDY_GROUPS, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.CREATE_FROM_SCRATCH:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CREATE_FROM_SCRATCH, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CREATE_FROM_SCRATCH, nameLabel: a.default.Messages.GUILD_TEMPLATES_FORM_LABEL_SERVER_NAME_CREATE_FROM_SCRATCH, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CREATE_FROM_SCRATCH, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.CAMPUS_CLUBS:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_CAMPUS_CLUBS, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_CAMPUS_CLUBS, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.GUILD_TEMPLATE_DEFAULT_SERVER_NAME_CAMPUS_CLUBS, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.LEAGUE_CLUBS:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_LEAGUE_CLUBS, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_LEAGUE_CLUBS, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: a.default.Messages.DISCORD_NAME
                        };
                    case s.InternalTemplateCodes.GITHUB_HACKATHON:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_MODAL_TITLE_GITHUB_HACKATHON, description: a.default.Messages.GUILD_TEMPLATE_MODAL_DESCRIPTION_GITHUB_HACKATHON, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT, author: "GitHub Education"
                        };
                    default:
                        return {
                            header: a.default.Messages.GUILD_TEMPLATE_CREATE_DISCORD, nameLabel: a.default.Messages.FORM_LABEL_SERVER_NAME, terms: a.default.Messages.CREATE_SERVER_GUIDELINES, defaultName: a.default.Messages.CREATE_SERVER_DEFAULT_SERVER_NAME_FORMAT
                        }
                }
            }
        },
        434824: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("124969"),
                l = n("5487"),
                r = n("473759"),
                i = n("579033"),
                o = n("685991");
            let u = {
                [i.InternalTemplateCodes.CLASSROOM]: n("251834"),
                [i.InternalTemplateCodes.LOCAL_COMMUNITIES]: n("787762"),
                [i.InternalTemplateCodes.CREATORS_HOBBIES]: n("41668"),
                [i.InternalTemplateCodes.GLOBAL_COMMUNITIES]: n("494323"),
                [i.InternalTemplateCodes.FRIENDS_FAMILY]: n("660389"),
                [i.InternalTemplateCodes.STUDY_GROUPS]: n("508971"),
                [i.InternalTemplateCodes.CREATE_FROM_SCRATCH]: n("800573"),
                [i.InternalTemplateCodes.CAMPUS_CLUBS]: n("97595"),
                [i.InternalTemplateCodes.LEAGUE_CLUBS]: n("556659"),
                [i.InternalTemplateCodes.GITHUB_HACKATHON]: n("212509")
            };

            function d(e) {
                let {
                    headerId: t,
                    guildTemplate: n
                } = e, d = n.code, c = u[d];
                if (null != c) {
                    var f;
                    let {
                        header: e,
                        description: u,
                        author: E
                    } = (0, l.default)(d);
                    return (0, s.jsxs)("div", {
                        children: [(0, s.jsx)("img", {
                            className: o.image,
                            src: c,
                            alt: ""
                        }), (0, s.jsx)(a.Title, {
                            className: o.header,
                            id: t,
                            children: e
                        }), (0, s.jsx)(a.SubTitle, {
                            children: u
                        }), n.state === i.GuildTemplateStates.RESOLVED ? (0, s.jsx)(r.UsagePill, {
                            className: o.usagePill,
                            count: null !== (f = n.usageCount) && void 0 !== f ? f : 0,
                            verifiedName: E
                        }) : null]
                    })
                }
                return (0, s.jsx)(r.default, {
                    pillClassName: o.usagePill,
                    guildTemplate: n,
                    tall: !0
                })
            }
        },
        473759: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UsagePill: function() {
                    return p
                },
                default: function() {
                    return A
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                i = n("931138"),
                o = n("124969"),
                u = n("486952"),
                d = n("819220"),
                c = n("5487"),
                f = n("579033"),
                E = n("782340"),
                h = n("426601"),
                _ = n("926622");

            function m() {
                return (0, s.jsx)(i.default, {
                    className: h.verifiedIcon,
                    children: (0, s.jsx)("div", {
                        className: h.verifiedCheckContainer,
                        children: (0, s.jsx)(u.default, {
                            className: h.verifiedCheck
                        })
                    })
                })
            }

            function g(e) {
                let {
                    verified: t,
                    text: n
                } = e;
                return t ? (0, s.jsxs)("div", {
                    className: h.verifiedNameContainer,
                    children: [(0, s.jsx)(m, {}), n]
                }) : (0, s.jsx)(s.Fragment, {
                    children: n
                })
            }

            function p(e) {
                let {
                    className: t,
                    count: n,
                    creator: a,
                    verifiedName: r
                } = e;
                return (0, s.jsx)("div", {
                    className: l(h.usagePill, t, h.userText),
                    children: null != a || null != r ? E.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                        usageCount: n,
                        creator: null != r ? r : a,
                        creatorHook: (e, t) => (0, s.jsx)(g, {
                            text: e,
                            verified: null != r
                        }, t)
                    }) : E.default.Messages.GUILD_TEMPLATE_USAGES.format({
                        usageCount: n
                    })
                })
            }

            function A(e) {
                var t;
                let {
                    guildTemplate: n,
                    error: a,
                    tall: i,
                    pillClassName: u
                } = e;
                if (null != a && "" !== a) return (0, s.jsxs)("div", {
                    className: h.container,
                    children: [(0, s.jsx)(o.Title, {
                        children: E.default.Messages.INVITE_MODAL_ERROR_TITLE
                    }), (0, s.jsx)(o.SubTitle, {
                        children: a
                    })]
                });
                if (n.state === f.GuildTemplateStates.RESOLVING) return (0, s.jsx)("div", {
                    className: h.container,
                    children: (0, s.jsx)(r.Spinner, {})
                });
                let m = (0, c.default)(n.code).header;
                if (!i) return (0, s.jsxs)("div", {
                    className: h.container,
                    children: [(0, s.jsx)(o.Title, {
                        className: h.title,
                        children: m
                    }), (0, s.jsx)(o.SubTitle, {
                        className: l(h.subtitle, h.userText),
                        children: n.name
                    })]
                });
                return (0, s.jsxs)("div", {
                    className: h.container,
                    children: [(0, s.jsx)(o.Title, {
                        className: h.title,
                        children: m
                    }), (0, s.jsx)(o.SubTitle, {
                        className: l(h.subtitle, _.marginTop2),
                        children: E.default.Messages.GUILD_TEMPLATE_BASED_ON
                    }), (0, s.jsx)(o.Title, {
                        className: l(h.title, h.userText),
                        children: n.name
                    }), null != n.description && "" !== n.description && (0, s.jsx)(o.SubTitle, {
                        className: l(h.subtitle, h.userText, _.marginTop8),
                        children: n.description
                    }), (0, s.jsx)(p, {
                        className: u,
                        count: null !== (t = n.usageCount) && void 0 !== t ? t : 0,
                        creator: n.creator.username,
                        verifiedName: (0, d.getVerifiedName)(n.code)
                    })]
                })
            }
        },
        672630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("70102");
            var s = n("748820"),
                a = n("872717"),
                l = n("49111"),
                r = {
                    generateNonce: function() {
                        return (0, s.v4)()
                    },
                    createHandoffToken: async function e(e) {
                        let {
                            body: {
                                handoff_token: t
                            }
                        } = await a.default.post({
                            url: l.Endpoints.HANDOFF,
                            body: {
                                key: e
                            },
                            oldFormErrors: !0,
                            retries: 1
                        });
                        if (null != t) return t;
                        throw Error("Missing handoff token!")
                    }
                }
        },
        382236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
            var s, a, l = n("37983"),
                r = n("884691"),
                i = n("730290"),
                o = n("391679"),
                u = n("446674"),
                d = n("872717"),
                c = n("95410"),
                f = n("77078"),
                E = n("913144"),
                h = n("437822"),
                _ = n("229353"),
                m = n("271938"),
                g = n("599110"),
                p = n("672630"),
                A = n("49111"),
                T = n("332204");
            let R = "mweb_handoff_nonce",
                I = "mweb_handoff_nonce_expiration";
            (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
            let N = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
                S = new Set(["deep_link_failed"]),
                C = () => {
                    c.default.remove(R), c.default.remove(I)
                };
            var L = () => {
                let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
                    {
                        fingerprint: t,
                        handoff_token: n
                    } = (0, i.parse)(window.location.search),
                    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
                    a = null != s ? s : null !== e ? e : void 0;
                r.useEffect(() => {
                    null !== s && e !== s && E.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: s
                    })
                }, [s, e]);
                let [L, M] = r.useState(null), O = r.useCallback(e => {
                    M(e), g.default.track(A.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: e,
                        fingerprint: (0, o.maybeExtractId)(a)
                    }, {
                        fingerprint: a
                    })
                }, [M, a]), x = c.default.get(R);
                if ("null" === n && null === L && O("deep_link_failed"), null != n && "null" !== n && null == x && null === L && O("nonce_missing"), r.useEffect(() => {
                        if (null != x) {
                            let e = c.default.get(I);
                            (null == e || Date.now() >= e) && (O("nonce_expired"), C())
                        }
                    }, [x, O]), r.useEffect(() => {
                        null != n && "null" !== n && null != x && null == L && d.default.post({
                            url: A.Endpoints.HANDOFF_EXCHANGE,
                            body: {
                                key: x,
                                handoff_token: n
                            }
                        }).then(e => h.default.loginToken(e.body.token, !1)).then(() => {
                            g.default.track(A.AnalyticEvents.LOGIN_SUCCESSFUL, {
                                source: A.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, o.maybeExtractId)(a)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                        }).catch(() => {
                            O("handoff_exchange")
                        }).finally(() => {
                            C()
                        })
                    }, [n, x, L, a, O]), null == a) return null;
                let v = (() => {
                        if (null == L) return (0, l.jsxs)(l.Fragment, {
                            children: [_.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, l.jsx)("br", {}), _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                        });
                        if (S.has(L)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                        if (N.has(L)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
                    })(),
                    D = null != L && S.has(L);
                return D ? (0, l.jsx)("div", {
                    className: T.errorContainer,
                    children: (0, l.jsx)(f.Text, {
                        color: "interactive-normal",
                        variant: "text-sm/semibold",
                        children: v
                    })
                }) : (0, l.jsxs)("div", {
                    className: T.container,
                    children: [(0, l.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: v
                    }), (0, l.jsx)(f.Button, {
                        look: f.Button.Looks.INVERTED,
                        color: f.Button.Colors.BRAND_NEW,
                        onClick: () => {
                            let e = p.default.generateNonce();
                            c.default.set(R, e), c.default.set(I, Date.now() + 6e4);
                            let t = new URL(A.MOBILE_WEB_HANDOFF_DEEP_LINK),
                                n = new URLSearchParams(window.location.search);
                            n.delete("fingerprint"), n.delete("handoff_token");
                            let s = new URLSearchParams;
                            s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), g.default.track(A.AnalyticEvents.DEEP_LINK_CLICKED, {
                                fingerprint: (0, o.maybeExtractId)(a),
                                source: "mobile_web_handoff",
                                destination: A.MOBILE_WEB_HANDOFF_DEEP_LINK
                            }, {
                                fingerprint: a,
                                flush: !0
                            }), window.location.href = t.toString()
                        },
                        children: (0, l.jsx)(f.Text, {
                            className: T.buttonText,
                            variant: "text-sm/semibold",
                            children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                        })
                    })]
                })
            }
        },
        694787: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                validateMultiAccountTokens: function() {
                    return f
                },
                switchAccount: function() {
                    return E
                },
                removeAccount: function() {
                    return h
                }
            });
            var s = n("171718"),
                a = n("872717"),
                l = n("913144"),
                r = n("437822"),
                i = n("605250"),
                o = n("271938"),
                u = n("770032"),
                d = n("49111");
            let c = new i.default("MultiAccountActionCreators");

            function f() {
                let e = o.default.getId(),
                    t = u.default.getUsers();
                t.forEach(async t => {
                    let n, {
                            id: r
                        } = t,
                        i = s.default.getToken(r);
                    if (null == i || "" === i) {
                        l.default.dispatch({
                            type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                            userId: r
                        });
                        return
                    }
                    l.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_REQUEST",
                        userId: r
                    });
                    try {
                        n = await a.default.get({
                            url: d.Endpoints.ME,
                            headers: {
                                authorization: i
                            },
                            retries: 3
                        })
                    } catch (t) {
                        let e = (null == t ? void 0 : t.status) === 401 || (null == t ? void 0 : t.status) === 403;
                        l.default.dispatch({
                            type: e ? "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE" : "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                            userId: r
                        });
                        return
                    }
                    l.default.dispatch({
                        type: e === r ? "CURRENT_USER_UPDATE" : "USER_UPDATE",
                        user: n.body
                    }), l.default.dispatch({
                        type: "MULTI_ACCOUNT_VALIDATE_TOKEN_SUCCESS",
                        userId: r
                    })
                })
            }

            function E(e, t) {
                c.log("Switching account to ".concat(e), {
                    switchSynchronously: t
                });
                let n = s.default.getToken(e);
                return null == n ? (c.log("Switching accounts failed because there was no token"), l.default.dispatch({
                    type: "MULTI_ACCOUNT_VALIDATE_TOKEN_FAILURE",
                    userId: e
                }), Promise.resolve()) : r.default.switchAccountToken(n, t)
            }

            function h(e) {
                l.default.dispatch({
                    type: "MULTI_ACCOUNT_REMOVE_ACCOUNT",
                    userId: e
                })
            }
        },
        927101: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMultiAccountUsers: function() {
                    return o
                }
            });
            var s = n("884691"),
                a = n("446674"),
                l = n("913144"),
                r = n("694787"),
                i = n("770032");

            function o() {
                let e = (0, a.useStateFromStoresObject)([i.default], () => ({
                    isLoading: i.default.getIsValidatingUsers(),
                    multiAccountUsers: i.default.getUsers()
                }));
                return s.useEffect(() => {
                    l.default.wait(() => {
                        r.validateMultiAccountTokens()
                    })
                }, []), e
            }
        },
        724554: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("37983");
            n("884691");
            var a = n("759843"),
                l = n("77078"),
                r = n("428958"),
                i = n("124969"),
                o = n("851460"),
                u = n("782340"),
                d = n("329314");

            function c(e) {
                let {
                    onDismiss: t
                } = e;
                return (0, r.default)({
                    type: a.ImpressionTypes.MODAL,
                    name: a.ImpressionNames.MULTI_ACCOUNT_SWITCH_LANDING
                }), (0, s.jsxs)(i.default, {
                    className: d.chooseAccountAuthBox,
                    children: [(0, s.jsx)(i.Title, {
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT
                    }), (0, s.jsx)(l.Text, {
                        className: d.chooseAccountHelpText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: u.default.Messages.SWITCH_ACCOUNTS_CHOOSE_ACCOUNT_HELPER
                    }), (0, s.jsx)(o.default, {
                        actionText: u.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN,
                        onAction: e => {
                            e === o.MultiAccountActionType.LOGIN_REQUIRED && t()
                        }
                    }), (0, s.jsx)("div", {
                        className: d.actions,
                        children: (0, s.jsx)(l.Button, {
                            className: d.chooseAccountButton,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: t,
                            size: l.Button.Sizes.MEDIUM,
                            children: (0, s.jsx)(l.Text, {
                                variant: "text-sm/normal",
                                children: u.default.Messages.SWITCH_ACCOUNTS_ADD_AN_ACCOUNT_BUTTON
                            })
                        })
                    })]
                })
            }
        },
        851460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MultiAccountActionType: function() {
                    return s
                },
                default: function() {
                    return M
                }
            }), n("506083");
            var s, a, l = n("37983"),
                r = n("884691"),
                i = n("414456"),
                o = n.n(i),
                u = n("446674"),
                d = n("77078"),
                c = n("437822"),
                f = n("272030"),
                E = n("766274"),
                h = n("271938"),
                _ = n("102985"),
                m = n("697218"),
                g = n("433487"),
                p = n("599110"),
                A = n("158998"),
                T = n("694787"),
                R = n("770032"),
                I = n("927101"),
                N = n("49111"),
                S = n("782340"),
                C = n("31295");

            function L(e) {
                let {
                    actionText: t,
                    user: n,
                    onAction: s
                } = e, {
                    currentUser: a,
                    hidePrivateData: r,
                    isAuthenticated: i
                } = (0, u.useStateFromStoresObject)([m.default, _.default, h.default], () => ({
                    currentUser: m.default.getCurrentUser(),
                    hidePrivateData: _.default.hidePersonalInformation,
                    isAuthenticated: h.default.isAuthenticated()
                })), I = new E.default(n), L = i && (null == a ? void 0 : a.id) === I.id, M = n.tokenStatus === R.MultiAccountTokenStatus.INVALID, O = r || I.isPomelo() ? null : "#".concat(I.discriminator), x = null;
                return L ? x = (0, l.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: C.hintText,
                    color: "text-positive",
                    children: S.default.Messages.SWITCH_ACCOUNTS_ACTIVE_ACCOUNT
                }) : M && (x = (0, l.jsx)(d.Text, {
                    variant: "text-sm/semibold",
                    className: C.hintText,
                    color: "text-danger",
                    children: S.default.Messages.SWITCH_ACCOUNTS_INVALID_TOKEN
                })), (0, l.jsx)("div", {
                    className: C.accountCard,
                    children: (0, l.jsxs)("div", {
                        className: C.userDetails,
                        children: [(0, l.jsx)(d.Avatar, {
                            src: I.getAvatarURL(void 0, 40),
                            size: d.AvatarSizes.SIZE_40,
                            "aria-label": n.username
                        }), (0, l.jsxs)("div", {
                            className: o(C.usernameSection, {
                                [C.hasActionMaxWidth]: !L
                            }),
                            children: [(0, l.jsxs)("div", {
                                className: C.username,
                                children: [(0, l.jsx)(d.Text, {
                                    variant: "text-md/semibold",
                                    color: "header-primary",
                                    className: C.textOverflow,
                                    children: A.default.getUserTag(I, {
                                        mode: "username",
                                        identifiable: r ? "never" : "always"
                                    })
                                }), (0, l.jsx)(d.Text, {
                                    color: "header-secondary",
                                    variant: "text-sm/normal",
                                    children: O
                                })]
                            }), x]
                        }), (0, l.jsxs)("div", {
                            className: C.userActions,
                            children: [!L && (0, l.jsx)(d.Button, {
                                onClick: function() {
                                    if (M) {
                                        s(0, n.id);
                                        return
                                    }
                                    p.default.track(N.AnalyticEvents.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
                                        location: {
                                            section: N.AnalyticsSections.MANAGE_ACCOUNTS_MODAL
                                        }
                                    }), T.switchAccount(n.id), s(1, n.id)
                                },
                                color: d.Button.Colors.PRIMARY,
                                children: M ? S.default.Messages.SWITCH_ACCOUNTS_ACTION_LOG_IN : t
                            }), (0, l.jsx)(d.Button, {
                                className: C.userActionMenu,
                                onClick: function(e) {
                                    (0, f.openContextMenu)(e, e => {
                                        let {
                                            onSelect: t
                                        } = e;
                                        return (0, l.jsx)(d.Menu, {
                                            "aria-label": S.default.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNT,
                                            navId: "manage-multi-account",
                                            onClose: f.closeContextMenu,
                                            onSelect: t,
                                            children: (0, l.jsx)(d.MenuItem, {
                                                id: "remove-account",
                                                label: S.default.Messages.SWITCH_ACCOUNTS_REMOVE_ACCOUNT,
                                                action: () => {
                                                    ! function() {
                                                        c.default.logout(null, n.id).finally(() => {
                                                            T.removeAccount(n.id)
                                                        });
                                                        let e = {};
                                                        null != a ? e.section = N.AnalyticsSections.MANAGE_ACCOUNTS_MODAL : e.page = N.PageAnalyticsLocations.LOGIN, p.default.track(N.AnalyticEvents.MULTI_ACCOUNT_ACCOUNT_REMOVE, {
                                                            location: e
                                                        }), s(2, n.id)
                                                    }(), null != t && t()
                                                },
                                                color: "danger"
                                            })
                                        })
                                    })
                                },
                                size: d.Button.Sizes.ICON,
                                look: d.Button.Looks.BLANK,
                                color: d.Button.Colors.WHITE,
                                "aria-label": S.default.Messages.MORE_OPTIONS,
                                children: (0, l.jsx)(g.default, {
                                    className: C.overflowMenuIcon
                                })
                            })]
                        })]
                    })
                })
            }

            function M(e) {
                let {
                    actionText: t,
                    onAction: n
                } = e, {
                    isLoading: s,
                    multiAccountUsers: a
                } = (0, I.useMultiAccountUsers)();
                return (0, l.jsx)("div", {
                    className: C.list,
                    children: s ? (0, l.jsx)(d.Spinner, {}) : a.map((e, s) => (0, l.jsxs)(r.Fragment, {
                        children: [(0, l.jsx)(L, {
                            user: e,
                            actionText: t,
                            onAction: n
                        }, e.id), a.length - 1 !== s && (0, l.jsx)("div", {
                            role: "separator",
                            className: C.separator
                        })]
                    }, e.id))
                })
            }(a = s || (s = {}))[a.LOGIN_REQUIRED = 0] = "LOGIN_REQUIRED", a[a.SWITCHED = 1] = "SWITCHED", a[a.REMOVED = 2] = "REMOVED"
        },
        165926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setNewUser: function() {
                    return a
                },
                setNewUserFlowCompleted: function() {
                    return l
                }
            });
            var s = n("913144");

            function a(e) {
                s.default.wait(() => s.default.dispatch({
                    type: "NUF_NEW_USER",
                    newUserType: e
                }))
            }

            function l() {
                s.default.wait(() => s.default.dispatch({
                    type: "NUF_COMPLETE"
                }))
            }
        },
        56235: function(e, t, n) {
            "use strict";
            var s, a;
            n.r(t), n.d(t, {
                NewUserTypes: function() {
                    return s
                }
            }), (a = s || (s = {}))[a.MARKETING_UNCLAIMED = 0] = "MARKETING_UNCLAIMED", a[a.INVITE_UNCLAIMED = 1] = "INVITE_UNCLAIMED", a[a.ORGANIC_REGISTERED = 2] = "ORGANIC_REGISTERED", a[a.ORGANIC_REGISTERED_GUILD_TEMPLATE = 3] = "ORGANIC_REGISTERED_GUILD_TEMPLATE"
        },
        345327: function(e, t, n) {
            "use strict";
            var s, a;
            n.r(t), n.d(t, {
                PhoneOrEmailSelectorForceMode: function() {
                    return s
                },
                shouldShowCountryCodeSelector: function() {
                    return i
                }
            }), (a = s || (s = {})).PHONE = "phone", a.EMAIL = "email";
            let l = /^[-() \d]+$/,
                r = e => e.startsWith("+");

            function i(e, t) {
                return "phone" === e ? !r(t) : "email" !== e && !(t.length < 3) && l.test(t)
            }
        },
        25033: function(e, t, n) {
            "use strict";
            let s;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("446674"),
                l = n("913144"),
                r = n("988415");
            let i = (0, r.getDefaultCountryCode)();

            function o(e) {
                var t;
                let {
                    countryCode: n
                } = e;
                null != n && (i = null !== (t = (0, r.getCountryCodeByAlpha2)(n)) && void 0 !== t ? t : (0, r.getDefaultCountryCode)())
            }
            class u extends a.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (s = e.selectedCountryCode)
                }
                getUserAgnosticState() {
                    return {
                        selectedCountryCode: s
                    }
                }
                getCountryCode() {
                    return null != s ? s : i
                }
            }
            u.displayName = "PhoneStore", u.persistKey = "PhoneStore";
            var d = new u(l.default, {
                PHONE_SET_COUNTRY_CODE: function(e) {
                    let {
                        countryCode: t
                    } = e;
                    s = t
                },
                CONNECTION_OPEN: o,
                SET_LOCATION_METADATA: o
            })
        },
        467413: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("907002"),
                o = n("446674"),
                u = n("77078"),
                d = n("206230"),
                c = n("878720"),
                f = n("189613"),
                E = n("393004");

            function h(e) {
                let {
                    show: t,
                    alpha2: n,
                    countryCode: l
                } = e, h = (0, o.useStateFromStores)([d.default], () => d.default.useReducedMotion), _ = a.useRef(null), [m, g] = a.useState(0), [p, A] = a.useState(!1);
                a.useEffect(() => {
                    function e() {
                        var e, n;
                        g(t && null !== (n = null === (e = _.current) || void 0 === e ? void 0 : e.getBoundingClientRect().width) && void 0 !== n ? n : 0)
                    }
                    return e(), window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
                }, [t, n, l]);
                let T = (0, i.useSpring)({
                        width: "".concat(m, "px"),
                        immediate: h,
                        onStart: () => {
                            A(!0)
                        },
                        onRest: () => {
                            A(!1)
                        }
                    }),
                    R = e => {
                        c.default.setCountryCode(e)
                    };
                return (0, s.jsx)(u.Popout, {
                    position: "top",
                    renderPopout: e => (0, s.jsx)(f.default, {
                        className: E.popout,
                        onClick: t => {
                            R(t), e.closePopout()
                        }
                    }),
                    children: e => (0, s.jsx)("div", {
                        className: r(E.outerContainer, {
                            [E.hidden]: !(t || p)
                        }),
                        children: (0, s.jsx)(i.animated.div, {
                            className: E.container,
                            style: T,
                            children: (0, s.jsxs)("div", {
                                className: E.innerContainer,
                                ref: _,
                                children: [(0, s.jsxs)(u.Clickable, {
                                    ...e,
                                    className: E.countryCode,
                                    children: [n, " ", l]
                                }), (0, s.jsx)("div", {
                                    className: E.separator
                                })]
                            })
                        })
                    })
                })
            }
        },
        189613: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("881410");
            var s, a = n("37983"),
                l = n("884691"),
                r = n("414456"),
                i = n.n(r),
                o = n("448105"),
                u = n.n(o),
                d = n("917351"),
                c = n.n(d),
                f = n("592861"),
                E = n("77078"),
                h = n("988415"),
                _ = n("145131"),
                m = n("782340"),
                g = n("803853"),
                p = n("212029");
            s = class extends l.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = f.default.flatMap((e, t) => {
                        let {
                            alpha2: n,
                            phoneCountryCodes: s,
                            name: l
                        } = e, r = (0, h.getI18NCountryName)(n);
                        return s.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: l,
                            translatedName: r,
                            countryData: {
                                name: l,
                                alpha2: n,
                                code: e
                            },
                            children: (0, a.jsxs)(_.default, {
                                className: g.countryItem,
                                justify: _.default.Justify.CENTER,
                                align: _.default.Align.CENTER,
                                children: [(0, a.jsx)(_.default.Child, {
                                    className: g.countryName,
                                    children: r
                                }), (0, a.jsx)(_.default.Child, {
                                    className: g.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), n = c(t).filter(t => 0 === e.length || u(e.toLowerCase(), t.name.toLowerCase()) || u(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, l.createElement)(E.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === n.length ? (0, a.jsx)(E.PopoutList.Empty, {
                        children: m.default.Messages.NONE
                    }) : (0, a.jsx)(E.ScrollerAuto, {
                        className: g.phoneFieldScroller,
                        children: n
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, a.jsxs)(E.PopoutList, {
                        className: i(g.phoneFieldPopout, p.elevationBorderLow, e),
                        children: [(0, a.jsx)(E.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: m.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, a.jsx)(E.PopoutList.Divider, {}), this.renderItems()]
                    })
                }
                constructor(e) {
                    super(e), this.onChangeQuery = e => {
                        this.setState({
                            query: e
                        })
                    }, this.onClearQuery = () => {
                        this.setState({
                            query: ""
                        })
                    }, this.onClick = e => {
                        var t, n;
                        null === (t = (n = this.props).onClick) || void 0 === t || t.call(n, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
        },
        589252: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("77078"),
                o = n("476765"),
                u = n("345327"),
                d = n("467413"),
                c = n("713186"),
                f = n("905518");

            function E(e) {
                let {
                    alpha2: t,
                    countryCode: n,
                    forceMode: l,
                    label: E,
                    error: h,
                    className: _,
                    required: m,
                    value: g,
                    setRef: p,
                    placeholder: A,
                    autoFocus: T,
                    maxLength: R,
                    spellCheck: I,
                    autoComplete: N,
                    autoCapitalize: S,
                    autoCorrect: C,
                    onChange: L,
                    inputClassName: M
                } = e, O = (0, o.useUID)(), [x, v] = a.useState(!1), D = (0, u.shouldShowCountryCodeSelector)(l, g);
                return (0, s.jsx)(i.FormItem, {
                    title: E,
                    error: h,
                    className: _,
                    required: m,
                    tag: "label",
                    htmlFor: O,
                    children: (0, s.jsxs)("div", {
                        className: r(f.input, c.input, M, {
                            [f.error]: null != h,
                            [f.focused]: x
                        }),
                        children: [(0, s.jsx)(d.default, {
                            show: D,
                            alpha2: t,
                            countryCode: n
                        }), (0, s.jsx)(i.TextInput, {
                            id: O,
                            name: "email",
                            type: l === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
                            value: g,
                            inputRef: p,
                            placeholder: A,
                            "aria-label": E,
                            required: m,
                            onChange: function(e) {
                                let t = (0, u.shouldShowCountryCodeSelector)(l, e) ? n : "";
                                L(e, t)
                            },
                            autoComplete: N,
                            autoCapitalize: S,
                            autoCorrect: C,
                            autoFocus: T,
                            maxLength: R,
                            spellCheck: I,
                            className: c.inputWrapper,
                            inputClassName: c.inputField,
                            onFocus: () => v(!0),
                            onBlur: () => v(!1)
                        })]
                    })
                })
            }
        },
        79345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUsernameStatus: function() {
                    return l
                }
            }), n("222007");
            var s = n("884691"),
                a = n("44984");
            let l = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                    r = (0, a.useUsernameLiveCheck)(e, t, n),
                    [i, o] = s.useState(void 0);
                return s.useEffect(() => {
                    "" === e || e === l ? o(void 0) : null != r && o(r)
                }, [r, e, l]), i
            }
        },
        447997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007");
            var s = n("37983"),
                a = n("884691"),
                l = n("907002"),
                r = n("230606");
            let i = () => {
                let e = a.useRef(null),
                    [t, n] = a.useState(0),
                    s = a.useMemo(() => new r.default(e => {
                        let [t] = e;
                        return n(t.contentRect.height)
                    }), []);
                return a.useLayoutEffect(() => (null != e.current && s.observe(e.current), () => s.disconnect()), [s]), {
                    ref: e,
                    height: t
                }
            };

            function o(e) {
                let {
                    show: t,
                    children: n,
                    top: a = 0,
                    bottom: r = 0
                } = e, {
                    ref: o,
                    height: u
                } = i(), d = (0, l.useSpring)({
                    from: {
                        height: 0,
                        paddingBottom: "0px",
                        marginTop: "0px"
                    },
                    to: {
                        height: t ? u : 0,
                        paddingBottom: t ? "".concat(r, "px") : "0px",
                        marginTop: t ? "".concat(a, "px") : "0px"
                    },
                    config: {
                        tension: 170,
                        friction: 26
                    }
                }), c = (0, l.useSpring)({
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: t ? 1 : 0
                    },
                    config: {
                        duration: 200,
                        easing: t ? e => e ** 4 : e => e * (2 - e)
                    }
                });
                return (0, s.jsx)(l.animated.div, {
                    style: {
                        overflow: "hidden",
                        height: d.height,
                        paddingBottom: d.paddingBottom,
                        marginTop: d.marginTop
                    },
                    children: (0, s.jsx)(l.animated.div, {
                        style: {
                            opacity: c.opacity
                        },
                        ref: o,
                        children: n
                    })
                })
            }
        },
        794538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007"), n("424973");
            var s = n("37983"),
                a = n("884691"),
                l = n("414456"),
                r = n.n(l),
                i = n("145131"),
                o = n("616389");
            class u extends a.PureComponent {
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, s.jsx)("input", {
                        ref: this.setCodeBlockRef,
                        className: r(o.input, e),
                        maxLength: 1,
                        value: null != this.props.code ? this.props.code : void 0,
                        autoFocus: this.props.autoFocus,
                        onKeyDown: this.handleKeyDown,
                        onChange: this.handleChange
                    })
                }
                focus() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.focus()
                }
                blur() {
                    var e;
                    null === (e = this._codeBlockRef) || void 0 === e || e.blur()
                }
                constructor(...e) {
                    super(...e), this.setCodeBlockRef = e => {
                        this._codeBlockRef = e
                    }, this.handleKeyDown = e => {
                        let t = 8 === e.which || 37 === e.which || 39 === e.which,
                            n = e.which >= 48 && e.which <= 57 || e.keyCode >= 96 && e.keyCode <= 105;
                        !t && !n && e.preventDefault();
                        let {
                            onKeyDown: s
                        } = this.props;
                        null == s || s(e)
                    }, this.handleChange = e => {
                        let {
                            onChange: t
                        } = this.props;
                        null == t || t(e.currentTarget.value)
                    }
                }
            }
            u.defaultProps = {
                autoFocus: !1
            };
            class d extends a.PureComponent {
                render() {
                    let {
                        className: e,
                        inputClassName: t
                    } = this.props, {
                        codes: n
                    } = this.state, a = [];
                    for (let e = 0; e < n.length; e++) e === n.length / 2 && a.push((0, s.jsx)("div", {
                        className: o.spacer
                    }, "spacer")), a.push((0, s.jsx)(u, {
                        ref: t => this.setCodeBlockRef(e, t),
                        code: n[e],
                        autoFocus: 0 === e,
                        onChange: t => this.handleChange(e, t),
                        onKeyDown: t => this.handleKeyDown(e, t),
                        className: t
                    }, e));
                    return (0, s.jsx)(i.default, {
                        align: i.default.Align.CENTER,
                        justify: i.default.Justify.CENTER,
                        className: e,
                        children: a
                    })
                }
                setCodeBlockRef(e, t) {
                    this._codeBlockRefs[e] = t
                }
                handleChange(e, t) {
                    this.state.codes[e] = t;
                    let n = this.getCodeOrFirstEmptyIndex();
                    if ("string" == typeof n) this.submit(n);
                    else {
                        let e = this._codeBlockRefs[n];
                        null == e || e.focus()
                    }
                }
                handleKeyDown(e, t) {
                    let {
                        codes: n
                    } = this.state;
                    if (8 === t.which && e > 0 && (null == n[e] || 0 === n[e].length)) {
                        let t = e - 1;
                        n[t] = "";
                        let s = this._codeBlockRefs[t];
                        null == s || s.focus()
                    }
                }
                getCodeOrFirstEmptyIndex() {
                    let {
                        codes: e
                    } = this.state, t = "";
                    for (let n = 0; n < e.length; n++) {
                        if (isNaN(parseInt(e[n]))) return n;
                        t += e[n]
                    }
                    return t
                }
                submit(e) {
                    let {
                        onSubmit: t
                    } = this.props;
                    null == t || t(e)
                }
                constructor(e) {
                    super(e), this._codeBlockRefs = Array(this.props.count), this.state = {
                        codes: Array(e.count)
                    }
                }
            }
            d.defaultProps = {
                count: 6
            };
            var c = d
        },
        671278: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                QRCodeOverlaySizes: function() {
                    return a
                },
                QRCodeWithOverlay: function() {
                    return f
                },
                default: function() {
                    return E
                }
            });
            var s, a, l = n("37983"),
                r = n("884691"),
                i = n("82697"),
                o = n("56701");
            (s = a || (a = {})).SIZE_40 = "SIZE_40", s.SIZE_60 = "SIZE_60";
            let u = Object.freeze({
                    SIZE_40: "size-40",
                    SIZE_60: "size-60"
                }),
                d = n("527826");
            class c extends r.PureComponent {
                render() {
                    let {
                        className: e,
                        text: t,
                        ...n
                    } = this.props;
                    return (0, l.jsx)("div", {
                        style: {
                            padding: 8,
                            borderRadius: 4,
                            width: n.size,
                            height: n.size,
                            backgroundColor: n.bgColor
                        },
                        className: e,
                        children: (0, l.jsx)(i.default, {
                            value: t,
                            level: "M",
                            ...n
                        })
                    })
                }
            }
            c.defaultProps = {
                size: 128,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            class f extends r.PureComponent {
                render() {
                    let {
                        overlaySize: e
                    } = this.props, t = u[null != e ? e : "SIZE_40"];
                    return (0, l.jsxs)("div", {
                        className: o.qrCodeContainer,
                        children: [(0, l.jsx)(c, {
                            ...this.props
                        }), (0, l.jsx)("div", {
                            className: o.qrCodeOverlay,
                            children: (0, l.jsx)("img", {
                                className: o[t],
                                src: d,
                                alt: ""
                            })
                        })]
                    })
                }
            }
            f.defaultProps = {
                size: 144,
                bgColor: "#ffffff",
                fgColor: "#000000"
            };
            var E = c
        },
        98013: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                makeDesktopDownloadURL: function() {
                    return u
                },
                getPlatformReadableName: function() {
                    return c
                },
                getCurrentPlatformDownloadURL: function() {
                    return f
                },
                getMobileDownloadLink: function() {
                    return E
                }
            });
            var s = n("597755"),
                a = n.n(s),
                l = n("815157"),
                r = n("271938"),
                i = n("49111");
            let o = "linux";

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return "".concat(i.DownloadLinks.DESKTOP).concat(t ? "/ptb" : "", "?platform=").concat(e).concat(null != n ? "&format=".concat(n) : "")
            }

            function d() {
                var e;
                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null === (e = a.os) || void 0 === e ? void 0 : e.family;
                return null == t ? "win" : -1 !== t.indexOf("Ubuntu") || -1 !== t.indexOf("Debian") || -1 !== t.indexOf("Fedora") || -1 !== t.indexOf("Red Hat") || -1 !== t.indexOf("SuSE") || -1 !== t.indexOf("Linux") ? o : -1 !== t.indexOf("OS X") ? "osx" : "win"
            }

            function c(e) {
                return ({
                    win: "Windows",
                    osx: "Mac",
                    [o]: "Linux"
                })[d(e)]
            }

            function f() {
                let e = d();
                return u(e, !1, e === o ? "tar.gz" : null)
            }

            function E(e, t, n) {
                let s = null != n ? n.toString() : null;
                switch (t) {
                    case "iOS":
                        return (0, l.default)(null != s ? s : "https://itunes.apple.com/us/app/discord-chat-for-games/id985746746", {
                            utmSource: e,
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    case "Android":
                        return (0, l.default)(null != s ? s : "https://play.google.com/store/apps/details", {
                            utmSource: e,
                            id: "com.discord",
                            fingerprint: r.default.getFingerprint(),
                            attemptId: (0, l.generateAttemptId)()
                        });
                    default:
                        return null != s ? s : "https://www.discord.com"
                }
            }
        },
        274515: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateRsaKeyPair: function() {
                    return r
                },
                serializePublicKey: function() {
                    return i
                },
                publicKeyFingerprint: function() {
                    return o
                },
                decryptEncodedCiphertext: function() {
                    return E
                },
                decryptNonce: function() {
                    return h
                },
                decodeEncodedUserRecord: function() {
                    return _
                }
            }), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997"), n("222007"), n("781738"), n("492311"), n("70102");
            var s = n("627445"),
                a = n.n(s),
                l = n("766274");

            function r() {
                return window.crypto.subtle.generateKey({
                    name: "RSA-OAEP",
                    modulusLength: 2048,
                    publicExponent: new Uint8Array([1, 0, 1]),
                    hash: "SHA-256"
                }, !0, ["decrypt"])
            }
            async function i(e) {
                a(null != e.publicKey, "public key cannot be null");
                let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
                return btoa(String.fromCharCode(...new Uint8Array(t)))
            }
            async function o(e) {
                a(null != e.publicKey, "public key cannot be null");
                let t = await window.crypto.subtle.exportKey("spki", e.publicKey);
                return c(t)
            }

            function u(e) {
                return btoa(String.fromCharCode(...new Uint8Array(e))).replace(/\//g, "_").replace(/\+/g, "-").replace(/={1,2}$/, "")
            }

            function d(e) {
                return Uint8Array.from(atob(e), e => e.charCodeAt(0))
            }
            async function c(e) {
                let t = await window.crypto.subtle.digest({
                    name: "SHA-256"
                }, e);
                return u(t)
            }

            function f(e, t) {
                return a(null != e.privateKey, "private key cannot be null"), window.crypto.subtle.decrypt({
                    name: "RSA-OAEP",
                    hash: "SHA-256"
                }, e.privateKey, t)
            }
            async function E(e, t) {
                let n = new TextDecoder,
                    s = await f(e, d(t));
                return n.decode(s)
            }
            async function h(e, t) {
                let n = await f(e, d(t));
                return u(n)
            }
            async function _(e, t) {
                t = await E(e, t);
                let n = t.match(/^(\d+):(\d{1,4}):([a-zA-Z0-9_]+):(.*)$/);
                if (null == n) throw Error("Invalid encoded user record.");
                let [, s, a, r, i] = n;
                return new l.default({
                    id: s,
                    discriminator: a,
                    avatar: "0" === r ? null : r,
                    username: i
                })
            }
        }
    }
]);