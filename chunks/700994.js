i.d(n, {
  Z: function() {
return M;
  }
});
var l = i(735250);
i(470079);
var t = i(442837),
  s = i(481060),
  a = i(846027),
  o = i(131951),
  u = i(594174),
  d = i(36703),
  r = i(358085),
  c = i(65154),
  Z = i(689938);

function M(e) {
  var n;
  let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.Yn.DEFAULT,
M = (0, t.e7)([o.Z], () => o.Z.getLocalVolume(e, i), [
  e,
  i
]),
E = e === (null === (n = u.default.getCurrentUser()) || void 0 === n ? void 0 : n.id),
_ = i === c.Yn.STREAM;
  return E ? null : (0, l.jsx)(s.MenuControlItem, {
id: 'user-volume',
label: _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME,
control: (n, t) => (0, l.jsx)(s.MenuSliderControl, {
  ...n,
  ref: t,
  value: (0, d.P)(M),
  maxValue: r.isPlatformEmbedded ? 200 : 100,
  onChange: n => a.Z.setLocalVolume(e, (0, d.A)(n), i),
  'aria-label': _ ? Z.Z.Messages.STREAM_VOLUME : Z.Z.Messages.USER_VOLUME
})
  });
}