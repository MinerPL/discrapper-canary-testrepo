(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92558"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    r = e.length;
                if (r > n) return !1;
                if (r === n) return e === t;
                e: for (var u = 0, i = 0; u < r; u++) {
                    for (var l = e.charCodeAt(u); i < n;)
                        if (t.charCodeAt(i++) === l) continue e;
                    return !1
                }
                return !0
            }
        },
        437083: function(e, t, n) {
            var r = n("561449"),
                u = n("877297");
            e.exports = function(e) {
                return u(r(e))
            }
        },
        329252: function(e, t, n) {
            var r = n("877297"),
                u = n("164099");
            e.exports = function(e) {
                return r(u(e))
            }
        },
        957478: function(e, t, n) {
            var r = n("626785");
            e.exports = function(e, t) {
                return r(t, function(t) {
                    return e[t]
                })
            }
        },
        561449: function(e, t, n) {
            e.exports = function(e, t) {
                var n = -1,
                    r = e.length;
                for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
                return t
            }
        },
        877297: function(e, t, n) {
            var r = n("68421");
            e.exports = function(e, t) {
                var n = -1,
                    u = e.length,
                    i = u - 1;
                for (t = void 0 === t ? u : t; ++n < t;) {
                    var l = r(n, i),
                        a = e[l];
                    e[l] = e[n], e[n] = a
                }
                return e.length = t, e
            }
        },
        375128: function(e, t, n) {
            var r = n("437083"),
                u = n("329252"),
                i = n("725502");
            e.exports = function(e) {
                return (i(e) ? r : u)(e)
            }
        },
        164099: function(e, t, n) {
            var r = n("957478"),
                u = n("466731");
            e.exports = function(e) {
                return null == e ? [] : r(e, u(e))
            }
        },
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        190389: function(e, t, n) {
            "use strict";
            e.exports = n.p + "10edc9054f6bb1a7de74.svg"
        },
        723251: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return r
                },
                rgbaToDataURL: function() {
                    return u
                },
                thumbHashToDataURL: function() {
                    return i
                }
            }), n("70102"), n("424973"), n("222007"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("101997");

            function r(e) {
                let t = e[3],
                    n = 128 & e[2],
                    r = 128 & e[4];
                return (r ? n ? 5 : 7 : 7 & t) / (r ? 7 & t : n ? 5 : 7)
            }

            function u(e, t, n) {
                let r = 4 * e + 1,
                    u = 6 + t * (5 + r),
                    i = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, u >>> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, 73, 68, 65, 84, 120, 1],
                    l = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    a = 1,
                    o = 0;
                for (let e = 0, u = 0, l = r - 1; e < t; e++, l += r - 1)
                    for (i.push(e + 1 < t ? 0 : 1, 255 & r, r >> 8, 255 & ~r, r >> 8 ^ 255, 0), o = (o + a) % 65521; u < l; u++) {
                        let e = 255 & n[u];
                        i.push(e), o = (o + (a = (a + e) % 65521)) % 65521
                    }
                for (let [e, t] of(i.push(o >> 8, 255 & o, a >> 8, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + u]
                    ])) {
                    let n = -1;
                    for (let r = e; r < t; r++) n ^= i[r], n = (n = n >>> 4 ^ l[15 & n]) >>> 4 ^ l[15 & n];
                    n = ~n, i[t++] = n >>> 24, i[t++] = n >> 16 & 255, i[t++] = n >> 8 & 255, i[t++] = 255 & n
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...i))
            }

            function i(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: n,
                        max: u,
                        cos: i,
                        round: l
                    } = Math, a = e[0] | e[1] << 8 | e[2] << 16, o = e[3] | e[4] << 8, s = (63 & a) / 63, c = (a >> 6 & 63) / 31.5 - 1, d = (a >> 12 & 63) / 31.5 - 1, _ = a >> 23, E = o >> 15, f = u(3, E ? _ ? 5 : 7 : 7 & o), T = u(3, E ? 7 & o : _ ? 5 : 7), S = _ ? (15 & e[5]) / 15 : 1, A = (e[5] >> 4) / 15, p = _ ? 6 : 5, I = 0, R = (t, n, r) => {
                        let u = [];
                        for (let i = 0; i < n; i++)
                            for (let l = i ? 0 : 1; l * n < t * (n - i); l++) u.push(((e[p + (I >> 1)] >> ((1 & I++) << 2) & 15) / 7.5 - 1) * r);
                        return u
                    }, C = R(f, T, (a >> 18 & 31) / 31), N = R(3, 3, 1.25 * ((o >> 3 & 63) / 63)), P = R(3, 3, 1.25 * ((o >> 9 & 63) / 63)), O = _ && R(5, 5, A), U = r(e), h = l(U > 1 ? 32 : 32 * U), L = l(U > 1 ? 32 / U : 32), m = new Uint8Array(h * L * 4), M = [], D = [];
                    for (let e = 0, r = 0; e < L; e++)
                        for (let l = 0; l < h; l++, r += 4) {
                            let a = s,
                                o = c,
                                E = d,
                                A = S;
                            for (let e = 0, n = u(f, _ ? 5 : 3); e < n; e++) M[e] = i(t / h * (l + .5) * e);
                            for (let n = 0, r = u(T, _ ? 5 : 3); n < r; n++) D[n] = i(t / L * (e + .5) * n);
                            for (let e = 0, t = 0; e < T; e++)
                                for (let n = e ? 0 : 1, r = 2 * D[e]; n * T < f * (T - e); n++, t++) a += C[t] * M[n] * r;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let n = e ? 0 : 1, r = 2 * D[e]; n < 3 - e; n++, t++) {
                                    let e = M[n] * r;
                                    o += N[t] * e, E += P[t] * e
                                }
                            if (_)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let n = e ? 0 : 1, r = 2 * D[e]; n < 5 - e; n++, t++) A += O[t] * M[n] * r;
                            let p = a - 2 / 3 * o,
                                I = (3 * a - p + E) / 2,
                                R = I - E;
                            m[r] = u(0, 255 * n(1, I)), m[r + 1] = u(0, 255 * n(1, R)), m[r + 2] = u(0, 255 * n(1, p)), m[r + 3] = u(0, 255 * n(1, A))
                        }
                    return {
                        w: h,
                        h: L,
                        rgba: m
                    }
                }(e);
                return u(t.w, t.h, t.rgba)
            }
        },
        583367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchAppliedGuildBoostsForGuild: function() {
                    return c
                },
                fetchGuildBoostSlots: function() {
                    return d
                },
                applyToGuild: function() {
                    return _
                },
                unapplyFromGuild: function() {
                    return E
                },
                cancelGuildBoostSlot: function() {
                    return f
                },
                uncancelGuildBoostSlot: function() {
                    return T
                }
            });
            var r = n("872717"),
                u = n("913144"),
                i = n("448993"),
                l = n("783111"),
                a = n("522308"),
                o = n("521012"),
                s = n("49111");
            async function c(e) {
                let t = await r.default.get({
                        url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                        oldFormErrors: !0
                    }),
                    n = t.body.map(e => l.default.createFromServer(e));
                return u.default.dispatch({
                    type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS",
                    guildId: e,
                    appliedBoosts: n
                }), n
            }
            async function d() {
                let e = await r.default.get({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOTS,
                        oldFormErrors: !0
                    }),
                    t = e.body.map(e => a.default.createFromServer(e, o.default.getSubscriptionById(e.subscription_id)));
                return u.default.dispatch({
                    type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS",
                    guildBoostSlots: t
                }), t
            }
            async function _(e, t) {
                u.default.dispatch({
                    type: "GUILD_APPLY_BOOST_START"
                });
                try {
                    let n = await r.default.put({
                            url: s.Endpoints.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                            body: {
                                user_premium_guild_subscription_slot_ids: t
                            },
                            oldFormErrors: !0
                        }),
                        i = Array.isArray(n.body) ? n.body.map(l.default.createFromServer) : [l.default.createFromServer(n.body)];
                    return u.default.dispatch({
                        type: "GUILD_APPLY_BOOST_SUCCESS",
                        appliedGuildBoost: i
                    }), d(), i
                } catch (t) {
                    let e = new i.AppliedGuildBoostError(t);
                    throw u.default.dispatch({
                        type: "GUILD_APPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
            }
            async function E(e, t) {
                u.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_START"
                });
                try {
                    await r.default.delete({
                        url: s.Endpoints.APPLIED_GUILD_BOOST(e, t),
                        oldFormErrors: !0
                    }), d()
                } catch (t) {
                    let e = new i.AppliedGuildBoostError(t);
                    throw u.default.dispatch({
                        type: "GUILD_UNAPPLY_BOOST_FAIL",
                        error: e
                    }), e
                }
                u.default.dispatch({
                    type: "GUILD_UNAPPLY_BOOST_SUCCESS",
                    boostId: t
                })
            }
            async function f(e) {
                let t = await r.default.post({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOT_CANCEL(e),
                        oldFormErrors: !0
                    }),
                    n = a.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return u.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: n
                }), n
            }
            async function T(e) {
                let t = await r.default.post({
                        url: s.Endpoints.USER_GUILD_BOOST_SLOT_UNCANCEL(e),
                        oldFormErrors: !0
                    }),
                    n = a.default.createFromServer(t.body, o.default.getSubscriptionById(t.body.subscription_id));
                return u.default.dispatch({
                    type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS",
                    guildBoostSlot: n
                }), n
            }
        },
        112679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                updateStripePaymentRequest: function() {
                    return u
                },
                updateCardInfo: function() {
                    return i
                },
                clearCardInfo: function() {
                    return l
                },
                updateAddressInfo: function() {
                    return a
                },
                clearError: function() {
                    return o
                }
            });
            var r = n("913144");

            function u(e) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_STRIPE_PAYMENT_REQUEST_UPDATE",
                    stripePaymentMethod: e
                })
            }

            function i(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function l() {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CARD_INFO_UPDATE",
                    info: {
                        name: ""
                    },
                    isValid: !1
                })
            }

            function a(e, t) {
                r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_ADDRESS_INFO_UPDATE",
                    info: e,
                    isValid: t
                })
            }

            function o() {
                r.default.wait(() => r.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        55689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearPurchaseTokenAuthState: function() {
                    return u
                }
            });
            var r = n("913144");

            function u() {
                r.default.dispatch({
                    type: "BILLING_PURCHASE_TOKEN_AUTH_CLEAR_STATE"
                })
            }
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return S
                },
                disableAccount: function() {
                    return A
                },
                saveAccountRequest: function() {
                    return p
                },
                saveAccountChanges: function() {
                    return I
                },
                getHarvestStatus: function() {
                    return R
                },
                requestHarvest: function() {
                    return C
                },
                setPendingAvatar: function() {
                    return N
                },
                setPendingGlobalNameName: function() {
                    return P
                },
                setPendingAvatarDecoration: function() {
                    return O
                },
                setPendingProfileEffectId: function() {
                    return U
                },
                clearErrors: function() {
                    return h
                },
                resetPendingAccountChanges: function() {
                    return L
                },
                resetAllPending: function() {
                    return m
                },
                resetAndCloseUserProfileForm: function() {
                    return M
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var r = n("872717"),
                u = n("95410"),
                i = n("819855"),
                l = n("913144"),
                a = n("393414"),
                o = n("599110"),
                s = n("315102"),
                c = n("730622"),
                d = n("437822"),
                _ = n("49111"),
                E = n("191349"),
                f = n("782340");

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function A(e, t) {
                let n = t ? f.default.Messages.DELETE_ACCOUNT : f.default.Messages.DISABLE_ACCOUNT,
                    u = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
                return (0, c.default)(t => r.default.post({
                    url: u,
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
                    d.default.logoutInternal(), (0, a.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function p(e) {
                let t = await r.default.patch({
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

            function I(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: r,
                    emailToken: i,
                    password: a,
                    avatar: d,
                    avatarDecoration: T,
                    newPassword: S,
                    globalName: A
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, c.default)(e => {
                    let l = {
                        username: t,
                        email: r,
                        email_token: i,
                        password: a,
                        avatar: d,
                        discriminator: n,
                        global_name: A,
                        new_password: S,
                        ...e
                    };
                    null === T && (l.avatar_decoration_id = null), null != T && (l.avatar_decoration_id = T.id, l.avatar_decoration_sku_id = T.skuId);
                    let o = u.default.get(_.DEVICE_TOKEN),
                        s = (0, E.getDevicePushProvider)();
                    null != s && null != o && (l.push_provider = s, l.push_token = o);
                    let c = u.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != c && (l.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = c), p(l)
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
                    return o.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function R() {
                return r.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function C() {
                return r.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? i.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : i.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function P(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function h() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function L() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function m() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function M() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        812952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r, u, i, l, a = n("37983"),
                o = n("884691"),
                s = n("414456"),
                c = n.n(s),
                d = n("145131"),
                _ = n("298754");
            (r = i || (i = {})).PRIMARY = "primary", r.SECONDARY = "secondary", r.WARNING = "warning", r.ERROR = "error", (u = l || (l = {})).SMALL = "small", u.LARGE = "large", u.NONE = "none";
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
            class T extends o.PureComponent {
                render() {
                    let {
                        icon: e,
                        color: t,
                        children: n,
                        iconSize: r,
                        className: u,
                        iconClassName: i
                    } = this.props;
                    return (0, a.jsxs)(d.default, {
                        className: c(_.note, E[t], u),
                        align: d.default.Align.CENTER,
                        children: [(0, a.jsx)(e, {
                            className: c(_.icon, f[r], i)
                        }), (0, a.jsx)("div", {
                            children: n
                        })]
                    })
                }
            }
            T.Colors = i, T.Sizes = l;
            var S = T
        },
        470131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BoostTier2SimpleIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M10.95 1.4a1.59 1.59 0 0 1 2.1 0l4.9 4A3.37 3.37 0 0 1 19 8v8c0 1.07-.4 2.06-1.05 2.6l-4.9 4c-.65.53-1.45.53-2.1 0l-4.9-4A3.37 3.37 0 0 1 5 16V8c0-1.07.4-2.06 1.05-2.6l4.9-4Z",
                        className: a
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
            var r = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
                        className: a
                    })]
                })
            }
        },
        65969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerIcon: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("669491"),
                i = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M6 2h12a4 4 0 0 1 4 4v7.5a.5.5 0 0 1-.5.5H19a5 5 0 0 0-5 5v2.5a.5.5 0 0 1-.5.5H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4Zm.5 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm-9.91 2.94a1 1 0 0 0-1.66 1.12 5.5 5.5 0 0 0 9.14 0 1 1 0 0 0-1.66-1.12 3.5 3.5 0 0 1-5.82 0Z",
                        clipRule: "evenodd",
                        className: a
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M21.66 16c.03 0 .05.03.04.06a3 3 0 0 1-.58.82l-4.24 4.24a3 3 0 0 1-.82.58.04.04 0 0 1-.06-.04V19a3 3 0 0 1 3-3h2.66Z",
                        className: a
                    })]
                })
            }
        },
        606292: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDecorationSizeForAvatarSize: function() {
                    return o
                },
                openAvatarDecorationModal: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("77078"),
                i = n("393414");
            n("103603");
            var l = n("573135"),
                a = n("49111");

            function o(e) {
                return "number" != typeof e ? (0, u.getAvatarSize)(e) * l.DECORATION_TO_AVATAR_RATIO : e * l.DECORATION_TO_AVATAR_RATIO
            }
            let s = e => {
                let {
                    analyticsLocations: t,
                    initialSelectedDecoration: l,
                    isTryItOutFlow: o
                } = e;
                (0, u.openModalLazy)(async () => {
                    (0, i.getHistory)().location.pathname === a.Routes.COLLECTIBLES_SHOP_FULLSCREEN && (0, i.transitionTo)(a.Routes.APP);
                    let {
                        default: e
                    } = await n.el("791050").then(n.bind(n, "791050"));
                    return n => (0, r.jsx)(e, {
                        ...n,
                        analyticsLocations: t,
                        initialSelectedDecoration: l,
                        isTryItOutFlow: o
                    })
                }, {})
            }
        },
        75015: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                UploadTypes: function() {
                    return i
                },
                EDITING_CONTAINER_WIDTH: function() {
                    return o
                },
                USER_BANNER_MAX_WIDTH: function() {
                    return s
                },
                USER_BANNER_MAX_HEIGHT: function() {
                    return c
                },
                GUILD_BANNER_MAX_WIDTH: function() {
                    return d
                },
                GUILD_BANNER_MAX_HEIGHT: function() {
                    return _
                },
                SCHEDULED_EVENT_IMAGE_MAX_WIDTH: function() {
                    return E
                },
                SCHEDULED_EVENT_IMAGE_MAX_HEIGHT: function() {
                    return f
                },
                HOME_HEADER_MAX_WIDTH: function() {
                    return T
                },
                HOME_HEADER_MAX_HEIGHT: function() {
                    return S
                },
                BANNER_ASPECT_RATIO: function() {
                    return A
                },
                GUILD_BANNER_ASPECT_RATIO: function() {
                    return p
                },
                SCHEDULED_EVENT_IMAGE_ASPECT_RATIO: function() {
                    return I
                },
                HOME_HEADER_ASPECT_RATIO: function() {
                    return R
                },
                MAX_BANNER_OVERLAY_HEIGHT: function() {
                    return C
                },
                MAX_GUILD_BANNER_OVERLAY_HEIGHT: function() {
                    return N
                },
                MAX_SCHEDULED_EVENT_IMAGE_OVERLAY_HEIGHT: function() {
                    return P
                },
                MAX_HOME_HEADER_OVERLAY_HEIGHT: function() {
                    return O
                },
                VIDEO_BACKGROUND_ASPECT_RATIO: function() {
                    return U
                },
                MAX_VIDEO_OVERLAY_HEIGHT: function() {
                    return h
                },
                MessageTypes: function() {
                    return l
                }
            });
            var r, u, i, l, a = n("917219");
            (r = i || (i = {}))[r.AVATAR = 0] = "AVATAR", r[r.BANNER = 1] = "BANNER", r[r.GUILD_BANNER = 2] = "GUILD_BANNER", r[r.VIDEO_BACKGROUND = 3] = "VIDEO_BACKGROUND", r[r.SCHEDULED_EVENT_IMAGE = 4] = "SCHEDULED_EVENT_IMAGE", r[r.HOME_HEADER = 5] = "HOME_HEADER", r[r.AVATAR_DECORATION = 6] = "AVATAR_DECORATION";
            let o = 568,
                s = 2400,
                c = 848,
                d = 2400,
                _ = 1350,
                E = 2400,
                f = 960,
                T = 2400,
                S = 600,
                A = 17 / 6,
                p = 16 / 9,
                I = 2.5,
                R = 4,
                C = o / A,
                N = o / p,
                P = o / I,
                O = o / R,
                U = a.BACKGROUND_REPLACEMENT_SIZE.width / a.BACKGROUND_REPLACEMENT_SIZE.height,
                h = o / U;
            (u = l || (l = {}))[u.CROP_GIF_START = 0] = "CROP_GIF_START", u[u.CROP_GIF_COMPLETE = 1] = "CROP_GIF_COMPLETE", u[u.CROP_GIF_ERROR = 2] = "CROP_GIF_ERROR"
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
            var u = n("414456"),
                i = n.n(u),
                l = n("454589"),
                a = n("642906"),
                o = n("85336"),
                s = n("109872");

            function c(e) {
                let {
                    className: t,
                    isEligibleForTrial: n = !1
                } = e, {
                    step: u,
                    breadcrumbs: c,
                    startedPaymentFlowWithPaymentSourcesRef: d
                } = (0, a.usePaymentContext)();
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
                    className: i("breadcrumb", s.wrapper, t),
                    children: (0, r.jsx)(l.default, {
                        activeId: u,
                        breadcrumbs: _
                    })
                }))
            }
        },
        649844: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("748820"),
                i = n("77078"),
                l = n("112679"),
                a = n("55689"),
                o = n("676379"),
                s = n("697218"),
                c = n("599110"),
                d = n("659500"),
                _ = n("719923"),
                E = n("49111"),
                f = n("646718");

            function T(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: T,
                    onClose: S,
                    onComplete: A,
                    onSubscriptionConfirmation: p,
                    analyticsLocations: I,
                    analyticsObject: R,
                    analyticsLocation: C,
                    analyticsSourceLocation: N,
                    isGift: P = !1,
                    giftMessage: O,
                    subscriptionTier: U,
                    trialId: h,
                    postSuccessGuild: L,
                    openInvoiceId: m,
                    applicationId: M,
                    referralTrialOfferId: D,
                    giftRecipient: v,
                    returnRef: y,
                    subscription: g
                } = null != e ? e : {}, G = !1, B = (0, u.v4)(), b = s.default.getCurrentUser(), x = (0, _.isPremiumExactly)(b, f.PremiumTypes.TIER_2);
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("646139").then(n.bind(n, "646139"));
                    return n => {
                        let {
                            onClose: u,
                            ...i
                        } = n;
                        return (0, r.jsx)(e, {
                            ...i,
                            loadId: B,
                            subscriptionTier: U,
                            skuId: U,
                            isGift: P,
                            giftMessage: O,
                            giftRecipient: v,
                            initialPlanId: t,
                            followupSKUInfo: T,
                            onClose: (e, t) => {
                                u(), null == S || S(e), e && (null == p || p(), !P && null != t && t === f.PremiumSubscriptionSKUs.TIER_2 && !x && d.ComponentDispatch.dispatch(E.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                G = !0, null == A || A(), !P && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: p,
                            analyticsLocations: I,
                            analyticsObject: R,
                            analyticsLocation: C,
                            analyticsSourceLocation: N,
                            trialId: h,
                            postSuccessGuild: L,
                            planGroup: f.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: m,
                            applicationId: M,
                            referralTrialOfferId: D,
                            returnRef: y,
                            subscription: g
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !G && c.default.track(E.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: B,
                            payment_type: E.PurchaseTypeToAnalyticsPaymentType[E.PurchaseTypes.SUBSCRIPTION],
                            location: null != C ? C : R,
                            source: N,
                            subscription_type: E.SubscriptionTypes.PREMIUM,
                            is_gift: P,
                            eligible_for_trial: null != h,
                            application_id: M,
                            location_stack: I
                        }), (0, l.clearError)(), (0, a.clearPurchaseTokenAuthState)(), null == S || S(G), G && (null == p || p())
                    },
                    onCloseRequest: E.NOOP
                })
            }
        },
        676379: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                setCanPlayWowMoment: function() {
                    return u
                }
            });
            var r = n("913144");
            let u = e => {
                r.default.dispatch({
                    type: "PURCHASED_ITEMS_FESTIVITY_SET_CAN_PLAY_WOW_MOMENT",
                    value: e
                })
            }
        },
        273619: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("222007"), n("70102");
            var r = n("37983"),
                u = n("884691"),
                i = n("41092"),
                l = n("414456"),
                a = n.n(l),
                o = n("862337"),
                s = n("77078"),
                c = n("812952"),
                d = n("448993"),
                _ = n("736978"),
                E = n("642906"),
                f = n("85336");
            n("153727"), n("650484");
            var T = n("454589"),
                S = n("978679"),
                A = n("745279"),
                p = n("49111"),
                I = n("782340"),
                R = n("129429");
            let C = new Set([f.Step.SKU_SELECT, f.Step.AWAITING_AUTHENTICATION, f.Step.AWAITING_PURCHASE_TOKEN_AUTH, f.Step.CONFIRM]);

            function N(e) {
                let {
                    steps: t,
                    currentStep: n,
                    body: l,
                    paymentError: N,
                    header: P,
                    footer: O,
                    isGift: U = !1,
                    giftMessage: h = I.default.Messages.PREMIUM_PAYMENT_IS_GIFT,
                    hideBreadcrumbs: L = !1,
                    isLoading: m = !1,
                    purchaseError: M,
                    purchaseErrorBlockRef: D,
                    planError: v,
                    onScroll: y,
                    scrollerClassName: g,
                    hasCurrencies: G = !1
                } = e, B = null;
                null != N && null == (0, f.errorToStep)(N) ? B = N : null != M ? B = M : null != v && (B = v);
                let b = null != B ? B.message : "";
                null != B && B instanceof d.BillingError && (B.code === _.ErrorCodes.CARD_DECLINED && G && (b += " ".concat(I.default.Messages.BILLING_ERROR_TRY_ANOTHER)), B.code === _.ErrorCodes.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED && (b = I.default.Messages.GIFT_CODE_SMITE_REJECT_HELP_TEXT), B.code === p.AbortCodes.BILLING_NON_REFUNDABLE_PAYMENT_SOURCE && (b = I.default.Messages.GIFT_CODE_PAYMENT_SOURCE_INVALID));
                let {
                    stripe: x
                } = (0, E.usePaymentContext)();
                m = m || null == x;
                let H = u.useRef(new o.Timeout);
                u.useEffect(() => {
                    let e = H.current;
                    return null != x || e.isStarted() ? null != x && e.stop() : e.start(1e4, () => {
                        let e = Error("Stripe took too long to load");
                        (0, A.captureBillingException)(e)
                    }), () => {
                        e.stop()
                    }
                }, [x]);
                let F = t.includes(f.Step.PAYMENT_TYPE) ? f.Step.PAYMENT_TYPE : f.Step.ADD_PAYMENT_STEPS;
                return (0, r.jsxs)(i.Elements, {
                    options: p.StripeElementsOptions,
                    stripe: x,
                    children: [P, (0, r.jsxs)("div", {
                        className: a("paymentModalContent", R.content),
                        children: [U && n !== f.Step.CONFIRM ? (0, r.jsx)(c.default, {
                            className: R.paymentNote,
                            iconSize: c.default.Sizes.SMALL,
                            icon: S.default,
                            color: null == h ? c.default.Colors.PRIMARY : c.default.Colors.SECONDARY,
                            children: h
                        }) : null, L ? null : (0, r.jsx)("div", {
                            className: R.breadcrumbsWrapper,
                            children: (0, r.jsx)(T.default, {
                                activeId: f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(n) ? F : n,
                                breadcrumbs: t.filter(e => !f.COLLAPSED_PAYMENT_BREADCRUMB_STEPS.has(e) && !C.has(e)).map(e => ({
                                    id: e,
                                    label: (0, f.getLabelForStep)(e)
                                }))
                            })
                        }), (0, r.jsxs)("div", {
                            className: R.bodyWrapper,
                            children: [null == B ? null : (0, r.jsx)("div", {
                                className: R.errorBlockWrapper,
                                children: (0, r.jsx)(s.FormErrorBlock, {
                                    ref: D,
                                    children: b
                                })
                            }), m ? (0, r.jsx)(s.Spinner, {
                                className: R.loadingBlock
                            }) : (0, r.jsx)(s.Sequencer, {
                                className: R.sequencer,
                                staticClassName: R.sequencerStatic,
                                animatedNodeClassName: R.sequencerAnimatedNode,
                                fillParent: !0,
                                step: n,
                                steps: t,
                                sideMargin: 20,
                                children: (0, r.jsx)(s.AdvancedScrollerThin, {
                                    onScroll: y,
                                    className: a(R.scroller, g),
                                    children: l
                                })
                            })]
                        })]
                    }), O]
                })
            }
        },
        674158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                l = n("288264");

            function a(e) {
                let {
                    icon: t,
                    iconClassName: n,
                    description: u,
                    color: a
                } = e;
                return (0, r.jsxs)("div", {
                    className: l.perkRow,
                    children: [(0, r.jsx)("div", {
                        className: l.perkIconContainer,
                        children: (0, r.jsx)(t, {
                            color: a,
                            className: i(l.perkIcon, n)
                        })
                    }), (0, r.jsx)("div", {
                        className: l.perkDescription,
                        children: u
                    })]
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
                    return s
                },
                setNewPendingAvatar: function() {
                    return c
                },
                setNewPendingAvatarDecoration: function() {
                    return d
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
                    return T
                }
            }), n("424973");
            var r = n("884691"),
                u = n("152584"),
                i = n("234251"),
                l = n("783142"),
                a = n("26989");

            function o(e) {
                return r.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let u in t) {
                        var r;
                        let i = t[u],
                            l = null === (r = i[e]) || void 0 === r ? void 0 : r.avatar;
                        null != l && (null == n[l] && (n[l] = []), n[l].push(u))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, l.setPendingBio)(e === t ? void 0 : e)
            }

            function c(e, t) {
                (0, u.setPendingAvatar)(e === t ? void 0 : e)
            }

            function d(e, t) {
                if ((0, i.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, u.setPendingAvatarDecoration)(void 0);
                    return
                }(0, u.setPendingAvatarDecoration)(e)
            }

            function _(e, t) {
                if (e === t) {
                    (0, u.setPendingProfileEffectId)(void 0);
                    return
                }(0, u.setPendingProfileEffectId)(e)
            }

            function E(e, t, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                if (null != e) return "" === e ? {
                    value: r ? n : null,
                    isUsingGuildValue: !1
                } : {
                    value: e,
                    isUsingGuildValue: r
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

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        122846: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return H
                }
            });
            var r = n("37983"),
                u = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("446674"),
                o = n("77078"),
                s = n("913144"),
                c = n("850068"),
                d = n("775433"),
                _ = n("308592"),
                E = n("642906"),
                f = n("85336"),
                T = n("552917"),
                S = n("843647"),
                A = n("154889"),
                p = n("917247"),
                I = n("956597"),
                R = n("635956"),
                C = n("273619"),
                N = n("674158"),
                P = n("915639"),
                O = n("357957"),
                U = n("326880"),
                h = n("46829"),
                L = n("595086"),
                m = n("719923"),
                M = n("153160"),
                D = n("49111"),
                v = n("646718"),
                y = n("782340"),
                g = n("643076");
            let G = e => {
                let {
                    locale: t
                } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(N.default, {
                        icon: L.default,
                        iconClassName: g.iconColorPurple,
                        description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, r.jsx)(N.default, {
                        icon: U.default,
                        iconClassName: g.iconColorPink,
                        description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_GUILD_SUBSCRIPTION.format({
                            numGuildSubscriptions: v.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM,
                            discountPercent: (0, M.formatPercent)(t, v.GUILD_BOOST_COST_FOR_PREMIUM_USER_DISCOUNT_PERCENT / 100)
                        })
                    }), (0, r.jsx)(N.default, {
                        icon: h.default,
                        iconClassName: g.iconColorYellow,
                        description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            };

            function B() {
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(N.default, {
                        icon: L.default,
                        iconClassName: g.iconColorPurple,
                        description: y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_PERK_CUSTOM
                    }), (0, r.jsx)(N.default, {
                        icon: h.default,
                        iconClassName: g.iconColorYellow,
                        description: y.default.Messages.STICKER_PREMIUM_TIER_0_UPSELL_PERK_PREMIUM_SUBSCRIPTION
                    })]
                })
            }
            let b = e => {
                    let {
                        trialOffer: t,
                        discountOffer: u,
                        isTier0Upsell: i,
                        isLoading: s,
                        price: c,
                        onClose: d
                    } = e, _ = (0, a.useStateFromStores)([P.default], () => P.default.locale), E = null != t || null != u;
                    return (0, r.jsxs)("div", {
                        className: g.wrapper,
                        children: [(0, r.jsx)(o.ModalCloseButton, {
                            onClick: d,
                            className: g.closeButton
                        }), E && (0, r.jsx)(I.PremiumTrialGradientBadge, {
                            className: g.premiumTrialBadge
                        }), (0, r.jsx)("img", {
                            className: l(g.heroImage, {
                                [g.heroImageWithTrialOffer]: E
                            }),
                            src: n("190389"),
                            alt: ""
                        }), s ? (0, r.jsx)(o.Spinner, {}) : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o.Text, {
                                variant: "text-md/normal",
                                className: g.heading,
                                children: null == c ? (0, r.jsx)(o.Spinner, {
                                    type: o.Spinner.Type.PULSING_ELLIPSIS
                                }) : i ? y.default.Messages.STICKER_PREMIUM_SUBSCRIPTION_UPSELL_ALERT_TITLE.format({
                                    planName: (0, m.getTierDisplayName)(v.SubscriptionPlans.PREMIUM_MONTH_TIER_0),
                                    monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
                                }) : y.default.Messages.STICKER_PREMIUM_TIER_2_UPSELL_ALERT_TITLE.format({
                                    monthlyPrice: (0, M.formatPrice)(c.amount, c.currency)
                                })
                            }), (0, r.jsx)("div", {
                                className: g.perks,
                                children: i ? (0, r.jsx)(B, {}) : (0, r.jsx)(G, {
                                    locale: _
                                })
                            })]
                        })]
                    })
                },
                x = e => {
                    let {
                        trialOffer: t,
                        discountOffer: n,
                        isTier0Upsell: u,
                        onClose: i
                    } = e, l = {
                        section: D.AnalyticsSections.STICKER_PREMIUM_TIER_2_UPSELL_MODAL
                    };
                    return (0, r.jsxs)(o.ModalFooter, {
                        className: g.footer,
                        children: [(0, r.jsx)(o.Button, {
                            onClick: i,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.PRIMARY,
                            look: o.Button.Looks.LINK,
                            children: y.default.Messages.CLOSE
                        }), (0, r.jsx)(R.default, {
                            buttonText: null != t || null != n ? u ? y.default.Messages.PREMIUM_TRIAL_TIER_0_CTA_BUTTON_VARIANT : y.default.Messages.PREMIUM_TRIAL_CTA_BUTTON_VARIANT : void 0,
                            premiumModalAnalyticsLocation: l,
                            subscriptionTier: u ? v.PremiumSubscriptionSKUs.TIER_0 : v.PremiumSubscriptionSKUs.TIER_2,
                            size: o.Button.Sizes.SMALL,
                            color: o.Button.Colors.GREEN,
                            onClick: () => {
                                i()
                            }
                        })]
                    })
                };

            function H(e) {
                let {
                    onClose: t,
                    ...n
                } = e, i = (0, _.useSubscriptionPlansLoaded)(), l = (0, a.useStateFromStores)([O.default], () => O.default.hasFetchedPaymentSources), I = i && l, R = (0, p.usePremiumTrialOffer)(), N = (0, A.usePremiumDiscountOffer)(), {
                    isLoading: P,
                    suggestedPremiumType: U
                } = (0, S.default)({
                    autoTrackExposure: I,
                    experiment: T.default,
                    location: "stickers_upsell"
                });
                u.useEffect(() => {
                    s.default.wait(() => {
                        (0, c.fetchPaymentSources)(), (0, d.fetchPremiumSubscriptionPlans)(null, null, D.RevenueSurfaces.DISCOVERY)
                    })
                }, []);
                let h = U === v.PremiumTypes.TIER_0 && null == N,
                    L = I ? m.default.getDefaultPrice(h ? v.SubscriptionPlans.PREMIUM_MONTH_TIER_0 : v.SubscriptionPlans.PREMIUM_MONTH_TIER_2) : null;
                return (0, r.jsx)(E.PaymentContextProvider, {
                    activeSubscription: null,
                    stepConfigs: [],
                    skuIDs: [],
                    children: (0, r.jsx)(o.ModalRoot, {
                        ...n,
                        "aria-labelledby": "sticker-pack-premium-upsell-modal-header",
                        children: (0, r.jsx)(C.default, {
                            hideBreadcrumbs: !0,
                            body: (0, r.jsx)(b, {
                                trialOffer: R,
                                discountOffer: N,
                                isTier0Upsell: h,
                                isLoading: !I || P,
                                price: L,
                                onClose: t
                            }),
                            footer: (0, r.jsx)(x, {
                                trialOffer: R,
                                discountOffer: N,
                                isTier0Upsell: h,
                                onClose: t
                            }),
                            steps: [f.Step.PREMIUM_UPSELL],
                            currentStep: f.Step.PREMIUM_UPSELL
                        })
                    })
                })
            }
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
                    return T
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return A
                },
                setPendingPronouns: function() {
                    return p
                },
                setPendingAccentColor: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return R
                },
                setTryItOutAvatar: function() {
                    return C
                },
                setTryItOutAvatarDecoration: function() {
                    return N
                },
                setTryItOutBanner: function() {
                    return P
                },
                setTryItOutThemeColors: function() {
                    return O
                }
            });
            var r = n("872717"),
                u = n("913144"),
                i = n("448993"),
                l = n("884351"),
                a = n("845579"),
                o = n("697218"),
                s = n("599110"),
                c = n("49111"),
                d = n("646718");

            function _(e) {
                s.default.track(c.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: d.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, s;
                let d = null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == d) return;
                let _ = a.UseLegacyChatInput.getSetting();
                null != e.bio && _ && (e.bio = l.default.parse(void 0, e.bio).content);
                try {
                    u.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: d
                    });
                    let n = await r.default.patch({
                        url: null != t ? c.Endpoints.GUILD_PROFILE(t, c.ME) : c.Endpoints.USER_PROFILE(c.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        u.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: d,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new i.APIError(n);
                        u.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new i.APIError(t);
                    u.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function f() {
                u.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                u.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function A(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function p(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function I(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function R(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function C(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), _(d.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function N(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), _(d.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function P(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), _(d.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function O(e) {
                u.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), _(d.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        783111: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("666038");
            class u extends r.default {
                static createFromServer(e) {
                    return new u({
                        id: e.id,
                        guildId: e.guild_id,
                        userId: null != e.user ? e.user.id : e.user_id,
                        user: e.user,
                        ended: e.ended,
                        endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null
                    })
                }
                constructor(e) {
                    super(), this.id = e.id, this.guildId = e.guildId, this.userId = e.userId, this.user = e.user, this.ended = e.ended, this.endsAt = null != e.endsAt ? e.endsAt : null
                }
            }
            var i = u
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var r = n("37983"),
                u = n("884691"),
                i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                o = n("145131"),
                s = n("461380"),
                c = n("298619");
            class d extends u.PureComponent {
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
                            onBreadcrumbClick: u,
                            breadcrumbs: i,
                            renderCustomBreadcrumb: o,
                            separatorClassName: d
                        } = this.props, _ = e.id === n, E = t === i.length - 1, f = null != o ? o(e, _) : (0, r.jsx)("span", {
                            className: l(c.breadcrumb, {
                                [c.activeBreadcrumb]: _,
                                [c.interactiveBreadcrumb]: null != u
                            }),
                            children: e.label
                        });
                        return (0, r.jsxs)("div", {
                            className: l(c.breadcrumbWrapper, {
                                [c.breadcrumbFinalWrapper]: E
                            }),
                            children: [null != u ? (0, r.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: c.breadcrumbClickWrapper,
                                children: f
                            }) : f, E ? null : (0, r.jsx)(s.default, {
                                className: l(c.breadcrumbArrow, d),
                                direction: s.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var _ = d
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return o
                }
            });
            var r = n("995008"),
                u = n.n(r),
                i = n("775560");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(e)
                },
                a = () => (0, i.useLazyValue)(() => l()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        },
        326880: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("469563"),
                i = n("470131"),
                l = n("75196"),
                a = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 6,
                        height: n = 11,
                        color: u = "currentColor",
                        foreground: i,
                        ...a
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, l.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 6 11",
                        children: (0, r.jsxs)("g", {
                            fill: u,
                            fillRule: "evenodd",
                            className: i,
                            children: [(0, r.jsx)("path", {
                                d: "M2 4.42007V6.79007L3 7.79007L4 6.79007V4.42007L3.01 3.42007L2 4.42007Z"
                            }), (0, r.jsx)("path", {
                                d: "M3 0.590088L0 3.59009V7.59009L3 10.5901L6 7.59009V3.59009L3 0.590088ZM5 7.21009L3 9.21009L1 7.21009V4.00009L3 2.00009L5 4.00009V7.21009Z"
                            })]
                        })
                    })
                }, i.BoostTier2SimpleIcon, void 0, {
                    size: 11
                })
        },
        118503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    foreground: l,
                    ...a
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, u.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 8 12",
                    children: [(0, r.jsx)("path", {
                        d: "M4 0L0 4V8L4 12L8 8V4L4 0ZM7 7.59L4 10.59L1 7.59V4.41L4 1.41L7 4.41V7.59Z",
                        fill: i,
                        className: l
                    }), (0, r.jsx)("path", {
                        d: "M2 4.83V7.17L4 9.17L6 7.17V4.83L4 2.83L2 4.83Z",
                        fill: i,
                        className: l
                    })]
                })
            }
        },
        595086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("37983");
            n("884691");
            var u = n("414456"),
                i = n.n(u),
                l = n("469563"),
                a = n("65969"),
                o = n("75196"),
                s = n("76150"),
                c = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: u = "currentColor",
                        winking: l = !1,
                        foreground: a,
                        ...c
                    } = e;
                    return (0, r.jsxs)("svg", {
                        width: t,
                        height: n,
                        ...(0, o.default)(c),
                        viewBox: "0 0 20 20",
                        children: [(0, r.jsx)("path", {
                            fill: u,
                            className: i(a, {
                                [s.hidden]: l
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM11.9998 12.2201C11.9998 13.3245 11.1046 14.2198 10.0002 14.2198C8.8958 14.2198 8.00052 13.3245 8.00052 12.2201H6.66742C6.66742 14.0607 8.15955 15.5529 10.0002 15.5529C11.8408 15.5529 13.3329 14.0607 13.3329 12.2201H11.9998ZM4.44559 13.331C4.44559 13.9446 3.94821 14.442 3.33467 14.442C2.72112 14.442 2.22375 13.9446 2.22375 13.331C2.22375 12.7175 2.72112 12.2201 3.33467 12.2201C3.94821 12.2201 4.44559 12.7175 4.44559 13.331ZM16.6657 14.442C17.2793 14.442 17.7766 13.9446 17.7766 13.331C17.7766 12.7175 17.2793 12.2201 16.6657 12.2201C16.0522 12.2201 15.5548 12.7175 15.5548 13.331C15.5548 13.9446 16.0522 14.442 16.6657 14.442Z"
                        }), (0, r.jsx)("path", {
                            fill: u,
                            className: i(a, {
                                [s.hidden]: !l
                            }),
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.0002 0.662583V5.40204C12.0002 6.83974 13.1605 7.99981 14.5986 7.99981H19.3393C19.9245 7.99981 20.222 7.29584 19.8055 6.8794L13.1209 0.196569C12.7043 -0.219868 12.0002 0.0676718 12.0002 0.662583ZM14.5759 10.0282C12.0336 10.0282 9.96986 7.96441 9.96986 5.42209V0.0583083H1.99397C0.897287 0.0583083 0 0.955595 0 2.05228V18.0041C0 19.1007 0.897287 19.998 1.99397 19.998H17.9457C19.0424 19.998 19.9397 19.1007 19.9397 18.0041V10.0282H14.5759ZM12 13H11.2H8.8H8C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13ZM17.7766 13.331C17.7766 13.9446 17.2793 14.442 16.6657 14.442C16.0522 14.442 15.5548 13.9446 15.5548 13.331C15.5548 12.7175 16.0522 12.2201 16.6657 12.2201C17.2793 12.2201 17.7766 12.7175 17.7766 13.331ZM2 12.2361L2.53532 11L5.62492 12.7835C5.79161 12.8797 5.79161 13.1203 5.62492 13.2165L2.53532 15L2 13.7639L3.32339 13L2 12.2361Z"
                        })]
                    })
                }, a.StickerIcon, {
                    winking: "remove"
                }, {
                    size: 24
                })
        },
        719347: function(e, t, n) {
            "use strict";
            var r, u;
            n.r(t), n.d(t, {
                MEDIA_MOSAIC_MAX_WIDTH: function() {
                    return i
                },
                MEDIA_MOSAIC_MAX_HEIGHT: function() {
                    return l
                },
                MINIMUM_MEDIA_MOSAIC_DIM: function() {
                    return a
                },
                MediaLayoutType: function() {
                    return r
                },
                SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE: function() {
                    return o
                }
            });
            let i = 550,
                l = 350,
                a = 40;
            (u = r || (r = {})).STATIC = "STATIC", u.RESPONSIVE = "RESPONSIVE", u.MOSAIC = "MOSAIC";
            let o = 20
        }
    }
]);