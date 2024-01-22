"use strict";
n.r(t), n.d(t, {
  useMenuTriggerState: function() {
    return o
  }
}), n("222007");
var r = n("811719"),
  i = n("884691");

function o(e) {
  let t = (0, r.useOverlayTriggerState)(e),
    [n, o] = (0, i.useState)(null);
  return {
    focusStrategy: n,
    ...t,
    open() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      o(e), t.open()
    },
    toggle() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
      o(e), t.toggle()
    }
  }
}