"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var i = l("735250");
l("470079");
var a = l("803997"),
  n = l.n(a),
  s = l("481060"),
  r = l("124445");

function c(e) {
  let {
    loading: t,
    children: l
  } = e;
  return (0, i.jsxs)("div", {
    className: r.container,
    children: [t ? (0, i.jsx)("div", {
      className: r.spinnerContainer,
      children: (0, i.jsx)(s.Spinner, {
        className: r.spinner,
        type: s.Spinner.Type.SPINNING_CIRCLE
      })
    }) : null, (0, i.jsx)("div", {
      className: n()({
        [r.loading]: t
      }),
      children: l
    })]
  })
}