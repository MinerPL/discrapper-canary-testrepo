"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return r
  }
});
var i = n("884691"),
  a = n("446674"),
  l = n("244201"),
  s = n("471671");

function r() {
  let {
    windowId: e
  } = i.useContext(l.default);
  return (0, a.useStateFromStores)([s.default], () => s.default.isFocused(e), [e])
}