"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("47120");
var s = n("470079");
let a = !1,
  l = new Set;

function i(e) {
  e !== a && (a = e, l.forEach(e => e(a)))
}

function r() {
  let [e, t] = s.useState(a);
  return s.useEffect(() => {
    let e = e => {
      t(e)
    };
    return l.add(e), () => {
      l.delete(e)
    }
  }, []), e
}
window.addEventListener("keydown", e => {
  i(e.shiftKey)
}), window.addEventListener("keyup", e => {
  i(e.shiftKey)
}), window.addEventListener("mousemove", e => {
  i(e.shiftKey)
}), window.addEventListener("blur", () => {
  i(!1)
})