l.d(n, {
  Z: function() {
return o;
  }
});
var t = l(735250);
l(470079);
var r = l(442837),
  i = l(481060),
  a = l(655922),
  s = l(158776),
  u = l(981631),
  d = l(689938);

function o(e) {
  let n = (0, r.e7)([s.Z], () => (0, a.Z)(s.Z.findActivity(e, e => e.type === u.IIU.STREAMING)), [e]);
  return null == n ? null : (0, t.jsx)(i.MenuItem, {
id: 'watch-stream',
label: d.Z.Messages.WATCH_STREAM,
action: () => window.open(n, '_blank')
  });
}