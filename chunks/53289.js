"use strict";
n.d(t, {
  Z: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  r = n(392711),
  s = n(442837),
  o = n(208826),
  a = n(40851),
  l = n(607070),
  u = n(585483),
  _ = n(981631);
let d = (0, r.debounce)(e => {
  setTimeout(() => {
    var t;
    null === (t = e.current) || void 0 === t || t.focus()
  }, 0)
}, 50);

function c(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
    r = (0, s.e7)([l.Z], () => l.Z.keyboardModeEnabled),
    c = (0, o.Z)(),
    [E, I] = i.useState(!1),
    T = (0, a.Aq)();
  return i.useEffect(() => {
    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);

    function e() {
      c && (T.dispatch(_.CkL.POPOUT_CLOSE), u.S.dispatch(_.CkL.CONTEXT_MENU_CLOSE))
    }
  }, [n, c, t, T]), i.useEffect(() => {
    var i, s, o;
    if (r || !E || !t) return;
    let a = c;

    function l(t) {
      let n = t.relatedTarget;
      setTimeout(() => {
        (null == n || "BUTTON" === n.tagName) && !a && d(e)
      }, 100)
    }
    return null === (i = e.current) || void 0 === i || i.addEventListener("focusout", l), (null === (s = n.document.activeElement) || void 0 === s ? void 0 : s.tagName) !== "IFRAME" && !a && (null === (o = e.current) || void 0 === o || o.focus()), () => {
      var t;
      null === (t = e.current) || void 0 === t || t.removeEventListener("focusout", l), a = !0
    }
  }, [t, E, r, e, n, c]), I
}