"use strict";
var i = n(470079),
  r = n(580747),
  s = n(607789);
t.Z = (e, t) => {
  let n = (0, r.Z)("profile_effect_debug_controls"),
    {
      id: o,
      preset: a,
      increment: l,
      decrement: u
    } = (0, s.Z)(e);
  return i.useEffect(() => {
    if (!n) return;
    let e = e => {
      "ArrowUp" === e.key && (l(), e.preventDefault()), "ArrowDown" === e.key && (u(), e.preventDefault()), "r" === e.key && (null == t || t(), e.preventDefault())
    };
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, []), {
    id: null != o ? o : null,
    preset: a
  }
}