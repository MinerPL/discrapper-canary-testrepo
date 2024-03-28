"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("873546"),
  s = n("481060"),
  i = n("130402"),
  r = n("250690"),
  o = n("404975"),
  u = n("185923"),
  d = n("689938"),
  c = n("852376");

function f(e) {
  let {
    channel: t,
    message: n,
    togglePopout: f,
    renderEmojiPicker: h,
    shouldShow: m
  } = e;
  return (0, a.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: a
      } = e;
      return h(t, n, a, !1)
    },
    shouldShow: m,
    onRequestClose: f,
    position: l.isMobile ? "top" : "left",
    align: l.isMobile ? "center" : "top",
    children: (e, t) => {
      let {
        onClick: n,
        ...l
      } = e, {
        isShown: h
      } = t;
      return (0, a.jsx)(s.Tooltip, {
        disableTooltipPointerEvents: !1,
        text: d.default.Messages.ADD_REACTION,
        color: s.TooltipColors.PRIMARY,
        "aria-label": d.default.Messages.ADD_REACTION,
        hideOnClick: !0,
        tooltipClassName: c.tooltip,
        children: e => {
          let {
            onMouseEnter: t,
            onMouseLeave: n,
            onClick: s
          } = e;
          return (0, a.jsx)(o.Button, {
            onMouseEnter: () => {
              null == t || t(), (0, i.initiateEmojiInteraction)(u.EmojiInteractionPoint.MessageContextMenuMouseEntered)
            },
            onMouseLeave: n,
            onClick: () => {
              f(), null == s || s()
            },
            "aria-label": d.default.Messages.ADD_REACTION,
            selected: h,
            ...l,
            children: (0, a.jsx)(r.default, {
              className: c.icon
            })
          })
        }
      }, "add-reaction")
    }
  })
}