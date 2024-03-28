"use strict";
t.r(l), t.d(l, {
  default: function() {
    return r
  }
});
var a = t("735250"),
  s = t("470079"),
  i = t("803997"),
  n = t.n(i),
  o = t("481060"),
  u = t("53281"),
  d = t("673450");

function r(e) {
  let {
    filename: l,
    className: t,
    filters: i,
    buttonText: r,
    placeholder: c,
    onFileSelect: m
  } = e, I = s.useRef(null);
  return (0, a.jsxs)("div", {
    className: n()(t, d.fileUpload),
    children: [(0, a.jsx)("input", {
      className: d.fileUploadInput,
      tabIndex: -1,
      readOnly: !0,
      placeholder: c,
      type: "text",
      value: l
    }), (0, a.jsxs)(o.Button, {
      size: o.Button.Sizes.MIN,
      className: d.fileUploadButton,
      children: [r, (0, a.jsx)(u.default, {
        ref: I,
        tabIndex: -1,
        onChange: e => {
          var l;
          m(null === (l = e.currentTarget.files) || void 0 === l ? void 0 : l[0])
        },
        multiple: !1,
        filters: i
      })]
    })]
  })
}