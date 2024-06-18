"use strict";
t.d(s, {
  Z: function() {
    return m
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(477690),
  o = t(481060),
  c = t(518738),
  d = t(208567),
  u = t(54264),
  E = t(176278),
  _ = t(624138),
  I = t(689938),
  T = t(3827);
let N = (0, _.Mg)(r.Z.ROLE_ICON_UPLOADER_ICON_SIZE);

function m(e) {
  let {
    role: s,
    "aria-label": t = I.Z.Messages.UPLOAD_IMAGE,
    className: l,
    onClick: r,
    disabled: _ = !1
  } = e, m = i.useRef(null), S = i.useMemo(() => null != s ? (0, c.Kz)(s, N) : null, [s]), h = null != S ? (0, n.jsx)(E.Z, {
    enableTooltip: !1,
    className: T.icon,
    ...S
  }) : (0, n.jsx)(u.Z, {
    className: T.icon
  });
  return (0, n.jsx)(o.FocusRing, {
    ringTarget: m,
    children: (0, n.jsxs)(o.Clickable, {
      "aria-label": t,
      className: a()(T.container, l, {
        [T.disabled]: _
      }),
      onClick: _ ? void 0 : r,
      "aria-disabled": _,
      children: [(0, n.jsx)("div", {
        ref: m,
        className: T.preview,
        children: h
      }), null != S ? (0, n.jsx)(d.S, {
        className: T.uploaderIcon
      }) : null]
    })
  })
}