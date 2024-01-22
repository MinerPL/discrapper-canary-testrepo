"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("917351"),
  l = n.n(i);

function u(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
  return l(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
}