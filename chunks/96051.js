"use strict";
n.r(t);
var a = n("570140"),
  s = n("317770"),
  l = n("117984");

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
t.default = new r