"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("442837"),
  i = n("481060"),
  r = n("468706"),
  o = n("774863"),
  u = n("689938");

function d(e) {
  let {
    messageId: t,
    channelId: n
  } = e, d = (0, l.useStateFromStores)([o.default], () => o.default.canSubmitFpReport(t)), c = a.useCallback(() => {
    (0, r.handleSenderFalsePositiveFlow)(n, t)
  }, [n, t]);
  return (0, s.jsx)(i.Button, {
    size: i.Button.Sizes.MEDIUM,
    color: i.Button.Colors.PRIMARY,
    onClick: c,
    disabled: !d,
    children: u.default.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  })
}