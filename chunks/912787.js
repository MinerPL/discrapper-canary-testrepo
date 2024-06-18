"use strict";
n.d(t, {
  Z: function() {
    return o
  },
  i: function() {
    return a
  }
});
var i = n(442837),
  r = n(592125),
  s = n(126134);

function o(e) {
  let t = a(e);
  return (0, i.e7)([r.Z], () => r.Z.getChannel(t))
}

function a(e) {
  let {
    category: t
  } = e;
  return t === s.L.HANGOUT || t === s.L.GAMING ? e.channelId : t === s.L.EVENT ? e.event.channel_id : t === s.L.EMBEDDED_ACTIVITY ? e.embeddedActivities[0].channelId : null
}