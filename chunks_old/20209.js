"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("446674"),
  i = n("162771"),
  l = n("49111");

function s() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getGuildId());
  return e === l.FAVORITES
}