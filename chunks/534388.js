"use strict";
n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(287734),
  a = n(835473),
  l = n(67212),
  u = n(493355),
  _ = n(134598),
  d = n(885110),
  c = n(366695),
  E = n(937482),
  I = n(689938),
  T = n(854706);

function h() {
  let e = (0, r.e7)([d.Z], () => d.Z.getBroadcast()),
    t = (0, a.q)(null == e ? void 0 : e.applicationId);
  if (null == e) return null;
  let n = () => {
      (0, _.X)()
    },
    h = () => {
      (0, l.b_)(), o.default.disconnect()
    };
  return (0, i.jsxs)("div", {
    className: T.container,
    children: [null != t && (0, i.jsx)(c.Z, {
      game: t,
      size: c.Z.Sizes.LARGE
    }), (0, i.jsxs)("div", {
      className: T.content,
      children: [(0, i.jsx)(s.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: I.Z.Messages.BROADCASTING_CAPTURE_PAUSED
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: I.Z.Messages.BROADCASTING_CAPTURE_PAUSED_DETAILS
      }), (0, i.jsxs)("div", {
        className: T.actions,
        children: [(0, i.jsx)(s.Tooltip, {
          text: I.Z.Messages.BROADCASTING_SETTINGS,
          children: e => (0, i.jsx)(s.Clickable, {
            ...e,
            onClick: n,
            children: (0, i.jsx)(E.Z, {
              className: T.button,
              width: 20,
              height: 20
            })
          })
        }), (0, i.jsx)(s.Tooltip, {
          text: I.Z.Messages.STOP_BROADCASTING,
          children: e => (0, i.jsx)(s.Clickable, {
            ...e,
            onClick: h,
            children: (0, i.jsx)(u.Z, {
              className: T.button,
              width: 20,
              height: 20
            })
          })
        })]
      })]
    })]
  })
}