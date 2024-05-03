"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  l = s.n(n),
  i = s("481060"),
  r = s("836058");
t.default = function(e) {
  let {
    children: t,
    withBorder: s = !1
  } = e;
  return (0, a.jsx)(i.FocusBlock, {
    children: (0, a.jsx)(i.Card, {
      className: l()(r.componentPreviewWrapper, {
        [r.componentPreviewWrapperBordered]: s
      }),
      outline: s,
      children: (0, a.jsx)("div", {
        className: r.componentPreview,
        onClickCapture: function(e) {
          e.stopPropagation()
        },
        children: t
      })
    })
  })
}