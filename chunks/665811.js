n.d(t, {
  U: function() {
return o;
  }
});
var a = n(735250);
n(470079);
var i = n(481060),
  l = n(542094),
  s = n(689938),
  r = n(637389);

function o(e) {
  let {
action: t,
onClick: n
  } = e, o = t === l.JS.JOIN ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY, c = t === l.JS.JOIN ? i.Button.Colors.PRIMARY : i.Button.Colors.RED;
  return (0, a.jsx)('div', {
className: r.activityOverlay,
children: (0, a.jsx)(i.Button, {
  className: r.actionButton,
  onClick: n,
  size: i.Button.Sizes.MEDIUM,
  color: c,
  children: o
})
  });
}