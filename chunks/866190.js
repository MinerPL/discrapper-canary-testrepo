"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return o
  }
});
var i = n("884691"),
  r = n("446674"),
  l = n("244201"),
  s = n("471671");

function o() {
  let {
    windowId: e
  } = i.useContext(l.default);
  return (0, r.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
}