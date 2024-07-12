t.d(n, {
  Z: function() {
return Z;
  }
});
var l = t(735250);
t(470079);
var r = t(442837),
  u = t(481060),
  a = t(846027),
  s = t(131951),
  o = t(594174),
  i = t(36703),
  d = t(358085),
  c = t(65154),
  M = t(689938);

function Z(e) {
  var n;
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
Z = (0, r.e7)([s.Z], () => s.Z.getLocalVolume(e, t), [
  e,
  t
]),
g = e === (null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
I = t === c.Yn.STREAM;
  return g ? null : (0, l.jsx)(u.MenuControlItem, {
id: 'user-volume',
label: I ? M.Z.Messages.STREAM_VOLUME : M.Z.Messages.USER_VOLUME,
control: (n, r) => (0, l.jsx)(u.MenuSliderControl, {
  ...n,
  ref: r,
  value: (0, i.P)(Z),
  maxValue: d.isPlatformEmbedded ? 200 : 100,
  onChange: n => a.Z.setLocalVolume(e, (0, i.A)(n), t),
  'aria-label': I ? M.Z.Messages.STREAM_VOLUME : M.Z.Messages.USER_VOLUME
})
  });
}