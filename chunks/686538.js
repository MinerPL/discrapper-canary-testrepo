"use strict";
n.r(t), n.d(t, {
  handleSenderFalsePositiveFlow: function() {
    return d
  }
});
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("477566"),
  i = n("290226"),
  r = n("447435"),
  o = n("817892"),
  u = n("782340");

function d(e, t) {
  (0, r.trackMediaRedactionAction)({
    action: r.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
    messageId: t,
    channelId: e
  });
  let d = o.default.canSubmitFpReport(t);
  if (!d) {
    l.default.show({
      title: u.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
      body: u.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
      confirmText: u.default.Messages.OKAY
    }), i.default.disableFalsePositiveButton(e, t);
    return
  }(0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await n("492996");
    return n => (0, s.jsx)(a, {
      channelId: e,
      messageId: t,
      ...n
    })
  })
}