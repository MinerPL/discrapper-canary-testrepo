(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["26886"], {
        87657: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return i
                }
            });
            var u = t("37983"),
                a = t("884691"),
                r = t("77078"),
                o = t("390236"),
                i = a.memo(function(e) {
                    var n, t, i, l;
                    let {
                        user: d,
                        size: s = r.AvatarSizes.SIZE_32,
                        animate: c = !1,
                        "aria-hidden": M = !1,
                        ...f
                    } = e, x = a.useContext(o.default);
                    return (0, u.jsx)(r.Avatar, {
                        src: (n = d, t = (0, r.getAvatarSize)(s), i = c, l = x, n.getAvatarURL(l, t, i)),
                        size: s,
                        "aria-label": M ? void 0 : d.username,
                        "aria-hidden": M,
                        ...f
                    })
                })
        },
        441823: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                openUserContextMenu: function() {
                    return r
                },
                openModerateUserContextMenu: function() {
                    return o
                },
                openModerateRoleContextMenu: function() {
                    return i
                },
                openModerationRaidContextMenu: function() {
                    return l
                }
            }), t("70102");
            var u = t("37983");
            t("884691");
            var a = t("272030");

            function r(e, n, r) {
                r.isGroupDM() ? (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("166452").then(t.bind(t, "166452"));
                    return t => (0, u.jsx)(e, {
                        ...t,
                        user: n,
                        channel: r
                    })
                }) : r.isDM() ? (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("130074").then(t.bind(t, "130074"));
                    return t => (0, u.jsx)(e, {
                        ...t,
                        user: n,
                        channel: r,
                        showMute: !1,
                        targetIsUser: !0
                    })
                }) : null != r.guild_id ? (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("834247").then(t.bind(t, "834247"));
                    return t => (0, u.jsx)(e, {
                        ...t,
                        user: n,
                        channel: r,
                        guildId: r.guild_id
                    })
                }) : (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("406784").then(t.bind(t, "406784"));
                    return t => (0, u.jsx)(e, {
                        ...t,
                        user: n
                    })
                })
            }

            function o(e, n) {
                let {
                    user: r,
                    channel: o,
                    moderationAlertId: i,
                    guildId: l,
                    analyticsLocations: d,
                    onCloseContextMenu: s
                } = n;
                if ((null == o ? void 0 : o.isGroupDM()) || (null == o ? void 0 : o.isDM())) throw Error("Cannot moderate user in DM or group DM");
                let c = null != l ? l : null == o ? void 0 : o.getGuildId();
                null != c && (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("467940").then(t.bind(t, "467940"));
                    return n => (0, u.jsx)(e, {
                        ...n,
                        user: r,
                        channelId: null == o ? void 0 : o.id,
                        guildId: c,
                        moderationAlertId: i,
                        analyticsLocations: d,
                        onCloseContextMenu: s
                    })
                })
            }

            function i(e, n) {
                let {
                    user: r,
                    guildId: o,
                    analyticsLocations: i,
                    onCloseContextMenu: l
                } = n;
                (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("522651").then(t.bind(t, "522651"));
                    return n => (0, u.jsx)(e, {
                        ...n,
                        user: r,
                        guildId: o,
                        analyticsLocations: i,
                        onCloseContextMenu: l
                    })
                })
            }

            function l(e, n, r) {
                null != r && (0, a.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await t.el("701587").then(t.bind(t, "701587"));
                    return n => (0, u.jsx)(e, {
                        ...n,
                        guildId: r
                    })
                })
            }
        }
    }
]);