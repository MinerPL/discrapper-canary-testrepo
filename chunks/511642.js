"use strict";
n.r(t), n.d(t, {
  ackGuildHome: function() {
    return i
  }
});
var l = n("45114"),
  a = n("709054"),
  s = n("490897");
let i = e => {
  (0, l.ackGuildFeature)(e, s.ReadStateTypes.GUILD_HOME, a.default.fromTimestamp(Date.now()))
}