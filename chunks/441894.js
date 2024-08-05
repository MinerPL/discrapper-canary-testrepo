t.d(n, {
  J: function() {
return a;
  }
}), t(47120);
var r = t(442837),
  u = t(592125),
  l = t(19780),
  i = t(977059),
  c = t(760373);

function a(e) {
  let {
channelId: n,
location: t
  } = e, {
enabled: a
  } = i.c.useExperiment({
location: t
  });
  return (0, r.e7)([
l.Z,
u.Z
  ], () => function(e, n) {
var t;
let [r, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [
  l.Z,
  u.Z
];
if (!n || null == e || r.getChannelId() !== e)
  return !1;
let a = i.getChannel(e);
if (null == a || a.isGuildStageVoice())
  return !1;
let o = null === (t = r.getSecureFramesState()) || void 0 === t ? void 0 : t.version;
return null != o && o > c.HK;
  }(n, a, [
l.Z,
u.Z
  ]), [
n,
a
  ]);
}