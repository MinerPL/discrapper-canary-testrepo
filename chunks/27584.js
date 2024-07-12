t.d(n, {
  Z: function() {
return s;
  }
});
var i = t(442837),
  r = t(846027),
  a = t(314897),
  u = t(131951),
  o = t(981631),
  l = t(65154);

function s(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Yn.DEFAULT,
t = (0, i.e7)([a.default], () => a.default.getId()),
s = (0, i.e7)([u.Z], () => u.Z.supports(l.AN.DISABLE_VIDEO) && u.Z.isVideoEnabled()),
d = (0, i.e7)([u.Z], () => u.Z.isLocalVideoDisabled(t, n), [
  t,
  n
]),
c = null == e || e === t;
  return [
c && (s || d),
d,
e => {
  let i = e ? o.ZUi.DISABLED : o.ZUi.MANUAL_ENABLED;
  r.Z.setDisableLocalVideo(t, i, n);
}
  ];
}