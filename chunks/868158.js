n.d(t, {
    Eb: function () {
        return O;
    },
    Fx: function () {
        return y;
    },
    IM: function () {
        return R;
    },
    J2: function () {
        return M;
    },
    r$: function () {
        return v;
    }
}), n(653041), n(47120), n(411104);
var r = n(512722), i = n.n(r), a = n(392711), o = n.n(a), s = n(287328), l = n(406966), u = n(795513), c = n(591526), d = n(261875), _ = n(768433), E = n(710845), f = n(339085), h = n(926491), p = n(131704), m = n(430824), I = n(306680), T = n(411198);
let g = new E.Z('ReadyPayloadUtils'), S = {}, A = null, N = {};
function v(e, t) {
    var n;
    let {
            guilds: r,
            merged_members: i,
            merged_presences: a,
            ...o
        } = e, s = D(N, null == a ? void 0 : a.friends), l = null !== (n = null == r ? void 0 : r.map((e, t) => {
            let n = D(N, null == a ? void 0 : a.guilds[t]), r = D(N, null == i ? void 0 : i[t]);
            return {
                ...e,
                unavailable: void 0 === e.voice_states,
                presences: n,
                members: r
            };
        })) && void 0 !== n ? n : [], u = C(t, r, e => ({
            id: e.id,
            members: e.members,
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            unavailable: !1
        }));
    return null != u && l.push(u), N = {}, {
        ...o,
        presences: s,
        guilds: l
    };
}
function O() {
    let e = s.Z.database(), t = (0, _.O)() ? l.Z.getCommittedVersions() : Promise.resolve({}), n = (0, _.O)() ? c.Z.getGuildIds() : Promise.resolve(new Set());
    return Promise.all([
        t,
        n,
        null != e ? u.Z.okAsync(e) : Promise.resolve(!1)
    ]).then(e => {
        let [t, n, r] = e;
        return {
            guildVersions: t,
            guildChannels: n,
            databaseOk: r
        };
    });
}
function R(e, t, n) {
    var r;
    let {
        users: a,
        relationships: l,
        private_channels: u,
        merged_members: c,
        guilds: _,
        ...E
    } = e;
    (function (e) {
        null != s.Z.database() && !1 === e.databaseOk && d.Z.replaceDisableAllDatabases('ReadyPayloadUtils: database was not ok'), S = {};
        let t = Object.values(m.Z.getGuilds()), n = f.Z.getGuilds(), r = h.Z.getRawStickersByGuild(), i = I.ZP.getReadStatesByChannel();
        for (let s of t) {
            var a, o, l;
            if (s.id in e.guildVersions && !!e.guildChannels.has(s.id))
                S[s.id] = {
                    properties: T.tK(s),
                    roles: m.Z.getRoles(s.id),
                    emojis: null !== (o = null === (a = n[s.id]) || void 0 === a ? void 0 : a.rawEmojis) && void 0 !== o ? o : null,
                    stickers: null !== (l = r.get(s.id)) && void 0 !== l ? l : null,
                    readStates: i
                };
        }
    }(n));
    let p = D(N = o().keyBy(a, e => e.id), l);
    null == u || u.forEach(e => {
        let t = e.recipient_ids;
        null != t && (e.recipients = t.map(e => (i()(null != N[e], 'Missing user in compressed ready payload'), N[e]))), delete e.recipient_ids;
    });
    let g = null !== (r = null == _ ? void 0 : _.map((e, t) => !0 === e.unavailable ? e : (e.members = D(N, null == c ? void 0 : c[t]), b(e)))) && void 0 !== r ? r : [], A = C(t, _, e => b(e));
    return null != A && g.push(A), {
        ...E,
        users: a,
        presences: [],
        relationships: p,
        guilds: g,
        private_channels: null != u ? u : []
    };
}
function C(e, t, n) {
    return null == A || A.identifyTime !== e || null != t && t.some(e => e.id === A.guild.id) ? null : n(A.guild);
}
function y(e, t) {
    var n, r, i;
    let a = m.Z.getGuild(e.id), o = M(e, null == a ? void 0 : {
            properties: T.tK(a),
            roles: m.Z.getRoles(a.id),
            emojis: null !== (r = null === (n = f.Z.getGuilds()[a.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== r ? r : null,
            stickers: null !== (i = h.Z.getRawStickersByGuild().get(a.id)) && void 0 !== i ? i : null,
            readStates: {}
        });
    return A = {
        guild: e,
        identifyTime: t
    }, o;
}
function D(e, t) {
    let n = [];
    return null == t || t.forEach(t => {
        if (null == t)
            return;
        let r = t.user_id;
        null != r && (i()(null != e[r], 'Missing user['.concat(r, '] in compressed ready payload')), t.user = e[r]), delete t.user_id, n.push(t);
    }), n;
}
function L(e) {
    let t = S[e];
    return delete S[e], t;
}
function b(e) {
    var t, n, r, i, a, o, s, l, u, c, d, _;
    let E = L(e.id);
    if ('partial' !== e.data_mode)
        return {
            id: e.id,
            dataMode: e.data_mode,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null !== (i = null === (r = e.threads) || void 0 === r ? void 0 : r.map(t => (0, p.q_)(t, e.id))) && void 0 !== i ? i : [],
            threadMessages: P(e.threads),
            channels: e.channels.map(t => (t.guild_id = e.id, (0, p.q_)(t, e.id))),
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == E)
        throw g.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: ready)')), Error('Guild data was missing from store, but hash was still available.');
    return {
        id: e.id,
        dataMode: e.data_mode,
        channels: null,
        channelUpdates: {
            writes: null !== (a = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, p.q_)(t, e.id))) && void 0 !== a ? a : [],
            deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
        },
        channelTimestampUpdates: e.channel_updates,
        emojis: null == E.emojis ? null : U(E.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null !== (s = e.partial_updates.emojis) && void 0 !== s ? s : [],
            deletes: null !== (l = e.partial_updates.deleted_emoji_ids) && void 0 !== l ? l : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        properties: null !== (u = e.properties) && void 0 !== u ? u : null,
        roles: T.EO(e.id, E.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == E.stickers ? null : U(E.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (c = e.partial_updates.stickers) && void 0 !== c ? c : [],
            deletes: null !== (d = e.partial_updates.deleted_sticker_ids) && void 0 !== d ? d : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (_ = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, p.q_)(t, e.id))) && void 0 !== _ ? _ : [],
        threadMessages: P(e.threads),
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function M(e, t) {
    var n, r, i, a, o, s, l, u, c, d, _, E;
    if (null == t && (t = L(e.id)), 'partial' !== e.data_mode)
        return {
            id: e.id,
            emojis: e.emojis,
            guild_scheduled_events: e.guild_scheduled_events,
            joined_at: e.joined_at,
            lastMessages: e.last_messages,
            member_count: e.member_count,
            members: e.members,
            premium_subscription_count: e.premium_subscription_count,
            properties: e.properties,
            roles: e.roles,
            stage_instances: e.stage_instances,
            stickers: e.stickers,
            threads: null !== (a = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, p.q_)(t, e.id))) && void 0 !== a ? a : [],
            threadMessages: P(e.threads),
            channels: e.channels.map(t => (t.guild_id = e.id, (0, p.q_)(t, e.id))),
            presences: e.presences,
            embedded_activities: e.embedded_activities,
            voice_states: e.voice_states,
            version: e.version,
            hasThreadsSubscription: e.has_threads_subscription
        };
    if (null == t)
        throw g.log('no cache entry for partial guild (guild: '.concat(e.id, ', type: post_ready)')), Error('Guild data was missing from store, but hash was still available.');
    return {
        id: e.id,
        channels: null,
        channelUpdates: {
            writes: null !== (o = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(t => (0, p.q_)(t, e.id))) && void 0 !== o ? o : [],
            deletes: null !== (s = e.partial_updates.deleted_channel_ids) && void 0 !== s ? s : []
        },
        channelTimestampUpdates: e.channel_updates,
        embedded_activities: e.embedded_activities,
        emojis: null == t.emojis ? null : U(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
        emojiUpdates: {
            writes: null !== (l = e.partial_updates.emojis) && void 0 !== l ? l : [],
            deletes: null !== (u = e.partial_updates.deleted_emoji_ids) && void 0 !== u ? u : []
        },
        guild_scheduled_events: e.guild_scheduled_events,
        joined_at: e.joined_at,
        lastMessages: e.last_messages,
        member_count: e.member_count,
        members: e.members,
        premium_subscription_count: e.premium_subscription_count,
        presences: e.presences,
        properties: null !== (c = e.properties) && void 0 !== c ? c : t.properties,
        roles: T.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
        stage_instances: e.stage_instances,
        stickers: null == t.stickers ? null : U(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
        stickerUpdates: {
            writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
            deletes: null !== (_ = e.partial_updates.deleted_sticker_ids) && void 0 !== _ ? _ : []
        },
        unableToSyncDeletes: e.unable_to_sync_deletes,
        threads: null !== (E = null === (r = e.threads) || void 0 === r ? void 0 : r.map(t => (0, p.q_)(t, e.id))) && void 0 !== E ? E : [],
        threadMessages: P(e.threads),
        voice_states: e.voice_states,
        version: e.version,
        hasThreadsSubscription: e.has_threads_subscription
    };
}
function P(e) {
    let t = [];
    if (null != e)
        for (let n of e)
            null != n.most_recent_message && t.push(n.most_recent_message);
    return t;
}
function U(e, t, n) {
    t = null != t ? t : [];
    let r = new Set((null != n ? n : []).concat(t.map(e => e.id)));
    return e.filter(e => !r.has(e.id)).concat(t);
}
