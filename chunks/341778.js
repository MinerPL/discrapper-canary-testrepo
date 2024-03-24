"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("769846"),
  o = s("77078"),
  d = s("405645"),
  u = s("608684"),
  c = s("818643"),
  E = s("483093"),
  _ = s("159885"),
  I = s("782340"),
  T = s("93090");
let S = (0, _.cssValueToNumber)(r.default.ROLE_ICON_UPLOADER_ICON_SIZE);

function f(e) {
  let {
    role: t,
    "aria-label": s = I.default.Messages.UPLOAD_IMAGE,
    className: n,
    onClick: r,
    disabled: _ = !1
  } = e, f = l.useRef(null), m = l.useMemo(() => null != t ? (0, d.getRoleIconProps)(t, S) : null, [t]), N = null != m ? (0, a.jsx)(E.default, {
    enableTooltip: !1,
    className: T.icon,
    ...m
  }) : (0, a.jsx)(c.default, {
    className: T.icon
  });
  return (0, a.jsx)(o.FocusRing, {
    ringTarget: f,
    children: (0, a.jsxs)(o.Clickable, {
      "aria-label": s,
      className: i(T.container, n, {
        [T.disabled]: _
      }),
      onClick: _ ? void 0 : r,
      "aria-disabled": _,
      children: [(0, a.jsx)("div", {
        ref: f,
        className: T.preview,
        children: N
      }), null != m ? (0, a.jsx)(u.ImageUploaderIcon, {
        className: T.uploaderIcon
      }) : null]
    })
  })
}