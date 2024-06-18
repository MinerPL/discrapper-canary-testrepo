"use strict";
n.d(t, {
  Eb: function() {
    return p
  },
  Fx: function() {
    return v
  },
  IM: function() {
    return g
  },
  J2: function() {
    return y
  },
  r$: function() {
    return C
  }
}), n(653041), n(47120), n(411104);
var i = n(512722),
  r = n.n(i),
  s = n(392711),
  o = n.n(s),
  a = n(287328),
  l = n(406966),
  u = n(795513),
  _ = n(591526),
  d = n(261875),
  c = n(768433),
  E = n(710845),
  I = n(339085),
  T = n(926491),
  h = n(131704),
  S = n(430824),
  f = n(306680),
  N = n(411198);
let A = new E.Z("ReadyPayloadUtils"),
  m = {},
  O = null,
  R = {};

function C(e, t) {
  var n;
  let {
    guilds: i,
    merged_members: r,
    merged_presences: s,
    ...o
  } = e, a = D(R, null == s ? void 0 : s.friends), l = null !== (n = null == i ? void 0 : i.map((e, t) => {
    let n = D(R, null == s ? void 0 : s.guilds[t]),
      i = D(R, null == r ? void 0 : r[t]);
    return {
      ...e,
      unavailable: void 0 === e.voice_states,
      presences: n,
      members: i
    }
  })) && void 0 !== n ? n : [], u = L(t, i, e => ({
    id: e.id,
    members: e.members,
    presences: e.presences,
    embedded_activities: e.embedded_activities,
    voice_states: e.voice_states,
    unavailable: !1
  }));
  return null != u && l.push(u), R = {}, {
    ...o,
    presences: a,
    guilds: l
  }
}

function p() {
  let e = a.Z.database(),
    t = (0, c.O)() ? l.Z.getCommittedVersions() : Promise.resolve({}),
    n = (0, c.O)() ? _.Z.getGuildIds() : Promise.resolve(new Set);
  return Promise.all([t, n, null != e ? u.Z.okAsync(e) : Promise.resolve(!1)]).then(e => {
    let [t, n, i] = e;
    return {
      guildVersions: t,
      guildChannels: n,
      databaseOk: i
    }
  })
}

function g(e, t, n) {
  var i;
  let {
    users: s,
    relationships: l,
    private_channels: u,
    merged_members: _,
    guilds: c,
    ...E
  } = e;
  (function(e) {
    null != a.Z.database() && !1 === e.databaseOk && d.Z.replaceDisableAllDatabases("ReadyPayloadUtils: database was not ok"), m = {};
    let t = Object.values(S.Z.getGuilds()),
      n = I.Z.getGuilds(),
      i = T.Z.getRawStickersByGuild(),
      r = f.ZP.getReadStatesByChannel();
    for (let a of t) {
      var s, o, l;
      if (a.id in e.guildVersions && !!e.guildChannels.has(a.id)) m[a.id] = {
        properties: N.tK(a),
        roles: S.Z.getRoles(a.id),
        emojis: null !== (o = null === (s = n[a.id]) || void 0 === s ? void 0 : s.rawEmojis) && void 0 !== o ? o : null,
        stickers: null !== (l = i.get(a.id)) && void 0 !== l ? l : null,
        readStates: r
      }
    }
  })(n);
  let h = D(R = o().keyBy(s, e => e.id), l);
  null == u || u.forEach(e => {
    let t = e.recipient_ids;
    null != t && (e.recipients = t.map(e => (r()(null != R[e], "Missing user in compressed ready payload"), R[e]))), delete e.recipient_ids
  });
  let A = null !== (i = null == c ? void 0 : c.map((e, t) => !0 === e.unavailable ? e : (e.members = D(R, null == _ ? void 0 : _[t]), P(e)))) && void 0 !== i ? i : [],
    O = L(t, c, e => P(e));
  return null != O && A.push(O), {
    ...E,
    users: s,
    presences: [],
    relationships: h,
    guilds: A,
    private_channels: null != u ? u : []
  }
}

function L(e, t, n) {
  return null == O || O.identifyTime !== e || null != t && t.some(e => e.id === O.guild.id) ? null : n(O.guild)
}

function v(e, t) {
  var n, i, r;
  let s = S.Z.getGuild(e.id),
    o = y(e, null == s ? void 0 : {
      properties: N.tK(s),
      roles: S.Z.getRoles(s.id),
      emojis: null !== (i = null === (n = I.Z.getGuilds()[s.id]) || void 0 === n ? void 0 : n.rawEmojis) && void 0 !== i ? i : null,
      stickers: null !== (r = T.Z.getRawStickersByGuild().get(s.id)) && void 0 !== r ? r : null,
      readStates: {}
    });
  return O = {
    guild: e,
    identifyTime: t
  }, o
}

function D(e, t) {
  let n = [];
  return null == t || t.forEach(t => {
    if (null == t) return;
    let i = t.user_id;
    null != i && (r()(null != e[i], "Missing user[".concat(i, "] in compressed ready payload")), t.user = e[i]), delete t.user_id, n.push(t)
  }), n
}

