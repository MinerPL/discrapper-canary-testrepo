"use strict";
A.r(t), A.d(t, {
  IconVariant: function() {
    return a
  },
  default: function() {
    return c
  }
}), A("222007");
var a, l, n = A("37983"),
  r = A("884691"),
  s = A("77078"),
  i = A("191814"),
  o = A("423487"),
  d = A("782340"),
  u = A("41387");
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
  } = e, [h, m] = r.useState(!1), p = async () => {
    m(!0);
    try {
      await g(), A()
    } finally {
      m(!1)
    }
  }, T = null != a ? a : d.default.Messages.GUILD_PRODUCT_SETTINGS_WARNING_MODAL_TITLE;
  return (0, n.jsxs)(s.ModalRoot, {
    className: u.container,
    size: s.ModalSize.DYNAMIC,
    transitionState: t,
    "aria-label": T,
    children: [(0, n.jsxs)(s.ModalContent, {
      className: u.content,
      children: [(0, n.jsxs)("div", {
        className: u.header,
        children: [(0, n.jsx)(o.default, {
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
        }), (0, n.jsx)(i.default, {
          size: 8,
          horizontal: !0
        }), (0, n.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: T
        })]
      }), (0, n.jsx)(i.default, {
        size: 12
      }), (0, n.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.body,
        children: l
      })]
    }), (0, n.jsxs)(s.ModalFooter, {
      children: [(0, n.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: p,
        submitting: h,
        children: c
      }), (0, n.jsx)(i.default, {
        size: 12,
        horizontal: !0
      }), null != f && (0, n.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.OUTLINED,
        onClick: A,
        children: f
      })]
    })]
  })
}