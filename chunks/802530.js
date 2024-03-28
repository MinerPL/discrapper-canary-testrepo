"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("735250");
a("470079");
var n = a("481060"),
  s = a("808268"),
  i = a("689938"),
  d = a("419319");

function r(e) {
  e.stopPropagation()
}

function u(e) {
  let {
    onContextMenu: t
  } = e, a = i.default.Messages.MORE;
  return (0, l.jsx)("div", {
    onClick: r,
    onContextMenu: r,
    children: (0, l.jsx)(n.Tooltip, {
      text: a,
      hideOnClick: !0,
      children: e => {
        let {
          onMouseEnter: i,
          onMouseLeave: r,
          onClick: u
        } = e;
        return (0, l.jsx)(n.Button, {
          onMouseEnter: i,
          onMouseLeave: r,
          look: n.Button.Looks.BLANK,
          size: n.Button.Sizes.NONE,
          onClick: e => {
            null == u || u(), t(e)
          },
          "aria-label": a,
          className: d.overflowButton,
          children: (0, l.jsx)(s.default, {
            className: d.icon
          })
        })
      }
    })
  })
}