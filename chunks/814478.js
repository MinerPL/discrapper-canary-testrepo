"use strict";
s.r(t), s.d(t, {
  XboxGamepadButton: function() {
    return u
  }
});
var n = s("37983");
s("884691");
var r = s("669491"),
  l = s("77078"),
  a = s("958638"),
  i = s("44930"),
  o = s("363314");
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