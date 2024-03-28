"use strict";
s.r(t), s.d(t, {
  XboxGamepadButton: function() {
    return u
  }
});
var n = s("735250");
s("470079");
var r = s("692547"),
  l = s("481060"),
  a = s("150787"),
  i = s("988826"),
  o = s("244130");
let c = {
  A: {
    Icon: a.default,
    color: r.default.unsafe_rawColors.PRIMARY_400.css
  },
  B: {
    Icon: i.default,
    color: r.default.unsafe_rawColors.RED_360.css
  }
};

function u(e) {
  let {
    type: t,
    text: s,
    style: a,
    onClick: i
  } = e, u = c[t];
  return (0, n.jsxs)(l.Clickable, {
    className: o.gamepadButtonContainer,
    style: null != i ? {
      cursor: "pointer"
    } : void 0,
    onClick: i,
    children: [(0, n.jsx)(u.Icon, {
      className: a,
      color: u.color,
      backgroundColor: r.default.unsafe_rawColors.PRIMARY_600.css
    }), (0, n.jsx)("div", {
      className: o.gamepadButtonText,
      children: s
    })]
  })
}