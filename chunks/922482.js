"use strict";
n.d(t, {
  AC: function() {
    return S
  },
  Cq: function() {
    return N
  },
  R5: function() {
    return A
  },
  TM: function() {
    return f
  }
});
var i = n(749210),
  r = n(287734),
  s = n(872810),
  o = n(366297),
  a = n(280837),
  l = n(199902),
  u = n(592125),
  _ = n(430824),
  d = n(496675),
  c = n(944486),
  E = n(881824),
  I = n(107511),
  T = n(146085),
  h = n(96150);

function S(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  return new Promise(async r => {
    let s = u.Z.getChannel(t);
    if (null != s) return f(s, n), r(s);
    await (0, a.O)([e]), await i.Z.joinGuild(e, {
      lurker: !0
    }), _.Z.addConditionalChangeListener(() => {
      let e = u.Z.getChannel(t);
      return null == e || (f(e), h.Z.initialize(), r(e), !1)
    })
  })
}

function f(e) {
  var t, n;
  let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    o = c.Z.getVoiceChannelId();
  if (!i && (t = e, n = o, !d.Z.can(T.gl, t) || E.Zl(t.id) && n !== t.id && (E.vu(t, () => N(t, !0)), 1))) return !1;
  if (I.Z.initialize(), r.default.selectVoiceChannel(e.id), (o = c.Z.getVoiceChannelId()) !== e.id) return !1;
  let a = l.Z.getAllApplicationStreamsForChannel(e.id);
  return a.length > 0 && (0, s.rn)(a[0], {
    noFocus: !1
  }), !0
}

function N(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    r = c.Z.getVoiceChannelId();
  if (!(!i && r !== e.id && (0, o._)(e) && E.Gy(e, () => N(e, t, n, !0)))) f(e, t) && A(e, r, n)
}

function A(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  E.R5(e, t, n)
}