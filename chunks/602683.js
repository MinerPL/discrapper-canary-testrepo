"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("481060");
t.default = function(e) {
  let {
    assetKey: t,
    initialValue: s,
    onMessageChange: i,
    title: r
  } = e, [o, d] = n.useState(null != s ? s : "");
  return (0, a.jsxs)(l.FormItem, {
    children: [(0, a.jsx)(l.FormTitle, {
      tag: l.FormTitleTags.H5,
      children: r
    }), (0, a.jsx)(l.FormText, {
      children: (0, a.jsx)(l.TextInput, {
        value: o,
        onChange: function(e) {
          d(e), i(t, e)
        }
      })
    })]
  })
}