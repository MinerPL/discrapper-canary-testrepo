"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("132338"),
  o = n("264558");
let u = l.forwardRef(function(e, t) {
  let {
    className: n,
    isBeforeGroup: l = !1,
    ...s
  } = e, {
    children: u
  } = s;
  return (0, a.jsx)(r.default, {
    ...s,
    ref: t,
    role: "separator",
    "aria-label": "string" == typeof u ? u : void 0,
    className: i()(n, {
      [o.divider]: !0,
      [o.hasContent]: null != u,
      [o.beforeGroup]: l
    })
  })
});
t.default = l.memo(u)