n.r(t), n(47120), n(789020), n(724458);
var r = n(392711),
    i = n.n(r);
n(57132), n(140155);
var a = n(398758),
    s = n(601070),
    o = n(569471),
    l = n(195663),
    u = n(131704),
    c = n(709054),
    d = n(314897),
    _ = n(592125),
    E = n(430824),
    f = n(496675),
    h = n(306680),
    p = n(944486),
    m = n(412788),
    I = n(9156),
    T = n(594174),
    g = n(981631),
    S = n(176505),
    A = n(490897);
function N(e, t, n) {
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
let v = g.kod,
    O = {},
    R = new Set(),
    C = 0;
function y(e) {
    var t;
    let n = O[null != e ? e : v];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        mentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
    };
}
function D(e) {
    var t;
    return (O[null != e ? e : v] = null !== (t = O[null != e ? e : v]) && void 0 !== t ? t : y(e));
}
function L(e) {
    let t = D(e);
    t.sentinel++, C++;
}
function b(e, t, n) {
    return null != e.guild_id && n && !((0, u.Q5)(e.type) || I.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !(null == e || (e.isGuildVocal() && 0 === t) || e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL) || ((0 === t || n) && (e.isThread() ? o.Z.isMuted(e.id) || I.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : I.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) || (!e.isPrivate() && (b(e, t, (0, a.r1)(e.guild_id)) || !f.Z.can(e.accessPermissions, e)))) && (t > 0 || I.ZP.resolveUnreadSetting(e) === A.i.ALL_MESSAGES);
}
function P(e) {
    switch (e) {
        case v:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function U(e, t) {
    let n = h.ZP.hasUnread(e, t);
    if (t === A.W.GUILD_EVENT) return !(I.ZP.isMuted(e) || I.ZP.isMuteScheduledEventsEnabled(e)) && n;
    return n;
}
function w(e, t) {
    let n = y(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function x(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function G(e, t) {}
function k(e, t, n) {
    return x(t), (t.mentionCount = i()(t.mentionCounts).values().sum()), (t.unread !== n.unread || t.mentionCount !== n.mentionCount) && ((O[null != e ? e : v] = t), null != e && (t.unread ? R.add(e) : R.delete(e)), C++, L(null != e ? e : v), G(t, n), !0);
}
function B(e, t) {
    let n = P(e),
        r = D(n),
        i = w(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = _.Z.getChannel(e);
            if (null == t) {
                delete i.mentionCounts[e];
                return;
            }
            if (t.getGuildId() !== n) return;
            let r = h.ZP.getMentionCount(e);
            null !== n && !a && h.ZP.hasUnread(t.id) && M(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)), r > 0 && M(t, r) ? (i.mentionCounts[t.id] = r) : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[A.W.CHANNEL] = a),
        i.unreadByType[A.W.CHANNEL] !== r.unreadByType[A.W.CHANNEL] && !i.unreadByType[A.W.CHANNEL])
    ) {
        let e = _.Z.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && h.ZP.hasUnread(e.id) && M(e))) return V(n);
        null != n && R.add(n), (i.unreadByType[A.W.CHANNEL] = !0);
    }
    return k(n, i, r);
}
function F(e, t) {
    if (null == e) return;
    let n = D(e),
        r = w(e, n);
    return (r.unreadByType[A.W.GUILD_EVENT] = U(e, t)), k(e, r, n);
}
function V(e, t) {
    let n = P(e),
        r = y(n);
    if (null == n) {
        let e = _.Z.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = h.ZP.getMentionCount(t);
            i > 0 && M(n, i) && ((r.mentionCount += i), (r.mentionCounts[n.id] = i));
        }
    } else {
        let e = I.ZP.isMuted(n);
        if (e && !1 === t) return !1;
        let i = I.ZP.getMutedChannels(n),
            l = I.ZP.getChannelOverrides(n),
            c = (0, a.r1)(n),
            d = _.Z.getMutableBasicGuildChannelsForGuild(n);
        for (let t in d) {
            let n = d[t],
                a = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                s = r.unreadByType[A.W.CHANNEL],
                { mentionCount: o, unread: _ } = h.ZP.getGuildChannelUnreadState(n, c, l, a, s),
                E = o > 0;
            if (!E && a) continue;
            let p = !s && (!a || E) && _;
            (p || E) &&
                (function (e, t, n) {
                    if (((0, u.bw)(e.type) && 0 === t) || !f.Z.canBasicChannel((0, u.Gz)(e.type), e) || b(e, t, n)) return !1;
                    return !('flags' in e && e.hasFlag(S.zZ.IS_GUILD_RESOURCE_CHANNEL)) && (t > 0 || I.ZP.resolveUnreadSetting(e) === A.i.ALL_MESSAGES);
                })(n, o, c) &&
                (p && ((r.unreadByType[A.W.CHANNEL] = !0), (r.unreadChannelId = t)), E && ((r.mentionCount += o), (r.mentionCounts[n.id] = o)));
        }
        let E = s.Z.getActiveJoinedThreadsForGuild(n);
        for (let t in E)
            for (let n in E[t]) {
                !r.unreadByType[A.W.CHANNEL] && h.ZP.hasUnread(n) && !o.Z.isMuted(n) && !e && ((r.unreadByType[A.W.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = h.ZP.getMentionCount(n);
                t > 0 && ((r.mentionCount += t), (r.mentionCounts[n] = t));
            }
        !r.unreadByType[A.W.GUILD_EVENT] && U(n, A.W.GUILD_EVENT) && (r.unreadByType[A.W.GUILD_EVENT] = !0);
    }
    x(r);
    let i = D(n);
    return (r.unread !== i.unread || r.mentionCount !== i.mentionCount) && ((O[null != n ? n : v] = r), null != n && (r.unread ? R.add(n) : R.delete(n)), C++, L(null != n ? n : v), G(r, i), !0);
}
function H(e) {
    let { guilds: t } = e;
    (O = {}), (C = 0), (R = new Set()), V(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && V(n.id);
    }
}
function Z(e) {
    let { guilds: t, readState: n } = e;
    (O = {}), (C = 0), (R = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === A.W.CHANNEL) {
                    var t;
                    i.add(null === (t = _.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id);
                } else i.add(e.id);
            }
        }),
    V(null),
    t))
        V(e.id, r ? i.has(e.id) : void 0);
}
function Y() {
    for (let e of ((O = {}), (R = new Set()), V(null), Object.values(E.Z.getGuildIds()))) V(e);
}
function j(e) {
    let { guild: t } = e;
    return V(t.id);
}
function W(e) {
    let { guild: t } = e;
    return null != O[t.id] && (delete O[t.id], R.delete(t.id), C++, !0);
}
function K(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    return B(n, [t]);
}
function z() {
    let e = _.Z.getChannel(p.Z.getChannelId());
    return null != e && B(e.getGuildId(), [e.id]);
}
function q(e) {
    let { user: t, guildId: n } = e;
    return t.id === d.default.getId() && V(n);
}
function Q(e) {
    let { channelId: t } = e,
        n = _.Z.getChannel(t);
    return null != n && B(n.getGuildId(), [n.id]);
}
function X(e) {
    let { channelId: t } = e,
        n = _.Z.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = D(n.guild_id);
        if (((n.isThread() ? !o.Z.hasJoined(n.id) || o.Z.isMuted(n.id) : I.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[A.W.CHANNEL]) && 0 === h.ZP.getMentionCount(t)) return !1;
    }
    return B(n.getGuildId(), [n.id]);
}
function $(e) {
    let { channelId: t, guildId: n } = e;
    return n !== g.I_8 && null != t && B(n, [t]);
}
function J(e) {
    let { channel: t } = e;
    return B(t.getGuildId(), [t.id]);
}
function ee(e) {
    let { channels: t } = e;
    return i()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                B(
                    n,
                    t.map((e) => e.id)
                ) || e,
            !1
        );
}
function et(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != _.Z.getChannel(e))
        .groupBy((e) => {
            var t;
            return null === (t = _.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => B(n, t) || e, !1);
}
function en(e) {
    let { channel: t } = e;
    return B(t.getGuildId(), [t.id, t.parent_id]);
}
function er(e) {
    let { guildScheduledEvent: t } = e;
    return F(t.guild_id, A.W.GUILD_EVENT);
}
function ei(e) {
    let { guildScheduledEvent: t } = e;
    return F(t.guild_id, A.W.GUILD_EVENT);
}
function ea(e) {
    let { id: t, ackType: n } = e;
    return F(t, n);
}
function es(e) {
    let { id: t, guildId: n } = e;
    return B(n, [t]);
}
function eo(e) {
    return (0, l.s)(e) && B(e.guildId, [e.id]);
}
function el(e) {
    let { threads: t, guildId: n } = e;
    return B(
        n,
        t.filter((e) => o.Z.hasJoined(e.id)).map((e) => e.id)
    );
}
function eu(e) {
    return (
        !!(e.channels.length > 0) &&
        B(
            e.guildId,
            e.channels.map((e) => e.id)
        )
    );
}
function ec(e) {
    let { guildId: t } = e;
    return V(t);
}
function ed(e) {
    let { guildId: t } = e;
    return V(t);
}
function e_(e) {
    let { userGuildSettings: t } = e,
        n = new Set(
            t.map((e) => {
                var t;
                return null !== (t = e.guild_id) && void 0 !== t ? t : v;
            })
        );
    return c.default.keys(O).reduce((e, t) => (n.has(t) && V(t)) || e, !1);
}
function eE() {
    for (let e in O) O[e].ncMentionCount = 0;
}
function ef(e) {
    let { guildId: t } = e;
    return V(t);
}
class eh extends m.Z {
    initialize() {
        this.waitFor(_.Z, p.Z, h.ZP, f.Z, d.default, T.default, I.ZP, s.Z, o.Z);
    }
    loadCache() {
        let e = this.readSnapshot(eh.LATEST_SNAPSHOT_VERSION);
        null != e && ((O = e.guilds), (R = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: eh.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: O,
                unreadGuilds: Array.from(R)
            }
        };
    }
    hasAnyUnread() {
        return R.size > 0;
    }
    getStoreChangeSentinel() {
        return C;
    }
    getMutableUnreadGuilds() {
        return R;
    }
    getMutableGuildStates() {
        return O;
    }
    hasUnread(e) {
        return R.has(e);
    }
    getMentionCount(e) {
        return D(e).mentionCount;
    }
    getMutableGuildReadState(e) {
        return D(e);
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = _.Z.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (null != n) {
                if ((!n.isGuildVocal() || 0 !== h.ZP.getMentionCount(e)) && f.Z.can(n.accessPermissions, n) && h.ZP.hasUnreadOrMentions(e)) return !0;
            }
        }
        let n = s.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != _.Z.getChannel(e)) {
                for (let t in n[e]) if (h.ZP.hasUnreadOrMentions(t)) return !0;
            }
        return !!h.ZP.hasUnreadOrMentions(e, A.W.GUILD_EVENT) || !1;
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in O) {
            let r = O[n];
            if (!0 !== e || n !== v) t += r.mentionCount;
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in O) {
            let r = O[n];
            if (!0 !== e || n !== v) t += r.ncMentionCount;
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = O[v];
        return null !== (e = null == t ? void 0 : t.mentionCount) && void 0 !== e ? e : 0;
    }
    getMentionCountForChannels(e, t) {
        let n = 0,
            r = O[e];
        return null == r
            ? 0
            : (t.forEach((e) => {
                  let t = r.mentionCounts[e];
                  n += null != t ? t : 0;
              }),
              n);
    }
    getMentionCountForPrivateChannel(e) {
        var t, n;
        return null !== (n = null === (t = O[v]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0;
    }
    getGuildChangeSentinel(e) {
        return D(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: Z,
            OVERLAY_INITIALIZE: H,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: j,
            GUILD_DELETE: W,
            MESSAGE_CREATE: X,
            MESSAGE_ACK: Q,
            BULK_ACK: et,
            UPDATE_CHANNEL_DIMENSIONS: Q,
            CHANNEL_SELECT: $,
            CHANNEL_DELETE: K,
            WINDOW_FOCUS: z,
            GUILD_ACK: ec,
            GUILD_ROLE_CREATE: ed,
            GUILD_ROLE_DELETE: ed,
            GUILD_ROLE_UPDATE: ed,
            CHANNEL_CREATE: J,
            CHANNEL_UPDATES: ee,
            THREAD_CREATE: en,
            THREAD_UPDATE: en,
            THREAD_DELETE: en,
            THREAD_LIST_SYNC: el,
            THREAD_MEMBER_UPDATE: es,
            THREAD_MEMBERS_UPDATE: eo,
            PASSIVE_UPDATE_V2: eu,
            GUILD_MEMBER_UPDATE: q,
            USER_GUILD_SETTINGS_FULL_UPDATE: e_,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: ef,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ef,
            USER_GUILD_SETTINGS_GUILD_UPDATE: ef,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ef,
            GUILD_FEATURE_ACK: ea,
            GUILD_SCHEDULED_EVENT_CREATE: er,
            GUILD_SCHEDULED_EVENT_UPDATE: er,
            GUILD_SCHEDULED_EVENT_DELETE: ei,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: Q,
            LOAD_MESSAGES_SUCCESS: Q,
            CHANNEL_ACK: Q,
            CHANNEL_LOCAL_ACK: Q,
            NOTIFICATION_SETTINGS_UPDATE: Y,
            RECOMPUTE_READ_STATES: Y,
            VOICE_CHANNEL_SELECT: Q,
            ENABLE_AUTOMATIC_ACK: Q,
            RESORT_THREADS: Q,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eE,
            TRY_ACK: Q
        });
    }
}
N(eh, 'displayName', 'GuildReadStateStore'), N(eh, 'LATEST_SNAPSHOT_VERSION', 1), (t.default = new eh());
