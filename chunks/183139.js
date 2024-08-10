n.d(t, {
  Z: function() {
return u;
  },
  j: function() {
return r;
  }
}), n(789020), n(47120);
var r, i, a = n(836560),
  s = n(936349),
  o = n(709054),
  l = n(981631);
(i = r || (r = {}))[i.DISPATCH = 0] = 'DISPATCH', i[i.HEARTBEAT = 1] = 'HEARTBEAT', i[i.IDENTIFY = 2] = 'IDENTIFY', i[i.PRESENCE_UPDATE = 3] = 'PRESENCE_UPDATE', i[i.VOICE_STATE_UPDATE = 4] = 'VOICE_STATE_UPDATE', i[i.VOICE_SERVER_PING = 5] = 'VOICE_SERVER_PING', i[i.RESUME = 6] = 'RESUME', i[i.RECONNECT = 7] = 'RECONNECT', i[i.REQUEST_GUILD_MEMBERS = 8] = 'REQUEST_GUILD_MEMBERS', i[i.INVALID_SESSION = 9] = 'INVALID_SESSION', i[i.HELLO = 10] = 'HELLO', i[i.HEARTBEAT_ACK = 11] = 'HEARTBEAT_ACK', i[i.CALL_CONNECT = 13] = 'CALL_CONNECT', i[i.GUILD_SUBSCRIPTIONS = 14] = 'GUILD_SUBSCRIPTIONS', i[i.STREAM_CREATE = 18] = 'STREAM_CREATE', i[i.STREAM_DELETE = 19] = 'STREAM_DELETE', i[i.STREAM_WATCH = 20] = 'STREAM_WATCH', i[i.STREAM_PING = 21] = 'STREAM_PING', i[i.STREAM_SET_PAUSED = 22] = 'STREAM_SET_PAUSED', i[i.REQUEST_GUILD_APPLICATION_COMMANDS = 24] = 'REQUEST_GUILD_APPLICATION_COMMANDS', i[i.EMBEDDED_ACTIVITY_LAUNCH = 25] = 'EMBEDDED_ACTIVITY_LAUNCH', i[i.EMBEDDED_ACTIVITY_CLOSE = 26] = 'EMBEDDED_ACTIVITY_CLOSE', i[i.EMBEDDED_ACTIVITY_UPDATE = 27] = 'EMBEDDED_ACTIVITY_UPDATE', i[i.REQUEST_FORUM_UNREADS = 28] = 'REQUEST_FORUM_UNREADS', i[i.REMOTE_COMMAND = 29] = 'REMOTE_COMMAND', i[i.GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH = 30] = 'GET_DELETED_ENTITY_IDS_NOT_MATCHING_HASH', i[i.REQUEST_SOUNDBOARD_SOUNDS = 31] = 'REQUEST_SOUNDBOARD_SOUNDS', i[i.REQUEST_LAST_MESSAGES = 34] = 'REQUEST_LAST_MESSAGES', i[i.SEARCH_RECENT_MEMBERS = 35] = 'SEARCH_RECENT_MEMBERS', i[i.REQUEST_CHANNEL_STATUSES = 36] = 'REQUEST_CHANNEL_STATUSES', i[i.GUILD_SUBSCRIPTIONS_BULK = 37] = 'GUILD_SUBSCRIPTIONS_BULK';
class u extends a.EventEmitter {
  presenceUpdate(e, t, n, r, i) {
this.send(3, {
  status: e,
  since: t,
  activities: n,
  afk: r,
  broadcast: i
});
  }
  voiceStateUpdate(e) {
let {
  guildId: t = null,
  channelId: n = null,
  selfMute: r = !1,
  selfDeaf: i = !1,
  selfVideo: a = !1,
  preferredRegion: o = null,
  preferredRegions: l = null,
  videoStreamParameters: u = null,
  flags: c = 0
} = e, d = {
  guild_id: t,
  channel_id: n,
  self_mute: r,
  self_deaf: i,
  self_video: a,
  flags: c
};
null != n && s.Z.shouldIncludePreferredRegion() && (d.preferred_region = o, d.preferred_regions = l), null != u && (d.tracks = null == u ? void 0 : u.map(e => ({
  type: e.type,
  rid: e.rid,
  quality: e.quality
}))), this.send(4, d);
  }
  voiceServerPing() {
this.send(5, null);
  }
  embeddedActivityClose(e, t, n) {
this.send(26, {
  guild_id: null != e ? e : l.aIL,
  channel_id: t,
  application_id: n
});
  }
  requestGuildMembers(e, t) {
let {
  query: n,
  limit: r,
  userIds: i,
  presences: a
} = t;
this.send(8, {
  guild_id: e,
  query: n,
  limit: r,
  user_ids: i,
  presences: a
});
  }
  searchRecentMembers(e, t) {
let {
  query: n,
  continuationToken: r
} = t;
this.send(35, {
  guild_id: e,
  query: null != n ? n : '',
  continuation_token: null != r ? r : null
});
  }
  updateGuildSubscriptions(e) {
let t = {},
  n = 0;
o.default.keys(e).forEach(r => {
  let i = e[r],
    a = JSON.stringify([
      r,
      i
    ]).length;
  n + a > 15360 && (this.send(37, {
    subscriptions: t
  }), t = {}, n = 0), t[r] = i, n += a;
}), n > 0 && this.send(37, {
  subscriptions: t
});
  }
  callConnect(e) {
this.send(13, {
  channel_id: e
});
  }
  streamCreate(e, t, n) {
let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
this.send(18, {
  type: e,
  guild_id: t,
  channel_id: n,
  preferred_region: r
});
  }
  streamWatch(e) {
this.send(20, {
  stream_key: e
});
  }
  streamPing(e) {
this.send(21, {
  stream_key: e
});
  }
  streamDelete(e) {
this.send(19, {
  stream_key: e
});
  }
  streamSetPaused(e, t) {
this.send(22, {
  stream_key: e,
  paused: t
});
  }
  requestForumUnreads(e, t, n) {
this.send(28, {
  guild_id: e,
  channel_id: t,
  threads: n.map(e => ({
    thread_id: e.threadId,
    ack_message_id: e.ackMessageId
  }))
});
  }
  requestSoundboardSounds(e) {
this.send(31, {
  guild_ids: e
});
  }
  requestLastMessages(e, t) {
this.send(34, {
  guild_id: e,
  channel_ids: t
});
  }
  getDeletedEntityIdsNotMatchingHash(e, t, n, r, i) {
this.send(30, {
  guild_id: e,
  channel_ids_hash: t,
  role_ids_hash: n,
  emoji_ids_hash: r,
  sticker_ids_hash: i
});
  }
  requestChannelStatuses(e) {
this.send(36, {
  guild_id: e
});
  }
  remoteCommand(e, t) {
this.send(29, {
  target_session_id: e,
  payload: t
});
  }
}