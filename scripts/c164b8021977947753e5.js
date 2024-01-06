(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15765"], {
        448105: function(e, t, n) {
            "use strict";
            e.exports = function(e, t) {
                var n = t.length,
                    i = e.length;
                if (i > n) return !1;
                if (i === n) return e === t;
                e: for (var l = 0, u = 0; l < i; l++) {
                    for (var o = e.charCodeAt(l); u < n;)
                        if (t.charCodeAt(u++) === o) continue e;
                    return !1
                }
                return !0
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return u
                },
                unsubscribeMembers: function() {
                    return o
                },
                subscribeChannel: function() {
                    return r
                },
                subscribeChannelDimensions: function() {
                    return a
                }
            }), n("424973");
            var i = n("913144"),
                l = n("696605");

            function u(e, t) {
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

            function r(e, t, n) {
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
                    height: u,
                    rowHeight: o
                } = e;

                function a(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / o)) + t)
                }
                let s = [];

                function d(e) {
                    let t = e + (l.MINIMUM_RANGE - 1);
                    return s.push([e, t]), t + 1
                }
                let c = a(.5 * u),
                    E = a(i, -c),
                    f = a(i + u, c);
                for (E > 0 && (E = Math.max(d(0), E)), E = Math.floor(E / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; E <= f;) E = d(E);
                r(t, n, s)
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
                    return I
                },
                saveAccountRequest: function() {
                    return N
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return p
                },
                requestHarvest: function() {
                    return g
                },
                setPendingAvatar: function() {
                    return U
                },
                setPendingGlobalNameName: function() {
                    return C
                },
                setPendingAvatarDecoration: function() {
                    return D
                },
                setPendingProfileEffectId: function() {
                    return m
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return O
                },
                resetAllPending: function() {
                    return h
                },
                resetAndCloseUserProfileForm: function() {
                    return v
                },
                setDisableSubmit: function() {
                    return P
                }
            });
            var i = n("872717"),
                l = n("95410"),
                u = n("819855"),
                o = n("913144"),
                r = n("393414"),
                a = n("599110"),
                s = n("315102"),
                d = n("730622"),
                c = n("437822"),
                E = n("49111"),
                f = n("191349"),
                _ = n("782340");

            function T() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function S() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function I(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    l = t ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
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
                    c.default.logoutInternal(), (0, r.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function N(e) {
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

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: u,
                    password: r,
                    avatar: c,
                    avatarDecoration: T,
                    newPassword: S,
                    globalName: I
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: u,
                        password: r,
                        avatar: c,
                        discriminator: n,
                        global_name: I,
                        new_password: S,
                        ...e
                    };
                    null === T && (o.avatar_decoration_id = null), null != T && (o.avatar_decoration_id = T.id, o.avatar_decoration_sku_id = T.skuId);
                    let a = l.default.get(E.DEVICE_TOKEN),
                        s = (0, f.getDevicePushProvider)();
                    null != s && null != a && (o.push_provider = s, o.push_token = a);
                    let d = l.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != f.DEVICE_PUSH_VOIP_PROVIDER && null != d && (o.push_voip_provider = f.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = d), N(o)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
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
                        animated: (0, s.isAnimatedIconHash)(t.avatar)
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

            function g() {
                return i.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function U(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? u.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function C(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function D(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectId: e
                })
            }

            function R() {
                o.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function O() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function h() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function v() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function P(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        901582: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i, l, u = n("37983"),
                o = n("884691"),
                r = n("748820"),
                a = n("599110"),
                s = n("117362"),
                d = n("49111");
            (i = class extends o.Component {
                renderProvider(e) {
                    var t, n;
                    let {
                        section: i,
                        page: l,
                        object: o,
                        objectType: r,
                        children: s
                    } = this.props, d = this.mergeLocation(e.location, this.getLocation(l, i, o, r)), c = this.getContext(d, null !== (t = this._loadDate) && void 0 !== t ? t : e.loadDate, null !== (n = this._loadId) && void 0 !== n ? n : e.loadId);
                    return (0, u.jsx)(a.AnalyticsContext.Provider, {
                        value: c,
                        children: s
                    })
                }
                render() {
                    let {
                        context: e
                    } = this.props;
                    return null != e ? this.renderProvider(e) : (0, u.jsx)(a.AnalyticsContext.Consumer, {
                        children: e => this.renderProvider(e)
                    })
                }
                constructor(e) {
                    super(e), this._loadId = null, this._loadDate = this.props.root ? Date.now() : null, this.getLocation = (0, s.cachedFunction)((e, t, n, i) => {
                        let l = {};
                        return null != e && (l.page = e), null != t && (l.section = t), null != n && (l.object = n), null != i && (l.objectType = i), l
                    }), this.mergeLocation = (0, s.cachedFunction)((e, t) => ({
                        ...e,
                        ...t
                    })), this.getContext = (0, s.cachedFunction)((e, t, n) => ({
                        location: e,
                        loadDate: t,
                        loadId: n
                    })), null != e.loadId ? this._loadId = e.loadId : e.root && (this._loadId = (0, r.v4)())
                }
            }).Pages = d.AnalyticsPages, i.Sections = d.AnalyticsSections, i.Objects = d.AnalyticsObjects, i.ObjectTypes = d.AnalyticsObjectTypes, i.defaultProps = {
                root: !1
            }, l = i
        },
        838446: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("901582");

            function u(e, t) {
                return function(n) {
                    return (0, i.jsx)(l.default, {
                        page: t.page,
                        section: t.section,
                        object: t.object,
                        objectType: t.objectType,
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        158534: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("685665");

            function u(e, t) {
                return function(n) {
                    let {
                        AnalyticsLocationProvider: u
                    } = (0, l.default)(t);
                    return (0, i.jsx)(u, {
                        children: (0, i.jsx)(e, {
                            ...n
                        })
                    })
                }
            }
        },
        35647: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                IdIcon: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                u = n("75196");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: r
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: r
                    })]
                })
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return u
                }
            });
            var i = n("884691"),
                l = n("599110");
            let u = () => i.useContext(l.AnalyticsContext)
        },
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return r
                }
            }), n("37983");
            var i = n("884691"),
                l = n("917351"),
                u = n.n(l);
            n("233736");
            var o = n("666020");

            function r(e) {
                i.useEffect(() => (u.forEach(e, (e, t) => (0, o.subscribeMembers)(t, e)), () => {
                    u.forEach(e, (e, t) => (0, o.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("845579"),
                o = n("662255"),
                r = n("306160");

            function a(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: a,
                    shiftId: s,
                    showIconFirst: d
                } = e, c = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !r.SUPPORTS_COPY) return null;
                let E = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: E,
                    label: n,
                    action: function(e) {
                        let n = null != s && e.shiftKey ? s : t;
                        (0, r.copy)(n), null == a || a()
                    },
                    icon: o.default,
                    showIconFirst: d
                }, E)
            }
        },
        700179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canToggleCommunicationDisableOnUser: function() {
                    return s
                },
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("446674"),
                l = n("305961"),
                u = n("957255"),
                o = n("697218"),
                r = n("991170"),
                a = n("49111");

            function s(e, t) {
                let [n, i, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [o.default, l.default, u.default], d = i.getGuild(e), c = n.getUser(t);
                if (null == d || null == c || c.isNonUserBot()) return !1;
                let E = d.isOwner(c) || r.default.can({
                    permission: a.Permissions.ADMINISTRATOR,
                    user: c,
                    context: d
                });
                return !E && s.canManageUser(a.Permissions.MODERATE_MEMBERS, c, d)
            }

            function d(e, t) {
                return (0, i.useStateFromStores)([o.default, l.default, u.default], () => s(e, t, [o.default, l.default, u.default]), [e, t])
            }
        },
        406043: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCurrentUserCommunicationDisabled: function() {
                    return r
                },
                default: function() {
                    return d
                },
                userCommunicationDisabled: function() {
                    return c
                }
            });
            var i = n("446674"),
                l = n("26989"),
                u = n("697218"),
                o = n("509");

            function r(e) {
                let t = (0, i.useStateFromStores)([u.default], () => u.default.getCurrentUser());
                return d(null == t ? void 0 : t.id, e)
            }

            function a(e, t, n) {
                return null != t && null != e ? n.getMember(t, e) : null
            }

            function s(e) {
                var t;
                return [null !== (t = null == e ? void 0 : e.communicationDisabledUntil) && void 0 !== t ? t : null, (0, o.isMemberCommunicationDisabled)(e)]
            }

            function d(e, t) {
                let n = (0, i.useStateFromStores)([l.default], () => a(e, t, l.default), [t, e]);
                return s(n)
            }

            function c(e, t) {
                let n = a(e, t, l.default);
                return s(n)
            }
        },
        929423: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveGuildIdentityChanges: function() {
                    return r
                },
                setCurrentGuild: function() {
                    return a
                },
                initGuildIdentitySettings: function() {
                    return s
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
                    return f
                },
                setPendingBio: function() {
                    return _
                },
                setPendingPronouns: function() {
                    return T
                },
                setPendingNickname: function() {
                    return S
                },
                setPendingThemeColors: function() {
                    return I
                },
                resetPendingMemberChanges: function() {
                    return N
                },
                resetPendingProfileChanges: function() {
                    return A
                },
                resetAllPending: function() {
                    return p
                },
                clearErrors: function() {
                    return g
                },
                setDisableSubmit: function() {
                    return U
                }
            }), n("70102");
            var i = n("872717"),
                l = n("913144"),
                u = n("54239"),
                o = n("49111");
            async function r(e, t) {
                let {
                    nick: n,
                    avatar: u
                } = t;
                if (null == e) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: o.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), l.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: t.body,
                        guildId: e
                    }), t
                } catch (t) {
                    let e = t.body;
                    (null == e ? void 0 : e.username) != null && (e.nick = e.username, delete e.username), l.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: t.body
                    })
                }
            }

            function a(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function s(e, t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function c() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function E(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function A() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function p() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function g() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function U(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, l, u, o, r, a, s, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var E = n("446674"),
                f = n("913144"),
                _ = n("49111");
            let T = _.FormStates.CLOSED,
                S = {},
                I = !1;

            function N() {
                T = _.FormStates.CLOSED, S = {}, s = null, d = void 0, c = []
            }

            function A() {
                p(), g(), S = {}, T = _.FormStates.OPEN
            }

            function p() {
                i = void 0, r = void 0
            }

            function g() {
                l = void 0, u = void 0, o = void 0, a = void 0
            }
            class U extends E.default.Store {
                getFormState() {
                    return T
                }
                getErrors() {
                    return S
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== u || void 0 !== o || void 0 !== r || void 0 !== a
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return r
                }
                getPendingPronouns() {
                    return o
                }
                getPendingAccentColor() {
                    return r
                }
                getPendingThemeColors() {
                    return a
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: u,
                        pendingPronouns: o,
                        pendingNickname: r,
                        pendingThemeColors: a
                    }
                }
                getGuild() {
                    return s
                }
                getSource() {
                    return d
                }
                getAnalyticsLocations() {
                    return c
                }
                getIsDisableSubmit() {
                    return I
                }
            }
            U.displayName = "GuildIdentitySettingsStore";
            var C = new U(f.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    s = e.guild, T = _.FormStates.OPEN, S = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: N,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    A(), N()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    s = e.guild, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    T = _.FormStates.SUBMITTING, S = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (T !== _.FormStates.SUBMITTING) return !1;
                    T = _.FormStates.OPEN, S = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    T = _.FormStates.OPEN, S = e.errors
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
                    l = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    u = t
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
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    a = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: p,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: A,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: A,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    S = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    I = t
                }
            })
        },
        130037: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackMemberSearchUsed: function() {
                    return _
                },
                useTrackMemberFilterRolesUsed: function() {
                    return T
                },
                MemberSafetyFlagType: function() {
                    return u
                },
                useTrackMemberFilterSafetyFlagsUsed: function() {
                    return S
                },
                ModerationActionType: function() {
                    return o
                },
                useTrackModerationAction: function() {
                    return I
                },
                trackMembersPageViewed: function() {
                    return N
                }
            });
            var i, l, u, o, r = n("884691"),
                a = n("812204"),
                s = n("716241"),
                d = n("271938"),
                c = n("599110"),
                E = n("49111");

            function f(e, t, n) {
                var i;
                let l = {
                    ...t,
                    ...(0, s.collectGuildAnalyticsMetadata)(null !== (i = t.guild_id) && void 0 !== i ? i : n)
                };
                c.default.track(e, l)
            }

            function _(e) {
                let t = r.useCallback(t => {
                    ! function(e) {
                        let t = {
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_SEARCH_MEMBERS, t)
                    }(e)
                }, [e]);
                return t
            }

            function T(e) {
                let t = r.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            selected_role_count: t.size,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_ROLES, n)
                    }(e, t)
                }, [e]);
                return t
            }(i = u || (u = {})).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity", i.COMMUNICATION_DISABLED = "communication_disabled", i.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity", i.USERNAME_QUARANTINED = "username_quarantined";

            function S(e) {
                let t = r.useCallback(t => {
                    ! function(e, t) {
                        let n = {
                            flag_type: t,
                            guild_id: e,
                            location: a.default.MEMBER_SAFETY_PAGE
                        };
                        f(E.AnalyticEvents.MOD_DASH_FILTER_SAFETY_FLAGS, n)
                    }(e, t)
                }, [e]);
                return t
            }

            function I(e, t) {
                let {
                    location: n,
                    targetUserId: i,
                    targets: l
                } = t, u = r.useCallback(t => {
                    let u = {
                        action_type: t,
                        mod_user_id: d.default.getId(),
                        guild_id: e,
                        location: n,
                        target_user_id: null != i ? i : void 0,
                        targets: null != l ? l : void 0
                    };
                    f(E.AnalyticEvents.MODERATION_ACTION, u)
                }, [e, n, i, l]);
                return u
            }

            function N(e, t) {
                f(E.AnalyticEvents.MOD_DASH_MEMBERS_TABLE_VIEWED, {
                    guild_id: e,
                    location: t
                })
            }(l = o || (o = {})).BAN = "ban", l.KICK = "kick", l.MUTE = "mute", l.TIMEOUT = "timeout", l.ADD_ROLE = "add_role", l.REMOVE_ROLE = "remove_role", l.COPY_ID = "copy_id", l.CHANGE_NICKNAME = "change_nickname"
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
                    return f
                }
            });
            var i = n("65597"),
                l = n("862205"),
                u = n("697218"),
                o = n("719923"),
                r = n("782340");
            let a = (0, l.createExperiment)({
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
                s = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: u,
                        autoUnfurlReactionTooltip: r,
                        collectOffOverride: a
                    } = n, s = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: u,
                        collectEnabled: !a && (s ? i : u),
                        autoUnfurlReactionTooltip: r
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
                    } : s({
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
                    }, l = (0, i.default)([u.default], () => u.default.getCurrentUser()), o = a.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: r,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: E
                    } = s({
                        user: l,
                        config: o
                    }), f = r && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: r,
                        collectEnabled: f,
                        showTryPacksModalAndV2Copy: d,
                        autoUnfurlReactionTooltip: E
                    }
                },
                E = (0, l.createExperiment)({
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
                            getNewSettingsDescriptionLine1: () => r.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_1,
                            getNewSettingsDescriptionLine2: () => r.default.Messages.INVENTORY_NEW_SETTING_ROLLBACK_DESCRIPTION_LINE_2
                        }
                    }]
                }),
                f = function() {
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
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return a
                },
                setNewPendingUserBio: function() {
                    return s
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
                    return f
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return T
                }
            }), n("424973");
            var i = n("884691"),
                l = n("152584"),
                u = n("234251"),
                o = n("783142"),
                r = n("26989");

            function a(e) {
                return i.useMemo(() => {
                    let t = r.default.getMutableAllGuildsAndMembers(),
                        n = {};
                    for (let l in t) {
                        var i;
                        let u = t[l],
                            o = null === (i = u[e]) || void 0 === i ? void 0 : i.avatar;
                        null != o && (null == n[o] && (n[o] = []), n[o].push(l))
                    }
                    return null != n ? Object.entries(n).map(e => e[1][0]) : []
                }, [e])
            }

            function s(e, t) {
                (0, o.setPendingBio)(e === t ? void 0 : e)
            }

            function d(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, u.isEqualAvatarDecoration)(e, null != t ? t : null)) {
                    (0, l.setPendingAvatarDecoration)(void 0);
                    return
                }(0, l.setPendingAvatarDecoration)(e)
            }

            function E(e, t) {
                if (e === t) {
                    (0, l.setPendingProfileEffectId)(void 0);
                    return
                }(0, l.setPendingProfileEffectId)(e)
            }

            function f(e, t, n) {
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

            function _(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function T(e, t) {
                return void 0 === e ? null != t : null != e
            }
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("79112"),
                u = n("685665"),
                o = n("929423");
            n("424562");
            var r = n("49111"),
                a = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: E
                } = (0, u.default)(), f = (0, i.useCallback)(() => {
                    null != t && (0, o.initGuildIdentitySettings)(t, null != d ? d : E), l.default.open(r.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, s, d, c, E]);
                return f
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return s
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var i, l, u = n("991170"),
                o = n("719923"),
                r = n("24373"),
                a = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let s = (e, t, n) => {
                    if (null == t) return 2;
                    let i = o.default.canUseCustomStickersEverywhere(t);
                    if ((0, r.isStandardSticker)(e)) return 0;
                    if ((0, r.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || u.default.can({
                        permission: a.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === s(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                u = n("446674"),
                o = n("913144"),
                r = n("80507"),
                a = n("374363"),
                s = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let f = new r.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => s.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    s.default.isLoaded && f.compute()
                },
                T = () => {
                    _()
                };

            function S() {
                var e;
                let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                f.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class I extends u.default.PersistedStore {
                initialize(e) {
                    this.waitFor(s.default), null != e && (E = e), this.syncWith([s.default], T), this.syncWith([a.default], S)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return f
                }
            }
            I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
            var N = new I(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        f.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), _()
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
        467940: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                l = n("884691"),
                u = n("446674"),
                o = n("77078"),
                r = n("272030"),
                a = n("838446"),
                s = n("158534"),
                d = n("997289"),
                c = n("812204"),
                E = n("685665"),
                f = n("861370"),
                _ = n("230947"),
                T = n("130037"),
                S = n("26989"),
                I = n("800762"),
                N = n("300925"),
                A = n("489836"),
                p = n("421602"),
                g = n("459870"),
                U = n("325882"),
                C = n("625187"),
                D = n("806179"),
                m = n("97508"),
                R = n("49111"),
                O = n("782340"),
                h = (0, s.default)((0, a.default)(function(e) {
                    var t;
                    let {
                        user: n,
                        guildId: a,
                        channelId: s,
                        context: R,
                        onSelect: h,
                        moderationAlertId: v,
                        analyticsLocation: P,
                        analyticsLocations: y,
                        onCloseContextMenu: G
                    } = e, {
                        analyticsLocations: L
                    } = (0, E.default)(c.default.CONTEXT_MENU), M = (0, d.useAnalyticsContext)(), b = null !== (t = null == y ? void 0 : y[0]) && void 0 !== t ? t : L[0], w = (0, T.useTrackModerationAction)(a, {
                        location: b,
                        targetUserId: n.id
                    }), F = (0, u.useStateFromStores)([I.default], () => {
                        var e;
                        return null !== (e = I.default.getUserVoiceChannelId(a, n.id)) && void 0 !== e ? e : void 0
                    }, [a, n.id]), k = l.useCallback(() => {
                        w(T.ModerationActionType.COPY_ID)
                    }, [w]), B = (0, u.useStateFromStores)([S.default], () => S.default.isMember(a, n.id), [a, n.id]), x = (0, D.default)(n.id, a), V = (0, p.default)(n.id, R), Y = (0, _.default)({
                        guildId: a,
                        userId: n.id,
                        analyticsLocation: null != P ? P : M.location,
                        analyticsLocations: [b],
                        context: R
                    }), H = (0, A.default)(n, b), j = (0, N.default)(n, a, null != s ? s : F, b), K = (0, U.default)(s, v), W = (0, C.default)(n, a), Z = (0, m.default)(n.id, a, !1, b), q = (0, f.default)({
                        id: n.id,
                        label: O.default.Messages.COPY_ID_USER,
                        onSuccess: k
                    }), z = (0, g.default)(n, a), X = !!(null == n ? void 0 : n.isNonUserBot());
                    return (0, i.jsxs)(o.Menu, {
                        navId: "user-context",
                        onClose: () => {
                            (0, r.closeContextMenu)(), null == G || G()
                        },
                        "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: h,
                        children: [!X && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsxs)(o.MenuGroup, {
                                children: [x, V]
                            }), (0, i.jsxs)(o.MenuGroup, {
                                children: [Y, H]
                            }), B && (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(o.MenuGroup, {
                                    children: j
                                }), (0, i.jsxs)(o.MenuGroup, {
                                    children: [Z, z]
                                })]
                            }), null != v ? K : null, null != W ? (0, i.jsx)(o.MenuGroup, {
                                children: W
                            }) : null]
                        }), (0, i.jsx)(o.MenuGroup, {
                            children: q
                        })]
                    })
                }, {
                    object: R.AnalyticsObjects.CONTEXT_MENU
                }), [c.default.CONTEXT_MENU, c.default.GUILD_MODERATION_USER_MENU])
        },
        489836: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("736964"),
                r = n("27618"),
                a = n("697218"),
                s = n("49111"),
                d = n("782340");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ContextMenu",
                    {
                        id: n
                    } = e,
                    c = (0, l.useStateFromStores)([a.default], () => {
                        var e;
                        return (null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.id) === n
                    }, [n]),
                    E = (0, l.useStateFromStores)([r.default], () => r.default.isBlocked(n), [n]);
                if (c) return null;

                function f() {
                    o.default.addRelationship({
                        userId: n,
                        context: {
                            location: t
                        },
                        type: s.RelationshipTypes.BLOCKED
                    })
                }
                return (0, i.jsx)(u.MenuItem, {
                    id: "block",
                    label: E ? d.default.Messages.UNBLOCK : d.default.Messages.BLOCK,
                    action: () => E ? o.default.unblockUser(n, {
                        location: t
                    }) : (0, u.openModal)(t => (0, i.jsx)(u.ConfirmModal, {
                        header: d.default.Messages.CONFIRM_USER_BLOCK_TITLE.format({
                            name: e.username
                        }),
                        confirmText: d.default.Messages.BLOCK,
                        cancelText: d.default.Messages.CANCEL,
                        onConfirm: f,
                        ...t,
                        children: (0, i.jsx)(u.Text, {
                            variant: "text-md/normal",
                            children: d.default.Messages.CONFIRM_USER_BLOCK_BODY.format({
                                name: e.username
                            })
                        })
                    }))
                })
            }
        },
        325882: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("228944"),
                r = n("201131"),
                a = n("702873"),
                s = n("42203"),
                d = n("377253"),
                c = n("957255"),
                E = n("49111"),
                f = n("782340");

            function _(e, t) {
                let n = (0, l.useStateFromStores)([c.default], () => null != e && c.default.canWithPartialContext(E.Permissions.MANAGE_MESSAGES, {
                        channelId: e
                    }), [e]),
                    _ = (0, l.useStateFromStores)([s.default], () => s.default.getChannel(e), [e]),
                    T = (0, l.useStateFromStores)([d.default], () => null != e && null != t ? d.default.getMessage(e, t) : null),
                    S = (0, r.useAutomodAlertActions)(null != T ? T : null);
                if (null == _ || null == T) return null;
                let I = null != S && S.actions.hasOwnProperty(o.AutomodAlertActionType.SET_COMPLETED) ? o.AutomodAlertActionType.UNSET_COMPLETED : o.AutomodAlertActionType.SET_COMPLETED,
                    N = I === o.AutomodAlertActionType.SET_COMPLETED ? f.default.Messages.GUILD_AUTOMOD_ALERT_SET_COMPLETED : f.default.Messages.GUILD_AUTOMOD_ALERT_UNSET_COMPLETED;
                return n && null != t ? (0, i.jsx)(u.MenuItem, {
                    id: "mark-automod-alert-completed",
                    label: N,
                    action: () => {
                        (0, a.executeAlertAction)(t, _, I)
                    }
                }, "mark-automod-alert-completed") : null
            }
        },
        625187: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("305961"),
                r = n("697218"),
                a = n("782340");

            function s(e, t) {
                let s = (0, l.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
                    d = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(t));
                return null == d || null == s || e.id === d.ownerId || e.bot || !d.isOwnerWithRequiredMfaLevel(s) ? null : (0, i.jsx)(u.MenuItem, {
                    id: "transfer-ownership",
                    color: "danger",
                    label: a.default.Messages.TRANSFER_OWNERSHIP,
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("878551").then(n.bind(n, "878551"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            guild: d,
                            fromUser: s,
                            toUser: e
                        })
                    })
                })
            }
        },
        806179: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983"),
                l = n("884691"),
                u = n("77078"),
                o = n("244201"),
                r = n("401642"),
                a = n("599110"),
                s = n("49111"),
                d = n("782340");

            function c(e, t, n) {
                let c = l.useContext(a.AnalyticsContext),
                    E = (0, o.useWindowDispatch)();
                return (0, i.jsx)(u.MenuItem, {
                    id: "user-profile",
                    label: d.default.Messages.PROFILE,
                    action: () => {
                        (0, r.openUserProfileModal)({
                            userId: e,
                            guildId: null != t ? t : void 0,
                            channelId: null != n ? n : void 0,
                            analyticsLocation: c.location
                        }), E.dispatch(s.ComponentActions.POPOUT_CLOSE)
                    }
                })
            }
        },
        783142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                saveProfileChanges: function() {
                    return f
                },
                handleProfileAccessibilityTooltipViewed: function() {
                    return _
                },
                resetPendingProfileChanges: function() {
                    return T
                },
                setPendingBanner: function() {
                    return S
                },
                setPendingBio: function() {
                    return I
                },
                setPendingPronouns: function() {
                    return N
                },
                setPendingAccentColor: function() {
                    return A
                },
                setPendingThemeColors: function() {
                    return p
                },
                setTryItOutAvatar: function() {
                    return g
                },
                setTryItOutAvatarDecoration: function() {
                    return U
                },
                setTryItOutBanner: function() {
                    return C
                },
                setTryItOutThemeColors: function() {
                    return D
                }
            });
            var i = n("872717"),
                l = n("913144"),
                u = n("448993"),
                o = n("884351"),
                r = n("845579"),
                a = n("697218"),
                s = n("599110"),
                d = n("49111"),
                c = n("646718");

            function E(e) {
                s.default.track(d.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function f(e, t) {
                var n, s;
                let c = null === (n = a.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let E = r.UseLegacyChatInput.getSetting();
                null != e.bio && E && (e.bio = o.default.parse(void 0, e.bio).content);
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
                        let e = null === (s = n.body.profile_effect) || void 0 === s ? void 0 : s.id;
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_SUCCESS",
                            userId: c,
                            profileEffectId: e,
                            ...n.body
                        })
                    } else {
                        let e = new u.APIError(n);
                        l.default.dispatch({
                            type: "USER_PROFILE_UPDATE_FAILURE",
                            errors: n.body,
                            apiError: e
                        })
                    }
                    return n
                } catch (t) {
                    let e = new u.APIError(t);
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_FAILURE",
                        errors: {},
                        apiError: e
                    })
                }
            }

            function _() {
                l.default.dispatch({
                    type: "USER_PROFILE_ACCESSIBILITY_TOOLTIP_VIEWED"
                })
            }

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function A(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR",
                    color: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function g(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), E(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), E(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function D(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), E(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        401642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openUserProfileModal: function() {
                    return a
                },
                closeUserProfileModal: function() {
                    return s
                }
            });
            var i = n("913144"),
                l = n("327037"),
                u = n("697218"),
                o = n("506885"),
                r = n("49111");

            function a(e) {
                let {
                    userId: t,
                    section: n,
                    guildId: a = r.ME,
                    channelId: s,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: E
                } = e, f = u.default.getUser(t), _ = a !== r.ME ? a : void 0;
                if (null == f) return (0, l.fetchProfile)(t, {
                    friendToken: d,
                    guildId: _
                }).then(() => {
                    i.default.dispatch({
                        type: "USER_PROFILE_MODAL_OPEN",
                        userId: t,
                        section: n,
                        guildId: a,
                        channelId: s,
                        friendToken: d,
                        autoFocusNote: c,
                        analyticsLocation: E
                    })
                });
                (0, o.default)(t, f.getAvatarURL(void 0, 80), {
                    withMutualGuilds: !0,
                    friendToken: d,
                    guildId: _
                }), i.default.dispatch({
                    type: "USER_PROFILE_MODAL_OPEN",
                    userId: t,
                    section: n,
                    guildId: a,
                    channelId: s,
                    friendToken: d,
                    autoFocusNote: c,
                    analyticsLocation: E
                })
            }

            function s() {
                i.default.dispatch({
                    type: "USER_PROFILE_MODAL_CLOSE"
                })
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("35647"),
                o = n("75196"),
                r = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: u,
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: u,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M3.37868 2.87868C3.94129 2.31607 4.70435 2 5.5 2H19.5C20.2956 2 21.0587 2.31607 21.6213 2.87868C22.1839 3.44129 22.5 4.20435 22.5 5V19C22.5 19.7956 22.1839 20.5587 21.6213 21.1213C21.0587 21.6839 20.2956 22 19.5 22H5.5C4.70435 22 3.94129 21.6839 3.37868 21.1213C2.81607 20.5587 2.5 19.7956 2.5 19V5C2.5 4.20435 2.81607 3.44129 3.37868 2.87868ZM7.65332 16.3125H9.47832V7.6875H7.65332V16.3125ZM11.23 7.6875V16.3125H14.2925C15.6008 16.3125 16.6091 15.9417 17.3175 15.2C18.0341 14.4583 18.3925 13.3917 18.3925 12C18.3925 10.6083 18.0341 9.54167 17.3175 8.8C16.6091 8.05833 15.6008 7.6875 14.2925 7.6875H11.23ZM15.955 14.0625C15.5466 14.4625 14.9925 14.6625 14.2925 14.6625H13.055V9.3375H14.2925C14.9925 9.3375 15.5466 9.5375 15.955 9.9375C16.3633 10.3375 16.5675 11.025 16.5675 12C16.5675 12.975 16.3633 13.6625 15.955 14.0625Z"
                        })
                    })
                }, u.IdIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return r
                }
            }), n("70102");
            var i = n("281071"),
                l = n("773336"),
                u = n("50885");
            let o = (() => {
                if (l.isPlatformEmbedded) return null != u.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function r(e) {
                return !!o && (l.isPlatformEmbedded ? (u.default.copy(e), !0) : i.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function i(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    i = window.getSelection(),
                    l = document.createElement("textarea");
                l.value = e, l.contentEditable = "true", l.style.visibility = "none", t.appendChild(l), n.selectNodeContents(l), null == i || i.removeAllRanges(), null == i || i.addRange(n), l.focus(), l.setSelectionRange(0, e.length);
                let u = document.execCommand("copy");
                return t.removeChild(l), u
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return i
                }
            }), n("70102")
        }
    }
]);