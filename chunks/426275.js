n.d(t, {
  Z: function() {
return _;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(692547),
  r = n(481060),
  l = n(375954),
  o = n(876338),
  c = n(912332),
  u = n(245216),
  d = n(689938);

function _(e) {
  let {
className: t,
channelId: n,
messageId: _,
targetKind: E,
embedIndex: I
  } = e, m = a.useCallback(() => {
let e = l.Z.getMessage(n, _);
if (null == e)
  return;
let t = (0, o.j)(e, {
  targetKind: E,
  embedIndex: I
});
(0, c.l8)({
  channelId: n,
  messageId: _,
  source: 'message-actions',
  forwardOptions: t
});
  }, [
n,
I,
_,
E
  ]);
  return (0, i.jsx)(r.CircleIconButton, {
className: t,
tooltip: d.Z.Messages.MESSAGE_ACTION_FORWARD,
color: r.CircleIconButtonColors.SECONDARY,
icon: (0, i.jsx)(u.Z, {
  size: 'xs',
  color: s.Z.colors.INTERACTIVE_NORMAL
}),
onClick: m
  });
}