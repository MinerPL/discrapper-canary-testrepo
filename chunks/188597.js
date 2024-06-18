"use strict";
n.d(t, {
  $s: function() {
    return R
  },
  Sg: function() {
    return m
  },
  ow: function() {
    return S
  },
  qn: function() {
    return N
  },
  rQ: function() {
    return i
  },
  t$: function() {
    return O
  },
  tM: function() {
    return f
  }
}), n(47120);
var i, r, s = n(544891),
  o = n(570140),
  a = n(904245),
  l = n(911969),
  u = n(346479),
  _ = n(314897),
  d = n(709054),
  c = n(603721),
  E = n(282397),
  I = n(622449),
  T = n(96989),
  h = n(981631);

function S(e) {
  return null == e || "" === e || Number.isNaN(e) ? Date.now() : d.default.extractTimestamp(e) + 9e5
}
let f = async e => {
  let {
    componentType: t,
    messageId: n,
    messageFlags: i,
    customId: r,
    componentId: o,
    applicationId: a,
    channelId: I,
    guildId: T,
    localState: S
  } = e, f = d.default.fromTimestamp(Date.now());
  if (!E.Z.canQueueInteraction(n, f)) return;
  await u.Z.unarchiveThreadIfNecessary(I), (0, c.kz)(f, {
    messageId: n,
    data: {
      interactionType: l.B8.MESSAGE_COMPONENT,
      customId: r,
      componentId: o
    },
    onFailure: (e, t) => A(I, e, t)
  }), null != S && (0, c.B0)(n, f, S, o);
  let N = {
    type: l.B8.MESSAGE_COMPONENT,
    nonce: f,
    guild_id: T,
    channel_id: I,
    message_flags: i,
    message_id: n,
    application_id: a,
    session_id: _.default.getSessionId(),
    data: {
      component_type: t,
      custom_id: r,
      ... function(e) {
        if (null == e) return null;
        if (e.type === l.re.STRING_SELECT || e.type === l.re.INPUT_TEXT) return e;
        let t = e.selectedOptions.map(e => e.value);
        return {
          type: e.type,
          values: t
        }
      }(S)
    }
  };
  await s.tn.post({
    url: h.ANM.INTERACTIONS,
    body: N,
    timeout: 3e3
  }, e => {
    m(f, e, a, I, T)
  })
}, N = async e => {
  let {
    applicationId: t,
    channelId: n,
    guildId: i,
    command: r
  } = e, o = d.default.fromTimestamp(Date.now()), a = null == r ? {
    type: l.yU.PRIMARY_ENTRY_POINT
  } : {
    application_id: t,
    name: r.name,
    type: r.type,
    version: r.version,
    id: r.id
  }, u = {
    type: l.B8.APPLICATION_COMMAND,
    nonce: o,
    guild_id: i,
    channel_id: n,
    application_id: t,
    session_id: _.default.getSessionId(),
    data: a
  };
  await s.tn.post({
    url: h.ANM.INTERACTIONS,
    body: u,
    timeout: 3e3
  }, e => {
    m(o, e, t, n, i)
  })
}, A = (e, t, n) => {
  null == n && null != t && a.Z.sendClydeError(e, t)
}, m = (e, t, n, i, r) => {
  if (!t.ok) {
    if (!t.hasErr) {
      var s;
      if (t.status >= 400 && t.status < 500 && t.body) {
        if (t.body.code === h.evJ.INVALID_FORM_BODY && t.body.errors) {
          let s = (0, T.e)(t.body.errors);
          null != s && ("INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" === s.code || "INTERACTION_APPLICATION_COMMAND_INVALID" === s.code) && o.Z.dispatch({
            type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION",
            applicationId: n,
            channelId: i,
            guildId: null != r ? r : null
          }), (0, c.yr)(e, void 0, null == s ? void 0 : s.message);
          return
        }(0, c.yr)(e, void 0, t.body.message);
        return
      }(0, c.yr)(e, null === (s = t.body) || void 0 === s ? void 0 : s.code);
      return
    }(0, c.yr)(e)
  }
};
(r = i || (i = {}))[r.SENDING = 0] = "SENDING", r[r.CREATED = 1] = "CREATED", r[r.FAILED = 2] = "FAILED", r[r.TIMED_OUT = 3] = "TIMED_OUT", r[r.EPHEMERAL_SUCCESS = 4] = "EPHEMERAL_SUCCESS";
let O = (e, t) => {
  var n;
  let i = null == t ? void 0 : t.state,
    r = e.state === h.yb.SENT && S(e.id) < Date.now();
  let s = e.state === h.yb.SEND_FAILED && (null == (n = e.id) || "" === n || Number.isNaN(n) ? Date.now() : d.default.extractTimestamp(n) + 3e3) < Date.now(),
    o = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND,
    a = e.isCommandType();
  if (o && i === I.F.QUEUED || a && e.state === h.yb.SENDING && null != t) return 0;
  if (o && i === I.F.CREATED || e.hasFlag(h.iLy.LOADING) && !r) return 1;
  if (null != e.interaction && e.hasFlag(h.iLy.LOADING) && r) return 3;
  else if (null != e.interaction && !e.hasFlag(h.iLy.LOADING) && s) return 3;
  else if (a && e.state === h.yb.SEND_FAILED) return 2;
  else if (null != e.interaction && e.hasFlag(h.iLy.EPHEMERAL)) return 4
};

function R(e) {
  let t = e.options;
  for (;
    (null == t ? void 0 : t.length) === 1 && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND);) t = t[0].options;
  for (let e of null != t ? t : [])
    if (e.type === l.jw.ATTACHMENT) return !1;
  return !0
}