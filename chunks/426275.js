n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(692547),
  r = n(481060),
  l = n(375954),
  o = n(876338),
  c = n(912332),
  d = n(689938);

function u(e) {
  let {
className: t,
channelId: n,
messageId: u,
targetKind: _,
embedIndex: E
  } = e, I = a.useCallback(() => {
let e = l.Z.getMessage(n, u);
if (null == e)
  return;
let t = (0, o.j)(e, {
  targetKind: _,
  embedIndex: E
});
(0, c.l8)({
  channelId: n,
  messageId: u,
  source: 'message-actions',
  forwardOptions: t
});
  }, [
n,
E,
u,
_
  ]);
  return (0, i.jsx)(r.CircleIconButton, {
className: t,
tooltip: d.Z.Messages.MESSAGE_ACTION_FORWARD,
color: r.CircleIconButtonColors.SECONDARY,
icon: (0, i.jsx)(r.ChatArrowRightIcon, {
  size: 'xs',
  color: s.Z.colors.INTERACTIVE_NORMAL
}),
onClick: I
  });
}