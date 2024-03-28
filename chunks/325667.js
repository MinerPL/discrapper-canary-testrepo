"use strict";
a.r(t), a.d(t, {
  default: function() {
    return i
  }
});
var l = a("470079"),
  n = a("593473"),
  s = a("613828");

function i() {
  let e = (0, s.useLocation)(),
    {
      highlight_channel_id: t,
      highlight_message_id: a
    } = (0, n.parse)(e.search);
  return l.useMemo(() => null != a && null != t ? {
    messageId: a,
    channelId: t
  } : null, [t, a])
}