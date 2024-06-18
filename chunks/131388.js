"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var i = n(470079),
  r = n(40851);

function s(e) {
  let {
    renderWindow: t
  } = (0, i.useContext)(r.ZP), [n, s] = (0, i.useState)(() => t.matchMedia(e).matches);
  return (0, i.useEffect)(() => {
    let n = t.matchMedia(e),
      i = e => {
        s(null == e ? void 0 : e.matches)
      };
    return i(n), n.addListener(i), () => n.removeListener(i)
  }, [e, t]), n
}