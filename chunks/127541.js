"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("47120");
var a = n("470079");

function s(e) {
  let [t, n] = a.useState(0), s = a.useCallback(() => {
    let t = window.innerWidth;
    for (let a of e) {
      let [e, s] = a;
      if (t >= e) {
        n(s);
        return
      }
    }
  }, [e]);
  return a.useEffect(() => {
    s()
  }, [s]), a.useEffect(() => (window.addEventListener("resize", s), () => {
    window.removeEventListener("resize", s)
  })), t
}