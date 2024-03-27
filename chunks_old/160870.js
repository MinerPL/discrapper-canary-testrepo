"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("446674"),
  s = n("271938"),
  l = n("18494"),
  i = n("325861");

function r(e) {
  return (0, a.useStateFromStores)([s.default, l.default, i.default], () => {
    let t = s.default.getId();
    return l.default.getVoiceChannelId() === e ? i.default.getPermissionsForUser(t, e) : null
  }, [e])
}