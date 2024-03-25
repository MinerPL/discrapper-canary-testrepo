"use strict";
n.r(t), n.d(t, {
  useSubscribeToGuildMemberUpdates: function() {
    return s
  }
});
var l = n("884691"),
  a = n("666020");

function s(e) {
  l.useEffect(() => (a.subscribeToMemberUpdates(e), () => {
    a.unsubscribeFromMemberUpdates(e)
  }), [e])
}