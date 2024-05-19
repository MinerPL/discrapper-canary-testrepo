"use strict";
i.r(t), i.d(t, {
  default: function() {
    return o
  }
});
var l = i("735250");
i("470079");
var a = i("120356"),
  n = i.n(a),
  s = i("481060"),
  r = i("66585");

function o(e) {
  let {
    supportedLanguages: t
  } = e;
  return (0, l.jsx)("ul", {
    className: r.outerContainer,
    children: t.map(e => (0, l.jsx)("li", {
      className: n()(r.innerContainer, r.languageItem),
      children: (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e
      })
    }, e))
  })
}