"use strict";
n.d(t, {
  O: function() {
    return l
  },
  W: function() {
    return u
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(134432),
  o = n(931761),
  a = n(242493);

function l() {
  (0, s.po)("".concat(a, "?query=true"))
}

function u(e) {
  let {
    onPlayed: t,
    played: n
  } = e, [s, l] = r.useState(n), u = r.useRef(0);
  if (r.useEffect(() => (clearTimeout(u.current), u.current = setTimeout(() => {
      t()
    }, 3e3), () => {
      clearTimeout(u.current), t()
    }), [t]), r.useEffect(() => {
      l(e => !e)
    }, [n]), n) return null;
  let _ = "".concat(a, "?query=").concat(s);
  return (0, i.jsx)("div", {
    className: o.demoEffectOverlay,
    children: (0, i.jsx)("img", {
      alt: "",
      className: o.demoEffectImg,
      src: _
    })
  })
}