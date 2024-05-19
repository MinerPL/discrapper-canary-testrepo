"use strict";
A.r(t), A.d(t, {
  IconVariant: function() {
    return a
  },
  default: function() {
    return c
  }
}), A("47120");
var a, l, s = A("735250"),
  n = A("470079"),
  r = A("481060"),
  i = A("682864"),
  o = A("759231"),
  d = A("689938"),
  u = A("164153");
(l = a || (a = {})).DANGER = "danger", l.WARNING = "warning";

function c(e) {
  let {
    transitionState: t,
    onClose: A,
    title: a,
    body: l,
    cta: c,
    closeLabel: f,
    onConfirm: g,
    iconVariant: C = "warning"
  } = e, [h, m] = n.useState(!1), T = async () => {
    m(!0);
    try {
      await g(), A()
    } finally {
      m(!1)
    }
  }, p = null != a ? a : d.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, s.jsxs)(r.ModalRoot, {
    className: u.__invalid_container,
    size: r.ModalSize.DYNAMIC,
    transitionState: t,
    "aria-label": p,
    children: [(0, s.jsxs)(r.ModalContent, {
      className: u.content,
      children: [(0, s.jsxs)("div", {
        className: u.header,
        children: [(0, s.jsx)(o.default, {
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return u.dangerIcon;
              case "warning":
                return u.warningIcon
            }
          }(C)
        }), (0, s.jsx)(i.default, {
          size: 8,
          horizontal: !0
        }), (0, s.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: p
        })]
      }), (0, s.jsx)(i.default, {
        size: 12
      }), (0, s.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.__invalid_body,
        children: l
      })]
    }), (0, s.jsxs)(r.ModalFooter, {
      children: [(0, s.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: T,
        submitting: h,
        children: c
      }), (0, s.jsx)(i.default, {
        size: 12,
        horizontal: !0
      }), null != f && (0, s.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.OUTLINED,
        onClick: A,
        children: f
      })]
    })]
  })
}