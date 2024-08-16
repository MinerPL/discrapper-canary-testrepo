n.d(t, {
    U2: function () {
        return W;
    },
    wL: function () {
        return j;
    }
}),
    n(47120),
    n(789020);
var r,
    i = n(392711),
    a = n.n(i),
    s = n(442837),
    o = n(570140),
    l = n(798140),
    u = n(160404),
    c = n(312400),
    d = n(569471),
    _ = n(131704),
    E = n(630388),
    f = n(709054),
    h = n(592125),
    p = n(430824),
    m = n(594174),
    I = n(981631),
    T = n(468788),
    g = n(490897),
    S = n(526761);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = {},
    v = {},
    O = !1,
    R = !1,
    C = { flags: 0 },
    y = new l.ZP(),
    D = new l.ZP(),
    L = {
        suppress_everyone: !1,
        suppress_roles: !1,
        mute_scheduled_events: !1,
        mobile_push: !0,
        muted: !1,
        message_notifications: I.bL.ALL_MESSAGES,
        flags: 0,
        channel_overrides: {},
        notify_highlights: I.gLR.NULL,
        hide_muted_channels: !1,
        version: -1,
        mute_config: null
    },
    b = {
        [I.bL.ALL_MESSAGES]: {
            ...L,
            message_notifications: I.bL.ALL_MESSAGES
        },
        [I.bL.ONLY_MENTIONS]: {
            ...L,
            message_notifications: I.bL.ONLY_MENTIONS
        }
    },
    M = {},
    P = {},
    U = new Set(),
    w = new Set(),
    x = {},
    G = {};
