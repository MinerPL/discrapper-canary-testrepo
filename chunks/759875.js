t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  r = t(346610),
  l = t(868643),
  o = t(996861),
  s = t(689938);

function u(e, n) {
  let t = (0, l.a)(e),
{
  canForwardMessages: u
} = r.w.useExperiment({
  location: 'MessageActionsMenu'
}, {
  autoTrackExposure: !1
});
  return t && u ? (0, i.jsx)(a.MenuItem, {
id: 'forward',
label: s.Z.Messages.MESSAGE_ACTION_FORWARD,
icon: a.ChatArrowRightIcon,
action: () => {
  (0, o.ts)(n, e);
}
  }) : null;
}