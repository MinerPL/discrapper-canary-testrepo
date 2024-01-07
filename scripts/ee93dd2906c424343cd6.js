(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31257"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var l = 0, r = 0; l < i; l++) {
                    for (var s = e.charCodeAt(l); r < n;)
                        if (t.charCodeAt(r++) === s) continue e;
                    return !1
                }
                return !0
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return l
                },
                updateCardInfo: function() {
                    return r
                },
                clearCardInfo: function() {
                    return s
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function r(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function s() {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return l
                }
            });
            var i = n("913144");

            function l() {
                i.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return C
                },
                accountDetailsClose: function() {
                    return p
                },
                disableAccount: function() {
                    return v
                },
                saveAccountRequest: function() {
                    return _
                },
                saveAccountChanges: function() {
                    return g
                },
                getHarvestStatus: function() {
                    return S
                },
                requestHarvest: function() {
                    return T
                },
                setPendingAvatar: function() {
                    return N
                },
                setPendingGlobalNameName: function() {
                    return m
                },
                setPendingAvatarDecoration: function() {
                    return I
                },
                setPendingProfileEffectId: function() {
                    return A
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return U
                },
                resetAllPending: function() {
                    return y
                },
                resetAndCloseUserProfileForm: function() {
                    return x
                },
                setDisableSubmit: function() {
                    return L
                }
            });
            var i = n("872717"),
                l = n("95410"),
                r = n("819855"),
                s = n("913144"),
                a = n("393414"),
                o = n("599110"),
                u = n("315102"),
                d = n("730622"),
                c = n("437822"),
                f = n("49111"),
                h = n("191349"),
                E = n("782340");

            function C() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function p() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function v(e, t) {
                let n = t ? E.default.Messages.DELETE_ACCOUNT : E.default.Messages.DISABLE_ACCOUNT,
                    l = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => i.default.post({
                    url: l,
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
                    c.default.logoutInternal(), (0, a.transitionTo)(f.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function _(e) {
                let t = await i.default.patch({
                        url: f.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, s.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && s.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return s.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function g(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: r,
                    password: a,
                    avatar: c,
                    avatarDecoration: C,
                    newPassword: p,
                    globalName: v
                } = e;
                return s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let s = {
                        username: t,
                        email: i,
                        email_token: r,
                        password: a,
                        avatar: c,
                        discriminator: n,
                        global_name: v,
                        new_password: p,
                        ...e
                    };
                    null === C && (s.avatar_decoration_id = null), null != C && (s.avatar_decoration_id = C.id, s.avatar_decoration_sku_id = C.skuId);
                    let o = l.default.get(f.DEVICE_TOKEN),
                        u = (0, h.getDevicePushProvider)();
                    null != u && null != o && (s.push_provider = u, s.push_token = o);
                    let d = l.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != h.DEVICE_PUSH_VOIP_PROVIDER && null != d && (s.push_voip_provider = h.DEVICE_PUSH_VOIP_PROVIDER, s.push_voip_token = d), _(s)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: E.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => s.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return o.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), s.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function S() {
                return i.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function T() {
                return i.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(E.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function m(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function I(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function A(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function R() {
                s.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function y() {
                s.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function x() {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function L(e) {
                s.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: a
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: s = "transparent",
                    secondaryColorClass: a = "",
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...d
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof s ? s : s.css,
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M12 23a11 11 0 1 0 0-22 11 11 0 0 0 0 22Zm4.7-15.7a1 1 0 0 0-1.4 0L12 10.58l-3.3-3.3a1 1 0 0 0-1.4 1.42L10.58 12l-3.3 3.3a1 1 0 1 0 1.42 1.4L12 13.42l3.3 3.3a1 1 0 0 0 1.4-1.42L13.42 12l3.3-3.3a1 1 0 0 0 0-1.4Z",
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M3 20c0 1.1.9 2 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20ZM13.5 22a.5.5 0 0 1-.5-.5v-7c0-.28.22-.5.5-.5h7c.28 0 .5.22.5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        className: a
                    })]
                })
            }
        },
        811513: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: a
                    })
                })
            }
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: a
                    })]
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: a
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.33 20.03c-.25.72.12 1.5.8 1.84a10.96 10.96 0 0 0 9.73 0 1.52 1.52 0 0 0 .8-1.84 6 6 0 0 0-11.33 0Z",
                        className: a
                    })]
                })
            }
        },
        390300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceNormalIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, r.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: a
                    })]
                })
            }
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("884691");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("872717"),
                l = n("913144"),
                r = n("568734"),
                s = n("299285"),
                a = n("49111"),
                o = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: r,
                            teamId: s
                        } = e, o = await i.default.post({
                            url: a.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: r,
                                guild_id: n,
                                team_id: s
                            }
                        }), u = o.body;
                        return null != n && null != r && l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: u
                        }), u
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = await i.default.get({
                            url: a.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), s = r.body;
                        return l.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: s
                        }), s
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, r = await i.default.post({
                            url: a.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), s = r.body;
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: s
                        }), s
                    },
                    async fetchApplications(e) {
                        let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = e;
                        if (!t && (n = e.filter(e => {
                                var t, n;
                                let i = s.default.getApplication(e),
                                    l = (0, r.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, a.ApplicationFlags.EMBEDDED),
                                    o = l && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != i && !o) && !s.default.isFetchingApplication(e) && !s.default.didFetchingApplicationFail(e) && e.length > 0
                            })), n.length > 0) {
                            let e;
                            l.default.dispatch({
                                type: "APPLICATIONS_FETCH",
                                applicationIds: n
                            });
                            try {
                                e = await i.default.get({
                                    url: a.Endpoints.APPLICATIONS_PUBLIC,
                                    query: new URLSearchParams(n.map(e => ["application_ids", e])).toString(),
                                    oldFormErrors: !0
                                })
                            } catch (e) {
                                throw l.default.dispatch({
                                    type: "APPLICATIONS_FETCH_FAIL",
                                    applicationIds: n
                                }), e
                            }
                            l.default.dispatch({
                                type: "APPLICATIONS_FETCH_SUCCESS",
                                applications: e.body
                            })
                        }
                    },
                    fetchApplication(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return l.default.dispatch({
                            type: "APPLICATION_FETCH",
                            applicationId: e
                        }), i.default.get({
                            url: a.Endpoints.APPLICATION_PUBLIC(e),
                            query: {
                                with_guild: t
                            },
                            oldFormErrors: !0
                        }).then(e => (l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: e.body
                        }), e.body)).catch(t => (l.default.dispatch({
                            type: "APPLICATION_FETCH_FAIL",
                            applicationId: e
                        }), Promise.reject(t)))
                    }
                }
        },
        843962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getChannelIconURL: function() {
                    return a
                }
            }), n("222007");
            var i = n("697218"),
                l = n("315102"),
                r = n("449008"),
                s = n("49111");

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                switch (e.type) {
                    case s.ChannelTypes.DM:
                        let [a] = e.recipients.map(i.default.getUser).filter(r.isNotNullish);
                        if (null == a) return null;
                        return a.getAvatarURL(void 0, t, n);
                    case s.ChannelTypes.GROUP_DM:
                        return l.default.getChannelIconURL({
                            id: e.id,
                            icon: e.icon,
                            applicationId: e.getApplicationId(),
                            size: t
                        })
                }
            }
        },
        821393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("808653"), n("222007"), n("424973");
            var i = n("884691"),
                l = n("446674"),
                r = n("398604"),
                s = n("745049");

            function a(e, t) {
                let n = (0, l.useStateFromStoresArray)([r.default], () => Object.values(r.default.getUsersForGuildEvent(e, null)), [e]),
                    a = (0, l.useStateFromStoresArray)([r.default], () => Object.values(r.default.getUsersForGuildEvent(e, t)), [e, t]),
                    o = (0, i.useMemo)(() => {
                        let e = a.reduce((e, t) => (e[t.user_id] = t, e), {}),
                            t = n.filter(t => {
                                let n = e[t.user_id];
                                return null == n || n.response === s.GuildScheduledEventUserResponses.INTERESTED
                            }),
                            i = a.filter(e => e.response === s.GuildScheduledEventUserResponses.INTERESTED),
                            l = new Set,
                            r = [],
                            o = e => {
                                !l.has(e.user_id) && (r.push(e), l.add(e.user_id))
                            };
                        return t.forEach(o), i.forEach(o), r
                    }, [n, a]);
                return o
            }
        },
        833843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("446674"),
                s = n("77078"),
                a = n("922770"),
                o = n("267567"),
                u = n("42203"),
                d = n("476765"),
                c = n("599110"),
                f = n("686904"),
                h = n("933326"),
                E = n("398604"),
                C = n("152475"),
                p = n("598639"),
                v = n("821393"),
                _ = n("613767"),
                g = n("822516"),
                S = n("93550"),
                T = n("707916"),
                N = n("255050"),
                m = n("644189"),
                I = n("965353"),
                A = n("360538"),
                R = n("403901"),
                U = n("369404"),
                y = n("745049"),
                x = n("49111"),
                L = n("175244");

            function w(e) {
                let {
                    guildEvent: t,
                    guild: n,
                    channel: l,
                    onActionTaken: s,
                    isHub: a,
                    isMember: u,
                    recurrenceId: d
                } = e, c = (0, E.isGuildScheduledEventActive)(t), f = (0, r.useStateFromStores)([E.default], () => E.default.isInterestedInEventRecurrence(t.id, d), [d, t]), h = (0, C.default)(t), p = (0, r.useStateFromStores)([o.default], () => o.default.isLurking(n.id), [n.id]), v = (0, _.useIsChannelPublic)(null == l ? void 0 : l.id, t.id), g = (0, U.default)({
                    guild: n,
                    channel: l,
                    guildScheduledEvent: t,
                    isActive: c,
                    recurrenceId: d,
                    onActionTaken: s
                }), {
                    entity_type: S
                } = t;
                return a ? (0, i.jsx)(m.default, {
                    isActive: c,
                    isUserLurking: p,
                    rsvped: f,
                    isMember: u,
                    isDetailsView: !0,
                    guildName: null == n ? void 0 : n.name,
                    isChannelPublic: v,
                    canInvite: h,
                    ...g
                }) : (0, i.jsx)(T.default, {
                    isActive: c,
                    isUserLurking: p,
                    rsvped: f,
                    isChannelPublic: v,
                    canInvite: h,
                    entityType: S,
                    ...g
                })
            }
            var b = e => {
                let {
                    guildScheduledEventId: t,
                    parentGuildId: n,
                    transitionState: o,
                    initialRecurrenceId: C,
                    onClose: _
                } = e, [T, m] = l.useState(C), U = (0, r.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(t), [t]), b = null == U ? void 0 : U.id, P = null == U ? void 0 : U.guild_id, {
                    guild: O,
                    isMember: D
                } = (0, p.default)(P, b), M = (0, a.default)(n), j = null == U ? void 0 : U.channel_id, V = (0, r.useStateFromStores)([u.default], () => u.default.getChannel(j), [j]), F = (0, d.useUID)(), [k, G] = l.useState(y.EventDetailSections.EVENT_INFO), B = (0, v.default)(b, T), H = (0, r.useStateFromStores)([E.default], () => E.default.getUserCount(b, T)), [Z, {
                    loading: W,
                    error: z
                }] = (0, f.default)(() => h.default.getGuildEventUsers(null == U ? void 0 : U.id, T, P));
                l.useEffect(() => {
                    null == U ? _() : c.default.track(x.AnalyticEvents.OPEN_MODAL, {
                        type: y.ANALYTICS_GUILD_EVENTS_MODAL_NAME,
                        guild_id: U.guild_id
                    })
                }, [U, _]);
                let Y = l.useRef(null),
                    [K, q] = l.useState(0);
                if (l.useLayoutEffect(() => {
                        var e, t;
                        let n = (null == U ? void 0 : U.recurrence_rule) != null ? 16 : 0;
                        q((null !== (t = null == Y ? void 0 : null === (e = Y.current) || void 0 === e ? void 0 : e.offsetHeight) && void 0 !== t ? t : 0) + n)
                    }, [Y, null == U ? void 0 : U.recurrence_rule]), null == U || null == O || !D && !M) return null;
                let X = e => {
                        e !== k && (e === y.EventDetailSections.RSVP_LIST && Z(), G(e))
                    },
                    J = null != T ? T : (0, g.getNextRecurrenceIdInEvent)(U);
                return (0, i.jsxs)(s.ModalRoot, {
                    size: s.ModalSize.MEDIUM,
                    transitionState: o,
                    "aria-labelledby": F,
                    className: L.root,
                    children: [(null == U ? void 0 : U.image) != null && (0, i.jsx)(N.default, {
                        source: (0, S.default)(U),
                        className: L.banner
                    }), (0, i.jsx)(I.default, {
                        onClose: _,
                        selectedTab: k,
                        onTabSelected: X,
                        userCount: H,
                        hasBanner: (null == U ? void 0 : U.image) != null,
                        isHub: M
                    }), (0, i.jsx)("div", {
                        className: L.container,
                        children: (0, i.jsx)(s.ModalContent, {
                            className: L.contentContainer,
                            style: {
                                height: K
                            },
                            children: (0, i.jsxs)(s.Slides, {
                                activeSlide: k,
                                width: 600,
                                centered: !1,
                                children: [(0, i.jsx)(s.Slide, {
                                    id: y.EventDetailSections.EVENT_INFO,
                                    children: (0, i.jsx)(A.default, {
                                        guildEvent: U,
                                        guild: O,
                                        channel: V,
                                        headerId: F,
                                        onClose: _,
                                        onClickInterestedCount: () => X(y.EventDetailSections.RSVP_LIST),
                                        isHub: M,
                                        containerRef: Y,
                                        recurrenceId: J,
                                        setRecurrenceId: m
                                    })
                                }), (0, i.jsx)(s.Slide, {
                                    id: y.EventDetailSections.RSVP_LIST,
                                    children: (0, i.jsx)(R.default, {
                                        guildEvent: U,
                                        recurrenceId: J,
                                        eventUsers: B,
                                        loading: W,
                                        containerHeight: K,
                                        error: z
                                    })
                                })]
                            })
                        })
                    }), (0, i.jsx)(s.ModalFooter, {
                        className: L.footer,
                        children: (0, i.jsx)(w, {
                            guildEvent: U,
                            isHub: M,
                            isMember: D,
                            guild: O,
                            channel: V,
                            onActionTaken: _,
                            recurrenceId: J
                        })
                    })]
                })
            }
        },
        965353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("424973");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                o = n("945330"),
                u = n("745049"),
                d = n("782340"),
                c = n("475267");

            function f(e) {
                let {
                    onClose: t,
                    selectedTab: n,
                    onTabSelected: r,
                    userCount: f,
                    hasBanner: h,
                    isHub: E = !1
                } = e, C = l.useRef(null);
                l.useEffect(() => {
                    var e, t, n;
                    return null === (n = C.current) || void 0 === n ? void 0 : null === (t = n.ref) || void 0 === t ? void 0 : null === (e = t.blur) || void 0 === e ? void 0 : e.call(t)
                }, []);
                let p = d.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_TAB_TITLE.format({
                        userCount: f
                    }),
                    v = [(0, i.jsx)(a.TabBar.Item, {
                        className: c.tabBarItem,
                        id: u.EventDetailSections.EVENT_INFO,
                        children: d.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE
                    }, "event-details")];
                return !E && v.push((0, i.jsx)(a.TabBar.Item, {
                    className: c.tabBarItem,
                    id: u.EventDetailSections.RSVP_LIST,
                    children: p
                }, "is-hub")), (0, i.jsxs)("div", {
                    className: c.container,
                    children: [(0, i.jsx)(a.Clickable, {
                        ref: C,
                        onClick: t,
                        className: c.closeButton,
                        "aria-label": d.default.Messages.CLOSE,
                        children: (0, i.jsx)(o.default, {
                            className: s(c.closeIcon, h && c.closeIconBanner)
                        })
                    }), (0, i.jsx)(a.TabBar, {
                        className: c.tabBar,
                        "aria-label": d.default.Messages.OPTIONS,
                        selectedItem: n,
                        type: "top",
                        onItemSelect: r,
                        children: v
                    })]
                })
            }
        },
        360538: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return b
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("446674"),
                o = n("77078"),
                u = n("970728"),
                d = n("401642"),
                c = n("26989"),
                f = n("305961"),
                h = n("580357"),
                E = n("476263"),
                C = n("155207"),
                p = n("158998"),
                v = n("933326"),
                _ = n("398604"),
                g = n("882550"),
                S = n("466148"),
                T = n("189443"),
                N = n("909151"),
                m = n("427554"),
                I = n("393745"),
                A = n("586403"),
                R = n("49111"),
                U = n("782340"),
                y = n("171632");

            function x(e) {
                var t;
                let {
                    creator: n,
                    guildId: l
                } = e, r = (0, a.useStateFromStores)([c.default], () => c.default.getMember(l, n.id), [n, l]);
                return (0, i.jsxs)("div", {
                    className: y.row,
                    children: [(0, i.jsx)(o.Avatar, {
                        size: o.AvatarSizes.SIZE_20,
                        src: n.getAvatarURL(l, 20),
                        "aria-label": null !== (t = null == r ? void 0 : r.nick) && void 0 !== t ? t : p.default.getName(n),
                        className: y.icon
                    }), (0, i.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: U.default.Messages.GUILD_EVENT_CREATED_BY_HOOK.format({
                            usernameHook: function() {
                                var e, t;
                                return (0, i.jsx)(o.Clickable, {
                                    onClick: () => (0, d.openUserProfileModal)({
                                        userId: n.id,
                                        guildId: l,
                                        analyticsLocation: {
                                            section: R.AnalyticsSections.SCHEDULED_GUILD_EVENT_INFORMATION_DIALOG
                                        }
                                    }),
                                    className: y.creator,
                                    tag: "span",
                                    role: "link",
                                    children: (0, i.jsx)(o.NameWithRole, {
                                        name: null !== (e = null == r ? void 0 : r.nick) && void 0 !== e ? e : p.default.getName(n),
                                        color: null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : void 0
                                    })
                                }, "open-user-profile")
                            }
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    guild: t,
                    onClick: n,
                    onClose: r
                } = e, a = l.useCallback(e => {
                    null == n || n(e), null != n && (null == r || r(e))
                }, [n, r]), u = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(E.default, {
                        guild: t,
                        size: E.default.Sizes.MINI,
                        active: !0,
                        className: s(y.guildIcon, y.icon)
                    }), (0, i.jsx)(h.default, {
                        guild: t,
                        tooltipPosition: "top",
                        tooltipColor: o.Tooltip.Colors.PRIMARY,
                        size: 16,
                        className: y.guildBadge
                    }), (0, i.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: y.linkText,
                        children: t.name
                    })]
                });
                return (0, i.jsx)("div", {
                    className: y.row,
                    children: null != n ? (0, i.jsx)(o.Clickable, {
                        onClick: a,
                        className: y.clickable,
                        role: "link",
                        children: u
                    }) : u
                })
            }

            function w(e) {
                let {
                    userCount: t,
                    onClick: n
                } = e;
                return (0, i.jsxs)("div", {
                    className: y.row,
                    children: [(0, i.jsx)(C.default, {
                        width: 20,
                        height: 20,
                        className: y.icon
                    }), (0, i.jsx)(o.Clickable, {
                        onClick: n,
                        className: y.interestedCount,
                        children: (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: U.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                                count: t
                            })
                        })
                    })]
                })
            }

            function b(e) {
                let {
                    guildEvent: t,
                    guild: n,
                    channel: r,
                    headerId: s,
                    onClose: d,
                    onClickInterestedCount: c,
                    isHub: h = !1,
                    containerRef: E,
                    recurrenceId: C,
                    setRecurrenceId: p
                } = e, R = (0, a.useStateFromStores)([f.default], () => null != f.default.getGuild(n.id), [n.id]), {
                    startTime: U,
                    endTime: b
                } = (0, S.default)(t.id, C), P = (0, a.useStateFromStores)([_.default], () => _.default.getUserCount(t.id, C)), O = l.useCallback(e => {
                    e.stopPropagation(), null != t && (0, u.transitionToGuildFromEventInvite)(t)
                }, [t]), D = (0, g.default)(t);
                l.useEffect(() => {
                    v.default.getGuildEventUserCounts(n.id, t.id, null != C ? [C] : []), v.default.getGuildEventsForCurrentUser(n.id)
                }, [n.id, t.id, C]);
                let M = (0, T.recurrenceRuleFromServer)(t.recurrence_rule);
                return (0, i.jsxs)("div", {
                    ref: E,
                    children: [(0, i.jsxs)("div", {
                        className: y.header,
                        children: [(0, i.jsx)(I.GuildEventTimeStatus, {
                            startTime: U.toISOString(),
                            endTime: null == b ? void 0 : b.toISOString(),
                            status: t.status,
                            eventType: t.entity_type,
                            guildEventId: t.id,
                            recurrenceId: C
                        }), (0, i.jsx)(o.Heading, {
                            id: s,
                            variant: "heading-lg/semibold",
                            color: "header-primary",
                            className: y.title,
                            children: t.name
                        })]
                    }), (0, i.jsxs)("div", {
                        className: y.body,
                        children: [(0, i.jsx)(L, {
                            guild: n,
                            onClick: R ? O : void 0,
                            onClose: d
                        }), (0, i.jsx)(A.default, {
                            guildScheduledEvent: t,
                            channel: r,
                            onClose: d
                        }), null != P && (0, i.jsx)(w, {
                            userCount: P,
                            onClick: c
                        }), !h && null != D && (0, i.jsx)(x, {
                            creator: D,
                            guildId: n.id
                        }, D.id), null != t.description && (0, i.jsx)("div", {
                            className: y.description,
                            children: (0, i.jsx)(N.default, {
                                description: t.description,
                                truncate: !1,
                                guildId: n.id
                            })
                        })]
                    }), null != M && (0, i.jsx)("hr", {
                        className: y.divider
                    }), null != M && (0, i.jsx)(m.default, {
                        guildId: n.id,
                        recurrenceRule: M,
                        guildEventId: t.id,
                        onRecurrenceClick: p,
                        hideScroller: !0,
                        activeRecurrenceId: C
                    })]
                })
            }
        },
        586403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("1339"),
                a = n("914169"),
                o = n("931874"),
                u = n("745049"),
                d = n("171632");

            function c(e) {
                let {
                    guildScheduledEvent: t,
                    channel: n,
                    onClose: c
                } = e, f = t.entity_type === u.GuildScheduledEventEntityTypes.EXTERNAL, h = l.useCallback(e => (0, a.createEventLocationClickHandler)(t, c)(e), [t, c]), E = (0, o.getLocationDataForEvent)(t, n);
                if (null == E) return null;
                let {
                    IconComponent: C,
                    locationName: p
                } = E, v = (0, i.jsxs)(i.Fragment, {
                    children: [null != C && (0, i.jsx)(C, {
                        width: 20,
                        height: 20,
                        className: d.channelIcon
                    }), (0, i.jsx)(r.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        className: d.locationText,
                        children: (0, s.guildEventDetailsParser)(p, !0)
                    })]
                });
                return (0, i.jsx)("div", {
                    className: d.row,
                    children: null != h ? (0, i.jsx)(r.Clickable, {
                        className: f ? d.externalLocation : d.channelLocation,
                        onClick: h,
                        children: v
                    }) : v
                })
            }
        },
        403901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("446674"),
                a = n("77078"),
                o = n("272030"),
                u = n("145079"),
                d = n("119184"),
                c = n("506885"),
                f = n("981601"),
                h = n("271938"),
                E = n("824563"),
                C = n("101125"),
                p = n("697218"),
                v = n("155207"),
                _ = n("398604"),
                g = n("745049"),
                S = n("782340"),
                T = n("758024");

            function N(e) {
                let {
                    children: t
                } = e;
                return (0, i.jsxs)("div", {
                    className: T.emptyContainer,
                    children: [(0, i.jsx)(d.default, {
                        children: (0, i.jsx)("div", {
                            className: T.circle,
                            children: (0, i.jsx)(v.default, {
                                height: 40,
                                width: 40,
                                className: T.icon
                            })
                        })
                    }), t]
                })
            }

            function m() {
                return (0, i.jsx)(N, {
                    children: (0, i.jsx)(a.Heading, {
                        color: "header-primary",
                        variant: "heading-xl/semibold",
                        className: T.title,
                        children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_EMPTY_TITLE
                    })
                })
            }

            function I() {
                return (0, i.jsx)(N, {
                    children: (0, i.jsx)(a.Heading, {
                        color: "header-secondary",
                        variant: "heading-md/semibold",
                        className: T.errorTitle,
                        children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_FETCH_ERROR
                    })
                })
            }

            function A(e) {
                let {
                    count: t
                } = e;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)("div", {
                        className: T.listRow,
                        children: [(0, i.jsx)("div", {
                            className: r(T.listRowCircle, T.listAvatar),
                            children: (0, i.jsx)(v.default, {
                                height: 14,
                                width: 14,
                                className: T.icon
                            })
                        }), (0, i.jsx)(a.Text, {
                            color: "text-normal",
                            variant: "text-md/normal",
                            children: S.default.Messages.GUILD_EVENT_DETAILS_USER_LIST_REMAINING.format({
                                userRemainCount: t
                            })
                        })]
                    })
                })
            }

            function R(e) {
                var t;
                let {
                    eventUser: n,
                    onContextMenu: l
                } = e, o = (0, s.useStateFromStores)([p.default], () => p.default.getUser(n.user_id)), d = null === (t = n.member) || void 0 === t ? void 0 : t.guildId, v = (0, s.useStateFromStores)([C.default, E.default, h.default], () => n.user_id === h.default.getId() ? C.default.getStatus() : E.default.getStatus(n.user_id, d), [n.user_id, d]);
                return null == o ? null : (0, i.jsx)(a.Popout, {
                    preload: () => (0, c.default)(o.id, o.getAvatarURL(d, 80), {
                        guildId: d
                    }),
                    renderPopout: e => (0, i.jsx)(f.default, {
                        ...e,
                        userId: n.user_id,
                        guildId: d
                    }),
                    position: "left",
                    spacing: 16,
                    children: (e, t) => {
                        var s, d;
                        let {
                            isShown: c
                        } = t;
                        return (0, i.jsxs)(a.Clickable, {
                            className: r(T.listRow, T.interactiveRow, {
                                [T.selected]: c
                            }),
                            onContextMenu: e => l(e, o),
                            ...e,
                            children: [(0, i.jsx)(a.Avatar, {
                                src: o.getAvatarURL(null === (s = n.member) || void 0 === s ? void 0 : s.guildId, 24),
                                "aria-label": o.username,
                                size: a.AvatarSizes.SIZE_24,
                                className: T.listAvatar,
                                status: v
                            }), (0, i.jsx)(u.default, {
                                user: o,
                                className: T.listName,
                                discriminatorClass: T.listDiscriminator,
                                nick: null === (d = n.member) || void 0 === d ? void 0 : d.nick
                            })]
                        })
                    }
                })
            }

            function U(e) {
                let {
                    eventUsers: t,
                    usersNotShownCount: n = 0,
                    onContextMenu: l
                } = e;
                return (0, i.jsxs)(a.ScrollerThin, {
                    className: T.listScroller,
                    children: [t.map(e => (0, i.jsx)(R, {
                        eventUser: e,
                        onContextMenu: l
                    }, e.user_id)), n > 0 && (0, i.jsx)(A, {
                        count: n
                    })]
                })
            }

            function y(e) {
                let {
                    children: t,
                    style: n
                } = e;
                return (0, i.jsx)("div", {
                    className: T.container,
                    style: null != n ? n : {},
                    children: t
                })
            }

            function x(e) {
                let {
                    children: t,
                    height: n
                } = e;
                return (0, i.jsx)(y, {
                    style: {
                        height: n
                    },
                    children: t
                })
            }

            function L(e) {
                let {
                    guildEvent: t,
                    recurrenceId: l,
                    eventUsers: r,
                    loading: u,
                    error: d,
                    containerHeight: c
                } = e, f = (0, s.useStateFromStores)([_.default], () => _.default.getUserCount(t.id, l));
                if (u && 0 === r.length) return (0, i.jsx)(x, {
                    height: c,
                    children: (0, i.jsx)(a.Spinner, {
                        type: a.Spinner.Type.SPINNING_CIRCLE,
                        className: T.spinner
                    })
                });
                if (null != d && 0 === r.length) return (0, i.jsx)(x, {
                    height: c,
                    children: (0, i.jsx)(I, {})
                });
                let h = 0;
                return r.length >= g.MAX_RSVP_USER_DISPLAY_COUNT && f > g.MAX_RSVP_USER_DISPLAY_COUNT && (h = Math.max(f - r.length, 0)), 0 === r.length ? (0, i.jsx)(x, {
                    height: c,
                    children: (0, i.jsx)(m, {})
                }) : (0, i.jsx)(y, {
                    children: (0, i.jsx)(U, {
                        eventUsers: r,
                        onContextMenu: function(e, t) {
                            (0, o.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("406784").then(n.bind(n, "406784"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    user: t
                                })
                            })
                        },
                        usersNotShownCount: h
                    })
                })
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
                    return h
                }
            });
            var i = n("65597"),
                l = n("862205"),
                r = n("697218"),
                s = n("719923"),
                a = n("782340");
            let o = (0, l.createExperiment)({
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
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r,
                        autoUnfurlReactionTooltip: a,
                        collectOffOverride: o
                    } = n, u = s.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: !o && (u ? i : r),
                        autoUnfurlReactionTooltip: a
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
                        config: o.getCurrentConfig({
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
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), s = o.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: f
                    } = u({
                        user: l,
                        config: s
                    }), h = a && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: h,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: f
                    }
                },
                f = (0, l.createExperiment)({
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
                            getNewSettingsDescriptionLine1: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => a.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                h = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = f.useExperiment({
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
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                PaymentPortalBody: function() {
                    return C
                },
                PaymentPortalFooter: function() {
                    return p
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("627445"),
                o = n.n(a),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                f = n("642906"),
                h = n("990893");

            function E(e) {
                var t, n, r, a, u, d;
                let {
                    header: E,
                    isLargeModal: C,
                    stepProps: p
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
                    step: v,
                    stepConfigs: _,
                    setBodyNode: g,
                    setFooterNode: S,
                    setModalOverlayNode: T,
                    setReadySlideId: N
                } = (0, f.usePaymentContext)(), m = _.find(e => e.key === v);
                l.useEffect(() => {
                    T(null)
                }, [v, T]), o(null != m, "Unknown step for current payment flow.");
                let I = null !== (u = null == m ? void 0 : null === (t = m.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    A = null == m ? void 0 : null === (n = m.options) || void 0 === n ? void 0 : n.bodyClassName,
                    R = void 0 !== C && C ? h.sliderBodyLarge : null == m ? void 0 : null === (r = m.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == m ? void 0 : null === (a = m.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === d || d ? E : null, m.renderStep(p), null == v || I ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: s(h.body, A),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: v,
                                centered: !1,
                                onSlideReady: e => N(e),
                                children: _.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: s(h.sliderBody, R),
                                        ref: e => g(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => S(e)
                        }), (0, i.jsx)("div", {
                            ref: e => T(e)
                        })]
                    })]
                })
            }

            function C(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function p(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                s = n("112679"),
                a = n("55689"),
                o = n("676379"),
                u = n("697218"),
                d = n("599110"),
                c = n("659500"),
                f = n("719923"),
                h = n("49111"),
                E = n("646718");

            function C(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: C,
                    onClose: p,
                    onComplete: v,
                    onSubscriptionConfirmation: _,
                    analyticsLocations: g,
                    analyticsObject: S,
                    analyticsLocation: T,
                    analyticsSourceLocation: N,
                    isGift: m = !1,
                    giftMessage: I,
                    subscriptionTier: A,
                    trialId: R,
                    postSuccessGuild: U,
                    openInvoiceId: y,
                    applicationId: x,
                    referralTrialOfferId: L,
                    giftRecipient: w,
                    returnRef: b,
                    subscription: P
                } = null != e ? e : {}, O = !1, D = (0, l.v4)(), M = u.default.getCurrentUser(), j = (0, f.isPremiumExactly)(M, E.PremiumTypes.TIER_2);
                (0, r.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: l,
                            ...r
                        } = n;
                        return (0, i.jsx)(e, {
                            ...r,
                            loadId: D,
                            subscriptionTier: A,
                            skuId: A,
                            isGift: m,
                            giftMessage: I,
                            giftRecipient: w,
                            initialPlanId: t,
                            followupSKUInfo: C,
                            onClose: (e, t) => {
                                l(), null == p || p(e), e && (null == _ || _(), !m && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !j && c.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                O = !0, null == v || v(), !m && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: _,
                            analyticsLocations: g,
                            analyticsObject: S,
                            analyticsLocation: T,
                            analyticsSourceLocation: N,
                            trialId: R,
                            postSuccessGuild: U,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: y,
                            applicationId: x,
                            referralTrialOfferId: L,
                            returnRef: b,
                            subscription: P
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !O && d.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: D,
                            payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                            location: null != T ? T : S,
                            source: N,
                            subscription_type: h.SubscriptionTypes.PREMIUM,
                            is_gift: m,
                            eligible_for_trial: null != R,
                            application_id: x,
                            location_stack: g
                        }), (0, s.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == p || p(O), O && (null == _ || _())
                    },
                    onCloseRequest: h.NOOP
                })
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return l
                }
            });
            var i = n("913144");
            let l = e => {
                i.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return o
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
                    return f
                },
                getProfilePreviewField: function() {
                    return h
                },
                showRemoveAvatar: function() {
                    return E
                },
                showRemoveBanner: function() {
                    return C
                }
            }), n("424973");
            var i = n("884691"),
                l = n("152584"),
                r = n("234251"),
                s = n("783142"),
                a = n("26989");

            function o(e) {
                return i.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let r = t[l],
                            s = null === (i = r[e]) || void 0 === i ? void 0 : i.avatar;
                        null != s && (null == n[s] && (n[s] = []), n[s].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function u(e, t) {
                (0, s.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, r.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function f(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectId)(void 0);
                    return
                }(0, l.setPendingProfileEffectId)(e)
            }

            function h(e, t, n) {
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

            function E(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function C(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        520497: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("49111");

            function l(e) {
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
                    return l
                },
                getStickerSendability: function() {
                    return u
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, l, r = n("991170"),
                s = n("719923"),
                a = n("24373"),
                o = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let i = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
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
                    return _
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                r = n("446674"),
                s = n("913144"),
                a = n("80507"),
                o = n("374363"),
                u = n("364685"),
                d = n("49111"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let h = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => u.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                E = () => {
                    u.default.isLoaded && h.compute()
                },
                C = () => {
                    E()
                };

            function p() {
                var e;
                let t = null === (e = o.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                h.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class v extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), null != e && (f = e), this.syncWith([u.default], C), this.syncWith([o.default], p)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return h
                }
            }
            v.displayName = "StickersPersistedStore", v.persistKey = "StickersPersistedStoreV2";
            var _ = new v(s.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        h.track(e), f.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), E()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    f.pendingUsages = []
                }
            })
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return h
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return E
                },
                resetPendingProfileChanges: function() {
                    return C
                },
                setPendingBanner: function() {
                    return p
                },
                setPendingBio: function() {
                    return v
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingAccentColor: function() {
                    return g
                },
                setPendingThemeColors: function() {
                    return S
                },
                setTryItOutAvatar: function() {
                    return T
                },
                setTryItOutAvatarDecoration: function() {
                    return N
                },
                setTryItOutBanner: function() {
                    return m
                },
                setTryItOutThemeColors: function() {
                    return I
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("448993"),
                s = n("884351"),
                a = n("845579"),
                o = n("697218"),
                u = n("599110"),
                d = n("49111"),
                c = n("646718");

            function f(e) {
                u.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function h(e, t) {
                var n, u;
                let c = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let f = a.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = s.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await i.default.patch({
                        url: null != t ? d.Endpoints.GUILD_PROFILE(t, d.ME) : d.Endpoints.USER_PROFILE(d.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (u = n.body.profile_effect) || void 0 === u ? void 0 : u.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new r.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new r.APIError(t);
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function E() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function C() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function v(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function g(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function I(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
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
                l = n("884691"),
                r = n("414456"),
                s = n.n(r),
                a = n("77078"),
                o = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: d,
                    ...c
                } = e, f = l.Children.only(t), h = (0, a.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: s(u.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...c,
                        className: s(d, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: s(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return p
                },
                default: function() {
                    return _
                }
            });
            var i, l, r = n("37983"),
                s = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("458960"),
                d = n("77078"),
                c = n("252744"),
                f = n("145131"),
                h = n("396792");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let E = {
                    default: h.shineDefault,
                    small: h.shineSmall
                },
                C = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class p extends s.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, r.jsx)(u.default.div, {
                        ...i,
                        className: o(h.shineContainer, e, {
                            [h.shinePaused]: n
                        }),
                        children: (0, r.jsx)(f.default, {
                            align: f.default.Align.CENTER,
                            justify: f.default.Justify.CENTER,
                            className: E[t],
                            children: (0, r.jsx)("div", {
                                className: C[t]
                            })
                        })
                    })
                }
            }
            p.defaultProps = {
                shineSize: "default"
            };
            let v = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: l,
                    pauseAnimation: a,
                    shineSize: u = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: C,
                    ...v
                } = e, _ = s.createRef(), g = (0, c.default)(_), S = !i && !l && !0 !== a && (!C || g);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: _,
                    ...v,
                    className: o(h.shinyButton, n),
                    disabled: i,
                    submitting: l,
                    children: [t, S ? (0, r.jsx)(p, {
                        shinePaused: f,
                        className: o(h.buttonShine, C ? h.onlyShineOnHover : void 0, E),
                        shineSize: u
                    }) : null]
                })
            };
            v.ShineSizes = l;
            var _ = v
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return s
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return o
                }
            });
            var i = n("995008"),
                l = n.n(i),
                r = n("775560");
            let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                a = () => (0, r.useLazyValue)(() => s()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                s = n("384737"),
                a = n("448052"),
                o = n("748802"),
                u = n("260792"),
                d = n("77078"),
                c = n("75196"),
                f = n("4177");
            let h = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                E = e => {
                    let {
                        direction: t = h.DOWN,
                        width: n = 24,
                        height: l = 24,
                        color: E = "currentColor",
                        transition: C = f.transition,
                        className: p,
                        foreground: v,
                        expanded: _,
                        ...g
                    } = e, {
                        enabled: S
                    } = (0, d.useRedesignIconContext)(), T = t;
                    if (!0 === _ ? T = h.DOWN : !1 === _ && (T = h.RIGHT), S) {
                        let e = {
                            [h.UP]: u.ChevronSmallUpIcon,
                            [h.DOWN]: s.ChevronSmallDownIcon,
                            [h.LEFT]: a.ChevronSmallLeftIcon,
                            [h.RIGHT]: o.ChevronSmallRightIcon
                        } [T];
                        return (0, i.jsx)(e, {
                            ...g,
                            className: p,
                            width: n,
                            height: l,
                            color: E,
                            colorClass: v
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: r(p, C, T),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(g),
                        children: (0, i.jsx)("path", {
                            className: v,
                            fill: "none",
                            stroke: E,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            E.Directions = h;
            var C = E
        },
        109264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("733154"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M4.79805 3C3.80445 3 2.99805 3.8055 2.99805 4.8V15.6C2.99805 16.5936 3.80445 17.4 4.79805 17.4H7.49805V21L11.098 17.4H19.198C20.1925 17.4 20.998 16.5936 20.998 15.6V4.8C20.998 3.8055 20.1925 3 19.198 3H4.79805Z"
                        })
                    })
                }, r.ChatIcon, void 0, {
                    size: 24
                })
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("505088"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        backgroundColor: a,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != a ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: a
                        }) : null, (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, r.CircleXIcon, void 0, {
                    size: 24
                })
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196"),
                r = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: r = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: r,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("998460"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, s.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon, void 0, {
                    size: 24
                })
        },
        543289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196");

            function r(e) {
                let {
                    width: t = 104,
                    height: n = 80,
                    ...r
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, l.default)(r),
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("202909"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: a,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("304983"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, r.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("811513"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, r.GroupIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("876726"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, r.PlayIcon, void 0, {
                    size: 16
                })
        },
        368121: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("390300"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M11.383 3.07904C11.009 2.92504 10.579 3.01004 10.293 3.29604L6 8.00204H3C2.45 8.00204 2 8.45304 2 9.00204V15.002C2 15.552 2.45 16.002 3 16.002H6L10.293 20.71C10.579 20.996 11.009 21.082 11.383 20.927C11.757 20.772 12 20.407 12 20.002V4.00204C12 3.59904 11.757 3.23204 11.383 3.07904ZM14 5.00195V7.00195C16.757 7.00195 19 9.24595 19 12.002C19 14.759 16.757 17.002 14 17.002V19.002C17.86 19.002 21 15.863 21 12.002C21 8.14295 17.86 5.00195 14 5.00195ZM14 9.00195C15.654 9.00195 17 10.349 17 12.002C17 13.657 15.654 15.002 14 15.002V13.002C14.551 13.002 15 12.553 15 12.002C15 11.451 14.551 11.002 14 11.002V9.00195Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.VoiceNormalIcon, void 0, {
                    size: 24
                })
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("287083"),
                s = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, s.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: l
                        })
                    })
                }, r.StageIcon, void 0, {
                    size: 32
                })
        },
        686904: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var i = n("884691"),
                l = n("448993");

            function r(e, t) {
                let [n, r] = i.useState(!1), [s, a] = i.useState(null), o = async () => {
                    r(!0), a(null);
                    try {
                        let t = await e();
                        return r(!1), a(null), t
                    } catch (n) {
                        let e = new l.APIError(n);
                        return null == t || t(e), a(e), r(!1), null
                    }
                };
                return [o, {
                    loading: n,
                    error: s
                }]
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("884691"),
                l = n("446674"),
                r = n("244201"),
                s = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(r.default);
                return (0, l.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
            }
        },
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, l = n("817736"),
                r = n("118810");
            let s = {
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
                    let n = (0, l.findDOMNode)(e);
                    (0, r.isElement)(n, HTMLElement) && (this._nodes.set(n, e), this._components.set(e, n), t.observe(n))
                }
                unobserve(e) {
                    let t = this._observer;
                    if (null == t) return;
                    let n = this._components.get(e);
                    null != n && (this._nodes.delete(n), this._components.delete(e), this._visibleComponents.delete(e), t.unobserve(n))
                }
                constructor(e = s) {
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
                l = n("748820"),
                r = n("157590");
            let s = (0, l.v4)(),
                a = new Map,
                o = new Map;
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
                        t = o.get(e);
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
                    t ? a.has(t) ? this.elementId = a.get(t) || "" : a.set(t, (0, l.v4)()) : this.elementId = s;
                    let u = this.getVisibilityObserverId();
                    !o.has(u) && o.set(u, new r.default({
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
                    return l.default
                }
            }), n("6268");
            var i = n("157590"),
                l = n("235855")
        }
    }
]);