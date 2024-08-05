n.d(t, {
  $s: function() {
return y;
  },
  Sg: function() {
return R;
  },
  XV: function() {
return N;
  },
  ow: function() {
return g;
  },
  qn: function() {
return A;
  },
  rQ: function() {
return r;
  },
  t$: function() {
return C;
  },
  tM: function() {
return S;
  }
}), n(47120);
var r, i, a = n(544891),
  s = n(570140),
  o = n(904245),
  l = n(911969),
  u = n(895924),
  c = n(346479),
  d = n(314897),
  _ = n(592125),
  E = n(430824),
  f = n(709054),
  h = n(603721),
  p = n(282397),
  m = n(622449),
  I = n(96989),
  T = n(981631);

function g(e) {
  return null == e || '' === e || Number.isNaN(e) ? Date.now() : f.default.extractTimestamp(e) + 900000;
}
let S = async e => {
  let {
componentType: t,
messageId: n,
messageFlags: r,
customId: i,
componentId: s,
applicationId: o,
channelId: u,
guildId: _,
localState: E
  } = e, m = f.default.fromTimestamp(Date.now());
  if (!p.Z.canQueueInteraction(n, m))
return;
  await c.Z.unarchiveThreadIfNecessary(u), (0, h.kz)(m, {
messageId: n,
data: {
  interactionType: l.B8.MESSAGE_COMPONENT,
  customId: i,
  componentId: s
},
onFailure: (e, t) => O(u, e, t)
  }), null != E && (0, h.B0)(n, m, E, s);
  let I = {
type: l.B8.MESSAGE_COMPONENT,
nonce: m,
guild_id: _,
channel_id: u,
message_flags: r,
message_id: n,
application_id: o,
session_id: d.default.getSessionId(),
data: {
  component_type: t,
  custom_id: i,
  ... function(e) {
    if (null == e)
      return null;
    if (e.type === l.re.STRING_SELECT || e.type === l.re.INPUT_TEXT)
      return e;
    let t = e.selectedOptions.map(e => e.value);
    return {
      type: e.type,
      values: t
    };
  }(E)
}
  };
  await a.tn.post({
url: T.ANM.INTERACTIONS,
body: I,
timeout: 3000
  }, e => {
R(m, e, o, u, _);
  });
}, A = async e => {
  let {
applicationId: t,
channelId: n,
guildId: r,
command: i
  } = e, a = _.Z.getChannel(n), o = null != r ? E.Z.getGuild(r) : null;
  null != a && s.Z.dispatch({
type: 'APPLICATION_COMMAND_USED',
context: {
  guild: o,
  channel: a
},
command: i,
commandOrigin: u.bB.APPLICATION_LAUNCHER
  });
  let l = {
application_id: t,
name: i.name,
type: i.type,
version: i.version,
id: i.id
  };
  await v({
applicationId: t,
channelId: n,
guildId: r,
data: l
  });
}, N = async e => {
  let {
applicationId: t,
channelId: n,
guildId: r
  } = e, i = {
type: l.yU.PRIMARY_ENTRY_POINT
  };
  await v({
applicationId: t,
channelId: n,
guildId: r,
data: i
  });
}, v = async e => {
  let {
applicationId: t,
channelId: n,
guildId: r,
data: i
  } = e, s = f.default.fromTimestamp(Date.now()), o = {
type: l.B8.APPLICATION_COMMAND,
nonce: s,
guild_id: r,
channel_id: n,
application_id: t,
session_id: d.default.getSessionId(),
data: i
  };
  await a.tn.post({
url: T.ANM.INTERACTIONS,
body: o,
timeout: 3000
  }, e => {
R(s, e, t, n, r);
  });
}, O = (e, t, n) => {
  null == n && null != t && o.Z.sendClydeError(e, t);
}, R = (e, t, n, r, i) => {
  if (!t.ok) {
if (!t.hasErr) {
  var a;
  if (t.status >= 400 && t.status < 500 && t.body) {
    if (t.body.code === T.evJ.INVALID_FORM_BODY && t.body.errors) {
      let a = (0, I.e)(t.body.errors);
      null != a && ('INTERACTION_APPLICATION_COMMAND_INVALID_VERSION' === a.code || 'INTERACTION_APPLICATION_COMMAND_INVALID' === a.code) && s.Z.dispatch({
        type: 'APPLICATION_COMMAND_EXECUTE_BAD_VERSION',
        applicationId: n,
        channelId: r,
        guildId: null != i ? i : null
      }), (0, h.yr)(e, void 0, null == a ? void 0 : a.message);
      return;
    }
    (0, h.yr)(e, void 0, t.body.message);
    return;
  }
  (0, h.yr)(e, null === (a = t.body) || void 0 === a ? void 0 : a.code);
  return;
}
(0, h.yr)(e);
  }
};
(i = r || (r = {}))[i.SENDING = 0] = 'SENDING', i[i.CREATED = 1] = 'CREATED', i[i.FAILED = 2] = 'FAILED', i[i.TIMED_OUT = 3] = 'TIMED_OUT', i[i.EPHEMERAL_SUCCESS = 4] = 'EPHEMERAL_SUCCESS';
let C = (e, t) => {
  var n;
  let r = null == t ? void 0 : t.state,
i = e.state === T.yb.SENT && g(e.id) < Date.now();
  let a = e.state === T.yb.SEND_FAILED && (null == (n = e.id) || '' === n || Number.isNaN(n) ? Date.now() : f.default.extractTimestamp(n) + 3000) < Date.now(),
s = (null == t ? void 0 : t.data.interactionType) === l.B8.APPLICATION_COMMAND,
o = e.isCommandType();
  if (s && r === m.F.QUEUED || o && e.state === T.yb.SENDING && null != t)
return 0;
  if (s && r === m.F.CREATED || e.hasFlag(T.iLy.LOADING) && !i)
return 1;
  if (null != e.interaction && e.hasFlag(T.iLy.LOADING) && i)
return 3;
  else if (null != e.interaction && !e.hasFlag(T.iLy.LOADING) && a)
return 3;
  else if (o && e.state === T.yb.SEND_FAILED)
return 2;
  else if (null != e.interaction && e.hasFlag(T.iLy.EPHEMERAL))
return 4;
};

function y(e) {
  let t = e.options;
  for (;
(null == t ? void 0 : t.length) === 1 && (t[0].type === l.jw.SUB_COMMAND_GROUP || t[0].type === l.jw.SUB_COMMAND);)
t = t[0].options;
  for (let e of null != t ? t : [])
if (e.type === l.jw.ATTACHMENT)
  return !1;
  return !0;
}