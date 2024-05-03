"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("882485"),
  i = s("481060"),
  r = s("763610"),
  o = s("836058");
t.default = function(e) {
  var t, s;
  let {
    assetKey: d,
    filters: u,
    initialValue: c,
    onFileChange: S,
    title: E
  } = e, [T, f] = n.useState(null), [m, _] = n.useState(!1);
  return (0, a.jsxs)(i.FormItem, {
    children: [(0, a.jsx)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      children: (0, a.jsxs)("div", {
        className: o.headingWithTooltip,
        children: [E, (0, a.jsx)(i.Tooltip, {
          text: "Supported asset formats: ".concat(u.join(", ")),
          children: e => (0, a.jsx)(l.CircleInformationIcon, {
            ...e,
            height: 16,
            width: 16
          })
        })]
      })
    }), (0, a.jsx)(r.default, {
      filename: null !== (s = null !== (t = null == T ? void 0 : T.name) && void 0 !== t ? t : c) && void 0 !== s ? s : "",
      filters: [{
        name: E,
        extensions: u
      }],
      buttonText: "Browse",
      placeholder: "Select an asset",
      onFileSelect: function(e) {
        if (f(null != e ? e : null), null == e) return;
        _(!0);
        let t = new FileReader;
        t.onload = function() {
          "string" == typeof t.result && (S(d, t.result), _(!1))
        }, t.onerror = function(e) {
          console.error(e)
        }, t.readAsDataURL(e)
      }
    })]
  })
}