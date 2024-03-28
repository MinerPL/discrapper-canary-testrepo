"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("442837"),
  s = n("314897"),
  l = n("944486"),
  i = n("88751");

function r(e) {
  return (0, a.useStateFromStores)([s.default, l.default, i.default], () => {
    let t = s.default.getId();
    return l.default.getVoiceChannelId() === e ? i.default.getPermissionsForUser(t, e) : null
  }, [e])
}