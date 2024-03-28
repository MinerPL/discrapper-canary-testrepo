"use strict";

function r(e) {
  let t = e;
  for (; null != t && t !== document.body;) {
    if ((null == t ? void 0 : t.getAttribute("aria-hidden")) === "true") return !0;
    t = t.parentElement
  }
  return !1
}
n.r(t), n.d(t, {
  ARIA_ATTRIBUTE_NAMES: function() {
    return i
  },
  ARIA_ATTRIBUTE_SELECTOR: function() {
    return a
  },
  isARIAHidden: function() {
    return r
  }
}), n("47120");
let i = Array.from(n("485589").aria.keys()),
  a = i.map(e => "[".concat(e, "]")).join(", ")