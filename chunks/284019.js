"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(481060),
  l = n(603368),
  u = n(843656);

function _(e) {
  let {
    themeColor: t,
    color: n,
    className: s,
    ..._
  } = e, d = (0, a.useToken)(a.tokens.colors.BG_SURFACE_OVERLAY), c = r.useMemo(() => (0, l.j1)(t, d.hex()), [t]);
  return (0, i.jsx)(a.Button, {
    ..._,
    style: c,
    className: o()(s, {
      [u.customButton]: null != c
    }),
    color: null != c ? a.Button.Colors.CUSTOM : n
  })
}