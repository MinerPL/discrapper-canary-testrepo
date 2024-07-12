n.d(t, {
  Z: function() {
return o;
  }
});
var i = n(848246),
  l = n(442837),
  r = n(358221),
  a = n(74538),
  s = n(557457);

function o(e, t) {
  let n = (0, l.e7)([r.Z], () => null != e ? r.Z.getStreamParticipants(e).find(e => e.user.id === t) : void 0, [
e,
t
  ]);
  if (!(0, a.So)(i.q.STREAM_HIGH_QUALITY))
return;
  let o = null != n ? (0, s.Wc)(n) : void 0;
  return null != o ? ''.concat((0, s.ml)(o.maxResolution), ' ').concat((0, s.bp)(o.maxFrameRate)) : void 0;
}