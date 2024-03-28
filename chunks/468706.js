"use strict";
n.r(t), n.d(t, {
  handleSenderFalsePositiveFlow: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("481060"),
  l = n("240872"),
  i = n("923500"),
  r = n("163268"),
  o = n("774863"),
  u = n("689938");

function d(e, t) {
  if ((0, r.trackMediaRedactionAction)({
      action: r.TrackMediaRedactionActionType.EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED,
      messageId: t,
      channelId: e
    }), !o.default.canSubmitFpReport(t)) {
    l.default.show({
      title: u.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_HEADER,
      body: u.default.Messages.SENDER_BLOCKED_MEDIA_EXPIRED_ERROR_BODY,
      confirmText: u.default.Messages.OKAY
    }), i.default.disableFalsePositiveButton(e, t);
    return
  }(0, a.openModalLazy)(async () => {
    let {
      default: a
    } = await n("773276");
    return n => (0, s.jsx)(a, {
      channelId: e,
      messageId: t,
      ...n
    })
  })
}