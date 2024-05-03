"use strict";
n.r(t);
var a = n("735250"),
  i = n("470079"),
  r = n("673591");
t.default = e => {
  let {
    copy: t,
    isSelected: n = !1,
    onSelect: s
  } = e;
  return i.useEffect(() => {
    n && (null == s || s())
  }, [n, s]), (0, a.jsx)(r.default, {
    copy: t
  })
}