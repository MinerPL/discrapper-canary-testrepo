"use strict";

function i(e, t) {
  let n = e.parentElement;
  for (; null != n;) {
    if (n.classList.contains(t)) return n;
    n = n.parentElement
  }
  return null
}
n.d(t, {
  Z: function() {
    return i
  }
})