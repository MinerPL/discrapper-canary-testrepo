"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("390322"),
  i = n("381871");
t.default = e => {
  let {
    isHovered: t,
    closePopout: n,
    onMouseEnter: r,
    onMouseLeave: o,
    onFocus: u,
    channel: d
  } = e;
  return l.useEffect(() => {
    !t && n()
  }, [n, t]), (0, a.jsx)(s.default, {
    children: (0, a.jsx)("div", {
      onMouseEnter: r,
      onMouseLeave: o,
      children: (0, a.jsx)(i.default, {
        channel: d,
        closePopout: n,
        onFocus: u
      })
    })
  })
}