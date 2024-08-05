n.d(t, {
  Sc: function() {
return E;
  },
  UP: function() {
return f;
  },
  Zx: function() {
return d;
  },
  _s: function() {
return _;
  }
}), n(47120);
var r = n(570140),
  i = n(339085),
  a = n(592125),
  s = n(19780),
  o = n(944486),
  l = n(626135),
  u = n(106301),
  c = n(981631);

function d(e, t) {
  var n;
  if (null == e) {
E(t);
return;
  }
  r.Z.dispatch({
type: 'UPDATE_HANG_STATUS',
status: e,
saveAsDefault: t
  }), l.default.track(c.rMx.SET_HANG_STATUS, {
status_type: e,
channel_id: o.Z.getVoiceChannelId(),
guild_id: null === (n = a.Z.getChannel(o.Z.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
media_session_id: s.Z.getMediaSessionId()
  });
}

function _(e, t, n) {
  var i;
  if ('' === e || null == t) {
E(n);
return;
  }
  r.Z.dispatch({
type: 'UPDATE_HANG_STATUS_CUSTOM',
emoji: t,
status: e,
saveAsDefault: n
  }), l.default.track(c.rMx.SET_HANG_STATUS, {
status_type: e,
channel_id: o.Z.getVoiceChannelId(),
guild_id: null === (i = a.Z.getChannel(o.Z.getVoiceChannelId())) || void 0 === i ? void 0 : i.guild_id,
media_session_id: s.Z.getMediaSessionId()
  });
}

function E(e) {
  var t;
  r.Z.dispatch({
type: 'CLEAR_HANG_STATUS',
saveAsDefault: e
  }), l.default.track(c.rMx.CLEAR_HANG_STATUS, {
channel_id: o.Z.getVoiceChannelId(),
guild_id: null === (t = a.Z.getChannel(o.Z.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
media_session_id: s.Z.getMediaSessionId()
  });
}

function f() {
  let e = [
u.Z.getCustomHangStatus(),
...u.Z.getRecentCustomStatuses()
  ].filter(e => {
var t;
return null != e && null != e.emoji && (null === (t = e.emoji) || void 0 === t ? void 0 : t.id) != null && null == i.Z.getCustomEmojiById(e.emoji.id);
  });
  e.length > 0 && r.Z.dispatch({
type: 'DELETE_INVALID_HANG_STATUSES',
statuses: e
  });
}