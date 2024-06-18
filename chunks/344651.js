"use strict";
n.d(t, {
  Z: function() {
    return x
  }
}), n(653041), n(47120), n(789020), n(411104);
var i = n(392711),
  r = n.n(i);
n(724522);
var s = n(442837),
  o = n(570140),
  a = n(749210),
  l = n(821849),
  u = n(232567),
  _ = n(864106),
  d = n(710845),
  c = n(292419),
  E = n(566006),
  I = n(952537),
  T = n(218543),
  h = n(48481),
  S = n(131704),
  f = n(209747),
  N = n(598077),
  A = n(592125),
  m = n(271383),
  O = n(819640),
  R = n(594174),
  C = n(979651),
  p = n(509545),
  g = n(78839),
  L = n(936101),
  v = n(868158),
  D = n(483012),
  M = n(955132);
let P = new d.Z("ConnectionStore"),
  y = new D.Z(M.Wb, (e, t) => {
    var n;
    e = null != e ? e : {
      type: "CHANNEL_UPDATES",
      channels: []
    };
    let i = (0, S.q_)(t),
      r = A.Z.getChannel(t.id),
      s = null == r ? void 0 : r.merge({
        ...i,
        recipients: r.recipients,
        bitrate: null !== (n = i.bitrate) && void 0 !== n ? n : r.bitrate
      });
    return e.channels.push(null != s ? s : i), e
  }, e => "CHANNEL_UPDATE" !== e),
  U = new D.Z(M.Wb, (e, t) => ((e = null == e ? {
    type: "SOUNDBOARD_SOUNDS_RECEIVED",
    updates: []
  } : e).updates.push({
    guildId: t.guild_id,
    sounds: t.soundboard_sounds.map(e => ({
      name: e.name,
      soundId: e.sound_id,
      emojiName: e.emoji_name,
      emojiId: e.emoji_id,
      userId: e.user_id,
      volume: e.volume,
      available: e.available,
      guildId: t.guild_id
    }))
  }), e), e => "SOUNDBOARD_SOUNDS" !== e),
  b = new D.Z(M.Wb, (e, t) => ((e = null != e ? e : {
    type: "GUILD_MEMBERS_CHUNK_BATCH",
    chunks: []
  }).chunks.push(t), e), e => "GUILD_MEMBERS_CHUNK" !== e),
  G = new D.Z(M.Wb, (e, t) => ((e = null == e ? {
    type: "PRESENCE_UPDATES",
    updates: []
  } : e).updates.push(t), e), e => "PRESENCE_UPDATE" !== e && "GUILD_MEMBERS_CHUNK" !== e),
  w = {};

function k(e, t) {
  for (let n of e) w[n] = {
    preload: () => null,
    dispatch: t
  }
}

function B(e, t, n) {
  for (let i of e) w[i] = {
    preload: t,
    dispatch: n
  }
}

function x(e) {
  return w[e]
}

function V(e) {
  o.Z.dispatch(e).catch(t => M.Wb.resetSocketOnDispatchError({
    error: t,
    action: e.type
  }))
}

function Z(e, t, n) {
  var i;
  let {
    roles: s,
    nick: o,
    avatar: a,
    avatar_decoration_data: l,
    flags: u,
    premium_since: d,
    pending: c,
    joined_at: E,
    communication_disabled_until: I,
    unusual_dm_activity_until: T
  } = n, h = m.ZP.getMember(e, t.id);
  if (!(null != h && h.nick === o && h.avatar === a && r().isEqual(h.roles, s) && (0, _.sr)(h.avatarDecoration, l)) || h.premiumSince !== d || h.isPending !== c || h.joinedAt !== E || h.communicationDisabledUntil !== I || h.flags !== u || (null !== (i = h.unusualDMActivityUntil) && void 0 !== i ? i : null) !== (null != T ? T : null)) V({
    type: "GUILD_MEMBER_ADD",
    guildId: e,
    user: t,
    roles: s,
    nick: o,
    avatar: a,
    avatarDecoration: l,
    premiumSince: d,
    isPending: c,
    joinedAt: E,
    communicationDisabledUntil: I,
    unusualDMActivityUntil: T,
    flags: u
  })
}

function H(e) {
  let {
    member: t,
    mentions: n,
    author: i,
    guild_id: r
  } = e;
  null != t && null != r && Z(r, i, t), null != n && n.forEach(e => {
    if (null != e.member && null != r) {
      let {
        member: t
      } = e;
      delete e.member, Z(r, e, t)
    }
  })
}

function F(e) {
  return e.map(e => ({
    sessionId: e.session_id,
    lastModified: e.last_modified,
    status: e.status,
    activities: e.activities,
    active: !!e.active,
    clientInfo: e.client_info,
    broadcast: e.broadcast
  }))
}

