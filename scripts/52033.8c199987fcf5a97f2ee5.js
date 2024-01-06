(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["52033"], {
        719451: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                InviteResolvingHeader: function() {
                    return O
                },
                default: function() {
                    return A
                }
            }), n("70102");
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                u = n("77078"),
                i = n("770032"),
                s = n("653047"),
                o = n("233069"),
                d = n("813006"),
                _ = n("766274"),
                E = n("697218"),
                c = n("953109"),
                I = n("580357"),
                f = n("124969"),
                N = n("587974"),
                T = n("158998"),
                p = n("49111"),
                m = n("238055"),
                g = n("91366"),
                h = n("782340"),
                S = n("310042");
            let O = () => (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)(f.Avatar, {
                        src: null,
                        size: u.AvatarSizes.DEPRECATED_SIZE_100,
                        className: S.avatar
                    }), (0, l.jsx)(f.SubTitle, {
                        children: h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, l.jsx)(f.Title, {
                        className: S.inviteResolvingGuildName,
                        children: h.default.Messages.LOADING
                    })]
                }),
                v = e => {
                    let {
                        guild: t,
                        user: n,
                        application: a,
                        compact: r
                    } = e;
                    if (null != a) return (0, l.jsx)(c.default, {
                        className: S.appIcon,
                        game: a,
                        size: S.appIconSize
                    });
                    if (null != n) return (0, l.jsx)(f.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: u.AvatarSizes.SIZE_80,
                        className: r ? S.compactAvatar : S.avatar
                    });
                    if (null != t) return (0, l.jsx)(N.default, {
                        mask: N.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: S.guildIcon,
                        children: (0, l.jsx)(f.GuildIcon, {
                            guild: t,
                            size: f.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var A = e => {
                var t;
                let n, a, c, {
                        invite: N,
                        disableUser: O = !1,
                        error: A,
                        flatActivityCount: C = !1,
                        isRegister: R = !1
                    } = e,
                    {
                        currentUser: M,
                        multiAccounts: x
                    } = (0, r.useStateFromStoresObject)([i.default, E.default], () => ({
                        currentUser: E.default.getCurrentUser(),
                        multiAccounts: i.default.getUsers()
                    }));
                if (null == N) return null;
                let D = null != N.guild ? new d.default(N.guild) : null,
                    L = null != N.channel ? (0, o.createChannelRecordFromInvite)(N.channel) : null,
                    P = null != N.target_application ? new s.default(N.target_application) : null,
                    V = O || null == N.inviter ? null : new _.default(N.inviter),
                    H = null != N.approximate_member_count && N.approximate_member_count > 100 || null != D && D.hasFeature(p.GuildFeatures.COMMUNITY),
                    F = !H && null != V,
                    U = null,
                    j = !1;
                if (null != D) U = null == V ? h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : h.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: T.default.getFormattedName(V)
                }), N.target_type === g.InviteTargetTypes.STREAM && null != N.target_user && (U = h.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: T.default.getFormattedName(N.target_user)
                })), N.target_type === g.InviteTargetTypes.EMBEDDED_APPLICATION && null != N.target_application && (U = null != V ? h.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: T.default.getFormattedName(V)
                }) : h.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), F && null == P && (n = (0, l.jsx)(f.GuildIcon, {
                    className: S.icon,
                    guild: D,
                    size: f.GuildIcon.Sizes.SMALL
                })), a = D.name, null != P && (a = P.name, c = (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(f.SubTitle, {
                        className: S.appIn,
                        children: h.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, l.jsxs)("div", {
                        className: S.guildContainer,
                        children: [(0, l.jsx)(f.GuildIcon, {
                            guild: D,
                            size: f.GuildIcon.Sizes.SMALL
                        }), (0, l.jsx)(u.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "header-primary",
                            className: S.appGuildName,
                            children: D.name
                        })]
                    })]
                }));
                else if (null != L) {
                    if (null == V) throw Error("no inviter in group DM invite");
                    let e = T.default.getFormattedName(V);
                    null != L.name && "" !== L.name ? (U = h.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), a = L.name, null != L.icon && (n = (0, l.jsx)(f.ChannelIcon, {
                        channel: L,
                        size: u.AvatarSizes.SIZE_32
                    }))) : (U = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
                } else if (null != V) {
                    let e = T.default.getFormattedName(V, !0);
                    a = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), j = !0, c = null != A ? null : (0, l.jsx)(f.SubTitle, {
                        className: S.directInviteSubTitle,
                        children: R ? h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: S.container,
                    children: [(0, l.jsx)(v, {
                        application: P,
                        guild: D,
                        user: F ? V : null,
                        compact: j
                    }), null != A ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.SubTitle, {
                            children: h.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, l.jsx)(f.Title, {
                            children: A
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.SubTitle, {
                            children: U
                        }), (0, l.jsxs)(f.Title, {
                            className: S.title,
                            children: [null != D ? (0, l.jsx)(I.default, {
                                guild: D,
                                className: S.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, a]
                        })]
                    }), c, null != P || j || (null == N ? void 0 : null === (t = N.guild) || void 0 === t ? void 0 : t.id) === m.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(f.ActivityCount, {
                        className: S.activityCount,
                        online: N.approximate_presence_count,
                        total: N.approximate_member_count,
                        flat: C
                    }), x.length > 1 ? (0, l.jsx)(f.JoiningAs, {
                        user: M
                    }) : null]
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...s
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
                        clipRule: "evenodd",
                        className: i
                    })
                })
            }
        },
        238055: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                HubEmailConnectionSteps: function() {
                    return l
                },
                INVITE_ROUTING_HUB_GUILD_ID: function() {
                    return r
                }
            }), (a = l || (l = {})).STUDENT_PROMPT = "STUDENT_PROMPT", a.VERIFY_EMAIL = "VERIFY_EMAIL", a.VERIFY_PIN = "VERIFY_PIN", a.SELECT_SCHOOL = "SELECT_SCHOOL", a.SELECT_SCHOOL_SEARCH = "SELECT_SCHOOL_SEARCH", a.SUBMIT_SCHOOL = "SUBMIT_SCHOOL", a.EMAIL_CONFIRMATION = "EMAIL_CONFIRMATION", a.EMAIL_WAITLIST = "EMAIL_WAITLIST";
            let r = "884924873015689226"
        },
        878720: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChangePhoneReason: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var l, a, r = n("759843"),
                u = n("872717"),
                i = n("913144"),
                s = n("271938"),
                o = n("840707"),
                d = n("482931"),
                _ = n("49111");
            (l = a || (a = {})).USER_ACTION_REQUIRED = "user_action_required", l.USER_SETTINGS_UPDATE = "user_settings_update", l.GUILD_PHONE_REQUIRED = "guild_phone_required", l.MFA_PHONE_UPDATE = "mfa_phone_update", l.CONTACT_SYNC = "contact_sync";
            var E = {
                setCountryCode(e) {
                    i.default.dispatch({
                        type: "PHONE_SET_COUNTRY_CODE",
                        countryCode: e
                    })
                },
                removePhone: (e, t) => u.default.delete({
                    url: _.Endpoints.PHONE,
                    body: {
                        password: e,
                        change_phone_reason: t
                    },
                    oldFormErrors: !0
                }),
                resendCode(e) {
                    let t = {},
                        n = s.default.getFingerprint();
                    return null != n && "" !== n && (t["X-Fingerprint"] = n), u.default.post({
                        url: _.Endpoints.RESEND_PHONE,
                        headers: t,
                        body: {
                            phone: e
                        }
                    })
                },
                beginAddPhone: (e, t) => u.default.post({
                    url: _.Endpoints.PHONE,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                addPhone: (e, t, n) => u.default.post({
                    url: _.Endpoints.PHONE,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                addPhoneWithoutPassword: e => u.default.post({
                    url: _.Endpoints.PHONE_VERIFY_NO_PASSWORD,
                    body: {
                        code: e
                    }
                }),
                beginReverifyPhone: (e, t) => u.default.post({
                    url: _.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone: e,
                        change_phone_reason: t
                    }
                }),
                reverifyPhone: (e, t, n) => u.default.post({
                    url: _.Endpoints.PHONE_REVERIFY,
                    body: {
                        phone_token: e,
                        password: t,
                        change_phone_reason: n
                    },
                    oldFormErrors: !0
                }),
                validatePhoneForSupport: e => u.default.post({
                    url: _.Endpoints.VERIFY_PHONE_FOR_TICKET,
                    body: {
                        token: e
                    },
                    oldFormErrors: !0
                }),
                async verifyPhone(e, t) {
                    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                        l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        a = {},
                        u = s.default.getFingerprint();
                    null != u && "" !== u && (a["X-Fingerprint"] = u), l && (a.authorization = "");
                    let E = await o.default.post({
                        url: _.Endpoints.VERIFY_PHONE,
                        headers: a,
                        body: {
                            phone: e,
                            code: t
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.USER_VERIFY_PHONE
                        }
                    });
                    return n && i.default.dispatch({
                        type: "MODAL_POP",
                        key: d.PHONE_VERIFICATION_MODAL_KEY
                    }), E.body
                }
            }
        },
        482931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PHONE_VERIFICATION_MODAL_KEY: function() {
                    return l
                },
                PHONE_VERIFICATION_CODE_NUM_DIGITS: function() {
                    return a
                }
            });
            let l = "PHONE_VERIFICATION_MODAL_KEY",
                a = 6
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                r = n("880731");

            function u(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, u = (0, a.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return u ? (0, l.jsx)(l.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("884691"),
                a = n("65597"),
                r = n("526887"),
                u = n("880731");

            function i() {
                let {
                    createMultipleConfettiAt: e
                } = l.useContext(r.ConfettiCannonContext), t = (0, a.default)([u.default], () => u.default.getState()), n = l.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), i = l.useMemo(() => ({
                    fire: (l, a, r) => {
                        var u, i;
                        let s = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            o = n(s);
                        e(l, a, o, (null !== (u = null == r ? void 0 : r.count) && void 0 !== u ? u : s.confettiCount) * (null !== (i = null == r ? void 0 : r.countMultiplier) && void 0 !== i ? i : 1), {
                            sprite: null == r ? void 0 : r.sprite
                        })
                    }
                }), [e, n, t]);
                return i
            }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("926001"),
                u = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fill: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5ZM16.8995 8.41419L15.4853 6.99998L7 15.4853L8.41421 16.8995L16.8995 8.41419Z"
                        })
                    })
                }, r.SlashBoxIcon, void 0, {
                    size: 24
                })
        },
        95689: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("469563"),
                r = n("578478"),
                u = n("75196"),
                i = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: r,
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, u.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            className: r,
                            d: "M6 2C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2H6ZM10 8C10 6.8952 9.1032 6 8 6C6.8944 6 6 6.8952 6 8C6 9.1056 6.8944 10 8 10C9.1032 10 10 9.1056 10 8ZM9 14L6 18H18L15 11L11 16L9 14Z",
                            fill: a
                        })
                    })
                }, r.ImageIcon, void 0, {
                    size: 24
                })
        }
    }
]);