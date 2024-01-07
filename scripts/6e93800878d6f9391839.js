(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["7046"], {
        93902: function(t, e, n) {
            "use strict";
            t.exports = n.p + "de1981a6479d060d8ebd.png"
        },
        929423: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                saveGuildIdentityChanges: function() {
                    return i
                },
                setCurrentGuild: function() {
                    return T
                },
                initGuildIdentitySettings: function() {
                    return l
                },
                closeGuildIdentitySettings: function() {
                    return E
                },
                resetAndCloseGuildIdentityForm: function() {
                    return _
                },
                setPendingAvatar: function() {
                    return a
                },
                setPendingBanner: function() {
                    return s
                },
                setPendingBio: function() {
                    return S
                },
                setPendingPronouns: function() {
                    return c
                },
                setPendingNickname: function() {
                    return d
                },
                setPendingThemeColors: function() {
                    return N
                },
                resetPendingMemberChanges: function() {
                    return f
                },
                resetPendingProfileChanges: function() {
                    return D
                },
                resetAllPending: function() {
                    return G
                },
                clearErrors: function() {
                    return L
                },
                setDisableSubmit: function() {
                    return R
                }
            }), n("70102");
            var r = n("872717"),
                o = n("913144"),
                u = n("54239"),
                I = n("49111");
            async function i(t, e) {
                let {
                    nick: n,
                    avatar: u
                } = e;
                if (null == t) throw Error("Need guildId");
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let e = await r.default.patch({
                        url: I.Endpoints.SET_GUILD_MEMBER(t),
                        body: {
                            nick: n,
                            avatar: u
                        },
                        oldFormErrors: !0
                    });
                    return o.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS"
                    }), o.default.dispatch({
                        type: "GUILD_MEMBER_PROFILE_UPDATE",
                        guildMember: e.body,
                        guildId: t
                    }), e
                } catch (e) {
                    let t = e.body;
                    (null == t ? void 0 : t.username) != null && (t.nick = t.username, delete t.username), o.default.dispatch({
                        type: "GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE",
                        errors: e.body
                    })
                }
            }

            function T(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: t
                })
            }

            function l(t, e) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: t,
                    analyticsLocations: e
                })
            }

            function E() {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, u.popLayer)()
            }

            function _() {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function a(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: t
                })
            }

            function s(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: t
                })
            }

            function S(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: t
                })
            }

            function c(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: t
                })
            }

            function d(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: t
                })
            }

            function N(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: t
                })
            }

            function f() {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function D() {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function G() {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function L() {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function R(t) {
                o.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: t
                })
            }
        },
        424562: function(t, e, n) {
            "use strict";
            let r, o, u, I, i, T, l, E, _;
            n.r(e), n.d(e, {
                default: function() {
                    return P
                }
            });
            var a = n("446674"),
                s = n("913144"),
                S = n("49111");
            let c = S.FormStates.CLOSED,
                d = {},
                N = !1;

            function f() {
                c = S.FormStates.CLOSED, d = {}, l = null, E = void 0, _ = []
            }

            function D() {
                G(), L(), d = {}, c = S.FormStates.OPEN
            }

            function G() {
                r = void 0, i = void 0
            }

            function L() {
                o = void 0, u = void 0, I = void 0, T = void 0
            }
            class R extends a.default.Store {
                getFormState() {
                    return c
                }
                getErrors() {
                    return d
                }
                showNotice() {
                    return void 0 !== r || void 0 !== o || void 0 !== u || void 0 !== I || void 0 !== i || void 0 !== T
                }
                getPendingAvatar() {
                    return r
                }
                getPendingBanner() {
                    return o
                }
                getPendingBio() {
                    return u
                }
                getPendingNickname() {
                    return i
                }
                getPendingPronouns() {
                    return I
                }
                getPendingAccentColor() {
                    return i
                }
                getPendingThemeColors() {
                    return T
                }
                getAllPending() {
                    return {
                        pendingAvatar: r,
                        pendingBanner: o,
                        pendingBio: u,
                        pendingPronouns: I,
                        pendingNickname: i,
                        pendingThemeColors: T
                    }
                }
                getGuild() {
                    return l
                }
                getSource() {
                    return E
                }
                getAnalyticsLocations() {
                    return _
                }
                getIsDisableSubmit() {
                    return N
                }
            }
            R.displayName = "GuildIdentitySettingsStore";
            var P = new R(s.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(t) {
                    l = t.guild, c = S.FormStates.OPEN, d = {}, E = t.source, _ = t.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: f,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    D(), f()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(t) {
                    l = t.guild, d = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    c = S.FormStates.SUBMITTING, d = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(t) {
                    var e;
                    if (c !== S.FormStates.SUBMITTING) return !1;
                    c = S.FormStates.OPEN, d = null !== (e = t.errors) && void 0 !== e ? e : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(t) {
                    c = S.FormStates.OPEN, d = t.errors
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function(t) {
                    let {
                        avatar: e
                    } = t;
                    r = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function(t) {
                    let {
                        banner: e
                    } = t;
                    o = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function(t) {
                    let {
                        bio: e
                    } = t;
                    u = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(t) {
                    let {
                        pronouns: e
                    } = t;
                    I = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function(t) {
                    let {
                        nickname: e
                    } = t;
                    i = e
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function(t) {
                    let {
                        themeColors: e
                    } = t;
                    T = e
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: G,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: L,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: D,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: D,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    d = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(t) {
                    let {
                        disable: e
                    } = t;
                    N = e
                }
            })
        },
        38766: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n("884691"),
                o = n("79112"),
                u = n("685665"),
                I = n("929423");
            n("424562");
            var i = n("49111"),
                T = n("397336");

            function l(t) {
                let {
                    guild: e,
                    scrollPosition: n,
                    analyticsLocation: l,
                    analyticsLocations: E,
                    openWithoutBackstack: _ = !1
                } = t, {
                    analyticsLocations: a
                } = (0, u.default)(), s = (0, r.useCallback)(() => {
                    null != e && (0, I.initGuildIdentitySettings)(e, null != E ? E : a), o.default.open(i.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? T.ProfileCustomizationSubsection.GUILD : T.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: l,
                        analyticsLocations: E,
                        openWithoutBackstack: _
                    })
                }, [e, n, l, E, _, a]);
                return s
            }
        },
        493390: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                openProfileEffectModal: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var o = n("77078");
            let u = t => {
                let {
                    analyticsLocations: e,
                    initialSelectedEffectId: u
                } = t;
                (0, o.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("889793").then(n.bind(n, "889793"));
                    return n => (0, r.jsx)(t, {
                        ...n,
                        initialSelectedEffectId: u,
                        analyticsLocations: e
                    })
                }, {})
            }
        },
        388491: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                useProfileThemeValues: function() {
                    return s
                },
                getProfileTheme: function() {
                    return S
                },
                getValueInColorGradientByPercentage: function() {
                    return c
                },
                useAvatarBorderColor: function() {
                    return N
                },
                calculateButtonColor: function() {
                    return f
                },
                useMessageInputBorderColor: function() {
                    return D
                },
                useDividerColor: function() {
                    return G
                }
            }), n("222007");
            var r = n("884691"),
                o = n("917351"),
                u = n("509043"),
                I = n("65597"),
                i = n("669491"),
                T = n("819855"),
                l = n("206230"),
                E = n("449918"),
                _ = n("172182"),
                a = n("49111");

            function s(t) {
                let e = (0, I.default)([l.default], () => l.default.saturation);
                return (0, r.useMemo)(() => null == t ? null : {
                    overlaySyncedWithUserTheme: i.default.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    overlay: i.default.colors.PROFILE_GRADIENT_OVERLAY.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    sectionBox: i.default.colors.PROFILE_GRADIENT_SECTION_BOX.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    messageInputBorder: i.default.colors.PROFILE_GRADIENT_MESSAGE_INPUT_BORDER.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    dividerOpacity: t === i.default.themes.DARK ? .24 : .12,
                    noteBackgroundColor: i.default.colors.PROFILE_GRADIENT_NOTE_BACKGROUND.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    profileBodyBackgroundHover: i.default.colors.PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    rolePillBackgroundColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    rolePillBorderColor: i.default.colors.PROFILE_GRADIENT_ROLE_PILL_BORDER.resolve({
                        theme: t,
                        saturation: e
                    }).hsl(),
                    icon: i.default.colors.INTERACTIVE_NORMAL.resolve({
                        theme: t,
                        saturation: e
                    }).hsl()
                }, [t, e])
            }

            function S(t) {
                if (null == t) return null;
                let e = (0, u.getDarkness)(t);
                return e > .5 ? a.ThemeTypes.DARK : a.ThemeTypes.LIGHT
            }

            function c(t, e, n) {
                let r = n / 100,
                    o = 1 - r;
                return [Math.round(t[0] * o + e[0] * r), Math.round(t[1] * o + e[1] * r), Math.round(t[2] * o + e[2] * r)]
            }

            function d(t, e) {
                let n = (0, u.int2rgbArray)(t);
                if (null == e) return 0;
                let r = _.default.parseString(e);
                if (null == r) return 0;
                let o = [r.red, r.green, r.blue],
                    I = [n[0], n[1], n[2]],
                    i = r.alpha,
                    [T, l, E] = o.map((t, e) => Math.floor(i * t + (1 - i) * I[e]));
                return (0, u.rgb2int)("rgba(".concat(T, ", ").concat(l, ", ").concat(E, ")"))
            }

            function N(t, e, n) {
                let r = s(t);
                return null == r || null == e ? null : d(e, n ? r.overlaySyncedWithUserTheme : r.overlay)
            }
            let f = (0, o.memoize)(t => {
                let e = (0, T.getContrastingColor)(t, {
                    base: "#ffffff",
                    contrastRatio: T.WCAGContrastRatios.HighContrastText
                });
                return (0, u.hex2int)(e)
            }, t => t);

            function D(t, e) {
                let n = s(t);
                return null != n && null != e ? d(e, null == n ? void 0 : n.messageInputBorder) : null
            }

            function G(t, e) {
                let n = (0, E.useColorValue)(a.Color.WHITE_500).hex;
                return (0, T.isThemeDark)(t) ? (0, u.hex2int)(n) : null != e ? f(e) : null
            }
        }
    }
]);