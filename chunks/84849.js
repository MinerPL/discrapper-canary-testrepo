"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("477566"),
  o = n("29212"),
  u = n("817892"),
  d = n("782340");

function c(e) {
  let {
    messageId: t,
    channelId: c
  } = e, f = (0, a.useStateFromStores)([u.default], () => u.default.canSubmitFpReport(t)), E = l.useCallback(() => {
    if (!f) {
      r.default.show({
        title: d.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
        body: d.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
        confirmText: d.default.Messages.OKAY
      }), o.default.disableFalsePositiveButton(c, t);
      return
    }(0, i.openModalLazy)(async () => {
      let {
        default: e
      } = await n("492996");
      return n => (0, s.jsx)(e, {
        channelId: c,
        messageId: t,
        ...n
      })
    })
  }, [c, t, f]);
  return (0, s.jsx)(i.Button, {
    size: i.Button.Sizes.MEDIUM,
    color: i.Button.Colors.PRIMARY,
    onClick: E,
    disabled: !f,
    children: d.default.Messages.SENDER_BLOCKED_MEDIA_MARK_FALSE_POSITIVE
  })
}