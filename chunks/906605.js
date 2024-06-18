"use strict";
n.d(t, {
  Sc: function() {
    return d
  },
  Zx: function() {
    return u
  },
  _s: function() {
    return _
  }
});
var i = n(570140),
  r = n(592125),
  s = n(19780),
  o = n(944486),
  a = n(626135),
  l = n(981631);

function u(e, t) {
  var n;
  if (null == e) {
    d(t);
    return
  }
  i.Z.dispatch({
    type: "UPDATE_HANG_STATUS",
    status: e,
    saveAsDefault: t
  }), a.default.track(l.rMx.SET_HANG_STATUS, {
    status_type: e,
    channel_id: o.Z.getVoiceChannelId(),
    guild_id: null === (n = r.Z.getChannel(o.Z.getVoiceChannelId())) || void 0 === n ? void 0 : n.guild_id,
    media_session_id: s.Z.getMediaSessionId()
  })
}

function _(e, t, n) {
  var u;
  if ("" === e || null == t) {
    d(n);
    return
  }
  i.Z.dispatch({
    type: "UPDATE_HANG_STATUS_CUSTOM",
    emoji: t,
    status: e,
    saveAsDefault: n
  }), a.default.track(l.rMx.SET_HANG_STATUS, {
    status_type: e,
    channel_id: o.Z.getVoiceChannelId(),
    guild_id: null === (u = r.Z.getChannel(o.Z.getVoiceChannelId())) || void 0 === u ? void 0 : u.guild_id,
    media_session_id: s.Z.getMediaSessionId()
  })
}

function d(e) {
  var t;
  i.Z.dispatch({
    type: "CLEAR_HANG_STATUS",
    saveAsDefault: e
  }), a.default.track(l.rMx.CLEAR_HANG_STATUS, {
    channel_id: o.Z.getVoiceChannelId(),
    guild_id: null === (t = r.Z.getChannel(o.Z.getVoiceChannelId())) || void 0 === t ? void 0 : t.guild_id,
    media_session_id: s.Z.getMediaSessionId()
  })
}