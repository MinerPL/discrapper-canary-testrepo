n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(442837),
  a = n(846027),
  s = n(314897),
  l = n(131951),
  r = n(981631),
  o = n(65154);

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Yn.DEFAULT,
n = (0, i.e7)([s.default], () => s.default.getId()),
c = (0, i.e7)([l.Z], () => l.Z.supports(o.AN.DISABLE_VIDEO) && l.Z.isVideoEnabled()),
u = (0, i.e7)([l.Z], () => l.Z.isLocalVideoDisabled(n, t), [
  n,
  t
]),
d = null == e || e === n;
  return [
d && (c || u),
u,
e => {
  let i = e ? r.ZUi.DISABLED : r.ZUi.MANUAL_ENABLED;
  a.Z.setDisableLocalVideo(n, i, t);
}
  ];
}