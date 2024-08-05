n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(442837),
  r = n(481060),
  l = n(468706),
  o = n(774863),
  c = n(689938);

function u(e) {
  let {
messageId: t,
channelId: n
  } = e, u = (0, a.e7)([o.Z], () => o.Z.canSubmitFpReport(t)), d = s.useCallback(() => {
(0, l.e)(n, t);
  }, [
n,
t
  ]);
  return (0, i.jsx)(r.Button, {
size: r.Button.Sizes.MEDIUM,
color: r.Button.Colors.PRIMARY,
onClick: d,
disabled: !u,
children: c.Z.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  });
}