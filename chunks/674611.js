n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250),
  a = n(470079),
  s = n(442837),
  r = n(481060),
  l = n(468706),
  o = n(774863),
  c = n(689938);

function d(e) {
  let {
messageId: t,
channelId: n
  } = e, d = (0, s.e7)([o.Z], () => o.Z.canSubmitFpReport(t)), u = a.useCallback(() => {
(0, l.e)(n, t);
  }, [
n,
t
  ]);
  return (0, i.jsx)(r.Button, {
size: r.Button.Sizes.MEDIUM,
color: r.Button.Colors.PRIMARY,
onClick: u,
disabled: !d,
children: c.Z.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  });
}