t.d(n, {
  Z: function() {
return Z;
  }
});
var a = t(735250);
t(470079);
var i = t(442837),
  s = t(481060),
  l = t(846027),
  o = t(131951),
  r = t(594174),
  u = t(36703),
  d = t(358085),
  c = t(65154),
  E = t(689938);

function Z(e) {
  var n;
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
Z = (0, i.e7)([o.Z], () => o.Z.getLocalVolume(e, t), [
  e,
  t
]),
M = e === (null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
f = t === c.Yn.STREAM;
  return M ? null : (0, a.jsx)(s.MenuControlItem, {
id: 'user-volume',
label: f ? E.Z.Messages.STREAM_VOLUME : E.Z.Messages.USER_VOLUME,
control: (n, i) => (0, a.jsx)(s.MenuSliderControl, {
  ...n,
  ref: i,
  value: (0, u.P)(Z),
  maxValue: d.isPlatformEmbedded ? 200 : 100,
  onChange: n => l.Z.setLocalVolume(e, (0, u.A)(n), t),
  'aria-label': f ? E.Z.Messages.STREAM_VOLUME : E.Z.Messages.USER_VOLUME
})
  });
}