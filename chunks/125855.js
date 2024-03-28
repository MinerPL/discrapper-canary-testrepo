"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("735250");
n("470079");
var s = n("6025"),
  l = n("433355"),
  i = n("626135"),
  r = n("585483"),
  o = n("545724"),
  u = n("426051"),
  d = n("981631");

function c(e) {
  let {
    index: t,
    className: n,
    channel: c,
    user: f,
    hasSingleMessageRequest: E
  } = e;
  return (0, a.jsx)(o.default, {
    index: t,
    className: n,
    isFocused: !1,
    channel: c,
    user: f,
    onClick: e => {
      e.stopPropagation(), s.default.openPrivateChannelAsSidebar({
        channelId: c.id,
        baseChannelId: l.MESSAGE_REQUESTS_BASE_CHANNEL_ID,
        hasSingleMessageRequest: E
      }), i.default.track(d.AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !0,
        channel_id: c.id,
        other_user_id: f.id
      }), setTimeout(() => {
        r.ComponentDispatch.dispatch(d.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: c.id
        })
      }, 0)
    },
    children: e => (0, a.jsx)(u.default, {
      active: e,
      user: f,
      channel: c
    })
  })
}