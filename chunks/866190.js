"use strict";
n.r(t), n.d(t, {
  useIsWindowFocused: function() {
    return a
  }
});
var r = n("884691"),
  i = n("446674"),
  s = n("244201"),
  o = n("471671");

function a() {
  let {
    windowId: e
  } = r.useContext(s.default);
  return (0, i.useStateFromStores)([o.default], () => o.default.isFocused(e), [e])
}