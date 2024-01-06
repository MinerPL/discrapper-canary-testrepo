(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12350"], {
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
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return S
                },
                accountDetailsClose: function() {
                    return T
                },
                disableAccount: function() {
                    return p
                },
                saveAccountRequest: function() {
                    return A
                },
                saveAccountChanges: function() {
                    return g
                },
                getHarvestStatus: function() {
                    return C
                },
                requestHarvest: function() {
                    return N
                },
                setPendingAvatar: function() {
                    return I
                },
                setPendingGlobalNameName: function() {
                    return U
                },
                setPendingAvatarDecoration: function() {
                    return O
                },
                setPendingProfileEffectId: function() {
                    return h
                },
                clearErrors: function() {
                    return R
                },
                resetPendingAccountChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return m
                },
                resetAndCloseUserProfileForm: function() {
                    return P
                },
                setDisableSubmit: function() {
                    return y
                }
            });
            var i = n("872717"),
                l = n("95410"),
                u = n("819855"),
                o = n("913144"),
                a = n("393414"),
                r = n("599110"),
                d = n("315102"),
                s = n("730622"),
                c = n("437822"),
                f = n("49111"),
                E = n("191349"),
                _ = n("782340");

            function S() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function T() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function p(e, t) {
                let n = t ? _.default.Messages.DELETE_ACCOUNT : _.default.Messages.DISABLE_ACCOUNT,
                    l = t ? f.Endpoints.DELETE_ACCOUNT : f.Endpoints.DISABLE_ACCOUNT;
                return (0, s.default)(t => i.default.post({
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
            async function A(e) {
                let t = await i.default.patch({
                        url: f.Endpoints.ME,
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

            function g(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: i,
                    emailToken: u,
                    password: a,
                    avatar: c,
                    avatarDecoration: S,
                    newPassword: T,
                    globalName: p
                } = e;
                return o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, s.default)(e => {
                    let o = {
                        username: t,
                        email: i,
                        email_token: u,
                        password: a,
                        avatar: c,
                        discriminator: n,
                        global_name: p,
                        new_password: T,
                        ...e
                    };
                    null === S && (o.avatar_decoration_id = null), null != S && (o.avatar_decoration_id = S.id, o.avatar_decoration_sku_id = S.skuId);
                    let r = l.default.get(f.DEVICE_TOKEN),
                        d = (0, E.getDevicePushProvider)();
                    null != d && null != r && (o.push_provider = d, o.push_token = r);
                    let s = l.default.get(f.DEVICE_VOIP_TOKEN);
                    return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != s && (o.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, o.push_voip_token = s), A(o)
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
                    return r.default.track(f.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, d.isAnimatedIconHash)(t.avatar)
                    }), o.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function C() {
                return i.default.get({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function N() {
                return i.default.post({
                    url: f.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function I(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? u.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : u.AccessibilityAnnouncer.announce(_.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function U(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function O(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function h(e) {
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

            function v() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function m() {
                o.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function P() {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function y(e) {
                o.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
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
                    colorClass: a = "",
                    ...r
                } = e;
                return (0, i.jsxs)("svg", {
                    ...(0, u.default)(r),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M15.3 14.48c-.46.45-1.08.67-1.86.67h-1.39V9.2h1.39c.78 0 1.4.22 1.86.67.46.45.68 1.22.68 2.31 0 1.1-.22 1.86-.68 2.31Z",
                        className: a
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm1 15h2.04V7.34H6V17Zm4-9.66V17h3.44c1.46 0 2.6-.42 3.38-1.25.8-.83 1.2-2.02 1.2-3.58s-.4-2.75-1.2-3.58c-.79-.83-1.92-1.25-3.38-1.25H10Z",
                        clipRule: "evenodd",
                        className: a
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
        651057: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("702976"), n("313619"), n("654714"), n("287168"), n("956660"), n("222007");
            var i = n("872717"),
                l = n("913144"),
                u = n("568734"),
                o = n("299285"),
                a = n("49111"),
                r = {
                    async createApplication(e) {
                        let {
                            name: t,
                            guildId: n,
                            type: u,
                            teamId: o
                        } = e, r = await i.default.post({
                            url: a.Endpoints.APPLICATIONS,
                            body: {
                                name: t,
                                type: u,
                                guild_id: n,
                                team_id: o
                            }
                        }), d = r.body;
                        return null != n && null != u && l.default.dispatch({
                            type: "APPLICATION_FETCH_SUCCESS",
                            application: d
                        }), d
                    },
                    async getApplicationsForGuild(e) {
                        let {
                            includeTeam: t,
                            ...n
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u = await i.default.get({
                            url: a.Endpoints.GUILD_APPLICATIONS(e),
                            query: {
                                ...n,
                                include_team: t
                            }
                        }), o = u.body;
                        return l.default.dispatch({
                            type: "APPLICATIONS_FETCH_SUCCESS",
                            applications: o
                        }), o
                    },
                    async transferApplication(e) {
                        let {
                            applicationId: t,
                            teamId: n
                        } = e, u = await i.default.post({
                            url: a.Endpoints.APPLICATION_OWNER_TRANSFER(t),
                            body: {
                                team_id: n
                            }
                        }), o = u.body;
                        return l.default.dispatch({
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
                                    l = (0, u.hasFlag)(null !== (n = null == i ? void 0 : i.flags) && void 0 !== n ? n : 0, a.ApplicationFlags.EMBEDDED),
                                    r = l && (null == i ? void 0 : null === (t = i.embeddedActivityConfig) || void 0 === t ? void 0 : t.supported_platforms) == null;
                                return !(null != i && !r) && !o.default.isFetchingApplication(e) && !o.default.didFetchingApplicationFail(e) && e.length > 0
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
        861370: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("845579"),
                o = n("662255"),
                a = n("306160");

            function r(e) {
                let {
                    id: t,
                    label: n,
                    onSuccess: r,
                    shiftId: d,
                    showIconFirst: s
                } = e, c = u.DeveloperMode.useSetting();
                if (__OVERLAY__ || !c || !a.SUPPORTS_COPY) return null;
                let f = "devmode-copy-id-".concat(t);
                return (0, i.jsx)(l.MenuItem, {
                    id: f,
                    label: n,
                    action: function(e) {
                        let n = null != d && e.shiftKey ? d : t;
                        (0, a.copy)(n), null == r || r()
                    },
                    icon: o.default,
                    showIconFirst: s
                }, f)
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return s
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return E
                }
            });
            var i = n("65597"),
                l = n("862205"),
                u = n("697218"),
                o = n("719923"),
                a = n("782340");
            let r = (0, l.createExperiment)({
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
                d = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: u,
                        autoUnfurlReactionTooltip: a,
                        collectOffOverride: r
                    } = n, d = o.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: u,
                        collectEnabled: !r && (d ? i : u),
                        autoUnfurlReactionTooltip: a
                    }
                },
                s = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1,
                        autoUnfurlReactionTooltip: !1
                    } : d({
                        user: t,
                        config: r.getCurrentConfig({
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
                    }, l = (0, i.default)([u.default], () => u.default.getCurrentUser()), o = r.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: s,
                        collectEnabled: c,
                        autoUnfurlReactionTooltip: f
                    } = d({
                        user: l,
                        config: o
                    }), E = a && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: s,
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
                E = function() {
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
        292687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i.default
                }
            });
            var i = n("870346")
        },
        906932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAvatarsWithGuilds: function() {
                    return r
                },
                setNewPendingUserBio: function() {
                    return d
                },
                setNewPendingAvatar: function() {
                    return s
                },
                setNewPendingAvatarDecoration: function() {
                    return c
                },
                setNewPendingProfileEffectId: function() {
                    return f
                },
                getProfilePreviewField: function() {
                    return E
                },
                showRemoveAvatar: function() {
                    return _
                },
                showRemoveBanner: function() {
                    return S
                }
            }), n("424973");
            var i = n("884691"),
                l = n("152584"),
                u = n("234251"),
                o = n("783142"),
                a = n("26989");

            function r(e) {
                return i.useMemo(() => {
                    let t = a.default.getMutableAllGuildsAndMembers(),
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

            function d(e, t) {
                (0, o.setPendingBio)(e === t ? void 0 : e)
            }

            function s(e, t) {
                (0, l.setPendingAvatar)(e === t ? void 0 : e)
            }

            function c(e, t) {
                if ((0, u.isEqualAvatarDecoration)(e, null != t ? t : null)) {
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

            function _(e, t) {
                return void 0 === e ? null != t : null != e
            }

            function S(e, t) {
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
        812809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("845579"),
                l = n("42887"),
                u = n("829536");

            function o(e) {
                let t = function() {
                        var e;
                        let t = i.SoundboardSettings.getSetting();
                        return (0, u.amplitudeToPerceptual)(null !== (e = null == t ? void 0 : t.volume) && void 0 !== e ? e : 100) / 100
                    }(),
                    n = Math.min(l.default.getOutputVolume() / 100, 1);
                return Math.min(e * t * n, 1)
            }
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return A
                },
                inviteUserToStage: function() {
                    return g
                },
                audienceAckRequestToSpeak: function() {
                    return C
                },
                moveSelfToAudience: function() {
                    return N
                },
                setUserSuppress: function() {
                    return I
                },
                moveUserToAudience: function() {
                    return U
                },
                setEveryoneRolePermissionAllowed: function() {
                    return O
                },
                startStage: function() {
                    return h
                },
                editStage: function() {
                    return R
                },
                endStage: function() {
                    return v
                }
            });
            var i = n("627445"),
                l = n.n(i),
                u = n("316693"),
                o = n("872717"),
                a = n("450911");
            n("851387");
            var r = n("798609"),
                d = n("716241"),
                s = n("18494"),
                c = n("800762"),
                f = n("991170"),
                E = n("716214"),
                _ = n("230324"),
                S = n("738983"),
                T = n("808422"),
                p = n("49111");

            function A(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(p.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), o.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = e.getGuildId();
                return l(null != n, "This channel cannot be guildless."), o.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    i = null == e ? void 0 : e.getGuildId();
                l(null != i, "This channel cannot be guildless.");
                let u = c.default.getVoiceStateForChannel(e.id),
                    a = (0, T.getAudienceRequestToSpeakState)(u);
                return a === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(p.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), o.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(i),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function N(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return l(null != t, "This channel cannot be guildless."), o.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function I(e, t, n) {
                let i = e.getGuildId();
                return l(null != i, "This channel cannot be guildless."), o.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(i, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function U(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return l(null != n, "This channel cannot be guildless."), I(t, e.id, !0), o.default.patch({
                    url: p.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function O(e, t, n) {
                let i = e.getGuildId();
                l(null != i, "Channel cannot be guildless");
                let o = e.permissionOverwrites[i],
                    d = {
                        id: i,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: f.default.NONE,
                        deny: f.default.NONE,
                        ...o
                    };
                n ? (d.allow = u.default.add(d.allow, t), d.deny = u.default.remove(d.deny, t)) : (d.allow = u.default.remove(d.allow, t), d.deny = u.default.add(d.deny, t)), a.default.updatePermissionOverwrite(e.id, d)
            }
            async function h(e, t, n, i) {
                if ("" === t) return;
                let l = s.default.getVoiceChannelId() === e.id;
                !l && (0, E.connectToStage)(e);
                let u = await (0, S.startStageInstance)(e.id, t, n, i);
                return C(e, !1, !0), u
            }
            async function R(e, t, n) {
                if ("" === t) return;
                let i = await (0, S.updateStageInstance)(e.id, t, n);
                return i
            }
            async function v(e) {
                await (0, S.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("808653"), n("222007"), n("917351");
            var i = n("945956"),
                l = n("387111"),
                u = n("991170"),
                o = n("834052"),
                a = n("837979"),
                r = n("49111"),
                d = n("606762"),
                s = n("782340");

            function c(e, t, n, i) {
                let u = t[0],
                    o = l.default.getName(e, n, u),
                    a = null != i ? i : t.length;
                return 1 === a && null != u ? o : null == u ? s.default.Messages.SPEAKING_COUNT.format({
                    count: a
                }) : s.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: o,
                    count: a - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? s.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : s.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = o.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: u.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? a.RequestToSpeakPermissionStates.EVERYONE : a.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return u
                },
                updateStageInstance: function() {
                    return o
                },
                endStageInstance: function() {
                    return a
                }
            });
            var i = n("872717"),
                l = n("49111");
            async function u(e, t, n, u, o) {
                let a = await i.default.post({
                    url: l.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: o,
                        send_start_notification: u
                    }
                });
                return a.body
            }
            async function o(e, t, n) {
                let u = await i.default.patch({
                    url: l.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return u.body
            }

            function a(e) {
                return i.default.delete(l.Endpoints.STAGE_INSTANCE(e))
            }
        },
        77445: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("446674"),
                l = n("271938"),
                u = n("18494"),
                o = n("808422");

            function a() {
                let e = (0, i.useStateFromStores)([u.default], () => u.default.getVoiceChannelId()),
                    t = (0, i.useStateFromStores)([l.default], () => l.default.getId()),
                    n = (0, o.default)(t, e);
                return n === o.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK
            }
        },
        130563: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("42203"),
                u = n("18494");

            function o() {
                return (0, i.useStateFromStores)([u.default, l.default], () => {
                    let e = u.default.getVoiceChannelId();
                    if (null != e) {
                        let t = l.default.getChannel(e);
                        if (null == t ? void 0 : t.isGuildStageVoice()) return t
                    }
                    return null
                })
            }
        },
        726750: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                u = n("77078"),
                o = n("305961"),
                a = n("697218"),
                r = n("800762"),
                d = n("244480"),
                s = n("619395"),
                c = n("325861"),
                f = n("77445"),
                E = n("130563"),
                _ = n("782340");

            function S(e) {
                var t;
                let n = (0, E.default)(),
                    S = null == n ? void 0 : n.id,
                    T = null == n ? void 0 : n.guild_id,
                    p = (0, l.useStateFromStores)([o.default], () => o.default.getGuild(T), [T]),
                    A = (0, l.useStateFromStores)([r.default], () => null != S ? r.default.getVoiceStateForChannel(S, e.id) : null, [S, e.id]),
                    g = (null === (t = a.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.id,
                    C = (0, f.default)(),
                    N = (0, l.useStateFromStores)([c.default], () => c.default.getPermissionsForUser(e.id, S), [S, e.id]),
                    I = (0, s.useCanModerateRequestToSpeak)(S);
                if (null == n || null == p || null == A || N.speaker) return null;
                let U = () => {
                    g ? (0, d.audienceAckRequestToSpeak)(n, !1) : (0, d.inviteUserToStage)(n, e.id)
                };
                return I ? (0, i.jsx)(u.MenuItem, {
                    id: "invite-speaker",
                    label: g ? _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER : _.default.Messages.STAGE_CHANNEL_USER_INVITE_TO_SPEAK,
                    action: U
                }) : C && g ? (0, i.jsx)(u.MenuItem, {
                    id: "invite-speaker",
                    label: _.default.Messages.STAGE_CHANNEL_USER_SET_MYSELF_TO_SPEAKER,
                    action: U
                }) : null
            }
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return s
                }
            });
            var i, l, u = n("991170"),
                o = n("719923"),
                a = n("24373"),
                r = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return 2;
                    let i = o.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || u.default.can({
                        permission: r.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? 0 : 1 : 2 : 3;
                    return 2
                },
                s = (e, t, n) => 0 === d(e, t, n)
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("424973");
            var i = n("917351"),
                l = n.n(i),
                u = n("446674"),
                o = n("913144"),
                a = n("80507"),
                r = n("374363"),
                d = n("364685"),
                s = n("49111"),
                c = n("397336");
            let f = {
                pendingUsages: []
            };
            s.Durations.DAY;
            let E = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => d.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                _ = () => {
                    d.default.isLoaded && E.compute()
                },
                S = () => {
                    _()
                };

            function T() {
                var e;
                let t = null === (e = r.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                E.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), f.pendingUsages)
            }
            class p extends u.default.PersistedStore {
                initialize(e) {
                    this.waitFor(d.default), null != e && (f = e), this.syncWith([d.default], S), this.syncWith([r.default], T)
                }
                getState() {
                    return f
                }
                hasPendingUsage() {
                    return f.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return E
                }
            }
            p.displayName = "StickersPersistedStore", p.persistKey = "StickersPersistedStoreV2";
            var A = new p(o.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        E.track(e), f.pendingUsages.push({
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
                    f.pendingUsages = []
                }
            })
        },
        406784: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("272030"),
                o = n("838446"),
                a = n("158534"),
                r = n("846883"),
                d = n("812204"),
                s = n("861370"),
                c = n("726750"),
                f = n("170990"),
                E = n("304582"),
                _ = n("72057"),
                S = n("489836"),
                T = n("406703"),
                p = n("314838"),
                A = n("421602"),
                g = n("692986"),
                C = n("806179"),
                N = n("816106"),
                I = n("623879"),
                U = n("49111"),
                O = n("782340"),
                h = (0, a.default)((0, o.default)(function(e) {
                    let {
                        user: t,
                        showMediaItems: n = !1,
                        mediaEngineContext: o,
                        onSelect: a
                    } = e, d = (0, C.default)(t.id), U = (0, A.default)(t.id), h = (0, T.default)(t), R = (0, _.default)({
                        user: t
                    }), v = (0, E.default)(t), m = (0, I.default)(t.id), P = (0, N.default)(t.id), y = (0, g.default)(t.id, o), b = (0, p.default)(t), w = (0, r.default)(null, t), D = (0, f.default)(t), L = (0, S.default)(t), M = (0, s.default)({
                        id: t.id,
                        label: O.default.Messages.COPY_ID_USER
                    }), G = (0, c.default)(t), k = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: u.closeContextMenu,
                        "aria-label": O.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: a,
                        children: [!k && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: G
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [d, U, h, R, v, m]
                            }), n && (0, i.jsx)(l.MenuGroup, {
                                children: P
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: w
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [n && y, b, D, L]
                            })]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: M
                        })]
                    })
                }, {
                    object: U.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.USER_GENERIC_MENU])
        },
        421602: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                u = n("450911"),
                o = n("54239"),
                a = n("271938"),
                r = n("49111"),
                d = n("782340");

            function s(e, t) {
                let n = a.default.getId(),
                    s = t === r.AppContext.POPOUT;
                return n === e || s ? null : (0, i.jsx)(l.MenuItem, {
                    id: "message-user",
                    label: d.default.Messages.USER_POPOUT_MESSAGE,
                    action: () => {
                        u.default.openPrivateChannel(e), (0, o.popLayer)()
                    }
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
                    return _
                },
                resetPendingProfileChanges: function() {
                    return S
                },
                setPendingBanner: function() {
                    return T
                },
                setPendingBio: function() {
                    return p
                },
                setPendingPronouns: function() {
                    return A
                },
                setPendingAccentColor: function() {
                    return g
                },
                setPendingThemeColors: function() {
                    return C
                },
                setTryItOutAvatar: function() {
                    return N
                },
                setTryItOutAvatarDecoration: function() {
                    return I
                },
                setTryItOutBanner: function() {
                    return U
                },
                setTryItOutThemeColors: function() {
                    return O
                }
            });
            var i = n("872717"),
                l = n("913144"),
                u = n("448993"),
                o = n("884351"),
                a = n("845579"),
                r = n("697218"),
                d = n("599110"),
                s = n("49111"),
                c = n("646718");

            function f(e) {
                d.default.track(s.AnalyticEvents.PREMIUM_FEATURE_TRY_OUT, {
                    feature_name: e,
                    feature_tier: c.AnalyticsPremiumFeatureTiers.PREMIUM_STANDARD
                })
            }
            async function E(e, t) {
                var n, d;
                let c = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                if (null == c) return;
                let f = a.UseLegacyChatInput.getSetting();
                null != e.bio && f && (e.bio = o.default.parse(void 0, e.bio).content);
                try {
                    l.default.dispatch({
                        type: "USER_PROFILE_UPDATE_START",
                        userId: c
                    });
                    let n = await i.default.patch({
                        url: null != t ? s.Endpoints.GUILD_PROFILE(t, s.ME) : s.Endpoints.USER_PROFILE(s.ME),
                        body: e
                    });
                    if (n.ok) {
                        let e = null === (d = n.body.profile_effect) || void 0 === d ? void 0 : d.id;
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

            function S() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function T(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_BIO",
                    bio: e
                })
            }

            function A(e) {
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

            function C(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function N(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR",
                    avatar: e
                }), f(c.AnalyticsPremiumFeatureNames.ANIMATED_AVATAR)
            }

            function I(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION",
                    avatarDecoration: e
                }), f(c.AnalyticsPremiumFeatureNames.AVATAR_DECORATION)
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER",
                    banner: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_BANNER)
            }

            function O(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS",
                    themeColors: e
                }), f(c.AnalyticsPremiumFeatureNames.PROFILE_THEME_COLOR)
            }
        },
        662255: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                u = n("35647"),
                o = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, o.default)(a),
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
                    return a
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

            function a(e) {
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