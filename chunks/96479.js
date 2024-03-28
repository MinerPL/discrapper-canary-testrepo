"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var s = n("6025"),
  l = n("433355"),
  i = n("626135"),
  r = n("585483"),
  o = n("922409"),
  u = n("545724"),
  d = n("749405"),
  c = n("981631");

function f(e) {
  let {
    index: t,
    className: n,
    channel: f,
    user: E,
    hasSingleMessageRequest: h
  } = e, {
    channelId: _
  } = (0, o.useMessageRequestSidebarState)();
  return (0, a.jsx)(u.default, {
    index: t,
    className: n,
    isFocused: _ === f.id,
    channel: f,
    user: E,
    onClick: e => {
      e.stopPropagation(), s.default.openPrivateChannelAsSidebar({
        channelId: f.id,
        baseChannelId: l.MESSAGE_REQUESTS_BASE_CHANNEL_ID,
        hasSingleMessageRequest: h
      }), i.default.track(c.AnalyticEvents.MESSAGE_REQUEST_PREVIEW_VIEWED, {
        is_spam: !1,
        channel_id: f.id,
        other_user_id: E.id
      }), setTimeout(() => {
        r.ComponentDispatch.dispatch(c.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
          channelId: f.id
        })
      }, 0)
    },
    children: e => (0, a.jsx)(d.PendingMessageRequestRowItem, {
      active: e,
      user: E,
      channel: f
    })
  })
}