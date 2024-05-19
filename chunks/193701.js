"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var a = n("442837"),
  l = n("375954");

function s(e) {
  let t = (0, a.useStateFromStores)([l.default], () => l.default.getLastMessage(e));
  return null == t ? void 0 : t.changelogId
}