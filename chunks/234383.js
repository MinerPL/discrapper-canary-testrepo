"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var l = n("442837"),
  a = n("937111"),
  s = n("430824");

function i() {
  return (0, l.useStateFromStoresArray)([a.default, s.default], () => {
    let e = a.default.computeGuildIds(),
      t = s.default.getGuilds();
    return e.filter(e => null == t[e])
  })
}