function M(e) {
  let t = m[e];
  return delete m[e], t
}

function P(e) {
  var t, n, i, r, s, o, a, l, u, _, d, c;
  let E = M(e.id);
  if ("partial" !== e.data_mode) return {
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
    threads: null !== (r = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, h.q_)(t, e.id))) && void 0 !== r ? r : [],
    threadMessages: U(e.threads),
    channels: e.channels.map(t => (t.guild_id = e.id, (0, h.q_)(t, e.id))),
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  };
  if (null == E) throw A.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    dataMode: e.data_mode,
    channels: null,
    channelUpdates: {
      writes: null !== (s = null === (t = e.partial_updates.channels) || void 0 === t ? void 0 : t.map(t => (0, h.q_)(t, e.id))) && void 0 !== s ? s : [],
      deletes: null !== (o = e.partial_updates.deleted_channel_ids) && void 0 !== o ? o : []
    },
    channelTimestampUpdates: e.channel_updates,
    emojis: null == E.emojis ? null : b(E.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
    emojiUpdates: {
      writes: null !== (a = e.partial_updates.emojis) && void 0 !== a ? a : [],
      deletes: null !== (l = e.partial_updates.deleted_emoji_ids) && void 0 !== l ? l : []
    },
    guild_scheduled_events: e.guild_scheduled_events,
    joined_at: e.joined_at,
    lastMessages: e.last_messages,
    member_count: e.member_count,
    members: e.members,
    premium_subscription_count: e.premium_subscription_count,
    properties: null !== (u = e.properties) && void 0 !== u ? u : null,
    roles: N.EO(e.id, E.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: null == E.stickers ? null : b(E.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    stickerUpdates: {
      writes: null !== (_ = e.partial_updates.stickers) && void 0 !== _ ? _ : [],
      deletes: null !== (d = e.partial_updates.deleted_sticker_ids) && void 0 !== d ? d : []
    },
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null !== (c = null === (n = e.threads) || void 0 === n ? void 0 : n.map(t => (0, h.q_)(t, e.id))) && void 0 !== c ? c : [],
    threadMessages: U(e.threads),
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function y(e, t) {
  var n, i, r, s, o, a, l, u, _, d, c, E;
  if (null == t && (t = M(e.id)), "partial" !== e.data_mode) return {
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
    threads: null !== (s = null === (r = e.threads) || void 0 === r ? void 0 : r.map(t => (0, h.q_)(t, e.id))) && void 0 !== s ? s : [],
    threadMessages: U(e.threads),
    channels: e.channels.map(t => (t.guild_id = e.id, (0, h.q_)(t, e.id))),
    presences: e.presences,
    embedded_activities: e.embedded_activities,
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  };
  if (null == t) throw A.log("no cache entry for partial guild (guild: ".concat(e.id, ", type: post_ready)")), Error("Guild data was missing from store, but hash was still available.");
  return {
    id: e.id,
    channels: null,
    channelUpdates: {
      writes: null !== (o = null === (n = e.partial_updates.channels) || void 0 === n ? void 0 : n.map(t => (0, h.q_)(t, e.id))) && void 0 !== o ? o : [],
      deletes: null !== (a = e.partial_updates.deleted_channel_ids) && void 0 !== a ? a : []
    },
    channelTimestampUpdates: e.channel_updates,
    embedded_activities: e.embedded_activities,
    emojis: null == t.emojis ? null : b(t.emojis, e.partial_updates.emojis, e.partial_updates.deleted_emoji_ids),
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
    properties: null !== (_ = e.properties) && void 0 !== _ ? _ : t.properties,
    roles: N.EO(e.id, t.roles, e.partial_updates.roles, e.partial_updates.deleted_role_ids),
    stage_instances: e.stage_instances,
    stickers: null == t.stickers ? null : b(t.stickers, e.partial_updates.stickers, e.partial_updates.deleted_sticker_ids),
    stickerUpdates: {
      writes: null !== (d = e.partial_updates.stickers) && void 0 !== d ? d : [],
      deletes: null !== (c = e.partial_updates.deleted_sticker_ids) && void 0 !== c ? c : []
    },
    unableToSyncDeletes: e.unable_to_sync_deletes,
    threads: null !== (E = null === (i = e.threads) || void 0 === i ? void 0 : i.map(t => (0, h.q_)(t, e.id))) && void 0 !== E ? E : [],
    threadMessages: U(e.threads),
    voice_states: e.voice_states,
    version: e.version,
    hasThreadsSubscription: e.has_threads_subscription
  }
}

function U(e) {
  let t = [];
  if (null != e)
    for (let n of e) null != n.most_recent_message && t.push(n.most_recent_message);
  return t
}

function b(e, t, n) {
  t = null != t ? t : [];
  let i = new Set((null != n ? n : []).concat(t.map(e => e.id)));
  return e.filter(e => !i.has(e.id)).concat(t)
}