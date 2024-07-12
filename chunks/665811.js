t.d(n, {
  U: function() {
return o;
  }
});
var i = t(735250);
t(470079);
var a = t(481060),
  l = t(542094),
  s = t(689938),
  r = t(405325);

function o(e) {
  let {
action: n,
onClick: t
  } = e, o = n === l.JS.JOIN ? s.Z.Messages.EMBEDDED_ACTIVITIES_JOIN_ACTIVITY : s.Z.Messages.EMBEDDED_ACTIVITIES_LEAVE_ACTIVITY, c = n === l.JS.JOIN ? a.Button.Colors.PRIMARY : a.Button.Colors.RED;
  return (0, i.jsx)('div', {
className: r.activityOverlay,
children: (0, i.jsx)(a.Button, {
  className: r.actionButton,
  onClick: t,
  size: a.Button.Sizes.MEDIUM,
  color: c,
  children: o
})
  });
}