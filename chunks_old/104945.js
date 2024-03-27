"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var r = n("37983"),
  l = n("884691"),
  i = n("414456"),
  a = n.n(i),
  s = n("77078"),
  u = n("371642"),
  o = n("559046");

function c(e) {
  let {
    filename: t,
    className: n,
    filters: i,
    buttonText: c,
    placeholder: d,
    onFileSelect: f
  } = e, h = l.useRef(null);
  return (0, r.jsxs)("div", {
    className: a(n, o.fileUpload),
    children: [(0, r.jsx)("input", {
      className: o.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: t
    }), (0, r.jsxs)(s.Button, {
      size: s.Button.Sizes.MIN,
      className: o.fileUploadButton,
      children: [c, (0, r.jsx)(u.default, {
        ref: h,
        tabIndex: -1,
        onChange: e => {
          var t;
          let n = null === (t = e.currentTarget.files) || void 0 === t ? void 0 : t[0];
          f(n)
        },
        multiple: !1,
        filters: i
      })]
    })]
  })
}