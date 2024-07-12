n.d(t, {
  AC: function() {
return m;
  },
  Cq: function() {
return T;
  },
  R5: function() {
return g;
  },
  TM: function() {
return I;
  }
});
var r = n(749210),
  i = n(287734),
  a = n(872810),
  o = n(366297),
  s = n(280837),
  l = n(199902),
  u = n(592125),
  c = n(430824),
  d = n(496675),
  _ = n(944486),
  E = n(881824),
  f = n(107511),
  h = n(146085),
  p = n(96150);

function m(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return new Promise(async i => {
let a = u.Z.getChannel(t);
if (null != a)
  return I(a, n), i(a);
await (0, s.O)([e]), await r.Z.joinGuild(e, {
  lurker: !0
}), c.Z.addConditionalChangeListener(() => {
  let e = u.Z.getChannel(t);
  return null == e || (I(e), p.Z.initialize(), i(e), !1);
});
  });
}

function I(e) {
  var t, n;
  let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
o = _.Z.getVoiceChannelId();
  if (!r && (t = e, n = o, !d.Z.can(h.gl, t) || E.Zl(t.id) && n !== t.id && (E.vu(t, () => T(t, !0)), 1)))
return !1;
  if (f.Z.initialize(), i.default.selectVoiceChannel(e.id), (o = _.Z.getVoiceChannelId()) !== e.id)
return !1;
  let s = l.Z.getAllApplicationStreamsForChannel(e.id);
  return s.length > 0 && (0, a.rn)(s[0], {
noFocus: !1
  }), !0;
}

function T(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
i = _.Z.getVoiceChannelId();
  if (!(!r && i !== e.id && (0, o._)(e) && E.Gy(e, () => T(e, t, n, !0))))
I(e, t) && g(e, i, n);
}

function g(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  E.R5(e, t, n);
}