function k(e, t) {
    var n;
    let r = N[e],
        i = null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {},
        s = W(t.channel_overrides),
        o = {
            ...j(e),
            ...r,
            ...t,
            channel_overrides: s
        };
    y.clearTimer(e),
        a().forEach(i, (e) => {
            D.clearTimer(e.channel_id);
        }),
        B(e, o),
        (N[e] = o),
        (M[e] = q(N[e]));
    let l = a().filter(o.channel_overrides, (e) => {
        var t;
        return E.yE(null !== (t = e.flags) && void 0 !== t ? t : 0, S.ic.OPT_IN_ENABLED);
    });
    (P[e] = new Set(l.map((e) => e.channel_id))),
        (function (e) {
            var t;
            if (null == e) return;
            let n = new Set(P[e]),
                r = null !== (t = x[e]) && void 0 !== t ? t : {};
            for (let e in r) {
                let t = r[e];
                E.yE(t.flags, S.ic.OPT_IN_ENABLED) ? n.add(e) : n.delete(e);
            }
            Object.keys(r).length > 0 ? (G[e] = n) : delete G[e];
        })(e),
        delete v[e];
}
function B(e, t) {
    !0 === t.muted &&
        y.setTimer(e, t.mute_config, () => {
            F(e, { muted: !1 }),
                o.Z.dispatch({
                    type: 'GUILD_MUTE_EXPIRED',
                    guildId: e
                });
        }) &&
        (t.muted = !1),
        a().forEach(t.channel_overrides, (t) => {
            !0 === t.muted &&
                D.setTimer(t.channel_id, t.mute_config, () => {
                    V(e, t.channel_id, { muted: !1 }),
                        o.Z.dispatch({
                            type: 'CHANNEL_MUTE_EXPIRED',
                            guildId: e,
                            channelId: t.channel_id
                        });
                }) &&
                (t.muted = !1);
        });
}
function F(e, t) {
    var n;
    let r = N[e];
    k(e, {
        channel_overrides: null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {},
        ...t
    });
}
function V(e, t, n) {
    let r = Y(e, t, n);
    Z(e, { [t]: r });
}
function H(e, t) {
    var n;
    let r = {},
        i = null !== (n = null != e ? x[e] : null) && void 0 !== n ? n : {};
    f.default.keys(t).forEach((n) => {
        var a;
        let s = Y(e, n, t[n]);
        (r[n] = s), (i[n] = { flags: null !== (a = s.flags) && void 0 !== a ? a : 0 });
    }),
        null != e &&
            (x[e] = {
                ...x[e],
                ...i
            }),
        Z(e, r);
}
function Z(e, t) {
    var n;
    let r = N[e],
        i = null !== (n = null == r ? void 0 : r.channel_overrides) && void 0 !== n ? n : {};
    k(e, {
        channel_overrides:
            null == r
                ? t
                : {
                      ...i,
                      ...t
                  }
    });
}
function Y(e, t, n) {
    var r;
    let i = N[e],
        a = null !== (r = null == i ? void 0 : i.channel_overrides) && void 0 !== r ? r : {};
    return {
        channel_id: t,
        muted: !1,
        ...a[t],
        ...n
    };
}
function j(e) {
    let t = p.Z.getGuild(e);
    return b[null != t ? t.defaultMessageNotifications : I.bL.ALL_MESSAGES];
}
function W() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e instanceof Array ? a().keyBy(e, 'channel_id') : e;
}
function K(e) {
    var t;
    return null !== (t = N[e]) && void 0 !== t ? t : j(e);
}
function z(e) {
    (O = E.yE(e.flags, T.c.USE_NEW_NOTIFICATIONS)), (R = E.yE(e.flags, T.c.MENTION_ON_ALL_MESSAGES)), (C = e);
}
function q(e) {
    return new Set(
        null != e.channel_overrides
            ? a()(e.channel_overrides)
                  .filter((e) => (0, l.m$)(e))
                  .map((e) => e.channel_id)
                  .value()
            : null
    );
}
function Q() {
    return !0;
}
function X() {
    return O && c.xT.getCurrentConfig({ location: 'UserGuildSettingsStore' }, { autoTrackExposure: !1 }).enabled;
}
class $ extends (r = s.ZP.PersistedStore) {
    initialize(e) {
        if ((this.waitFor(m.default, p.Z, u.Z, d.Z), null != e)) {
            var t, n;
            (O = null !== (t = e.useNewNotifications) && void 0 !== t && t),
                'userGuildSettings' in e &&
                    ((N = e.userGuildSettings),
                    (P = a().mapValues(null !== (n = e.optedInChannelsByGuild) && void 0 !== n ? n : {}, (e) => new Set(e))),
                    a().forEach(N, (e, t) => {
                        M[t] = q(e);
                    }));
        }
    }
    getState() {
        return { useNewNotifications: O };
    }
    get mentionOnAllMessages() {
        return R;
    }
    isSuppressEveryoneEnabled(e) {
        return K(e).suppress_everyone;
    }
    isSuppressRolesEnabled(e) {
        return K(e).suppress_roles;
    }
    isMuteScheduledEventsEnabled(e) {
        return K(e).mute_scheduled_events;
    }
    isMobilePushEnabled(e) {
        return K(e).mobile_push;
    }
    isMuted(e) {
        let t = K(e);
        return (0, l.m$)(t);
    }
    isTemporarilyMuted(e) {
        let t = K(e);
        return (0, l.Cl)(t);
    }
    getMuteConfig(e) {
        return K(e).mute_config;
    }
    getMessageNotifications(e) {
        return K(e).message_notifications;
    }
    getChannelOverrides(e) {
        var t;
        return null !== (t = K(e).channel_overrides) && void 0 !== t ? t : {};
    }
    getNotifyHighlights(e) {
        return K(e).notify_highlights;
    }
    getGuildFlags(e) {
        return K(e).flags;
    }
    getChannelMessageNotifications(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null == n || null == n.message_notifications ? I.bL.NULL : n.message_notifications;
    }
    getChannelMuteConfig(e, t) {
        let n = this.getChannelOverrides(e)[t];
        return null != n ? n.mute_config : null;
    }
    getMutedChannels(e) {
        var t;
        return null !== (t = M[e]) && void 0 !== t ? t : U;
    }
    isChannelMuted(e, t) {
        var n;
        let r = h.Z.getChannel(t);
        return (e = null !== (n = null == r ? void 0 : r.getGuildId()) && void 0 !== n ? n : e), this.getMutedChannels(e).has(t);
    }
    isCategoryMuted(e, t) {
        let n = h.Z.getChannel(t);
        if (null == n) return !1;
        let r = n.parent_id;
        return null != r && this.getMutedChannels(e).has(r);
    }
    resolvedMessageNotifications(e) {
        let t = this.getChannelMessageNotifications(e.guild_id, e.id);
        if (t !== I.bL.NULL) return t;
        if (null != e.parent_id) {
            let t = this.getChannelMessageNotifications(e.guild_id, e.parent_id);
            if (t !== I.bL.NULL) return t;
        }
        return this.getMessageNotifications(e.guild_id);
    }
    resolveUnreadSetting(e) {
        if (_.Ec.has(e.type) || (0, _.hv)(e.type) || !X()) return g.i.ALL_MESSAGES;
        let t = this.getChannelUnreadSetting(e.guild_id, e.id);
        if (t !== g.i.UNSET) return t;
        if (null != e.parent_id) {
            let t = this.getChannelUnreadSetting(e.guild_id, e.parent_id);
            if (t !== g.i.UNSET) return t;
        }
        let n = this.getGuildUnreadSetting(e.guild_id);
        return n !== g.i.UNSET ? n : this.resolvedMessageNotifications(e) === I.bL.ALL_MESSAGES ? g.i.ALL_MESSAGES : g.i.ONLY_MENTIONS;
    }
    isGuildOrCategoryOrChannelMuted(e, t) {
        return this.isMuted(e) || this.isCategoryMuted(e, t) || this.isChannelMuted(e, t);
    }
    allowNoMessages(e) {
        return this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) || this.resolvedMessageNotifications(e) === I.bL.NO_MESSAGES || (this.isOptInEnabled(e.guild_id) && !this.isChannelRecordOrParentOptedIn(e));
    }
    allowAllMessages(e) {
        return !this.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id) && this.resolvedMessageNotifications(e) === I.bL.ALL_MESSAGES && (!this.isOptInEnabled(e.guild_id) || this.isChannelRecordOrParentOptedIn(e));
    }
    isGuildCollapsed(e) {
        var t;
        return (null === (t = N[e]) || void 0 === t ? void 0 : t.hide_muted_channels) === !0;
    }
    getAllSettings() {
        return {
            userGuildSettings: N,
            mutedChannels: M,
            optedInChannelsByGuild: P
        };
    }
    getChannelIdFlags(e, t) {
        var n;
        let r = this.getChannelOverrides(e)[t];
        return null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : 0;
    }
    getChannelFlags(e) {
        return this.getChannelIdFlags(e.guild_id, e.id);
    }
    getNewForumThreadsCreated(e) {
        let t = this.getChannelOverrides(e.guild_id)[e.id];
        if (null != t && null != t.flags) {
            if (E.yE(t.flags, S.ic.NEW_FORUM_THREADS_ON)) return !0;
            if (E.yE(t.flags, S.ic.NEW_FORUM_THREADS_OFF)) return !1;
        }
        return this.resolvedMessageNotifications(e) === I.bL.ALL_MESSAGES;
    }
    isOptInEnabled(e) {
        return null != e && (u.Z.isFullServerPreview(e) ? u.Z.isOptInEnabled(e) : E.yE(this.getGuildFlags(e), S.vc.OPT_IN_CHANNELS_ON));
    }
    isChannelRecordOrParentOptedIn(e, t) {
        return null != e && null != e.guild_id && (this.isChannelOptedIn(e.guild_id, e.id, t) || (null != e.parent_id && this.isChannelOptedIn(e.guild_id, e.parent_id, t)));
    }
    isChannelOrParentOptedIn(e, t, n) {
        return this.isChannelRecordOrParentOptedIn(h.Z.getChannel(t), n);
    }
    isChannelOptedIn(e, t) {
        var n, r;
        let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (null == e) return !1;
        if (u.Z.isFullServerPreview(e)) return u.Z.isChannelOptedIn(e, t);
        if (i && null != G[e]) return G[e].has(t);
        let a = null !== (r = null === (n = this.getChannelOverrides(e)[t]) || void 0 === n ? void 0 : n.flags) && void 0 !== r ? r : 0;
        return E.yE(a, S.ic.OPT_IN_ENABLED);
    }
    getOptedInChannels(e) {
        var t, n;
        return u.Z.isFullServerPreview(e) ? (null !== (t = u.Z.getViewingChannels(e)) && void 0 !== t ? t : w) : null !== (n = P[e]) && void 0 !== n ? n : w;
    }
    getOptedInChannelsWithPendingUpdates(e) {
        return G[e];
    }
    getPendingChannelUpdates(e) {
        return x[e];
    }
    getGuildFavorites(e) {
        if (u.Z.isFullServerPreview(e)) return null;
        if (null == v[e]) {
            let t = a().filter(this.getChannelOverrides(e), (t) => {
                var n, r;
                return E.yE(null !== (r = t.flags) && void 0 !== r ? r : 0, S.ic.FAVORITED) && (null === (n = h.Z.getChannel(t.channel_id)) || void 0 === n ? void 0 : n.guild_id) === e;
            });
            v[e] = t.map((e) => e.channel_id);
        }
        return v[e];
    }
    isFavorite(e, t) {
        var n;
        return !u.Z.isFullServerPreview(e) && (null === (n = this.getGuildFavorites(e)) || void 0 === n ? void 0 : n.includes(t)) === !0;
    }
    isMessagesFavorite(e) {
        var t, n;
        let r = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
        return E.yE(r, S.ic.FAVORITED);
    }
    isAddedToMessages(e) {
        var t, n;
        let r = null !== (n = null === (t = this.getChannelOverrides(null)[e]) || void 0 === t ? void 0 : t.flags) && void 0 !== n ? n : 0;
        return E.yE(r, S.ic.OPT_IN_ENABLED);
    }
    getAddedToMessages() {
        var e;
        return null !== (e = P.null) && void 0 !== e ? e : w;
    }
    get accountNotificationSettings() {
        return C;
    }
    get useNewNotifications() {
        return O;
    }
    getGuildUnreadSetting(e) {
        if (!X()) return g.i.ALL_MESSAGES;
        let t = this.getGuildFlags(e);
        return E.yE(t, S.vc.UNREADS_ALL_MESSAGES) ? g.i.ALL_MESSAGES : E.yE(t, S.vc.UNREADS_ONLY_MENTIONS) ? g.i.ONLY_MENTIONS : g.i.UNSET;
    }
    resolveGuildUnreadSetting(e) {
        let t = this.getGuildFlags(e.id);
        return !X() || E.yE(t, S.vc.UNREADS_ALL_MESSAGES) ? g.i.ALL_MESSAGES : E.yE(t, S.vc.UNREADS_ONLY_MENTIONS) ? g.i.ONLY_MENTIONS : e.defaultMessageNotifications === I.bL.ALL_MESSAGES ? g.i.ALL_MESSAGES : g.i.ONLY_MENTIONS;
    }
    getChannelRecordUnreadSetting(e) {
        return this.getChannelUnreadSetting(e.guild_id, e.id);
    }
    getChannelUnreadSetting(e, t) {
        let n = this.getChannelIdFlags(e, t);
        return E.yE(n, S.ic.UNREADS_ALL_MESSAGES) ? g.i.ALL_MESSAGES : E.yE(n, S.ic.UNREADS_ONLY_MENTIONS) ? g.i.ONLY_MENTIONS : g.i.UNSET;
    }
}
A($, 'displayName', 'UserGuildSettingsStore'), A($, 'persistKey', 'collapsedGuilds');
let J = new $(o.Z, {
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            k(e.guild_id, {
                channel_overrides: {},
                ...e
            });
        });
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        F(t, n);
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: function (e) {
        let { guildId: t, settings: n } = e;
        F(t, n), H(t, n.channel_overrides);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: function (e) {
        let { guildId: t, channelId: n, settings: r } = e;
        null != t &&
            null != r.flags &&
            (x[t] = {
                ...x[t],
                [n]: { flags: r.flags }
            }),
            V(t, n, r);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function (e) {
        let { guildId: t, overrides: n } = e;
        return !(null == t || u.Z.isFullServerPreview(t)) && (H(t, n), !0);
    },
    CONNECTION_OPEN: function (e) {
        z(e.notificationSettings), y.reset(), D.reset(), !e.userGuildSettings.partial && ((N = {}), (M = {}), (P = {}));
        let t = new Set();
        for (let n in (e.userGuildSettings.entries.forEach((e) => {
            !('channel_overrides' in e) && (e.channel_overrides = {}), k(e.guild_id, e), null != e.guild_id && t.add(e.guild_id);
        }),
        N))
            !t.has(n) && B(n, N[n]);
    },
    CACHE_LOADED: function (e) {
        null != e.userGuildSettings &&
            0 !== e.userGuildSettings.length &&
            ((N = {}),
            (M = {}),
            (P = {}),
            e.userGuildSettings.forEach((e) => {
                let t = e.guild_id;
                N[t] = e;
                let n = new Set(),
                    r = new Set();
                for (let t in e.channel_overrides) {
                    var i;
                    let a = e.channel_overrides[t];
                    (0, l.m$)(a) && n.add(t), E.yE(null !== (i = a.flags) && void 0 !== i ? i : 0, S.ic.OPT_IN_ENABLED) && r.add(t);
                }
                (M[t] = n), (P[t] = r);
            }));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { allUserGuildSettings: t } = e,
            { userGuildSettings: n, mutedChannels: r, optedInChannelsByGuild: i } = t;
        (N = { ...n }),
            (M = {}),
            (P = {}),
            f.default.keys(r).forEach((e) => {
                M[e] = new Set(r[e]);
            }),
            f.default.keys(i).forEach((e) => {
                P[e] = new Set(i[e]);
            });
    },
    GUILD_CREATE: Q,
    GUILD_UPDATE: Q,
    GUILD_TOGGLE_COLLAPSE_MUTED: function (e) {
        let { guildId: t } = e,
            n = null == N[t] ? j(t) : N[t];
        N[t] = {
            ...n,
            guild_id: t,
            hide_muted_channels: !0 !== n.hide_muted_channels
        };
    },
    IMPERSONATE_UPDATE: Q,
    IMPERSONATE_STOP: Q,
    USER_GUILD_SETTINGS_REMOVE_PENDING_CHANNEL_UPDATES: function (e) {
        let { guildId: t, updates: n } = e;
        if (null == t) return !1;
        let r = x[t];
        if (null == r) return !1;
        for (let e in n) a().isEqual(n[e], r[e]) && delete r[e];
    },
    CLEAR_PENDING_CHANNEL_AND_ROLE_UPDATES: function (e) {
        let { guildId: t } = e;
        if (null == t) return !1;
        delete x[t], delete G[t];
    },
    NOTIFICATION_SETTINGS_UPDATE: function (e) {
        let { settings: t } = e;
        z(t);
    },
    GUILD_MUTE_EXPIRED: () => !0,
    CHANNEL_MUTE_EXPIRED: () => !0
});
t.ZP = J;
