"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(558522),
  o = n(888868);

function a(e) {
  let {
    imageBackground: t,
    applicationName: n,
    imageClassName: a,
    imageNotFoundClassName: l
  } = e, [u, _] = r.useState(!1);
  return "not-found" === t.state || u ? (0, i.jsx)("div", {
    className: l,
    children: (0, i.jsx)(s.Z, {
      className: o.brokenImageIcon
    })
  }) : "loading" === t.state ? null : (0, i.jsx)("img", {
    alt: n,
    className: a,
    src: t.url,
    onError: () => _(!0)
  })
}