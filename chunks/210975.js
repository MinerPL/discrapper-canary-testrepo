t.d(n, {
  m$: function() {
return g;
  },
  wV: function() {
return E;
  }
}), t(47120), t(518263), t(970173), t(520712), t(268111), t(941497), t(32026), t(480839), t(744285), t(492257), t(873817);
var r = t(470079),
  u = t(442837),
  l = t(470956),
  i = t(314897),
  c = t(19780),
  a = t(979651),
  o = t(709054),
  s = t(729303),
  d = t(651941),
  f = t(441894);

function Z(e) {
  let {
voiceStates: n,
version: t
  } = (0, u.cj)([a.Z], () => ({
voiceStates: a.Z.getVoiceStatesForChannel(e),
version: a.Z.getVoiceStateVersion()
  })), i = r.useMemo(() => o.default.keys(n), [
n,
t
  ]);
  return (0, l.Yp)(e, i);
}

function C(e) {
  let [n, t, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
c.Z,
d.Z,
s.Z
  ];
  if (null == e)
return !1;
  let u = n.getSecureFramesRosterMapEntry(e);
  if (null == u)
return !1;
  let l = new Uint8Array(u);
  return t.isKeyVerified(e, l) || r.isKeyVerified(e, l);
}

function E(e) {
  let {
userId: n,
channelId: t,
location: r
  } = e, l = Z(t), a = (0, f.J)({
channelId: t,
location: r
  }), o = (0, u.e7)([i.default], () => i.default.getId()), E = (0, u.e7)([
c.Z,
d.Z,
s.Z
  ], () => C(n, [
c.Z,
d.Z,
s.Z
  ])), g = o !== n;
  return a && g && E && l.has(o) && null != n && l.has(n);
}

function g(e) {
  let {
channelId: n,
location: t
  } = e, r = (0, f.J)({
channelId: n,
location: t
  }), l = Z(n), a = (0, u.e7)([i.default], () => i.default.getId());
  return (0, u.e7)([
c.Z,
d.Z,
s.Z
  ], () => {
if (!r)
  return !1;
for (let e of l) {
  if (e !== a) {
    if (!C(e, [
        c.Z,
        d.Z,
        s.Z
      ]))
      return !1;
  }
}
return !0;
  }, [
a,
r,
l
  ]);
}