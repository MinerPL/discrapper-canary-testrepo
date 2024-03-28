"use strict";
n.r(t), n.d(t, {
  audienceAckRequestToSpeak: function() {
    return g
  },
  editStage: function() {
    return R
  },
  endStage: function() {
    return O
  },
  inviteUserToStage: function() {
    return I
  },
  moveSelfToAudience: function() {
    return m
  },
  moveUserToAudience: function() {
    return h
  },
  setEveryoneRolePermissionAllowed: function() {
    return p
  },
  setUserSuppress: function() {
    return M
  },
  startStage: function() {
    return D
  },
  toggleRequestToSpeak: function() {
    return v
  }
});
var l = n("512722"),
  u = n.n(l),
  a = n("149765"),
  s = n("544891"),
  d = n("493683");
n("749210");
var i = n("911969"),
  r = n("367907"),
  o = n("944486"),
  c = n("979651"),
  E = n("700785"),
  f = n("922482"),
  _ = n("192079"),
  T = n("706058"),
  S = n("590415"),
  N = n("981631");

function v(e, t) {
  let n = e.getGuildId();
  return u()(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(N.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), s.HTTP.patch({
    url: N.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function I(e, t) {
  let n = e.getGuildId();
  return u()(null != n, "This channel cannot be guildless."), s.HTTP.patch({
    url: N.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function g(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = null == e ? void 0 : e.getGuildId();
  u()(null != l, "This channel cannot be guildless.");
  let a = c.default.getVoiceStateForChannel(e.id);
  return (0, S.getAudienceRequestToSpeakState)(a) === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(N.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), s.HTTP.patch({
    url: N.Endpoints.UPDATE_VOICE_STATE(l),
    body: {
      suppress: t,
      request_to_speak_timestamp: null,
      channel_id: e.id,
      ...n ? {
        silent: n
      } : {}
    }
  })
}

function m(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return u()(null != t, "This channel cannot be guildless."), s.HTTP.patch({
    url: N.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function M(e, t, n) {
  let l = e.getGuildId();
  return u()(null != l, "This channel cannot be guildless."), s.HTTP.patch({
    url: N.Endpoints.UPDATE_VOICE_STATE(l, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function h(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return u()(null != n, "This channel cannot be guildless."), M(t, e.id, !0), s.HTTP.patch({
    url: N.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function p(e, t, n) {
  let l = e.getGuildId();
  u()(null != l, "Channel cannot be guildless");
  let s = e.permissionOverwrites[l],
    r = {
      id: l,
      type: i.PermissionOverwriteType.ROLE,
      allow: E.NONE,
      deny: E.NONE,
      ...s
    };
  n ? (r.allow = a.add(r.allow, t), r.deny = a.remove(r.deny, t)) : (r.allow = a.remove(r.allow, t), r.deny = a.add(r.deny, t)), d.default.updatePermissionOverwrite(e.id, r)
}
async function D(e, t, n, l) {
  if ("" === t) return;
  o.default.getVoiceChannelId() !== e.id && (0, f.connectToStage)(e);
  let u = await (0, T.startStageInstance)(e.id, t, n, l);
  return g(e, !1, !0), u
}
async function R(e, t, n) {
  if ("" !== t) return await (0, T.updateStageInstance)(e.id, t, n)
}
async function O(e) {
  await (0, T.endStageInstance)(e.id)
}