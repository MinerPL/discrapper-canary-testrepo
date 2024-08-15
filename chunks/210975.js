n.d(t, {
  m$: function() {
return g;
  },
  wV: function() {
return E;
  }
}), n(47120), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817);
var r = n(470079),
  l = n(442837),
  u = n(470956),
  i = n(314897),
  a = n(19780),
  c = n(979651),
  o = n(709054),
  s = n(729303),
  d = n(651941),
  f = n(441894);

function Z(e) {
  let {
voiceStates: t,
version: n
  } = (0, l.cj)([c.Z], () => ({
voiceStates: c.Z.getVoiceStatesForChannel(e),
version: c.Z.getVoiceStateVersion()
  })), i = r.useMemo(() => o.default.keys(t), [
t,
n
  ]);
  return (0, u.Yp)(e, i);
}

function C(e) {
  let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [
a.Z,
d.Z,
s.Z
  ];
  if (null == e)
return !1;
  let l = t.getSecureFramesRosterMapEntry(e);
  if (null == l)
return !1;
  let u = new Uint8Array(l);
  return n.isKeyVerified(e, u) || r.isKeyVerified(e, u);
}

function E(e) {
  let {
userId: t,
channelId: n,
location: r
  } = e, u = Z(n), c = (0, f.J)({
channelId: n,
location: r
  }), o = (0, l.e7)([i.default], () => i.default.getId()), E = (0, l.e7)([
a.Z,
d.Z,
s.Z
  ], () => C(t, [
a.Z,
d.Z,
s.Z
  ])), g = o !== t;
  return c && g && E && u.has(o) && null != t && u.has(t);
}

function g(e) {
  let {
channelId: t,
location: n
  } = e, r = (0, f.J)({
channelId: t,
location: n
  }), u = Z(t), c = (0, l.e7)([i.default], () => i.default.getId());
  return (0, l.e7)([
a.Z,
d.Z,
s.Z
  ], () => {
if (!r)
  return !1;
for (let e of u) {
  if (e !== c) {
    if (!C(e, [
        a.Z,
        d.Z,
        s.Z
      ]))
      return !1;
  }
}
return !0;
  }, [
c,
r,
u
  ]);
}