"use strict";
n.r(t), n.d(t, {
  toggleRequestToSpeak: function() {
    return g
  },
  inviteUserToStage: function() {
    return C
  },
  audienceAckRequestToSpeak: function() {
    return A
  },
  moveSelfToAudience: function() {
    return M
  },
  setUserSuppress: function() {
    return I
  },
  moveUserToAudience: function() {
    return h
  },
  setEveryoneRolePermissionAllowed: function() {
    return L
  },
  startStage: function() {
    return p
  },
  editStage: function() {
    return m
  },
  endStage: function() {
    return v
  }
});
var a = n("627445"),
  i = n.n(a),
  l = n("316693"),
  u = n("872717"),
  s = n("450911");
n("851387");
var o = n("798609"),
  r = n("716241"),
  d = n("18494"),
  c = n("800762"),
  f = n("991170"),
  E = n("716214"),
  _ = n("230324"),
  S = n("738983"),
  N = n("808422"),
  T = n("49111");

function g(e, t) {
  let n = e.getGuildId();
  return i(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(T.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
    ...(0, _.getStageChannelMetadata)(e)
  }), u.HTTP.patch({
    url: T.Endpoints.UPDATE_VOICE_STATE(n),
    body: {
      request_to_speak_timestamp: t ? new Date().toISOString() : null,
      channel_id: e.id
    }
  })
}

function C(e, t) {
  let n = e.getGuildId();
  return i(null != n, "This channel cannot be guildless."), u.HTTP.patch({
    url: T.Endpoints.UPDATE_VOICE_STATE(n, t),
    body: {
      suppress: !1,
      request_to_speak_timestamp: new Date().toISOString(),
      channel_id: e.id
    }
  })
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = null == e ? void 0 : e.getGuildId();
  i(null != a, "This channel cannot be guildless.");
  let l = c.default.getVoiceStateForChannel(e.id),
    s = (0, N.getAudienceRequestToSpeakState)(l);
  return s === N.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(T.AnalyticEvents.PROMOTED_TO_SPEAKER, {
    ...(0, _.getStageChannelMetadata)(e)
  }), u.HTTP.patch({
    url: T.Endpoints.UPDATE_VOICE_STATE(a),
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

function M(e) {
  let t = null == e ? void 0 : e.getGuildId();
  return i(null != t, "This channel cannot be guildless."), u.HTTP.patch({
    url: T.Endpoints.UPDATE_VOICE_STATE(t),
    body: {
      suppress: !0,
      channel_id: e.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function I(e, t, n) {
  let a = e.getGuildId();
  return i(null != a, "This channel cannot be guildless."), u.HTTP.patch({
    url: T.Endpoints.UPDATE_VOICE_STATE(a, t),
    body: {
      suppress: n,
      channel_id: e.id
    }
  })
}

function h(e, t) {
  if (null == t || null == e) return;
  let n = t.getGuildId();
  return i(null != n, "This channel cannot be guildless."), I(t, e.id, !0), u.HTTP.patch({
    url: T.Endpoints.UPDATE_VOICE_STATE(n, e.id),
    body: {
      suppress: !0,
      channel_id: t.id,
      self_video: !1,
      self_stream: !1
    }
  })
}

function L(e, t, n) {
  let a = e.getGuildId();
  i(null != a, "Channel cannot be guildless");
  let u = e.permissionOverwrites[a],
    r = {
      id: a,
      type: o.PermissionOverwriteType.ROLE,
      allow: f.NONE,
      deny: f.NONE,
      ...u
    };
  n ? (r.allow = l.add(r.allow, t), r.deny = l.remove(r.deny, t)) : (r.allow = l.remove(r.allow, t), r.deny = l.add(r.deny, t)), s.default.updatePermissionOverwrite(e.id, r)
}
async function p(e, t, n, a) {
  if ("" === t) return;
  let i = d.default.getVoiceChannelId() === e.id;
  !i && (0, E.connectToStage)(e);
  let l = await (0, S.startStageInstance)(e.id, t, n, a);
  return A(e, !1, !0), l
}
async function m(e, t, n) {
  if ("" === t) return;
  let a = await (0, S.updateStageInstance)(e.id, t, n);
  return a
}
async function v(e) {
  await (0, S.endStageInstance)(e.id)
}