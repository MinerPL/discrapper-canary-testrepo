(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["78633"], {
        766665: function(e, t, n) {
            var i = n("424498");
            e.exports = function(e, t, n) {
                "__proto__" == t && i ? i(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: n,
                    writable: !0
                }) : e[t] = n
            }
        },
        53708: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f6c7b8245d3a54cf98b2.png"
        },
        820542: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                categoryCollapse: function() {
                    return l
                },
                categoryExpand: function() {
                    return r
                },
                categoryCollapseAll: function() {
                    return a
                },
                categoryExpandAll: function() {
                    return s
                }
            });
            var i = n("913144");

            function l(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE",
                    id: e
                })
            }

            function r(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND",
                    id: e
                })
            }

            function a(e) {
                i.default.dispatch({
                    type: "CATEGORY_COLLAPSE_ALL",
                    guildId: e
                })
            }

            function s(e) {
                i.default.dispatch({
                    type: "CATEGORY_EXPAND_ALL",
                    guildId: e
                })
            }
        },
        666020: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                subscribeMembers: function() {
                    return r
                },
                unsubscribeMembers: function() {
                    return a
                },
                subscribeChannel: function() {
                    return s
                },
                subscribeChannelDimensions: function() {
                    return o
                }
            }), n("424973");
            var i = n("913144"),
                l = n("696605");

            function r(e, t) {
                i.default.dispatch({
                    type: "GUILD_SUBSCRIPTIONS_MEMBERS_ADD",
                    guildId: e,
                    userIds: t
                })
            }

            function a(e, t) {
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

            function o(e) {
                let {
                    guildId: t,
                    channelId: n,
                    y: i,
                    height: r,
                    rowHeight: a
                } = e;

                function o(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return Math.max(0, Math.ceil(Math.ceil(e / a)) + t)
                }
                let u = [];

                function d(e) {
                    let t = e + (l.MINIMUM_RANGE - 1);
                    return u.push([e, t]), t + 1
                }
                let c = o(.5 * r),
                    f = o(i, -c),
                    h = o(i + r, c);
                for (f > 0 && (f = Math.max(d(0), f)), f = Math.floor(f / l.MINIMUM_RANGE) * l.MINIMUM_RANGE; f <= h;) f = d(f);
                s(t, n, u)
            }
        },
        713841: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("913144"),
                l = n("592407"),
                r = n("482391"),
                a = n("611183"),
                s = {
                    init() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_INIT"
                        })
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_SET_SECTION",
                            section: e,
                            sectionId: t
                        })
                    },
                    startEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    stopEditingCommandPermissions(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_COMMAND",
                            commandId: e
                        })
                    },
                    startEditingIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_INTEGRATION",
                            integrationId: e
                        })
                    },
                    stopEditingIntegration() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_INTEGRATION"
                        })
                    },
                    updateIntegration(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_INTEGRATION",
                            settings: e
                        })
                    },
                    startEditingWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_START_EDITING_WEBHOOK",
                            webhookId: e
                        })
                    },
                    stopEditingWebhook() {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_STOP_EDITING_WEBHOOK"
                        })
                    },
                    updateWebhook(e) {
                        i.default.dispatch({
                            type: "INTEGRATION_SETTINGS_UPDATE_WEBHOOK",
                            settings: e
                        })
                    },
                    async saveApplicationPermissions(e, t, n) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await r.updateApplicationCommandPermissions({
                                applicationId: e,
                                commandId: e,
                                defaultEveryoneValue: !0,
                                defaultEverywhereValue: !0,
                                guildId: t,
                                permissions: n
                            }), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveIntegration(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await l.default.updateIntegration(e, t.id, t.expire_behavior, t.expire_grace_period, t.enable_emoticons), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    },
                    async saveWebhook(e, t) {
                        try {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SUBMITTING"
                            }), await a.default.update(e, t.id, t), i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_SUCCESS"
                            })
                        } catch (e) {
                            i.default.dispatch({
                                type: "INTEGRATION_SETTINGS_SAVE_FAILURE",
                                errors: e.body
                            })
                        }
                    }
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
                    return a
                },
                updateAddressInfo: function() {
                    return s
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

            function a() {
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

            function o() {
                i.default.wait(() => i.default.dispatch({
                    type: "NEW_PAYMENT_SOURCE_CLEAR_ERROR"
                }))
            }
        },
        519705: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("702976");
            var i = n("872717"),
                l = n("819855"),
                r = n("913144"),
                a = n("679428"),
                s = n("282109"),
                o = n("568734"),
                u = n("34676"),
                d = n("49111"),
                c = n("397336"),
                f = n("782340"),
                h = {
                    open(e) {
                        r.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_OPEN",
                            guildId: e
                        })
                    },
                    close() {
                        r.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_MODAL_CLOSE"
                        })
                    },
                    updateGuildNotificationSettings(e, t, n, i) {
                        let l = (0, u.getCurrentGuildSettings)(e);
                        a.default.saveUserGuildSettings(e, t), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, l, n, i)
                    },
                    updateGuildAndChannelNotificationSettings(e, t, n, i) {
                        let l = Object.keys(t.channel_overrides),
                            s = (0, u.getCurrentGuildSettings)(e),
                            o = (0, u.getManyCurrentChannelSettings)(e, l);
                        a.default.saveUserGuildSettings(e, t), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE",
                            guildId: e,
                            settings: t
                        }), (0, u.trackGuildNotificationSettingsUpdate)(e, t, s, n, i), Object.keys(t.channel_overrides).forEach(l => {
                            let r = o.get(l);
                            (0, u.trackChannelNotificationSettingsUpdate)(e, l, t.channel_overrides[l], r, n, i)
                        })
                    },
                    updateGuildNotificationSettingsBulk(e, t, n) {
                        let i = Object.keys(e),
                            l = (0, u.getManyCurrentGuildSettings)(i);
                        a.default.saveUserGuildSettingsBulk(e), Object.entries(e).forEach(e => {
                            let [i, a] = e, s = l.get(i);
                            r.default.dispatch({
                                type: "USER_GUILD_SETTINGS_GUILD_UPDATE",
                                guildId: i,
                                settings: a
                            }), (0, u.trackGuildNotificationSettingsUpdate)(i, a, s, t, n)
                        })
                    },
                    updateChannelOverrideSettings(e, t, n, i, s) {
                        let o = (0, u.getCurrentChannelSettings)(e, t);
                        a.default.saveUserGuildSettings(e, {
                            channel_overrides: {
                                [t]: n
                            }
                        }), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE",
                            guildId: e,
                            channelId: t,
                            settings: n
                        }), l.AccessibilityAnnouncer.announce(f.default.Messages.A11Y_ANNOUNCEMENT_CHANNEL_SETTINGS_UPDATED), (0, u.trackChannelNotificationSettingsUpdate)(e, t, n, o, i, s)
                    },
                    updateChannelOverrideSettingsBulk(e, t, n, i) {
                        let l = Object.keys(t),
                            s = (0, u.getManyCurrentChannelSettings)(e, l);
                        a.default.saveUserGuildSettings(e, {
                            channel_overrides: t
                        }), r.default.dispatch({
                            type: "USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK",
                            guildId: e,
                            overrides: t
                        }), Object.keys(t).forEach(l => (0, u.trackChannelNotificationSettingsUpdate)(e, l, t[l], s.get(l), n, i))
                    },
                    setForumThreadsCreated(e, t) {
                        let n = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF,
                            i = t ? c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_OFF : c.ChannelNotificationSettingsFlags.NEW_FORUM_THREADS_ON,
                            l = s.default.getChannelFlags(e);
                        this.updateChannelOverrideSettings(e.guild_id, e.id, {
                            flags: l & ~i | n
                        }, u.NotificationLabel.forumThreadsCreated(t))
                    },
                    async setAccountFlag(e, t) {
                        let n = s.default.accountNotificationSettings.flags,
                            l = (0, o.setFlag)(n, e, t);
                        await i.default.patch({
                            url: d.Endpoints.ACCOUNT_NOTIFICATION_SETTINGS,
                            body: {
                                flags: l
                            }
                        }), await r.default.dispatch({
                            type: "NOTIFICATION_SETTINGS_UPDATE",
                            settings: {
                                flags: l
                            }
                        })
                    }
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
        611183: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("917351"),
                l = n.n(i),
                r = n("872717"),
                a = n("913144"),
                s = n("49111");
            let o = ["Spidey Bot", "Captain Hook"];
            var u = {
                fetchForGuild(e) {
                    a.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e
                    }), r.default.get({
                        url: s.Endpoints.GUILD_WEBHOOKS(e),
                        oldFormErrors: !0
                    }).then(t => {
                        let {
                            body: n
                        } = t;
                        return a.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            webhooks: n
                        })
                    }).catch(t => {
                        let {
                            body: n
                        } = t;
                        a.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            error: n.message
                        })
                    })
                },
                fetchForChannel(e, t) {
                    a.default.dispatch({
                        type: "WEBHOOKS_FETCHING",
                        guildId: e,
                        channelId: t
                    }), r.default.get({
                        url: s.Endpoints.CHANNEL_WEBHOOKS(t),
                        oldFormErrors: !0
                    }).then(n => {
                        let {
                            body: i
                        } = n;
                        return a.default.dispatch({
                            type: "WEBHOOKS_UPDATE",
                            guildId: e,
                            channelId: t,
                            webhooks: i
                        })
                    })
                },
                create: (e, t, n) => (null == n && (n = o[l.random(0, o.length - 1)]), r.default.post({
                    url: s.Endpoints.CHANNEL_WEBHOOKS(t),
                    body: {
                        name: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return a.default.dispatch({
                        type: "WEBHOOK_CREATE",
                        guildId: e,
                        webhook: n
                    }), n
                })),
                delete: (e, t) => r.default.delete({
                    url: s.Endpoints.WEBHOOK(t),
                    oldFormErrors: !0
                }).then(() => {
                    a.default.dispatch({
                        type: "WEBHOOK_DELETE",
                        guildId: e,
                        webhookId: t
                    })
                }),
                update: (e, t, n) => r.default.patch({
                    url: s.Endpoints.WEBHOOK(t),
                    body: n,
                    oldFormErrors: !0
                }).then(t => {
                    let {
                        body: n
                    } = t;
                    return a.default.dispatch({
                        type: "WEBHOOK_UPDATE",
                        guildId: e,
                        webhook: n
                    }), n
                })
            }
        },
        733154: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 22a10 10 0 1 0-8.45-4.64c.13.19.11.44-.04.61l-2.06 2.37A1 1 0 0 0 2.2 22H12Z",
                        className: s
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        className: s
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
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                        className: s
                    })]
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.09c1.8 0 3.39 1.18 3.91 2.9A4.09 4.09 0 0 1 15.91 2H16a4 4 0 0 1 3.46 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10c0-1.1.9-2 2-2h.54A3.98 3.98 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.09c-.96 0-1.8.65-2.02 1.58L13.29 8H16Zm-5.89-2.42.6 2.42H8a2 2 0 1 1 0-4h.09c.96 0 1.8.65 2.02 1.58Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm16 3a1 1 0 0 0-.3-.7l-3-3a1 1 0 1 0-1.4 1.4L14.58 7H13a6 6 0 0 0-6 6 1 1 0 1 0 2 0 4 4 0 0 1 4-4h1.59l-1.3 1.3a1 1 0 0 0 1.42 1.4l3-3A1 1 0 0 0 18 8Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10.56 1.1c-.46.05-.7.53-.64.98.18 1.16-.19 2.2-.98 2.53-.8.33-1.79-.15-2.49-1.1-.27-.36-.78-.52-1.14-.24-.77.59-1.45 1.27-2.04 2.04-.28.36-.12.87.24 1.14.96.7 1.43 1.7 1.1 2.49-.33.8-1.37 1.16-2.53.98-.45-.07-.93.18-.99.64a11.1 11.1 0 0 0 0 2.88c.06.46.54.7.99.64 1.16-.18 2.2.19 2.53.98.33.8-.14 1.79-1.1 2.49-.36.27-.52.78-.24 1.14.59.77 1.27 1.45 2.04 2.04.36.28.87.12 1.14-.24.7-.95 1.7-1.43 2.49-1.1.8.33 1.16 1.37.98 2.53-.07.45.18.93.64.99a11.1 11.1 0 0 0 2.88 0c.46-.06.7-.54.64-.99-.18-1.16.19-2.2.98-2.53.8-.33 1.79.14 2.49 1.1.27.36.78.52 1.14.24.77-.59 1.45-1.27 2.04-2.04.28-.36.12-.87-.24-1.14-.96-.7-1.43-1.7-1.1-2.49.33-.8 1.37-1.16 2.53-.98.45.07.93-.18.99-.64a11.1 11.1 0 0 0 0-2.88c-.06-.46-.54-.7-.99-.64-1.16.18-2.2-.19-2.53-.98-.33-.8.14-1.79 1.1-2.49.36-.27.52-.78.24-1.14a11.07 11.07 0 0 0-2.04-2.04c-.36-.28-.87-.12-1.14.24-.7.96-1.7 1.43-2.49 1.1-.8-.33-1.16-1.37-.98-2.53.07-.45-.18-.93-.64-.99a11.1 11.1 0 0 0-2.88 0ZM16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        926001: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SlashBoxIcon: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3H5Zm12.79 3.37a.25.25 0 0 0-.22-.37h-3.13a.75.75 0 0 0-.66.38L6.21 18.63c-.1.16.03.37.22.37h3.13c.27 0 .52-.14.66-.38l7.57-13.25Z",
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M19.61 18.25a1.08 1.08 0 0 1-.07-1.33 9 9 0 1 0-15.07 0c.26.42.25.97-.08 1.33l-.02.02c-.41.44-1.12.43-1.46-.07a11 11 0 1 1 18.17 0c-.33.5-1.04.51-1.45.07l-.02-.02Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M16.83 15.23c.43.47 1.18.42 1.45-.14a7 7 0 1 0-12.57 0c.28.56 1.03.6 1.46.14l.05-.06c.3-.33.35-.81.17-1.23A4.98 4.98 0 0 1 12 7a5 5 0 0 1 4.6 6.94c-.17.42-.13.9.18 1.23l.05.06Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
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
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
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
                        fill: "string" == typeof a ? a : a.css,
                        d: "M12 3a1 1 0 0 0-1-1h-.06a1 1 0 0 0-.74.32L5.92 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2.92l4.28 4.68a1 1 0 0 0 .74.32H11a1 1 0 0 0 1-1V3ZM15.1 20.75c-.58.14-1.1-.33-1.1-.92v-.03c0-.5.37-.92.85-1.05a7 7 0 0 0 0-13.5A1.11 1.11 0 0 1 14 4.2v-.03c0-.6.52-1.06 1.1-.92a9 9 0 0 1 0 17.5Z",
                        className: s
                    }), (0, i.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M15.16 16.51c-.57.28-1.16-.2-1.16-.83v-.14c0-.43.28-.8.63-1.02a3 3 0 0 0 0-5.04c-.35-.23-.63-.6-.63-1.02v-.14c0-.63.59-1.1 1.16-.83a5 5 0 0 1 0 9.02Z",
                        className: s
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
        750560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSubscribeGuildMembers: function() {
                    return s
                }
            }), n("37983");
            var i = n("884691"),
                l = n("917351"),
                r = n.n(l);
            n("233736");
            var a = n("666020");

            function s(e) {
                i.useEffect(() => (r.forEach(e, (e, t) => (0, a.subscribeMembers)(t, e)), () => {
                    r.forEach(e, (e, t) => (0, a.unsubscribeMembers)(t, e))
                }), [e])
            }
        },
        981112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                stageAttachmentFiles: function() {
                    return E
                },
                default: function() {
                    return i
                }
            }), n("808653"), n("222007"), n("70102");
            var i, l = n("811022"),
                r = n("994440"),
                a = n("282928"),
                s = n("142852"),
                o = n("402752"),
                u = n("572868"),
                d = n("49111"),
                c = n("894488"),
                f = n("782340");
            let h = new l.default("CloudUploaderBase.tsx");
            async function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 ? arguments[2] : void 0,
                    i = e.map(e => new Promise((i, l) => {
                        switch (e.status) {
                            case a.CloudUploadStatus.NOT_STARTED:
                                e.upload();
                                break;
                            case a.CloudUploadStatus.COMPLETED:
                                i("complete");
                                break;
                            case a.CloudUploadStatus.ERROR:
                                t && e.error !== d.AbortCodes.ENTITY_TOO_LARGE ? e.upload() : l(Error("File failed to upload"));
                                break;
                            case a.CloudUploadStatus.CANCELED:
                                l(Error("Upload is canceled"))
                        }
                        e.on("complete", () => {
                            i("complete")
                        }), e.on("error", () => {
                            l(Error("File ".concat(e.id, " failed to upload")))
                        }), e.on("progress", (e, t) => {
                            null == n || n(e, t)
                        })
                    }));
                await Promise.all(i)
            }
            i = class extends u.default {
                _fileSize() {
                    return this.files.reduce((e, t) => {
                        var n;
                        return e += null !== (n = t.currentSize) && void 0 !== n ? n : 0
                    }, 0)
                }
                async compressAndCheckFileSize() {
                    var e, t;
                    let n = (0, s.getUploadTarget)(null === (t = this.files[0]) || void 0 === t ? void 0 : null === (e = t.item) || void 0 === e ? void 0 : e.target);
                    return this.files.length > n.getMaxAttachmentsCount() ? (h.log("Too many attachments for ".concat(this.id)), this._handleError({
                        code: d.AbortCodes.TOO_MANY_ATTACHMENTS
                    }), !1) : !(this._fileSize() > n.getMaxTotalAttachmentSize()) || (this._handleError({
                        code: d.AbortCodes.ENTITY_TOO_LARGE,
                        reason: {
                            type: c.FileUploadErrorTypes.POSTCOMPRESSION_SUM_TOO_LARGE
                        }
                    }), !1)
                }
                _filesTooLarge() {
                    return this.files.some(e => e.error === d.AbortCodes.ENTITY_TOO_LARGE)
                }
                setUploadingTextForUI() {
                    let e = 1 === this.files.length && null != this.files[0].filename ? this.files[0].filename : f.default.Messages.UPLOADING_FILES.format({
                            count: this.files.length
                        }),
                        t = this.files.some(e => e.isImage),
                        n = this.files.some(e => e.isVideo),
                        i = this._fileSize();
                    h.log("setUploadingTextForUI - total content: ".concat(i, " bytes and ").concat(this.files.length, " attachments for ").concat(this.id)), this._file = {
                        ...this._file,
                        totalPostCompressionSize: i,
                        currentSize: i,
                        name: e,
                        hasVideo: n,
                        hasImage: t,
                        attachmentsCount: this.files.length,
                        items: this.files
                    }
                }
                _recomputeProgress() {
                    let {
                        loaded: e,
                        total: t
                    } = this._recomputeProgressTotal(), n = this._recomputeProgressByFile();
                    this._handleProgress(e, t, n)
                }
                _recomputeProgressTotal() {
                    let e = this._fileSize(),
                        t = this.files.reduce((e, t) => {
                            var n;
                            return e += null !== (n = t.loaded) && void 0 !== n ? n : 0
                        }, 0);
                    return {
                        loaded: t,
                        total: e
                    }
                }
                _recomputeProgressByFile() {
                    let e = {};
                    return this.files.forEach(t => {
                        e[t.id] = (0, o.calculateProgress)(t.loaded, t.currentSize)
                    }), e
                }
                cancel() {
                    h.log("Cancel called for ".concat(this.id)), !this._aborted && (this._aborted = !0, null != this._cancel && this._cancel(), this.files.forEach(e => e.cancel()), this._handleComplete())
                }
                async cancelItem(e) {
                    h.log("Cancel called for ".concat(this.id, " for item ").concat(e));
                    let t = this.files.find(t => t.id === e);
                    if (null == t || t.status === a.CloudUploadStatus.CANCELED) return;
                    let n = this.files.indexOf(t);
                    this.files = [...this.files.slice(0, n), ...this.files.slice(n + 1)], this._file = {
                        ...this._file,
                        items: this.files
                    }, await (0, r.cancelGetAttachmentFile)(t), t.cancel(), this.emit("cancel-upload-item", this._file), 0 === this.files.length && this.cancel()
                }
                failed() {
                    return this.files.some(e => e.status === a.CloudUploadStatus.ERROR)
                }
                _remainingUploadCount() {
                    let e = this.files;
                    return e.length - e.filter(e => e.status === a.CloudUploadStatus.COMPLETED).length
                }
                clear() {
                    this.cancel(), this.files = []
                }
                constructor(...e) {
                    super(...e), this.files = []
                }
            }
        },
        572868: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007"), n("70102");
            var i, l = n("44170"),
                r = n("917351"),
                a = n.n(r),
                s = n("605250"),
                o = n("402752"),
                u = n("894488");
            let d = new s.default("UploaderBase.tsx");
            i = class extends l.EventEmitter {
                _addAttachmentsToPayload(e, t, n) {
                    let i = {
                            ...e
                        },
                        l = [...a.get(i, t, []), ...n];
                    return a.set(i, t, l)
                }
                clearProcessingMessageInterval() {
                    null != this.processingMessageChangeInterval && (clearInterval(this.processingMessageChangeInterval), this.processingMessageChangeInterval = void 0)
                }
                cancel() {
                    d.log("cancel() for ".concat(this.id)), this._aborted = !0, null != this._cancel && this._cancel(), this._handleComplete()
                }
                cancelItem(e) {
                    throw Error("cancelItem() is not implemented on UploaderBase; must implement cancelItem() on subclass")
                }
                upload(e, t, n) {
                    if (null != this._cancel) throw Error("Uploader.upload(...): An upload is already in progress.");
                    this._lastUpdate = Date.now(), this._loaded = 0, this._file = {
                        id: this.id,
                        name: e.name,
                        currentSize: 0,
                        totalPreCompressionSize: 0,
                        compressionProgress: 0,
                        progress: 0,
                        rate: 0,
                        hasImage: !1,
                        hasVideo: !1,
                        attachmentsCount: 0,
                        draftContent: null == t ? void 0 : t.content,
                        channelId: null == t ? void 0 : t.channel_id,
                        items: n
                    }
                }
                constructor(e, t = "POST", n) {
                    var i;
                    super(), this._token = "", this._lastUpdate = 0, this._loaded = 0, this._aborted = !1, this._errored = !1, this._raiseEndpointErrors = !1, this.alreadyStarted = !1, this._handleStart = e => {
                        this._cancel = e, !this.alreadyStarted && this.emit("start", this._file), this.alreadyStarted = !0
                    }, this._handleProgress = (e, t, n) => {
                        let i = Date.now(),
                            l = (0, o.calculateProgress)(e, t),
                            r = Math.floor((e - this._loaded) / ((i - this._lastUpdate) / 1e3));
                        if (null != n) {
                            var a;
                            null === (a = this._file.items) || void 0 === a || a.forEach(e => {
                                e.item.progress = n[e.id]
                            })
                        }
                        this._lastUpdate = i, this._loaded = e, this._file = {
                            ...this._file,
                            currentSize: t,
                            progress: l,
                            rate: r
                        }, this.emit("progress", this._file)
                    }, this._handleException = e => {
                        this._handleError({
                            reason: {
                                type: u.FileUploadErrorTypes.ERROR_SOURCE_UNKNOWN,
                                msg: e.toString()
                            }
                        })
                    }, this._handleAborted = () => {
                        this.clearProcessingMessageInterval()
                    }, this._handleError = e => {
                        let {
                            code: t,
                            reason: n,
                            body: i
                        } = e;
                        this.clearProcessingMessageInterval(), !this._aborted && (this._errored = !0, d.log("_handleError: ".concat(t, " (").concat(JSON.stringify(n), ") for ").concat(this.id)), this.emit("error", this._file, t, i, n), this.removeAllListeners())
                    }, this._handleComplete = e => {
                        this.clearProcessingMessageInterval(), d.log("_handleComplete for ".concat(this.id)), this.emit("complete", this._file, e), this.removeAllListeners()
                    }, this.id = a.uniqueId("Uploader"), this._url = e, this._method = t, this._raiseEndpointErrors = null !== (i = null == n ? void 0 : n.raiseEndpointErrors) && void 0 !== i && i
                }
            }
        },
        991630: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            }), n("222007");
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("587974"),
                o = n("315102"),
                u = n("524768"),
                d = n("616674"),
                c = n("363577");

            function f(e) {
                let {
                    section: t,
                    isSelected: n,
                    width: r,
                    height: f,
                    className: h,
                    selectable: E = !1,
                    onFocus: _,
                    onBlur: I,
                    onMouseOver: p,
                    onMouseLeave: T,
                    ...C
                } = e, [S, N] = l.useState(!1), g = l.useCallback(() => {
                    N(!0), null == _ || _()
                }, [_]), v = l.useCallback(() => {
                    N(!1), null == I || I()
                }, [I]), m = l.useCallback(() => {
                    N(!0), null == p || p()
                }, [p]), M = l.useCallback(() => {
                    N(!1), null == T || T()
                }, [T]), L = l.useMemo(() => {
                    if (t.type === u.ApplicationCommandSectionType.APPLICATION) {
                        var e;
                        return o.default.getApplicationIconURL({
                            id: t.id,
                            icon: t.icon,
                            bot: null === (e = t.application) || void 0 === e ? void 0 : e.bot,
                            botIconFirst: !0,
                            size: r
                        })
                    }
                    return c
                }, [t, r]);
                return (0, i.jsx)("div", {
                    ...C,
                    className: a(d.wrapper, h, {
                        [d.selectable]: E,
                        [d.selected]: E && n
                    }),
                    onFocus: g,
                    onBlur: v,
                    onMouseOver: m,
                    onMouseLeave: M,
                    children: (0, i.jsx)(s.default, {
                        className: d.mask,
                        mask: E && (n || S) ? s.MaskIDs.SQUIRCLE : s.MaskIDs.AVATAR_DEFAULT,
                        width: r,
                        height: f,
                        children: (0, i.jsx)("img", {
                            alt: "",
                            className: d.icon,
                            style: {
                                width: r,
                                height: f
                            },
                            src: L
                        })
                    })
                })
            }
        },
        943161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("83910"),
                s = n("93393"),
                o = n("317041"),
                u = n("749296");
            let d = e => {
                switch (e.id) {
                    case o.BuiltInSectionId.BUILT_IN:
                        return a.default;
                    case o.BuiltInSectionId.FRECENCY:
                        return s.default;
                    default:
                        return
                }
            };

            function c(e) {
                let {
                    section: t,
                    className: n,
                    width: l,
                    height: a,
                    padding: s,
                    isSelected: o,
                    selectable: c = !1,
                    ...f
                } = e, h = d(t);
                return (0, i.jsx)("div", {
                    className: r(u.wrapper, n, {
                        [u.selectable]: c,
                        [u.selected]: c && o
                    }),
                    style: {
                        width: l,
                        height: a,
                        padding: null != s ? s : 0
                    },
                    children: null != h ? (0, i.jsx)(h, {
                        className: u.icon,
                        width: l,
                        height: a,
                        ...f
                    }) : null
                })
            }
        },
        355263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getIconComponent: function() {
                    return s
                },
                pxToRem: function() {
                    return o
                },
                getCommandQuery: function() {
                    return u
                }
            });
            var i = n("524768"),
                l = n("991630"),
                r = n("943161"),
                a = n("317041");
            let s = e => e.type === i.ApplicationCommandSectionType.BUILT_IN ? r.default : l.default;

            function o(e) {
                return "".concat(e / 16, "rem")
            }

            function u(e, t) {
                let n = t,
                    i = !1,
                    l = t.indexOf(":");
                if (l >= 0) {
                    let e = t.lastIndexOf(" ", l);
                    e >= 0 ? (t = t.substring(0, e), i = !0) : t = t.substring(0, l)
                } else t = t.substring(0, t.length);
                let r = t.split(" ", a.MAX_SUBCOMMAND_LEVEL + 1);
                return r.length > a.MAX_SUBCOMMAND_LEVEL && (i = !0, r.pop()), t = r.join(" "), (n.length > t.length || t.endsWith(" ")) && (i = !0, t = t.trimEnd()), {
                    text: t,
                    parts: r,
                    hasSpaceTerminator: i
                }
            }
        },
        44141: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                a = n("267363"),
                s = n("680986"),
                o = n("689275"),
                u = n("755624"),
                d = n("233069"),
                c = n("245997"),
                f = n("660478"),
                h = n("49111"),
                E = n("782340");

            function _(e) {
                let t = function(e) {
                    let t = (0, s.useUnreadThreadsCountForParent)(e.guild_id, e.id),
                        n = (0, l.useStateFromStores)([f.default, c.default, o.default, u.default], () => {
                            if (e.isForumPost()) return f.default.isForumPostUnread(e.id);
                            if (e.type !== h.ChannelTypes.GUILD_CATEGORY) return f.default.hasUnread(e.id);
                            {
                                let t = c.default.getCategories(e.getGuildId());
                                if (null == t[e.id]) return !1;
                                let n = t[e.id].some(e => {
                                    let {
                                        channel: t
                                    } = e;
                                    return (0, d.isReadableType)(t.type) && f.default.hasUnread(t.id)
                                });
                                if (n) return !0;
                                let i = new Set(t[e.id].map(e => e.channel.id)),
                                    l = o.default.getThreadsForGuild(e.guild_id);
                                for (let e in l)
                                    if (i.has(e)) {
                                        for (let t in l[e])
                                            if (u.default.hasJoined(t) && !u.default.isMuted(t) && f.default.hasUnread(t)) return !0
                                    } return !1
                            }
                        }, [e]);
                    return e.isForumLikeChannel() ? t > 0 : n
                }(e);
                return (0, i.jsx)(r.MenuItem, {
                    id: "mark-channel-read",
                    label: E.default.Messages.MARK_AS_READ,
                    action: function() {
                        (0, a.ackChannel)(e)
                    },
                    disabled: !t
                })
            }
        },
        531674: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMuteTimes: function() {
                    return p
                },
                default: function() {
                    return C
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("866227"),
                r = n.n(l),
                a = n("446674"),
                s = n("77078"),
                o = n("820542"),
                u = n("519705"),
                d = n("319165"),
                c = n("282109"),
                f = n("34676"),
                h = n("679653"),
                E = n("49111"),
                _ = n("468200"),
                I = n("782340");
            let p = () => [{
                    value: _.MuteUntilSeconds.MINUTES_15,
                    label: I.default.Messages.MUTE_DURATION_15_MINUTES
                }, {
                    value: _.MuteUntilSeconds.HOURS_1,
                    label: I.default.Messages.MUTE_DURATION_1_HOUR
                }, {
                    value: _.MuteUntilSeconds.HOURS_3,
                    label: I.default.Messages.MUTE_DURATION_3_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_8,
                    label: I.default.Messages.MUTE_DURATION_8_HOURS
                }, {
                    value: _.MuteUntilSeconds.HOURS_24,
                    label: I.default.Messages.MUTE_DURATION_24_HOURS
                }, {
                    value: _.MuteUntilSeconds.ALWAYS,
                    label: I.default.Messages.MUTE_DURATION_ALWAYS
                }],
                T = e => {
                    let t = e > 0 ? r().add(e, "second").toISOString() : null;
                    return {
                        muted: !0,
                        mute_config: {
                            selected_time_window: e,
                            end_time: t
                        }
                    }
                };

            function C(e, t) {
                let [n, l] = (0, a.useStateFromStoresArray)([c.default], () => [c.default.isChannelMuted(e.guild_id, e.id), c.default.getChannelMuteConfig(e.guild_id, e.id)]), r = (0, d.useMutedUntilText)(l), _ = (0, h.default)(e, !0);

                function C(t) {
                    t && e.type === E.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id), u.default.updateChannelOverrideSettings(e.guild_id, e.id, {
                        muted: t
                    }, f.NotificationLabel.muted(t))
                }
                let S = I.default.Messages.MUTE_CHANNEL_GENERIC,
                    N = I.default.Messages.UNMUTE_CHANNEL_GENERIC;
                switch (e.type) {
                    case E.ChannelTypes.GUILD_CATEGORY:
                        S = I.default.Messages.MUTE_CATEGORY, N = I.default.Messages.UNMUTE_CATEGORY;
                        break;
                    case E.ChannelTypes.GROUP_DM:
                        S = I.default.Messages.MUTE_CONVERSATION, N = I.default.Messages.UNMUTE_CONVERSATION;
                        break;
                    case E.ChannelTypes.DM:
                        S = I.default.Messages.MUTE_CHANNEL.format({
                            name: _
                        }), N = I.default.Messages.UNMUTE_CHANNEL.format({
                            name: _
                        });
                        break;
                    default:
                        S = I.default.Messages.MUTE_CHANNEL_GENERIC, N = I.default.Messages.UNMUTE_CHANNEL_GENERIC
                }
                return n ? (0, i.jsx)(s.MenuItem, {
                    id: "unmute-channel",
                    label: N,
                    subtext: r,
                    action: () => C(!1)
                }) : (0, i.jsx)(s.MenuItem, {
                    id: "mute-channel",
                    label: S,
                    action: () => C(!0),
                    children: p().map(n => {
                        let {
                            value: l,
                            label: r
                        } = n;
                        return (0, i.jsx)(s.MenuItem, {
                            id: "".concat(l),
                            label: r,
                            action: () => (function(n) {
                                e.type === E.ChannelTypes.GUILD_CATEGORY && (0, o.categoryCollapse)(e.id);
                                let i = T(n);
                                u.default.updateChannelOverrideSettings(e.guild_id, e.id, i, f.NotificationLabels.Muted, t)
                            })(l)
                        }, l)
                    })
                })
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
                l = n("884691"),
                r = n("516555"),
                a = n("65597"),
                s = n("206230"),
                o = n("49111");
            let u = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: () => void 0,
                    createConfettiAt: () => void 0,
                    createMultipleConfetti: () => [],
                    createMultipleConfettiAt: () => [],
                    addClickListener: () => o.NOOP,
                    removeClickListener: o.NOOP
                },
                d = l.createContext(u);

            function c(e) {
                let {
                    children: t,
                    confettiCanvas: n,
                    spriteCanvas: o,
                    baseConfig: c,
                    addClickListener: f,
                    removeClickListener: h
                } = e, E = (0, r.useConfettiCannon)(n, o), _ = (0, a.default)([s.default], () => s.default.useReducedMotion), I = l.useMemo(() => _ ? u : {
                    confettiCanvas: n,
                    cannon: E,
                    createConfetti: (e, t) => E.createConfetti({
                        ...c,
                        ...e
                    }, t),
                    createConfettiAt: (e, t, n, i) => E.createConfetti({
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
                        return E.createMultipleConfetti({
                            ...c,
                            ...e
                        }, t, n)
                    },
                    createMultipleConfettiAt: function(e, t, n) {
                        let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                            l = arguments.length > 4 ? arguments[4] : void 0;
                        return E.createMultipleConfetti({
                            ...c,
                            position: {
                                type: "static",
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            ...n
                        }, i, l)
                    },
                    addClickListener: f,
                    removeClickListener: h
                }, [f, c, E, n, _, h]);
                return (0, i.jsx)(d.Provider, {
                    value: I,
                    children: t
                })
            }
        },
        972701: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAddToFavoritesItem: function() {
                    return I
                },
                useRemoveFromFavoritesItem: function() {
                    return p
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("917351"),
                r = n.n(l),
                a = n("446674"),
                s = n("77078"),
                o = n("923959"),
                u = n("379881"),
                d = n("200008"),
                c = n("986373"),
                f = n("498139"),
                h = n("49111"),
                E = n("782340");

            function _(e, t) {
                return e.type === h.ChannelTypes.GROUP_DM ? t ? E.default.Messages.UNFAVORITE_GDM : E.default.Messages.FAVORITE_GDM : e.type === h.ChannelTypes.DM ? t ? E.default.Messages.UNFAVORITE_DM : E.default.Messages.FAVORITE_DM : t ? E.default.Messages.UNFAVORITE_CHANNEL : E.default.Messages.FAVORITE_CHANNEL
            }

            function I(e) {
                let t = (0, a.useStateFromStores)([o.default], () => o.default.getChannels(h.FAVORITES))[h.ChannelTypes.GUILD_CATEGORY],
                    [
                        [n], l
                    ] = r.partition(t, e => "null" === e.channel.id),
                    {
                        favoritesEnabled: E,
                        isFavoritesPerk: I
                    } = (0, f.useFavoritesServerExperiment)("58e21a_1"),
                    {
                        notifyFavoriteAdded: p
                    } = (0, c.useFavoriteAdded)(),
                    T = (0, a.useStateFromStores)([u.default], () => u.default.isFavorite(e.id));
                if (__OVERLAY__ || T || !E) return null;

                function C(t) {
                    p(), (0, d.addFavoriteChannel)(e.id, t)
                }
                return 0 === l.length ? (0, i.jsx)(s.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !1),
                    action: () => C(null)
                }) : (0, i.jsxs)(s.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !1),
                    action: () => C(null),
                    children: [I && (0, i.jsx)(s.MenuGroup, {
                        children: (0, i.jsx)(s.MenuItem, {
                            id: "favorite-".concat(n.channel.id),
                            label: n.channel.name,
                            action: () => C("null" === n.channel.id ? null : n.channel.id)
                        }, n.channel.id)
                    }), (0, i.jsx)(s.MenuGroup, {
                        children: l.map(e => (0, i.jsx)(s.MenuItem, {
                            id: "favorite-".concat(e.channel.id),
                            label: e.channel.name,
                            action: () => C(e.channel.id)
                        }, e.channel.id))
                    })]
                })
            }

            function p(e) {
                let t = (0, a.useStateFromStores)([u.default], () => u.default.isFavorite(e.id));
                return __OVERLAY__ || !t ? null : (0, i.jsx)(s.MenuItem, {
                    id: "favorite-channel",
                    label: _(e, !0),
                    color: "danger",
                    action: () => e.type === h.ChannelTypes.GUILD_CATEGORY ? (0, s.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("338052").then(n.bind(n, "338052"));
                        return n => (0, i.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), (0, d.removeFavoriteChannel)(e.id)
                            },
                            channel: e
                        })
                    }) : (0, d.removeFavoriteChannel)(e.id)
                })
            }
        },
        390008: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                a = n("162771"),
                s = n("498139"),
                o = n("49111"),
                u = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([a.default], () => a.default.getGuildId()),
                    d = e.type === o.ChannelTypes.GUILD_CATEGORY,
                    {
                        isFavoritesPerk: c
                    } = (0, s.useFavoritesServerExperiment)("useChannelFavoriteSetNickname");
                return __OVERLAY__ || t !== o.FAVORITES ? null : (0, i.jsx)(r.MenuItem, {
                    id: "set-channel-nickname",
                    label: c && d ? u.default.Messages.FAVORITES_RENAME_CATEGORY : u.default.Messages.CHANGE_NICKNAME,
                    action: function() {
                        (0, r.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("353228").then(n.bind(n, "353228"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                channelId: e.id,
                                heading: c && d ? u.default.Messages.FAVORITES_RENAME_CATEGORY : u.default.Messages.CHANGE_NICKNAME,
                                formTitle: c && d ? u.default.Messages.CATEGORY_NAME : u.default.Messages.NICKNAME,
                                allowReset: !(c && d)
                            })
                        })
                    }
                })
            }
        },
        936947: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("200008"),
                a = n("986373"),
                s = n("498139"),
                o = n("782340");

            function u(e) {
                let t = (0, a.useFavoritesGuildSelected)(),
                    n = (0, a.useFavorite)(e.id),
                    u = (0, a.useFavoritesCategories)(),
                    {
                        isFavoritesPerk: d
                    } = (0, s.useFavoritesServerExperiment)("useChannelMoveToCategory");
                if (__OVERLAY__ || !t || null == n || !d) return null;
                let c = u.filter(e => e.id !== (null == n ? void 0 : n.parentId));
                return (0, i.jsx)(l.MenuItem, {
                    id: "move-to-category",
                    label: o.default.Messages.MOVE_TO,
                    children: c.map(e => {
                        let {
                            id: t,
                            name: a
                        } = e;
                        return (0, i.jsx)(l.MenuItem, {
                            id: "favorite-".concat(t),
                            label: a,
                            action: () => {
                                var e;
                                return e = t, void(null != n && (0, r.updateFavoriteChannelParent)(n.id, e))
                            }
                        }, null != t ? t : "null")
                    })
                })
            }
        },
        976127: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMessageRequestItem: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                a = n("16108"),
                s = n("697218"),
                o = n("782340");

            function u(e) {
                let t = (0, l.useStateFromStores)([s.default], () => s.default.getCurrentUser());
                return (null == t ? void 0 : t.isStaff()) !== !0 ? null : (0, i.jsxs)(i.Fragment, {
                    children: [!e.isMessageRequest && (0, i.jsx)(r.MenuItem, {
                        id: "mark-as-message-request",
                        label: o.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_MOVE_TO,
                        action: () => (0, a.markAsMessageRequest)(e.id)
                    }), (0, i.jsx)(r.MenuItem, {
                        id: "clear-message-request",
                        label: o.default.Messages.MESSAGE_REQUESTS_CONTEXT_MENU_CLEAR,
                        action: () => (0, a.clearMessageRequestState)(e.id)
                    })]
                })
            }
        },
        856030: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useSafetyWarningsItem: function() {
                    return d
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                a = n("277734"),
                s = n("764828"),
                o = n("697218"),
                u = n("782340");

            function d(e) {
                let t = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
                    n = (0, l.useStateFromStores)([s.default], () => s.default.getChannelSafetyWarnings(e.id));
                return (null == t ? void 0 : t.isStaff()) !== !0 || null == n || 0 === n.length ? null : (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)(r.MenuItem, {
                        id: "clear-safety-warnings",
                        label: u.default.Messages.STRANGER_DANGER_CONTEXT_MENU_CLEAR,
                        action: () => (0, a.clearChannelSafetyWarnings)(e.id)
                    })
                })
            }
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return c
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                canGuildUseRoleIcons: function() {
                    return _
                }
            }), n("781738");
            var i = n("867805"),
                l = n("407063"),
                r = n("315102"),
                a = n("773336"),
                s = n("49111");
            let o = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                u = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, a.isAndroid)(),
                c = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? i.default.getByName(i.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: h(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()))),
                h = (e, t) => {
                    let {
                        id: n,
                        icon: i
                    } = e;
                    if (null == i) return;
                    if (i.startsWith("data:")) return i;
                    let a = r.SUPPORTS_WEBP ? "webp" : "png",
                        c = "",
                        f = "quality=lossless";
                    return (null != t && (c = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(o, "/").concat(n, "/").concat(i, ".").concat(a, "?").concat(c).concat(f) : "".concat(u).concat(s.Endpoints.ROLE_ICON(n, i), "?").concat(c)
                },
                E = e => e.startsWith(o) || e.startsWith("".concat(u, "/roles")) && e.includes("/icons/"),
                _ = (e, t) => {
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
                    return o
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
                    return f
                },
                setPendingBanner: function() {
                    return h
                },
                setPendingBio: function() {
                    return E
                },
                setPendingPronouns: function() {
                    return _
                },
                setPendingNickname: function() {
                    return I
                },
                setPendingThemeColors: function() {
                    return p
                },
                resetPendingMemberChanges: function() {
                    return T
                },
                resetPendingProfileChanges: function() {
                    return C
                },
                resetAllPending: function() {
                    return S
                },
                clearErrors: function() {
                    return N
                },
                setDisableSubmit: function() {
                    return g
                }
            }), n("70102");
            var i = n("872717"),
                l = n("913144"),
                r = n("54239"),
                a = n("49111");
            async function s(e, t) {
                let {
                    nick: n,
                    avatar: r
                } = t;
                if (null == e) throw Error("Need guildId");
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SUBMIT"
                });
                try {
                    let t = await i.default.patch({
                        url: a.Endpoints.SET_GUILD_MEMBER(e),
                        body: {
                            nick: n,
                            avatar: r
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

            function o(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_GUILD",
                    guild: e
                })
            }

            function u(e, t) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_INIT",
                    guild: e,
                    analyticsLocations: t
                })
            }

            function d() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLOSE"
                }), (0, r.popLayer)()
            }

            function c() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM"
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR",
                    avatar: e
                })
            }

            function h(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER",
                    banner: e
                })
            }

            function E(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO",
                    bio: e
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS",
                    pronouns: e
                })
            }

            function I(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME",
                    nickname: e
                })
            }

            function p(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS",
                    themeColors: e
                })
            }

            function T() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES"
                })
            }

            function C() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES"
                })
            }

            function S() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function N() {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g(e) {
                l.default.dispatch({
                    type: "GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        424562: function(e, t, n) {
            "use strict";
            let i, l, r, a, s, o, u, d, c;
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var f = n("446674"),
                h = n("913144"),
                E = n("49111");
            let _ = E.FormStates.CLOSED,
                I = {},
                p = !1;

            function T() {
                _ = E.FormStates.CLOSED, I = {}, u = null, d = void 0, c = []
            }

            function C() {
                S(), N(), I = {}, _ = E.FormStates.OPEN
            }

            function S() {
                i = void 0, s = void 0
            }

            function N() {
                l = void 0, r = void 0, a = void 0, o = void 0
            }
            class g extends f.default.Store {
                getFormState() {
                    return _
                }
                getErrors() {
                    return I
                }
                showNotice() {
                    return void 0 !== i || void 0 !== l || void 0 !== r || void 0 !== a || void 0 !== s || void 0 !== o
                }
                getPendingAvatar() {
                    return i
                }
                getPendingBanner() {
                    return l
                }
                getPendingBio() {
                    return r
                }
                getPendingNickname() {
                    return s
                }
                getPendingPronouns() {
                    return a
                }
                getPendingAccentColor() {
                    return s
                }
                getPendingThemeColors() {
                    return o
                }
                getAllPending() {
                    return {
                        pendingAvatar: i,
                        pendingBanner: l,
                        pendingBio: r,
                        pendingPronouns: a,
                        pendingNickname: s,
                        pendingThemeColors: o
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
                    return p
                }
            }
            g.displayName = "GuildIdentitySettingsStore";
            var v = new g(h.default, {
                GUILD_IDENTITY_SETTINGS_INIT: function(e) {
                    u = e.guild, _ = E.FormStates.OPEN, I = {}, d = e.source, c = e.analyticsLocations
                },
                GUILD_IDENTITY_SETTINGS_CLOSE: T,
                GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function() {
                    C(), T()
                },
                GUILD_IDENTITY_SETTINGS_SET_GUILD: function(e) {
                    u = e.guild, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT: function() {
                    _ = E.FormStates.SUBMITTING, I = {}
                },
                GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (_ !== E.FormStates.SUBMITTING) return !1;
                    _ = E.FormStates.OPEN, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_PROFILE_UPDATE_FAILURE: function(e) {
                    _ = E.FormStates.OPEN, I = e.errors
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
                    r = t
                },
                GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    a = t
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
                    o = t
                },
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: S,
                GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: N,
                GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: C,
                GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: C,
                GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function() {
                    I = {}
                },
                GUILD_IDENTITY_SETTINGS_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    p = t
                }
            })
        },
        482391: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                clearIntegrationPermissions: function() {
                    return o
                },
                editPermissions: function() {
                    return u
                },
                getApplicationCommands: function() {
                    return d
                },
                getApplicationCommandPermissions: function() {
                    return c
                },
                initIntegrationPermissions: function() {
                    return f
                },
                resetPermissions: function() {
                    return h
                },
                updateApplicationCommandPermissions: function() {
                    return E
                }
            });
            var i = n("872717"),
                l = n("913144"),
                r = n("507217"),
                a = n("389153"),
                s = n("49111");

            function o() {
                l.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_CLEAR"
                })
            }

            function u(e, t, n) {
                l.default.dispatch({
                    applicationId: e,
                    commandId: t,
                    permissions: n,
                    type: "INTEGRATION_PERMISSION_SETTINGS_EDIT"
                })
            }

            function d(e, t) {
                i.default.get(s.Endpoints.GUILD_COMMANDS_FOR_APPLICATION(e, t)).then(n => {
                    l.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_SUCCESS",
                        applicationId: t,
                        commands: n.body.application_commands,
                        guildId: e,
                        permissions: n.body.permissions
                    })
                }, () => {
                    l.default.dispatch({
                        type: "INTEGRATION_PERMISSION_SETTINGS_COMMANDS_FETCH_FAILURE",
                        applicationId: t
                    })
                })
            }
            async function c(e, t, n) {
                let r = [];
                try {
                    let l = await i.default.get(s.Endpoints.APPLICATION_BOT_GUILD_COMMAND_PERMISSIONS(e, t, n));
                    l.ok && (r = l.body.permissions)
                } catch (i) {
                    if (404 !== i.status) {
                        l.default.dispatch({
                            type: "INTEGRATION_PERMISSION_SETTINGS_APPLICATION_PERMISSIONS_FETCH_FAILURE",
                            applicationId: e,
                            commandId: n,
                            guildId: t
                        });
                        return
                    }
                }
                l.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: e,
                    commandId: n,
                    guildId: t,
                    permissions: r
                })
            }

            function f(e) {
                l.default.dispatch({
                    applicationId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_INIT"
                })
            }

            function h(e) {
                l.default.dispatch({
                    commandId: e,
                    type: "INTEGRATION_PERMISSION_SETTINGS_RESET"
                })
            }
            async function E(e) {
                let {
                    applicationId: t,
                    commandId: n,
                    defaultEveryoneValue: i,
                    defaultEverywhereValue: s,
                    guildId: o,
                    permissions: u
                } = e, d = n === t ? function(e, t, n, i) {
                    if (!n || !i) return t;
                    let l = {
                        [e]: n,
                        [(0, a.allChannelsSentinel)(e)]: i
                    };
                    return t.filter(e => {
                        let t = l[e.id];
                        return null == t || e.permission !== t
                    })
                }(o, u, i, s) : u, c = await r.updateApplicationGuildCommandPermissions(t, o, n, d);
                c.ok && l.default.dispatch({
                    type: "INTEGRATION_PERMISSION_SETTINGS_COMMAND_UPDATE",
                    applicationId: t,
                    commandId: n,
                    guildId: o,
                    permissions: c.body.permissions
                })
            }
        },
        95045: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                renderAutomodMessageMarkup: function() {
                    return u
                }
            }), n("222007"), n("781738"), n("355025");
            var i = n("367376"),
                l = n("240873"),
                r = n("49111");
            let a = new Set([r.MessageEmbedTypes.IMAGE, r.MessageEmbedTypes.GIFV]),
                s = new Set(["strong", "em", "u", "text", "inlineCode", "s", "spoiler"]);

            function o(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = t.formatInline ? i.default.parseInlineReply : i.default.parse;
                return function(e, t, n) {
                    var i, r;
                    let {
                        toAST: o = !1,
                        hideSimpleEmbedContent: u = !0,
                        formatInline: f = !1,
                        postProcessor: h
                    } = n, E = !1;
                    let _ = e(t.content, !0, (i = t, r = n, {
                        allowLinks: null != i.webhookId || !!r.allowLinks,
                        allowEmojiLinks: null != i.webhookId,
                        channelId: i.channel_id,
                        messageId: i.id,
                        mentionChannels: i.mentionChannels,
                        isInteracting: !!r.isInteracting,
                        formatInline: !!r.formatInline,
                        noStyleAndInteraction: !!r.noStyleAndInteraction,
                        allowHeading: !!r.allowHeading,
                        allowList: !!r.allowList,
                        previewLinkTarget: !!r.previewLinkTarget,
                        disableAnimatedEmoji: !!r.disableAnimatedEmoji,
                        disableAutoBlockNewlines: !0,
                        muted: !1
                    }), (e, n) => (!Array.isArray(e) && (e = [e]), u && (e = function(e, t) {
                        if (1 !== e.length || 1 !== t.length) return e;
                        let n = e[0],
                            i = t[0];
                        return ("link" === n.type || "attachmentLink" === n.type) && a.has(i.type) && (0, l.isEmbedInline)(i) ? [] : e
                    }(e, t.embeds)), !f && (e = function(e, t) {
                        return t ? d(e) : ("paragraph" === e[0].type && e[0].content instanceof Array && (e[0].content = d(e[0].content)), e)
                    }(e, n)), E = function(e, t) {
                        return t ? c(e) : "paragraph" === e[0].type && e[0].content instanceof Array && c(e[0].content)
                    }(e, n), f && (e = function e(t) {
                        return t.forEach(t => {
                            s.has(t.type) && null != t.content && (Array.isArray(t.content) ? e(t.content) : t.content = t.content.replace(/\n/g, " "))
                        }), t
                    }(e)), null != h && (e = h(e, n)), e));
                    return {
                        hasSpoilerEmbeds: E,
                        content: _
                    }
                }(n, e, t)
            }

            function u(e, t, n) {
                var l;
                return l = i.default.parseAutoModerationSystemMessage, l(e, !0, {
                    allowLinks: !1,
                    allowEmojiLinks: !1,
                    mentionChannels: [],
                    isInteracting: !1,
                    formatInline: !1,
                    noStyleAndInteraction: !1,
                    allowHeading: !1,
                    allowList: !1,
                    disableAutoBlockNewlines: !0,
                    highlightWord: t,
                    disableAnimatedEmoji: !1,
                    channelId: n,
                    muted: !1
                }, e => (!Array.isArray(e) && (e = [e]), e))
            }

            function d(e) {
                let t = e.some(e => "emoji" !== e.type && "customEmoji" !== e.type && "soundboard" !== e.type && ("string" != typeof e.content || "" !== e.content.trim()) && !0);
                if (t) return e;
                let n = 0;
                return (e.forEach(e => {
                    if (("emoji" === e.type || "customEmoji" === e.type || "soundboard" === e.type) && (n += 1), n > 30) return !1
                }), n > 30) ? e : (e.forEach(e => {
                    e.jumboable = !0
                }), e)
            }

            function c(e) {
                return e.some(e => "spoiler" === e.type && Array.isArray(e.content) && e.content.some(e => "link" === e.type || "attachmentLink" === e.type))
            }
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                },
                PaymentPortalBody: function() {
                    return _
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                a = n.n(r),
                s = n("627445"),
                o = n.n(s),
                u = n("817736"),
                d = n.n(u),
                c = n("77078"),
                f = n("642906"),
                h = n("990893");

            function E(e) {
                var t, n, r, s, u, d;
                let {
                    header: E,
                    isLargeModal: _,
                    stepProps: I
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
                    step: p,
                    stepConfigs: T,
                    setBodyNode: C,
                    setFooterNode: S,
                    setModalOverlayNode: N,
                    setReadySlideId: g
                } = (0, f.usePaymentContext)(), v = T.find(e => e.key === p);
                l.useEffect(() => {
                    N(null)
                }, [p, N]), o(null != v, "Unknown step for current payment flow.");
                let m = null !== (u = null == v ? void 0 : null === (t = v.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== u && u,
                    M = null == v ? void 0 : null === (n = v.options) || void 0 === n ? void 0 : n.bodyClassName,
                    L = void 0 !== _ && _ ? h.sliderBodyLarge : null == v ? void 0 : null === (r = v.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == v ? void 0 : null === (s = v.options) || void 0 === s ? void 0 : s.renderHeader) || void 0 === d || d ? E : null, v.renderStep(I), null == p || m ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: a(h.body, M),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: p,
                                centered: !1,
                                onSlideReady: e => g(e),
                                children: T.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: a(h.sliderBody, L),
                                        ref: e => C(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => S(e)
                        }), (0, i.jsx)("div", {
                            ref: e => N(e)
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, f.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function I(e) {
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
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("748820"),
                r = n("77078"),
                a = n("112679"),
                s = n("55689"),
                o = n("676379"),
                u = n("697218"),
                d = n("599110"),
                c = n("659500"),
                f = n("719923"),
                h = n("49111"),
                E = n("646718");

            function _(e) {
                let {
                    initialPlanId: t,
                    followupSKUInfo: _,
                    onClose: I,
                    onComplete: p,
                    onSubscriptionConfirmation: T,
                    analyticsLocations: C,
                    analyticsObject: S,
                    analyticsLocation: N,
                    analyticsSourceLocation: g,
                    isGift: v = !1,
                    giftMessage: m,
                    subscriptionTier: M,
                    trialId: L,
                    postSuccessGuild: A,
                    openInvoiceId: R,
                    applicationId: O,
                    referralTrialOfferId: y,
                    giftRecipient: U,
                    returnRef: G,
                    subscription: x
                } = null != e ? e : {}, D = !1, P = (0, l.v4)(), b = u.default.getCurrentUser(), w = (0, f.isPremiumExactly)(b, E.PremiumTypes.TIER_2);
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
                            loadId: P,
                            subscriptionTier: M,
                            skuId: M,
                            isGift: v,
                            giftMessage: m,
                            giftRecipient: U,
                            initialPlanId: t,
                            followupSKUInfo: _,
                            onClose: (e, t) => {
                                l(), null == I || I(e), e && (null == T || T(), !v && null != t && t === E.PremiumSubscriptionSKUs.TIER_2 && !w && c.ComponentDispatch.dispatch(h.ComponentActions.PREMIUM_SUBSCRIPTION_CREATED))
                            },
                            onComplete: () => {
                                D = !0, null == p || p(), !v && (0, o.setCanPlayWowMoment)(!0)
                            },
                            onSubscriptionConfirmation: T,
                            analyticsLocations: C,
                            analyticsObject: S,
                            analyticsLocation: N,
                            analyticsSourceLocation: g,
                            trialId: L,
                            postSuccessGuild: A,
                            planGroup: E.ORDERED_PREMIUM_SUBSCRIPTION_PLANS,
                            openInvoiceId: R,
                            applicationId: O,
                            referralTrialOfferId: y,
                            returnRef: G,
                            subscription: x
                        })
                    }
                }, {
                    modalKey: "payment-modal",
                    onCloseCallback: () => {
                        !D && d.default.track(h.AnalyticEvents.PAYMENT_FLOW_CANCELED, {
                            load_id: P,
                            payment_type: h.PurchaseTypeToAnalyticsPaymentType[h.PurchaseTypes.SUBSCRIPTION],
                            location: null != N ? N : S,
                            source: g,
                            subscription_type: h.SubscriptionTypes.PREMIUM,
                            is_gift: v,
                            eligible_for_trial: null != L,
                            application_id: O,
                            location_stack: C
                        }), (0, a.clearError)(), (0, s.clearPurchaseTokenAuthState)(), null == I || I(D), D && (null == T || T())
                    },
                    onCloseRequest: h.NOOP
                })
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("65597"),
                r = n("880731");

            function a(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, a = (0, l.default)([r.default], () => r.default.isEnabled({
                    confettiLocation: n
                }));
                return a ? (0, i.jsx)(i.Fragment, {
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
                l = n("65597"),
                r = n("526887"),
                a = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(r.ConfettiCannonContext), t = (0, l.default)([a.default], () => a.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, l, r) => {
                        var a, s;
                        let o = (null == r ? void 0 : r.settings) != null ? {
                                ...t,
                                ...r.settings
                            } : t,
                            u = n(o);
                        e(i, l, u, (null !== (a = null == r ? void 0 : r.count) && void 0 !== a ? a : o.confettiCount) * (null !== (s = null == r ? void 0 : r.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == r ? void 0 : r.sprite
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
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return p
                }
            });
            var i = n("884691"),
                l = n("65597"),
                r = n("872717"),
                a = n("913144"),
                s = n("775433"),
                o = n("697218"),
                u = n("10514"),
                d = n("764364"),
                c = n("676572"),
                f = n("646718"),
                h = n("49111");
            let E = "nonSubscriber";
            async function _() {
                try {
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: h.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : a.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), l = o.default.getCurrentUser();
                T(l, i, t, n)
            }

            function p(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, l.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), a = (0, l.default)([o.default], () => o.default.getCurrentUser());
                i.useEffect(() => {
                    T(a, r, t, n)
                }, [a, r, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && _(), i && (!u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !u.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !u.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, s.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("446674"),
                l = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                a = r;
            class s extends i.default.Store {
                initialize() {
                    a = r
                }
                getState() {
                    return a
                }
                shouldFetchPremiumLikelihood() {
                    return !a.isFetching && !a.fetched
                }
            }
            s.displayName = "UserPremiumLikelihoodStore";
            var o = new s(l.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    a.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    a.premiumLikelihood = t, a.fetched = !0, a.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    a.isFetching = !1
                },
                LOGOUT: function() {
                    a.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
            var r = l
        },
        38766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("884691"),
                l = n("79112"),
                r = n("685665"),
                a = n("929423");
            n("424562");
            var s = n("49111"),
                o = n("397336");

            function u(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: u,
                    analyticsLocations: d,
                    openWithoutBackstack: c = !1
                } = e, {
                    analyticsLocations: f
                } = (0, r.default)(), h = (0, i.useCallback)(() => {
                    null != t && (0, a.initGuildIdentitySettings)(t, null != d ? d : f), l.default.open(s.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? o.ProfileCustomizationSubsection.GUILD : o.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: u,
                        analyticsLocations: d,
                        openWithoutBackstack: c
                    })
                }, [t, n, u, d, c, f]);
                return h
            }
        },
        319165: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useMutedUntilText: function() {
                    return a
                },
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("782340");

            function a(e) {
                return null == e || null == e.end_time ? null : r.default.Messages.MUTED_UNTIL_TIME.format({
                    endTime: new Date(e.end_time).toLocaleString(r.default.getLocale(), {
                        month: "numeric",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit"
                    })
                })
            }

            function s(e) {
                let {
                    muteConfig: t,
                    className: n
                } = e, r = a(t);
                return null != r ? (0, i.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: "text-muted",
                    className: n,
                    children: r
                }) : null
            }
        },
        130074: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("272030"),
                a = n("838446"),
                s = n("158534"),
                o = n("798609"),
                u = n("846883"),
                d = n("812204"),
                c = n("243288"),
                f = n("321135"),
                h = n("873254"),
                E = n("44141"),
                _ = n("531674"),
                I = n("861370"),
                p = n("972701"),
                T = n("390008"),
                C = n("936947"),
                S = n("976127"),
                N = n("856030"),
                g = n("726750"),
                v = n("170990"),
                m = n("304582"),
                M = n("72057"),
                L = n("563816"),
                A = n("489836"),
                R = n("406703"),
                O = n("126710"),
                y = n("502533"),
                U = n("314838"),
                G = n("151200"),
                x = n("692986"),
                D = n("806179"),
                P = n("816106"),
                b = n("623879"),
                w = n("49111"),
                F = n("782340"),
                j = (0, s.default)((0, a.default)(function(e) {
                    let {
                        user: t,
                        channel: n,
                        channelSelected: a = !1,
                        showMute: s = !0,
                        showMediaItems: d = !1,
                        showChannelCallItems: w = !1,
                        showModalItems: j = !0,
                        targetIsUser: H = !1,
                        context: V,
                        onSelect: B,
                        onHeightUpdate: k
                    } = e, Y = (0, D.default)(t.id, null), Z = (0, R.default)(t, V), K = (0, M.default)({
                        user: t,
                        context: V
                    }), W = (0, m.default)(t), z = (0, b.default)(t.id), X = (0, O.default)(n.id, a), q = (0, U.default)(t), Q = (0, u.default)(null, t), J = (0, P.default)(t.id), $ = (0, G.default)(t.id, n.id), ee = (0, v.default)(t), et = (0, x.default)(t.id), en = (0, y.default)(t.id, n.id), ei = (0, A.default)(t), el = (0, _.default)(n), er = (0, I.default)({
                        id: t.id,
                        label: F.default.Messages.COPY_ID_USER
                    }), ea = (0, I.default)({
                        id: n.id,
                        label: F.default.Messages.COPY_ID_CHANNEL
                    }), es = (0, E.default)(n), eo = (0, f.default)(t.id), eu = (0, c.default)(n.id), ed = (0, g.default)(t), ec = (0, h.default)(t.id), ef = (0, L.default)({
                        commandType: o.ApplicationCommandType.USER,
                        commandTargetId: t.id,
                        channel: n,
                        guildId: void 0,
                        onHeightUpdate: k
                    }), eh = (0, p.useAddToFavoritesItem)(n), eE = (0, p.useRemoveFromFavoritesItem)(n), e_ = (0, T.default)(n), eI = (0, C.default)(n), ep = (0, S.useMessageRequestItem)(n), eT = (0, N.useSafetyWarningsItem)(n), eC = n.isManaged(), eS = t.isNonUserBot();
                    return (0, i.jsxs)(l.Menu, {
                        navId: "user-context",
                        onClose: r.closeContextMenu,
                        "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
                        onSelect: B,
                        children: [(0, i.jsx)(l.MenuGroup, {
                            children: !eS && es
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: ep
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eT
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [eh, e_, eI]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: !eS && ed
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [!eS && (0, i.jsxs)(i.Fragment, {
                                children: [j && Y, Z, !eC && $, j && K, j && W, z]
                            }), X]
                        }), !eS && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(l.MenuGroup, {
                                children: d && J
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: j && Q
                            }), (0, i.jsxs)(l.MenuGroup, {
                                children: [d && et, d && en, ef, j && q, ee, j && ei, d && ec]
                            }), (0, i.jsx)(l.MenuGroup, {
                                children: s && el
                            }), w && (0, i.jsxs)(l.MenuGroup, {
                                children: [eu, eo]
                            })]
                        }), (0, i.jsx)(l.MenuGroup, {
                            children: eE
                        }), (0, i.jsxs)(l.MenuGroup, {
                            children: [er, !H && ea]
                        })]
                    })
                }, {
                    object: w.AnalyticsObjects.CONTEXT_MENU
                }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])
        },
        126710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("77078"),
                r = n("450911"),
                a = n("42203"),
                s = n("782340");

            function o(e, t) {
                let n = a.default.getChannel(e);
                return null == n || n.isMultiUserDM() ? null : (0, i.jsx)(l.MenuItem, {
                    id: "close-dm",
                    label: s.default.Messages.CLOSE_DM,
                    action: () => r.default.closePrivateChannel(e, t)
                })
            }
        },
        151200: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var i = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                a = n("561288"),
                s = n("191145"),
                o = n("271938"),
                u = n("99795"),
                d = n("782340");

            function c(e, t) {
                let n = (0, l.useStateFromStores)([o.default], () => o.default.getId() === e, [e]),
                    [c, f] = (0, l.useStateFromStoresArray)([s.default], () => [s.default.getParticipants(t), s.default.getParticipant(t, e)], [t, e]);
                return n || 0 === c.length ? null : null == f ? (0, i.jsx)(r.MenuItem, {
                    id: "ring",
                    label: d.default.Messages.RING,
                    action: () => a.default.ring(t, [e])
                }) : f.type === u.ParticipantTypes.USER && f.ringing ? (0, i.jsx)(r.MenuItem, {
                    id: "stop-ringing",
                    label: d.default.Messages.STOP_RINGING,
                    action: () => a.default.stopRinging(t, [e])
                }) : null
            }
        },
        679428: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("872717"),
                l = n("689988"),
                r = n("870691"),
                a = n("42203"),
                s = n("49111");
            let o = {},
                u = 0;

            function d() {
                o = {
                    ...r.default.getCollapsedCategories()
                }
            }

            function c() {
                !__OVERLAY__ && (clearTimeout(u), u = setTimeout(() => f(), 15e3))
            }
            async function f(e, t) {
                null == e || e === s.ME ? await i.default.patch({
                    url: s.Endpoints.USER_GUILD_SETTINGS(s.ME),
                    body: t
                }) : await h(null != t ? {
                    [null != e ? e : s.ME]: t
                } : {})
            }
            async function h(e) {
                clearTimeout(u);
                let t = 0 !== Object.keys(e).length,
                    n = r.default.getCollapsedCategories(),
                    l = function() {
                        let e = {},
                            t = r.default.getCollapsedCategories();
                        for (let n in t) t[n] !== o[n] && (e[n] = !0);
                        for (let n in o) t[n] !== o[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in l) {
                    let l = a.default.getChannel(i);
                    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
                        ...e[l.guild_id].channel_overrides[l.id],
                        collapsed: l.id in n
                    }, t = !0)
                }
                return t ? (o = {
                    ...n
                }, delete e[s.FAVORITES], (await i.default.patch({
                    url: s.Endpoints.USER_GUILD_SETTINGS_BULK,
                    body: {
                        guilds: e
                    }
                })).body) : []
            }

            function E() {
                o = {
                    ...r.default.getCollapsedCategories()
                }
            }
            class _ extends l.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: c,
                        CATEGORY_EXPAND: c,
                        CATEGORY_COLLAPSE_ALL: c,
                        CATEGORY_EXPAND_ALL: c,
                        POST_CONNECTION_OPEN: d,
                        USER_GUILD_SETTINGS_FULL_UPDATE: E
                    }, this.saveUserGuildSettings = f, this.saveUserGuildSettingsBulk = h
                }
            }
            var I = new _
        },
        870691: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                r = n("449008"),
                a = n("42203"),
                s = n("341542"),
                o = n("923959"),
                u = n("49111");
            let d = {},
                c = 0;

            function f() {
                c += 1
            }

            function h(e) {
                if (null == d[e]) return !1;
                delete d[e]
            }
            class E extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(a.default, s.default), this.removeChangeListener(f), this.addChangeListener(f), d = null != e ? e : {}
                }
                getState() {
                    return d
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!d[e] && d[e]
                }
                getCollapsedCategories() {
                    return d
                }
                get version() {
                    return c
                }
            }
            E.displayName = "CategoryCollapseStore", E.persistKey = "collapsedCategories";
            var _ = new E(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (d = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? d[e.channel_id] = !0 : delete d[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(r.isNotNullish));
                    for (let e in d) {
                        let t = a.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete d[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (d[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (d[t]) return !1;
                    d[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return h(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (d[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete d[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return h(t)
                }
            })
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
                a = n.n(r),
                s = n("77078"),
                o = n("760607"),
                u = n("89976");

            function d(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: r,
                    flowerStarClassName: d,
                    ...c
                } = e, f = l.Children.only(t), h = (0, s.useRedesignIconContext)().enabled;
                return (0, i.jsxs)("div", {
                    className: a(u.flowerStarContainer, r),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, i.jsx)(o.default, {
                        ...c,
                        className: a(d, u.flowerStar)
                    }), (0, i.jsx)("div", {
                        className: a(u.childContainer, {
                            [u.redesignIconChildContainer]: h
                        }),
                        children: f
                    })]
                })
            }
        },
        37785: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("77078"),
                a = n("393414"),
                s = n("49111"),
                o = l.forwardRef(function(e, t) {
                    let {
                        href: n,
                        children: o,
                        onClick: u,
                        onKeyPress: d,
                        focusProps: c,
                        ...f
                    } = e, h = l.useCallback(e => {
                        !e.repeat && ((e.charCode === s.KeyboardKeys.SPACE || e.charCode === s.KeyboardKeys.ENTER) && (e.preventDefault(), null != n && (0, a.transitionTo)(n), null == u || u()), null == d || d(e))
                    }, [n, d, u]), E = l.useCallback(e => {
                        !e.metaKey && !e.shiftKey && 0 === e.button && (e.preventDefault(), e.stopPropagation(), null != n && (0, a.transitionTo)(n), null == u || u())
                    }, [n, u]), _ = (0, i.jsx)("a", {
                        ref: t,
                        href: n,
                        onClick: E,
                        onKeyPress: h,
                        ...f,
                        children: o
                    });
                    return (0, i.jsx)(r.FocusRing, {
                        ...c,
                        children: _
                    })
                })
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return I
                },
                default: function() {
                    return T
                }
            });
            var i, l, r = n("37983"),
                a = n("884691"),
                s = n("414456"),
                o = n.n(s),
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
                _ = {
                    default: h.shineInnerDefault,
                    small: h.shineInnerSmall
                };
            class I extends a.PureComponent {
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
                                className: _[t]
                            })
                        })
                    })
                }
            }
            I.defaultProps = {
                shineSize: "default"
            };
            let p = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: l,
                    pauseAnimation: s,
                    shineSize: u = "default",
                    shinePaused: f,
                    buttonShineClassName: E,
                    onlyShineOnHover: _,
                    ...p
                } = e, T = a.createRef(), C = (0, c.default)(T), S = !i && !l && !0 !== s && (!_ || C);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: T,
                    ...p,
                    className: o(h.shinyButton, n),
                    disabled: i,
                    submitting: l,
                    children: [t, S ? (0, r.jsx)(I, {
                        shinePaused: f,
                        className: o(h.buttonShine, _ ? h.onlyShineOnHover : void 0, E),
                        shineSize: u
                    }) : null]
                })
            };
            p.ShineSizes = l;
            var T = p
        },
        191814: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");

            function l(e) {
                let {
                    size: t,
                    horizontal: n = !1
                } = e, l = n ? t : 1, r = n ? 1 : t;
                return (0, i.jsx)("span", {
                    style: {
                        display: "block",
                        width: l,
                        minWidth: l,
                        height: r,
                        minHeight: r
                    }
                })
            }
            n("884691")
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var i = n("995008"),
                l = n.n(i),
                r = n("775560");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return l(e)
                },
                s = () => (0, r.useLazyValue)(() => a()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        83910: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("926001"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
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
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                r = n.n(l),
                a = n("384737"),
                s = n("448052"),
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
                        transition: _ = f.transition,
                        className: I,
                        foreground: p,
                        expanded: T,
                        ...C
                    } = e, {
                        enabled: S
                    } = (0, d.useRedesignIconContext)(), N = t;
                    if (!0 === T ? N = h.DOWN : !1 === T && (N = h.RIGHT), S) {
                        let e = {
                            [h.UP]: u.ChevronSmallUpIcon,
                            [h.DOWN]: a.ChevronSmallDownIcon,
                            [h.LEFT]: s.ChevronSmallLeftIcon,
                            [h.RIGHT]: o.ChevronSmallRightIcon
                        } [N];
                        return (0, i.jsx)(e, {
                            ...C,
                            className: I,
                            width: n,
                            height: l,
                            color: E,
                            colorClass: p
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: r(I, _, N),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(C),
                        children: (0, i.jsx)("path", {
                            className: p,
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
            var _ = E
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
            var l = n("469563"),
                r = n("733154"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
        93393: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("503420"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: n = 20,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 20 20",
                        children: (0, i.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, i.jsx)("path", {
                                className: r,
                                fill: l,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, r.ClockIcon, void 0, {
                    size: 20
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
            var l = n("469563"),
                r = n("505088"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        backgroundColor: s,
                        ...o
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, i.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
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
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("469563"),
                a = n("163725"),
                s = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foregroundColor: a = l.default.unsafe_rawColors.RED_400.css,
                        foreground: o,
                        background: u,
                        ...d
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("rect", {
                            fill: a,
                            className: o,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, i.jsx)("path", {
                            fill: r,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, a.EyeSlashIcon, void 0, {
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
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, l.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: r,
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
            var l = n("469563"),
                r = n("197801"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return 16 === t || 16 === n ? (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 7V9C14 9 12.5867 9 12.5733 9.00667C12.42 9.58667 12.1733 10.1267 11.84 10.6067L12.74 11.5067L11.4933 12.7533L10.5933 11.8533C10.1133 12.1867 9.57334 12.44 8.99334 12.5867V14H6.99334V12.58C6.41334 12.4333 5.87334 12.18 5.39334 11.8467L4.49333 12.7467L3.24667 11.5L4.14667 10.6C3.81333 10.1267 3.56 9.58 3.41333 9H2V7H3.41333C3.56 6.42 3.81333 5.88 4.14667 5.4L3.24667 4.5L4.5 3.24667L5.4 4.14667C5.87334 3.81333 6.42 3.56 7 3.41333V2H9V3.41333C9.58 3.56667 10.12 3.81333 10.6 4.14667L11.5067 3.25333L12.7533 4.5L11.8533 5.4C12.1867 5.87334 12.44 6.42 12.5867 7H14ZM8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z"
                        })
                    }) : (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                        })
                    })
                }, r.SettingsIcon, void 0, {
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
            var l = n("469563"),
                r = n("998460"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("202909"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: s,
                        ...o
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(o),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: s,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon, void 0, {
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
            var l = n("469563"),
                r = n("504318"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: r,
                            fill: l
                        })
                    })
                }, r.PencilIcon, void 0, {
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
            var l = n("469563"),
                r = n("876726"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("424823"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, r.PlusSmallIcon, void 0, {
                    size: 24
                })
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("31745"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        className: r,
                        foreground: a
                    } = e;
                    return (0, i.jsx)("svg", {
                        className: r,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, r.CirclePlusIcon, void 0, {
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
            var l = n("469563"),
                r = n("390300"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(s),
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
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("287083"),
                a = n("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: l = "currentColor",
                        ...r
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, a.default)(r),
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
        157590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), n("222007");
            var i, l = n("817736"),
                r = n("118810");
            let a = {
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
                constructor(e = a) {
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
            let a = (0, l.v4)(),
                s = new Map,
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
                    t ? s.has(t) ? this.elementId = s.get(t) || "" : s.set(t, (0, l.v4)()) : this.elementId = a;
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