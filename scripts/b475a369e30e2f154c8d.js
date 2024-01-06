(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46703"], {
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        856670: function(e, t, n) {
            "use strict";
            e.exports = n.p + "018197f71e03e53562e7.svg"
        },
        693029: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7e5dd7f59f96cc264184.svg"
        },
        910549: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f46d6b0cbeeea15ecd81.png"
        },
        559965: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a2c4ffe04406bdb03384.png"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return l
                },
                unsubscribeMembers: function() {
                    return o
                },
                subscribeChannel: function() {
                    return s
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            }), n("424973");
            var i = n("913144"),
                r = n("696605");

            function l(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_REMOVE",
                    guildId: e,
                    userIds: t
                })
            }

            function s(e, t, n) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_CHANNEL",
                    guildId: e,
                    channelId: t,
                    ranges: n
                })
            }

            function a(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: l,
                    rowHeight: o
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
                }
                let u = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return u.push([e, t]), t + 1
                }
                let c = a(.5 * l),
                    E = a(i, -c),
                    _ = a(i + l, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; E <= _;) E = d(E);
                s(t, n, u)
            }
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return r
                },
                popLayer: function() {
                    return l
                },
                popAllLayers: function() {
                    return o
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function l() {
                i.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function o() {
                i.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return l
                },
                clearCardInfo: function() {
                    return o
                },
                updateAddressInfo: function() {
                    return s
                },
                clearError: function() {
                    return a
                }
            });
            var i = n("913144");

            function r(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function l(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function a() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return r
                }
            });
            var i = n("913144");

            function r() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return I
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return N
                },
                saveAccountRequest: function() {
                    return T
                },
                saveAccountChanges: function() {
                    return h
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return A
                },
                setPendingAvatar: function() {
                    return C
                },
                setPendingGlobalNameName: function() {
                    return R
                },
                setPendingAvatarDecoration: function() {
                    return L
                },
                setPendingProfileEffectId: function() {
                    return v
                },
                clearErrors: function() {
                    return g
                },
                resetPendingAccountChanges: function() {
                    return m
                },
                resetAllPending: function() {
                    return O
                },
                resetAndCloseUserProfileForm: function() {
                    return D
                },
                setDisableSubmit: function() {
                    return U
                }
            });
            var i = n("872717"),
                r = n("95410"),
                l = n("819855"),
                o = n("913144"),
                s = n("393414"),
                a = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                E = n("49111"),
                _ = n("191349"),
                f = n("782340");

            function I() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    r = t ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => i.default.post({
                    url: r,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    c.default.logoutInternal(), (0, s.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function T(e) {
                let t = await i.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, o.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && o.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return o.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function h(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: l,
                    password: s,
                    avatar: c,
                    avatarDecoration: I,
                    newPassword: S,
                    globalName: N
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: l,
                        password: s,
                        avatar: c,
                        discriminator: n,
                        global_name: N,
                        new_password: S,
                        ...e
                    };
                    null === I && (o.avatar_decoration_id = null), null != I && (o.avatar_decoration_id = I.id, o.avatar_decoration_sku_id = I.skuId);
                    let a = r.default.get(E.DEVICE_TOKEN),
                        u = (0, _.getDevicePushProvider)();
                    null != u && null != a && (o.push_provider = u, o.push_token = a);
                    let d = r.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != _.DEVICE_PUSH_VOIP_PROVIDER && null != d && (o.push_voip_provider = _.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = d), T(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => o.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return a.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function p() {
                return i.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function R(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function L(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function v(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function g() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function m() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function O() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function D() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function U(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        133403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                o = n("77078"),
                s = n("782340"),
                a = n("239636");
            let u = Object.freeze({
                DEFAULT: a.default,
                FILLED: a.filled
            });

            function d(e) {
                let {
                    className: t,
                    onClick: n,
                    "aria-label": r,
                    look: d = u.DEFAULT
                } = e;
                return (0, i.jsx)(o.Clickable, {
                    "aria-label": null != r ? r : s.default.Messages.REMOVE,
                    className: l(a.button, d, t),
                    onClick: n
                })
            }
            d.Looks = u
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("77078"),
                a = n("782340"),
                u = n("347129");
            class d extends r.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: c,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: f,
                        retryPrompt: I,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: N,
                        errorMessage: T,
                        retrySuccess: h
                    } = this.state, p = r.Children.count(l) > 0 ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, A = null != I ? (0, i.jsxs)(s.Text, {
                        className: o(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, i.jsx)("br", {}), (0, i.jsx)(s.Clickable, {
                            className: o(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, i.jsx)(s.Anchor, {
                                children: I
                            })
                        })]
                    }) : null, C = h ? (0, i.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, i.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, i.jsx)(s.ModalRoot, {
                        transitionState: _,
                        children: (0, i.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, i.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, i.jsxs)(s.ModalContent, {
                                children: [null != f ? (0, i.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: f
                                }) : null, p, C, (0, i.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, i.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, i.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : T
                                    }) : null, A]
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                children: [(0, i.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: c || 0 === N.length,
                                    children: null != n ? n : a.default.Messages.CONFIRM
                                }), (0, i.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: c,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: a.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : a.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? a.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : a.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var c = d
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: s
                    })
                })
            }
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M18.7 7.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.29 7.3-7.3a1 1 0 0 1 1.4 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: s = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: o = "transparent",
                    secondaryColorClass: s = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof o ? o : o.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        666031: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GifIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm2.18 13.87a2.9 2.9 0 0 1-1.66-.49 3.18 3.18 0 0 1-1.12-1.35A4.88 4.88 0 0 1 4 12c0-.75.14-1.42.42-2 .29-.59.7-1.04 1.24-1.37a3.7 3.7 0 0 1 1.95-.5c.64 0 1.21.14 1.72.4.5.28.89.67 1.15 1.16l-1.22.88a1.76 1.76 0 0 0-1.64-1.02c-.66 0-1.17.22-1.52.65a2.74 2.74 0 0 0-.53 1.8c0 .78.18 1.39.53 1.81.35.42.86.64 1.52.64.3 0 .57-.06.81-.16.25-.12.45-.27.58-.47v-.93H7.3v-1.4h3.24v4.23H9.27l-.2-.71c-.43.57-1.06.86-1.89.86Zm6.34-.15h-1.57V8.28h1.57v7.44Zm1.51 0h1.57v-2.83h2.76v-1.42H16.6V9.7H20V8.28h-4.97v7.44Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: s
                    })]
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: s
                    })]
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "m13.96 5.46 4.58 4.58a1 1 0 0 0 1.42 0l1.38-1.38a2 2 0 0 0 0-2.82l-3.18-3.18a2 2 0 0 0-2.82 0l-1.38 1.38a1 1 0 0 0 0 1.42ZM2.11 20.16l.73-4.22a3 3 0 0 1 .83-1.61l7.87-7.87a1 1 0 0 1 1.42 0l4.58 4.58a1 1 0 0 1 0 1.42l-7.87 7.87a3 3 0 0 1-1.6.83l-4.23.73a1.5 1.5 0 0 1-1.73-1.73Z",
                        className: s
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: s
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        className: s
                    })
                })
            }
        },
        125094: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenArrowIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: s
                    })]
                })
            }
        },
        197801: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SettingsIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: s
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: s
                    })]
                })
            }
        },
        599417: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("872717"),
                l = n("49111"),
                o = n("782340");
            i = class extends r.default.V8APIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        79489: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("888400"),
                r = n("333805"),
                l = n("782340");
            class o extends r.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, i.diffAsUnits)(0, 1e3 * t);
                    return (0, i.unitsAsStrings)(n, {
                        days: l.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: l.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: l.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var s = o
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return i
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return A
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var i, r, l, o, s, a, u, d, c = n("486196"),
                E = n("614247"),
                _ = n("821879"),
                f = n("333805"),
                I = n("782340");
            (s = i || (i = {}))[s.UNKNOWN = 0] = "UNKNOWN", s[s.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", s[s.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", s[s.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", s[s.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", s[s.INVALID_PLAN = 100005] = "INVALID_PLAN", s[s.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", s[s.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", s[s.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", s[s.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", s[s.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", s[s.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", s[s.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", s[s.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", s[s.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", s[s.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", s[s.CARD_DECLINED = 100054] = "CARD_DECLINED", s[s.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", s[s.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", s[s.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", s[s.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", s[s.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", s[s.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", s[s.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", s[s.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", s[s.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", s[s.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", s[s.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (a = r || (r = {})).CARD_NUMBER = "cardNumber", a.CARD_CVC = "cvc", a.CARD_EXPIRATION_DATE = "expirationDate", a.CARD_NAME = "name", a.ADDRESS_NAME = "name", a.ADDRESS_LINE_1 = "line1", a.ADDRESS_LINE_2 = "line2", a.ADDRESS_CITY = "city", a.ADDRESS_STATE = "state", a.ADDRESS_POSTAL_CODE = "postalCode", a.ADDRESS_COUNTRY = "country", (u = l || (l = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
            let S = Object.freeze({
                    address_line1: "line1",
                    address_line2: "line2",
                    address_city: "city",
                    address_state: "state",
                    address_zip: "postalCode",
                    address_country: "country",
                    number: "cardNumber",
                    exp: "expirationDate",
                    exp_month: "expirationDate",
                    exp_year: "expirationDate"
                }),
                N = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = o || (o = {})).CARD = "card", d.ADDRESS = "address";
            let T = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                h = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                p = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function A(e) {
                var t, n, i, r, l;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : null === (i = r.errors) || void 0 === i ? void 0 : i.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (l = e.body) || void 0 === l ? void 0 : l.errors) != null && (e.body = (0, E.default)(e.body.errors))
                }
                return new C(e)
            }
            class C extends f.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, _.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(h) : this._isInFieldSet(T)
                }
                hasAddressError() {
                    return this._isInFieldSet(p)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = I.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = I.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = I.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = I.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = I.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = I.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = I.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = I.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = S[n] || N[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            C.ErrorCodes = i, C.Fields = r, C.Sections = o, C.CARD_ERRORS = T, C.ADDRESS_ERRORS = p;
            var R = C
        },
        852766: function(e, t, n) {
            "use strict";
            n.r(t), n("736978")
        },
        927367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadErrorCodes: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var i, r, l = n("782340");
            (i = r || (r = {}))[i.GENERAL = 0] = "GENERAL", i[i.NO_FILE = 1] = "NO_FILE", i[i.PROGRESS = 2] = "PROGRESS", i[i.UPLOAD = 3] = "UPLOAD", i[i.READ = 4] = "READ";
            var o = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return l.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
                }
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i, r = n("872717"),
                l = n("49111"),
                o = n("782340");
            i = class extends r.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? o.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : o.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        448993: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                V6OrEarlierAPIError: function() {
                    return i.default
                },
                APIError: function() {
                    return r.default
                },
                BillingError: function() {
                    return l.default
                },
                AppliedGuildBoostError: function() {
                    return o.default
                },
                UploadVoiceDebugLogsError: function() {
                    return s.default
                },
                UploadErrorCodes: function() {
                    return s.UploadErrorCodes
                }
            });
            var i = n("333805"),
                r = n("599417"),
                l = n("736978");
            n("852766"), n("846071");
            var o = n("79489"),
                s = n("927367")
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("599110");
            let l = () => i.useContext(r.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691");

            function r(e) {
                let [t, n] = (0, i.useState)(!1), r = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    r.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = r.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [r]), t
            }
        },
        206625: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r(e, t) {
                let n = i.useRef(e);
                return i.useEffect(() => {
                    function e(e) {
                        null != n.current && !n.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [n, t]), n
            }
        },
        689988: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("70102"), n("222007"), n("704744");
            var i, r = n("913144");
            i = class {
                initialize() {
                    this.initializedCount++, !(this.initializedCount > 1) && (this._initialize(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.subscribe(t, "function" == typeof n ? n : n.callback)
                    }), this.stores.forEach((e, t) => {
                        t.addChangeListener(e), e()
                    }))
                }
                terminate(e) {
                    !(this.initializedCount <= 0) && (e ? this.initializedCount = 0 : this.initializedCount--, 0 === this.initializedCount && (this._terminate(), Object.entries(this.actions).forEach(e => {
                        let [t, n] = e;
                        r.default.unsubscribe(t, "function" == typeof n ? n : n.callback)
                    })))
                }
                _initialize() {}
                _terminate() {}
                constructor() {
                    this.initializedCount = 0, this.actions = {}, this.stores = new Map
                }
            }
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                l = n.n(r);
            n("233736");
            var o = n("666020");

            function s(e) {
                i.useEffect(() => (l.forEach(e, (e, t) => (0, o.subscribeMembers)(t, e)), () => {
                    l.forEach(e, (e, t) => (0, o.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("773336");
            async function r(e, t) {
                let {
                    default: r
                } = await n.el("572544").then(n.bind(n, "572544")), l = r(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != l) l(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("872717"),
                r = n("913144"),
                l = n("568734"),
                o = n("299285"),
                s = n("49111"),
                a = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: l,
                            teamId: o
                        } = e, a = await i.default.post({
                            url: s.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: l,
                                guild_id: n,
                                team_id: o
                            }
                        }), u = a.body;
                        return null != n && null != l && r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = await i.default.get({
                            url: s.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), o = l.body;
                        return r.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: o
                        }), o
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, l = await i.default.post({
                            url: s.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), o = l.body;
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: o
                        }), o
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let i = o.default.getApplication(e),
                                    r = (0, l.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, s.ApplicationFlags.EMBEDDED),
                                    a = r && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != i && !a) && !o.default.isFetchingApplication(e) && !o.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await i.default.get({
                                    url: s.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw r.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            r.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return r.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), i.default.get({
                            url: s.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (r.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (r.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, r, l, o;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GAME = 1] = "GAME", l[l.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", l[l.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (o = r || (r = {}))[o.BOT = 0] = "BOT", o[o.SERVER = 1] = "SERVER", o[o.SYSTEM_DM = 2] = "SYSTEM_DM", o[o.OFFICIAL = 3] = "OFFICIAL", o[o.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", o[o.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", o[o.AI = 6] = "AI", o[o.REMIX = 7] = "REMIX"
        },
        526887: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return d
                },
                ConfettiCannonContextProvider: function() {
                    return c
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("516555"),
                o = n("65597"),
                s = n("206230"),
                a = n("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => a.NOOP,
                    removeClickListener: a.NOOP
                },
                d = r.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: a,
                    baseConfig: c,
                    addClickListener: E,
                    removeClickListener: _
                } = e, f = (0, l.useConfettiCannon)(n, a), I = (0, o.default)([s.default], () => s.default.useReducedMotion), S = r.useMemo(() => I ? u : {
                    confettiCanvas: n,
                    cannon: f,
                    createConfetti: (e, t) => f.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => f.createConfetti({
                        ...c,
                        position: {
                            type: "static",
                            value: {
                                x: e,
                                y: t
                            }
                        },
                        ...n
                    }, i),
                    createMultipleConfetti: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        return f.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            r = arguments.length > 4 ? arguments[4] : void 0;
                        return f.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, r)
                    },
                    addClickListener: E,
                    removeClickListener: _
                }, [E, c, f, n, I, _]);
                return (0, i.jsx)(d.Provider, {
                    value: S,
                    children: t
                })
            }
        },
        616265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var i = {
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
        145106: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("133403"),
                o = n("49622");

            function s(e) {
                let {
                    hasSetEmoji: t,
                    onClick: n,
                    children: s
                } = e, [a, u] = r.useState(!1);
                return (0, i.jsxs)("div", {
                    className: o.container,
                    onMouseEnter: () => {
                        if (t) {
                            u(!0);
                            return
                        }
                        u(!1)
                    },
                    onMouseLeave: () => {
                        u(!1)
                    },
                    children: [s, t && a && (0, i.jsx)(l.default, {
                        onClick: n,
                        className: o.removeButton
                    })]
                })
            }
        },
        246511: function(e, t, n) {
            "use strict";
            var i, r, l, o;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return r
                }
            }), (l = i || (i = {}))[l.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", l[l.MOUSE_EVENT = 1] = "MOUSE_EVENT", (o = r || (r = {})).EMOJI = "emoji", o.STICKER = "sticker", o.PACK_ICON = "pack-icon"
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return E
                },
                isRoleIconAssetUrl: function() {
                    return f
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            }), n("781738");
            var i = n("867805"),
                r = n("407063"),
                l = n("315102"),
                o = n("773336"),
                s = n("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, o.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                E = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                _ = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let o = l.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        E = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), E = d ? "" : "&" + E), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(n, "/").concat(i, ".").concat(o, "?").concat(c).concat(E) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                f = e => e.startsWith(a) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let i = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return i || e.features.has(s.GuildFeatures.ROLE_ICONS)
                }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return s
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return u
                },
                closeGuildIdentitySettings: function() {
                    return d
                },
                resetAndCloseGuildIdentityForm: function() {
                    return c
                },
                setPendingAvatar: function() {
                    return E
                },
                setPendingBanner: function() {
                    return _
                },
                setPendingBio: function() {
                    return f
                },
                setPendingPronouns: function() {
                    return I
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return h
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return A
                },
                setDisableSubmit: function() {
                    return C
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                l = n("54239"),
                o = n("49111");
            async function s(e, t) {
                let {
                    nick: n,
                    avatar: l
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: l
                        },
                        oldFormErrors: !0
                    });
                    return r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), r.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), r.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function u(e, t) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, l.popLayer)()
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function I(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function h() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function A() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, l, o, s, a, u, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var E = n("446674"),
                _ = n("913144"),
                f = n("49111");
            let I = f.FormStates.CLOSED,
                S = {},
                N = !1;

            function T() {
                I = f.FormStates.CLOSED, S = {}, u = null, d = void 0, c = []
            }

            function h() {
                p(), A(), S = {}, I = f.FormStates.OPEN
            }

            function p() {
                i = void 0, s = void 0
            }

            function A() {
                r = void 0, l = void 0, o = void 0, a = void 0
            }
            class C extends E.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== l || void 0 !== o || void 0 !== s || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return l
                }
                getPendingNickname() {
                    return s
                }
                getPendingPronouns() {
                    return o
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: r,
                        pendingBio: l,
                        pendingPronouns: o,
                        pendingNickname: s,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return u
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return N
                }
            }
            C.displayName = "GuildIdentitySettingsStore";
            var R = new C(_.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    u = e.guild, I = f.FormStates.OPEN, S = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: T,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    h(), T()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    u = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    I = f.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== f.FormStates.SUBMITTING) return !1;
                    I = f.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    I = f.FormStates.OPEN, S = e.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    i = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(e) {
                    let {
                        nickname: t
                    } = e;
                    s = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: A,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: h,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: h,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    N = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("479756"),
                o = n("38654"),
                s = n("9294"),
                a = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let E = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    l = d.default.getCurrentUser(),
                    o = !a.default.isMember(e, null == l ? void 0 : l.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: o,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: l
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: l.version,
                            description: l.description,
                            formFields: l.form_fields,
                            guild: l.guild
                        }
                    }), l
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, _ = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, f = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            description: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: l
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: l.version,
                        description: l.description,
                        formFields: l.form_fields
                    }
                })
            }, I = async (e, t) => {
                await i.default.patch({
                    url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                    body: {
                        enabled: t
                    },
                    oldFormErrors: !0
                })
            }, S = async (e, t) => {
                if (o.default.isFullServerPreview(e)) {
                    (0, l.updateImpersonatedData)(e, {
                        memberOptions: {
                            isPending: !1
                        }
                    });
                    return
                }
                try {
                    let n = await i.default.put({
                            url: c.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e),
                            body: {
                                version: t.version,
                                form_fields: t.formFields
                            }
                        }),
                        {
                            body: l
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: l
                    }), l
                } catch (e) {
                    throw e
                }
            };
            var N = {
                fetchVerificationForm: E,
                updateVerificationForm: _,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: S
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return l
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MAX_FORM_ELEMENTS: function() {
                    return s
                },
                MAX_NUM_RULES: function() {
                    return a
                },
                MAX_RULE_LENGTH: function() {
                    return u
                },
                MAX_QUESTION_LENGTH: function() {
                    return d
                },
                MAX_NUM_CHOICES: function() {
                    return c
                },
                MAX_CHOICE_LENGTH: function() {
                    return E
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return _
                },
                MAX_PARAGRAPH_RESPONSE_LENGTH: function() {
                    return f
                },
                MAX_DESCRIPTION_LENGTH: function() {
                    return I
                },
                MEMBER_VERIFICATION_TYPE: function() {
                    return S
                },
                IN_APP_MEMBER_VERIFICATION_MODAL_KEY: function() {
                    return N
                }
            }), n("222007");
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let l = new Set([r.VerificationFormFieldTypes.TERMS]),
                o = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                a = 16,
                u = 300,
                d = 300,
                c = 8,
                E = 150,
                _ = 150,
                f = 1e3,
                I = 300,
                S = "Membership Gating",
                N = "in-app-member-verification";
            (i || (i = {})).VERIFICATION_INFO = "VERIFICATION_INFO"
        },
        233322: function(e, t, n) {
            "use strict";
            let i;
            n.r(t), n.d(t, {
                openMemberVerificationModal: function() {
                    return r
                }
            }), i = n("453265").default;
            let r = i.openMemberVerificationModal;
            i.closeMemberVerificationModal
        },
        347977: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return s
                },
                setHasUnsubmittedChanges: function() {
                    return a
                },
                setShowWarning: function() {
                    return u
                }
            });
            var i = n("308503"),
                r = n("659500"),
                l = n("49111");
            let o = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => o),
                a = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(l.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("599110"),
                o = n("50926"),
                s = n("347977"),
                a = n("394294"),
                u = n("49111");
            let d = () => {
                    l.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    l.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var E = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let l = async t => {
                        await o.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: l,
                            onClose: function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                if (!e) {
                                    if (s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges) {
                                        (0, s.setShowWarning)(!0);
                                        return
                                    }
                                    d()
                                }
                                n.onClose()
                            }
                        })
                    }, {
                        modalKey: a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY,
                        onCloseRequest: () => {
                            d(), s.useMemberVerificationFormNoticeStore.getState().hasUnsubmittedChanges ? (0, s.setShowWarning)(!0) : (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                        },
                        onCloseCallback: t
                    })
                },
                closeMemberVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    !e && d(), (0, r.closeModal)(a.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
                }
            }
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return o
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return s
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return a
                }
            });
            var i = n("316693"),
                r = n("923510"),
                l = n("49111");
            let o = l.Permissions.VIEW_CHANNEL,
                s = i.default.combine(o, l.Permissions.CONNECT),
                a = i.default.combine(o, r.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        533613: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (r = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", r.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", r.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", r.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", r.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", r.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", r.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", r.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", r.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", r.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", r.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", r.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", r.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", r.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", r.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", r.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", r.HUB_NEW = "HUB_NEW", r.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", r.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", r.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", r.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", r.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", r.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", r.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", r.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", r.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", r.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", r.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", r.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", r.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", r.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", r.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", r.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", r.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", r.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", r.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", r.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", r.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", r.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        597517: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                hideHotspot: function() {
                    return o
                },
                setHotspotOverride: function() {
                    return s
                },
                clearHotspotOverride: function() {
                    return a
                }
            });
            var i = n("913144"),
                r = n("599110"),
                l = n("49111");

            function o(e) {
                r.default.track(l.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), i.default.wait(() => {
                    i.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function s(e, t) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144"),
                l = n("197881"),
                o = n("492397");
            let s = new Set,
                a = {};
            class u extends i.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (s = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (a = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = !t && a[e];
                    return !(o.CONFERENCE_MODE_ENABLED || l.ProcessArgs.isDisallowPopupsSet()) && (n || !s.has(e))
                }
                hasHiddenHotspot(e) {
                    return s.has(e)
                }
                getHotspotOverride(e) {
                    return a[e]
                }
                getState() {
                    return {
                        hiddenHotspots: s,
                        hotspotOverrides: a
                    }
                }
            }
            u.displayName = "HotspotStore", u.persistKey = "hotspots", u.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var d = new u(r.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    s = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (s.has(t)) return !1;
                    s.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: n
                    } = e;
                    a[t] = n
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == a[t]) return !1;
                    delete a[t]
                }
            })
        },
        139321: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HotspotStore: function() {
                    return l.default
                }
            });
            var i = n("533613");
            n.es(i, t);
            var r = n("597517");
            n.es(r, t);
            var l = n("269596")
        },
        479756: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startImpersonating: function() {
                    return T
                },
                updateImpersonating: function() {
                    return h
                },
                stopImpersonating: function() {
                    return p
                },
                updateImpersonatedChannels: function() {
                    return C
                },
                updateImpersonatedRoles: function() {
                    return R
                },
                updateImpersonatedData: function() {
                    return L
                }
            }), n("222007");
            var i = n("913144"),
                r = n("716241"),
                l = n("393414"),
                o = n("42203"),
                s = n("923959"),
                a = n("26989"),
                u = n("305961"),
                d = n("957255"),
                c = n("18494"),
                E = n("282109"),
                _ = n("599110"),
                f = n("38654"),
                I = n("507950"),
                S = n("49111"),
                N = n("724210");

            function T(e, t) {
                _.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(t.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: t.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: t
                }), A(e)
            }

            function h(e, t) {
                let n = f.default.getData(e);
                null != n && n.type === t.type && (_.default.track(S.AnalyticEvents.VIEW_AS_ROLES_SELECTED, {
                    num_roles: Object.keys(n.roles).length,
                    ...(0, r.collectGuildAnalyticsMetadata)(e),
                    is_viewing_as_member: n.type === I.ImpersonateType.NEW_MEMBER
                }), i.default.dispatch({
                    type: "IMPERSONATE_UPDATE",
                    guildId: e,
                    data: {
                        ...n,
                        ...t
                    }
                }), A(e))
            }

            function p(e) {
                i.default.dispatch({
                    type: "IMPERSONATE_STOP",
                    guildId: e
                })
            }

            function A(e) {
                let t = c.default.getChannelId(e),
                    n = o.default.getChannel(t),
                    i = null != t && (0, N.isStaticChannelRoute)(t);
                if (!i && !d.default.can(S.Permissions.VIEW_CHANNEL, n)) {
                    let t = s.default.getDefaultChannel(e);
                    null != t && (0, l.transitionTo)(S.Routes.CHANNEL(e, t.id))
                }
            }

            function C(e, t, n) {
                let i = new Set(E.default.getOptedInChannels(e));
                t.forEach(e => i.add(e)), n.forEach(e => i.delete(e)), h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    optInChannels: i
                })
            }

            function R(e, t) {
                let n = u.default.getGuild(e);
                if (null == n) return;
                ! function(e, t) {
                    let n = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                        i = Array.from(t);
                    s.default.addConditionalChangeListener(() => {
                        let t = a.default.getSelfMember(e);
                        if (null == t) return !1;
                        if (i.some(e => !t.roles.includes(e))) return !0;
                        let r = [...s.default.getSelectableChannelIds(e), ...s.default.getVocalChannelIds(e)],
                            l = r.filter(e => !n.includes(e));
                        return l.length > 0 && C(e, l, []), !1
                    })
                }(e, t);
                let i = {};
                t.forEach(e => i[e] = n.roles[e]), h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    roles: i
                })
            }

            function L(e, t) {
                h(e, {
                    type: I.ImpersonateType.NEW_MEMBER,
                    ...t
                })
            }
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return o
                },
                generateInviteKeyFromExtraData: function() {
                    return s
                },
                parseExtraDataFromInviteKey: function() {
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var i = n("522632"),
                r = n("833858");
            let l = "event";

            function o(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[l])
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
                return null == n ? t : "".concat(t, "?").concat(l, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let o = i.parse(n),
                    s = (0, r.getFirstQueryStringValue)(o[l]);
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
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return _
                }
            });
            var i = n("65597"),
                r = n("862205"),
                l = n("697218"),
                o = n("719923"),
                s = n("782340");
            let a = (0, r.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1,
                        autoUnfurlReactionTooltip: !1,
                        collectOffOverride: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 6,
                        label: "Non-nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 7,
                        label: "Nitro same as bucket 4 + auto-unfurl reactions",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0,
                            autoUnfurlReactionTooltip: !0,
                            collectOffOverride: !1
                        }
                    }, {
                        id: 8,
                        label: "Collection off everywhere",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1,
                            autoUnfurlReactionTooltip: !1,
                            collectOffOverride: !0
                        }
                    }]
                }),
                u = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: r,
                        mobileAndFreemiumCollectEnabled: l,
                        autoUnfurlReactionTooltip: s,
                        collectOffOverride: a
                    } = n, u = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: l,
                        collectEnabled: !a && (u ? i : l),
                        autoUnfurlReactionTooltip: s
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : u({
                        user: t,
                        config: a.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, r = (0, i.default)([l.default], () => l.default.getCurrentUser()), o = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: E
                    } = u({
                        user: r,
                        config: o
                    }), _ = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: _,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: E
                    }
                },
                E = (0, r.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescriptionLine1: () => null,
                        getNewSettingsDescriptionLine2: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => null,
                            getNewSettingsDescriptionLine2: () => null
                        }
                    }, {
                        id: 4,
                        label: "Show settings toggle, allow collection for guild setting, and show rollback admin coachmark",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescriptionLine1: () => s.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => s.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                _ = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescriptionLine1: n.getNewSettingsDescriptionLine1,
                        getNewSettingsDescriptionLine2: n.getNewSettingsDescriptionLine2
                    }
                }
        },
        153498: function(e, t, n) {
            "use strict";

            function i(e) {
                let {} = e;
                return !1
            }

            function r(e, t) {
                return !1
            }

            function l(e) {
                return !1
            }

            function o() {
                return !1
            }

            function s() {
                return !1
            }

            function a(e) {
                let {} = e;
                return !1
            }

            function u(e, t) {
                return !1
            }

            function d() {
                return !1
            }

            function c(e) {}

            function E(e) {}

            function _(e) {}

            function f(e) {
                return !1
            }
            n.r(t), n.d(t, {
                navigateToChannel: function() {
                    return i
                },
                navigateToMemberVerification: function() {
                    return r
                },
                navigateToRootTab: function() {
                    return l
                },
                resetToAuthRoute: function() {
                    return o
                },
                resetToPanelsUI: function() {
                    return s
                },
                pushModal: function() {
                    return a
                },
                popModal: function() {
                    return u
                },
                popAllModals: function() {
                    return d
                },
                coerceChannelRoute: function() {
                    return c
                },
                coerceGuildsRoute: function() {
                    return E
                },
                coerceModalRoute: function() {
                    return _
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
                    return o
                },
                isAnimatedImageUrl: function() {
                    return a
                },
                isVideoUrl: function() {
                    return d
                },
                isVideoFile: function() {
                    return c
                }
            }), n("222007");
            var i = n("773336");
            let r = (e, t) => {
                    if (null == e) return !1;
                    let [n, i] = e.split(/\?/, 1);
                    return t.test(n)
                },
                l = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                o = e => null != e && l.test(e),
                s = /\.(webp|gif)$/i,
                a = e => r(e, s),
                u = (0, i.isIOS)() ? /\.(mp4|mov)$/i : ((0, i.isAndroid)(), /\.(mp4|webm|mov)$/i),
                d = e => r(e, u),
                c = e => null != e && u.test(e)
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            }), n("222007"), n("424973");
            var i = n("615361"),
                r = n("872717"),
                l = n("773336"),
                o = n("827032"),
                s = n("49111");
            let a = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var u = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: r
                        } = e,
                        s = {
                            name: n,
                            tags: (0, o.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        s.tags.push(e)
                    });
                    let u = function() {
                        if ((0, l.isWeb)()) return "web";
                        {
                            let e = (0, l.getPlatformName)();
                            return a.has(e) ? e : null
                        }
                    }();
                    null != u && s.tags.push("platform:".concat(u));
                    let d = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return i.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != d && s.tags.push("release_channel:".concat(d)), this._metrics.push(s), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        r.default.post({
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
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                },
                PaymentPortalBody: function() {
                    return I
                },
                PaymentPortalFooter: function() {
                    return S
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("627445"),
                a = n.n(s),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                E = n("642906"),
                _ = n("990893");

            function f(e) {
                var t, n, l, s, u, d;
                let {
                    header: f,
                    isLargeModal: I,
                    stepProps: S
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: N,
                    stepConfigs: T,
                    setBodyNode: h,
                    setFooterNode: p,
                    setModalOverlayNode: A,
                    setReadySlideId: C
                } = (0, E.usePaymentContext)(), R = T.find(e => e.key === N);
                r.useEffect(() => {
                    A(null)
                }, [N, A]), a(null != R, "Unknown step for current payment flow.");
                let L = null !== (u = null == R ? void 0 : null === (t = R.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    v = null == R ? void 0 : null === (n = R.options) || void 0 === n ? void 0 : n.bodyClassName,
                    g = void 0 !== I && I ? _.sliderBodyLarge : null == R ? void 0 : null === (l = R.options) || void 0 === l ? void 0 : l.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == R ? void 0 : null === (s = R.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? f : null, R.renderStep(S), null == N || L ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: o(_.body, v),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => C(e),
                                children: T.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: o(_.sliderBody, g),
                                        ref: e => h(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => p(e)
                        }), (0, i.jsx)("div", {
                            ref: e => A(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function S(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                id: "2023-06_reduced_payment_method_address_info",
                label: "Reduced Payment Method Address Info",
                kind: "user",
                defaultConfig: {
                    bucket: 0,
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Simplify address form",
                    config: {
                        bucket: 1,
                        enabled: !0
                    }
                }, {
                    id: 2,
                    label: "Partial address in card form",
                    config: {
                        bucket: 2,
                        enabled: !0
                    }
                }]
            });

            function l() {
                let {
                    autoTrackExposure: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    autoTrackExposure: !0
                }, t = r.getCurrentConfig({
                    location: "2b69fe_1"
                }, {
                    autoTrackExposure: e
                });
                return t
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("748820"),
                l = n("77078"),
                o = n("112679"),
                s = n("55689"),
                a = n("676379"),
                u = n("697218"),
                d = n("599110"),
                c = n("659500"),
                E = n("719923"),
                _ = n("49111"),
                f = n("646718");

            function I(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: I,
                    onClose: S,
                    onComplete: N,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: h,
                    analyticsObject: p,
                    analyticsLocation: A,
                    analyticsSourceLocation: C,
                    isGift: R = !1,
                    giftMessage: L,
                    subscriptionTier: v,
                    trialId: g,
                    postSuccessGuild: m,
                    openInvoiceId: O,
                    applicationId: D,
                    referralTrialOfferId: U,
                    giftRecipient: P,
                    returnRef: M,
                    subscription: y
                } = null != e ? e : {}, G = !1, b = (0, r.v4)(), x = u.default.getCurrentUser(), w = (0, E.isPremiumExactly)(x, f.PremiumTypes.TIER_2);
                (0, l.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...l
                        } = n;
                        return (0, i.jsx)(e, {
                            ...l,
                            loadId: b,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: R,
                            giftMessage: L,
                            giftRecipient: P,
                            initialPlanId: t,
                            followupSKUInfo: I,
                            onClose: (e, t) => {
                                r(), null == S || S(e), e && (null == T || T(), !R && null != t && t === f.PremiumSubscriptionSKUs.TIER_2 && !w && c.ComponentDispatch.dispatch(_.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                G = !0, null == N || N(), !R && (0, a.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: h,
                            analyticsObject: p,
                            analyticsLocation: A,
                            analyticsSourceLocation: C,
                            trialId: g,
                            postSuccessGuild: m,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: O,
                            applicationId: D,
                            referralTrialOfferId: U,
                            returnRef: M,
                            subscription: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !G && d.default.track(_.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: b,
                            payment_type: _.PurchaseTypeToAnalyticsPaymentType[_.PurchaseTypes.SUBSCRIPTION],
                            location: null != A ? A : p,
                            source: C,
                            subscription_type: _.SubscriptionTypes.PREMIUM,
                            is_gift: R,
                            eligible_for_trial: null != g,
                            application_id: D,
                            location_stack: h
                        }), (0, o.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == S || S(G), G && (null == T || T())
                    },
                    onCloseRequest: _.NOOP
                })
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return I
                },
                getManageResourcePermissions: function() {
                    return S
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return N
                },
                useShouldShowInventoryGuildSettingsCoachmark: function() {
                    return T
                }
            }), n("222007");
            var i = n("884691"),
                r = n("316693"),
                l = n("446674"),
                o = n("252931"),
                s = n("813006");
            n("923959");
            var a = n("957255"),
                u = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("843455");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                _ = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var r;
                        return i && null != t && (null === (r = e.user) || void 0 === r ? void 0 : r.id) === t.id
                    }
                    return !1
                },
                f = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [r.default.combine(t, c.Permissions.CREATE_EVENTS), r.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                I = e => {
                    let [t, n] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(e), [r, o, d, I] = (0, l.useStateFromStoresArray)([a.default], () => [a.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), a.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), a.default.can(t, e), a.default.can(n, e)]), S = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), N = i.useCallback(e => _(e, S, o, r), [r, o, S]), T = i.useCallback(e => _(e, S, I, d), [I, d, S]);
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: o,
                        canManageAllEvents: I,
                        canManageGuildExpression: N,
                        canManageGuildEvent: T
                    }
                },
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.default,
                        [i, r] = e instanceof s.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : f(e),
                        l = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        o = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(i, e),
                        I = t.can(r, e),
                        S = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: o,
                        canManageAllEvents: I,
                        canManageGuildExpression: e => _(e, S, o, l),
                        canManageGuildEvent: e => _(e, S, I, d)
                    }
                },
                N = e => {
                    let t = (0, l.useStateFromStores)([a.default], () => a.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, o.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n
                },
                T = e => {
                    let t = (0, l.useStateFromStores)([a.default], () => a.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n,
                            getNewSettingsDescriptionLine1: i
                        } = (0, o.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && null != n && null != i()
                }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return r
                }
            });
            var i = n("913144");
            let r = e => {
                i.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return f
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return N
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("872717"),
                o = n("913144"),
                s = n("775433"),
                a = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                _ = n("49111");
            let f = "nonSubscriber";
            async function I() {
                try {
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [f]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : o.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), r = a.default.getCurrentUser();
                T(r, i, t, n)
            }

            function N(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), o = (0, r.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    T(o, l, t, n)
                }, [o, l, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), i && (!u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                o = l;
            class s extends i.default.Store {
                initialize() {
                    o = l
                }
                getState() {
                    return o
                }
                shouldFetchPremiumLikelihood() {
                    return !o.isFetching && !o.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var a = new s(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    o.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    o.premiumLikelihood = t, o.fetched = !0, o.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    o.isFetching = !1
                },
                LOGOUT: function() {
                    o.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = r
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return a
                },
                setNewPendingUserBio: function() {
                    return u
                },
                setNewPendingAvatar: function() {
                    return d
                },
                setNewPendingAvatarDecoration: function() {
                    return c
                },
                setNewPendingProfileEffectId: function() {
                    return E
                },
                getProfilePreviewField: function() {
                    return _
                },
                showRemoveAvatar: function() {
                    return f
                },
                showRemoveBanner: function() {
                    return I
                }
            }), n("424973");
            var i = n("884691"),
                r = n("152584"),
                l = n("234251"),
                o = n("783142"),
                s = n("26989");

            function a(e) {
                return i.useMemo(() => {
                    let t = s.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let l = t[r],
                            o = null === (i = l[e]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, o.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, l.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function E(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectId)(void 0);
                    return
                }(0, r.setPendingProfileEffectId)(e)
            }

            function _(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: i ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: i
                };
                return null != t && "" !== t ? {
                    value: t,
                    isUsingGuildValue: !0
                } : {
                    value: n,
                    isUsingGuildValue: !1
                }
            }

            function f(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function I(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                r = n("79112"),
                l = n("685665"),
                o = n("929423");
            n("424562");
            var s = n("49111"),
                a = n("397336");

            function u(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, l.default)(), _ = (0, i.useCallback)(() => {
                    null != t && (0, o.initGuildIdentitySettings)(t, null != d ? d : E), r.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, u, d, c, E]);
                return _
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return o
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var i, r, l = n("773336");
            let o = null;

            function s() {
                return (0, l.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        846325: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MAX_LENGTH_SOUND_NAME: function() {
                    return l
                },
                MAX_SOUND_LENGTH_SECONDS: function() {
                    return o
                },
                DEFAULT_SOUND_GUILD_ID: function() {
                    return s
                },
                SoundboardWheelSize: function() {
                    return a
                },
                DEFAULT_KEYBIND: function() {
                    return u
                },
                EMPTY_SOUND_LIST: function() {
                    return d
                },
                CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID: function() {
                    return c
                },
                NUM_RECENTLY_HEARD_SOUNDS: function() {
                    return E
                },
                NUM_FREQUENTLY_USED_SOUNDS: function() {
                    return _
                }
            }), n("222007");
            let l = 32,
                o = 5,
                s = "DEFAULT";
            (r = i || (i = {}))[r.SUCCESS = 0] = "SUCCESS", r[r.INTERRUPTED = 1] = "INTERRUPTED";
            let a = {
                    width: 424,
                    height: 424,
                    padding: 100
                },
                u = "ctrl+`",
                d = [],
                c = "0",
                E = 6,
                _ = 6
        },
        235004: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            }), n("222007"), n("424973"), n("834022");
            var i, r, l = n("917351"),
                o = n.n(l),
                s = n("446674"),
                a = n("913144"),
                u = n("845579"),
                d = n("374363"),
                c = n("697218"),
                E = n("599110"),
                _ = n("829536"),
                f = n("846325"),
                I = n("49111"),
                S = n("397336");
            (r = i || (i = {}))[r.NOT_FETCHED = 0] = "NOT_FETCHED", r[r.FETCHING = 1] = "FETCHING", r[r.FETCHED = 2] = "FETCHED";
            let N = new Map,
                T = new Map,
                h = new Set,
                p = 0,
                A = 0,
                C = new Set,
                R = new Map,
                L = !1;

            function v(e) {
                let {
                    sound: t
                } = e, n = N.get(t.guildId), i = null == n ? void 0 : n.findIndex(e => e.soundId === t.soundId);
                null != n && null != i && -1 !== i ? (n[i] = t, N.set(t.guildId, [...n])) : null != n && (null == n || n.push(t), N.set(t.guildId, [...n]))
            }
            let g = o.debounce(e => {
                E.default.track(I.AnalyticEvents.UPDATE_SOUNDBOARD_SETTINGS, {
                    volume: Math.round((0, _.amplitudeToPerceptual)(e))
                }), u.SoundboardSettings.updateSetting({
                    volume: e
                })
            }, 1e3);

            function m(e) {
                var t, n;
                let i = null !== (n = null == e ? void 0 : null === (t = e.audioContextSettings) || void 0 === t ? void 0 : t.user) && void 0 !== n ? n : {};
                for (let [e, t] of Object.entries(i)) t.soundboardMuted ? h.add(e) : h.delete(e);
                for (let e of h.keys()) null == i[e] && h.delete(e)
            }
            class O extends s.default.Store {
                initialize() {
                    this.waitFor(d.default), m(d.default.settings)
                }
                getOverlaySerializedState() {
                    return {
                        soundboardSounds: Object.fromEntries(N),
                        favoritedSoundIds: Array.from(C),
                        localSoundboardMutes: Array.from(h)
                    }
                }
                getSounds() {
                    return N
                }
                getSoundsForGuild(e) {
                    return N.get(e)
                }
                getSound(e, t) {
                    var n;
                    let i = null !== (n = N.get(e)) && void 0 !== n ? n : [];
                    return i.find(e => e.soundId === t)
                }
                getSoundById(e) {
                    let t = Array.from(N.values()).flat();
                    return t.find(t => t.soundId === e)
                }
                isFetchingSounds() {
                    return 1 === A
                }
                isFetchingDefaultSounds() {
                    return 1 === p
                }
                isFetching() {
                    return this.isFetchingSounds() || this.isFetchingDefaultSounds()
                }
                shouldFetchDefaultSounds() {
                    return 0 === p
                }
                hasFetchedDefaultSounds() {
                    return 2 === p
                }
                isUserPlayingSounds(e) {
                    let t = R.get(e);
                    return null != t && t > 0
                }
                isPlayingSound(e) {
                    return null != T.get(e)
                }
                isFavoriteSound(e) {
                    return C.has(e)
                }
                getFavorites() {
                    return C
                }
                isLocalSoundboardMuted(e) {
                    return h.has(e)
                }
                hasHadOtherUserPlaySoundInSession() {
                    return L
                }
                hasFetchedAllSounds() {
                    return 2 === A && 2 === p
                }
            }
            O.displayName = "SoundboardStore";
            var D = new O(a.default, {
                LOGOUT: function() {
                    N.clear(), T.clear(), R.clear(), L = !1, A = 0, p = 0
                },
                GUILD_SOUNDBOARD_FETCH: function() {
                    A = 1
                },
                GUILD_SOUNDBOARD_SOUND_CREATE: v,
                GUILD_SOUNDBOARD_SOUND_UPDATE: v,
                GUILD_SOUNDBOARD_SOUND_DELETE: function(e) {
                    let {
                        soundId: t,
                        guildId: n
                    } = e;
                    N.delete(t);
                    let i = N.get(n),
                        r = null == i ? void 0 : i.findIndex(e => e.soundId === t);
                    null != i && null != r && !(r < 0) && (i.splice(r, 1), N.set(n, [...i]))
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
                    var t, n, i;
                    let {
                        soundId: r,
                        userId: l
                    } = e, o = (null !== (n = T.get(r)) && void 0 !== n ? n : 0) + 1, s = (null !== (i = R.get(l)) && void 0 !== i ? i : 0) + 1;
                    T.set(r, o), R.set(l, s), l !== (null === (t = c.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) && (L = !0)
                },
                GUILD_SOUNDBOARD_SOUND_PLAY_END: function(e) {
                    var t, n;
                    let {
                        soundId: i,
                        userId: r
                    } = e, l = (null !== (t = T.get(i)) && void 0 !== t ? t : 0) - 1, o = (null !== (n = R.get(r)) && void 0 !== n ? n : 0) - 1;
                    l <= 0 ? T.delete(i) : T.set(i, l), o <= 0 ? R.delete(r) : R.set(r, o)
                },
                USER_SOUNDBOARD_SET_VOLUME: function(e) {
                    let {
                        volume: t
                    } = e;
                    g(t)
                },
                VOICE_CHANNEL_SELECT: function() {
                    T.clear(), R.clear()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: t
                    } = e, {
                        type: n,
                        proto: i
                    } = t;
                    if (n === S.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS) {
                        var r, l;
                        C = new Set(null !== (l = null == i ? void 0 : null === (r = i.favoriteSoundboardSounds) || void 0 === r ? void 0 : r.soundIds) && void 0 !== l ? l : [])
                    } else n === S.UserSettingsTypes.PRELOADED_USER_SETTINGS && m(i)
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS: function() {
                    p = 1
                },
                SOUNDBOARD_FETCH_DEFAULT_SOUNDS_SUCCESS: function(e) {
                    let {
                        soundboardSounds: t
                    } = e;
                    N.set(f.DEFAULT_SOUND_GUILD_ID, t), p = 2
                },
                SOUNDBOARD_SOUNDS_RECEIVED: function(e) {
                    let {
                        updates: t
                    } = e;
                    t.forEach(e => {
                        let {
                            guildId: t,
                            sounds: n
                        } = e;
                        N.set(t, n)
                    }), A = 2
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    N.delete(t.id)
                },
                AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: function(e) {
                    let {
                        userId: t
                    } = e;
                    h.has(t) ? h.delete(t) : h.add(t)
                },
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        soundboardStoreState: t
                    } = e;
                    N = new Map(Object.entries(t.soundboardSounds)), C = new Set(t.favoritedSoundIds), h = new Set(t.localSoundboardMutes)
                },
                GUILD_SOUNDBOARD_SOUNDS_UPDATE: function(e) {
                    let {
                        guildId: t,
                        soundboardSounds: n
                    } = e;
                    N.set(t, n)
                }
            })
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("49111");

            function r(e) {
                let {
                    CDN_HOST: t,
                    PROJECT_ENV: n
                } = window.GLOBAL_ENV;
                return "development" !== n ? "".concat(location.protocol, "//").concat(t).concat(i.Endpoints.SOUNDBOARD_SOUND(e)) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT).concat(i.Endpoints.SOUNDBOARD_SOUND(e))
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return r
                },
                getStickerSendability: function() {
                    return u
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, r, l = n("991170"),
                o = n("719923"),
                s = n("24373"),
                a = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let i = o.default.canUseCustomStickersEverywhere(t);
                    if ((0, s.isStandardSticker)(e)) return 0;
                    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || l.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === u(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("424973");
            var i = n("917351"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                s = n("80507"),
                a = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let _ = new s.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                f = () => {
                    u.default.isLoaded && _.compute()
                },
                I = () => {
                    f()
                };

            function S() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                _.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class N extends l.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (E = e), this.syncWith([u.default], I), this.syncWith([a.default], S)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return _
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var T = new N(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        _.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), f()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return _
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return I
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return N
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingAccentColor: function() {
                    return h
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return A
                },
                setTryItOutAvatarDecoration: function() {
                    return C
                },
                setTryItOutBanner: function() {
                    return R
                },
                setTryItOutThemeColors: function() {
                    return L
                }
            });
            var i = n("872717"),
                r = n("913144"),
                l = n("448993"),
                o = n("884351"),
                s = n("845579"),
                a = n("697218"),
                u = n("599110"),
                d = n("49111"),
                c = n("646718");

            function E(e) {
                u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function _(e, t) {
                var n, u;
                let c = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let E = s.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = o.default.parse(void 0, e.bio).content);
                try {
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await i.default.patch({
                        url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new l.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new l.APIError(t);
                    r.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function f() {
                r.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function I() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), E(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), E(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function L(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        805828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                WELCOME_SCREEN_TYPE: function() {
                    return i
                },
                WELCOME_EMOJI_TOOLTIP_STORAGE_KEY: function() {
                    return r
                }
            });
            let i = "Guild Welcome Screen",
                r = "hasClickedWelcomeEmojiPicker"
        },
        277432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007"), n("424973");
            var i = n("37983"),
                r = n("884691"),
                l = n("446674"),
                o = n("95410"),
                s = n("77078"),
                a = n("430568"),
                u = n("901582"),
                d = n("679653"),
                c = n("419830"),
                E = n("86678"),
                _ = n("145106"),
                f = n("385976"),
                I = n("42203"),
                S = n("923959"),
                N = n("27618"),
                T = n("697218"),
                h = n("882641"),
                p = n("145131"),
                A = n("476765"),
                C = n("593195"),
                R = n("991170"),
                L = n("59811"),
                v = n("310457"),
                g = n("805828"),
                m = n("49111"),
                O = n("958706"),
                D = n("782340"),
                U = n("306978"),
                P = e => {
                    var t, n;
                    let {
                        guildId: P,
                        welcomeChannel: M,
                        transitionState: y,
                        onSave: G,
                        onClose: b
                    } = e, x = (0, A.useUID)(), [w, F] = r.useState(null != M ? M.channel_id : null), [V, B] = r.useState(null != M ? M.description : ""), [H, j] = r.useState(null != M ? {
                        id: M.emoji_id,
                        name: M.emoji_name
                    } : null), [k, W] = r.useState(!1), Y = (0, l.useStateFromStores)([f.default], () => (null == H ? void 0 : H.id) != null ? f.default.getUsableCustomEmojiById(H.id) : null), K = (0, l.useStateFromStores)([S.default], () => S.default.getChannels(P)[S.GUILD_SELECTABLE_CHANNELS_KEY], [P]), Z = (0, l.useStateFromStores)([L.default], () => L.default.get(P)), z = null !== (n = null == Z ? void 0 : null === (t = Z.welcome_channels) || void 0 === t ? void 0 : t.map(e => e.channel_id)) && void 0 !== n ? n : [], [X, q] = r.useState(!1);
                    r.useEffect(() => {
                        !o.default.get(g.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY) && setTimeout(() => q(!0), 300)
                    }, []);
                    let Q = [];
                    K.forEach(e => {
                        let {
                            channel: t
                        } = e;
                        R.default.canEveryoneRole(m.Permissions.VIEW_CHANNEL, t) && ((null == M ? void 0 : M.channel_id) === t.id || !z.includes(t.id)) && Q.push({
                            value: t.id,
                            label: (0, d.computeChannelName)(t, T.default, N.default)
                        })
                    });
                    let J = () => {
                            q(!1), b()
                        },
                        $ = r.useCallback(e => B(e), []),
                        ee = e => {
                            var t, n, i;
                            if (null == e) {
                                j(null);
                                return
                            }
                            j(null != e.id ? {
                                id: null !== (t = e.id) && void 0 !== t ? t : null,
                                name: null !== (n = e.name) && void 0 !== n ? n : null
                            } : {
                                id: null,
                                name: null !== (i = e.optionallyDiverseSequence) && void 0 !== i ? i : null
                            })
                        },
                        et = r.useCallback(() => {
                            o.default.set(g.WELCOME_EMOJI_TOOLTIP_STORAGE_KEY, !0), q(!1)
                        }, []);
                    return (0, i.jsx)(u.default, {
                        page: m.AnalyticsPages.CHANNEL_WELCOME_CREATE_MODAL,
                        children: (0, i.jsxs)(s.ModalRoot, {
                            transitionState: y,
                            "aria-labelledby": x,
                            children: [(0, i.jsxs)("div", {
                                className: U.modalContents,
                                children: [(0, i.jsx)(s.ModalCloseButton, {
                                    onClick: J,
                                    className: U.closeButton
                                }), (0, i.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: U.headerText,
                                    id: x,
                                    children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SELECT_A_CHANNEL
                                }), (0, i.jsxs)(s.FormSection, {
                                    className: U.formGroup,
                                    children: [(0, i.jsx)(s.SearchableSelect, {
                                        options: Q,
                                        onChange: e => F(e),
                                        value: w,
                                        renderOptionPrefix: e => {
                                            var t;
                                            if (null === e) return null;
                                            let n = e.value,
                                                r = I.default.getChannel(n),
                                                l = null !== (t = (0, c.getChannelIconComponent)(r)) && void 0 !== t ? t : C.default;
                                            return (0, i.jsx)(l, {
                                                className: U.channelTitleIcon,
                                                width: 16,
                                                height: 16
                                            })
                                        }
                                    }), (0, i.jsx)(s.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-muted",
                                        className: U.formDescription,
                                        children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_ONLY_VIEWABLE_CHANNELS
                                    })]
                                }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.Heading, {
                                    variant: "heading-md/semibold",
                                    className: U.headerText,
                                    children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_SET_DESCRIPTION
                                }), (0, i.jsx)(s.FormSection, {
                                    className: U.formGroup,
                                    children: (0, i.jsx)(s.TextInput, {
                                        maxLength: 42,
                                        value: V,
                                        inputClassName: U.input,
                                        placeholder: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_CHANNEL_DESCRIPTION_PLACEHOLDER,
                                        onChange: $
                                    })
                                }), (0, i.jsx)(s.FormDivider, {}), (0, i.jsx)(s.FormSection, {
                                    className: U.formGroup,
                                    children: (0, i.jsxs)("div", {
                                        className: U.emojiSectionContainer,
                                        children: [(0, i.jsxs)("div", {
                                            className: U.emojiTitleContainer,
                                            children: [(0, i.jsx)(s.Heading, {
                                                variant: "heading-md/semibold",
                                                children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI
                                            }), (0, i.jsx)(s.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-muted",
                                                children: D.default.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_PICK_EMOJI_UPSELL
                                            })]
                                        }), (0, i.jsx)(_.default, {
                                            hasSetEmoji: null != H,
                                            onClick: ee,
                                            children: (0, i.jsx)(s.Popout, {
                                                renderPopout: e => {
                                                    let {
                                                        closePopout: t
                                                    } = e, n = S.default.getDefaultChannel(P);
                                                    return (0, i.jsx)(E.default, {
                                                        guildId: P,
                                                        closePopout: t,
                                                        onSelectEmoji: (e, n) => {
                                                            ee(e), n && (t(), null == e && J())
                                                        },
                                                        pickerIntention: O.EmojiIntention.COMMUNITY_CONTENT,
                                                        onNavigateAway: J,
                                                        channel: n
                                                    })
                                                },
                                                position: "left",
                                                animation: s.Popout.Animation.NONE,
                                                align: "bottom",
                                                children: (e, t) => {
                                                    let {
                                                        isShown: n
                                                    } = t;
                                                    return (0, i.jsx)(s.TooltipContainer, {
                                                        color: s.TooltipColors.BRAND,
                                                        tooltipClassName: U.tooltip,
                                                        position: "left",
                                                        text: X ? D.default.Messages.WELCOME_CHANNEL_EMOJI_PICKER_TOOLTIP : null,
                                                        forceOpen: X,
                                                        children: (0, i.jsx)(h.default, {
                                                            ...e,
                                                            onClick: t => {
                                                                var n;
                                                                et(), null === (n = e.onClick) || void 0 === n || n.call(e, t)
                                                            },
                                                            active: n,
                                                            className: U.emojiButton,
                                                            tabIndex: 0,
                                                            renderButtonContents: null != H && (null != H.id || null != H.name) ? () => (0, i.jsx)(a.default, {
                                                                className: U.emoji,
                                                                emojiId: H.id,
                                                                emojiName: H.name,
                                                                animated: !!(null == Y ? void 0 : Y.animated)
                                                            }) : null
                                                        })
                                                    })
                                                }
                                            })
                                        })]
                                    })
                                })]
                            }), (0, i.jsxs)(s.ModalFooter, {
                                className: U.footer,
                                justify: p.default.Justify.BETWEEN,
                                children: [(0, i.jsxs)(p.default, {
                                    grow: 0,
                                    align: p.default.Align.CENTER,
                                    children: [(0, i.jsx)(s.Button, {
                                        onClick: J,
                                        size: s.Button.Sizes.SMALL,
                                        look: s.Button.Looks.LINK,
                                        color: s.Button.Colors.PRIMARY,
                                        children: D.default.Messages.CANCEL
                                    }), (0, i.jsx)(s.Button, {
                                        onClick: () => {
                                            null != w && V.length > 0 && G({
                                                channel_id: w,
                                                description: V,
                                                emoji_id: null == H ? void 0 : H.id,
                                                emoji_name: null == H ? void 0 : H.name
                                            }), J()
                                        },
                                        disabled: null == w || 0 === V.length,
                                        children: D.default.Messages.SAVE
                                    })]
                                }), null != M && (0, i.jsx)(s.Button, {
                                    onClick: () => {
                                        W(!0)
                                    },
                                    size: s.Button.Sizes.MIN,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.RED,
                                    children: D.default.Messages.REMOVE
                                })]
                            }), k && (0, i.jsx)(v.default, {
                                onConfirm: () => {
                                    G(), J()
                                },
                                onCancel: () => W(!1),
                                channelId: w
                            })]
                        })
                    })
                }
        },
        310457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                l = n("77078"),
                o = n("679653"),
                s = n("42203"),
                a = n("782340");

            function u(e) {
                let {
                    onConfirm: t,
                    onCancel: n,
                    channelId: u
                } = e, d = (0, r.useStateFromStores)([s.default], () => null != u ? s.default.getChannel(u) : null), c = (0, o.default)(d, !0);
                return (0, i.jsx)(l.DeclarativeConfirmModal, {
                    dismissable: !0,
                    header: a.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_TITLE,
                    confirmText: a.default.Messages.REMOVE,
                    cancelText: a.default.Messages.CANCEL,
                    onConfirm: t,
                    onCancel: n,
                    children: (0, i.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: null != d ? a.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY.format({
                            channelName: c
                        }) : a.default.Messages.WELCOME_CHANNEL_DELETE_CONFIRM_BODY_GENERIC
                    })
                })
            }
        },
        517763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("702976");
            var i, r = n("866227"),
                l = n.n(r),
                o = n("666038");
            i = class e extends o.default {
                static createFromServer(t) {
                    var n;
                    return new e({
                        ...t,
                        maxUses: t.max_uses,
                        maxAge: t.max_age,
                        createdAt: l(null !== (n = t.created_at) && void 0 !== n ? n : void 0),
                        targetType: t.target_type,
                        targetUser: t.target_user,
                        targetApplication: t.target_application
                    })
                }
                isExpired() {
                    let e = this.maxAge;
                    if (e > 0) {
                        let t = l(this.createdAt);
                        if (t.add(e, "seconds").isBefore(Date.now())) return !0
                    }
                    return !1
                }
                getExpiresAt() {
                    if (this.maxAge > 0) {
                        let e = l(this.createdAt);
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
                    return _
                }
            }), n("702976");
            var i = n("446674"),
                r = n("913144"),
                l = n("9294"),
                o = n("49111");
            let s = {},
                a = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, l.parseExtraDataFromInviteKey)(e),
                    r = s[e],
                    a = null != r ? {
                        state: o.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: o.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(a), s = {
                    ...s,
                    [e]: a
                }, (null === (n = a.guild) || void 0 === n ? void 0 : n.id) != null && (u = {
                    ...u,
                    [a.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? o.InviteStates.BANNED : o.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return s[e]
                }
                getInviteError(e) {
                    return a[e]
                }
                getInvites() {
                    return s
                }
                getInviteKeyForGuildId(e) {
                    return u[e]
                }
            }
            E.displayName = "InviteStore";
            var _ = new E(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, l.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: o.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = o.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = o.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = o.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = o.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, d(e.code, e => {
                        e.state = o.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = o.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("627445"),
                r = n.n(i),
                l = n("446674"),
                o = n("913144"),
                s = n("816454");
            let a = new Map;

            function u(e) {
                let t = a.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends l.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return a.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, s.getMainWindowId)();
                    return u(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(o.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: l
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: l
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = u(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (a.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = u(e.windowId);
                    return t.focused !== e.focused && (a.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = u(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (a.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return a.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
        },
        882641: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EMOJI_BUTTON_SPRING_CONFIG: function() {
                    return f
                },
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("907002"),
                a = n("77078"),
                u = n("913144"),
                d = n("474293"),
                c = n("958706"),
                E = n("782340"),
                _ = n("505436");
            let f = {
                tension: 800,
                friction: 24
            };
            var I = function(e) {
                var t;
                let {
                    tabIndex: n,
                    className: l,
                    renderButtonContents: I,
                    active: S,
                    onClick: N,
                    "aria-controls": T,
                    focusProps: h
                } = e, [p, A] = r.useState(!1), [C, R] = r.useState(50), L = p || S, v = (0, d.getClass)(_, "emojiButton", L ? "Hovered" : "Normal");
                let g = (t = C, {
                        "--custom-emoji-sprite-size": "".concat(24, "px"),
                        "--custom-emoji-sprite-row": Math.floor(t / 20),
                        "--custom-emoji-sprite-col": t % 20
                    }),
                    m = r.useCallback(() => {
                        if (!L) A(!0), R(Math.floor(77 * Math.random())), u.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: c.EmojiInteractionPoint.EmojiButtonMouseEntered
                        })
                    }, [L, A, R]),
                    O = r.useCallback(() => {
                        A(!1)
                    }, [A]),
                    D = r.useCallback(() => {
                        u.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: c.EmojiInteractionPoint.EmojiButtonFocused
                        })
                    }, []);
                return (0, i.jsx)(a.Button, {
                    look: a.Button.Looks.BLANK,
                    size: a.Button.Sizes.NONE,
                    tabIndex: n,
                    className: o(v, l),
                    onMouseEnter: m,
                    onMouseOver: m,
                    onMouseLeave: O,
                    onFocus: D,
                    onClick: N,
                    "aria-label": E.default.Messages.SELECT_EMOJI,
                    "aria-controls": T,
                    "aria-expanded": S,
                    "aria-haspopup": "dialog",
                    focusProps: h,
                    children: null != I ? I() : (0, i.jsx)(s.Spring, {
                        config: f,
                        to: {
                            value: L ? 1 : 0
                        },
                        children: e => {
                            let {
                                value: t
                            } = e;
                            return (0, i.jsxs)(s.animated.div, {
                                className: _.spriteContainer,
                                style: {
                                    ...g,
                                    transform: t.to([0, 1], [1, 1.14]).to(e => "scale(".concat(e, ")"))
                                },
                                children: [(0, i.jsx)("div", {
                                    className: o(_.sprite, _.spriteColored, L ? _.active : _.inactive)
                                }), (0, i.jsx)("div", {
                                    className: o(_.sprite, _.spriteGreyscale, L ? _.inactive : _.active)
                                })]
                            })
                        }
                    })
                })
            }
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("77078"),
                a = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: l,
                    flowerStarClassName: d,
                    ...c
                } = e, E = r.Children.only(t), _ = (0, s.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: o(u.flowerStarContainer, l),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...c,
                        className: o(d, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: o(u.childContainer, {
                            [u.redesignIconChildContainer]: _
                        }),
                        children: E
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("77078"),
                o = n("393414"),
                s = n("49111"),
                a = r.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: a,
                        onClick: u,
                        onKeyPress: d,
                        focusProps: c,
                        ...E
                    } = e, _ = r.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, o.transitionTo)(n), null == u || u()), null == d || d(e))
                    }, [n, d, u]), f = r.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, o.transitionTo)(n), null == u || u())
                    }, [n, u]), I = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: f,
                        onKeyPress: _,
                        ...E,
                        children: a
                    });
                    return (0, i.jsx)(l.FocusRing, {
                        ...c,
                        children: I
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return S
                },
                default: function() {
                    return T
                }
            });
            var i, r, l = n("37983"),
                o = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                E = n("145131"),
                _ = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let f = {
                    default: _.shineDefault,
                    small: _.shineSmall
                },
                I = {
                    default: _.shineInnerDefault,
                    small: _.shineInnerSmall
                };
            class S extends o.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, l.jsx)(u.default.div, {
                        ...i,
                        className: a(_.shineContainer, e, {
                            [_.shinePaused]: n
                        }),
                        children: (0, l.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: f[t],
                            children: (0, l.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            S.defaultProps = {
                shineSize: "default"
            };
            let N = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: s,
                    shineSize: u = "default",
                    shinePaused: E,
                    buttonShineClassName: f,
                    onlyShineOnHover: I,
                    ...N
                } = e, T = o.createRef(), h = (0, c.default)(T), p = !i && !r && !0 !== s && (!I || h);
                return (0, l.jsxs)(d.Button, {
                    buttonRef: T,
                    ...N,
                    className: a(_.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [t, p ? (0, l.jsx)(S, {
                        shinePaused: E,
                        className: a(_.buttonShine, I ? _.onlyShineOnHover : void 0, f),
                        shineSize: u
                    }) : null]
                })
            };
            N.ShineSizes = r;
            var T = N
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");

            function r(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, r = n ? t : 1, l = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: r,
                        minWidth: r,
                        height: l,
                        minHeight: l
                    }
                })
            }
            n("884691")
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return o
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return a
                }
            });
            var i = n("995008"),
                r = n.n(i),
                l = n("775560");
            let o = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                s = () => (0, l.useLazyValue)(() => o()),
                a = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("414456"),
                l = n.n(r),
                o = n("384737"),
                s = n("448052"),
                a = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                E = n("4177");
            let _ = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                f = e => {
                    let {
                        direction: t = _.DOWN,
                        width: n = 24,
                        height: r = 24,
                        color: f = "currentColor",
                        transition: I = E.transition,
                        className: S,
                        foreground: N,
                        expanded: T,
                        ...h
                    } = e, {
                        enabled: p
                    } = (0, d.useRedesignIconContext)(), A = t;
                    if (!0 === T ? A = _.DOWN : !1 === T && (A = _.RIGHT), p) {
                        let e = {
                            [_.UP]: u.ChevronSmallUpIcon,
                            [_.DOWN]: o.ChevronSmallDownIcon,
                            [_.LEFT]: s.ChevronSmallLeftIcon,
                            [_.RIGHT]: a.ChevronSmallRightIcon
                        } [A];
                        return (0, i.jsx)(e, {
                            ...h,
                            className: S,
                            width: n,
                            height: r,
                            color: f,
                            colorClass: N
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: l(S, I, A),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(h),
                        children: (0, i.jsx)("path", {
                            className: N,
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
            f.Directions = _;
            var I = f
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("733154"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, l.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("505088"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        backgroundColor: s,
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, l.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                l = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: l,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        474571: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("197801"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, l.SettingsIcon, void 0, {
                    size: 24
                })
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("998460"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(s),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, l.GiftIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...l
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 104 80",
                    fill: "none",
                    children: [(0, i.jsx)("path", {
                        d: "M95.6718 1.80634C95.6718 0.808724 94.863 0 93.8654 0C92.8678 0 92.0591 0.808724 92.0591 1.80634V3.64278C92.0591 4.64039 92.8678 5.44911 93.8654 5.44911C94.863 5.44911 95.6718 4.64039 95.6718 3.64278V1.80634Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M95.6713 16.3574C95.6713 15.3598 94.8625 14.5511 93.8649 14.5511C92.8673 14.5511 92.0586 15.3598 92.0586 16.3574V18.1939C92.0586 19.1915 92.8673 20.0002 93.8649 20.0002C94.8625 20.0002 95.6713 19.1915 95.6713 18.1939V16.3574Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M102.194 11.8412C103.191 11.8412 104 11.0325 104 10.0349C104 9.03724 103.191 8.22852 102.194 8.22852H100.357C99.3596 8.22852 98.5509 9.03724 98.5509 10.0349C98.5509 11.0325 99.3596 11.8412 100.357 11.8412H102.194Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M87.6434 11.7413C88.641 11.7413 89.4497 10.9325 89.4497 9.93494C89.4497 8.93733 88.641 8.1286 87.6434 8.1286H85.8069C84.8093 8.1286 84.0006 8.93733 84.0006 9.93494C84.0006 10.9325 84.8093 11.7413 85.8069 11.7413H87.6434Z",
                        fill: "#ADF3FF"
                    }), (0, i.jsx)("path", {
                        d: "M11.1501 74.4573L15.3147 73.0684C15.5192 72.9747 15.6925 72.8241 15.814 72.6347C15.9354 72.4454 16 72.225 16 72C16 71.775 15.9354 71.5546 15.814 71.3653C15.6925 71.1759 15.5192 71.0253 15.3147 70.9316L11.1501 69.5427C10.8657 69.4142 10.6378 69.1862 10.5094 68.9016L9.01446 64.7348C8.94423 64.521 8.80835 64.3349 8.62619 64.203C8.44403 64.071 8.22488 64 7.99999 64C7.77511 64 7.55597 64.071 7.37381 64.203C7.19165 64.3349 7.05576 64.521 6.98554 64.7348L5.49057 68.9016C5.36216 69.1862 5.13433 69.4142 4.84986 69.5427L0.685276 70.9316C0.480802 71.0253 0.307523 71.1759 0.186045 71.3653C0.0645662 71.5546 0 71.775 0 72C0 72.225 0.0645662 72.4454 0.186045 72.6347C0.307523 72.8241 0.480802 72.9747 0.685276 73.0684L4.84986 74.4573C5.0011 74.5032 5.1387 74.5858 5.25046 74.6976C5.36222 74.8094 5.44469 74.9471 5.49057 75.0984L6.98554 79.2652C7.05576 79.479 7.19165 79.6651 7.37381 79.797C7.55597 79.929 7.77511 80 7.99999 80C8.22488 80 8.44403 79.929 8.62619 79.797C8.80835 79.6651 8.94423 79.479 9.01446 79.2652L10.5094 75.0984C10.5553 74.9471 10.6378 74.8094 10.7495 74.6976C10.8613 74.5858 10.9989 74.5032 11.1501 74.4573Z",
                        fill: "#FFD01A"
                    })]
                })
            }
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("202909"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: l = "0 0 24 24",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(a),
                        width: t,
                        height: n,
                        viewBox: l,
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, l.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("504318"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: l,
                            fill: r
                        })
                    })
                }, l.PencilIcon, void 0, {
                    size: 16
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("876726"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: l,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, l.PlayIcon, void 0, {
                    size: 16
                })
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("424823"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: l,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, l.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("31745"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: l,
                        foreground: o
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, l.CirclePlusIcon, void 0, {
                    size: 16
                })
        },
        394832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("125094"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        className: l,
                        foreground: o
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: l,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M2 4.5C2 3.397 2.897 2.5 4 2.5H20C21.103 2.5 22 3.397 22 4.5V15.5C22 16.604 21.103 17.5 20 17.5H13V19.5H17V21.5H7V19.5H11V17.5H4C2.897 17.5 2 16.604 2 15.5V4.5ZM13.2 14.3375V11.6C9.864 11.6 7.668 12.6625 6 15C6.672 11.6625 8.532 8.3375 13.2 7.6625V5L18 9.6625L13.2 14.3375Z"
                        })
                    })
                }, l.ScreenArrowIcon, void 0, {
                    size: 24
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("390300"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, l.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("287083"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: r
                        })
                    })
                }, l.StageIcon, void 0, {
                    size: 32
                })
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                l = n("276825"),
                o = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...l
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(l),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, l.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
        },
        708169: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FullScreenLayers: function() {
                    return C
                },
                useFullScreenLayerStore: function() {
                    return T
                },
                openFullScreenLayer: function() {
                    return R
                },
                closeFullScreenLayer: function() {
                    return L
                }
            }), n("222007");
            var i, r, l = n("37983"),
                o = n("884691"),
                s = n("995008"),
                a = n.n(s),
                u = n("324134"),
                d = n("308503"),
                c = n("769846"),
                E = n("77078"),
                _ = n("485328"),
                f = n("159885"),
                I = n("983782"),
                S = n("275495");
            let N = (0, f.cssValueToNumber)(c.default.FULL_SCREEN_LAYER_ANIMATION_DURATION);
            (r = i || (i = {}))[r.ENTERING = 1] = "ENTERING", r[r.ENTERED = 2] = "ENTERED", r[r.EXITING = 3] = "EXITING", r[r.EXITED = 4] = "EXITED";
            let T = (0, d.default)(e => ({
                fullScreenLayers: [],
                addLayer: t => e(e => {
                    let {
                        fullScreenLayers: n
                    } = e;
                    return {
                        fullScreenLayers: [...n, t]
                    }
                })
            }));

            function h(e) {
                let {
                    item: t
                } = e, n = o.useRef(null);
                return (0, E.useFocusLock)(n), o.useEffect(() => (_.default.disable(), _.default.enableTemp(function(e) {
                    return {
                        POP_LAYER: {
                            binds: ["esc"],
                            comboKeysBindGlobal: !0,
                            action() {
                                L(e)
                            }
                        }
                    }
                }(t.key)), () => {
                    _.default.disableTemp()
                }), [t.key]), (0, l.jsx)(t.LayerComponent, {
                    children: (0, l.jsxs)("div", {
                        className: S.root,
                        ref: n,
                        children: [(0, l.jsx)("div", {
                            className: S.drag
                        }), t.render({
                            transitionState: null != t ? t.transitionState : 3,
                            closeLayer: () => L(t.key)
                        })]
                    })
                })
            }
            let p = {
                    enter: S.enter,
                    enterActive: S.enterActive,
                    enterDone: S.enterDone,
                    exit: S.exit,
                    exitActive: S.exitActive,
                    exitDone: S.exitDone
                },
                A = {
                    enter: S.enterReducedMotion,
                    enterActive: S.enterActiveReducedMotion,
                    enterDone: S.enterDoneReducedMotion,
                    exit: S.exitReducedMotion,
                    exitActive: S.exitActiveReducedMotion,
                    exitDone: S.exitDoneReducedMotion
                };

            function C() {
                let {
                    reducedMotion: e
                } = o.useContext(E.AccessibilityPreferencesContext), t = e.enabled, n = t ? A : p, i = T(e => e.fullScreenLayers);
                return (0, l.jsx)(u.TransitionGroup, {
                    children: i.map(e => (0, l.jsx)(u.CSSTransition, {
                        classNames: n,
                        timeout: N,
                        onEntered: () => {
                            T.setState({
                                fullScreenLayers: i.map(t => t.key === e.key ? {
                                    ...t,
                                    transitionState: 2
                                } : t)
                            })
                        },
                        unmountOnExit: !0,
                        children: (0, l.jsx)(h, {
                            item: e
                        })
                    }, e.key))
                })
            }

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
                    {
                        layerKey: n,
                        Layer: i
                    } = t,
                    r = null != n ? n : a();
                return T.setState(t => ({
                    fullScreenLayers: [...t.fullScreenLayers, {
                        key: r,
                        transitionState: 1,
                        LayerComponent: null != i ? i : I.default,
                        render: e
                    }]
                })), r
            }

            function L(e) {
                T.setState(t => ({
                    fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e)
                }))
            }
        },
        811305: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Sizes: function() {
                    return T
                },
                default: function() {
                    return A
                }
            }), n("424973"), n("222007");
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                o = n.n(l),
                s = n("627445"),
                a = n.n(s),
                u = n("77078"),
                d = n("506885"),
                c = n("981601"),
                E = n("766274"),
                _ = n("697218"),
                f = n("368121"),
                I = n("523096"),
                S = n("587974"),
                N = n("494101");
            let T = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function h(e, t) {
                let n = e instanceof E.default ? e : null != e ? e.user : null;
                return null != n ? n.id : "user-".concat(t)
            }
            class p extends r.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: n = this.defaultRenderUser,
                        size: r,
                        extraDetail: l
                    } = this.props, o = [], s = e.length === t ? e.length : t - 1, a = this.renderMoreUsers(s), u = 0;
                    for (; u < s && u < e.length;) {
                        var d;
                        let t = null == a && null == l && u === e.length - 1,
                            s = n(e[u], t, u);
                        o.push(t ? (0, i.jsx)("div", {
                            className: N.avatarContainer,
                            children: s
                        }, h(null !== (d = e[u]) && void 0 !== d ? d : null, u)) : (0, i.jsx)(S.default, {
                            className: N.avatarContainerMasked,
                            height: r,
                            width: r,
                            mask: S.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: s
                        }, h(e[u], u))), u++
                    }
                    return null != l ? o.push(l) : null != a && o.push(a), o
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: n,
                        hideMoreUsers: l,
                        renderMoreUsers: o,
                        users: s
                    } = this.props, a = Math.min(e, s.length);
                    if (!l) {
                        if (null != n) {
                            if (n >= t) return (0, i.jsx)(r.Fragment, {
                                children: o("".concat(t, "+"), t)
                            }, "more-users");
                            if (n > s.length) {
                                let e = n - s.length;
                                return (0, i.jsx)(r.Fragment, {
                                    children: o("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (a < s.length) {
                            let e = Math.min(s.length - a, 99);
                            return (0, i.jsx)(r.Fragment, {
                                children: o("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, i.jsx)(f.default, {
                        foreground: N.foreground,
                        className: N.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: n,
                        guildId: r,
                        showUserPopout: l,
                        useFallbackUserForPopout: s
                    } = this.props, {
                        popoutUserId: E
                    } = this.state, f = n.find(e => null != e && e.id === E), I = s && null == _.default.getUser(E);
                    return (0, i.jsx)(u.Popout, {
                        position: "right",
                        preload: null == f ? void 0 : () => (0, d.default)(f.id, f.getAvatarURL(r, 80), {
                            guildId: r
                        }),
                        shouldShow: !0 === l && null != E,
                        fixed: !0,
                        renderPopout: e => (a(null != E, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, i.jsx)(c.default, {
                            ...this.props,
                            user: I && null != f ? f : void 0,
                            ...e,
                            userId: E,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: n => (0, i.jsxs)("div", {
                            className: o(e, N.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.SIZE_24;
                                switch (e) {
                                    case T.SIZE_16:
                                        return N.size16;
                                    case T.SIZE_24:
                                        return N.size24;
                                    case T.SIZE_32:
                                        return N.size32;
                                    case T.SIZE_56:
                                        return N.size56;
                                    default:
                                        return N.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...n,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = r.createRef(), this.defaultRenderUser = (e, t, n) => {
                        let {
                            showUserPopout: r,
                            guildId: l,
                            size: o
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, i.jsx)("div", {
                                className: N.emptyUser
                            });
                            {
                                let e = (null != n ? n : 0) % I.default.DEFAULT_AVATARS.length,
                                    t = I.default.DEFAULT_AVATARS[e];
                                return (0, i.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: N.avatar
                                })
                            }
                        }
                        let s = (0, i.jsx)("img", {
                            src: e.getAvatarURL(l, o),
                            alt: e.username,
                            className: N.avatar
                        }, e.id);
                        return r ? (0, i.jsx)(u.Clickable, {
                            className: N.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: s
                        }, e.id) : s
                    }
                }
            }
            p.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, i.jsx)("div", {
                        className: N.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: T.SIZE_24
            };
            var A = p
        },
        103603: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fit: function() {
                    return u
                },
                zoomFit: function() {
                    return d
                },
                getRatio: function() {
                    return c
                },
                getCoverRatio: function() {
                    return E
                },
                makeCssUrlString: function() {
                    return _
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return S
                },
                readFileAsBase64: function() {
                    return T
                },
                dataUriFileSize: function() {
                    return h
                },
                dataUrlToFile: function() {
                    return p
                },
                isPNGAnimated: function() {
                    return A
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var i = n("627445"),
                r = n.n(i),
                l = n("917351"),
                o = n.n(l),
                s = n("48648"),
                a = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: l = 0,
                    minHeight: o = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), l), n = Math.max(Math.round(n * e), o);
                    let s = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * s), l), n = Math.max(Math.round(n * s), o)
                }
                return {
                    width: t,
                    height: n
                }
            }

            function d(e, t) {
                let n = Math.min(Math.round(.65 * window.innerHeight), 2e3),
                    i = Math.min(Math.round(.75 * window.innerWidth), 2e3);
                return u({
                    width: e,
                    height: t,
                    maxWidth: i,
                    maxHeight: n
                })
            }

            function c(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e, l = 1;
                t > i && (l = i / t), t = Math.round(t * l);
                let o = 1;
                return (n = Math.round(n * l)) > r && (o = r / n), Math.min(l * o, 1)
            }

            function E(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function _(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return f;
                let l = i.width = 0 === e.width ? 128 : e.width,
                    o = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, l, o);
                let s = r.getImageData(0, 0, l, o).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let r = 0, l, o, s, a, u; r < t; r += n) o = e[(l = 4 * r) + 0], s = e[l + 1], a = e[l + 2], (void 0 === (u = e[l + 3]) || u >= 125) && !(o > 250 && s > 250 && a > 250) && i.push([o, s, a]);
                        return i
                    }(s, l * o, n),
                    d = a(u, t);
                return "boolean" == typeof d ? f : d.palette()
            }
            let S = e => "number" == typeof e ? null : N(e),
                N = o.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(I(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function T(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function h(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function p(e, t, n) {
                let i = function(e) {
                        let t;
                        t = e.split(",")[0].indexOf("base64") >= 0 ? atob(e.split(",")[1]) : btoa(e.split(",")[1]);
                        let n = e.split(",")[0].split(":")[1].split(";")[0],
                            i = new Uint8Array(t.length);
                        for (var r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
                        return new Blob([i], {
                            type: n
                        })
                    }(e),
                    r = await i.arrayBuffer();
                return new File([r], t, {
                    type: n
                })
            }
            async function A(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var i = n("917351"),
                r = n.n(i);
            let l = e => "function" == typeof e ? e() : e;
            r.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let i, r;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var l = n("697218"),
                o = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                i = e.showModal, s = e.updateModalProps, r = n("551042").closeModal
            }

            function a(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    modalProps: o = {},
                    hooks: {
                        onEarlyClose: a
                    } = {}
                } = e;
                if (null == i) {
                    null == a || a();
                    return
                }
                let d = i(f, c, o);

                function c() {
                    null == a || a()
                }

                function E(e) {
                    r(d), n(e)
                }

                function _(e) {
                    r(d), l(e)
                }

                function f(e) {
                    return s(d, f, c, {
                        ...o,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: I,
                        isModalOpen: !0
                    })
                }

                function I(e) {
                    let {
                        res: t
                    } = e;
                    s(d, f, c, {
                        ...o,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    code: r,
                    mfaCodeHandler: l = a,
                    isModalOpen: o = !1,
                    ...s
                } = e;
                return t(null != r ? {
                    code: r
                } : {}).then(n, e => {
                    var r, a;
                    if (r = e, a = o, r.body && 60008 === r.body.code || a && 429 === r.status) return l({
                        promiseFn: t,
                        resolve: n,
                        reject: i,
                        res: e,
                        ...s
                    });
                    i(e)
                })
            }

            function d(e, t) {
                var n, i;
                let {
                    checkEnabled: r = null !== (i = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== i && i,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, o.resolveThunk)(r) ? a : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        829536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                perceptualToAmplitude: function() {
                    return i
                },
                amplitudeToPerceptual: function() {
                    return r
                }
            });

            function i(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                return 0 === e ? 0 : (t = e > n ? (e - n) / n * 6 : e / n * 50 - 50, n * Math.pow(10, t / 20))
            }

            function r(e) {
                let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 100;
                if (0 === e) return 0;
                let i = 20 * Math.log10(e / n);
                return n * (t = i > 0 ? i / 6 + 1 : (50 + i) / 50)
            }
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        655518: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("781738");
            var i = {
                escape: e => e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("872717"),
                r = n("599110");

            function l(e, t, n) {
                let {
                    trackedActionData: i,
                    ...l
                } = t, o = {
                    url: l.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(l).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...o,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, l;
                        let s = i.properties;
                        "function" == typeof i.properties && (s = i.properties(e)), (0, r.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (l = e.body) || void 0 === l ? void 0 : l.message,
                            ...o,
                            ...s
                        }), n(e)
                    })
                })
            }
            var o = {
                get: function(e) {
                    return l(i.default.get, e, "get")
                },
                post: function(e) {
                    return l(i.default.post, e, "post")
                },
                put: function(e) {
                    return l(i.default.put, e, "put")
                },
                patch: function(e) {
                    return l(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return l(i.default.delete, e, "del")
                }
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                l = n("920636");
            let o = (e, t, n) => function(r) {
                return (0, i.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...r
                })
            };

            function s(e, t, n) {
                return (0, r.openModal)(o(e, t, n), {
                    onCloseCallback: t
                })
            }

            function a(e, t, n, i) {
                return (0, r.updateModal)(e, o(t, n, i))
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("446674"),
                l = n("244201"),
                o = n("471671");

            function s() {
                let {
                    windowId: e
                } = i.useContext(l.default);
                return (0, r.useStateFromStores)([o.default], () => o.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("817736"),
                l = n("118810");
            let o = {
                root: null,
                rootMargin: "0px",
                threshold: .5
            };
            i = class {
                isVisible(e) {
                    return null == this._observer || this._visibleComponents.has(e)
                }
                observe(e) {
                    let t = this._observer;
                    if (null == t) return;
                    this.unobserve(e);
                    let n = (0, r.findDOMNode)(e);
                    (0, l.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = o) {
                    this._nodes = new WeakMap, this._components = new WeakMap, this._visibleComponents = new WeakSet, this._handleEntries = e => {
                        e.forEach(e => {
                            let t;
                            if (null != e.isIntersecting) t = e.isIntersecting;
                            else {
                                let {
                                    threshold: n
                                } = this._options;
                                t = null == n ? e.intersectionRatio > 0 : Array.isArray(n) ? n.some(t => e.intersectionRatio > t) : e.intersectionRatio > n
                            }
                            let n = this._nodes.get(e.target);
                            if (null != n) {
                                let e = !1;
                                t ? !this._visibleComponents.has(n) && (this._visibleComponents.add(n), e = !0) : this._visibleComponents.has(n) && (this._visibleComponents.delete(n), e = !0), e && n.forceUpdate()
                            }
                        })
                    }, this._options = e, null != window.IntersectionObserver && (this._observer = new window.IntersectionObserver(this._handleEntries, e))
                }
            }
        },
        235855: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007"), n("70102");
            var i = n("884691"),
                r = n("748820"),
                l = n("157590");
            let o = (0, r.v4)(),
                s = new Map,
                a = new Map;
            class u extends i.Component {
                componentDidMount() {
                    if (this.props.active) {
                        let e = this.getVisibilityObserver();
                        e.observe(this), this.isVisible = e.isVisible(this), this.props.onChange(this.isVisible)
                    }
                }
                componentDidUpdate(e) {
                    let t = this.getVisibilityObserver(),
                        n = t.isVisible(this);
                    this.props.active && n !== this.isVisible && this.props.onChange(n), !e.active && this.props.active ? t.observe(this) : e.active && !this.props.active && t.unobserve(this), this.isVisible = n
                }
                componentWillUnmount() {
                    this.getVisibilityObserver().unobserve(this)
                }
                getVisibilityObserverId() {
                    let {
                        rootMargin: e,
                        threshold: t
                    } = this.props;
                    return "".concat(this.elementId, " ").concat(e, " ").concat(t)
                }
                getVisibilityObserver() {
                    let e = this.getVisibilityObserverId(),
                        t = a.get(e);
                    if (!t) throw Error("Visibility sensor with id ".concat(e, " not found."));
                    return t
                }
                render() {
                    return i.Children.only(this.props.children)
                }
                constructor(e) {
                    super(e), this.isVisible = !1;
                    let {
                        root: t,
                        rootMargin: n,
                        threshold: i
                    } = e;
                    t ? s.has(t) ? this.elementId = s.get(t) || "" : s.set(t, (0, r.v4)()) : this.elementId = o;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new l.default({
                        root: t,
                        rootMargin: n,
                        threshold: i
                    }))
                }
            }
            u.defaultProps = {
                active: !0,
                children: i.createElement("span"),
                root: null,
                rootMargin: "0px 0px 0px 0px",
                threshold: [0, Number.MIN_VALUE]
            };
            var d = u
        },
        290381: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VisibilityObserver: function() {
                    return i.default
                },
                VisibilitySensor: function() {
                    return r.default
                }
            }), n("6268");
            var i = n("157590"),
                r = n("235855")
        },
        432710: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return i
                }
            }), n("222007"), (r = i || (i = {})).APP_CRASHED = "app_crashed", r.SOCKET_CRASHED = "socket_crashed", r.MESSAGE_REQUEST_VIEW = "message_request_view", r.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", r.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", r.FAMILY_CENTER_VIEW = "family_center_view", r.SAFETY_HUB_VIEW = "safety_hub_view", r.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", r.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", r.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", r.AFK_NOT_IDLE = "afk_not_idle", r.CAPTCHA_EVENT = "captcha_event", r.SAFETY_WARNING_VIEW = "safety_warning_view", r.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING = "explicit_media_scan_client_timing", r.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", r.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", r.OTA_UPDATE_CHECK = "ota_update_check", r.OTA_ASSET_DOWNLOAD = "ota_asset_download", r.DEBUG_OTA_200_TIMEOUT = "debug_ota_200_timeout"
        },
        615361: function(e, t, n) {
            "use strict";
            var i, r;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return l
                }
            }), n("222007"), (r = i || (i = {})).STABLE = "stable", r.BETA = "beta", r.ALPHA = "alpha", r.PTB = "ptb", r.CANARY = "canary", r.STAGING = "staging", r.DEVELOPMENT = "development";
            let l = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);