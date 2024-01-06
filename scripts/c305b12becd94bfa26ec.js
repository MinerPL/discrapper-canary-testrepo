(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["71329"], {
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return o
                },
                unsubscribeMembers: function() {
                    return l
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

            function o(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function l(e, t) {
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
                    height: o,
                    rowHeight: l
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / l)) + t)
                }
                let u = [];

                function d(e) {
                    let t = e + (r.MINIMUM_RANGE - 1);
                    return u.push([e, t]), t + 1
                }
                let c = a(.5 * o),
                    _ = a(i, -c),
                    E = a(i + o, c);
                for (_ > 0 && (_ = Math.max(d(0), _)), _ = Math.floor(_ / r.MINIMUM_RANGE) * r.MINIMUM_RANGE; _ <= E;) _ = d(_);
                s(t, n, u)
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return r
                },
                updateCardInfo: function() {
                    return o
                },
                clearCardInfo: function() {
                    return l
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

            function o(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
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
                    return h
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return p
                },
                getHarvestStatus: function() {
                    return T
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return A
                },
                setPendingGlobalNameName: function() {
                    return R
                },
                setPendingAvatarDecoration: function() {
                    return g
                },
                setPendingProfileEffectId: function() {
                    return v
                },
                clearErrors: function() {
                    return m
                },
                resetPendingAccountChanges: function() {
                    return L
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
                o = n("819855"),
                l = n("913144"),
                s = n("393414"),
                a = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                _ = n("49111"),
                E = n("191349"),
                f = n("782340");

            function I() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function h(e, t) {
                let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    r = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
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
                    c.default.logoutInternal(), (0, s.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(e) {
                let t = await i.default.patch({
                        url: _.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function p(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: o,
                    password: s,
                    avatar: c,
                    avatarDecoration: I,
                    newPassword: S,
                    globalName: h
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let l = {
                        username: t,
                        email: i,
                        email_token: o,
                        password: s,
                        avatar: c,
                        discriminator: n,
                        global_name: h,
                        new_password: S,
                        ...e
                    };
                    null === I && (l.avatar_decoration_id = null), null != I && (l.avatar_decoration_id = I.id, l.avatar_decoration_sku_id = I.skuId);
                    let a = r.default.get(_.DEVICE_TOKEN),
                        u = (0, E.getDevicePushProvider)();
                    null != u && null != a && (l.push_provider = u, l.push_token = a);
                    let d = r.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != d && (l.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = d), N(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: f.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return a.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function T() {
                return i.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return i.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : o.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function R(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function g(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function v(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function m() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function O() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function D() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        984557: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, r = n("884691"),
                o = n("979897"),
                l = n("49671"),
                s = n("773336");
            i = class extends r.Component {
                getFileContents() {
                    let {
                        fileContents: e
                    } = this.props;
                    return "function" == typeof e && (e = e()), e
                }
                downloadNative(e, t) {
                    l.default.fileManager.saveWithDialog(e, t)
                }
                downloadHtml5(e, t) {
                    let n = new Blob([e], {
                        type: this.props.contentType
                    });
                    (0, o.saveAs)(n, t)
                }
                render() {
                    let {
                        children: e
                    } = this.props, t = r.Children.only(e);
                    return r.cloneElement(t, {
                        onClick: this.handleFileDownload
                    })
                }
                constructor(...e) {
                    super(...e), this.handleFileDownload = e => {
                        e.preventDefault();
                        let t = this.getFileContents(),
                            {
                                fileName: n,
                                onDownload: i
                            } = this.props;
                        s.isPlatformEmbedded ? this.downloadNative(t, n) : this.downloadHtml5(t, n), null == i || i()
                    }
                }
            }
        },
        184504: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                o = n("627445"),
                l = n.n(o),
                s = n("446674"),
                a = n("77078"),
                u = n("913144"),
                d = n("430713"),
                c = n("984557"),
                _ = n("367376"),
                E = n("878720"),
                f = n("601745"),
                I = n("650893"),
                S = n("697218"),
                h = n("145131"),
                N = n("583227"),
                p = n("49111"),
                T = n("482931"),
                C = n("782340"),
                A = n("659248");
            let R = e => {
                let {
                    label: t,
                    text: n,
                    children: r,
                    ...o
                } = e;
                return (0, i.jsxs)(h.default, {
                    direction: h.default.Direction.VERTICAL,
                    ...o,
                    children: [(0, i.jsx)(a.FormTitle, {
                        tag: "h2",
                        children: t
                    }), null != n ? (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: A.sectionBody,
                        children: n
                    }) : null, (0, i.jsx)(h.default.Child, {
                        wrap: !0,
                        children: r
                    })]
                })
            };
            class g extends r.PureComponent {
                renderSMSSection() {
                    let {
                        currentUser: e
                    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(p.UserFlags.MFA_SMS), r = e.hasFlag(p.UserFlags.PARTNER) || e.hasFlag(p.UserFlags.STAFF);
                    return t ? (0, i.jsxs)(R, {
                        label: C.default.Messages.MFA_SMS_ENABLE,
                        text: C.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                        children: [(0, i.jsxs)(a.Text, {
                            variant: "text-md/normal",
                            className: A.sectionBody,
                            children: [(0, i.jsx)("strong", {
                                className: A.phoneNumber,
                                children: C.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
                                    phoneNumber: e.phone
                                })
                            }), (0, i.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.LINK,
                                size: a.Button.Sizes.MIN,
                                className: A.linkButton,
                                onClick: this.handleChangePhoneNumber,
                                children: C.default.Messages.CHANGE_PHONE_NUMBER
                            })]
                        }), (0, i.jsx)(a.Button, {
                            onClick: this.handleEnableSMS,
                            disabled: n || r,
                            color: a.Button.Colors.GREEN,
                            size: a.Button.Sizes.SMALL,
                            children: r ? C.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? C.default.Messages.MFA_SMS_ALREADY_ENABLED : C.default.Messages.MFA_SMS_ENABLE
                        })]
                    }) : (0, i.jsx)(R, {
                        label: C.default.Messages.MFA_SMS_ENABLE,
                        text: C.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                        children: (0, i.jsx)(a.Button, {
                            onClick: this.handleEnableSMS,
                            color: a.Button.Colors.GREEN,
                            size: a.Button.Sizes.SMALL,
                            disabled: r,
                            children: r ? C.default.Messages.MFA_SMS_DISABLED_PARTNER : C.default.Messages.MFA_SMS_ADD_PHONE
                        })
                    })
                }
                renderBackupCodesSection() {
                    return (0, i.jsx)(R, {
                        label: C.default.Messages.TWO_FA_DOWNLOAD_CODES,
                        text: C.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
                        children: (0, i.jsx)(c.default, {
                            fileContents: this.getDownloadFileContents,
                            contentType: "text/plain",
                            fileName: "discord_backup_codes.txt",
                            onDownload: () => u.default.dispatch({
                                type: "MFA_SEEN_BACKUP_CODE_PROMPT"
                            }),
                            children: (0, i.jsx)(a.Button, {
                                color: a.Button.Colors.GREEN,
                                size: a.Button.Sizes.SMALL,
                                children: C.default.Messages.TWO_FA_DOWNLOAD_CODES
                            })
                        })
                    })
                }
                renderHeader(e) {
                    return (0, i.jsxs)(a.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsxs)(h.default.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                className: A.header,
                                children: _.default.parse(C.default.Messages.TWO_FA_SUCCESS_HEADER)
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: A.subHeader,
                                children: e
                            })]
                        }), (0, i.jsx)(h.default.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.ModalCloseButton, {
                                onClick: this.handleCloseModal
                            })
                        })]
                    })
                }
                renderConfirmModal(e) {
                    let {
                        onClose: t
                    } = this.props;
                    return (0, i.jsx)(a.DeclarativeConfirmModal, {
                        dismissable: !0,
                        header: C.default.Messages.TWO_FA_CONFIRM_TITLE,
                        confirmText: C.default.Messages.TWO_FA_CONFIRM_CONFIRM,
                        cancelText: C.default.Messages.CANCEL,
                        onCancel: () => this.setState({
                            showConfirmModal: !1
                        }),
                        onConfirm: () => {
                            u.default.dispatch({
                                type: "MFA_SEEN_BACKUP_CODE_PROMPT"
                            }), t()
                        },
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            children: e
                        })
                    })
                }
                render() {
                    let {
                        isTotp: e
                    } = this.props;
                    return e ? this.renderTotp() : this.renderWebAuthn()
                }
                renderTotp() {
                    let {
                        transitionState: e
                    } = this.props, {
                        showConfirmModal: t
                    } = this.state;
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: e,
                        className: A.modal,
                        children: [this.renderHeader(C.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, i.jsxs)(a.ModalContent, {
                            className: A.modalInner,
                            children: [this.renderSMSSection(), (0, i.jsx)(a.FormDivider, {
                                className: A.divider
                            }), this.renderBackupCodesSection()]
                        }), t && this.renderConfirmModal(C.default.Messages.TWO_FA_CONFIRM_BODY)]
                    })
                }
                renderWebAuthn() {
                    let {
                        transitionState: e
                    } = this.props, {
                        showConfirmModal: t
                    } = this.state;
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: e,
                        className: A.modal,
                        children: [this.renderHeader(C.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, i.jsx)(a.ModalContent, {
                            className: A.modalInner,
                            children: this.renderBackupCodesSection()
                        }), t && this.renderConfirmModal(C.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
                    })
                }
                openPhoneVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, a.openModal)(t => (0, i.jsx)(f.default, {
                        reason: E.ChangePhoneReason.MFA_PHONE_UPDATE,
                        ...t,
                        ...e
                    }), {
                        modalKey: T.PHONE_VERIFICATION_MODAL_KEY
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        showConfirmModal: !1
                    }, this.handleCloseModal = () => {
                        let {
                            onClose: e,
                            hasSeenBackupPrompt: t
                        } = this.props;
                        t ? null == e || e() : this.setState({
                            showConfirmModal: !0
                        })
                    }, this.getDownloadFileContents = () => {
                        let e = this.props.backupCodes.map(e => {
                                let {
                                    consumed: t,
                                    code: n
                                } = e;
                                return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(C.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
                            }).join("\r\n"),
                            t = C.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
                                email: this.props.currentUser.email
                            });
                        return "".concat(t, "\r\n\r\n").concat(e)
                    }, this.handleChangePhoneNumber = () => {
                        this.openPhoneVerificationModal()
                    }, this.handleEnableSMS = () => {
                        let {
                            currentUser: e
                        } = this.props, t = () => {
                            (0, a.openModal)(e => (0, i.jsx)(N.default, {
                                ...e,
                                handleSubmit: e => d.default.enableSMS(e),
                                title: C.default.Messages.MFA_SMS_ENABLE
                            }))
                        };
                        null == e.phone ? this.openPhoneVerificationModal({
                            onAddedPhone: t
                        }) : t()
                    }
                }
            }
            var v = s.default.connectStores([S.default, I.default], () => {
                let e = S.default.getCurrentUser();
                return l(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
                    currentUser: e,
                    backupCodes: I.default.getBackupCodes(),
                    hasSeenBackupPrompt: I.default.hasSeenBackupPrompt
                }
            })(g)
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: l = "transparent",
                    secondaryColorClass: s = "",
                    color: a = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof l ? l : l.css,
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
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
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
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                o = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: s
                    })]
                })
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
                o = n("782340");
            class l extends r.default {
                _getMessageFromRateLimit(e) {
                    let t = e.body.retry_after,
                        n = (0, i.diffAsUnits)(0, 1e3 * t);
                    return (0, i.unitsAsStrings)(n, {
                        days: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_DAYS,
                        hours: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_HOURS,
                        minutes: o.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_ERROR_RATE_LIMIT_MINUTES
                    })
                }
                constructor(e, t) {
                    super(e, t), 429 === this.status && (this.message = this._getMessageFromRateLimit(e))
                }
            }
            var s = l
        },
        736978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ErrorCodes: function() {
                    return i
                },
                parseV8BillingAddressSkemaErrorToBillingError: function() {
                    return C
                },
                default: function() {
                    return R
                }
            }), n("222007");
            var i, r, o, l, s, a, u, d, c = n("486196"),
                _ = n("614247"),
                E = n("821879"),
                f = n("333805"),
                I = n("782340");
            (s = i || (i = {}))[s.UNKNOWN = 0] = "UNKNOWN", s[s.UNKNOWN_BILLING_PROFILE = 100001] = "UNKNOWN_BILLING_PROFILE", s[s.UNKNOWN_PAYMENT_SOURCE = 100002] = "UNKNOWN_PAYMENT_SOURCE", s[s.UNKNOWN_SUBSCRIPTION = 100003] = "UNKNOWN_SUBSCRIPTION", s[s.ALREADY_SUBSCRIBED = 100004] = "ALREADY_SUBSCRIBED", s[s.INVALID_PLAN = 100005] = "INVALID_PLAN", s[s.PAYMENT_SOURCE_REQUIRED = 100006] = "PAYMENT_SOURCE_REQUIRED", s[s.ALREADY_CANCELED = 100007] = "ALREADY_CANCELED", s[s.INVALID_PAYMENT = 100008] = "INVALID_PAYMENT", s[s.ALREADY_REFUNDED = 100009] = "ALREADY_REFUNDED", s[s.INVALID_BILLING_ADDRESS = 100010] = "INVALID_BILLING_ADDRESS", s[s.ALREADY_PURCHASED = 100011] = "ALREADY_PURCHASED", s[s.NEGATIVE_INVOICE_AMOUNT = 100027] = "NEGATIVE_INVOICE_AMOUNT", s[s.AUTHENTICATION_REQUIRED = 100029] = "AUTHENTICATION_REQUIRED", s[s.SUBSCRIPTION_RENEWAL_IN_PROGRESS = 100042] = "SUBSCRIPTION_RENEWAL_IN_PROGRESS", s[s.CONFIRMATION_REQUIRED = 100047] = "CONFIRMATION_REQUIRED", s[s.CARD_DECLINED = 100054] = "CARD_DECLINED", s[s.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = 50097] = "INVALID_GIFT_REDEMPTION_FRAUD_REJECTED", s[s.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = 100056] = "PURCHASE_TOKEN_AUTHORIZATION_REQUIRED", s[s.INVALID_PAYMENT_SOURCE = 50048] = "INVALID_PAYMENT_SOURCE", s[s.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = 100051] = "INVALID_CURRENCY_FOR_PAYMENT_SOURCE", s[s.BILLING_APPLE_SERVER_API_ERROR = 100070] = "BILLING_APPLE_SERVER_API_ERROR", s[s.BILLING_TRIAL_REDEMPTION_DISABLED = 100078] = "BILLING_TRIAL_REDEMPTION_DISABLED", s[s.BILLING_PAUSE_DISABLED = 100079] = "BILLING_PAUSE_DISABLED", s[s.BILLING_PAUSE_PENDING_ALREADY_SET = 100080] = "BILLING_PAUSE_PENDING_ALREADY_SET", s[s.BILLING_PAUSE_NOT_ELIGIBLE = 100081] = "BILLING_PAUSE_NOT_ELIGIBLE", s[s.BILLING_PAUSE_INVALID_INTERVAL = 100082] = "BILLING_PAUSE_INVALID_INTERVAL", s[s.BILLING_ALREADY_PAUSED = 100083] = "BILLING_ALREADY_PAUSED", (a = r || (r = {})).CARD_NUMBER = "cardNumber", a.CARD_CVC = "cvc", a.CARD_EXPIRATION_DATE = "expirationDate", a.CARD_NAME = "name", a.ADDRESS_NAME = "name", a.ADDRESS_LINE_1 = "line1", a.ADDRESS_LINE_2 = "line2", a.ADDRESS_CITY = "city", a.ADDRESS_STATE = "state", a.ADDRESS_POSTAL_CODE = "postalCode", a.ADDRESS_COUNTRY = "country", (u = o || (o = {})).ADDRESS_LINE_1 = "address_line1", u.ADDRESS_LINE_2 = "address_line2", u.ADDRESS_CITY = "address_city", u.ADDRESS_STATE = "address_state", u.ADDRESS_ZIP = "address_zip", u.ADDRESS_COUNTRY = "address_country", u.CARD_NUMBER = "number", u.CARD_EXPIRATION_DATE = "exp", u.CARD_EXPIRATION_MONTH = "exp_month", u.CARD_EXPIRATION_YEAR = "exp_year";
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
                h = Object.freeze({
                    line_1: "line1",
                    line_2: "line2",
                    postal_code: "postalCode"
                });
            (d = l || (l = {})).CARD = "card", d.ADDRESS = "address";
            let N = new Set(["cardNumber", "cvc", "expirationDate", "name"]),
                p = new Set(["cardNumber", "cvc", "expirationDate", "name", "postalCode", "country", "line1", "city", "state"]),
                T = new Set(["name", "line1", "line2", "city", "state", "postalCode", "country"]);

            function C(e) {
                var t, n, i, r, o;
                if ("string" != typeof e && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code) === c.INVALID_FORM_BODY_ERROR_CODE) {
                    if (!Array.isArray(null == e ? void 0 : null === (n = e.body) || void 0 === n ? void 0 : n.errors) && (null == e ? void 0 : null === (r = e.body) || void 0 === r ? void 0 : null === (i = r.errors) || void 0 === i ? void 0 : i.billing_address) != null) {
                        for (let t in e.body.errors.billing_address) {
                            let n = e.body.errors.billing_address[t];
                            delete e.body.errors.billing_address[t], e.body.errors[t] = n
                        }
                        delete e.body.errors.billing_address
                    }(null === (o = e.body) || void 0 === o ? void 0 : o.errors) != null && (e.body = (0, _.default)(e.body.errors))
                }
                return new A(e)
            }
            class A extends f.default {
                _isInFieldSet(e) {
                    for (let t in this.fields)
                        if (e.has(t)) return !0
                }
                hasCardError() {
                    return 2 === (0, E.reducedPaymentInfoExperiment)().bucket ? this._isInFieldSet(p) : this._isInFieldSet(N)
                }
                hasAddressError() {
                    return this._isInFieldSet(T)
                }
                constructor(e, t) {
                    for (let n in super(e, t), this.paymentId = null, 100027 === this.code ? this.message = I.default.Messages.BILLING_ERROR_NEGATIVE_INVOICE_AMOUNT : 50048 === this.code ? this.message = I.default.Messages.BILLING_PAYMENT_SOURCE_INVALID : 100002 === this.code ? this.message = I.default.Messages.BILLING_ERROR_UNKNOWN_PAYMENT_SOURCE : 100042 === this.code ? this.message = I.default.Messages.BILLING_ERROR_PENDING_PAYMENT : 100078 === this.code ? this.message = I.default.Messages.BILLING_TRIAL_REDEMPTION_DISABLED : 429 === this.status ? this.message = I.default.Messages.BILLING_ERROR_RATE_LIMIT : 0 === this.code ? this.message = I.default.Messages.BILLING_ERROR_GENERIC : 400 === this.status && null != this.fields.captcha_key && (this.message = I.default.Messages.BILLING_ERROR_INVALID_CAPTCHA_RESPONSE), this.fields) {
                        let e = S[n] || h[n];
                        if (null != e) {
                            let t = this.fields[n];
                            delete this.fields[n], this.fields[e] = t
                        }
                    }
                    null != e.body && "string" == typeof e.body.payment_id && (this.paymentId = e.body.payment_id)
                }
            }
            A.ErrorCodes = i, A.Fields = r, A.Sections = l, A.CARD_ERRORS = N, A.ADDRESS_ERRORS = T;
            var R = A
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
                    return l
                }
            });
            var i, r, o = n("782340");
            (i = r || (r = {}))[i.GENERAL = 0] = "GENERAL", i[i.NO_FILE = 1] = "NO_FILE", i[i.PROGRESS = 2] = "PROGRESS", i[i.UPLOAD = 3] = "UPLOAD", i[i.READ = 4] = "READ";
            var l = class e {
                get displayMessage() {
                    switch (this.code) {
                        case 1:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_NO_FILE;
                        case 2:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_PROGRESS;
                        case 3:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_UPLOAD;
                        case 4:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE_READ;
                        default:
                            return o.default.Messages.UPLOAD_DEBUG_LOG_FAILURE
                    }
                }
                constructor(e) {
                    this.code = e
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
                    return o.default
                },
                AppliedGuildBoostError: function() {
                    return l.default
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
                o = n("736978");
            n("852766"), n("846071");
            var l = n("79489"),
                s = n("927367")
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return o
                }
            });
            var i = n("884691"),
                r = n("599110");
            let o = () => i.useContext(r.AnalyticsContext)
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
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                r = n("917351"),
                o = n.n(r);
            n("233736");
            var l = n("666020");

            function s(e) {
                i.useEffect(() => (o.forEach(e, (e, t) => (0, l.subscribeMembers)(t, e)), () => {
                    o.forEach(e, (e, t) => (0, l.unsubscribeMembers)(t, e))
                }), [e])
            }
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
                o = n("516555"),
                l = n("65597"),
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
                    addClickListener: _,
                    removeClickListener: E
                } = e, f = (0, o.useConfettiCannon)(n, a), I = (0, l.default)([s.default], () => s.default.useReducedMotion), S = r.useMemo(() => I ? u : {
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
                    addClickListener: _,
                    removeClickListener: E
                }, [_, c, f, n, I, E]);
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
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var o = r
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return _
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
                o = n("315102"),
                l = n("773336"),
                s = n("49111");
            let a = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, l.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: E(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                _ = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()))),
                E = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let l = o.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        _ = "quality=lossless";
                    return (null != t && (c = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), _ = d ? "" : "&" + _), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(a, "/").concat(n, "/").concat(i, ".").concat(l, "?").concat(c).concat(_) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(c)
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
                    return _
                },
                setPendingBanner: function() {
                    return E
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
                    return h
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return p
                },
                resetAllPending: function() {
                    return T
                },
                clearErrors: function() {
                    return C
                },
                setDisableSubmit: function() {
                    return A
                }
            }), n("70102");
            var i = n("872717"),
                r = n("913144"),
                o = n("54239"),
                l = n("49111");
            async function s(e, t) {
                let {
                    nick: n,
                    avatar: o
                } = t;
                if (null == e) throw Error("Need guildId");
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: l.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: o
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
                }), (0, o.popLayer)()
            }

            function c() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function _(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function E(e) {
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

            function h(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function p() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function A(e) {
                r.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, r, o, l, s, a, u, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var _ = n("446674"),
                E = n("913144"),
                f = n("49111");
            let I = f.FormStates.CLOSED,
                S = {},
                h = !1;

            function N() {
                I = f.FormStates.CLOSED, S = {}, u = null, d = void 0, c = []
            }

            function p() {
                T(), C(), S = {}, I = f.FormStates.OPEN
            }

            function T() {
                i = void 0, s = void 0
            }

            function C() {
                r = void 0, o = void 0, l = void 0, a = void 0
            }
            class A extends _.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== r || void 0 !== o || void 0 !== l || void 0 !== s || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return r
                }
                getPendingBio() {
                    return o
                }
                getPendingNickname() {
                    return s
                }
                getPendingPronouns() {
                    return l
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
                        pendingBio: o,
                        pendingPronouns: l,
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
                    return h
                }
            }
            A.displayName = "GuildIdentitySettingsStore";
            var R = new A(E.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    u = e.guild, I = f.FormStates.OPEN, S = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    p(), N()
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
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    l = t
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
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: T,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: C,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: p,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: p,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    h = t
                }
            })
        },
        50926: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("479756"),
                l = n("38654"),
                s = n("9294"),
                a = n("26989"),
                u = n("337543"),
                d = n("697218"),
                c = n("49111");
            let _ = async (e, t) => {
                let n = null != t ? t : u.default.getInviteKeyForGuildId(e),
                    o = d.default.getCurrentUser(),
                    l = !a.default.isMember(e, null == o ? void 0 : o.id);
                try {
                    let t = await i.default.get({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        query: {
                            with_guild: l,
                            invite_code: null != n ? (0, s.parseInviteCodeFromInviteKey)(n) : void 0
                        },
                        oldFormErrors: !0
                    });
                    if (null == t.body) throw t;
                    let {
                        body: o
                    } = t;
                    return r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_UPDATE",
                        guildId: e,
                        form: {
                            version: o.version,
                            description: o.description,
                            formFields: o.form_fields,
                            guild: o.guild
                        }
                    }), o
                } catch (t) {
                    r.default.dispatch({
                        type: "MEMBER_VERIFICATION_FORM_FETCH_FAIL",
                        guildId: e
                    })
                }
            }, E = async (e, t) => {
                let n = await i.default.patch({
                        url: c.Endpoints.GUILD_MEMBER_VERIFICATION(e),
                        body: {
                            form_fields: t
                        },
                        oldFormErrors: !0
                    }),
                    {
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
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
                        body: o
                    } = n;
                r.default.dispatch({
                    type: "MEMBER_VERIFICATION_FORM_UPDATE",
                    guildId: e,
                    form: {
                        version: o.version,
                        description: o.description,
                        formFields: o.form_fields
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
                if (l.default.isFullServerPreview(e)) {
                    (0, o.updateImpersonatedData)(e, {
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
                            body: o
                        } = n;
                    return r.default.dispatch({
                        type: "USER_GUILD_JOIN_REQUEST_UPDATE",
                        guildId: e,
                        request: o
                    }), o
                } catch (e) {
                    throw e
                }
            };
            var h = {
                fetchVerificationForm: _,
                updateVerificationForm: E,
                updateVerificationFormDescription: f,
                enableVerificationForm: I,
                submitVerificationForm: S
            }
        },
        394294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AUTOMATIC_APPROVAL_FORM_FIELDS: function() {
                    return o
                },
                MANUAL_APPROVAL_FORM_FIELDS: function() {
                    return l
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
                    return _
                },
                MAX_TEXT_RESPONSE_LENGTH: function() {
                    return E
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
                    return h
                }
            }), n("222007");
            var i, r = n("567054");
            r.VerificationFormFieldTypes.VERIFICATION;
            let o = new Set([r.VerificationFormFieldTypes.TERMS]),
                l = new Set([r.VerificationFormFieldTypes.MULTIPLE_CHOICE, r.VerificationFormFieldTypes.TEXT_INPUT, r.VerificationFormFieldTypes.PARAGRAPH]),
                s = 5,
                a = 16,
                u = 300,
                d = 300,
                c = 8,
                _ = 150,
                E = 150,
                f = 1e3,
                I = 300,
                S = "Membership Gating",
                h = "in-app-member-verification";
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
                o = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                s = (0, i.default)(e => l),
                a = e => {
                    s.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    s.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(o.ComponentActions.EMPHASIZE_NOTICE)
                }
        },
        453265: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("551042"),
                o = n("599110"),
                l = n("50926"),
                s = n("347977"),
                a = n("394294"),
                u = n("49111");
            let d = () => {
                    o.default.track(u.AnalyticEvents.MODAL_DISMISSED, {
                        type: a.MEMBER_VERIFICATION_TYPE
                    })
                },
                c = e => {
                    o.default.track(u.AnalyticEvents.OPEN_MODAL, {
                        type: a.MEMBER_VERIFICATION_TYPE,
                        guild_id: e
                    })
                };
            var _ = {
                openMemberVerificationModal(e, t) {
                    c(e);
                    let o = async t => {
                        await l.default.submitVerificationForm(e, t)
                    };
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("93184").then(n.bind(n, "93184"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guildId: e,
                            onComplete: o,
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
                    return a
                },
                parseInviteCodeFromInviteKey: function() {
                    return u
                }
            }), n("222007");
            var i = n("522632"),
                r = n("833858");
            let o = "event";

            function l(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, r.getFirstQueryStringValue)(e[o])
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
                return null == n ? t : "".concat(t, "?").concat(o, "=").concat(n)
            }

            function a(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let l = i.parse(n),
                    s = (0, r.getFirstQueryStringValue)(l[o]);
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
                    return E
                }
            });
            var i = n("65597"),
                r = n("862205"),
                o = n("697218"),
                l = n("719923"),
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
                        mobileAndFreemiumCollectEnabled: o,
                        autoUnfurlReactionTooltip: s,
                        collectOffOverride: a
                    } = n, u = l.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: o,
                        collectEnabled: !a && (u ? i : o),
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
                    }, r = (0, i.default)([o.default], () => o.default.getCurrentUser()), l = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: s,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: _
                    } = u({
                        user: r,
                        config: l
                    }), E = s && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: s,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: _
                    }
                },
                _ = (0, r.createExperiment)({
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
                E = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = _.useExperiment({
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
        651693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isImageFile: function() {
                    return l
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
                o = /\.(png|jpe?g|webp|gif|heic|heif|dng)$/i,
                l = e => null != e && o.test(e),
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
                o = n("773336"),
                l = n("827032"),
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
                            tags: (0, l.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        s.tags.push(e)
                    });
                    let u = function() {
                        if ((0, o.isWeb)()) return "web";
                        {
                            let e = (0, o.getPlatformName)();
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
                o = n("414456"),
                l = n.n(o),
                s = n("627445"),
                a = n.n(s),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                _ = n("642906"),
                E = n("990893");

            function f(e) {
                var t, n, o, s, u, d;
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
                    step: h,
                    stepConfigs: N,
                    setBodyNode: p,
                    setFooterNode: T,
                    setModalOverlayNode: C,
                    setReadySlideId: A
                } = (0, _.usePaymentContext)(), R = N.find(e => e.key === h);
                r.useEffect(() => {
                    C(null)
                }, [h, C]), a(null != R, "Unknown step for current payment flow.");
                let g = null !== (u = null == R ? void 0 : null === (t = R.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    v = null == R ? void 0 : null === (n = R.options) || void 0 === n ? void 0 : n.bodyClassName,
                    m = void 0 !== I && I ? E.sliderBodyLarge : null == R ? void 0 : null === (o = R.options) || void 0 === o ? void 0 : o.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == R ? void 0 : null === (s = R.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? f : null, R.renderStep(S), null == h || g ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: l(E.body, v),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: h,
                                centered: !1,
                                onSlideReady: e => A(e),
                                children: N.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: l(E.sliderBody, m),
                                        ref: e => p(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => T(e)
                        }), (0, i.jsx)("div", {
                            ref: e => C(e)
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function S(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, _.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        821879: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                reducedPaymentInfoExperiment: function() {
                    return o
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

            function o() {
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
                o = n("77078"),
                l = n("112679"),
                s = n("55689"),
                a = n("676379"),
                u = n("697218"),
                d = n("599110"),
                c = n("659500"),
                _ = n("719923"),
                E = n("49111"),
                f = n("646718");

            function I(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: I,
                    onClose: S,
                    onComplete: h,
                    onSubscriptionConfirmation: N,
                    analyticsLocations: p,
                    analyticsObject: T,
                    analyticsLocation: C,
                    analyticsSourceLocation: A,
                    isGift: R = !1,
                    giftMessage: g,
                    subscriptionTier: v,
                    trialId: m,
                    postSuccessGuild: L,
                    openInvoiceId: O,
                    applicationId: D,
                    referralTrialOfferId: U,
                    giftRecipient: M,
                    returnRef: P,
                    subscription: y
                } = null != e ? e : {}, b = !1, w = (0, r.v4)(), F = u.default.getCurrentUser(), G = (0, _.isPremiumExactly)(F, f.PremiumTypes.TIER_2);
                (0, o.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: r,
                            ...o
                        } = n;
                        return (0, i.jsx)(e, {
                            ...o,
                            loadId: w,
                            subscriptionTier: v,
                            skuId: v,
                            isGift: R,
                            giftMessage: g,
                            giftRecipient: M,
                            initialPlanId: t,
                            followupSKUInfo: I,
                            onClose: (e, t) => {
                                r(), null == S || S(e), e && (null == N || N(), !R && null != t && t === f.PremiumSubscriptionSKUs.TIER_2 && !G && c.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                b = !0, null == h || h(), !R && (0, a.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: N,
                            analyticsLocations: p,
                            analyticsObject: T,
                            analyticsLocation: C,
                            analyticsSourceLocation: A,
                            trialId: m,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: O,
                            applicationId: D,
                            referralTrialOfferId: U,
                            returnRef: P,
                            subscription: y
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !b && d.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: w,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : T,
                            source: A,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: R,
                            eligible_for_trial: null != m,
                            application_id: D,
                            location_stack: p
                        }), (0, l.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == S || S(b), b && (null == N || N())
                    },
                    onCloseRequest: E.NOOP
                })
            }
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return r
                },
                default: function() {
                    return _
                }
            });
            var i, r, o = n("759843"),
                l = n("872717"),
                s = n("913144"),
                a = n("271938"),
                u = n("840707"),
                d = n("482931"),
                c = n("49111");
            (i = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required", i.USER_SETTINGS_UPDATE = "user_settings_update", i.GUILD_PHONE_REQUIRED = "guild_phone_required", i.MFA_PHONE_UPDATE = "mfa_phone_update", i.CONTACT_SYNC = "contact_sync";
            var _ = {
                setCountryCode(e) {
                    s.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => l.default.delete({
                    url: c.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = a.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), l.default.post({
                        url: c.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => l.default.post({
                    url: c.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => l.default.post({
                    url: c.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => l.default.post({
                    url: c.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        r = {},
                        l = a.default.getFingerprint();
                    null != l && "" !== l && (r["X-Fingerprint"] = l), i && (r.authorization = "");
                    let _ = await u.default.post({
                        url: c.Endpoints.VERIFY_PHONE,
                        headers: r,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: o.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && s.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), _.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return i
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return r
                }
            });
            let i = "PHONE_VERIFICATION_MODAL_KEY",
                r = 6
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                o = n("880731");

            function l(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, l = (0, r.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return l ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("526887"),
                l = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(o.ConfettiCannonContext), t = (0, r.default)([l.default], () => l.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, r, o) => {
                        var l, s;
                        let a = (null == o ? void 0 : o.settings) != null ? {
                                ...t,
                                ...o.settings
                            } : t,
                            u = n(a);
                        e(i, r, u, (null !== (l = null == o ? void 0 : o.count) && void 0 !== l ? l : a.confettiCount) * (null !== (s = null == o ? void 0 : o.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [e, n, t]);
                return s
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
                    return h
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("872717"),
                l = n("913144"),
                s = n("775433"),
                a = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                _ = n("646718"),
                E = n("49111");
            let f = "nonSubscriber";
            async function I() {
                try {
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await o.default.get({
                        url: E.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [f]: e.non_subscriber,
                                [_.PremiumSubscriptionSKUs.TIER_0]: e[_.PremiumSubscriptionSKUs.TIER_0],
                                [_.PremiumSubscriptionSKUs.TIER_2]: e[_.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? l.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : l.default.dispatch({
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
                N(r, i, t, n)
            }

            function h(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), o = (0, r.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), l = (0, r.default)([a.default], () => a.default.getCurrentUser());
                i.useEffect(() => {
                    N(l, o, t, n)
                }, [l, o, t, n])
            }

            function N(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), i && (!u.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(_.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(_.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(_.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(_.PremiumSubscriptionSKUs.TIER_2)))
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
            let o = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                l = o;
            class s extends i.default.Store {
                initialize() {
                    l = o
                }
                getState() {
                    return l
                }
                shouldFetchPremiumLikelihood() {
                    return !l.isFetching && !l.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var a = new s(r.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    l.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    l.premiumLikelihood = t, l.fetched = !0, l.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    l.isFetching = !1
                },
                LOGOUT: function() {
                    l.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
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
            var o = r
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
                    return _
                },
                getProfilePreviewField: function() {
                    return E
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
                o = n("234251"),
                l = n("783142"),
                s = n("26989");

            function a(e) {
                return i.useMemo(() => {
                    let t = s.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let r in t) {
                        var i;
                        let o = t[r],
                            l = null === (i = o[e]) || void 0 === i ? void 0 : i.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(r))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, r.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, o.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, r.setPendingAvatarDecoration)(void 0);
                    return
                }(0, r.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, r.setPendingProfileEffectId)(void 0);
                    return
                }(0, r.setPendingProfileEffectId)(e)
            }

            function E(e, t, n) {
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
                o = n("685665"),
                l = n("929423");
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
                    analyticsLocations: _
                } = (0, o.default)(), E = (0, i.useCallback)(() => {
                    null != t && (0, l.initGuildIdentitySettings)(t, null != d ? d : _), r.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, u, d, c, _]);
                return E
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return l
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var i, r, o = n("773336");
            let l = null;

            function s() {
                return (0, o.isAndroid)(), null
            }(i = r || (r = {})).REMINDER = "reminder", i.TOP_MESSAGE_PUSH = "top_messages_push", i.TRENDING_CONTENT_PUSH = "trending_content_push"
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
            var i, r, o = n("991170"),
                l = n("719923"),
                s = n("24373"),
                a = n("49111");
            (i = r || (r = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let i = l.default.canUseCustomStickersEverywhere(t);
                    if ((0, s.isStandardSticker)(e)) return 0;
                    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || o.default.can({
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
                    return N
                }
            }), n("424973");
            var i = n("917351"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
                s = n("80507"),
                a = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let _ = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let E = new s.default({
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
                    u.default.isLoaded && E.compute()
                },
                I = () => {
                    f()
                };

            function S() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(r.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), _.pendingUsages)
            }
            class h extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (_ = e), this.syncWith([u.default], I), this.syncWith([a.default], S)
                }
                getState() {
                    return _
                }
                hasPendingUsage() {
                    return _.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            h.displayName = "StickersPersistedStore", h.persistKey = "StickersPersistedStoreV2";
            var N = new h(l.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), _.pendingUsages.push({
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
                    _.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return E
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
                    return h
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return p
                },
                setPendingThemeColors: function() {
                    return T
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return A
                },
                setTryItOutBanner: function() {
                    return R
                },
                setTryItOutThemeColors: function() {
                    return g
                }
            });
            var i = n("872717"),
                r = n("913144"),
                o = n("448993"),
                l = n("884351"),
                s = n("845579"),
                a = n("697218"),
                u = n("599110"),
                d = n("49111"),
                c = n("646718");

            function _(e) {
                u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, u;
                let c = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let _ = s.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = l.default.parse(void 0, e.bio).content);
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
                        let e = new o.APIError(n);
                        r.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new o.APIError(t);
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

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function N(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function T(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function A(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function R(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function g(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("702976");
            var i = n("446674"),
                r = n("913144"),
                o = n("9294"),
                l = n("49111");
            let s = {},
                a = {},
                u = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, o.parseExtraDataFromInviteKey)(e),
                    r = s[e],
                    a = null != r ? {
                        state: l.InviteStates.RESOLVING,
                        ...r
                    } : {
                        state: l.InviteStates.RESOLVING,
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
                    t.state = "banned" in e && e.banned ? l.InviteStates.BANNED : l.InviteStates.EXPIRED
                })
            }
            class _ extends i.default.Store {
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
            _.displayName = "InviteStore";
            var E = new _(r.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, o.parseExtraDataFromInviteKey)(t);
                    s = {
                        ...s,
                        [t]: {
                            code: n.baseCode,
                            state: l.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = l.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = l.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = l.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = l.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return a[e.code] = e.error, d(e.code, e => {
                        e.state = l.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = l.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        330387: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = null;
            class l extends i.default.Store {
                hasAction() {
                    return null != o
                }
                getAction() {
                    return o
                }
            }

            function s(e) {
                o = e.requiredAction
            }
            l.displayName = "UserRequiredActionStore";
            var a = new l(r.default, {
                CONNECTION_OPEN: s,
                USER_REQUIRED_ACTION_UPDATE: s
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("627445"),
                r = n.n(i),
                o = n("446674"),
                l = n("913144"),
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
            class d extends o.default.Store {
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
            let c = new d(l.default, {
                WINDOW_INIT: function(e) {
                    r(!a.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: o
                    } = e;
                    return a.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: o
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
            var _ = c
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
                o = n("414456"),
                l = n.n(o),
                s = n("77078"),
                a = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: o,
                    flowerStarClassName: d,
                    ...c
                } = e, _ = r.Children.only(t), E = (0, s.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: l(u.flowerStarContainer, o),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(a.default, {
                        ...c,
                        className: l(d, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: l(u.childContainer, {
                            [u.redesignIconChildContainer]: E
                        }),
                        children: _
                    })]
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return S
                },
                default: function() {
                    return N
                }
            });
            var i, r, o = n("37983"),
                l = n("884691"),
                s = n("414456"),
                a = n.n(s),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                _ = n("145131"),
                E = n("396792");
            (i = r || (r = {})).DEFAULT = "default", i.SMALL = "small";
            let f = {
                    default: E.shineDefault,
                    small: E.shineSmall
                },
                I = {
                    default: E.shineInnerDefault,
                    small: E.shineInnerSmall
                };
            class S extends l.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, o.jsx)(u.default.div, {
                        ...i,
                        className: a(E.shineContainer, e, {
                            [E.shinePaused]: n
                        }),
                        children: (0, o.jsx)(_.default, {
                            align: _.default.Align.CENTER,
                            justify: _.default.Justify.CENTER,
                            className: f[t],
                            children: (0, o.jsx)("div", {
                                className: I[t]
                            })
                        })
                    })
                }
            }
            S.defaultProps = {
                shineSize: "default"
            };
            let h = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: r,
                    pauseAnimation: s,
                    shineSize: u = "default",
                    shinePaused: _,
                    buttonShineClassName: f,
                    onlyShineOnHover: I,
                    ...h
                } = e, N = l.createRef(), p = (0, c.default)(N), T = !i && !r && !0 !== s && (!I || p);
                return (0, o.jsxs)(d.Button, {
                    buttonRef: N,
                    ...h,
                    className: a(E.shinyButton, n),
                    disabled: i,
                    submitting: r,
                    children: [t, T ? (0, o.jsx)(S, {
                        shinePaused: _,
                        className: a(E.buttonShine, I ? E.onlyShineOnHover : void 0, f),
                        shineSize: u
                    }) : null]
                })
            };
            h.ShineSizes = r;
            var N = h
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return l
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
                o = n("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                s = () => (0, o.useLazyValue)(() => l()),
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
                o = n.n(r),
                l = n("384737"),
                s = n("448052"),
                a = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
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
                        height: r = 24,
                        color: f = "currentColor",
                        transition: I = _.transition,
                        className: S,
                        foreground: h,
                        expanded: N,
                        ...p
                    } = e, {
                        enabled: T
                    } = (0, d.useRedesignIconContext)(), C = t;
                    if (!0 === N ? C = E.DOWN : !1 === N && (C = E.RIGHT), T) {
                        let e = {
                            [E.UP]: u.ChevronSmallUpIcon,
                            [E.DOWN]: l.ChevronSmallDownIcon,
                            [E.LEFT]: s.ChevronSmallLeftIcon,
                            [E.RIGHT]: a.ChevronSmallRightIcon
                        } [C];
                        return (0, i.jsx)(e, {
                            ...p,
                            className: S,
                            width: n,
                            height: r,
                            color: f,
                            colorClass: h
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: o(S, I, C),
                        width: n,
                        height: r,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(p),
                        children: (0, i.jsx)("path", {
                            className: h,
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
                o = n("733154"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, o.ChatIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196"),
                o = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: o = "currentColor",
                        foreground: l,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: o,
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
                o = n("197801"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, o.SettingsIcon, void 0, {
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
                o = n("998460"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, l.default)(s),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, o.GiftIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function o(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
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
                o = n("202909"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        viewBox: o = "0 0 24 24",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: o,
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, o.NitroWheelIcon, void 0, {
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
                o = n("504318"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: o,
                            fill: r
                        })
                    })
                }, o.PencilIcon, void 0, {
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
                o = n("876726"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: o,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: r
                        })
                    })
                }, o.PlayIcon, void 0, {
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
                o = n("424823"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: r,
                            className: o,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, o.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("469563"),
                o = n("31745"),
                l = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        className: o,
                        foreground: l
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: o,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: l,
                            fill: r,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, o.CirclePlusIcon, void 0, {
                    size: 16
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
                o = n("390300"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: o,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: o,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, o.VoiceNormalIcon, void 0, {
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
                o = n("287083"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: r = "currentColor",
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
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
                }, o.StageIcon, void 0, {
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
                o = n("276825"),
                l = n("75196"),
                s = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: r
                        })
                    })
                }, o.CheckmarkSmallIcon, void 0, {
                    size: 16
                })
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
                    return _
                },
                makeCssUrlString: function() {
                    return E
                },
                getPalette: function() {
                    return I
                },
                getPaletteForAvatar: function() {
                    return S
                },
                readFileAsBase64: function() {
                    return N
                },
                dataUriFileSize: function() {
                    return p
                },
                dataUrlToFile: function() {
                    return T
                },
                isPNGAnimated: function() {
                    return C
                }
            }), n("424973"), n("101997"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102");
            var i = n("627445"),
                r = n.n(i),
                o = n("917351"),
                l = n.n(o),
                s = n("48648"),
                a = n.n(s);

            function u(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r,
                    minWidth: o = 0,
                    minHeight: l = 0
                } = e;
                if (t !== i || n !== r) {
                    let e = t > i ? i / t : 1;
                    t = Math.max(Math.round(t * e), o), n = Math.max(Math.round(n * e), l);
                    let s = n > r ? r / n : 1;
                    t = Math.max(Math.round(t * s), o), n = Math.max(Math.round(n * s), l)
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
                } = e, o = 1;
                t > i && (o = i / t), t = Math.round(t * o);
                let l = 1;
                return (n = Math.round(n * o)) > r && (l = r / n), Math.min(o * l, 1)
            }

            function _(e) {
                let {
                    width: t,
                    height: n,
                    maxWidth: i,
                    maxHeight: r
                } = e;
                return t === n ? 1 : Math.min(Math.max(i / t, r / n), 1)
            }

            function E(e) {
                return null == e || "" === e ? "none" : "url(".concat(e, ")")
            }
            let f = [
                [0, 0, 0]
            ];

            function I(e, t, n) {
                let i = document.createElement("canvas"),
                    r = i.getContext("2d");
                if (null == r) return f;
                let o = i.width = 0 === e.width ? 128 : e.width,
                    l = i.height = 0 === e.height ? 128 : e.height;
                r.drawImage(e, 0, 0, o, l);
                let s = r.getImageData(0, 0, o, l).data,
                    u = function(e, t, n) {
                        let i = [];
                        for (let r = 0, o, l, s, a, u; r < t; r += n) l = e[(o = 4 * r) + 0], s = e[o + 1], a = e[o + 2], (void 0 === (u = e[o + 3]) || u >= 125) && !(l > 250 && s > 250 && a > 250) && i.push([l, s, a]);
                        return i
                    }(s, o * l, n),
                    d = a(u, t);
                return "boolean" == typeof d ? f : d.palette()
            }
            let S = e => "number" == typeof e ? null : h(e),
                h = l.memoize(e => new Promise((t, n) => {
                    let i = new Image;
                    i.crossOrigin = "Anonymous", i.onerror = e => {
                        n(e), i.onerror = i.onload = null, i = null
                    }, i.onload = () => {
                        t(I(i, 5, 10)), i.onerror = i.onload = null, i = null
                    }, i.src = e
                }));

            function N(e) {
                return new Promise((t, n) => {
                    let i = new FileReader;
                    i.readAsDataURL(e), i.onload = () => {
                        r("string" == typeof i.result, "Result must be a string"), t(i.result)
                    }, i.onerror = e => n(e)
                })
            }

            function p(e) {
                let t = e.split(";base64,");
                return r(2 === t.length, "Input data is not a valid image."), atob(t[1]).length
            }
            async function T(e, t, n) {
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
            async function C(e) {
                var t;
                let n = null === (t = e.type) || void 0 === t ? void 0 : t.split(";")[0];
                if ("image/png" !== n) throw Error("File is not a PNG");
                let i = await e.text(),
                    r = i.indexOf("IDAT");
                return !!(r > 0) && -1 !== i.substring(0, r).indexOf("acTL") || !1
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
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return s
                }
            });
            var i = n("884691"),
                r = n("446674"),
                o = n("244201"),
                l = n("471671");

            function s() {
                let {
                    windowId: e
                } = i.useContext(o.default);
                return (0, r.useStateFromStores)([l.default], () => l.default.isFocused(e), [e])
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
                o = n("118810");
            let l = {
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
                    (0, o.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = l) {
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
                o = n("157590");
            let l = (0, r.v4)(),
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
                    t ? s.has(t) ? this.elementId = s.get(t) || "" : s.set(t, (0, r.v4)()) : this.elementId = l;
                    let u = this.getVisibilityObserverId();
                    !a.has(u) && a.set(u, new o.default({
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
                    return o
                }
            }), n("222007"), (r = i || (i = {})).STABLE = "stable", r.BETA = "beta", r.ALPHA = "alpha", r.PTB = "ptb", r.CANARY = "canary", r.STAGING = "staging", r.DEVELOPMENT = "development";
            let o = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);