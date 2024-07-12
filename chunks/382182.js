n.d(t, {
  JL: function() {
return p;
  },
  P9: function() {
return m;
  },
  h_: function() {
return g;
  },
  p9: function() {
return I;
  },
  wq: function() {
return T;
  }
}), n(653041), n(47120);
var r, i, a = n(442837),
  o = n(258609),
  s = n(131704),
  l = n(984933),
  u = n(430824),
  c = n(496675),
  d = n(979651),
  _ = n(934415),
  E = n(981631),
  f = n(689938);
let h = (e, t) => (0, s.hv)(e.type) || t.canBasicChannel(E.S7T.CONNECT | E.S7T.VIEW_CHANNEL, e);

function p(e, t, n) {
  var r;
  let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
  if (e.isPrivate())
return !0;
  let a = t.getGuild(e.getGuildId()),
o = null !== (r = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
  return (!e.isGuildStageVoice() || !(o <= 0)) && (!i || !!h(e, n)) && !!n.can(E.Plq.STREAM, e) && null != a && a.afkChannelId !== e.id && !0;
}

function m(e) {
  switch (e) {
case 0:
  return f.Z.Messages.CONSOLE_STREAM_UNAVAILABLE;
case 1:
  return f.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
case 2:
  return f.Z.Messages.STREAM_NO_PERMISSION_CTA;
default:
  return f.Z.Messages.WATCH_STREAM;
  }
}

function I(e, t, n, r, i) {
  let a;
  if (null == e)
return [
  !1,
  2
];
  let o = t.isInChannel(e.id),
l = e instanceof s.Sf && (0, _.rY)(e, t, n),
u = h(e, r),
c = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
  return c ? a = 0 : u || o ? l && !o && (a = 1) : a = 2, [
!__OVERLAY__ && !c && (o || u && !l),
a
  ];
}

function T(e) {
  return (0, a.Wu)([
d.Z,
u.Z,
c.Z,
o.Z
  ], () => I(e, d.Z, u.Z, c.Z, o.Z));
}

function g(e, t, n) {
  let r = [];
  for (let {
  channel: i
}
of e[l.Zb])
p(i, t, n) && r.push(i);
  return r;
}
(i = r || (r = {}))[i.REMOTE_MODE = 0] = 'REMOTE_MODE', i[i.CHANNEL_FULL = 1] = 'CHANNEL_FULL', i[i.NO_PERMISSION = 2] = 'NO_PERMISSION';