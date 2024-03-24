"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("686538"),
  o = n("817892"),
  u = n("782340");

function d(e) {
  let {
    messageId: t,
    channelId: n
  } = e, d = (0, a.useStateFromStores)([o.default], () => o.default.canSubmitFpReport(t)), c = l.useCallback(() => {
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