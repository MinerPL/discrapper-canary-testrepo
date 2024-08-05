n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(692547),
  r = n(481060),
  l = n(375954),
  o = n(876338),
  c = n(912332),
  u = n(689938);

function d(e) {
  let {
className: t,
channelId: n,
messageId: d,
targetKind: _,
embedIndex: E
  } = e, I = s.useCallback(() => {
let e = l.Z.getMessage(n, d);
if (null == e)
  return;
let t = (0, o.j)(e, {
  targetKind: _,
  embedIndex: E
});
(0, c.l8)({
  channelId: n,
  messageId: d,
  source: 'message-actions',
  forwardOptions: t
});
  }, [
n,
E,
d,
_
  ]);
  return (0, i.jsx)(r.CircleIconButton, {
className: t,
tooltip: u.Z.Messages.MESSAGE_ACTION_FORWARD,
color: r.CircleIconButtonColors.SECONDARY,
icon: (0, i.jsx)(r.ChatArrowRightIcon, {
  size: 'xs',
  color: a.Z.colors.INTERACTIVE_NORMAL
}),
onClick: I
  });
}