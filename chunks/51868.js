"use strict";
a.r(t), a.d(t, {
  IconVariant: function() {
    return e
  },
  default: function() {
    return h
  }
}), a("47120");
var e, i, o = a("735250"),
  r = a("470079"),
  s = a("481060"),
  l = a("682864"),
  c = a("759231"),
  d = a("689938"),
  u = a("897307");
(i = e || (e = {})).DANGER = "danger", i.WARNING = "warning";

function h(n) {
  let {
    transitionState: t,
    onClose: a,
    title: e,
    body: i,
    cta: h,
    closeLabel: x,
    onConfirm: N,
    iconVariant: _ = "warning"
  } = n, [f, g] = r.useState(!1), j = async () => {
    g(!0);
    try {
      await N(), a()
    } finally {
      g(!1)
    }
  }, m = null != e ? e : d.default.Messages.CREATE_POLL_MODAL_WARNING_MODAL_TITLE;
  return (0, o.jsxs)(s.ModalRoot, {
    className: u.__invalid_container,
    size: s.ModalSize.DYNAMIC,
    transitionState: t,
    "aria-label": m,
    children: [(0, o.jsxs)(s.ModalContent, {
      className: u.content,
      children: [(0, o.jsxs)("div", {
        className: u.header,
        children: [(0, o.jsx)(c.default, {
          width: 20,
          height: 20,
          className: function(n) {
            switch (n) {
              case "danger":
                return u.dangerIcon;
              case "warning":
                return u.warningIcon
            }
          }(_)
        }), (0, o.jsx)(l.default, {
          size: 8,
          horizontal: !0
        }), (0, o.jsx)(s.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: m
        })]
      }), (0, o.jsx)(l.default, {
        size: 12
      }), (0, o.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.__invalid_body,
        children: i
      })]
    }), (0, o.jsxs)(s.ModalFooter, {
      children: [(0, o.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: j,
        submitting: f,
        children: h
      }), (0, o.jsx)(l.default, {
        size: 12,
        horizontal: !0
      }), null != x && (0, o.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.OUTLINED,
        onClick: a,
        children: x
      })]
    })]
  })
}