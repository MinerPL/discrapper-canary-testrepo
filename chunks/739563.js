"use strict";
n(47120);
var i = n(735250),
  s = n(470079),
  l = n(120356),
  a = n.n(l),
  o = n(481060),
  r = n(783014),
  d = n(981631),
  c = n(689938),
  u = n(713265),
  h = n(611273);
let p = 0,
  f = () => "notification-position-selector-".concat(p++),
  E = e => {
    switch (e) {
      case d._vf.TOP_LEFT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
      case d._vf.TOP_RIGHT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
      case d._vf.BOTTOM_LEFT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
      case d._vf.BOTTOM_RIGHT:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
      default:
        return c.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED
    }
  },
  Z = [d._vf.DISABLED, d._vf.TOP_LEFT, d._vf.TOP_RIGHT, d._vf.BOTTOM_LEFT, d._vf.BOTTOM_RIGHT];

function g(e) {
  let {
    position: t,
    onChange: n
  } = e, [l] = s.useState(() => f()), p = t === d._vf.DISABLED ? c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
    position: E(t)
  });
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(o.FocusRing, {
      within: !0,
      offset: -2,
      children: (0, i.jsx)("div", {
        className: a()(u.wrapper, {
          [u.disabledSelected]: t === d._vf.DISABLED
        }),
        children: Z.map(e => (0, i.jsxs)("label", {
          className: a()({
            [u.selected]: e === t,
            [u.disabled]: e === d._vf.DISABLED,
            [u.topRight]: e === d._vf.TOP_RIGHT,
            [u.topLeft]: e === d._vf.TOP_LEFT,
            [u.bottomRight]: e === d._vf.BOTTOM_RIGHT,
            [u.bottomLeft]: e === d._vf.BOTTOM_LEFT
          }),
          children: [E(e), e === d._vf.DISABLED ? (0, i.jsx)(r.Z, {
            className: u.disabledIcon
          }) : null, (0, i.jsx)("input", {
            type: "radio",
            name: l,
            value: e,
            onChange: t => n(t, e),
            className: u.hiddenInput
          })]
        }, e))
      })
    }), (0, i.jsx)(o.FormText, {
      type: o.FormTextTypes.DESCRIPTION,
      className: h.marginTop8,
      children: p
    })]
  })
}
g.Positions = d._vf, t.Z = g