"use strict";
n.r(t), n.d(t, {
  useSubscribeGuildMembers: function() {
    return o
  }
}), n("37983");
var l = n("884691"),
  u = n("917351"),
  i = n.n(u);
n("233736");
var r = n("666020");

function o(e) {
  l.useEffect(() => (i.forEach(e, (e, t) => (0, r.subscribeMembers)(t, e)), () => {
    i.forEach(e, (e, t) => (0, r.unsubscribeMembers)(t, e))
  }), [e])
}