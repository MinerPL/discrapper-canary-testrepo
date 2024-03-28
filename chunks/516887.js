"use strict";
n.r(t);
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("826298"),
  u = n("325745");
t.default = l.memo(function(e) {
  var t;
  let {
    className: n,
    channel: l,
    section: s
  } = e, d = null != s ? (0, o.getIconComponent)(s) : null;
  return (0, a.jsx)("div", {
    className: i()(n, u.wrapper),
    children: (0, a.jsx)("div", {
      className: u.icon,
      children: null != d ? (0, a.jsx)(r.Tooltip, {
        text: null !== (t = null == s ? void 0 : s.name) && void 0 !== t ? t : "",
        position: "top",
        children: e => (0, a.jsx)(d, {
          ...e,
          channel: l,
          section: s,
          width: 24,
          height: 24
        })
      }) : null
    })
  })
})