"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("913144"),
  s = n("316272"),
  l = n("200008");

function i(e) {
  let {
    channel: {
      id: t
    }
  } = e;
  (0, l.removeFavoriteChannel)(t)
}
class r extends s.default {
  _initialize() {
    a.default.subscribe("CHANNEL_DELETE", i)
  }
  _terminate() {
    a.default.unsubscribe("CHANNEL_DELETE", i)
  }
}
var o = new r