"use strict";
s.r(t), s("47120");
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("481060"),
  o = s("783014"),
  d = s("981631"),
  u = s("689938"),
  c = s("949669"),
  S = s("794711");
let E = 0,
  T = () => "notification-position-selector-".concat(E++),
  _ = e => {
    switch (e) {
      case d.OverlayNotificationPositions.TOP_LEFT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
      case d.OverlayNotificationPositions.TOP_RIGHT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
      case d.OverlayNotificationPositions.BOTTOM_LEFT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
      case d.OverlayNotificationPositions.BOTTOM_RIGHT:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
      default:
        return u.default.Messages.OVERLAY_NOTIFICATIONS_DISABLED
    }
  },
  f = [d.OverlayNotificationPositions.DISABLED, d.OverlayNotificationPositions.TOP_LEFT, d.OverlayNotificationPositions.TOP_RIGHT, d.OverlayNotificationPositions.BOTTOM_LEFT, d.OverlayNotificationPositions.BOTTOM_RIGHT];

function m(e) {
  let {
    position: t,
    onChange: s
  } = e, [l] = n.useState(() => T()), E = t === d.OverlayNotificationPositions.DISABLED ? u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : u.default.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
    position: _(t)
  });
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(r.FocusRing, {
      within: !0,
      offset: -2,
      children: (0, a.jsx)("div", {
        className: i()(c.wrapper, {
          [c.disabledSelected]: t === d.OverlayNotificationPositions.DISABLED
        }),
        children: f.map(e => (0, a.jsxs)("label", {
          className: i()({
            [c.selected]: e === t,
            [c.disabled]: e === d.OverlayNotificationPositions.DISABLED,
            [c.topRight]: e === d.OverlayNotificationPositions.TOP_RIGHT,
            [c.topLeft]: e === d.OverlayNotificationPositions.TOP_LEFT,
            [c.bottomRight]: e === d.OverlayNotificationPositions.BOTTOM_RIGHT,
            [c.bottomLeft]: e === d.OverlayNotificationPositions.BOTTOM_LEFT
          }),
          children: [_(e), e === d.OverlayNotificationPositions.DISABLED ? (0, a.jsx)(o.default, {
            className: c.disabledIcon
          }) : null, (0, a.jsx)("input", {
            type: "radio",
            name: l,
            value: e,
            onChange: t => s(t, e),
            className: c.hiddenInput
          })]
        }, e))
      })
    }), (0, a.jsx)(r.FormText, {
      type: r.FormTextTypes.DESCRIPTION,
      className: S.marginTop8,
      children: E
    })]
  })
}
m.Positions = d.OverlayNotificationPositions, t.default = m