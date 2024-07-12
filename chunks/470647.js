s.d(t, {
  Z: function() {
return d;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(657254),
  o = s(716364),
  l = s(474873),
  c = s(871465);

function d(e) {
  let {
className: t
  } = e, s = (0, a.e7)([l.Z], () => l.Z.getSoundpack()), {
allowAprilFoolsSoundpack: d
  } = r.Z.useExperiment({
location: 'a96548_1'
  }, {
autoTrackExposure: !1
  });
  if (!d)
return null;
  let _ = d ? (0, c.QI)() : [];
  return (0, n.jsx)(i.SingleSelect, {
className: t,
onChange: e => (0, o.c)(e),
value: s,
options: _
  });
}