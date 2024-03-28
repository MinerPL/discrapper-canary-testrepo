"use strict";
n.r(t), n.d(t, {
  useSubscribeToGuildMemberUpdates: function() {
    return s
  }
});
var l = n("470079"),
  a = n("941028");

function s(e) {
  l.useEffect(() => (a.subscribeToMemberUpdates(e), () => {
    a.unsubscribeFromMemberUpdates(e)
  }), [e])
}