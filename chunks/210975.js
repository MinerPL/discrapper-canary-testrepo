t.d(n, {
  m$: function() {
return Z;
  },
  wV: function() {
return C;
  }
});
var r = t(470079),
  u = t(442837),
  l = t(470956),
  i = t(314897),
  c = t(592125),
  a = t(979651),
  o = t(441894);

function s(e) {
  let n = (0, u.e7)([a.Z], () => a.Z.getVoiceStatesForChannel(e)),
t = r.useMemo(() => Object.keys(n), [n]);
  return (0, l.Yp)(e, t);
}

function d(e) {
  let {
channelId: n,
location: t
  } = e, r = (0, o.J)({
channelId: n,
location: t
  }), l = (0, u.e7)([c.Z], () => {
var e;
return (null === (e = c.Z.getChannel(n)) || void 0 === e ? void 0 : e.isGuildStageVoice()) === !0;
  });
  return r && !l;
}

function f(e, n) {
  return !1;
}

function C(e) {
  var n, t;
  let {
userId: r,
channelId: l,
location: c
  } = e, a = s(l), o = d({
channelId: l,
location: c
  }), f = (0, u.e7)([i.default], () => i.default.getId());
  return o && a.has(f) && null != r && a.has(r) && (n = 0, t = 0, !1);
}

function Z(e) {
  let {
channelId: n,
location: t
  } = e, l = s(n), c = d({
channelId: n,
location: t
  }), a = (0, u.e7)([i.default], () => i.default.getId());
  return r.useMemo(() => !!(c && l.has(a)) && Array.from(l).every(e => {
var n, t;
return n = 0, t = 0, e === a;
  }), [
n,
a,
c,
l
  ]);
}