function Y(e) {
  let {
    guildId: t,
    user: n,
    status: i,
    activities: r,
    clientStatus: s,
    broadcast: o
  } = e;
  G.add({
    guildId: t,
    user: n,
    status: i,
    clientStatus: s,
    activities: r,
    broadcast: o
  })
}
B(["INITIAL_GUILD"], e => "full" === e.data_mode ? null : A.o.loadGuildIds([e.id]), e => {
  T.Z.initialGuild.measure(() => {
    s.ZP.Emitter.batched(() => {
      let t = v.Fx(e, M.Wb.identifyStartTime);
      null != R.default.getCurrentUser() && (V({
        type: "GUILD_CREATE",
        guild: t
      }), V({
        type: "VOICE_STATE_UPDATES",
        voiceStates: t.voice_states.map(e => {
          var n;
          return {
            userId: e.user_id,
            guildId: t.id,
            sessionId: e.session_id,
            channelId: e.channel_id,
            mute: e.mute,
            deaf: e.deaf,
            selfMute: e.self_mute,
            selfDeaf: e.self_deaf,
            selfVideo: e.self_video || !1,
            suppress: e.suppress,
            selfStream: e.self_stream || !1,
            requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
          }
        })
      }), P.log("Dispatched INITIAL_GUILD ".concat(e.id)))
    })
  })
}), k(["READY_SUPPLEMENTAL"], e => {
  T.Z.readySupplemental.measure(() => {
    s.ZP.Emitter.batched(() => {
      var t, n;
      e = T.Z.hydrateReadySupplemental.measure(() => v.r$(e, M.Wb.identifyStartTime));
      let i = e => e.map(e => ({
          user: e.user,
          status: e.status,
          clientStatus: e.client_status,
          activities: e.activities,
          broadcast: e.broadcast
        })),
        r = e.guilds.filter(e => !0 !== e.unavailable);
      r.forEach(e => {
        e.presences = i(e.presences || [])
      });
      let s = e.presences ? i(e.presences) : [],
        o = (null !== (t = e.lazy_private_channels) && void 0 !== t ? t : []).map(e => (0, S.q_)(e)),
        a = null !== (n = e.game_invites) && void 0 !== n ? n : [];
      T.Z.dispatchReadySupplemental.measure(() => {
        V({
          type: "CONNECTION_OPEN_SUPPLEMENTAL",
          guilds: r,
          presences: s,
          lazyPrivateChannels: o,
          gameInvites: a
        })
      });
      let l = [];
      r.forEach(e => {
        e.voice_states.forEach(t => {
          var n;
          l.push({
            userId: t.user_id,
            guildId: e.id,
            sessionId: t.session_id,
            channelId: t.channel_id,
            mute: t.mute,
            deaf: t.deaf,
            selfMute: t.self_mute,
            selfDeaf: t.self_deaf,
            selfVideo: t.self_video || !1,
            suppress: t.suppress,
            selfStream: t.self_stream || !1,
            requestToSpeakTimestamp: null !== (n = t.request_to_speak_timestamp) && void 0 !== n ? n : null
          })
        })
      }), V({
        type: "VOICE_STATE_UPDATES",
        voiceStates: l,
        initial: !0
      }), M.GC.update()
    })
  }), setTimeout(() => V({
    type: "POST_CONNECTION_OPEN"
  }), 2e3)
}), B(["READY"], e => {
  var t;
  let n = v.Eb(),
    i = e.guilds.filter(e => {
      var t, n;
      return !e.unavailable && "partial" === e.data_mode && (!!((null !== (t = e.partial_updates.channels) && void 0 !== t ? t : []).length > 0) || !!((null !== (n = e.partial_updates.deleted_channel_ids) && void 0 !== n ? n : []).length > 0) || void 0)
    }).map(e => e.id);
  return Promise.all([n, null !== (t = A.o.loadGuildIds(i)) && void 0 !== t ? t : Promise.resolve()]).then(e => {
    let [t] = e;
    return t
  })
}, (e, t, n) => {
  if (e.user.bot) {
    V({
      type: "LOGOUT"
    });
    return
  }
  T.Z.ready.measure(() => {
    s.ZP.Emitter.batched(() => {
      let t = (e = T.Z.hydrateReady.measure(() => v.IM(e, M.Wb.identifyStartTime, n))).private_channels.map(e => (0, S.q_)(e)),
        i = e.guilds.filter(e => !0 === e.unavailable && !0 !== e.geo_restricted).map(e => e.id),
        r = e.guilds.filter(e => !0 !== e.unavailable),
        s = e.guilds.filter(e => !0 === e.geo_restricted);
      r.forEach(e => {
        e.presences = []
      });
      let o = null == e.user_settings_proto ? void 0 : (0, h.ac)(e.user_settings_proto);
      T.Z.dispatchReady.measure(() => {
        var n;
        V({
          type: "CONNECTION_OPEN",
          sessionId: e.session_id,
          authSessionIdHash: e.auth_session_id_hash,
          user: e.user,
          users: e.users,
          guilds: r,
          initialPrivateChannels: t,
          unavailableGuilds: i,
          readState: e.read_state,
          userGuildSettings: e.user_guild_settings,
          tutorial: e.tutorial,
          relationships: e.relationships,
          friendSuggestionCount: e.friend_suggestion_count,
          presences: e.presences,
          analyticsToken: e.analytics_token,
          experiments: e.experiments,
          connectedAccounts: e.connected_accounts,
          guildExperiments: e.guild_experiments,
          requiredAction: e.required_action,
          consents: e.consents,
          sessions: F(e.sessions || []),
          pendingPayments: e.pending_payments,
          countryCode: null !== (n = e.country_code) && void 0 !== n ? n : void 0,
          guildJoinRequests: e.guild_join_requests || [],
          userSettingsProto: o,
          apiCodeVersion: e.api_code_version,
          auth: e.auth,
          notificationSettings: {
            flags: e.notification_settings.flags
          },
          geoRestrictedGuilds: s,
          explicitContentScanVersion: e.explicit_content_scan_version
        })
      }), null != e.auth_token && V({
        type: "UPDATE_TOKEN",
        token: e.auth_token,
        userId: e.user.id
      }), M.RR.update(), M.GC.update()
    })
  })
}), k(["RESUMED"], () => {
  M.RR.forceUpdate(), M.GC.forceUpdate(), V({
    type: "CONNECTION_RESUMED"
  })
}), k(["TYPING_START"], e => {
  null != e.member && Z(e.guild_id, e.member.user, e.member), V({
    type: "TYPING_START",
    channelId: e.channel_id,
    userId: e.user_id
  })
}), k(["ACTIVITY_START"], e => {
  V({
    type: "ACTIVITY_START",
    userId: e.user_id,
    activity: e.activity
  })
}), k(["ACTIVITY_USER_ACTION"], e => {
  V({
    type: "ACTIVITY_USER_ACTION",
    actionType: e.action_type,
    user: e.user,
    applicationId: e.application_id,
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), B(["MESSAGE_CREATE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  H(e), null != e.author && V({
    type: "MESSAGE_CREATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    message: e,
    optimistic: !1,
    isPushNotification: !1
  })
}), B(["MESSAGE_UPDATE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  H(e), V({
    type: "MESSAGE_UPDATE",
    guildId: e.guild_id,
    message: e
  })
}), B(["MESSAGE_DELETE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "MESSAGE_DELETE",
    guildId: e.guild_id,
    id: e.id,
    channelId: e.channel_id
  })
}), B(["MESSAGE_DELETE_BULK"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "MESSAGE_DELETE_BULK",
    guildId: e.guild_id,
    ids: e.ids,
    channelId: e.channel_id
  })
}), B(["MESSAGE_ACK"], e => A.o.loadGuildFromChannelId(e.channel_id), e => {
  V({
    type: "MESSAGE_ACK",
    channelId: e.channel_id,
    messageId: e.message_id,
    manual: e.manual,
    newMentionCount: e.mention_count,
    version: e.version
  })
}), k(["GUILD_FEATURE_ACK"], e => {
  V({
    type: "GUILD_FEATURE_ACK",
    id: e.resource_id,
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), k(["USER_NON_CHANNEL_ACK"], e => {
  V({
    type: "USER_NON_CHANNEL_ACK",
    ackType: e.ack_type,
    ackedId: e.entity_id
  })
}), B(["CHANNEL_PINS_ACK"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "CHANNEL_PINS_ACK",
    channelId: e.channel_id,
    timestamp: e.timestamp,
    version: e.version
  })
}), B(["CHANNEL_PINS_UPDATE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "CHANNEL_PINS_UPDATE",
    channelId: e.channel_id,
    lastPinTimestamp: e.last_pin_timestamp
  })
}), B(["CHANNEL_CREATE", "CHANNEL_DELETE"], e => A.o.loadGuildIds([e.guild_id]), (e, t) => {
  V({
    type: t,
    channel: (0, S.q_)(e)
  })
}), k(["VOICE_CHANNEL_STATUS_UPDATE"], (e, t) => {
  V({
    type: t,
    id: e.id,
    guildId: e.guild_id,
    status: e.status
  })
}), k(["CHANNEL_STATUSES"], (e, t) => {
  V({
    type: t,
    guildId: e.guild_id,
    channels: e.channels
  })
}), B(["CHANNEL_UPDATE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  y.add(e)
}), B(["THREAD_CREATE", "THREAD_UPDATE", "THREAD_DELETE"], e => A.o.loadGuildIds([e.guild_id]), (e, t) => {
  let {
    newly_created: n,
    ...i
  } = e;
  V({
    type: t,
    isNewlyCreated: n,
    channel: (0, S.q_)(i)
  })
}), B(["THREAD_LIST_SYNC"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "THREAD_LIST_SYNC",
    guildId: e.guild_id,
    threads: e.threads.map(e => {
      let t = A.Z.getChannel(e.parent_id);
      return null != t && (e.nsfw = t.nsfw, e.parentChannelThreadType = t.type), (0, S.q_)(e)
    }),
    mostRecentMessages: e.most_recent_messages,
    members: e.members ? r().map(e.members, I.Z) : void 0,
    channelIds: e.channel_ids
  })
}), k(["THREAD_MEMBER_UPDATE"], e => {
  V({
    type: "THREAD_MEMBER_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    userId: e.user_id,
    flags: e.flags,
    muted: e.muted,
    muteConfig: e.mute_config,
    joinTimestamp: e.join_timestamp
  })
}), k(["THREAD_MEMBERS_UPDATE"], e => {
  var t;
  V({
    type: "THREAD_MEMBERS_UPDATE",
    id: e.id,
    guildId: e.guild_id,
    memberCount: e.member_count,
    addedMembers: null === (t = e.added_members) || void 0 === t ? void 0 : t.map(t => ({
      id: t.id,
      guildId: e.guild_id,
      userId: t.user_id,
      flags: t.flags,
      joinTimestamp: t.join_timestamp
    })),
    removedMemberIds: e.removed_member_ids,
    memberIdsPreview: e.member_ids_preview
  })
}), k(["FORUM_UNREADS"], e => {
  !e.permission_denied && V({
    type: "FORUM_UNREADS",
    channelId: e.channel_id,
    threads: e.threads.map(e => ({
      threadId: e.thread_id,
      missing: e.missing,
      count: e.count
    }))
  })
}), k(["SOUNDBOARD_SOUNDS"], e => {
  U.add(e)
}), k(["CHANNEL_RECIPIENT_ADD", "CHANNEL_RECIPIENT_REMOVE"], (e, t) => {
  let n = A.Z.getBasicChannel(e.channel_id);
  V({
    type: t,
    channelId: e.channel_id,
    user: e.user,
    nick: e.nick,
    isMember: null != n
  })
}), B(["GUILD_CREATE"], e => "full" === e.data_mode ? null : A.o.loadGuildIds([e.id]), e => {
  if (e.unavailable) V({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  });
  else {
    let t = v.J2(e);
    a.Z.createGuild(t), V({
      type: "VOICE_STATE_UPDATES",
      voiceStates: t.voice_states.map(e => {
        var n;
        return {
          userId: e.user_id,
          guildId: t.id,
          sessionId: e.session_id,
          channelId: e.channel_id,
          mute: e.mute,
          deaf: e.deaf,
          selfMute: e.self_mute,
          selfDeaf: e.self_deaf,
          selfVideo: e.self_video || !1,
          suppress: e.suppress,
          selfStream: e.self_stream || !1,
          requestToSpeakTimestamp: null !== (n = e.request_to_speak_timestamp) && void 0 !== n ? n : null
        }
      })
    })
  }
}), k(["GUILD_UPDATE"], e => {
  V({
    type: "GUILD_UPDATE",
    guild: e
  }), e.unavailable && V({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), k(["GUILD_DELETE"], e => {
  V({
    type: "GUILD_DELETE",
    guild: e
  }), e.geo_restricted ? V({
    type: "GUILD_GEO_RESTRICTED",
    guildId: e.id,
    icon: e.icon,
    name: e.name
  }) : e.unavailable && V({
    type: "GUILD_UNAVAILABLE",
    guildId: e.id
  })
}), k(["GUILD_MEMBERS_CHUNK"], e => {
  s.ZP.Emitter.batched(() => {
    b.add({
      guildId: e.guild_id,
      members: e.members,
      notFound: e.not_found
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: i,
        client_status: r,
        activities: s,
        broadcast: o
      } = t;
      return Y({
        guildId: e.guild_id,
        user: n,
        status: i,
        activities: s,
        clientStatus: r,
        broadcast: o
      })
    }), D.Z.flush("GUILD_MEMBERS_CHUNK")
  })
}), k(["THREAD_MEMBER_LIST_UPDATE"], e => {
  s.ZP.Emitter.batched(() => {
    V({
      type: "THREAD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      threadId: e.thread_id,
      members: e.members
    }), null != e.presences && e.presences.forEach(t => {
      let {
        user: n,
        status: i,
        client_status: r,
        activities: s,
        broadcast: o
      } = t;
      return Y({
        guildId: e.guild_id,
        user: n,
        status: i,
        activities: s,
        clientStatus: r,
        broadcast: o
      })
    }), D.Z.flush()
  })
}), k(["GUILD_BAN_ADD", "GUILD_BAN_REMOVE", "GUILD_MEMBER_ADD", "GUILD_MEMBER_UPDATE", "GUILD_MEMBER_REMOVE"], (e, t) => {
  V({
    type: t,
    guildId: e.guild_id,
    user: e.user,
    avatar: e.avatar,
    avatarDecoration: e.avatar_decoration_data,
    roles: e.roles,
    nick: e.nick,
    premiumSince: e.premium_since,
    isPending: e.pending,
    joinedAt: e.joined_at,
    communicationDisabledUntil: e.communication_disabled_until,
    unusualDMActivityUntil: e.unusual_dm_activity_until,
    flags: e.flags
  })
}), B(["GUILD_ROLE_CREATE", "GUILD_ROLE_UPDATE"], e => A.o.loadGuildIds([e.guild_id]), (e, t) => {
  V({
    type: t,
    guildId: e.guild_id,
    role: e.role
  })
}), B(["GUILD_ROLE_DELETE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "GUILD_ROLE_DELETE",
    guildId: e.guild_id,
    roleId: e.role_id,
    version: e.version
  })
}), k(["GUILD_EMOJIS_UPDATE"], e => {
  V({
    type: "GUILD_EMOJIS_UPDATE",
    guildId: e.guild_id,
    emojis: e.emojis
  })
}), k(["GUILD_STICKERS_UPDATE"], e => {
  V({
    type: "GUILD_STICKERS_UPDATE",
    guildId: e.guild_id,
    stickers: e.stickers
  })
}), k(["GUILD_INTEGRATIONS_UPDATE"], e => {
  V({
    type: "GUILD_INTEGRATIONS_UPDATE",
    guildId: e.guild_id
  })
}), k(["INTEGRATION_CREATE"], e => {
  V({
    type: "INTEGRATION_CREATE",
    application: e.application,
    guildId: e.guild_id
  })
}), k(["INTEGRATION_DELETE"], e => {
  V({
    type: "INTEGRATION_DELETE",
    applicationId: e.application_id,
    guildId: e.guild_id
  })
}), k(["USER_UPDATE"], e => {
  V({
    type: "CURRENT_USER_UPDATE",
    user: e
  })
}), k(["USER_SETTINGS_PROTO_UPDATE"], e => {
  let t = (0, h.kI)(e.settings.type, e.settings.proto);
  if (null != t) {
    if ("string" == typeof t) throw console.error("Invalid proto: |".concat(t, "| |").concat(e.settings.proto, "|")), console.error({
      parsed: t,
      wire: e.settings.proto,
      type: e.settings.type
    }), Error("UserSettingsProto must not be a string");
    V({
      type: "USER_SETTINGS_PROTO_UPDATE",
      settings: {
        proto: t,
        type: e.settings.type
      },
      partial: e.partial
    })
  }
}), k(["USER_GUILD_SETTINGS_UPDATE"], e => {
  V({
    type: "USER_GUILD_SETTINGS_FULL_UPDATE",
    userGuildSettings: [e]
  })
}), k(["USER_CONNECTIONS_UPDATE"], () => {
  V({
    type: "USER_CONNECTIONS_UPDATE"
  })
}), k(["USER_REQUIRED_ACTION_UPDATE"], e => {
  V({
    type: "USER_REQUIRED_ACTION_UPDATE",
    requiredAction: e.required_action
  })
}), k(["USER_NOTE_UPDATE"], e => {
  V({
    type: "USER_NOTE_UPDATE",
    ...e
  })
}), k(["RELATIONSHIP_ADD"], e => {
  V({
    type: "RELATIONSHIP_ADD",
    relationship: {
      id: e.id,
      type: e.type,
      user: e.user,
      since: e.since,
      nickname: e.nickname
    },
    shouldNotify: !0 === e.should_notify
  })
}), k(["RELATIONSHIP_REMOVE"], e => {
  V({
    type: "RELATIONSHIP_REMOVE",
    relationship: e
  })
}), k(["RELATIONSHIP_UPDATE"], e => {
  V({
    type: "RELATIONSHIP_UPDATE",
    relationship: e
  })
}), k(["PRESENCE_UPDATE"], e => {
  Y({
    guildId: e.guild_id,
    user: e.user,
    status: e.status,
    activities: e.activities,
    clientStatus: e.client_status,
    broadcast: e.broadcast
  })
}), k(["PRESENCES_REPLACE"], e => {
  V({
    type: "PRESENCES_REPLACE",
    presences: e
  })
}), k(["SESSIONS_REPLACE"], e => {
  V({
    type: "SESSIONS_REPLACE",
    sessions: F(e)
  })
}), k(["VOICE_STATE_UPDATE"], e => {
  var t;
  null != e.member && Z(e.guild_id, e.member.user, e.member), V({
    type: "VOICE_STATE_UPDATES",
    voiceStates: [{
      userId: e.user_id,
      guildId: e.guild_id,
      sessionId: e.session_id,
      channelId: e.channel_id,
      mute: e.mute,
      deaf: e.deaf,
      selfMute: e.self_mute,
      selfDeaf: e.self_deaf,
      selfVideo: e.self_video || !1,
      suppress: e.suppress,
      selfStream: e.self_stream || !1,
      requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
      oldChannelId: C.Z.getUserVoiceChannelId(e.guild_id, e.user_id)
    }]
  })
}), k(["VOICE_SERVER_UPDATE"], e => {
  V({
    type: "VOICE_SERVER_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    endpoint: e.endpoint,
    token: e.token
  })
}), k(["CALL_CREATE"], e => {
  V({
    type: "CALL_CREATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    embeddedActivities: e.embedded_activities,
    region: e.region,
    ringing: e.ringing
  });
  let t = e.voice_states;
  null != t && V({
    type: "VOICE_STATE_UPDATES",
    voiceStates: t.map(e => {
      var t;
      return {
        userId: e.user_id,
        guildId: null,
        sessionId: e.session_id,
        channelId: e.channel_id,
        mute: e.mute,
        deaf: e.deaf,
        selfMute: e.self_mute,
        selfDeaf: e.self_deaf,
        selfVideo: e.self_video || !1,
        suppress: e.suppress,
        selfStream: e.self_stream || !1,
        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null
      }
    })
  })
}), k(["CALL_UPDATE"], e => {
  V({
    type: "CALL_UPDATE",
    channelId: e.channel_id,
    messageId: e.message_id,
    region: e.region,
    ringing: e.ringing
  })
}), k(["CALL_DELETE"], e => {
  V({
    type: "CALL_DELETE",
    channelId: e.channel_id,
    unavailable: e.unavailable
  })
}), k(["OAUTH2_TOKEN_REVOKE"], e => {
  V({
    type: "OAUTH2_TOKEN_REVOKE",
    accessToken: e.access_token
  })
}), k(["RECENT_MENTION_DELETE"], e => {
  V({
    type: "RECENT_MENTION_DELETE",
    id: e.message_id
  })
}), k(["FRIEND_SUGGESTION_CREATE"], e => {
  V({
    type: "FRIEND_SUGGESTION_CREATE",
    suggestion: e
  })
}), k(["FRIEND_SUGGESTION_DELETE"], e => {
  V({
    type: "FRIEND_SUGGESTION_DELETE",
    suggestedUserId: e.suggested_user_id
  })
}), k(["WEBHOOKS_UPDATE"], e => {
  V({
    type: "WEBHOOKS_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id
  })
}), k(["MESSAGE_REACTION_ADD", "MESSAGE_REACTION_REMOVE"], (e, t) => {
  V({
    type: t,
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: e.emoji,
    colors: e.burst_colors,
    reactionType: e.type
  })
}), k(["MESSAGE_POLL_VOTE_ADD", "MESSAGE_POLL_VOTE_REMOVE"], (e, t) => {
  V({
    type: "MESSAGE_POLL_VOTE_ADD" === t ? "MESSAGE_REACTION_ADD" : "MESSAGE_REACTION_REMOVE",
    channelId: e.channel_id,
    messageId: e.message_id,
    userId: e.user_id,
    emoji: {
      id: e.answer_id,
      name: ""
    },
    reactionType: E.O.VOTE
  })
}), k(["MESSAGE_REACTION_REMOVE_ALL"], e => {
  V({
    type: "MESSAGE_REACTION_REMOVE_ALL",
    channelId: e.channel_id,
    messageId: e.message_id
  })
}), k(["MESSAGE_REACTION_REMOVE_EMOJI"], e => {
  V({
    type: "MESSAGE_REACTION_REMOVE_EMOJI",
    channelId: e.channel_id,
    messageId: e.message_id,
    emoji: e.emoji
  })
}), k(["MESSAGE_REACTION_ADD_MANY"], e => {
  V({
    type: "MESSAGE_REACTION_ADD_MANY",
    channelId: e.channel_id,
    messageId: e.message_id,
    reactions: e.reactions
  })
}), k(["PAYMENT_UPDATE"], e => {
  V({
    type: "PAYMENT_UPDATE",
    payment: e
  })
}), k(["ENTITLEMENT_CREATE", "ENTITLEMENT_UPDATE", "ENTITLEMENT_DELETE"], (e, t) => {
  V({
    type: t,
    entitlement: e
  })
}), k(["USER_PAYMENT_SOURCES_UPDATE"], () => {
  O.Z.hasLayers() && (n(355467).tZ(), l.Gn(p.Z.getFetchedSKUIDs()))
}), k(["USER_SUBSCRIPTIONS_UPDATE"], () => {
  u.k(), O.Z.hasLayers() && n(355467).jg()
}), k(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_CREATE"], e => {
  V({
    type: "GUILD_BOOST_SLOT_CREATE",
    guildBoostSlot: f.Z.createFromServer(e, g.ZP.getSubscriptionById(e.subscription_id))
  })
}), k(["USER_PREMIUM_GUILD_SUBSCRIPTION_SLOT_UPDATE"], e => {
  V({
    type: "GUILD_BOOST_SLOT_UPDATE",
    guildBoostSlot: f.Z.createFromServer(e, g.ZP.getSubscriptionById(e.subscription_id))
  })
}), k(["BILLING_POPUP_BRIDGE_CALLBACK"], e => {
  V({
    type: "BILLING_POPUP_BRIDGE_CALLBACK",
    paymentSourceType: e.payment_source_type,
    state: e.state,
    path: e.path,
    query: e.query
  })
}), k(["USER_PAYMENT_BROWSER_CHECKOUT_DONE"], e => {
  V({
    type: "USER_PAYMENT_BROWSER_CHECKOUT_DONE",
    loadId: e.load_id
  })
}), k(["USER_PAYMENT_CLIENT_ADD"], e => {
  (0, L.L)().then(t => {
    let n = e.purchase_token_hash;
    n === t && V({
      type: "USER_PAYMENT_CLIENT_ADD",
      purchaseTokenHash: n,
      expiresAt: e.expires_at
    })
  })
}), k(["GUILD_MEMBER_LIST_UPDATE"], e => {
  s.ZP.Emitter.batched(() => {
    let t = t => {
      if (null == t.member) return;
      let {
        member: n
      } = t;
      if (Z(e.guild_id, n.user, n), null == n.presence) return;
      let {
        presence: i
      } = n;
      Y({
        guildId: e.guild_id,
        user: i.user,
        status: i.status,
        activities: i.activities,
        clientStatus: i.client_status,
        broadcast: i.broadcast
      })
    };
    e.ops.forEach(e => {
      let {
        op: n,
        items: i,
        item: r
      } = e;
      switch (n) {
        case "SYNC":
          i.forEach(t);
          break;
        case "UPDATE":
        case "INSERT":
          t(r)
      }
    }), D.Z.flush(), V({
      type: "GUILD_MEMBER_LIST_UPDATE",
      guildId: e.guild_id,
      id: e.id,
      ops: e.ops,
      groups: e.groups,
      memberCount: e.member_count,
      onlineCount: e.online_count
    })
  })
}), k(["GIFT_CODE_UPDATE"], e => {
  V({
    type: "GIFT_CODE_UPDATE",
    uses: e.uses,
    code: e.code
  })
}), k(["GIFT_CODE_CREATE"], e => {
  V({
    type: "GIFT_CODE_CREATE",
    giftCode: e
  })
}), k(["USER_ACHIEVEMENT_UPDATE"], e => {
  V({
    type: "USER_ACHIEVEMENT_UPDATE",
    userAchievement: e
  })
}), k(["LIBRARY_APPLICATION_UPDATE"], e => {
  V({
    type: "LIBRARY_APPLICATION_UPDATE",
    libraryApplication: e
  })
}), k(["STREAM_CREATE"], e => {
  V({
    type: "STREAM_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), k(["STREAM_SERVER_UPDATE"], e => {
  V({
    type: "STREAM_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), k(["STREAM_UPDATE"], e => {
  V({
    type: "STREAM_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), k(["STREAM_DELETE"], e => {
  V({
    type: "STREAM_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), k(["GENERIC_PUSH_NOTIFICATION_SENT"], e => {
  V({
    type: "GENERIC_PUSH_NOTIFICATION_SENT",
    title: e.title,
    body: e.body,
    trackingType: e.tracking_type,
    icon: e.icon,
    route: e.route,
    tag: e.tag
  })
}), k(["NOTIFICATION_CENTER_ITEM_CREATE"], e => {
  V({
    type: "NOTIFICATION_CENTER_ITEM_CREATE",
    item: e
  })
}), k(["NOTIFICATION_CENTER_ITEM_DELETE"], e => {
  V({
    type: "NOTIFICATION_CENTER_ITEM_DELETE",
    id: e.id
  })
}), k(["NOTIFICATION_CENTER_ITEMS_ACK"], e => {
  V({
    type: "NOTIFICATION_CENTER_ITEMS_ACK",
    ids: [e.id],
    optimistic: !1
  })
}), k(["NOTIFICATION_CENTER_ITEM_COMPLETED"], e => {
  V({
    type: "NOTIFICATION_CENTER_ITEM_COMPLETED",
    item_enum: e.item_enum
  })
}), k(["QUESTS_USER_STATUS_UPDATE"], e => {
  V({
    type: "QUESTS_USER_STATUS_UPDATE",
    user_status: e.user_status
  })
}), k(["APPLICATION_COMMAND_PERMISSIONS_UPDATE"], (e, t) => {
  V({
    type: t,
    guildId: e.guild_id
  })
}), k(["GUILD_APPLICATION_COMMAND_INDEX_UPDATE"], e => {
  V({
    type: "GUILD_APPLICATION_COMMAND_INDEX_UPDATE",
    guildId: e.guild_id,
    version: e.version
  })
}), k(["GUILD_JOIN_REQUEST_CREATE"], e => {
  V({
    type: "GUILD_JOIN_REQUEST_CREATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), k(["GUILD_JOIN_REQUEST_UPDATE"], e => {
  V({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    request: e.request,
    status: e.status,
    guildId: e.guild_id
  })
}), k(["GUILD_JOIN_REQUEST_DELETE"], e => {
  V({
    type: "GUILD_JOIN_REQUEST_DELETE",
    id: e.id,
    userId: e.user_id,
    guildId: e.guild_id
  })
}), k(["INTERACTION_CREATE"], e => {
  V({
    type: "INTERACTION_CREATE",
    interactionId: e.id,
    nonce: e.nonce
  })
}), k(["INTERACTION_SUCCESS"], e => {
  V({
    type: "INTERACTION_SUCCESS",
    interactionId: e.id,
    nonce: e.nonce
  })
}), k(["INTERACTION_FAILURE"], e => {
  V({
    type: "INTERACTION_FAILURE",
    nonce: e.nonce
  })
}), k(["APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE"], e => {
  V({
    type: "APPLICATION_COMMAND_AUTOCOMPLETE_RESPONSE",
    choices: e.choices,
    nonce: e.nonce
  })
}), k(["INTERACTION_MODAL_CREATE"], e => {
  V({
    type: "INTERACTION_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    components: (0, c.uZ)(e.components),
    nonce: e.nonce
  })
}), k(["INTERACTION_IFRAME_MODAL_CREATE"], e => {
  V({
    type: "INTERACTION_IFRAME_MODAL_CREATE",
    id: e.id,
    channelId: e.channel_id,
    customId: e.custom_id,
    application: e.application,
    title: e.title,
    iframePath: e.iframe_path,
    modalSize: e.modal_size,
    nonce: e.nonce
  })
}), k(["STAGE_INSTANCE_CREATE"], e => {
  V({
    type: "STAGE_INSTANCE_CREATE",
    instance: e
  })
}), k(["STAGE_INSTANCE_UPDATE"], e => {
  V({
    type: "STAGE_INSTANCE_UPDATE",
    instance: e
  })
}), k(["STAGE_INSTANCE_DELETE"], e => {
  V({
    type: "STAGE_INSTANCE_DELETE",
    instance: e
  })
}), k(["GUILD_SCHEDULED_EVENT_CREATE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_CREATE",
    guildScheduledEvent: e
  })
}), k(["GUILD_SCHEDULED_EVENT_UPDATE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_UPDATE",
    guildScheduledEvent: e
  })
}), k(["GUILD_SCHEDULED_EVENT_DELETE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_DELETE",
    guildScheduledEvent: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE",
    eventException: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE",
    eventException: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE",
    eventException: e
  })
}), k(["GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE",
    eventId: e.event_id
  })
}), k(["GUILD_SCHEDULED_EVENT_USER_ADD"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_USER_ADD",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), k(["GUILD_SCHEDULED_EVENT_USER_REMOVE"], e => {
  V({
    type: "GUILD_SCHEDULED_EVENT_USER_REMOVE",
    userId: e.user_id,
    guildId: e.guild_id,
    guildEventId: e.guild_scheduled_event_id,
    guildEventExceptionId: e.guild_scheduled_event_exception_id,
    response: e.response
  })
}), k(["GUILD_DIRECTORY_ENTRY_CREATE"], e => {
  V({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), k(["GUILD_DIRECTORY_ENTRY_UPDATE"], e => {
  V({
    type: "GUILD_DIRECTORY_ENTRY_UPDATE",
    channelId: e.directory_channel_id,
    entry: e
  })
}), k(["GUILD_DIRECTORY_ENTRY_DELETE"], e => {
  V({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e.directory_channel_id,
    guildId: e.entity_id
  })
}), k(["AUTO_MODERATION_MENTION_RAID_DETECTION"], e => {
  V({
    type: "AUTO_MODERATION_MENTION_RAID_DETECTION",
    guildId: e.guild_id,
    decisionId: e.decision_id,
    suspiciousMentionActivityUntil: e.suspicious_mention_activity_until
  })
}), k(["VOICE_CHANNEL_EFFECT_SEND"], e => {
  V({
    type: "VOICE_CHANNEL_EFFECT_SEND",
    emoji: e.emoji,
    channelId: e.channel_id,
    userId: e.user_id,
    animationType: e.animation_type,
    animationId: e.animation_id,
    soundId: e.sound_id,
    soundVolume: e.sound_volume,
    points: e.points,
    streamerId: e.streamer_id,
    lineId: e.line_id,
    emojiHose: e.emoji_hose
  })
}), k(["GUILD_SOUNDBOARD_SOUND_CREATE"], e => {
  V({
    type: "GUILD_SOUNDBOARD_SOUND_CREATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new N.Z(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), k(["GUILD_SOUNDBOARD_SOUND_UPDATE"], e => {
  V({
    type: "GUILD_SOUNDBOARD_SOUND_UPDATE",
    sound: {
      guildId: e.guild_id,
      name: e.name,
      soundId: e.sound_id,
      user: new N.Z(e.user),
      userId: e.user_id,
      volume: e.volume,
      emojiId: e.emoji_id,
      emojiName: e.emoji_name,
      available: e.available
    }
  })
}), k(["GUILD_SOUNDBOARD_SOUND_DELETE"], e => {
  V({
    type: "GUILD_SOUNDBOARD_SOUND_DELETE",
    guildId: e.guild_id,
    soundId: e.sound_id
  })
}), k(["GUILD_SOUNDBOARD_SOUNDS_UPDATE"], e => {
  V({
    type: "GUILD_SOUNDBOARD_SOUNDS_UPDATE",
    guildId: e.guild_id,
    soundboardSounds: e.soundboard_sounds.map(t => ({
      name: t.name,
      soundId: t.sound_id,
      emojiName: t.emoji_name,
      emojiId: t.emoji_id,
      userId: t.user_id,
      volume: t.volume,
      available: t.available,
      guildId: e.guild_id
    }))
  })
}), B(["EMBEDDED_ACTIVITY_UPDATE"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "EMBEDDED_ACTIVITY_UPDATE",
    guildId: e.guild_id,
    channelId: e.channel_id,
    embeddedActivity: e.embedded_activity,
    connections: e.connections,
    updateCode: e.update_code
  })
}), B(["EMBEDDED_ACTIVITY_UPDATE_V2"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "EMBEDDED_ACTIVITY_UPDATE_V2",
    applicationId: e.application_id,
    launchId: e.launch_id,
    compositeInstanceId: e.composite_instance_id,
    location: e.location,
    participants: e.participants
  })
}), k(["AUTH_SESSION_CHANGE"], e => {
  V({
    type: "AUTH_SESSION_CHANGE",
    authSessionIdHash: e.auth_session_id_hash
  })
}), k(["USER_CONNECTIONS_LINK_CALLBACK"], e => {
  V({
    type: "USER_CONNECTIONS_LINK_CALLBACK",
    provider: e.provider,
    callbackCode: e.callback_code,
    callbackState: e.callback_state
  })
}), k(["DELETED_ENTITY_IDS"], e => {
  V({
    type: "DELETED_ENTITY_IDS",
    ...e
  })
}), k(["CONSOLE_COMMAND_UPDATE"], e => {
  V({
    type: "CONSOLE_COMMAND_UPDATE",
    id: e.id,
    result: e.result,
    error: e.error
  })
}), B(["PASSIVE_UPDATE_V2"], e => A.o.loadGuildIds([e.guild_id]), e => {
  V({
    type: "PASSIVE_UPDATE_V2",
    guildId: e.guild_id,
    members: e.updated_members,
    channels: e.updated_channels.map(e => ({
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp
    })),
    voiceStates: e.updated_voice_states.map(e => {
      var t;
      return {
        channelId: e.channel_id,
        deaf: e.deaf || !1,
        mute: e.mute || !1,
        requestToSpeakTimestamp: null !== (t = e.request_to_speak_timestamp) && void 0 !== t ? t : null,
        selfDeaf: e.self_deaf || !1,
        selfMute: e.self_mute || !1,
        selfStream: e.self_stream || !1,
        selfVideo: e.self_video || !1,
        sessionId: e.session_id,
        suppress: e.suppress,
        userId: e.user_id
      }
    }),
    removedVoiceStateUsers: e.removed_voice_states
  })
}), k(["PRIVATE_CHANNEL_INTEGRATION_CREATE"], e => {
  V({
    type: "PRIVATE_CHANNEL_INTEGRATION_CREATE",
    integration: e
  })
}), k(["PRIVATE_CHANNEL_INTEGRATION_UPDATE"], e => {
  V({
    type: "PRIVATE_CHANNEL_INTEGRATION_UPDATE",
    integration: e
  })
}), k(["PRIVATE_CHANNEL_INTEGRATION_DELETE"], e => {
  V({
    type: "PRIVATE_CHANNEL_INTEGRATION_DELETE",
    channelId: e.channel_id,
    applicationId: e.application_id
  })
}), k(["CREATOR_MONETIZATION_RESTRICTIONS_UPDATE"], e => {
  V({
    type: "GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS",
    guildId: e.guild_id,
    restrictions: e.restrictions
  })
}), k(["BILLING_REFERRAL_TRIAL_OFFER_UPDATE"], e => {
  V({
    type: "BILLING_REFERRAL_TRIAL_OFFER_UPDATE",
    userTrialOfferId: e.user_trial_offer_id,
    recipientId: e.recipient_id
  })
}), k(["SPEED_TEST_CREATE"], e => {
  V({
    type: "SPEED_TEST_CREATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    rtcServerId: e.rtc_server_id,
    paused: e.paused
  })
}), k(["SPEED_TEST_SERVER_UPDATE"], e => {
  V({
    type: "SPEED_TEST_SERVER_UPDATE",
    streamKey: e.stream_key,
    endpoint: e.endpoint,
    token: e.token
  })
}), k(["SPEED_TEST_UPDATE"], e => {
  V({
    type: "SPEED_TEST_UPDATE",
    streamKey: e.stream_key,
    region: e.region,
    viewerIds: e.viewer_ids,
    paused: e.paused
  })
}), k(["SPEED_TEST_DELETE"], e => {
  V({
    type: "SPEED_TEST_DELETE",
    streamKey: e.stream_key,
    unavailable: e.unavailable,
    reason: e.reason
  })
}), k(["LAST_MESSAGES"], e => {
  V({
    type: "MESSAGE_PREVIEWS_LOADED",
    guildId: e.guild_id,
    messages: e.messages
  })
}), k(["AUTHENTICATOR_UPDATE"], e => {
  V({
    type: "AUTHENTICATOR_UPDATE",
    credential: e
  })
}), k(["AUTHENTICATOR_CREATE"], e => {
  V({
    type: "AUTHENTICATOR_CREATE",
    credential: e
  })
}), k(["AUTHENTICATOR_DELETE"], e => {
  V({
    type: "AUTHENTICATOR_DELETE",
    credential: e
  })
}), k(["NOTIFICATION_SETTINGS_UPDATE"], e => {
  V({
    type: "NOTIFICATION_SETTINGS_UPDATE",
    settings: {
      flags: e.flags
    }
  })
}), k(["GAME_INVITE_CREATE"], e => {
  V({
    type: "GAME_INVITE_CREATE",
    gameInvite: e
  })
}), k(["GAME_INVITE_DELETE"], e => {
  V({
    type: "GAME_INVITE_DELETE",
    inviteId: e.invite_id
  })
}), k(["GAME_INVITE_DELETE_MANY"], e => {
  V({
    type: "GAME_INVITE_DELETE_MANY",
    inviteIds: e.invite_ids
  })
}), k(["CONVERSATION_SUMMARY_UPDATE"], e => {
  V({
    type: "CONVERSATION_SUMMARY_UPDATE",
    ...e
  })
}), k(["PREMIUM_MARKETING_PREVIEW"], e => {
  V({
    type: "PREMIUM_MARKETING_PREVIEW",
    properties: e.properties
  })
}), k(["USER_APPLICATION_UPDATE"], e => {
  V({
    type: "USER_APPLICATION_UPDATE",
    applicationId: e.application_id
  })
}), k(["USER_APPLICATION_REMOVE"], e => {
  V({
    type: "USER_APPLICATION_REMOVE",
    applicationId: e.application_id
  })
}), k(["DM_SETTINGS_UPSELL_SHOW"], e => {
  V({
    type: "DM_SETTINGS_UPSELL_SHOW",
    guildId: e.guild_id
  })
}), k(["CONTENT_INVENTORY_INBOX_STALE"], e => {
  V({
    type: "CONTENT_INVENTORY_INBOX_STALE",
    refreshAfterMs: e.refresh_after_ms
  })
})