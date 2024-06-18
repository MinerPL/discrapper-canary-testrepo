"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(47120);
var i = n(470079),
  r = n(40851),
  s = n(981631);
let o = ["Shift", "Alt", "Meta", "Control"];

function a(e, t) {
  let [n, a] = i.useState(0), l = (0, r.Aq)();
  i.useEffect(() => {
    let e = () => a(e => e + 1),
      t = () => a(e => Math.max(0, e - 1));
    return l.subscribe(s.CkL.POPOUT_SHOW, e), l.subscribe(s.CkL.POPOUT_HIDE, t), () => {
      l.unsubscribe(s.CkL.POPOUT_SHOW, e), l.unsubscribe(s.CkL.POPOUT_HIDE, t)
    }
  }, [l]);
  let [u, _] = i.useState(!1);
  return i.useLayoutEffect(() => {
    let i = e => {
        if ((!t || n > 0) && u) {
          _(!1);
          return
        }
        if (!(!u && n > 0 || e instanceof KeyboardEvent && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || o.indexOf(e.key) >= 0))) _(e => !e)
      },
      r = u ? "keyup" : "mousemove";
    return t && e.addEventListener(r, i), () => null == e ? void 0 : e.removeEventListener(r, i)
  }, [e, u, n, t]), t && 0 === n && u
}