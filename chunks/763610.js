"use strict";
t.d(n, {
  Z: function() {
    return c
  }
});
var l = t(735250),
  a = t(470079),
  s = t(120356),
  i = t.n(s),
  r = t(481060),
  u = t(53281),
  o = t(383638);

function c(e) {
  let {
    filename: n,
    className: t,
    filters: s,
    buttonText: c,
    placeholder: d,
    onFileSelect: f
  } = e, m = a.useRef(null);
  return (0, l.jsxs)("div", {
    className: i()(t, o.fileUpload),
    children: [(0, l.jsx)("input", {
      className: o.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: d,
      type: "text",
      value: n
    }), (0, l.jsxs)(r.Button, {
      size: r.Button.Sizes.MIN,
      className: o.fileUploadButton,
      children: [c, (0, l.jsx)(u.Z, {
        ref: m,
        tabIndex: -1,
        onChange: e => {
          var n;
          f(null === (n = e.currentTarget.files) || void 0 === n ? void 0 : n[0])
        },
        multiple: !1,
        filters: s
      })]
    })]
  })
}