"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("37983");
a("884691");
var s = a("77078"),
  n = a("191814"),
  i = a("903635"),
  r = a("662833");

function d(e) {
  var t;
  let {
    attachment: a
  } = e, d = null !== (t = a.size) && void 0 !== t ? t : 0;
  return (0, l.jsxs)("div", {
    className: r.container,
    children: [(0, l.jsx)(i.default, {
      width: 16,
      height: 16,
      className: r.fileIcon
    }), (0, l.jsx)(n.default, {
      size: 8,
      horizontal: !0
    }), (0, l.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-normal",
      className: r.fileName,
      children: a.filename
    }), (0, l.jsx)(n.default, {
      size: 8,
      horizontal: !0
    }), (0, l.jsx)("div", {
      className: r.dot
    }), (0, l.jsx)(n.default, {
      size: 8,
      horizontal: !0
    }), (0, l.jsxs)(s.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: [Math.round(d / 1024 / 1024 * 100) / 100, "MB"]
    })]
  })
}