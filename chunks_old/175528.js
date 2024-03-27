"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var s = n("884691"),
  a = n("240249");

function l(e, t) {
  let n = s.useRef(null),
    l = s.useCallback((e, t) => {
      var s, a, l;
      e.preventDefault(), e.clipboardData.setData("application/x-discord-interaction-data", JSON.stringify(t)), e.clipboardData.setData("text/plain", null !== (l = null === (a = n.current) || void 0 === a ? void 0 : null === (s = a.textContent) || void 0 === s ? void 0 : s.trim()) && void 0 !== l ? l : "")
    }, []);
  return a.useCommand(e, t), {
    onCopy: l,
    copyRef: n
  }
}