u.d(n, {
  Z: function() {
return S;
  }
});
var a = u(735250);
u(470079);
var l = u(442837),
  r = u(481060),
  t = u(434404),
  s = u(889161),
  o = u(430824),
  i = u(981631),
  c = u(689938);

function S(e, n) {
  let u = (0, l.e7)([o.Z], () => null != e ? o.Z.getGuild(e) : null),
{
  canCreateExpressions: S,
  canManageAllExpressions: d
} = (0, s.XJ)(u);
  return null != e && S && d ? (0, a.jsx)(r.MenuItem, {
id: c.Z.Messages.SERVER_SETTINGS,
label: c.Z.Messages.SERVER_SETTINGS,
action: () => {
  t.Z.open(e, i.pNK.SOUNDBOARD), null == n || n();
}
  }) : null;
}