n.d(t, {
    x: function () {
        return i;
    }
}), n(47120);
var i, l, r, a, s, o, c = n(392711), u = n.n(c), d = n(442837), h = n(570140), p = n(220444), _ = n(565799), f = n(501655), m = n(569471), g = n(592125), C = n(430824), I = n(306680), E = n(914010), N = n(9156), x = n(938475), S = n(823379), Z = n(734307), v = n(981631);
(r = i || (i = {})).HIDDEN = 'hidden', r.UNREAD = 'unread', r.MENTIONS = 'mentions', r.VOICE_CHANNELS = 'voice-channels';
let T = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    }, L = {
        topBar: T,
        bottomBar: T
    }, A = {}, b = {};
function M(e) {
    let t = g.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? m.Z.isMuted(t.id) : N.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, p.d)(t);
}
function R(e) {
    let t = g.Z.getChannel(e);
    if (null == t)
        return !1;
    let n = t.getGuildId();
    if (null == n)
        return !1;
    let i = N.ZP.isGuildCollapsed(n), l = N.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && I.ZP.getMentionCount(e) > 0;
}
function y(e) {
    return !N.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? _.Z.getMutableParticipants(e.id, f.pV.SPEAKER).length > 0 : x.ZP.getVoiceStatesForChannel(e).length > 0);
}
function O(e) {
    var t, n, i;
    let {guildChannels: l} = Z.Z.getGuildWithoutChangingCommunityRows(e), r = l.getChannels(null !== (t = b[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length)
        return !1;
    let a = null, s = null, o = null, c = null, d = !0, h = !0, p = !1, _ = l.getCategoryFromSection(l.voiceChannelsSectionNumber), f = null !== (n = null == _ ? void 0 : _.getShownChannelIds()) && void 0 !== n ? n : [], [m, g, C] = l.getSlicedChannels(r);
    for (let e = 0; e < g.length; e++) {
        let t = g[e];
        if ((M(t.id) || u().some(t.threadIds, M)) && (h = !1), (R(t.id) || u().some(t.threadIds, R)) && (d = !1), f.includes(t.id) && (p = !0), !h && !d && p)
            break;
    }
    let E = 0, N = !1, x = 0, S = !1;
    if (h || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (M(t.id) || u().some(t.threadIds, M)) && (null == s && (s = t.id), N = !0), (R(t.id) || u().some(t.threadIds, R)) && (null == a && (a = t.id), E += I.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, I.ZP.getMentionCount));
        }
    if (h || d)
        for (let e = 0; e < C.length; e++) {
            let t = C[e];
            if (!h && !d)
                break;
            (M(t.id) || u().some(t.threadIds, M)) && (null == c && (c = t.id), S = !0), (R(t.id) || u().some(t.threadIds, R)) && (null == o && (o = t.id), x += I.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, I.ZP.getMentionCount));
        }
    let v = null, L = null, O = null !== (i = null == _ ? void 0 : _.getChannelRecords()) && void 0 !== i ? i : [];
    d && x > 0 ? v = {
        mode: 'mentions',
        mentionCount: x,
        targetChannelId: o
    } : !p && u().some(O, y) ? v = {
        mode: 'voice-channels',
        mentionCount: 0,
        targetChannelId: null
    } : h && S && (v = {
        mode: 'unread',
        mentionCount: 0,
        targetChannelId: c
    }), d && E > 0 ? L = {
        mode: 'mentions',
        mentionCount: E,
        targetChannelId: a
    } : h && N && (L = {
        mode: 'unread',
        mentionCount: 0,
        targetChannelId: s
    });
    let P = null != L && (null == v || 'mentions' !== v.mode && 'mentions' === L.mode), j = null != v && ('mentions' === v.mode || !P);
    return A[e] = {
        topBar: P && null != L ? L : T,
        bottomBar: j && null != v ? v : T
    }, !0;
}
let P = u().throttle(O, 200);
function j(e) {
    let {guildId: t} = e, n = C.Z.getGuild(t);
    return !!(null != n && n.hasFeature(v.oNc.COMMUNITY)) && P(t);
}
function D(e) {
    let {id: t} = e, n = g.Z.getChannel(t);
    if (null == n)
        return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(v.oNc.COMMUNITY)) && P(n.guild_id);
}
function U(e) {
    let {channel: t} = e, n = g.Z.getChannel(t.id);
    if (null == n)
        return !1;
    let i = C.Z.getGuild(t.guild_id);
    return !!(null != i && i.hasFeature(v.oNc.COMMUNITY)) && P(n.guild_id);
}
function G(e) {
    let {channelId: t} = e, n = g.Z.getChannel(t);
    if (null == n)
        return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(v.oNc.COMMUNITY)) && E.Z.getGuildId() === n.guild_id && P(n.guild_id);
}
function w(e) {
    let {guildId: t} = e;
    return null != t && P(t);
}
class k extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(Z.Z, I.ZP, N.ZP, m.Z, x.ZP, E.Z, C.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = A[e]) && void 0 !== t ? t : L;
    }
}
o = 'ChannelListUnreadsStore', (s = 'displayName') in (a = k) ? Object.defineProperty(a, s, {
    value: o,
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : a[s] = o, t.Z = new k(h.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let {
                guildId: t,
                channelIds: n
            } = e, i = C.Z.getGuild(t);
        return !!(null != i && i.hasFeature(v.oNc.COMMUNITY)) && null != n && !u().isEqual(b[t], n) && (b[t] = n, O(t));
    },
    BULK_ACK: function (e) {
        let {channels: t} = e, n = !1;
        return u()(t).map(e => {
            var t;
            let {channelId: n} = e;
            return null === (t = g.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id;
        }).filter(S.lm).uniq().forEach(e => {
            let t = C.Z.getGuild(e);
            null != t && t.hasFeature(v.oNc.COMMUNITY) && P(e) && (n = !0);
        }), n;
    },
    CHANNEL_ACK: G,
    CHANNEL_DELETE: U,
    CHANNEL_LOCAL_ACK: G,
    MESSAGE_ACK: G,
    MESSAGE_CREATE: G,
    MESSAGE_DELETE_BULK: G,
    MESSAGE_DELETE: G,
    PASSIVE_UPDATE_V2: function (e) {
        let t = C.Z.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.hasFeature(v.oNc.COMMUNITY)) && P(e.guildId);
    },
    RESORT_THREADS: G,
    THREAD_CREATE: U,
    THREAD_DELETE: U,
    THREAD_LIST_SYNC: j,
    THREAD_MEMBER_UPDATE: D,
    THREAD_MEMBERS_UPDATE: D,
    THREAD_UPDATE: U,
    BULK_CLEAR_RECENTS: j,
    CATEGORY_COLLAPSE_ALL: j,
    CATEGORY_EXPAND_ALL: j,
    VOICE_STATE_UPDATES: function (e) {
        let {voiceStates: t} = e, n = E.Z.getGuildId();
        if (null == n || !new Set(t.map(e => e.guildId)).has(n))
            return !1;
        let i = A[n];
        return null != i && 'voice-channels' === i.bottomBar.mode && P(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: w,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: w,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let {userGuildSettings: t} = e;
        for (let e of t)
            null != e.guild_id && P(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: w,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: w
});
