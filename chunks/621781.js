t.d(n, {
  Z: function() {
return i;
  }
});
var a = t(470079),
  s = t(442837),
  u = t(706454),
  r = t(356659),
  o = t(689938);

function i() {
  let e = (0, s.e7)([u.default], () => u.default.locale);
  return a.useMemo(() => [{
  value: r.OT.SECONDS_30,
  label: o.Z.Messages.CLIPS_LENGTH_SECONDS.format({
    count: 30
  })
},
{
  value: r.OT.MINUTES_1,
  label: o.Z.Messages.CLIPS_LENGTH_MINUTES.format({
    count: 1
  })
},
{
  value: r.OT.MINUTES_2,
  label: o.Z.Messages.CLIPS_LENGTH_MINUTES.format({
    count: 2
  })
}
  ], [e]);
}