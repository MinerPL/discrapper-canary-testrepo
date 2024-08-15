t.d(n, {
  Z: function() {
return d;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(346610),
  r = t(868643),
  s = t(245216),
  o = t(996861),
  u = t(689938);

function d(e, n) {
  let t = (0, r.a)(e),
{
  canForwardMessages: d
} = (0, l.yk)({
  location: 'MessageActionsMenu'
}, {
  autoTrackExposure: !1
});
  return t && d ? (0, i.jsx)(a.MenuItem, {
id: 'forward',
label: u.Z.Messages.MESSAGE_ACTION_FORWARD,
icon: s.Z,
action: () => {
  (0, o.ts)(n, e);
}
  }) : null;
}