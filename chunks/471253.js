t.d(e, {
  DT: function() {
return O;
  },
  Ef: function() {
return b;
  },
  HO: function() {
return C;
  },
  NZ: function() {
return R;
  },
  Pq: function() {
return N;
  },
  Q1: function() {
return g;
  },
  RK: function() {
return f;
  },
  _0: function() {
return h;
  },
  hz: function() {
return M;
  },
  yi: function() {
return A;
  }
});
var i = t(512722),
  c = t.n(i),
  a = t(149765),
  r = t(544891),
  l = t(493683);
t(749210);
var u = t(911969),
  d = t(367907),
  o = t(944486),
  _ = t(979651),
  s = t(700785),
  E = t(922482),
  T = t(192079),
  p = t(706058),
  I = t(590415),
  S = t(981631);

function g(n, e) {
  let t = n.getGuildId();
  return c()(null != t, 'This channel cannot be guildless.'), e && (0, d.yw)(S.rMx.REQUEST_TO_SPEAK_INITIATED, {
...(0, T.s$)(n)
  }), r.tn.patch({
url: S.ANM.UPDATE_VOICE_STATE(t),
body: {
  request_to_speak_timestamp: e ? new Date().toISOString() : null,
  channel_id: n.id
}
  });
}

function h(n, e) {
  let t = n.getGuildId();
  return c()(null != t, 'This channel cannot be guildless.'), r.tn.patch({
url: S.ANM.UPDATE_VOICE_STATE(t, e),
body: {
  suppress: !1,
  request_to_speak_timestamp: new Date().toISOString(),
  channel_id: n.id
}
  });
}

function f(n, e) {
  let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
i = null == n ? void 0 : n.getGuildId();
  c()(null != i, 'This channel cannot be guildless.');
  let a = _.Z.getVoiceStateForChannel(n.id);
  return (0, I.gf)(a) === I.xO.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !e && (0, d.yw)(S.rMx.PROMOTED_TO_SPEAKER, {
...(0, T.s$)(n)
  }), r.tn.patch({
url: S.ANM.UPDATE_VOICE_STATE(i),
body: {
  suppress: e,
  request_to_speak_timestamp: null,
  channel_id: n.id,
  ...t ? {
    silent: t
  } : {}
}
  });
}

function A(n) {
  let e = null == n ? void 0 : n.getGuildId();
  return c()(null != e, 'This channel cannot be guildless.'), r.tn.patch({
url: S.ANM.UPDATE_VOICE_STATE(e),
body: {
  suppress: !0,
  channel_id: n.id,
  self_video: !1,
  self_stream: !1
}
  });
}

function O(n, e, t) {
  let i = n.getGuildId();
  return c()(null != i, 'This channel cannot be guildless.'), r.tn.patch({
url: S.ANM.UPDATE_VOICE_STATE(i, e),
body: {
  suppress: t,
  channel_id: n.id
}
  });
}

function M(n, e) {
  if (null == e || null == n)
return;
  let t = e.getGuildId();
  return c()(null != t, 'This channel cannot be guildless.'), O(e, n.id, !0), r.tn.patch({
url: S.ANM.UPDATE_VOICE_STATE(t, n.id),
body: {
  suppress: !0,
  channel_id: e.id,
  self_video: !1,
  self_stream: !1
}
  });
}

function N(n, e, t) {
  let i = n.getGuildId();
  c()(null != i, 'Channel cannot be guildless');
  let r = n.permissionOverwrites[i],
d = {
  id: i,
  type: u.BN.ROLE,
  allow: s.Hn,
  deny: s.Hn,
  ...r
};
  t ? (d.allow = a.IH(d.allow, e), d.deny = a.Od(d.deny, e)) : (d.allow = a.Od(d.allow, e), d.deny = a.IH(d.deny, e)), l.Z.updatePermissionOverwrite(n.id, d);
}
async function C(n, e, t, i) {
  if ('' === e)
return;
  o.Z.getVoiceChannelId() !== n.id && (0, E.TM)(n);
  let c = await (0, p.me)(n.id, e, t, i);
  return f(n, !1, !0), c;
}
async function b(n, e, t) {
  if ('' !== e)
return await (0, p.Dk)(n.id, e, t);
}
async function R(n) {
  await (0, p.Ix)(n.id);
}