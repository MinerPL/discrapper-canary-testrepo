"use strict";
n.r(e), n.d(e, {
  default: function() {
    return i
  }
});
var l = n("917351"),
  u = n.n(l);

function i(t, e) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
  return u(t).map(t => "null" === t.channel.id ? e[t.channel.id] : [t, e[t.channel.id]]).flattenDeep().filter(n).value()
}